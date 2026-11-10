import{a as e,t}from"./rolldown-runtime-CNC7AqOf.js";import{n}from"./translate.ts-CvxvI-3D.js";import{t as r}from"./progress.ts--HJ3S4S5.js";import{a as i,d as a,f as o,i as s,n as c,o as l,r as u,s as d,t as f,u as p}from"./decorators-B_wqftM0.js";import{n as m,t as h}from"./query-Df4-SAIv.js";import{a as g,i as _,n as v,t as y}from"./external-links.ts-C0AAFWCZ.js";import{a as b,i as x,n as S,o as C,r as w}from"./Config.ts-CMTyoefP.js";import"./http.ts-BviJ__aV.js";import{a as T}from"./apiClient.ts-Cq1CcJP0.js";function E(e){return(t,n)=>{let{slot:r,selector:i}=e??{},a=`slot`+(r?`[name=${r}]`:`:not([name])`);return m(t,n,{get(){let t=(this.renderRoot?.querySelector(a))?.assignedElements(e)??[];return i===void 0?t:t.filter((e=>e.matches(i)))}})}}var D={Idle:`idle`,Loading:`loading`,Success:`success`,Error:`error`},O=a`
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
`,k=e=>{class t extends e{constructor(...e){super(...e),this.shortcut=null}get shortcutKeys(){let e=this.shortcut;if(typeof e==`string`&&e.trim().startsWith(`{`))try{e=JSON.parse(e)}catch{}return e?typeof e==`string`?{key:e,alt:!1,shift:!1}:{key:e.key,alt:e.alt??!1,shift:e.shift??!1}:null}get shortcutAriaKeys(){let e=this.shortcutKeys;return e?[/mac|iphone|ipad|ipod/i.test(navigator.platform)?`Meta`:`Control`,...e.alt?[`Alt`]:[],...e.shift?[`Shift`]:[],e.key.length===1?e.key.toUpperCase():e.key].join(`+`):null}}return r([c()],t.prototype,`shortcut`,void 0),t},A=a`
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
`;a`
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
`;var ee=a`
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
`,j={Neutral:`neutral`,Success:`success`,Warning:`warning`,Danger:`danger`,Info:`info`},te=Object.values(j),M=class{constructor(e,t={}){this.host=e,this.options=t,this.observer=new MutationObserver(()=>{this.options.onChange?.(),this.host.requestUpdate()}),e.addController(this)}hostConnected(){this.options.onChange?.(),this.observer.observe(this.host,{childList:!0,subtree:!0,characterData:this.options.characterData??!1,attributes:!0,attributeFilter:[`slot`,...this.options.attributeFilter??[]]})}hostDisconnected(){this.observer.disconnect()}};function ne(e,...t){return Array.from(e.children).some(e=>t.includes(e.slot))}var re=a`
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
`,ie=class extends u{constructor(){super(),this.alt=!1,this.shift=!1,this.os=`Unknown`,this.os=this.detectOS()}connectedCallback(){super.connectedCallback(),this.os===`Unknown`&&(this.os=this.detectOS())}detectOS(){let e=navigator.platform.toLowerCase();return e.includes(`mac`)||/iphone|ipad|ipod/.test(e)?`Mac`:e.includes(`win`)?`Windows`:e.includes(`linux`)?`Linux`:`Unknown`}modifierKeys(){return this.os===`Mac`?[...this.alt?[{label:`⌥`,name:`Option`}]:[],...this.shift?[{label:`⇧`,name:`Shift`}]:[],{label:`⌘`,name:`Command`}]:[`Ctrl`,...this.alt?[`Alt`]:[],...this.shift?[`Shift`]:[]].map(e=>({label:e,name:e}))}render(){return p`<span class="shortcut"
      >${this.modifierKeys().map(e=>e.label===e.name?p`<kbd class="shortcut__key">${e.label}</kbd>`:p`<kbd class="shortcut__key"
              ><span aria-hidden="true">${e.label}</span
              ><span class="cp-visually-hidden">${e.name}</span></kbd
            >`)}<kbd class="shortcut__key"><slot></slot></kbd
    ></span>`}};ie.styles=[re,a`
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
    `],r([c({type:Boolean})],ie.prototype,`alt`,void 0),r([c({type:Boolean})],ie.prototype,`shift`,void 0),r([c()],ie.prototype,`os`,void 0),customElements.get(`craft-shortcut`)||customElements.define(`craft-shortcut`,ie);var ae={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},oe=e=>(...t)=>({_$litDirective$:e,values:t}),se=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},ce=class extends se{constructor(e){if(super(e),this.it=i,e.type!==ae.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===i||e==null)return this._t=void 0,this.it=e;if(e===l)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};ce.directiveName=`unsafeHTML`,ce.resultType=1;var le=oe(ce),ue=class extends ce{};ue.directiveName=`unsafeSVG`,ue.resultType=2;var de=oe(ue),fe=new Map;async function pe(e,t){try{let n=await fetch(e,{mode:`cors`});if(!n.ok)return i;let r=document.createElement(`div`);r.innerHTML=await n.text();let a=r.firstElementChild;if(a?.tagName?.toLowerCase()!==`svg`)return i;if(a.setAttribute(`fill`,`currentColor`),a.setAttribute(`part`,`svg`),t){let e=a.getAttribute(`style`);a.setAttribute(`style`,e?`${e}; scale: -1 1`:`scale: -1 1`)}return p`${de(a.outerHTML)}`}catch{return i}}function me(e,t=`classic`,n=`regular`,r=`/vendor/craft/icons`){let i=`solid`,a=n,o=e.endsWith(`.svg`)?e.split(`.svg`)[0]:e;if(e.includes(`/`)){let[t,...n]=e.split(`/`);a=t??a,o=n.join(`/`)}return a===`thin`?i=`thin`:a===`light`?i=`light`:a===`regular`?i=`regular`:a===`solid`&&(i=`solid`),(t===`brands`||a===`brands`)&&(i=`brands`),(t===`custom-icons`||a===`custom-icons`)&&(i=`custom-icons`),`${r}/${i}/${o}.svg`}function he(e){return(t,n,r)=>{let a=e(t,n,r);if(a===null)return i;let{url:o,flip:s=!1}=typeof a==`string`?{url:a}:a,c=s?`${o}#flip`:o,l=fe.get(c);return l||(l=pe(o,s),fe.set(c,l)),l.then(e=>(e===i&&fe.delete(c),e))}}var ge=he(me);function _e(e){ge=e}function ve(e,t=`classic`,n=`regular`){return Promise.resolve(ge(e,t,n))}var ye=new WeakSet,be=class extends u{constructor(...e){super(...e),b(this,ye),this.appearance=`plain`,this._svg=i,this._hasSlottedContent=!1}connectedCallback(){super.connectedCallback(),this.appearance===`badge`&&!this.getAttribute(`data-color`)&&this.setAttribute(`data-color`,`warning`),this._hasSlottedContent=this.childElementCount>0}firstUpdated(){C(ye,this,Ce).call(this)}updated(e){super.updated(e),(e.has(`name`)||e.has(`family`)||e.has(`variant`))&&C(ye,this,Se).call(this),e.has(`label`)&&this.hasUpdated&&C(ye,this,Ce).call(this)}_handleSlotChange(e){let t=e.target;this._hasSlottedContent=t.assignedElements({flatten:!0}).length>0}render(){return p`
      <slot @slotchange=${this._handleSlotChange}></slot>
      ${this._hasSlottedContent?i:this._svg}
    `}static get styles(){return[a`
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
      `]}};function xe(){return this.name?{name:this.name,family:this.family??`classic`,variant:this.variant??`solid`}:null}async function Se(){let e=C(ye,this,xe).call(this);if(e===null){this._svg=i;return}let t;try{t=await ve(e.name,e.family,e.variant)}catch(e){console.error(e),t=i}let n=C(ye,this,xe).call(this);n!==null&&e.name===n.name&&e.family===n.family&&e.variant===n.variant&&(this._svg=t)}function Ce(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}r([c({reflect:!0})],be.prototype,`name`,void 0),r([c({reflect:!0})],be.prototype,`family`,void 0),r([c({reflect:!0})],be.prototype,`variant`,void 0),r([c()],be.prototype,`label`,void 0),r([c({reflect:!0})],be.prototype,`appearance`,void 0),r([f()],be.prototype,`_svg`,void 0),r([f()],be.prototype,`_hasSlottedContent`,void 0),customElements.get(`craft-icon`)||customElements.define(`craft-icon`,be);var we=class extends u{constructor(...e){super(...e),this.debug=!1}render(){return p`<slot></slot>`}};we.styles=a`
    :host(:not([debug])) {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
      white-space: nowrap;
    }
  `,r([c({type:Boolean,reflect:!0})],we.prototype,`debug`,void 0),customElements.get(`craft-visually-hidden`)||customElements.define(`craft-visually-hidden`,we);var N=oe(class extends se{constructor(e){if(super(e),e.type!==ae.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter((t=>e[t])).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter((e=>e!==``))));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return l}}),Te=a`
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
`,Ee=class extends u{constructor(...e){super(...e),this.visible=!0,this.label=``}show(){this.visible=!0,this.dispatchEvent(new CustomEvent(`craft-show`))}hide(){this.visible=!1,this.dispatchEvent(new CustomEvent(`craft-hide`))}focus(){this.wrapper?.focus()}render(){return p`
      <div
        tabindex="-1"
        class="${N({wrapper:!0,hidden:!this.visible})}"
      >
        <div class="spinner"></div>
        <span class="cp-visually-hidden"><slot>${this.label}</slot></span>
      </div>
    `}};Ee.styles=[re,Te],r([c({reflect:!0,type:Boolean})],Ee.prototype,`visible`,void 0),r([c()],Ee.prototype,`label`,void 0),r([h(`.wrapper`)],Ee.prototype,`wrapper`,void 0),customElements.get(`craft-spinner`)||customElements.define(`craft-spinner`,Ee);var De=`craft-action-menu, craft-popover`,Oe=`data-focus-key`;function ke(e){return!(e instanceof HTMLElement)||!e.isConnected||e===document.body||Ae(e,`[inert]`)||e.matches(`:disabled`)?!1:typeof e.checkVisibility==`function`?e.checkVisibility({visibilityProperty:!0}):!Ae(e,`[hidden]`)}function Ae(e,t){let n=e;for(;n;){let e=n.closest(t);if(e)return e;let r=n.getRootNode();n=r instanceof ShadowRoot?r.host:null}return null}function je(e){let t=e.anchor;if(t instanceof HTMLElement)return t;let n=t?.contextElement;if(n instanceof HTMLElement)return n;let r=e.getAttribute(`for`);if(r){let t=e.getRootNode();return typeof t.getElementById==`function`?t.getElementById(r):null}return e.querySelector(`:scope > [slot="invoker"]`)}function Me(e){let t=[],n=e,r=Ae(n,De);for(;r;)je(r)?.contains(n)||t.push(r),n=r,r=r.parentElement?Ae(r.parentElement,De):null;return t}function Ne(e){return Ae(e,`[data-focus-scope]`)?.getAttribute(`data-focus-scope`)??null}function Pe(e,t){let n=De.split(`, `).map(e=>`${e}[${Oe}]`).join(`, `);return[...document.querySelectorAll(n)].filter(n=>n.getAttribute(`data-focus-key`)===e&&Ne(n)===t)}function Fe(e){if(!e)return()=>null;let t=Me(e).map(e=>({menu:e,key:e.getAttribute(`data-focus-key`)||null,scopeKey:Ne(e)}));return()=>{if(ke(e))return e;for(let{menu:e}of t){let t=e.isConnected?je(e):null;if(ke(t))return t}for(let{key:e,scopeKey:n}of t)if(e!==null)for(let t of Pe(e,n)){let e=je(t);if(ke(e))return e}return null}}function Ie(e){if(typeof e!=`string`)return e;try{return JSON.parse(e)}catch{return null}}function Le(e,{trigger:t,sourceEvent:n}){let r={...e??{},...n?{sourceEvent:n}:{}};if(t){r.trigger=t;let e;Object.defineProperty(r,"returnFocus",{enumerable:!0,get:()=>e??=Fe(t)})}return r}async function Re(e,t={}){switch(e.type){case`clipboard`:await navigator.clipboard.writeText(e.value);break;case`http`:{if(e.confirm&&!confirm(e.confirm)||e.requireElevatedSession&&!await ze())return;let t=await fetch(e.url,{method:e.method||`POST`,headers:{"Content-Type":`application/json`,Accept:`application/json`},body:e.body?JSON.stringify(e.body):void 0}),n=await t.json().catch(()=>({}));if(!t.ok)throw Error(n.message??`Request failed`);for(let e of Array.isArray(n.messages)?n.messages:[])window.dispatchEvent(new CustomEvent(`craft-message`,{detail:e}));typeof n.redirect==`string`&&n.redirect&&Be(n.redirect);break}case`event`:if(e.confirm&&!confirm(e.confirm))return;window.dispatchEvent(new CustomEvent(e.name,{detail:Le(e.detail,t)}));break;case`download`:{if(e.confirm&&!confirm(e.confirm)||e.requireElevatedSession&&!await ze())return;if(e.method&&e.method!==`GET`){let t=await T.request({url:e.url,method:e.method,data:e.body,responseType:`blob`}),n=String(t.headers[`content-disposition`]??``),r=/filename\*?=(?:UTF-8'')?"?([^";]+)"?/i.exec(n),i=e.filename??(r?.[1]?decodeURIComponent(r[1]):`download`),a=URL.createObjectURL(t.data),o=document.createElement(`a`);o.href=a,o.download=i,document.body.appendChild(o),o.click(),o.remove(),URL.revokeObjectURL(a);break}let t=document.createElement(`a`);t.href=e.url,t.download=e.filename??``,t.click();break}default:throw Error(`Unknown action type: ${e.type}`)}}async function ze(){let e={};return window.dispatchEvent(new CustomEvent(`craft:require-elevated-session`,{detail:e})),e.confirmed??!0}function Be(e){window.dispatchEvent(new CustomEvent(`action:redirect`,{cancelable:!0,detail:{url:e}}))&&window.location.assign(e)}var Ve=e=>e??i,He=a`
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
`,Ue=[`a[href]`,`button`,`input`,`select`,`textarea`,`[tabindex]:not([tabindex="-1"])`,`craft-button`,`craft-action-item`,`craft-checkbox`,`craft-switch`].join(`, `),We=new WeakSet,Ge=class extends k(u){constructor(...e){super(...e),b(this,We),this.icon=null,this.iconColor=null,this.href=null,this.target=null,this.rel=null,this.disabled=!1,this.variant=j.Neutral,this.checked=!1,this.active=!1,this.current=!1,this.type=`button`,this.action=null,this.feedback=null,this.feedbackDuration=1e3,this.state=D.Idle,this.feedbackMessage=null,this._resetStateTimeout=null,this._blockDisabledClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this._hasNestedControl=!1,this._lightDom=new M(this,{onChange:()=>this._checkSuffixForControls()})}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,this._blockDisabledClick,{capture:!0}),this.addEventListener(`click`,this)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this._blockDisabledClick,{capture:!0}),this.removeEventListener(`click`,this),this._clearResetStateTimeout()}focus(e){let t=this.shadowRoot?.querySelector(`[part="control"]`);t?t.focus(e):super.focus(e)}_clearResetStateTimeout(){this._resetStateTimeout!==null&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=null)}setState(e,t={}){this.state=e,this.feedbackMessage=t.message??null,this.dispatchEvent(new CustomEvent(`craft-state-change`,{bubbles:!0,composed:!0,detail:{state:e,actionType:Ie(this.action)?.type,...t}}))}async handleEvent(e){if(this.disabled){e.preventDefault();return}let t=Ie(this.action);if(e.type===`click`&&t){t.type===`http`&&this.setState(D.Loading);try{await Re(t,{trigger:this,sourceEvent:e}),this.setState(D.Success,this.feedback?.success)}catch(e){this.setState(D.Error,{message:e.message,...this.feedback?.error||{}})}finally{this._clearResetStateTimeout(),this._resetStateTimeout=setTimeout(()=>{this._resetStateTimeout=null,this.setState(D.Idle)},this.feedbackDuration)}}}renderCheckbox(){return p`<span class="action-item__check">
      <slot name="checkmark">
        ${this.checked?p`<craft-icon name="check"></craft-icon>`:i}
      </slot>
    </span>`}renderIcon(){switch(this.state){case D.Loading:return p`<craft-spinner style="--size: 0.8em"></craft-spinner>`;case D.Success:return p`<craft-icon
          name="check"
          style="color: var(--c-color-success-on-normal)"
        ></craft-icon>`;case D.Error:return p`<craft-icon
          name="xmark-large"
          style="color: var(--c-color-danger-on-normal)"
        ></craft-icon>`;default:return p`
          <slot name="icon">
            ${this.icon?p`<craft-icon
                  name="${this.icon}"
                  style="${this.iconColor?`color: ${C(We,this,Ke).call(this,this.iconColor)}`:i}"
                ></craft-icon>`:i}
          </slot>
        `}}renderPrefix(){let e=!!this.querySelector(`[slot="icon"]`)||!!this.icon,t=!!this.querySelector(`[slot="prefix"]`);return p`
      ${this.type===`checkbox`?this.renderCheckbox():i}
      ${t?p`<slot name="prefix" part="prefix"></slot>`:i}
      ${e?p`<div class="action-item__icon">${this.renderIcon()}</div>`:i}
    `}_checkSuffixForControls(){this._hasNestedControl=Array.from(this.children).some(e=>e.slot===`suffix`&&e.matches(Ue))}renderBody(){return p`
      ${this.renderPrefix()}

      <span class="action-item__label">
        ${this.feedbackMessage?this.feedbackMessage:p`<slot></slot>`}
      </span>

      <span
        class="${N({"action-item__suffix":!0,"a11y-error":this._hasNestedControl})}"
      >
        <slot name="suffix"></slot>
        ${this.shortcutKeys?p`<craft-shortcut
              ?alt="${this.shortcutKeys.alt}"
              ?shift="${this.shortcutKeys.shift}"
              >${this.shortcutKeys.key}</craft-shortcut
            >`:i}
      </span>
    `}render(){let e=y(this.href,this.target);return this.href?p`
          <a
            part="control"
            class="${N({"action-item":!0,"action-item--checkbox":this.type===`checkbox`})}"
            href="${this.href}"
            aria-current="${this.current?`true`:i}"
            aria-disabled="${this.disabled?`true`:i}"
            aria-keyshortcuts="${this.shortcutAriaKeys??i}"
            target="${Ve(e??void 0)}"
            rel="${Ve(this.rel??(e===`_blank`?`noopener`:null)??void 0)}"
          >
            ${this.renderBody()}${!this.target&&e?p`<span class="cp-visually-hidden">${g()}</span>`:i}
          </a>
        `:p`
          <button
            type="button"
            part="control"
            class="${N({"action-item":!0,"action-item--checkbox":this.type===`checkbox`})}"
            aria-current="${this.current?`true`:i}"
            aria-keyshortcuts="${this.shortcutAriaKeys??i}"
            aria-disabled="${this.disabled?`true`:i}"
          >
            ${this.renderBody()}
          </button>
        `}};function Ke(e){return e.startsWith(`--`)?`var(${e}, currentColor)`:e===`black`||e===`white`?`var(--c-text-default)`:`var(--c-color-${e}-fill-loud, currentColor)`}Ge.styles=[A,ee,O,re,He],Ge.shadowRootOptions={...u.shadowRootOptions,delegatesFocus:!0},r([c()],Ge.prototype,`icon`,void 0),r([c({attribute:`icon-color`})],Ge.prototype,`iconColor`,void 0),r([c()],Ge.prototype,`href`,void 0),r([c()],Ge.prototype,`target`,void 0),r([c()],Ge.prototype,`rel`,void 0),r([c({type:Boolean})],Ge.prototype,`disabled`,void 0),r([c({reflect:!0})],Ge.prototype,`variant`,void 0),r([c({type:Boolean})],Ge.prototype,`checked`,void 0),r([c({type:Boolean,reflect:!0})],Ge.prototype,`active`,void 0),r([c({type:Boolean})],Ge.prototype,`current`,void 0),r([c()],Ge.prototype,`type`,void 0),r([c({type:Object})],Ge.prototype,`action`,void 0),r([c({type:Object})],Ge.prototype,`feedback`,void 0),r([c({type:Number,attribute:`feedback-duration`})],Ge.prototype,`feedbackDuration`,void 0),r([f()],Ge.prototype,`state`,void 0),r([f()],Ge.prototype,`feedbackMessage`,void 0),r([f()],Ge.prototype,`_hasNestedControl`,void 0),customElements.get(`craft-action-item`)||customElements.define(`craft-action-item`,Ge);var qe=!1,Je=!1;window.addEventListener(`keydown`,e=>{e.key===`Enter`&&(qe=!0)},!0),window.addEventListener(`keyup`,e=>{e.key===`Enter`&&(qe=!1)},!0),window.addEventListener(`blur`,()=>{qe=!1});function Ye(){if(!qe||Je)return;Je=!0;let e=()=>{Je=!1,window.removeEventListener(`keyup`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`blur`,e)},t=t=>{t.key===`Enter`&&(t.preventDefault(),t.stopImmediatePropagation(),e())},n=t=>{t.key===`Enter`&&!t.repeat&&e()};window.addEventListener(`keyup`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`blur`,e)}function Xe(e,...t){let n=e.relatedTarget;if(!(n instanceof Node))return!1;for(let e=n;e;e=Ze(e))if(t.includes(e))return!0;return!1}function Ze(e){let t=`assignedSlot`in e?e.assignedSlot:null;if(t)return t;let n=e.parentNode;return n instanceof ShadowRoot?n.host:n}var Qe=new WeakSet;function $e(e){Qe.add(e)}function et(e){return Qe.has(e)}var tt=new WeakMap;function nt(e){let t=!!e.open;t!==(tt.get(e)??!1)&&(tt.set(e,t),e.dispatchEvent(new CustomEvent(t?`craft-show`:`craft-hide`,{bubbles:!0,composed:!0})),e.updateComplete.then(()=>{!!e.open===t&&e.dispatchEvent(new CustomEvent(t?`craft-after-show`:`craft-after-hide`,{bubbles:!0,composed:!0}))}))}function rt(){return[{name:`computeStyles`,options:{gpuAcceleration:!1}},{name:`containingBlockCorrection`,enabled:!0,phase:`afterWrite`,fn:({state:e})=>{let t=e.elements.popper,n=parseFloat(t.style.left),r=parseFloat(t.style.top);if(Number.isNaN(n)||Number.isNaN(r))return;let i=t.getBoundingClientRect(),a=i.x-n,o=i.y-r;(a!==0||o!==0)&&(t.style.left=`${n-a}px`,t.style.top=`${r-o}px`)}}]}var it=typeof HTMLElement<`u`&&typeof HTMLElement.prototype.showPopover==`function`;function at(e){e.toggleAttribute(`data-open`,!0),it&&!e.matches(`:popover-open`)&&e.showPopover()}function ot(e){it&&e.matches(`:popover-open`)&&e.hidePopover(),e.removeAttribute(`data-open`)}function st(e){return[{name:`preventOverflow`,options:{padding:8}},{name:`flip`,options:{padding:16}},{name:`offset`,options:{offset:[0,e]}},{name:`arrow`,enabled:!1},...rt()]}var ct=a`
  .overlay-layer {
    position: fixed;
    inset: auto;
    z-index: var(--c-layer-popover, 9999);
    margin: 0;
    padding: 0;
    border: 0;
    background: none;
    color: inherit;
    overflow: visible;
    width: auto;
    height: auto;
  }

  .overlay-layer:not([data-open]) {
    display: none;
  }
`,lt=`bottom`,ut=`right`,dt=`left`,ft=`auto`,pt=[`top`,lt,ut,dt],mt=`start`,ht=`clippingParents`,gt=`viewport`,_t=`popper`,vt=`reference`,yt=pt.reduce(function(e,t){return e.concat([t+`-`+mt,t+`-end`])},[]),bt=[].concat(pt,[ft]).reduce(function(e,t){return e.concat([t,t+`-`+mt,t+`-end`])},[]),xt=[`beforeRead`,`read`,`afterRead`,`beforeMain`,`main`,`afterMain`,`beforeWrite`,`write`,`afterWrite`];function St(e){return e?(e.nodeName||``).toLowerCase():null}function Ct(e){if(e==null)return window;if(e.toString()!==`[object Window]`){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function wt(e){return e instanceof Ct(e).Element||e instanceof Element}function Tt(e){return e instanceof Ct(e).HTMLElement||e instanceof HTMLElement}function Et(e){return typeof ShadowRoot>`u`?!1:e instanceof Ct(e).ShadowRoot||e instanceof ShadowRoot}function Dt(e){var t=e.state;Object.keys(t.elements).forEach(function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},i=t.elements[e];!Tt(i)||!St(i)||(Object.assign(i.style,n),Object.keys(r).forEach(function(e){var t=r[e];t===!1?i.removeAttribute(e):i.setAttribute(e,t===!0?``:t)}))})}function Ot(e){var t=e.state,n={popper:{position:t.options.strategy,left:`0`,top:`0`,margin:`0`},arrow:{position:`absolute`},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(e){var r=t.elements[e],i=t.attributes[e]||{},a=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce(function(e,t){return e[t]=``,e},{});!Tt(r)||!St(r)||(Object.assign(r.style,a),Object.keys(i).forEach(function(e){r.removeAttribute(e)}))})}}var kt={name:`applyStyles`,enabled:!0,phase:`write`,fn:Dt,effect:Ot,requires:[`computeStyles`]};function At(e){return e.split(`-`)[0]}var jt=Math.max,Mt=Math.min,Nt=Math.round;function Pt(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(e){return e.brand+`/`+e.version}).join(` `):navigator.userAgent}function Ft(){return!/^((?!chrome|android).)*safari/i.test(Pt())}function It(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var r=e.getBoundingClientRect(),i=1,a=1;t&&Tt(e)&&(i=e.offsetWidth>0&&Nt(r.width)/e.offsetWidth||1,a=e.offsetHeight>0&&Nt(r.height)/e.offsetHeight||1);var o=(wt(e)?Ct(e):window).visualViewport,s=!Ft()&&n,c=(r.left+(s&&o?o.offsetLeft:0))/i,l=(r.top+(s&&o?o.offsetTop:0))/a,u=r.width/i,d=r.height/a;return{width:u,height:d,top:l,right:c+u,bottom:l+d,left:c,x:c,y:l}}function Lt(e){var t=It(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function Rt(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&Et(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function zt(e){return Ct(e).getComputedStyle(e)}function Bt(e){return[`table`,`td`,`th`].indexOf(St(e))>=0}function Vt(e){return((wt(e)?e.ownerDocument:e.document)||window.document).documentElement}function Ht(e){return St(e)===`html`?e:e.assignedSlot||e.parentNode||(Et(e)?e.host:null)||Vt(e)}function Ut(e){return!Tt(e)||zt(e).position===`fixed`?null:e.offsetParent}function Wt(e){var t=/firefox/i.test(Pt());if(/Trident/i.test(Pt())&&Tt(e)&&zt(e).position===`fixed`)return null;var n=Ht(e);for(Et(n)&&(n=n.host);Tt(n)&&[`html`,`body`].indexOf(St(n))<0;){var r=zt(n);if(r.transform!==`none`||r.perspective!==`none`||r.contain===`paint`||[`transform`,`perspective`].indexOf(r.willChange)!==-1||t&&r.willChange===`filter`||t&&r.filter&&r.filter!==`none`)return n;n=n.parentNode}return null}function Gt(e){for(var t=Ct(e),n=Ut(e);n&&Bt(n)&&zt(n).position===`static`;)n=Ut(n);return n&&(St(n)===`html`||St(n)===`body`&&zt(n).position===`static`)?t:n||Wt(e)||t}function Kt(e){return[`top`,`bottom`].indexOf(e)>=0?`x`:`y`}function qt(e,t,n){return jt(e,Mt(t,n))}function Jt(e,t,n){var r=qt(e,t,n);return r>n?n:r}function Yt(){return{top:0,right:0,bottom:0,left:0}}function Xt(e){return Object.assign({},Yt(),e)}function Zt(e,t){return t.reduce(function(t,n){return t[n]=e,t},{})}var Qt=function(e,t){return e=typeof e==`function`?e(Object.assign({},t.rects,{placement:t.placement})):e,Xt(typeof e==`number`?Zt(e,pt):e)};function $t(e){var t,n=e.state,r=e.name,i=e.options,a=n.elements.arrow,o=n.modifiersData.popperOffsets,s=At(n.placement),c=Kt(s),l=[`left`,`right`].indexOf(s)>=0?`height`:`width`;if(!(!a||!o)){var u=Qt(i.padding,n),d=Lt(a),f=c===`y`?`top`:dt,p=c===`y`?lt:ut,m=n.rects.reference[l]+n.rects.reference[c]-o[c]-n.rects.popper[l],h=o[c]-n.rects.reference[c],g=Gt(a),_=g?c===`y`?g.clientHeight||0:g.clientWidth||0:0,v=m/2-h/2,y=u[f],b=_-d[l]-u[p],x=_/2-d[l]/2+v,S=qt(y,x,b),C=c;n.modifiersData[r]=(t={},t[C]=S,t.centerOffset=S-x,t)}}function en(e){var t=e.state,n=e.options.element,r=n===void 0?`[data-popper-arrow]`:n;r!=null&&(typeof r==`string`&&(r=t.elements.popper.querySelector(r),!r)||Rt(t.elements.popper,r)&&(t.elements.arrow=r))}var tn={name:`arrow`,enabled:!0,phase:`main`,fn:$t,effect:en,requires:[`popperOffsets`],requiresIfExists:[`preventOverflow`]};function nn(e){return e.split(`-`)[1]}var rn={top:`auto`,right:`auto`,bottom:`auto`,left:`auto`};function an(e,t){var n=e.x,r=e.y,i=t.devicePixelRatio||1;return{x:Nt(n*i)/i||0,y:Nt(r*i)/i||0}}function on(e){var t,n=e.popper,r=e.popperRect,i=e.placement,a=e.variation,o=e.offsets,s=e.position,c=e.gpuAcceleration,l=e.adaptive,u=e.roundOffsets,d=e.isFixed,f=o.x,p=f===void 0?0:f,m=o.y,h=m===void 0?0:m,g=typeof u==`function`?u({x:p,y:h}):{x:p,y:h};p=g.x,h=g.y;var _=o.hasOwnProperty(`x`),v=o.hasOwnProperty(`y`),y=dt,b=`top`,x=window;if(l){var S=Gt(n),C=`clientHeight`,w=`clientWidth`;if(S===Ct(n)&&(S=Vt(n),zt(S).position!==`static`&&s===`absolute`&&(C=`scrollHeight`,w=`scrollWidth`)),S=S,i===`top`||(i===`left`||i===`right`)&&a===`end`){b=lt;var T=d&&S===x&&x.visualViewport?x.visualViewport.height:S[C];h-=T-r.height,h*=c?1:-1}if(i===`left`||(i===`top`||i===`bottom`)&&a===`end`){y=ut;var E=d&&S===x&&x.visualViewport?x.visualViewport.width:S[w];p-=E-r.width,p*=c?1:-1}}var D=Object.assign({position:s},l&&rn),O=u===!0?an({x:p,y:h},Ct(n)):{x:p,y:h};if(p=O.x,h=O.y,c){var k;return Object.assign({},D,(k={},k[b]=v?`0`:``,k[y]=_?`0`:``,k.transform=(x.devicePixelRatio||1)<=1?`translate(`+p+`px, `+h+`px)`:`translate3d(`+p+`px, `+h+`px, 0)`,k))}return Object.assign({},D,(t={},t[b]=v?h+`px`:``,t[y]=_?p+`px`:``,t.transform=``,t))}function sn(e){var t=e.state,n=e.options,r=n.gpuAcceleration,i=r===void 0||r,a=n.adaptive,o=a===void 0||a,s=n.roundOffsets,c=s===void 0||s,l={placement:At(t.placement),variation:nn(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:t.options.strategy===`fixed`};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,on(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o,roundOffsets:c})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,on(Object.assign({},l,{offsets:t.modifiersData.arrow,position:`absolute`,adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var cn={name:`computeStyles`,enabled:!0,phase:`beforeWrite`,fn:sn,data:{}},ln={passive:!0};function un(e){var t=e.state,n=e.instance,r=e.options,i=r.scroll,a=i===void 0||i,o=r.resize,s=o===void 0||o,c=Ct(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&l.forEach(function(e){e.addEventListener(`scroll`,n.update,ln)}),s&&c.addEventListener(`resize`,n.update,ln),function(){a&&l.forEach(function(e){e.removeEventListener(`scroll`,n.update,ln)}),s&&c.removeEventListener(`resize`,n.update,ln)}}var dn={name:`eventListeners`,enabled:!0,phase:`write`,fn:function(){},effect:un,data:{}},fn={left:`right`,right:`left`,bottom:`top`,top:`bottom`};function pn(e){return e.replace(/left|right|bottom|top/g,function(e){return fn[e]})}var mn={start:`end`,end:`start`};function hn(e){return e.replace(/start|end/g,function(e){return mn[e]})}function gn(e){var t=Ct(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function _n(e){return It(Vt(e)).left+gn(e).scrollLeft}function vn(e,t){var n=Ct(e),r=Vt(e),i=n.visualViewport,a=r.clientWidth,o=r.clientHeight,s=0,c=0;if(i){a=i.width,o=i.height;var l=Ft();(l||!l&&t===`fixed`)&&(s=i.offsetLeft,c=i.offsetTop)}return{width:a,height:o,x:s+_n(e),y:c}}function yn(e){var t=Vt(e),n=gn(e),r=e.ownerDocument?.body,i=jt(t.scrollWidth,t.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),a=jt(t.scrollHeight,t.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),o=-n.scrollLeft+_n(e),s=-n.scrollTop;return zt(r||t).direction===`rtl`&&(o+=jt(t.clientWidth,r?r.clientWidth:0)-i),{width:i,height:a,x:o,y:s}}function bn(e){var t=zt(e),n=t.overflow,r=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}function xn(e){return[`html`,`body`,`#document`].indexOf(St(e))>=0?e.ownerDocument.body:Tt(e)&&bn(e)?e:xn(Ht(e))}function Sn(e,t){t===void 0&&(t=[]);var n=xn(e),r=n===e.ownerDocument?.body,i=Ct(n),a=r?[i].concat(i.visualViewport||[],bn(n)?n:[]):n,o=t.concat(a);return r?o:o.concat(Sn(Ht(a)))}function Cn(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function wn(e,t){var n=It(e,!1,t===`fixed`);return n.top+=e.clientTop,n.left+=e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function Tn(e,t,n){return t===`viewport`?Cn(vn(e,n)):wt(t)?wn(t,n):Cn(yn(Vt(e)))}function En(e){var t=Sn(Ht(e)),n=[`absolute`,`fixed`].indexOf(zt(e).position)>=0&&Tt(e)?Gt(e):e;return wt(n)?t.filter(function(e){return wt(e)&&Rt(e,n)&&St(e)!==`body`}):[]}function Dn(e,t,n,r){var i=t===`clippingParents`?En(e):[].concat(t),a=[].concat(i,[n]),o=a[0],s=a.reduce(function(t,n){var i=Tn(e,n,r);return t.top=jt(i.top,t.top),t.right=Mt(i.right,t.right),t.bottom=Mt(i.bottom,t.bottom),t.left=jt(i.left,t.left),t},Tn(e,o,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function On(e){var t=e.reference,n=e.element,r=e.placement,i=r?At(r):null,a=r?nn(r):null,o=t.x+t.width/2-n.width/2,s=t.y+t.height/2-n.height/2,c;switch(i){case`top`:c={x:o,y:t.y-n.height};break;case lt:c={x:o,y:t.y+t.height};break;case ut:c={x:t.x+t.width,y:s};break;case dt:c={x:t.x-n.width,y:s};break;default:c={x:t.x,y:t.y}}var l=i?Kt(i):null;if(l!=null){var u=l===`y`?`height`:`width`;switch(a){case mt:c[l]=c[l]-(t[u]/2-n[u]/2);break;case`end`:c[l]=c[l]+(t[u]/2-n[u]/2);break;default:}}return c}function kn(e,t){t===void 0&&(t={});var n=t,r=n.placement,i=r===void 0?e.placement:r,a=n.strategy,o=a===void 0?e.strategy:a,s=n.boundary,c=s===void 0?ht:s,l=n.rootBoundary,u=l===void 0?gt:l,d=n.elementContext,f=d===void 0?_t:d,p=n.altBoundary,m=p!==void 0&&p,h=n.padding,g=h===void 0?0:h,_=Xt(typeof g==`number`?Zt(g,pt):g),v=f===`popper`?vt:_t,y=e.rects.popper,b=e.elements[m?v:f],x=Dn(wt(b)?b:b.contextElement||Vt(e.elements.popper),c,u,o),S=It(e.elements.reference),C=On({reference:S,element:y,strategy:`absolute`,placement:i}),w=Cn(Object.assign({},y,C)),T=f===`popper`?w:S,E={top:x.top-T.top+_.top,bottom:T.bottom-x.bottom+_.bottom,left:x.left-T.left+_.left,right:T.right-x.right+_.right},D=e.modifiersData.offset;if(f===`popper`&&D){var O=D[i];Object.keys(E).forEach(function(e){var t=[`right`,`bottom`].indexOf(e)>=0?1:-1,n=[`top`,`bottom`].indexOf(e)>=0?`y`:`x`;E[e]+=O[n]*t})}return E}function An(e,t){t===void 0&&(t={});var n=t,r=n.placement,i=n.boundary,a=n.rootBoundary,o=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,l=c===void 0?bt:c,u=nn(r),d=u?s?yt:yt.filter(function(e){return nn(e)===u}):pt,f=d.filter(function(e){return l.indexOf(e)>=0});f.length===0&&(f=d);var p=f.reduce(function(t,n){return t[n]=kn(e,{placement:n,boundary:i,rootBoundary:a,padding:o})[At(n)],t},{});return Object.keys(p).sort(function(e,t){return p[e]-p[t]})}function jn(e){if(At(e)===`auto`)return[];var t=pn(e);return[hn(e),t,hn(t)]}function Mn(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var i=n.mainAxis,a=i===void 0||i,o=n.altAxis,s=o===void 0||o,c=n.fallbackPlacements,l=n.padding,u=n.boundary,d=n.rootBoundary,f=n.altBoundary,p=n.flipVariations,m=p===void 0||p,h=n.allowedAutoPlacements,g=t.options.placement,_=At(g)===g,v=c||(_||!m?[pn(g)]:jn(g)),y=[g].concat(v).reduce(function(e,n){return e.concat(At(n)===`auto`?An(t,{placement:n,boundary:u,rootBoundary:d,padding:l,flipVariations:m,allowedAutoPlacements:h}):n)},[]),b=t.rects.reference,x=t.rects.popper,S=new Map,C=!0,w=y[0],T=0;T<y.length;T++){var E=y[T],D=At(E),O=nn(E)===mt,k=[`top`,lt].indexOf(D)>=0,A=k?`width`:`height`,ee=kn(t,{placement:E,boundary:u,rootBoundary:d,altBoundary:f,padding:l}),j=k?O?ut:dt:O?lt:`top`;b[A]>x[A]&&(j=pn(j));var te=pn(j),M=[];if(a&&M.push(ee[D]<=0),s&&M.push(ee[j]<=0,ee[te]<=0),M.every(function(e){return e})){w=E,C=!1;break}S.set(E,M)}if(C)for(var ne=m?3:1,re=function(e){var t=y.find(function(t){var n=S.get(t);if(n)return n.slice(0,e).every(function(e){return e})});if(t)return w=t,`break`},ie=ne;ie>0&&re(ie)!==`break`;ie--);t.placement!==w&&(t.modifiersData[r]._skip=!0,t.placement=w,t.reset=!0)}}var Nn={name:`flip`,enabled:!0,phase:`main`,fn:Mn,requiresIfExists:[`offset`],data:{_skip:!1}};function Pn(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Fn(e){return[`top`,ut,lt,dt].some(function(t){return e[t]>=0})}function In(e){var t=e.state,n=e.name,r=t.rects.reference,i=t.rects.popper,a=t.modifiersData.preventOverflow,o=kn(t,{elementContext:`reference`}),s=kn(t,{altBoundary:!0}),c=Pn(o,r),l=Pn(s,i,a),u=Fn(c),d=Fn(l);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:u,hasPopperEscaped:d},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":d})}var Ln={name:`hide`,enabled:!0,phase:`main`,requiresIfExists:[`preventOverflow`],fn:In};function Rn(e,t,n){var r=At(e),i=[`left`,`top`].indexOf(r)>=0?-1:1,a=typeof n==`function`?n(Object.assign({},t,{placement:e})):n,o=a[0],s=a[1];return o||=0,s=(s||0)*i,[`left`,`right`].indexOf(r)>=0?{x:s,y:o}:{x:o,y:s}}function zn(e){var t=e.state,n=e.options,r=e.name,i=n.offset,a=i===void 0?[0,0]:i,o=bt.reduce(function(e,n){return e[n]=Rn(n,t.rects,a),e},{}),s=o[t.placement],c=s.x,l=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=l),t.modifiersData[r]=o}var Bn={name:`offset`,enabled:!0,phase:`main`,requires:[`popperOffsets`],fn:zn};function Vn(e){var t=e.state,n=e.name;t.modifiersData[n]=On({reference:t.rects.reference,element:t.rects.popper,strategy:`absolute`,placement:t.placement})}var Hn={name:`popperOffsets`,enabled:!0,phase:`read`,fn:Vn,data:{}};function Un(e){return e===`x`?`y`:`x`}function Wn(e){var t=e.state,n=e.options,r=e.name,i=n.mainAxis,a=i===void 0||i,o=n.altAxis,s=o!==void 0&&o,c=n.boundary,l=n.rootBoundary,u=n.altBoundary,d=n.padding,f=n.tether,p=f===void 0||f,m=n.tetherOffset,h=m===void 0?0:m,g=kn(t,{boundary:c,rootBoundary:l,padding:d,altBoundary:u}),_=At(t.placement),v=nn(t.placement),y=!v,b=Kt(_),x=Un(b),S=t.modifiersData.popperOffsets,C=t.rects.reference,w=t.rects.popper,T=typeof h==`function`?h(Object.assign({},t.rects,{placement:t.placement})):h,E=typeof T==`number`?{mainAxis:T,altAxis:T}:Object.assign({mainAxis:0,altAxis:0},T),D=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,O={x:0,y:0};if(S){if(a){var k=b===`y`?`top`:dt,A=b===`y`?lt:ut,ee=b===`y`?`height`:`width`,j=S[b],te=j+g[k],M=j-g[A],ne=p?-w[ee]/2:0,re=v===`start`?C[ee]:w[ee],ie=v===`start`?-w[ee]:-C[ee],ae=t.elements.arrow,oe=p&&ae?Lt(ae):{width:0,height:0},se=t.modifiersData[`arrow#persistent`]?t.modifiersData[`arrow#persistent`].padding:Yt(),ce=se[k],le=se[A],ue=qt(0,C[ee],oe[ee]),de=y?C[ee]/2-ne-ue-ce-E.mainAxis:re-ue-ce-E.mainAxis,fe=y?-C[ee]/2+ne+ue+le+E.mainAxis:ie+ue+le+E.mainAxis,pe=t.elements.arrow&&Gt(t.elements.arrow),me=pe?b===`y`?pe.clientTop||0:pe.clientLeft||0:0,he=D?.[b]??0,ge=j+de-he-me,_e=j+fe-he,ve=qt(p?Mt(te,ge):te,j,p?jt(M,_e):M);S[b]=ve,O[b]=ve-j}if(s){var ye=b===`x`?`top`:dt,be=b===`x`?lt:ut,xe=S[x],Se=x===`y`?`height`:`width`,Ce=xe+g[ye],we=xe-g[be],N=[`top`,dt].indexOf(_)!==-1,Te=D?.[x]??0,Ee=N?Ce:xe-C[Se]-w[Se]-Te+E.altAxis,De=N?xe+C[Se]+w[Se]-Te-E.altAxis:we,Oe=p&&N?Jt(Ee,xe,De):qt(p?Ee:Ce,xe,p?De:we);S[x]=Oe,O[x]=Oe-xe}t.modifiersData[r]=O}}var Gn={name:`preventOverflow`,enabled:!0,phase:`main`,fn:Wn,requiresIfExists:[`offset`]};function Kn(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function qn(e){return e===Ct(e)||!Tt(e)?gn(e):Kn(e)}function Jn(e){var t=e.getBoundingClientRect(),n=Nt(t.width)/e.offsetWidth||1,r=Nt(t.height)/e.offsetHeight||1;return n!==1||r!==1}function Yn(e,t,n){n===void 0&&(n=!1);var r=Tt(t),i=Tt(t)&&Jn(t),a=Vt(t),o=It(e,i,n),s={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&((St(t)!==`body`||bn(a))&&(s=qn(t)),Tt(t)?(c=It(t,!0),c.x+=t.clientLeft,c.y+=t.clientTop):a&&(c.x=_n(a))),{x:o.left+s.scrollLeft-c.x,y:o.top+s.scrollTop-c.y,width:o.width,height:o.height}}function Xn(e){var t=new Map,n=new Set,r=[];e.forEach(function(e){t.set(e.name,e)});function i(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach(function(e){if(!n.has(e)){var r=t.get(e);r&&i(r)}}),r.push(e)}return e.forEach(function(e){n.has(e.name)||i(e)}),r}function Zn(e){var t=Xn(e);return xt.reduce(function(e,n){return e.concat(t.filter(function(e){return e.phase===n}))},[])}function Qn(e){var t;return function(){return t||=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})}),t}}function $n(e){var t=e.reduce(function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e},{});return Object.keys(t).map(function(e){return t[e]})}var er={placement:`bottom`,modifiers:[],strategy:`absolute`};function tr(){return![...arguments].some(function(e){return!(e&&typeof e.getBoundingClientRect==`function`)})}function nr(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,r=n===void 0?[]:n,i=t.defaultOptions,a=i===void 0?er:i;return function(e,t,n){n===void 0&&(n=a);var i={placement:`bottom`,orderedModifiers:[],options:Object.assign({},er,a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},o=[],s=!1,c={state:i,setOptions:function(n){var o=typeof n==`function`?n(i.options):n;u(),i.options=Object.assign({},a,i.options,o),i.scrollParents={reference:wt(e)?Sn(e):e.contextElement?Sn(e.contextElement):[],popper:Sn(t)};var s=Zn($n([].concat(r,i.options.modifiers)));return i.orderedModifiers=s.filter(function(e){return e.enabled}),l(),c.update()},forceUpdate:function(){if(!s){var e=i.elements,t=e.reference,n=e.popper;if(tr(t,n)){i.rects={reference:Yn(t,Gt(n),i.options.strategy===`fixed`),popper:Lt(n)},i.reset=!1,i.placement=i.options.placement,i.orderedModifiers.forEach(function(e){return i.modifiersData[e.name]=Object.assign({},e.data)});for(var r=0;r<i.orderedModifiers.length;r++){if(i.reset===!0){i.reset=!1,r=-1;continue}var a=i.orderedModifiers[r],o=a.fn,l=a.options,u=l===void 0?{}:l,d=a.name;typeof o==`function`&&(i=o({state:i,options:u,name:d,instance:c})||i)}}}},update:Qn(function(){return new Promise(function(e){c.forceUpdate(),e(i)})}),destroy:function(){u(),s=!0}};if(!tr(e,t))return c;c.setOptions(n).then(function(e){!s&&n.onFirstUpdate&&n.onFirstUpdate(e)});function l(){i.orderedModifiers.forEach(function(e){var t=e.name,n=e.options,r=n===void 0?{}:n,a=e.effect;if(typeof a==`function`){var s=a({state:i,name:t,instance:c,options:r});o.push(s||function(){})}})}function u(){o.forEach(function(e){return e()}),o=[]}return c}}var rr=nr({defaultModifiers:[dn,Hn,cn,kt,Bn,Nn,Gn,tn,Ln]}),ir=a`
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

  /* The positioned element is the one given the invoker's width, so the pane has
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
`,ar={name:`fitAvailableBlockSize`,enabled:!0,phase:`main`,requiresIfExists:[`offset`,`preventOverflow`,`flip`],fn:({state:e,instance:t})=>{let n=e.modifiersData.popperOffsets?.y??0,r=document.documentElement.clientHeight,i=e.placement.split(`-`)[0],a=Math.floor(i===`top`?n+e.rects.popper.height-16:i===`bottom`?r-16-n:r-32),o=e.elements.popper.style,s=`--_popover-available-block-size`,c=o.getPropertyValue(s);!r||a<=0?o.removeProperty(s):o.setProperty(s,`${a}px`),o.getPropertyValue(s)!==c&&t.update()}},or={name:`matchReferenceWidth`,enabled:!0,phase:`main`,fn:({state:e,instance:t})=>{let n=e.elements.popper.style,r=n.minWidth;n.minWidth=`${e.rects.reference.width}px`,n.minWidth!==r&&t.update()}},sr=new WeakMap,cr=new WeakMap,lr=new WeakMap,ur=new WeakMap,dr=new WeakMap,fr=new WeakMap,pr=new WeakMap,mr=new WeakMap,hr=new WeakMap,gr=new WeakMap,P=new WeakSet,_r=new WeakMap,vr=new WeakMap,yr=new WeakMap,br=new WeakMap,xr=new WeakMap,Sr=new WeakMap,Cr=new WeakMap,wr=new WeakMap,Tr=new WeakMap,Er=new WeakMap,Dr=class extends u{constructor(){super(),b(this,P),this.open=!1,this.placement=`bottom-start`,this.distance=4,this.matchInvokerWidth=!1,this.withoutInvokerAria=!1,this.manual=!1,w(this,sr,null),w(this,cr,null),w(this,lr,null),w(this,ur,!1),w(this,dr,!1),w(this,fr,!1),w(this,pr,!1),w(this,mr,!1),w(this,hr,e=>{!this.open||!(e.relatedTarget instanceof Node)||Xe(e,this,this.invoker)||C(P,this,Or).call(this,e.relatedTarget)||C(P,this,Fr).call(this,!1)}),w(this,gr,e=>{e.composedPath().includes(this)||x(hr,this).call(this,e)}),w(this,_r,()=>{let e=x(cr,this)?.node;this.manual||!e||e.disabled||e.getAttribute(`aria-disabled`)===`true`||C(P,this,Fr).call(this,!this.open)}),w(this,vr,!1),w(this,yr,e=>{e.key===`Escape`&&(S(vr,this,e.defaultPrevented),this.open&&e.preventDefault())}),w(this,br,e=>{if(!(e.key!==`Escape`||et(e))){if(x(vr,this)){S(vr,this,!1),$e(e);return}this.open&&($e(e),C(P,this,Fr).call(this,!1))}}),w(this,xr,e=>{e.stopPropagation(),C(P,this,Fr).call(this,!1)}),w(this,Sr,()=>{S(pr,this,!0)}),w(this,Cr,()=>{S(mr,this,!0)}),w(this,wr,()=>{setTimeout(()=>{!x(pr,this)&&!x(mr,this)&&C(P,this,Fr).call(this,!1),S(pr,this,!1),S(mr,this,!1)})}),w(this,Tr,()=>{setTimeout(()=>C(P,this,Fr).call(this,!1))}),w(this,Er,()=>{x(fr,this)&&this._syncInvoker()}),this.addEventListener(`keydown`,x(yr,this)),this.addEventListener(`focusout`,x(hr,this))}requestUpdate(e,t,n){super.requestUpdate(e,t,n),e===`open`&&nt(this)}get invoker(){if(this.anchor instanceof HTMLElement)return this.anchor;if(this.anchor?.contextElement instanceof HTMLElement)return this.anchor.contextElement;if(this.for){let e=this.getRootNode();return typeof e.getElementById==`function`?e.getElementById(this.for)??void 0:void 0}return Array.from(this.children).find(e=>e instanceof HTMLElement&&e.slot===`invoker`)}async show(){C(P,this,Fr).call(this,!0),await this.updateComplete}async hide(){C(P,this,Fr).call(this,!1),await this.updateComplete}reposition(){x(lr,this)?.update()}async toggle(){await(this.open?this.hide():this.show())}_setupOverlay(){}_teardownOverlay(){}_overlayShown(){}_syncInvoker(){let e=this.invoker??null;e===x(cr,this)?.node?C(P,this,Pr).call(this):(C(P,this,Mr).call(this),e&&(S(cr,this,{node:e,ariaExpanded:e.getAttribute(`aria-expanded`),ownsAria:!1}),e.addEventListener(`click`,x(_r,this)),e.addEventListener(`keyup`,x(br,this)),e.addEventListener(`focusout`,x(gr,this)),x(ur,this)&&C(P,this,Ir).call(this,e),C(P,this,Pr).call(this)));let t=kr.call(C(P,this));t?x(ur,this)?x(lr,this)?.state.elements.reference!==t&&C(P,this,Vr).call(this):x(dr,this)&&this.open&&C(P,this,Hr).call(this):x(ur,this)&&(C(P,this,Ur).call(this),S(dr,this,!0))}render(){return p`
      <slot name="invoker" @slotchange=${x(Er,this)}></slot>
      <slot name="backdrop"></slot>
      <!--
        Popper looks for the pane's containing block up its ancestors, and the
        shadow root ends that search. Nesting the positioned element below the
        layer keeps the search from leaving through the host and landing on a
        transformed ancestor the top layer has already escaped.
      -->
      <div
        class="overlay-layer"
        role="none"
        popover=${it?`manual`:i}
      >
        <div class="overlay-position">
          <div
            class="popover-pane"
            part="popup"
            @keyup=${x(br,this)}
            @close-overlay=${x(xr,this)}
          >
            <slot name="content">
              <slot name="content-body"></slot>
              <slot name="content-footer"></slot>
            </slot>
          </div>
        </div>
      </div>
    `}connectedCallback(){C(P,this,Kr).call(this),super.connectedCallback(),this.hasUpdated&&!x(fr,this)&&C(P,this,Gr).call(this)}disconnectedCallback(){super.disconnectedCallback(),C(P,this,Ur).call(this,{restoreFocus:!1}),this.updateComplete.then(()=>{if(this.isConnected){this._syncInvoker(),this.open&&C(P,this,Hr).call(this);return}this.open&&Ye(),C(P,this,Mr).call(this),this._teardownOverlay(),S(fr,this,!1)})}firstUpdated(e){super.firstUpdated(e),C(P,this,Gr).call(this)}updated(e){super.updated(e),x(fr,this)&&((e.has(`for`)||e.has(`anchor`))&&this._syncInvoker(),e.has(`withoutInvokerAria`)&&C(P,this,Pr).call(this),e.has(`open`)&&e.get(`open`)!==void 0&&(this.open?C(P,this,Hr).call(this):C(P,this,Ur).call(this)),x(lr,this)&&(e.has(`placement`)||e.has(`distance`)||e.has(`matchInvokerWidth`))&&(C(P,this,Br).call(this),x(lr,this).setOptions(C(P,this,zr).call(this))))}};function Or(e){if(!(e instanceof Element))return!1;let t=e.getRootNode();return(e.getAttribute(`aria-controls`)??``).split(/\s+/).filter(Boolean).some(e=>{let n=t.getElementById(e);return n!==null&&this.contains(n)})}function kr(){return this.anchor??this.invoker}function Ar(){return this.shadowRoot?.querySelector(`.overlay-layer`)??null}function jr(){return this.shadowRoot?.querySelector(`.overlay-position`)??null}function Mr(){if(!x(cr,this))return;let{node:e,ariaExpanded:t,ownsAria:n}=x(cr,this);e.removeEventListener(`click`,x(_r,this)),e.removeEventListener(`keyup`,x(br,this)),e.removeEventListener(`focusout`,x(gr,this)),C(P,this,Lr).call(this,e),n&&C(P,this,Nr).call(this,e,`aria-expanded`,t),S(cr,this,null)}function Nr(e,t,n){n===null?e.removeAttribute(t):e.setAttribute(t,n)}function Pr(){if(!x(cr,this))return;let e=x(cr,this);this.withoutInvokerAria?e.ownsAria&&=(C(P,this,Nr).call(this,e.node,`aria-expanded`,e.ariaExpanded),!1):(e.node.setAttribute(`aria-expanded`,String(x(ur,this))),e.ownsAria=!0)}function Fr(e){if(e===this.open)return;let t=new CustomEvent(e?`craft-before-show`:`craft-before-hide`,{cancelable:!0});this.dispatchEvent(t),!t.defaultPrevented&&(this.open=e)}function Ir(e){e.addEventListener(`mousedown`,x(Sr,this),!0),e.addEventListener(`mouseup`,x(Cr,this),!0)}function Lr(e){e.removeEventListener(`mousedown`,x(Sr,this),!0),e.removeEventListener(`mouseup`,x(Cr,this),!0)}function Rr(){let e=this.getRootNode().activeElement;if(!e)return!1;let t=this.invoker;return t&&(t===e||t.contains(e))?!1:e===this||this.contains(e)}function zr(){return{strategy:`fixed`,placement:this.placement,modifiers:[...st(this.distance),ar,...this.matchInvokerWidth?[or]:[]]}}function Br(){let e=jr.call(C(P,this)),t=kr.call(C(P,this));e&&(this.matchInvokerWidth&&t?(e.style.minWidth=`${t.getBoundingClientRect().width}px`,e.style.width=`auto`):(e.style.removeProperty(`min-width`),e.style.removeProperty(`width`)))}function Vr(){let e=jr.call(C(P,this)),t=kr.call(C(P,this));x(lr,this)?.destroy(),S(lr,this,null),e&&(C(P,this,Br).call(this),t&&(S(lr,this,rr(t,e,C(P,this,zr).call(this))),x(lr,this).forceUpdate()))}function Hr(){let e=Ar.call(C(P,this)),t=jr.call(C(P,this));!e||!t||x(ur,this)||!this.isConnected||(S(dr,this,!kr.call(C(P,this))),!x(dr,this)&&(at(e),S(ur,this,!0),C(P,this,Pr).call(this),C(P,this,Vr).call(this),C(P,this,Ir).call(this,t),x(cr,this)&&C(P,this,Ir).call(this,x(cr,this).node),document.documentElement.addEventListener(`mouseup`,x(wr,this),!0),window.addEventListener(`blur`,x(Tr,this)),this._overlayShown()))}function Ur({restoreFocus:e=!0}={}){let t=Ar.call(C(P,this)),n=jr.call(C(P,this));if(!t||!n||!x(ur,this))return;let r=e&&C(P,this,Rr).call(this);Ye(),ot(t),x(lr,this)?.destroy(),S(lr,this,null),S(ur,this,!1),C(P,this,Pr).call(this),C(P,this,Lr).call(this,n),x(cr,this)&&C(P,this,Lr).call(this,x(cr,this).node),document.documentElement.removeEventListener(`mouseup`,x(wr,this),!0),window.removeEventListener(`blur`,x(Tr,this)),S(pr,this,!1),S(mr,this,!1),r&&C(P,this,Wr).call(this)}function Wr(){if(ke(document.activeElement)&&!C(P,this,Rr).call(this))return;let e=this.invoker;e?.focus(),e?.scrollIntoView({block:`nearest`})}function Gr(){S(fr,this,!0),this._syncInvoker(),this._setupOverlay(),this.open&&C(P,this,Hr).call(this)}function Kr(){if(x(sr,this)?.isConnected)return;let e=Array.from(this.childNodes).filter(e=>e instanceof Element?e.slot===``:e instanceof Text&&e.data.trim()!==``);if(!e.length)return;let t=document.createElement(`div`);t.slot=`content`,t.append(...e),this.append(t),S(sr,this,t)}Dr.styles=[A,ct,ir],r([c({type:Boolean,reflect:!0})],Dr.prototype,`open`,void 0),r([c({reflect:!0})],Dr.prototype,`for`,void 0),r([c({attribute:!1})],Dr.prototype,`anchor`,void 0),r([c({reflect:!0})],Dr.prototype,`placement`,void 0),r([c({type:Number})],Dr.prototype,`distance`,void 0),r([c({attribute:`match-invoker-width`,type:Boolean,reflect:!0})],Dr.prototype,`matchInvokerWidth`,void 0),r([c({type:Boolean,attribute:`without-invoker-aria`,reflect:!0})],Dr.prototype,`withoutInvokerAria`,void 0),r([c({type:Boolean,reflect:!0})],Dr.prototype,`manual`,void 0),customElements.get(`craft-popover`)||customElements.define(`craft-popover`,Dr);var qr=a`
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
`,Jr=a`
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
`;a`
  ${qr}
  ${Jr}
`;var Yr=a`
  ${qr}
  width: 100%;
  height: 100%;
  appearance: none;
  padding-inline: var(--c-input-spacing-inline)
    calc(var(--c-input-spacing-inline) * 1.5 + 1em);
`,Xr=a`
  :host([invalid]) {
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
     (see FormControl and craft-field), so the spacing can be unconditional. */
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

  /* Tip/warning notices (see FormControl) */
  .field-notice {
    --c-callout-icon-padding-inline: 0;
    --c-callout-text-padding-inline: var(--c-spacing-sm) 0;
    padding: 0;
    margin-block-start: var(--c-spacing-xs, 0.25rem);
  }

  ::slotted([slot='after']) {
    margin-block-start: var(--c-spacing-sm);
  }
`,Zr=a`
  ${Xr}

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
    ${Jr}
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
`;function Qr(e=``){let t=Math.random().toString(36).slice(2,12);return e?`${e}-${t}`:t}var $r={Solid:`solid`,OutlineFill:`outline-fill`,Fill:`fill`,Outline:`outline`,Plain:`plain`};Object.values($r);var ei=[`sm`,`md`,`lg`,`xl`];function ti(e){if(e!=null&&e!==``){if(e===0||e===`0`||e===`none`)return`0`;if(ei.includes(e))return`var(--c-spacing-${e})`}}var ni=(e,{customProperty:t,defaultValue:n})=>{let i=Array.isArray(t)?t:[t];class a extends e{constructor(...e){super(...e),this.padding=n}get resolvedPadding(){return ti(this.padding)}get paddingStyles(){let e=this.resolvedPadding;return e===void 0?{}:Object.fromEntries(i.map(t=>[t,e]))}}return r([c()],a.prototype,`padding`,void 0),a},ri=`important`,ii=` !important`,ai=oe(class extends se{constructor(e){if(super(e),e.type!==ae.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`}),``)}update(e,[t]){let{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?n.removeProperty(e):n[e]=null);for(let e in t){let r=t[e];if(r!=null){this.ft.add(e);let t=typeof r==`string`&&r.endsWith(ii);e.includes(`-`)||t?n.setProperty(e,t?r.slice(0,-11):r,t?ri:``):n[e]=r}}return l}}),oi=a`
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
    /* The icon sits on the first line of text, whatever its font and size, as
       a slotted heading's can differ from the callout's. */
    align-items: first baseline;
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

  /* The icon shares a grid cell with a zero-width strut: one line of text in
     the first line's font, which the component copies onto it. The strut gives
     the column a baseline, which lines up with that first line, and the icon
     centers on the strut's line. */
  .callout__icon {
    display: grid;
    place-items: center;
    padding-inline: var(--c-callout-icon-padding-inline, var(--c-spacing-sm));
  }

  .callout__strut,
  .callout__icon > slot {
    grid-area: 1 / 1;
  }

  .callout__icon > slot {
    display: flex;
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
`,si=class extends ni(u,{customProperty:[`--_callout-padding-block`,`--_callout-padding-inline`]}){constructor(...e){super(...e),this.variant=j.Neutral,this.appearance=$r.OutlineFill,this.label=``,this.icon=null,this.hideIcon=!1,this.rounded=`all`,this.inline=!1,this.size=`auto`,this.resolvedIcon=null,this._lightDom=new M(this)}connectedCallback(){super.connectedCallback(),this._textObserver=new ResizeObserver(()=>this.syncFirstLineFont()),this.updateComplete.then(()=>{let e=this.renderRoot.querySelector(`.callout__text`);e&&this._textObserver?.observe(e)})}disconnectedCallback(){super.disconnectedCallback(),this._textObserver?.disconnect(),this._textObserver=void 0}updated(){this.syncFirstLineFont()}syncFirstLineFont(){let e=this.renderRoot.querySelector(`.callout__strut`);if(!e)return;let t=ci((this.renderRoot.querySelector(`slot[name="title"]`)??this.renderRoot.querySelector(`.callout__description slot`))?.assignedNodes({flatten:!0})??[]),n=t?.parentElement===this?t.assignedSlot:t?.parentElement,r=n?getComputedStyle(n):null;e.style.fontFamily=r?.fontFamily??``,e.style.fontSize=r?.fontSize??``,e.style.lineHeight=r?.lineHeight??``}willUpdate(){this.resolvedIcon=this.icon??this.getDefaultIcon()}getDefaultIcon(){switch(this.variant){case j.Info:return`lightbulb`;case j.Success:return`circle-check`;case j.Warning:return`circle-exclamation`;case j.Danger:return`triangle-exclamation`;default:return null}}render(){let e=this.label||ne(this,`title`),t=!this.hideIcon&&(!!this.resolvedIcon||ne(this,`icon`));return p`
      <div
        part="base"
        data-variant="${this.variant}"
        style="${ai(this.paddingStyles)}"
        class="${N({callout:!0,"callout--hide-icon":!t,"callout--small":this.size===`small`})}"
      >
        <div class="callout__body">
          ${t?p`<span class="callout__icon">
                <span class="callout__strut" aria-hidden="true">&#8203;</span>
                <slot name="icon">
                  ${this.resolvedIcon?p`<craft-icon
                        name="${this.resolvedIcon}"
                        style="font-size: 0.9em"
                      ></craft-icon>`:i}
                </slot>
              </span>`:i}
          <div class="callout__text">
            ${e?p`<div class="callout__title">
                  <slot name="title">${this.label}</slot>
                </div>`:i}

            <div class="callout__description">
              <slot></slot>
            </div>
          </div>
        </div>

        <div class="callout__action"><slot name="action"></slot></div>
      </div>
    `}};si.styles=[ee,oi],r([c({reflect:!0})],si.prototype,`variant`,void 0),r([c({reflect:!0})],si.prototype,`appearance`,void 0),r([c()],si.prototype,`label`,void 0),r([c()],si.prototype,`icon`,void 0),r([c({type:Boolean,attribute:`hide-icon`})],si.prototype,`hideIcon`,void 0),r([c({reflect:!0})],si.prototype,`rounded`,void 0),r([c({reflect:!0,type:Boolean})],si.prototype,`inline`,void 0),r([c()],si.prototype,`size`,void 0),r([f()],si.prototype,`resolvedIcon`,void 0);function ci(e){for(let t of e)if(t instanceof Text){if(t.data.trim())return t}else if(t instanceof Element){let e=ci(t.childNodes);if(e)return e}return null}customElements.get(`craft-callout`)||customElements.define(`craft-callout`,si);var li=class e{constructor(e,...t){this.host=e,this.presence=[],this.handleMutations=()=>{let e=this.snapshot();e.some((e,t)=>e!==this.presence[t])&&(this.presence=e,this.host.requestUpdate())},this.slotNames=t,e.addController(this)}test(t){return t===e.DEFAULT_SLOT?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.presence=this.snapshot(),this.observer??=new MutationObserver(this.handleMutations),this.observer.observe(this.host,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[`slot`],characterData:this.slotNames.includes(e.DEFAULT_SLOT)})}hostDisconnected(){this.observer?.disconnect()}hasDefaultSlot(){return Array.from(this.host.childNodes).some(e=>e.nodeType===Node.TEXT_NODE?e.textContent.trim()!==``:e.nodeType===Node.ELEMENT_NODE&&!e.slot)}hasNamedSlot(e){return Array.from(this.host.children).some(t=>t.slot===e)}snapshot(){return this.slotNames.map(e=>this.test(e))}};li.DEFAULT_SLOT=`[default]`;var ui=a`
  :host {
    display: block;
  }

  :host([hidden]) {
    display: none;
  }

  :host([disabled]),
  :host(:disabled) {
    pointer-events: none;
  }

  :host([disabled]) .form-field__label ::slotted(*),
  :host([disabled]) .form-field__help-text ::slotted(*),
  :host([disabled]) .input-group ::slotted([slot='input']),
  :host(:disabled) .form-field__label ::slotted(*),
  :host(:disabled) .form-field__help-text ::slotted(*),
  :host(:disabled) .input-group ::slotted([slot='input']) {
    color: var(--c-status-disabled-text);
  }

  :host([label-sr-only]) .form-field__label {
    position: absolute;
    inset-block-start: 0;
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

  .input-group__container {
    display: flex;
  }

  .input-group__input {
    flex: 1;
    display: flex;
  }

  .input-group__container > .input-group__input ::slotted(.form-control) {
    flex: 1 1 auto;
    margin: 0;
    font-size: 100%;
  }
`,di=[`prefix`,`suffix`,`before`,`after`],fi=[`tip`,`warning`],pi={labelledBy:[`addToAriaLabelledBy`,`removeFromAriaLabelledBy`],describedBy:[`addToAriaDescribedBy`,`removeFromAriaDescribedBy`]},mi=e=>{var t=new WeakMap,a=new WeakMap,o=new WeakMap,l=new WeakMap,u=new WeakMap,d=new WeakMap,f=new WeakMap,m=new WeakMap,h=new WeakMap,g=new WeakMap,_=new WeakMap,v=new WeakMap,y=new WeakMap,T=new WeakMap,E=new WeakMap,D=new WeakMap,O=new WeakMap,k=new WeakMap,A=new WeakSet,ee=new WeakMap,j=new WeakMap;class te extends e{constructor(...e){super(...e),b(this,A),this.labelSrOnly=!1,this.readOnly=!1,this.disabled=!1,this.labelledBy=null,this.describedBy=null,w(this,t,void 0),w(this,a,void 0),this._inputId=Qr(this.localName),w(this,o,[]),w(this,l,[]),w(this,u,void 0),w(this,d,new MutationObserver(()=>C(A,this,le).call(this))),w(this,f,new Map),w(this,m,new Set),w(this,h,new Map),w(this,g,!1),w(this,_,new li(this,`prefix`,`suffix`)),w(this,v,!1),w(this,y,!1),w(this,T,new Set),w(this,E,!1),w(this,D,new MutationObserver(()=>C(A,this,ae).call(this))),w(this,O,!1),w(this,k,{labelledBy:[],describedBy:[]}),w(this,ee,e=>{this._feedbackNode?.setAttribute(`aria-live`,e.type===`focusin`?`polite`:`assertive`)}),w(this,j,e=>{e.defaultPrevented||this._onLabelClick()})}get label(){return x(t,this)??this._labelNode?.textContent??``}set label(e){let n=this.label;S(t,this,e===null?``:e),this.requestUpdate(`label`,n)}get helpText(){return x(a,this)??this._helpTextNode?.textContent??``}set helpText(e){let t=this.helpText;S(a,this,e===null?``:e),this.requestUpdate(`helpText`,t)}get slots(){return{label:()=>{let e=document.createElement(`label`);return e.textContent=this.label,e},"help-text":()=>{let e=document.createElement(`div`);return e.textContent=this.helpText,e}}}get _control(){return C(A,this,M).call(this,`input`)}get _labelNode(){return C(A,this,M).call(this,`label`)}get _helpTextNode(){return C(A,this,M).call(this,`help-text`)}get _feedbackNode(){return C(A,this,M).call(this,`feedback`)}connectedCallback(){super.connectedCallback(),C(A,this,se).call(this),this._enhanceLightDomA11y(),x(d,this).observe(this,{childList:!0}),this._labelNode?.addEventListener(`click`,x(j,this)),this.addEventListener(`focusin`,x(ee,this)),this.addEventListener(`focusout`,x(ee,this)),C(A,this,ie).call(this),C(A,this,ae).call(this),C(A,this,oe).call(this,`labelledBy`),C(A,this,oe).call(this,`describedBy`)}disconnectedCallback(){super.disconnectedCallback(),x(D,this).disconnect(),S(O,this,!1),x(d,this).disconnect(),this._labelNode?.removeEventListener(`click`,x(j,this)),this.removeEventListener(`focusin`,x(ee,this)),this.removeEventListener(`focusout`,x(ee,this))}willUpdate(e){super.willUpdate(e),S(v,this,C(A,this,ne).call(this,this.label,`label`)),S(y,this,C(A,this,ne).call(this,this.helpText,`help-text`)),S(T,this,C(A,this,re).call(this))}updated(e){super.updated(e),C(A,this,ce).call(this),C(A,this,ie).call(this);for(let e of x(T,this)){let t=C(A,this,M).call(this,e);t&&this.renderRoot.querySelector(`slot[name="${e}"]`)&&this.addToAriaDescribedBy(t,{idPrefix:e})}for(let t of[`labelledBy`,`describedBy`])e.has(t)&&C(A,this,oe).call(this,t);e.has(`label`)&&x(t,this)!==void 0&&this._labelNode&&(this._labelNode.textContent=this.label),e.has(`helpText`)&&x(a,this)!==void 0&&this._helpTextNode&&(this._helpTextNode.textContent=this.helpText),this._reflectAriaReferences()}_onLabelClick(){this.disabled||this._control?.focus()}_enhanceLightDomA11y(){let{_control:e,_labelNode:t,_helpTextNode:n}=this;e?.classList.add(`form-control`),e&&(e.id||=this._inputId),t&&(t.setAttribute(`for`,e?.id??this._inputId),this.addToAriaLabelledBy(t,{idPrefix:`label`})),n&&this.addToAriaDescribedBy(n,{idPrefix:`help-text`}),C(A,this,le).call(this);for(let e of di){let t=C(A,this,M).call(this,e);t?.hasAttribute(`data-label`)&&this.addToAriaLabelledBy(t,{idPrefix:e}),t?.hasAttribute(`data-description`)&&this.addToAriaDescribedBy(t,{idPrefix:e})}}addToAriaLabelledBy(e,{idPrefix:t=``}={}){e.id||=Qr(`${t}-${this._inputId}`),x(o,this).includes(e)||(S(o,this,[...x(o,this),e]),this._reflectAriaReferences())}removeFromAriaLabelledBy(e){x(o,this).includes(e)&&(S(o,this,x(o,this).filter(t=>t!==e)),this._reflectAriaReferences())}addToAriaDescribedBy(e,{idPrefix:t=``}={}){e.id||=Qr(`${t}-${this._inputId}`),x(l,this).includes(e)||(S(l,this,[...x(l,this),e]),this._reflectAriaReferences())}removeFromAriaDescribedBy(e){x(l,this).includes(e)&&(S(l,this,x(l,this).filter(t=>t!==e)),this._reflectAriaReferences())}_reflectAriaReferences(){let e=this._control;if(!e)return;let t=(t,n)=>{let r=n.map(e=>e.id),i=x(f,this).get(t)??[],a=new Set([...(e.getAttribute(t)??``).split(/\s+/).filter(e=>e&&!i.includes(e)),...r]);x(f,this).set(t,r),a.size?e.setAttribute(t,[...a].join(` `)):i.length&&e.removeAttribute(t)},n=e=>e!==this._labelNode&&e!==this._helpTextNode||e.textContent.trim()!==``||e.childElementCount>0;t(`aria-labelledby`,x(o,this).filter(n)),t(`aria-describedby`,x(l,this).filter(n))}render(){return p`
        <div class="form-field__group-one">${this._groupOneTemplate()}</div>
        <div class="form-field__group-two">${this._groupTwoTemplate()}</div>
      `}_groupOneTemplate(){return p`${this._labelTemplate()} ${this._helpTextTemplate()}`}_groupTwoTemplate(){return p`${this._inputGroupTemplate()} ${this._feedbackTemplate()}`}_labelTemplate(){return S(E,this,!0),x(v,this)?p`
        <div class="form-field__label">
          <slot name="label"></slot>
        </div>
      `:i}_helpTextTemplate(){return S(E,this,!0),x(y,this)?p`
        <small class="form-field__help-text">
          <slot name="help-text"></slot>
        </small>
      `:i}_inputGroupTemplate(){return p`
        <div class="input-group">
          ${this._inputGroupBeforeTemplate()}
          <div class="input-group__container">
            ${this._inputGroupPrefixTemplate()}
            ${this._inputGroupInputTemplate()}
            ${this._inputGroupSuffixTemplate()}
          </div>
          ${this._inputGroupAfterTemplate()}
        </div>
      `}_inputGroupBeforeTemplate(){return p`
        <div class="input-group__before">
          <slot name="before"></slot>
        </div>
      `}_inputGroupPrefixTemplate(){return x(_,this).test(`prefix`)?p`
            <div class="input-group__prefix">
              <slot name="prefix"></slot>
            </div>
          `:i}_inputGroupInputTemplate(){return p`
        <div class="input-group__input">
          <slot name="input"></slot>
        </div>
      `}_inputGroupSuffixTemplate(){return x(_,this).test(`suffix`)?p`
            <div class="input-group__suffix">
              <slot name="suffix"></slot>
            </div>
          `:i}_inputGroupAfterTemplate(){return p`
        <div class="input-group__after">
          <slot name="after"></slot>
        </div>
      `}_feedbackTemplate(){return p`
        ${this._noticeTemplate(`tip`)} ${this._noticeTemplate(`warning`)}
        <div class="form-field__feedback">
          <slot name="feedback"></slot>
        </div>
      `}_noticeTemplate(e){if(S(E,this,!0),!x(T,this).has(e))return i;let t=e===`tip`;return p`
        <craft-callout
          class="field-notice"
          variant=${t?`info`:`warning`}
          appearance="plain"
          padding="none"
        >
          <craft-visually-hidden>
            ${n(t?`Tip:`:`Warning:`)}
          </craft-visually-hidden>
          <slot name=${e}></slot>
        </craft-callout>
      `}}function M(e){return this.querySelector(`:scope > [slot="${e}"]`)??void 0}function ne(e,t){return e.trim()!==``||(C(A,this,M).call(this,t)?.childElementCount??0)>0}function re(){return new Set(fi.filter(e=>C(A,this,M).call(this,e)))}function ie(){x(E,this)&&!x(O,this)&&this.isConnected&&(S(O,this,!0),x(D,this).observe(this,{childList:!0,subtree:!0,characterData:!0,attributeFilter:[`slot`]}),C(A,this,ae).call(this))}function ae(){if(!x(E,this))return;let e=C(A,this,re).call(this);(C(A,this,ne).call(this,this.label,`label`)!==x(v,this)||C(A,this,ne).call(this,this.helpText,`help-text`)!==x(y,this)||e.size!==x(T,this).size||[...e].some(e=>!x(T,this).has(e)))&&this.requestUpdate()}function oe(e){let[t,n]=pi[e],r=this.getRootNode();if(typeof r.getElementById!=`function`)return;let i=(this[e]??``).split(/\s+/).filter(Boolean).map(e=>r.getElementById(e)).filter(e=>e!==null);for(let t of x(k,this)[e])i.includes(t)||this[n](t);for(let e of i)this[t](e);x(k,this)[e]=i}function se(){if(x(g,this))return;S(g,this,!0);let e=this.slots;for(let t of Object.keys(e))C(A,this,M).call(this,t)&&x(m,this).add(t);for(let[t,n]of Object.entries(e)){if(x(m,this).has(t))continue;let e=n();if(e instanceof Node)e instanceof Element&&(e.slot=t),this.append(e);else if(e){let e=document.createComment(`slot:${t}`);this.append(e),x(h,this).set(t,e)}}C(A,this,ce).call(this)}function ce(){let e=this.slots;for(let[t,n]of x(h,this)){let r=e[t]?.();r&&!(r instanceof Node)&&s(r,this,{renderBefore:n,host:this})}}function le(){let e=this._feedbackNode;e!==x(u,this)&&(x(u,this)&&this.removeFromAriaDescribedBy(x(u,this)),e&&this.addToAriaDescribedBy(e,{idPrefix:`feedback`}),S(u,this,e))}return te.styles=[ui],r([c()],te.prototype,`label`,null),r([c({attribute:`help-text`})],te.prototype,`helpText`,null),r([c({type:Boolean,attribute:`label-sr-only`,reflect:!0})],te.prototype,`labelSrOnly`,void 0),r([c({type:Boolean,attribute:`readonly`,reflect:!0})],te.prototype,`readOnly`,void 0),r([c({type:Boolean,reflect:!0})],te.prototype,`disabled`,void 0),r([c({attribute:`labelled-by`})],te.prototype,`labelledBy`,void 0),r([c({attribute:`described-by`})],te.prototype,`describedBy`,void 0),te},hi=e=>{var t=new WeakMap,n=new WeakMap,i=new WeakSet,a=new WeakMap,o=new WeakMap,s=new WeakMap,l=new WeakMap,u=new WeakMap;class d extends mi(e){constructor(...e){super(...e),b(this,i),this.required=!1,this.autofocus=!1,this.invalid=!1,w(this,t,void 0),w(this,n,!1),w(this,a,void 0),w(this,o,()=>{this.requestUpdate(`value`)}),w(this,s,e=>{e.target===this._control?.form&&setTimeout(()=>{e.defaultPrevented||this.requestUpdate(`value`)})}),w(this,l,e=>{e.target===this._control&&this.toggleAttribute(`focused-visible`,this._control.matches(`:focus-visible`))}),w(this,u,e=>{e.target===this._control&&this.removeAttribute(`focused-visible`)})}get _control(){return super._control}get value(){let e=this._control;return e&&this.isConnected?e.value:x(t,this)??e?.value??``}set value(e){let n=this.value,r=this._control;!r||!this.isConnected?S(t,this,e):r.value!==e&&C(i,this,f).call(this,r,e),this.requestUpdate(`value`,n)}connectedCallback(){super.connectedCallback(),x(t,this)!==void 0&&this._control&&(this._control.value=x(t,this),S(t,this,void 0)),this.addEventListener(`input`,x(o,this)),this.addEventListener(`focusin`,x(l,this)),this.addEventListener(`focusout`,x(u,this)),S(a,this,this.getRootNode()),x(a,this).addEventListener(`reset`,x(s,this),!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`input`,x(o,this)),this.removeEventListener(`focusin`,x(l,this)),this.removeEventListener(`focusout`,x(u,this)),x(a,this)?.removeEventListener(`reset`,x(s,this),!0),S(a,this,void 0)}focus(e){this._control?.focus(e)}blur(){this._control?.blur()}updated(e){super.updated(e),this._pushToControl(e)}_pushToControl(e){let t=this._control;if(!t)return;let r=!x(n,this);S(n,this,!0);let i=(t,n)=>e.has(t)&&!(r&&(n===void 0||n===``||n===!1));i(`name`,this.name)&&(t.name=this.name??``),i(`placeholder`,this.placeholder)&&!(t instanceof HTMLSelectElement)&&(t.placeholder=this.placeholder??``),i(`autocomplete`,this.autocomplete)&&t.setAttribute(`autocomplete`,this.autocomplete??``),i(`required`,this.required)&&(this.required?t.setAttribute(`aria-required`,`true`):t.removeAttribute(`aria-required`)),i(`autofocus`,this.autofocus)&&(t.autofocus=this.autofocus),i(`disabled`,this.disabled)&&(t.disabled=this.disabled),i(`readOnly`,this.readOnly)&&!(t instanceof HTMLSelectElement)&&(t.readOnly=this.readOnly),i(`invalid`,this.invalid)&&(this.invalid?t.setAttribute(`aria-invalid`,`true`):t.removeAttribute(`aria-invalid`))}}function f(e,t){if(e.matches(`:focus`)&&!(e instanceof HTMLSelectElement)&&e.selectionStart!==null)try{let n=e.selectionStart;e.value=t,e.selectionStart=n,e.selectionEnd=n;return}catch{}e.value=t}return r([c({reflect:!0})],d.prototype,`name`,void 0),r([c()],d.prototype,`placeholder`,void 0),r([c()],d.prototype,`autocomplete`,void 0),r([c({type:Boolean})],d.prototype,`required`,void 0),r([c({type:Boolean})],d.prototype,`autofocus`,void 0),r([c({type:Boolean,reflect:!0})],d.prototype,`invalid`,void 0),r([c({attribute:!1})],d.prototype,`value`,null),d},gi=a`
  ::slotted(.form-control) {
    ${qr}
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
`,F=class extends hi(u){constructor(...e){super(...e),this.size=`medium`,this.inputMode=``,this.autoCorrect=!0,this.autoCapitalize=!0,this.small=!1,this.center=!1,this.monospace=!1,this.inlineSuffix=!1,this.hiddenInput=!1}get slots(){return{...super.slots,input:()=>{let e=document.createElement(`input`),t=this.getAttribute(`value`);return e.type=this.type??`text`,this.syncNativeAttributes(e),t&&e.setAttribute(`value`,t),e}}}get _control(){return super._control}connectedCallback(){super.connectedCallback(),this.syncNativeAttributes()}_pushToControl(e){super._pushToControl(e),e.has(`type`)&&this.type&&this._control&&(this._control.type=this.type)}updated(e){super.updated(e),(e.has(`inputSize`)||e.has(`maxlength`)||e.has(`width`)||e.has(`min`)||e.has(`max`)||e.has(`step`)||e.has(`inputMode`)||e.has(`autoCorrect`)||e.has(`autoCapitalize`))&&this.syncNativeAttributes()}get maxlengthSize(){return this.maxlength&&this.maxlength>0&&this.width!==`full`?this.maxlength:void 0}syncNativeAttributes(e=this._control){let t={size:this.inputSize??this.maxlengthSize,maxlength:this.maxlength&&this.maxlength>0?this.maxlength:void 0,min:this.min,max:this.max,step:this.step,inputmode:this.inputMode,autocorrect:this.autoCorrect?void 0:`off`,autocapitalize:this.autoCapitalize?void 0:`none`};for(let[n,r]of Object.entries(t)){if(r===void 0){e?.removeAttribute(n);continue}e?.setAttribute(n,String(r))}}};F.styles=[ui,Zr,gi],r([c({reflect:!0})],F.prototype,`type`,void 0),r([c({type:Number,reflect:!0})],F.prototype,`maxlength`,void 0),r([c({type:String,reflect:!0})],F.prototype,`size`,void 0),r([c({type:Number,attribute:!1})],F.prototype,`inputSize`,void 0),r([c({attribute:!1})],F.prototype,`min`,void 0),r([c({attribute:!1})],F.prototype,`max`,void 0),r([c({attribute:!1})],F.prototype,`step`,void 0),r([c({attribute:!1})],F.prototype,`inputMode`,void 0),r([c({attribute:!1})],F.prototype,`autoCorrect`,void 0),r([c({attribute:!1})],F.prototype,`autoCapitalize`,void 0),r([c({reflect:!0,type:Boolean})],F.prototype,`small`,void 0),r([c({type:String,reflect:!0})],F.prototype,`width`,void 0),r([c({reflect:!0,type:Boolean})],F.prototype,`center`,void 0),r([c({reflect:!0,type:Boolean})],F.prototype,`monospace`,void 0),r([c({reflect:!0,type:Boolean,attribute:`inline-suffix`})],F.prototype,`inlineSuffix`,void 0),r([c({reflect:!0,type:Boolean,attribute:`hidden-input`})],F.prototype,`hiddenInput`,void 0),customElements.get(`craft-input`)||customElements.define(`craft-input`,F);var _i=a`
  @supports (text-box: trim-both cap alphabetic) {
    text-box: trim-both cap alphabetic;
    padding-block: calc((1lh - 1cap) / 2);
  }
`,vi=a`
  :host {
    position: relative;
    display: inline-flex;
    box-sizing: border-box;
    vertical-align: middle;
    line-height: 24px;
    outline: none;
    user-select: none;
  }

  /* A minimum hit area around the button (WCAG 2.5.5). */
  :host::before {
    content: '';
    position: absolute;
    /* Physical on purpose: paired with the translate below to center it. */
    /* stylelint-disable liberty/use-logical-spec */
    top: 50%;
    left: 50%;
    /* stylelint-enable liberty/use-logical-spec */
    transform: translate(-50%, -50%);
    min-height: 44px;
    min-width: 44px;
    width: 100%;
    height: 100%;
  }

  :host([hidden]) {
    display: none;
  }

  :host([disabled]) {
    pointer-events: none;
  }

  /* Its own rule: a browser without :state() drops the whole selector list. */
  :host(:state(fieldset-disabled)) {
    pointer-events: none;
  }

  .button-content {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,yi=a`
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
      /* No minimum-target sizer around a text link. */
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

  /* Muted rather than recolored, so each variant keeps its own look. */
  :host([disabled]) {
    opacity: 0.5;
    user-select: none;
  }

  :host(:state(fieldset-disabled)) {
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

    /* The host's minimum-target sizer is positioned, so it paints above
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

    /* Same minimum click area as the host's :host::before (WCAG 2.5.5), but as
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
    ${_i}
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
`,bi=Object.prototype.toString;function xi(e){return typeof e==`function`||bi.call(e)===`[object Function]`}function Si(e){var t=Number(e);return isNaN(t)?0:t===0||!isFinite(t)?t:(t>0?1:-1)*Math.floor(Math.abs(t))}var Ci=2**53-1;function wi(e){var t=Si(e);return Math.min(Math.max(t,0),Ci)}function Ti(e,t){var n=Array,r=Object(e);if(e==null)throw TypeError(`Array.from requires an array-like object - not null or undefined`);if(t!==void 0&&!xi(t))throw TypeError(`Array.from: when provided, the second argument must be a function`);for(var i=wi(r.length),a=xi(n)?Object(new n(i)):Array(i),o=0,s;o<i;)s=r[o],t?a[o]=t(s,o):a[o]=s,o+=1;return a.length=i,a}function Ei(e){"@babel/helpers - typeof";return Ei=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Ei(e)}function Di(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function Oi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,ji(r.key),r)}}function ki(e,t,n){return t&&Oi(e.prototype,t),n&&Oi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ai(e,t,n){return t=ji(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ji(e){var t=Mi(e,`string`);return Ei(t)==`symbol`?t:t+``}function Mi(e,t){if(Ei(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(Ei(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var Ni=typeof Set>`u`?Set:function(){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];Di(this,e),Ai(this,`items`,void 0),this.items=t}return ki(e,[{key:`add`,value:function(e){return this.has(e)===!1&&this.items.push(e),this}},{key:`clear`,value:function(){this.items=[]}},{key:`delete`,value:function(e){var t=this.items.length;return this.items=this.items.filter(function(t){return t!==e}),t!==this.items.length}},{key:`forEach`,value:function(e){var t=this;this.items.forEach(function(n){e(n,n,t)})}},{key:`has`,value:function(e){return this.items.indexOf(e)!==-1}},{key:`size`,get:function(){return this.items.length}}])}();function Pi(e){return e.localName??e.tagName.toLowerCase()}var Fi={article:`article`,aside:`complementary`,button:`button`,datalist:`listbox`,dd:`definition`,details:`group`,dialog:`dialog`,dt:`term`,fieldset:`group`,figure:`figure`,form:`form`,footer:`contentinfo`,h1:`heading`,h2:`heading`,h3:`heading`,h4:`heading`,h5:`heading`,h6:`heading`,header:`banner`,hr:`separator`,html:`document`,legend:`legend`,li:`listitem`,math:`math`,main:`main`,menu:`list`,nav:`navigation`,ol:`list`,optgroup:`group`,option:`option`,output:`status`,progress:`progressbar`,section:`region`,summary:`button`,table:`table`,tbody:`rowgroup`,textarea:`textbox`,tfoot:`rowgroup`,td:`cell`,th:`columnheader`,thead:`rowgroup`,tr:`row`,ul:`list`},Ii={caption:new Set([`aria-label`,`aria-labelledby`]),code:new Set([`aria-label`,`aria-labelledby`]),deletion:new Set([`aria-label`,`aria-labelledby`]),emphasis:new Set([`aria-label`,`aria-labelledby`]),generic:new Set([`aria-label`,`aria-labelledby`,`aria-roledescription`]),insertion:new Set([`aria-label`,`aria-labelledby`]),none:new Set([`aria-label`,`aria-labelledby`]),paragraph:new Set([`aria-label`,`aria-labelledby`]),presentation:new Set([`aria-label`,`aria-labelledby`]),strong:new Set([`aria-label`,`aria-labelledby`]),subscript:new Set([`aria-label`,`aria-labelledby`]),superscript:new Set([`aria-label`,`aria-labelledby`])};function Li(e,t){return[`aria-atomic`,`aria-busy`,`aria-controls`,`aria-current`,`aria-description`,`aria-describedby`,`aria-details`,`aria-dropeffect`,`aria-flowto`,`aria-grabbed`,`aria-hidden`,`aria-keyshortcuts`,`aria-label`,`aria-labelledby`,`aria-live`,`aria-owns`,`aria-relevant`,`aria-roledescription`].some(function(n){var r;return e.hasAttribute(n)&&!((r=Ii[t])!=null&&r.has(n))})}function Ri(e,t){return Li(e,t)}function zi(e){var t=Vi(e);if(t===null||Hi.indexOf(t)!==-1){var n=Bi(e);if(Hi.indexOf(t||``)===-1||Ri(e,n||``))return n}return t}function Bi(e){var t=Fi[Pi(e)];if(t!==void 0)return t;switch(Pi(e)){case`a`:case`area`:case`link`:if(e.hasAttribute(`href`))return`link`;break;case`img`:return e.getAttribute(`alt`)===``&&!Ri(e,`img`)?`presentation`:`img`;case`input`:var n=e.type;switch(n){case`button`:case`image`:case`reset`:case`submit`:return`button`;case`checkbox`:case`radio`:return n;case`range`:return`slider`;case`email`:case`tel`:case`text`:case`url`:return e.hasAttribute(`list`)?`combobox`:`textbox`;case`search`:return e.hasAttribute(`list`)?`combobox`:`searchbox`;case`number`:return`spinbutton`;default:return null}case`select`:return e.hasAttribute(`multiple`)||e.size>1?`listbox`:`combobox`}return null}function Vi(e){var t=e.getAttribute(`role`);if(t!==null){var n=t.trim().split(` `)[0];if(n.length>0)return n}return null}var Hi=[`presentation`,`none`];function I(e){return e!==null&&e.nodeType===e.ELEMENT_NODE}function Ui(e){return I(e)&&Pi(e)===`caption`}function Wi(e){return I(e)&&Pi(e)===`input`}function Gi(e){return I(e)&&Pi(e)===`optgroup`}function Ki(e){return I(e)&&Pi(e)===`select`}function qi(e){return I(e)&&Pi(e)===`table`}function Ji(e){return I(e)&&Pi(e)===`textarea`}function Yi(e){var t=(e.ownerDocument===null?e:e.ownerDocument).defaultView;if(t===null)throw TypeError(`no window available`);return t}function Xi(e){return I(e)&&Pi(e)===`fieldset`}function Zi(e){return I(e)&&Pi(e)===`legend`}function Qi(e){return I(e)&&Pi(e)===`slot`}function $i(e){return I(e)&&e.ownerSVGElement!==void 0}function ea(e){return I(e)&&Pi(e)===`svg`}function ta(e){return $i(e)&&Pi(e)===`title`}function na(e,t){if(I(e)&&e.hasAttribute(t)){var n=e.getAttribute(t).split(` `),r=e.getRootNode?e.getRootNode():e.ownerDocument;return n.map(function(e){return r.getElementById(e)}).filter(function(e){return e!==null})}return[]}function ra(e,t){return I(e)?t.indexOf(zi(e))!==-1:!1}function ia(e){return e.trim().replace(/\s\s+/g,` `)}function aa(e,t){if(!I(e))return!1;if(e.hasAttribute(`hidden`)||e.getAttribute(`aria-hidden`)===`true`)return!0;var n=t(e);return n.getPropertyValue(`display`)===`none`||n.getPropertyValue(`visibility`)===`hidden`}function oa(e){return ra(e,[`button`,`combobox`,`listbox`,`textbox`])||sa(e,`range`)}function sa(e,t){if(!I(e))return!1;switch(t){case`range`:return ra(e,[`meter`,`progressbar`,`scrollbar`,`slider`,`spinbutton`]);default:throw TypeError(`No knowledge about abstract role '${t}'. This is likely a bug :(`)}}function ca(e,t){var n=Ti(e.querySelectorAll(t));return na(e,`aria-owns`).forEach(function(e){n.push.apply(n,Ti(e.querySelectorAll(t)))}),n}function la(e){return Ki(e)?e.selectedOptions||ca(e,`[selected]`):ca(e,`[aria-selected="true"]`)}function ua(e){return ra(e,Hi)}function da(e){return Ui(e)}function fa(e){return ra(e,[`button`,`cell`,`checkbox`,`columnheader`,`gridcell`,`heading`,`label`,`legend`,`link`,`menuitem`,`menuitemcheckbox`,`menuitemradio`,`option`,`radio`,`row`,`rowheader`,`switch`,`tab`,`tooltip`,`treeitem`])}function pa(e){return!1}function ma(e){return Wi(e)||Ji(e)?e.value:e.textContent||``}function ha(e){var t=e.getPropertyValue(`content`);return/^["'].*["']$/.test(t)?t.slice(1,-1):``}function ga(e){var t=Pi(e);return t===`button`||t===`input`&&e.getAttribute(`type`)!==`hidden`||t===`meter`||t===`output`||t===`progress`||t===`select`||t===`textarea`}function _a(e){if(ga(e))return e;var t=null;return e.childNodes.forEach(function(e){if(t===null&&I(e)){var n=_a(e);n!==null&&(t=n)}}),t}function va(e){if(e.control!==void 0)return e.control;var t=e.getAttribute(`for`);return t===null?_a(e):e.ownerDocument.getElementById(t)}function ya(e){var t=e.labels;if(t===null)return t;if(t!==void 0)return Ti(t);if(!ga(e))return null;var n=e.ownerDocument;return Ti(n.querySelectorAll(`label`)).filter(function(t){return va(t)===e})}function ba(e){var t=e.assignedNodes();return t.length===0?Ti(e.childNodes):t}function xa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=new Ni,r=typeof Map>`u`?void 0:new Map,i=Yi(e),a=t.compute,o=a===void 0?`name`:a,s=t.computedStyleSupportsPseudoElements,c=s===void 0?t.getComputedStyle!==void 0:s,l=t.getComputedStyle,u=l===void 0?i.getComputedStyle.bind(i):l,d=t.hidden,f=d!==void 0&&d,p=function(e,t){if(t!==void 0)throw Error(`use uncachedGetComputedStyle directly for pseudo elements`);if(r===void 0)return u(e);var n=r.get(e);if(n)return n;var i=u(e,t);return r.set(e,i),i};function m(e,t){var n=``;if(I(e)&&c&&(n=`${ha(u(e,`::before`))} ${n}`),(Qi(e)?ba(e):Ti(e.childNodes).concat(na(e,`aria-owns`))).forEach(function(e){var r=v(e,{isEmbeddedInLabel:t.isEmbeddedInLabel,isReferenced:!1,recursion:!0}),i=(I(e)?p(e).getPropertyValue(`display`):`inline`)===`inline`?``:` `;n+=`${i}${r}${i}`}),I(e)&&c){var r=ha(u(e,`::after`));n=`${n} ${r}`}return n.trim()}function h(e,t){var r=e.getAttributeNode(t);return r!==null&&!n.has(r)&&r.value.trim()!==``?(n.add(r),r.value):null}function g(e){return I(e)?h(e,`title`):null}function _(e){if(!I(e))return null;if(Xi(e)){n.add(e);for(var t=Ti(e.childNodes),r=0;r<t.length;r+=1){var i=t[r];if(Zi(i))return v(i,{isEmbeddedInLabel:!1,isReferenced:!1,recursion:!1})}}else if(qi(e)){n.add(e);for(var a=Ti(e.childNodes),o=0;o<a.length;o+=1){var s=a[o];if(Ui(s))return v(s,{isEmbeddedInLabel:!1,isReferenced:!1,recursion:!1})}}else if(ea(e)){n.add(e);for(var c=Ti(e.childNodes),l=0;l<c.length;l+=1){var u=c[l];if(ta(u))return u.textContent}return null}else if(Pi(e)===`img`||Pi(e)===`area`){var d=h(e,`alt`);if(d!==null)return d}else if(Gi(e)){var f=h(e,`label`);if(f!==null)return f}if(Wi(e)&&(e.type===`button`||e.type===`submit`||e.type===`reset`)){var p=h(e,`value`);if(p!==null)return p;if(e.type===`submit`)return`Submit`;if(e.type===`reset`)return`Reset`}var g=ya(e);if(g!==null&&g.length!==0)return n.add(e),Ti(g).map(function(e){return v(e,{isEmbeddedInLabel:!0,isReferenced:!1,recursion:!0})}).filter(function(e){return e.length>0}).join(` `);if(Wi(e)&&e.type===`image`){var _=h(e,`alt`);if(_!==null)return _;var y=h(e,`title`);return y===null?`Submit Query`:y}if(ra(e,[`button`])){var b=m(e,{isEmbeddedInLabel:!1,isReferenced:!1});if(b!==``)return b}return null}function v(e,t){if(n.has(e))return``;if(!f&&aa(e,p)&&!t.isReferenced)return n.add(e),``;var r=I(e)?e.getAttributeNode(`aria-labelledby`):null,i=r!==null&&!n.has(r)?na(e,`aria-labelledby`):[];if(o===`name`&&!t.isReferenced&&i.length>0)return n.add(r),i.map(function(e){return v(e,{isEmbeddedInLabel:t.isEmbeddedInLabel,isReferenced:!0,recursion:!1})}).join(` `);var a=t.recursion&&oa(e)&&o===`name`;if(!a){var s=(I(e)&&e.getAttribute(`aria-label`)||``).trim();if(s!==``&&o===`name`)return n.add(e),s;if(!ua(e)){var c=_(e);if(c!==null)return n.add(e),c}}if(ra(e,[`menu`]))return n.add(e),``;if(a||t.isEmbeddedInLabel||t.isReferenced){if(ra(e,[`combobox`,`listbox`])){n.add(e);var l=la(e);return l.length===0?Wi(e)?e.value:``:Ti(l).map(function(e){return v(e,{isEmbeddedInLabel:t.isEmbeddedInLabel,isReferenced:!1,recursion:!0})}).join(` `)}if(sa(e,`range`))return n.add(e),e.hasAttribute(`aria-valuetext`)?e.getAttribute(`aria-valuetext`):e.hasAttribute(`aria-valuenow`)?e.getAttribute(`aria-valuenow`):e.getAttribute(`value`)||``;if(ra(e,[`textbox`]))return n.add(e),ma(e)}if(fa(e)||I(e)&&t.isReferenced||da(e)||pa(e)){var u=m(e,{isEmbeddedInLabel:t.isEmbeddedInLabel,isReferenced:!1});if(u!==``)return n.add(e),u}if(e.nodeType===e.TEXT_NODE)return n.add(e),e.textContent||``;if(t.recursion)return n.add(e),m(e,{isEmbeddedInLabel:t.isEmbeddedInLabel,isReferenced:!1});var d=g(e);return d===null?(n.add(e),``):(n.add(e),d)}return ia(v(e,{isEmbeddedInLabel:!1,isReferenced:o===`description`,recursion:!1}))}function Sa(e){return ra(e,[`caption`,`code`,`deletion`,`emphasis`,`generic`,`insertion`,`none`,`paragraph`,`presentation`,`strong`,`subscript`,`superscript`])}function Ca(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Sa(e)?``:xa(e,t)}var wa=e=>{var t=new WeakMap,n=new WeakSet,i=new WeakMap;class a extends e{constructor(...e){super(...e),b(this,n),this.action=null,this.feedback=null,this.feedbackDuration=1e3,this.actionState=D.Idle,this.feedbackMessage=null,w(this,t,null),w(this,i,e=>{if(this.disabled){e.preventDefault();return}Ie(this.action)&&(e.preventDefault(),this.triggerAction(e))})}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,x(i,this))}disconnectedCallback(){this.removeEventListener(`click`,x(i,this)),C(n,this,o).call(this),super.disconnectedCallback()}setActionState(e,t={}){this.actionState=e,this.feedbackMessage=t.message??null,this.dispatchEvent(new CustomEvent(`craft-state-change`,{bubbles:!0,composed:!0,detail:{state:e,actionType:Ie(this.action)?.type,...t}}))}async triggerAction(e){let r=Ie(this.action);if(r){C(n,this,o).call(this),r.type===`http`&&this.setActionState(D.Loading,this.feedback?.loading);try{await Re(r,{trigger:this,sourceEvent:e}),this.setActionState(D.Success,this.feedback?.success)}catch(e){this.setActionState(D.Error,{message:e instanceof Error?e.message:void 0,...this.feedback?.error??{}})}finally{C(n,this,o).call(this),this.isConnected?S(t,this,setTimeout(()=>{S(t,this,null),this.setActionState(D.Idle)},this.feedbackDuration)):(this.actionState=D.Idle,this.feedbackMessage=null)}}}}function o(){x(t,this)!==null&&(clearTimeout(x(t,this)),S(t,this,null))}return r([c({type:Object})],a.prototype,`action`,void 0),r([c({type:Object})],a.prototype,`feedback`,void 0),r([c({type:Number,attribute:`feedback-duration`})],a.prototype,`feedbackDuration`,void 0),r([c({reflect:!0,attribute:`action-state`})],a.prototype,`actionState`,void 0),r([f()],a.prototype,`feedbackMessage`,void 0),a},Ta,Ea={Primary:`primary`,Danger:`danger`,DangerPlain:`danger-plain`,Solid:`solid`,Fill:`fill`,Outline:`outline`,Dashed:`dashed`,Plain:`plain`,Link:`link`,None:`none`},Da=e=>e.key===` `||e.key===`Enter`,Oa=new WeakMap;function ka(e){let t=document.createElement(`button`);return t.type=`submit`,t.tabIndex=-1,t.setAttribute(`aria-hidden`,`true`),t.style.cssText=`position:absolute;inset-block-start:0;inset-inline-start:0;width:1px;height:1px;padding:0;border:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap;`,t.addEventListener(`click`,t=>{t.stopPropagation(),t.preventDefault(),e()}),t}function Aa(e){for(let t=e.parentElement?.closest(`fieldset`);t;t=t.parentElement?.closest(`fieldset`))if(t.disabled&&!t.querySelector(`:scope > legend`)?.contains(e))return!0;return!1}var ja=new WeakMap;function Ma(e,t){let n=ja.get(e);if(!n){let t=new Set,r=new MutationObserver(e=>{e.some(e=>e.target instanceof HTMLFieldSetElement)&&t.forEach(e=>e())});r.observe(e,{attributes:!0,attributeFilter:[`disabled`],subtree:!0}),n={observer:r,watchers:t},ja.set(e,n)}n.watchers.add(t)}function Na(e,t){let n=ja.get(e);n&&(n.watchers.delete(t),n.watchers.size||(n.observer.disconnect(),ja.delete(e)))}var Pa=new WeakMap,Fa=new WeakMap,L=new WeakSet,Ia=new WeakMap,La=new WeakMap,Ra=new WeakMap,za=new WeakMap,Ba=new WeakMap,Va=new WeakMap,Ha=new WeakMap,Ua=new WeakMap,Wa=new WeakMap,Ga=new WeakMap,Ka=new WeakMap,qa=new WeakMap,Ja=new WeakMap,R=class e extends k(wa(u)){get form(){let e=this.getAttribute(`form`);if(e===null)return this.closest(`form`);let t=this.getRootNode().getElementById?.(e);return t instanceof HTMLFormElement?t:null}static get observedAttributes(){return[...super.observedAttributes,`form`]}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),e===`form`&&C(L,this,$a).call(this)}constructor(){super(),b(this,L),this.type=`button`,this.disabled=!1,this.fieldsetDisabled=!1,w(this,Pa,this.attachInternals?.()),w(this,Fa,!1),w(this,Ia,()=>{this.fieldsetDisabled=Aa(this)}),w(this,La,!1),w(this,Ra,void 0),w(this,za,e=>{if(Ya.call(C(L,this))){e.preventDefault(),e.stopImmediatePropagation();return}this.type!==`button`&&(S(Ra,this,e),x(La,this)||setTimeout(()=>C(L,this,Qa).call(this,e)))}),w(this,Ba,()=>{let e=this.active;this.active=!0;let t=()=>{this.active=e,document.removeEventListener(`mouseup`,t,!0),document.removeEventListener(`dragend`,t,!0)};document.addEventListener(`mouseup`,t,!0),document.addEventListener(`dragend`,t,!0)}),w(this,Va,e=>{if(e.composedPath()[0]!==this||(e.key===` `&&e.preventDefault(),this.active||!Da(e)))return;this.active=!0;let t=e=>{Da(e)&&(this.active=!1,document.removeEventListener(`keyup`,t,!0))};document.addEventListener(`keyup`,t,!0)}),w(this,Ha,e=>{Da(e)&&e.composedPath()[0]===this&&this.click()}),w(this,Ua,null),w(this,Wa,null),w(this,Ga,e=>{!this.toggle||Ya.call(C(L,this))||this.loading||this.dispatchEvent(new CustomEvent(`craft-toggle`,{bubbles:!0,composed:!0,cancelable:!0,detail:{active:!this.active,sourceEvent:e}}))}),this.variant=Ea.Fill,this.inherit=!1,this.size=`medium`,this.active=!1,this.toggle=!1,this.loading=!1,this.focusableWhenDisabled=!1,this.align=`center`,this.icon=null,this.href=null,this.target=null,this.rel=null,this.download=null,this.iconPosition=`prefix`,this._accessibleName=``,this._hasAccessibilityError=!1,this._hostLabel=null,this._content={label:!1,textLabel:!1,prefix:!1,suffix:!1},w(this,Ka,null),w(this,qa,null),w(this,Ja,null),this.linkHostStateApplied=!1,this.originalType=null,this.addEventListener(`click`,x(za,this),{capture:!0}),this.addEventListener(`mousedown`,x(Ba,this)),this.addEventListener(`keydown`,x(Va,this)),this.addEventListener(`keyup`,x(Ha,this))}click(){if(!(Ya.call(C(L,this))||x(La,this))){S(La,this,!0);try{super.click()}finally{S(La,this,!1)}x(Ra,this)&&C(L,this,Qa).call(this,x(Ra,this))}}connectedCallback(){super.connectedCallback(),this._hostLabel=this.getAttribute(`aria-label`),this.hasAttribute(`role`)||this.setAttribute(`role`,`button`),this.syncLinkHostState(),x(Ia,this).call(this),S(Ua,this,this.getRootNode()),Ma(x(Ua,this),x(Ia,this)),C(L,this,$a).call(this),this.addEventListener(`click`,x(Ga,this)),C(L,this,to).call(this),S(qa,this,new MutationObserver(()=>{C(L,this,to).call(this),this._hostLabel=this.getAttribute(`aria-label`),this.hasUpdated&&this.updateComplete.then(()=>C(L,this,no).call(this))})),x(qa,this).observe(this,{childList:!0,characterData:!0,subtree:!0,attributes:!0,attributeFilter:[`slot`,`aria-label`,`aria-labelledby`,`title`]}),this.hasUpdated&&!this._accessibleName.trim()&&C(L,this,no).call(this)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,x(Ga,this)),x(qa,this)?.disconnect(),S(qa,this,null),C(L,this,ao).call(this),C(L,this,eo).call(this),x(Ua,this)&&(Na(x(Ua,this),x(Ia,this)),S(Ua,this,null))}willUpdate(e){super.willUpdate(e),e.has(`actionState`)&&e.get(`actionState`)!==void 0&&(this.loading=this.actionState===D.Loading)}updated(t){super.updated(t),(t.has(`href`)||t.has(`disabled`))&&this.syncLinkHostState();let n=t.has(`disabled`)||t.has(`fieldsetDisabled`)||t.has(`href`);if(t.has(`type`))C(L,this,$a).call(this);else if(n&&x(Wa,this)){let t=Oa.get(x(Wa,this));t&&Xa.call(e,x(Wa,this),t)}if(n&&(Ya.call(C(L,this))?this.getAttribute(`aria-disabled`)!==`true`&&(this.setAttribute(`aria-disabled`,`true`),S(Fa,this,!0)):x(Fa,this)&&(this.removeAttribute(`aria-disabled`),S(Fa,this,!1)),this.fieldsetDisabled&&!this.href?x(Pa,this)?.states?.add(`fieldset-disabled`):x(Pa,this)?.states?.delete(`fieldset-disabled`)),(n||t.has(`focusableWhenDisabled`))&&(this.disabled?this.tabIndex=this.focusableWhenDisabled?0:-1:Ya.call(C(L,this))?this.tabIndex=-1:this.isLink||(this.tabIndex=0)),t.has(`shortcut`)){let e=this.getAttribute(`aria-keyshortcuts`),t=this.shortcutAriaKeys;(e===null||e===x(Ka,this))&&(t?this.setAttribute(`aria-keyshortcuts`,t):this.removeAttribute(`aria-keyshortcuts`),S(Ka,this,t))}this.toggle&&(t.has(`active`)||t.has(`toggle`))&&this.setAttribute(`aria-pressed`,String(this.active)),t.has(`loading`)&&(this.loading?this.announceLoading():t.get(`loading`)&&this.clearLoadingAnnouncement())}announceLoading(){this.liveRegion.textContent=n(`Loading`)}clearLoadingAnnouncement(){this.liveRegion.textContent=``}syncLinkHostState(){this.isLink?(this.linkHostStateApplied||(this.originalType=this.type),this.setAttribute(`role`,`presentation`),this.removeAttribute(`tabindex`),this.type=`button`,this.linkHostStateApplied=!0):this.linkHostStateApplied&&=(this.setAttribute(`role`,`button`),this.type=this.originalType??`button`,this.disabled||(this.tabIndex=0),!1)}async firstUpdated(e){super.firstUpdated(e),await this.updateComplete;let t=this.querySelectorAll(`craft-icon, craft-spinner`);await Promise.all(Array.from(t).map(e=>e.updateComplete)),C(L,this,no).call(this)}get isLink(){return!!this.href&&!this.disabled}get computedTarget(){return y(this.href,this.target)}render(){let e=this._content.prefix||!!this.icon&&this.iconPosition===`prefix`,t=this._content.suffix||!!this.icon&&this.iconPosition===`suffix`,n=p`
      <div
        class="${N({"button-content":!0,"button-content--spaced-prefix":e&&this._content.label,"button-content--spaced-suffix":t&&this._content.label,"button-content--start":this.align===`start`,"button-content--end":this.align===`end`,"a11y-error":this._hasAccessibilityError})}"
        part="content"
      >
        <slot name="prefix" class="prefix" part="prefix">
          ${this.icon&&this.iconPosition===`prefix`?p`<craft-icon name="${this.icon}"></craft-icon>`:i}
        </slot>
        <slot
          class="${N({label:!0,"label--text":this._content.textLabel})}"
          part="label"
        ></slot>
        <slot name="suffix" class="suffix" part="suffix">
          ${this.icon&&this.iconPosition===`suffix`?p`<craft-icon name="${this.icon}"></craft-icon>`:i}
        </slot>
        ${this.shortcutKeys?p`<craft-shortcut
              class="shortcut"
              aria-hidden="true"
              ?alt="${this.shortcutKeys.alt}"
              ?shift="${this.shortcutKeys.shift}"
              >${this.shortcutKeys.key}</craft-shortcut
            >`:i}
      </div>
      ${this.loading?p`<craft-spinner part="spinner"></craft-spinner>`:i}
      <span class="cp-visually-hidden" role="status" data-live-region></span>
    `;if(this.isLink){let e=this.computedTarget,t=this._hostLabel?.trim()||null,r=!this.target&&!!e;return p`
        <a
          class="link"
          part="link"
          href="${this.href}"
          target="${e??i}"
          rel="${_(e,this.rel)??i}"
          download="${this.download??i}"
          aria-label="${t??i}"
          aria-describedby="${t&&r?`new-tab-cue`:i}"
          >${n}${r?p`<span id="new-tab-cue" class="cp-visually-hidden"
                >${g()}</span
              >`:i}</a
        >
      `}return n}};Ta=R;function Ya(){return this.disabled||!this.href&&Aa(this)}function Xa(e,t){let n=Za.call(Ta,t.owners);if(t.button.disabled=n?Ya.call(C(L,n)):!1,!n)return;let r=[...e.elements].find(e=>e!==t.button&&(e instanceof HTMLButtonElement||e instanceof HTMLInputElement)&&e.type===`submit`);if(r&&!(n.compareDocumentPosition(r)&Node.DOCUMENT_POSITION_FOLLOWING)){t.button.remove();return}let i=r;for(let e=r?.parentElement?.closest(`fieldset`);e&&!e.contains(n);e=e.parentElement?.closest(`fieldset`))i=e;i?t.button.nextElementSibling!==i&&i.before(t.button):e.lastElementChild!==t.button&&e.append(t.button),e.contains(t.button)?t.button.removeAttribute(`form`):t.button.setAttribute(`form`,e.id)}function Za(e){let[t]=[...e].sort((e,t)=>e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1);return t}function Qa(e){if(x(Ra,this)!==e||(S(Ra,this,void 0),e.defaultPrevented||Ya.call(C(L,this))))return;let t=this.form;this.type===`submit`?t?.requestSubmit():this.type===`reset`&&t?.reset()}function $a(){let e=this.isConnected&&this.type===`submit`?this.form:null;if(e===x(Wa,this)||(C(L,this,eo).call(this),!e))return;let t=Oa.get(e);if(!t){let n=new Set;t={button:ka(()=>Za.call(Ta,n)?.click()),owners:n},Oa.set(e,t)}t.owners.add(this),S(Wa,this,e),Xa.call(Ta,e,t)}function eo(){let e=x(Wa,this);if(!e)return;let t=Oa.get(e);S(Wa,this,null),t&&(t.owners.delete(this),Xa.call(Ta,e,t),queueMicrotask(()=>{!t.owners.size&&Oa.get(e)===t&&(t.button.remove(),Oa.delete(e))}))}function to(){let e=e=>Array.from(this.childNodes).some(t=>t instanceof Element?(t.getAttribute(`slot`)||null)===e:e===null&&t.nodeType===Node.TEXT_NODE&&!!t.textContent?.trim()),t=e(null)&&!Array.from(this.children).some(e=>!e.slot&&!e.classList.contains(`sr-only`)),n={label:e(null),textLabel:t,prefix:e(`prefix`),suffix:e(`suffix`)};(n.label!==this._content.label||n.textLabel!==this._content.textLabel||n.prefix!==this._content.prefix||n.suffix!==this._content.suffix)&&(this._content=n)}function no(){if(!this.isConnected)return;let e=this.isLink?this.shadowRoot?.querySelector(`a.link`)??this:this;this._accessibleName=Ca(e);let t=this._accessibleName.trim()===``;if(t&&!C(L,this,ro).call(this)){C(L,this,io).call(this);return}this._hasAccessibilityError=t}function ro(){return typeof this.checkVisibility==`function`?this.checkVisibility({visibilityProperty:!0}):this.getClientRects().length>0}function io(){x(Ja,this)||typeof ResizeObserver>`u`||(S(Ja,this,new ResizeObserver(()=>{C(L,this,ro).call(this)&&(C(L,this,ao).call(this),C(L,this,no).call(this))})),x(Ja,this).observe(this))}function ao(){x(Ja,this)?.disconnect(),S(Ja,this,null)}R.styles=[vi,re,O,yi],r([c({reflect:!0})],R.prototype,`type`,void 0),r([c({type:Boolean,reflect:!0})],R.prototype,`disabled`,void 0),r([f()],R.prototype,`fieldsetDisabled`,void 0),r([c({reflect:!0})],R.prototype,`variant`,void 0),r([c({reflect:!0,type:Boolean})],R.prototype,`inherit`,void 0),r([c({reflect:!0})],R.prototype,`size`,void 0),r([c({reflect:!0})],R.prototype,`value`,void 0),r([c({reflect:!0,type:Boolean})],R.prototype,`active`,void 0),r([c({type:Boolean,reflect:!0})],R.prototype,`toggle`,void 0),r([c({reflect:!0,type:Boolean})],R.prototype,`loading`,void 0),r([c({attribute:`focusable-when-disabled`,type:Boolean,reflect:!0})],R.prototype,`focusableWhenDisabled`,void 0),r([c({reflect:!0})],R.prototype,`flush`,void 0),r([c()],R.prototype,`align`,void 0),r([c()],R.prototype,`icon`,void 0),r([c({reflect:!0})],R.prototype,`href`,void 0),r([c()],R.prototype,`target`,void 0),r([c()],R.prototype,`rel`,void 0),r([c()],R.prototype,`download`,void 0),r([c({attribute:`icon-position`})],R.prototype,`iconPosition`,void 0),r([h(`[data-live-region]`)],R.prototype,`liveRegion`,void 0),r([f()],R.prototype,`_accessibleName`,void 0),r([f()],R.prototype,`_hasAccessibilityError`,void 0),r([f()],R.prototype,`_hostLabel`,void 0),r([f()],R.prototype,`_content`,void 0),customElements.get(`craft-button`)||customElements.define(`craft-button`,R);var oo=new WeakMap,so=new WeakMap,co=new WeakSet,lo=new WeakMap,uo=new WeakMap,fo=class extends F{static get styles(){return[...super.styles,a`
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
      `]}constructor(){super(),b(this,co),w(this,oo,null),w(this,so,!1),w(this,lo,e=>{e.key!==`Escape`||e.target!==this._control||!C(co,this,po).call(this)||(e.preventDefault(),e.stopPropagation(),S(so,this,!0),this.clear())}),w(this,uo,e=>{e.key===`Escape`&&x(so,this)&&(e.stopPropagation(),S(so,this,!1))}),this.inputMode=`search`,this.addEventListener(`keydown`,x(lo,this),{capture:!0}),this.addEventListener(`keyup`,x(uo,this),{capture:!0})}connectedCallback(){!this.label&&!this.querySelector(`:scope > [slot="label"]`)&&(this.label=n(`Search`)),this.hasAttribute(`label-sr-only`)||(this.labelSrOnly=!0),this.placeholder||=n(`Search`),super.connectedCallback(),this._control?.setAttribute(`enterkeyhint`,`search`),this._control?.hasAttribute(`autocomplete`)||this._control?.setAttribute(`autocomplete`,`off`),C(co,this,mo).call(this)}updated(e){super.updated(e),(e.has(`value`)||e.has(`disabled`)||e.has(`readOnly`))&&C(co,this,mo).call(this)}_inputGroupInputTemplate(){return p`
      <div class="input-group__input">
        <slot name="input"></slot>
        <div class="input-search__clear">
          <slot name="search-clear"></slot>
        </div>
      </div>
    `}get slots(){return{...super.slots,prefix:()=>p`<craft-icon slot="prefix" name="search"></craft-icon>`}}clear(){this.disabled||this.readOnly||(this.value=``,this._control?.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this._control?.focus(),this.dispatchEvent(new CustomEvent(`clear`,{bubbles:!0,composed:!0})))}};function po(){return this.value!==``}function mo(){let e=C(co,this,po).call(this)&&!this.disabled&&!this.readOnly;e&&!x(oo,this)?(S(oo,this,C(co,this,ho).call(this)),this.append(x(oo,this)),this.toggleAttribute(`clearable`,!0),this.requestUpdate()):!e&&x(oo,this)&&(x(oo,this).contains(document.activeElement)&&this._control?.focus(),x(oo,this).remove(),S(oo,this,null),this.toggleAttribute(`clearable`,!1),this.requestUpdate())}function ho(){let e=document.createElement(`craft-button`);e.slot=`search-clear`,e.setAttribute(`data-search-clear`,``),e.setAttribute(`type`,`button`),e.setAttribute(`icon`,``),e.setAttribute(`size`,`small`),e.setAttribute(`variant`,`plain`),e.addEventListener(`click`,()=>this.clear());let t=document.createElement(`craft-icon`);return t.setAttribute(`name`,`xmark-large`),t.setAttribute(`label`,n(`Clear search`)),e.append(t),e.updateComplete.then(()=>{e.tabIndex=-1}),e}customElements.get(`craft-input-search`)||customElements.define(`craft-input-search`,fo);function go(e){Object.assign(e.style,{marginBlock:`calc(var(--c-spacing-sm) - var(--c-spacing-xs))`,marginInline:`0`,border:`0`,borderBlockStart:`1px solid var(--c-color-neutral-border-quiet)`})}var _o=class e extends Dr{constructor(...e){super(...e),this.label=n(`Actions`),this.icon=`ellipsis`,this.disabled=!1,this.searchable=!1,this.uid=Qr(),this._generatedInvoker=null,this._generatedContent=null,this._searchContainer=null,this._searchInput=null,this._searchField=null,this._onItemClick=e=>{let t=e.currentTarget;this.open=!1,this.actions===void 0&&this._dispatchChange(t)},this._onSearchKeydown=e=>{if(e.key===`ArrowDown`||e.key===`ArrowUp`){let t=this._getNavigableItems();t.length&&(e.preventDefault(),(e.key===`ArrowDown`?t[0]:t[t.length-1])?.focus());return}e.key===`Enter`&&e.preventDefault()},this._onOverlayShow=()=>{if(!this.open)return;if(this.searchable){this._searchInput?.focus();return}let e=this._getNavigableItems()[0];e?.hasUpdated===!1?e.updateComplete.then(()=>{this.open&&e.focus()}):e?.focus()},this._onContentKeydown=e=>{if(this._searchContainer?.contains(e.target))return;let t=this._getNavigableItems(),n=e.target?.closest?.(`craft-action-item`)??null,r=n?t.indexOf(n):-1;if(e.key===`ArrowDown`||e.key===`ArrowUp`){if(!t.length)return;e.preventDefault();let n;n=e.key===`ArrowDown`?r===-1?0:(r+1)%t.length:r===-1?t.length-1:(r-1+t.length)%t.length,t[n]?.focus();return}if(e.key===`Home`||e.key===`End`){if(!t.length)return;e.preventDefault(),(e.key===`Home`?t[0]:t[t.length-1])?.focus();return}if(e.key===` `&&!this.searchable&&n?.href){e.preventDefault(),(n.shadowRoot?.querySelector(`a[href]`)??n).click();return}n&&this._redirectTypingToSearch(e)},this._onContentSlotChange=()=>{this._syncSearchInput(),this._addEventListeners()},this._onInvokerSlotChange=()=>{if(this.actions===void 0)return;let e=!!this._generatedInvoker;this._renderDataDrivenMenu(),e!==!!this._generatedInvoker&&(this._syncInvoker(),this._setupInvoker())}}_addEventListeners(){let e=this.contentNodes[0];e&&(this._bindContent(e),this._observeContent(e))}_observeContent(e){this._contentObserver?.disconnect(),this._contentObserver=new MutationObserver(()=>this._bindContent(e)),this._contentObserver.observe(e,{childList:!0,subtree:!0})}_bindContent(e){e.querySelectorAll(`craft-action-item`).forEach(e=>e.addEventListener(`click`,this._onItemClick)),e.querySelectorAll(`hr`).forEach(go)}_dispatchChange(e){this.dispatchEvent(new CustomEvent(`craft-select`,{bubbles:!0,composed:!0,detail:{item:e}}))}_setupInvoker(){let e=this.invokerNodes[0];e&&(e.setAttribute(`id`,`invoker-${this.uid}`),e.setAttribute(`aria-controls`,`content-${this.uid}`)),this._syncInvokerDisabled()}_syncInvokerDisabled(){let e=this.invokerNodes[0];if(!e)return;this.disabled?e.setAttribute(`aria-disabled`,`true`):e.removeAttribute(`aria-disabled`);let t=e;t.updateComplete&&!t.hasUpdated&&t.updateComplete.then(()=>this._syncInvokerDisabled())}_setupContent(){let e=this.contentNodes[0];e&&(e.setAttribute(`id`,`content-${this.uid}`),e.setAttribute(`role`,`none`)),this._wireContentKeydown()}_setupOverlay(){super._setupOverlay(),this._setupInvoker(),this._setupContent(),this._addEventListeners()}_teardownOverlay(){this._contentObserver?.disconnect(),this._contentObserver=void 0,super._teardownOverlay()}_overlayShown(){super._overlayShown(),this.updateComplete.then(this._onOverlayShow)}firstUpdated(e){super.firstUpdated(e),this.shadowRoot?.querySelector(`slot[name="invoker"]`)?.addEventListener(`slotchange`,this._onInvokerSlotChange),this.shadowRoot?.querySelector(`slot[name="content"]`)?.addEventListener(`slotchange`,this._onContentSlotChange),this._syncSearchInput()}willUpdate(e){if(super.willUpdate(e),e.has(`open`)&&this.open&&this.disabled){this.open=!1;return}if(this.actions===void 0){this._removeGeneratedNodes();return}let t=e.has(`open`)&&this.open&&this._hasActionsProvider();(e.has(`actions`)||e.has(`label`)||e.has(`icon`)||e.has(`disabled`)||t||!this._generatedContent)&&this._renderDataDrivenMenu()}updated(e){super.updated(e),e.has(`disabled`)&&this._syncInvokerDisabled(),e.has(`open`)&&!this.open&&e.get(`open`)&&this._resetSearchFilter(),e.has(`searchable`)&&this._syncSearchInput(),this.actions!==void 0&&(e.has(`open`)&&this.open&&this._hasActionsProvider()&&(this._setupContent(),this._addEventListeners()),(e.has(`actions`)||e.has(`label`)||e.has(`icon`))&&this._rewireGeneratedMenu())}_rewireGeneratedMenu(){this._syncInvoker(),this._setupInvoker(),this._setupContent(),this._addEventListeners()}_hasSlottedInvoker(){return Array.from(this.children).some(e=>e.slot===`invoker`&&e!==this._generatedInvoker)}_removeGeneratedNodes(){this._generatedInvoker?.isConnected&&this._generatedInvoker.remove(),this._generatedContent?.isConnected&&this._generatedContent.remove(),this._generatedInvoker=null,this._generatedContent=null}_normalizeActions(e){return e.map(e=>e.type===`hr`||e.type===`display`?e:e.type===`group`?{...e,items:this._normalizeActions(e.items)}:`href`in e&&e.href?{...e,type:`link`,label:e.label??``}:{...e,type:e.type??`button`,label:e.label??``})}_sortActions(e){return e.map(e=>e.type===`group`?{...e,items:this._sortActions(e.items)}:e).sort((e,t)=>(`variant`in e&&e.variant===j.Danger)-+(`variant`in t&&t.variant===j.Danger))}_applyItemProps(e,t){let n=new Set([`type`,`label`,`onClick`,`href`,`keywords`,`attributes`]);for(let[r,i]of Object.entries(t))if(!(n.has(r)||i===void 0))try{e[r]=i}catch{}}_renderItem(e){if(e.type===`group`){let t=document.createDocumentFragment();if(e.heading){let n=document.createElement(`div`);n.className=`action-menu__heading`,n.textContent=e.heading,n.setAttribute(`role`,`presentation`),Object.assign(n.style,{paddingBlock:`var(--c-spacing-xs)`,paddingInline:`calc(var(--c-spacing-sm) * 2 + 1px) var(--c-spacing-md)`,fontSize:`var(--c-text-sm)`,fontWeight:`bold`}),t.appendChild(n)}for(let n of e.items){let e=this._renderItem(n);e&&t.appendChild(e)}return t}if(e.type===`hr`){let e=document.createElement(`hr`);return e.className=`action-menu__separator`,go(e),e}if(e.type===`display`)return typeof e.node==`function`?e.node():e.node;let t=document.createElement(`craft-action-item`);if(e.type===`link`&&(t.href=e.href),this._applyItemProps(t,e),e.keywords&&t.setAttribute(`data-keywords`,e.keywords),e.label&&(t.textContent=e.label),typeof e.onClick==`function`){let n=e.onClick;t.addEventListener(`click`,e=>n(e))}return t.addEventListener(`click`,()=>this._dispatchChange(e)),t}_resolveActions(){return typeof this.actions==`function`?this.actions():this.actions??[]}_hasActionsProvider(){return typeof this.actions==`function`}_renderDataDrivenMenu(){let e=this._sortActions(this._normalizeActions(this._resolveActions()));if(this._hasSlottedInvoker())this._generatedInvoker?.isConnected&&this._generatedInvoker.remove(),this._generatedInvoker=null;else{if(!this._generatedInvoker){let e=document.createElement(`craft-button`);e.setAttribute(`slot`,`invoker`),e.setAttribute(`type`,`button`),e.setAttribute(`icon`,``),e.setAttribute(`size`,`small`),e.setAttribute(`inherit`,`true`),e.setAttribute(`variant`,`plain`),this._generatedInvoker=e,this.appendChild(e)}this._generatedInvoker.disabled=this.disabled,this._generatedInvoker.toggleAttribute(`disabled`,this.disabled),s(p`<craft-icon
          name="${this.icon}"
          label="${this.label}"
        ></craft-icon>`,this._generatedInvoker)}if(!this._generatedContent){let e=document.createElement(`div`);e.setAttribute(`slot`,`content`),this._generatedContent=e,this.appendChild(e)}let t=this._generatedContent;t.replaceChildren();for(let n of e){let e=this._renderItem(n);e&&t.appendChild(e)}let n=!1;for(let e of t.children)e.classList.contains(`action-menu__heading`)?e.style.marginBlockStart=n?`var(--c-spacing-md)`:``:e.tagName===`CRAFT-ACTION-ITEM`&&(n=!0);this._syncSearchInput()}_getContentNode(){return this._generatedContent?this._generatedContent:Array.from(this.children).find(e=>e.slot===`content`)??null}_syncSearchInput(){let e=this._getContentNode();if(this._wireContentKeydown(),!this.searchable||!e){this._searchContainer?.isConnected&&this._searchContainer.remove(),e&&this._clearFilterAttributes(e);return}this._searchContainer||=this._buildSearchContainer(),e.firstElementChild!==this._searchContainer&&e.prepend(this._searchContainer)}_buildSearchContainer(){let e=document.createElement(`div`);e.className=`action-menu__search`;let t=document.createElement(`style`);t.textContent=`
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
    `,e.appendChild(t);let r=document.createElement(`input`);r.setAttribute(`aria-label`,n(`Search`)),r.addEventListener(`input`,()=>{this._applySearchFilter(r.value)}),r.addEventListener(`keydown`,this._onSearchKeydown);let i=document.createElement(`craft-input-search`);return i.setAttribute(`size`,`small`),r.slot=`input`,i.append(r),e.appendChild(i),this._searchInput=r,this._searchField=i,e}_getFilterableItems(t){return Array.from(t.querySelectorAll(e._filterableItemsSelector)).filter(n=>{if(this._searchContainer?.contains(n))return!1;let r=n.parentElement?.closest(e._filterableItemsSelector);return!r||!t.contains(r)})}_itemMatchesSearch(e,t){return`${e.textContent??``} ${e.getAttribute(`data-keywords`)??``}`.toLowerCase().includes(t)}_applySearchFilter(e){let t=this._getContentNode();if(!t)return;let n=e.trim().toLowerCase();for(let e of this._getFilterableItems(t))!n||this._itemMatchesSearch(e,n)?e.removeAttribute(`data-search-hidden`):e.setAttribute(`data-search-hidden`,``)}_clearFilterAttributes(e){e.querySelectorAll(`[data-search-hidden]`).forEach(e=>e.removeAttribute(`data-search-hidden`))}_resetSearchFilter(){this._searchField&&(this._searchField.value=``);let e=this._getContentNode();e&&this._clearFilterAttributes(e)}_getNavigableItems(){let e=this._getContentNode();return e?Array.from(e.querySelectorAll(`craft-action-item`)).filter(e=>!e.hasAttribute(`hidden`)&&!e.hasAttribute(`data-search-hidden`)):[]}_wireContentKeydown(){this._getContentNode()?.addEventListener(`keydown`,this._onContentKeydown)}_redirectTypingToSearch(e){if(!this.searchable||!this._searchInput||!(e.key.length===1&&!e.ctrlKey&&!e.metaKey&&!e.altKey)&&e.key!==`Backspace`)return;e.preventDefault();let t=this._searchInput;t.focus(),t.value=e.key===`Backspace`?t.value.slice(0,-1):t.value+e.key,this._applySearchFilter(t.value)}};_o.styles=[...Dr.styles,a`
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
    `],_o._filterableItemsSelector=`craft-action-item, li, button`,r([c({attribute:!1})],_o.prototype,`actions`,void 0),r([c()],_o.prototype,`label`,void 0),r([c()],_o.prototype,`icon`,void 0),r([c({type:Boolean,reflect:!0})],_o.prototype,`disabled`,void 0),r([c({type:Boolean,reflect:!0})],_o.prototype,`searchable`,void 0),r([E({slot:`invoker`})],_o.prototype,`invokerNodes`,void 0),r([E({slot:`content`})],_o.prototype,`contentNodes`,void 0),customElements.get(`craft-action-menu`)||customElements.define(`craft-action-menu`,_o);var vo=a`
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
`,yo=class extends u{constructor(...e){super(...e),this.label=null,this._gradientId=null}connectedCallback(){super.connectedCallback(),this._gradientId=`avatar-gradient-${Math.random().toString(36).slice(2,8)}`}text(){return this.label?this.label.split(` `).map(e=>e.charAt(0).toUpperCase()).join(``):`?`}render(){return p`
      <span class="avatar">
        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          role="${this.label?`img`:i}"
          aria-hidden="${this.label?i:`true`}"
        >
          ${this.label?p`<title>${this.label}</title>`:i}
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
    `}};yo.styles=[vo],r([c()],yo.prototype,`label`,void 0),r([f()],yo.prototype,`_gradientId`,void 0),customElements.get(`craft-avatar`)||customElements.define(`craft-avatar`,yo);var bo=[`red`,`orange`,`amber`,`yellow`,`lime`,`green`,`emerald`,`teal`,`cyan`,`sky`,`blue`,`indigo`,`violet`,`purple`,`fuchsia`,`pink`,`rose`,`white`,`gray`,`black`,`slate`],xo=[`white`,`gray`,`slate`,`black`],So={neutral:`slate`,accent:`blue`,info:`sky`,success:`emerald`,warning:`yellow`,danger:`red`},Co={pending:`sky`,off:`red`,suspended:`red`,expired:`red`,disabled:`gray`,inactive:`gray`,on:`teal`},wo=xo.map(e=>`[data-color='${e}']`).join(`, `);function To(e=``){return o(`:host([data-color]:not(${wo})${e})`)}var Eo=e=>e.charAt(0).toUpperCase()+e.slice(1),Do={...Object.fromEntries(bo.map(e=>[Eo(e),e])),...Object.fromEntries(Object.entries(So).map(([e,t])=>[Eo(e),t])),...Object.fromEntries(Object.entries(Co).map(([e,t])=>[Eo(e),t]))},Oo=[...bo],ko=class extends u{constructor(...e){super(...e),this.size=`md`,this.fill=`var(--c-color-fill-loud)`,this.label=null}get effectiveAppearance(){return this.appearance?this.appearance:this.fill===Do.White||this.fill===Do.Black?$r.OutlineFill:$r.Solid}getFill(){return Oo.includes(this.fill)||te.includes(this.fill)?`var(--c-color-${this.fill}-fill-loud)`:this.fill}getSize(){switch(this.size){case`md`:return`0.6em`;case`lg`:return`1em`;default:return this.size}}render(){return p`<span
      style="--fill: ${this.getFill()}; --size: ${this.getSize()}"
      aria-label="${this.label??i}"
      role="${this.label?`img`:i}"
      class="${N({indicator:!0,[`indicator--${this.effectiveAppearance}`]:!0,"indicator--white":this.fill===Do.White,"indicator--black":this.fill===Do.Black})}"
    ></span>`}};ko.styles=[ee,a`
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
    `],r([c()],ko.prototype,`size`,void 0),r([c({reflect:!0})],ko.prototype,`fill`,void 0),r([c()],ko.prototype,`label`,void 0),r([c({reflect:!0})],ko.prototype,`appearance`,void 0),customElements.get(`craft-indicator`)||customElements.define(`craft-indicator`,ko);var Ao={Small:`small`,Medium:`medium`,Large:`large`};Object.values(Ao);var jo=a`
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
`,Mo=class extends u{constructor(...e){super(...e),this.fill=Do.Gray,this.noPrefix=!1,this.size=Ao.Medium,this.hasLabel=!1,this.hasTextLabel=!1,this.hasSuffix=!1,this.contentObserver=new MutationObserver(()=>this.readContent())}connectedCallback(){super.connectedCallback(),this.readContent(),this.contentObserver.observe(this,{childList:!0,characterData:!0,subtree:!0,attributes:!0,attributeFilter:[`slot`]})}disconnectedCallback(){super.disconnectedCallback(),this.contentObserver.disconnect()}readContent(){let e=[...this.childNodes];this.hasLabel=e.some(e=>e instanceof Element&&!e.hasAttribute(`slot`)||e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!==``),this.hasTextLabel=this.hasLabel&&!e.some(e=>e instanceof Element&&!e.slot),this.hasSuffix=e.some(e=>e instanceof Element&&e.slot===`suffix`)}getFill(){return this.fill}willUpdate(e){e.has(`fill`)&&(this.dataset.color=this.getFill())}render(){return p`
      <span
        part="badge"
        class="${N({badge:!0,"badge--small":this.size===Ao.Small,"badge--large":this.size===Ao.Large,"badge--labeled":this.hasLabel})}"
      >
        ${this.noPrefix?i:p`<span class="badge__prefix">
              <slot name="prefix" part="prefix">
                <craft-indicator
                  part="indicator"
                  fill="${this.getFill()}"
                ></craft-indicator>
              </slot>
            </span>`}
        ${this.hasLabel?p`<slot
              class="${N({"badge__label--text":this.hasTextLabel})}"
            ></slot>`:i}
        ${this.hasSuffix?p`<span class="badge__suffix">
              <slot name="suffix" part="suffix"></slot>
            </span>`:i}
      </span>
    `}};Mo.styles=[jo],r([c({reflect:!0})],Mo.prototype,`fill`,void 0),r([c({attribute:`no-prefix`,type:Boolean})],Mo.prototype,`noPrefix`,void 0),r([c()],Mo.prototype,`size`,void 0),r([f()],Mo.prototype,`hasLabel`,void 0),r([f()],Mo.prototype,`hasTextLabel`,void 0),r([f()],Mo.prototype,`hasSuffix`,void 0),customElements.get(`craft-badge`)||customElements.define(`craft-badge`,Mo);var No=class extends u{constructor(...e){super(...e),this.rel=`noreferrer noopener`}render(){let e=y(this.href,this.target);return p`
      <slot name="prefix" part="prefix"></slot>
      ${this.href?p`<a
          part="label"
          class="label"
          href=${this.href}
          target=${e??i}
          rel=${e?this.rel:i}
          ><slot></slot>${!this.target&&e?p`<span class="cp-visually-hidden">${g()}</span>`:i}</a
        >`:p`<span part="label" class="label"><slot></slot></span>`}
      <slot name="suffix" part="suffix"></slot>
      <slot name="separator" part="separator" aria-hidden="true"></slot>
    `}};No.styles=[re,a`
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
    `],r([c({reflect:!0})],No.prototype,`href`,void 0),r([c()],No.prototype,`target`,void 0),r([c()],No.prototype,`rel`,void 0),customElements.get(`craft-breadcrumb-item`)||customElements.define(`craft-breadcrumb-item`,No);var Po=a`
  .breadcrumbs {
    display: flex;
    align-items: center;
    /* The host isn't the flex container, so a gap set on it (e.g. a utility
       class) is handed down to the one that is. */
    gap: inherit;
  }
`,Fo=class extends u{constructor(...e){super(...e),this.label=n(`Breadcrumbs`),this.items=[],this.visibleItems=0,this.firstRender=!0}getSeparator(){let e=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[e,...e.querySelectorAll(`[id]`)].forEach(e=>e.removeAttribute(`id`)),e.setAttribute(`data-default`,``),e.slot=`separator`,e}calculateBreadcrumbItemsWidth(){this.items=this.breadcrumbsElements.map((e,t)=>{let n=e.offsetWidth;return e.hasAttribute(`hidden`)&&(e.removeAttribute(`hidden`),n=e.offsetWidth,e.setAttribute(`hidden`,``)),{label:e.innerText,href:e.href,value:t.toString(),offsetWidth:n,isVisible:!0}})}async handleSlotChange(){let e=[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>e.tagName.toLowerCase()===`craft-breadcrumb-item`);if(e.forEach((t,n)=>{let r=n===e.length-1,i=t.querySelector(`[slot="separator"]`);r?i?.hasAttribute(`data-default`)&&i.remove():i===null?t.append(this.getSeparator()):i.hasAttribute(`data-default`)&&i.replaceWith(this.getSeparator()),r?t.setAttribute(`aria-current`,`page`):t.removeAttribute(`aria-current`)}),this.breadcrumbsElements.length===0){this.items=[],this.visibleItems=0;return}await Promise.all(this.breadcrumbsElements.map(e=>e.updateComplete)),this.calculateBreadcrumbItemsWidth(),this.visibleItems=0,this.adjustOverflow()}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{if(this.firstRender){this.firstRender=!1;return}this.adjustOverflow()}),this.resizeObserver.observe(this)}adjustOverflow(){}disconnectedCallback(){this.resizeObserver?.unobserve(this),super.disconnectedCallback()}render(){return p`
      <nav class="breadcrumbs" aria-label="${this.label}">
        <slot @slotchange="${this.handleSlotChange}"></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator"><span class="separator">/</span></slot>
      </span>
    `}};Fo.styles=[Po],r([h(`slot`)],Fo.prototype,`defaultSlot`,void 0),r([h(`slot[name="separator"]`)],Fo.prototype,`separatorSlot`,void 0),r([E({selector:`craft-breadcrumb-item`})],Fo.prototype,`breadcrumbsElements`,void 0),r([c()],Fo.prototype,`label`,void 0),r([f()],Fo.prototype,`items`,void 0),r([f()],Fo.prototype,`visibleItems`,void 0),customElements.get(`craft-breadcrumbs`)||customElements.define(`craft-breadcrumbs`,Fo);var Io=a`
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
`,Lo=class extends u{constructor(){super(),this.multiple=!1,this._childObserver=new MutationObserver(()=>this._markEnds()),this._selectionObserver=new MutationObserver(e=>{if(!(!this.name||this.multiple))for(let{target:t}of e)t instanceof Element&&t.localName===`craft-button`&&!t.hasAttribute(`active`)&&t.getAttribute(`value`)===this.value&&t.setAttribute(`active`,``)}),this._ownsRole=!1,this._formDisabledButtons=new Set,this._formDisabled=!1,this._handleClick=e=>{let t=e.composedPath().find(e=>e instanceof Element&&e.hasAttribute(`value`)&&e!==this);if(!t)return;if(this.multiple){t.toggleAttribute(`active`),this._syncChildren(),this.dispatchEvent(new CustomEvent(`change`,{bubbles:!0,composed:!0,detail:{values:this._selectedValues()}}));return}let n=t.getAttribute(`value`)??``;n!==this.value&&(this.value=n,this._syncChildren(),this.dispatchEvent(new CustomEvent(`change`,{bubbles:!0,composed:!0,detail:{value:n}})))},this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this._childObserver.observe(this,{childList:!0,attributes:!0,attributeFilter:[`hidden`,`style`,`class`,`active`,`aria-pressed`],subtree:!0}),this._selectionObserver.observe(this,{attributes:!0,attributeFilter:[`active`],subtree:!0})}firstUpdated(e){super.firstUpdated(e),this.name&&this._setupSelectionMode(),this._markEnds()}updated(e){(e.has(`name`)||e.has(`multiple`))&&(this.name?this._setupSelectionMode():this._teardownSelectionMode()),(e.has(`value`)||e.has(`multiple`))&&this.name&&this._syncChildren()}disconnectedCallback(){super.disconnectedCallback(),this._childObserver.disconnect(),this._selectionObserver.disconnect()}_markEnds(){let e=Array.from(this.children).filter(e=>this._isVisible(e)),t=e[0],n=e[e.length-1];for(let r of Array.from(this.children)){let i=e.indexOf(r),a=i>0?e[i-1]:void 0,o=i>=0?e[i+1]:void 0;r.toggleAttribute(`data-button-group-start`,r===t),r.toggleAttribute(`data-button-group-end`,r===n),r.toggleAttribute(`data-button-group-divider`,a!==void 0&&!this._isSelected(r)&&!this._isSelected(a)),r.toggleAttribute(`data-button-group-divider-end`,o!==void 0&&!this._isSelected(r)&&!this._isSelected(o))}}_isSelected(e){return e.hasAttribute(`active`)||e.getAttribute(`aria-pressed`)===`true`}_isVisible(e){if(e instanceof HTMLTemplateElement||e instanceof HTMLScriptElement||e instanceof HTMLStyleElement||e instanceof HTMLInputElement&&e.type===`hidden`||e instanceof HTMLElement&&e.hidden)return!1;let t=getComputedStyle(e).display;return t===`none`?!1:t!==`contents`||Array.from(e.children).some(e=>this._isVisible(e))}_setupSelectionMode(){this.hasAttribute(`role`)||(this.setAttribute(`role`,`group`),this._ownsRole=!0),this.removeEventListener(`click`,this._handleClick),this.addEventListener(`click`,this._handleClick),this._syncChildren(),this._defaultSelection??={value:this.value,active:this._selectedValues()}}formResetCallback(){if(!this.name||!this._defaultSelection)return;let{value:e,active:t}=this._defaultSelection;this.querySelectorAll(`craft-button`).forEach(e=>{e.toggleAttribute(`active`,this.multiple&&t.includes(e.getAttribute(`value`)??``))}),this.multiple||(this.value=e),this._syncChildren()}formDisabledCallback(e){this._formDisabled=e,this._applyFormDisabled()}_applyFormDisabled(){if(!this._formDisabled){this._formDisabledButtons.forEach(e=>e.removeAttribute(`disabled`)),this._formDisabledButtons.clear();return}this.querySelectorAll(`craft-button:not([disabled])`).forEach(e=>{e.setAttribute(`disabled`,``),this._formDisabledButtons.add(e)})}_teardownSelectionMode(){this._ownsRole&&=(this.removeAttribute(`role`),!1),this.removeEventListener(`click`,this._handleClick)}_adoptSlottedValue(){if(this.multiple||this.value!==void 0)return;let e=this.querySelector(`craft-button[active]`)?.getAttribute(`value`);e!=null&&(this.value=e,this._defaultSelection?.value===void 0&&(this._defaultSelection={value:e,active:[e]}))}_syncChildren(){if(this._adoptSlottedValue(),this.querySelectorAll(`craft-button`).forEach(e=>{e.getAttribute(`type`)!==`button`&&e.setAttribute(`type`,`button`);let t=this.multiple?e.hasAttribute(`active`):e.getAttribute(`value`)===this.value;this.multiple||e.toggleAttribute(`active`,t),e.setAttribute(`aria-pressed`,String(t))}),!this.multiple){this._internals.setFormValue(this.value??null);return}let e=new FormData;e.append(this.name,``),this._selectedValues().forEach(t=>{e.append(`${this.name}[]`,t)}),this._internals.setFormValue(e)}_selectedValues(){return Array.from(this.querySelectorAll(`craft-button[active]`),e=>e.getAttribute(`value`)??``)}render(){return p`<slot @slotchange=${this._onSlotChange}></slot>`}_onSlotChange(){this.name&&this._syncChildren(),this._applyFormDisabled(),this._markEnds()}};Lo.styles=[Io],Lo.formAssociated=!0,r([c({reflect:!0})],Lo.prototype,`name`,void 0),r([c({reflect:!0})],Lo.prototype,`value`,void 0),r([c({reflect:!0,type:Boolean})],Lo.prototype,`multiple`,void 0),customElements.get(`craft-button-group`)||customElements.define(`craft-button-group`,Lo);var Ro={dark:.9,light:.85},zo={dark:.6,light:.52},Bo=.65,Vo=.8;function Ho(e){let t=e.flat().filter(e=>e!==null);return t.length?Math.min(...t.map(([e])=>e))>=.25?`light`:`dark`:null}function Uo(e,t){let n=Array.isArray(e)?e:[],r=n.length&&Ho(n.slice(0,1))||`dark`,i=n.length&&Ho(n.slice(-1))||`dark`;return{header:t?{theme:r,treatment:`bar`,opacity:zo[r]}:{theme:r,treatment:`backed`,opacity:Bo},body:{theme:i,opacity:zo[i]}}}var Wo=a`
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
`,Go=e=>{if(typeof e!=`string`)return e;try{let t=JSON.parse(e);return Array.isArray(t)?t:null}catch{return null}},Ko=e=>e===`dark`?`rgb(255 255 255 / ${Ro.dark})`:`rgb(0 0 0 / ${Ro.light})`,qo=e=>e===`dark`?`#000`:`#fff`,Jo=e=>e===`dark`?`#fff`:`#000`,Yo=(e,t)=>e===`dark`?`rgb(0 0 0 / ${t})`:`rgb(255 255 255 / ${t})`,Xo=e=>e===`dark`?`rgb(255 255 255 / 20%)`:`rgb(0 0 0 / 15%)`,Zo=class extends ni(u,{customProperty:[`--c-card-padding-block`,`--c-card-padding-inline`]}){constructor(...e){super(...e),this.label=``,this.active=!1,this.collapsed=!1,this.showThumb=!0,this.thumbAlignment=`start`,this.coverSrc=``,this._coverFailed=!1,this.luminance=null,this._luminance=null,this._themed=new Set,this._lightDom=new M(this,{characterData:!0}),this._onCoverError=()=>{this._coverFailed=!0}}_hasLabel(){return!!this.label||ne(this,`label`)||Array.from(this.children).some(e=>e.slot===`header`&&!!e.querySelector(`[data-card-label]`))}_hasHeaderText(){return this._hasLabel()||ne(this,`badge`)}_hasHeaderContent(){let e=e=>e.tagName===`DIV`||e.tagName===`SPAN`;return!!this.label||Array.from(this.children).some(t=>[`header`,`label`,`badge`,`actions`].includes(t.slot)&&(!!t.textContent?.trim()||!e(t)||Array.from(t.querySelectorAll(`*`)).some(t=>!e(t))))}_cover(){return this.coverSrc&&!this._coverFailed?Uo(this._luminance,this._hasHeaderText()):null}willUpdate(e){super.willUpdate(e),e.has(`luminance`)&&(this._luminance=Go(this.luminance)),e.has(`coverSrc`)&&(this._coverFailed=!1)}_coverStyles(e){if(!e)return{};let{header:t,body:n}=e;return{"--_header-ink":Ko(t.theme),"--_header-ink-solid":Jo(t.theme),"--_header-solid":qo(t.theme),"--_header-fill":Yo(t.theme,t.opacity),"--_header-backing":t.treatment===`backed`?Yo(t.theme,t.opacity):void 0,"--_header-backing-hover":t.treatment===`backed`?Yo(t.theme,Vo):void 0,"--_header-rule":Xo(t.theme),"--_body-ink":Ko(n.theme),"--_body-ink-solid":Jo(n.theme),"--_body-solid":qo(n.theme),"--_body-scrim":String(n.opacity),"--_body-rule":Xo(n.theme)}}updated(){let e=this._cover(),t=new Set;if(e)for(let n of Array.from(this.children)){if(n.slot===`thumbnail`)continue;let r=n.slot===``||n.slot===`footer`;n.setAttribute(`data-theme`,r?e.body.theme:e.header.theme),n.setAttribute(`data-cover`,r?`body`:e.header.treatment),t.add(n)}for(let e of this._themed)t.has(e)||(e.removeAttribute(`data-theme`),e.removeAttribute(`data-cover`));this._themed=t}render(){let e=this._hasHeaderContent(),t=ne(this,`footer`),n=this._cover(),r=!n&&this.showThumb&&ne(this,`thumbnail`),a=!n&&e&&!this._hasLabel();return p`
      <div
        part="base"
        class="${N({card:!0,"card--has-thumbnail":r,"card--cover":!!n,"card--cover-bar":n?.header.treatment===`bar`,"card--bare-header":a})}"
        style="${ai({...this.paddingStyles,...this._coverStyles(n)})}"
      >
        ${n?p`<img
              class="card__cover"
              part="cover"
              src="${this.coverSrc}"
              alt=""
              loading="lazy"
              decoding="async"
              @error="${this._onCoverError}"
            />`:i}
        ${e?p`<div class="card__header" part="header">
              <slot name="header">
                <slot name="label" class="card__label" part="label"
                  >${this.label?p`<span class="card__label-text">${this.label}</span>`:i}</slot
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
          class="${N({"card-body":!0,"card-body--thumb-start":r&&this.thumbAlignment===`start`,"card-body--thumb-end":r&&this.thumbAlignment===`end`})}"
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

        ${t?p`<div class="card__footer" part="footer">
              <slot name="footer"></slot>
            </div>`:i}
      </div>
    `}};Zo.styles=[Wo],r([c()],Zo.prototype,`label`,void 0),r([c({type:Boolean,reflect:!0})],Zo.prototype,`active`,void 0),r([c({type:Boolean,reflect:!0})],Zo.prototype,`collapsed`,void 0),r([c({attribute:`show-thumb`,type:Boolean})],Zo.prototype,`showThumb`,void 0),r([c({attribute:`thumb-alignment`})],Zo.prototype,`thumbAlignment`,void 0),r([c({attribute:`cover-src`})],Zo.prototype,`coverSrc`,void 0),r([f()],Zo.prototype,`_coverFailed`,void 0),r([c({type:Array})],Zo.prototype,`luminance`,void 0),customElements.get(`craft-card`)||customElements.define(`craft-card`,Zo);var Qo={ArrowDown:1,ArrowRight:1,ArrowUp:-1,ArrowLeft:-1},$o=(e,{choice:t,multiple:n})=>{var i=new WeakMap,a=new WeakMap,o=new WeakMap,s=new WeakMap,l=new WeakMap,u=new WeakMap,d=new WeakSet,f=new WeakMap,m=new WeakMap;class h extends mi(e){constructor(...e){super(...e),b(this,d),this.name=``,this.required=!1,this.invalid=!1,this.multiple=n,w(this,i,void 0),w(this,a,[]),w(this,o,!1),w(this,s,new WeakSet),w(this,l,new WeakSet),w(this,u,new MutationObserver(e=>{if(C(d,this,T).call(this),!n){let t=this.choices,n=e.map(e=>e.target).reverse().find(e=>t.includes(e)&&e.checked&&e.hasAttribute(`checked`));if(n)C(d,this,O).call(this,n);else for(let e of t)e._syncFromControl?.()}C(d,this,D).call(this)})),w(this,f,e=>{let t=Qo[e.key],r=C(d,this,E).call(this,e.target);if(n||this.name||!t||!r||e.altKey||e.ctrlKey||e.metaKey)return;let i=this.choices.filter(e=>!e.disabled),a=e.key!==`ArrowDown`&&e.key!==`ArrowUp`&&getComputedStyle(this).direction===`rtl`,o=i.at((i.indexOf(r)+(a?-t:t))%i.length);o&&(e.preventDefault(),o._control?.focus(),o.checked||o._control?.click())}),w(this,m,e=>{let t=C(d,this,E).call(this,e.target);t&&(S(i,this,void 0),t._syncFromControl(),!n&&t.checked&&C(d,this,O).call(this,t),e.type===`change`&&this.requestUpdate(`value`))})}get choices(){return[...this.querySelectorAll(t)].filter(e=>e.parentElement?.closest(this.localName)===this)}get value(){let e=this.choices.filter(e=>e.checked).map(e=>e.value);return n?e:e[0]??``}set value(e){let t=this.value,n=(Array.isArray(e)?e:e==null||e===``?[]:[e]).map(String);S(i,this,n),C(d,this,y).call(this,this.choices,n),this.requestUpdate(`value`,t)}get _control(){return this}connectedCallback(){C(d,this,g).call(this),super.connectedCallback(),this.setAttribute(`role`,n?`group`:`radiogroup`),this._labelNode?.removeAttribute(`for`),this.classList.remove(`form-control`),this.addEventListener(`input`,x(m,this),!0),this.addEventListener(`change`,x(m,this),!0),this.addEventListener(`keydown`,x(f,this)),x(u,this).observe(this,{childList:!0,subtree:!0,...n?{}:{attributes:!0,attributeFilter:[`checked`,`disabled`]}}),S(a,this,[]),C(d,this,T).call(this)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`input`,x(m,this),!0),this.removeEventListener(`change`,x(m,this),!0),this.removeEventListener(`keydown`,x(f,this)),x(u,this).disconnect()}willUpdate(e){super.willUpdate(e),C(d,this,g).call(this)}updated(e){if(super.updated(e),e.has(`name`)&&x(o,this))for(let e of this.choices)e.name=this.name;if(e.has(`disabled`)&&e.get(`disabled`)!==void 0)for(let e of this.choices)this.disabled?C(d,this,_).call(this,e):x(s,this).delete(e)&&(e.disabled=!1);let t=(e,t)=>t?this.setAttribute(e,`true`):this.removeAttribute(e);e.has(`required`)&&!n&&t(`aria-required`,this.required),e.has(`invalid`)&&t(`aria-invalid`,this.invalid),C(d,this,D).call(this)}_inputGroupTemplate(){return p`<div class="input-group"><slot></slot></div>`}_onChoicesChanged(){}}function g(){if(this.name&&S(o,this,!0),x(o,this))return;let e=n?`checkbox`:`radio`,t=this.querySelector(`input[type="${e}"][name]`);t&&(this.name=t.name)}function _(e){C(d,this,v).call(this,e)||(e.disabled=!0,x(s,this).add(e))}function v(e){let t=e,n=t.querySelector(`:scope > [slot="input"]`);return e.disabled||t.hasAttribute(`disabled`)||n instanceof HTMLInputElement&&n.disabled}function y(e,t){let r=!1;for(let i of e){let e=t.includes(i.value)&&(n||!r);r||=e,i.checked=e}}function T(){let e=this.choices,t=x(a,this);if(e.length===t.length&&e.every((e,n)=>e===t[n]))return;let n=new Set(t),r=e.filter(e=>!n.has(e));S(a,this,e);for(let e of r)x(o,this)&&(e.name=this.name),this.disabled&&C(d,this,_).call(this,e);x(i,this)&&C(d,this,y).call(this,r,x(i,this)),this._onChoicesChanged(),this.requestUpdate(`value`)}function E(e){let n=e.closest(t);return n?._control===e&&n.parentElement?.closest(this.localName)===this?n:void 0}function D(){if(n)return;let e=this.choices,t=this.name?void 0:e.find(e=>e.checked&&!e.disabled)??e.find(e=>!e.disabled);for(let n of e){let e=n._control;if(e)this.name?x(l,this).delete(e)&&e.removeAttribute(`tabindex`):(e.tabIndex=n===t?0:-1,x(l,this).add(e));else continue}}function O(e){for(let t of this.choices)t!==e&&t.checked&&(t.checked=!1),t._syncFromControl?.()}return r([c({reflect:!0})],h.prototype,`name`,void 0),r([c({type:Boolean})],h.prototype,`required`,void 0),r([c({type:Boolean,reflect:!0})],h.prototype,`invalid`,void 0),r([c({attribute:!1})],h.prototype,`value`,null),h},es=class extends $o(u,{choice:`craft-checkbox`,multiple:!0}){};es.styles=[ui,a`
      ${Xr}

      .input-group {
        display: grid;
        gap: var(--c-spacing-sm);
      }

      ::slotted(label) {
        font-weight: bold;
      }
    `],customElements.get(`craft-checkbox-group`)||customElements.define(`craft-checkbox-group`,es);var ts=(e,t)=>{e.dispatchEvent(t===void 0?new Event(`input`,{bubbles:!0,composed:!0}):new InputEvent(`input`,{bubbles:!0,composed:!0,inputType:t}))},ns=e=>{e.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))},rs=[ui,a`
    :host {
      display: flex;
      flex-wrap: wrap;
    }

    .choice-field__help-text {
      display: block;
      flex-basis: 100%;
    }

    /*
     * Clipped rather than hidden, so the label and help text stay in the
     * accessibility tree. A focusable link in the help text shows on focus.
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
  `];function is(e){return(e??``).split(/\s+/).filter(Boolean)}var as=e=>{var t=new WeakMap,n=new WeakMap,i=new WeakMap,a=new WeakMap,o=new WeakMap,s=new WeakMap,l=new WeakSet,u=new WeakMap,d=new WeakMap,f=new WeakMap,m=new WeakMap;class h extends mi(e){constructor(...e){super(...e),b(this,l),this.name=``,this.required=!1,this.invalid=!1,w(this,t,void 0),w(this,n,void 0),w(this,i,!1),w(this,a,!1),w(this,o,void 0),w(this,s,void 0),w(this,u,e=>{e.target===this._control&&this._syncFromControl()}),w(this,d,e=>{e.target===g.call(C(l,this))?.form&&setTimeout(()=>this._syncFromControl())}),w(this,f,e=>{let t=this._control;e.target===t&&this.toggleAttribute(`focused-visible`,t.matches(`:focus-visible`))}),w(this,m,e=>{e.target===this._control&&this.removeAttribute(`focused-visible`)})}get checked(){return this._control?.checked??x(t,this)??!1}set checked(e){let n=this.checked,r=this._control;r?r.checked=e:S(t,this,e),this.requestUpdate(`checked`,n)}get value(){return x(n,this)??g.call(C(l,this))?.value??this._defaultValue}set value(e){let t=this.value;S(n,this,e==null?void 0:String(e)),this.requestUpdate(`value`,t)}get _control(){return super._control}get _defaultValue(){return``}connectedCallback(){super.connectedCallback(),C(l,this,_).call(this),this.addEventListener(`change`,x(u,this)),this.addEventListener(`focusin`,x(f,this)),this.addEventListener(`focusout`,x(m,this)),S(s,this,this.getRootNode()),x(s,this).addEventListener(`reset`,x(d,this),!0)}disconnectedCallback(){super.disconnectedCallback(),x(s,this)?.removeEventListener(`reset`,x(d,this),!0),this.removeEventListener(`change`,x(u,this)),this.removeEventListener(`focusin`,x(f,this)),this.removeEventListener(`focusout`,x(m,this))}willUpdate(e){super.willUpdate(e),C(l,this,_).call(this)}updated(e){super.updated(e),this._pushToControl(e),S(i,this,this.checked)}_syncFromControl(){let e=this._control;e&&e.checked!==x(i,this)&&this.requestUpdate(`checked`,x(i,this))}focus(e){this._control?.focus(e)}blur(){this._control?.blur()}_enhanceLightDomA11y(){let e=this._control,t=this.getRootNode();if(e&&`getElementById`in t){let n=n=>is(e.getAttribute(n)).map(e=>t.getElementById(e)).filter(e=>e instanceof HTMLElement);for(let e of n(`aria-labelledby`))this.addToAriaLabelledBy(e);for(let e of n(`aria-describedby`))this.addToAriaDescribedBy(e)}super._enhanceLightDomA11y()}_pushToControl(e){let t=this._control;if(!t)return;let r=!x(a,this);S(a,this,!0);let i=(t,n)=>e.has(t)&&!(r&&(n===void 0||n===``||n===!1)),o=(e,n)=>{n?t.setAttribute(e,`true`):t.removeAttribute(e)},s=g.call(C(l,this));s&&i(`name`,this.name)&&(s.name=this.name),s&&e.has(`value`)&&x(n,this)!==void 0&&(s.value=x(n,this)),i(`disabled`,this.disabled)&&(t.disabled=this.disabled),i(`required`,this.required)&&o(`aria-required`,this.required),i(`invalid`,this.invalid)&&o(`aria-invalid`,this.invalid)}render(){return p`<slot name="input"></slot>
        <div class="choice-field__label">
          <slot name="label"></slot>
        </div>
        <small class="choice-field__help-text">
          <slot name="help-text"></slot>
        </small>`}}function g(){let e=this._control;return e instanceof HTMLInputElement?e:void 0}function _(){let e=this._control;if(!e||e===x(o,this))return;S(o,this,e),customElements.upgrade(e),x(t,this)!==void 0&&(e.checked=x(t,this),S(t,this,void 0)),e.disabled&&!this.disabled&&(this.disabled=!0);let n=e.getAttribute(`name`);!this.name&&n&&(this.name=n),e instanceof HTMLInputElement&&C(l,this,v).call(this,e),this._syncFromControl()}function v(e){let t=this;for(let n of[`checked`,`disabled`]){let r=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,n);if(!r?.get||!r.set)continue;let{get:i,set:a}=r;Object.defineProperty(e,n,{configurable:!0,enumerable:r.enumerable,get(){return i.call(this)},set(e){a.call(this,e),n===`disabled`?t.disabled!==e&&(t.disabled=e):t._syncFromControl()}})}}return h.styles=rs,r([c({type:Boolean,reflect:!0})],h.prototype,`checked`,null),r([c()],h.prototype,`value`,null),r([c({reflect:!0})],h.prototype,`name`,void 0),r([c({type:Boolean})],h.prototype,`required`,void 0),r([c({type:Boolean,reflect:!0})],h.prototype,`invalid`,void 0),h},os=new WeakMap,ss=class extends as(u){get slots(){return{...super.slots,input:()=>{let e=document.createElement(`input`);return e.type=`checkbox`,e}}}constructor(){super(),this.indeterminate=!1,w(this,os,void 0),this.addEventListener(`change`,e=>{e.target===this._control&&this.indeterminate&&(this.indeterminate=e.target.indeterminate)})}updated(e){super.updated(e);let t=this._control;t instanceof HTMLInputElement&&(e.has(`indeterminate`)||t!==x(os,this))&&(t.indeterminate=this.indeterminate,S(os,this,t))}render(){return p`${super.render()} ${this._feedbackTemplate()}`}};ss.styles=[rs,a`
      :host(:not([label-sr-only])) {
        --_gap-x: var(--gap-x, var(--c-spacing-md));
        display: grid;
        align-items: center;
        gap: 0 var(--_gap-x);
        grid-template-areas: 'input label' '. help-text' '. feedback';
        grid-template-columns: auto 1fr;
        grid-template-rows: repeat(3, auto);
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

      .form-field__feedback {
        flex-basis: 100%;
        grid-area: feedback;
      }
    `],r([c({type:Boolean,reflect:!0})],ss.prototype,`indeterminate`,void 0),customElements.get(`craft-checkbox`)||customElements.define(`craft-checkbox`,ss);var cs=a`
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
`,ls=class extends u{constructor(){super(),this.label=null,this.position=`middle`,this.orientation=`vertical`,this.moves=[],this.variant=`plain`,this.disabled=!1,this.nested=!1,this.canIndent=!1,this.canOutdent=!1,this._hasFocus=!1,this._movedWhileFocused=!1,this._stopMenuEvent=e=>{e.target===e.currentTarget&&e.stopPropagation()},this.addEventListener(`focusin`,()=>{this._hasFocus=!0}),this.addEventListener(`focusout`,e=>{let t=e.relatedTarget;t instanceof Node&&!this.contains(t)?this._hasFocus=!1:t||setTimeout(()=>{this.isConnected&&!this.matches(`:focus-within`)&&(this._hasFocus=!1)})})}connectedCallback(){if(super.connectedCallback(),!this._movedWhileFocused)return;this._movedWhileFocused=!1;let e=document.activeElement;(!e||e===document.body)&&this._focusInvoker()}disconnectedCallback(){super.disconnectedCallback(),this._hasFocus&&(this._movedWhileFocused=!0,setTimeout(()=>{this._movedWhileFocused=!1,this.isConnected||(this._hasFocus=!1)}))}updated(e){super.updated(e),e.has(`disabled`)&&(this.disabled?this.setAttribute(`aria-disabled`,`true`):this.removeAttribute(`aria-disabled`))}_focusInvoker(){this.shadowRoot?.querySelector(`craft-button`)?.focus()}_canMove(e){switch(e){case`up`:return this.position!==`first`&&this.position!==`only`;case`down`:return this.position!==`last`&&this.position!==`only`;case`indent`:return this.nested&&this.canIndent;case`outdent`:return this.nested&&this.canOutdent}}_reorder(e){this.disabled||!this._canMove(e)||(this.matches(`:focus-within`)&&this._focusInvoker(),this.dispatchEvent(new CustomEvent(`craft-reorder`,{detail:{direction:e},bubbles:!0,composed:!0})))}_move(e){this.disabled||this.dispatchEvent(new CustomEvent(`craft-move`,{detail:{value:e},bubbles:!0,composed:!0}))}_isRtl(){return(this.closest(`[dir]`)?.getAttribute(`dir`)??document.documentElement.getAttribute(`dir`))?.toLowerCase()===`rtl`}render(){let e=this.label??n(`Reorder`),t=this.orientation===`horizontal`,r=t&&this._isRtl(),a=t?r?`arrow-right`:`arrow-left`:`arrow-up`,o=t?r?`arrow-left`:`arrow-right`:`arrow-down`,s=n(t?`Move forward`:`Move up`),c=n(t?`Move backward`:`Move down`);return p`
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
          flush=${Ve(this.flush)}
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
          ${this.nested?p`
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
          ${this.moves.length>0?p`
                <hr class="separator" />
                ${this.moves.map(e=>p`
                    <craft-action-item
                      icon="${Ve(e.icon??void 0)}"
                      @click="${()=>this._move(e.value)}"
                      >${e.label}</craft-action-item
                    >
                  `)}
              `:i}
        </div>
      </craft-action-menu>
    `}};ls.styles=[cs],r([c()],ls.prototype,`label`,void 0),r([c({reflect:!0})],ls.prototype,`position`,void 0),r([c({reflect:!0})],ls.prototype,`orientation`,void 0),r([c({attribute:!1})],ls.prototype,`moves`,void 0),r([c({reflect:!0})],ls.prototype,`variant`,void 0),r([c({reflect:!0})],ls.prototype,`flush`,void 0),r([c({reflect:!0,type:Boolean})],ls.prototype,`disabled`,void 0),r([c({reflect:!0,type:Boolean})],ls.prototype,`nested`,void 0),r([c({attribute:`can-indent`,type:Boolean})],ls.prototype,`canIndent`,void 0),r([c({attribute:`can-outdent`,type:Boolean})],ls.prototype,`canOutdent`,void 0),customElements.get(`craft-reorder-button`)||customElements.define(`craft-reorder-button`,ls);var{I:us}=d,ds=()=>document.createComment(``),fs=(e,t,n)=>{let r=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(n===void 0)n=new us(r.insertBefore(ds(),i),r.insertBefore(ds(),i),e,e.options);else{let t=n._$AB.nextSibling,a=n._$AM,o=a!==e;if(o){let t;n._$AQ?.(e),n._$AM=e,n._$AP!==void 0&&(t=e._$AU)!==a._$AU&&n._$AP(t)}if(t!==i||o){let e=n._$AA;for(;e!==t;){let t=e.nextSibling;r.insertBefore(e,i),e=t}}}return n},ps=(e,t,n=e)=>(e._$AI(t,n),e),ms={},hs=(e,t=ms)=>e._$AH=t,gs=e=>e._$AH,_s=e=>{e._$AR(),e._$AA.remove()},vs=(e,t,n)=>{let r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},ys=oe(class extends se{constructor(e){if(super(e),e.type!==ae.CHILD)throw Error(`repeat() can only be used in text expressions`)}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);let i=[],a=[],o=0;for(let t of e)i[o]=r?r(t,o):o,a[o]=n(t,o),o++;return{values:a,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,r]){let i=gs(e),{values:a,keys:o}=this.dt(t,n,r);if(!Array.isArray(i))return this.ut=o,a;let s=this.ut??=[],c=[],u,d,f=0,p=i.length-1,m=0,h=a.length-1;for(;f<=p&&m<=h;)if(i[f]===null)f++;else if(i[p]===null)p--;else if(s[f]===o[m])c[m]=ps(i[f],a[m]),f++,m++;else if(s[p]===o[h])c[h]=ps(i[p],a[h]),p--,h--;else if(s[f]===o[h])c[h]=ps(i[f],a[h]),fs(e,c[h+1],i[f]),f++,h--;else if(s[p]===o[m])c[m]=ps(i[p],a[m]),fs(e,i[f],i[p]),p--,m++;else if(u===void 0&&(u=vs(o,m,h),d=vs(s,f,p)),u.has(s[f]))if(u.has(s[p])){let t=d.get(o[m]),n=t===void 0?null:i[t];if(n===null){let t=fs(e,i[f]);ps(t,a[m]),c[m]=t}else c[m]=ps(n,a[m]),fs(e,i[f],n),i[t]=null;m++}else _s(i[p]),p--;else _s(i[f]),f++;for(;m<=h;){let t=fs(e,c[h+1]);ps(t,a[m]),c[m++]=t}for(;f<=p;){let e=i[f++];e!==null&&_s(e)}return this.ut=o,hs(e,c),l}}),bs=new WeakMap,xs=new WeakMap,Ss=new WeakMap,Cs=new WeakMap,ws=new WeakMap,Ts=new WeakSet,Es=new WeakMap,Ds=new WeakMap,Os=new WeakMap,ks=new WeakMap,As=class{constructor(e,t){b(this,Ts),this.draggingIndex=null,this.dropIndex=null,w(this,bs,void 0),w(this,xs,void 0),w(this,Ss,[]),w(this,Cs,[]),w(this,ws,null),w(this,Es,e=>{let t=x(ws,this);if(!(!t||e.pointerId!==t.pointerId)){if(this.draggingIndex===null){if(Math.hypot(e.clientX-t.x,e.clientY-t.y)<4)return;C(Ts,this,Ps).call(this,t.index,null)}e.preventDefault(),C(Ts,this,Ps).call(this,this.draggingIndex,C(Ts,this,Ns).call(this,e))}}),w(this,Ds,e=>{let t=x(ws,this);if(!t||e.pointerId!==t.pointerId)return;let n=this.draggingIndex,r=this.dropIndex,i=n!==null;if(C(Ts,this,Ms).call(this),!i)return;let a=e=>{e.preventDefault(),e.stopImmediatePropagation()};if(t.handle.addEventListener(`click`,a,{capture:!0,once:!0}),setTimeout(()=>t.handle.removeEventListener(`click`,a,!0)),r!==null){let e=r>n?r-1:r;e!==n&&x(xs,this).onReorder(n,e)}}),w(this,Os,e=>{e.pointerId===x(ws,this)?.pointerId&&C(Ts,this,Ms).call(this)}),w(this,ks,e=>{e.key===`Escape`&&this.draggingIndex!==null&&(e.preventDefault(),e.stopPropagation(),C(Ts,this,Ms).call(this))}),S(bs,this,e),S(xs,this,t),e.addController(this)}hostDisconnected(){C(Ts,this,Ms).call(this),this.setItems([])}setItems(e){for(let e of x(Cs,this))e();S(Ss,this,e),S(Cs,this,e.map(({element:e,handle:t},n)=>{let r=t??e,i=e=>C(Ts,this,js).call(this,e,n,r);return r.addEventListener(`pointerdown`,i),()=>r.removeEventListener(`pointerdown`,i)}))}};function js(e,t,n){e.button!==0||e.pointerType===`touch`||x(ws,this)||n.matches(`[disabled]`)||(S(ws,this,{index:t,pointerId:e.pointerId,handle:n,x:e.clientX,y:e.clientY}),window.addEventListener(`pointermove`,x(Es,this)),window.addEventListener(`pointerup`,x(Ds,this)),window.addEventListener(`pointercancel`,x(Os,this)),window.addEventListener(`keydown`,x(ks,this),!0))}function Ms(){S(ws,this,null),window.removeEventListener(`pointermove`,x(Es,this)),window.removeEventListener(`pointerup`,x(Ds,this)),window.removeEventListener(`pointercancel`,x(Os,this)),window.removeEventListener(`keydown`,x(ks,this),!0),C(Ts,this,Ps).call(this,null,null)}function Ns(e){let t=x(Ss,this).length;for(let[n,{element:r}]of x(Ss,this).entries()){let i=r.getBoundingClientRect();if(e.clientY<i.top+i.height/2){t=n;break}}let n=this.draggingIndex;return n!==null&&(t===n||t===n+1)?null:t}function Ps(e,t){(e!==this.draggingIndex||t!==this.dropIndex)&&(this.draggingIndex=e,this.dropIndex=t,x(bs,this).requestUpdate())}var Fs=a`
  ${re}

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
`,Is=`governedName`,Ls=`disabledByGroup`,Rs=0,zs=new WeakMap,Bs=new WeakMap,Vs=new WeakMap,Hs=new WeakMap,z=new WeakSet,Us=new WeakMap,Ws=class extends u{get options(){return C(z,this,dc).call(this).map(e=>C(z,this,uc).call(this,e))}set options(e){let t=C(z,this,dc).call(this),n=new Set(e.map(e=>String(e.value)));for(let e of t)n.has(C(z,this,yc).call(this,e))||e.remove();let r=[],i=C(z,this,pc).call(this)??C(z,this,gc).call(this);for(let t of e){let e=C(z,this,fc).call(this,String(t.value));e||(e=C(z,this,cc).call(this,t),r.push(e)),C(z,this,lc).call(this,e,t),i?i.after(e):this.prepend(e),i=e}if(C(z,this,hc).call(this)&&C(z,this,mc).call(this)?.checked){for(let e of r)C(z,this,tc).call(this,e,!0);C(z,this,rc).call(this)}this.requestUpdate(`options`)}get value(){return C(z,this,hc).call(this)&&C(z,this,mc).call(this)?.checked?[this.allValue]:C(z,this,dc).call(this).filter(e=>C(z,this,vc).call(this,e)?.checked).map(e=>C(z,this,yc).call(this,e))}set value(e){this.allLabel&&!C(z,this,pc).call(this)&&(C(z,this,oc).call(this),C(z,this,sc).call(this));let t=new Set((e??[]).map(String)),n=C(z,this,hc).call(this)&&t.has(this.allValue);for(let e of C(z,this,dc).call(this)){let r=C(z,this,vc).call(this,e);r&&!r.disabled&&(r.checked=n||t.has(C(z,this,yc).call(this,e)))}let r=C(z,this,mc).call(this);r&&C(z,this,hc).call(this)&&(r.checked=n),C(z,this,rc).call(this),this.requestUpdate(`value`)}addOption(e,t){let n=C(z,this,fc).call(this,String(e.value))??C(z,this,cc).call(this,e);C(z,this,lc).call(this,n,e);let r=C(z,this,dc).call(this).filter(e=>e!==n),i=t===void 0?null:r[t]??null,a=r.at(-1)??C(z,this,pc).call(this)??C(z,this,gc).call(this);i?i.before(n):a?a.after(n):this.prepend(n),C(z,this,hc).call(this)&&C(z,this,mc).call(this)?.checked&&(C(z,this,tc).call(this,n,!0),C(z,this,rc).call(this)),this.requestUpdate()}removeOption(e){C(z,this,fc).call(this,String(e))?.remove(),this.requestUpdate()}updateOption(e,t){let n=C(z,this,fc).call(this,String(e));n&&(C(z,this,lc).call(this,n,{...C(z,this,uc).call(this,n),...t}),C(z,this,ic).call(this),C(z,this,rc).call(this),this.requestUpdate())}constructor(){super(),b(this,z),this.name=null,this.label=null,this.disabled=!1,this.sortable=!1,this.presentation=`checkboxes`,this.allLabel=null,this.allValue=`*`,this.allMode=`single-value`,this._revision=0,this._status=``,w(this,zs,new WeakMap),w(this,Bs,new As(this,{onReorder:(e,t)=>C(z,this,ec).call(this,e,t)})),w(this,Vs,null),w(this,Hs,null),w(this,Us,e=>{let t=e.target;!(t instanceof HTMLInputElement)||t.type!==`checkbox`||(t===C(z,this,mc).call(this)?C(z,this,nc).call(this,t.checked):C(z,this,rc).call(this),this.requestUpdate())}),this.addEventListener(`change`,x(Us,this),!0);for(let e of[`options`,`value`])if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],queueMicrotask(()=>{this[e]=t})}}connectedCallback(){super.connectedCallback(),S(Vs,this,new MutationObserver(()=>C(z,this,ac).call(this))),x(Vs,this).observe(this,{childList:!0,subtree:!0,characterData:!0})}disconnectedCallback(){super.disconnectedCallback(),x(Vs,this)?.disconnect(),S(Vs,this,null)}willUpdate(e){(e.has(`name`)||e.has(`allLabel`)||e.has(`allMode`))&&(C(z,this,oc).call(this),C(z,this,sc).call(this)),e.has(`disabled`)&&C(z,this,ic).call(this),(e.has(`allMode`)||e.has(`allLabel`))&&C(z,this,rc).call(this);for(let e of C(z,this,dc).call(this))x(zs,this).has(e)||x(zs,this).set(e,`item-${Rs++}`),e.slot=x(zs,this).get(e);C(z,this,pc).call(this)?.setAttribute(`slot`,`all`)}updated(){x(Bs,this).setItems(C(z,this,Ys).call(this).flatMap(e=>{let t=C(z,this,_c).call(this,e);return t?[{element:t,handle:t.querySelector(`craft-reorder-button`)}]:[]}));let e=x(Hs,this);S(Hs,this,null),e&&C(z,this,Gs).call(this,e)}render(){this._revision;let e=C(z,this,Js).call(this),t=C(z,this,Xs).call(this),r=C(z,this,Ys).call(this);return p`
      ${this.label?p`<div id="label" class="label" part="label">${this.label}</div>`:i}
      <div
        class="group"
        part="group"
        role=${this.label?`group`:i}
        aria-labelledby=${this.label?`label`:i}
      >
        <slot name="all"></slot>
        ${e.length?p`<div class="items" part="items">
              ${ys(e,e=>x(zs,this).get(e),e=>C(z,this,Ks).call(this,e,r))}
            </div>`:i}
        ${this.presentation===`add-menu`&&t.length&&!this.disabled?p`<craft-action-menu
              class="add"
              part="add-menu"
              ?searchable=${t.length>10}
              .actions=${()=>C(z,this,Zs).call(this)}
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
    `}};async function Gs(e){let t=e();await t?.updateComplete,t?.localName===`craft-reorder-button`&&(t=t.shadowRoot?.querySelector(`craft-button`)??t,await t.updateComplete),t?.focus()}function Ks(e,t){let r=x(zs,this).get(e),a=t.indexOf(e),o=a!==-1,s=o&&x(Bs,this).draggingIndex===a,c=x(Bs,this).dropIndex,l=C(z,this,uc).call(this,e),u=this.presentation===`add-menu`;return p`<div
      class="row ${s?`row--dragging`:``}"
      part="row"
      data-key=${r}
      data-drop=${c===a?`before`:c===a+1&&a===t.length-1?`after`:i}
    >
      ${this.sortable?p`<craft-reorder-button
            class="handle"
            position=${C(z,this,qs).call(this,a,t.length)}
            ?disabled=${!o||t.length<2}
            @craft-reorder=${e=>C(z,this,ec).call(this,a,a+(e.detail.direction===`up`?-1:1),!0)}
          ></craft-reorder-button>`:i}
      ${u?p`<span class="row__label">
              ${l.labelHtml===void 0?l.label:le(l.labelHtml)}
              ${l.info?p`<span class="row__info"
                    >${le(l.info)}</span
                  >`:i}
            </span>
            ${!l.disabled&&!this.disabled?p`<craft-button
                  class="remove"
                  type="button"
                  icon="xmark"
                  size="small"
                  variant="plain"
                  aria-label=${n(`Remove {name}`,{name:l.label})}
                  @click=${()=>C(z,this,$s).call(this,e)}
                ></craft-button>`:i}`:p`<slot name=${r}></slot>`}
    </div>`}function qs(e,t){return t<2?`only`:e<=0?`first`:e===t-1?`last`:`middle`}function Js(){let e=C(z,this,dc).call(this);return this.presentation===`add-menu`?C(z,this,mc).call(this)?.checked?[]:e.filter(e=>C(z,this,vc).call(this,e)?.checked):e}function Ys(){return!this.sortable||this.disabled?[]:C(z,this,Js).call(this).filter(e=>!C(z,this,vc).call(this,e)?.disabled)}function Xs(){return C(z,this,mc).call(this)?.checked?[]:C(z,this,dc).call(this).filter(e=>{let t=C(z,this,vc).call(this,e);return t&&!t.checked&&!t.disabled})}function Zs(){return C(z,this,Xs).call(this).map(e=>({label:C(z,this,bc).call(this,e),onClick:()=>C(z,this,Qs).call(this,e)}))}function Qs(e){let t=C(z,this,Js).call(this).at(-1);t&&t!==e&&t.after(e),C(z,this,tc).call(this,e,!0,!0),this._status=n(`Added {name}`,{name:C(z,this,bc).call(this,e)}),C(z,this,Xs).call(this).length||S(Hs,this,()=>C(z,this,_c).call(this,e)?.querySelector(`.remove`))}function $s(e){let t=C(z,this,Js).call(this),r=t.indexOf(e),i=[...t.slice(r+1),...t.slice(0,r).reverse()].find(e=>!C(z,this,vc).call(this,e)?.disabled);C(z,this,tc).call(this,e,!1,!0),this._status=n(`Removed {name}`,{name:C(z,this,bc).call(this,e)}),S(Hs,this,()=>(i&&C(z,this,_c).call(this,i)?.querySelector(`.remove`))??this.renderRoot.querySelector(`.add craft-button[slot="invoker"]`))}function ec(e,t,r=!1){let i=C(z,this,Ys).call(this),a=i[e],o=i[t];!a||!o||a===o||(t>e?o.after(a):o.before(a),this._status=n(`Moved {name} to position {position}`,{name:C(z,this,bc).call(this,a),position:t+1}),r&&S(Hs,this,()=>C(z,this,_c).call(this,a)?.querySelector(`craft-reorder-button`)),this.requestUpdate(),this.dispatchEvent(new CustomEvent(`craft-order-change`,{bubbles:!0,composed:!0,detail:{value:C(z,this,yc).call(this,a),index:t}})),ns(this))}function tc(e,t,n=!1){let r=C(z,this,vc).call(this,e);!r||r.checked===t||(r.checked=t,n&&ns(r))}function nc(e){for(let t of C(z,this,dc).call(this))C(z,this,vc).call(this,t)?.disabled||C(z,this,tc).call(this,t,e);C(z,this,rc).call(this)}function rc(){let e=C(z,this,pc).call(this),t=C(z,this,mc).call(this),n=C(z,this,dc).call(this).filter(e=>!C(z,this,vc).call(this,e)?.disabled),r=n.filter(e=>C(z,this,vc).call(this,e)?.checked).length,i=C(z,this,hc).call(this)&&n.length===0;if(e&&t&&!i){let i=n.length>0&&r===n.length;t.checked=i;let a=e.querySelector(`craft-checkbox`);a&&(a.indeterminate=r>0&&!i)}let a=C(z,this,hc).call(this)&&!!t?.checked;for(let e of C(z,this,dc).call(this)){let t=C(z,this,vc).call(this,e);t&&(a?t.name&&(t.dataset[Is]=t.name,t.removeAttribute(`name`)):t.dataset[Is]!==void 0&&(t.name=t.dataset[Is],delete t.dataset[Is]))}}function ic(){for(let e of this.querySelectorAll(`:scope > .cp-checkbox-select__item input[type="checkbox"]`))this.disabled&&!e.disabled?(e.disabled=!0,e.dataset[Ls]=``):!this.disabled&&e.dataset[Ls]!==void 0&&(e.disabled=!1,delete e.dataset[Ls])}function ac(){this._revision++}function oc(){let e=C(z,this,gc).call(this);if(!this.name){e?.remove();return}if(e){e.name=this.name;return}let t=document.createElement(`input`);t.type=`hidden`,t.name=this.name,t.value=``,t.dataset.empty=``,this.prepend(t)}function sc(){let e=C(z,this,pc).call(this);if(!this.allLabel){e?.remove();return}let t=e??C(z,this,cc).call(this,{value:this.allValue,label:this.allLabel});t.classList.add(`all`);let n=C(z,this,vc).call(this,t);n.value=this.allValue,e||(t.dataset.generated=``),t.dataset.generated!==void 0&&(this.allMode===`single-value`&&this.name?n.name=`${this.name}[]`:n.removeAttribute(`name`));let r=t.querySelector(`label`);if(r&&r.textContent!==this.allLabel&&(r.textContent=this.allLabel),!e){let e=C(z,this,gc).call(this);e?e.after(t):this.prepend(t)}}function cc(e){let t=`${this.id||`checkbox-select`}-${Rs++}`,n=document.createElement(`div`);n.className=`cp-checkbox-select__item`;let r=document.createElement(`craft-checkbox`),i=document.createElement(`input`);i.type=`checkbox`,i.className=`checkbox`,i.slot=`input`,i.id=t,i.value=String(e.value),this.name&&(i.name=`${this.name}[]`);let a=document.createElement(`label`);return a.slot=`label`,a.htmlFor=t,a.id=`${t}-label`,r.append(i,a),n.append(r),n}function lc(e,t){let n=C(z,this,vc).call(this,e),r=e.querySelector(`craft-checkbox > label`);n&&(t.checked!==void 0&&(n.checked=t.checked),t.disabled!==void 0&&(n.disabled=t.disabled,delete n.dataset[Ls])),r&&(t.labelHtml===void 0?r.textContent!==t.label&&(r.textContent=t.label):r.innerHTML!==t.labelHtml&&(r.innerHTML=t.labelHtml),r.dataset.label=t.label);let i=e.querySelector(`craft-checkbox`),a=i?.querySelector(`:scope > [slot="help-text"][data-info]`);t.info?(a||(a=document.createElement(`div`),a.slot=`help-text`,a.dataset.info=``,i?.append(a)),a.innerHTML!==t.info&&(a.innerHTML=t.info)):a?.remove()}function uc(e){let t=C(z,this,vc).call(this,e),n=e.querySelector(`craft-checkbox > label, :scope > label`),r=e.querySelector(`[slot="help-text"][data-info]`);return{value:C(z,this,yc).call(this,e),label:C(z,this,bc).call(this,e),...n?.children.length?{labelHtml:n.innerHTML}:{},...r?{info:r.innerHTML}:{},checked:!!t?.checked,disabled:!!t?.disabled&&t.dataset[Ls]===void 0}}function dc(){return Array.from(this.querySelectorAll(`:scope > .cp-checkbox-select__item`)).filter(e=>!e.classList.contains(`all`))}function fc(e){return C(z,this,dc).call(this).find(t=>C(z,this,yc).call(this,t)===e)}function pc(){return this.querySelector(`:scope > .cp-checkbox-select__item.all`)}function mc(){let e=C(z,this,pc).call(this);return e?C(z,this,vc).call(this,e):null}function hc(){return!!C(z,this,pc).call(this)&&this.allMode===`single-value`}function gc(){return this.querySelector(`:scope > input[type="hidden"][data-empty]`)}function _c(e){let t=x(zs,this).get(e);return t?this.renderRoot.querySelector(`.row[data-key="${t}"]`):null}function vc(e){return e.querySelector(`input[type="checkbox"]`)}function yc(e){let t=C(z,this,vc).call(this,e);return t?.getAttribute(`value`)??t?.value??``}function bc(e){let t=e.querySelector(`craft-checkbox > label, :scope > label`);return t?.dataset.label??t?.textContent?.trim()??``}Ws.styles=[Fs],r([c()],Ws.prototype,`name`,void 0),r([c()],Ws.prototype,`label`,void 0),r([c({type:Boolean,reflect:!0})],Ws.prototype,`disabled`,void 0),r([c({type:Boolean,reflect:!0})],Ws.prototype,`sortable`,void 0),r([c({reflect:!0})],Ws.prototype,`presentation`,void 0),r([c({attribute:`all-label`})],Ws.prototype,`allLabel`,void 0),r([c({attribute:`all-value`})],Ws.prototype,`allValue`,void 0),r([c({attribute:`all-mode`,reflect:!0})],Ws.prototype,`allMode`,void 0),r([f()],Ws.prototype,`_revision`,void 0),r([f()],Ws.prototype,`_status`,void 0),customElements.get(`craft-checkbox-select`)||customElements.define(`craft-checkbox-select`,Ws);var xc=new Map;async function Sc(e,t,n=!1,r=null){let i=[],a=[],o=()=>{for(let e of i)e.remove();a.forEach(e=>e())};if(!e)return o;let s=document.createElement(`template`);s.innerHTML=e.trim();try{for(let e of s.content.childNodes){let o=Tc(e);if(o){let e=xc.get(o.key);if(e){e.references++,a.push(()=>kc(o.key,e)),e.loaded&&await Oc(e.loaded,n);continue}if(Ec(o))continue}let s=wc(e),c=o&&s instanceof HTMLScriptElement?Dc(s,o.value):null;if(r?t.insertBefore(s,r):t.appendChild(s),o&&(s instanceof HTMLLinkElement||s instanceof HTMLScriptElement)){let e={node:s,loaded:c,references:1};xc.set(o.key,e),a.push(()=>kc(o.key,e))}else i.push(s),await Cc(s,n);c&&await Oc(c,n)}return o}catch(e){throw o(),e}}async function Cc(e,t){if(e instanceof Element)for(let n of e.querySelectorAll(`script`)){let e=wc(n),r=e.src?Dc(e,e.src):null;n.replaceWith(e),r&&await Oc(r,t)}}function wc(e){if(!(e instanceof HTMLScriptElement))return e.cloneNode(!0);let t=document.createElement(`script`);for(let n of e.attributes)t.setAttribute(n.name,n.value);return t.textContent=e.textContent,t.async=!1,t}function Tc(e){return e instanceof HTMLLinkElement&&e.href?{key:`link:${e.href}`,selector:`link[href]`,value:e.href}:e instanceof HTMLScriptElement&&e.src?{key:`script:${e.src}`,selector:`script[src]`,value:e.src}:null}function Ec(e){return Array.from(document.querySelectorAll(e.selector)).some(t=>(t instanceof HTMLLinkElement?t.href:t.src)===e.value)}function Dc(e,t){return new Promise((n,r)=>{e.addEventListener(`load`,()=>n(),{once:!0}),e.addEventListener(`error`,()=>r(Error(`Failed to load asset [${t}].`)),{once:!0})})}async function Oc(e,t){try{await e}catch(e){if(t)throw e}}function kc(e,t){t.references--,!(t.references>0)&&(t.node.remove(),xc.delete(e))}async function Ac(e){return Sc(e,document.head,!1,document.head.querySelector(`meta[name="craft-head-anchor"]`))}async function jc(e){return Sc(e,document.body)}function Mc(e){return typeof e.checkVisibility==`function`?e.checkVisibility({checkOpacity:!0,checkVisibilityCSS:!0}):e.offsetWidth>0||e.offsetHeight>0}function Nc(e){return Fc(e).toString()}function Pc(e,t){let n={};for(let[r,i]of Fc(e,t)){let e=n[r];e===void 0?n[r]=i:Array.isArray(e)?e.push(i):n[r]=[e,i]}return n}function Fc(e,t){let n=new URLSearchParams,r=e.querySelectorAll(`input[name], select[name], textarea[name]`);for(let e of r)if(!(e.disabled||!e.name||t?.contains(e))&&!(e instanceof HTMLInputElement&&([`file`,`submit`,`button`,`reset`,`image`].includes(e.type)||(e.type===`checkbox`||e.type===`radio`)&&!e.checked))){if(e instanceof HTMLSelectElement&&e.multiple){for(let t of e.selectedOptions)n.append(e.name,t.value);continue}n.append(e.name,e.value)}for(let r of e.querySelectorAll(`*`)){if(!r.tagName.includes(`-`)||t?.contains(r))continue;let e=r.name;if(typeof e!=`string`||e===``||r.disabled===!0||r.querySelector(`input[name], select[name], textarea[name]`))continue;if(typeof r.checked==`boolean`){r.checked&&n.append(e,String(r.value??``));continue}let i=r.value;if(i!=null)if(Array.isArray(i))for(let t of i)n.append(e,String(t));else n.append(e,String(i))}return n}var Ic={Á:`A`,á:`a`,Ä:`A`,ä:`a`,À:`A`,à:`a`,Â:`A`,â:`a`,É:`E`,é:`e`,Ë:`E`,ë:`e`,È:`E`,è:`e`,Ê:`E`,ê:`e`,Í:`I`,í:`i`,Ï:`I`,ï:`i`,Ì:`I`,ì:`i`,Î:`I`,î:`i`,Ó:`O`,ó:`o`,Ö:`O`,ö:`o`,Ò:`O`,ò:`o`,Ô:`O`,ô:`o`,Ú:`U`,ú:`u`,Ü:`U`,ü:`u`,Ù:`U`,ù:`u`,Û:`U`,û:`u`,Ý:`Y`,ý:`y`,Ÿ:`Y`,А:`A`,Б:`B`,В:`V`,Г:`G`,Д:`D`,Ѓ:`Gj`,Е:`E`,Ж:`Z`,З:`Z`,Ѕ:`Dz`,И:`I`,Ј:`j`,К:`K`,Л:`L`,Љ:`Lj`,М:`M`,Н:`N`,Њ:`Nj`,О:`O`,П:`P`,Р:`R`,С:`S`,Т:`T`,Ќ:`Kj`,У:`U`,Ф:`F`,Х:`X`,Ц:`C`,Ч:`C`,Џ:`Dz`,Ш:`S`,а:`a`,б:`b`,в:`v`,г:`g`,д:`d`,ѓ:`gj`,е:`e`,ж:`z`,з:`z`,ѕ:`dz`,и:`i`,ј:`j`,к:`k`,л:`l`,љ:`lj`,м:`m`,н:`n`,њ:`nj`,о:`o`,п:`p`,р:`r`,с:`s`,т:`t`,ќ:`kj`,у:`u`,ф:`f`,х:`x`,ц:`c`,ч:`c`,џ:`dz`,ш:`s`,æ:`ae`,ǽ:`ae`,Ã:`A`,Å:`A`,Ǻ:`A`,Ă:`A`,Ǎ:`A`,Æ:`AE`,Ǽ:`AE`,ã:`a`,å:`a`,ǻ:`a`,ă:`a`,ǎ:`a`,ª:`a`,Ĉ:`C`,Ċ:`C`,Ç:`C`,ç:`c`,ĉ:`c`,ċ:`c`,Ð:`D`,Đ:`D`,ð:`d`,đ:`d`,Ĕ:`E`,Ė:`E`,ĕ:`e`,ė:`e`,ƒ:`f`,Ĝ:`G`,Ġ:`G`,ĝ:`g`,ġ:`g`,Ĥ:`H`,Ħ:`H`,ĥ:`h`,ħ:`h`,Ĩ:`I`,Ĭ:`I`,Ǐ:`I`,Į:`I`,Ĳ:`IJ`,ĩ:`i`,ĭ:`i`,ǐ:`i`,į:`i`,ĳ:`ij`,Ĵ:`J`,ĵ:`j`,Ĺ:`L`,Ľ:`L`,Ŀ:`L`,ĺ:`l`,ľ:`l`,ŀ:`l`,Ñ:`N`,ñ:`n`,ŉ:`n`,Õ:`O`,Ō:`O`,Ŏ:`O`,Ǒ:`O`,Ő:`O`,Ơ:`O`,Ø:`O`,Ǿ:`O`,Œ:`OE`,õ:`o`,ō:`o`,ŏ:`o`,ǒ:`o`,ő:`o`,ơ:`o`,ø:`o`,ǿ:`o`,º:`o`,œ:`oe`,Ŕ:`R`,Ŗ:`R`,ŕ:`r`,ŗ:`r`,Ŝ:`S`,Ș:`S`,ŝ:`s`,ș:`s`,ſ:`s`,Ţ:`T`,Ț:`T`,Ŧ:`T`,Þ:`TH`,ţ:`t`,ț:`t`,ŧ:`t`,þ:`th`,Ũ:`U`,Ŭ:`U`,Ű:`U`,Ų:`U`,Ư:`U`,Ǔ:`U`,Ǖ:`U`,Ǘ:`U`,Ǚ:`U`,Ǜ:`U`,ũ:`u`,ŭ:`u`,ű:`u`,ų:`u`,ư:`u`,ǔ:`u`,ǖ:`u`,ǘ:`u`,ǚ:`u`,ǜ:`u`,Ŵ:`W`,ŵ:`w`,Ŷ:`Y`,ÿ:`y`,ŷ:`y`,ΑΥ:`AU`,ΑΎ:`AU`,Αυ:`Au`,Αύ:`Au`,ΕΊ:`I`,ΕΙ:`I`,Ει:`Ei`,ΕΥ:`EF`,ΕΎ:`EU`,Εί:`I`,Ευ:`Ef`,Εύ:`Eu`,ΟΙ:`I`,ΟΊ:`I`,ΟΥ:`U`,ΟΎ:`OU`,Οι:`Oi`,Οί:`I`,Ου:`Oy`,Ού:`Ou`,ΥΙ:`I`,ΎΙ:`I`,Υι:`Yi`,Ύι:`I`,ΥΊ:`I`,Υί:`I`,αυ:`au`,αύ:`au`,εί:`i`,ει:`ei`,ευ:`ef`,εύ:`eu`,οι:`oi`,οί:`i`,ου:`oy`,ού:`ou`,υι:`yi`,ύι:`i`,υί:`i`,Α:`A`,Ά:`A`,Β:`B`,Δ:`D`,Ε:`E`,Έ:`E`,Φ:`F`,Γ:`G`,Η:`H`,Ή:`I`,Ι:`I`,Ί:`I`,Ϊ:`I`,Κ:`K`,Ξ:`Ks`,Λ:`L`,Μ:`M`,Ν:`N`,Π:`P`,Ο:`O`,Ό:`O`,Ψ:`Ps`,Ρ:`R`,Σ:`S`,Τ:`T`,Θ:`Th`,Ω:`O`,Ώ:`W`,Χ:`X`,ϒ:`Y`,Υ:`Y`,Ύ:`Y`,Ϋ:`Y`,Ζ:`Z`,α:`a`,ά:`a`,β:`v`,δ:`d`,ε:`e`,έ:`e`,φ:`f`,γ:`gh`,η:`i`,ή:`i`,ι:`i`,ί:`i`,ϊ:`i`,ΐ:`i`,κ:`k`,ξ:`ks`,λ:`l`,μ:`m`,ν:`n`,ο:`o`,ό:`o`,π:`p`,ψ:`ps`,ρ:`r`,σ:`s`,ς:`s`,τ:`t`,ϑ:`th`,θ:`th`,ϐ:`v`,ω:`o`,ώ:`w`,χ:`kh`,υ:`i`,ύ:`y`,ΰ:`y`,ϋ:`y`,ζ:`z`,अ:`a`,आ:`aa`,ए:`e`,ई:`ii`,ऍ:`ei`,ऎ:`ae`,ऐ:`ai`,इ:`i`,ओ:`o`,ऑ:`oi`,ऒ:`oii`,ऊ:`uu`,औ:`ou`,उ:`u`,ब:`B`,भ:`Bha`,च:`Ca`,छ:`Chha`,ड:`Da`,ढ:`Dha`,फ:`Fa`,फ़:`Fi`,ग:`Ga`,घ:`Gha`,ग़:`Ghi`,ह:`Ha`,ज:`Ja`,झ:`Jha`,क:`Ka`,ख:`Kha`,ख़:`Khi`,ल:`L`,ळ:`Li`,ऌ:`Li`,ऴ:`Lii`,ॡ:`Lii`,म:`Ma`,न:`Na`,ङ:`Na`,ञ:`Nia`,ण:`Nae`,ऩ:`Ni`,ॐ:`oms`,प:`Pa`,क़:`Qi`,र:`Ra`,ऋ:`Ri`,ॠ:`Ri`,ऱ:`Ri`,स:`Sa`,श:`Sha`,ष:`Shha`,ट:`Ta`,त:`Ta`,ठ:`Tha`,द:`Tha`,थ:`Tha`,ध:`Thha`,ड़:`ugDha`,ढ़:`ugDhha`,व:`Va`,य:`Ya`,य़:`Yi`,ज़:`Za`,Ա:`A`,Բ:`B`,Գ:`G`,Դ:`D`,Ե:`E`,Զ:`Z`,Է:`E`,Ը:`Y`,Թ:`Th`,Ժ:`Zh`,Ի:`I`,Լ:`L`,Խ:`Kh`,Ծ:`Ts`,Կ:`K`,Հ:`H`,Ձ:`Dz`,Ղ:`Gh`,Ճ:`Tch`,Մ:`M`,Յ:`Y`,Ն:`N`,Շ:`Sh`,Ո:`Vo`,Չ:`Ch`,Պ:`P`,Ջ:`J`,Ռ:`R`,Ս:`S`,Վ:`V`,Տ:`T`,Ր:`R`,Ց:`C`,Ւ:`u`,Փ:`Ph`,Ք:`Q`,և:`ev`,Օ:`O`,Ֆ:`F`,ա:`a`,բ:`b`,գ:`g`,դ:`d`,ե:`e`,զ:`z`,է:`e`,ը:`y`,թ:`th`,ժ:`zh`,ի:`i`,լ:`l`,խ:`kh`,ծ:`ts`,կ:`k`,հ:`h`,ձ:`dz`,ղ:`gh`,ճ:`tch`,մ:`m`,յ:`y`,ն:`n`,շ:`sh`,ո:`vo`,չ:`ch`,պ:`p`,ջ:`j`,ռ:`r`,ս:`s`,վ:`v`,տ:`t`,ր:`r`,ց:`c`,ւ:`u`,փ:`ph`,ք:`q`,օ:`o`,ֆ:`f`,Ž:`Z`,Ň:`N`,Ş:`S`,ž:`z`,ň:`n`,ş:`s`,ı:`i`,İ:`I`,ğ:`g`,Ğ:`G`,ьо:`yo`,Й:`i`,Щ:`Shh`,Ъ:`Ie`,Ь:``,Ю:`Iu`,Я:`Ia`,й:`i`,щ:`shh`,ъ:`ie`,ь:``,ю:`iu`,я:`ia`,Ē:`E`,ē:`e`,န်ုပ်:`nub`,"ောင်":`aung`,"ိုက်":`aik`,"ိုဒ်":`ok`,"ိုင်":`aing`,"ိုလ်":`ol`,"ေါင်":`aung`,သြော:`aw`,"ောက်":`auk`,"ိတ်":`eik`,"ုတ်":`ok`,"ုန်":`on`,"ေတ်":`it`,"ုဒ်":`ait`,"ာန်":`an`,"ိန်":`ein`,"ွတ်":`ut`,"ေါ်":`aw`,"ွန်":`un`,"ိပ်":`eik`,"ုပ်":`ok`,"ွပ်":`ut`,"ိမ်":`ein`,"ုမ်":`on`,"ော်":`aw`,"ွမ်":`un`,က်:`et`,"ေါ":`aw`,"ော":`aw`,"ျွ":`ywa`,"ြွ":`yw`,"ို":`o`,"ုံ":`on`,တ်:`at`,င်:`in`,ည်:`i`,ဒ်:`d`,န်:`an`,ပ်:`at`,မ်:`an`,စျ:`za`,ယ်:`e`,ဉ်:`in`,စ်:`it`,"ိံ":`ein`,"ဲ":`e`,"း":``,"ာ":`a`,"ါ":`a`,"ေ":`e`,"ံ":`an`,"ိ":`i`,"ီ":`i`,"ု":`u`,"ူ":`u`,"်":`at`,"္":``,"့":``,က:`k`,"၉":`9`,တ:`t`,ရ:`ya`,ယ:`y`,မ:`m`,ဘ:`ba`,ဗ:`b`,ဖ:`pa`,ပ:`p`,န:`n`,ဓ:`da`,ဒ:`d`,ထ:`ta`,ဏ:`na`,ဝ:`w`,ဎ:`da`,ဍ:`d`,ဌ:`ta`,ဋ:`t`,ည:`ny`,ဇ:`z`,ဆ:`sa`,စ:`s`,င:`ng`,ဃ:`ga`,ဂ:`g`,လ:`l`,သ:`th`,"၈":`8`,ဩ:`aw`,ခ:`kh`,"၆":`6`,"၅":`5`,"၄":`4`,"၃":`3`,"၂":`2`,"၁":`1`,"၀":`0`,"၌":`hnaik`,"၍":`ywae`,ဪ:`aw`,ဦ:`-u`,ဟ:`h`,ဉ:`u`,ဤ:`-i`,ဣ:`i`,"၏":`-e`,ဧ:`e`,"ှ":`h`,"ွ":`w`,"ျ":`ya`,"ြ":`y`,အ:`a`,ဠ:`la`,"၇":`7`,DŽ:`DZ`,Dž:`Dz`,dž:`dz`,Ǳ:`DZ`,ǲ:`Dz`,ǳ:`dz`,Ǉ:`LJ`,ǈ:`Lj`,ǉ:`lj`,Ǌ:`NJ`,ǋ:`Nj`,ǌ:`nj`,č:`c`,Č:`C`,ć:`c`,Ć:`C`,š:`s`,Š:`S`,ა:`a`,ბ:`b`,გ:`g`,დ:`d`,ე:`e`,ვ:`v`,ზ:`z`,თ:`t`,ი:`i`,კ:`k`,ლ:`l`,მ:`m`,ნ:`n`,ო:`o`,პ:`p`,ჟ:`zh`,რ:`r`,ს:`s`,ტ:`t`,უ:`u`,ფ:`f`,ქ:`q`,ღ:`gh`,ყ:`y`,შ:`sh`,ჩ:`ch`,ც:`ts`,ძ:`dz`,წ:`ts`,ჭ:`ch`,ხ:`kh`,ჯ:`j`,ჰ:`h`,Ё:`E`,ё:`e`,Ы:`Y`,ы:`y`,Э:`E`,э:`e`,І:`I`,і:`i`,Ѳ:`F`,ѳ:`f`,Ѣ:`E`,ѣ:`e`,Ѵ:`I`,ѵ:`i`,Є:`Je`,є:`je`,Ѥ:`Je`,ѥ:`je`,Ꙋ:`U`,ꙋ:`u`,Ѡ:`O`,ѡ:`o`,Ѿ:`Ot`,ѿ:`ot`,Ѫ:`U`,ѫ:`u`,Ѧ:`Ja`,ѧ:`ja`,Ѭ:`Ju`,ѭ:`ju`,Ѩ:`Ja`,ѩ:`Ja`,Ѯ:`Ks`,ѯ:`ks`,Ѱ:`Ps`,ѱ:`ps`,Ґ:`G`,ґ:`g`,Ї:`Yi`,ї:`yi`,Ә:`A`,Ғ:`G`,Қ:`Q`,Ң:`N`,Ө:`O`,Ұ:`U`,Ү:`U`,Һ:`H`,ә:`a`,ғ:`g`,қ:`q`,ң:`n`,ө:`o`,ұ:`u`,ү:`u`,һ:`h`,ď:`d`,Ď:`D`,ě:`e`,Ě:`E`,ř:`r`,Ř:`R`,ť:`t`,Ť:`T`,ů:`u`,Ů:`U`,ą:`a`,ę:`e`,ł:`l`,ń:`n`,ś:`s`,ź:`z`,ż:`z`,Ą:`A`,Ę:`E`,Ł:`L`,Ń:`N`,Ś:`S`,Ź:`Z`,Ż:`Z`,ā:`a`,ģ:`g`,ī:`i`,ķ:`k`,ļ:`l`,ņ:`n`,ū:`u`,Ā:`A`,Ģ:`G`,Ī:`I`,Ķ:`k`,Ļ:`L`,Ņ:`N`,Ū:`U`,Ả:`A`,Ạ:`A`,Ắ:`A`,Ằ:`A`,Ẳ:`A`,Ẵ:`A`,Ặ:`A`,Ấ:`A`,Ầ:`A`,Ẩ:`A`,Ẫ:`A`,Ậ:`A`,ả:`a`,ạ:`a`,ắ:`a`,ằ:`a`,ẳ:`a`,ẵ:`a`,ặ:`a`,ấ:`a`,ầ:`a`,ẩ:`a`,ẫ:`a`,ậ:`a`,Ẻ:`E`,Ẽ:`E`,Ẹ:`E`,Ế:`E`,Ề:`E`,Ể:`E`,Ễ:`E`,Ệ:`E`,ẻ:`e`,ẽ:`e`,ẹ:`e`,ế:`e`,ề:`e`,ể:`e`,ễ:`e`,ệ:`e`,Ỉ:`I`,Ị:`I`,ỉ:`i`,ị:`i`,Ỏ:`O`,Ọ:`O`,Ố:`O`,Ồ:`O`,Ổ:`O`,Ỗ:`O`,Ộ:`O`,Ớ:`O`,Ờ:`O`,Ở:`O`,Ỡ:`O`,Ợ:`O`,ỏ:`o`,ọ:`o`,ố:`o`,ồ:`o`,ổ:`o`,ỗ:`o`,ộ:`o`,ớ:`o`,ờ:`o`,ở:`o`,ỡ:`o`,ợ:`o`,Ủ:`U`,Ụ:`U`,Ứ:`U`,Ừ:`U`,Ử:`U`,Ữ:`U`,Ự:`U`,ủ:`u`,ụ:`u`,ứ:`u`,ừ:`u`,ử:`u`,ữ:`u`,ự:`u`,Ỳ:`Y`,Ỷ:`Y`,Ỹ:`Y`,Ỵ:`Y`,ỳ:`y`,ỷ:`y`,ỹ:`y`,ỵ:`y`,ا:`a`,ب:`b`,پ:`p`,ت:`t`,ث:`th`,ج:`g`,چ:`ch`,ح:`h`,خ:`kh`,د:`d`,ذ:`th`,ر:`r`,ز:`z`,س:`s`,ش:`sh`,ص:`s`,ض:`d`,ط:`t`,ظ:`th`,ع:`aa`,غ:`gh`,ف:`f`,ق:`k`,ک:`k`,گ:`g`,ل:`l`,ژ:`zh`,ك:`k`,م:`m`,ن:`n`,ه:`h`,و:`o`,ی:`y`,آ:`a`,"٠":`0`,"١":`1`,"٢":`2`,"٣":`3`,"٤":`4`,"٥":`5`,"٦":`6`,"٧":`7`,"٨":`8`,"٩":`9`,أ:`a`,ي:`y`,إ:`a`,ؤ:`o`,ئ:`y`,ء:`aa`,ђ:`dj`,ћ:`c`,Ђ:`Dj`,Ћ:`C`,ə:`e`,Ə:`E`,ß:`ss`,ẞ:`SS`,ভ্ল:`vl`,পশ:`psh`,ব্ধ:`bdh`,ব্জ:`bj`,ব্দ:`bd`,ব্ব:`bb`,ব্ল:`bl`,ভ:`v`,ব:`b`,চ্ঞ:`cNG`,চ্ছ:`cch`,চ্চ:`cc`,ছ:`ch`,চ:`c`,ধ্ন:`dhn`,ধ্ম:`dhm`,দ্ঘ:`dgh`,দ্ধ:`ddh`,দ্ভ:`dv`,দ্ম:`dm`,ড্ড:`DD`,ঢ:`Dh`,ধ:`dh`,দ্গ:`dg`,দ্দ:`dd`,ড:`D`,দ:`d`,"।":`.`,ঘ্ন:`Ghn`,গ্ধ:`Gdh`,গ্ণ:`GN`,গ্ন:`Gn`,গ্ম:`Gm`,গ্ল:`Gl`,জ্ঞ:`jNG`,ঘ:`Gh`,গ:`g`,হ্ণ:`hN`,হ্ন:`hn`,হ্ম:`hm`,হ্ল:`hl`,হ:`h`,জ্ঝ:`jjh`,ঝ:`jh`,জ্জ:`jj`,জ:`j`,ক্ষ্ণ:`kxN`,ক্ষ্ম:`kxm`,ক্ষ:`ksh`,কশ:`ksh`,ক্ক:`kk`,ক্ট:`kT`,ক্ত:`kt`,ক্ল:`kl`,ক্স:`ks`,খ:`kh`,ক:`k`,ল্ভ:`lv`,ল্ধ:`ldh`,লখ:`lkh`,লঘ:`lgh`,লফ:`lph`,ল্ক:`lk`,ল্গ:`lg`,ল্ট:`lT`,ল্ড:`lD`,ল্প:`lp`,ল্ম:`lm`,ল্ল:`ll`,ল্ব:`lb`,ল:`l`,ম্থ:`mth`,ম্ফ:`mf`,ম্ভ:`mv`,মপ্ল:`mpl`,ম্ন:`mn`,ম্প:`mp`,ম্ম:`mm`,ম্ল:`ml`,ম্ব:`mb`,ম:`m`,"০":`0`,"১":`1`,"২":`2`,"৩":`3`,"৪":`4`,"৫":`5`,"৬":`6`,"৭":`7`,"৮":`8`,"৯":`9`,ঙ্ক্ষ:`Ngkx`,ঞ্ছ:`nch`,ঙ্ঘ:`ngh`,ঙ্খ:`nkh`,ঞ্ঝ:`njh`,ঙ্গৌ:`ngOU`,ঙ্গৈ:`ngOI`,ঞ্চ:`nc`,ঙ্ক:`nk`,ঙ্ষ:`Ngx`,ঙ্গ:`ngo`,ঙ্ম:`Ngm`,ঞ্জ:`nj`,ন্ধ:`ndh`,ন্ঠ:`nTh`,ণ্ঠ:`NTh`,ন্থ:`nth`,ঙ্গা:`nga`,ঙ্গি:`ngi`,ঙ্গী:`ngI`,ঙ্গু:`ngu`,ঙ্গূ:`ngU`,ঙ্গে:`nge`,ঙ্গো:`ngO`,ণ্ঢ:`NDh`,নশ:`nsh`,ঙর:`Ngr`,ঞর:`NGr`,"ংর":`ngr`,ঙ:`Ng`,ঞ:`NG`,"ং":`ng`,ন্ন:`nn`,ণ্ণ:`NN`,ণ্ন:`Nn`,ন্ম:`nm`,ণ্ম:`Nm`,ন্দ:`nd`,ন্ট:`nT`,ণ্ট:`NT`,ন্ড:`nD`,ণ্ড:`ND`,ন্ত:`nt`,ন্স:`ns`,ন:`n`,ণ:`N`,"ৈ":`OI`,"ৌ":`OU`,"ো":`O`,ঐ:`OI`,ঔ:`OU`,অ:`o`,ও:`oo`,ফ্ল:`fl`,প্ট:`pT`,প্ত:`pt`,প্ন:`pn`,প্প:`pp`,প্ল:`pl`,প্স:`ps`,ফ:`f`,প:`p`,"ৃ":`rri`,ঋ:`rri`,রর‍্য:`rry`,"্র্য":`ry`,"্রর":`rr`,ড়্গ:`Rg`,ঢ়:`Rh`,ড়:`R`,র:`r`,"্র":`r`,শ্ছ:`Sch`,ষ্ঠ:`ShTh`,ষ্ফ:`Shf`,স্ক্ল:`skl`,স্খ:`skh`,স্থ:`sth`,স্ফ:`sf`,শ্চ:`Sc`,শ্ত:`St`,শ্ন:`Sn`,শ্ম:`Sm`,শ্ল:`Sl`,ষ্ক:`Shk`,ষ্ট:`ShT`,ষ্ণ:`ShN`,ষ্প:`Shp`,ষ্ম:`Shm`,স্প্ল:`spl`,স্ক:`sk`,স্ট:`sT`,স্ত:`st`,স্ন:`sn`,স্প:`sp`,স্ম:`sm`,স্ল:`sl`,শ:`S`,ষ:`Sh`,স:`s`,"ু":`u`,উ:`u`,অ্য:`oZ`,ত্থ:`tth`,ৎ:`tt`,ট্ট:`TT`,ট্ম:`Tm`,ঠ:`Th`,ত্ন:`tn`,ত্ম:`tm`,থ:`th`,ত্ত:`tt`,ট:`T`,ত:`t`,অ্যা:`AZ`,"া":`a`,আ:`a`,য়া:`ya`,য়:`y`,"ি":`i`,ই:`i`,"ী":`ee`,ঈ:`ee`,"ূ":`uu`,ঊ:`uu`,"ে":`e`,এ:`e`,য:`z`,"্য":`Z`,ইয়:`y`,ওয়:`w`,"্ব":`w`,এক্স:`x`,"ঃ":`:`,"ঁ":`nn`,"্‌":``,"˚":`0`,"¹":`1`,"²":`2`,"³":`3`,"⁴":`4`,"⁵":`5`,"⁶":`6`,"⁷":`7`,"⁸":`8`,"⁹":`9`,"₀":`0`,"₁":`1`,"₂":`2`,"₃":`3`,"₄":`4`,"₅":`5`,"₆":`6`,"₇":`7`,"₈":`8`,"₉":`9`,"௦":`0`,"௧":`1`,"௨":`2`,"௩":`3`,"௪":`4`,"௫":`5`,"௬":`6`,"௭":`7`,"௮":`8`,"௯":`9`,"௰":`10`,"௱":`100`,"௲":`1000`,Ꜳ:`AA`,ꜳ:`aa`,Ꜵ:`AO`,ꜵ:`ao`,Ꜷ:`AU`,ꜷ:`au`,Ꜹ:`AV`,ꜹ:`av`,Ꜻ:`av`,ꜻ:`av`,Ꜽ:`AY`,ꜽ:`ay`,ȸ:`db`,ʣ:`dz`,ʥ:`dz`,ʤ:`dezh`,"🙰":`et`,ﬀ:`ff`,ﬃ:`ffi`,ﬄ:`ffl`,ﬁ:`fi`,ﬂ:`fl`,ʩ:`feng`,ʪ:`ls`,ʫ:`lz`,ɮ:`lezh`,ȹ:`qp`,ʨ:`tc`,ʦ:`ts`,ʧ:`tesh`,Ꝏ:`OO`,ꝏ:`oo`,ﬆ:`st`,ﬅ:`st`,Ꜩ:`TZ`,ꜩ:`tz`,ᵫ:`ue`,Aι:`Ai`,αι:`ai`,ἀ:`a`,ἁ:`a`,ἂ:`a`,ἃ:`a`,ἄ:`a`,ἅ:`a`,ἆ:`a`,ἇ:`a`,Ἀ:`A`,Ἁ:`A`,Ἂ:`A`,Ἃ:`A`,Ἄ:`A`,Ἅ:`A`,Ἆ:`A`,Ἇ:`A`,ᾰ:`a`,ᾱ:`a`,ᾲ:`a`,ᾳ:`a`,ᾴ:`a`,ᾶ:`a`,ᾷ:`a`,Ᾰ:`A`,Ᾱ:`A`,Ὰ:`A`,Ά:`A`,ᾼ:`A`,A̧:`A`,a̧:`a`,Ⱥ:`A`,ⱥ:`a`,Ȧ:`A`,ȧ:`a`,Ɓ:`B`,C̈:`C`,c̈:`c`,C̨:`C`,c̨:`c`,Ȼ:`C`,ȼ:`c`,C̀:`C`,c̀:`c`,C̣:`C`,c̣:`c`,C̄:`C`,c̄:`c`,C̃:`C`,c̃:`c`,Ȩ:`E`,ȩ:`e`,Ɇ:`E`,ɇ:`e`,I̧:`I`,i̧:`i`,Ɨ:`I`,ɨ:`i`,i:`i`,J́́:`J`,j́:`j`,J̀̀:`J`,j̀:`j`,J̈:`J`,j̈:`j`,J̧:`J`,j̧:`j`,J̨:`J`,j̨:`j`,Ɉ:`J`,ɉ:`j`,J̌:`J`,ǰ:`j`,J̇:`J`,j:`j`,J̣:`J`,j̣:`j`,J̄:`J`,j̄:`j`,J̃:`J`,j̃:`j`,ĸ:`k`,L̀:`L`,l̀:`l`,L̂:`L`,l̂:`l`,L̈:`L`,l̈:`l`,L̨:`L`,l̨:`l`,Ƚ:`L`,ƚ:`l`,L̇:`L`,l̇:`l`,Ḷ:`L`,ḷ:`l`,L̄:`L`,l̄:`l`,L̃:`L`,l̃:`l`,Ŋ:`N`,ŋ:`n`,Ǹ:`N`,ǹ:`n`,N̂:`N`,n̂:`n`,N̈:`N`,n̈:`n`,N̨:`N`,n̨:`n`,Ꞥ:`N`,ꞥ:`n`,Ṅ:`N`,ṅ:`n`,Ṇ:`N`,ṇ:`n`,N̄:`N`,n̄:`n`,O̧:`O`,o̧:`o`,Ǫ:`O`,ǫ:`o`,Ɵ:`O`,ɵ:`o`,Ȯ:`O`,ȯ:`o`,S̀:`S`,s̀:`s`,Ŝ̀:`S`,S̈:`S`,s̈:`s`,S̨:`S`,s̨:`s`,Ꞩ:`S`,ꞩ:`s`,Ṡ:`S`,ṡ:`s`,Ṣ:`S`,ṣ:`s`,S̄:`S`,s̄:`s`,S̃:`S`,s̃:`s`,T́:`T`,t́:`t`,T̀:`T`,t̀:`t`,T̂:`T`,t̂:`t`,T̈:`T`,ẗ:`t`,T̨:`T`,t̨:`t`,Ⱦ:`T`,ⱦ:`t`,Ṫ:`T`,ṫ:`t`,Ṭ:`T`,ṭ:`t`,T̄:`T`,t̄:`t`,T̃:`T`,t̃:`t`,U̧:`U`,u̧:`u`,Ʉ:`U`,ʉ:`u`,U̇:`U`,u̇:`u`,Ʊ:`U`,ʊ:`u`,Ẁ:`W`,ẁ:`w`,Ẃ:`W`,ẃ:`w`,Ẅ:`W`,ẅ:`w`,Ꙗ:`Ja`,ꙗ:`ja`,Y̧:`Y`,y̧:`y`,Y̨:`Y`,y̨:`y`,Ɏ:`Y`,ɏ:`y`,Y̌:`Y`,y̌:`y`,Ẏ:`Y`,ẏ:`y`,Ȳ:`Y`,ȳ:`y`,Z̀:`Z`,z̀:`z`,Ẑ:`Z`,ẑ:`z`,Z̈:`Z`,z̈:`z`,Z̧:`Z`,z̧:`z`,Z̨:`Z`,z̨:`z`,Ƶ:`Z`,ƶ:`z`,Ẓ:`Z`,ẓ:`z`,Z̄:`Z`,z̄:`z`,Z̃:`Z`,z̃:`z`,"\xA0":` `," ":` `," ":` `," ":` `," ":` `," ":` `," ":` `," ":` `," ":` `," ":` `," ":` `," ":` `," ":` `,"\u2028":` `,"\u2029":` `,"​":` `," ":` `," ":` `,"　":` `,ﾠ:` `,"«":`<<`,"»":`>>`,"‘":`'`,"’":`'`,"‚":`'`,"‛":`'`,"“":`"`,"”":`"`,"„":`"`,"‟":`"`,"‹":`'`,"›":`'`,"–":`-`,"—":`-`,"…":`...`,"€":`EUR`,$:`$`,"₢":`Cr`,"₣":`Fr.`,"£":`PS`,"₤":`L.`,ℳ:`M`,"₥":`mil`,"₦":`N`,"₧":`Pts`,"₨":`Rs`,රු:`LKR`,ரூ:`LKR`,"௹":`Rs`,रू:`NPR`,"₹":`Rs`,"૱":`Rs`,"₩":`W`,"₪":`NS`,"₸":`KZT`,"₫":`D`,"֏":`AMD`,"₭":`K`,"₺":`TL`,"₼":`AZN`,"₮":`T`,"₯":`Dr`,"₲":`PYG`,"₾":`GEL`,"₳":`ARA`,"₴":`UAH`,"₽":`RUB`,"₵":`GHS`,"₡":`CL`,"¢":`c`,"¥":`YEN`,円:`JPY`,"৳":`BDT`,元:`CNY`,"﷼":`SAR`,"៛":`KR`,"₠":`ECU`,"¤":`$?`,"฿":`THB`,"؋":`AFN`};function Lc(e,t=Ic){e=e.normalize(`NFC`);let n=``,r;for(let i=0;i<e.length;i++)r=e.charAt(i),n+=typeof t[r]==`string`?t[r]:r;return n}function Rc(e,t={}){let n={allowNonAlphaStart:!1,handleCasing:`camel`,...t};var r=e.replace(/<(.*?)>/g,``);r=r.replace(/['"‘’“”ʻ\[\]\(\)\{\}:]/g,``),r=r.toLowerCase(),r=Lc(r),n.allowNonAlphaStart||(r=r.replace(/^[^a-z]+/,``));let i=r.split(/[^a-z0-9]+/).filter(Boolean);if(r=``,n.handleCasing===`snake`)return i.join(`_`);for(let e=0;e<i.length;e++)n.handleCasing!==`pascal`&&e===0?r+=i[e]:r+=i[e].charAt(0).toUpperCase()+i[e].substring(1);return r}function zc(e,t={}){let n={prefix:``,suffix:``,...t},r=Rc(e,{handleCasing:`snake`}).toUpperCase();return r?`${n.prefix}${r}${n.suffix}`:``}function Bc(e){let t=e.replace(/<(.*?)>/g,``);return t=t.toLowerCase(),t=Lc(t),t=t.replace(/^[^a-z]+/,``),t=t.replace(/[^a-z0-9]+$/,``),t.split(/[^a-z0-9]+/).filter(Boolean).join(`-`)}function Vc(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Hc(){return Math.floor(Math.random()*1e6)}var Uc=new WeakMap,Wc=class e{constructor(){this.queue=[],this.workers=[],w(this,Uc,null),S(Uc,this,new AbortController);for(let e=0;e<3;e++)this.workers.push(new Jc(this))}load(t=document,n=`[data-sizes]`){t.querySelectorAll(n).forEach(t=>{if(Mc(t))this.addToQueue(t);else{let n=`thumb${Hc()}`;e.invisibleThumbs[n]=[this,t];let r=()=>{e.invisibleThumbs[n]&&Mc(t)&&(delete e.invisibleThumbs[n],this.addToQueue(t))};document.addEventListener(`scroll`,r,{signal:x(Uc,this)?.signal}),window.addEventListener(`resize`,r,{signal:x(Uc,this)?.signal})}})}addToQueue(e){this.queue.push(e),this.workers.forEach(e=>{e.active||e.loadNext()})}static retryAll(){for(let t in e.invisibleThumbs){let n=e.invisibleThumbs[t];if(!n)continue;let[r,i]=n;delete e.invisibleThumbs[t],r.load(i.parentElement??document)}}destroy(){this.workers.forEach(e=>e.deactivate()),x(Uc,this)?.abort();for(let t in e.invisibleThumbs)e.invisibleThumbs[t]?.[0]===this&&delete e.invisibleThumbs[t]}};Wc.invisibleThumbs={};var Gc=new WeakMap,Kc=new WeakMap,qc=new WeakMap,Jc=class{constructor(e){this.active=!1,this.container=void 0,w(this,Gc,null),w(this,Kc,null),w(this,qc,null),S(Gc,this,e)}activate(){this.active||(this.active=!0,this.clearInterval(),S(Kc,this,setInterval(()=>{this.loadNextIfRemoved()},500)))}deactivate(){this.active&&(this.active=!1,this.clearInterval(),this.clearTimeout())}clearInterval(){x(Kc,this)&&(clearInterval(x(Kc,this)),S(Kc,this,null))}clearTimeout(){x(qc,this)&&(clearTimeout(x(qc,this)),S(qc,this,null))}loadNext(){if(this.clearTimeout(),this.container=x(Gc,this)?.queue.shift(),this.container===void 0){this.deactivate();return}if(this.loadNextIfRemoved())return;if(this.container.querySelectorAll(`img`).length>0){this.loadNext();return}this.activate(),S(qc,this,setTimeout(()=>{this.loadNext()},3e4));let e=document.createElement(`img`);e.sizes=this.container.getAttribute(`data-sizes`)??``,e.srcset=this.container.getAttribute(`data-srcset`)??``,e.alt=this.container.getAttribute(`data-alt`)??``,e.setAttribute(`data-animated`,this.container.getAttribute(`data-animated`)??``),e.src=this.container.getAttribute(`data-src`)??``,e.onload=()=>this.loadNext(),e.onabort=()=>this.loadNext(),e.onerror=()=>this.loadNext(),this.container.appendChild(e)}loadNextIfRemoved(){return this.container&&!document.body.contains(this.container)?(this.loadNext(),!0):!1}},Yc=a`
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
`;Object.values({Sm:`sm`,Md:`md`,Lg:`lg`,Xl:`xl`,"2xl":`2xl`});var Xc={sm:Ao.Small,md:Ao.Medium,lg:Ao.Large,xl:Ao.Large,"2xl":Ao.Large},Zc={InlineStart:`inline-start`,BlockStart:`block-start`},Qc=new WeakSet,$c=new WeakMap,el=new WeakMap,tl=new WeakMap,nl=class extends u{constructor(...e){super(...e),b(this,Qc),this.size=null,this.thumbSize=null,this.prefixPlacement=Zc.InlineStart,this.variant=null,this.appearance=$r.OutlineFill,this.alignItems=`center`,this.icon=null,this.showStatus=!1,this.showThumb=!1,this.selectable=!1,this.fullWidth=!1,this.rounded=!1,this.selected=!1,this.selectLabel=null,this.selectDisabled=!1,w(this,$c,!1),w(this,el,new Wc),w(this,tl,new M(this,{characterData:!0,onChange:()=>C(Qc,this,il).call(this)}))}renderSelect(){return p`<input
      type="checkbox"
      class="cp-chip__select"
      part="select"
      .checked=${this.selected}
      ?disabled=${this.selectDisabled}
      aria-label=${this.selectLabel??n(`Select`)}
      @click=${C(Qc,this,al)}
      @mousedown=${C(Qc,this,ol)}
      @mouseup=${C(Qc,this,ol)}
      @change=${C(Qc,this,sl)}
    />`}renderPrefix(e){return p`<div class="cp-chip__prefix">
      ${e.prefix?p`<slot name="prefix" part="prefix"></slot>`:i}
      ${e.thumbnail?p`<slot
            class="cp-chip__thumbnail"
            name="thumbnail"
            part="thumbnail"
          ></slot>`:i}
      ${e.icon?p`<slot class="cp-chip__icon" name="icon" part="icon"
            >${this.icon?p`<craft-icon name="${this.icon}"></craft-icon>`:i}</slot
          >`:i}
    </div>`}renderMain(e){return p`<div class="cp-chip__main">
      ${e.status?p`<slot
            class="cp-chip__status"
            name="status"
            part="status"
          ></slot>`:i}
      ${e.body?p`<slot class="cp-chip__body" part="body"></slot>`:i}
    </div>`}connectedCallback(){super.connectedCallback(),this.hasUpdated&&(S(el,this,new Wc),x(el,this).load(this))}disconnectedCallback(){x(el,this).destroy(),super.disconnectedCallback()}firstUpdated(e){super.firstUpdated(e),x(el,this).load(this)}render(){let e=C(Qc,this,ll).call(this),t=e.prefix||e.thumbnail||e.icon;return p`
      <div
        part="chip"
        class="${N({"cp-chip":!0,"cp-chip--xsmall":rl.call(C(Qc,this))===`xsmall`,"cp-chip--small":rl.call(C(Qc,this))===`small`,"cp-chip--medium":rl.call(C(Qc,this))===`medium`,"cp-chip--large":rl.call(C(Qc,this))===`large`,[`cp-chip--thumb-${this.thumbSize}`]:this.thumbSize!==null,"cp-chip--stacked":this.prefixPlacement===Zc.BlockStart,"cp-chip--has-header":this.prefixPlacement===Zc.BlockStart&&(this.selectable||e.suffix),"cp-chip--align-start":this.alignItems===`start`,"cp-chip--align-end":this.alignItems===`end`,"cp-chip--plain":this.appearance===$r.Plain,"cp-chip--rounded":this.rounded,"cp-chip--selectable":this.selectable,"cp-chip--show-thumb":this.showThumb,"cp-chip--show-status":this.showStatus,[`cp-chip--leads-with-${C(Qc,this,ul).call(this,e)}`]:!0})}"
      >
        ${this.selectable?this.renderSelect():i}
        ${t?this.renderPrefix(e):i}
        ${e.status||e.body?this.renderMain(e):i}
        ${e.suffix?p`<slot
              name="suffix"
              class="cp-chip__suffix"
              part="suffix"
            ></slot>`:i}
      </div>
    `}};function rl(){return this.size??(this.thumbSize?Xc[this.thumbSize]:null)??Ao.Small}function il(){for(let e of this.querySelectorAll(`craft-button:not([inherit])`))e.closest(`craft-chip`)===this&&e.toggleAttribute(`inherit`,!0)}function al(e){S($c,this,e.shiftKey),e.stopPropagation()}function ol(e){e.stopPropagation()}function sl(e){let{checked:t}=e.target;this.selected=t,this.dispatchEvent(new CustomEvent(`craft-selection-change`,{detail:{selected:t,shiftKey:x($c,this)},bubbles:!0,composed:!0}))}function cl(e){return Array.from(this.childNodes).some(t=>t instanceof Element?t.slot===e&&(t.localName!==`div`||t.childElementCount!==0||t.textContent.trim()!==``):e===``&&t.nodeType===Node.TEXT_NODE&&t.textContent.trim()!==``)}function ll(){return{prefix:C(Qc,this,cl).call(this,`prefix`),thumbnail:this.showThumb&&C(Qc,this,cl).call(this,`thumbnail`),icon:!!this.icon||C(Qc,this,cl).call(this,`icon`),status:C(Qc,this,cl).call(this,`status`),body:C(Qc,this,cl).call(this,``),suffix:C(Qc,this,cl).call(this,`suffix`)}}function ul(e){if(this.selectable)return`select`;for(let t of[`prefix`,`thumbnail`,`icon`,`status`])if(e[t])return t;return`body`}nl.styles=[ee,Yc],r([c()],nl.prototype,`size`,void 0),r([c({attribute:`thumb-size`,reflect:!0})],nl.prototype,`thumbSize`,void 0),r([c({attribute:`prefix-placement`,reflect:!0})],nl.prototype,`prefixPlacement`,void 0),r([c({reflect:!0})],nl.prototype,`variant`,void 0),r([c({reflect:!0})],nl.prototype,`appearance`,void 0),r([c({attribute:`align-items`})],nl.prototype,`alignItems`,void 0),r([c()],nl.prototype,`icon`,void 0),r([c({attribute:`show-status`,type:Boolean})],nl.prototype,`showStatus`,void 0),r([c({attribute:`show-thumb`,type:Boolean})],nl.prototype,`showThumb`,void 0),r([c({type:Boolean})],nl.prototype,`selectable`,void 0),r([c({type:Boolean,reflect:!0,attribute:`full-width`})],nl.prototype,`fullWidth`,void 0),r([c({type:Boolean,reflect:!0})],nl.prototype,`rounded`,void 0),r([c({type:Boolean,reflect:!0})],nl.prototype,`selected`,void 0),r([c({attribute:`select-label`})],nl.prototype,`selectLabel`,void 0),r([c({attribute:`select-disabled`,type:Boolean})],nl.prototype,`selectDisabled`,void 0),customElements.get(`craft-chip`)||customElements.define(`craft-chip`,nl);var dl=a`
  :host {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: center;
    column-gap: var(--c-spacing-sm);
    --c-option-wide-threshold: 640;
    cursor: default;
    padding-inline: var(--c-spacing-md);
    padding-block: var(--c-spacing-sm);
    font: inherit;
    border-radius: var(--c-radius-sm);
  }

  :host([hidden]) {
    display: none;
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

  /* The quieter hint loses too much contrast against the hover fill */
  :host(:hover) .hint {
    color: var(--c-color-neutral-on-normal);
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
`,fl=new WeakMap,pl=new WeakMap,ml=new WeakSet,hl=class extends u{constructor(...e){super(...e),b(this,ml),this.value=``,w(this,fl,!1),this.active=!1,this.disabled=!1,this.hint=null,w(this,pl,void 0)}get selected(){return x(fl,this)}set selected(e){let t=x(fl,this);S(fl,this,e),this.requestUpdate(`selected`,t),t!==e&&this.dispatchEvent(new Event(`craft-selected-change`,{bubbles:!0}))}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`option`),this.id||=Qr(`option`),_l._.observe(this)}disconnectedCallback(){super.disconnectedCallback(),_l._.unobserve(this)}willUpdate(e){e.has(`selected`)&&this.setAttribute(`aria-selected`,String(this.selected)),e.has(`disabled`)&&this.setAttribute(`aria-disabled`,String(this.disabled))}render(){return p`
      <div class="choice-field__label">
        <span class="content"><slot></slot></span>
        ${this.hint?p`<span class="hint">${this.hint}</span>`:i}
        <slot name="suffix"></slot>
      </div>
      ${this.selected?p`<craft-icon class="check" name="check"></craft-icon>`:i}
    `}};function gl(){return x(pl,this)??S(pl,this,parseInt(getComputedStyle(this).getPropertyValue(`--c-option-wide-threshold`)||`640`,10)),x(pl,this)}hl.styles=dl;var _l={_:new ResizeObserver(e=>{for(let t of e){let e=t.target,n=t.borderBoxSize?.[0]?.inlineSize??t.contentRect.width;e.toggleAttribute(`wide`,n>=C(ml,e,gl).call(e))}})};r([c()],hl.prototype,`value`,void 0),r([c({type:Boolean,reflect:!0})],hl.prototype,`selected`,null),r([c({type:Boolean,reflect:!0})],hl.prototype,`active`,void 0),r([c({type:Boolean,reflect:!0})],hl.prototype,`disabled`,void 0),r([c()],hl.prototype,`hint`,void 0),customElements.get(`craft-option`)||customElements.define(`craft-option`,hl);var vl=a`
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
`,yl=class extends u{constructor(...e){super(...e),this.label=``}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`group`)}willUpdate(){this.setAttribute(`aria-label`,this.label)}render(){return p`
      <div class="label" aria-hidden="true">${this.label}</div>
      <slot></slot>
    `}};yl.styles=vl,r([c()],yl.prototype,`label`,void 0),customElements.get(`craft-option-group`)||customElements.define(`craft-option-group`,yl);var bl=a`
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
`,xl=new WeakMap,Sl=class extends u{constructor(...e){super(...e),this.removable=!1,w(this,xl,()=>{this.dispatchEvent(new CustomEvent(`craft-remove`,{bubbles:!0}))})}render(){return this.removable?p`<button
            type="button"
            aria-describedby="remove-hint"
            @click=${x(xl,this)}
          >
            <slot></slot>
            <span class="remove" aria-hidden="true">×</span>
          </button>
          <span id="remove-hint" hidden>${n(`Remove`)}</span>`:p`<slot></slot>`}};Sl.styles=bl,r([c({type:Boolean,reflect:!0})],Sl.prototype,`removable`,void 0),customElements.get(`craft-combobox-token`)||customElements.define(`craft-combobox-token`,Sl);var Cl=e=>{var t=new WeakMap,n=new WeakMap,a=new WeakMap,o=new WeakMap,l=new WeakMap;class u extends e{constructor(...e){super(...e),w(this,t,typeof this.attachInternals==`function`?this.attachInternals():void 0),w(this,n,null),w(this,a,!1),w(this,o,void 0),w(this,l,void 0),this.name=``,this.disabled=!1,this._formDisabled=!1,this._formAttribute=null}_formValue(){return null}_restoreFormValue(e){}_setValidity(e={},n=``,r){x(t,this)?.setValidity?.(e,n,r)}get form(){return x(t,this)?.form??null}get validity(){return x(t,this)?.validity??{valid:!0}}get validationMessage(){return x(t,this)?.validationMessage??``}get willValidate(){return x(t,this)?.willValidate??!1}checkValidity(){return x(t,this)?.checkValidity?.()??!0}reportValidity(){return x(t,this)?.reportValidity?.()??!0}connectedCallback(){super.connectedCallback(),x(a,this)||(S(a,this,!0),S(n,this,this._formValue())),this._syncFormValue()}updated(e){super.updated(e),this._syncFormValue()}dispatchEvent(e){return(e.type===`input`||e.type===`change`)&&this._syncFormValue(),super.dispatchEvent(e)}_syncFormValue(){let e=this.name&&!this.disabled?this._formValue():null,t=this._formAttribute,n=JSON.stringify([this.name,e,t]);e===null&&!x(o,this)||n===x(l,this)&&x(o,this)?.parentNode===this||(S(l,this,n),x(o,this)||(S(o,this,document.createElement(`span`)),x(o,this).hidden=!0,x(o,this).slot=`form-value`),x(o,this).parentNode!==this&&this.append(x(o,this)),s(Array.isArray(e)?p`<input
                type="hidden"
                name=${this.name}
                value=""
                form=${t??i}
              />${e.map(e=>p`<input
                    type="hidden"
                    name=${`${this.name}[]`}
                    form=${t??i}
                    .value=${e}
                  />`)}`:e===null?i:p`<input
                type="hidden"
                name=${this.name}
                form=${t??i}
                .value=${e}
              />`,x(o,this)))}formDisabledCallback(e){this._formDisabled=e}formResetCallback(){this._restoreFormValue(x(n,this))}}return u.formAssociated=!0,r([c({reflect:!0})],u.prototype,`name`,void 0),r([c({type:Boolean,reflect:!0})],u.prototype,`disabled`,void 0),r([f()],u.prototype,`_formDisabled`,void 0),r([c({attribute:`form`})],u.prototype,`_formAttribute`,void 0),u},wl={name:`minWidthOfReference`,enabled:!0,phase:`beforeWrite`,requires:[`computeStyles`],fn:({state:e})=>{e.styles.popper={...e.styles.popper,minWidth:`${e.rects.reference.width}px`}}},Tl=new WeakMap,El=new WeakMap,Dl=class{constructor(e){this.parts=e,w(this,Tl,null),w(this,El,void 0)}get shown(){return x(Tl,this)!==null}show(){let e=this.parts();!e||x(Tl,this)||(S(El,this,e),at(e.layer),e.pane.style.minWidth=`${e.reference.getBoundingClientRect().width}px`,S(Tl,this,rr(e.reference,e.pane,{strategy:`fixed`,placement:`bottom-start`,modifiers:[...st(0),wl]})),x(Tl,this).forceUpdate())}hide(){x(El,this)&&(ot(x(El,this).layer),x(Tl,this)?.destroy(),S(Tl,this,null),S(El,this,void 0))}update(){x(Tl,this)?.update()}};function Ol(e){return e?[...e.querySelectorAll(`craft-option`)].filter(e=>!e.hidden):[]}function kl(e){return e.textContent?.trim()??``}function Al(e,t,n,{scroll:r=!0}={}){for(let n of e)n.active=n===t;t?(n?.setAttribute(`aria-activedescendant`,t.id),r&&t.scrollIntoView?.({block:`nearest`})):n?.removeAttribute(`aria-activedescendant`)}function jl(e,t,n,{wrap:r=!0,skipDisabled:i=!1}={}){let a=i?e.filter(e=>!e.disabled||e===t):e;if(!a.length)return;let o=t?a.indexOf(t):-1;if(o===-1)return n===1?a[0]:a.at(-1);let s=o+n;return r?a[(s+a.length)%a.length]:a[Math.min(Math.max(s,0),a.length-1)]}var Ml=new WeakMap,Nl=new WeakMap,Pl=class{constructor(){w(this,Ml,``),w(this,Nl,null)}match(e,t,n){if(e.key.length!==1||e.metaKey||e.ctrlKey||e.altKey||e.key===` `&&x(Ml,this)===``)return;S(Ml,this,x(Ml,this)+e.key.toLowerCase()),x(Nl,this)!==null&&clearTimeout(x(Nl,this)),S(Nl,this,setTimeout(()=>this.reset(),1e3));let r=[...x(Ml,this)].every(e=>e===x(Ml,this)[0]),i=r?x(Ml,this)[0]:x(Ml,this),a=n?t.indexOf(n):-1;return[...t.slice(a+ +!!r),...t.slice(0,a+ +!!r)].find(e=>!e.disabled&&kl(e).toLowerCase().startsWith(i))}get typing(){return x(Ml,this)!==``}reset(){S(Ml,this,``),x(Nl,this)!==null&&(clearTimeout(x(Nl,this)),S(Nl,this,null))}},Fl=a`
  ${Xr}

  :host {
    width: 100%;
  }

  ::slotted(.form-control) {
    ${Yr}
    box-sizing: border-box;
  }

  /* The dropdown sets the field's width as an inline min-width, which wins over this cap on wider fields */
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
    max-block-size: calc(200rem / 16);
    overflow: auto;
    grid-template-columns: minmax(0, 1fr);
    gap: var(--c-spacing-xs);
    padding: var(--c-spacing-sm);
  }

  .input-group__input {
    ${Jr}
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

  :host([multiple]) .input-group__input {
    ${qr}
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--c-spacing-xs);
    padding: var(--c-spacing-xs);
  }

  :host([multiple]) .input-group__input:has(.combobox__textbox:focus-within) {
    outline: var(--c-focus-outline-width) var(--c-focus-outline-style)
      var(--c-color-focus-outline);
    outline-offset: var(--c-focus-outline-offset);
  }

  /* The textbox is the .form-control here, so it carries the ring itself */
  :host(:not([multiple])) ::slotted(.form-control:focus-within) {
    outline: var(--c-focus-outline-width) var(--c-focus-outline-style)
      var(--c-color-focus-outline);
    outline-offset: var(--c-focus-outline-offset);
  }

  :host([multiple][invalid]) .input-group__input {
    border-color: var(--c-color-danger-border-loud);
  }

  .combobox__textbox {
    position: relative;
    flex: 1;
    min-width: 0;
  }

  :host([multiple]) .combobox__textbox {
    min-width: 8rem;
  }

  :host([multiple]) ::slotted(.form-control) {
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
`;function Il(e){return Oo.includes(e)||te.includes(e)?`var(--c-color-${e}-fill-loud)`:e}function Ll(e){if(Array.isArray(e))return e.map(String);if(typeof e!=`string`||e===``)return[];try{let t=JSON.parse(e);return Array.isArray(t)?t.map(String):[e]}catch{return[e]}}function Rl(e,t){return JSON.stringify(e)===JSON.stringify(t)}var zl=`insertReplacementText`,Bl=new WeakMap,Vl=new WeakMap,Hl=new WeakMap,Ul=new WeakMap,Wl=new WeakMap,Gl=new WeakMap,Kl=new WeakMap,ql=new WeakMap,Jl=new WeakMap,Yl=new WeakMap,B=new WeakSet,Xl=new WeakMap,Zl=new WeakMap,Ql=new WeakMap,$l=new WeakMap,eu=new WeakMap,tu=new WeakMap,nu=new WeakMap,ru=new WeakMap,iu=new WeakMap,au=new WeakMap,ou=new WeakMap,su=new WeakMap,cu=new WeakMap,lu=new WeakMap,uu=class extends Cl(mi(u)){get value(){return this.multiple?Ll(x(Bl,this)):Array.isArray(x(Bl,this))?String(x(Bl,this)[0]??``):String(x(Bl,this)??``)}set value(e){let t=this.value;if(S(Bl,this,e??``),Rl(t,this.value))return;let n=this._control?.value;C(B,this,yu).call(this),this._control?.value!==n&&S(Gl,this,!1),this.requestUpdate(`value`,t),x(Vl,this)||S(Kl,this,this.value)}constructor(){super(),b(this,B),this.options=[],this.limit=150,this.multiple=!1,this.requireOptionMatch=!1,this.showAllOnEmpty=!1,this.required=!1,this.invalid=!1,this.open=!1,this.clearable=!1,this.placeholder=``,this.showSelectedHint=!1,w(this,Bl,``),w(this,Vl,!1),w(this,Hl,[]),w(this,Ul,``),w(this,Wl,!1),w(this,Gl,!1),w(this,Kl,``),w(this,ql,null),w(this,Jl,``),w(this,Yl,new Dl(()=>{let e=this.renderRoot.querySelector(`.overlay-layer`)??null,t=fu.call(C(B,this)),n=this.renderRoot.querySelector(`.input-group__input`)??null;return e&&t&&n?{layer:e,pane:t,reference:n}:void 0})),w(this,Xl,e=>{e.composedPath().includes(this)||(this.open=!1)}),w(this,Zl,()=>{!this.open&&C(B,this,gu).call(this)&&(this.open=!0)}),w(this,Ql,e=>{e.relatedTarget instanceof Node&&(this.contains(e.relatedTarget)||this.renderRoot.contains(e.relatedTarget))||(this.multiple&&!this.requireOptionMatch&&C(B,this,Tu).call(this),this.open=!1,C(B,this,Cu).call(this))}),w(this,$l,e=>{e.stopPropagation();let t=this._control?.value??``,n=x(Jl,this);S(Jl,this,t),S(Gl,this,!0),S(Vl,this,!0),!this.multiple&&!this.requireOptionMatch&&C(B,this,vu).call(this,C(B,this,_u).call(this,t)),this.open=C(B,this,gu).call(this),C(B,this,Nu).call(this);let r=n.length<t.length||n!==``&&t!==``&&n[0].toLowerCase()!==t[0].toLowerCase();C(B,this,Ou).call(this,!this.multiple&&r&&t!==``?C(B,this,Eu).call(this).find(e=>!e.disabled):void 0),ts(this)}),w(this,eu,e=>{if(!e.isComposing)switch(e.key){case`ArrowDown`:case`ArrowUp`:C(B,this,bu).call(this,e);break;case`Enter`:C(B,this,xu).call(this,e);break;case`Escape`:this.open&&=(e.preventDefault(),$e(e),!1);break;case`Tab`:this.open=!1;break;case`Backspace`:this.multiple&&!hu.call(C(B,this))&&(this._control?.value??``)===``&&(e.preventDefault(),C(B,this,wu).call(this,this.value.slice(0,-1)));break}}),w(this,tu,e=>{let t=e.target?.closest(`craft-option`);!t||t.disabled||hu.call(C(B,this))||(C(B,this,Su).call(this,t),this._control?.focus(),this.multiple||(this.open=!1))}),w(this,nu,()=>{if(this.multiple){C(B,this,wu).call(this,[]);return}S(Vl,this,!0),this.value=``,C(B,this,yu).call(this),C(B,this,Nu).call(this),this._control?.focus(),ts(this),C(B,this,Cu).call(this)}),this.announcement=``,w(this,ru,null),w(this,iu,``),w(this,au,!1),this.overflowTotal=0,w(this,ou,!1),w(this,su,e=>{e.button!==0||hu.call(C(B,this))||(e.preventDefault(),S(ou,this,this.open),this._control?.focus())}),w(this,cu,()=>{hu.call(C(B,this))||(this.open=!x(ou,this))}),w(this,lu,void 0),this.addEventListener(`focusout`,x(Ql,this))}get slots(){return{...super.slots,input:()=>{let e=document.createElement(`input`);return e.autocomplete=`off`,e},listbox:()=>document.createElement(`div`)}}get _control(){let e=super._control;return e instanceof HTMLInputElement?e:e?.querySelector(`input`)??void 0}connectedCallback(){super.connectedCallback();let e=this._control,t=du.call(C(B,this));e&&t&&C(B,this,pu).call(this,e,t),C(B,this,Nu).call(this),C(B,this,yu).call(this)}disconnectedCallback(){x(ru,this)!==null&&(clearTimeout(x(ru,this)),S(ru,this,null)),S(au,this,!1),S(iu,this,``),this.announcement=``,x(Yl,this).hide(),document.removeEventListener(`pointerdown`,x(Xl,this)),super.disconnectedCallback()}firstUpdated(e){super.firstUpdated(e),S(Ul,this,this.value),S(Kl,this,this.value)}willUpdate(e){super.willUpdate(e),e.has(`multiple`)&&S(Bl,this,this.value)}updated(e){super.updated(e);let t=this._control,n=du.call(C(B,this));e.has(`open`)&&C(B,this,mu).call(this,e.get(`open`)),(e.has(`options`)||e.has(`limit`)||e.has(`open`)||e.has(`value`)||e.has(`showSelectedHint`)||e.has(`multiple`))&&C(B,this,Nu).call(this),(e.has(`options`)||e.has(`showSelectedHint`))&&!x(Gl,this)&&C(B,this,yu).call(this),this.multiple?C(B,this,Wu).call(this):(x(lu,this)?.remove(),S(lu,this,void 0)),this._reflectAriaReferences(),t&&(t.placeholder=this.placeholder,t.disabled=this.disabled||x(Wl,this),t.readOnly=this.readOnly,this.invalid?t.setAttribute(`aria-invalid`,`true`):t.removeAttribute(`aria-invalid`),this.required?t.setAttribute(`aria-required`,`true`):t.removeAttribute(`aria-required`)),this.multiple?n?.setAttribute(`aria-multiselectable`,`true`):n?.removeAttribute(`aria-multiselectable`),C(B,this,Gu).call(this),this.toggleAttribute(`has-prefix-icon`,C(B,this,Vu).call(this)?.data?.icon!=null||C(B,this,Vu).call(this)?.data?.indicator!=null),this.open&&x(Yl,this).update()}_reflectAriaReferences(){let e=this._control;if(e&&x(Hl,this).length){let t=(e.getAttribute(`aria-labelledby`)??``).split(/\s+/).filter(e=>e&&!x(Hl,this).includes(e));t.length?e.setAttribute(`aria-labelledby`,t.join(` `)):e.removeAttribute(`aria-labelledby`)}if(super._reflectAriaReferences(),!e)return;let t=x(lu,this)?.id;S(Hl,this,[...(this.getAttribute(`aria-labelledby`)??``).split(/\s+/),t??``].filter(Boolean));let n=(this.getAttribute(`aria-labelledby`)||e.getAttribute(`aria-labelledby`)||``).split(` `).filter(e=>e&&e!==t).join(` `);e.setAttribute(`aria-labelledby`,t?`${n} ${t}`.trim():n),du.call(C(B,this))?.setAttribute(`aria-labelledby`,n);let r=this.getAttribute(`aria-label`);r&&e.setAttribute(`aria-label`,r)}_inputGroupInputTemplate(){let e=C(B,this,Vu).call(this)?.data,t=e?.icon,r=e?.color,a=e?.indicator;return p`
      <div class="input-group__input">
        <slot name="selection"></slot>
        <div class="combobox__textbox">
          ${t?p`<craft-icon
                class="prefix"
                name=${t}
                style=${r?`color: ${Il(r)}`:i}
              ></craft-icon>`:a?p`<span class="prefix prefix--indicator">
                  <craft-indicator
                    fill=${a.fill??i}
                    appearance=${a.appearance??i}
                  ></craft-indicator>
                </span>`:i}
          <slot name="input"></slot>
          ${this.clearable&&C(B,this,Iu).call(this)&&!hu.call(C(B,this))?p`<craft-button
                class="clear"
                type="button"
                variant="plain"
                size="small"
                icon
                aria-label=${n(`Clear`)}
                @mousedown=${e=>e.preventDefault()}
                @click=${x(nu,this)}
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
            @mousedown=${x(su,this)}
            @click=${x(cu,this)}
          ></craft-icon>
        </div>
      </div>
      <div class="overlay-layer" role="none" popover="manual">
        <div id="overlay-content-node-wrapper">
          <slot name="listbox"></slot>
          ${this.overflowTotal?p`<div class="combobox__footer" aria-hidden="true">
                ${n(`Showing {shown} of {total} — keep typing to narrow results.`,{shown:this.limit,total:this.overflowTotal})}
              </div>`:i}
        </div>
      </div>
      <div class="cp-visually-hidden" aria-live="polite" aria-atomic="true">
        ${this.announcement}
      </div>
    `}focus(e){this._control?.focus(e)}_formValue(){return x(Wl,this)?null:this.multiple?[...this.value]:this.value}formResetCallback(){this.value=x(Ul,this),S(Kl,this,this.value),C(B,this,yu).call(this),this._syncFormValue()}formDisabledCallback(e){S(Wl,this,e),this.requestUpdate(),this._syncFormValue()}};function du(){return this.querySelector(`:scope > [slot=listbox]`)??void 0}function fu(){return this.renderRoot.querySelector(`#overlay-content-node-wrapper`)}function pu(e,t){e.dataset.comboboxTextbox===void 0&&(e.dataset.comboboxTextbox=``,t.id||=Qr(`listbox`),t.setAttribute(`role`,`listbox`),t.addEventListener(`mousedown`,e=>e.preventDefault()),t.addEventListener(`click`,x(tu,this)),e.setAttribute(`role`,`combobox`),e.setAttribute(`aria-haspopup`,`listbox`),e.setAttribute(`aria-autocomplete`,`list`),e.setAttribute(`aria-controls`,t.id),e.setAttribute(`aria-expanded`,`false`),e.addEventListener(`input`,x($l,this)),e.addEventListener(`keydown`,x(eu,this)),e.addEventListener(`click`,x(Zl,this)),e.addEventListener(`change`,e=>e.stopPropagation()))}function mu(e){if(this._control?.setAttribute(`aria-expanded`,String(this.open)),this.open){x(Yl,this).show(),document.addEventListener(`pointerdown`,x(Xl,this));return}x(Yl,this).hide(),document.removeEventListener(`pointerdown`,x(Xl,this)),e&&(C(B,this,Ou).call(this,void 0),x(Gl,this)&&(S(Gl,this,!1),C(B,this,yu).call(this)))}function hu(){return this.disabled||this.readOnly||x(Wl,this)}function gu(){return!hu.call(C(B,this))&&((this._control?.value??``)!==``||this.showAllOnEmpty)}function _u(e){let t=e.trim();if(t!==``){for(let e of C(B,this,Hu).call(this))if(C(B,this,Uu).call(this,e)===t)return e.value}return e}function vu(e){let t=this.value;S(Bl,this,e),Rl(t,this.value)||this.requestUpdate(`value`,t)}function yu(){let e=this._control;if(!e||this.multiple)return;let t=this.value,n=C(B,this,Bu).call(this,t),r=n?C(B,this,Uu).call(this,n):t;e.value!==r&&(e.value=r),S(Jl,this,r)}function bu(e){if(!hu.call(C(B,this))){if(e.preventDefault(),e.altKey){this.open=e.key===`ArrowDown`;return}if(!this.open){this.open=!0;return}C(B,this,Ou).call(this,jl(C(B,this,Eu).call(this),C(B,this,Du).call(this),e.key===`ArrowDown`?1:-1))}}function xu(e){let t=this.open?C(B,this,Du).call(this):void 0;if(this.open&&e.preventDefault(),!hu.call(C(B,this))){if(this.multiple){if(t){t.disabled||C(B,this,Su).call(this,t);return}e.preventDefault(),C(B,this,Tu).call(this);return}t&&!t.disabled&&C(B,this,Su).call(this,t),this.open=!1}}function Su(e){let t=e.value;if(this.multiple){let e=this.value;e.includes(t)||C(B,this,wu).call(this,[...e,t],{close:!1,inputType:zl});return}S(Vl,this,!0),this.value=t,S(Gl,this,!1),C(B,this,yu).call(this),ts(this,zl),C(B,this,Cu).call(this)}function Cu(){S(Vl,this,!1),!(this.multiple||Rl(this.value,x(Kl,this)))&&(S(Kl,this,this.value),ns(this))}function wu(e,{close:t=!0,inputType:r}={}){if(hu.call(C(B,this)))return;let i=this.value.filter(t=>!e.includes(t));this.value=e,this._control&&(this._control.value=``),S(Jl,this,``),S(Gl,this,!1),t&&(this.open=!1),C(B,this,Nu).call(this),this._syncFormValue(),ts(this,r),S(Kl,this,this.value),Rl(this.value,e)&&ns(this),this._control?.focus(),i.length&&C(B,this,Ru).call(this,n(`Removed {name}`,{name:new Intl.ListFormat(document.documentElement.lang||void 0,{type:`conjunction`}).format(i.map(e=>C(B,this,zu).call(this,e)))}),!0)}function Tu(){let e=this._control?.value??``;if(hu.call(C(B,this))||e===``)return;let t=C(B,this,Bu).call(this,e);t?.disabled||this.requireOptionMatch&&!t||C(B,this,wu).call(this,[...new Set([...this.value,e])])}function Eu(){return Ol(du.call(C(B,this)))}function Du(){return x(ql,this)===null?void 0:C(B,this,Eu).call(this).find(e=>e.value===x(ql,this))}function Ou(e){S(ql,this,e?.value??null),Al(C(B,this,Eu).call(this),e,this._control,{scroll:this.open})}function ku(e){let t=e.trim().toLowerCase(),n=[];for(let e of this.options)if(C(B,this,ju).call(this,e))for(let r of e.options)(t===``||C(B,this,Mu).call(this,t,r))&&n.push({groupLabel:e.label,option:r});else(t===``||C(B,this,Mu).call(this,t,e))&&n.push({option:e});return t===``?n:C(B,this,Au).call(this,t,n)}function Au(e,t){let n=({option:t})=>t.label.toLowerCase()===e||String(t.value).toLowerCase()===e,r=[];for(let e=0;e<t.length;){let i=e;for(;i<t.length&&t[i].groupLabel===t[e].groupLabel;)i++;let a=t.slice(e,i);r.push(...a.filter(n),...a.filter(e=>!n(e))),e=i}return r}function ju(e){return e.type===`optgroup`}function Mu(e,t){return t.label.toLowerCase().includes(e)||String(t.value).toLowerCase().includes(e)||(t.data?.keywords?.toLowerCase().includes(e)??!1)}function Nu(){let e=du.call(C(B,this));if(!e)return;let t=x(Gl,this)?this._control?.value??``:``,n=this.multiple?this.value:[],r=C(B,this,ku).call(this,t).filter(e=>!n.includes(e.option.value)),i=r.slice(0,this.limit),a=[],o=new Map;for(let e of i){let t=a.at(-1);if(t&&t.groupLabel===e.groupLabel){t.entries.push(e);continue}let n=e.groupLabel??``,r=o.get(n)??0;o.set(n,r+1),a.push({key:`${e.groupLabel===void 0?`options`:`group`}:${n}:${r}`,groupLabel:e.groupLabel,entries:[e]})}let c=this.multiple?null:this.value,l=e=>ys(e.entries,e=>e.option.value,e=>C(B,this,Pu).call(this,e.option,c!==null&&String(e.option.value)===c));this.overflowTotal=r.length>this.limit?r.length:0,C(B,this,Lu).call(this,r.length),s(p`${ys(a,e=>e.key,e=>e.groupLabel===void 0?l(e):p`<craft-option-group .label=${e.groupLabel}>
                ${l(e)}
              </craft-option-group>`)}`,e);let u=C(B,this,Du).call(this);x(ql,this)!==null&&!u&&S(ql,this,null),Al(C(B,this,Eu).call(this),u,this._control,{scroll:!1})}function Pu(e,t){let n=e.data??{},r=e.label,i=r.startsWith(`$`)||r.startsWith(`@`);return p`
      <craft-option
        .value=${String(e.value)}
        .selected=${t}
        .hint=${n.hint??null}
        ?disabled=${e.disabled??!1}
      >
        ${C(B,this,Fu).call(this,n)}${i?p`<code>${r}</code>`:r}
      </craft-option>
    `}function Fu(e){return p`${e.indicator?p`<craft-indicator
          fill=${e.indicator.fill??i}
          appearance=${e.indicator.appearance??i}
        ></craft-indicator>`:i}${e.icon?p`<craft-icon
          name="${e.icon}"
          style=${e.color?`color: ${Il(e.color)}`:i}
        ></craft-icon>`:i}`}function Iu(){let e=this.value;return Array.isArray(e)?e.length>0:e!==``}function Lu(e){if(!this.open&&!x(Gl,this)){S(iu,this,``);return}let t=e===0?n(`No results`):n(`{num, number} {num, plural, =1{result} other{results}}`,{num:e});t!==x(iu,this)&&(x(au,this)&&!x(Gl,this)||(S(iu,this,t),C(B,this,Ru).call(this,t)))}function Ru(e,t=!1){S(au,this,t),x(ru,this)!==null&&(clearTimeout(x(ru,this)),S(ru,this,null)),this.announcement=``,queueMicrotask(()=>{this.isConnected&&(this.announcement=e)}),S(ru,this,setTimeout(()=>{S(ru,this,null),S(au,this,!1),this.announcement=``},5e3))}function zu(e){return C(B,this,Bu).call(this,e)?.label??e}function Bu(e){for(let t of C(B,this,Hu).call(this))if(String(t.value)===e)return t}function Vu(){return this.multiple||!C(B,this,Iu).call(this)?void 0:C(B,this,Bu).call(this,this.value)}function*Hu(){for(let e of this.options)C(B,this,ju).call(this,e)?yield*e.options:yield e}function Uu(e){return this.showSelectedHint&&e.data?.hint?`${e.label} – ${e.data.hint}`:e.label}function Wu(){x(lu,this)||(S(lu,this,document.createElement(`ul`)),x(lu,this).slot=`selection`,x(lu,this).id=`selection-${this._inputId}`,x(lu,this).setAttribute(`role`,`list`),x(lu,this).setAttribute(`aria-live`,`polite`),x(lu,this).setAttribute(`aria-atomic`,`false`),this.append(x(lu,this)));let e=this.value;s(ys(e,e=>e,e=>p`
          <li>
            <craft-combobox-token
              ?removable=${!hu.call(C(B,this))}
              @craft-remove=${()=>C(B,this,wu).call(this,this.value.filter(t=>t!==e))}
            >
              ${C(B,this,Fu).call(this,C(B,this,Bu).call(this,e)?.data??{})}
              ${C(B,this,zu).call(this,e)}
            </craft-combobox-token>
          </li>
        `),x(lu,this))}function Gu(){let e=this.multiple&&this.required&&!this.disabled&&!this.readOnly&&!x(Wl,this)&&this.value.length===0;this._setValidity(e?{valueMissing:!0}:{},e?n(`This field is required.`):``,this._control)}uu.styles=[ui,re,ct,Fl],r([c({type:Array})],uu.prototype,`options`,void 0),r([c({type:Number})],uu.prototype,`limit`,void 0),r([c({type:Boolean,attribute:`multiple`,reflect:!0})],uu.prototype,`multiple`,void 0),r([c({type:Boolean,attribute:`require-option-match`})],uu.prototype,`requireOptionMatch`,void 0),r([c({type:Boolean,attribute:`show-all-on-empty`})],uu.prototype,`showAllOnEmpty`,void 0),r([c({type:Boolean})],uu.prototype,`required`,void 0),r([c({type:Boolean,reflect:!0})],uu.prototype,`invalid`,void 0),r([c({type:Boolean,reflect:!0})],uu.prototype,`open`,void 0),r([c({type:Boolean,reflect:!0})],uu.prototype,`clearable`,void 0),r([c({type:String,reflect:!0})],uu.prototype,`placeholder`,void 0),r([c({type:Boolean,reflect:!0,attribute:`show-selected-hint`})],uu.prototype,`showSelectedHint`,void 0),r([c({attribute:`value`})],uu.prototype,`value`,null),r([f()],uu.prototype,`announcement`,void 0),r([f()],uu.prototype,`overflowTotal`,void 0),customElements.get(`craft-combobox`)||customElements.define(`craft-combobox`,uu);function Ku(e){let[t]=e.composedPath();return t instanceof Element&&t.matches(`:focus-visible`)}function qu(e){let t=document.activeElement;for(;t?.shadowRoot?.activeElement;)t=t.shadowRoot.activeElement;if(!t?.matches(`:focus-visible`))return!1;for(let n=t;n;){if(n===e)return!0;n=n.parentNode??(n instanceof ShadowRoot?n.host:null)}return!1}function Ju(e){let t=e;return(t.disabled===!0||e.getAttribute(`aria-disabled`)===`true`)&&!t.focusableWhenDisabled}function Yu({invoker:e,content:t,show:n,hide:r,delayIn:i=0,delayOut:a=300}){let o=qu(e),s=!1,c,l=t=>{let{type:l}=t;clearTimeout(c),o=l===`focusout`?!1:o||l===`focusin`&&Ku(t),s=l===`mouseleave`?!1:s||l===`mouseenter`,c=(o||s)&&!Ju(e)?setTimeout(n,i):setTimeout(r,a)},u=[`mouseenter`,`mouseleave`],d=[`mouseenter`,`mouseleave`,`focusin`,`focusout`];for(let e of u)t.addEventListener(e,l);for(let t of d)e.addEventListener(t,l);return{reset(){o=!1,s=!1},setContent(e){for(let n of u)t.removeEventListener(n,l),e.addEventListener(n,l);t=e},teardown(){clearTimeout(c);for(let e of u)t.removeEventListener(e,l);for(let t of d)e.removeEventListener(t,l)}}}var Xu=new WeakMap,Zu=new WeakMap,Qu=new WeakMap,$u=new WeakMap,ed=new WeakMap,td=new WeakMap,V=new WeakSet,nd=new WeakMap,rd=new WeakMap,id=new WeakMap,ad=new WeakMap,od=class extends u{constructor(){super(),b(this,V),this.open=!1,this.placement=`top`,this.trigger=`hover focus`,this.invokerRelation=`description`,w(this,Xu,null),w(this,Zu,Qr(`tooltip`)),w(this,Qu,null),w(this,$u,null),w(this,ed,null),w(this,td,!1),w(this,nd,()=>{x(td,this)&&this.invoker!==x(Qu,this)?.node&&C(V,this,pd).call(this)}),w(this,rd,()=>{let e=Array.from(this.children).find(e=>e instanceof HTMLElement&&e.slot===`content`);if(!e||!this.isConnected||e===x(Xu,this))return;let t=x(Qu,this);if(t&&C(V,this,gd).call(this,t.node,t.attribute),x(Xu,this)?.removeEventListener(`keyup`,x(ad,this),!0),S(Xu,this,null),S(Zu,this,Qr(`tooltip`)),C(V,this,fd).call(this),!t){x(td,this)&&C(V,this,pd).call(this);return}C(V,this,hd).call(this,t.node,t.attribute),x($u,this)?.setContent(x(Xu,this)),this.reposition()}),w(this,id,()=>{C(V,this,_d).call(this,!this.open)}),w(this,ad,e=>{e.key!==`Escape`||!this.open||et(e)||($e(e),C(V,this,_d).call(this,!1))})}requestUpdate(e,t,n){super.requestUpdate(e,t,n),e===`open`&&nt(this)}get invoker(){if(this.for){let e=this.getRootNode();return typeof e.getElementById==`function`?e.getElementById(this.for)??void 0:void 0}return Array.from(this.children).find(e=>e instanceof HTMLElement&&e.slot===`invoker`)}async show(){C(V,this,_d).call(this,!0),await this.updateComplete}reposition(){x(ed,this)?.update()}async hide(){C(V,this,_d).call(this,!1),await this.updateComplete}render(){return p`
      <slot name="invoker" @slotchange=${x(nd,this)}></slot>
      <div
        class="overlay-layer"
        role="none"
        popover=${it?`manual`:i}
      >
        <div class="overlay-position">
          <slot name="content" @slotchange=${x(rd,this)}></slot>
        </div>
      </div>
    `}connectedCallback(){x(Xu,this)&&x(Xu,this).parentNode!==this&&x(rd,this).call(this),C(V,this,fd).call(this),super.connectedCallback(),this.hasUpdated&&!x(td,this)&&C(V,this,dd).call(this)}disconnectedCallback(){super.disconnectedCallback(),C(V,this,bd).call(this),this.updateComplete.then(()=>{if(this.isConnected){this.invoker!==x(Qu,this)?.node&&C(V,this,pd).call(this),this.open&&C(V,this,yd).call(this);return}C(V,this,md).call(this),this.open=!1,S(td,this,!1)})}firstUpdated(e){super.firstUpdated(e),C(V,this,dd).call(this)}updated(e){super.updated(e),x(td,this)&&((e.has(`for`)||e.has(`trigger`)||e.has(`invokerRelation`))&&C(V,this,pd).call(this),e.has(`open`)&&(this.open?C(V,this,yd).call(this):C(V,this,bd).call(this)),e.has(`placement`)&&x(ed,this)&&x(ed,this).setOptions(C(V,this,vd).call(this)))}};function sd(){return x(Xu,this)}function cd(){return this.shadowRoot?.querySelector(`.overlay-layer`)??null}function ld(){return this.shadowRoot?.querySelector(`.overlay-position`)??null}function ud(){return this.trigger.split(` `)}function dd(){S(td,this,!0),C(V,this,pd).call(this),this.open&&C(V,this,yd).call(this)}function fd(){var e;if(x(Xu,this)?.isConnected)return;let t=Array.from(this.children).find(e=>e instanceof HTMLElement&&e.slot===`content`);t||(t=document.createElement(`div`),t.slot=`content`,t.append(...Array.from(this.childNodes).filter(e=>!(e instanceof Element)||e.slot===``)),this.append(t)),(e=t).id||(e.id=x(Zu,this)),S(Zu,this,t.id),t.setAttribute(`role`,`tooltip`),S(Xu,this,t),t.addEventListener(`keyup`,x(ad,this),!0)}function pd(){C(V,this,md).call(this);let e=this.invoker,t=sd.call(C(V,this));if(!e||!t){C(V,this,bd).call(this);return}let n=this.invokerRelation===`label`?`aria-labelledby`:`aria-describedby`;S(Qu,this,{node:e,attribute:n}),C(V,this,hd).call(this,e,n),e.addEventListener(`keyup`,x(ad,this),!0),ud.call(C(V,this)).includes(`click`)?e.addEventListener(`click`,x(id,this)):ud.call(C(V,this)).includes(`manual`)||S($u,this,Yu({invoker:e,content:t,delayIn:200,delayOut:0,show:()=>C(V,this,_d).call(this,!0),hide:()=>C(V,this,_d).call(this,!1)})),this.open&&(x(ed,this)?.destroy(),S(ed,this,null),C(V,this,yd).call(this))}function md(){if(x($u,this)?.teardown(),S($u,this,null),!x(Qu,this))return;let{node:e,attribute:t}=x(Qu,this);e.removeEventListener(`keyup`,x(ad,this),!0),e.removeEventListener(`click`,x(id,this)),C(V,this,gd).call(this,e,t),S(Qu,this,null)}function hd(e,t){let n=(e.getAttribute(t)??``).split(/\s+/);n.includes(x(Zu,this))||e.setAttribute(t,[...n,x(Zu,this)].filter(Boolean).join(` `))}function gd(e,t){let n=(e.getAttribute(t)??``).split(/\s+/).filter(e=>e&&e!==x(Zu,this));n.length?e.setAttribute(t,n.join(` `)):e.removeAttribute(t)}function _d(e){if(e===this.open)return;let t=new CustomEvent(e?`craft-before-show`:`craft-before-hide`,{cancelable:!0});this.dispatchEvent(t),!t.defaultPrevented&&(this.open=e)}function vd(){return{strategy:`fixed`,placement:this.placement,modifiers:st(4)}}function yd(){let e=cd.call(C(V,this)),t=ld.call(C(V,this)),n=x(Qu,this)?.node;!this.isConnected||!e||!t||!n||x(ed,this)||(at(e),S(ed,this,rr(n,t,C(V,this,vd).call(this))),x(ed,this).forceUpdate())}function bd(){let e=cd.call(C(V,this));x(ed,this)?.destroy(),S(ed,this,null),x($u,this)?.reset(),e&&ot(e)}od.styles=[ct,a`
      :host {
        display: contents;
      }

      :host([hidden]) {
        display: none;
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
    `],r([c({type:Boolean,reflect:!0})],od.prototype,`open`,void 0),r([c({reflect:!0})],od.prototype,`for`,void 0),r([c({reflect:!0})],od.prototype,`placement`,void 0),r([c({reflect:!0})],od.prototype,`trigger`,void 0),r([c({attribute:`invoker-relation`})],od.prototype,`invokerRelation`,void 0),customElements.get(`craft-tooltip`)||customElements.define(`craft-tooltip`,od);var xd=a`
  :host {
    display: inline-flex;
  }
`,Sd={rest:`custom-icons/clone-dashed`,copying:`custom-icons/clone-dashed`,success:`check`,error:`xmark-large`},Cd=new WeakMap,wd=new WeakSet,Td=class extends u{async copyValue(){if(!(this.status===`copying`||this.disabled)){this.status=`copying`;try{await navigator.clipboard.writeText(this.value),this.dispatchEvent(new CustomEvent(`craft-copy`,{bubbles:!0,cancelable:!1,composed:!0,detail:{value:this.value}}))}catch{this.dispatchEvent(new CustomEvent(`craft-error`,{cancelable:!1,composed:!0,bubbles:!0}))}finally{this.isCopying=!1}}}async showStatus(e){clearTimeout(x(Cd,this)),this.status=e,await this.updateComplete,this.hideTooltip?await this.tooltipEl?.show():this.tooltipEl?.reposition(),S(Cd,this,setTimeout(()=>{this.status=`rest`,this.tooltipEl?.hide()},this.feedbackDuration))}constructor(){super(),b(this,wd),this.isCopying=!1,this.status=`rest`,this.hasLabel=!1,this.value=``,this.disabled=!1,this.feedbackDuration=1e3,this.label=null,this.tooltipLabel=null,this.hideTooltip=!1,this.icon=null,this.size=`small`,this.variant=Ea.Plain,w(this,Cd,void 0),this.addEventListener(`craft-copy`,()=>{this.showStatus(`success`)}),this.addEventListener(`craft-error`,()=>{this.showStatus(`error`)})}connectedCallback(){super.connectedCallback(),this.id||=`copy-${Math.floor(Math.random()*1e8)}`}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(x(Cd,this)),this.status=`rest`}render(){return p`
      <craft-tooltip
        for="${this.id}"
        trigger="${this.hideTooltip?`manual`:`hover focus`}"
        >${Ed.call(C(wd,this))}</craft-tooltip
      >
      <craft-button
        type="button"
        id="${this.id}"
        part="button"
        size="${this.size}"
        variant="${this.variant}"
        flush=${Ve(this.flush)}
        icon="${this.status===`success`||this.status===`error`?Sd[this.status]:this.icon??Sd[this.status]}"
        aria-label="${this.hasLabel?i:this.label||n(`Copy to clipboard`)}"
        ?disabled=${this.disabled}
        @click="${this.copyValue}"
        >${this.hasLabel?p`<slot @slotchange=${C(wd,this,Dd)}></slot>`:i}</craft-button
      >
      ${this.hasLabel?i:p`<slot hidden @slotchange=${C(wd,this,Dd)}></slot>`}
    `}};function Ed(){return this.status===`success`?n(`Copied`):this.status===`error`?n(`Copy failed`):this.hideTooltip?``:this.tooltipLabel||n(`Copy`)}function Dd(){this.hasLabel=[...this.childNodes].some(e=>e instanceof Element||!!e.textContent?.trim())}Td.styles=[xd],r([f()],Td.prototype,`isCopying`,void 0),r([f()],Td.prototype,`status`,void 0),r([f()],Td.prototype,`hasLabel`,void 0),r([h(`craft-tooltip`)],Td.prototype,`tooltipEl`,void 0),r([c({type:String})],Td.prototype,`value`,void 0),r([c({type:Boolean})],Td.prototype,`disabled`,void 0),r([c({attribute:`feedback-duration`,type:Number})],Td.prototype,`feedbackDuration`,void 0),r([c()],Td.prototype,`label`,void 0),r([c({attribute:`tooltip-label`})],Td.prototype,`tooltipLabel`,void 0),r([c({type:Boolean,attribute:`hide-tooltip`})],Td.prototype,`hideTooltip`,void 0),r([c()],Td.prototype,`icon`,void 0),r([c({reflect:!0})],Td.prototype,`size`,void 0),r([c({reflect:!0})],Td.prototype,`variant`,void 0),r([c({reflect:!0})],Td.prototype,`flush`,void 0),customElements.get(`craft-copy-button`)||customElements.define(`craft-copy-button`,Td);var Od=a`
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
`,kd=a`
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
`,Ad=Object.defineProperty,jd=Object.getOwnPropertyDescriptor,Md=Object.getOwnPropertySymbols,Nd=Object.prototype.hasOwnProperty,Pd=Object.prototype.propertyIsEnumerable,Fd=e=>{throw TypeError(e)},Id=(e,t,n)=>t in e?Ad(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ld=(e,t)=>{for(var n in t||={})Nd.call(t,n)&&Id(e,n,t[n]);if(Md)for(var n of Md(t))Pd.call(t,n)&&Id(e,n,t[n]);return e},Rd=(e,t,n,r)=>{for(var i=r>1?void 0:r?jd(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&Ad(t,n,i),i},zd=(e,t,n)=>t.has(e)||Fd(`Cannot `+n),Bd=(e,t,n)=>(zd(e,t,`read from private field`),n?n.call(e):t.get(e)),Vd=(e,t,n)=>t.has(e)?Fd(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),Hd=(e,t,n,r)=>(zd(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),Ud,Wd=class extends u{constructor(){super(),Vd(this,Ud,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){let n=new CustomEvent(e,Ld({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(n),n}static define(e,t=this,n={}){let r=customElements.get(e);if(!r){try{customElements.define(e,t,n)}catch{customElements.define(e,class extends t{},n)}return}let i=` (unknown version)`,a=i;`version`in t&&t.version&&(i=` v`+t.version),`version`in r&&r.version&&(a=` v`+r.version),!(i&&a&&i===a)&&console.warn(`Attempted to register <${e}>${i}, but <${e}>${a} has already been registered.`)}attributeChangedCallback(e,t,n){Bd(this,Ud)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),Hd(this,Ud,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}};Ud=new WeakMap,Wd.version=`2.20.1`,Wd.dependencies={},Rd([c()],Wd.prototype,`dir`,2),Rd([c()],Wd.prototype,`lang`,2);var Gd=class extends Wd{render(){return p` <slot></slot> `}};Gd.styles=[kd,Od],Gd.define(`sl-visually-hidden`);var Kd=a`
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
`,qd=class extends u{constructor(...e){super(...e),this.value=``,this.disabled=!1}getId(){return`attribute-${this.value.replace(/([a-z])([A-Z])/g,`$1-$2`).replace(/[\s_]+/g,`-`).toLowerCase()}`}render(){return p`
      <craft-copy-button
        id="${this.getId()}"
        value="${this.value}"
        class=${N({"copy-attribute":!0})}
      >
        ${this.value}
      </craft-copy-button>
    `}};qd.styles=[A,Kd],r([h(`craft-copy-button`)],qd.prototype,`copyButtonEl`,void 0),r([c({type:String})],qd.prototype,`value`,void 0),r([c({type:Boolean,reflect:!0})],qd.prototype,`disabled`,void 0),customElements.get(`craft-copy-attribute`)||customElements.define(`craft-copy-attribute`,qd);var Jd=[`a[href]`,`area[href]`,`button`,`input`,`select`,`textarea`,`details > summary`,`iframe`,`object`,`embed`,`audio[controls]`,`video[controls]`,`[contenteditable]`,`[tabindex]`].join(`,`);function Yd(e){return e.hasAttribute(`disabled`)||e.hasAttribute(`inert`)||e.getAttribute(`aria-hidden`)===`true`||e.hidden?!1:e.tabIndex>=0}function Xd(e){return(e.shadowRoot?[e.shadowRoot,e]:[e]).flatMap(e=>Array.from(e.querySelectorAll(Jd))).filter(Yd)}function Zd(e){let t=t=>{if(t.key!==`Tab`)return;let n=Xd(e);if(n.length===0)return;let r=n[0],i=n[n.length-1],a=t.composedPath()[0];t.shiftKey&&a===r?(t.preventDefault(),i.focus()):!t.shiftKey&&a===i&&(t.preventDefault(),r.focus())};return e.addEventListener(`keydown`,t),()=>e.removeEventListener(`keydown`,t)}var Qd=a`
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
`,$d=new WeakMap,ef=new WeakMap,tf=new WeakMap,H=new WeakSet,nf=new WeakMap,rf=class extends u{constructor(...e){super(...e),b(this,H),this.target=null,this.label=``,this.minSize=200,this.step=16,this.largeStep=64,this.dragging=null,w(this,$d,null),w(this,ef,null),w(this,tf,null),w(this,nf,()=>{(x($d,this)!==null||x(ef,this)!==null)&&C(H,this,uf).call(this,x($d,this),x(ef,this))})}connectedCallback(){super.connectedCallback(),window.addEventListener(`resize`,x(nf,this))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`resize`,x(nf,this))}reset(){S($d,this,null),S(ef,this,null),C(H,this,df).call(this)}render(){let e=C(H,this,gf).call(this,`x`),t=C(H,this,gf).call(this,`y`),r=C(H,this,gf).call(this,`both`);return p`
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
        @keydown=${C(H,this,hf)}
      ></button>
    `}};function af(){return this.target??this.parentElement}function of(){let e=af.call(C(H,this));return e?getComputedStyle(e).direction===`rtl`:!1}function sf(){let e=af.call(C(H,this))?.getBoundingClientRect();return{width:Math.round(e?.width??0),height:Math.round(e?.height??0)}}function cf(){let e=af.call(C(H,this)),t=e?getComputedStyle(e):null;return{width:parseFloat(t?.maxWidth??``)||window.innerWidth,height:parseFloat(t?.maxHeight??``)||window.innerHeight}}function lf(e,t){return Math.round(Math.min(Math.max(e,this.minSize),t))}function uf(e,t){let n=C(H,this,cf).call(this);S($d,this,e===null?null:C(H,this,lf).call(this,e,n.width)),S(ef,this,t===null?null:C(H,this,lf).call(this,t,n.height)),C(H,this,df).call(this)}function df(){this.dispatchEvent(new CustomEvent(`craft-resize`,{detail:{width:x($d,this),height:x(ef,this)},bubbles:!0,composed:!0}))}function ff(e,t){if(e.button!==0)return;e.preventDefault();let n=e.currentTarget;try{n.setPointerCapture(e.pointerId)}catch{}let r=C(H,this,sf).call(this);S(tf,this,{axis:t,pointerId:e.pointerId,startX:e.clientX,startY:e.clientY,startWidth:x($d,this)??r.width,startHeight:x(ef,this)??r.height,sign:of.call(C(H,this))?-1:1}),this.dragging=t}function pf(e){let t=x(tf,this);if(!t||e.pointerId!==t.pointerId)return;let n=(e.clientX-t.startX)*t.sign,r=e.clientY-t.startY;C(H,this,uf).call(this,t.axis===`y`?x($d,this):t.startWidth+n*2,t.axis===`x`?x(ef,this):t.startHeight+r*2)}function mf(e){if(!x(tf,this)||e.pointerId!==x(tf,this).pointerId)return;let t=e.currentTarget;t.hasPointerCapture?.(e.pointerId)&&t.releasePointerCapture(e.pointerId),S(tf,this,null),this.dragging=null}function hf(e){let t=e.shiftKey?this.largeStep:this.step,n=C(H,this,sf).call(this),r=x($d,this)??n.width,i=x(ef,this)??n.height,a=of.call(C(H,this))?-t:t;switch(e.key){case`ArrowLeft`:C(H,this,uf).call(this,r-a,i);break;case`ArrowRight`:C(H,this,uf).call(this,r+a,i);break;case`ArrowUp`:C(H,this,uf).call(this,r,i-t);break;case`ArrowDown`:C(H,this,uf).call(this,r,i+t);break;case`Enter`:this.reset();break;default:return}e.preventDefault()}function gf(e){return{down:t=>C(H,this,ff).call(this,t,e),move:e=>C(H,this,pf).call(this,e),up:e=>C(H,this,mf).call(this,e)}}rf.styles=[Qd],r([c({attribute:!1})],rf.prototype,`target`,void 0),r([c()],rf.prototype,`label`,void 0),r([c({type:Number,attribute:`min-size`})],rf.prototype,`minSize`,void 0),r([c({type:Number})],rf.prototype,`step`,void 0),r([c({type:Number,attribute:`large-step`})],rf.prototype,`largeStep`,void 0),r([f()],rf.prototype,`dragging`,void 0),customElements.get(`craft-resize-grips`)||customElements.define(`craft-resize-grips`,rf);var _f=a`
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
`,vf=0,yf=0;function bf(){yf++===0&&document.body.classList.add(`no-scroll`)}function xf(){yf>0&&--yf===0&&document.body.classList.remove(`no-scroll`)}var Sf=new WeakMap,Cf=new WeakMap,wf=new WeakMap,Tf=new WeakMap,Ef=new WeakMap,Df=new WeakMap,Of=new WeakSet,kf=new WeakMap,Af=new WeakMap,jf=new WeakMap,Mf=new WeakMap,Nf=new WeakMap,Pf=new WeakMap,Ff=new WeakMap,If=class extends u{constructor(...e){super(...e),b(this,Of),this.open=!1,this.label=``,this.nonModal=!1,this.fullscreen=!1,this.closeOnOutsideClick=!1,this.noClose=!1,this.noHeader=!1,w(this,Sf,null),w(this,Cf,null),this.resizable=!1,this.resizedSize={width:null,height:null},this.titleId=`craft-dialog-title-${++vf}`,w(this,wf,!1),w(this,Tf,null),w(this,Ef,!1),w(this,Df,null),w(this,kf,e=>{e.stopPropagation(),this.resizedSize=e.detail}),w(this,Af,e=>{e.preventDefault(),this.requestClose()}),w(this,jf,()=>{this.open=!1}),w(this,Mf,e=>{!this.open||e.key!==`Escape`||e.defaultPrevented||e.isComposing||(e.preventDefault(),this.requestClose())}),w(this,Nf,e=>{e.target?.closest?.(`[data-dialog="close"]`)&&this.requestClose()}),w(this,Pf,e=>{this.closeOnOutsideClick&&e.target===this.dialogElement&&this.requestClose()}),w(this,Ff,()=>{this.closeOnOutsideClick&&this.requestClose()})}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,x(Nf,this)),this.addEventListener(`keydown`,x(Mf,this)),S(Df,this,new MutationObserver(()=>this.requestUpdate())),x(Df,this).observe(this,{childList:!0})}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,x(Nf,this)),this.removeEventListener(`keydown`,x(Mf,this)),x(Df,this)?.disconnect(),S(Df,this,null),x(Tf,this)?.call(this),S(Tf,this,null),S(Sf,this,null),S(Cf,this,null),C(Of,this,Vf).call(this),Ye()}get dialogElement(){return this.shadowRoot?.querySelector(`dialog`)??null}get hasFooter(){return this.querySelector(`:scope > [slot="footer"]`)!==null}render(){return p`
      ${this.nonModal&&this.open?p`<div
            class="backdrop"
            part="backdrop"
            @click=${x(Ff,this)}
          ></div>`:i}
      <dialog
        part="dialog"
        aria-labelledby=${this.label===``?i:this.titleId}
        @cancel=${x(Af,this)}
        @close=${x(jf,this)}
        @click=${x(Pf,this)}
      >
        ${this.resizable&&!this.fullscreen?p`<div class="frame">
              ${C(Of,this,Lf).call(this)}
              <craft-resize-grips
                @craft-resize=${x(kf,this)}
              ></craft-resize-grips>
            </div>`:C(Of,this,Lf).call(this)}
      </dialog>
    `}get hasHeader(){return!this.noHeader&&(this.label!==``||!this.noClose)}renderHiddenTitle(){return this.label===``?i:p`<h2 part="title" id=${this.titleId} hidden>${this.label}</h2>`}renderHeader(){return p`
      <header class="header" part="header">
        ${this.label===``?p`<div></div>`:p`<h2 class="title" part="title" id=${this.titleId}>
              ${this.label}
            </h2>`}
        ${this.noClose?i:p`<craft-button
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
    `}renderBody(){return p`<div class="body" part="body"><slot></slot></div>`}renderFooter(){return p`
      <footer class="footer" part="footer" ?hidden=${!this.hasFooter}>
        <slot name="footer"> </slot>
      </footer>
    `}updated(e){super.updated(e);let t=this.shadowRoot?.querySelector(`craft-resize-grips`),n=this.shadowRoot?.querySelector(`.surface`);t&&n&&t.target!==n&&(t.target=n),this.open!==x(wf,this)&&(S(wf,this,this.open),this.open?C(Of,this,Rf).call(this):C(Of,this,zf).call(this),C(Of,this,Hf).call(this,this.open))}requestClose(){this.dispatchEvent(new CustomEvent(`craft-before-hide`,{bubbles:!0,composed:!0,cancelable:!0}))&&(this.open=!1)}};function Lf(){let{width:e,height:t}=this.resizedSize,n=this.resizable&&!this.fullscreen;return p`<div
      class="surface"
      part="surface"
      style=${ai({"inline-size":n&&e!==null?`${e}px`:void 0,"block-size":n&&t!==null?`${t}px`:void 0})}
    >
      ${this.hasHeader?this.renderHeader():this.renderHiddenTitle()}
      ${this.renderBody()} ${this.renderFooter()}
    </div>`}function Rf(){let e=this.dialogElement,t=document.activeElement;S(Sf,this,t instanceof HTMLElement?t:null),S(Cf,this,Fe(x(Sf,this))),e&&!e.open&&(this.nonModal?e.show():e.showModal()),this.nonModal&&(x(Tf,this)?.call(this),S(Tf,this,Zd(this))),x(Ef,this)||(S(Ef,this,!0),bf())}function zf(){let e=this.dialogElement,t=x(Sf,this),n=x(Cf,this);S(Sf,this,null),S(Cf,this,null);let r=!1;e?.open&&(r=this.matches(`:focus-within`),e.close()),x(Tf,this)?.call(this),S(Tf,this,null),C(Of,this,Vf).call(this),Ye();let i=document.activeElement,a=!ke(i)||this.contains(i);(!this.nonModal||r||a)&&C(Of,this,Bf).call(this,t,n,a)}function Bf(e,t,n){let r=this.returnFocus?.(e);if(ke(r)){r.focus();return}n&&t?.()?.focus()}function Vf(){x(Ef,this)&&(S(Ef,this,!1),xf())}function Hf(e){C(Of,this,Uf).call(this,e?`craft-show`:`craft-hide`),this.updateComplete.then(()=>{this.open===e&&C(Of,this,Uf).call(this,e?`craft-after-show`:`craft-after-hide`)})}function Uf(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}If.styles=[A,_f],r([c({type:Boolean,reflect:!0})],If.prototype,`open`,void 0),r([c()],If.prototype,`label`,void 0),r([c({type:Boolean,attribute:`non-modal`,reflect:!0})],If.prototype,`nonModal`,void 0),r([c({type:Boolean,reflect:!0})],If.prototype,`fullscreen`,void 0),r([c({type:Boolean,attribute:`close-on-outside-click`})],If.prototype,`closeOnOutsideClick`,void 0),r([c({type:Boolean,attribute:`no-close`,reflect:!0})],If.prototype,`noClose`,void 0),r([c({type:Boolean,attribute:`no-header`,reflect:!0})],If.prototype,`noHeader`,void 0),r([c({attribute:!1})],If.prototype,`returnFocus`,void 0),r([c({type:Boolean,reflect:!0})],If.prototype,`resizable`,void 0),r([f()],If.prototype,`resizedSize`,void 0),customElements.get(`craft-dialog`)||customElements.define(`craft-dialog`,If);var Wf=new WeakMap,Gf=new WeakSet,Kf=class{constructor(e,t){this.host=e,this.source=t,b(this,Gf),w(this,Wf,null),e.addController(this)}hostConnected(){C(Gf,this,qf).call(this)}hostDisconnected(){C(Gf,this,Jf).call(this)}resubscribe(){C(Gf,this,Jf).call(this),C(Gf,this,qf).call(this)}get state(){return this.source()?.state??null}};function qf(){S(Wf,this,this.source()?.on(`change`,()=>this.host.requestUpdate())??null)}function Jf(){x(Wf,this)?.call(this),S(Wf,this,null)}var Yf=a`
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
`,Xf=new WeakMap,Zf=new WeakMap,Qf=new WeakMap,$f=new WeakMap,ep=new WeakMap,tp=new WeakSet,np=new WeakMap,rp=new WeakMap,ip=class extends If{constructor(){super(),b(this,tp),this.controller=null,this.showTitle=!1,this.selectLabel=``,this.cancelLabel=``,this.busy=!1,this.loading=!1,this.canSubmit=!1,this.narrow=!1,this.hasIndex=!1,w(this,Xf,new Kf(this,()=>this.controller)),w(this,Zf,null),w(this,Qf,void 0),w(this,$f,void 0),w(this,ep,()=>{C(tp,this,op).call(this),clearTimeout(x($f,this)),S($f,this,setTimeout(()=>C(tp,this,ap).call(this),200))}),w(this,np,()=>{this.submit()}),w(this,rp,()=>{this.busy||this.requestClose()}),this.resizable=!0}connectedCallback(){super.connectedCallback(),window.addEventListener(`resize`,x(ep,this)),typeof ResizeObserver<`u`&&(S(Zf,this,new ResizeObserver(([e])=>{e&&(this.narrow=e.contentRect.width<550)})),this.hasUpdated&&C(tp,this,sp).call(this))}disconnectedCallback(){super.disconnectedCallback(),x(Zf,this)?.disconnect(),window.removeEventListener(`resize`,x(ep,this)),clearTimeout(x($f,this)),C(tp,this,op).call(this)}updated(e){super.updated(e),!this.open||!this.hasIndex?C(tp,this,op).call(this):(e.has(`hasIndex`)||e.has(`open`))&&!this.hasAttribute(`size-locked`)&&C(tp,this,ap).call(this)}willUpdate(e){e.has(`controller`)&&x(Xf,this).resubscribe();let t=x(Xf,this).state;t&&(this.open=t.open,this.busy=t.busy,this.loading=t.loading,this.canSubmit=t.canSubmit,this.label=t.title,this.showTitle=t.showTitle,this.selectLabel=t.selectLabel,this.hasIndex=t.indexBody!==null),super.willUpdate(e)}firstUpdated(e){super.firstUpdated(e),C(tp,this,sp).call(this)}renderHeader(){if(this.label===``)return p``;let e=p`<h1
      class=${this.showTitle?`title`:`title title--hidden`}
      part="title"
      id=${this.titleId}
    >
      ${this.label}
    </h1>`;return this.showTitle?p`<header class="header" part="header">${e}</header>`:e}renderBody(){return p`
      <div class="body" part="body" ?inert=${this.busy}>
        ${this.loading&&!this.hasIndex?p`<slot name="loading"
              ><div class="loading"><craft-spinner></craft-spinner></div
            ></slot>`:i}
        <slot></slot>
      </div>
    `}renderFooter(){return p`
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
            @click=${x(rp,this)}
          >
            ${this.cancelLabel||n(`Cancel`)}
          </craft-button>
          <craft-button
            part="select"
            type="button"
            variant="primary"
            ?disabled=${!this.canSubmit}
            ?loading=${this.busy}
            @click=${x(np,this)}
          >
            ${this.selectLabel||n(`Select`)}
          </craft-button>
        </div>
      </footer>
    `}submit(){this.canSubmit&&(this.dispatchEvent(new CustomEvent(`craft-select`,{bubbles:!0,composed:!0})),this.controller?.submit())}requestClose(){if(this.dispatchEvent(new CustomEvent(`craft-cancel`,{bubbles:!0,composed:!0})),this.controller){this.controller.cancel();return}super.requestClose()}};function ap(){x(Qf,this)!==void 0&&cancelAnimationFrame(x(Qf,this)),S(Qf,this,requestAnimationFrame(()=>{S(Qf,this,requestAnimationFrame(()=>{S(Qf,this,void 0);let e=this.shadowRoot?.querySelector(`.surface`);if(!this.open||!this.hasIndex||!e)return;let t=e.getBoundingClientRect().height;t>0&&(this.style.setProperty(`--_locked-block-size`,`${t}px`),this.setAttribute(`size-locked`,``))}))}))}function op(){x(Qf,this)!==void 0&&(cancelAnimationFrame(x(Qf,this)),S(Qf,this,void 0)),this.removeAttribute(`size-locked`),this.style.removeProperty(`--_locked-block-size`)}function sp(){let e=this.shadowRoot?.querySelector(`.surface`);e&&x(Zf,this)?.observe(e)}ip.styles=[...If.styles,Yf],r([c({attribute:!1})],ip.prototype,`controller`,void 0),r([c({type:Boolean,attribute:`show-title`,reflect:!0})],ip.prototype,`showTitle`,void 0),r([c({attribute:`select-label`})],ip.prototype,`selectLabel`,void 0),r([c({attribute:`cancel-label`})],ip.prototype,`cancelLabel`,void 0),r([c({type:Boolean,reflect:!0})],ip.prototype,`busy`,void 0),r([c({type:Boolean,reflect:!0})],ip.prototype,`loading`,void 0),r([c({type:Boolean,attribute:`can-submit`,reflect:!0})],ip.prototype,`canSubmit`,void 0),r([c({type:Boolean,reflect:!0})],ip.prototype,`narrow`,void 0),r([f()],ip.prototype,`hasIndex`,void 0),customElements.get(`craft-element-selector-modal`)||customElements.define(`craft-element-selector-modal`,ip);var cp=[`chevron-down`,`chevron-up`,`chevron-right`,`chevron-left`],lp=class extends u{constructor(...e){super(...e),this.open=!1,this.label=``,this.appearance=`line`,this.size=`medium`,this.state=null,this.cookieName=null,this.__defaultInvoker=null,this.__boundInvoker=null,this.__externalTrigger=null,this.__externalExpanded=!1,this.__announcedOpened=null,this.toggle=()=>{this.open=!this.open},this.__onSlotChange=()=>{this.__externalTrigger||this.__setupSlottedMode()},this.__toggleExternal=()=>{this.state=this.__externalExpanded?`collapsed`:`expanded`}}show(){this.open=!0}hide(){this.open=!1}get __invoker(){return this.__slotted(`invoker`)}get __content(){return this.__slotted(`content`)}__slotted(e){return Array.from(this.children).find(t=>t instanceof HTMLElement&&t.slot===e)}get __externalTarget(){let e=this.__externalTrigger?.getAttribute(`aria-controls`);return e?document.getElementById(e):null}render(){return p`
      <slot name="invoker" @slotchange=${this.__onSlotChange}></slot>
      <slot name="content" @slotchange=${this.__onSlotChange}></slot>
      <slot></slot>
    `}connectedCallback(){this.__externalTrigger=this.querySelector(`:scope > button[type="button"][aria-controls]:not([slot])`),super.connectedCallback(),this.__externalTrigger?this.__setupExternalMode():this.__setupSlottedMode()}disconnectedCallback(){super.disconnectedCallback(),this.__boundInvoker?.removeEventListener(`click`,this.toggle),this.__boundInvoker=null,this.__externalTrigger&&(this.__handleExternalOpen(),this.__externalTrigger.removeEventListener(`click`,this.__toggleExternal))}updated(e){super.updated(e),e.has(`label`)&&this.__defaultInvoker&&(this.__defaultInvoker.textContent=this.label),e.has(`size`)&&this.__defaultInvoker&&this.__defaultInvoker.setAttribute(`size`,this.size),e.has(`open`)&&!this.__externalTrigger&&(this.__syncSlottedState(),this.__syncInvokerChevron(),this.__announceOpenedChange()),e.has(`state`)&&this.__externalTrigger&&(this.state===`expanded`?this.__handleExternalOpen():this.state===`collapsed`&&this.__handleExternalClose())}__announceOpenedChange(){let e=!!this.open,t=this.__announcedOpened;this.__announcedOpened=e,t!==null&&t!==e&&this.dispatchEvent(new CustomEvent(e?`craft-show`:`craft-hide`))}__setupSlottedMode(){this.__ensureDefaultInvoker();let e=this.__invoker??null,t=this.__content;t&&(t.id||=Qr(`collapsible-content`)),e!==this.__boundInvoker&&(this.__boundInvoker?.removeEventListener(`click`,this.toggle),e?.addEventListener(`click`,this.toggle),this.__boundInvoker=e),e&&t&&e.setAttribute(`aria-controls`,t.id),this.__syncSlottedState(),this.__syncInvokerChevron()}__syncSlottedState(){this.__invoker?.setAttribute(`aria-expanded`,String(!!this.open)),this.__content?.style.setProperty(`display`,this.open?``:`none`)}__ensureDefaultInvoker(){if(this.__invoker)return;let e=document.createElement(`craft-button`);e.slot=`invoker`,e.setAttribute(`type`,`button`),e.setAttribute(`variant`,`plain`),e.setAttribute(`flush`,``),e.setAttribute(`icon`,`chevron-right`),e.setAttribute(`icon-position`,`suffix`),e.textContent=this.label,this.__defaultInvoker=e,this.prepend(e)}__syncInvokerChevron(){let e=this.__invoker;if(!(e instanceof R)||!e.icon||!cp.includes(e.icon))return;let t=getComputedStyle(this).direction===`rtl`;e.iconPosition=`suffix`,e.icon=this.open?`chevron-down`:t?`chevron-left`:`chevron-right`}__setupExternalMode(){let e=this.__externalTrigger;if(!this.__externalTarget){console.error(`No target with id ${e.getAttribute(`aria-controls`)} found for disclosure.`,e);return}e.addEventListener(`click`,this.__toggleExternal),this.state!==`expanded`&&this.state!==`collapsed`&&(this.state=`expanded`)}__handleExternalOpen(){this.__externalExpanded=!0,this.__externalTrigger?.setAttribute(`aria-expanded`,`true`),this.dispatchEvent(new CustomEvent(`craft-show`));let e=this.__externalTarget;e&&(e.dataset.state=`expanded`),this.__persistExternalState(`expanded`)}__handleExternalClose(){this.__externalExpanded=!1,this.__externalTrigger?.setAttribute(`aria-expanded`,`false`),this.dispatchEvent(new CustomEvent(`craft-hide`));let e=this.__externalTarget;e&&(e.dataset.state=`collapsed`),this.__persistExternalState(`collapsed`)}__persistExternalState(e){this.cookieName&&window.Craft?.setCookie(this.cookieName,e)}};lp.styles=a`
    :host {
      display: block;
    }

    ::slotted([slot='content']) {
      overflow: hidden;
      margin-block-start: var(--c-spacing-lg);
    }

    :host(:not([appearance='plain'])) ::slotted([slot='content']) {
      padding-inline-start: var(--c-spacing-lg);
      border-inline-start: 1px solid var(--c-color-neutral-border-quiet);
    }
  `,r([c({type:Boolean,reflect:!0})],lp.prototype,`open`,void 0),r([c()],lp.prototype,`label`,void 0),r([c({reflect:!0})],lp.prototype,`appearance`,void 0),r([c({reflect:!0})],lp.prototype,`size`,void 0),r([c({reflect:!0})],lp.prototype,`state`,void 0),r([c({attribute:`cookie-name`})],lp.prototype,`cookieName`,void 0),customElements.get(`craft-disclosure`)||customElements.define(`craft-disclosure`,lp);var up=class extends u{constructor(...e){super(...e),this.label=``,this.icon=``,this.appearance=`plain`}render(){return p`
      <div class="cp-empty">
        <div class="cp-empty__content">
          <slot name="graphic">
            ${this.icon?p`
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
    `}};up.styles=[a`
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
    `],r([c()],up.prototype,`label`,void 0),r([c()],up.prototype,`icon`,void 0),r([c({reflect:!0})],up.prototype,`appearance`,void 0),customElements.get(`craft-empty`)||customElements.define(`craft-empty`,up);var dp=a`
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
`,fp=class extends mi(u){constructor(...e){super(...e),this.required=!1,this.translatable=!1,this.translationDescription=n(`This field is translatable.`),this.fieldset=!1,this.hasErrors=!1,this.instructionsPosition=`before`,this.instructionsSrOnly=!1,this.__hasSlot=new li(this,`heading-prefix`,`label-extra`,`actions`,`heading-suffix`),this.__lightDomObserver=new MutationObserver(()=>this.__onLightDomChanged()),this.__enhancedInput=null}connectedCallback(){super.connectedCallback(),this.__enhancedInput=this._control??null,this.__lightDomObserver.observe(this,{childList:!0}),this.__syncHasErrors(),this.__syncHasMaxlength(),this.__syncControlWidth(),this.updateComplete.then(()=>{this._labelNode&&this.addToAriaLabelledBy(this._labelNode),this.__wireDescribedBy()})}__syncHasMaxlength(){let e=this.querySelector(`:scope > [slot="input"]`);this.toggleAttribute(`has-maxlength`,!!(e?.hasAttribute(`maxlength`)&&!e.matches(`textarea, craft-textarea`)))}__syncControlWidth(){if(this.width!==void 0)return;let e=this.querySelector(`:scope > [slot="input"]`)?.getAttribute(`width`);(e===`full`||e===`auto`)&&(this.width=e)}disconnectedCallback(){super.disconnectedCallback(),this.__lightDomObserver.disconnect()}updated(e){super.updated(e),e.has(`fieldset`)&&this.__syncFieldsetSemantics(),(e.has(`label`)||e.has(`required`)||e.has(`translatable`)||e.has(`translationDescription`))&&this.__syncLabelDecorations()}get control(){return this._control??void 0}get _resolvedOrientation(){return this.orientation?this.orientation:(this.closest(`[dir]`)?.getAttribute(`dir`)??document.documentElement.getAttribute(`dir`))?.toLowerCase()===`rtl`?`rtl`:`ltr`}_enhanceLightDomA11y(){super._enhanceLightDomA11y(),this.__wireDescribedBy(),this.__syncFieldsetSemantics()}addToAriaLabelledBy(e,t={}){let n=this.__formControlTarget();if(n){n.addToAriaLabelledBy(e,{...t,idPrefix:`field-${t.idPrefix??`label`}`});return}if(this.fieldset||!this.__hasNativeLabelTarget()){this.__addGroupAriaReference(`aria-labelledby`,e,`label`);return}super.addToAriaLabelledBy(e,t)}addToAriaDescribedBy(e,t={}){let n=this.__formControlTarget();if(n){n.addToAriaDescribedBy(e,{...t,idPrefix:`field-${t.idPrefix??`description`}`});return}if(this.fieldset||!this.__hasNativeLabelTarget()){this.__addGroupAriaReference(`aria-describedby`,e,t.idPrefix??`description`);return}super.addToAriaDescribedBy(e,t)}removeFromAriaLabelledBy(e){let t=this.__formControlTarget();if(t){t.removeFromAriaLabelledBy(e);return}if(this.fieldset||!this.__hasNativeLabelTarget()){this.__removeGroupAriaReference(`aria-labelledby`,e);return}super.removeFromAriaLabelledBy(e)}removeFromAriaDescribedBy(e){let t=this.__formControlTarget();if(t){t.removeFromAriaDescribedBy(e);return}if(this.fieldset||!this.__hasNativeLabelTarget()){this.__removeGroupAriaReference(`aria-describedby`,e);return}super.removeFromAriaDescribedBy(e)}render(){return p`
      <div
        class="${N({"form-field":!0,[`form-field--${this.status}`]:!!this.status})}"
      >
        ${this._statusBadgeTemplate()}
        <div class="form-field__group-one">${this._groupOneTemplate()}</div>
        <div class="form-field__group-two">${this._groupTwoTemplate()}</div>
      </div>
    `}_groupOneTemplate(){return p`
      ${this._labelTemplate()}
      ${this.instructionsPosition===`before`?this._helpTextTemplate():i}
    `}_groupTwoTemplate(){return p`
      ${this._inputGroupTemplate()}
      ${this.instructionsPosition===`after`?this._helpTextTemplate():i}
      ${this._feedbackTemplate()}
    `}_labelTemplate(){let e=this.__hasLabel,t=this.__hasSlot.test(`label-extra`),r=this.__hasSlot.test(`actions`),a=t||r||this.readOnly&&!this.labelSrOnly||this.__hasSlot.test(`label-badge`)||this.__hasSlot.test(`heading-prefix`)||this.__hasSlot.test(`heading-suffix`);if(!e&&!a&&!this.readOnly)return p``;let o=i;return e&&(o=this.labelSrOnly&&a?p`<span class="cp-visually-hidden"
              ><slot name="label"></slot
            ></span>`:p`<slot name="label"></slot>`),p`
      <div
        class=${N({"form-field__label":!0,"cp-visually-hidden":this.labelSrOnly&&!a})}
      >
        <slot name="heading-prefix"></slot>
        ${o}
        ${this.readOnly?p`<span
              class=${N({"read-only-badge":!0,"cp-visually-hidden":this.labelSrOnly&&a})}
              >${n(`Read Only`)}</span
            >`:i}
        <slot name="label-badge"></slot>
        ${t||r?p`<div class="flex-grow"></div>`:i}
        <slot name="label-extra"></slot>
        ${r?p`
              <div
                class="field-actions"
                part="actions"
                role="group"
                aria-label=${n(`Field actions`)}
              >
                <slot name="actions"></slot>
              </div>
            `:p`<slot name="actions"></slot>`}
        <slot name="heading-suffix"></slot>
      </div>
    `}_helpTextTemplate(){return this.__hasHelpText?this.instructionsSrOnly?p`<div class="cp-visually-hidden">${super._helpTextTemplate()}</div>`:super._helpTextTemplate():p``}_inputGroupTemplate(){return p`
      <div class=${N({"input-group":!0,input:!0,[this._resolvedOrientation]:!0,errors:this.hasErrors,disabled:this.disabled})}>
        ${this._inputGroupBeforeTemplate()}
        <div class="input-group__container">
          ${this._inputGroupPrefixTemplate()} ${this._inputGroupInputTemplate()}
          ${this._inputGroupSuffixTemplate()}
        </div>
        ${this._inputGroupAfterTemplate()}
      </div>
    `}_statusBadgeTemplate(){return this.status?p`
      <div
        class="form-field__status-indicator"
        title=${Ve(this.statusLabel)}
        aria-hidden="true"
      >
        <craft-visually-hidden>${this.statusLabel}</craft-visually-hidden>
      </div>
    `:i}get __hasLabel(){return this.label.trim()!==``}get __hasHelpText(){return this.helpText.trim()!==``}__lightChild(e){return Array.from(this.children).find(t=>t.slot===e)}__onLightDomChanged(){this.__enhanceSwappedInput(),this.__wireDescribedBy(),this.__syncFieldsetSemantics(),this.__syncHasErrors(),this.__syncLabelDecorations(),this.__syncHasMaxlength(),this.__syncControlWidth(),this.requestUpdate()}__wireDescribedBy(){let e=Array.from(this.children).filter(e=>e.slot===`after`&&`addToAriaDescribedBy`in e);for(let t of[`help-text`,`feedback`]){let n=this.__lightChild(t);if(n){this.addToAriaDescribedBy(n,{idPrefix:t});for(let r of e)r.addToAriaDescribedBy(n,{idPrefix:`field-${t}`})}}}__enhanceSwappedInput(){let e=this._control;if(!(!e||e===this.__enhancedInput)){if(this.__enhancedInput=e,e.classList.add(`form-control`),e.id||=this._inputId,this.__formControlTarget()){this._labelNode&&this.addToAriaLabelledBy(this._labelNode);return}this._reflectAriaReferences()}}__formControlTarget(){let e=this._control;return e&&`addToAriaLabelledBy`in e&&`addToAriaDescribedBy`in e?e:void 0}__hasNativeLabelTarget(){return!!this._control?.matches(`button, input, meter, output, progress, select, textarea`)}__addGroupAriaReference(e,t,n){t.id||=`${n}-${this._inputId}`;let r=new Set((this.getAttribute(e)??``).split(/\s+/).filter(Boolean));r.add(t.id),this.setAttribute(e,[...r].join(` `))}__removeGroupAriaReference(e,t){let n=(this.getAttribute(e)??``).split(/\s+/).filter(e=>e&&e!==t.id);n.length?this.setAttribute(e,n.join(` `)):this.removeAttribute(e)}__syncHasErrors(){let e=this.__lightChild(`feedback`);e&&(this.hasErrors=!!(e.childElementCount||e.textContent?.trim()))}__syncFieldsetSemantics(){let e=this._labelNode,t=this.__formControlTarget();this.fieldset||!t&&!this.__hasNativeLabelTarget()?(this.setAttribute(`role`,`group`),e&&(e.id||=`label-${this._inputId}`,this.setAttribute(`aria-labelledby`,e.id),e.removeAttribute(`for`))):(this.getAttribute(`role`)===`group`&&this.removeAttribute(`role`),this.removeAttribute(`aria-labelledby`),e&&t?e.removeAttribute(`for`):e&&this._control&&e.setAttribute(`for`,this._control.id||this._inputId))}__syncLabelDecorations(){let e=this._labelNode;if(e){for(let t of e.querySelectorAll(`[data-craft-field-decoration]`))t.remove();if(this.label){if(this.required){let t=document.createElement(`craft-visually-hidden`);t.textContent=n(`Required`),t.setAttribute(`data-craft-field-decoration`,``);let r=document.createElement(`craft-icon`);r.setAttribute(`name`,`asterisk`),r.setAttribute(`data-craft-field-decoration`,``),r.setAttribute(`data-color`,`danger`),r.setAttribute(`aria-hidden`,`true`),e.append(t,r)}if(this.translatable){let t=document.createElement(`craft-tooltip`);t.setAttribute(`placement`,`bottom`),t.textContent=this.translationDescription,t.setAttribute(`data-craft-field-decoration`,``);let n=document.createElement(`craft-button`);n.type=`button`,n.slot=`invoker`,n.variant=`plain`,n.size=`small`,n.icon=`language`,n.className=`t9n-indicator prevent-autofocus`,n.setAttribute(`aria-label`,this.translationDescription),n.addEventListener(`click`,e=>e.preventDefault()),t.append(n),e.append(t)}}}}};fp.styles=[re,Xr,dp],r([c({type:Boolean,reflect:!0})],fp.prototype,`required`,void 0),r([c({type:Boolean,reflect:!0})],fp.prototype,`translatable`,void 0),r([c({attribute:`translation-description`})],fp.prototype,`translationDescription`,void 0),r([c({type:Boolean,reflect:!0})],fp.prototype,`fieldset`,void 0),r([c({reflect:!0})],fp.prototype,`status`,void 0),r([c({attribute:`status-label`})],fp.prototype,`statusLabel`,void 0),r([c({reflect:!0})],fp.prototype,`orientation`,void 0),r([c({type:Boolean,reflect:!0,attribute:`has-errors`})],fp.prototype,`hasErrors`,void 0),r([c({attribute:`instructions-position`})],fp.prototype,`instructionsPosition`,void 0),r([c({type:Boolean,reflect:!0,attribute:`instructions-sr-only`})],fp.prototype,`instructionsSrOnly`,void 0),r([c({type:String,reflect:!0})],fp.prototype,`width`,void 0),customElements.get(`craft-field`)||customElements.define(`craft-field`,fp);var pp=class extends u{constructor(...e){super(...e),this.separated=!1,this.resizeObserver=new ResizeObserver(()=>this.scheduleColumnUpdate()),this.childObserver=new MutationObserver(()=>{this.observeChildren(),this.scheduleColumnUpdate()}),this.columnUpdateFrame=null}connectedCallback(){super.connectedCallback(),this.toggleColumnTracking()}disconnectedCallback(){super.disconnectedCallback(),this.stopColumnTracking()}updated(e){e.has(`separated`)&&this.toggleColumnTracking()}toggleColumnTracking(){this.stopColumnTracking(),!(!this.separated||!this.isConnected)&&(this.childObserver.observe(this,{childList:!0}),this.observeChildren(),this.scheduleColumnUpdate())}stopColumnTracking(){this.childObserver.disconnect(),this.resizeObserver.disconnect(),this.columnUpdateFrame!==null&&(cancelAnimationFrame(this.columnUpdateFrame),this.columnUpdateFrame=null);for(let e of this.children)e.removeAttribute(`data-follows-column`)}observeChildren(){this.resizeObserver.disconnect(),this.resizeObserver.observe(this);for(let e of this.children)this.resizeObserver.observe(e)}scheduleColumnUpdate(){this.columnUpdateFrame===null&&(this.columnUpdateFrame=requestAnimationFrame(()=>{this.columnUpdateFrame=null,this.updateColumns()}))}updateColumns(){let e=null;for(let t of this.children){if(!(t instanceof HTMLElement)||t.localName===`style`||t.localName===`slot`)continue;let n=t.getClientRects().length>0;t.toggleAttribute(`data-follows-column`,n&&e!==null&&e.offsetTop===t.offsetTop),n&&(e=t)}}render(){return p`
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
    `}createRenderRoot(){return this}};r([c({type:Boolean,reflect:!0})],pp.prototype,`separated`,void 0),customElements.get(`craft-field-group`)||customElements.define(`craft-field-group`,pp);var mp=new WeakMap,hp=new WeakMap,gp=new WeakMap,_p=new WeakSet,vp=class extends u{constructor(...e){super(...e),b(this,_p),this.label=n(`More Info`),this.icon=`circle-info`,this.disabled=!1,w(this,mp,new AbortController),w(this,hp,null),w(this,gp,`info-icon-${Math.random().toString(36).slice(2,8)}`)}connectedCallback(){super.connectedCallback(),x(mp,this).signal.aborted&&S(mp,this,new AbortController);let{signal:e}=x(mp,this);this.addEventListener(`craft-show`,()=>{bp._&&bp._!==this&&bp._.renderRoot.querySelector(`craft-tooltip`)?.hide(),bp._=this,C(_p,this,yp).call(this)},{signal:e}),this.addEventListener(`craft-after-hide`,()=>{bp._===this&&(bp._=null),x(hp,this)?.abort(),S(hp,this,null)},{signal:e})}disconnectedCallback(){bp._===this&&(bp._=null),x(hp,this)?.abort(),S(hp,this,null),x(mp,this).abort(),super.disconnectedCallback()}render(){return p`
      <div class="cp-info-icon">
        <craft-button
          type="button"
          icon
          size="zero"
          variant="plain"
          id="${x(gp,this)}"
        >
          <craft-icon name="${this.icon}" label="${this.label}"></craft-icon>
        </craft-button>

        <craft-tooltip trigger="click" for="${x(gp,this)}"
          ><slot></slot
        ></craft-tooltip>
      </div>
    `}};function yp(){x(hp,this)?.abort(),S(hp,this,new AbortController),document.addEventListener(`pointerdown`,e=>{e.composedPath().includes(this)||this.renderRoot.querySelector(`craft-tooltip`)?.hide()},{capture:!0,signal:x(hp,this).signal})}vp.styles=a`
    :host {
      display: inline-flex;
    }
  `;var bp={_:null};r([c()],vp.prototype,`label`,void 0),r([c()],vp.prototype,`icon`,void 0),r([c({type:Boolean,reflect:!0})],vp.prototype,`disabled`,void 0),r([h(`craft-tooltip`)],vp.prototype,`tooltip`,void 0),customElements.get(`craft-info-icon`)||customElements.define(`craft-info-icon`,vp);var xp=a`
  ${Xr}

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
    ${Jr}
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
    ${qr}
  }
`,Sp=/^[0-9a-f]{6}(?:[0-9a-f]{2})?$/i,Cp=/^[0-9a-f]{3,4}$/i,wp=/^color\(srgb\s+([\d.e+-]+)\s+([\d.e+-]+)\s+([\d.e+-]+)(?:\s*\/\s*([\d.e+-]+))?\)$/,Tp={fromAttribute(e){if(!e)return[];try{let t=JSON.parse(e);return Array.isArray(t)?t.map(e=>String(e)):[]}catch{return[]}}};function Ep(e){return String(e??``).trim().replace(/^#/,``)}function Dp(e){let t=Ep(e);return Cp.test(t)?t.split(``).map(e=>e+e).join(``):Sp.test(t)?t:null}function Op(e){if(e.startsWith(`#`))return e.substring(1);let t=e.match(wp);if(!t)return e;let n=e=>Math.round(Math.min(Math.max(parseFloat(e),0),1)*255).toString(16).padStart(2,`0`),[,r=``,i=``,a=``,o]=t,s=n(r)+n(i)+n(a);return o!==void 0&&parseFloat(o)<1&&(s+=n(o)),s}var kp=new WeakMap,Ap=class e extends F{static get styles(){return[...super.styles,xp]}constructor(){super(),this.presets=[],this.alpha=!1,this._pickerListId=`${this._inputId}-presets`,this.type=`text`,w(this,kp,()=>{let e=this._control;e&&Ep(e.value)!==e.value&&(this.value=e.value)})}static doesBrowserSupportColorInputs(){if(e._browserSupportsColorInputs===null){let t=document.createElement(`input`);t.setAttribute(`type`,`color`),e._browserSupportsColorInputs=t.type===`color`}return e._browserSupportsColorInputs}static doesBrowserSupportAlphaColorInputs(){return e._browserSupportsAlphaColorInputs===null&&(e._browserSupportsAlphaColorInputs=`alpha`in document.createElement(`input`)),e._browserSupportsAlphaColorInputs}get slots(){return{...super.slots,input:()=>{let e=document.createElement(`input`),t=this.getAttribute(`value`);return e.type=`text`,e.inputMode=`text`,e.spellcheck=!1,e.setAttribute(`autocorrect`,`off`),e.setAttribute(`autocapitalize`,`off`),t&&e.setAttribute(`value`,Ep(t)),e}}}get value(){return super.value}set value(e){super.value=Ep(e)}connectedCallback(){super.connectedCallback(),x(kp,this).call(this),this._control?.addEventListener(`input`,x(kp,this))}disconnectedCallback(){super.disconnectedCallback(),this._control?.removeEventListener(`input`,x(kp,this))}get _expandedHexValue(){return Dp(this.value)}_pickerHex(t){return this.alpha&&e.doesBrowserSupportAlphaColorInputs()?t:t.substring(0,6)}get _pickerValue(){return this._expandedHexValue?`#${this._pickerHex(this._expandedHexValue)}`:`#ffffff`}get _validPresets(){return this.presets.map(e=>Dp(e)).filter(e=>e!==null).map(e=>`#${this._pickerHex(e)}`)}_handlePickerInput(e){this.value=Op(e.target.value)}_handlePickerChange(e){this._handlePickerInput(e),this._control&&ns(this._control)}_pickerTemplate(){if(!e.doesBrowserSupportColorInputs())return i;let t=this._validPresets;return p`
      <input
        class="input-color__picker"
        type="color"
        aria-label="${n(`Color picker`)}"
        ?alpha="${this.alpha}"
        .value="${this._pickerValue}"
        ?disabled="${this.disabled}"
        list=${t.length?this._pickerListId:i}
        @input="${this._handlePickerInput}"
        @change="${this._handlePickerChange}"
      />
      ${t.length?p`
            <datalist id="${this._pickerListId}">
              ${t.map(e=>p`<option value="${e}"></option>`)}
            </datalist>
          `:i}
    `}_swatchTemplate(){return p`
      <label class="input-color__swatch">
        <span class="input-color__preview" style="${this._expandedHexValue?`background-color: #${this._expandedHexValue}`:``}"></span>
        ${this._pickerTemplate()}
      </label>
    `}_inputGroupTemplate(){return p`
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
    `}};Ap._browserSupportsColorInputs=null,Ap._browserSupportsAlphaColorInputs=null,r([c({converter:Tp})],Ap.prototype,`presets`,void 0),r([c({type:Boolean,reflect:!0})],Ap.prototype,`alpha`,void 0),customElements.get(`craft-input-color`)||customElements.define(`craft-input-color`,Ap);var jp=class extends F{constructor(...e){super(...e),this.inlineSuffix=!0}_renderSuffix(){return p`<craft-copy-button
      slot="suffix"
      tooltip-label="${n(`Copy`)}"
    ></craft-copy-button>`}get slots(){return{...super.slots,suffix:()=>this._renderSuffix()}}connectedCallback(){super.connectedCallback(),this.readOnly=!0}_copyButton(){return this.querySelector(`craft-copy-button`)}_syncCopyButton(){let e=this._copyButton();e&&(e.value=this.copyValue??this.value)}updated(e){super.updated(e),this.readOnly=!0,this._syncCopyButton()}};r([c({type:String,attribute:`copy-value`})],jp.prototype,`copyValue`,void 0),customElements.get(`craft-input-copy`)||customElements.define(`craft-input-copy`,jp);var Mp=class extends F{constructor(){super(),this.type=`date`}};customElements.get(`craft-input-date`)||customElements.define(`craft-input-date`,Mp);var Np={fromAttribute:e=>e!==`false`,toAttribute:e=>String(e)},Pp=e=>({fromAttribute:t=>t?JSON.parse(t):e(),toAttribute:e=>JSON.stringify(e)}),Fp=new WeakSet,Ip=class extends F{constructor(){super(),b(this,Fp),this.minuteIncrement=30,this.disabledTimeRanges=[],this.forceRoundTime=!1,this.type=`time`}connectedCallback(){super.connectedCallback(),this.addEventListener(`change`,C(Fp,this,Lp))}disconnectedCallback(){this.removeEventListener(`change`,C(Fp,this,Lp)),super.disconnectedCallback()}willUpdate(e){super.willUpdate(e),e.has(`minuteIncrement`)&&(this.step=this.minuteIncrement*60)}updated(e){super.updated(e),C(Fp,this,Rp).call(this)}};function Lp(e){if(e.target===this||!(e.target instanceof HTMLInputElement))return;let t=e.target;this.forceRoundTime&&C(Fp,this,zp).call(this,t.value)!==t.value&&(this.value=C(Fp,this,zp).call(this,t.value),t.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0}))),C(Fp,this,Rp).call(this)}function Rp(){let e=this._control;if(!e)return;let t=C(Fp,this,Bp).call(this,e.value),n=t!==null&&this.disabledTimeRanges.some(([e,n])=>{let r=C(Fp,this,Bp).call(this,e),i=C(Fp,this,Bp).call(this,n);return r!==null&&i!==null&&t>=r&&t<i});e.setCustomValidity(n?`This time is unavailable.`:``)}function zp(e){let t=C(Fp,this,Bp).call(this,e);if(t===null)return e;let n=Math.max(1,this.minuteIncrement)*60,r=Math.min(86399,Math.round(t/n)*n),i=Math.floor(r/3600),a=Math.floor(r%3600/60);return`${String(i).padStart(2,`0`)}:${String(a).padStart(2,`0`)}`}function Bp(e){let t=/^(\d{1,2}):(\d{2})(?::(\d{2}))?$/.exec(e);return t?Number(t[1])*3600+Number(t[2])*60+Number(t[3]??0):null}r([c({type:Number,attribute:`minute-increment`})],Ip.prototype,`minuteIncrement`,void 0),r([c({attribute:`disabled-time-ranges`,converter:Pp(()=>[])})],Ip.prototype,`disabledTimeRanges`,void 0),r([c({type:Boolean,attribute:`force-round-time`})],Ip.prototype,`forceRoundTime`,void 0),customElements.get(`craft-input-time`)||customElements.define(`craft-input-time`,Ip);var Vp={date:()=>n(`Date`),time:()=>n(`Time`),timezone:()=>n(`Time Zone`)},Hp=new WeakSet,Up=new WeakMap,Wp=new WeakMap,Gp=new WeakMap,Kp=new WeakMap,qp=new WeakMap,U=class extends u{constructor(...e){super(...e),b(this,Hp),this.dateValue=``,this.timeValue=``,this.showDate=!0,this.showTime=!0,this.showTimezone=!1,this.minuteIncrement=30,this.disabledTimeRanges=[],this.forceRoundTime=!1,this.disabled=!1,this.readonly=!1,this.required=!1,this.clearable=!1,w(this,Up,async()=>{this.showDate&&(this.dateValue=``),this.showTime&&(this.timeValue=``),this.showTimezone&&(this.timezone=``),await this.updateComplete,this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.querySelector(`[data-date-time-part] input`)?.focus()}),w(this,Wp,void 0),w(this,Gp,void 0),w(this,Kp,e=>{let t=e.type===`focusin`?e.target:e.relatedTarget;this.toggleAttribute(`input-focused`,t instanceof Element&&this.contains(t)&&t.closest(`[data-date-time-part]`)!==null)}),w(this,qp,e=>{let t=e.target instanceof Element?e.target.closest(`[data-date-time-part]`):null;if(!(t instanceof F))return;let n=t.value;switch(t.dataset.dateTimePart){case`date`:this.dateValue=n;break;case`time`:this.timeValue=n;break;case`timezone`:this.timezone=n}})}render(){return p`<div class="inputs" part="inputs">
        <slot name="inputs"></slot>
      </div>
      <slot @slotchange=${()=>C(Hp,this,Xp).call(this)}></slot>
      ${this.clearable&&!this.disabled&&!this.readonly?p`<craft-button
            part="clear"
            class=${C(Hp,this,Jp).call(this)?``:`invisible`}
            type="button"
            icon="xmark-large"
            aria-label=${n(`Clear`)}
            variant="plain"
            size="small"
            @click=${x(Up,this)}
          ></craft-button>`:null}`}connectedCallback(){super.connectedCallback(),this.addEventListener(`input`,x(qp,this)),this.addEventListener(`focusin`,x(Kp,this)),this.addEventListener(`focusout`,x(Kp,this)),x(Wp,this)??S(Wp,this,new ResizeObserver(()=>C(Hp,this,Xp).call(this))),x(Wp,this).observe(this)}disconnectedCallback(){this.removeEventListener(`input`,x(qp,this)),this.removeEventListener(`focusin`,x(Kp,this)),this.removeEventListener(`focusout`,x(Kp,this)),x(Wp,this)?.disconnect(),x(Gp,this)!==void 0&&(cancelAnimationFrame(x(Gp,this)),S(Gp,this,void 0)),super.disconnectedCallback()}updated(e){super.updated(e),C(Hp,this,Zp).call(this),C(Hp,this,Qp).call(this),C(Hp,this,$p).call(this),C(Hp,this,im).call(this,`locale`,this.locale,!0),C(Hp,this,im).call(this,`timezone`,this.timezone,!this.showTimezone),this.toggleAttribute(`single`,[this.showDate,this.showTime,this.showTimezone].filter(Boolean).length===1),C(Hp,this,Xp).call(this)}};function Jp(){return!!(this.showDate&&this.dateValue||this.showTime&&this.timeValue||this.showTimezone&&this.timezone)}function Yp(){let e=this.shadowRoot?.querySelector(`.inputs`);if(!e)return;let t=this.getBoundingClientRect(),n=e.getBoundingClientRect(),r=getComputedStyle(this),i=r.direction===`rtl`?n.left-t.left-parseFloat(r.borderLeftWidth):t.right-parseFloat(r.borderRightWidth)-n.right;e.style.setProperty(`--_beside-size`,`${Math.max(0,i)}px`)}function Xp(){x(Gp,this)===void 0&&S(Gp,this,requestAnimationFrame(()=>{S(Gp,this,void 0);let e=[...this.querySelectorAll(`:scope > [data-date-time-part]`)],t=e.map(e=>e.getBoundingClientRect().top);this.toggleAttribute(`stacked`,t.some(e=>e>(t[0]??e)+1)),e.forEach((e,n)=>{let r=t[n+1];e.toggleAttribute(`data-row-end`,r===void 0||r>t[n]+1)}),C(Hp,this,Yp).call(this)}))}function Zp(){let e=C(Hp,this,em).call(this,`craft-input-date`,`date`,this.showDate);e instanceof Mp&&(C(Hp,this,rm).call(this,e,`date`,this.dateValue,this.required),e.min=this.min,e.max=this.max,C(Hp,this,tm).call(this,e))}function Qp(){let e=C(Hp,this,em).call(this,`craft-input-time`,`time`,this.showTime);e instanceof Ip&&(C(Hp,this,rm).call(this,e,`time`,this.timeValue,this.required),e.min=this.minTime,e.max=this.maxTime,e.minuteIncrement=this.minuteIncrement,e.disabledTimeRanges=this.disabledTimeRanges,e.forceRoundTime=this.forceRoundTime,C(Hp,this,tm).call(this,e))}function $p(){let e=C(Hp,this,em).call(this,`craft-input`,`timezone`,this.showTimezone);e&&(C(Hp,this,rm).call(this,e,`timezone`,this.timezone??``,!1),C(Hp,this,tm).call(this,e))}function em(e,t,n){let r=[...this.children].find(t=>t.tagName.toLowerCase()===e&&t instanceof F);if(!n)return r?.remove(),null;let i=r??document.createElement(e);return i.dataset.dateTimePart=t,i.slot=`inputs`,i}function tm(e){e.parentElement!==this&&this.insertBefore(e,C(Hp,this,nm).call(this))}function nm(){return[...this.children].find(e=>!(e instanceof HTMLElement)||e.dataset.dateTimePart===void 0&&e.dataset.dateTimeMetadata===void 0)??null}function rm(e,t,n,r){e.name=this.name?`${this.name}[${t}]`:``,e.disabled=this.disabled,e.readOnly=this.readonly,e.required=r,e.value!==n&&(e.value=n),this.describedBy?e.setAttribute(`aria-describedby`,this.describedBy):e.removeAttribute(`aria-describedby`),e.label=Vp[t]?.()??t,e.labelSrOnly=!0}function im(e,t,n){let r=this.name?`${this.name}[${e}]`:void 0,i=[...this.children].find(t=>t instanceof HTMLInputElement&&t.type===`hidden`&&t.dataset.dateTimeMetadata===e);if(!r||!n){i?.remove();return}let a=i??document.createElement(`input`);a.type=`hidden`,a.dataset.dateTimeMetadata=e,a.name=r,a.value=t??``,i||this.append(a)}U.styles=a`
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
  `,r([c()],U.prototype,`name`,void 0),r([c({attribute:`date-value`})],U.prototype,`dateValue`,void 0),r([c({attribute:`time-value`})],U.prototype,`timeValue`,void 0),r([c()],U.prototype,`locale`,void 0),r([c()],U.prototype,`timezone`,void 0),r([c({attribute:`show-date`,converter:Np})],U.prototype,`showDate`,void 0),r([c({attribute:`show-time`,converter:Np})],U.prototype,`showTime`,void 0),r([c({type:Boolean,attribute:`show-timezone`})],U.prototype,`showTimezone`,void 0),r([c()],U.prototype,`min`,void 0),r([c()],U.prototype,`max`,void 0),r([c({attribute:`min-time`})],U.prototype,`minTime`,void 0),r([c({attribute:`max-time`})],U.prototype,`maxTime`,void 0),r([c({type:Number,attribute:`minute-increment`})],U.prototype,`minuteIncrement`,void 0),r([c({attribute:`disabled-time-ranges`,converter:Pp(()=>[])})],U.prototype,`disabledTimeRanges`,void 0),r([c({type:Boolean,attribute:`force-round-time`})],U.prototype,`forceRoundTime`,void 0),r([c({reflect:!0})],U.prototype,`width`,void 0),r([c({type:Boolean})],U.prototype,`disabled`,void 0),r([c({type:Boolean})],U.prototype,`readonly`,void 0),r([c({type:Boolean})],U.prototype,`required`,void 0),r([c({type:Boolean})],U.prototype,`clearable`,void 0),r([c({attribute:`described-by`})],U.prototype,`describedBy`,void 0),customElements.get(`craft-input-date-time`)||customElements.define(`craft-input-date-time`,U);var am=class extends F{constructor(...e){super(...e),this.autocorrect=!1,this.autocapitalize=`off`}static get styles(){return[...super.styles,a`
        .input-group__input {
          font-family: var(--c-font-mono);
          font-size: 0.9em;
        }
      `]}updated(e){super.updated(e),this._control?.setAttribute(`autocorrect`,this.autocorrect?`on`:`off`),this._control?.setAttribute(`autocapitalize`,this.autocapitalize)}};r([c({reflect:!0,converter:{fromAttribute:e=>e!==`off`,toAttribute:e=>e?`on`:`off`}})],am.prototype,`autocorrect`,void 0),r([c({reflect:!0,type:String})],am.prototype,`autocapitalize`,void 0),customElements.get(`craft-input-handle`)||customElements.define(`craft-input-handle`,am);var om=e(t(((e,t)=>{(function(n,r){if(typeof e==`object`&&typeof t==`object`)t.exports=r();else if(typeof define==`function`&&define.amd)define([],r);else{var i=r();for(var a in i)(typeof e==`object`?e:n)[a]=i[a]}})(Object(typeof self<`u`?self:e),function(){return(function(){var e=[,(function(){typeof Object.getPrototypeOf!=`function`&&(Object.getPrototypeOf=typeof`test`.__proto__==`object`?function(e){return e.__proto__}:function(e){return e.constructor.prototype})}),(function(){Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,t){if(this==null)throw TypeError(`"this" is null or not defined`);let n=Object(this),r=n.length>>>0;if(r===0)return!1;let i=t|0,a=Math.max(i>=0?i:r-Math.abs(i),0);for(;a<r;){if(n[a]===e)return!0;a++}return!1}})}),(function(){let e=Function.bind.call(Function.call,Array.prototype.reduce),t=Function.bind.call(Function.call,Object.prototype.propertyIsEnumerable),n=Function.bind.call(Function.call,Array.prototype.concat),r=Object.keys;Object.entries||(Object.entries=function(i){return e(r(i),(e,r)=>n(e,typeof r==`string`&&t(i,r)?[[r,i[r]]]:[]),[])})}),(function(){String.prototype.includes||(String.prototype.includes=function(e,t){return typeof t!=`number`&&(t=0),t+e.length>this.length?!1:this.indexOf(e,t)!==-1})}),(function(){if(FormData.Inputmask===void 0){class e extends FormData{constructor(e,t){super(e,t);let n=this.entries(),r;for(;(r=n.next()).done===!1;){let t=r.value[0],n=r.value[1],i=e[t];i&&i.inputmask!==void 0&&!(n instanceof File)&&this.set(t,i.value)}return this}}e.Inputmask=!0,FormData=e}}),(function(e,t,n){var r=o(n(7)),i=n(20),a=n(22);function o(e){return e&&e.__esModule?e:{default:e}}r.default.extendDefinitions({A:{validator:`[A-Za-zА-яЁёÀ-ÿµ]`,casing:`upper`},"&":{validator:`[0-9A-Za-zА-яЁёÀ-ÿµ]`,casing:`upper`},"#":{validator:`[0-9A-Fa-f]`,casing:`upper`}});let s=/25[0-5]|2[0-4][0-9]|[01][0-9][0-9]/;function c(e,t,n,r,i){if(n-1>-1&&t.buffer[n-1]!==`.`?(e=t.buffer[n-1]+e,e=n-2>-1&&t.buffer[n-2]!==`.`?t.buffer[n-2]+e:`0`+e):e=`00`+e,i.greedy&&parseInt(e)>255&&s.test(`00`+e.charAt(2))){let r=[...t.buffer.slice(0,n),`.`,e.charAt(2)];if(r.join(``).match(/\./g).length<4)return{refreshFromBuffer:!0,buffer:r,caret:n+2}}return s.test(e)}r.default.extendAliases({cssunit:{regex:`[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)`},url:{regex:`(https?|ftp)://.*`,autoUnmask:!1,keepStatic:!1,tabThrough:!0},ip:{mask:`i{1,3}.j{1,3}.k{1,3}.l{1,3}`,definitions:{i:{validator:c},j:{validator:c},k:{validator:c},l:{validator:c}},onUnMask:function(e,t,n){return e},inputmode:`decimal`,substitutes:{",":`.`}},email:{mask:function({separator:e,quantifier:t}){let n=`*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]`,r=n;if(e)for(let i=0;i<t;i++)r+=`[${e}${n}]`;return r},greedy:!1,casing:`lower`,separator:null,quantifier:5,skipOptionalPartCharacter:``,onBeforePaste:function(e,t){return e=e.toLowerCase(),e.replace(`mailto:`,``)},definitions:{"*":{validator:"[0-9１-９A-Za-zА-яЁёÀ-ÿµ!#$%&'*+/=?^_`{|}~-]"},"-":{validator:`[0-9A-Za-z-]`}},onUnMask:function(e,t,n){return e},inputmode:`email`},mac:{mask:`##:##:##:##:##:##`},vin:{mask:`V{13}9{4}`,definitions:{V:{validator:`[A-HJ-NPR-Za-hj-npr-z\\d]`,casing:`upper`}},clearIncomplete:!0,autoUnmask:!0},ssn:{mask:`999-99-9999`,postValidation:function(e,t,n,r,o,s,c){let l=a.getMaskTemplate.call(this,!0,i.getLastValidPosition.call(this),!0,!0);return/^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(l.join(``))}}})}),(function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=m(n(8)),i=m(n(9)),a=m(n(10)),o=n(15),s=m(n(11)),c=n(16),l=n(23),u=n(24),d=n(20),f=n(21),p=n(22);function m(e){return e&&e.__esModule?e:{default:e}}let h=s.default.document,g=`_inputmask_opts`;function _(e,t,n){if(!(this instanceof _))return new _(e,t,n);this.dependencyLib=a.default,this.el=void 0,this.events={},this.maskset=void 0,n!==!0&&(Object.prototype.toString.call(e)===`[object Object]`?t=e:(t||={},e&&(t.alias=e)),this.opts=a.default.extend(!0,{},this.defaults,t),this.noMasksCache=t&&t.definitions!==void 0,this.userOptions=t||{},v(this.opts.alias,t,this.opts)),this.refreshValue=!1,this.undoValue=void 0,this.$el=void 0,this.skipInputEvent=!1,this.validationEvent=!1,this.ignorable=!1,this.maxLength,this.mouseEnter=!1,this.clicked=0,this.originalPlaceholder=void 0,this.isComposing=!1,this.lastInputEvent=null,this.hasAlternator=!1}_.prototype={dataAttribute:`data-inputmask`,defaults:r.default,definitions:i.default,aliases:{},masksCache:{},i18n:{},get isRTL(){return this.opts.isRTL||this.opts.numericInput},mask:function(e){let t=this;return typeof e==`string`&&(e=h.getElementById(e)||h.querySelectorAll(e)),e=e.nodeName?[e]:Array.isArray(e)?e:[].slice.call(e),e.forEach(function(e,n){let r=a.default.extend(!0,{},t.opts);if(y(e,r,a.default.extend(!0,{},t.userOptions),t.dataAttribute)){let n=(0,u.generateMaskSet)(r,t.noMasksCache);n!==void 0&&(e.inputmask!==void 0&&(e.inputmask.opts.autoUnmask=!0,e.inputmask.remove()),e.inputmask=new _(void 0,void 0,!0),e.inputmask.opts=r,e.inputmask.noMasksCache=t.noMasksCache,e.inputmask.userOptions=a.default.extend(!0,{},t.userOptions),e.inputmask.el=e,e.inputmask.$el=(0,a.default)(e),e.inputmask.maskset=n,a.default.data(e,g,t.userOptions),l.mask.call(e.inputmask))}}),e&&e[0]&&e[0].inputmask||this},option:function(e,t){if(typeof e==`string`)return this.opts[e];if(typeof e==`object`)return a.default.extend(this.userOptions,e),this.el&&t!==!0&&this.mask(this.el),this},unmaskedvalue:function(e){if(this.maskset=this.maskset||(0,u.generateMaskSet)(this.opts,this.noMasksCache),this.el===void 0||e!==void 0){let t=(typeof this.opts.onBeforeMask==`function`&&this.opts.onBeforeMask.call(this,e,this.opts)||e).split(``);c.checkVal.call(this,void 0,!1,!1,t),typeof this.opts.onBeforeWrite==`function`&&this.opts.onBeforeWrite.call(this,void 0,d.getBuffer.call(this),0,this.opts)}return c.unmaskedvalue.call(this,this.el)},remove:function(){if(this.el){a.default.data(this.el,g,null);let e=this.opts.autoUnmask?(0,c.unmaskedvalue)(this.el):this._valueGet(this.opts.autoUnmask);e===d.getBufferTemplate.call(this).join(``)?this._valueSet(``):this._valueSet(e,this.opts.autoUnmask),o.EventRuler.off(this.el);let t;Object.getOwnPropertyDescriptor&&Object.getPrototypeOf?(t=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.el),`value`),t&&this.__valueGet&&Object.defineProperty(this.el,"value",{get:this.__valueGet,set:this.__valueSet,configurable:!0})):h.__lookupGetter__&&this.el.__lookupGetter__(`value`)&&this.__valueGet&&(this.el.__defineGetter__(`value`,this.__valueGet),this.el.__defineSetter__(`value`,this.__valueSet)),this.el.inputmask=void 0}return this.el},getemptymask:function(){return this.maskset=this.maskset||(0,u.generateMaskSet)(this.opts,this.noMasksCache),(this.isRTL?d.getBufferTemplate.call(this).reverse():d.getBufferTemplate.call(this)).join(``)},hasMaskedValue:function(){return!this.opts.autoUnmask},isComplete:function(){return this.maskset=this.maskset||(0,u.generateMaskSet)(this.opts,this.noMasksCache),f.isComplete.call(this,d.getBuffer.call(this))},getmetadata:function(){if(this.maskset=this.maskset||(0,u.generateMaskSet)(this.opts,this.noMasksCache),Array.isArray(this.maskset.metadata)){let e=p.getMaskTemplate.call(this,!0,0,!1).join(``);return this.maskset.metadata.forEach(function(t){return t.mask===e?(e=t,!1):!0}),e}return this.maskset.metadata},isValid:function(e){if(this.maskset=this.maskset||(0,u.generateMaskSet)(this.opts,this.noMasksCache),e){let t=(typeof this.opts.onBeforeMask==`function`&&this.opts.onBeforeMask.call(this,e,this.opts)||e).split(``);c.checkVal.call(this,void 0,!0,!1,t)}let t=c.clearOptionalTail.call(this,[]),n=f.isComplete.call(this,t),r=e===(this.isRTL?t.reverse().join(``):t.join(``));return n&&(e===void 0||r)},format:function(e,t){this.maskset=this.maskset||(0,u.generateMaskSet)(this.opts,this.noMasksCache);let n=(typeof this.opts.onBeforeMask==`function`&&this.opts.onBeforeMask.call(this,e,this.opts)||e).split(``);c.checkVal.call(this,void 0,!0,!1,n);let r=this.isRTL?d.getBuffer.call(this).slice().reverse().join(``):d.getBuffer.call(this).join(``);return t?{value:r,metadata:this.getmetadata()}:r},setValue:function(e){this.el&&(0,a.default)(this.el).trigger(`setvalue`,[e])},analyseMask:u.analyseMask};function v(e,t,n){let r=_.prototype.aliases[e];return r?(r.alias&&v(r.alias,void 0,n),a.default.extend(!0,n,r),a.default.extend(!0,n,t),!0):(n.mask===null&&(n.mask=e),!1)}function y(e,t,n,r){function i(t,i){let a=r===``?t:r+`-`+t;i=i===void 0?e.getAttribute(a):i,i!==null&&(typeof i==`string`&&(t.startsWith(`on`)?i=s.default[i]:i===`false`?i=!1:i===`true`?i=!0:t===`mask`&&(i=i.replace(/\\\\/g,`\\`))),n[t]=i)}if(t.importDataAttributes===!0){let a=e.getAttribute(r),o,s,c,l;if(a&&a!==``&&(a=a.replace(/'/g,`"`),s=JSON.parse(`{`+a+`}`)),s){for(l in c=void 0,s)if(l.toLowerCase()===`alias`){c=s[l];break}}for(o in i(`alias`,c),n.alias&&v(n.alias,n,t),t){if(s){for(l in c=void 0,s)if(l.toLowerCase()===o.toLowerCase()){c=s[l];break}}i(o,c)}}return a.default.extend(!0,t,n),(e.dir===`rtl`||t.rightAlign)&&(e.style.textAlign=`right`),(e.dir===`rtl`||t.numericInput)&&(e.dir=`ltr`,e.removeAttribute(`dir`),t.isRTL=!0),Object.keys(n).length}_.extendDefaults=function(e){a.default.extend(!0,_.prototype.defaults,e)},_.extendDefinitions=function(e){a.default.extend(!0,_.prototype.definitions,e)},_.extendAliases=function(e){a.default.extend(!0,_.prototype.aliases,e)},_.format=function(e,t,n){return _(t).format(e,n)},_.unmask=function(e,t){return _(t).unmaskedvalue(e)},_.isValid=function(e,t){return _(t).isValid(e)},_.remove=function(e){typeof e==`string`&&(e=h.getElementById(e)||h.querySelectorAll(e)),e=e.nodeName?[e]:e;for(let t=0;t<e.length;t++)e[t].inputmask&&e[t].inputmask.remove()},_.setValue=function(e,t){typeof e==`string`&&(e=h.getElementById(e)||h.querySelectorAll(e)),e=e.nodeName?[e]:e,e.forEach(function(e){e.inputmask?e.inputmask.setValue(t):(0,a.default)(e).trigger(`setvalue`,[t])})},_.dependencyLib=a.default,s.default.Inputmask=_,t.default=_}),(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default={_maxTestPos:500,placeholder:`_`,optionalmarker:[`[`,`]`],quantifiermarker:[`{`,`}`],groupmarker:[`(`,`)`],alternatormarker:`|`,escapeChar:`\\`,mask:null,regex:null,oncomplete:()=>{},onincomplete:()=>{},oncleared:()=>{},repeat:0,greedy:!1,autoUnmask:!1,removeMaskOnSubmit:!1,clearMaskOnLostFocus:!0,insertMode:!0,insertModeVisual:!0,clearIncomplete:!1,alias:null,onKeyDown:()=>{},onBeforeMask:null,onBeforePaste:function(e,t){return typeof t.onBeforeMask==`function`?t.onBeforeMask.call(this,e,t):e},onBeforeWrite:null,onUnMask:null,outputMask:null,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:()=>{},skipOptionalPartCharacter:` `,numericInput:!1,rightAlign:!1,undoOnEscape:!0,radixPoint:``,_radixDance:!1,groupSeparator:``,keepStatic:null,positionCaretOnTab:!0,tabThrough:!1,supportsInputType:[`text`,`tel`,`url`,`password`,`search`],isComplete:null,preValidation:null,postValidation:null,staticDefinitionSymbol:void 0,jitMasking:!1,nullable:!0,inputEventOnly:!1,noValuePatching:!1,positionCaretOnClick:`lvp`,casing:null,inputmode:`text`,importDataAttributes:!0,shiftPositions:!0,usePrototypeDefinitions:!0,validationEventTimeOut:3e3,substitutes:{}}}),(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default={9:{validator:`\\p{N}`,definitionSymbol:`*`},a:{validator:`\\p{L}`,definitionSymbol:`*`},"*":{validator:`[\\p{L}\\p{N}]`}}}),(function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(n(11)),i=s(n(12)),a=n(13),o=s(n(14));function s(e){return e&&e.__esModule?e:{default:e}}let c=r.default.document;function l(e){if(e instanceof l)return e;if(!(this instanceof l))return new l(e);e!=null&&e!==r.default&&(this[0]=e.nodeName?e:e[0]!==void 0&&e[0].nodeName?e[0]:c.querySelector(e),this[0]!==void 0&&this[0]!==null&&(0,i.default)(this[0],`events`,(0,i.default)(this[0],`events`)||{}))}l.prototype={on:a.on,off:a.off,trigger:a.trigger},l.extend=o.default,l.data=i.default,l.Event=a.Event,t.default=l}),(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=typeof window<`u`&&window.document&&window.document.createElement?window:{}}),(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;function n(e,t,n){if(n===void 0)return e.__data?e.__data[t]:null;e.__data=e.__data||{},e.__data[t]=n}}),(function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.Event=void 0,t.off=f,t.on=d,t.trigger=p;var r=s(n(11)),i=s(n(12)),a=s(n(14)),o=s(n(10));function s(e){return e&&e.__esModule?e:{default:e}}let c=r.default.document;function l(e){return e instanceof Element&&(0,i.default)(e,`events`)}let u=t.Event=void 0;typeof r.default.CustomEvent==`function`?t.Event=u=r.default.CustomEvent:r.default.Event&&c&&c.createEvent?(t.Event=u=function(e,t){t||={bubbles:!1,cancelable:!1,composed:!0,detail:void 0};let n=c.createEvent(`CustomEvent`);return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n},u.prototype=r.default.Event.prototype):typeof Event<`u`&&(t.Event=u=Event);function d(e,t){if(!this[0]||!l(this[0]))return this;let n=this[0],r=(0,i.default)(n,`events`),a=(e,i)=>{n.addEventListener?n.addEventListener(e,t,!1):n.attachEvent&&n.attachEvent(`on${e}`,t),r[e]=r[e]||{},r[e][i]=r[e][i]||[],r[e][i].push(t)};return e.split(` `).forEach(e=>{let[t,n=`global`]=e.split(`.`);a(t,n)}),this}function f(e,t){let n,r;function a(e,t,i){if(e in n)if(r.removeEventListener?r.removeEventListener(e,i,!1):r.detachEvent&&r.detachEvent(`on${e}`,i),t===`global`)for(let t in n[e])n[e][t].splice(n[e][t].indexOf(i),1);else n[e][t].splice(n[e][t].indexOf(i),1)}function o(e,r){let i=[],a,o;if(e.length>0){let s=r?[r]:Object.keys(n[e]);for(let c=0;c<s.length;c++)if(r=s[c],t===void 0)for(a=0,o=n[e][r]?.length||0;a<o;a++)i.push({ev:e,namespace:r,handler:n[e][r][a]});else i.push({ev:e,namespace:r,handler:t})}else if(r.length>0){for(let e in n)if(n[e][r])if(t===void 0)for(a=0,o=n[e][r].length;a<o;a++)i.push({ev:e,namespace:r,handler:n[e][r][a]});else i.push({ev:e,namespace:r,handler:t})}return i}return l(this[0])&&(n=(0,i.default)(this[0],`events`),r=this[0],e||=Object.keys(n).join(` `),e!==``&&e.split(` `).forEach(e=>{let[t,n]=e.split(`.`);o(t,n).forEach(({ev:e,handler:t,namespace:n})=>{a(e,n,t)})})),this}function p(e){if(l(this[0])){let t=(0,i.default)(this[0],`events`),n=this[0],r=typeof e==`string`?e.split(` `):[e.type];for(let i=0;i<r.length;i++){let s=r[i].split(`.`),l=s[0],u=s[1]||`global`;if(c!==void 0){let t,r={bubbles:!0,cancelable:!0,composed:!0,detail:arguments[1]};if(c.createEvent){try{switch(l){case`input`:r.inputType=`insertText`,t=new InputEvent(l,r);break;default:t=new CustomEvent(l,r)}}catch{t=c.createEvent(`CustomEvent`),t.initCustomEvent(l,r.bubbles,r.cancelable,r.detail)}e.type&&(0,a.default)(t,e),n.dispatchEvent(t)}else t=c.createEventObject(),t.eventType=l,t.detail=arguments[1],e.type&&(0,a.default)(t,e),n.fireEvent(`on`+t.eventType,t)}else if(t[l]!==void 0){arguments[0]=arguments[0].type?arguments[0]:o.default.Event(arguments[0]),arguments[0].detail=arguments.slice(1);let e=t[l];(u===`global`?Object.values(e).flat():e[u]).forEach(e=>e.apply(n,arguments))}}}return this}}),(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;function n(){let e,t,r,i,a,o,s=arguments[0]||{},c=1,l=arguments.length,u=!1;for(typeof s==`boolean`&&(u=s,s=arguments[c]||{},c++),typeof s!=`object`&&typeof s!=`function`&&(s={});c<l;c++)if((e=arguments[c])!=null)for(t in e)r=s[t],i=e[t],s!==i&&(u&&i&&(Object.prototype.toString.call(i)===`[object Object]`||(a=Array.isArray(i)))?(a?(a=!1,o=r&&Array.isArray(r)?r:[]):o=r&&Object.prototype.toString.call(r)===`[object Object]`?r:{},s[t]=n(u,o,i)):i!==void 0&&(s[t]=i));return s}}),(function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.EventRuler=void 0;var r=n(16),i=s(n(7)),a=n(19),o=n(20);function s(e){return e&&e.__esModule?e:{default:e}}t.EventRuler={on:function(e,t,n){let s=e.inputmask.dependencyLib,c=function(t){t.originalEvent&&(t=t.originalEvent||t,arguments[0]=t);let c=this,l=c.inputmask,u=l?l.opts:void 0,d;if(l===void 0&&this.nodeName!==`FORM`){let e=s.data(c,`_inputmask_opts`);s(c).off(),e&&new i.default(e).mask(c)}else if(![`submit`,`reset`,`setvalue`].includes(t.type)&&this.nodeName!==`FORM`&&(c.disabled||c.readOnly&&!(t.type===`keydown`&&t.ctrlKey&&t.key===a.keys.c||u.tabThrough===!1&&t.key===a.keys.Tab)))t.preventDefault();else{switch(t.type){case`input`:if(l.skipInputEvent===!0)return l.skipInputEvent=!1,t.preventDefault();l.lastInputEvent={time:Date.now(),data:t.data};break;case`keydown`:if(l.lastInputEvent&&Date.now()-l.lastInputEvent.time<10&&l.lastInputEvent.data===t.key)return!1;break;case`click`:case`focus`:if(l.validationEvent)return l.validationEvent=!1,e.blur(),(0,r.HandleNativePlaceholder)(e,(l.isRTL?o.getBufferTemplate.call(l).slice().reverse():o.getBufferTemplate.call(l)).join(``)),setTimeout(function(){e.focus()},u.validationEventTimeOut),!1;d=arguments,setTimeout(function(){e.inputmask&&n.apply(c,d)},0);return}let i=n.apply(c,arguments);return i===!1&&(t.preventDefault(),t.stopPropagation()),i}};t=`${t}.inputmask`,[`submit.inputmask`,`reset.inputmask`].includes(t)?(c=c.bind(e),e.form!==null&&s(e.form).on(t,c)):s(e).on(t,c)},off:function(e,t){if(e.inputmask){let n=e.inputmask.dependencyLib;n(e).off(t||`.inputmask`)}}}}),(function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.HandleNativePlaceholder=m,t.applyInputValue=d,t.checkVal=p,t.clearOptionalTail=f,t.unmaskedvalue=h,t.writeBuffer=g;var r=n(17),i=n(18),a=u(n(7)),o=n(19),s=n(20),c=n(21),l=n(22);function u(e){return e&&e.__esModule?e:{default:e}}function d(e,t,n,r){let i=e?e.inputmask:this,a=i.opts;e.inputmask.refreshValue=!1,r!==!0&&typeof a.onBeforeMask==`function`&&(t=a.onBeforeMask.call(i,t,a)||t),t=(t||``).toString().split(``),p(e,!0,!1,t,n),i.undoValue=i._valueGet(!0),(a.clearMaskOnLostFocus||a.clearIncomplete)&&e.inputmask._valueGet()===s.getBufferTemplate.call(i).join(``)&&s.getLastValidPosition.call(i)===-1&&e.inputmask._valueSet(``)}function f(e){let t=this;e.length=0;let n=l.getMaskTemplate.call(t,!0,0,!0,void 0,!0),r;for(;(r=n.shift())!==void 0;)e.push(r);return e}function p(e,t,n,r,a){let o=e?e.inputmask:this,u=o.maskset,d=o.opts,f=o.dependencyLib,p=r.slice(),m=``,h=-1,_,v=d.skipOptionalPartCharacter;d.skipOptionalPartCharacter=``;function y(e,t){let n=l.getMaskTemplate.call(o,!0,0).slice(e,s.seekNext.call(o,e,!1,!1)).join(``).replace(/'/g,``),r=n.indexOf(t);for(;r>0&&n[r-1]===` `;)r--;let i=r===0&&!s.isMask.call(o,e)&&(l.getTest.call(o,e).match.nativeDef===t.charAt(0)||l.getTest.call(o,e).match.static===!0&&l.getTest.call(o,e).match.nativeDef===`'`+t.charAt(0)||l.getTest.call(o,e).match.nativeDef===` `&&(l.getTest.call(o,e+1).match.nativeDef===t.charAt(0)||l.getTest.call(o,e+1).match.static===!0&&l.getTest.call(o,e+1).match.nativeDef===`'`+t.charAt(0)));if(!i&&r>0&&!s.isMask.call(o,e,!1,!0)){let t=s.seekNext.call(o,e);o.caretPos.begin<t&&(o.caretPos={begin:t})}return i}s.resetMaskSet.call(o,!1),o.clicked=0,h=d.radixPoint?s.determineNewCaretPosition.call(o,{begin:0,end:0},!1,d.__financeInput===!1?`radixFocus`:void 0).begin:0,u.p=h,o.caretPos={begin:h};let b=[],x=o.caretPos;if(p.forEach(function(e,t){if(e!==void 0){let r=new f.Event(`_checkval`);r.key=e,m+=e;let a=s.getLastValidPosition.call(o,void 0,!0);y(h,m)?_=l.getTest.call(o,t).match.static===!0&&i.EventHandlers.keypressEvent.call(o,r,!0,!1,n,a+1):(_=i.EventHandlers.keypressEvent.call(o,r,!0,!1,n,o.caretPos.begin),_&&(h=o.caretPos.begin+1,m=``)),_?(_.pos!==void 0&&u.validPositions[_.pos]&&u.validPositions[_.pos].match.static===!0&&u.validPositions[_.pos].alternation===void 0&&(b.push(_.pos),o.isRTL||(_.forwardPosition=_.pos+1)),g.call(o,void 0,s.getBuffer.call(o),_.forwardPosition,r,!1),o.caretPos={begin:_.forwardPosition,end:_.forwardPosition},x=o.caretPos):u.validPositions[t]===void 0&&p[t]===l.getPlaceholder.call(o,t)&&s.isMask.call(o,t,!0)?o.caretPos.begin++:o.caretPos=x}}),b.length>0){let e,t,r=s.seekNext.call(o,-1,void 0,!1);if(!c.isComplete.call(o,s.getBuffer.call(o))&&b.length<=r||c.isComplete.call(o,s.getBuffer.call(o))&&b.length>0&&b.length!==r&&b[0]===0){let a=r;for(;(e=b.shift())!==void 0;)if(e<a){let r=new f.Event(`_checkval`);if(t=u.validPositions[e],t.generatedInput=!0,r.key=t.input,_=i.EventHandlers.keypressEvent.call(o,r,!0,!1,n,a),_&&_.pos!==void 0&&_.pos!==e&&u.validPositions[_.pos]&&u.validPositions[_.pos].match.static===!0)b.push(_.pos);else if(!_)break;a++}}else for(;e=b.pop();)t=u.validPositions[e],t&&u.validPositions[e+1]===void 0&&delete u.validPositions[e]}t&&g.call(o,e,s.getBuffer.call(o),_?_.forwardPosition:o.caretPos.begin,a||new f.Event(`checkval`),a&&(a.type===`input`&&o.undoValue!==s.getBuffer.call(o).join(``)||a.type===`paste`)),d.skipOptionalPartCharacter=v}function m(e,t){let n=e?e.inputmask:this;if(r.ie){if(e.inputmask._valueGet()!==t&&(e.placeholder!==t||e.placeholder===``)){let r=s.getBuffer.call(n).slice(),i=e.inputmask._valueGet();if(i!==t){let t=s.getLastValidPosition.call(n);t===-1&&i===s.getBufferTemplate.call(n).join(``)?r=[]:t!==-1&&f.call(n,r),g(e,r)}}}else e.placeholder!==t&&(e.placeholder=t,e.placeholder===``&&e.removeAttribute(`placeholder`))}function h(e){let t=e?e.inputmask:this,n=t.opts,r=t.maskset;if(e){if(e.inputmask===void 0)return e.value;e.inputmask&&e.inputmask.refreshValue&&d(e,e.inputmask._valueGet(!0))}let i=[],o=r.validPositions;for(let e=0,t=o.length;e<t;e++)o[e]&&o[e].match&&(o[e].match.static!=1||n.keepStatic!==!0&&Array.isArray(r.metadata)&&o[e].generatedInput!==!0)&&i.push(o[e].input);let c=i.length===0?``:(t.isRTL?i.reverse():i).join(``);if(typeof n.onUnMask==`function`){let e=(t.isRTL?s.getBuffer.call(t).slice().reverse():s.getBuffer.call(t)).join(``);c=n.onUnMask.call(t,e,c,n)}return n.outputMask&&c.length>0?a.default.format(c,{...n,mask:n.outputMask,alias:null}):c}function g(e,t,n,r,i){let a=e?e.inputmask:this,l=a.opts,u=a.dependencyLib;if(r&&typeof l.onBeforeWrite==`function`){let e=l.onBeforeWrite.call(a,r,t,n,l);if(e){if(e.refreshFromBuffer){let n=e.refreshFromBuffer;c.refreshFromBuffer.call(a,n===!0?n:n.start,n.end,e.buffer||t),t=s.getBuffer.call(a,!0)}n!==void 0&&(n=e.caret===void 0?n:e.caret)}}if(e!==void 0&&(e.inputmask._valueSet(t.join(``)),n!==void 0&&(r===void 0||r.type!==`blur`)&&s.caret.call(a,e,n,void 0,void 0,r!==void 0&&r.type===`keydown`&&(r.key===o.keys.Delete||r.key===o.keys.Backspace)),e.inputmask.writeBufferHook===void 0||e.inputmask.writeBufferHook(n),i===!0)){let n=u(e),r=e.inputmask._valueGet();e.inputmask.skipInputEvent=!0,n.trigger(`input`),setTimeout(function(){r===s.getBufferTemplate.call(a).join(``)?n.trigger(`cleared`):c.isComplete.call(a,t)===!0&&n.trigger(`complete`)},0)}}}),(function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.mobile=t.iphone=t.ie=void 0;var r=i(n(11));function i(e){return e&&e.__esModule?e:{default:e}}let a=r.default.navigator&&r.default.navigator.userAgent||``;t.ie=a.indexOf(`MSIE `)>0||a.indexOf(`Trident/`)>0,t.mobile=!!(navigator.userAgentData?.mobile??((matchMedia(`(pointer:coarse)`).matches||navigator.maxTouchPoints)&&innerWidth<=1024||/Mobi|Android|iPhone/i.test(a))),t.iphone=/iphone/i.test(a)}),(function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.EventHandlers=void 0;var r=n(17),i=u(n(11)),a=n(16),o=n(19),s=n(20),c=n(21),l=n(22);function u(e){return e&&e.__esModule?e:{default:e}}let d=t.EventHandlers={keyEvent:function(e,t,n,i,u){let f=this.inputmask,p=f.opts,m=f.dependencyLib,h=f.maskset,g=this,_=m(g),v=e.key,y=s.caret.call(f,g),b=p.onKeyDown.call(this,e,s.getBuffer.call(f),y,p);if(b!==void 0)return b;if(v===o.keys.Backspace||v===o.keys.Delete||r.iphone&&v===o.keys.BACKSPACE_SAFARI||e.ctrlKey&&v===o.keys.x&&!(`oncut`in g))e.preventDefault(),c.handleRemove.call(f,g,v,y),(0,a.writeBuffer)(g,s.getBuffer.call(f,!0),h.p,e,g.inputmask._valueGet()!==s.getBuffer.call(f).join(``));else if(v===o.keys.End||v===o.keys.PageDown){e.preventDefault();let t=s.seekNext.call(f,s.getLastValidPosition.call(f));s.caret.call(f,g,e.shiftKey?y.begin:t,t,!0)}else v===o.keys.Home&&!e.shiftKey||v===o.keys.PageUp?(e.preventDefault(),s.caret.call(f,g,0,e.shiftKey?y.begin:0,!0)):p.undoOnEscape&&v===o.keys.Escape&&e.altKey!==!0?((0,a.checkVal)(g,!0,!1,f.undoValue.split(``)),_.trigger(`click`)):v===o.keys.Insert&&!(e.shiftKey||e.ctrlKey)&&f.userOptions.insertMode===void 0?c.isSelection.call(f,y)?p.insertMode=!p.insertMode:(p.insertMode=!p.insertMode,s.caret.call(f,g,y.begin,y.begin)):p.tabThrough===!0&&v===o.keys.Tab?e.shiftKey===!0?(y.end=s.seekPrevious.call(f,y.end,!0),l.getTest.call(f,y.end-1).match.static===!0&&y.end--,y.begin=s.seekPrevious.call(f,y.end,!0),y.begin>=0&&y.end>0&&(e.preventDefault(),s.caret.call(f,g,y.begin,y.end))):(y.begin=s.seekNext.call(f,y.begin,!0),y.end=s.seekNext.call(f,y.begin,!0),y.end<h.maskLength&&y.end--,y.begin<=h.maskLength&&(e.preventDefault(),s.caret.call(f,g,y.begin,y.end))):e.shiftKey||(p.insertModeVisual&&p.insertMode===!1?v===o.keys.ArrowRight?setTimeout(function(){let e=s.caret.call(f,g);s.caret.call(f,g,e.begin)},0):v===o.keys.ArrowLeft&&setTimeout(function(){let e={begin:s.translatePosition.call(f,g.inputmask.caretPos.begin),end:s.translatePosition.call(f,g.inputmask.caretPos.end)};f.isRTL?s.caret.call(f,g,e.begin+(e.begin===h.maskLength?0:1)):s.caret.call(f,g,e.begin-(e.begin===0?0:1))},0):f.keyEventHook===void 0||f.keyEventHook(e));return f.isComposing=v===o.keys.Process||v===o.keys.Unidentified,f.ignorable=v===void 0||v.length>1,d.keypressEvent.call(f,e,t,n,i,u)},keypressEvent:function(e,t,n,r,i){let l=this.inputmask||this,u=l.opts,d=l.dependencyLib,f=l.maskset,p=l.el,m=d(p),h=e.key;if(t!==!0&&!(e.ctrlKey&&e.altKey&&!l.ignorable)&&(e.ctrlKey||e.metaKey||l.ignorable))h===o.keys.Enter&&l.undoValue!==l._valueGet(!0)&&(l.undoValue=l._valueGet(!0),setTimeout(function(){m.trigger(`change`)},0));else if(h){let o=t?{begin:i,end:i}:s.caret.call(l,p),d;t||(h=u.substitutes[h]||h),f.writeOutBuffer=!0;let m=c.isValid.call(l,o,h,r,void 0,void 0,void 0,t);if(m!==!1&&(s.resetMaskSet.call(l,!0),d=m.caret===void 0?s.seekNext.call(l,m.pos.begin?m.pos.begin:m.pos):m.caret,f.p=d),d=u.numericInput&&m.caret===void 0?s.seekPrevious.call(l,d):d,n!==!1&&(setTimeout(function(){u.onKeyValidation.call(p,h,m)},0),f.writeOutBuffer&&m!==!1)){let n=s.getBuffer.call(l);(0,a.writeBuffer)(p,n,d,e,t!==!0)}if(e.preventDefault(),t)return m!==!1&&(m.forwardPosition=d),m}},pasteEvent:async function(e){function t(t,n,r,i,c){let l=s.caret.call(t,n,void 0,void 0,!0),u=r.substr(0,l.begin),d=r.substr(l.end,r.length);if(u==(t.isRTL?s.getBufferTemplate.call(t).slice().reverse():s.getBufferTemplate.call(t)).slice(0,l.begin).join(``)&&(u=``),d==(t.isRTL?s.getBufferTemplate.call(t).slice().reverse():s.getBufferTemplate.call(t)).slice(l.end).join(``)&&(d=``),i=u+i+d,t.isRTL&&o.numericInput!==!0){i=i.split(``);for(let e of s.getBufferTemplate.call(t))i[0]===e&&i.shift();i=i.reverse().join(``)}let f=i;if(typeof c==`function`){if(f=c.call(t,f,o),f===!1)return!1;f||=r}(0,a.checkVal)(n,!0,!1,f.toString().split(``),e)}let n=this,r=this.inputmask,o=r.opts,c=r._valueGet(!0),l;r.skipInputEvent=!0,e.clipboardData&&e.clipboardData.getData?l=e.clipboardData.getData(`text/plain`):i.default.clipboardData&&i.default.clipboardData.getData&&(l=i.default.clipboardData.getData(`Text`)),t(r,n,c,l,o.onBeforePaste),e.preventDefault()},inputFallBackEvent:function(e){let t=this.inputmask,n=t.opts,i=t.dependencyLib;function c(e,r,i){let a=e.substr(0,i.begin).split(``),o=e.substr(i.begin).split(``),c=r.substr(0,i.begin).split(``),u=r.substr(i.begin).split(``),d=a.length>=c.length?a.length:c.length,f=o.length>=u.length?o.length:u.length,p,m,h=``,g=[],_;for(;a.length<d;)a.push(`~`);for(;c.length<d;)c.push(`~`);for(;o.length<f;)o.unshift(`~`);for(;u.length<f;)u.unshift(`~`);let v=a.concat(o),y=c.concat(u);for(m=0,p=v.length;m<p;m++)switch(_=l.getPlaceholder.call(t,s.translatePosition.call(t,m)),h){case`insertText`:y[m-1]===v[m]&&i.begin==v.length-1&&g.push(v[m]),m=p;break;case`insertReplacementText`:v[m]===`~`?i.end++:m=p;break;case`deleteContentBackward`:v[m]===`~`?i.end++:m=p;break;default:v[m]!==y[m]&&((v[m+1]===`~`||v[m+1]===_||v[m+1]===void 0)&&(y[m]===_&&y[m+1]===`~`||y[m]===`~`)||y[m+1]===`~`&&y[m]===v[m+1]?(h=`insertText`,g.push(v[m]),i.begin--,i.end--):v[m]!==_&&v[m]!==`~`&&(v[m+1]===`~`||y[m]!==v[m]&&y[m+1]===v[m+1])?(h=`insertReplacementText`,g.push(v[m]),i.begin--):v[m]===`~`?(h=`deleteContentBackward`,(s.isMask.call(t,s.translatePosition.call(t,m),!0)||y[m]===n.radixPoint)&&i.end++):m=p);break}return{action:h,data:g,caret:i}}let u=this,f=u.inputmask._valueGet(!0),p=(t.isRTL?s.getBuffer.call(t).slice().reverse():s.getBuffer.call(t)).join(``),m=s.caret.call(t,u,void 0,void 0,!0),h;if(p!==f){if(h=c(f,p,m),u.getRootNode().activeElement!==u&&u.focus(),(0,a.writeBuffer)(u,s.getBuffer.call(t)),s.caret.call(t,u,m.begin,m.end,!0),!r.mobile&&t.skipNextInsert&&e.inputType===`insertText`&&h.action===`insertText`&&t.isComposing)return!1;switch(e.inputType===`insertCompositionText`&&h.action===`insertText`&&t.isComposing?t.skipNextInsert=!0:t.skipNextInsert=!1,h.action){case`insertText`:case`insertReplacementText`:h.data.forEach(function(e,n){let r=new i.Event(`keypress`);r.key=e,t.ignorable=!1,d.keypressEvent.call(u,r)}),setTimeout(function(){t.$el.trigger(`keyup`)},0);break;case`deleteContentBackward`:var g=new i.Event(`keydown`);g.key=o.keys.Backspace,d.keyEvent.call(u,g);break;default:(0,a.applyInputValue)(u,f,e),s.caret.call(t,u,m.begin,m.end,!0);break}e.preventDefault()}},setValueEvent:function(e){let t=this.inputmask,n=t.dependencyLib,r=this,i=e&&e.detail?e.detail[0]:arguments[1];i===void 0&&(i=r.inputmask._valueGet(!0)),(0,a.applyInputValue)(r,i,new n.Event(`input`),(e&&e.detail?e.detail[0]:arguments[1])!==void 0),(e.detail&&e.detail[1]!==void 0||arguments[2]!==void 0)&&s.caret.call(t,r,e.detail?e.detail[1]:arguments[2])},focusEvent:function(e){let t=this.inputmask,n=t.opts,r=this,i=t&&t._valueGet();n.showMaskOnFocus&&i!==s.getBuffer.call(t).join(``)&&(0,a.writeBuffer)(r,s.getBuffer.call(t),s.seekNext.call(t,s.getLastValidPosition.call(t))),n.positionCaretOnTab===!0&&t.mouseEnter===!1&&(!c.isComplete.call(t,s.getBuffer.call(t))||s.getLastValidPosition.call(t)===-1)&&d.clickEvent.apply(r,[e,!0]),t.undoValue=t&&t._valueGet(!0)},invalidEvent:function(e){this.inputmask.validationEvent=!0},mouseleaveEvent:function(){let e=this.inputmask,t=e.opts,n=this;e.mouseEnter=!1,t.clearMaskOnLostFocus&&n.getRootNode().activeElement!==n&&(0,a.HandleNativePlaceholder)(n,e.originalPlaceholder)},clickEvent:function(e,t){let n=this.inputmask;n.clicked++;let r=this;if(r.getRootNode().activeElement===r){let e=s.determineNewCaretPosition.call(n,s.caret.call(n,r),t);e!==void 0&&s.caret.call(n,r,e)}},cutEvent:function(e){let t=this.inputmask,n=t.maskset,r=this,l=s.caret.call(t,r),u=t.isRTL?s.getBuffer.call(t).slice(l.end,l.begin):s.getBuffer.call(t).slice(l.begin,l.end),d=t.isRTL?u.reverse().join(``):u.join(``);i.default.navigator&&i.default.navigator.clipboard?i.default.navigator.clipboard.writeText(d):i.default.clipboardData&&i.default.clipboardData.getData&&i.default.clipboardData.setData(`Text`,d),c.handleRemove.call(t,r,o.keys.Delete,l),(0,a.writeBuffer)(r,s.getBuffer.call(t),n.p,e,t.undoValue!==t._valueGet(!0))},blurEvent:function(e){let t=this.inputmask,n=t.opts,r=t.dependencyLib;t.clicked=0;let i=r(this),o=this;if(o.inputmask){(0,a.HandleNativePlaceholder)(o,t.originalPlaceholder);let r=o.inputmask._valueGet(),l=s.getBuffer.call(t).slice();if(r!==``&&(n.clearMaskOnLostFocus&&(s.getLastValidPosition.call(t)===-1&&r===s.getBufferTemplate.call(t).join(``)?l=[]:a.clearOptionalTail.call(t,l)),c.isComplete.call(t,l)===!1&&(setTimeout(function(){i.trigger(`incomplete`)},0),n.clearIncomplete&&(s.resetMaskSet.call(t,!1),l=n.clearMaskOnLostFocus?[]:s.getBufferTemplate.call(t).slice())),(0,a.writeBuffer)(o,l,void 0,e)),r=t._valueGet(!0),t.undoValue!==r){let e=(t.isRTL?s.getBufferTemplate.call(t).slice().reverse():s.getBufferTemplate.call(t)).join(``);(r!==``||t.undoValue!==e||t.undoValue===e&&t.maskset.validPositions.length>0)&&(t.undoValue=r,i.trigger(`change`))}}},mouseenterEvent:function(){let e=this.inputmask,{showMaskOnHover:t}=e.opts,n=this;if(e.mouseEnter=!0,n.getRootNode().activeElement!==n){let r=(e.isRTL?s.getBufferTemplate.call(e).slice().reverse():s.getBufferTemplate.call(e)).join(``);t&&(0,a.HandleNativePlaceholder)(n,r)}},submitEvent:function(){let e=this.inputmask,t=e.opts;e.undoValue!==e._valueGet(!0)&&e.$el.trigger(`change`),s.getLastValidPosition.call(e)===-1&&e._valueGet&&e._valueGet()===s.getBufferTemplate.call(e).join(``)&&e._valueSet(``),t.clearIncomplete&&c.isComplete.call(e,s.getBuffer.call(e))===!1&&e._valueSet(``),t.removeMaskOnSubmit&&(e._valueSet(e.unmaskedvalue(),!0),setTimeout(function(){(0,a.writeBuffer)(e.el,s.getBuffer.call(e))},0))},resetEvent:function(){let e=this.inputmask;e.refreshValue=!0,setTimeout(function(){(0,a.applyInputValue)(e.el,e._valueGet(!0))},0)}}}),(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.keys=t.keyCode=void 0,t.toKey=i,t.toKeyCode=a;let n=t.keyCode={c:67,x:88,z:90,BACKSPACE_SAFARI:127,Enter:13,Meta_LEFT:91,Meta_RIGHT:92,Space:32,Alt:18,AltGraph:18,ArrowDown:40,ArrowLeft:37,ArrowRight:39,ArrowUp:38,Backspace:8,CapsLock:20,Control:17,ContextMenu:93,Dead:221,Delete:46,End:35,Escape:27,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,Home:36,Insert:45,NumLock:144,PageDown:34,PageUp:33,Pause:19,PrintScreen:44,Process:229,Shift:16,ScrollLock:145,Tab:9,Unidentified:229},r=Object.entries(n).reduce((e,[t,n])=>(e[n]=e[n]===void 0?t:e[n],e),{});t.keys=Object.entries(n).reduce((e,[t,n])=>(e[t]=t===`Space`?` `:t,e),{});function i(e,t){return r[e]||(t?String.fromCharCode(e):String.fromCharCode(e).toLowerCase())}function a(e){return n[e]}}),(function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.caret=s,t.determineLastRequiredPosition=c,t.determineNewCaretPosition=l,t.getBuffer=u,t.getBufferTemplate=d,t.getLastValidPosition=f,t.isMask=p,t.resetMaskSet=m,t.seekNext=h,t.seekPrevious=g,t.translatePosition=_;var r=o(n(11)),i=n(21),a=n(22);function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t,n,i,a){let o=this,s=this.opts,c;if(t!==void 0){if(Array.isArray(t)&&(n=o.isRTL?t[0]:t[1],t=o.isRTL?t[1]:t[0]),t.begin!==void 0&&(n=o.isRTL?t.begin:t.end,t=o.isRTL?t.end:t.begin),typeof t==`number`){t=i?t:_.call(o,t),n=i?n:_.call(o,n),n=typeof n==`number`?n:t;let l=parseInt(((e.ownerDocument.defaultView||r.default).getComputedStyle?(e.ownerDocument.defaultView||r.default).getComputedStyle(e,null):e.currentStyle).fontSize)*n;if(e.scrollLeft=l>e.scrollWidth?l:0,e.inputmask.caretPos={begin:t,end:n},s.insertModeVisual&&s.insertMode===!1&&t===n&&(a||n++),e===e.getRootNode().activeElement){if(`setSelectionRange`in e)e.setSelectionRange(t,n);else if(r.default.getSelection){if(c=document.createRange(),e.firstChild===void 0||e.firstChild===null){let t=document.createTextNode(``);e.appendChild(t)}c.setStart(e.firstChild,t<e.inputmask._valueGet().length?t:e.inputmask._valueGet().length),c.setEnd(e.firstChild,n<e.inputmask._valueGet().length?n:e.inputmask._valueGet().length),c.collapse(!0);let i=r.default.getSelection();i.removeAllRanges(),i.addRange(c)}else e.createTextRange&&(c=e.createTextRange(),c.collapse(!0),c.moveEnd(`character`,n),c.moveStart(`character`,t),c.select());e.inputmask.caretHook===void 0||e.inputmask.caretHook.call(o,{begin:t,end:n})}}}else return`selectionStart`in e&&`selectionEnd`in e?(t=e.selectionStart,n=e.selectionEnd):r.default.getSelection?(c=r.default.getSelection().getRangeAt(0),(c.commonAncestorContainer.parentNode===e||c.commonAncestorContainer===e)&&(t=c.startOffset,n=c.endOffset)):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),t=0-c.duplicate().moveStart(`character`,-e.inputmask._valueGet().length),n=t+c.text.length),{begin:i?t:_.call(o,t),end:i?n:_.call(o,n)}}function c(e){let t=this,{maskset:n,dependencyLib:r}=t,o=f.call(t),s={},c=n.validPositions[o],l=a.getMaskTemplate.call(t,!0,f.call(t),!0,!0),u=l.length,d,p=c===void 0?void 0:c.locator.slice(),m;for(d=o+1;d<l.length;d++)m=a.getTestTemplate.call(t,d,p,d-1),p=m.locator.slice(),s[d]=r.extend(!0,{},m);let h=c&&c.alternation!==void 0?c.locator[c.alternation]:void 0;for(d=u-1;d>o&&(m=s[d],(m.match.optionality||m.match.optionalQuantifier&&m.match.newBlockMarker||h&&(h!==s[d].locator[c.alternation]&&m.match.static!==!0||m.match.static===!0&&m.locator[c.alternation]&&i.checkAlternationMatch.call(t,m.locator[c.alternation].toString().split(`,`),h.toString().split(`,`))&&a.getTests.call(t,d)[0].def!==``))&&l[d]===a.getPlaceholder.call(t,d,m.match));d--)if(u--,m.match.optionality){let e=d;for(;e>0;){let n=a.getTest.call(t,e);if(n.match.newBlockMarker===`master`||n.match.newBlockMarker===!0)break;e--}if(n.validPositions[e]!==void 0)break}return d===o&&(u=d),e?{l:u,def:s[u]?s[u].match:void 0}:u}function l(e,t,n){let r=this,{maskset:i,opts:o}=r,s,c,l;function d(e){if(o.radixPoint!==``&&o.digits!==0){let t=i.validPositions;if(t[e]===void 0||t[e].input===void 0){if(e<h.call(r,-1))return!0;let n=u.call(r).indexOf(o.radixPoint);if(n!==-1){for(let e in t){let i=Number(e);if(n<i&&t[e].input!==a.getPlaceholder.call(r,i))return!1}return!0}}}return!1}if(t&&(r.isRTL?e.end=e.begin:e.begin=e.end),e.begin===e.end){switch(n||=o.positionCaretOnClick,n){case`none`:break;case`select`:e={begin:0,end:u.call(r).length};break;case`ignore`:e.end=e.begin=h.call(r,f.call(r));break;case`radixFocus`:if(r.clicked>1&&i.validPositions.length===0)break;if(d(e.begin)){let t=u.call(r).join(``).indexOf(o.radixPoint);e.end=e.begin=o.numericInput?h.call(r,t):t;break}default:if(s=e.begin,c=f.call(r,s,!0),l=h.call(r,c===-1&&!p.call(r,0)?-1:c),s<=l)e.end=e.begin=p.call(r,s,!1,!0)?s:h.call(r,s);else{let t=i.validPositions[c],n=a.getTestTemplate.call(r,l,t?t.match.locator:void 0,t),d=a.getPlaceholder.call(r,l,n.match);if(d!==``&&u.call(r)[l]!==d&&n.match.optionalQuantifier!==!0&&n.match.newBlockMarker!==!0||!p.call(r,l,o.keepStatic,!0)&&n.match.def===d){let e=h.call(r,l);(s>=e||s===l)&&(l=e)}e.end=e.begin=l}}return e}}function u(e){let t=this,{maskset:n}=t;return(n.buffer===void 0||e===!0)&&(n.buffer=a.getMaskTemplate.call(t,!0,f.call(t),!0),n._buffer===void 0&&(n._buffer=n.buffer.slice())),n.buffer}function d(){let e=this,t=this.maskset;return t._buffer===void 0&&(t._buffer=a.getMaskTemplate.call(e,!1,1),t.buffer===void 0&&(t.buffer=t._buffer.slice())),t._buffer}function f(e,t,n){let r=this.maskset,i=-1,a=-1,o=n||r.validPositions;e===void 0&&(e=-1);for(let n=0,r=o.length;n<r;n++)o[n]&&(t||o[n].generatedInput!==!0)&&(n<=e&&(i=n),n>=e&&(a=n));return i===-1||i===e?a:a===-1||e-i<a-e?i:a}function p(e,t,n){let r=this,i=this.maskset,o=a.getTestTemplate.call(r,e).match;if(o.def===``&&(o=a.getTest.call(r,e).match),o.static!==!0)return o.fn;if(n===!0&&i.validPositions[e]!==void 0&&i.validPositions[e].generatedInput!==!0)return!0;if(t!==!0&&e>-1){if(n){let t=a.getTests.call(r,e);return t.length>1+ +(t[t.length-1].match.def===``)}let t=a.determineTestTemplate.call(r,e,a.getTests.call(r,e)),i=a.getPlaceholder.call(r,e,t.match);return t.match.def!==i}return!1}function m(e){let t=this.maskset;t.buffer=void 0,e!==!0&&(t.validPositions=[],t.p=0),e===!1&&(t.tests={},t.jitOffset={})}function h(e,t,n){let r=this;n===void 0&&(n=!0);let i=e+1;for(;a.getTest.call(r,i).match.def!==``&&(t===!0&&(a.getTest.call(r,i).match.newBlockMarker!==!0||!p.call(r,i,void 0,!0))||t!==!0&&!p.call(r,i,void 0,n));)i++;return i}function g(e,t){let n=this,r=e-1;if(e<=0)return 0;for(;r>0&&(t===!0&&(a.getTest.call(n,r).match.newBlockMarker!==!0||!p.call(n,r,void 0,!0))||t!==!0&&!p.call(n,r,void 0,!0));)r--;return r}function _(e){let t=this,n=this.opts,r=this.el;return t.isRTL&&typeof e==`number`&&(!n.greedy||n.placeholder!==``)&&r&&(e=t._valueGet().length-e,e<0&&(e=0)),e}}),(function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.alternate=s,t.casing=c,t.checkAlternationMatch=l,t.handleRemove=u,t.isComplete=d,t.isSelection=f,t.isValid=p,t.refreshFromBuffer=h,t.revalidateMask=_;var r=n(18),i=n(19),a=n(20),o=n(22);function s(e,t,n,r,i,c){let l=this,u=this.dependencyLib,d=this.opts,f=l.maskset;if(!l.hasAlternator)return!1;let m=u.extend(!0,[],f.validPositions),h=u.extend(!0,{},f.tests),g,_,v=!1,y=!1,b,x,S,C,w,T=i===void 0?a.getLastValidPosition.call(l):i,E,D,O,k;if(c&&(O=c.begin,k=c.end,c.begin>c.end&&(O=c.end,k=c.begin)),T===-1&&i===void 0)g=0,x=o.getTest.call(l,g),_=x.alternation;else for(;T>=0;T--)if(b=T===0?o.getTest.call(l,0):f.validPositions[T],b&&b.alternation!==void 0){if(T<=(e||0)&&x&&x.locator[b.alternation]!==b.locator[b.alternation])break;g=T,_=b.alternation,x=b}if(_!==void 0){w=parseInt(g),f.excludes[w]=f.excludes[w]||[],e!==!0&&f.excludes[w].push((0,o.getDecisionTaker)(x)+`:`+x.alternation);let i=[],_=-1;for(S=w;w<a.getLastValidPosition.call(l,void 0,!0)+1;S++)_===-1&&e<=S&&t!==void 0&&(i.push(t),_=i.length-1),C=f.validPositions[w],C&&C.generatedInput!==!0&&(w!==0||C.input!==d.skipOptionalPartCharacter)&&(c===void 0||S<O||S>=k)&&i.push(C.input),f.validPositions.splice(w,1);for(_===-1&&t!==void 0&&(i.push(t),_=i.length-1);f.excludes[w]!==void 0&&f.excludes[w].length<10;){f.tests={},a.resetMaskSet.call(l,!0),v=!0,E=w-1;let g=o.getMaskTemplate.call(l,!0,0);for(S=0;S<i.length&&(D=i[S],g[E+1]===D&&d.numericInput!==!0?E++:E=S===0||y.caretPos!==void 0||d.insertMode===!1?a.seekNext.call(l,E):a.getLastValidPosition.call(l,E,!0)+1,v=p.call(l,E,D,!1,r,!0));S++)S===_&&(y=v),e===!0&&v&&(y={caretPos:S});if(v)break;if(a.resetMaskSet.call(l),x=o.getTest.call(l,w),f.validPositions=u.extend(!0,[],m),f.tests=u.extend(!0,{},h),y=!1,f.excludes[w])if(x.alternation!=null){let i=(0,o.getDecisionTaker)(x);if(f.excludes[w].indexOf(i+`:`+x.alternation)!==-1){y=s.call(l,e,t,n,r,w-1,c);break}for(f.excludes[w].push(i+`:`+x.alternation),S=w;S<a.getLastValidPosition.call(l,void 0,!0)+1;S++)f.validPositions.splice(w)}else delete f.excludes[w];else{y=s.call(l,e,t,n,r,w-1,c);break}}}return(!y||d.keepStatic!==!1)&&delete f.excludes[w],y||(f.validPositions=u.extend(!0,[],m),f.tests=u.extend(!0,{},h)),y}function c(e,t,n){let r=this.opts,a=this.maskset;switch(r.casing||t.casing){case`upper`:e=e.toLocaleUpperCase();break;case`lower`:e=e.toLocaleLowerCase();break;case`title`:var o=a.validPositions[n-1];e=n===0||o&&o.input===String.fromCharCode(i.keyCode.Space)?e.toLocaleUpperCase():e.toLocaleLowerCase();break;case`follow`:t.def&&t.def!==t.def.toLocaleLowerCase()?e=e.toLocaleUpperCase():t.def&&t.def!==t.def.toLocaleUpperCase()&&(e=e.toLocaleLowerCase());break;default:if(typeof r.casing==`function`){let t=Array.prototype.slice.call(arguments);t.push(a.validPositions),e=r.casing.apply(this,t)}}return e}function l(e,t,n){let r=this.opts.greedy?t:t.slice(0,1),i=!1,a=n===void 0?[]:n.split(`,`),o;for(let t=0;t<a.length;t++)(o=e.indexOf(a[t]))!==-1&&e.splice(o,1);for(let t=0;t<e.length;t++)if(r.includes(e[t])){i=!0;break}return i}function u(e,t,n,r,c){let l=this,u=this.maskset,d=this.opts;if((d.numericInput||l.isRTL)&&(t===i.keys.Backspace?t=i.keys.Delete:t===i.keys.Delete&&(t=i.keys.Backspace),l.isRTL)){let e=n.end;n.end=n.begin,n.begin=e}let f=a.getLastValidPosition.call(l,void 0,!0);n.end>=a.getBuffer.call(l).length&&f>=n.end&&(n.end=f+1),t===i.keys.Backspace?n.end-n.begin<1&&(n.begin=a.seekPrevious.call(l,n.begin)):t===i.keys.Delete&&n.begin===n.end&&(n.end=a.isMask.call(l,n.end,!0,!0)?n.end+1:a.seekNext.call(l,n.end)+1);let p;(p=_.call(l,n))!==!1&&((r!==!0&&d.keepStatic!==!1||d.regex!==null&&o.getTest.call(l,n.begin).match.def.indexOf(`|`)!==-1)&&s.call(l,!0),r!==!0&&(u.p=t===i.keys.Delete?n.begin+p:n.begin,u.p=a.determineNewCaretPosition.call(l,{begin:u.p,end:u.p},!1,d.insertMode===!1&&t===i.keys.Backspace?`none`:void 0).begin))}function d(e){let t=this,n=this.opts,r=this.maskset;if(typeof n.isComplete==`function`)return n.isComplete(e,n);if(n.repeat===`*`)return;let i=!1,s=a.determineLastRequiredPosition.call(t,!0),c=s.l;if(s.def===void 0||s.def.newBlockMarker||s.def.optionality||s.def.optionalQuantifier){i=!0;for(let n=0;n<=c;n++){let a=o.getTestTemplate.call(t,n).match;if(a.static!==!0&&r.validPositions[n]===void 0&&(a.optionality===!1||a.optionality===void 0||a.optionality&&a.newBlockMarker==0)&&(a.optionalQuantifier===!1||a.optionalQuantifier===void 0)||a.static===!0&&a.def!=``&&e[n]!==o.getPlaceholder.call(t,n,a)){i=!1;break}}}return i}function f(e){let t=this,n=+!this.opts.insertMode;return t.isRTL?e.begin-e.end>n:e.end-e.begin>n}function p(e,t,n,r,i,l,u){let d=this,m=this.dependencyLib,v=this.opts,y=d.maskset;n=n===!0;let b=e;e.begin!==void 0&&(b=d.isRTL?e.end:e.begin);function x(e){if(e!==void 0){if(e.remove!==void 0&&(Array.isArray(e.remove)||(e.remove=[e.remove]),e.remove.sort(function(e,t){return d.isRTL?e.pos-t.pos:t.pos-e.pos}).forEach(function(e){_.call(d,{begin:e,end:e+1})}),e.remove=void 0),e.insert!==void 0&&(Array.isArray(e.insert)||(e.insert=[e.insert]),e.insert.sort(function(e,t){return d.isRTL?t.pos-e.pos:e.pos-t.pos}).forEach(function(e){e.c!==``&&p.call(d,e.pos,e.c,e.strict===void 0||e.strict,e.fromIsValid===void 0?r:e.fromIsValid)}),e.insert=void 0),e.refreshFromBuffer&&e.buffer){let t=e.refreshFromBuffer;h.call(d,t===!0?t:t.start,t.end,e.buffer),e.refreshFromBuffer=void 0}e.rewritePosition!==void 0&&(b=e.rewritePosition,e=!0)}return e}function S(t,n,i){let s=!1;return o.getTests.call(d,t).every(function(l,u){let p=l.match;if(a.getBuffer.call(d,!0),s=p.jit&&y.validPositions[a.seekPrevious.call(d,t)]===void 0?!1:p.fn==null?(n===p.def||n===v.skipOptionalPartCharacter)&&p.def!==``&&{c:o.getPlaceholder.call(d,t,p,!0)||p.def,pos:t}:p.fn.test(n,y,t,i,v,f.call(d,e)),s!==!1){let i=s.c===void 0?n:s.c,a=t;return i=i===v.skipOptionalPartCharacter&&p.static===!0?o.getPlaceholder.call(d,t,p,!0)||p.def:i,s=x(s),s!==!0&&s.pos!==void 0&&s.pos!==t&&(a=s.pos),s!==!0&&s.pos===void 0&&s.c===void 0||_.call(d,e,m.extend({},l,{input:c.call(d,i,p,a)}),r,a)===!1&&(s=!1),!1}return!0}),s}let C=!0,w=m.extend(!0,[],y.validPositions);if(v.keepStatic===!1&&y.excludes[b]!==void 0&&i!==!0&&r!==!0)for(let t=b;t<(d.isRTL?e.begin:e.end);t++)y.excludes[t]!==void 0&&(y.excludes[t]=void 0,delete y.tests[t]);if(typeof v.preValidation==`function`&&r!==!0&&l!==!0&&(C=v.preValidation.call(d,a.getBuffer.call(d),b,t,f.call(d,e),v,y,e,n||i),C=x(C)),C===!0){if(C=S(b,t,n),(!n||r===!0)&&C===!1&&l!==!0){let r=y.validPositions[b];if(r&&r.match.static===!0&&(r.match.def===t||t===v.skipOptionalPartCharacter))C={caret:a.seekNext.call(d,b)};else if(v.insertMode||y.validPositions[a.seekNext.call(d,b)]===void 0||e.end>b){let r=!1;if(y.jitOffset[b]&&y.validPositions[a.seekNext.call(d,b)]===void 0&&(C=p.call(d,b+y.jitOffset[b],t,!0,!0),C!==!1&&(i!==!0&&(C.caret=b),r=!0)),e.end>b&&(y.validPositions[b]=void 0),!r&&!a.isMask.call(d,b,v.keepStatic&&b===0)){for(let e=b+1,r=a.seekNext.call(d,b,!1,b!==0);e<=r;e++)if(C=S(e,t,n),C!==!1){C=g.call(d,b,C.pos===void 0?e:C.pos)||C,b=e;break}}}}if(d.hasAlternator&&i!==!0&&!n&&(i=!0,C===!1?(v.keepStatic===!0||isFinite(parseInt(v.keepStatic))&&b>=v.keepStatic)&&(C=s.call(d,b,t,n,r,void 0,e)):C===!0&&(f.call(d,e)&&y.tests[b]&&y.tests[b].length>1&&v.keepStatic||v.numericInput!==!0&&y.tests[b]&&y.tests[b].length>1&&a.getLastValidPosition.call(d,void 0,!0)>b)&&(C=s.call(d,!0)||C)),C===!0&&(C={pos:b}),typeof v.postValidation==`function`&&r!==!0&&l!==!0){let r=v.postValidation.call(d,a.getBuffer.call(d,!0),e.begin===void 0?e:d.isRTL?e.end:e.begin,t,C,v,y,n,u,i);r!==void 0&&(C=r===!0?C:r)}}C&&C.pos===void 0&&(C.pos=b),C===!1||l===!0?(a.resetMaskSet.call(d,!0),y.validPositions=m.extend(!0,[],w)):g.call(d,void 0,b,!0);let T=x(C);return d.maxLength!==void 0&&a.getBuffer.call(d).length>d.maxLength&&!r&&(a.resetMaskSet.call(d,!0),y.validPositions=m.extend(!0,[],w),T=!1),T}function m(e,t,n){let r=this,i=this.maskset,a=!1,s=o.getTests.call(r,e);for(let r=0;r<s.length;r++)if(s[r].match&&(s[r].match.nativeDef===t.match[n.shiftPositions?`def`:`nativeDef`]&&(!n.shiftPositions||!t.match.static)||s[r].match.nativeDef===t.match.nativeDef||n.regex&&!s[r].match.static&&s[r].match.fn.test(t.input,i,e,!1,n))){a=!0;break}else if(s[r].match&&s[r].match.def===t.match.nativeDef){a=void 0;break}return a===!1&&i.jitOffset[e]!==void 0&&(a=m.call(r,e+i.jitOffset[e],t,n)),a}function h(e,t,n){let i=this,o=this.maskset,s=this.opts,c=this.dependencyLib,l,u,d=s.skipOptionalPartCharacter,f=i.isRTL?n.slice().reverse():n;if(s.skipOptionalPartCharacter=``,e===!0)a.resetMaskSet.call(i,!1),e=0,t=n.length,u=a.determineNewCaretPosition.call(i,{begin:0,end:0},!1).begin;else{for(l=e;l<t;l++)delete o.validPositions[l];u=e}let p=new c.Event(`keypress`);for(l=e;l<t;l++){p.key=f[l].toString(),i.ignorable=!1;let e=r.EventHandlers.keypressEvent.call(i,p,!0,!1,!1,u);e!==!1&&e!==void 0&&(u=e.forwardPosition)}s.skipOptionalPartCharacter=d}function g(e,t,n){let r=this,i=this.maskset,s=this.dependencyLib;if(e===void 0)for(e=t-1;e>0&&!i.validPositions[e];e--);for(let u=e;u<t;u++)if(i.validPositions[u]===void 0&&!a.isMask.call(r,u,!1)&&(u==0?o.getTest.call(r,u):i.validPositions[u-1])){let e=o.getTests.call(r,u).slice();e[e.length-1].match.def===``&&e.pop();var c=o.determineTestTemplate.call(r,u,e),l;if(c&&(c.match.jit!==!0||c.match.newBlockMarker===`master`&&(l=i.validPositions[u+1])&&l.match.optionalQuantifier===!0)&&(c=s.extend({},c,{input:o.getPlaceholder.call(r,u,c.match,!0)||c.match.def}),c.generatedInput=!0,_.call(r,u,c,!0),n!==!0)){let e=i.validPositions[t].input;return i.validPositions[t]=void 0,p.call(r,t,e,!0,!0)}}}function _(e,t,n,r){let i=this,s=this.maskset,c=this.opts,l=this.dependencyLib;function u(e,t,n){let r=t[e];if(r!==void 0&&r.match.static===!0&&r.match.optionality!==!0&&(t[0]===void 0||t[0].alternation===void 0)){let r=n.begin<=e-1?t[e-1]&&t[e-1].match.static===!0&&t[e-1]:t[e-1],i=n.end>e+1?t[e+1]&&t[e+1].match.static===!0&&t[e+1]:t[e+1];return r&&i}return!1}let d=0,h=e.begin===void 0?e:e.begin,g=e.end===void 0?e:e.end,_=!0;if(e.begin>e.end&&(h=e.end,g=e.begin),r=r===void 0?h:r,n===void 0&&(h!==g||c.insertMode&&s.validPositions[r]!==void 0||t===void 0||t.match.optionalQuantifier||t.match.optionality)){let n=l.extend(!0,[],s.validPositions),v=a.getLastValidPosition.call(i,void 0,!0),y;s.p=h;let b=f.call(i,e)?h:r;for(y=v;y>=b;y--)s.validPositions.splice(y,1),t===void 0&&delete s.tests[y+1];let x=r,S=x,C,w,T;for(t&&(s.validPositions[r]=l.extend(!0,{},t),S++,x++),n[g]==null&&s.jitOffset[g]&&(g+=s.jitOffset[g]+ +!!t),y=t?g:g-1;y<=v;y++){if((C=n[y])!==void 0&&(c.shiftPositions!==!0||C.generatedInput!==!0)&&(y>=g||y>=h&&u(y,n,{begin:h,end:g}))){for(;T=o.getTest.call(i,S),T.match.def!==``;){if((w=m.call(i,S,C,c))!==!1||C.match.def===`+`){C.match.def===`+`&&a.getBuffer.call(i,!0);let e=p.call(i,S,C.input,C.match.def!==`+`,!0);if(_=e!==!1,x=(e.pos||S)+1,!_&&w)break}else _=!1;if(_){t===void 0&&C.match.static&&y===e.begin&&d++;break}if(!_&&a.getBuffer.call(i),S>s.maskLength)break;S++}o.getTest.call(i,S).match.def==``&&(_=!1),S=x}if(!_)break}if(!_)return s.validPositions=l.extend(!0,[],n),a.resetMaskSet.call(i,!0),!1}else t&&o.getTest.call(i,r).match.cd===t.match.cd&&(s.validPositions[r]=l.extend(!0,{},t));return a.resetMaskSet.call(i,!0),d}}),(function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.determineTestTemplate=f,t.getDecisionTaker=c,t.getMaskTemplate=u,t.getPlaceholder=l,t.getTest=m,t.getTestTemplate=d,t.getTests=g,t.isSubsetOf=h;var r=o(n(7)),i=n(20),a=n(21);function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){let n=(e.alternation==null?e.locator:e.mloc[`${c(e)}:${e.alternation}`]||e.locator).join(``);if(n!==``)for(n=n.split(`:`)[0];n.length<t;)n+=`0`;return n}function c(e){let t=e.locator[e.alternation];return typeof t==`string`&&t.length>0&&(t=t.split(`,`).sort((e,t)=>e-t)[0]),t===void 0?``:t.toString()}function l(e,t,n){let r=this,o=this.opts,s=this.maskset;if(t||=m.call(r,e).match,t.placeholder!==void 0||n===!0)if(t.placeholder!==``&&t.static===!0&&t.generated!==!0){let s=i.getLastValidPosition.call(r,e),c=i.seekNext.call(r,s);return(n?e<=c:e<c)?a.casing.call(r,o.staticDefinitionSymbol&&t.static?t.nativeDef:t.def,t,e):typeof t.placeholder==`function`?t.placeholder(o):t.placeholder}else return typeof t.placeholder==`function`?t.placeholder(o):t.placeholder;else if(t.static===!0){if(e>-1&&s.validPositions[e]===void 0){let t=g.call(r,e),n=[],i;if(typeof o.placeholder==`string`&&t.length>1+ +(t[t.length-1].match.def===``)){for(let r=0;r<t.length;r++)if(t[r].match.def!==``&&t[r].match.optionality!==!0&&t[r].match.optionalQuantifier!==!0&&(t[r].match.static===!0||i===void 0||t[r].match.fn.test(i.match.def,s,e,!0,o)!==!1)&&(n.push(t[r]),t[r].match.static===!0&&(i=t[r]),n.length>1&&/[0-9a-zA-Z]/.test(n[0].match.def)))return o.placeholder.charAt(e%o.placeholder.length)}}return t.def}return typeof o.placeholder==`object`?t.def:o.placeholder.charAt(e%o.placeholder.length)}function u(e,t,n,r,i){let a=this,o=this.opts,s=this.maskset,c=o.greedy,u=[];i&&o.greedy&&(o.greedy=!1,a.maskset.tests={}),t||=0;let p,m=0,h,_,v;do{if(e===!0&&s.validPositions[m])_=i&&s.validPositions[m].match.optionality&&s.validPositions[m+1]===void 0&&(s.validPositions[m].generatedInput===!0||s.validPositions[m].input==o.skipOptionalPartCharacter&&m>0)?f.call(a,m,g.call(a,m,p,m-1)):s.validPositions[m],h=_.match,p=_.locator.slice(),u.push(n===!0?_.input:n===!1?h.nativeDef:l.call(a,m,h));else{_=d.call(a,m,p,m-1),h=_.match,p=_.locator.slice();let e=r===!0?!1:o.jitMasking===!1?h.jit:o.jitMasking;v=(v||s.validPositions[m-1])&&h.static&&h.def!==o.groupSeparator&&h.fn===null,v||e===!1||e===void 0||typeof e==`number`&&isFinite(e)&&e>m?u.push(n===!1?h.nativeDef:l.call(a,u.length,h)):v=!1}m++}while(h.static!==!0||h.def!==``||t>m);return u[u.length-1]===``&&u.pop(),(n!==!1||s.maskLength===void 0)&&(s.maskLength=m-1),o.greedy=c,u}function d(e,t,n){let r=this;return this.maskset.validPositions[e]||f.call(r,e,g.call(r,e,t&&t.slice(),n))}function f(e,t){let n=this,r=n.opts,i=p(e,t);e=e>0?e-1:0;let a=Math.max(...t.map(e=>e.locator===void 0?0:e.locator.length)),o=s(m.call(n,e),a),c=0,l,u,d;r.greedy&&t.length>1&&t[t.length-1].match.def===``&&(c=1);for(let e=0;e<t.length-c;e++){let n=t[e];l=s(n,a);let c=Number(l)-Number(o);(n.unMatchedAlternationStopped!==!0||t.filter(e=>e.unMatchedAlternationStopped!==!0).length<=1)&&(u===void 0||l!==``&&c<u||d&&!r.greedy&&d.match.optionality&&d.match.optionality-i>0&&d.match.newBlockMarker===`master`&&(!n.match.optionality||n.match.optionality-i<1||!n.match.newBlockMarker)||d&&!r.greedy&&d.match.optionalQuantifier&&!n.match.optionalQuantifier)&&(u=c,d=n)}return d}function p(e,t){let n=0,r=!1;return t.forEach(e=>{e.match.optionality&&(n!==0&&n!==e.match.optionality&&(r=!0),(n===0||n>e.match.optionality)&&(n=e.match.optionality))}),n&&(e==0||t.length==1?n=0:r||(n=0)),n}function m(e,t){let n=this,r=this.maskset;return r.validPositions[e]?r.validPositions[e]:(t||g.call(n,e))[0]}function h(e,t,n){function r(e){let t=[],n=-1,r;for(let i=0,a=e.length;i<a;i++)if(e.charAt(i)===`-`)for(r=e.charCodeAt(i+1);++n<r;)t.push(String.fromCharCode(n));else n=e.charCodeAt(i),t.push(e.charAt(i));return t.join(``)}return e.match.def===t.match.nativeDef?!0:(n.regex||e.match.fn instanceof RegExp&&t.match.fn instanceof RegExp)&&e.match.static!==!0&&t.match.static!==!0?t.match.fn.source===`.`||r(t.match.fn.source.replace(/[[\]/]/g,``)).indexOf(r(e.match.fn.source.replace(/[[\]/]/g,``)))!==-1:!1}function g(e,t,n){let i=this,a=this.dependencyLib,o=this.maskset,s=this.opts,c=this.el,l=o.maskToken,u=t?n:0,d=t?t.slice():[0],p=[],m=!1,g=!1,_,v=t?t.join(``):``,y=!1;function b(t,n,a,l){function d(a,l,f){function C(e,t){let n=t.matches.indexOf(e)===0;return n||t.matches.every(function(r,i){return r.isQuantifier===!0?n=C(e,t.matches[i-1]):Object.prototype.hasOwnProperty.call(r,`matches`)&&(n=C(e,r)),n?(t.matches[i+1]&&t.matches[i+1].isQuantifier&&(n=i===0),!1):!0}),n}function w(e,t,n){let r,i,a,s,c=`${t}:${n}`;if((o.tests[e]||o.validPositions[e])&&(o.validPositions[e]?[o.validPositions[e]]:o.tests[e]).every(function(e,o){return e.mloc[c]?(r=e,!1):(Object.values(e.mloc).filter(e=>e[n]==t).every(t=>{let n=t.join(``).split(`:`)[0];for(a||=n;n.length<a.length;)n+=`0`;let o=Number(n);return(r===void 0||o<i)&&(i=o,r=e,s=Object.entries(e.mloc).find(e=>e[1].toString()===t.toString())[0]),!0}),!0)}),r){n===void 0&&(c=`${t}:${r.alternation}`);let e=`${r.locator[r.alternation]}:${r.alternation}`,i=r.mloc[s||c]||r.mloc[e]||r.locator;i[i.length-1].toString().indexOf(`:`)!==-1&&i.pop();let a=parseInt(r.alternation)+1;return i.slice(a)}else return n===void 0?void 0:w(e,t)}function T(t,n){return t.match.static===!0&&n.match.static!==!0&&n.match.fn.test(t.match.def,o,e,!1,s,!1)}function E(e,t){function n(n){e.mloc=e.mloc||{};let r=e.locator[n];if(r===void 0)e.alternation=void 0;else{if(t===void 0)typeof r==`string`&&(r=r.split(`,`)[0]),r=`${r}:${n}`,e.mloc[r]===void 0&&(e.mloc[r]=e.locator.slice(),e.mloc[r].push(`:${n}`));else{let n=0;for(let r in t.mloc)if(e.mloc[r]===void 0)e.mloc[r]=t.mloc[r];else do if(e.mloc[r+n]===void 0){e.mloc[r+n]=t.mloc[r];break}while(e.mloc[r+n++]!==void 0);e.locator=S(u,[e,t])}return e.alternation>n&&(e.alternation=n),!0}return!1}let r=e.alternation,i=t===void 0||r<=t.alternation&&e.locator[r].toString().indexOf(t.locator[r])===-1;if(!i&&r>t.alternation){for(let n=0;n<r;n++)if(e.locator[n]!==t.locator[n]){r=n,i=!0;break}}return i?n(r):!1}function D(){if(a=d(t.matches[t.matches.indexOf(a)+1],l,f),a)return!0}function O(){let t=a,r=p.length;if(a=b(a,n,l,f),p.length>0)if(p.forEach(function(e,t){t>=r&&(e.match.optionality=e.match.optionality?e.match.optionality+1:1)}),_=p[p.length-1].match,f===void 0&&C(_,t))m=!0,u=e;else return a}function k(){function r(e){let t=0;for(let n=0;n<e.length;n++){let r=e[n];r.isQuantifier&&!isNaN(r.quantifier.max)?t+=r.quantifier.max:t++}return t}function _(e){let t=e.matches[0].matches?r(e.matches[0].matches):1,n;for(let i=0;i<e.matches.length&&(n=e.matches[i].matches?r(e.matches[i].matches):1,t===n);i++);return t!==n}i.hasAlternator=!0;let v=a,b=[],x=p.slice(),S=l.length,C=n.length>0?n.shift():-1,D;if(C===-1||typeof C==`string`){let t=u,r=n.slice(),i=[],O;if(typeof C==`string`)i=C.split(`,`);else for(O=0;O<v.matches.length;O++)i.push(O.toString());if(o.excludes[e]!==void 0){let t=i.slice();for(let t=0,n=o.excludes[e].length;t<n;t++){let n=o.excludes[e][t].toString().split(`:`);l.length==n[1]&&i.splice(i.indexOf(n[0]),1)}i.length===0&&(delete o.excludes[e],i=t)}(s.keepStatic===!0||isFinite(parseInt(s.keepStatic))&&t>=s.keepStatic)&&(i=i.slice(0,1));for(let e=0;e<i.length;e++){O=parseInt(i[e]),p=[],n=typeof C==`string`&&w(u,O,S)||r.slice();let o=v.matches[O];if(o&&d(o,[O].concat(l),f))a=!0;else if(y=_(v),o&&o.matches&&o.matches.length>v.matches[0].matches.length)break;D=p.slice(),u=t,p=[];for(let e=0;e<D.length;e++){let n=D[e],r=!1;n.alternation=n.alternation||S,E(n);for(let e=0;e<b.length;e++){let i=b[e];if(typeof C!=`string`||n.alternation!==void 0&&C.indexOf(n.locator[n.alternation].toString())!==-1){if(n.match.nativeDef===i.match.nativeDef){r=!0,E(i,n);break}else if(h(n,i,s)){E(n,i)&&(r=!0,b.splice(b.indexOf(i),0,n));break}else if(h(i,n,s)){E(i,n);break}else if(T(n,i)){E(n,i)&&(r=!0,b.splice(b.indexOf(i),0,n));break}else if(T(i,n)){E(i,n),i.match.optionality&&c.inputmask.userOptions.keepStatic===void 0&&(s.keepStatic=t);break}}}r||b.push(n)}}p=x.concat(b),u=e,m||=p.length>0&&y,!y&&m&&(g=!0),a=b.length>0&&!y,y&&m&&!a&&p.forEach(function(e,t){e.unMatchedAlternationStopped=!0}),n=r.slice()}else a=d(v.matches[C]||t.matches[C],[C].concat(l),f);if(a)return!0}function A(){let r=a,i=!1;for(let c=n.length>0?n.shift():0;c<(isNaN(r.quantifier.max)?c+1:r.quantifier.max)&&u<=e;c++){let n=t.matches[t.matches.indexOf(r)-1];if(a=d(n,[c].concat(l),n),a){if(p.forEach(function(t,l){_=x(n,t.match)?t.match:p[p.length-1].match,_.optionalQuantifier=c>=r.quantifier.min,_.jit=(c+1)*(n.matches.indexOf(_)+1)>r.quantifier.jit,(_.optionalQuantifier||_.optionality)&&C(_,n)&&(m=!0,u=e,s.greedy&&o.validPositions[e-1]==null&&c>r.quantifier.min&&[`*`,`+`].indexOf(r.quantifier.max)!=-1&&(p.pop(),v=void 0),i=!0,a=!1),!i&&_.jit&&(o.jitOffset[e]=n.matches.length-n.matches.indexOf(_))}),i)break;return!0}}}if(u>e+s._maxTestPos)throw Error(`Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. ${o.mask}`);if(u===e&&a.matches===void 0)if(p.push({match:a,locator:l.reverse(),cd:v,mloc:{}}),a.optionality&&f===void 0&&(s.definitions&&s.definitions[a.nativeDef]&&s.definitions[a.nativeDef].optional||r.default.prototype.definitions[a.nativeDef]&&r.default.prototype.definitions[a.nativeDef].optional))m=!0,u=e;else return!0;else if(a.matches!==void 0){if(a.isGroup&&f!==a)return D();if(a.isOptional)return O();if(a.isAlternator)return k();if(a.isQuantifier&&f!==t.matches[t.matches.indexOf(a)-1])return A();if(a=b(a,n,l,f),a)return!0}else u++}for(let r=n.length>0?n.shift():0;r<t.matches.length;r++)if(t.matches[r].isQuantifier!==!0){let n=d(t.matches[r],[r].concat(a),l);if(n&&u===e)return n;if(u>e)break}}function x(e,t){let n=e.matches.indexOf(t)!=-1;return n||e.matches.forEach((e,r)=>{e.matches!==void 0&&!n&&(n=x(e,t))}),n}function S(e,t){let n=[];return Array.isArray(t)||(t=[t]),t.length>0&&(t[0].alternation===void 0||s.keepStatic===!0||isFinite(parseInt(s.keepStatic))&&e>=s.keepStatic?(n=f.call(i,e,t.slice()).locator.slice(),n.length===0&&(n=t[0].locator.slice())):t.forEach(e=>{Object.values(e.mloc).forEach(e=>{e.forEach((e,t)=>{let r=n[t];e.toString().includes(`:`)||r&&r.toString().includes(`:`)||(r===void 0?n[t]=e:r.toString().includes(e)||(n[t]=n[t]+`,`+e))})})})),n}if(e>-1){if(t===void 0){let t=e-1,n;for(;(n=o.validPositions[t]||o.tests[t])===void 0&&t>-1;)t--;n!==void 0&&t>-1&&(d=S(t,n),v=d.join(``),u=t)}if(o.tests[e]&&o.tests[e][0].cd===v)return o.tests[e];for(let t=d.shift();t<l.length&&!(b(l[t],d,[t])&&u===e||u>e);t++);}(p.length===0||m)&&p.push({match:{fn:null,static:!0,optionality:!1,casing:null,def:``,placeholder:``},locator:y&&p.filter(e=>e.unMatchedAlternationStopped!==!0).length===0||g&&p.length>0&&p.filter(e=>!e.match.static).every(e=>e.match.optionalQuantifier)?[0]:[],mloc:{},cd:v});let C;return t!==void 0&&o.tests[e]?C=a.extend(!0,[],p):(o.tests[e]=a.extend(!0,[],p),C=o.tests[e]),p.forEach(e=>{e.match.optionality=e.match.defOptionality||!1}),C}}),(function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.mask=l;var r=n(17),i=n(18),a=n(15),o=n(16),s=n(20),c=n(21);function l(){let e=this,t=this.opts,n=this.el,l=this.dependencyLib;function u(t,n){function r(t){let r,i;function c(t){if(l.valHooks&&(l.valHooks[t]===void 0||l.valHooks[t].inputmaskpatch!==!0)){let r=l.valHooks[t]&&l.valHooks[t].get?l.valHooks[t].get:function(e){return e.value},i=l.valHooks[t]&&l.valHooks[t].set?l.valHooks[t].set:function(e,t){return e.value=t,e};l.valHooks[t]={get:function(t){if(t.inputmask){if(t.inputmask.opts.autoUnmask)return t.inputmask.unmaskedvalue();{let i=r(t);return s.getLastValidPosition.call(e,void 0,void 0,t.inputmask.maskset.validPositions)!==-1||n.nullable!==!0?i:``}}else return r(t)},set:function(e,t){let n=i(e,t);return e.inputmask&&(0,o.applyInputValue)(e,t),n},inputmaskpatch:!0}}}function u(){return this.inputmask?this.inputmask.opts.autoUnmask?this.inputmask.unmaskedvalue():s.getLastValidPosition.call(e)!==-1||n.nullable!==!0?this.getRootNode().activeElement===this&&n.clearMaskOnLostFocus?(e.isRTL?o.clearOptionalTail.call(e,s.getBuffer.call(e).slice()).reverse():o.clearOptionalTail.call(e,s.getBuffer.call(e).slice())).join(``):r.call(this):``:r.call(this)}function d(e){i.call(this,e),this.inputmask&&(0,o.applyInputValue)(this,e)}function f(e){a.EventRuler.on(e,`mouseenter`,function(){let e=this,t=e.inputmask._valueGet(!0);t!=(e.inputmask.isRTL?s.getBuffer.call(e.inputmask).slice().reverse():s.getBuffer.call(e.inputmask)).join(``)&&(0,o.applyInputValue)(e,t)})}if(!t.inputmask.__valueGet){if(n.noValuePatching!==!0){if(Object.getOwnPropertyDescriptor){let e=Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t),`value`):void 0;e&&e.get&&e.set?(r=e.get,i=e.set,Object.defineProperty(t,"value",{get:u,set:d,configurable:!0})):t.tagName.toLowerCase()!==`input`&&(r=function(){return this.textContent},i=function(e){this.textContent=e},Object.defineProperty(t,"value",{get:u,set:d,configurable:!0}))}else document.__lookupGetter__&&t.__lookupGetter__(`value`)&&(r=t.__lookupGetter__(`value`),i=t.__lookupSetter__(`value`),t.__defineGetter__(`value`,u),t.__defineSetter__(`value`,d));t.inputmask.__valueGet=r,t.inputmask.__valueSet=i}t.inputmask._valueGet=function(t){return e.isRTL&&t!==!0?r.call(this.el).split(``).reverse().join(``):r.call(this.el)},t.inputmask._valueSet=function(t,n){i.call(this.el,t==null?``:n!==!0&&e.isRTL?t.split(``).reverse().join(``):t)},r===void 0&&(r=function(){return this.value},i=function(e){this.value=e},c(t.type),f(t))}}let i=t.getAttribute(`type`),c=t.tagName.toLowerCase()===`input`&&n.supportsInputType.includes(i)||t.isContentEditable||t.tagName.toLowerCase()===`textarea`;if(!c)if(t.tagName.toLowerCase()===`input`){let e=document.createElement(`input`);e.setAttribute(`type`,i),c=e.type===`text`,e=null}else c=`partial`;return c===!1?t.inputmask=void 0:r(t),c}a.EventRuler.off(n);let d=u(n,t);if(d!==!1){e.originalPlaceholder=n.placeholder,e.maxLength=n===void 0?void 0:n.maxLength,e.maxLength===-1&&(e.maxLength=void 0),`inputMode`in n&&n.getAttribute(`inputmode`)===null&&(n.inputMode=t.inputmode,n.setAttribute(`inputmode`,t.inputmode)),d===!0&&(t.showMaskOnFocus=t.showMaskOnFocus&&[`cc-number`,`cc-exp`].indexOf(n.autocomplete)===-1,r.iphone&&(t.insertModeVisual=!1,n.setAttribute(`autocorrect`,`off`)),a.EventRuler.on(n,`submit`,i.EventHandlers.submitEvent),a.EventRuler.on(n,`reset`,i.EventHandlers.resetEvent),a.EventRuler.on(n,`blur`,i.EventHandlers.blurEvent),a.EventRuler.on(n,`focus`,i.EventHandlers.focusEvent),a.EventRuler.on(n,`invalid`,i.EventHandlers.invalidEvent),a.EventRuler.on(n,`click`,i.EventHandlers.clickEvent),a.EventRuler.on(n,`mouseleave`,i.EventHandlers.mouseleaveEvent),a.EventRuler.on(n,`mouseenter`,i.EventHandlers.mouseenterEvent),a.EventRuler.on(n,`paste`,i.EventHandlers.pasteEvent),a.EventRuler.on(n,`cut`,i.EventHandlers.cutEvent),a.EventRuler.on(n,`complete`,t.oncomplete),a.EventRuler.on(n,`incomplete`,t.onincomplete),a.EventRuler.on(n,`cleared`,t.oncleared),t.inputEventOnly!==!0&&a.EventRuler.on(n,`keydown`,i.EventHandlers.keyEvent),(r.mobile||t.inputEventOnly)&&n.removeAttribute(`maxLength`),a.EventRuler.on(n,`input`,i.EventHandlers.inputFallBackEvent)),a.EventRuler.on(n,`setvalue`,i.EventHandlers.setValueEvent),e.applyMaskHook===void 0||e.applyMaskHook(),s.getBufferTemplate.call(e).join(``),e.undoValue=e._valueGet(!0);let l=n.getRootNode().activeElement;if(n.inputmask._valueGet(!0)!==``||t.clearMaskOnLostFocus===!1||l===n){(0,o.applyInputValue)(n,n.inputmask._valueGet(!0));let r=s.getBuffer.call(e).slice();c.isComplete.call(e,r)===!1&&t.clearIncomplete&&s.resetMaskSet.call(e,!1),t.clearMaskOnLostFocus&&l!==n&&(s.getLastValidPosition.call(e)===-1?r=[]:o.clearOptionalTail.call(e,r)),(t.clearMaskOnLostFocus===!1||t.showMaskOnFocus&&l===n||n.inputmask._valueGet(!0)!==``)&&(0,o.writeBuffer)(n,r),l===n?s.caret.call(e,n,s.seekNext.call(e,s.getLastValidPosition.call(e))):s.caret.call(e,n,0)}}}}),(function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.analyseMask=l,t.generateMaskSet=c;var r=s(n(10)),i=n(25),a=s(n(7)),o=s(n(26));function s(e){return e&&e.__esModule?e:{default:e}}function c(e,t){let n;function o(e,{repeat:t,groupmarker:n,quantifiermarker:r,keepStatic:a}){if(t>0||t===`*`||t===`+`){let i=t===`*`?0:t===`+`?1:t;if(i!==t)e=n[0]+e+n[1]+r[0]+i+`,`+t+r[1];else{let t=e;for(let n=1;n<i;n++)e+=t}}if(a===!0){let t=e.match(RegExp(`(.)\\[([^\\]]*)\\]`,`g`));t&&t.forEach((t,n)=>{let[r,a]=t.split(`[`);a=a.replace(`]`,``),e=e.replace(RegExp(`${(0,i.escapeRegex)(r)}\\[${(0,i.escapeRegex)(a)}\\]`),r.charAt(0)===a.charAt(0)?`(${r}|${r}${a})`:`${r}[${a}]`)})}return e}function s(e,n,i){let s=!1;(e===null||e===``)&&(s=i.regex!==null,s?(e=i.regex,e=e.replace(/^(\^)(.*)(\$)$/,`$2`)):(s=!0,e=`.*`)),e.length===1&&i.greedy===!1&&i.repeat!==0&&(i.placeholder=``),e=o(e,i);let c,l;return l=s?`regex_`+i.regex:i.numericInput?e.split(``).reverse().join(``):e,i.keepStatic!==null&&(l=`ks_`+i.keepStatic+l),typeof i.placeholder==`object`&&(l=`ph_`+JSON.stringify(i.placeholder)+l),a.default.prototype.masksCache[l]===void 0||t===!0?(c={mask:e,maskToken:a.default.prototype.analyseMask(e,s,i),validPositions:[],_buffer:void 0,buffer:void 0,tests:{},excludes:{},metadata:n,maskLength:void 0,jitOffset:{}},t!==!0&&(a.default.prototype.masksCache[l]=c,c=r.default.extend(!0,{},a.default.prototype.masksCache[l]))):c=r.default.extend(!0,{},a.default.prototype.masksCache[l]),c}if(typeof e.mask==`function`&&(e.mask=e.mask(e)),Array.isArray(e.mask))if(e.mask.length>1){e.keepStatic===null&&(e.keepStatic=!0);let t=e.groupmarker[0];return(e.isRTL?e.mask.reverse():e.mask).forEach(function(n){t.length>1&&(t+=e.alternatormarker),n.mask!==void 0&&typeof n.mask!=`function`?t+=n.mask:t+=n}),t+=e.groupmarker[1],s(t,e.mask,e)}else e.mask=e.mask.pop();return n=e.mask&&e.mask.mask!==void 0&&typeof e.mask.mask!=`function`?s(e.mask.mask,e.mask,e):s(e.mask,e.mask,e),e.keepStatic===null&&(e.keepStatic=!1),n}function l(e,t,n){let r=/(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g,i=/\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,s=new o.default,c=[],l=[],u=!1,d,f,p,m,h,g,_=!1;function v(e,r,i){i=i===void 0?e.matches.length:i;let o=e.matches[i-1],c=n.casing?`i`:``;if(t)r.indexOf(`[`)===0||u&&/\\d|\\s|\\w|\\p/i.test(r)||r===`.`?(/\\p\{.*}/i.test(r)&&(c+=`u`),e.matches.splice(i++,0,{fn:new RegExp(r,c),static:!1,optionality:!1,newBlockMarker:o===void 0?`master`:o.def!==r,casing:null,def:r,placeholder:typeof n.placeholder==`object`?n.placeholder[s.matches.length]:void 0,nativeDef:r})):(u&&(r=r[r.length-1]),r.split(``).forEach(function(t,r){o=e.matches[i-1],e.matches.splice(i++,0,{fn:/[a-z]/i.test(n.staticDefinitionSymbol||t)?RegExp(`[`+(n.staticDefinitionSymbol||t)+`]`,c):null,static:!0,optionality:!1,newBlockMarker:o===void 0?`master`:o.def!==t&&o.static!==!0,casing:null,def:n.staticDefinitionSymbol||t,placeholder:n.staticDefinitionSymbol===void 0?typeof n.placeholder==`object`?n.placeholder[s.matches.length]:void 0:t,nativeDef:(u?`'`:``)+t})})),u=!1;else{let t=n.definitions&&n.definitions[r]||n.usePrototypeDefinitions&&a.default.prototype.definitions[r];t&&!u?(typeof t.validator==`string`&&/\\p\{.*}/i.test(t.validator)&&(c+=`u`),e.matches.splice(i++,0,{fn:t.validator?typeof t.validator==`string`?new RegExp(t.validator,c):new function(){this.test=t.validator}:/./,static:t.static||!1,optionality:t.optional||!1,defOptionality:t.optional||!1,newBlockMarker:o===void 0||t.optional?`master`:o.def!==(t.definitionSymbol||r),casing:t.casing,def:t.definitionSymbol||r,placeholder:t.placeholder,nativeDef:r,generated:t.generated})):(e.matches.splice(i++,0,{fn:/[a-z]/i.test(n.staticDefinitionSymbol||r)?RegExp(`[`+(n.staticDefinitionSymbol||r)+`]`,c):null,static:!0,optionality:!1,newBlockMarker:o===void 0?`master`:o.def!==r&&o.static!==!0,casing:null,def:n.staticDefinitionSymbol||r,placeholder:n.staticDefinitionSymbol===void 0?void 0:r,nativeDef:(u?`'`:``)+r}),u=!1)}}function y(e){e&&e.matches&&e.matches.forEach(function(r,i){let a=e.matches[i+1];(a===void 0||a.matches===void 0||a.isQuantifier===!1)&&r&&r.isGroup&&(r.isGroup=!1,t||(v(r,n.groupmarker[0],0),r.openGroup!==!0&&v(r,n.groupmarker[1]))),y(r)})}function b(){if(c.length>0){if(m=c[c.length-1],v(m,f),m.isAlternator){h=c.pop();for(let e=0;e<h.matches.length;e++)h.matches[e].isGroup&&(h.matches[e].isGroup=!1);c.length>0?(m=c[c.length-1],m.matches.push(h)):s.matches.push(h)}}else v(s,f)}function x(e){function t(e){return e===n.optionalmarker[0]?e=n.optionalmarker[1]:e===n.optionalmarker[1]?e=n.optionalmarker[0]:e===n.groupmarker[0]?e=n.groupmarker[1]:e===n.groupmarker[1]&&(e=n.groupmarker[0]),e}e.matches=e.matches.reverse();for(let n in e.matches)if(Object.prototype.hasOwnProperty.call(e.matches,n)){let r=parseInt(n);if(e.matches[n].isQuantifier&&e.matches[r+1]&&e.matches[r+1].isGroup){let t=e.matches[n];e.matches.splice(n,1),e.matches.splice(r+1,0,t)}e.matches[n].matches===void 0?e.matches[n]=t(e.matches[n]):e.matches[n]=x(e.matches[n])}return e}function S(e){let t=new o.default(!0);return t.openGroup=!1,t.matches=e,t}function C(){if(p=c.pop(),p.openGroup=!1,p!==void 0)if(c.length>0){if(m=c[c.length-1],m.matches.push(p),m.isAlternator){h=c.pop();for(let e=0;e<h.matches.length;e++)h.matches[e].isGroup=!1,h.matches[e].alternatorGroup=!1;c.length>0?(m=c[c.length-1],m.matches.push(h)):s.matches.push(h)}}else s.matches.push(p);else b()}function w(e){let t=e.pop();return t.isQuantifier&&(t=S([e.pop(),t])),t}for(t&&(n.optionalmarker[0]=void 0,n.optionalmarker[1]=void 0);d=t?i.exec(e):r.exec(e);){if(f=d[0],t){switch(f.charAt(0)){case`?`:f=`{0,1}`;break;case`+`:case`*`:f=`{`+f+`}`;break;case`|`:if(c.length===0){let e=S(s.matches);e.openGroup=!0,c.push(e),s.matches=[],_=!0}break}switch(f){case`\\d`:f=`[0-9]`;break;case`\\p`:f+=i.exec(e)[0],f+=i.exec(e)[0];break;case`(?:`:case`(?=`:case`(?!`:case`(?<=`:case`(?<!`:break}}if(u){b();continue}switch(f.charAt(0)){case`$`:case`^`:t||b();break;case n.escapeChar:u=!0,t&&b();break;case n.optionalmarker[1]:case n.groupmarker[1]:C();break;case n.optionalmarker[0]:c.push(new o.default(!1,!0));break;case n.groupmarker[0]:c.push(new o.default(!0));break;case n.quantifiermarker[0]:{let e=new o.default(!1,!1,!0);f=f.replace(/[{}?]/g,``);let t=f.split(`|`),n=t[0].split(`,`),r=isNaN(n[0])?n[0]:parseInt(n[0]),i=n.length===1?r:isNaN(n[1])?n[1]:parseInt(n[1]),a=isNaN(t[1])?t[1]:parseInt(t[1]);(r===`*`||r===`+`)&&(r=i===`*`?0:1),e.quantifier={min:r,max:i,jit:a};let l=c.length>0?c[c.length-1].matches:s.matches;d=l.pop(),d.isGroup||(d=S([d])),l.push(d),l.push(e)}break;case n.alternatormarker:if(c.length>0){m=c[c.length-1];let e=m.matches[m.matches.length-1];g=m.openGroup&&(e.matches===void 0||e.isGroup===!1&&e.isAlternator===!1)?c.pop():w(m.matches)}else g=w(s.matches);if(g.isAlternator)c.push(g);else if(g.alternatorGroup?(h=c.pop(),g.alternatorGroup=!1):h=new o.default(!1,!1,!1,!0),h.matches.push(g),c.push(h),g.openGroup){g.openGroup=!1;let e=new o.default(!0);e.alternatorGroup=!0,c.push(e)}break;default:b()}}for(_&&C();c.length>0;)p=c.pop(),s.matches.push(p);return s.matches.length>0&&(y(s),l.push(s)),(n.numericInput||n.isRTL)&&x(l[0]),l}}),(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.escapeRegex=r;let n=RegExp(`(\\`+[`/`,`.`,`*`,`+`,`?`,`|`,`(`,`)`,`[`,`]`,`{`,`}`,`\\`,`$`,`^`].join(`|\\`)+`)`,`gim`);function r(e){return e.replace(n,`\\$1`)}}),(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;function n(e,t,n,r){this.matches=[],this.openGroup=e||!1,this.alternatorGroup=!1,this.isGroup=e||!1,this.isOptional=t||!1,this.isQuantifier=n||!1,this.isAlternator=r||!1,this.quantifier={min:1,max:1}}}),(function(e,t,n){var r=n(25),i=c(n(7)),a=n(19),o=n(20),s=n(22);n(28);function c(e){return e&&e.__esModule?e:{default:e}}let l=i.default.dependencyLib;class u{constructor(e,t,n,r){this.mask=e,this.format=t,this.opts=n,this.inputmask=r,this._date=new Date(1,0,1),this.initDateObject(e,this.opts,this.inputmask)}get date(){return this._date===void 0&&(this._date=new Date(1,0,1),this.initDateObject(void 0,this.opts,this.inputmask)),this._date}initDateObject(e,t,n){let r,i=-1;for(x(t).lastIndex=0;r=x(t).exec(this.format);)if(r.index>=i){let a=/\d+$/.exec(r[0]),o=a?r[0][0]+`x`:r[0],c;if(e!==void 0){if(a){let i=x(t).lastIndex,a=k.call(n,r.index,t,n&&n.maskset);x(t).lastIndex=i,c=e.slice(0,e.indexOf(a.nextMatch[0]))}else{let a=r[0][0],l=r.index;for(;n&&(t.placeholder[`${r.index}'${s.getTest.call(n,l).match.placeholder}`]||s.getTest.call(n,l).match.placeholder)===a;)l++;i=l;let u=l-r.index;c=e.slice(0,u||b(o)&&b(o)[4]||o.length)}e=e.slice(c.length)}Object.prototype.hasOwnProperty.call(m,o)&&this.setValue(this,c,o,b(o)[2],b(o)[1])}}setValue(e,t,n,r,i){if(t!==void 0)switch(r){case`ampm`:e[r]=t,e[`raw`+r]=t.replace(/\s/g,`_`);break;case`month`:if(n===`MMM`||n===`MMMM`){n===`MMM`?e[r]=E(p.monthNames.slice(0,12).findIndex(e=>t.toLowerCase()===e.toLowerCase())+1,2):e[r]=E(p.monthNames.slice(12,24).findIndex(e=>t.toLowerCase()===e.toLowerCase())+1,2),e[r]=e[r]===`00`?``:e[r].toString(),e[`raw`+r]=e[r];break}default:e[r]=t.replace(/[^0-9]/g,`0`),e[`raw`+r]=t.replace(/\s/g,`_`)}if(i!==void 0){let t=e[r];(r===`day`&&parseInt(t)===29||r===`month`&&parseInt(t)===2)&&parseInt(e.day)===29&&parseInt(e.month)===2&&(e.year===``||e.year===void 0)&&e._date.setFullYear(2012,1,29),r===`day`&&(d=!0,parseInt(t)===0&&(t=1)),r===`month`&&(d=!0),r===`year`&&(d=!0,t.length<b(n)[4]&&(t=E(t,b(n)[4],!0))),(t!==``&&!isNaN(t)||r===`ampm`)&&i.call(e._date,t)}}reset(){this._date=new Date(1,0,1)}reInit(){this._date=void 0,this.date}}let d=!1,f=new Date().getFullYear(),p=i.default.prototype.i18n,m={d:[`[1-9]|[12][0-9]|3[01]`,Date.prototype.setDate,`day`,Date.prototype.getDate],dd:[`0[1-9]|[12][0-9]|3[01]`,Date.prototype.setDate,`day`,function(){return E(Date.prototype.getDate.call(this),2)}],ddd:[``],dddd:[``],M:[`[1-9]|1[012]`,function(e){let t=e?parseInt(e):0;return t>0&&t--,Date.prototype.setMonth.call(this,t)},`month`,function(){return Date.prototype.getMonth.call(this)+1}],MM:[`0[1-9]|1[012]`,function(e){let t=e?parseInt(e):0;return t>0&&t--,Date.prototype.setMonth.call(this,t)},`month`,function(){return E(Date.prototype.getMonth.call(this)+1,2)}],MMM:[p.monthNames.slice(0,12).join(`|`),function(e){let t=p.monthNames.slice(0,12).findIndex(t=>e.toLowerCase()===t.toLowerCase());return t!==-1&&Date.prototype.setMonth.call(this,t)},`month`,function(){return p.monthNames.slice(0,12)[Date.prototype.getMonth.call(this)]}],MMMM:[p.monthNames.slice(12,24).join(`|`),function(e){let t=p.monthNames.slice(12,24).findIndex(t=>e.toLowerCase()===t.toLowerCase());return t!==-1&&Date.prototype.setMonth.call(this,t)},`month`,function(){return p.monthNames.slice(12,24)[Date.prototype.getMonth.call(this)]}],yy:[`[0-9]{2}`,function(e){let t=new Date().getFullYear().toString().slice(0,2);Date.prototype.setFullYear.call(this,`${t}${e}`)},`year`,function(){return E(Date.prototype.getFullYear.call(this),2)},2],yyyy:[`[0-9]{4}`,Date.prototype.setFullYear,`year`,function(){return E(Date.prototype.getFullYear.call(this),4)},4],h:[`[1-9]|1[0-2]`,Date.prototype.setHours,`hours`,Date.prototype.getHours],hh:[`0[1-9]|1[0-2]`,Date.prototype.setHours,`hours`,function(){return E(Date.prototype.getHours.call(this),2)}],hx:[function(e){return`[0-9]{${e}}`},Date.prototype.setHours,`hours`,function(e){return Date.prototype.getHours}],H:[`1?[0-9]|2[0-3]`,Date.prototype.setHours,`hours`,Date.prototype.getHours],HH:[`0[0-9]|1[0-9]|2[0-3]`,Date.prototype.setHours,`hours`,function(){return E(Date.prototype.getHours.call(this),2)}],Hx:[function(e){return`[0-9]{${e}}`},Date.prototype.setHours,`hours`,function(e){return function(){return E(Date.prototype.getHours.call(this),e)}}],m:[`[1-5]?[0-9]`,Date.prototype.setMinutes,`minutes`,Date.prototype.getMinutes],mm:[`0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]`,Date.prototype.setMinutes,`minutes`,function(){return E(Date.prototype.getMinutes.call(this),2)}],s:[`[1-5]?[0-9]`,Date.prototype.setSeconds,`seconds`,Date.prototype.getSeconds],ss:[`0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]`,Date.prototype.setSeconds,`seconds`,function(){return E(Date.prototype.getSeconds.call(this),2)}],l:[`[0-9]{3}`,Date.prototype.setMilliseconds,`milliseconds`,function(){return E(Date.prototype.getMilliseconds.call(this),3)},3],L:[`[0-9]{2}`,Date.prototype.setMilliseconds,`milliseconds`,function(){return E(Date.prototype.getMilliseconds.call(this),2)},2],t:[`[ap]`,_,`ampm`,v,1],tt:[`[ap]m`,_,`ampm`,v,2],T:[`[AP]`,_,`ampm`,v,1],TT:[`[AP]M`,_,`ampm`,v,2],Z:[`.*`,void 0,`Z`,y],o:[``],S:[``]},h={D:`d`,DD:`dd`,DDD:`ddd`,DDDD:`dddd`,mmm:`MMM`,mmmm:`MMMM`,YY:`yy`,YYYY:`yyyy`,sss:`L`},g={isoDate:`yyyy-MM-dd`,isoTime:`HH:mm:ss`,isoDateTime:`yyyy-MM-dd\\THH:mm:ss`,isoUtcDateTime:`UTC:yyyy-MM-dd\\THH:mm:ss\\Z`};function _(e){let t=this.getHours();e.toLowerCase().includes(`p`)?this.setHours(t+12):e.toLowerCase().includes(`a`)&&t>=12&&this.setHours(t-12)}function v(){let e=this.getHours();return e||=12,e>=12?`PM`:`AM`}function y(){let{1:e}=this.toString().match(/\((.+)\)/);return e.includes(` `)&&(e=e.replace(`-`,` `).toUpperCase(),e=e.split(` `).map(([e])=>e).join(``)),e}function b(e){let t=h[e]||e,n=/\d+$/.exec(t);if(n&&n[0]!==void 0){let e=m[t[0]+`x`].slice(``);return e[0]=e[0](n[0]),e[3]=e[3](n[0]),e}else if(m[t])return m[t]}function x(e){if(!e.tokenizer){let t=[],n=[],r=Object.keys(m).concat(Object.keys(h));for(let e of r)if(/\.*x$/.test(e)){let t=e[0]+`\\d+`;n.indexOf(t)===-1&&n.push(t)}else t.indexOf(e[0])===-1&&t.push(e[0]);e.tokenizer=`(`+(n.length>0?n.join(`|`)+`|`:``)+t.join(`+|`)+`+)+?|.`,e.tokenizer=new RegExp(e.tokenizer,`g`)}return e.tokenizer}function S(e,t,n){if(e.year!==e.rawyear){let r=f.toString(),i=e.rawyear.replace(/[^0-9]/g,``),a=r.slice(0,i.length),o=r.slice(i.length);if(i.length===2&&i===a){let i=new Date(f,e.month-1,e.day);e.day==i.getDate()&&(!n.max||n.max.date.getTime()>=i.getTime())&&(e.date.setFullYear(f),e.year=r,t.insert=[{pos:t.pos+1,c:o[0]},{pos:t.pos+2,c:o[1]}])}}return t}function C(e,t,n){let r=this;if(!d)return!0;if(e.rawday===void 0||!isFinite(e.rawday)&&new Date(e.date.getFullYear(),isFinite(e.rawmonth)?e.month:e.date.getMonth()+1,0).getDate()>=e.day||e.day==`29`&&(!isFinite(e.rawyear)||e.rawyear===void 0||e.rawyear===``)||new Date(e.date.getFullYear(),isFinite(e.rawmonth)?e.month:e.date.getMonth()+1,0).getDate()>=e.day)return t;if(e.day==`29`){let e=k.call(r,t.pos,n,r.maskset);if(e.targetMatch&&[`yyyy`,`YYYY`].includes(e.targetMatch[0])&&t.pos-e.targetMatchIndex===2)return t.remove=t.pos+1,t}else if(e.date.getMonth()==2&&e.day==`30`&&t.c!==void 0)return e.day=`03`,e.date.setDate(3),e.date.setMonth(1),t.insert=[{pos:t.pos,c:`0`},{pos:t.pos+1,c:t.c}],t.caret=o.seekNext.call(this,t.pos+1),t;return!1}function w(e,t,n,r,i){if(!t)return t;if(t&&n.min&&!isNaN(n.min.date.getTime())){let i;for(e.reset(),x(n).lastIndex=0;i=x(n).exec(n.inputFormat);){var a;if((a=b(i[0]))&&a[3]){let t=a[1],o=e[a[2]],s=n.min[a[2]],c=n.max?n.max[a[2]]:s+1,l=[],u=!1;for(let t=0;t<s.length;t++)r.validPositions[t+i.index]===void 0&&!u?(t+i.index==0&&o[t]<s[t]?(l[t]=o[t],u=!0):l[t]=s[t],a[2]===`year`&&o.length-1==t&&s!=c&&(l=(parseInt(l.join(``))+1).toString().split(``)),a[2]===`ampm`&&s!=c&&n.min.date.getTime()>e.date.getTime()&&(l[t]=c[t])):(l[t]=o[t],u||=o[t]>s[t]);t.call(e._date,l.join(``))}}t=n.min.date.getTime()<=e.date.getTime(),e.reInit()}return t&&n.max&&(isNaN(n.max.date.getTime())||(t=n.max.date.getTime()>=e.date.getTime())),t}function T(e,t,n){let i=``,a,o,s=0,c=!1,l={};for(x(n).lastIndex=0;a=x(n).exec(e);)if(a[0]===n.escapeChar)c=!0;else{if(t===void 0)if(!c&&(o=b(a[0])))i+=`(`+o[0]+`)`,n.placeholder&&n.placeholder!==``?(l[s]=n.placeholder[a.index%n.placeholder.length],l[`${a.index}'${n.placeholder[a.index%n.placeholder.length]}`]=a[0].charAt(0)):l[s]=a[0].charAt(0);else switch(a[0]){case`[`:i+=`(`;break;case`]`:i+=`)?`;break;default:i+=(0,r.escapeRegex)(a[0]),l[s]=a[0].charAt(0)}else if(!c&&(o=b(a[0])))if(o[3]){let e=o[3];i+=e.call(t.date)}else o[2]&&t[`raw`+o[2]]!==void 0?i+=t[`raw`+o[2]]:i+=a[0];else i+=a[0];s++,c=!1}return t===void 0&&(n.placeholder=l),i}function E(e,t,n){for(e=String(e),t||=2;e.length<t;)e=n?e+`0`:`0`+e;return e}function D(e,t,n){let r=this;if(typeof e==`string`)return new u(e,t,n,r);if(e&&typeof e==`object`&&Object.prototype.hasOwnProperty.call(e,`date`))return e}function O(e,t){return T(t.inputFormat,{date:e},t)}function k(e,t,n){let r=this,i=0,a,o,c=0;for(x(t).lastIndex=0;o=x(t).exec(t.inputFormat);){let l=/\d+$/.exec(o[0]);if(l)c=parseInt(l[0]);else{let e=o[0][0],n=i;for(;r&&(t.placeholder[`${o.index}'${s.getTest.call(r,n).match.placeholder}`]||s.getTest.call(r,n).match.placeholder)===e;)n++;c=n-i,c===0&&(c=o[0].length)}if(i+=c,i>=e+1){let r=``;if(n&&n.tests[e]){let a=Object.keys(t.placeholder).filter(t=>{for(let r=o.index-1;r<i;r++)if(t===`${r}'${n.tests[e][0].match.placeholder}`)return!0;return!1});r=a.length>0?t.placeholder[a[0]]:n.tests[e][0].match.placeholder}if(o[0].indexOf(r)!==-1){a=o,o=x(t).exec(t.inputFormat);break}}}return{targetMatchIndex:i-c,nextMatch:o,targetMatch:a}}i.default.extendAliases({datetime:{mask:function(e){if(e.numericInput=!1,m.S=p.ordinalSuffix.join(`|`),e.inputFormat=g[e.inputFormat]||e.inputFormat,e.repeat&&(e.repeat=parseInt(e.repeat.toString()),e.repeat>0)){let t=``;for(let n=0;n<e.repeat;n++)t+=e.inputFormat;e.inputFormat=t,e.repeat=0}return e.displayFormat=g[e.displayFormat]||e.displayFormat||e.inputFormat,e.outputFormat=g[e.outputFormat]||e.outputFormat||e.inputFormat,e.regex=T(e.inputFormat,void 0,e),e.min=D(e.min,e.inputFormat,e),e.max=D(e.max,e.inputFormat,e),null},placeholder:``,inputFormat:`isoDateTime`,displayFormat:null,outputFormat:null,min:null,max:null,skipOptionalPartCharacter:``,preValidation:function(e,t,n,r,i,a,o,s){let c=this;if(s)return!0;if(isNaN(n)&&e[t]!==n){let r=k.call(c,t,i,a);if(r.nextMatch&&r.nextMatch[0]===n&&r.targetMatch[0].length>1){let n=b(r.targetMatch[0])[0];if(new RegExp(n).test(`0`+e[t-1]))return e[t]=e[t-1],e[t-1]=`0`,{fuzzy:!0,buffer:e,refreshFromBuffer:{start:t-1,end:t+1},pos:t+1}}}return!0},postValidation:function(e,t,n,r,i,a,o,c){let l=this;if(o)return!0;let u,d;if(r===!1&&(u=k.call(l,t+1,i,a),u.targetMatch&&u.targetMatchIndex===t&&u.targetMatch[0].length>1&&b(u.targetMatch[0])!==void 0?d=b(u.targetMatch[0])[0]:(u=k.call(l,t+2,i,a),u.targetMatch&&u.targetMatchIndex===t+1&&u.targetMatch[0].length>1&&b(u.targetMatch[0])!==void 0&&(d=b(u.targetMatch[0]))),d!==void 0&&(t=u.targetMatchIndex,a.validPositions[t+1]!==void 0&&new RegExp(d).test(n+`0`)?(e[t]=n,e[t+1]=`0`,r={pos:t+2,caret:t+1}):new RegExp(d).test(`0`+n)&&(e[t]=`0`,e[t+1]=n,r={pos:t+2})),r===!1))return r;if(r.fuzzy&&(e=r.buffer,t=r.pos),u=k.call(l,t,i,a),u.targetMatch&&u.targetMatch[0]&&b(u.targetMatch[0])!==void 0){let n=b(u.targetMatch[0]);d=n[0];let r=e.slice(u.targetMatchIndex,u.targetMatchIndex+u.targetMatch[0].length);if(new RegExp(d).test(r.join(``))===!1&&u.targetMatch[0].length===2&&a.validPositions[u.targetMatchIndex]&&a.validPositions[u.targetMatchIndex+1]&&(a.validPositions[u.targetMatchIndex+1].input=`0`),n[2]==`year`){let n=s.getMaskTemplate.call(l,!1,1,void 0,!0);for(let r=t+1;r<e.length;r++)e[r]=n[r],a.validPositions.splice(t+1,1)}}let f=r,p=D.call(l,e.join(``),i.inputFormat,i);return f&&!isNaN(p.date.getTime())&&(i.prefillYear&&(f=S(p,f,i)),f=C.call(l,p,f,i),f=w(p,f,i,a,c)),t!==void 0&&f&&r.pos!==t?{buffer:T(i.inputFormat,p,i).split(``),refreshFromBuffer:{start:t,end:r.pos},pos:r.caret===void 0?r.pos:r.caret}:f},onKeyDown:function(e,t,n,r){let i=this;e.ctrlKey&&e.key===a.keys.ArrowRight&&(i.inputmask._valueSet(O(new Date,r)),l(i).trigger(`setvalue`))},onUnMask:function(e,t,n){let r=this;return t&&T(n.outputFormat,D.call(r,e,n.inputFormat,n),n)},casing:`follow`,onBeforeMask:function(e,t){return Object.prototype.toString.call(e)===`[object Date]`&&(e=O(e,t)),e},insertMode:!1,insertModeVisual:!1,shiftPositions:!1,keepStatic:!1,inputmode:`numeric`,prefillYear:!0}})}),(function(e,t,n){var r=i(n(7));function i(e){return e&&e.__esModule?e:{default:e}}r.default.dependencyLib.extend(!0,r.default.prototype.i18n,{dayNames:[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`,`Sun`,`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`,`Sunday`],monthNames:[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`,`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`],ordinalSuffix:[`st`,`nd`,`rd`,`th`]})}),(function(e,t,n){var r=n(25),i=s(n(7)),a=n(19),o=n(20);function s(e){return e&&e.__esModule?e:{default:e}}let c=i.default.dependencyLib;function l(e,t){let n=``;for(let r=0;r<e.length;r++)i.default.prototype.definitions[e.charAt(r)]||t.definitions[e.charAt(r)]||t.optionalmarker[0]===e.charAt(r)||t.optionalmarker[1]===e.charAt(r)||t.quantifiermarker[0]===e.charAt(r)||t.quantifiermarker[1]===e.charAt(r)||t.groupmarker[0]===e.charAt(r)||t.groupmarker[1]===e.charAt(r)||t.alternatormarker===e.charAt(r)?n+=`\\`+e.charAt(r):n+=e.charAt(r);return n}function u(e,t,n,r){if(e.length>0&&t>0&&(!n.digitsOptional||r)){var i=e.indexOf(n.radixPoint),a=!1;n.negationSymbol.back===e[e.length-1]&&(a=!0,e.length--),i===-1&&(e.push(n.radixPoint),i=e.length-1);for(let n=1;n<=t;n++)isFinite(e[i+n])||(e[i+n]=`0`)}return a&&e.push(n.negationSymbol.back),e}function d(e,t){let n=0;e===`+`&&(n=o.seekNext.call(this,t.validPositions.length-1));for(let r in t.tests)if(r=parseInt(r),r>=n){for(let n=0,i=t.tests[r].length;n<i;n++)if((t.validPositions[r]===void 0||e===`-`)&&t.tests[r][n].match.def===e)return r+ +(t.validPositions[r]!==void 0&&e!==`-`)}return n}function f(e,t){let n=-1;for(let r=0,i=t.validPositions.length;r<i;r++){let i=t.validPositions[r];if(i&&i.match.def===e){n=r;break}}return n}function p(e){e.parseMinMaxOptions===void 0&&(e.min!==null&&(e.min=e.min.toString().replace(new RegExp((0,r.escapeRegex)(e.groupSeparator),`g`),``),e.radixPoint===`,`&&(e.min=e.min.replace(e.radixPoint,`.`)),e.min=isFinite(e.min)?parseFloat(e.min):NaN,isNaN(e.min)&&(e.min=Number.MIN_VALUE)),e.max!==null&&(e.max=e.max.toString().replace(new RegExp((0,r.escapeRegex)(e.groupSeparator),`g`),``),e.radixPoint===`,`&&(e.max=e.max.replace(e.radixPoint,`.`)),e.max=isFinite(e.max)?parseFloat(e.max):NaN,isNaN(e.max)&&(e.max=Number.MAX_VALUE)),e.parseMinMaxOptions=`done`)}function m(e){e.repeat=0,e.groupSeparator===e.radixPoint&&e.digits&&e.digits!==`0`&&(e.radixPoint===`.`?e.groupSeparator=`,`:e.radixPoint===`,`?e.groupSeparator=`.`:e.groupSeparator=``),e.groupSeparator===` `&&(e.skipOptionalPartCharacter=void 0),e.placeholder.length>1&&(e.placeholder=e.placeholder.charAt(0)),e.positionCaretOnClick===`radixFocus`&&e.placeholder===``&&(e.positionCaretOnClick=`lvp`);let t=`0`,n=e.radixPoint;e.numericInput===!0&&e.__financeInput===void 0?(t=`1`,e.positionCaretOnClick=e.positionCaretOnClick===`radixFocus`?`lvp`:e.positionCaretOnClick,e.digitsOptional=!1,isNaN(e.digits)&&(e.digits=e.digits.indexOf(`,`)===-1?2:e.digits.split(`,`)[0]),e._radixDance=!1,n=e.radixPoint===`,`?`?`:`!`,e.radixPoint!==``&&e.definitions[n]===void 0&&(e.definitions[n]={},e.definitions[n].validator=`[`+e.radixPoint+`]`,e.definitions[n].placeholder=e.radixPoint,e.definitions[n].static=!0,e.definitions[n].generated=!0)):(e.__financeInput=!1,e.numericInput=!0);let r=`[+]`,i;if(r+=l(e.prefix,e),e.groupSeparator===``?r+=`9{+}`:(e.definitions[e.groupSeparator]===void 0&&(e.definitions[e.groupSeparator]={},e.definitions[e.groupSeparator].validator=`[`+e.groupSeparator+`]`,e.definitions[e.groupSeparator].placeholder=e.groupSeparator,e.definitions[e.groupSeparator].static=!0,e.definitions[e.groupSeparator].generated=!0),r+=e._mask(e)),e.digits!==void 0&&e.digits!==0){let a=e.digits.toString().split(`,`);isFinite(a[0])&&a[1]&&isFinite(a[1])?r+=n+t+`{`+e.digits+`}`:(isNaN(e.digits)||parseInt(e.digits)>0)&&(e.digitsOptional||e.jitMasking?(i=r+n+t+`{0,`+e.digits+`}`,e.keepStatic=!0):r+=n+t+`{`+e.digits+`}`)}else e.inputmode=`numeric`;return r+=l(e.suffix,e),r+=`[-]`,i&&(r=[i+l(e.suffix,e)+`[-]`,r]),e.greedy=!1,p(e),e.radixPoint!==``&&e.substituteRadixPoint&&(e.substitutes[e.radixPoint==`.`?`,`:`.`]=e.radixPoint),r}function h(e,t,n,r,i){return i._radixDance&&i.numericInput&&t!==i.negationSymbol.back&&e<=n&&(n>0||t==i.radixPoint)&&(r.validPositions[e-1]===void 0||r.validPositions[e-1].input!==i.negationSymbol.back)&&--e,e}function g(e,t,n,r,i){let a=t.buffer?t.buffer.indexOf(i.radixPoint):-1,o=(a!==-1||r&&i.jitMasking)&&new RegExp(i.definitions[9].validator).test(e);return!r&&i._radixDance&&a!==-1&&o&&t.validPositions[a]==null?{insert:{pos:a===n?a+1:a,c:i.radixPoint},pos:n}:o}function _(e,t){let n=RegExp(`(^`+(t.negationSymbol.front===``?``:(0,r.escapeRegex)(t.negationSymbol.front)+`?`)+(0,r.escapeRegex)(t.prefix)+`)(.*)(`+(0,r.escapeRegex)(t.suffix)+(t.negationSymbol.back==``?``:(0,r.escapeRegex)(t.negationSymbol.back)+`?`)+`$)`).exec(e.slice().reverse().join(``)),i=n?n[2]:``,a=!1;return i&&(i=i.split(t.radixPoint.charAt(0))[0],a=RegExp(`^[0`+t.groupSeparator+`]*`).exec(i)),a&&(a[0].length>1||a[0].length>0&&a[0].length<i.length)?a:!1}i.default.extendAliases({numeric:{mask:m,_mask:function(e){return`(`+e.groupSeparator+`999){+|1}`},digits:`*`,digitsOptional:!0,enforceDigitsOnBlur:!1,radixPoint:`.`,positionCaretOnClick:`radixFocus`,_radixDance:!0,groupSeparator:``,allowMinus:!0,negationSymbol:{front:`-`,back:``},prefix:``,suffix:``,min:null,max:null,SetMaxOnOverflow:!1,step:1,inputType:`text`,unmaskAsNumber:!1,roundingFN:Math.round,inputmode:`decimal`,shortcuts:{k:`1000`,m:`1000000`},placeholder:`0`,greedy:!1,rightAlign:!0,insertMode:!0,autoUnmask:!1,skipOptionalPartCharacter:``,usePrototypeDefinitions:!1,stripLeadingZeroes:!0,substituteRadixPoint:!0,definitions:{0:{validator:g},1:{validator:g,definitionSymbol:`9`},9:{validator:`[0-9０-９٠-٩۰-۹]`,definitionSymbol:`*`},"+":{validator:function(e,t,n,r,i){return i.allowMinus&&(e===`-`||e===i.negationSymbol.front)}},"-":{validator:function(e,t,n,r,i){return i.allowMinus&&e===i.negationSymbol.back}}},preValidation:function(e,t,n,r,i,a,o,s){let c=this;if(i.__financeInput!==!1&&n===i.radixPoint)return!1;let l=e.indexOf(i.radixPoint),u=t;if(t=h(t,n,l,a,i),n===`-`||n===i.negationSymbol.front){if(i.allowMinus!==!0)return!1;let e=!1,t=f(`+`,a),n=f(`-`,a);return t!==-1&&(e=[t],n!==-1&&e.push(n)),e===!1?{insert:[{pos:d.call(c,`+`,a),c:i.negationSymbol.front,fromIsValid:!0},{pos:d.call(c,`-`,a),c:i.negationSymbol.back,fromIsValid:void 0}],caret:u+i.negationSymbol.back.length}:{remove:e,caret:u-i.negationSymbol.back.length}}if(n===i.groupSeparator)return{caret:u};if(s)return!0;if(l!==-1&&i._radixDance===!0&&r===!1&&n===i.radixPoint&&i.digits!==void 0&&(isNaN(i.digits)||parseInt(i.digits)>0)&&l!==t){let e=d.call(c,i.radixPoint,a);return a.validPositions[e]&&(a.validPositions[e].generatedInput=a.validPositions[e].generated||!1),{caret:i._radixDance&&t===l-1?l+1:l}}if(i.__financeInput===!1)if(r){if(i.digitsOptional)return{rewritePosition:o.end};if(!i.digitsOptional){if(o.begin>l&&o.end<=l)return n===i.radixPoint?{insert:{pos:l+1,c:`0`,fromIsValid:!0},rewritePosition:l}:{rewritePosition:l+1};if(o.begin<l)return{rewritePosition:o.begin-1}}}else{if(!i.showMaskOnHover&&!i.showMaskOnFocus&&!i.digitsOptional&&i.digits>0&&this.__valueGet.call(this.el)===``)return{rewritePosition:l};if(t>=e.length-i.prefix.length&&i.radixPoint!==``){let e=new RegExp(i.definitions[9].validator);if(!a.validPositions.some(t=>t&&!t.generatedInput&&e.test(t.input)))return{rewritePosition:l===-1?0:l}}}return{rewritePosition:t}},postValidation:function(e,t,n,r,i,a,o,s,l){if(r===!1)return r;if(o)return!0;if(i.min!==null||i.max!==null){let t=i.onUnMask(e.slice().reverse().join(``),void 0,c.extend({},i,{unmaskAsNumber:!0}));if(i.min!==null&&t<i.min&&l!==!0&&(t.toString().length>i.min.toString().length||e[0]===i.radixPoint||t<0))return!1;if(i.max!==null&&i.max>=0&&t>i.max)return i.SetMaxOnOverflow?{refreshFromBuffer:!0,buffer:u(i.max.toString().replace(`.`,i.radixPoint).split(``),i.digits,i).reverse()}:!1}return r},onUnMask:function(e,t,n){if(t===``&&n.nullable===!0)return t;let i=e.replace(n.prefix,``);return i=i.replace(n.suffix,``),i=i.replace(new RegExp((0,r.escapeRegex)(n.groupSeparator),`g`),``),n.placeholder.charAt(0)!==``&&(i=i.replace(new RegExp(n.placeholder.charAt(0),`g`),`0`)),n.unmaskAsNumber?(n.radixPoint!==``&&i.indexOf(n.radixPoint)!==-1&&(i=i.replace(r.escapeRegex.call(this,n.radixPoint),`.`)),i=i.replace(RegExp(`^`+(0,r.escapeRegex)(n.negationSymbol.front)),`-`),i=i.replace(RegExp((0,r.escapeRegex)(n.negationSymbol.back)+`$`),``),Number(i)):i},isComplete:function(e,t){let n=(t.numericInput?e.slice().reverse():e).join(``);return n=n.replace(RegExp(`^`+(0,r.escapeRegex)(t.negationSymbol.front)),`-`),n=n.replace(RegExp((0,r.escapeRegex)(t.negationSymbol.back)+`$`),``),n=n.replace(t.prefix,``),n=n.replace(t.suffix,``),n=n.replace(RegExp((0,r.escapeRegex)(t.groupSeparator)+`([0-9]{3})`,`g`),`$1`),t.radixPoint===`,`&&(n=n.replace((0,r.escapeRegex)(t.radixPoint),`.`)),isFinite(n)},onBeforeMask:function(e,t){e??=``;let n=t.radixPoint||`,`;isFinite(t.digits)&&(t.digits=parseInt(t.digits)),(typeof e==`number`||t.inputType===`number`)&&n!==``&&(e=e.toString().replace(`.`,n));let i=e.charAt(0)===`-`||e.charAt(0)===t.negationSymbol.front,a=e.split(n),o=a[0].replace(/[^\-0-9]/g,``),s=a.length>1?a[1].replace(/[^0-9]/g,``):``,c=a.length>1;e=o+(s===``?s:n+s);let l=0;if(n!==``&&(l=t.digitsOptional?t.digits<s.length?t.digits:s.length:t.digits,s!==``||!t.digitsOptional)){let i=10**(l||1);e=e.replace((0,r.escapeRegex)(n),`.`),isNaN(parseFloat(e))||(e=(t.roundingFN(parseFloat(e)*i)/i).toFixed(l)),e=e.toString().replace(`.`,n)}if(t.digits===0&&e.indexOf(n)!==-1&&(e=e.substring(0,e.indexOf(n))),e!==``&&(t.min!==null||t.max!==null)){let r=e.toString().replace(n,`.`);t.min!==null&&r<t.min?e=t.min.toString().replace(`.`,n):t.max!==null&&r>t.max&&(e=t.max.toString().replace(`.`,n))}return i&&e.charAt(0)!==`-`&&(e=`-`+e),u(e.toString().split(``),l,t,c).join(``)},onBeforeWrite:function(e,t,n,i){function a(e,t){if(i.__financeInput!==!1||t){var n=e.indexOf(i.radixPoint);n!==-1&&e.splice(n,1)}if(i.groupSeparator!==``)for(;(n=e.indexOf(i.groupSeparator))!==-1;)e.splice(n,1);return e}let o,s;if(i.stripLeadingZeroes&&(s=_(t,i))){let e=t.join(``).lastIndexOf(s[0].split(``).reverse().join(``))-(s[0]==s.input?0:1),n=+(s[0]==s.input);for(let r=s[0].length-n;r>0;r--)this.maskset.validPositions.splice(e+r,1),delete t[e+r]}if(e)switch(e.type){case`blur`:case`checkval`:if(i.min!==null||i.max!==null){let e=i.onUnMask(t.slice().reverse().join(``),void 0,c.extend({},i,{unmaskAsNumber:!0}));if(i.min!==null&&e<i.min&&t.join()!==``)return{refreshFromBuffer:!0,buffer:u(i.min.toString().replace(`.`,i.radixPoint).split(``),i.digits,i).reverse()};if(i.max!==null&&e>i.max)return{refreshFromBuffer:!0,buffer:u(i.max.toString().replace(`.`,i.radixPoint).split(``),i.digits,i).reverse()}}if(t[t.length-1]===i.negationSymbol.front){let e=RegExp(`(^`+(i.negationSymbol.front==``?``:(0,r.escapeRegex)(i.negationSymbol.front)+`?`)+(0,r.escapeRegex)(i.prefix)+`)(.*)(`+(0,r.escapeRegex)(i.suffix)+(i.negationSymbol.back==``?``:(0,r.escapeRegex)(i.negationSymbol.back)+`?`)+`$)`).exec(a(t.slice(),!0).reverse().join(``));(e?e[2]:``)==0&&(o={refreshFromBuffer:!0,buffer:[0]})}else i.radixPoint!==``&&t.indexOf(i.radixPoint)===i.suffix.length&&(o&&o.buffer?o.buffer.splice(0,1+i.suffix.length):(t.splice(0,1+i.suffix.length),o={refreshFromBuffer:!0,buffer:a(t)}));if(i.enforceDigitsOnBlur){o||={};let e=(o&&o.buffer||t).slice().reverse();o.refreshFromBuffer=!0,o.buffer=u(e,i.digits,i,!0).reverse()}}return o},onKeyDown:function(e,t,n,r){let i=c(this),o;if(e.location!=3){let t,n=e.key;if((t=r.shortcuts&&r.shortcuts[n])&&t.length>1)return this.inputmask.__valueSet.call(this,parseFloat(this.inputmask.unmaskedvalue())*parseInt(t)),i.trigger(`setvalue`),!1}if(e.ctrlKey)switch(e.key){case a.keys.ArrowUp:return this.inputmask.__valueSet.call(this,parseFloat(this.inputmask.unmaskedvalue())+parseInt(r.step)),i.trigger(`setvalue`),!1;case a.keys.ArrowDown:return this.inputmask.__valueSet.call(this,parseFloat(this.inputmask.unmaskedvalue())-parseInt(r.step)),i.trigger(`setvalue`),!1}if(!e.shiftKey&&(e.key===a.keys.Delete||e.key===a.keys.Backspace||e.key===a.keys.BACKSPACE_SAFARI)&&n.begin!==t.length){if(t[e.key===a.keys.Delete?n.begin-1:n.end]===r.negationSymbol.front)return o=t.slice().reverse(),r.negationSymbol.front!==``&&o.shift(),r.negationSymbol.back!==``&&o.pop(),i.trigger(`setvalue`,[o.join(``),n.begin]),!1;if(r._radixDance===!0){let s=t.indexOf(r.radixPoint);if(!r.digitsOptional){if(s!==-1&&(n.begin<s||n.end<s||e.key===a.keys.Delete&&(n.begin===s||n.begin-1===s))){let l;return n.begin===n.end&&(e.key===a.keys.Backspace||e.key===a.keys.BACKSPACE_SAFARI?n.begin++:e.key===a.keys.Delete&&n.begin-1===s&&(l=c.extend({},n),n.begin--,n.end--)),o=t.slice().reverse(),o.splice(o.length-n.begin,n.begin-n.end||1),(e.key===a.keys.Backspace||e.key===a.keys.BACKSPACE_SAFARI)&&o.splice(o.length-n.end+1,0,`0`),o=u(o,r.digits,r).join(``),l&&(n=l),i.trigger(`setvalue`,[o,n.begin>=o.length?s+1:n.begin]),!1}}else if(s===0)return o=t.slice().reverse(),o.pop(),i.trigger(`setvalue`,[o.join(``),n.begin>=o.length?o.length:n.begin]),!1}}}},currency:{prefix:``,groupSeparator:`,`,alias:`numeric`,digits:2,digitsOptional:!1},decimal:{alias:`numeric`},integer:{alias:`numeric`,inputmode:`numeric`,digits:0},percentage:{alias:`numeric`,min:0,max:100,suffix:` %`,digits:0,allowMinus:!1},indianns:{alias:`numeric`,_mask:function(e){return`(`+e.groupSeparator+`99){*|1}(`+e.groupSeparator+`999){1|1}`},groupSeparator:`,`,radixPoint:`.`,placeholder:`0`,digits:2,digitsOptional:!1}})}),(function(e,t,n){var r=a(n(11)),i=a(n(7));function a(e){return e&&e.__esModule?e:{default:e}}let o=r.default.document;if(o&&o.head&&o.head.attachShadow&&r.default.customElements&&r.default.customElements.get(`input-mask`)===void 0){class e extends HTMLElement{constructor(){super();let e=this.getAttributeNames(),t=this.attachShadow({mode:`closed`});this.input=o.createElement(`input`),this.input.type=`text`,t.appendChild(this.input);for(let t in e)Object.prototype.hasOwnProperty.call(e,t)&&this.input.setAttribute(e[t],this.getAttribute(e[t]));let n=new i.default;n.dataAttribute=``,n.mask(this.input)}attributeChangedCallback(e,t,n){this.input.setAttribute(e,n)}get value(){return this.input.value}set value(e){this.input.value=e}}r.default.customElements.define(`input-mask`,e)}})],t={};function n(r){var i=t[r];if(i!==void 0)return i.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}var r={};return(function(){var e=r;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n(1),n(2),n(3),n(4),n(5),n(6),n(27),n(29),n(30);var t=i(n(7));function i(e){return e&&e.__esModule?e:{default:e}}e.default=t.default})(),r})()})}))(),1),sm=om.default.default||om.default;function cm(e,t){let n={minimumFractionDigits:2,maximumFractionDigits:2},r=[[e,{style:`currency`,currency:t}],[e,n],[void 0,n]];for(let[e,t]of r){let n;try{n=new Intl.NumberFormat(e,t)}catch{continue}let r=n.formatToParts(12345.6);return{currency:r.find(({type:e})=>e===`currency`)?.value??``,decimal:r.find(({type:e})=>e===`decimal`)?.value??`.`,group:r.find(({type:e})=>e===`group`)?.value??`,`,decimals:n.resolvedOptions().maximumFractionDigits??2}}return{currency:``,decimal:`.`,group:`,`,decimals:2}}var lm=new WeakMap,um=new WeakSet,dm=new WeakMap,fm=class extends F{static get styles(){return[...super.styles,a`
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
      `]}constructor(){super(),b(this,um),this.currency=`USD`,this.locale=`en-US`,this.showCurrency=!0,this.clearable=!0,this.type=`text`,w(this,lm,void 0),w(this,dm,()=>{this.value=``,C(um,this,pm).call(this)?.inputmask?.setValue(``),C(um,this,pm).call(this)?.focus()}),this.inputMode=`decimal`}connectedCallback(){super.connectedCallback(),this.hasUpdated&&C(um,this,mm).call(this)}willUpdate(e){super.willUpdate(e),(!this.hasUpdated||e.has(`locale`)||e.has(`currency`))&&S(lm,this,cm(this.locale.replaceAll(`_`,`-`),this.currency))}updated(e){super.updated(e),(e.has(`currency`)||e.has(`locale`)||e.has(`decimals`)||e.has(`decimalSeparator`)||e.has(`groupSeparator`)||e.has(`placeholder`))&&C(um,this,mm).call(this),C(um,this,pm).call(this)?.classList.toggle(`money-placeholder`,!C(um,this,hm).call(this))}disconnectedCallback(){C(um,this,pm).call(this)?.inputmask?.remove(),super.disconnectedCallback()}_inputGroupPrefixTemplate(){return this.showCurrency?p`<div class="input-group__prefix">
      <span class="currency"
        >${`(${this.currency}) ${x(lm,this).currency}`}</span
      >
    </div>`:i}_inputGroupInputTemplate(){return p`<div class="input-group__input">
      <slot name="input"></slot>
      <craft-button
        class="clear"
        type="button"
        variant="plain"
        size="small"
        icon
        aria-label=${n(`Clear`)}
        ?hidden=${!this.clearable||this.disabled||!C(um,this,hm).call(this)}
        @mousedown=${e=>e.preventDefault()}
        @click=${x(dm,this)}
      >
        <craft-icon name="xmark-large" style="font-size: 0.8em"></craft-icon>
      </craft-button>
    </div>`}};function pm(){return this._control}function mm(){let e=C(um,this,pm).call(this);if(!e)return;let t=this.value,n=x(lm,this);e.inputmask?.remove(),e.value=t,new sm({alias:`currency`,autoGroup:!1,clearMaskOnLostFocus:!0,digits:this.decimals??n.decimals,digitsOptional:!1,groupSeparator:this.groupSeparator??n.group,placeholder:this.placeholder||`0`,prefix:``,radixPoint:this.decimalSeparator??n.decimal}).mask(e)}function hm(){return this.value!==``}r([c()],fm.prototype,`currency`,void 0),r([c()],fm.prototype,`locale`,void 0),r([c({type:Number})],fm.prototype,`decimals`,void 0),r([c({attribute:`decimal-separator`})],fm.prototype,`decimalSeparator`,void 0),r([c({attribute:`group-separator`})],fm.prototype,`groupSeparator`,void 0),r([c({converter:Np,attribute:`show-currency`})],fm.prototype,`showCurrency`,void 0),r([c({converter:Np})],fm.prototype,`clearable`,void 0),customElements.get(`craft-input-money`)||customElements.define(`craft-input-money`,fm);var gm=new WeakSet,_m=class extends F{static get styles(){return[...super.styles,a`
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
          ${qr}
          --_input-end-end-radius: var(
            --c-input-radius,
            var(--c-radius-sm)
          ) !important;
          --_input-start-end-radius: var(
            --c-input-radius,
            var(--c-radius-sm)
          ) !important;
        }
      `]}constructor(){super(),b(this,gm),this.passwordRules=``,this._visible=!1,this.type=`password`,this.reveal=()=>{this._visible=!this._visible,this.type=this._visible?`text`:`password`},this.renderSuffix=()=>p`<craft-button
      slot="suffix"
      type="button"
      icon
      size="small"
      variant="plain"
      @click="${this.reveal}"
    >
      <span class="icon"
        >${this._visible?p`<craft-icon
              name="eye-slash"
              label="${n(`Hide`)}"
            ></craft-icon>`:p`<craft-icon name="eye" label="${n(`Show`)}"></craft-icon>`}
      </span>
    </craft-button>`,this.type=`password`}connectedCallback(){super.connectedCallback(),C(gm,this,vm).call(this)}updated(e){super.updated(e),e.has(`passwordRules`)&&C(gm,this,vm).call(this)}get slots(){return{...super.slots,suffix:()=>this.renderSuffix()}}};function vm(){if(this.passwordRules){this._control?.setAttribute(`passwordrules`,this.passwordRules);return}this._control?.removeAttribute(`passwordrules`)}r([c({attribute:`passwordrules`})],_m.prototype,`passwordRules`,void 0),r([f()],_m.prototype,`_visible`,void 0),customElements.get(`craft-input-password`)||customElements.define(`craft-input-password`,_m);function ym(e,t){let n=t.left>e.x?t.left:t.right<e.x?t.right:void 0;if(!(n===void 0||t.height<=0))return[e,{x:n,y:t.top},{x:n,y:t.bottom}]}function bm(e,t,n){return(e.x-n.x)*(t.y-n.y)-(t.x-n.x)*(e.y-n.y)}function xm([e,t,n],r){let i=bm(r,e,t),a=bm(r,t,n),o=bm(r,n,e);return!((i<0||a<0||o<0)&&(i>0||a>0||o>0))}var Sm=new WeakMap,Cm=new WeakMap,wm=new WeakMap,Tm=new WeakMap,Em=new WeakMap,Dm=new WeakMap,Om=new WeakSet,km=new WeakMap,Am=class{constructor(e){b(this,Om),w(this,Sm,new Map),w(this,Cm,!1),w(this,wm,void 0),w(this,Tm,void 0),w(this,Em,void 0),w(this,Dm,void 0),w(this,km,e=>{S(Tm,this,{x:e.clientX,y:e.clientY}),x(Em,this)&&C(Om,this,Im).call(this)}),this.options=e}get warm(){return x(Cm,this)}requestOpen(e,{immediate:t=!1}={}){let n=C(Om,this,jm).call(this,e);if(C(Om,this,Lm).call(this),clearTimeout(n.closeTimer),n.closeTimer=void 0,n.exit=void 0,x(Em,this)?.element.contains(e.element)&&S(Em,this,void 0),!t&&C(Om,this,Pm).call(this,e)){S(Em,this,e);return}if(C(Om,this,Mm).call(this,e),!(n.open||!t&&n.openTimer!==void 0)){if(t||x(Cm,this)){clearTimeout(n.openTimer),n.openTimer=void 0,C(Om,this,Rm).call(this,e,n);return}n.openTimer=setTimeout(()=>{n.openTimer=void 0,C(Om,this,Rm).call(this,e,n)},this.options.warmUpDelay)}}requestClose(e){let t=C(Om,this,jm).call(this,e);clearTimeout(t.openTimer),t.openTimer=void 0,x(Em,this)===e&&S(Em,this,void 0),!(!t.open||t.closeTimer!==void 0)&&(t.exit=x(Tm,this)&&{...x(Tm,this),at:Date.now()},C(Om,this,Fm).call(this,e,t))}notifyClosed(e){let t=C(Om,this,jm).call(this,e);clearTimeout(t.openTimer),clearTimeout(t.closeTimer),t.openTimer=void 0,t.closeTimer=void 0,t.open&&(t.open=!1,C(Om,this,Bm).call(this))}remove(e){let t=x(Sm,this).get(e);t&&(clearTimeout(t.openTimer),clearTimeout(t.closeTimer),x(Sm,this).delete(e),x(Em,this)===e&&S(Em,this,void 0),C(Om,this,Bm).call(this))}reset(){for(let[e,t]of x(Sm,this))clearTimeout(t.openTimer),clearTimeout(t.closeTimer),t.open&&e.setOpen(!1);x(Sm,this).clear(),clearTimeout(x(wm,this)),S(wm,this,void 0),S(Cm,this,!1),S(Em,this,void 0),S(Tm,this,void 0),x(Dm,this)?.abort(),S(Dm,this,void 0)}};function jm(e){let t=x(Sm,this).get(e);return t||(t={open:!1},x(Sm,this).set(e,t)),t}function Mm(e){for(let[t,n]of x(Sm,this))t===e||!n.open||t.element.contains(e.element)||(clearTimeout(n.closeTimer),n.closeTimer=void 0,C(Om,this,zm).call(this,t,n))}function Nm(e,t){let{exit:n}=t,r=x(Tm,this);if(!n||!r||Date.now()-n.at>=this.options.graceDelay)return!1;let i=e.overlayRect?.(),a=i&&ym(n,i);return!!a&&xm(a,r)}function Pm(e){for(let[t,n]of x(Sm,this))if(!(t===e||!n.open||t.element.contains(e.element))&&C(Om,this,Nm).call(this,t,n))return!0;return!1}function Fm(e,t){t.closeTimer=setTimeout(()=>{if(t.closeTimer=void 0,C(Om,this,Nm).call(this,e,t)){C(Om,this,Fm).call(this,e,t);return}C(Om,this,zm).call(this,e,t),C(Om,this,Im).call(this)},this.options.closeDelay)}function Im(){let e=x(Em,this);S(Em,this,void 0),e&&this.requestOpen(e)}function Lm(){x(Dm,this)||(S(Dm,this,new AbortController),document.addEventListener(`pointermove`,x(km,this),{capture:!0,passive:!0,signal:x(Dm,this).signal}))}function Rm(e,t){t.open=!0,clearTimeout(x(wm,this)),S(wm,this,void 0),S(Cm,this,!0),e.setOpen(!0)}function zm(e,t){t.open=!1,t.exit=void 0,e.setOpen(!1),C(Om,this,Bm).call(this)}function Bm(){if(!(!x(Cm,this)||x(wm,this)!==void 0)){for(let e of x(Sm,this).values())if(e.open||e.openTimer!==void 0)return;S(wm,this,setTimeout(()=>{S(wm,this,void 0),S(Cm,this,!1)},this.options.coolDownDelay))}}var Vm=new Am({warmUpDelay:250,closeDelay:150,coolDownDelay:500,graceDelay:300}),Hm=new Am({warmUpDelay:500,closeDelay:300,coolDownDelay:500,graceDelay:300}),Um=a`
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
`,Wm=new WeakMap,Gm=new WeakMap,Km=new WeakMap,qm=new WeakSet,Jm=new WeakMap,Ym=new WeakMap,Xm=new WeakMap,Zm=new WeakMap,Qm=new WeakMap,$m=new WeakMap,eh=new WeakMap,th=class extends u{constructor(){super(),b(this,qm),this.label=n(`Link details`),this.anchor=null,this.copyState=D.Idle,this.detailsOpen=!1,w(this,Wm,!1),w(this,Gm,{element:this,setOpen:e=>{e?C(qm,this,ch).call(this):this.detailsPopover?.hide()}}),w(this,Km,new MutationObserver(()=>C(qm,this,nh).call(this))),w(this,Jm,e=>{this.copyState=e.detail.state,e.detail.state===D.Success?this.dispatchEvent(new CustomEvent(`craft-copy`,{bubbles:!0,composed:!0,detail:{value:oh.call(C(qm,this))}})):e.detail.state===D.Error&&this.dispatchEvent(new CustomEvent(`craft-error`,{bubbles:!0,composed:!0}))}),w(this,Ym,e=>{e.target===e.currentTarget&&(this.detailsOpen=e.type===`craft-show`,this.detailsOpen||C(qm,this,lh).call(this))}),w(this,Xm,e=>{e.pointerType!==`touch`&&(x(Wm,this)||!this.detailsOpen&&this.anchor)&&Hm.requestOpen(x(Gm,this))}),w(this,Zm,e=>{e.pointerType!==`touch`&&Hm.requestClose(x(Gm,this))}),w(this,Qm,()=>{x(Wm,this)||Hm.requestClose(x(Gm,this))}),w(this,$m,e=>{if(!x(Wm,this))return;let t=this.detailsPopover?.querySelector(`[slot="invoker"]`),n=!!t&&e.composedPath().includes(t);e.type===`focusin`&&n||(C(qm,this,lh).call(this),e.type===`click`&&n&&e.stopPropagation())}),w(this,eh,e=>{e.key===`Escape`&&x(Wm,this)&&(e.preventDefault(),e.stopPropagation(),this.detailsPopover?.hide())}),this.addEventListener(`pointerenter`,x(Xm,this)),this.addEventListener(`pointerleave`,x(Zm,this)),this.addEventListener(`pointerdown`,x(Qm,this))}connectedCallback(){super.connectedCallback(),x(Km,this).observe(this,{subtree:!0,childList:!0,characterData:!0,attributes:!0,attributeFilter:[`href`,`target`,`rel`]}),C(qm,this,nh).call(this)}disconnectedCallback(){x(Km,this).disconnect(),C(qm,this,lh).call(this),Hm.remove(x(Gm,this)),super.disconnectedCallback()}render(){let e=ah.call(C(qm,this)),t=sh.call(C(qm,this)),r=n(`Open in a new tab`);return p`
      ${this.anchor?p`<craft-popover
            placement="bottom-start"
            @craft-show=${x(Ym,this)}
            @craft-hide=${x(Ym,this)}
            @click=${{handleEvent:x($m,this),capture:!0}}
            @focusin=${x($m,this)}
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
                label=${[this.label,rh.call(C(qm,this))].filter(Boolean).join(` `)}
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
                    .action=${{type:`clipboard`,value:oh.call(C(qm,this))}}
                    @craft-state-change=${x(Jm,this)}
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
                >${oh.call(C(qm,this))}</a
              >
              <span class="details__status" role="status"
                >${this.copyState===D.Idle?``:t.label}</span
              >
            </div>
          </craft-popover>`:i}
      <span class="text" part="text"
        ><slot @slotchange=${()=>C(qm,this,nh).call(this)}></slot
      ></span>
    `}};function nh(){this.anchor=this.querySelector(`a[href]`),this.requestUpdate()}function rh(){return Array.from(this.anchor?.childNodes??[]).filter(e=>!(e instanceof Element&&e.hasAttribute(`data-new-tab-cue`))).map(e=>e.textContent).join(``).replace(/\s+/g,` `).trim()}function ih(){return this.anchor?.protocol??``}function ah(){switch(ih.call(C(qm,this))){case`mailto:`:return{icon:`envelope`,heading:n(`Email`)};case`tel:`:return{icon:`phone`,heading:n(`Phone`)};default:return{icon:`link`,heading:n(`Link`)}}}function oh(){let e=this.anchor?.href??``;return ih.call(C(qm,this))===`mailto:`||ih.call(C(qm,this))===`tel:`?decodeURIComponent(e.slice(ih.call(C(qm,this)).length).split(`?`)[0]??``):e}function sh(){switch(this.copyState){case D.Success:return{icon:`check`,label:n(`Copied`)};case D.Error:return{icon:`xmark-large`,label:n(`Copy failed`)};default:return{icon:`custom-icons/clone-dashed`,label:n(`Copy`)}}}function ch(){S(Wm,this,!0),document.addEventListener(`keydown`,x(eh,this),!0),this.detailsPopover?.show()}function lh(){S(Wm,this,!1),Hm.notifyClosed(x(Gm,this)),document.removeEventListener(`keydown`,x(eh,this),!0)}th.styles=[A,Um],r([c()],th.prototype,`label`,void 0),r([f()],th.prototype,`anchor`,void 0),r([f()],th.prototype,`copyState`,void 0),r([f()],th.prototype,`detailsOpen`,void 0),r([h(`craft-popover`)],th.prototype,`detailsPopover`,void 0),customElements.get(`craft-link`)||customElements.define(`craft-link`,th);var uh=class extends u{constructor(...e){super(...e),this.error=``,this.pluginName=``}render(){return p`
      <p class="error" role="alert">${this.error}</p>
      ${this.pluginName?p`<div class="install-plugin">
            <div class="icon" aria-hidden="true"><slot name="icon"></slot></div>
            <div class="plugin">
              <h3>${this.pluginName}</h3>
              <slot name="action"></slot>
            </div>
          </div>`:i}
    `}};uh.styles=a`
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
  `,r([c()],uh.prototype,`error`,void 0),r([c({attribute:`plugin-name`})],uh.prototype,`pluginName`,void 0),customElements.get(`craft-missing-component`)||customElements.define(`craft-missing-component`,uh);var dh=a`
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
    /* A block, so the trim applies; centers the digits on their cap height
       rather than on a line box that includes descender space. */
    display: block;
    font-size: var(--c-text-xs);
    font-weight: var(--font-weight-semibold);
    line-height: 1;
    ${_i}
  }
`,fh=new WeakMap,ph=class extends u{constructor(...e){super(...e),this.altText=null,this.badgeCount=null,this.badgeCountSuffix=null,this.max=99,this.variant=`primary`,w(this,fh,`badge-label-${Math.floor(Math.random()*1e9).toString()}`)}connectedCallback(){super.connectedCallback(),this.id||=`badge-${Math.floor(Math.random()*1e9).toString()}`}showCount(){return this.badgeCount!==null&&this.badgeCount>0}truncatedNumber(){let e=this.badgeCount??0,t=e=>new Intl.NumberFormat(document.documentElement.lang||void 0).format(e);return e>this.max?`${t(this.max)}+`:t(e)}getBadgeRole(){return this.altText?`img`:i}renderBadgeContents(){return p`
      ${this.showCount()?p`
            <span class="number">${this.truncatedNumber()}</span>
            <sl-visually-hidden>${this.badgeCountSuffix}</sl-visually-hidden>
          `:i}
      ${this.altText?p`
            <sl-visually-hidden id=${x(fh,this)}
              >${this.altText}</sl-visually-hidden
            >
          `:i}
    `}render(){return p`
      <div
        part="badge"
        class="${N({"badge-indicator":!0,"badge-indicator--with-number":this.showCount(),"badge-indicator--secondary":this.variant===`secondary`,"badge-indicator--inverse":this.variant===`inverse`})}"
        role="${this.getBadgeRole()}"
        aria-labelledby="${this.altText?x(fh,this):i}"
      >
        ${this.renderBadgeContents()}
      </div>
    `}};ph.styles=[dh],r([c({attribute:`alt-text`})],ph.prototype,`altText`,void 0),r([c({attribute:`badge-count`})],ph.prototype,`badgeCount`,void 0),r([c({attribute:`badge-count-suffix`})],ph.prototype,`badgeCountSuffix`,void 0),r([c({type:Number})],ph.prototype,`max`,void 0),r([c()],ph.prototype,`variant`,void 0),customElements.get(`craft-badge-indicator`)||customElements.define(`craft-badge-indicator`,ph);var mh=Symbol.for(``),hh=e=>{if(e?.r===mh)return e?._$litStatic$},gh=e=>({_$litStatic$:e,r:mh}),_h=(e,...t)=>({_$litStatic$:t.reduce(((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1]),e[0]),r:mh}),vh=new Map,yh=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],(i=hh(a))!==void 0);)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=vh.get(e))===void 0&&(o.raw=o,vh.set(e,t=o)),n=s}return e(t,...n)})(p),bh=a`
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
    ${_i}

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
    color: var(--c-nav-item-icon-color, inherit);
  }

  /* A selected or hovered row's icon takes the row's own color. */
  :host([active]) .nav-item__prefix,
  .nav-item:not(.nav-item--static):hover .nav-item__prefix {
    color: inherit;
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
     * and keep the icon's, which follows --c-icon-size when that's set.
     */
    craft-button {
      font-size: 1em;
    }

    craft-icon {
      font-size: var(--c-icon-size, 0.8em);
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
`,xh=new WeakMap,Sh=new WeakMap,Ch=new WeakMap,wh=new WeakSet,Th=new WeakMap,Eh=new WeakMap,Dh=new WeakMap,Oh=new WeakMap,kh=new WeakMap,Ah=new WeakMap,jh=class e extends u{get labelNodes(){return Array.from(this.childNodes).filter(e=>e.nodeType===Node.TEXT_NODE||e.nodeType===Node.ELEMENT_NODE&&!e.hasAttribute(`slot`))}get labelText(){return this.labelNodes.map(e=>e.textContent??``).join(` `).replace(/\s+/g,` `).trim()}get hasLabel(){return this.labelNodes.some(e=>e.nodeType!==Node.TEXT_NODE||!!e.textContent?.trim())}get opensInNewTab(){return!!this.href&&(this.external||v(this.href))}get itemId(){return`item-${this.id}`}get subnavId(){return`${this.id}-subnav`}get ariaCurrentState(){return this.current?this.href?`page`:`true`:this.active?`true`:`false`}constructor(){super(),b(this,wh),this.active=!1,this.current=!1,this.button=!1,this.external=!1,this.indicator=!1,this.iconOnly=!1,this.flush=!1,this.initialState=`closed`,this.group=!1,this.togglePosition=`suffix`,this.subnavState=`closed`,this.flyoutOpen=!1,w(this,xh,{element:this,setOpen:e=>{this.flyoutOpen=e},overlayRect:()=>this.shadowRoot?.querySelector(`.flyout`)?.getBoundingClientRect()}),w(this,Sh,void 0),this._lightDom=new M(this,{characterData:!0}),w(this,Ch,void 0),this.fitFlyout=()=>{let t=this.shadowRoot?.querySelector(`craft-popover`),n=this.shadowRoot?.querySelector(`.flyout`);if(!t||!n)return;let{top:r}=n.getBoundingClientRect(),i=window.innerHeight-r-e.flyoutViewportMargin;if(!window.innerHeight||i<=0){t.style.removeProperty(`--popover-max-block-size`);return}t.style.setProperty(`--popover-max-block-size`,`${i}px`)},w(this,Th,()=>{Vm.requestOpen(x(xh,this))}),w(this,Eh,e=>{Xe(e,this)||Vm.requestClose(x(xh,this))}),w(this,Dh,e=>{e.target===e.currentTarget&&(x(Oh,this).call(this,e),this.flyoutOpen=e.type===`craft-show`,this.flyoutOpen||Vm.notifyClosed(x(xh,this)))}),w(this,Oh,e=>{e.target===e.currentTarget&&e.stopPropagation()}),w(this,kh,e=>{e instanceof KeyboardEvent&&e.key!==`Enter`&&e.key!==` `||e.stopPropagation()}),w(this,Ah,e=>{e.preventDefault(),e.stopPropagation(),this.flyoutOpen?(this.flyoutOpen=!1,Vm.notifyClosed(x(xh,this))):Vm.requestOpen(x(xh,this),{immediate:!0})}),this.id=this.id||Math.random().toString(36).substring(2,6)}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`listitem`),this.subnavState=this.active||this.initialState===`open`?`open`:`closed`;let{signal:e}=S(Sh,this,new AbortController);this.addEventListener(`mouseenter`,x(Th,this),{signal:e}),this.addEventListener(`mouseleave`,x(Eh,this),{signal:e}),this.addEventListener(`focusout`,x(Eh,this),{signal:e})}updated(e){e.has(`flyoutOpen`)&&(this.flyoutOpen?C(wh,this,Mh).call(this):C(wh,this,Nh).call(this))}willUpdate(e){(e.has(`active`)||e.has(`initialState`))&&(this.subnavState=this.active||this.initialState===`open`?`open`:`closed`)}disconnectedCallback(){x(Sh,this)?.abort(),x(Ch,this)?.abort(),Vm.remove(x(xh,this)),super.disconnectedCallback()}toggleSubnav(e){e.preventDefault(),e.stopPropagation(),this.subnavState=this.subnavState===`open`?`closed`:`open`}actionTag(e){return this.href?_h`a`:e||this.button?_h`button`:_h`span`}focus(e){let t=this.shadowRoot?.querySelector(`.nav-item__action-item:is(a, button), .nav-item:is(a, button)`);t?t.focus(e):super.focus(e)}buttonType(e){return!this.href&&(e||this.button)?`button`:i}isStatic(e){return!this.href&&!e&&!this.button}renderIconItem(e,t){let n=this.actionTag(t);return yh`
      <${n}
        class="${N({"nav-item":!0,"nav-item--icon":!0,"nav-item--static":this.isStatic(t)})}"
        id="${this.itemId}"
        type="${this.buttonType(t)}"
        href="${Ve(this.href||void 0)}"
        target="${this.opensInNewTab?`_blank`:i}"
        rel="${this.opensInNewTab?`noopener`:i}"
        aria-current="${this.href||this.button?this.ariaCurrentState:i}"
        aria-expanded="${t?this.flyoutOpen?`true`:`false`:i}"
        aria-controls="${t?this.subnavId:i}"
        aria-label="${(this.href||e||this.button)&&this.labelText?this.opensInNewTab?`${this.labelText}, ${g()}`:this.labelText:i}"
        @click="${t&&!this.href?x(Ah,this):i}"
      >
        ${this.renderPrefix()} ${this.renderSuffix(!1)}
      </${n}>
      ${t?p`<div class="rail-toggle">${this.renderFlyoutToggle()}</div>`:i}
      ${t?this.renderFlyout(!0):p`<craft-tooltip
              for="${this.itemId}"
              placement="right"
              @craft-show=${x(Oh,this)}
              @craft-hide=${x(Oh,this)}
              @craft-after-show=${x(Oh,this)}
              @craft-after-hide=${x(Oh,this)}
              ><slot></slot
            ></craft-tooltip>`}
    `}renderFlyout(e){return p`
      <craft-popover
        for="${this.itemId}"
        placement="right-start"
        without-invoker-aria
        .open="${this.flyoutOpen}"
        @craft-show=${x(Dh,this)}
        @craft-hide=${x(Dh,this)}
        @craft-after-show=${x(Oh,this)}
        @craft-after-hide=${x(Oh,this)}
      >
        <div class="flyout" id="${this.subnavId}">
          ${e?p`<div class="flyout__label"><slot></slot></div>`:i}
          <slot name="subnav"></slot>
        </div>
      </craft-popover>
    `}renderSubnavToggle(){return p`
      <craft-button
        @click="${this.toggleSubnav}"
        @mousedown="${x(kh,this)}"
        @mouseup="${x(kh,this)}"
        @keydown="${x(kh,this)}"
        @keyup="${x(kh,this)}"
        variant="${$r.Plain}"
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
    `}renderPrefix(e=!1){return e&&this.togglePosition===`prefix`?p`
        <span class="nav-item__prefix">${this.renderSubnavToggle()}</span>
      `:p`
      <span class="nav-item__prefix">
        <slot name="prefix">
          <slot name="icon">
            ${this.icon?p` <craft-icon
                  name="${this.icon}"
                  class="nav-icon"
                ></craft-icon>`:this.renderInitial()}
          </slot>
          ${this.indicator?p`<craft-badge-indicator
                altText="${n(`Has Notifications`)}"
              />`:i}
        </slot>
      </span>
    `}renderFlyoutToggle(){return p`
      <craft-button
        class="flyout-toggle"
        @click="${x(Ah,this)}"
        @mousedown="${x(kh,this)}"
        @mouseup="${x(kh,this)}"
        @keydown="${x(kh,this)}"
        @keyup="${x(kh,this)}"
        variant="${$r.Plain}"
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
    `}renderInitial(){let e=this.iconOnly?this.labelText.at(0):null;return e?p`<span class="nav-item__initial" aria-hidden="true"
          >${e.toLocaleUpperCase()}</span
        >`:i}renderSuffix(e=!1,t=!1){return p`
      <div class="nav-item__suffix">
        ${this.opensInNewTab&&!this.iconOnly?p`<craft-icon
              class="external-icon"
              name="arrow-up-right-from-square"
            ></craft-icon>`:i}
        ${this.iconOnly?i:p`<slot
              name="actions"
              @mousedown="${x(kh,this)}"
              @mouseup="${x(kh,this)}"
              @click="${x(kh,this)}"
              @keydown="${x(kh,this)}"
              @keyup="${x(kh,this)}"
            ></slot>`}
        <slot name="suffix">
          ${e&&this.togglePosition===`suffix`?this.renderSubnavToggle():i}
          ${t?this.renderFlyoutToggle():i}
        </slot>
      </div>
    `}renderItem(e,t,n){return yh`
      <div
        class="${N({"nav-item":!0,"nav-item--prefixed":t,"nav-item--flush":this.flush,"nav-item--static":this.isStatic(n)})}"
        id="${this.itemId}"
      >
        ${t?this.renderPrefix(e):i}
        ${this.renderInteractiveItem(n)}
        ${this.renderSuffix(e,n)}
      </div>
    `}renderInteractiveItem(e){let t=this.actionTag(e);return yh`
      <${t}
        class="nav-item__action-item"
        type="${this.buttonType(e)}"
        href="${Ve(this.href||void 0)}"
        target="${this.opensInNewTab?`_blank`:i}"
        rel="${this.opensInNewTab?`noopener`:i}"
        aria-current="${this.href||this.button?this.ariaCurrentState:i}"
        aria-expanded="${e?this.flyoutOpen?`true`:`false`:i}"
        aria-controls="${e?this.subnavId:i}"
        @click="${e&&!this.href?x(Ah,this):i}"
      >
        <slot id="${this.id}-label"></slot>${this.opensInNewTab?p`<span class="cp-visually-hidden">${g()}</span>`:i}
      </${t}>
    `}render(){let e=ne(this,`subnav`),t=this.subnavDisplay??(this.iconOnly?`flyout`:`inline`),n=e&&t===`flyout`,r=e&&!n&&!this.group&&(this.iconOnly||this.hasLabel),a=r&&this.togglePosition===`prefix`||!!this.icon||this.indicator||ne(this,`prefix`,`icon`),o=!r||this.subnavState===`open`;return this.group&&this.iconOnly?p`
        <li role="presentation">
          <hr
            class="rail-separator"
            aria-label="${this.labelText||i}"
          />
          ${e?p`<div class="subnav" id="${this.subnavId}">
                <slot name="subnav"></slot>
              </div>`:i}
        </li>
      `:p`
      <li role="presentation">
        ${this.iconOnly?this.renderIconItem(e,n):this.renderItem(r,a,n)}
        ${this.iconOnly&&r?p`<div class="rail-toggle">${this.renderSubnavToggle()}</div>`:i}
        ${!this.iconOnly&&n?this.renderFlyout(!1):i}
        ${e&&!n?p`
              <div
                class="subnav"
                id="${this.subnavId}"
                style="${ai({display:o?`block`:`none`})}"
              >
                <slot name="subnav"></slot>
              </div>
            `:i}
      </li>
    `}};function Mh(){C(wh,this,Nh).call(this);let{signal:e}=S(Ch,this,new AbortController);window.addEventListener(`resize`,this.fitFlyout,{signal:e}),requestAnimationFrame(this.fitFlyout)}function Nh(){x(Ch,this)?.abort(),S(Ch,this,void 0),this.shadowRoot?.querySelector(`craft-popover`)?.style.removeProperty(`--popover-max-block-size`)}jh.styles=[re,bh],jh.flyoutViewportMargin=16,r([c()],jh.prototype,`icon`,void 0),r([c()],jh.prototype,`href`,void 0),r([c({type:Boolean,reflect:!0})],jh.prototype,`active`,void 0),r([c({type:Boolean,reflect:!0})],jh.prototype,`current`,void 0),r([c({type:Boolean,reflect:!0})],jh.prototype,`button`,void 0),r([c({type:Boolean})],jh.prototype,`external`,void 0),r([c({type:Boolean})],jh.prototype,`indicator`,void 0),r([c()],jh.prototype,`id`,void 0),r([c({reflect:!0,type:Boolean,attribute:`icon-only`})],jh.prototype,`iconOnly`,void 0),r([c({type:Boolean})],jh.prototype,`flush`,void 0),r([c({reflect:!0,attribute:`initial-state`})],jh.prototype,`initialState`,void 0),r([c({type:Boolean,reflect:!0})],jh.prototype,`group`,void 0),r([c({attribute:`toggle-position`})],jh.prototype,`togglePosition`,void 0),r([c({attribute:`subnav-display`,reflect:!0})],jh.prototype,`subnavDisplay`,void 0),r([f()],jh.prototype,`subnavState`,void 0),r([f()],jh.prototype,`flyoutOpen`,void 0),customElements.get(`craft-nav-item`)||customElements.define(`craft-nav-item`,jh);var Ph=class extends u{render(){return p`
      <ul class="nav-list">
        <slot></slot>
      </ul>
    `}};Ph.styles=a`
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
  `,customElements.get(`craft-nav-list`)||customElements.define(`craft-nav-list`,Ph);var Fh=a`
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
    ${_i}
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
`,Ih={Raised:`raised`,Outline:`outline`,OutlineFill:`outline-fill`,Plain:`plain`,Sunken:`sunken`};Object.values(Ih);var Lh={Plain:`plain`,Error:`error`,Code:`code`};Object.values(Lh);var Rh=new Set([`clip`,`hidden`]),zh=class extends ni(u,{customProperty:`--_pane-spacing`,defaultValue:`lg`}){constructor(...e){super(...e),this.appearance=Ih.Raised,this.variant=Lh.Plain,this.label=``,this.headingLevel=2,this._hasSlottedHeader=!1,this._hasSlottedFooter=!1,this._scrollable=!1,this._hostLabel=``,this._lightDom=new M(this,{attributeFilter:[`aria-label`],characterData:!0,onChange:()=>this._syncLightDom()}),this._observedBoxes=new Set}disconnectedCallback(){super.disconnectedCallback(),this._resizeObserver?.disconnect(),this._observedBoxes.clear()}get _scroller(){return this.renderRoot?.querySelector(`.cp-pane`)??null}_syncSlotPresence(){this._hasSlottedHeader=ne(this,`header`,`title`,`header-actions`),this._hasSlottedFooter=ne(this,`footer`,`footer-content`,`feedback`,`actions`,`primary-action`,`secondary-action`)}_syncLightDom(){this._syncSlotPresence(),this._hostLabel=this.getAttribute(`aria-label`)??``,this._syncScrollable(),this._observeScrollable()}_syncScrollable(){let e=this._scroller;if(!e?.isConnected){this._scrollable=!1;return}let{overflowX:t,overflowY:n}=getComputedStyle(e);this._scrollable=!Rh.has(n)&&e.scrollHeight-e.clientHeight>1||!Rh.has(t)&&e.scrollWidth-e.clientWidth>1}_observeScrollable(){if(typeof ResizeObserver>`u`)return;let e=this._resizeObserver??=new ResizeObserver(()=>this._syncScrollable()),t=this._scroller,n=new Set(t?[t,...t.querySelectorAll(`.cp-pane__header, .cp-pane__body, .cp-pane__footer`),...this.children]:[]);for(let t of this._observedBoxes)n.has(t)||(e.unobserve(t),this._observedBoxes.delete(t));for(let t of n)this._observedBoxes.has(t)||(e.observe(t),this._observedBoxes.add(t))}get _scrollRegionLabel(){return this.label||this._hostLabel||n(`Scrollable region`)}focus(e){if(this._scrollable&&this._scroller){this._scroller.focus(e);return}super.focus(e)}updated(e){super.updated(e),this._observeScrollable()}_renderTitle(){let e=gh(`h${Math.min(6,Math.max(1,Number(this.headingLevel)||2))}`);return yh`<${e} class="cp-pane__title">${this.label}</${e}>`}render(){let e=!!this.label||this._hasSlottedHeader;return p`
      <div
        class="cp-pane"
        part="base"
        style="${ai(this.paddingStyles)}"
        tabindex="${this._scrollable?`0`:i}"
        role="${this._scrollable?`region`:i}"
        aria-label="${this._scrollable?this._scrollRegionLabel:i}"
      >
        ${e?p`<slot name="header">
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

        ${this._hasSlottedFooter?p`<slot name="footer">
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
    `}};zh.styles=[A,Fh],r([c({reflect:!0})],zh.prototype,`appearance`,void 0),r([c({reflect:!0})],zh.prototype,`variant`,void 0),r([c()],zh.prototype,`label`,void 0),r([c({type:Number,attribute:`heading-level`})],zh.prototype,`headingLevel`,void 0),r([f()],zh.prototype,`_hasSlottedHeader`,void 0),r([f()],zh.prototype,`_hasSlottedFooter`,void 0),r([f()],zh.prototype,`_scrollable`,void 0),r([f()],zh.prototype,`_hostLabel`,void 0),customElements.get(`craft-pane`)||customElements.define(`craft-pane`,zh);var Bh=`craft-checkbox > input[type="checkbox"], input[type="checkbox"].cp-checkbox, craft-radio > input[type="radio"], input[type="radio"].cp-radio {
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

craft-checkbox > input[type="checkbox"], input[type="checkbox"].cp-checkbox {
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
`,Vh=0,Hh=new WeakMap,W=new WeakSet,Uh=class extends u{constructor(...e){super(...e),b(this,W),this.groups=[],this.value=[],this.lockedPermissions=[],this.name=``,this.disabled=!1,w(this,Hh,++Vh)}updated(e){super.updated(e),(e.has(`value`)||e.has(`groups`)||e.has(`name`)||e.has(`disabled`))&&C(W,this,eg).call(this)}render(){let e=C(W,this,Kh).call(this);return ys(this.groups,e=>e.handle,(t,n)=>C(W,this,Wh).call(this,t,n,e))}};function Wh(e,t,r){let a=`permission-tree-heading-${x(Hh,this)}-${t}`;return p`
      <section class="group">
        ${e.heading?p`
              <div class="heading">
                <h3 id=${a}>${e.heading}</h3>
                <craft-button
                  type="button"
                  size="small"
                  variant="plain"
                  aria-describedby=${a}
                  ?disabled=${this.disabled}
                  @click=${()=>C(W,this,Xh).call(this,e.keys,r)}
                >
                  ${C(W,this,Yh).call(this,e.keys,r)?n(`Deselect all`):n(`Select all`)}
                </craft-button>
              </div>
            `:i}
        ${C(W,this,Gh).call(this,e.permissions,0,this.disabled,r)}
      </section>
    `}function Gh(e,t,n,r){return ys(Object.entries(e),([e])=>e,([e,a])=>{let o=a.key||e,s=C(W,this,Jh).call(this,o,r),c=a.nested??{};return p`
          <ul>
            <li>
              <craft-checkbox
                class=${t>0?`indented`:``}
                style=${`--permission-level: ${t}`}
                .label=${a.label}
                .value=${o}
                .checked=${s}
                .disabled=${n||C(W,this,qh).call(this,o,r)}
                @input=${e=>e.stopPropagation()}
                @change=${e=>C(W,this,Zh).call(this,e,o,c,r)}
              >
                ${a.info||a.warning?p`
                      <div slot="help-text">
                        ${a.info??i}
                        ${a.warning?p`
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

              ${Object.keys(c).length?C(W,this,Gh).call(this,c,t+1,n||!s,r):i}
            </li>
          </ul>
        `})}function Kh(){return new Set(this.lockedPermissions.map(e=>e.toLowerCase()))}function qh(e,t){return t.has(e.toLowerCase())}function Jh(e,t){return this.value.includes(e)||C(W,this,qh).call(this,e,t)}function Yh(e,t){let n=e.filter(e=>!C(W,this,qh).call(this,e,t));return n.length>0&&n.every(e=>this.value.includes(e))}function Xh(e,t){let n=e.filter(e=>!C(W,this,qh).call(this,e,t));if(C(W,this,Yh).call(this,e,t)){let e=new Set(n);C(W,this,$h).call(this,this.value.filter(t=>!e.has(t)));return}C(W,this,$h).call(this,[...new Set([...this.value,...n])])}function Zh(e,t,n,r){if(e.stopPropagation(),this.disabled||C(W,this,qh).call(this,t,r))return;let i=e.currentTarget.checked,a=this.value.indexOf(t);if(i&&a===-1){C(W,this,$h).call(this,[...this.value,t]);return}if(i||a===-1)return;let o=new Set([t,...C(W,this,Qh).call(this,n)]);C(W,this,$h).call(this,this.value.filter(e=>!o.has(e)))}function Qh(e){return Object.values(e).flatMap(e=>[e.key,...C(W,this,Qh).call(this,e.nested??{})])}function $h(e){this.value=e,ts(this),ns(this)}function eg(){if(this.querySelectorAll(`[data-permission-tree-input]`).forEach(e=>e.remove()),!this.name||this.disabled)return;C(W,this,tg).call(this,this.name,``);let e=new Set(this.groups.flatMap(e=>e.keys));for(let t of this.value)e.has(t)&&C(W,this,tg).call(this,`${this.name}[]`,t)}function tg(e,t){let n=document.createElement(`input`);n.type=`hidden`,n.name=e,n.value=t,n.dataset.permissionTreeInput=``,this.append(n)}Uh.styles=[o(Bh),a`
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
    `],r([c({type:Array})],Uh.prototype,`groups`,void 0),r([c({type:Array})],Uh.prototype,`value`,void 0),r([c({type:Array,attribute:`locked-permissions`})],Uh.prototype,`lockedPermissions`,void 0),r([c()],Uh.prototype,`name`,void 0),r([c({type:Boolean,reflect:!0})],Uh.prototype,`disabled`,void 0),customElements.get(`craft-permission-tree`)||customElements.define(`craft-permission-tree`,Uh);var ng=a`
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
`,rg=new WeakMap,ig=new WeakMap,ag=class extends u{constructor(...e){super(...e),this.progress=0,this.total=0,this.processed=0,this.showStatus=!1,this.pending=!1,this.smooth=!1,this.label=`Progress`,w(this,rg,0),w(this,ig,!1)}willUpdate(e){if(super.willUpdate(e),(e.has(`total`)||e.has(`processed`))&&this.total>0){let e=Math.min(100,Math.round(this.processed/this.total*100));e>=100&&x(rg,this)<100&&S(ig,this,!0),this.progress=e}e.has(`progress`)&&(this.progress>0&&this.pending&&(this.pending=!1),S(rg,this,this.progress))}updated(e){super.updated(e),x(ig,this)&&(S(ig,this,!1),this.dispatchEvent(new CustomEvent(`craft-complete`,{bubbles:!0,composed:!0})))}get progressPercent(){return Math.min(100,Math.max(0,this.progress))}get statusText(){return this.total>0?`${this.processed} / ${this.total}`:`${this.progressPercent}%`}reset(){this.progress=0,this.processed=0,this.pending=!0,S(rg,this,0)}show(){this.hidden=!1}hide(){this.hidden=!0}render(){let e={width:this.pending?`100%`:`${this.progressPercent}%`};return p`
      <div
        class=${N({"progress-bar":!0,"progress-bar--pending":this.pending})}
        part="track"
        role="progressbar"
        aria-valuenow=${this.pending?i:this.progressPercent}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.label}
      >
        <div
          class=${N({"progress-bar__fill":!0,"progress-bar__fill--smooth":this.smooth&&!this.pending})}
          part="fill"
          style=${ai(e)}
        ></div>
      </div>
      ${this.showStatus?p`<div class="progress-bar__status" part="status">
            ${this.statusText}
          </div>`:i}
      <span class="visually-hidden">
        ${this.pending?`Loading`:`${this.progressPercent}%`}
      </span>
    `}};ag.styles=[ng],r([c({type:Number})],ag.prototype,`progress`,void 0),r([c({type:Number})],ag.prototype,`total`,void 0),r([c({type:Number})],ag.prototype,`processed`,void 0),r([c({type:Boolean,attribute:`show-status`})],ag.prototype,`showStatus`,void 0),r([c({type:Boolean,reflect:!0})],ag.prototype,`pending`,void 0),r([c({type:Boolean})],ag.prototype,`smooth`,void 0),r([c({type:String})],ag.prototype,`label`,void 0),customElements.get(`craft-progress-bar`)||customElements.define(`craft-progress-bar`,ag);var og=class extends $o(u,{choice:`craft-radio`,multiple:!1}){constructor(...e){super(...e),this._wrapped=!1,this._resizeObserver=new ResizeObserver(()=>this._fitRow())}render(){return p`${super.render()}
      <div class="fit-probe" aria-hidden="true"></div>
      <div class="row-size" aria-hidden="true"></div>`}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{let e=this.shadowRoot?.querySelector(`.fit-probe`);e&&this.isConnected&&this._resizeObserver.observe(e)})}disconnectedCallback(){super.disconnectedCallback(),this._resizeObserver.disconnect()}_onChoicesChanged(){this._resizeObserver.disconnect();let e=this.shadowRoot?.querySelector(`.fit-probe`);e&&this._resizeObserver.observe(e);for(let e of this.choices)this._resizeObserver.observe(e);this._syncButtons(),this._fitRow()}updated(e){super.updated(e),e.has(`appearance`)&&(this._syncButtons(),this._fitRow())}_syncButtons(){let e=this.appearance,t=e===`buttons`||e===`button-group`,n=e===`cards`||e===`card-group`,r=(e===`button-group`||e===`card-group`)&&!this._wrapped,i=this.choices;this.style.setProperty(`--_card-count`,String(i.length)),i.forEach((e,a)=>{let o=!r||a===0,s=!r||a===i.length-1;e.toggleAttribute(`data-button`,t),e.toggleAttribute(`data-button-start`,t&&o),e.toggleAttribute(`data-button-end`,t&&s),e.toggleAttribute(`data-card`,n),e.toggleAttribute(`data-card-start`,n&&o),e.toggleAttribute(`data-card-end`,n&&s)})}_fitRow(){let e=!1,t=this.appearance;if(t===`button-group`||t===`card-group`){let n=this.choices,r=n.reduce((e,n)=>e+(t===`card-group`?parseFloat(getComputedStyle(n).minWidth):n.getBoundingClientRect().width),-(n.length-1));e=this.clientWidth<r}e!==this._wrapped&&(this._wrapped=e,this.toggleAttribute(`data-wrapped`,e),this._syncButtons())}static get styles(){return[ui,Zr,a`
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
      `]}};r([c({reflect:!0})],og.prototype,`appearance`,void 0),customElements.get(`craft-radio-group`)||customElements.define(`craft-radio-group`,og);var sg=class extends as(u){constructor(...e){super(...e),this._syncIconOnly=()=>{let e=this.querySelector(`:scope > [slot="label"]`);this.toggleAttribute(`data-icon-only`,!e?.textContent?.trim())}}get slots(){return{...super.slots,input:()=>{let e=document.createElement(`input`);return e.type=`radio`,e}}}render(){return p`<slot name="input"></slot>
      <div class="choice-field__icon" part="icon">
        <slot name="icon"></slot>
      </div>
      <div class="choice-field__label">
        <slot name="label"></slot>
      </div>
      <small class="choice-field__help-text">
        <slot name="help-text"></slot>
      </small>`}static get styles(){return[...rs,a`
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
      `]}firstUpdated(e){super.firstUpdated(e),this.shadowRoot?.querySelector(`slot[name="label"]`)?.addEventListener(`slotchange`,this._syncIconOnly),this._syncIconOnly()}};customElements.get(`craft-radio`)||customElements.define(`craft-radio`,sg);var cg=a`
  :host {
    ${Yr}
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

  /* The usual focus ring, standing off the control. Contexts that inset
     rings, such as table cells, do so through the same properties. */
  :host(:focus-visible:not([disabled])) {
    outline: var(--c-focus-outline-width) var(--c-focus-outline-style)
      var(--c-color-focus-outline);
    outline-offset: var(--c-focus-outline-offset);
  }

  :host(:hover) {
    background-color: color-mix(
      in oklab,
      var(--c-input-fill, var(--c-form-control-fill)),
      var(--c-color-mix-hover)
    );
  }

  :host(:active) {
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
`,lg=class extends u{constructor(...e){super(...e),this.singleOption=!1,this.disabled=!1}render(){return p`<div id="content-wrapper"><slot></slot></div>
      ${this.singleOption?``:p`<craft-icon
            class="indicator"
            name="chevron-down"
          ></craft-icon>`}`}};lg.styles=cg,r([c({type:Boolean,attribute:`single-option`,reflect:!0})],lg.prototype,`singleOption`,void 0),r([c({type:Boolean,reflect:!0})],lg.prototype,`disabled`,void 0),customElements.get(`craft-select-invoker`)||customElements.define(`craft-select-invoker`,lg);var ug=a`
  ${Xr}

  :host {
    width: 100%;
  }

  :host([small]) .input-group__input {
    --c-input-height: var(--c-size-control-sm);
  }

  .input-group__input {
    ${Jr}
  }

  /* The dropdown sets the field's width as an inline min-width, which wins over this cap on wider fields */
  #overlay-content-node-wrapper {
    max-inline-size: min(calc(360rem / 16), calc(100vw - var(--c-spacing-lg)));
  }

  [role='listbox'] {
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
`,dg=new WeakMap,fg=new WeakMap,pg=new WeakMap,mg=new WeakMap,hg=new WeakMap,gg=new WeakMap,_g=new WeakMap,G=new WeakSet,vg=new WeakMap,yg=new WeakMap,bg=new WeakMap,xg=new WeakMap,Sg=new WeakMap,Cg=new WeakMap,wg=new WeakMap,Tg=new WeakMap,Eg=class extends Cl(mi(u)){get value(){return x(dg,this)}set value(e){let t=x(dg,this);S(dg,this,e==null?``:String(e)),C(G,this,Fg).call(this),this.requestUpdate(`value`,t)}constructor(){super(),b(this,G),this.small=!1,this.required=!1,this.invalid=!1,this.open=!1,w(this,dg,``),w(this,fg,``),w(this,pg,!1),w(this,mg,!1),w(this,hg,new Pl),w(this,gg,new MutationObserver(e=>{let t=e=>e===this._control||!!this._control?.contains(e)||!!(e instanceof Element?e:e.parentElement)?.closest(`[slot="form-value"]`);e.some(e=>!t(e.target))&&C(G,this,Pg).call(this)})),w(this,_g,new Dl(()=>{let e=this.renderRoot.querySelector(`.overlay-layer`),t=Dg.call(C(G,this)),n=this._control;return e&&t&&n?{layer:e,pane:t,reference:n}:void 0})),w(this,vg,e=>{let t=e.target;if(x(mg,this)||t.parentElement!==this||t.localName!==`craft-option`||!t.selected)return;let n=x(dg,this);S(dg,this,t.value),C(G,this,Fg).call(this),this.requestUpdate(`value`,n)}),w(this,yg,e=>{e.composedPath().includes(this)||(this.open=!1)}),w(this,bg,e=>{(!(e.relatedTarget instanceof Node)||!this.contains(e.relatedTarget))&&(this.open=!1)}),w(this,xg,()=>{this.open?this.open=!1:C(G,this,Bg).call(this)}),w(this,Sg,void 0),w(this,Cg,e=>{if(Mg.call(C(G,this))||e.isComposing)return;if(this.open){C(G,this,Hg).call(this,e);return}switch(e.key){case`Enter`:case` `:case`ArrowDown`:case`ArrowUp`:e.preventDefault(),e.repeat||C(G,this,Bg).call(this);return}let t=x(hg,this).match(e,kg.call(C(G,this)),Ag.call(C(G,this)));t&&(e.preventDefault(),C(G,this,Ig).call(this,t))}),w(this,wg,e=>{let t=e.target?.closest(`craft-option`);!t||t.disabled||Mg.call(C(G,this))||(C(G,this,Ig).call(this,t),this.open=!1,this._control?.focus())}),w(this,Tg,Qr(`listbox`)),this.addEventListener(`craft-selected-change`,x(vg,this))}get slots(){return{...super.slots,input:()=>document.createElement(`craft-select-invoker`)}}get _control(){return super._control}get _selectsFirstOption(){return!0}connectedCallback(){super.connectedCallback();let e=this._control;e&&!e.hasAttribute(`role`)&&(e.addEventListener(`keydown`,x(Cg,this)),e.addEventListener(`click`,x(xg,this)),e.addEventListener(`focusout`,x(bg,this))),x(gg,this).observe(this,{childList:!0,subtree:!0,characterData:!0}),C(G,this,Pg).call(this)}disconnectedCallback(){x(gg,this).disconnect(),x(_g,this).hide(),document.removeEventListener(`pointerdown`,x(yg,this)),x(hg,this).reset(),super.disconnectedCallback()}_formValue(){return x(dg,this)}formResetCallback(){this.value=x(fg,this),this._syncFormValue()}_selectedTemplate(e){return e?[...e.childNodes].map(e=>e.cloneNode(!0)):i}updated(e){super.updated(e),e.has(`open`)&&C(G,this,zg).call(this),(e.has(`disabled`)||e.has(`_formDisabled`)||e.has(`readOnly`)||e.has(`invalid`)||e.has(`required`)||e.has(`open`))&&C(G,this,Lg).call(this),(e.has(`name`)||e.has(`disabled`))&&this._syncFormValue(),this.open&&x(_g,this).update()}focus(e){this._control?.focus(e)}_inputGroupInputTemplate(){return p`
      <div class="input-group__input">
        <slot name="input"></slot>
        <div class="overlay-layer" role="none" popover="manual">
          <div id="overlay-content-node-wrapper">
            <div
              id=${x(Tg,this)}
              role="listbox"
              aria-label=${C(G,this,Wg).call(this)}
              @mousedown=${e=>e.preventDefault()}
              @click=${x(wg,this)}
            >
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
    `}};function Dg(){return this.renderRoot.querySelector(`#overlay-content-node-wrapper`)}function Og(){return[...this.querySelectorAll(`:scope > craft-option`)].filter(e=>e instanceof hl)}function kg(){return Og.call(C(G,this)).filter(e=>!e.hidden)}function Ag(){return Og.call(C(G,this)).find(e=>e.selected)}function jg(){return this.disabled||this._formDisabled}function Mg(){return jg.call(C(G,this))||this.readOnly||Ng.call(C(G,this))}function Ng(){return Og.call(C(G,this)).length===1}function Pg({waited:e=!1}={}){if(!e&&[...this.querySelectorAll(`:scope > craft-option`)].some(e=>!(e instanceof hl))){customElements.whenDefined(`craft-option`).then(()=>queueMicrotask(()=>C(G,this,Pg).call(this,{waited:!0})));return}if(x(dg,this)===``){let e=Ag.call(C(G,this));e&&S(dg,this,e.value)}C(G,this,Fg).call(this,{fallBackToFirst:!0}),!x(pg,this)&&Og.call(C(G,this)).length&&(S(fg,this,x(dg,this)),S(pg,this,!0));let t=x(Sg,this);t&&!Og.call(C(G,this)).includes(t)&&C(G,this,Vg).call(this,Og.call(C(G,this)).find(e=>e.value===t.value&&!e.disabled)),C(G,this,Lg).call(this),this._syncFormValue(),this.requestUpdate(),this.updateComplete.then(()=>C(G,this,Rg).call(this))}function Fg({fallBackToFirst:e=!1}={}){let t=Og.call(C(G,this)),n=t.find(e=>e.value===x(dg,this));!n&&e&&this._selectsFirstOption&&(n=t.find(e=>!e.disabled),n&&S(dg,this,n.value)),S(mg,this,!0);try{for(let e of t)e.selected=e===n}finally{S(mg,this,!1)}C(G,this,Lg).call(this),this._syncFormValue()}function Ig(e){e.disabled||e.value===x(dg,this)||(this.value=e.value,ts(this),ns(this))}function Lg(){let e=this._control;if(!e)return;let t=Ag.call(C(G,this)),n=Ng.call(C(G,this));e.id||=this._inputId,e.singleOption=n,e.disabled=jg.call(C(G,this)),s(this._selectedTemplate(t),e),e.setAttribute(`role`,`combobox`),n?(e.removeAttribute(`aria-haspopup`),e.removeAttribute(`aria-expanded`),e.removeAttribute(`aria-activedescendant`)):(e.setAttribute(`aria-haspopup`,`listbox`),e.setAttribute(`aria-expanded`,String(this.open))),e.tabIndex=jg.call(C(G,this))?-1:0,jg.call(C(G,this))?e.setAttribute(`aria-disabled`,`true`):e.removeAttribute(`aria-disabled`),this.readOnly||n?e.setAttribute(`aria-readonly`,`true`):e.removeAttribute(`aria-readonly`),this.invalid?e.setAttribute(`aria-invalid`,`true`):e.removeAttribute(`aria-invalid`),this.required&&!n?e.setAttribute(`aria-required`,`true`):e.removeAttribute(`aria-required`)}function Rg(){let e=this.renderRoot.querySelector(`.overlay-layer`),t=Dg.call(C(G,this)),n=this._control;if(!e||!t||!n||this.open)return;e.style.visibility=`hidden`,e.setAttribute(`data-open`,``),t.style.minWidth=`auto`;let r=t.getBoundingClientRect().width;e.removeAttribute(`data-open`),e.style.removeProperty(`visibility`),r>0&&(n.style.minWidth=`min(${r}px, 100%)`)}function zg(){let e=this._control;if(this.open&&!Mg.call(C(G,this))){x(hg,this).reset(),x(_g,this).show(),document.addEventListener(`pointerdown`,x(yg,this));let e=Ag.call(C(G,this));C(G,this,Vg).call(this,e?.hidden?void 0:e);return}x(_g,this).hide(),document.removeEventListener(`pointerdown`,x(yg,this)),C(G,this,Vg).call(this,void 0),x(hg,this).reset(),e?.removeAttribute(`aria-activedescendant`)}function Bg(){Mg.call(C(G,this))||(this.open=!0)}function Vg(e){S(Sg,this,e),Al(Og.call(C(G,this)),e,this._control,{scroll:this.open})}function Hg(e){let t=kg.call(C(G,this));switch(e.key){case`ArrowDown`:case`ArrowUp`:e.preventDefault(),C(G,this,Vg).call(this,jl(t,x(Sg,this),e.key===`ArrowDown`?1:-1,{wrap:!1,skipDisabled:!0}));return;case`Home`:case`End`:{e.preventDefault();let n=t.filter(e=>!e.disabled);C(G,this,Vg).call(this,e.key===`Home`?n[0]:n.at(-1));return}case`Enter`:e.preventDefault(),C(G,this,Ug).call(this);return;case` `:if(!x(hg,this).typing){e.preventDefault(),C(G,this,Ug).call(this);return}break;case`Escape`:e.preventDefault(),$e(e),this.open=!1;return;case`Tab`:C(G,this,Ug).call(this);return}let n=x(hg,this).match(e,t,x(Sg,this));n&&(e.preventDefault(),C(G,this,Vg).call(this,n))}function Ug(){x(Sg,this)&&C(G,this,Ig).call(this,x(Sg,this)),this.open=!1}function Wg(){return this._labelNode?.textContent?.trim()||this.label}Eg.styles=[ui,ct,ug],r([c({reflect:!0,type:Boolean})],Eg.prototype,`small`,void 0),r([c({type:Boolean})],Eg.prototype,`required`,void 0),r([c({type:Boolean,reflect:!0})],Eg.prototype,`invalid`,void 0),r([c({type:Boolean,reflect:!0})],Eg.prototype,`open`,void 0),r([c()],Eg.prototype,`value`,null),customElements.get(`craft-select-rich`)||customElements.define(`craft-select-rich`,Eg);var Gg=a`
  :host {
    display: block;
  }
`;function Kg(e){return e.charAt(0).toUpperCase()+e.slice(1)}function qg(e){return e.startsWith(`#`)}var Jg=new WeakMap,Yg=new WeakSet,Xg=class extends Eg{constructor(...e){super(...e),b(this,Yg),this.allowTransparent=!1,this.blankLabel=null,this.allowCustom=!1,this.colors=[...Oo],this.labels={},w(this,Jg,[])}_swatchTemplate(e){if(e===`__custom__`)return p`<span
        class="select-color__swatch"
        style="flex:0 0 auto;inline-size:1rem;block-size:1rem;"
        aria-hidden="true"
      ></span>`;let t=e===`__blank__`||e===`transparent`,n=`flex:0 0 auto;inline-size:1rem;block-size:1rem;border-radius:var(--c-radius-full);box-shadow:${[`0 0 0 1px var(--c-select-color-swatch-ring, transparent)`,`0 1px 1px rgb(0 0 0 / 20%)`,`inset 0 0 0 1px ${this._swatchBorder(e)}`].join(`, `)};`,r=qg(e)?e:e===`white`?`var(--c-surface-white)`:`var(--c-color-${e}-fill-quiet)`;return p`<span
      class="select-color__swatch"
      style="${t?n+`background:linear-gradient(45deg, var(--c-color-neutral-fill-quiet) 25%, transparent 25%),linear-gradient(-45deg, var(--c-color-neutral-fill-quiet) 25%, transparent 25%),linear-gradient(45deg, transparent 75%, var(--c-color-neutral-fill-quiet) 75%),linear-gradient(-45deg, transparent 75%, var(--c-color-neutral-fill-quiet) 75%);background-position:0 0, 0 0.25rem, 0.25rem -0.25rem, -0.25rem 0;background-size:0.5rem 0.5rem;`:n+`background-color:${r};`}"
      aria-hidden="true"
    ></span>`}_swatchBorder(e){if(qg(e)||e===`transparent`)return this._swatchBorder(`__blank__`);switch(e){case`__blank__`:return`var(--c-select-color-swatch-edge, rgb(0 0 0 / 15%))`;case`black`:return`color-mix(in srgb, var(--c-color-black-on-quiet), transparent 80%)`;case`white`:return`var(--c-table-border-color)`;default:return`var(--c-color-${e}-border-quiet)`}}_optionTemplate(e,t){return p`<craft-option .value=${e}>
      <span
        class="select-color__option"
        style="display:flex;align-items:center;gap:var(--c-spacing-sm);"
      >
        ${this._swatchTemplate(e)}
        <span class="select-color__label" style="white-space:nowrap;"
          >${t}</span
        >
      </span>
    </craft-option>`}get _selectsFirstOption(){return!1}connectedCallback(){C(Yg,this,Zg).call(this),super.connectedCallback()}updated(e){super.updated(e),(e.has(`colors`)||e.has(`labels`)||e.has(`allowTransparent`)||e.has(`blankLabel`)||e.has(`allowCustom`))&&C(Yg,this,Zg).call(this)}};function Zg(){let e=document.createElement(`div`);s(p`${this.allowTransparent?this._optionTemplate(`__blank__`,this.blankLabel??n(`Transparent`)):i}${this.colors.map(e=>this._optionTemplate(e,this.labels[e]??(qg(e)?e:n(Kg(e)))))}${this.allowCustom?this._optionTemplate(`__custom__`,n(`Custom…`)):i}`,e);for(let e of x(Jg,this))e.remove();S(Jg,this,[...e.children]),this.append(...x(Jg,this))}Xg.styles=[...Eg.styles,Gg],r([c({type:Boolean,reflect:!0,attribute:`allow-transparent`})],Xg.prototype,`allowTransparent`,void 0),r([c({attribute:`blank-label`})],Xg.prototype,`blankLabel`,void 0),r([c({type:Boolean,reflect:!0,attribute:`allow-custom`})],Xg.prototype,`allowCustom`,void 0),r([c({type:Array})],Xg.prototype,`colors`,void 0),r([c({type:Object})],Xg.prototype,`labels`,void 0),customElements.get(`craft-select-color`)||customElements.define(`craft-select-color`,Xg);var Qg=a`
  ${Xr}

  :host {
    width: 100%;
  }

  :host([small]) .input-group__input {
    --c-input-height: var(--c-size-control-sm);
  }

  ::slotted(.form-control) {
    ${Yr}
  }

  .input-group__input {
    ${Jr}
  }

  .indicator {
    position: absolute;
    inset-block-start: 50%;
    inset-inline-end: var(--c-input-spacing-inline);
    transform: translateY(-50%);
    width: 1em;
    height: 1em;
  }
`,$g=class extends hi(u){constructor(...e){super(...e),this.small=!1}get _control(){return super._control}_inputGroupInputTemplate(){return p`
      <div class="input-group__input">
        <slot name="input"></slot>
        <craft-icon
          class="indicator"
          name="chevron-down"
          style="font-size: 0.8em"
        ></craft-icon>
      </div>
    `}};$g.styles=[ui,Qg],r([c({reflect:!0,type:Boolean})],$g.prototype,`small`,void 0),customElements.get(`craft-select`)||customElements.define(`craft-select`,$g);var e_=a`
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
`,t_=new WeakSet,n_=new WeakMap,r_=class extends u{constructor(){super(),b(this,t_),this.min=0,this.max=100,this.step=10,this.value=``,this.disabled=!1,this.readOnly=!1,this.valueText=String,w(this,n_,e=>{if(!i_.call(C(t_,this)))return;let t=C(t_,this,s_).call(this)?-this.step:this.step,n={ArrowUp:a_.call(C(t_,this))+this.step,ArrowDown:a_.call(C(t_,this))-this.step,ArrowRight:a_.call(C(t_,this))+t,ArrowLeft:a_.call(C(t_,this))-t,Home:this.min,End:this.max};e.key in n&&(e.preventDefault(),C(t_,this,c_).call(this,n[e.key]))}),this.addEventListener(`keydown`,x(n_,this))}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`slider`)}updated(e){super.updated(e),this.setAttribute(`aria-valuemin`,String(this.min)),this.setAttribute(`aria-valuemax`,String(this.max)),this.setAttribute(`aria-valuenow`,String(a_.call(C(t_,this)))),this.setAttribute(`aria-valuetext`,this.valueText(a_.call(C(t_,this)))),this.setAttribute(`aria-readonly`,String(this.readOnly)),this.setAttribute(`aria-disabled`,String(this.disabled)),e.has(`disabled`)&&(this.tabIndex=this.disabled?-1:0)}render(){return p`
      <div class="slide-picker">
        ${C(t_,this,o_).call(this).map(e=>p`
            <span
              class=${N({"slide-picker__segment":!0,"is-active":e<=a_.call(C(t_,this)),"is-last-active":e===a_.call(C(t_,this))})}
              aria-hidden="true"
              @click=${()=>C(t_,this,c_).call(this,e)}
              title=${this.valueText(e)}
              >${i}</span
            >
          `)}
      </div>
    `}};function i_(){return!this.readOnly&&!this.disabled}function a_(){return this.value===``?this.min:Number(this.value)}function o_(){let{min:e,max:t,step:n}=this;if(n<=0||t<e)throw Error(`Invalid craft-slide-picker range configuration.`);let r=(t-e)/n;if(!Number.isInteger(r))throw Error(`Invalid craft-slide-picker step configuration for the provided range.`);return Array.from({length:r+1},(t,r)=>e+r*n)}function s_(){return(this.closest(`[dir]`)?.getAttribute(`dir`)??document.documentElement.getAttribute(`dir`))?.toLowerCase()===`rtl`}function c_(e){let t=Math.min(Math.max(e,this.min),this.max);!i_.call(C(t_,this))||t===a_.call(C(t_,this))||(this.value=String(t),this.dispatchEvent(new Event(`input`)))}r_.styles=[e_],r([c({type:Number})],r_.prototype,`min`,void 0),r([c({type:Number})],r_.prototype,`max`,void 0),r([c({type:Number})],r_.prototype,`step`,void 0),r([c()],r_.prototype,`value`,void 0),r([c({type:Boolean,reflect:!0})],r_.prototype,`disabled`,void 0),r([c({type:Boolean,reflect:!0,attribute:`readonly`})],r_.prototype,`readOnly`,void 0),r([c({attribute:!1})],r_.prototype,`valueText`,void 0),customElements.get(`craft-slide-picker-slider`)||customElements.define(`craft-slide-picker-slider`,r_);var l_=a`
  :host {
    display: block;
  }
`,u_=new WeakMap,d_=new WeakSet,f_=new WeakMap,p_=class extends Cl(mi(u)){constructor(...e){super(...e),b(this,d_),this.value=0,this.min=0,this.max=100,this.step=10,this.valueUnit=``,w(this,u_,void 0),w(this,f_,e=>{e.stopPropagation(),this.value=Number(e.target.value),this._syncFormValue(),ts(this),ns(this)})}get slots(){return{...super.slots,input:()=>document.createElement(`craft-slide-picker-slider`)}}connectedCallback(){super.connectedCallback(),x(u_,this)??S(u_,this,C(d_,this,h_).call(this,this.value)),m_.call(C(d_,this))?.addEventListener(`input`,x(f_,this))}disconnectedCallback(){m_.call(C(d_,this))?.removeEventListener(`input`,x(f_,this)),super.disconnectedCallback()}_formValue(){return String(this.value)}formResetCallback(){this.value=x(u_,this)??this.min}willUpdate(e){super.willUpdate(e);let t=C(d_,this,h_).call(this,this.value);t!==this.value&&(this.value=t)}updated(e){super.updated(e);let t=m_.call(C(d_,this));t&&(t.min=this.min,t.max=this.max,t.step=this.step,t.value=String(this.value),t.readOnly=this.readOnly,t.disabled=this.disabled||this._formDisabled,t.valueText=e=>C(d_,this,g_).call(this,e))}focus(e){m_.call(C(d_,this))?.focus(e)}};function m_(){return this._control}function h_(e){let{min:t,max:n,step:r}=this,i=t+Math.round((Math.min(Math.max(Number.isFinite(e)?e:t,t),n)-t)/r)*r;return Math.min(Math.max(i,t),n)}function g_(e){if(this.valueLabel)return this.valueLabel(e);let t=this.valueUnit.trim(),n=/^\p{L}/u.test(t)?` `:``;return t?`${e}${n}${t}`:`${e}`}p_.styles=[ui,l_],r([c({type:Number})],p_.prototype,`value`,void 0),r([c({type:Number})],p_.prototype,`min`,void 0),r([c({type:Number})],p_.prototype,`max`,void 0),r([c({type:Number})],p_.prototype,`step`,void 0),r([c({attribute:`value-unit`})],p_.prototype,`valueUnit`,void 0),r([c({attribute:!1})],p_.prototype,`valueLabel`,void 0),customElements.get(`craft-slide-picker`)||customElements.define(`craft-slide-picker`,p_);var __=a`
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
`,K=new WeakSet,v_=new WeakMap,y_=new WeakMap,b_=new WeakMap,x_=new WeakMap,S_=new WeakMap,C_=new WeakMap,w_=new WeakMap,T_=new WeakMap,E_=class extends Cl(u){constructor(...e){super(...e),b(this,K),this.min=-45,this.max=45,this.value=0,this.graduationMin=-70,this.graduationMax=70,this.label=n(`Rotate`),w(this,v_,!1),w(this,y_,!1),w(this,b_,0),w(this,x_,0),w(this,S_,0),w(this,C_,0),w(this,w_,!1),w(this,T_,null)}_formValue(){return String(this.value)}_restoreFormValue(e){this.value=Math.min(Math.max(Number(e??0),this.min),this.max)}connectedCallback(){super.connectedCallback(),S(T_,this,new ResizeObserver(()=>C(K,this,k_).call(this))),x(T_,this).observe(this)}disconnectedCallback(){super.disconnectedCallback(),x(T_,this)?.disconnect(),S(T_,this,null)}firstUpdated(){S(C_,this,(C(K,this,O_).call(this).length-1)*10),C(K,this,k_).call(this)}updated(e){super.updated(e),(e.has(`value`)||e.has(`min`)||e.has(`max`)||e.has(`graduationMin`)||e.has(`graduationMax`))&&C(K,this,k_).call(this)}render(){return p`
      <div
        class="slide-rule"
        role="slider"
        tabindex=${D_.call(C(K,this))?0:-1}
        aria-label=${this.label}
        aria-valuemin=${this.min}
        aria-valuemax=${this.max}
        aria-valuenow=${this.value}
        aria-valuetext=${C(K,this,P_).call(this,this.value)}
        aria-disabled=${D_.call(C(K,this))?`false`:`true`}
        @keydown=${C(K,this,K_)}
        @pointerdown=${C(K,this,B_)}
        @pointermove=${C(K,this,V_)}
        @pointerup=${C(K,this,H_)}
        @pointercancel=${C(K,this,U_)}
      >
        <div class="cursor"></div>
        <div class="graduations">
          <div
            class="indicator"
            aria-hidden="true"
            ?hidden=${this.value===0}
          ></div>
          <ul aria-hidden="true">
            ${C(K,this,O_).call(this).map(e=>p`
                <li
                  class=${N({graduation:!0,"main-graduation":e%5==0})}
                  data-graduation=${e}
                >
                  <div class="label">${e}</div>
                </li>
              `)}
          </ul>
        </div>
      </div>
    `}};function D_(){return!this.disabled&&!this._formDisabled}function O_(){let e=[];for(let t=this.graduationMin;t<=this.graduationMax;t++)e.push(t);return e}function k_(){this._graduations?.offsetWidth&&C(K,this,M_).call(this),C(K,this,j_).call(this),!(!this._list||!this._graduations?.offsetWidth)&&(this._list.style.transform=`translateX(${C(K,this,I_).call(this,this.value)}px)`,C(K,this,A_).call(this))}function A_(){x(w_,this)||(S(w_,this,!0),requestAnimationFrame(()=>this._root?.classList.add(`placed`)))}function j_(){if(!this._indicator)return;let e=(this.graduationMin-this.graduationMax)*-1,t=x(C_,this)/e;this._indicator.style.inlineSize=`${Math.abs(this.value)*t}px`,this._indicator.style.translate=this.value>0?`-100%`:`0`}function M_(){let e=C(K,this,O_).call(this).length,t=this._list.getBoundingClientRect().width/e;t>0&&S(C_,this,(e-1)*t)}function N_(){let{transform:e}=getComputedStyle(this._list);return!e||e===`none`?0:new DOMMatrixReadOnly(e).m41}function P_(e){return n(`{num, number} {num, plural, =1{degree} other{degrees}}`,{num:Math.round(e)})}function F_(e){let t=this.graduationMin*-1,n=(this.graduationMin-this.graduationMax)*-1;return(this._graduations.offsetWidth/2+e*-1)/x(C_,this)*n-t}function I_(e){let t=this.graduationMin*-1,n=(this.graduationMin-this.graduationMax)*-1;return-((e+t)*x(C_,this)/n-this._graduations.offsetWidth/2)}function L_(e){let t=Math.min(Math.max(e,this.min),this.max);return t===this.value?!1:(this.value=t,this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),!0)}function R_(){this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}function z_(e){this.dispatchEvent(new CustomEvent(e,{detail:{value:this.value},bubbles:!0,composed:!0}))}function B_(e){S(y_,this,D_.call(C(K,this))&&this._graduations.contains(e.target)&&e.target!==this._graduations),x(y_,this)&&(e.preventDefault(),S(x_,this,e.clientX),S(S_,this,C(K,this,N_).call(this)),S(b_,this,this.value),this._root.setPointerCapture(e.pointerId),C(K,this,z_).call(this,`craft-drag-start`))}function V_(e){x(y_,this)&&Math.abs(e.clientX-x(x_,this))>3&&(S(v_,this,!0),this._root.classList.add(`dragging`),e.preventDefault(),C(K,this,G_).call(this,e))}function H_(e){x(y_,this)&&(x(v_,this)?e.preventDefault():C(K,this,G_).call(this,e),C(K,this,W_).call(this,e))}function U_(e){x(y_,this)&&C(K,this,W_).call(this,e)}function W_(e){S(v_,this,!1),this._root.classList.remove(`dragging`),this.value!==x(b_,this)&&C(K,this,R_).call(this),C(K,this,z_).call(this,`craft-drag-end`),this._root.hasPointerCapture(e.pointerId)&&this._root.releasePointerCapture(e.pointerId),S(x_,this,0),S(y_,this,!1)}function G_(e){let t=x(v_,this)?x(x_,this):this._cursor.getBoundingClientRect().left+this._cursor.offsetWidth/2,n=x(v_,this)?t-e.clientX:e.clientX-t,r=x(S_,this)-n;C(K,this,L_).call(this,C(K,this,F_).call(this,r))}function K_(e){if(!D_.call(C(K,this)))return;let t=this.value,n;switch(e.key){case`ArrowUp`:case`ArrowRight`:n=C(K,this,L_).call(this,t+1);break;case`ArrowDown`:case`ArrowLeft`:n=C(K,this,L_).call(this,t-1);break;case`PageUp`:n=C(K,this,L_).call(this,t+10);break;case`PageDown`:n=C(K,this,L_).call(this,t-10);break;case`Home`:n=C(K,this,L_).call(this,this.min);break;case`End`:n=C(K,this,L_).call(this,this.max);break;default:return}n&&C(K,this,R_).call(this),e.preventDefault()}E_.shadowRootOptions={...u.shadowRootOptions,delegatesFocus:!0},E_.styles=[__],r([c({type:Number})],E_.prototype,`min`,void 0),r([c({type:Number})],E_.prototype,`max`,void 0),r([c({type:Number})],E_.prototype,`value`,void 0),r([c({type:Number,attribute:`graduation-min`})],E_.prototype,`graduationMin`,void 0),r([c({type:Number,attribute:`graduation-max`})],E_.prototype,`graduationMax`,void 0),r([c()],E_.prototype,`label`,void 0),r([h(`.slide-rule`)],E_.prototype,`_root`,void 0),r([h(`.graduations`)],E_.prototype,`_graduations`,void 0),r([h(`.graduations ul`)],E_.prototype,`_list`,void 0),r([h(`.cursor`)],E_.prototype,`_cursor`,void 0),r([h(`.indicator`)],E_.prototype,`_indicator`,void 0),customElements.get(`craft-slide-rule`)||customElements.define(`craft-slide-rule`,E_);var q_=a`
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
`,J_=class extends u{constructor(...e){super(...e),this.label=null,this.status=null}getLabel(){return!this.label&&this.status?n(`Status: {status}`,{status:this.status}):this.label}render(){return p`
      <span
        class="${N({status:!0,"status--live":this.status===`live`,"status--enabled":this.status===`enabled`,"status--pending":this.status===`pending`,"status--expired":this.status===`expired`,"status--disabled":this.status===`disabled`})}"
        role="${this.getLabel()?`img`:i}"
        aria-label="${this.getLabel()??i}"
      ></span>
    `}};J_.styles=[q_],r([c()],J_.prototype,`label`,void 0),r([c()],J_.prototype,`status`,void 0),customElements.get(`craft-status`)||customElements.define(`craft-status`,J_);var Y_=new WeakSet,X_=new WeakMap,Z_=new WeakMap,Q_=new WeakMap,$_=class extends u{constructor(...e){super(...e),b(this,Y_),this.checked=!1,this.disabled=!1,this.indeterminate=!1,w(this,X_,()=>C(Y_,this,ev).call(this)),w(this,Z_,e=>{e.key===` `&&e.preventDefault()}),w(this,Q_,e=>{(e.key===` `||e.key===`Enter`)&&C(Y_,this,ev).call(this)})}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`switch`),this.addEventListener(`click`,x(X_,this)),this.addEventListener(`keydown`,x(Z_,this)),this.addEventListener(`keyup`,x(Q_,this))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,x(X_,this)),this.removeEventListener(`keydown`,x(Z_,this)),this.removeEventListener(`keyup`,x(Q_,this))}updated(e){super.updated(e),e.has(`disabled`)&&(this.tabIndex=this.disabled?-1:0,this.setAttribute(`aria-disabled`,String(this.disabled))),(e.has(`indeterminate`)||e.has(`checked`))&&this.setAttribute(`aria-checked`,this.checked?`true`:this.indeterminate?`mixed`:`false`)}render(){return p`
      <div class="btn">
        <div class="switch-button__track"></div>
        <div class="switch-button__thumb"></div>
      </div>
    `}static get styles(){return[a`
        :host {
          position: relative;
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

        .switch-button__track {
          width: 100%;
          height: 100%;
        }

        .switch-button__thumb {
          position: absolute;
        }

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

        .switch-button__track {
          ${qr}
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
      `]}};function ev(){this.disabled||(this.focus(),this.checked=!this.checked,ts(this),ns(this))}r([c({type:Boolean,reflect:!0})],$_.prototype,`checked`,void 0),r([c({type:Boolean,reflect:!0})],$_.prototype,`disabled`,void 0),r([c({type:Boolean,reflect:!0})],$_.prototype,`indeterminate`,void 0),customElements.get(`craft-switch-button`)||customElements.define(`craft-switch-button`,$_);var tv=a`
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
`;function nv(e){return(e??``).split(/\s+/).filter(Boolean)}function rv(e){return typeof CSS<`u`&&typeof CSS.escape==`function`?CSS.escape(e):e}var iv=new WeakMap,av=new WeakSet,ov=new WeakMap,sv=class extends as(u){constructor(...e){super(...e),b(this,av),this.size=`medium`,this.onLabel=``,this.offLabel=``,this.indeterminateValue=`-`,this.indeterminate=!1,this.__clickableExternalLabels=new Set,w(this,iv,!1),this.__onKeydown=e=>{if(e.key!==`ArrowLeft`&&e.key!==`ArrowRight`||this.disabled||e.target!==this._control)return;e.preventDefault();let t=getComputedStyle(this).direction===`rtl`;this._setCheckedState(e.key===(t?`ArrowLeft`:`ArrowRight`))},w(this,ov,e=>{e.target===this._control&&this.__syncHiddenInput()}),this.__onExternalLabelClick=e=>{this.disabled||e.composedPath().includes(this)||this._control?.click()}}get _defaultValue(){return`1`}get _control(){return super._control}get slots(){return{...super.slots,input:()=>{let e=document.createElement(`craft-switch-button`);return e.setAttribute(`size`,this.size),e.setAttribute(`data-tag-name`,`craft-switch-button`),e},"state-description":()=>{let e=document.createElement(`div`);return e.textContent=this._stateDescriptionText,e},"hidden-input":()=>{if(!this.name)return;let e=document.createElement(`input`);return e.type=`hidden`,e.name=this.name,e.value=this._postedValue,e.disabled=this.disabled,e}}}connectedCallback(){this.name||=this._hiddenInputNode?.name??``,super.connectedCallback(),this.__setupExternalLabelClicks(),this.addEventListener(`keydown`,this.__onKeydown),this.addEventListener(`input`,x(ov,this),!0),this.addEventListener(`change`,x(ov,this),!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`keydown`,this.__onKeydown),this.removeEventListener(`input`,x(ov,this),!0),this.removeEventListener(`change`,x(ov,this),!0),this.__teardownExternalLabelClicks()}_onLabelClick(){this.disabled||this._control?.click()}get _hiddenInputNode(){return Array.from(this.children).find(e=>e instanceof HTMLInputElement&&e.slot===`hidden-input`)}get _postedValue(){return this.checked?this.value:this.indeterminate?this.indeterminateValue:``}get _stateDescriptionNode(){return Array.from(this.children).find(e=>e.slot===`state-description`)}get _stateDescriptionText(){return[this.onLabel?n(`Check for {onLabel}.`,{onLabel:this.onLabel}):``,this.offLabel?n(`Uncheck for {offLabel}.`,{offLabel:this.offLabel}):``].filter(Boolean).join(` `)}willUpdate(e){super.willUpdate(e),e.has(`checked`)&&this.checked&&this.indeterminate&&(this.indeterminate=!1)}updated(e){super.updated(e),(e.has(`onLabel`)||e.has(`offLabel`))&&this.__syncStateDescription(),[`checked`,`indeterminate`,`value`,`indeterminateValue`,`disabled`,`size`].some(t=>e.has(t))&&(this.__syncSwitchButton(),this.__syncHiddenInput()),(e.has(`checked`)||e.has(`indeterminate`))&&this.__syncToggleTargets()}__syncToggleTargets(){let e=this._control;if(!e)return;let t=e.getAttribute(`data-target`),n=e.getAttribute(`data-reverse-target`);if(!t&&!n)return;let r=window.jQuery;r&&r(e).data?.(`fieldtoggle`)||(this.__toggleTargets(t,this.checked),this.__toggleTargets(n,!this.checked))}__toggleTargets(e,t){if(!e)return;let n=/^[#.]/.test(e)?e:`#${e}`,r=this.getRootNode(),i=!1;for(let e of r.querySelectorAll(n))e.classList.contains(`hidden`)===t&&(e.classList.toggle(`hidden`,!t),i=!0);i&&t&&window.dispatchEvent(new Event(`resize`))}_setCheckedState(e){if(this.disabled)return;let t=this.indeterminate;this.checked===e&&!t||(this.indeterminate=!1,this.checked=e,this.__dispatchNativeChange())}get on(){return this.checked}get postedValue(){return this._postedValue}turnOn(e=!1){C(av,this,cv).call(this,()=>this._setCheckedState(!0),e)}turnOff(e=!1){C(av,this,cv).call(this,()=>this._setCheckedState(!1),e)}turnIndeterminate(e=!1){C(av,this,cv).call(this,()=>{this.indeterminate&&!this.checked||(this.checked=!1,this.indeterminate=!0,this.__dispatchNativeChange())},e)}__dispatchNativeChange(){x(iv,this)||this._control&&ns(this._control)}__setupExternalLabelClicks(){let e=this._control;if(!e)return;let t=this.getRootNode(),n=new Set(nv(e.getAttribute(`aria-labelledby`)).map(e=>t.getElementById?.(e)).filter(e=>e instanceof HTMLLabelElement).filter(e=>e!==this._labelNode));if(e.id)for(let r of t.querySelectorAll(`label[for="${rv(e.id)}"]`))n.add(r);for(let e of n)this.__clickableExternalLabels.has(e)||(e.addEventListener(`click`,this.__onExternalLabelClick),this.__clickableExternalLabels.add(e))}__teardownExternalLabelClicks(){for(let e of this.__clickableExternalLabels)e.removeEventListener(`click`,this.__onExternalLabelClick);this.__clickableExternalLabels.clear()}__syncSwitchButton(){let e=this._control;if(!e)return;e.getAttribute(`size`)!==this.size&&e.setAttribute(`size`,this.size);let t=this.indeterminate&&!this.checked;e.indeterminate!==t&&(e.indeterminate=t)}__syncHiddenInput(){let e=this._hiddenInputNode;e&&(e.value=this._postedValue,e.disabled=this.disabled,this.name&&e.name!==this.name&&(e.name=this.name))}__syncStateDescription(){let e=this._stateDescriptionNode;if(!e)return;let t=this._stateDescriptionText;e.textContent=t,t?this.addToAriaDescribedBy(e,{idPrefix:`state-description`}):this.removeFromAriaDescribedBy(e)}render(){return p`
      <div class="form-field__group-one">${this._groupOneTemplate()}</div>
      <div class="form-field__group-two form-field__group-two--switch">
        ${this._groupTwoTemplate()}
      </div>
    `}_groupOneTemplate(){return p`${super._groupOneTemplate()} ${this._feedbackTemplate()}
    ${this._stateDescriptionTemplate()}`}_groupTwoTemplate(){return this._inputGroupTemplate()}_stateDescriptionTemplate(){return p`<slot name="state-description"></slot>`}_stateLabelTemplate(e){let t=e===`on`?this.onLabel:this.offLabel;return t?p`<span
      class="state-label"
      data-state=${e}
      aria-hidden="true"
      @click=${()=>this._setCheckedState(e===`on`)}
      >${t}</span
    >`:i}_inputGroupBeforeTemplate(){return p`
      <div class="input-group__before">
        <slot name="before"></slot>
        ${this._stateLabelTemplate(`off`)}
      </div>
    `}_inputGroupAfterTemplate(){return p`
      <div class="input-group__after">
        ${this._stateLabelTemplate(`on`)}
        <slot name="after"></slot>
      </div>
    `}};function cv(e,t){if(!this.disabled){if(!t){e();return}S(iv,this,!0),e(),S(iv,this,!1)}}sv.styles=[...rs,Xr,tv],r([c({type:String,reflect:!0})],sv.prototype,`size`,void 0),r([c({type:String,attribute:`on-label`})],sv.prototype,`onLabel`,void 0),r([c({type:String,attribute:`off-label`})],sv.prototype,`offLabel`,void 0),r([c({attribute:`indeterminate-value`})],sv.prototype,`indeterminateValue`,void 0),r([c({type:Boolean,reflect:!0})],sv.prototype,`indeterminate`,void 0),customElements.get(`craft-switch`)||customElements.define(`craft-switch`,sv);var lv=a`
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
    display: flex;
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

  /* Beats any selected weight from outside the tab, which would otherwise
     fight the tab's own and its width-reserving label copy. */
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

  .tabs__panels ::slotted([slot='panel']) {
    display: none;
  }

  .tabs__panels ::slotted([slot='panel'][selected]) {
    display: block;
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
`,uv={BlockStart:`block-start`,BlockEnd:`block-end`,InlineStart:`inline-start`,InlineEnd:`inline-end`};Object.values(uv);var dv={Line:`line`,Fill:`fill`};Object.values(dv);var fv={Horizontal:`horizontal`,Vertical:`vertical`};Object.values(fv);var pv=[uv.InlineStart,uv.InlineEnd],mv={horizontal:new Set([`ArrowLeft`,`ArrowRight`,`Home`,`End`]),vertical:new Set([`ArrowUp`,`ArrowDown`,`Home`,`End`])},hv=new WeakMap,q=new WeakSet,gv=new WeakMap,_v=new WeakMap,vv=new WeakMap,yv=new WeakMap,bv=new WeakMap,xv=new WeakMap,Sv=new WeakMap,Cv=new WeakMap,wv=new WeakMap,Tv=new WeakMap,Ev=new WeakMap,Dv=class extends u{constructor(...e){super(...e),b(this,q),w(this,hv,0),this.placement=uv.BlockStart,this.appearance=dv.Line,this.label=null,this.equalWidth=!1,this.syncLocationHash=!0,this.size=`medium`,w(this,gv,[]),w(this,_v,!1),w(this,vv,[]),w(this,yv,null),w(this,bv,null),w(this,xv,void 0),w(this,Sv,!1),w(this,Cv,()=>{let e=decodeURIComponent(window.location.hash.slice(1));if(e===``)return;let t=jv.call(C(q,this)).findIndex((t,n)=>C(q,this,Rv).call(this,n)===e);t>=0&&t!==this.selectedIndex&&(this.selectedIndex=t)}),w(this,wv,()=>{C(q,this,Bv).call(this),!x(_v,this)&&this.tabs.length!==this.panels.length&&console.warn(`The amount of tabs (${this.tabs.length}) doesn't match the amount of panels (${this.panels.length}).`),jv.call(C(q,this)).forEach((e,t)=>{let n=()=>C(q,this,Jv).call(this,t,!0),r=e=>{kv.call(C(q,this)).has(e.key)&&e.preventDefault()},i=e=>C(q,this,Yv).call(this,e);e.addEventListener(`click`,n),e.addEventListener(`keydown`,r),e.addEventListener(`keyup`,i),x(gv,this).push(()=>{e.removeEventListener(`click`,n),e.removeEventListener(`keydown`,r),e.removeEventListener(`keyup`,i)})}),C(q,this,Fv).call(this)||C(q,this,Vv).call(this)}),w(this,Tv,()=>{x(Sv,this)||(S(Sv,this,!0),requestAnimationFrame(()=>{S(Sv,this,!1),C(q,this,Uv).call(this)}))}),w(this,Ev,e=>{e.target===e.currentTarget&&e.stopPropagation()})}get selectedIndex(){return x(hv,this)}set selectedIndex(e){S(hv,this,e),x(_v,this)||C(q,this,Vv).call(this)}get layout(){return Ov.call(C(q,this))?fv.Vertical:fv.Horizontal}set layout(e){this.placement=e===fv.Vertical?uv.InlineStart:uv.BlockStart}get tabs(){return C(q,this,Av).call(this,`tab`)}get panels(){return C(q,this,Av).call(this,`panel`)}refresh(){C(q,this,Vv).call(this),C(q,this,Uv).call(this)}firstUpdated(e){super.firstUpdated(e),S(_v,this,jv.call(C(q,this)).some(e=>e.controls));let t=this.shadowRoot?.querySelector(`slot[name="tab"]`);t?.addEventListener(`slotchange`,x(wv,this)),this.shadowRoot?.querySelector(`slot[name="panel"]`)?.addEventListener(`slotchange`,x(wv,this)),x(wv,this).call(this),S(bv,this,this.selectedIndex),this.syncLocationHash&&x(Cv,this).call(this),t?.addEventListener(`slotchange`,x(Tv,this)),C(q,this,Pv).call(this),C(q,this,Uv).call(this),this.label||console.error("<craft-tabs> needs a `label` naming what its tabs switch between.",this)}connectedCallback(){super.connectedCallback(),this.hasUpdated&&(x(wv,this).call(this),C(q,this,Pv).call(this))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`hashchange`,x(Cv,this)),C(q,this,Bv).call(this),x(xv,this)?.disconnect(),S(xv,this,void 0)}updated(e){super.updated(e),!(e.has(`selectedIndex`)&&C(q,this,Fv).call(this))&&(e.has(`selectedIndex`)&&(x(_v,this)&&C(q,this,Vv).call(this),x(bv,this)!==null&&this.selectedIndex!==x(bv,this)&&(C(q,this,zv).call(this),this.dispatchEvent(new CustomEvent(`craft-tab-show`))),S(bv,this,this.selectedIndex)),(e.has(`selectedIndex`)||e.has(`placement`)||e.has(`size`)||e.has(`equalWidth`))&&C(q,this,Uv).call(this))}render(){return p`
      <div class="tabs" part="base">
        <div class="tabs__strip" part="strip">
          <div
            class="tabs__tab-group"
            part="tab-group"
            role="tablist"
            aria-label="${this.label||i}"
            aria-orientation="${Ov.call(C(q,this))?`vertical`:`horizontal`}"
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
            @craft-show=${x(Ev,this)}
            @craft-hide=${x(Ev,this)}
            @craft-after-show=${x(Ev,this)}
            @craft-after-hide=${x(Ev,this)}
            @craft-select=${x(Ev,this)}
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
    `}};function Ov(){return pv.includes(this.placement)}function kv(){return mv[Ov.call(C(q,this))?`vertical`:`horizontal`]}function Av(e){return Array.from(this.children).filter(t=>t instanceof HTMLElement&&t.slot===e)}function jv(){return this.tabs}function Mv(){return this.shadowRoot?.querySelector(`.tabs__tab-group`)??null}function Nv(){return this.shadowRoot?.querySelector(`.tabs__overflow`)??null}function Pv(){this.syncLocationHash&&window.addEventListener(`hashchange`,x(Cv,this)),S(xv,this,new ResizeObserver(x(Tv,this))),x(xv,this).observe(this)}function Fv(){if(C(q,this,Iv).call(this,this.selectedIndex))return!1;let e=jv.call(C(q,this)).findIndex((e,t)=>C(q,this,Iv).call(this,t));return e<0||e===this.selectedIndex?!1:(this.selectedIndex=e,!0)}function Iv(e){let t=jv.call(C(q,this))[e];return!!t&&!t.disabled&&(x(_v,this)||e<this.panels.length)}function Lv(){jv.call(C(q,this)).forEach((e,t)=>{e.setAttribute(`tabindex`,t===this.selectedIndex?`0`:`-1`)})}function Rv(e){return jv.call(C(q,this))[e]?.controls||null}function zv(){let e=this.syncLocationHash?C(q,this,Rv).call(this,this.selectedIndex):null;if(e===null)return;let t=new URL(window.location.href);t.hash=e,window.history.replaceState(window.history.state,``,t)}function Bv(){for(;x(gv,this).length;)x(gv,this).pop()?.()}function Vv(){if(!this.hasUpdated)return;let e=this.panels,t=jv.call(C(q,this)).map((t,n)=>x(_v,this)?C(q,this,Hv).call(this,t):e[n]??null),n=t.some(Boolean);jv.call(C(q,this)).forEach((e,r)=>{let i=r===this.selectedIndex,a=t[r];if(e.id||=Qr(`tab`),e.setAttribute(`role`,`tab`),e.toggleAttribute(`selected`,i),e.setAttribute(`aria-selected`,String(i)),!a){x(_v,this)&&n&&console.error(`<craft-tabs> found no panel with id "${e.controls}".`,e);return}a.id||=Qr(`panel`),e.setAttribute(`aria-controls`,a.id),a.setAttribute(`role`,`tabpanel`),a.setAttribute(`aria-labelledby`,e.id),a.hasAttribute(`tabindex`)||a.setAttribute(`tabindex`,`0`),x(_v,this)&&a.classList.toggle(`hidden`,!i),a.toggleAttribute(`selected`,i)}),x(_v,this)||e.slice(jv.call(C(q,this)).length).forEach(e=>e.removeAttribute(`selected`)),C(q,this,Lv).call(this)}function Hv(e){return e.controls?document.getElementById(e.controls):null}function Uv(){let e=Mv.call(C(q,this)),t=Nv.call(C(q,this)),n=jv.call(C(q,this));if(!e||!t)return;if(Ov.call(C(q,this))||this.equalWidth||n.length===0){C(q,this,Gv).call(this,[]);return}n.forEach(e=>e.removeAttribute(`hidden`)),t.hidden=!0,e.classList.add(`tabs__tab-group--measuring`);let r=C(q,this,Wv).call(this,e),i=n.map(e=>e.offsetWidth);if(e.classList.remove(`tabs__tab-group--measuring`),i.reduce((e,t,n)=>e+t+(n?r:0),0)<=e.clientWidth+1){C(q,this,Gv).call(this,[]);return}t.hidden=!1;let a=e.clientWidth,o=[],s=0;for(let e=0;e<n.length;e++){let t=i[e]+(o.length?r:0);if(s+t>a+1)break;s+=t,o.push(e)}let c=this.selectedIndex;if(c>=0&&c<n.length&&!o.includes(c)){let e=i[c];for(;o.length&&s+e+r>a;){let e=o.pop();s-=i[e]+(o.length?r:0)}o.push(c)}let l=new Set(o);C(q,this,Gv).call(this,n.map((e,t)=>t).filter(e=>!l.has(e)))}function Wv(e){let t=parseFloat(getComputedStyle(e).columnGap);return Number.isFinite(t)?t:0}function Gv(e){let t=Nv.call(C(q,this)),n=new Set(e);if(jv.call(C(q,this)).forEach((e,t)=>{e.toggleAttribute(`hidden`,n.has(t))}),S(vv,this,e),!t)return;t.hidden=e.length===0;let r=JSON.stringify(e.map(e=>{let t=jv.call(C(q,this))[e];return[e,t.textContent?.trim()??``,t.disabled]}));r!==x(yv,this)&&(S(yv,this,r),t.actions=C(q,this,Kv).call(this))}function Kv(){return x(vv,this).map(e=>{let t=jv.call(C(q,this))[e];return{label:t.textContent?.trim()??``,disabled:t.disabled,onClick:()=>C(q,this,qv).call(this,e)}})}function qv(e){let t=jv.call(C(q,this))[e];if(!t||!C(q,this,Iv).call(this,e))return;let n=Nv.call(C(q,this));n&&(n.open=!1),this.selectedIndex=e,C(q,this,Uv).call(this),t.focus()}function Jv(e,t){let n=jv.call(C(q,this))[e];!n||!C(q,this,Iv).call(this,e)||(this.selectedIndex=e,t&&n.focus())}function Yv(e){if(!kv.call(C(q,this)).has(e.key))return;let t=C(q,this,Xv).call(this,e.key);t!==-1&&C(q,this,Jv).call(this,t,!0)}function Xv(e){let t=jv.call(C(q,this)),n=e=>C(q,this,Iv).call(this,e)&&!t[e].hidden;if(e===`Home`)return t.findIndex((e,t)=>n(t));if(e===`End`){for(let e=t.length-1;e>=0;e--)if(n(e))return e;return-1}let r=e===`ArrowRight`||e===`ArrowDown`?1:-1;for(let e=1;e<=t.length;e++){let i=((this.selectedIndex+r*e)%t.length+t.length)%t.length;if(n(i))return i}return-1}Dv.styles=[A,lv],r([c({type:Number,attribute:`selected-index`,reflect:!0})],Dv.prototype,`selectedIndex`,null),r([c({reflect:!0})],Dv.prototype,`placement`,void 0),r([c({reflect:!0})],Dv.prototype,`appearance`,void 0),r([c()],Dv.prototype,`label`,void 0),r([c({type:Boolean,reflect:!0,attribute:`equal-width`})],Dv.prototype,`equalWidth`,void 0),r([c({attribute:`sync-location-hash`,converter:{fromAttribute:e=>e!==`false`}})],Dv.prototype,`syncLocationHash`,void 0),r([c({reflect:!0})],Dv.prototype,`layout`,null),r([c({reflect:!0})],Dv.prototype,`size`,void 0),Dv.disableWarning?.(`change-in-update`),customElements.get(`craft-tabs`)||customElements.define(`craft-tabs`,Dv);var Zv=a`
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
    ${_i}
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
`,Qv=class extends u{constructor(...e){super(...e),this.disabled=!1,this.controls=null,this._lightDom=new M(this,{characterData:!0})}get selected(){return this.hasAttribute(`selected`)}render(){return p`<slot name="prefix" class="tab__prefix"></slot
      ><span class="tab__label" data-text="${this.textContent?.trim()??``}"
        ><span class="tab__text"><slot></slot></span></span
      ><slot name="suffix" class="tab__suffix"></slot>`}};Qv.styles=[A,Zv],r([c({type:Boolean,reflect:!0})],Qv.prototype,`disabled`,void 0),r([c({reflect:!0})],Qv.prototype,`controls`,void 0),customElements.get(`craft-tab`)||customElements.define(`craft-tab`,Qv);var $v=class{diff(e,t,n={}){let r;typeof n==`function`?(r=n,n={}):`callback`in n&&(r=n.callback);let i=this.castInput(e,n),a=this.castInput(t,n),o=this.removeEmpty(this.tokenize(i,n)),s=this.removeEmpty(this.tokenize(a,n));return this.diffWithOptionsObj(o,s,n,r)}diffWithOptionsObj(e,t,n,r){let i=e=>{if(e=this.postProcess(e,n),r){setTimeout(function(){r(e)},0);return}else return e},a=t.length,o=e.length,s=1,c=a+o;n.maxEditLength!=null&&(c=Math.min(c,n.maxEditLength));let l=n.timeout??1/0,u=Date.now()+l,d=[{oldPos:-1,lastComponent:void 0}],f=this.extractCommon(d[0],t,e,0,n);if(d[0].oldPos+1>=o&&f+1>=a)return i(this.buildValues(d[0].lastComponent,t,e));let p=-1/0,m=1/0,h=()=>{for(let r=Math.max(p,-s);r<=Math.min(m,s);r+=2){let s,c=d[r-1],l=d[r+1];c&&(d[r-1]=void 0);let u=!1;if(l){let e=l.oldPos-r;u=l&&0<=e&&e<a}let h=c&&c.oldPos+1<o;if(!u&&!h){d[r]=void 0;continue}if(s=!h||u&&c.oldPos<l.oldPos?this.addToPath(l,!0,!1,0,n):this.addToPath(c,!1,!0,1,n),f=this.extractCommon(s,t,e,r,n),s.oldPos+1>=o&&f+1>=a)return i(this.buildValues(s.lastComponent,t,e))||!0;d[r]=s,s.oldPos+1>=o&&(m=Math.min(m,r-1)),f+1>=a&&(p=Math.max(p,r+1))}s++};if(r)(function e(){setTimeout(function(){if(s>c||Date.now()>u)return r(void 0);h()||e()},0)})();else for(;s<=c&&Date.now()<=u;){let e=h();if(e)return e}}addToPath(e,t,n,r,i){let a=e.lastComponent;return a&&!i.oneChangePerToken&&a.added===t&&a.removed===n?{oldPos:e.oldPos+r,lastComponent:{count:a.count+1,added:t,removed:n,previousComponent:a.previousComponent}}:{oldPos:e.oldPos+r,lastComponent:{count:1,added:t,removed:n,previousComponent:a}}}extractCommon(e,t,n,r,i){let a=t.length,o=n.length,s=e.oldPos,c=s-r,l=0;for(;c+1<a&&s+1<o&&this.equals(n[s+1],t[c+1],i);)c++,s++,l++,i.oneChangePerToken&&(e.lastComponent={count:1,previousComponent:e.lastComponent,added:!1,removed:!1});return l&&!i.oneChangePerToken&&(e.lastComponent={count:l,previousComponent:e.lastComponent,added:!1,removed:!1}),e.oldPos=s,c}equals(e,t,n){return n.comparator?n.comparator(e,t):e===t||!!n.ignoreCase&&e.toLowerCase()===t.toLowerCase()}removeEmpty(e){let t=[];for(let n=0;n<e.length;n++)e[n]&&t.push(e[n]);return t}castInput(e,t){return e}tokenize(e,t){return Array.from(e)}join(e){return e.join(``)}postProcess(e,t){return e}get useLongestToken(){return!1}buildValues(e,t,n){let r=[],i;for(;e;)r.push(e),i=e.previousComponent,delete e.previousComponent,e=i;r.reverse();let a=r.length,o=0,s=0,c=0;for(;o<a;o++){let e=r[o];if(e.removed)e.value=this.join(n.slice(c,c+e.count)),c+=e.count;else{if(!e.added&&this.useLongestToken){let r=t.slice(s,s+e.count);r=r.map(function(e,t){let r=n[c+t];return r.length>e.length?r:e}),e.value=this.join(r)}else e.value=this.join(t.slice(s,s+e.count));s+=e.count,e.added||(c+=e.count)}}return r}};new class extends $v{};function ey(e,t){let n;for(n=0;n<e.length&&n<t.length;n++)if(e[n]!=t[n])return e.slice(0,n);return e.slice(0,n)}function ty(e,t){let n;if(!e||!t||e[e.length-1]!=t[t.length-1])return``;for(n=0;n<e.length&&n<t.length;n++)if(e[e.length-(n+1)]!=t[t.length-(n+1)])return e.slice(-n);return e.slice(-n)}function ny(e,t,n){if(e.slice(0,t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't start with prefix ${JSON.stringify(t)}; this is a bug`);return n+e.slice(t.length)}function ry(e,t,n){if(!t)return e+n;if(e.slice(-t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't end with suffix ${JSON.stringify(t)}; this is a bug`);return e.slice(0,-t.length)+n}function iy(e,t){return ny(e,t,``)}function ay(e,t){return ry(e,t,``)}function oy(e,t){return t.slice(0,sy(e,t))}function sy(e,t){let n=0;e.length>t.length&&(n=e.length-t.length);let r=t.length;e.length<t.length&&(r=e.length);let i=Array(r),a=0;i[0]=0;for(let e=1;e<r;e++){for(t[e]==t[a]?i[e]=i[a]:i[e]=a;a>0&&t[e]!=t[a];)a=i[a];t[e]==t[a]&&a++}a=0;for(let r=n;r<e.length;r++){for(;a>0&&e[r]!=t[a];)a=i[a];e[r]==t[a]&&a++}return a}function cy(e,t){let n=[];for(let r of Array.from(t.segment(e))){let e=r.segment;n.length&&/\s/.test(n[n.length-1])&&/\s/.test(e)?n[n.length-1]+=e:n.push(e)}return n}function ly(e,t){if(t)return dy(e,t)[1];let n;for(n=e.length-1;n>=0&&e[n].match(/\s/);n--);return e.substring(n+1)}function uy(e,t){if(t)return dy(e,t)[0];let n=e.match(/^\s*/);return n?n[0]:``}function dy(e,t){if(!t)return[uy(e),ly(e)];if(t.resolvedOptions().granularity!=`word`)throw Error(`The segmenter passed must have a granularity of "word"`);let n=cy(e,t),r=n[0],i=n[n.length-1];return[/\s/.test(r)?r:``,/\s/.test(i)?i:``]}var fy=`a-zA-Z0-9_\\u{AD}\\u{C0}-\\u{D6}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}`,py=RegExp(`[${fy}]+|\\s+|[^${fy}]`,`ug`);new class extends $v{equals(e,t,n){return n.ignoreCase&&(e=e.toLowerCase(),t=t.toLowerCase()),e.trim()===t.trim()}tokenize(e,t={}){let n;if(t.intlSegmenter){let r=t.intlSegmenter;if(r.resolvedOptions().granularity!=`word`)throw Error(`The segmenter passed must have a granularity of "word"`);n=cy(e,r)}else n=e.match(py)||[];let r=[],i=null;return n.forEach(e=>{/\s/.test(e)?i==null?r.push(e):r.push(r.pop()+e):i!=null&&/\s/.test(i)?r[r.length-1]==i?r.push(r.pop()+e):r.push(i+e):r.push(e),i=e}),r}join(e){return e.map((e,t)=>t==0?e:e.replace(/^\s+/,``)).join(``)}postProcess(e,t){if(!e||t.oneChangePerToken)return e;let n=null,r=null,i=null;return e.forEach(e=>{e.added?r=e:e.removed?i=e:((r||i)&&my(n,i,r,e,t.intlSegmenter),n=e,r=null,i=null)}),(r||i)&&my(n,i,r,null,t.intlSegmenter),e}};function my(e,t,n,r,i){if(t&&n){let[a,o]=dy(t.value,i),[s,c]=dy(n.value,i);if(e){let r=ey(a,s);e.value=ry(e.value,s,r),t.value=iy(t.value,r),n.value=iy(n.value,r)}if(r){let e=ty(o,c);r.value=ny(r.value,c,e),t.value=ay(t.value,e),n.value=ay(n.value,e)}}else if(n){if(e){let e=uy(n.value,i);n.value=n.value.substring(e.length)}if(r){let e=uy(r.value,i);r.value=r.value.substring(e.length)}}else if(e&&r){let n=uy(r.value,i),[a,o]=dy(t.value,i),s=ey(n,a);t.value=iy(t.value,s);let c=ty(iy(n,s),o);t.value=ay(t.value,c),r.value=ny(r.value,n,c),e.value=ry(e.value,n,n.slice(0,n.length-c.length))}else if(r){let e=uy(r.value,i),n=oy(ly(t.value,i),e);t.value=ay(t.value,n)}else if(e){let n=oy(ly(e.value,i),uy(t.value,i));t.value=iy(t.value,n)}}var hy=new class extends $v{tokenize(e){let t=RegExp(`(\\r?\\n)|[${fy}]+|[^\\S\\n\\r]+|[^${fy}]`,`ug`);return e.match(t)||[]}};function gy(e,t,n){return hy.diff(e,t,n)}new class extends $v{constructor(){super(...arguments),this.tokenize=_y}equals(e,t,n){return n.ignoreWhitespace?((!n.newlineIsToken||!e.includes(`
`))&&(e=e.trim()),(!n.newlineIsToken||!t.includes(`
`))&&(t=t.trim())):n.ignoreNewlineAtEof&&!n.newlineIsToken&&(e.endsWith(`
`)&&(e=e.slice(0,-1)),t.endsWith(`
`)&&(t=t.slice(0,-1))),super.equals(e,t,n)}};function _y(e,t){t.stripTrailingCr&&(e=e.replace(/\r\n/g,`
`));let n=[],r=e.split(/(\n|\r\n)/);r[r.length-1]||r.pop();for(let e=0;e<r.length;e++){let i=r[e];e%2&&!t.newlineIsToken?n[n.length-1]+=i:n.push(i)}return n}function vy(e){return e==`.`||e==`!`||e==`?`}new class extends $v{tokenize(e){let t=[],n=0;for(let r=0;r<e.length;r++){if(r==e.length-1){t.push(e.slice(n));break}if(vy(e[r])&&e[r+1].match(/\s/)){for(t.push(e.slice(n,r+1)),r=n=r+1;e[r+1]?.match(/\s/);)r++;t.push(e.slice(n,r+1)),n=r+1}}return t}},new class extends $v{tokenize(e){return e.split(/([{}:;,]|\s+)/)}},new class extends $v{constructor(){super(...arguments),this.tokenize=_y}get useLongestToken(){return!0}castInput(e,t){let{undefinedReplacement:n,stringifyReplacer:r=(e,t)=>t===void 0?n:t}=t;return typeof e==`string`?e:JSON.stringify(yy(e,null,null,r),null,`  `)}equals(e,t,n){return super.equals(e.replace(/,([\r\n])/g,`$1`),t.replace(/,([\r\n])/g,`$1`),n)}};function yy(e,t,n,r,i){t||=[],n||=[],r&&(e=r(i===void 0?``:i,e));let a;for(a=0;a<t.length;a+=1)if(t[a]===e)return n[a];let o;if(Object.prototype.toString.call(e)===`[object Array]`){for(t.push(e),o=Array(e.length),n.push(o),a=0;a<e.length;a+=1)o[a]=yy(e[a],t,n,r,String(a));return t.pop(),n.pop(),o}if(e&&e.toJSON&&(e=e.toJSON()),typeof e==`object`&&e){t.push(e),o={},n.push(o);let i=[],s;for(s in e)Object.prototype.hasOwnProperty.call(e,s)&&i.push(s);for(i.sort(),a=0;a<i.length;a+=1)s=i[a],o[s]=yy(e[s],t,n,r,s);t.pop(),n.pop()}else o=e;return o}new class extends $v{tokenize(e){return e.slice()}join(e){return e}removeEmpty(e){return e}};var by=e=>!e.added&&!e.removed;function xy(e,t){let n=gy(e,t,{timeout:100})??[{value:e,added:!1,removed:!0,count:1},{value:t,added:!0,removed:!1,count:1}],r=[],i=``,a=``,o=()=>{i&&r.push({value:i,added:!1,removed:!0,count:1}),a&&r.push({value:a,added:!0,removed:!1,count:1}),i=a=``};return n.forEach((e,t)=>{let s=n[t+1],c=by(e)&&/^[^\S\r\n\u2028\u2029]+$/.test(e.value)&&!!(i||a)&&s!==void 0&&!by(s);(e.removed||c)&&(i+=e.value),(e.added||c)&&(a+=e.value),by(e)&&!c&&(o(),r.push(e))}),o(),r}function Sy(e,t,n=[],r=!1){if(!e)return{pieces:[{kind:`equal`,parts:[{text:t.map(e=>e.value).join(``),marked:!1}]}],collapsible:!1};let i=n.flatMap(t=>{let n=e.indexOf(t);return n===-1?[]:[[n,n+t.length]]}),a=[],o=0,s=!1;return t.forEach((e,n)=>{let c=e.value;if(e.added){a.push({kind:`insert`,parts:[{text:c,marked:!1}]});return}let l=o;if(o+=c.length,e.removed||c.length<=200){a.push({kind:e.removed?`delete`:`equal`,parts:Ey(c,l,i)});return}let u=[],d={kind:`gap`,parts:[{text:`…`,marked:!1}]},f=0;for(let[e,r]of Cy(c,l,n>0,n<t.length-1,i))e>f&&u.push(d),u.push({kind:`equal`,parts:Ey(c.slice(e,r),l+e,i)}),f=r;f<c.length&&u.push(d),s||=u.includes(d),a.push(...r?[{kind:`equal`,parts:Ey(c,l,i)}]:u)}),{pieces:a,collapsible:s}}function Cy(e,t,n,r,i){let a=[];n&&a.push([0,80]),r&&a.push([e.length-80,e.length]);for(let[n,r]of i)n<t+e.length&&r>t&&a.push([n-t-80/2,r-t+80/2]);if(!a.length)return[[0,e.length]];let o=[];for(let[t,n]of a.map(([t,n])=>[wy(e,Math.max(t,0)),Ty(e,Math.min(n,e.length))]).sort((e,t)=>e[0]-t[0])){let e=o.at(-1);e&&t-e[1]<40?e[1]=Math.max(e[1],n):o.push([t,n])}return o[0][0]<40&&(o[0][0]=0),e.length-o.at(-1)[1]<40&&(o.at(-1)[1]=e.length),o}function wy(e,t){let n=e.slice(0,t).search(/\s\S*$/);return t===0||n===-1?0:n+1}function Ty(e,t){let n=e.slice(t).search(/\s/);return n===-1?e.length:t+n}function Ey(e,t,n){let r=(e,t)=>n.some(([n,r])=>n<t&&r>e),i=new Set([0,e.length]);for(let[r,a]of n)i.add(Math.min(Math.max(r-t,0),e.length)),i.add(Math.min(Math.max(a-t,0),e.length));let a=[...i].sort((e,t)=>e-t);return a.slice(1).flatMap((n,i)=>{let o=a[i];return n>o?[{text:e.slice(o,n),marked:r(t+o,t+n)}]:[]})}var Dy=a`
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
`,Oy=class extends u{constructor(...e){super(...e),this.current=``,this.proposed=``,this.highlights=[],this.collapse=!1,this.label=``,this.expanded=!1,this.changes=[]}willUpdate(e){(e.has(`current`)||e.has(`proposed`))&&(this.changes=xy(this.current,this.proposed),this.expanded=!1)}render(){let{pieces:e,collapsible:t}=Sy(this.current,this.changes,this.highlights,!this.collapse||this.expanded);return p`
      <p id="text" class="text" part="text">${e.map(e=>this.renderPiece(e))}</p>
      ${this.collapse&&t?p`<craft-button
            part="toggle"
            type="button"
            variant="plain"
            size="small"
            flush="inline"
            aria-controls="text"
            aria-expanded=${this.expanded?`true`:`false`}
            @click=${()=>this.expanded=!this.expanded}
          >
            ${this.expanded?n(`Show changes only`):n(`Show full text`)}${this.label?p`<span class="cp-visually-hidden"> ${this.label}</span>`:i}
          </craft-button>`:i}
    `}renderPiece(e){let t=e.parts.map(e=>e.marked?p`<mark>${e.text}</mark>`:p`${e.text}`);switch(e.kind){case`gap`:return p`<span class="gap"
          ><span aria-hidden="true">${t}</span
          ><span class="cp-visually-hidden">${n(`Unchanged text`)}</span></span
        >`;case`delete`:return p`<del
          ><span class="cp-visually-hidden">${n(`Deleted:`)} </span>${t}</del
        >`;case`insert`:return p`<ins
          ><span class="cp-visually-hidden">${n(`Inserted:`)} </span
          >${t}</ins
        >`;default:return t}}};Oy.styles=[re,Dy],r([c()],Oy.prototype,`current`,void 0),r([c()],Oy.prototype,`proposed`,void 0),r([c({type:Array})],Oy.prototype,`highlights`,void 0),r([c({type:Boolean,reflect:!0})],Oy.prototype,`collapse`,void 0),r([c()],Oy.prototype,`label`,void 0),r([f()],Oy.prototype,`expanded`,void 0),customElements.get(`craft-text-diff`)||customElements.define(`craft-text-diff`,Oy);var ky=new Map;function Ay(e){var t=ky.get(e);t&&t.destroy()}function jy(e){var t=ky.get(e);t&&t.update()}var My=null;typeof window>`u`?((My=function(e){return e}).destroy=function(e){return e},My.update=function(e){return e}):((My=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],function(e){return function(e){if(e&&e.nodeName&&e.nodeName===`TEXTAREA`&&!ky.has(e)){var t,n=null,r=window.getComputedStyle(e),i=(t=e.value,function(){o({testForHeightReduction:t===``||!e.value.startsWith(t),restoreTextAlign:null}),t=e.value}),a=function(t){e.removeEventListener(`autosize:destroy`,a),e.removeEventListener(`autosize:update`,s),e.removeEventListener(`input`,i),window.removeEventListener(`resize`,s),Object.keys(t).forEach(function(n){return e.style[n]=t[n]}),ky.delete(e)}.bind(e,{height:e.style.height,resize:e.style.resize,textAlign:e.style.textAlign,overflowY:e.style.overflowY,overflowX:e.style.overflowX,wordWrap:e.style.wordWrap});e.addEventListener(`autosize:destroy`,a),e.addEventListener(`autosize:update`,s),e.addEventListener(`input`,i),window.addEventListener(`resize`,s),e.style.overflowX=`hidden`,e.style.wordWrap=`break-word`,ky.set(e,{destroy:a,update:s}),s()}function o(t){var i,a,s=t.restoreTextAlign,c=s===void 0?null:s,l=t.testForHeightReduction,u=l===void 0||l,d=r.overflowY;if(e.scrollHeight!==0&&(r.resize===`vertical`?e.style.resize=`none`:r.resize===`both`&&(e.style.resize=`horizontal`),u&&(i=function(e){for(var t=[];e&&e.parentNode&&e.parentNode instanceof Element;)e.parentNode.scrollTop&&t.push([e.parentNode,e.parentNode.scrollTop]),e=e.parentNode;return function(){return t.forEach(function(e){var t=e[0],n=e[1];t.style.scrollBehavior=`auto`,t.scrollTop=n,t.style.scrollBehavior=null})}}(e),e.style.height=``),a=r.boxSizing===`content-box`?e.scrollHeight-(parseFloat(r.paddingTop)+parseFloat(r.paddingBottom)):e.scrollHeight+parseFloat(r.borderTopWidth)+parseFloat(r.borderBottomWidth),r.maxHeight!==`none`&&a>parseFloat(r.maxHeight)?(r.overflowY===`hidden`&&(e.style.overflow=`scroll`),a=parseFloat(r.maxHeight)):r.overflowY!==`hidden`&&(e.style.overflow=`hidden`),e.style.height=a+`px`,c&&(e.style.textAlign=c),i&&i(),n!==a&&(e.dispatchEvent(new Event(`autosize:resized`,{bubbles:!0})),n=a),d!==r.overflow&&!c)){var f=r.textAlign;r.overflow===`hidden`&&(e.style.textAlign=f===`start`?`end`:`start`),o({restoreTextAlign:f,testForHeightReduction:!0})}}function s(){o({testForHeightReduction:!0,restoreTextAlign:null})}}(e)}),e}).destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],Ay),e},My.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],jy),e});var Ny=My,Py=a`
  :host([monospace]) ::slotted([slot='input']) {
    font-family: var(--c-font-mono, monospace) !important;
    font-size: var(--c-text-sm);
  }

  ::slotted(label) {
    font-weight: bold;
  }

  ::slotted([slot='input']) {
    ${qr}
    padding-block: var(--c-spacing-md);
    line-height: var(--leading-normal);
    resize: vertical;
  }
`,Fy=new WeakMap,Iy=new WeakMap,Ly=new WeakMap,Ry=new WeakMap,zy=new WeakSet,By=new WeakMap,Vy=class extends hi(u){constructor(...e){super(...e),b(this,zy),this.rows=2,this.maxRows=30,this.monospace=!1,w(this,Fy,void 0),w(this,Iy,void 0),w(this,Ly,void 0),w(this,Ry,null),w(this,By,e=>{S(Ry,this,e.target.style.height)})}get slots(){return{...super.slots,input:()=>document.createElement(`textarea`)}}get _control(){return super._control}connectedCallback(){super.connectedCallback();let e=this._control;e&&(Ny(e),S(Ly,this,new IntersectionObserver(()=>this.resizeTextarea())),x(Ly,this).observe(this)),C(zy,this,Uy).call(this)}_pushToControl(e){super._pushToControl(e),e.has(`rows`)&&this._control&&(this._control.rows=this.rows)}updated(e){super.updated(e),e.has(`value`)&&this.resizeTextarea(),(e.has(`rows`)||e.has(`maxRows`))&&C(zy,this,Hy).call(this)}resizeTextarea(){this._control&&Ny.update(this._control)}disconnectedCallback(){super.disconnectedCallback(),x(Ly,this)?.disconnect(),S(Ly,this,void 0),this._control&&Ny.destroy(this._control),x(Fy,this)?.disconnect(),S(Fy,this,void 0),x(Iy,this)?.disconnect(),S(Iy,this,void 0),this._control?.removeEventListener(`autosize:resized`,x(By,this))}};function Hy(){let e=this._control;if(!e)return;if(!Number.isFinite(this.maxRows)){e.style.removeProperty(`max-height`);return}let{value:t}=e;e.value=``,this.resizeTextarea();let n=getComputedStyle(e),r=parseFloat(n.lineHeight)||parseFloat(n.height)/this.rows,i=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom),a=parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth),o=n.boxSizing===`border-box`?i+a:0;e.style.maxHeight=`${r*this.maxRows+o}px`,e.value=t,this.resizeTextarea()}function Uy(){let e=this._control;!e||typeof ResizeObserver>`u`||typeof MutationObserver>`u`||(S(Ry,this,e.style.height),e.style.removeProperty(`resize`),e.addEventListener(`autosize:resized`,x(By,this)),S(Iy,this,new MutationObserver(()=>{e.style.resize!==``&&e.style.removeProperty(`resize`)})),x(Iy,this).observe(e,{attributes:!0,attributeFilter:[`style`]}),S(Fy,this,new ResizeObserver(()=>{if(e.style.height===x(Ry,this))return;let t=e.style.height;Ny.destroy(e),e.style.height=t,e.style.removeProperty(`overflow`),x(Iy,this)?.disconnect(),S(Iy,this,void 0),x(Fy,this)?.disconnect(),S(Fy,this,void 0)})),x(Fy,this).observe(e))}Vy.styles=[ui,a`
      .input-group__container > .input-group__input ::slotted(.form-control) {
        box-sizing: content-box;
        /* Keeps Firefox from reserving height for a horizontal scrollbar. */
        overflow-x: hidden;
      }

      :host([disabled]) ::slotted(textarea) {
        user-select: none;
      }
    `,Zr,Py],r([c({type:Number,reflect:!0})],Vy.prototype,`rows`,void 0),r([c({attribute:`max-rows`,converter:{fromAttribute:e=>e===`none`?1/0:e===null?30:Number(e)}})],Vy.prototype,`maxRows`,void 0),r([c({type:Boolean,reflect:!0})],Vy.prototype,`monospace`,void 0),customElements.get(`craft-textarea`)||customElements.define(`craft-textarea`,Vy);var Wy=a`
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
`,Gy=class extends u{constructor(...e){super(...e),this.last=!1,this._hasHeading=!1,this._hasMeta=!1,this._hasBody=!1,this._hasFooter=!1,this._lightDomObserver=new MutationObserver(()=>this._syncSlotPresence())}connectedCallback(){super.connectedCallback(),this._syncSlotPresence(),this._lightDomObserver.observe(this,{childList:!0,subtree:!0,attributes:!0,characterData:!0,attributeFilter:[`slot`]})}disconnectedCallback(){super.disconnectedCallback(),this._lightDomObserver.disconnect()}_syncSlotPresence(){this._hasHeading=!!this.querySelector(`:scope > [slot="heading"]`),this._hasMeta=!!this.querySelector(`:scope > [slot="meta"]`),this._hasBody=[...this.childNodes].some(e=>e.nodeType===Node.TEXT_NODE?!!e.textContent?.trim():e instanceof HTMLElement&&!e.slot),this._hasFooter=!!this.querySelector(`:scope > [slot="footer"]`)}render(){return p`
      <div class="timeline-item" part="base">
        <span class="timeline-item__marker" part="marker" aria-hidden="true">
          <slot name="marker"></slot>
        </span>
        <div class="timeline-item__content" part="content">
          ${this._hasHeading||this._hasMeta?p`<div class="timeline-item__header" part="header">
                ${this._hasHeading?p`<div class="timeline-item__heading" part="heading">
                      <slot name="heading"></slot>
                    </div>`:i}
                ${this._hasMeta?p`<div class="timeline-item__meta" part="meta">
                      <slot name="meta"></slot>
                    </div>`:i}
              </div>`:i}
          ${this._hasBody?p`<div class="timeline-item__body" part="body">
                <slot></slot>
              </div>`:i}
          ${this._hasFooter?p`<div class="timeline-item__footer" part="footer">
                <slot name="footer"></slot>
              </div>`:i}
        </div>
      </div>
    `}};Gy.styles=[Wy],r([c({type:Boolean,reflect:!0})],Gy.prototype,`last`,void 0),r([f()],Gy.prototype,`_hasHeading`,void 0),r([f()],Gy.prototype,`_hasMeta`,void 0),r([f()],Gy.prototype,`_hasBody`,void 0),r([f()],Gy.prototype,`_hasFooter`,void 0),customElements.get(`craft-timeline-item`)||customElements.define(`craft-timeline-item`,Gy);var Ky=class{constructor(e,t,{tabInsertsSuggestions:n,firstOptionSelectionMode:r,scrollIntoViewOptions:i}={}){this.input=e,this.list=t,this.tabInsertsSuggestions=n??!0,this.firstOptionSelectionMode=r??`none`,this.scrollIntoViewOptions=i??{block:`nearest`,inline:`nearest`},this.isComposing=!1,this.didAutoAssignLastSelectedId=!1,t.id||=`combobox-${Math.random().toString().slice(2,6)}`,this.ctrlBindings=!!navigator.userAgent.match(/Macintosh/),this.keyboardEventHandler=e=>qy(e,this),this.compositionEventHandler=e=>$y(e,this),this.inputHandler=this.clearSelection.bind(this),e.setAttribute(`role`,`combobox`),e.setAttribute(`aria-controls`,t.id),e.setAttribute(`aria-expanded`,`false`),e.setAttribute(`aria-autocomplete`,`list`),e.setAttribute(`aria-haspopup`,`listbox`)}destroy(){this.clearSelection(),this.stop(),this.input.removeAttribute(`role`),this.input.removeAttribute(`aria-controls`),this.input.removeAttribute(`aria-expanded`),this.input.removeAttribute(`aria-autocomplete`),this.input.removeAttribute(`aria-haspopup`)}start(){this.input.setAttribute(`aria-expanded`,`true`),this.input.addEventListener(`compositionstart`,this.compositionEventHandler),this.input.addEventListener(`compositionend`,this.compositionEventHandler),this.input.addEventListener(`input`,this.inputHandler),this.input.addEventListener(`keydown`,this.keyboardEventHandler),this.list.addEventListener(`click`,Jy),this.resetSelection()}stop(){this.clearSelection(),this.input.setAttribute(`aria-expanded`,`false`),this.input.removeEventListener(`compositionstart`,this.compositionEventHandler),this.input.removeEventListener(`compositionend`,this.compositionEventHandler),this.input.removeEventListener(`input`,this.inputHandler),this.input.removeEventListener(`keydown`,this.keyboardEventHandler),this.list.removeEventListener(`click`,Jy)}indicateDefaultOption(){var e;this.firstOptionSelectionMode===`active`?(e=Array.from(this.list.querySelectorAll(`[role="option"]:not([aria-disabled="true"])`)).filter(Qy)[0])==null||e.setAttribute(`data-combobox-option-default`,`true`):this.firstOptionSelectionMode===`selected`&&this.navigate(1)}navigate(e=1){let t=Array.from(this.list.querySelectorAll(`[aria-selected="true"]`)).filter(Qy)[0],n=Array.from(this.list.querySelectorAll(`[role="option"]`)).filter(Qy),r=n.indexOf(t);if(r===n.length-1&&e===1||r===0&&e===-1){this.clearSelection(),this.input.focus();return}let i=e===1?0:n.length-1;if(t&&r>=0){let t=r+e;t>=0&&t<n.length&&(i=t)}let a=n[i];if(a)for(let e of n)e.removeAttribute(`data-combobox-option-default`),a===e?(!a.id&&!document.getElementById(`${this.list.id}-selected`)&&(a.id=`${this.list.id}-selected`,this.didAutoAssignLastSelectedId=!0),a.id&&this.input.setAttribute(`aria-activedescendant`,a.id),a.setAttribute(`aria-selected`,`true`),Zy(a),a.scrollIntoView(this.scrollIntoViewOptions)):(e.id===`${this.list.id}-selected`&&this.didAutoAssignLastSelectedId&&(e.removeAttribute(`id`),this.didAutoAssignLastSelectedId=!1),e.removeAttribute(`aria-selected`))}clearSelection(){this.input.removeAttribute(`aria-activedescendant`);for(let e of this.list.querySelectorAll(`[aria-selected="true"], [data-combobox-option-default="true"]`))e.removeAttribute(`aria-selected`),e.removeAttribute(`data-combobox-option-default`),e.id===`${this.list.id}-selected`&&this.didAutoAssignLastSelectedId&&(e.removeAttribute(`id`),this.didAutoAssignLastSelectedId=!1)}resetSelection(){this.clearSelection(),this.indicateDefaultOption()}};function qy(e,t){if(!(e.shiftKey||e.metaKey||e.altKey)&&!(!t.ctrlBindings&&e.ctrlKey)&&!t.isComposing)switch(e.key){case`Enter`:Yy(t.input,t.list)&&e.preventDefault();break;case`Tab`:t.tabInsertsSuggestions&&Yy(t.input,t.list)&&e.preventDefault();break;case`Escape`:t.clearSelection();break;case`ArrowDown`:t.navigate(1),e.preventDefault();break;case`ArrowUp`:t.navigate(-1),e.preventDefault();break;case`n`:t.ctrlBindings&&e.ctrlKey&&(t.navigate(1),e.preventDefault());break;case`p`:t.ctrlBindings&&e.ctrlKey&&(t.navigate(-1),e.preventDefault());break;default:if(e.ctrlKey)break;t.resetSelection()}}function Jy(e){if(!(e.target instanceof Element))return;let t=e.target.closest(`[role="option"]`);t&&t.getAttribute(`aria-disabled`)!==`true`&&Xy(t,{event:e})}function Yy(e,t){let n=t.querySelector(`[aria-selected="true"], [data-combobox-option-default="true"]`);return n?(n.getAttribute(`aria-disabled`)===`true`||n.click(),!0):!1}function Xy(e,t){e.dispatchEvent(new CustomEvent(`combobox-commit`,{bubbles:!0,detail:t}))}function Zy(e){e.dispatchEvent(new Event(`combobox-select`,{bubbles:!0}))}function Qy(e){return!e.hidden&&!(e instanceof HTMLInputElement&&e.type===`hidden`)&&(e.offsetWidth>0||e.offsetHeight>0)}function $y(e,t){t.isComposing=e.type===`compositionstart`,document.getElementById(t.input.getAttribute(`aria-controls`)||``)&&t.clearSelection()}var eb=class extends Event{constructor(){super(`update`)}},tb=new WeakMap,nb=class e extends EventTarget{#e=new MutationObserver(()=>this.#f());#t=new ResizeObserver(()=>this.#d());#n;#r=document.createElement(`div`);#i=document.createElement(`div`);static for(t){let n=tb.get(t);return n||(n=new e(t),tb.set(t,n)),n}constructor(e){super(),this.#n=new WeakRef(e),this.#r.style.position=`absolute`,this.#r.style.pointerEvents=`none`,this.#r.setAttribute(`aria-hidden`,`true`),this.#r.appendChild(this.#i),this.#i.style.pointerEvents=`none`,this.#i.style.userSelect=`none`,this.#i.style.overflow=`hidden`,this.#i.style.display=`block`,this.#i.style.visibility=`hidden`,e instanceof HTMLTextAreaElement?(this.#i.style.whiteSpace=`pre-wrap`,this.#i.style.wordWrap=`break-word`):(this.#i.style.whiteSpace=`nowrap`,this.#i.style.display=`table-cell`,this.#i.style.verticalAlign=`middle`),e.after(this.#r),this.#f(),this.#p(),this.#e.observe(e,{attributeFilter:[`style`,`dir`]}),this.#t.observe(e),document.addEventListener(`scroll`,this.#h,{capture:!0}),window.addEventListener(`resize`,this.#h,{capture:!0}),e.addEventListener(`input`,this.#m,{capture:!0})}get element(){return this.#i}forceUpdate(){this.#f(),this.#p()}disconnect(){this.#r?.remove(),this.#e.disconnect(),this.#t.disconnect(),document.removeEventListener(`scroll`,this.#h,{capture:!0}),window.removeEventListener(`resize`,this.#h,{capture:!0});let e=this.#a;e&&(e.removeEventListener(`input`,this.#m,{capture:!0}),tb.delete(e))}get#a(){return this.#n?.deref()}#o(e){let t=this.#a;return t?e(t):this.disconnect()}#s=0;#c=0;#l(){this.#o(e=>{let t=window.getComputedStyle(e);this.#i.style.height=t.height,this.#i.style.width=t.width,e.clientHeight!==this.#i.clientHeight&&(this.#i.style.height=`calc(${t.height} + ${e.clientHeight-this.#i.clientHeight}px)`),e.clientWidth!==this.#i.clientWidth&&(this.#i.style.width=`calc(${t.width} + ${e.clientWidth-this.#i.clientWidth}px)`);let n=e.getBoundingClientRect(),r=this.#i.getBoundingClientRect();this.#s=this.#s+n.left-r.left,this.#c=this.#c+n.top-r.top,this.#i.style.transform=`translate(${this.#s}px, ${this.#c}px)`,this.#i.scrollTop=e.scrollTop,this.#i.scrollLeft=e.scrollLeft,this.dispatchEvent(new eb)})}#u=!1;#d(){this.#u||(this.#u=!0,requestAnimationFrame(()=>{this.#l(),this.#u=!1}))}#f(){this.#o(e=>{let t=window.getComputedStyle(e);for(let e of rb)this.#i.style[e]=t[e];this.#d()})}#p(){this.#o(e=>{this.#i.textContent=e.value,this.#l()})}#m=()=>this.#p();#h=e=>{this.#o(t=>{(e.target===document||e.target===window||e.target instanceof Node&&e.target.contains(t))&&this.#d()})}},rb=`direction.writingMode.unicodeBidi.textOrientation.boxSizing.borderTopWidth.borderRightWidth.borderBottomWidth.borderLeftWidth.borderStyle.paddingTop.paddingRight.paddingBottom.paddingLeft.fontStyle.fontVariant.fontWeight.fontStretch.fontSize.fontSizeAdjust.lineHeight.fontFamily.textAlign.textTransform.textIndent.textDecoration.letterSpacing.wordSpacing.tabSize.MozTabSize`.split(`.`),ib=class e{#e;#t;#n;constructor(e,t=0,n=t){this.#e=e,this.#t=t,this.#n=n}static fromSelection(t){let{selectionStart:n,selectionEnd:r}=t;return new e(t,n??void 0,r??void 0)}get collapsed(){return this.startOffset===this.endOffset}get commonAncestorContainer(){return this.#e}get endContainer(){return this.#e}get startContainer(){return this.#e}get startOffset(){return this.#t}get endOffset(){return this.#n}setStartOffset(e){this.#t=this.#a(e)}setEndOffset(e){this.#n=this.#a(e)}collapse(e=!1){e?this.setEndOffset(this.startOffset):this.setStartOffset(this.endOffset)}cloneContents(){return this.#o().cloneContents()}cloneRange(){return new e(this.#e,this.startOffset,this.endOffset)}getBoundingClientRect(){return this.#o().getBoundingClientRect()}getClientRects(){return this.#o().getClientRects()}toString(){return this.#o().toString()}getStyleClone(){return this.#r}get#r(){return nb.for(this.#e)}get#i(){return this.#r}#a(e){return Math.max(0,Math.min(e,this.#e.value.length))}#o(){let e=document.createRange(),t=this.#i.element.childNodes[0];return t&&(e.setStart(t,this.startOffset),e.setEnd(t,this.endOffset)),e}},ab=a`
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
`,ob=/^[\p{L}\p{N}_.-]*$/u,sb=n(`Suggestions`),cb=[`role`,`aria-autocomplete`,`aria-haspopup`,`aria-expanded`,`aria-controls`,`aria-activedescendant`,`aria-busy`],lb=0,J=new WeakMap,ub=new WeakMap,db=new WeakMap,fb=new WeakMap,pb=new WeakMap,mb=new WeakMap,hb=new WeakMap,gb=new WeakMap,_b=new WeakMap,vb=new WeakMap,yb=new WeakMap,bb=new WeakMap,xb=new WeakMap,Sb=new WeakMap,Cb=new WeakMap,Y=new WeakSet,wb=new WeakMap,Tb=new WeakMap,Eb=new WeakMap,Db=new WeakMap,Ob=new WeakMap,kb=new WeakMap,Ab=new WeakMap,jb=new WeakMap,Mb=new WeakMap,Nb=new WeakMap,Pb=new WeakMap,Fb=new WeakMap,Ib=class extends u{constructor(...e){super(...e),b(this,Y),this.for=``,this.triggers=[],this.loading=!1,this.announcement=``,w(this,J,void 0),w(this,ub,null),w(this,db,null),w(this,fb,new Map),w(this,pb,null),w(this,mb,[]),w(this,hb,0),w(this,gb,null),w(this,_b,null),w(this,vb,null),w(this,yb,!1),w(this,bb,null),w(this,xb,new DOMRect),w(this,Sb,new MutationObserver(()=>{let e=C(Y,this,Rb).call(this);(ox(e)&&e!==x(ub,this)||x(ub,this)&&!x(ub,this).isConnected)&&C(Y,this,zb).call(this)})),w(this,Cb,new MutationObserver(e=>{for(let{target:t}of e)t instanceof hl&&(t.active=t.getAttribute(`aria-selected`)===`true`)})),w(this,wb,()=>{x(yb,this)||C(Y,this,Kb).call(this)}),w(this,Tb,()=>{S(yb,this,!0),C(Y,this,ex).call(this)}),w(this,Eb,()=>{S(yb,this,!1),C(Y,this,Kb).call(this)}),w(this,Db,()=>{queueMicrotask(()=>C(Y,this,ex).call(this))}),w(this,Ob,()=>{let e=x(ub,this);!e||!x(pb,this)||!sx(e)||queueMicrotask(()=>{x(pb,this)&&(e.selectionStart!==x(pb,this).end||e.selectionEnd!==x(pb,this).end)&&C(Y,this,Kb).call(this)})}),w(this,kb,()=>{x(pb,this)&&C(Y,this,$b).call(this)}),w(this,Ab,e=>{let t=e;x(pb,this)&&x(J,this).querySelector(`[aria-selected="true"]`)&&[`ArrowDown`,`ArrowUp`,`Enter`].includes(t.key)&&t.stopPropagation()}),w(this,jb,e=>{e.target instanceof Element&&e.target.closest(`[role="option"]`)&&e.preventDefault()}),w(this,Mb,e=>{e.pointerType===`touch`&&e.target instanceof Element&&e.target.closest(`[role="option"]`)?.click()}),w(this,Nb,e=>{C(Y,this,Xb).call(this,Number(e.target.dataset.index))}),w(this,Pb,e=>{if(e.target!==this.popoverElement)return;let t=x(J,this).getAttribute(`aria-label`)??sb;C(Y,this,rx).call(this),S(pb,this,null),C(Y,this,nx).call(this),C(Y,this,ix).call(this,t===sb?n(`Suggestions collapsed`):n(`{name} suggestions collapsed`,{name:t})),x(Fb,this).call(this,e)}),w(this,Fb,e=>{e.target===this.popoverElement&&e.stopPropagation()})}connectedCallback(){super.connectedCallback(),C(Y,this,Lb).call(this),this.hasUpdated&&C(Y,this,zb).call(this)}disconnectedCallback(){C(Y,this,Vb).call(this),x(Cb,this).disconnect(),x(J,this)?.remove(),x(vb,this)!==null&&(clearTimeout(x(vb,this)),S(vb,this,null)),super.disconnectedCallback()}firstUpdated(e){super.firstUpdated(e),C(Y,this,zb).call(this)}updated(e){if(super.updated(e),e.has(`for`)&&x(ub,this)!==C(Y,this,Rb).call(this)&&C(Y,this,zb).call(this),e.has(`triggers`)&&e.get(`triggers`)&&x(pb,this)){let e=x(J,this).querySelector(`[aria-selected="true"]`),t=e?x(mb,this)[Number(e.dataset.index)]:void 0;C(Y,this,Kb).call(this,t)}}render(){return p`
      <craft-popover
        exportparts="popup"
        without-invoker-aria
        manual
        @craft-show=${x(Fb,this)}
        @craft-hide=${x(Pb,this)}
        @craft-after-show=${x(Fb,this)}
        @craft-after-hide=${x(Fb,this)}
      >
        <div class="text-expander__popup" slot="content">
          ${this.loading?p`<div class="text-expander__loading" part="loading">
                <slot name="loading">${n(`Loading`)}</slot>
              </div>`:i}
          <slot name="listbox"></slot>
        </div>
      </craft-popover>
      <div class="cp-visually-hidden" aria-live="polite" aria-atomic="true">
        ${this.announcement}
      </div>
    `}};function Lb(){S(J,this,document.createElement(`div`)),x(J,this).id=`craft-text-expander-listbox-${++lb}`,x(J,this).slot=`listbox`,x(J,this).setAttribute(`part`,`listbox`),x(J,this).role=`listbox`,x(J,this).setAttribute(`aria-label`,sb),x(J,this).addEventListener(`pointerdown`,x(jb,this)),x(J,this).addEventListener(`pointerup`,x(Mb,this)),x(J,this).addEventListener(`combobox-commit`,x(Nb,this)),x(Cb,this).observe(x(J,this),{subtree:!0,attributeFilter:[`aria-selected`]}),this.append(x(J,this))}function Rb(){return this.getRootNode().getElementById(this.for)}function zb(){let e=C(Y,this,Rb).call(this);if(C(Y,this,Vb).call(this),!ox(e)){C(Y,this,Bb).call(this);return}S(ub,this,e),C(Y,this,Hb).call(this,e),S(db,this,new Ky(e,x(J,this),{tabInsertsSuggestions:!1,firstOptionSelectionMode:`selected`,scrollIntoViewOptions:{block:`nearest`}})),C(Y,this,Ub).call(this,e),e.addEventListener(`input`,x(wb,this)),e.addEventListener(`keydown`,x(Ab,this)),e.addEventListener(`blur`,x(Db,this)),e.addEventListener(`compositionstart`,x(Tb,this)),e.addEventListener(`compositionend`,x(Eb,this)),e.ownerDocument.addEventListener(`selectionchange`,x(Ob,this)),this.popoverElement.anchor={contextElement:e,getBoundingClientRect:()=>x(xb,this)},C(Y,this,Bb).call(this)}function Bb(){x(Sb,this).observe(this.getRootNode(),{attributes:!0,attributeFilter:[`id`],childList:!0,subtree:!0})}function Vb(){x(Sb,this).disconnect(),C(Y,this,ex).call(this);let e=x(ub,this);e&&(e.removeEventListener(`input`,x(wb,this)),e.removeEventListener(`keydown`,x(Ab,this)),e.removeEventListener(`blur`,x(Db,this)),e.removeEventListener(`compositionstart`,x(Tb,this)),e.removeEventListener(`compositionend`,x(Eb,this)),e.ownerDocument.removeEventListener(`selectionchange`,x(Ob,this)),x(bb,this)?.getStyleClone().disconnect(),S(bb,this,null),x(db,this)?.destroy(),S(db,this,null),C(Y,this,Wb).call(this,e),S(ub,this,null))}function Hb(e){x(fb,this).clear();for(let t of cb)x(fb,this).set(t,e.getAttribute(t))}function Ub(e){let t=[x(fb,this).get(`aria-controls`),x(J,this).id].filter(Boolean).join(` `);e.setAttribute(`aria-autocomplete`,`list`),e.setAttribute(`aria-controls`,t),e.setAttribute(`data-text-expander-input`,``),e.getAttribute(`role`)===`combobox`&&e.removeAttribute(`role`),e instanceof HTMLInputElement?e.setAttribute(`aria-haspopup`,`listbox`):C(Y,this,Gb).call(this,e,`aria-haspopup`),C(Y,this,Gb).call(this,e,`aria-expanded`)}function Wb(e){for(let t of cb)C(Y,this,Gb).call(this,e,t);x(fb,this).clear()}function Gb(e,t){let n=x(fb,this).get(t);n==null?e.removeAttribute(t):e.setAttribute(t,n)}function Kb(e){C(Y,this,rx).call(this);let t=C(Y,this,Jb).call(this);if(!t){S(pb,this,null),C(Y,this,tx).call(this);return}S(pb,this,t);let r=t.trigger.limit;if(t.trigger.options){this.loading=!1;let n=t.query.toLowerCase(),i=t.trigger.options.filter(e=>[e.label,...e.keywords??[]].some(e=>e.toLowerCase().includes(n)));C(Y,this,Yb).call(this,r===void 0?i:i.slice(0,r),e);return}this.loading=!0,C(Y,this,Yb).call(this,[]),C(Y,this,ix).call(this,n(`Loading`));let i=x(hb,this);S(_b,this,setTimeout(()=>{C(Y,this,qb).call(this,t,r,i,e)},150))}async function qb(e,t,n,r){S(gb,this,new AbortController);let i;try{let n=await T.get(e.trigger.source,{params:{query:`${e.character}${e.query}`,...t===void 0?{}:{limit:t}},signal:x(gb,this).signal});if(!Array.isArray(n.data))throw TypeError(`Text expander sources must return an array.`);i=n.data}catch(t){if(n!==x(hb,this)||cx(t))return;C(Y,this,ex).call(this),this.dispatchEvent(new CustomEvent(`craft-error`,{bubbles:!0,composed:!0,detail:{character:e.character,query:e.query,error:t}}));return}n===x(hb,this)&&(this.loading=!1,C(Y,this,Yb).call(this,t===void 0?i:i.slice(0,t),r))}function Jb(){let e=x(ub,this);if(!e||!e.isConnected||e.disabled||e.readOnly||!sx(e)||e.selectionStart===null||e.selectionEnd===null||e.selectionStart!==e.selectionEnd)return null;let t=e.selectionStart,n=e.value.slice(0,t),r=null;for(let e of this.triggers){let i=e.trigger,a=n.lastIndexOf(i);if(a===-1||r&&a<=r.start)continue;let o=Array.from(n.slice(0,a)).at(-1),s=n.slice(a+i.length);(e.boundary===`anywhere`||(e.boundary===`start`?a===0:!o||/\s/u.test(o)))&&ob.test(s)&&(r={character:i,query:s,start:a,end:t,trigger:e})}return r}function Yb(e,t){if(C(Y,this,Qb).call(this),S(mb,this,e),x(J,this).replaceChildren(),x(J,this).hidden=this.loading,x(J,this).setAttribute(`aria-label`,x(pb,this)?.trigger.label??sb),e.forEach((e,t)=>{let n=document.createElement(`craft-option`),r=ax(e);n.id=`${x(J,this).id}-option-${t}`,n.setAttribute(`part`,`option`),n.dataset.index=String(t),n.setAttribute(`aria-label`,r?`${e.label}, ${r}`:e.label),n.hint=r,n.append(x(pb,this)?.trigger.renderOption?.(e)??document.createTextNode(e.label)),x(J,this).append(n)}),!this.loading&&!e.length){S(pb,this,null),C(Y,this,tx).call(this),C(Y,this,ix).call(this,n(`No suggestions`));return}this.updateComplete.then(()=>{x(pb,this)&&C(Y,this,Zb).call(this,t)})}function Xb(e){let t=x(ub,this),n=x(mb,this)[e],r=C(Y,this,Jb).call(this),i=x(pb,this);if(!t||!n||!i||!r||r.start!==i.start||r.end!==i.end||r.character!==i.character||r.query!==i.query){C(Y,this,ex).call(this);return}lx(t,i.start,i.end,n.value);let a={character:i.character,query:i.query,option:n};C(Y,this,ex).call(this),this.dispatchEvent(new CustomEvent(`craft-select`,{bubbles:!0,composed:!0,detail:a}))}async function Zb(e){await this.popoverElement.updateComplete;let t=x(ub,this);if(!t||!C(Y,this,$b).call(this)){C(Y,this,ex).call(this);return}if(t.setAttribute(`aria-busy`,String(this.loading)),await this.popoverElement.show(),!(!x(pb,this)||t!==x(ub,this))&&x(mb,this).length&&(x(db,this)?.start(),C(Y,this,Gb).call(this,t,`aria-expanded`),t.removeEventListener(`input`,x(wb,this)),t.addEventListener(`input`,x(wb,this)),e)){let t=x(mb,this).findIndex(t=>t.label===e.label&&t.value===e.value);for(let e=0;e<t;e++)x(db,this)?.navigate(1)}}function Qb(){x(db,this)?.stop(),x(ub,this)&&C(Y,this,Gb).call(this,x(ub,this),`aria-expanded`)}function $b(){let e=x(ub,this),t=e?.selectionStart;if(!e?.isConnected||t==null)return!1;if(!x(bb,this)){S(bb,this,new ib(e));let t=x(bb,this).getStyleClone(),n=t.element.parentElement;n.slot=e.slot,n.style.visibility=`hidden`,t.forceUpdate(),t.addEventListener(`update`,x(kb,this))}return x(bb,this).setStartOffset(t),x(bb,this).setEndOffset(t),S(xb,this,x(bb,this).getBoundingClientRect()),this.popoverElement.reposition(),!0}function ex(){C(Y,this,rx).call(this),S(pb,this,null),C(Y,this,tx).call(this)}function tx(){C(Y,this,nx).call(this),this.popoverElement.hide()}function nx(){this.loading=!1,C(Y,this,Qb).call(this),S(mb,this,[]),x(J,this)?.replaceChildren(),x(J,this)&&(x(J,this).hidden=!1);let e=x(ub,this);e&&(C(Y,this,Gb).call(this,e,`aria-activedescendant`),C(Y,this,Gb).call(this,e,`aria-busy`))}function rx(){var e;S(hb,this,(e=x(hb,this),e++,e)),x(_b,this)&&(clearTimeout(x(_b,this)),S(_b,this,null)),x(gb,this)?.abort(),S(gb,this,null)}function ix(e){x(vb,this)!==null&&(clearTimeout(x(vb,this)),S(vb,this,null)),this.announcement=``,queueMicrotask(()=>{this.isConnected&&(this.announcement=e)}),S(vb,this,setTimeout(()=>{S(vb,this,null),this.announcement=``},5e3))}Ib.styles=[re,ab],r([c({reflect:!0})],Ib.prototype,`for`,void 0),r([c({type:Array})],Ib.prototype,`triggers`,void 0),r([f()],Ib.prototype,`loading`,void 0),r([f()],Ib.prototype,`announcement`,void 0),r([h(`craft-popover`)],Ib.prototype,`popoverElement`,void 0);function ax(e){return typeof e.data!=`object`||e.data===null||!(`hint`in e.data)||typeof e.data.hint!=`string`?null:e.data.hint}function ox(e){return e instanceof HTMLTextAreaElement||e instanceof HTMLInputElement&&e.type===`text`}function sx(e){return e.getRootNode().activeElement===e}function cx(e){return e instanceof DOMException&&e.name===`AbortError`}function lx(e,t,n,r){e.maxLength>=0&&(r=r.slice(0,Math.max(0,e.maxLength-(e.value.length-(n-t)))));let i=`${e.value.slice(0,t)}${r}${e.value.slice(n)}`,a=!1,o=()=>{a=!0};e.focus({preventScroll:!0}),e.setSelectionRange(t,n),e.addEventListener(`input`,o,{once:!0});try{e.ownerDocument.execCommand?.(`insertText`,!1,r)}catch{}e.removeEventListener(`input`,o),e.value!==i&&(e.setRangeText(r,t,n,`end`),a=!1),a||e.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0,data:r,inputType:`insertReplacementText`}))}customElements.get(`craft-text-expander`)||customElements.define(`craft-text-expander`,Ib);var ux=a`
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
    ${_i}
  }
`,dx=new WeakMap,fx=new WeakSet,px=class extends u{constructor(...e){super(...e),b(this,fx),this.placement=`top`,this.disabled=!1,this.overflowing=!1,this.text=``,w(this,dx,typeof ResizeObserver<`u`?new ResizeObserver(()=>C(fx,this,mx).call(this)):null)}connectedCallback(){super.connectedCallback(),x(dx,this)?.observe(this)}disconnectedCallback(){x(dx,this)?.disconnect(),super.disconnectedCallback()}firstUpdated(){x(dx,this)||C(fx,this,mx).call(this)}render(){let e=this.overflowing&&!this.disabled;return p`
      <span class="truncate" id="content">
        <slot @slotchange=${C(fx,this,hx)}></slot>
      </span>
      ${e?p`<craft-tooltip for="content" placement=${this.placement}
            >${this.text}</craft-tooltip
          >`:``}
    `}};function mx(){this.text=(this.textContent??``).replace(/\s+/g,` `).trim();let e=this.content;this.overflowing=!!e&&e.scrollWidth>e.clientWidth}function hx(){C(fx,this,mx).call(this)}px.styles=ux,r([c({reflect:!0})],px.prototype,`placement`,void 0),r([c({type:Boolean,reflect:!0})],px.prototype,`disabled`,void 0),r([f()],px.prototype,`overflowing`,void 0),r([f()],px.prototype,`text`,void 0),r([h(`.truncate`)],px.prototype,`content`,void 0),customElements.get(`craft-truncate`)||customElements.define(`craft-truncate`,px);var gx=a`
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
`,_x=class e extends u{constructor(...e){super(...e),this.src=null,this.mode=`fit`,this.svgAspectRatios=new Map,this.placeholder=null,this.loaded=!1,this.srcset=null,this.sizes=null,this.alt=``,this.width=null,this.height=null,this.loading=`lazy`,this.checkered=!1,this.rounded=!1,this.animated=!1,this.frozen=!1,this.capturedFrame=null,this.resizeObserver=null}get isAnimated(){return this.animated||e.animatedExtensionPattern.test(this.src??``)||e.animatedExtensionPattern.test(this.srcset??``)}restoreSlottedSvgs(){for(let[e,t]of this.svgAspectRatios)t===null?e.removeAttribute(`preserveAspectRatio`):e.setAttribute(`preserveAspectRatio`,t);this.svgAspectRatios.clear()}updateSlottedSvgs(){if(this.restoreSlottedSvgs(),this.mode!==`crop`&&this.mode!==`stretch`)return;let e=this.shadowRoot?.querySelector(`slot`);for(let t of e?.assignedElements()??[])t instanceof SVGSVGElement&&(this.svgAspectRatios.set(t,t.getAttribute(`preserveAspectRatio`)),t.setAttribute(`preserveAspectRatio`,this.mode===`crop`?`xMidYMid slice`:`none`))}willUpdate(e){let t=e.has(`src`)||e.has(`srcset`)||e.has(`animated`);if(e.has(`src`)&&(this.loaded=!1),t&&(this.frozen=!1,this.capturedFrame=null,this.resizeObserver?.disconnect(),this.resizeObserver=null,!e.has(`src`))){let e=this.shadowRoot?.querySelector(`img`);e?.complete&&this.attemptFreeze(e)}}updated(){this.updateSlottedSvgs()}connectedCallback(){if(super.connectedCallback(),this.updateSlottedSvgs(),this.hasUpdated&&!this.frozen){let e=this.shadowRoot?.querySelector(`img`);e?.complete&&this.attemptFreeze(e)}}disconnectedCallback(){this.restoreSlottedSvgs(),this.resizeObserver?.disconnect(),this.resizeObserver=null,super.disconnectedCallback()}render(){let e=this.sizedImage,t={thumbnail:!0,"thumbnail--checkered":this.checkered,"thumbnail--rounded":this.rounded,"thumbnail--crop":this.mode===`crop`,"thumbnail--stretch":this.mode===`stretch`,"thumbnail--placeholder":this.showsPlaceholder&&!e},n=this.showsPlaceholder?{"--_placeholder":`url(${JSON.stringify(this.placeholder)})`}:{};return p`
      <div
        class="${N(t)}"
        style="${ai(e?{}:n)}"
        part="thumbnail"
      >
        ${this.src?p`<img
              class="${N({thumbnail__image:!0,"thumbnail__image--landscape":e===`landscape`,"thumbnail__image--portrait":e===`portrait`,"thumbnail__image--placeholder":!!e&&this.showsPlaceholder,"cp-visually-hidden":this.frozen})}"
              style="${ai(e?{...n,"--_width":`${this.width}px`,"--_height":`${this.height}px`,"aspect-ratio":`${this.width} / ${this.height}`}:{})}"
              part="image"
              src="${this.src}"
              srcset="${Ve(this.srcset??void 0)}"
              sizes="${Ve(this.sizes??void 0)}"
              width="${Ve(this.width??void 0)}"
              height="${Ve(this.height??void 0)}"
              alt="${this.alt}"
              loading="${this.loading}"
              decoding="async"
              @load=${this.onImageLoad}
            />`:i}
        ${this.src&&this.isAnimated?p`<canvas
              class="${N({thumbnail__cover:!0,"thumbnail__cover--pending":!this.frozen})}"
              part="cover"
              aria-hidden="true"
              role="presentation"
            ></canvas>`:i}
        <slot @slotchange=${this.updateSlottedSvgs}></slot>
      </div>
    `}get sizedImage(){return this.mode!==`fit`||!this.width||!this.height?null:Number(this.width)>=Number(this.height)?`landscape`:`portrait`}get showsPlaceholder(){return!!(this.placeholder&&this.src&&!this.loaded)}onImageLoad(e){this.loaded=!0,this.attemptFreeze(e.target)}attemptFreeze(e){if(!this.isAnimated||!e.currentSrc)return;let t=new Image;t.onload=()=>{this.capturedFrame=t,this.resizeObserver?.disconnect(),this.resizeObserver=new ResizeObserver(()=>{this.capturedFrame&&this.paintCover(this.capturedFrame,e)}),this.resizeObserver.observe(e)},t.src=e.currentSrc}paintCover(e,t){if(!e.naturalWidth||!e.naturalHeight)return;let n=this.shadowRoot?.querySelector(`canvas.thumbnail__cover`),r=n?.getContext(`2d`);if(!n||!r)return;let i=t.clientWidth,a=t.clientHeight;if(!i||!a)return;let o=window.devicePixelRatio||1;if(n.width=i*o,n.height=a*o,n.style.width=`${i}px`,n.style.height=`${a}px`,r.scale(o,o),this.mode===`crop`){let t=Math.max(i/e.naturalWidth,a/e.naturalHeight),n=i/t,o=a/t;r.drawImage(e,(e.naturalWidth-n)/2,(e.naturalHeight-o)/2,n,o,0,0,i,a)}else r.drawImage(e,0,0,i,a);this.resizeObserver?.disconnect(),this.resizeObserver=null,this.frozen=!0}};_x.styles=[re,gx],_x.animatedExtensionPattern=/\.(?:gif|webp)(?=[?#\s,]|$)/i,r([c()],_x.prototype,`src`,void 0),r([c({reflect:!0})],_x.prototype,`mode`,void 0),r([c()],_x.prototype,`placeholder`,void 0),r([f()],_x.prototype,`loaded`,void 0),r([c()],_x.prototype,`srcset`,void 0),r([c()],_x.prototype,`sizes`,void 0),r([c()],_x.prototype,`alt`,void 0),r([c({type:Number})],_x.prototype,`width`,void 0),r([c({type:Number})],_x.prototype,`height`,void 0),r([c()],_x.prototype,`loading`,void 0),r([c({type:Boolean,reflect:!0})],_x.prototype,`checkered`,void 0),r([c({type:Boolean,reflect:!0})],_x.prototype,`rounded`,void 0),r([c({type:Boolean,reflect:!0})],_x.prototype,`animated`,void 0),r([f()],_x.prototype,`frozen`,void 0),customElements.get(`craft-thumbnail`)||customElements.define(`craft-thumbnail`,_x);var vx=new WeakMap,yx=new WeakSet,bx=class extends HTMLElement{constructor(...e){super(...e),b(this,yx),w(this,vx,null)}connectedCallback(){C(yx,this,xx).call(this)}disconnectedCallback(){x(vx,this)?.destroy(),S(vx,this,null)}};function xx(){if(!(x(vx,this)||!this.isConnected)){if(!this.querySelector(`[data-sizes]`)){requestAnimationFrame(()=>C(yx,this,xx).call(this));return}S(vx,this,new Wc),x(vx,this).load(this)}}customElements.get(`craft-thumbnail-loader`)||customElements.define(`craft-thumbnail-loader`,bx);var Sx=async(e,t)=>{let{data:n}=await T.post(e,t);return n},Cx=new WeakMap,wx=new WeakMap,Tx=new WeakMap,Ex=new WeakMap,Dx=new WeakMap,Ox=new WeakMap,kx=new WeakMap,Ax=new WeakMap,jx=new WeakMap,Mx=new WeakMap,X=new WeakSet,Nx=class e{constructor(t){b(this,X),w(this,Cx,null),w(this,wx,[]),w(this,Tx,[]),w(this,Ex,null),w(this,Dx,!1),w(this,Ox,!1),w(this,kx,!1),w(this,Ax,null),w(this,jx,void 0),w(this,Mx,new Map),this.options={...e.defaults,modalTitle:n(`Select element`),selectBtnLabel:n(`Select`),...Rx(t)},S(Tx,this,[...this.options.disabledElementIds??[]]),S(jx,this,C(X,this,Px).call(this))}get elementType(){return this.options.elementType}get state(){return x(jx,this)}get index(){return x(Cx,this)}get hasSelection(){return x(wx,this).length>0}on(e,t){let n=x(Mx,this).get(e);return n||(n=new Set,x(Mx,this).set(e,n)),n.add(t),()=>{x(Mx,this).get(e)?.delete(t)}}async open(){S(wx,this,[]),x(Cx,this)?.clearSelection(),x(Dx,this)||(S(Dx,this,!0),C(X,this,Lx).call(this,`open`,void 0)),C(X,this,Fx).call(this),x(Ex,this)||await this.reload()}close(){x(Dx,this)&&(S(Dx,this,!1),C(X,this,Lx).call(this,`close`,void 0),this.options.onClose?.(),C(X,this,Fx).call(this))}destroy(){x(Cx,this)?.destroy?.(),S(Cx,this,null),S(wx,this,[]),S(Ex,this,null),S(Dx,this,!1),S(kx,this,!1),S(Ox,this,!1),S(Ax,this,null),C(X,this,Fx).call(this),x(Mx,this).clear()}async reload(){let e=this.options.loadIndexBody??Sx;S(Ox,this,!0),S(Ax,this,null),C(X,this,Fx).call(this);try{S(Ex,this,await e(this.options.bodyAction,this.indexParams()))}catch(e){C(X,this,Ix).call(this,e)}finally{S(Ox,this,!1),C(X,this,Fx).call(this)}}async submit(){if(!x(jx,this).canSubmit)return;let e=this.buildElementInfo(x(wx,this)),t=this.selectMeta();S(kx,this,!0),C(X,this,Fx).call(this);try{C(X,this,Lx).call(this,`select`,{elements:e,meta:t}),await this.options.onSelect?.(e,t)}catch(e){C(X,this,Ix).call(this,e);return}finally{S(kx,this,!1),C(X,this,Fx).call(this)}this.options.disableElementsOnSelect&&(this.setDisabledElementIds([...x(Tx,this),...e.map(e=>Number(e.id))]),x(Cx,this)?.clearSelection()),this.options.hideOnSelect&&this.close()}cancel(){x(jx,this).canCancel&&(C(X,this,Lx).call(this,`cancel`,void 0),this.options.onCancel?.(),this.close())}attachIndex(e){S(Cx,this,e),C(X,this,Fx).call(this)}detachIndex(){S(Cx,this,null),C(X,this,Fx).call(this)}setSelection(e){S(wx,this,[...e]),C(X,this,Fx).call(this)}setDisabledElementIds(e){S(Tx,this,[...new Set(e.map(Number))]),C(X,this,Fx).call(this)}setBusy(e){S(kx,this,e),C(X,this,Fx).call(this)}indexParams(){let{options:e}=this,t={context:e.context??`modal`,elementType:this.elementType,sources:e.sources,selectionCondition:e.condition,criteria:{...e.criteria}};e.showSiteMenu!=null&&e.showSiteMenu!==`auto`&&(t.showSiteMenu=e.showSiteMenu?`1`:`0`),e.siteIds&&(t.siteIds=e.siteIds),e.criteria&&(t.criteria={...e.criteria}),typeof e.indexSettings.showFolders==`boolean`&&(t.showFolders=e.indexSettings.showFolders);let n=e.defaultSource??e.indexSettings.defaultSource,r=e.defaultSourcePath??e.indexSettings.defaultSourcePath??[];n&&(t.source=n);let i=Number(r[r.length-1]?.folderId);return Number.isFinite(i)&&(t.folderId=i),e.referenceElementId&&(t.referenceElementId=e.referenceElementId,t.referenceElementOwnerId=e.referenceElementOwnerId??null,t.referenceElementSiteId=e.referenceElementSiteId??null),t}indexSettings(){let{options:e}=this;return{context:e.context??`modal`,storageKey:e.storageKey,condition:e.condition,referenceElementId:e.referenceElementId,referenceElementOwnerId:e.referenceElementOwnerId,referenceElementSiteId:e.referenceElementSiteId,criteria:{...e.criteria},disabledElementIds:[...x(Tx,this)],selectable:!0,multiSelect:e.multiSelect,waitForDoubleClicks:!0,hideSidebar:e.hideSidebar,defaultSiteId:e.defaultSiteId,defaultSource:e.defaultSource,defaultSourcePath:e.defaultSourcePath,preferStoredSource:e.preferStoredSource,showSourcePath:e.showSourcePath,...e.indexSettings}}canSubmitSelection(){return x(wx,this).length>0}buildElementInfo(e){return e.map(e=>({...e}))}selectMeta(){return{}}notifyChange(){C(X,this,Fx).call(this)}get selection(){return x(wx,this)}get disabledElementIds(){return x(Tx,this)}};function Px(){let e=x(kx,this),t=x(Ox,this);return Object.freeze({open:x(Dx,this),loading:t,busy:e,selection:Object.freeze([...x(wx,this)]),disabledElementIds:Object.freeze([...x(Tx,this)]),indexBody:x(Ex,this),error:x(Ax,this),title:this.options.modalTitle,showTitle:this.options.showTitle,selectLabel:this.options.selectBtnLabel,canSubmit:!e&&!t&&this.canSubmitSelection(),canCancel:!e})}function Fx(){S(jx,this,C(X,this,Px).call(this)),C(X,this,Lx).call(this,`change`,x(jx,this))}function Ix(e){S(Ax,this,e instanceof Error?e:Error(String(e??`Unknown`))),C(X,this,Lx).call(this,`error`,x(Ax,this))}function Lx(e,t){let n=x(Mx,this).get(e);n&&[...n].forEach(e=>e(t))}Nx.defaults={multiSelect:!1,disabledElementIds:[],disableElementsOnSelect:!1,hideOnSelect:!0,showTitle:!1,fullscreen:!1,bodyAction:`element-selector-modals/body`,indexSettings:{},preferStoredSource:!1,showSourcePath:!0,hideSidebar:!1};function Rx(e){return Object.fromEntries(Object.entries(e).filter(([,e])=>e!==void 0))}var zx=async(e,t)=>{let{data:n}=await T.post(`assets/generate-transform`,{assetId:e,handle:t});return n?.url||!1},Bx=new WeakMap,Vx=class e extends Nx{constructor(e){super(e),w(this,Bx,null)}get transforms(){return this.options.transforms??[]}get canApplyTransform(){return this.selection.length>0&&this.transforms.length>0}async selectWithTransform(t){var n;let r=(n=e.transformUrls)[t]??(n[t]={}),i=this.selection.map(e=>Number(e.id)).filter(e=>r[e]===void 0);if(i.length>0){let e=this.options.fetchTransformUrl??zx;this.setBusy(!0);try{for(let n of i)try{r[n]=await e(n,t)}catch{r[n]=!1}}finally{this.setBusy(!1)}}S(Bx,this,t);try{await this.submit()}finally{S(Bx,this,null)}}buildElementInfo(t){let n=super.buildElementInfo(t);if(!x(Bx,this))return n;let r=e.transformUrls[x(Bx,this)]??{};for(let e of n){let t=r[Number(e.id)];t!==void 0&&t!==!1&&(e.url=t)}return n}selectMeta(){return{transform:x(Bx,this)}}};Vx.transformUrls={};var Hx=`CraftCms\\Cms\\Asset\\Elements\\Asset`,Ux=new WeakSet,Wx=class extends Nx{constructor(e={}){let{disabledFolderIds:t=[],...n}=e;super({...n,elementType:Hx,showSiteMenu:!1}),b(this,Ux),this.disabledFolderIds=[...t]}indexParams(){return{...super.indexParams(),foldersOnly:!0,showFolders:!0}}indexSettings(){return{...super.indexSettings(),foldersOnly:!0,disabledFolderIds:[...this.disabledFolderIds]}}currentFolderId(){let e=this.index?.sourcePath;if(!e?.length)return null;let t=e[e.length-1],n=Number(t.folderId);return Number.isFinite(n)?this.disabledFolderIds.includes(n)?null:n:null}canSubmitSelection(){return super.canSubmitSelection()||this.currentFolderId()!==null}buildElementInfo(e){if(e.length>0)return e.map(e=>({...e,folderId:Number(e.folderId??e.id)}));let t=this.currentFolderId();return t===null?[]:[{id:t,folderId:t,siteId:null,label:C(Ux,this,Gx).call(this),status:null,url:null,hasThumb:!1}]}};function Gx(){let e=this.index?.sourcePath;return e?.[e.length-1]?.label??``}var Kx=new Map;function qx(e,t){if(Kx.has(e))throw Error(`An element selector controller has already been registered for the element type “${e}”.`);Kx.set(e,t)}function Jx(e){return Kx.has(e)}function Yx(e){return Kx.get(e)??Nx}function Xx(e){return new(Yx(e.elementType))(e)}function Zx(){if(typeof window>`u`)return;let e=window.Craft?._elementSelectorModalClasses;if(e)for(let[t,n]of Object.entries(e))Kx.has(t)||Kx.set(t,n)}var Qx={START:`asset-indexes/start-indexing`,STOP:`asset-indexes/stop-indexing-session`,PROCESS:`asset-indexes/process-indexing-session`,OVERVIEW:`asset-indexes/indexing-session-overview`,FINISH:`asset-indexes/finish-indexing-session`},$x=new WeakMap,eS=new WeakMap,tS=new WeakMap,nS=new WeakMap,rS=new WeakMap,iS=new WeakMap,aS=new WeakMap,Z=new WeakSet,oS=class{constructor(e={}){b(this,Z),w(this,$x,new Map),w(this,eS,null),w(this,tS,0),w(this,nS,[]),w(this,rS,[]),w(this,iS,new Set),w(this,aS,new Map);let{existingSessions:t=[],maxConcurrentConnections:n=3,autoResume:r=!0}=e;this.maxConcurrentConnections=n;for(let e of t)x($x,this).set(e.id,e);r&&(C(Z,this,uS).call(this),x(eS,this)!==null&&C(Z,this,dS).call(this))}getSessions(){return Array.from(x($x,this).values())}getCurrentSessionId(){return x(eS,this)}isProcessing(){return x(tS,this)>0}on(e,t){return x(aS,this).has(e)||x(aS,this).set(e,new Set),x(aS,this).get(e).add(t),()=>{x(aS,this).get(e)?.delete(t)}}async startIndexing(e){let t=await T.post(Qx.START,e),{data:n}=t;return n.session&&(x($x,this).set(n.session.id,n.session),S(eS,this,n.session.id),C(Z,this,cS).call(this),n.stop||C(Z,this,dS).call(this)),n.stop&&C(Z,this,lS).call(this,n.stop),t}stopSession(e){C(Z,this,fS).call(this,e),C(Z,this,pS).call(this,{sessionId:e,action:Qx.STOP,params:{sessionId:e},priority:!0})}getSessionOverview(e){C(Z,this,pS).call(this,{sessionId:e,action:Qx.OVERVIEW,params:{sessionId:e},priority:!0})}finishSession(e){C(Z,this,pS).call(this,{sessionId:e.sessionId,action:Qx.FINISH,params:e,priority:!0})}destroy(){x($x,this).clear(),S(nS,this,[]),S(rS,this,[]),x(aS,this).clear(),S(eS,this,null),S(tS,this,0)}};function sS(e,t){x(aS,this).get(e)?.forEach(e=>e(t))}function cS(e){C(Z,this,sS).call(this,`change`,{sessions:this.getSessions(),currentSessionId:x(eS,this),reviewSessionId:e})}function lS(e){x($x,this).delete(e),x(eS,this)===e&&S(eS,this,null),C(Z,this,cS).call(this)}function uS(){for(let[e,t]of x($x,this))if(!t.actionRequired&&!x(iS,this).has(e)){S(eS,this,e);return}S(eS,this,null)}function dS(){if(x(eS,this)||C(Z,this,uS).call(this),!x(eS,this))return;let e=x($x,this).get(x(eS,this));if(!e)return;let t=e.totalEntries-e.processedEntries,n=this.maxConcurrentConnections-x(tS,this),r=Math.min(n,t);for(let t=0;t<r;t++)C(Z,this,pS).call(this,{sessionId:e.id,action:Qx.PROCESS,params:{sessionId:x(eS,this)},priority:!1});e.processIfRootEmpty&&C(Z,this,pS).call(this,{sessionId:e.id,action:Qx.PROCESS,params:{sessionId:x(eS,this)},priority:!1})}function fS(e){x(iS,this).add(e),S(nS,this,x(nS,this).filter(t=>t.sessionId!==e))}function pS(e){e.priority?x(rS,this).push(e):x(nS,this).push(e),C(Z,this,mS).call(this)}function mS(){if(!(x(nS,this).length+x(rS,this).length===0||x(tS,this)>=this.maxConcurrentConnections))for(;x(nS,this).length+x(rS,this).length>0&&x(tS,this)<this.maxConcurrentConnections;){var e;S(tS,this,(e=x(tS,this),e++,e));let t=x(rS,this).length>0?x(rS,this).shift():x(nS,this).shift();C(Z,this,hS).call(this,t)}}async function hS(e){try{let t=await T.post(e.action,e.params);C(Z,this,gS).call(this,t.data)}catch(t){C(Z,this,_S).call(this,t,e)}finally{var t;S(tS,this,(t=x(tS,this),t--,t)),C(Z,this,mS).call(this)}}function gS(e){let t;e.session&&(x($x,this).set(e.session.id,e.session),C(Z,this,uS).call(this),e.session.actionRequired&&!e.skipDialog?x(iS,this).has(e.session.id)||(t=e.session.id):x(iS,this).has(e.session.id)||C(Z,this,dS).call(this)),C(Z,this,uS).call(this),e.stop&&(x($x,this).delete(e.stop),x(eS,this)===e.stop&&S(eS,this,null)),C(Z,this,cS).call(this,t),x($x,this).size===0&&C(Z,this,sS).call(this,`complete`,{})}function _S(e,t){C(Z,this,uS).call(this);let n=e?.response?.data?.message||e.message||`An error occurred during indexing.`;C(Z,this,sS).call(this,`error`,{message:n,sessionId:t.sessionId}),C(Z,this,mS).call(this)}var vS=function(e,t,n,r,i){if(r===`m`)throw TypeError(`Private method is not writable`);if(r===`a`&&!i)throw TypeError(`Private accessor was defined without a setter`);if(typeof t==`function`?e!==t||!i:!t.has(e))throw TypeError(`Cannot write private member to an object whose class did not declare it`);return r===`a`?i.call(e,n):i?i.value=n:t.set(e,n),n},yS=function(e,t,n,r){if(n===`a`&&!r)throw TypeError(`Private accessor was defined without a getter`);if(typeof t==`function`?e!==t||!r:!t.has(e))throw TypeError(`Cannot read private member from an object whose class did not declare it`);return n===`m`?r:n===`a`?r.call(e):r?r.value:t.get(e)},bS,xS=class{formatToParts(e){let t=[];for(let n of e)t.push({type:`element`,value:n}),t.push({type:`literal`,value:`, `});return t.slice(0,-1)}},SS=typeof Intl<`u`&&Intl.ListFormat||xS,CS=[[`years`,`year`],[`months`,`month`],[`weeks`,`week`],[`days`,`day`],[`hours`,`hour`],[`minutes`,`minute`],[`seconds`,`second`],[`milliseconds`,`millisecond`]],wS={minimumIntegerDigits:2},TS=class{constructor(e,t={}){bS.set(this,void 0);let n=String(t.style||`short`);n!==`long`&&n!==`short`&&n!==`narrow`&&n!==`digital`&&(n=`short`);let r=n===`digital`?`numeric`:n,i=t.hours||r;r=i===`2-digit`?`numeric`:i;let a=t.minutes||r;r=a===`2-digit`?`numeric`:a;let o=t.seconds||r;r=o===`2-digit`?`numeric`:o;let s=t.milliseconds||r;vS(this,bS,{locale:e,style:n,years:t.years||n===`digital`?`short`:n,yearsDisplay:t.yearsDisplay===`always`?`always`:`auto`,months:t.months||n===`digital`?`short`:n,monthsDisplay:t.monthsDisplay===`always`?`always`:`auto`,weeks:t.weeks||n===`digital`?`short`:n,weeksDisplay:t.weeksDisplay===`always`?`always`:`auto`,days:t.days||n===`digital`?`short`:n,daysDisplay:t.daysDisplay===`always`?`always`:`auto`,hours:i,hoursDisplay:t.hoursDisplay===`always`||n===`digital`?`always`:`auto`,minutes:a,minutesDisplay:t.minutesDisplay===`always`||n===`digital`?`always`:`auto`,seconds:o,secondsDisplay:t.secondsDisplay===`always`||n===`digital`?`always`:`auto`,milliseconds:s,millisecondsDisplay:t.millisecondsDisplay===`always`?`always`:`auto`},`f`)}resolvedOptions(){return yS(this,bS,`f`)}formatToParts(e){let t=[],n=yS(this,bS,`f`),r=n.style,i=n.locale;for(let[a,o]of CS){let s=e[a];if(n[`${a}Display`]===`auto`&&!s)continue;let c=n[a],l=c===`2-digit`?wS:c===`numeric`?{}:{style:`unit`,unit:o,unitDisplay:c},u=new Intl.NumberFormat(i,l).format(s);a===`months`&&(c===`narrow`||r===`narrow`&&u.endsWith(`m`))&&(u=u.replace(/(\d+)m$/,`$1mo`)),t.push(u)}return new SS(i,{type:`unit`,style:r===`digital`?`short`:r}).formatToParts(t)}format(e){return this.formatToParts(e).map(e=>e.value).join(``)}};bS=new WeakMap;var ES=/^[-+]?P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)W)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?$/,DS=[`year`,`month`,`week`,`day`,`hour`,`minute`,`second`,`millisecond`],OS=e=>ES.test(e),kS=class e{constructor(e=0,t=0,n=0,r=0,i=0,a=0,o=0,s=0){this.years=e,this.months=t,this.weeks=n,this.days=r,this.hours=i,this.minutes=a,this.seconds=o,this.milliseconds=s,this.years||=0,this.sign||=Math.sign(this.years),this.months||=0,this.sign||=Math.sign(this.months),this.weeks||=0,this.sign||=Math.sign(this.weeks),this.days||=0,this.sign||=Math.sign(this.days),this.hours||=0,this.sign||=Math.sign(this.hours),this.minutes||=0,this.sign||=Math.sign(this.minutes),this.seconds||=0,this.sign||=Math.sign(this.seconds),this.milliseconds||=0,this.sign||=Math.sign(this.milliseconds),this.blank=this.sign===0}abs(){return new e(Math.abs(this.years),Math.abs(this.months),Math.abs(this.weeks),Math.abs(this.days),Math.abs(this.hours),Math.abs(this.minutes),Math.abs(this.seconds),Math.abs(this.milliseconds))}static from(t){if(typeof t==`string`){let n=String(t).trim(),r=n.startsWith(`-`)?-1:1,i=n.match(ES)?.slice(1).map(e=>(Number(e)||0)*r);return i?new e(...i):new e}else if(typeof t==`object`){let{years:n,months:r,weeks:i,days:a,hours:o,minutes:s,seconds:c,milliseconds:l}=t;return new e(n,r,i,a,o,s,c,l)}throw RangeError(`invalid duration`)}static compare(t,n){let r=Date.now(),i=Math.abs(AS(r,e.from(t)).getTime()-r),a=Math.abs(AS(r,e.from(n)).getTime()-r);return i>a?-1:+(i<a)}toLocaleString(e,t){return new TS(e,t).format(this)}};function AS(e,t){let n=new Date(e);return t.sign<0?(n.setUTCSeconds(n.getUTCSeconds()+t.seconds),n.setUTCMinutes(n.getUTCMinutes()+t.minutes),n.setUTCHours(n.getUTCHours()+t.hours),n.setUTCDate(n.getUTCDate()+t.weeks*7+t.days),n.setUTCMonth(n.getUTCMonth()+t.months),n.setUTCFullYear(n.getUTCFullYear()+t.years)):(n.setUTCFullYear(n.getUTCFullYear()+t.years),n.setUTCMonth(n.getUTCMonth()+t.months),n.setUTCDate(n.getUTCDate()+t.weeks*7+t.days),n.setUTCHours(n.getUTCHours()+t.hours),n.setUTCMinutes(n.getUTCMinutes()+t.minutes),n.setUTCSeconds(n.getUTCSeconds()+t.seconds)),n}function jS(e,t=`second`,n=Date.now()){let r=e.getTime()-n;if(r===0)return new kS;let i=Math.sign(r),a=Math.abs(r),o=Math.floor(a/1e3),s=Math.floor(o/60),c=Math.floor(s/60),l=Math.floor(c/24),u=Math.floor(l/30),d=Math.floor(u/12),f=DS.indexOf(t)||DS.length;return new kS(f>=0?d*i:0,f>=1?(u-d*12)*i:0,0,f>=3?(l-u*30)*i:0,f>=4?(c-l*24)*i:0,f>=5?(s-c*60)*i:0,f>=6?(o-s*60)*i:0,f>=7?(a-o*1e3)*i:0)}function MS(e,{relativeTo:t=Date.now()}={}){if(t=new Date(t),e.blank)return e;let n=e.sign,r=Math.abs(e.years),i=Math.abs(e.months),a=Math.abs(e.weeks),o=Math.abs(e.days),s=Math.abs(e.hours),c=Math.abs(e.minutes),l=Math.abs(e.seconds),u=Math.abs(e.milliseconds);u>=900&&(l+=Math.round(u/1e3)),(l||c||s||o||a||i||r)&&(u=0),l>=55&&(c+=Math.round(l/60)),(c||s||o||a||i||r)&&(l=0),c>=55&&(s+=Math.round(c/60)),(s||o||a||i||r)&&(c=0),o&&s>=12&&(o+=Math.round(s/24)),!o&&s>=21&&(o+=Math.round(s/24)),(o||a||i||r)&&(s=0);let d=t.getFullYear(),f=t.getMonth(),p=t.getDate();if(o>=27||r+i+o){let e=new Date(t);e.setDate(1),e.setMonth(f+i*n+1),e.setDate(0);let s=Math.max(0,p-e.getDate()),c=new Date(t);c.setFullYear(d+r*n),c.setDate(p-s),c.setMonth(f+i*n),c.setDate(p-s+o*n);let l=c.getFullYear()-t.getFullYear(),u=c.getMonth()-t.getMonth(),m=Math.abs(Math.round((Number(c)-Number(t))/864e5))+s,h=Math.abs(l*12+u);m<27?(o>=6?(a+=Math.round(o/7),o=0):o=m,i=r=0):h<=11?(i=h,r=0):(i=0,r=l*n),(i||r)&&(o=0)}return r&&(i=0),a>=4&&(i+=Math.round(a/4)),(i||r)&&(a=0),o&&a&&!i&&!r&&(a+=Math.round(o/7),o=0),new kS(r*n,i*n,a*n,o*n,s*n,c*n,l*n,u*n)}function NS(e,t){let n=MS(e,t);if(n.blank)return[0,`second`];for(let e of DS){if(e===`millisecond`)continue;let t=n[`${e}s`];if(t)return[t,e]}return[0,`second`]}var Q=function(e,t,n,r){if(n===`a`&&!r)throw TypeError(`Private accessor was defined without a getter`);if(typeof t==`function`?e!==t||!r:!t.has(e))throw TypeError(`Cannot read private member from an object whose class did not declare it`);return n===`m`?r:n===`a`?r.call(e):r?r.value:t.get(e)},PS=function(e,t,n,r,i){if(r===`m`)throw TypeError(`Private method is not writable`);if(r===`a`&&!i)throw TypeError(`Private accessor was defined without a setter`);if(typeof t==`function`?e!==t||!i:!t.has(e))throw TypeError(`Cannot write private member to an object whose class did not declare it`);return r===`a`?i.call(e,n):i?i.value=n:t.set(e,n),n},$,FS,IS,LS,RS,zS,BS,VS,HS,US,WS,GS,KS,qS,JS,YS,XS=globalThis.HTMLElement||null,ZS=new kS,QS=new kS(0,0,0,0,0,1),$S=class extends Event{constructor(e,t,n,r){super(`relative-time-updated`,{bubbles:!0,composed:!0}),this.oldText=e,this.newText=t,this.oldTitle=n,this.newTitle=r}};function eC(e){if(!e.date)return 1/0;if(e.format===`duration`||e.format===`elapsed`){let t=e.precision;if(t===`second`)return 1e3;if(t===`minute`)return 60*1e3}let t=Math.abs(Date.now()-e.date.getTime());return t<60*1e3?1e3:t<3600*1e3?60*1e3:3600*1e3}var tC=new class{constructor(){this.elements=new Set,this.time=1/0,this.timer=-1}observe(e){if(this.elements.has(e))return;this.elements.add(e);let t=e.date;if(t&&t.getTime()){let t=eC(e),n=Date.now()+t;n<this.time&&(clearTimeout(this.timer),this.timer=setTimeout(()=>this.update(),t),this.time=n)}}unobserve(e){this.elements.has(e)&&this.elements.delete(e)}update(){if(clearTimeout(this.timer),!this.elements.size)return;let e=1/0;for(let t of this.elements)e=Math.min(e,eC(t)),t.update();this.time=Math.min(3600*1e3,e),this.timer=setTimeout(()=>this.update(),this.time),this.time+=Date.now()}},nC=class extends XS{constructor(){super(...arguments),$.add(this),FS.set(this,!1),IS.set(this,!1),RS.set(this,this.shadowRoot?this.shadowRoot:this.attachShadow?this.attachShadow({mode:`open`}):this),YS.set(this,null)}static define(e=`relative-time`,t=customElements){return t.define(e,this),this}get timeZone(){return this.closest(`[time-zone]`)?.getAttribute(`time-zone`)||this.ownerDocument.documentElement.getAttribute(`time-zone`)||void 0}static get observedAttributes(){return[`second`,`minute`,`hour`,`weekday`,`day`,`month`,`year`,`time-zone-name`,`prefix`,`threshold`,`tense`,`precision`,`format`,`format-style`,`no-title`,`datetime`,`lang`,`title`,`aria-hidden`,`time-zone`]}get onRelativeTimeUpdated(){return Q(this,YS,`f`)}set onRelativeTimeUpdated(e){Q(this,YS,`f`)&&this.removeEventListener(`relative-time-updated`,Q(this,YS,`f`)),PS(this,YS,typeof e==`object`||typeof e==`function`?e:null,`f`),typeof e==`function`&&this.addEventListener(`relative-time-updated`,e)}get second(){let e=this.getAttribute(`second`);if(e===`numeric`||e===`2-digit`)return e}set second(e){this.setAttribute(`second`,e||``)}get minute(){let e=this.getAttribute(`minute`);if(e===`numeric`||e===`2-digit`)return e}set minute(e){this.setAttribute(`minute`,e||``)}get hour(){let e=this.getAttribute(`hour`);if(e===`numeric`||e===`2-digit`)return e}set hour(e){this.setAttribute(`hour`,e||``)}get weekday(){let e=this.getAttribute(`weekday`);if(e===`long`||e===`short`||e===`narrow`)return e;if(this.format===`datetime`&&e!==``)return this.formatStyle}set weekday(e){this.setAttribute(`weekday`,e||``)}get day(){let e=this.getAttribute(`day`)??`numeric`;if(e===`numeric`||e===`2-digit`)return e}set day(e){this.setAttribute(`day`,e||``)}get month(){let e=this.format,t=this.getAttribute(`month`);if(t!==``&&(t??=e===`datetime`?this.formatStyle:`short`,t===`numeric`||t===`2-digit`||t===`short`||t===`long`||t===`narrow`))return t}set month(e){this.setAttribute(`month`,e||``)}get year(){let e=this.getAttribute(`year`);if(e===`numeric`||e===`2-digit`)return e;if(!this.hasAttribute(`year`)&&new Date().getUTCFullYear()!==this.date?.getUTCFullYear())return`numeric`}set year(e){this.setAttribute(`year`,e||``)}get timeZoneName(){let e=this.getAttribute(`time-zone-name`);if(e===`long`||e===`short`||e===`shortOffset`||e===`longOffset`||e===`shortGeneric`||e===`longGeneric`)return e}set timeZoneName(e){this.setAttribute(`time-zone-name`,e||``)}get prefix(){return this.getAttribute(`prefix`)??(this.format===`datetime`?``:`on`)}set prefix(e){this.setAttribute(`prefix`,e)}get threshold(){let e=this.getAttribute(`threshold`);return e&&OS(e)?e:`P30D`}set threshold(e){this.setAttribute(`threshold`,e)}get tense(){let e=this.getAttribute(`tense`);return e===`past`?`past`:e===`future`?`future`:`auto`}set tense(e){this.setAttribute(`tense`,e)}get precision(){let e=this.getAttribute(`precision`);return DS.includes(e)?e:this.format===`micro`?`minute`:`second`}set precision(e){this.setAttribute(`precision`,e)}get format(){let e=this.getAttribute(`format`);return e===`datetime`?`datetime`:e===`relative`?`relative`:e===`duration`?`duration`:e===`micro`?`micro`:e===`elapsed`?`elapsed`:`auto`}set format(e){this.setAttribute(`format`,e)}get formatStyle(){let e=this.getAttribute(`format-style`);if(e===`long`)return`long`;if(e===`short`)return`short`;if(e===`narrow`)return`narrow`;let t=this.format;return t===`elapsed`||t===`micro`?`narrow`:t===`datetime`?`short`:`long`}set formatStyle(e){this.setAttribute(`format-style`,e)}get noTitle(){return this.hasAttribute(`no-title`)}set noTitle(e){this.toggleAttribute(`no-title`,e)}get datetime(){return this.getAttribute(`datetime`)||``}set datetime(e){this.setAttribute(`datetime`,e)}get date(){let e=Date.parse(this.datetime);return Number.isNaN(e)?null:new Date(e)}set date(e){this.datetime=e?.toISOString()||``}connectedCallback(){this.update()}disconnectedCallback(){tC.unobserve(this)}attributeChangedCallback(e,t,n){t!==n&&(e===`title`&&PS(this,FS,n!==null&&(this.date&&Q(this,$,`m`,zS).call(this,this.date))!==n,`f`),!Q(this,IS,`f`)&&!(e===`title`&&Q(this,FS,`f`))&&PS(this,IS,(async()=>{await Promise.resolve(),this.update(),PS(this,IS,!1,`f`)})(),`f`))}update(){let e=Q(this,RS,`f`).textContent||this.textContent||``,t=this.getAttribute(`title`)||``,n=t,r=this.date;if(typeof Intl>`u`||!Intl.DateTimeFormat||!r){Q(this,RS,`f`).textContent=e;return}let i=Date.now();Q(this,FS,`f`)||(n=Q(this,$,`m`,zS).call(this,r)||``,n&&!this.noTitle&&this.setAttribute(`title`,n));let a=jS(r,this.precision,i),o=Q(this,$,`m`,BS).call(this,a),s=e,c=Q(this,$,`m`,JS).call(this,o);s=c?Q(this,$,`m`,KS).call(this,r):o===`duration`?Q(this,$,`m`,VS).call(this,a):o===`relative`?Q(this,$,`m`,HS).call(this,a):Q(this,$,`m`,US).call(this,r),s?Q(this,$,`m`,qS).call(this,s):this.shadowRoot===Q(this,RS,`f`)&&this.textContent&&Q(this,$,`m`,qS).call(this,this.textContent),(s!==e||n!==t)&&this.dispatchEvent(new $S(e,s,t,n)),o===`relative`||o===`duration`||c&&(Q(this,$,`m`,WS).call(this,r)||Q(this,$,`m`,GS).call(this,r))?tC.observe(this):tC.unobserve(this)}};FS=new WeakMap,IS=new WeakMap,RS=new WeakMap,YS=new WeakMap,$=new WeakSet,LS=function(){let e=this.closest(`[lang]`)?.getAttribute(`lang`)||this.ownerDocument.documentElement.getAttribute(`lang`);try{return new Intl.Locale(e??``).toString()}catch{return`default`}},zS=function(e){return new Intl.DateTimeFormat(Q(this,$,`a`,LS),{day:`numeric`,month:`short`,year:`numeric`,hour:`numeric`,minute:`2-digit`,timeZoneName:`short`,timeZone:this.timeZone}).format(e)},BS=function(e){let t=this.format;if(t===`datetime`)return`datetime`;if(t===`duration`||t===`elapsed`||t===`micro`)return`duration`;if((t===`auto`||t===`relative`)&&typeof Intl<`u`&&Intl.RelativeTimeFormat){let t=this.tense;if(t===`past`||t===`future`||kS.compare(e,this.threshold)===1)return`relative`}return`datetime`},VS=function(e){let t=Q(this,$,`a`,LS),n=this.format,r=this.formatStyle,i=this.tense,a=ZS;n===`micro`?(e=MS(e),a=QS,e.months===0&&(this.tense===`past`&&e.sign!==-1||this.tense===`future`&&e.sign!==1)&&(e=QS)):(i===`past`&&e.sign!==-1||i===`future`&&e.sign!==1)&&(e=a);let o=`${this.precision}sDisplay`;return e.blank?a.toLocaleString(t,{style:r,[o]:`always`}):e.abs().toLocaleString(t,{style:r})},HS=function(e){let t=new Intl.RelativeTimeFormat(Q(this,$,`a`,LS),{numeric:`auto`,style:this.formatStyle}),n=this.tense;n===`future`&&e.sign!==1&&(e=ZS),n===`past`&&e.sign!==-1&&(e=ZS);let[r,i]=NS(e);return i===`second`&&r<10?t.format(0,this.precision===`millisecond`?`second`:this.precision):t.format(r,i)},US=function(e){let t=new Intl.DateTimeFormat(Q(this,$,`a`,LS),{second:this.second,minute:this.minute,hour:this.hour,weekday:this.weekday,day:this.day,month:this.month,year:this.year,timeZoneName:this.timeZoneName,timeZone:this.timeZone});return`${this.prefix} ${t.format(e)}`.trim()},WS=function(e){let t=new Date,n=new Intl.DateTimeFormat(Q(this,$,`a`,LS),{timeZone:this.timeZone,year:`numeric`,month:`2-digit`,day:`2-digit`});return n.format(t)===n.format(e)},GS=function(e){let t=new Date,n=new Intl.DateTimeFormat(Q(this,$,`a`,LS),{timeZone:this.timeZone,year:`numeric`});return n.format(t)===n.format(e)},KS=function(e){let t={hour:`numeric`,minute:`2-digit`,timeZoneName:`short`,timeZone:this.timeZone};if(Q(this,$,`m`,WS).call(this,e)){let n=new Intl.RelativeTimeFormat(Q(this,$,`a`,LS),{numeric:`auto`}).format(0,`day`);n=n.charAt(0).toLocaleUpperCase(Q(this,$,`a`,LS))+n.slice(1);let r=new Intl.DateTimeFormat(Q(this,$,`a`,LS),t).format(e);return`${n} ${r}`}let n=Object.assign(Object.assign({},t),{day:`numeric`,month:`short`});return Q(this,$,`m`,GS).call(this,e)?new Intl.DateTimeFormat(Q(this,$,`a`,LS),n).format(e):new Intl.DateTimeFormat(Q(this,$,`a`,LS),Object.assign(Object.assign({},n),{year:`numeric`})).format(e)},qS=function(e){if(this.hasAttribute(`aria-hidden`)&&this.getAttribute(`aria-hidden`)===`true`){let t=document.createElement(`span`);t.setAttribute(`aria-hidden`,`true`),t.textContent=e,Q(this,RS,`f`).replaceChildren(t)}else Q(this,RS,`f`).textContent=e},JS=function(e){return e===`duration`?!1:this.ownerDocument.documentElement.getAttribute(`data-prefers-absolute-time`)===`true`||this.ownerDocument.body?.getAttribute(`data-prefers-absolute-time`)===`true`};var rC=typeof globalThis<`u`?globalThis:window;try{rC.RelativeTimeElement=nC.define()}catch(e){if(!(rC.DOMException&&e instanceof DOMException&&e.name===`NotSupportedError`)&&!(e instanceof ReferenceError))throw e}Object.values({Enabled:`enabled`,Disabled:`disabled`,Live:`live`,Pending:`pending`,Expired:`expired`,Active:`active`,Suspended:`suspended`,Inactive:`inactive`});var iC={on:`teal`,live:`teal`,active:`teal`,enabled:`teal`,turquoise:`teal`,off:`red`,suspended:`red`,expired:`red`,warning:`amber`,pending:`sky`,grey:`gray`};function aC(e){return e?iC[e]||(Oo.includes(e)?e:`gray`):`gray`}export{ss as A,me as B,zc as C,Pc as D,Ac as E,ai as F,he as H,$r as I,Re as L,Do as M,Ea as N,Sc as O,F as P,Fe as R,Rc as S,Nc as T,le as U,_e as V,re as W,If as _,Zx as a,Vc as b,Vx as c,sv as d,$g as f,Ap as g,am as h,qx as i,Oo as j,jc as k,Nx as l,fm as m,oS as n,Jx as o,Xg as p,Xx as r,Wx as s,aC as t,Vy as u,Xd as v,Lc as w,Bc as x,Wc as y,ke as z};