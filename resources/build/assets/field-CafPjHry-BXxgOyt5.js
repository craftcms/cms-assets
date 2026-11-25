import{i as e,n as t}from"./translate.ts-DW16fAdu.js";import{t as n}from"./decorate-B3KLIx2E-B3KLIx2E.js";import{a as r,d as i,f as a,i as o,n as s,o as c,r as l,t as u,u as d}from"./decorators-B_wqftM0.js";import{n as f,t as p}from"./query-Df4-SAIv.js";import{a as m,i as h,t as g}from"./external-links.ts-D9CFywYE.js";import{a as _,i as v,n as y,o as b,r as x}from"./Config.ts-CMTyoefP.js";import{r as S}from"./actionClient-DlCWcHgA-BOe1VjYK.js";function C(e){return(t,n)=>{let{slot:r,selector:i}=e??{},a=`slot`+(r?`[name=${r}]`:`:not([name])`);return f(t,n,{get(){let t=(this.renderRoot?.querySelector(a))?.assignedElements(e)??[];return i===void 0?t:t.filter((e=>e.matches(i)))}})}}var w={Idle:`idle`,Loading:`loading`,Success:`success`,Error:`error`},T=i`
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
`,E=e=>{class t extends e{constructor(...e){super(...e),this.shortcut=null}get shortcutKeys(){let e=this.shortcut;if(typeof e==`string`&&e.trim().startsWith(`{`))try{e=JSON.parse(e)}catch{}return e?typeof e==`string`?{key:e,alt:!1,shift:!1}:{key:e.key,alt:e.alt??!1,shift:e.shift??!1}:null}get shortcutAriaKeys(){let e=this.shortcutKeys;return e?[/mac|iphone|ipad|ipod/i.test(navigator.platform)?`Meta`:`Control`,...e.alt?[`Alt`]:[],...e.shift?[`Shift`]:[],e.key.length===1?e.key.toUpperCase():e.key].join(`+`):null}}return n([s()],t.prototype,`shortcut`,void 0),t},D=i`
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
`;i`
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
`;var O=i`
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
`,k={Neutral:`neutral`,Success:`success`,Warning:`warning`,Danger:`danger`,Info:`info`},ee=Object.values(k),A=class{constructor(e,t={}){this.host=e,this.options=t,this.observer=new MutationObserver(()=>{this.options.onChange?.(),this.host.requestUpdate()}),e.addController(this)}hostConnected(){this.options.onChange?.(),this.observer.observe(this.host,{childList:!0,subtree:!0,characterData:this.options.characterData??!1,attributes:!0,attributeFilter:[`slot`,...this.options.attributeFilter??[]]})}hostDisconnected(){this.observer.disconnect()}};function j(e,...t){return Array.from(e.children).some(e=>t.includes(e.slot))}var M=i`
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
`;function N(e){return typeof requestIdleCallback==`function`?requestIdleCallback(e):window.setTimeout(e)}function P(e){typeof cancelIdleCallback==`function`?cancelIdleCallback(e):window.clearTimeout(e)}var te=`kbd {
  box-sizing: border-box;
  min-inline-size: 1.75em;
  font-family: var(--c-font-body);
  font-size: .85em;
  font-weight: var(--font-weight-medium);
  text-align: center;
  white-space: nowrap;
  color: inherit;
  background-color: var(--c-color-neutral-fill-quiet);
  border: 1px solid var(--c-color-neutral-border-quiet);
  border-radius: var(--c-radius-sm);
  box-shadow: var(--c-shortcut-shadow, var(--c-shadow-2xs));
  border-block-end-width: 2px;
  padding-block: 0;
  padding-inline: .4em;
  line-height: 1.4;
  display: inline-block;
}
`,F=class extends l{constructor(){super(),this.alt=!1,this.shift=!1,this.os=`Unknown`,this.os=this.detectOS()}connectedCallback(){super.connectedCallback(),this.os===`Unknown`&&(this.os=this.detectOS())}detectOS(){let e=navigator.platform.toLowerCase();return e.includes(`mac`)||/iphone|ipad|ipod/.test(e)?`Mac`:e.includes(`win`)?`Windows`:e.includes(`linux`)?`Linux`:`Unknown`}modifierKeys(){return this.os===`Mac`?[...this.alt?[{label:`⌥`,name:`Option`}]:[],...this.shift?[{label:`⇧`,name:`Shift`}]:[],{label:`⌘`,name:`Command`}]:[`Ctrl`,...this.alt?[`Alt`]:[],...this.shift?[`Shift`]:[]].map(e=>({label:e,name:e}))}render(){return d`<span class="shortcut"
      >${this.modifierKeys().map(e=>e.label===e.name?d`<kbd class="shortcut__key">${e.label}</kbd>`:d`<kbd class="shortcut__key"
              ><span aria-hidden="true">${e.label}</span
              ><span class="cp-visually-hidden">${e.name}</span></kbd
            >`)}<kbd class="shortcut__key"><slot></slot></kbd
    ></span>`}};F.styles=[M,a(te),i`
      :host {
        display: inline-flex;
      }

      .shortcut {
        display: inline-flex;
        gap: 0.25em;
      }
    `],n([s({type:Boolean})],F.prototype,`alt`,void 0),n([s({type:Boolean})],F.prototype,`shift`,void 0),n([s()],F.prototype,`os`,void 0),customElements.get(`craft-shortcut`)||customElements.define(`craft-shortcut`,F);var ne={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},re=e=>(...t)=>({_$litDirective$:e,values:t}),ie=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},ae=class extends ie{constructor(e){if(super(e),this.it=r,e.type!==ne.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===r||e==null)return this._t=void 0,this.it=e;if(e===c)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};ae.directiveName=`unsafeHTML`,ae.resultType=1;var oe=re(ae),se=class extends ae{};se.directiveName=`unsafeSVG`,se.resultType=2;var ce=re(se),le=new Map;async function ue(e,t){try{let n=await fetch(e,{mode:`cors`});if(!n.ok)return r;let i=document.createElement(`div`);i.innerHTML=await n.text();let a=i.firstElementChild;if(a?.tagName?.toLowerCase()!==`svg`)return r;if(a.setAttribute(`fill`,`currentColor`),a.setAttribute(`part`,`svg`),t){let e=a.getAttribute(`style`);a.setAttribute(`style`,e?`${e}; scale: -1 1`:`scale: -1 1`)}return d`${ce(a.outerHTML)}`}catch{return r}}function de(e,t=`classic`,n=`regular`,r=`/vendor/craft/icons`){let i=`solid`,a=n,o=e.endsWith(`.svg`)?e.split(`.svg`)[0]:e;if(e.includes(`/`)){let[t,...n]=e.split(`/`);a=t??a,o=n.join(`/`)}return a===`thin`?i=`thin`:a===`light`?i=`light`:a===`regular`?i=`regular`:a===`solid`&&(i=`solid`),(t===`brands`||a===`brands`)&&(i=`brands`),(t===`custom-icons`||a===`custom-icons`)&&(i=`custom-icons`),`${r}/${i}/${o}.svg`}function fe(e){return(t,n,i)=>{let a=e(t,n,i);if(a===null)return r;let{url:o,flip:s=!1}=typeof a==`string`?{url:a}:a,c=s?`${o}#flip`:o,l=le.get(c);return l||(l=ue(o,s),le.set(c,l)),l.then(e=>(e===r&&le.delete(c),e))}}var pe=fe(de);function me(e){pe=e}function he(e,t=`classic`,n=`regular`){return Promise.resolve(pe(e,t,n))}var ge=new WeakSet,_e=class extends l{constructor(...e){super(...e),_(this,ge),this.appearance=`plain`,this._svg=r,this._hasSlottedContent=!1}connectedCallback(){super.connectedCallback(),this.appearance===`badge`&&!this.getAttribute(`data-color`)&&this.setAttribute(`data-color`,`warning`),this._hasSlottedContent=this.childElementCount>0}firstUpdated(){b(ge,this,be).call(this)}updated(e){super.updated(e),(e.has(`name`)||e.has(`family`)||e.has(`variant`))&&b(ge,this,ye).call(this),e.has(`label`)&&this.hasUpdated&&b(ge,this,be).call(this)}_handleSlotChange(e){let t=e.target;this._hasSlottedContent=t.assignedElements({flatten:!0}).length>0}render(){return d`
      <slot @slotchange=${this._handleSlotChange}></slot>
      ${this._hasSlottedContent?r:this._svg}
    `}static get styles(){return[i`
        :host {
          box-sizing: content-box;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          vertical-align: -0.125em;
          width: 1.25em;
          height: 1em;
          font-size: var(
            --c-icon-size,
            var(--c-size-icon-sm, calc(12rem / 16))
          );
        }

        :host([data-color]) {
          color: var(--c-color-fill-loud);
        }

        :host(
          :is(
            [name='wrench'],
            [name='tool'],
            [name='arrow-up-right-from-square'],
            [name='external'],
            [name='check'],
            [name='circle-check'],
            [name='done'],
            [name='square-check'],
            [name='check-double'],
            [name='magnifying-glass'],
            [name='search']
          ):dir(rtl)
        ) {
          scale: -1 1;
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
      `]}};function ve(){return this.name?{name:this.name,family:this.family??`classic`,variant:this.variant??`solid`}:null}async function ye(){let e=b(ge,this,ve).call(this);if(e===null){this._svg=r;return}let t;try{t=await he(e.name,e.family,e.variant)}catch(e){console.error(e),t=r}let n=b(ge,this,ve).call(this);n!==null&&e.name===n.name&&e.family===n.family&&e.variant===n.variant&&(this._svg=t)}function be(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}n([s({reflect:!0})],_e.prototype,`name`,void 0),n([s({reflect:!0})],_e.prototype,`family`,void 0),n([s({reflect:!0})],_e.prototype,`variant`,void 0),n([s()],_e.prototype,`label`,void 0),n([s({reflect:!0})],_e.prototype,`appearance`,void 0),n([u()],_e.prototype,`_svg`,void 0),n([u()],_e.prototype,`_hasSlottedContent`,void 0),customElements.get(`craft-icon`)||customElements.define(`craft-icon`,_e);var xe=class extends l{constructor(...e){super(...e),this.debug=!1}render(){return d`<slot></slot>`}};xe.styles=i`
    :host(:not([debug])) {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
      white-space: nowrap;
    }
  `,n([s({type:Boolean,reflect:!0})],xe.prototype,`debug`,void 0),customElements.get(`craft-visually-hidden`)||customElements.define(`craft-visually-hidden`,xe);var I=re(class extends ie{constructor(e){if(super(e),e.type!==ne.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter((t=>e[t])).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter((e=>e!==``))));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return c}}),Se=i`
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
`,Ce=class extends l{constructor(...e){super(...e),this.visible=!0,this.label=``}show(){this.visible=!0,this.dispatchEvent(new CustomEvent(`craft-show`))}hide(){this.visible=!1,this.dispatchEvent(new CustomEvent(`craft-hide`))}focus(){this.wrapper?.focus()}render(){return d`
      <div
        tabindex="-1"
        class="${I({wrapper:!0,hidden:!this.visible})}"
      >
        <div class="spinner"></div>
        <span class="cp-visually-hidden"><slot>${this.label}</slot></span>
      </div>
    `}};Ce.styles=[M,Se],n([s({reflect:!0,type:Boolean})],Ce.prototype,`visible`,void 0),n([s()],Ce.prototype,`label`,void 0),n([p(`.wrapper`)],Ce.prototype,`wrapper`,void 0),customElements.get(`craft-spinner`)||customElements.define(`craft-spinner`,Ce);var we=`craft-action-menu, craft-popover`,Te=`data-focus-key`;function Ee(e){return!(e instanceof HTMLElement)||!e.isConnected||e===document.body||De(e,`[inert]`)||e.matches(`:disabled`)?!1:typeof e.checkVisibility==`function`?e.checkVisibility({visibilityProperty:!0}):!De(e,`[hidden]`)}function De(e,t){let n=e;for(;n;){let e=n.closest(t);if(e)return e;let r=n.getRootNode();n=r instanceof ShadowRoot?r.host:null}return null}function Oe(e){let t=e.anchor;if(t instanceof HTMLElement)return t;let n=t?.contextElement;if(n instanceof HTMLElement)return n;let r=e.getAttribute(`for`);if(r){let t=e.getRootNode();return typeof t.getElementById==`function`?t.getElementById(r):null}return e.querySelector(`:scope > [slot="invoker"]`)}function ke(e){let t=[],n=e,r=De(n,we);for(;r;)Oe(r)?.contains(n)||t.push(r),n=r,r=r.parentElement?De(r.parentElement,we):null;return t}function Ae(e){let[t]=ke(e);return t?Oe(t):null}function je(e){return De(e,`[data-focus-scope]`)?.getAttribute(`data-focus-scope`)??null}function Me(e,t){let n=we.split(`, `).map(e=>`${e}[${Te}]`).join(`, `);return[...document.querySelectorAll(n)].filter(n=>n.getAttribute(`data-focus-key`)===e&&je(n)===t)}function Ne(e){if(!e)return()=>null;let t=ke(e).map(e=>({menu:e,key:e.getAttribute(`data-focus-key`)||null,scopeKey:je(e)}));return()=>{if(Ee(e))return e;for(let{menu:e}of t){let t=e.isConnected?Oe(e):null;if(Ee(t))return t}for(let{key:e,scopeKey:n}of t)if(e!==null)for(let t of Me(e,n)){let e=Oe(t);if(Ee(e))return e}return null}}function Pe(e){if(typeof e!=`string`)return e;try{return JSON.parse(e)}catch{return null}}function Fe(e,{trigger:t,sourceEvent:n}){let r={...e??{},...n?{sourceEvent:n}:{}};if(t){r.trigger=t;let e;Object.defineProperty(r,"returnFocus",{enumerable:!0,get:()=>e??=Ne(t)})}return r}async function Ie(e,t={}){switch(e.type){case`clipboard`:await navigator.clipboard.writeText(e.value);break;case`http`:{if(e.confirm&&!confirm(e.confirm)||e.requireElevatedSession&&!await Le())return;let t=await fetch(e.url,{method:e.method||`POST`,headers:{"Content-Type":`application/json`,Accept:`application/json`},body:e.body?JSON.stringify(e.body):void 0}),n=await t.json().catch(()=>({}));if(!t.ok)throw Error(n.message??`Request failed`);for(let e of Array.isArray(n.messages)?n.messages:[])window.dispatchEvent(new CustomEvent(`craft-message`,{detail:e}));typeof n.redirect==`string`&&n.redirect&&Re(n.redirect);break}case`event`:if(e.confirm&&!confirm(e.confirm))return;window.dispatchEvent(new CustomEvent(e.name,{detail:Fe(e.detail,t)}));break;case`download`:{if(e.confirm&&!confirm(e.confirm)||e.requireElevatedSession&&!await Le())return;if(e.method&&e.method!==`GET`){let t=await S.request({url:e.url,method:e.method,data:e.body,responseType:`blob`}),n=String(t.headers[`content-disposition`]??``),r=/filename\*?=(?:UTF-8'')?"?([^";]+)"?/i.exec(n),i=e.filename??(r?.[1]?decodeURIComponent(r[1]):`download`),a=URL.createObjectURL(t.data),o=document.createElement(`a`);o.href=a,o.download=i,document.body.appendChild(o),o.click(),o.remove(),URL.revokeObjectURL(a);break}let t=document.createElement(`a`);t.href=e.url,t.download=e.filename??``,t.click();break}default:throw Error(`Unknown action type: ${e.type}`)}}async function Le(){let e={};return window.dispatchEvent(new CustomEvent(`craft:require-elevated-session`,{detail:e})),e.confirmed??!0}function Re(e){window.dispatchEvent(new CustomEvent(`action:redirect`,{cancelable:!0,detail:{url:e}}))&&window.location.assign(e)}var ze=e=>e??r,Be=i`
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
`,Ve=[`a[href]`,`button`,`input`,`select`,`textarea`,`[tabindex]:not([tabindex="-1"])`,`craft-button`,`craft-action-item`,`craft-checkbox`,`craft-switch`].join(`, `),He=new Set,Ue;function We(e){He.add(e),Ue??=N(Ke)}function Ge(e){He.delete(e),!He.size&&Ue!==void 0&&(P(Ue),Ue=void 0)}function Ke(e){Ue=void 0;for(let t of He)if(t.renderNow(),e&&e.timeRemaining()<=0)break;He.size&&(Ue=N(Ke))}var qe=new WeakSet,Je=new WeakMap,L=class extends E(l){constructor(...e){super(...e),_(this,qe),this.icon=null,this.iconColor=null,this.href=null,this.target=null,this.rel=null,this.disabled=!1,this.variant=k.Neutral,this.checked=!1,this.active=!1,this.current=!1,this.type=`button`,this.action=null,this.feedback=null,this.feedbackDuration=1e3,this.state=w.Idle,this.feedbackMessage=null,this._resetStateTimeout=null,x(this,Je,null),this._blockDisabledClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this._hasNestedControl=!1,this._lightDom=new A(this,{onChange:()=>this._checkSuffixForControls()})}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,this._blockDisabledClick,{capture:!0}),this.addEventListener(`click`,this),v(Je,this)&&(b(qe,this,Xe).call(this)?We(this):this.renderNow())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this._blockDisabledClick,{capture:!0}),this.removeEventListener(`click`,this),this._clearResetStateTimeout(),Ge(this)}focus(e){let t=this.shadowRoot?.querySelector(`[part="control"]`);t?t.focus(e):super.focus(e)}scheduleUpdate(){return this.hasUpdated||!b(qe,this,Xe).call(this)?super.scheduleUpdate():new Promise(e=>{y(Je,this,()=>{y(Je,this,null),Ge(this),e()}),We(this)}).then(()=>super.scheduleUpdate())}renderNow(){v(Je,this)&&(v(Je,this).call(this),this.performUpdate())}_clearResetStateTimeout(){this._resetStateTimeout!==null&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=null)}setState(e,t={}){this.state=e,this.feedbackMessage=t.message??null,this.dispatchEvent(new CustomEvent(`craft-state-change`,{bubbles:!0,composed:!0,detail:{state:e,actionType:Pe(this.action)?.type,...t}}))}async handleEvent(e){if(this.disabled){e.preventDefault();return}let t=Pe(this.action);if(e.type===`click`&&t){t.type===`http`&&this.setState(w.Loading);try{await Ie(t,{trigger:this,sourceEvent:e}),this.setState(w.Success,this.feedback?.success)}catch(e){this.setState(w.Error,{message:e.message,...this.feedback?.error||{}})}finally{this._clearResetStateTimeout(),this._resetStateTimeout=setTimeout(()=>{this._resetStateTimeout=null,this.setState(w.Idle)},this.feedbackDuration)}}}renderCheckbox(){return d`<span class="action-item__check">
      <slot name="checkmark">
        ${this.checked?d`<craft-icon name="check"></craft-icon>`:r}
      </slot>
    </span>`}renderIcon(){switch(this.state){case w.Loading:return d`<craft-spinner style="--size: 0.8em"></craft-spinner>`;case w.Success:return d`<craft-icon
          name="check"
          style="color: var(--c-color-success-on-normal)"
        ></craft-icon>`;case w.Error:return d`<craft-icon
          name="xmark-large"
          style="color: var(--c-color-danger-on-normal)"
        ></craft-icon>`;default:return d`
          <slot name="icon">
            ${this.icon?d`<craft-icon
                  name="${this.icon}"
                  style="${this.iconColor?`color: ${b(qe,this,Ye).call(this,this.iconColor)}`:r}"
                ></craft-icon>`:r}
          </slot>
        `}}renderPrefix(){let e=!!this.querySelector(`[slot="icon"]`)||!!this.icon,t=!!this.querySelector(`[slot="prefix"]`);return d`
      ${this.type===`checkbox`?this.renderCheckbox():r}
      ${t?d`<slot name="prefix" part="prefix"></slot>`:r}
      ${e?d`<div class="action-item__icon">${this.renderIcon()}</div>`:r}
    `}_checkSuffixForControls(){this._hasNestedControl=Array.from(this.children).some(e=>e.slot===`suffix`&&e.matches(Ve))}renderBody(){return d`
      ${this.renderPrefix()}

      <span class="action-item__label">
        ${this.feedbackMessage?this.feedbackMessage:d`<slot></slot>`}
      </span>

      <span
        class="${I({"action-item__suffix":!0,"a11y-error":this._hasNestedControl})}"
      >
        <slot name="suffix"></slot>
        ${this.shortcutKeys?d`<craft-shortcut
              ?alt="${this.shortcutKeys.alt}"
              ?shift="${this.shortcutKeys.shift}"
              >${this.shortcutKeys.key}</craft-shortcut
            >`:r}
      </span>
    `}render(){let e=g(this.href,this.target);return this.href?d`
          <a
            part="control"
            class="${I({"action-item":!0,"action-item--checkbox":this.type===`checkbox`})}"
            href="${this.href}"
            aria-current="${this.current?`true`:r}"
            aria-disabled="${this.disabled?`true`:r}"
            aria-keyshortcuts="${this.shortcutAriaKeys??r}"
            target="${ze(e??void 0)}"
            rel="${ze(this.rel??(e===`_blank`?`noopener`:null)??void 0)}"
          >
            ${this.renderBody()}${!this.target&&e?d`<span class="cp-visually-hidden">${m()}</span>`:r}
          </a>
        `:d`
          <button
            type="button"
            part="control"
            class="${I({"action-item":!0,"action-item--checkbox":this.type===`checkbox`})}"
            aria-current="${this.current?`true`:r}"
            aria-keyshortcuts="${this.shortcutAriaKeys??r}"
            aria-disabled="${this.disabled?`true`:r}"
          >
            ${this.renderBody()}
          </button>
        `}};function Ye(e){return e.startsWith(`--`)?`var(${e}, currentColor)`:e===`black`||e===`white`?`var(--c-text-default)`:`var(--c-color-${e}-fill-loud, currentColor)`}function Xe(){let e=this.closest(`craft-action-menu`);if(!e||e.open)return!1;let t=this;for(;t.parentElement!==e;)t=t.parentElement;return t.slot!==`invoker`}L.styles=[D,O,T,M,Be],L.shadowRootOptions={...l.shadowRootOptions,delegatesFocus:!0},n([s()],L.prototype,`icon`,void 0),n([s({attribute:`icon-color`})],L.prototype,`iconColor`,void 0),n([s()],L.prototype,`href`,void 0),n([s()],L.prototype,`target`,void 0),n([s()],L.prototype,`rel`,void 0),n([s({type:Boolean})],L.prototype,`disabled`,void 0),n([s({reflect:!0})],L.prototype,`variant`,void 0),n([s({type:Boolean})],L.prototype,`checked`,void 0),n([s({type:Boolean,reflect:!0})],L.prototype,`active`,void 0),n([s({type:Boolean})],L.prototype,`current`,void 0),n([s()],L.prototype,`type`,void 0),n([s({type:Object})],L.prototype,`action`,void 0),n([s({type:Object})],L.prototype,`feedback`,void 0),n([s({type:Number,attribute:`feedback-duration`})],L.prototype,`feedbackDuration`,void 0),n([u()],L.prototype,`state`,void 0),n([u()],L.prototype,`feedbackMessage`,void 0),n([u()],L.prototype,`_hasNestedControl`,void 0),customElements.get(`craft-action-item`)||customElements.define(`craft-action-item`,L);var Ze=!1,Qe=!1;window.addEventListener(`keydown`,e=>{e.key===`Enter`&&(Ze=!0)},!0),window.addEventListener(`keyup`,e=>{e.key===`Enter`&&(Ze=!1)},!0),window.addEventListener(`blur`,()=>{Ze=!1});function $e(){if(!Ze||Qe)return;Qe=!0;let e=()=>{Qe=!1,window.removeEventListener(`keyup`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`blur`,e)},t=t=>{t.key===`Enter`&&(t.preventDefault(),t.stopImmediatePropagation(),e())},n=t=>{t.key===`Enter`&&!t.repeat&&e()};window.addEventListener(`keyup`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`blur`,e)}function et(e,...t){let n=e.relatedTarget;if(!(n instanceof Node))return!1;for(let e=n;e;e=rt(e))if(t.includes(e))return!0;return!1}function tt(e,t){for(let n=t;n;n=rt(n))if(n===e)return!0;return!1}function nt(e){let t=e.getRootNode().activeElement;return!!(t&&(t===e||e.contains(t)))}function rt(e){let t=`assignedSlot`in e?e.assignedSlot:null;if(t)return t;let n=e.parentNode;return n instanceof ShadowRoot?n.host:n}var it=new WeakSet;function at(e){it.add(e)}function ot(e){return it.has(e)}var st=new WeakMap;function ct(e,t){st.set(e,[...st.get(e)??[],t])}function lt(e,t){return(st.get(e)??[]).some(e=>{for(let n=rt(e);n;n=rt(n))if(n===t)return!0;return!1})}var ut=new WeakMap;function dt(e){let t=!!e.open;t!==(ut.get(e)??!1)&&(ut.set(e,t),e.dispatchEvent(new CustomEvent(t?`craft-show`:`craft-hide`,{bubbles:!0,composed:!0})),e.updateComplete.then(()=>{!!e.open===t&&e.dispatchEvent(new CustomEvent(t?`craft-after-show`:`craft-after-hide`,{bubbles:!0,composed:!0}))}))}function ft(){return[{name:`computeStyles`,options:{gpuAcceleration:!1}},{name:`containingBlockCorrection`,enabled:!0,phase:`afterWrite`,fn:({state:e})=>{let t=e.elements.popper,n=parseFloat(t.style.left),r=parseFloat(t.style.top);if(Number.isNaN(n)||Number.isNaN(r))return;let i=t.getBoundingClientRect(),a=i.x-n,o=i.y-r;(a!==0||o!==0)&&(t.style.left=`${n-a}px`,t.style.top=`${r-o}px`)}}]}var pt=typeof HTMLElement<`u`&&typeof HTMLElement.prototype.showPopover==`function`;function mt(e){e.toggleAttribute(`data-open`,!0),pt&&!e.matches(`:popover-open`)&&e.showPopover()}function ht(e){pt&&e.matches(`:popover-open`)&&e.hidePopover(),e.removeAttribute(`data-open`)}function gt(e,t){if(getComputedStyle(t).direction!==`rtl`)return e;let[n,r]=e.split(`-`);if(n===`left`||n===`right`){let e=n===`left`?`right`:`left`;return r?`${e}-${r}`:e}return r===`start`||r===`end`?`${n}-${r===`start`?`end`:`start`}`:e}function _t(e){return[{name:`preventOverflow`,options:{padding:8}},{name:`flip`,options:{padding:16}},{name:`offset`,options:{offset:[0,e]}},{name:`arrow`,enabled:!1},...ft()]}var vt=i`
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
`,yt=`bottom`,bt=`right`,xt=`left`,St=`auto`,Ct=[`top`,yt,bt,xt],wt=`start`,Tt=`clippingParents`,Et=`viewport`,Dt=`popper`,Ot=`reference`,kt=Ct.reduce(function(e,t){return e.concat([t+`-`+wt,t+`-end`])},[]),At=[].concat(Ct,[St]).reduce(function(e,t){return e.concat([t,t+`-`+wt,t+`-end`])},[]),jt=[`beforeRead`,`read`,`afterRead`,`beforeMain`,`main`,`afterMain`,`beforeWrite`,`write`,`afterWrite`];function Mt(e){return e?(e.nodeName||``).toLowerCase():null}function R(e){if(e==null)return window;if(e.toString()!==`[object Window]`){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function Nt(e){return e instanceof R(e).Element||e instanceof Element}function z(e){return e instanceof R(e).HTMLElement||e instanceof HTMLElement}function Pt(e){return typeof ShadowRoot>`u`?!1:e instanceof R(e).ShadowRoot||e instanceof ShadowRoot}function Ft(e){var t=e.state;Object.keys(t.elements).forEach(function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},i=t.elements[e];!z(i)||!Mt(i)||(Object.assign(i.style,n),Object.keys(r).forEach(function(e){var t=r[e];t===!1?i.removeAttribute(e):i.setAttribute(e,t===!0?``:t)}))})}function It(e){var t=e.state,n={popper:{position:t.options.strategy,left:`0`,top:`0`,margin:`0`},arrow:{position:`absolute`},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(e){var r=t.elements[e],i=t.attributes[e]||{},a=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce(function(e,t){return e[t]=``,e},{});!z(r)||!Mt(r)||(Object.assign(r.style,a),Object.keys(i).forEach(function(e){r.removeAttribute(e)}))})}}var Lt={name:`applyStyles`,enabled:!0,phase:`write`,fn:Ft,effect:It,requires:[`computeStyles`]};function Rt(e){return e.split(`-`)[0]}var zt=Math.max,Bt=Math.min,Vt=Math.round;function Ht(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(e){return e.brand+`/`+e.version}).join(` `):navigator.userAgent}function Ut(){return!/^((?!chrome|android).)*safari/i.test(Ht())}function Wt(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var r=e.getBoundingClientRect(),i=1,a=1;t&&z(e)&&(i=e.offsetWidth>0&&Vt(r.width)/e.offsetWidth||1,a=e.offsetHeight>0&&Vt(r.height)/e.offsetHeight||1);var o=(Nt(e)?R(e):window).visualViewport,s=!Ut()&&n,c=(r.left+(s&&o?o.offsetLeft:0))/i,l=(r.top+(s&&o?o.offsetTop:0))/a,u=r.width/i,d=r.height/a;return{width:u,height:d,top:l,right:c+u,bottom:l+d,left:c,x:c,y:l}}function Gt(e){var t=Wt(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function Kt(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&Pt(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function qt(e){return R(e).getComputedStyle(e)}function Jt(e){return[`table`,`td`,`th`].indexOf(Mt(e))>=0}function Yt(e){return((Nt(e)?e.ownerDocument:e.document)||window.document).documentElement}function Xt(e){return Mt(e)===`html`?e:e.assignedSlot||e.parentNode||(Pt(e)?e.host:null)||Yt(e)}function Zt(e){return!z(e)||qt(e).position===`fixed`?null:e.offsetParent}function Qt(e){var t=/firefox/i.test(Ht());if(/Trident/i.test(Ht())&&z(e)&&qt(e).position===`fixed`)return null;var n=Xt(e);for(Pt(n)&&(n=n.host);z(n)&&[`html`,`body`].indexOf(Mt(n))<0;){var r=qt(n);if(r.transform!==`none`||r.perspective!==`none`||r.contain===`paint`||[`transform`,`perspective`].indexOf(r.willChange)!==-1||t&&r.willChange===`filter`||t&&r.filter&&r.filter!==`none`)return n;n=n.parentNode}return null}function $t(e){for(var t=R(e),n=Zt(e);n&&Jt(n)&&qt(n).position===`static`;)n=Zt(n);return n&&(Mt(n)===`html`||Mt(n)===`body`&&qt(n).position===`static`)?t:n||Qt(e)||t}function en(e){return[`top`,`bottom`].indexOf(e)>=0?`x`:`y`}function tn(e,t,n){return zt(e,Bt(t,n))}function nn(e,t,n){var r=tn(e,t,n);return r>n?n:r}function rn(){return{top:0,right:0,bottom:0,left:0}}function an(e){return Object.assign({},rn(),e)}function on(e,t){return t.reduce(function(t,n){return t[n]=e,t},{})}var sn=function(e,t){return e=typeof e==`function`?e(Object.assign({},t.rects,{placement:t.placement})):e,an(typeof e==`number`?on(e,Ct):e)};function cn(e){var t,n=e.state,r=e.name,i=e.options,a=n.elements.arrow,o=n.modifiersData.popperOffsets,s=Rt(n.placement),c=en(s),l=[`left`,`right`].indexOf(s)>=0?`height`:`width`;if(!(!a||!o)){var u=sn(i.padding,n),d=Gt(a),f=c===`y`?`top`:xt,p=c===`y`?yt:bt,m=n.rects.reference[l]+n.rects.reference[c]-o[c]-n.rects.popper[l],h=o[c]-n.rects.reference[c],g=$t(a),_=g?c===`y`?g.clientHeight||0:g.clientWidth||0:0,v=m/2-h/2,y=u[f],b=_-d[l]-u[p],x=_/2-d[l]/2+v,S=tn(y,x,b),C=c;n.modifiersData[r]=(t={},t[C]=S,t.centerOffset=S-x,t)}}function ln(e){var t=e.state,n=e.options.element,r=n===void 0?`[data-popper-arrow]`:n;r!=null&&(typeof r==`string`&&(r=t.elements.popper.querySelector(r),!r)||Kt(t.elements.popper,r)&&(t.elements.arrow=r))}var un={name:`arrow`,enabled:!0,phase:`main`,fn:cn,effect:ln,requires:[`popperOffsets`],requiresIfExists:[`preventOverflow`]};function dn(e){return e.split(`-`)[1]}var fn={top:`auto`,right:`auto`,bottom:`auto`,left:`auto`};function pn(e,t){var n=e.x,r=e.y,i=t.devicePixelRatio||1;return{x:Vt(n*i)/i||0,y:Vt(r*i)/i||0}}function mn(e){var t,n=e.popper,r=e.popperRect,i=e.placement,a=e.variation,o=e.offsets,s=e.position,c=e.gpuAcceleration,l=e.adaptive,u=e.roundOffsets,d=e.isFixed,f=o.x,p=f===void 0?0:f,m=o.y,h=m===void 0?0:m,g=typeof u==`function`?u({x:p,y:h}):{x:p,y:h};p=g.x,h=g.y;var _=o.hasOwnProperty(`x`),v=o.hasOwnProperty(`y`),y=xt,b=`top`,x=window;if(l){var S=$t(n),C=`clientHeight`,w=`clientWidth`;if(S===R(n)&&(S=Yt(n),qt(S).position!==`static`&&s===`absolute`&&(C=`scrollHeight`,w=`scrollWidth`)),S=S,i===`top`||(i===`left`||i===`right`)&&a===`end`){b=yt;var T=d&&S===x&&x.visualViewport?x.visualViewport.height:S[C];h-=T-r.height,h*=c?1:-1}if(i===`left`||(i===`top`||i===`bottom`)&&a===`end`){y=bt;var E=d&&S===x&&x.visualViewport?x.visualViewport.width:S[w];p-=E-r.width,p*=c?1:-1}}var D=Object.assign({position:s},l&&fn),O=u===!0?pn({x:p,y:h},R(n)):{x:p,y:h};if(p=O.x,h=O.y,c){var k;return Object.assign({},D,(k={},k[b]=v?`0`:``,k[y]=_?`0`:``,k.transform=(x.devicePixelRatio||1)<=1?`translate(`+p+`px, `+h+`px)`:`translate3d(`+p+`px, `+h+`px, 0)`,k))}return Object.assign({},D,(t={},t[b]=v?h+`px`:``,t[y]=_?p+`px`:``,t.transform=``,t))}function hn(e){var t=e.state,n=e.options,r=n.gpuAcceleration,i=r===void 0||r,a=n.adaptive,o=a===void 0||a,s=n.roundOffsets,c=s===void 0||s,l={placement:Rt(t.placement),variation:dn(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:t.options.strategy===`fixed`};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,mn(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o,roundOffsets:c})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,mn(Object.assign({},l,{offsets:t.modifiersData.arrow,position:`absolute`,adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var gn={name:`computeStyles`,enabled:!0,phase:`beforeWrite`,fn:hn,data:{}},_n={passive:!0};function vn(e){var t=e.state,n=e.instance,r=e.options,i=r.scroll,a=i===void 0||i,o=r.resize,s=o===void 0||o,c=R(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&l.forEach(function(e){e.addEventListener(`scroll`,n.update,_n)}),s&&c.addEventListener(`resize`,n.update,_n),function(){a&&l.forEach(function(e){e.removeEventListener(`scroll`,n.update,_n)}),s&&c.removeEventListener(`resize`,n.update,_n)}}var yn={name:`eventListeners`,enabled:!0,phase:`write`,fn:function(){},effect:vn,data:{}},bn={left:`right`,right:`left`,bottom:`top`,top:`bottom`};function xn(e){return e.replace(/left|right|bottom|top/g,function(e){return bn[e]})}var Sn={start:`end`,end:`start`};function Cn(e){return e.replace(/start|end/g,function(e){return Sn[e]})}function wn(e){var t=R(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Tn(e){return Wt(Yt(e)).left+wn(e).scrollLeft}function En(e,t){var n=R(e),r=Yt(e),i=n.visualViewport,a=r.clientWidth,o=r.clientHeight,s=0,c=0;if(i){a=i.width,o=i.height;var l=Ut();(l||!l&&t===`fixed`)&&(s=i.offsetLeft,c=i.offsetTop)}return{width:a,height:o,x:s+Tn(e),y:c}}function Dn(e){var t=Yt(e),n=wn(e),r=e.ownerDocument?.body,i=zt(t.scrollWidth,t.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),a=zt(t.scrollHeight,t.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),o=-n.scrollLeft+Tn(e),s=-n.scrollTop;return qt(r||t).direction===`rtl`&&(o+=zt(t.clientWidth,r?r.clientWidth:0)-i),{width:i,height:a,x:o,y:s}}function On(e){var t=qt(e),n=t.overflow,r=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}function kn(e){return[`html`,`body`,`#document`].indexOf(Mt(e))>=0?e.ownerDocument.body:z(e)&&On(e)?e:kn(Xt(e))}function An(e,t){t===void 0&&(t=[]);var n=kn(e),r=n===e.ownerDocument?.body,i=R(n),a=r?[i].concat(i.visualViewport||[],On(n)?n:[]):n,o=t.concat(a);return r?o:o.concat(An(Xt(a)))}function jn(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Mn(e,t){var n=Wt(e,!1,t===`fixed`);return n.top+=e.clientTop,n.left+=e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function Nn(e,t,n){return t===`viewport`?jn(En(e,n)):Nt(t)?Mn(t,n):jn(Dn(Yt(e)))}function Pn(e){var t=An(Xt(e)),n=[`absolute`,`fixed`].indexOf(qt(e).position)>=0&&z(e)?$t(e):e;return Nt(n)?t.filter(function(e){return Nt(e)&&Kt(e,n)&&Mt(e)!==`body`}):[]}function Fn(e,t,n,r){var i=t===`clippingParents`?Pn(e):[].concat(t),a=[].concat(i,[n]),o=a[0],s=a.reduce(function(t,n){var i=Nn(e,n,r);return t.top=zt(i.top,t.top),t.right=Bt(i.right,t.right),t.bottom=Bt(i.bottom,t.bottom),t.left=zt(i.left,t.left),t},Nn(e,o,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function In(e){var t=e.reference,n=e.element,r=e.placement,i=r?Rt(r):null,a=r?dn(r):null,o=t.x+t.width/2-n.width/2,s=t.y+t.height/2-n.height/2,c;switch(i){case`top`:c={x:o,y:t.y-n.height};break;case yt:c={x:o,y:t.y+t.height};break;case bt:c={x:t.x+t.width,y:s};break;case xt:c={x:t.x-n.width,y:s};break;default:c={x:t.x,y:t.y}}var l=i?en(i):null;if(l!=null){var u=l===`y`?`height`:`width`;switch(a){case wt:c[l]=c[l]-(t[u]/2-n[u]/2);break;case`end`:c[l]=c[l]+(t[u]/2-n[u]/2);break;default:}}return c}function Ln(e,t){t===void 0&&(t={});var n=t,r=n.placement,i=r===void 0?e.placement:r,a=n.strategy,o=a===void 0?e.strategy:a,s=n.boundary,c=s===void 0?Tt:s,l=n.rootBoundary,u=l===void 0?Et:l,d=n.elementContext,f=d===void 0?Dt:d,p=n.altBoundary,m=p!==void 0&&p,h=n.padding,g=h===void 0?0:h,_=an(typeof g==`number`?on(g,Ct):g),v=f===`popper`?Ot:Dt,y=e.rects.popper,b=e.elements[m?v:f],x=Fn(Nt(b)?b:b.contextElement||Yt(e.elements.popper),c,u,o),S=Wt(e.elements.reference),C=In({reference:S,element:y,strategy:`absolute`,placement:i}),w=jn(Object.assign({},y,C)),T=f===`popper`?w:S,E={top:x.top-T.top+_.top,bottom:T.bottom-x.bottom+_.bottom,left:x.left-T.left+_.left,right:T.right-x.right+_.right},D=e.modifiersData.offset;if(f===`popper`&&D){var O=D[i];Object.keys(E).forEach(function(e){var t=[`right`,`bottom`].indexOf(e)>=0?1:-1,n=[`top`,`bottom`].indexOf(e)>=0?`y`:`x`;E[e]+=O[n]*t})}return E}function Rn(e,t){t===void 0&&(t={});var n=t,r=n.placement,i=n.boundary,a=n.rootBoundary,o=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,l=c===void 0?At:c,u=dn(r),d=u?s?kt:kt.filter(function(e){return dn(e)===u}):Ct,f=d.filter(function(e){return l.indexOf(e)>=0});f.length===0&&(f=d);var p=f.reduce(function(t,n){return t[n]=Ln(e,{placement:n,boundary:i,rootBoundary:a,padding:o})[Rt(n)],t},{});return Object.keys(p).sort(function(e,t){return p[e]-p[t]})}function zn(e){if(Rt(e)===`auto`)return[];var t=xn(e);return[Cn(e),t,Cn(t)]}function Bn(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var i=n.mainAxis,a=i===void 0||i,o=n.altAxis,s=o===void 0||o,c=n.fallbackPlacements,l=n.padding,u=n.boundary,d=n.rootBoundary,f=n.altBoundary,p=n.flipVariations,m=p===void 0||p,h=n.allowedAutoPlacements,g=t.options.placement,_=Rt(g)===g,v=c||(_||!m?[xn(g)]:zn(g)),y=[g].concat(v).reduce(function(e,n){return e.concat(Rt(n)===`auto`?Rn(t,{placement:n,boundary:u,rootBoundary:d,padding:l,flipVariations:m,allowedAutoPlacements:h}):n)},[]),b=t.rects.reference,x=t.rects.popper,S=new Map,C=!0,w=y[0],T=0;T<y.length;T++){var E=y[T],D=Rt(E),O=dn(E)===wt,k=[`top`,yt].indexOf(D)>=0,ee=k?`width`:`height`,A=Ln(t,{placement:E,boundary:u,rootBoundary:d,altBoundary:f,padding:l}),j=k?O?bt:xt:O?yt:`top`;b[ee]>x[ee]&&(j=xn(j));var M=xn(j),N=[];if(a&&N.push(A[D]<=0),s&&N.push(A[j]<=0,A[M]<=0),N.every(function(e){return e})){w=E,C=!1;break}S.set(E,N)}if(C)for(var P=m?3:1,te=function(e){var t=y.find(function(t){var n=S.get(t);if(n)return n.slice(0,e).every(function(e){return e})});if(t)return w=t,`break`},F=P;F>0&&te(F)!==`break`;F--);t.placement!==w&&(t.modifiersData[r]._skip=!0,t.placement=w,t.reset=!0)}}var Vn={name:`flip`,enabled:!0,phase:`main`,fn:Bn,requiresIfExists:[`offset`],data:{_skip:!1}};function Hn(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Un(e){return[`top`,bt,yt,xt].some(function(t){return e[t]>=0})}function Wn(e){var t=e.state,n=e.name,r=t.rects.reference,i=t.rects.popper,a=t.modifiersData.preventOverflow,o=Ln(t,{elementContext:`reference`}),s=Ln(t,{altBoundary:!0}),c=Hn(o,r),l=Hn(s,i,a),u=Un(c),d=Un(l);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:u,hasPopperEscaped:d},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":d})}var Gn={name:`hide`,enabled:!0,phase:`main`,requiresIfExists:[`preventOverflow`],fn:Wn};function Kn(e,t,n){var r=Rt(e),i=[`left`,`top`].indexOf(r)>=0?-1:1,a=typeof n==`function`?n(Object.assign({},t,{placement:e})):n,o=a[0],s=a[1];return o||=0,s=(s||0)*i,[`left`,`right`].indexOf(r)>=0?{x:s,y:o}:{x:o,y:s}}function qn(e){var t=e.state,n=e.options,r=e.name,i=n.offset,a=i===void 0?[0,0]:i,o=At.reduce(function(e,n){return e[n]=Kn(n,t.rects,a),e},{}),s=o[t.placement],c=s.x,l=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=l),t.modifiersData[r]=o}var Jn={name:`offset`,enabled:!0,phase:`main`,requires:[`popperOffsets`],fn:qn};function Yn(e){var t=e.state,n=e.name;t.modifiersData[n]=In({reference:t.rects.reference,element:t.rects.popper,strategy:`absolute`,placement:t.placement})}var Xn={name:`popperOffsets`,enabled:!0,phase:`read`,fn:Yn,data:{}};function Zn(e){return e===`x`?`y`:`x`}function Qn(e){var t=e.state,n=e.options,r=e.name,i=n.mainAxis,a=i===void 0||i,o=n.altAxis,s=o!==void 0&&o,c=n.boundary,l=n.rootBoundary,u=n.altBoundary,d=n.padding,f=n.tether,p=f===void 0||f,m=n.tetherOffset,h=m===void 0?0:m,g=Ln(t,{boundary:c,rootBoundary:l,padding:d,altBoundary:u}),_=Rt(t.placement),v=dn(t.placement),y=!v,b=en(_),x=Zn(b),S=t.modifiersData.popperOffsets,C=t.rects.reference,w=t.rects.popper,T=typeof h==`function`?h(Object.assign({},t.rects,{placement:t.placement})):h,E=typeof T==`number`?{mainAxis:T,altAxis:T}:Object.assign({mainAxis:0,altAxis:0},T),D=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,O={x:0,y:0};if(S){if(a){var k=b===`y`?`top`:xt,ee=b===`y`?yt:bt,A=b===`y`?`height`:`width`,j=S[b],M=j+g[k],N=j-g[ee],P=p?-w[A]/2:0,te=v===`start`?C[A]:w[A],F=v===`start`?-w[A]:-C[A],ne=t.elements.arrow,re=p&&ne?Gt(ne):{width:0,height:0},ie=t.modifiersData[`arrow#persistent`]?t.modifiersData[`arrow#persistent`].padding:rn(),ae=ie[k],oe=ie[ee],se=tn(0,C[A],re[A]),ce=y?C[A]/2-P-se-ae-E.mainAxis:te-se-ae-E.mainAxis,le=y?-C[A]/2+P+se+oe+E.mainAxis:F+se+oe+E.mainAxis,ue=t.elements.arrow&&$t(t.elements.arrow),de=ue?b===`y`?ue.clientTop||0:ue.clientLeft||0:0,fe=D?.[b]??0,pe=j+ce-fe-de,me=j+le-fe,he=tn(p?Bt(M,pe):M,j,p?zt(N,me):N);S[b]=he,O[b]=he-j}if(s){var ge=b===`x`?`top`:xt,_e=b===`x`?yt:bt,ve=S[x],ye=x===`y`?`height`:`width`,be=ve+g[ge],xe=ve-g[_e],I=[`top`,xt].indexOf(_)!==-1,Se=D?.[x]??0,Ce=I?be:ve-C[ye]-w[ye]-Se+E.altAxis,we=I?ve+C[ye]+w[ye]-Se-E.altAxis:xe,Te=p&&I?nn(Ce,ve,we):tn(p?Ce:be,ve,p?we:xe);S[x]=Te,O[x]=Te-ve}t.modifiersData[r]=O}}var $n={name:`preventOverflow`,enabled:!0,phase:`main`,fn:Qn,requiresIfExists:[`offset`]};function er(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function tr(e){return e===R(e)||!z(e)?wn(e):er(e)}function nr(e){var t=e.getBoundingClientRect(),n=Vt(t.width)/e.offsetWidth||1,r=Vt(t.height)/e.offsetHeight||1;return n!==1||r!==1}function rr(e,t,n){n===void 0&&(n=!1);var r=z(t),i=z(t)&&nr(t),a=Yt(t),o=Wt(e,i,n),s={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&((Mt(t)!==`body`||On(a))&&(s=tr(t)),z(t)?(c=Wt(t,!0),c.x+=t.clientLeft,c.y+=t.clientTop):a&&(c.x=Tn(a))),{x:o.left+s.scrollLeft-c.x,y:o.top+s.scrollTop-c.y,width:o.width,height:o.height}}function ir(e){var t=new Map,n=new Set,r=[];e.forEach(function(e){t.set(e.name,e)});function i(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach(function(e){if(!n.has(e)){var r=t.get(e);r&&i(r)}}),r.push(e)}return e.forEach(function(e){n.has(e.name)||i(e)}),r}function ar(e){var t=ir(e);return jt.reduce(function(e,n){return e.concat(t.filter(function(e){return e.phase===n}))},[])}function or(e){var t;return function(){return t||=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})}),t}}function sr(e){var t=e.reduce(function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e},{});return Object.keys(t).map(function(e){return t[e]})}var cr={placement:`bottom`,modifiers:[],strategy:`absolute`};function lr(){return![...arguments].some(function(e){return!(e&&typeof e.getBoundingClientRect==`function`)})}function ur(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,r=n===void 0?[]:n,i=t.defaultOptions,a=i===void 0?cr:i;return function(e,t,n){n===void 0&&(n=a);var i={placement:`bottom`,orderedModifiers:[],options:Object.assign({},cr,a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},o=[],s=!1,c={state:i,setOptions:function(n){var o=typeof n==`function`?n(i.options):n;u(),i.options=Object.assign({},a,i.options,o),i.scrollParents={reference:Nt(e)?An(e):e.contextElement?An(e.contextElement):[],popper:An(t)};var s=ar(sr([].concat(r,i.options.modifiers)));return i.orderedModifiers=s.filter(function(e){return e.enabled}),l(),c.update()},forceUpdate:function(){if(!s){var e=i.elements,t=e.reference,n=e.popper;if(lr(t,n)){i.rects={reference:rr(t,$t(n),i.options.strategy===`fixed`),popper:Gt(n)},i.reset=!1,i.placement=i.options.placement,i.orderedModifiers.forEach(function(e){return i.modifiersData[e.name]=Object.assign({},e.data)});for(var r=0;r<i.orderedModifiers.length;r++){if(i.reset===!0){i.reset=!1,r=-1;continue}var a=i.orderedModifiers[r],o=a.fn,l=a.options,u=l===void 0?{}:l,d=a.name;typeof o==`function`&&(i=o({state:i,options:u,name:d,instance:c})||i)}}}},update:or(function(){return new Promise(function(e){c.forceUpdate(),e(i)})}),destroy:function(){u(),s=!0}};if(!lr(e,t))return c;c.setOptions(n).then(function(e){!s&&n.onFirstUpdate&&n.onFirstUpdate(e)});function l(){i.orderedModifiers.forEach(function(e){var t=e.name,n=e.options,r=n===void 0?{}:n,a=e.effect;if(typeof a==`function`){var s=a({state:i,name:t,instance:c,options:r});o.push(s||function(){})}})}function u(){o.forEach(function(e){return e()}),o=[]}return c}}var dr=ur({defaultModifiers:[yn,Xn,gn,Lt,Jn,Vn,$n,un,Gn]}),fr=i`
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
    box-shadow: var(--c-shadow-overlay);
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
`,pr={name:`fitAvailableBlockSize`,enabled:!0,phase:`main`,requiresIfExists:[`offset`,`preventOverflow`,`flip`],fn:({state:e,instance:t})=>{let n=e.modifiersData.popperOffsets?.y??0,r=document.documentElement.clientHeight,i=e.placement.split(`-`)[0],a=Math.floor(i===`top`?n+e.rects.popper.height-16:i===`bottom`?r-16-n:r-32),o=e.elements.popper.style,s=`--_popover-available-block-size`,c=o.getPropertyValue(s),l=mr(e,i,r),u=e.elements.popper.querySelector(`.popover-pane`),d=!!u&&u.scrollHeight>u.clientHeight;if(r&&d&&l>a){o.setProperty(s,`${l}px`),t.update();return}!r||a<=0?o.removeProperty(s):o.setProperty(s,`${a}px`),o.getPropertyValue(s)!==c&&t.update()}};function mr(e,t,n){let r=e.rects.reference,i=e.modifiersData.popperOffsets?.y??0;if(t===`bottom`){let e=i-(r.y+r.height);return Math.floor(r.y-e-16)}if(t===`top`){let t=r.y-(i+e.rects.popper.height);return Math.floor(n-16-(r.y+r.height+t))}return 0}var hr={name:`matchReferenceWidth`,enabled:!0,phase:`main`,fn:({state:e,instance:t})=>{let n=e.elements.popper.style,r=n.minWidth;n.minWidth=`${e.rects.reference.width}px`,n.minWidth!==r&&t.update()}},gr=new WeakMap,B=new WeakMap,V=new WeakMap,_r=new WeakMap,vr=new WeakMap,yr=new WeakMap,br=new WeakMap,xr=new WeakMap,Sr=new WeakMap,Cr=new WeakMap,wr=new WeakMap,H=new WeakSet,Tr=new WeakMap,Er=new WeakMap,Dr=new WeakMap,Or=new WeakMap,kr=new WeakMap,Ar=new WeakMap,jr=new WeakMap,Mr=new WeakMap,Nr=new WeakMap,Pr=new WeakMap,Fr=new WeakMap,Ir=new WeakMap,U=class extends l{constructor(){super(),_(this,H),this.open=!1,this.placement=`bottom-start`,this.distance=4,this.matchInvokerWidth=!1,this.withoutInvokerAria=!1,this.manual=!1,x(this,gr,null),x(this,B,null),x(this,V,null),x(this,_r,!1),x(this,vr,null),x(this,yr,!1),x(this,br,!1),x(this,xr,!1),x(this,Sr,!1),x(this,Cr,null),x(this,wr,e=>{!this.open||!(e.relatedTarget instanceof Node)||et(e,this,this.invoker)||b(H,this,Rr).call(this,e.relatedTarget)||b(H,this,Lr).call(this)||b(H,this,Kr).call(this,!1)}),x(this,Tr,e=>{e.composedPath().includes(this)||v(wr,this).call(this,e)}),x(this,Er,()=>{let e=v(B,this)?.node;this.manual||!e||e.disabled||e.getAttribute(`aria-disabled`)===`true`||b(H,this,Kr).call(this,!this.open)}),x(this,Dr,!1),x(this,Or,e=>{e.key===`Escape`&&(y(Dr,this,e.defaultPrevented),this.open&&e.preventDefault())}),x(this,kr,e=>{if(!(e.key!==`Escape`||ot(e))){if(v(Dr,this)){y(Dr,this,!1),at(e);return}this.open&&(at(e),b(H,this,Kr).call(this,!1))}}),x(this,Ar,e=>{e.stopPropagation(),b(H,this,Kr).call(this,!1)}),x(this,jr,()=>{y(xr,this,!0)}),x(this,Mr,()=>{y(Sr,this,!0)}),x(this,Nr,e=>{y(Cr,this,e);let t=e.composedPath(),n=v(B,this)?.node;!t.includes(this)&&!(n&&t.includes(n))&&ct(e,this)}),x(this,Pr,()=>{let e=b(H,this,Lr).call(this);setTimeout(()=>{!v(xr,this)&&!v(Sr,this)&&!e&&b(H,this,Kr).call(this,!1),y(xr,this,!1),y(Sr,this,!1),y(Cr,this,null)})}),x(this,Fr,()=>{setTimeout(()=>b(H,this,Kr).call(this,!1))}),x(this,Ir,()=>{v(br,this)&&this._syncInvoker()}),this.addEventListener(`keydown`,v(Or,this)),this.addEventListener(`focusout`,v(wr,this))}requestUpdate(e,t,n){super.requestUpdate(e,t,n),e===`open`&&dt(this)}get invoker(){if(this.anchor instanceof HTMLElement)return this.anchor;if(this.anchor?.contextElement instanceof HTMLElement)return this.anchor.contextElement;if(this.for){let e=this.getRootNode();return typeof e.getElementById==`function`?e.getElementById(this.for)??void 0:void 0}return Array.from(this.children).find(e=>e instanceof HTMLElement&&e.slot===`invoker`)}async show(){b(H,this,Kr).call(this,!0),await this.updateComplete}async hide(){b(H,this,Kr).call(this,!1),await this.updateComplete}reposition(){v(V,this)?.update()}async toggle(){await(this.open?this.hide():this.show())}_setupOverlay(){}_teardownOverlay(){}_overlayShown(){}_syncInvoker(){let e=this.invoker??null;e===v(B,this)?.node?b(H,this,Gr).call(this):(b(H,this,Ur).call(this),e&&(y(B,this,{node:e,ariaExpanded:e.getAttribute(`aria-expanded`),ownsAria:!1}),e.addEventListener(`click`,v(Er,this)),e.addEventListener(`keyup`,v(kr,this)),e.addEventListener(`focusout`,v(Tr,this)),v(_r,this)&&b(H,this,qr).call(this,e),b(H,this,Gr).call(this)));let t=zr.call(b(H,this));t?v(_r,this)?v(V,this)?.state.elements.reference!==t&&b(H,this,Qr).call(this):v(yr,this)&&this.open&&b(H,this,ei).call(this):v(_r,this)&&(b(H,this,ti).call(this),y(yr,this,!0))}render(){return d`
      <slot name="invoker" @slotchange=${v(Ir,this)}></slot>
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
        popover=${pt?`manual`:r}
      >
        <div class="overlay-position">
          <div
            class="popover-pane"
            part="popup"
            @keyup=${v(kr,this)}
            @close-overlay=${v(Ar,this)}
          >
            <slot name="content">
              <slot name="content-body"></slot>
              <slot name="content-footer"></slot>
            </slot>
          </div>
        </div>
      </div>
    `}connectedCallback(){b(H,this,ii).call(this),super.connectedCallback(),this.hasUpdated&&!v(br,this)&&b(H,this,ri).call(this)}disconnectedCallback(){super.disconnectedCallback(),b(H,this,ti).call(this,{restoreFocus:!1}),this.updateComplete.then(()=>{if(this.isConnected){this._syncInvoker(),this.open&&b(H,this,ei).call(this);return}this.open&&$e(),b(H,this,Ur).call(this),this._teardownOverlay(),y(br,this,!1)})}firstUpdated(e){super.firstUpdated(e),b(H,this,ri).call(this)}updated(e){super.updated(e),v(br,this)&&((e.has(`for`)||e.has(`anchor`))&&this._syncInvoker(),e.has(`withoutInvokerAria`)&&b(H,this,Gr).call(this),e.has(`open`)&&e.get(`open`)!==void 0&&(this.open?b(H,this,ei).call(this):b(H,this,ti).call(this)),v(V,this)&&(e.has(`placement`)||e.has(`distance`)||e.has(`matchInvokerWidth`))&&(b(H,this,Zr).call(this),v(V,this).setOptions(b(H,this,Xr).call(this))))}};function Lr(){return v(Cr,this)!==null&&lt(v(Cr,this),this)}function Rr(e){if(!(e instanceof Element))return!1;let t=e.getRootNode();return(e.getAttribute(`aria-controls`)??``).split(/\s+/).filter(Boolean).some(e=>{let n=t.getElementById(e);return n!==null&&this.contains(n)})}function zr(){return this.anchor??this.invoker}function Br(){return this.shadowRoot?.querySelector(`.overlay-layer`)??null}function Vr(){return this.shadowRoot?.querySelector(`.overlay-position`)??null}function Hr(){return this.shadowRoot?.querySelector(`.popover-pane`)??null}function Ur(){if(!v(B,this))return;let{node:e,ariaExpanded:t,ownsAria:n}=v(B,this);e.removeEventListener(`click`,v(Er,this)),e.removeEventListener(`keyup`,v(kr,this)),e.removeEventListener(`focusout`,v(Tr,this)),b(H,this,Jr).call(this,e),n&&b(H,this,Wr).call(this,e,`aria-expanded`,t),y(B,this,null)}function Wr(e,t,n){n===null?e.removeAttribute(t):e.setAttribute(t,n)}function Gr(){if(!v(B,this))return;let e=v(B,this);this.withoutInvokerAria?e.ownsAria&&=(b(H,this,Wr).call(this,e.node,`aria-expanded`,e.ariaExpanded),!1):(e.node.setAttribute(`aria-expanded`,String(v(_r,this))),e.ownsAria=!0)}function Kr(e){if(e===this.open)return;let t=new CustomEvent(e?`craft-before-show`:`craft-before-hide`,{cancelable:!0});this.dispatchEvent(t),!t.defaultPrevented&&(this.open=e)}function qr(e){e.addEventListener(`pointerdown`,v(jr,this),!0),e.addEventListener(`pointerup`,v(Mr,this),!0)}function Jr(e){e.removeEventListener(`pointerdown`,v(jr,this),!0),e.removeEventListener(`pointerup`,v(Mr,this),!0)}function Yr(){let e=this.getRootNode().activeElement;if(!e)return!1;let t=this.invoker;return t&&(t===e||t.contains(e))?!1:e===this||this.contains(e)}function Xr(){return{strategy:`fixed`,placement:gt(this.placement,this),modifiers:[..._t(this.distance),pr,...this.matchInvokerWidth?[hr]:[]]}}function Zr(){let e=Vr.call(b(H,this)),t=zr.call(b(H,this));e&&(this.matchInvokerWidth&&t?(e.style.minWidth=`${t.getBoundingClientRect().width}px`,e.style.width=`auto`):(e.style.removeProperty(`min-width`),e.style.removeProperty(`width`)))}function Qr(){let e=Vr.call(b(H,this)),t=zr.call(b(H,this));v(V,this)?.destroy(),y(V,this,null),e&&(b(H,this,Zr).call(this),t&&(y(V,this,dr(t,e,b(H,this,Xr).call(this))),v(V,this).forceUpdate()))}function $r(){v(vr,this)?.disconnect();let e=[...Hr.call(b(H,this))?.querySelectorAll(`slot`)??[]].flatMap(e=>e.assignedElements({flatten:!0}));if(!e.length||typeof ResizeObserver>`u`){y(vr,this,null);return}y(vr,this,new ResizeObserver(()=>{v(V,this)?.update()}));for(let t of e)v(vr,this).observe(t)}function ei(){let e=Br.call(b(H,this)),t=Vr.call(b(H,this));!e||!t||v(_r,this)||!this.isConnected||(y(yr,this,!zr.call(b(H,this))),!v(yr,this)&&(mt(e),y(_r,this,!0),b(H,this,Gr).call(this),b(H,this,Qr).call(this),b(H,this,$r).call(this),b(H,this,qr).call(this,t),v(B,this)&&b(H,this,qr).call(this,v(B,this).node),document.documentElement.addEventListener(`pointerdown`,v(Nr,this),!0),document.documentElement.addEventListener(`pointerup`,v(Pr,this),!0),window.addEventListener(`blur`,v(Fr,this)),this._overlayShown()))}function ti({restoreFocus:e=!0}={}){let t=Br.call(b(H,this)),n=Vr.call(b(H,this));if(!t||!n||!v(_r,this))return;let r=e&&b(H,this,Yr).call(this);$e(),ht(t),v(vr,this)?.disconnect(),y(vr,this,null),v(V,this)?.destroy(),y(V,this,null),y(_r,this,!1),b(H,this,Gr).call(this),b(H,this,Jr).call(this,n),v(B,this)&&b(H,this,Jr).call(this,v(B,this).node),document.documentElement.removeEventListener(`pointerdown`,v(Nr,this),!0),document.documentElement.removeEventListener(`pointerup`,v(Pr,this),!0),window.removeEventListener(`blur`,v(Fr,this)),y(xr,this,!1),y(Sr,this,!1),y(Cr,this,null),r&&b(H,this,ni).call(this)}function ni(){if(Ee(document.activeElement)&&!b(H,this,Yr).call(this))return;let e=this.invoker;e?.focus(),e?.scrollIntoView({block:`nearest`})}function ri(){y(br,this,!0),this._syncInvoker(),this._setupOverlay(),this.open&&b(H,this,ei).call(this)}function ii(){if(v(gr,this)?.isConnected)return;let e=Array.from(this.childNodes).filter(e=>e instanceof Element?e.slot===``:e instanceof Text&&e.data.trim()!==``);if(!e.length)return;let t=document.createElement(`div`);t.slot=`content`,t.append(...e),this.append(t),y(gr,this,t)}U.styles=[D,vt,fr],n([s({type:Boolean,reflect:!0})],U.prototype,`open`,void 0),n([s({reflect:!0})],U.prototype,`for`,void 0),n([s({attribute:!1})],U.prototype,`anchor`,void 0),n([s({reflect:!0})],U.prototype,`placement`,void 0),n([s({type:Number})],U.prototype,`distance`,void 0),n([s({attribute:`match-invoker-width`,type:Boolean,reflect:!0})],U.prototype,`matchInvokerWidth`,void 0),n([s({type:Boolean,attribute:`without-invoker-aria`,reflect:!0})],U.prototype,`withoutInvokerAria`,void 0),n([s({type:Boolean,reflect:!0})],U.prototype,`manual`,void 0),customElements.get(`craft-popover`)||customElements.define(`craft-popover`,U);var ai=i`
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
`,oi=i`
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
`;i`
  ${ai}
  ${oi}
`;var si=i`
  ${ai}
  width: 100%;
  height: 100%;
  appearance: none;
  padding-inline: var(--c-input-spacing-inline)
    calc(var(--c-input-spacing-inline) * 1.5 + 1em);
`,ci=i`
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
`,li=i`
  ${ci}

  :host {
    --_control-height: var(--c-input-height, var(--c-size-control-md));
  }

  :host([size~='small']) {
    --_control-height: var(--c-input-height, var(--c-size-control-sm));
  }

  :host([size~='large']) {
    --_control-height: var(--c-input-height, var(--c-size-control-lg));
    --_spacing-block: var(--c-textarea-spacing-block, var(--c-spacing-lg));
  }

  :host([size~='large']) .input-group__input,
  :host([size~='large']) .input-group__input ::slotted([slot='input']) {
    font-size: var(--c-text-md);
  }

  :host([size~='large']) ::slotted([slot='input']) {
    line-height: 1.375;
    padding-block: var(--_spacing-block);
    padding-inline: var(--c-spacing-lg);
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
    ${oi}
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
`;function ui(e=``){let t=Math.random().toString(36).slice(2,12);return e?`${e}-${t}`:t}var di={Solid:`solid`,OutlineFill:`outline-fill`,Fill:`fill`,Outline:`outline`,Plain:`plain`};Object.values(di);var fi=[`sm`,`md`,`lg`,`xl`];function pi(e){if(e!=null&&e!==``){if(e===0||e===`0`||e===`none`)return`0`;if(fi.includes(e))return`var(--c-spacing-${e})`}}var mi=(e,{customProperty:t,defaultValue:r})=>{let i=Array.isArray(t)?t:[t];class a extends e{constructor(...e){super(...e),this.padding=r}get resolvedPadding(){return pi(this.padding)}get paddingStyles(){let e=this.resolvedPadding;return e===void 0?{}:Object.fromEntries(i.map(t=>[t,e]))}}return n([s()],a.prototype,`padding`,void 0),a},hi=new Set,gi=0;function _i(e){hi.add(e),gi||=requestAnimationFrame(vi)}function vi(){gi=0;let e=Array.from(hi);hi.clear();let t=e.map(e=>e());for(let e of t)e?.()}var yi=`important`,bi=` !important`,xi=re(class extends ie{constructor(e){if(super(e),e.type!==ne.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`}),``)}update(e,[t]){let{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?n.removeProperty(e):n[e]=null);for(let e in t){let r=t[e];if(r!=null){this.ft.add(e);let t=typeof r==`string`&&r.endsWith(bi);e.includes(`-`)||t?n.setProperty(e,t?r.slice(0,-11):r,t?yi:``):n[e]=r}}return c}}),Si=i`
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
`,W=class extends mi(l,{customProperty:[`--_callout-padding-block`,`--_callout-padding-inline`]}){constructor(...e){super(...e),this.variant=k.Neutral,this.appearance=di.OutlineFill,this.label=``,this.icon=null,this.hideIcon=!1,this.rounded=`all`,this.inline=!1,this.size=`auto`,this.resolvedIcon=null,this._lightDom=new A(this),this.syncFirstLineFont=()=>{let e=this.renderRoot.querySelector(`.callout__strut`);if(!e)return;let t=Ci((this.renderRoot.querySelector(`slot[name="title"]`)??this.renderRoot.querySelector(`.callout__description slot`))?.assignedNodes({flatten:!0})??[]),n=t?.parentElement===this?t.assignedSlot:t?.parentElement,r=n?getComputedStyle(n):null,i=r?.fontFamily??``,a=r?.fontSize??``,o=r?.lineHeight??``;return()=>{e.style.fontFamily=i,e.style.fontSize=a,e.style.lineHeight=o}}}connectedCallback(){super.connectedCallback(),this._textObserver=new ResizeObserver(()=>_i(this.syncFirstLineFont)),this.updateComplete.then(()=>{let e=this.renderRoot.querySelector(`.callout__text`);e&&this._textObserver?.observe(e)})}disconnectedCallback(){super.disconnectedCallback(),this._textObserver?.disconnect(),this._textObserver=void 0}updated(){_i(this.syncFirstLineFont)}willUpdate(){this.resolvedIcon=this.icon??this.getDefaultIcon()}getDefaultIcon(){switch(this.variant){case k.Info:return`lightbulb`;case k.Success:return`circle-check`;case k.Warning:return`circle-exclamation`;case k.Danger:return`triangle-exclamation`;default:return null}}render(){let e=this.label||j(this,`title`),t=!this.hideIcon&&(!!this.resolvedIcon||j(this,`icon`));return d`
      <div
        part="base"
        data-variant="${this.variant}"
        style="${xi(this.paddingStyles)}"
        class="${I({callout:!0,"callout--hide-icon":!t,"callout--small":this.size===`small`})}"
      >
        <div class="callout__body">
          ${t?d`<span class="callout__icon">
                <span class="callout__strut" aria-hidden="true">&#8203;</span>
                <slot name="icon">
                  ${this.resolvedIcon?d`<craft-icon
                        name="${this.resolvedIcon}"
                      ></craft-icon>`:r}
                </slot>
              </span>`:r}
          <div class="callout__text">
            ${e?d`<div class="callout__title">
                  <slot name="title">${this.label}</slot>
                </div>`:r}

            <div class="callout__description">
              <slot></slot>
            </div>
          </div>
        </div>

        ${j(this,`action`)?d`<div class="callout__action"><slot name="action"></slot></div>`:r}
      </div>
    `}};W.styles=[O,Si],n([s({reflect:!0})],W.prototype,`variant`,void 0),n([s({reflect:!0})],W.prototype,`appearance`,void 0),n([s()],W.prototype,`label`,void 0),n([s()],W.prototype,`icon`,void 0),n([s({type:Boolean,attribute:`hide-icon`})],W.prototype,`hideIcon`,void 0),n([s({reflect:!0})],W.prototype,`rounded`,void 0),n([s({reflect:!0,type:Boolean})],W.prototype,`inline`,void 0),n([s()],W.prototype,`size`,void 0),n([u()],W.prototype,`resolvedIcon`,void 0);function Ci(e){for(let t of e)if(t instanceof Text){if(t.data.trim())return t}else if(t instanceof Element){let e=Ci(t.childNodes);if(e)return e}return null}customElements.get(`craft-callout`)||customElements.define(`craft-callout`,W);var wi=class e{constructor(e,...t){this.host=e,this.presence=[],this.handleMutations=()=>{let e=this.snapshot();e.some((e,t)=>e!==this.presence[t])&&(this.presence=e,this.host.requestUpdate())},this.slotNames=t,e.addController(this)}test(t){return t===e.DEFAULT_SLOT?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.presence=this.snapshot(),this.observer??=new MutationObserver(this.handleMutations),this.observer.observe(this.host,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[`slot`],characterData:this.slotNames.includes(e.DEFAULT_SLOT)})}hostDisconnected(){this.observer?.disconnect()}hasDefaultSlot(){return Array.from(this.host.childNodes).some(e=>e.nodeType===Node.TEXT_NODE?e.textContent.trim()!==``:e.nodeType===Node.ELEMENT_NODE&&!e.slot)}hasNamedSlot(e){return Array.from(this.host.children).some(t=>t.slot===e)}snapshot(){return this.slotNames.map(e=>this.test(e))}};wi.DEFAULT_SLOT=`[default]`;var Ti=i`
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
`,Ei=[`prefix`,`suffix`,`before`,`after`],Di=[`tip`,`warning`],Oi={labelledBy:[`addToAriaLabelledBy`,`removeFromAriaLabelledBy`],describedBy:[`addToAriaDescribedBy`,`removeFromAriaDescribedBy`]},ki=e=>{var i=new WeakMap,a=new WeakMap,c=new WeakMap,l=new WeakMap,u=new WeakMap,f=new WeakMap,p=new WeakMap,m=new WeakMap,h=new WeakMap,g=new WeakMap,S=new WeakMap,C=new WeakMap,w=new WeakMap,T=new WeakMap,E=new WeakMap,D=new WeakMap,O=new WeakMap,k=new WeakMap,ee=new WeakMap,A=new WeakSet,j=new WeakMap,M=new WeakMap;class N extends e{constructor(...e){super(...e),_(this,A),this.labelSrOnly=!1,this.readOnly=!1,this.disabled=!1,this.labelledBy=null,this.describedBy=null,x(this,i,void 0),x(this,a,void 0),this._inputId=ui(this.localName),x(this,c,[]),x(this,l,[]),x(this,u,void 0),x(this,f,new Map),x(this,p,new MutationObserver(e=>{e.some(e=>e.target===this||e.target.parentNode===this)&&(b(A,this,ce).call(this),b(A,this,se).call(this))})),x(this,m,new Map),x(this,h,new Set),x(this,g,new Map),x(this,S,!1),x(this,C,new wi(this,`prefix`,`suffix`)),x(this,w,!1),x(this,T,!1),x(this,E,new Set),x(this,D,!1),x(this,O,new MutationObserver(()=>b(A,this,re).call(this))),x(this,k,!1),x(this,ee,{labelledBy:[],describedBy:[]}),x(this,j,e=>{this._feedbackNode?.setAttribute(`aria-live`,e.type===`focusin`?`polite`:`assertive`)}),x(this,M,e=>{e.defaultPrevented||this._onLabelClick()})}get label(){return v(i,this)??this._labelNode?.textContent??``}set label(e){let t=this.label;y(i,this,e===null?``:e),this.requestUpdate(`label`,t)}get helpText(){return v(a,this)??this._helpTextNode?.textContent??``}set helpText(e){let t=this.helpText;y(a,this,e===null?``:e),this.requestUpdate(`helpText`,t)}get slots(){return{label:()=>{let e=document.createElement(`label`);return e.textContent=this.label,e},"help-text":()=>{let e=document.createElement(`div`);return e.textContent=this.helpText,e}}}get _control(){return b(A,this,P).call(this,`input`)}get _labelNode(){return b(A,this,P).call(this,`label`)}get _helpTextNode(){return b(A,this,P).call(this,`help-text`)}get _feedbackNode(){return b(A,this,P).call(this,`feedback`)}connectedCallback(){super.connectedCallback(),b(A,this,ae).call(this),this._enhanceLightDomA11y(),v(p,this).observe(this,{childList:!0,subtree:!0,attributeFilter:[`slot`]}),this._labelNode?.addEventListener(`click`,v(M,this)),this.addEventListener(`focusin`,v(j,this)),this.addEventListener(`focusout`,v(j,this)),b(A,this,ne).call(this),b(A,this,re).call(this),b(A,this,ie).call(this,`labelledBy`),b(A,this,ie).call(this,`describedBy`)}disconnectedCallback(){super.disconnectedCallback(),v(O,this).disconnect(),y(k,this,!1),v(p,this).disconnect(),this._labelNode?.removeEventListener(`click`,v(M,this)),this.removeEventListener(`focusin`,v(j,this)),this.removeEventListener(`focusout`,v(j,this))}willUpdate(e){super.willUpdate(e),y(w,this,b(A,this,te).call(this,this.label,`label`)),y(T,this,b(A,this,te).call(this,this.helpText,`help-text`)),y(E,this,b(A,this,F).call(this))}updated(e){super.updated(e),b(A,this,oe).call(this),b(A,this,ne).call(this);for(let e of v(E,this)){let t=b(A,this,P).call(this,e);t&&this.renderRoot.querySelector(`slot[name="${e}"]`)&&this.addToAriaDescribedBy(t,{idPrefix:e})}for(let t of[`labelledBy`,`describedBy`])e.has(t)&&b(A,this,ie).call(this,t);e.has(`label`)&&v(i,this)!==void 0&&this._labelNode&&(this._labelNode.textContent=this.label),e.has(`helpText`)&&v(a,this)!==void 0&&this._helpTextNode&&(this._helpTextNode.textContent=this.helpText),this._reflectAriaReferences()}_onLabelClick(){this.disabled||this._control?.focus()}_enhanceLightDomA11y(){let{_control:e,_labelNode:t,_helpTextNode:n}=this;e?.classList.add(`form-control`),e&&(e.id||=this._inputId),t&&(t.setAttribute(`for`,e?.id??this._inputId),this.addToAriaLabelledBy(t,{idPrefix:`label`})),n&&this.addToAriaDescribedBy(n,{idPrefix:`help-text`}),b(A,this,ce).call(this),b(A,this,se).call(this)}addToAriaLabelledBy(e,{idPrefix:t=``}={}){e.id||=ui(`${t}-${this._inputId}`),v(c,this).includes(e)||(y(c,this,[...v(c,this),e]),this._reflectAriaReferences())}removeFromAriaLabelledBy(e){v(c,this).includes(e)&&(y(c,this,v(c,this).filter(t=>t!==e)),this._reflectAriaReferences())}addToAriaDescribedBy(e,{idPrefix:t=``}={}){e.id||=ui(`${t}-${this._inputId}`),v(l,this).includes(e)||(y(l,this,[...v(l,this),e]),this._reflectAriaReferences())}removeFromAriaDescribedBy(e){v(l,this).includes(e)&&(y(l,this,v(l,this).filter(t=>t!==e)),this._reflectAriaReferences())}_reflectAriaReferences(){let e=this._control;if(!e)return;let t=(t,n)=>{let r=n.map(e=>e.id),i=v(m,this).get(t)??[],a=new Set([...(e.getAttribute(t)??``).split(/\s+/).filter(e=>e&&!i.includes(e)),...r]);v(m,this).set(t,r),a.size?e.setAttribute(t,[...a].join(` `)):i.length&&e.removeAttribute(t)},n=e=>e!==this._labelNode&&e!==this._helpTextNode||e.textContent.trim()!==``||e.childElementCount>0;t(`aria-labelledby`,v(c,this).filter(n)),t(`aria-describedby`,v(l,this).filter(n))}render(){return d`
        <div class="form-field__group-one">${this._groupOneTemplate()}</div>
        <div class="form-field__group-two">${this._groupTwoTemplate()}</div>
      `}_groupOneTemplate(){return d`${this._labelTemplate()} ${this._helpTextTemplate()}`}_groupTwoTemplate(){return d`${this._inputGroupTemplate()} ${this._feedbackTemplate()}`}_labelTemplate(){return y(D,this,!0),v(w,this)?d`
        <div class="form-field__label">
          <slot name="label"></slot>
        </div>
      `:r}_helpTextTemplate(){return y(D,this,!0),v(T,this)?d`
        <small class="form-field__help-text">
          <slot name="help-text"></slot>
        </small>
      `:r}_inputGroupTemplate(){return d`
        <div class="input-group">
          ${this._inputGroupBeforeTemplate()}
          <div class="input-group__container">
            ${this._inputGroupPrefixTemplate()}
            ${this._inputGroupInputTemplate()}
            ${this._inputGroupSuffixTemplate()}
          </div>
          ${this._inputGroupAfterTemplate()}
        </div>
      `}_inputGroupBeforeTemplate(){return d`
        <div class="input-group__before">
          <slot name="before"></slot>
        </div>
      `}_inputGroupPrefixTemplate(){return v(C,this).test(`prefix`)?d`
            <div class="input-group__prefix">
              <slot name="prefix"></slot>
            </div>
          `:r}_inputGroupInputTemplate(){return d`
        <div class="input-group__input">
          <slot name="input"></slot>
        </div>
      `}_inputGroupSuffixTemplate(){return v(C,this).test(`suffix`)?d`
            <div class="input-group__suffix">
              <slot name="suffix"></slot>
            </div>
          `:r}_inputGroupAfterTemplate(){return d`
        <div class="input-group__after">
          <slot name="after"></slot>
        </div>
      `}_feedbackTemplate(){return d`
        ${this._noticeTemplate(`tip`)} ${this._noticeTemplate(`warning`)}
        <div class="form-field__feedback">
          <slot name="feedback"></slot>
        </div>
      `}_noticeTemplate(e){if(y(D,this,!0),!v(E,this).has(e))return r;let n=e===`tip`;return d`
        <craft-callout
          class="field-notice"
          variant=${n?`info`:`warning`}
          appearance="plain"
          padding="none"
        >
          <craft-visually-hidden>
            ${t(n?`Tip:`:`Warning:`)}
          </craft-visually-hidden>
          <slot name=${e}></slot>
        </craft-callout>
      `}}function P(e){return this.querySelector(`:scope > [slot="${e}"]`)??void 0}function te(e,t){return e.trim()!==``||(b(A,this,P).call(this,t)?.childElementCount??0)>0}function F(){return new Set(Di.filter(e=>b(A,this,P).call(this,e)))}function ne(){v(D,this)&&!v(k,this)&&this.isConnected&&(y(k,this,!0),v(O,this).observe(this,{childList:!0,subtree:!0,characterData:!0,attributeFilter:[`slot`]}),b(A,this,re).call(this))}function re(){if(!v(D,this))return;let e=b(A,this,F).call(this);(b(A,this,te).call(this,this.label,`label`)!==v(w,this)||b(A,this,te).call(this,this.helpText,`help-text`)!==v(T,this)||e.size!==v(E,this).size||[...e].some(e=>!v(E,this).has(e)))&&this.requestUpdate()}function ie(e){let[t,n]=Oi[e],r=this.getRootNode();if(typeof r.getElementById!=`function`)return;let i=(this[e]??``).split(/\s+/).filter(Boolean).map(e=>r.getElementById(e)).filter(e=>e!==null);for(let t of v(ee,this)[e])i.includes(t)||this[n](t);for(let e of i)this[t](e);v(ee,this)[e]=i}function ae(){if(v(S,this))return;y(S,this,!0);let e=this.slots;for(let t of Object.keys(e))b(A,this,P).call(this,t)&&v(h,this).add(t);for(let[t,n]of Object.entries(e)){if(v(h,this).has(t))continue;let e=n();if(e instanceof Node)e instanceof Element&&(e.slot=t),this.append(e);else if(e){let e=document.createComment(`slot:${t}`);this.append(e),v(g,this).set(t,e)}}b(A,this,oe).call(this)}function oe(){let e=this.slots;for(let[t,n]of v(g,this)){let r=e[t]?.();r&&!(r instanceof Node)&&o(r,this,{renderBefore:n,host:this})}}function se(){let e=new Map;for(let t of Ei){let n=b(A,this,P).call(this,t);n&&e.set(t,n)}let t=new Set(e.values());for(let e of v(f,this).values())t.has(e)||(this.removeFromAriaLabelledBy(e),this.removeFromAriaDescribedBy(e));for(let[t,n]of e)n.hasAttribute(`data-label`)&&this.addToAriaLabelledBy(n,{idPrefix:t}),n.hasAttribute(`data-description`)&&this.addToAriaDescribedBy(n,{idPrefix:t});y(f,this,e)}function ce(){let e=this._feedbackNode;e!==v(u,this)&&(v(u,this)&&this.removeFromAriaDescribedBy(v(u,this)),e&&this.addToAriaDescribedBy(e,{idPrefix:`feedback`}),y(u,this,e))}return N.styles=[Ti],n([s()],N.prototype,`label`,null),n([s({attribute:`help-text`})],N.prototype,`helpText`,null),n([s({type:Boolean,attribute:`label-sr-only`,reflect:!0})],N.prototype,`labelSrOnly`,void 0),n([s({type:Boolean,attribute:`readonly`,reflect:!0})],N.prototype,`readOnly`,void 0),n([s({type:Boolean,reflect:!0})],N.prototype,`disabled`,void 0),n([s({attribute:`labelled-by`})],N.prototype,`labelledBy`,void 0),n([s({attribute:`described-by`})],N.prototype,`describedBy`,void 0),N},Ai=e=>{var t=new WeakMap,r=new WeakMap,i=new WeakSet,a=new WeakMap,o=new WeakMap,c=new WeakMap,l=new WeakMap,u=new WeakMap;class d extends ki(e){constructor(...e){super(...e),_(this,i),this.required=!1,this.autofocus=!1,this.invalid=!1,x(this,t,void 0),x(this,r,!1),x(this,a,void 0),x(this,o,()=>{this.requestUpdate(`value`)}),x(this,c,e=>{e.target===this._control?.form&&setTimeout(()=>{e.defaultPrevented||this.requestUpdate(`value`)})}),x(this,l,e=>{e.target===this._control&&this.toggleAttribute(`focused-visible`,this._control.matches(`:focus-visible`))}),x(this,u,e=>{e.target===this._control&&this.removeAttribute(`focused-visible`)})}get _control(){return super._control}get value(){let e=this._control;return e&&this.isConnected?e.value:v(t,this)??e?.value??``}set value(e){let n=this.value,r=this._control;!r||!this.isConnected?y(t,this,e):r.value!==e&&b(i,this,f).call(this,r,e),this.requestUpdate(`value`,n)}connectedCallback(){super.connectedCallback(),v(t,this)!==void 0&&this._control&&(this._control.value=v(t,this),y(t,this,void 0)),this.addEventListener(`input`,v(o,this)),this.addEventListener(`focusin`,v(l,this)),this.addEventListener(`focusout`,v(u,this)),y(a,this,this.getRootNode()),v(a,this).addEventListener(`reset`,v(c,this),!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`input`,v(o,this)),this.removeEventListener(`focusin`,v(l,this)),this.removeEventListener(`focusout`,v(u,this)),v(a,this)?.removeEventListener(`reset`,v(c,this),!0),y(a,this,void 0)}focus(e){this._control?.focus(e)}blur(){this._control?.blur()}updated(e){super.updated(e),this._pushToControl(e)}_pushToControl(e){let t=this._control;if(!t)return;let n=!v(r,this);y(r,this,!0);let i=(t,r)=>e.has(t)&&!(n&&(r===void 0||r===``||r===!1));i(`name`,this.name)&&(t.name=this.name??``),i(`placeholder`,this.placeholder)&&!(t instanceof HTMLSelectElement)&&(t.placeholder=this.placeholder??``),i(`autocomplete`,this.autocomplete)&&t.setAttribute(`autocomplete`,this.autocomplete??``),i(`required`,this.required)&&(this.required?t.setAttribute(`aria-required`,`true`):t.removeAttribute(`aria-required`)),i(`autofocus`,this.autofocus)&&(t.autofocus=this.autofocus),i(`disabled`,this.disabled)&&(t.disabled=this.disabled),i(`readOnly`,this.readOnly)&&!(t instanceof HTMLSelectElement)&&(t.readOnly=this.readOnly),i(`invalid`,this.invalid)&&(this.invalid?t.setAttribute(`aria-invalid`,`true`):t.removeAttribute(`aria-invalid`))}}function f(e,t){if(e.matches(`:focus`)&&!(e instanceof HTMLSelectElement)&&e.selectionStart!==null)try{let n=e.selectionStart;e.value=t,e.selectionStart=n,e.selectionEnd=n;return}catch{}e.value=t}return n([s({reflect:!0})],d.prototype,`name`,void 0),n([s()],d.prototype,`placeholder`,void 0),n([s()],d.prototype,`autocomplete`,void 0),n([s({type:Boolean})],d.prototype,`required`,void 0),n([s({type:Boolean})],d.prototype,`autofocus`,void 0),n([s({type:Boolean,reflect:!0})],d.prototype,`invalid`,void 0),n([s({attribute:!1})],d.prototype,`value`,null),d},ji=i`
  .input-group__input:has(> .chars-left) {
    position: relative;
  }

  .input-group__input:has(> .chars-left) ::slotted([slot='input']) {
    padding-inline-end: calc(
      var(--c-input-spacing-inline) * 2 + var(--_chars-left-width)
    );
  }

  .chars-left {
    position: absolute;
    inset-inline-end: var(--c-input-spacing-inline);
    inset-block-end: 0;
    display: flex;
    align-items: center;
    block-size: var(--_control-height);
    color: var(--c-form-control-placeholder);
    font-variant-numeric: tabular-nums;
    pointer-events: none;
  }

  .chars-left[data-negative] {
    color: var(--c-color-danger-on-normal);
  }
`,Mi=r=>{class i extends r{constructor(...e){super(...e),this.showCharsLeft=!1}_inputGroupInputTemplate(){let n=this.maxlength;if(!this.showCharsLeft||!n||n<0||this.disabled||this.readOnly)return super._inputGroupInputTemplate();let r=n-this.value.length;return d`
        <div
          class="input-group__input"
          style="--_chars-left-width: ${String(n).length+1}ch"
        >
          <slot name="input"></slot>
          <div class="chars-left" role="status" ?data-negative=${r<0}>
            <craft-visually-hidden>
              ${t(`Characters left: {chars, number}`,{chars:r})}
            </craft-visually-hidden>
            <span aria-hidden="true">${e(r)}</span>
          </div>
        </div>
      `}}return n([s({type:Boolean,reflect:!0,attribute:`show-chars-left`})],i.prototype,`showCharsLeft`,void 0),i},Ni=i`
  ::slotted(.form-control) {
    ${ai}
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

  /* Browsers ignore size on number inputs; the extra 1.5em fits the spin buttons. */
  :host([maxlength]:not([width='full'])[type='number'])
    ::slotted([slot='input']),
  :host([width='auto'][type='number']) ::slotted([slot='input']) {
    box-sizing: border-box;
    width: calc(
      var(--_input-size) * 1ch + 1.5em + 2 * var(--c-input-spacing-inline)
    );
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
`,G=class extends Mi(Ai(l)){constructor(...e){super(...e),this.size=`medium`,this.inputMode=``,this.autoCorrect=!0,this.autoCapitalize=!0,this.small=!1,this.center=!1,this.monospace=!1,this.inlineSuffix=!1,this.hiddenInput=!1}get slots(){return{...super.slots,input:()=>{let e=document.createElement(`input`),t=this.getAttribute(`value`);return e.type=this.type??`text`,this.syncNativeAttributes(e),t&&e.setAttribute(`value`,t),e}}}get _control(){return super._control}connectedCallback(){super.connectedCallback(),this.syncNativeAttributes()}_pushToControl(e){super._pushToControl(e),e.has(`type`)&&this.type&&this._control&&(this._control.type=this.type)}updated(e){super.updated(e),(e.has(`inputSize`)||e.has(`maxlength`)||e.has(`width`)||e.has(`min`)||e.has(`max`)||e.has(`step`)||e.has(`inputMode`)||e.has(`autoCorrect`)||e.has(`autoCapitalize`))&&this.syncNativeAttributes()}get maxlengthSize(){return this.maxlength&&this.maxlength>0&&this.width!==`full`?this.maxlength:void 0}syncNativeAttributes(e=this._control){let t={size:this.inputSize??this.maxlengthSize,maxlength:this.maxlength&&this.maxlength>0?this.maxlength:void 0,min:this.min,max:this.max,step:this.step,inputmode:this.inputMode,autocorrect:this.autoCorrect?void 0:`off`,autocapitalize:this.autoCapitalize?void 0:`none`};for(let[n,r]of Object.entries(t)){if(r===void 0){e?.removeAttribute(n);continue}e?.setAttribute(n,String(r))}t.size===void 0?e?.style.removeProperty(`--_input-size`):e?.style.setProperty(`--_input-size`,String(t.size))}};G.styles=[Ti,li,Ni,ji],n([s({reflect:!0})],G.prototype,`type`,void 0),n([s({type:Number,reflect:!0})],G.prototype,`maxlength`,void 0),n([s({type:String,reflect:!0})],G.prototype,`size`,void 0),n([s({type:Number,attribute:!1})],G.prototype,`inputSize`,void 0),n([s({attribute:!1})],G.prototype,`min`,void 0),n([s({attribute:!1})],G.prototype,`max`,void 0),n([s({attribute:!1})],G.prototype,`step`,void 0),n([s({attribute:!1})],G.prototype,`inputMode`,void 0),n([s({attribute:!1})],G.prototype,`autoCorrect`,void 0),n([s({attribute:!1})],G.prototype,`autoCapitalize`,void 0),n([s({reflect:!0,type:Boolean})],G.prototype,`small`,void 0),n([s({type:String,reflect:!0})],G.prototype,`width`,void 0),n([s({reflect:!0,type:Boolean})],G.prototype,`center`,void 0),n([s({reflect:!0,type:Boolean})],G.prototype,`monospace`,void 0),n([s({reflect:!0,type:Boolean,attribute:`inline-suffix`})],G.prototype,`inlineSuffix`,void 0),n([s({reflect:!0,type:Boolean,attribute:`hidden-input`})],G.prototype,`hiddenInput`,void 0),customElements.get(`craft-input`)||customElements.define(`craft-input`,G);var Pi=i`
  @supports (text-box: trim-both cap alphabetic) {
    text-box: trim-both cap alphabetic;
    padding-block: calc((1lh - 1cap) / 2);
  }
`,Fi=i`
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
`,Ii=i`
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
    --c-icon-size: var(--c-size-icon-xs, calc(10rem / 16));
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
    /* A square around the icon, which is 1.25 times as wide as it is tall (see craft-icon). */
    --_icon-size: var(--c-icon-size, var(--c-size-icon-sm, calc(12rem / 16)));
    --_padding-inline: 0px;
    --_flush-inline: max(
      0px,
      calc((var(--_height) - var(--_icon-size) * 1.25) / 2)
    );
    --_flush-block: max(0px, calc((var(--_height) - var(--_icon-size)) / 2));
    aspect-ratio: 1;
    padding-block: 0;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1;
  }

  /* An xsmall button's own icon is half its height rather than an icon size
     token, so it sits a whole number of pixels inside the borders (3px in a
     16px button), which 1x screens would otherwise round off center. Keyed on
     the content rather than \`[icon]\`, which isn't there when \`icon\` is
     set as a property. */
  :host([size~='xsmall']) .button-content--icon-only craft-icon {
    --c-icon-size: calc(var(--_height) / 2);
  }

  /* The icon is 1.25em wide and 1em tall (see craft-icon). */
  :host([size~='xsmall'][icon]:empty) {
    --_flush-inline: calc(var(--_height) * 3 / 16);
    --_flush-block: calc(var(--_height) / 4);
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
  :host([variant~='solid']:hover),
  :host([variant~='primary'][slot='invoker'][aria-expanded='true']),
  :host([variant~='danger'][slot='invoker'][aria-expanded='true']),
  :host([variant~='solid'][slot='invoker'][aria-expanded='true']) {
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

  :host([variant~='fill']:hover),
  :host([variant~='fill'][slot='invoker'][aria-expanded='true']) {
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
  :host([variant~='plain']:not(:disabled):not(.loading):hover),
  /* A menu or popover's button keeps its hover state while it's open. */
  :host(
    :is(
        [variant~='outline'],
        [variant~='dashed'],
        [variant~='danger-plain'],
        [variant~='plain']
      )[slot='invoker'][aria-expanded='true']
  ) {
    background-color: color-mix(
      in oklab,
      var(--c-color-mix-hover),
      transparent
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

  :host([variant~='link']) {
    --_link-color: var(--c-text-link);
    --_link-tint: var(--_link-color);
    font: inherit;
    min-width: auto;
    color: var(--_link-color);
    background-color: transparent;
    border-color: transparent;
    text-decoration-line: var(--c-link-decoration, none);
    margin-inline: calc(var(--_flush-inline) * -1);
    margin-block: calc(var(--_flush-block) * -1);

    &::before {
      /* No minimum-target sizer around a text link. */
      display: none;
    }
  }

  :host([variant~='link']:not([inherit])),
  :host([variant~='link'][inherit]) {
    --c-color-mix-hover: var(--_link-tint) 5%;
    --c-color-mix-active: var(--_link-tint) 12%;
    --c-color-fill-loud: color-mix(
      in srgb,
      var(--c-color-mix-active),
      transparent
    );
    --c-color-on-loud: var(--_link-color);
    --c-color-border-loud: transparent;
  }

  @media (hover: hover) {
    :host([variant~='link']:not(:disabled):not(.loading):hover) {
      color: var(--_link-color);
      background-color: color-mix(
        in srgb,
        var(--c-color-mix-hover),
        transparent
      );
    }
  }

  :host([variant~='link']:not(:disabled):not(.loading):active),
  :host([variant~='link'][active]:not(:disabled):not(.loading)),
  :host([variant~='link'].is-active:not(:disabled):not(.loading)),
  :host(
    [variant~='link'][slot='invoker'][aria-expanded='true']:not(:disabled)
  ) {
    color: var(--_link-color);
    background-color: color-mix(
      in srgb,
      var(--c-color-mix-active),
      transparent
    );
    box-shadow: none;
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
  :host([variant~='plain'][inherit].is-active:not(:disabled):not(.loading)),
  :host([variant~='plain'][inherit][slot='invoker'][aria-expanded='true']) {
    color: inherit;
  }

  /* A plain button has no fill of its own, so it's tinted with its own color
     instead: hovered, pressed (marked active) and, as a popover's invoker,
     open. A selected one, such as in a button group, keeps the loud fill. */
  :host([variant~='plain']:not([inherit])),
  :host([variant~='plain'][inherit]) {
    --c-color-fill-quiet: transparent;
    --c-color-mix-hover: currentColor 5%;
    --c-color-mix-active: currentColor 12%;
  }

  :host([variant~='plain']:not([aria-pressed='true'])) {
    --c-color-fill-loud: color-mix(in srgb, currentColor 12%, transparent);
    --c-color-on-loud: var(--c-color-on-quiet);
    --c-color-border-loud: transparent;
  }

  :host([variant~='plain'][inherit]:not([aria-pressed='true'])) {
    --c-color-on-loud: currentColor;
  }

  :host(
    [variant~='plain'][slot='invoker'][aria-expanded='true']:not(:disabled)
  ) {
    background-color: color-mix(in srgb, currentColor 12%, transparent);
  }

  :host([variant~='plain']:not(:disabled):not(.loading):active) {
    box-shadow: none;
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
    ${Pi}
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

  /* Ellipsis (action menu) icons read small at a small button's icon size */
  craft-icon[name='ellipsis'],
  ::slotted(craft-icon[name='ellipsis']) {
    --c-icon-size: var(--c-size-icon-sm, calc(12rem / 16));
  }
`,Li=Object.prototype.toString;function Ri(e){return typeof e==`function`||Li.call(e)===`[object Function]`}function zi(e){var t=Number(e);return isNaN(t)?0:t===0||!isFinite(t)?t:(t>0?1:-1)*Math.floor(Math.abs(t))}var Bi=2**53-1;function Vi(e){var t=zi(e);return Math.min(Math.max(t,0),Bi)}function K(e,t){var n=Array,r=Object(e);if(e==null)throw TypeError(`Array.from requires an array-like object - not null or undefined`);if(t!==void 0&&!Ri(t))throw TypeError(`Array.from: when provided, the second argument must be a function`);for(var i=Vi(r.length),a=Ri(n)?Object(new n(i)):Array(i),o=0,s;o<i;)s=r[o],t?a[o]=t(s,o):a[o]=s,o+=1;return a.length=i,a}function Hi(e){"@babel/helpers - typeof";return Hi=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Hi(e)}function Ui(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function Wi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,qi(r.key),r)}}function Gi(e,t,n){return t&&Wi(e.prototype,t),n&&Wi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ki(e,t,n){return t=qi(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function qi(e){var t=Ji(e,`string`);return Hi(t)==`symbol`?t:t+``}function Ji(e,t){if(Hi(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(Hi(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var Yi=typeof Set>`u`?Set:function(){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];Ui(this,e),Ki(this,`items`,void 0),this.items=t}return Gi(e,[{key:`add`,value:function(e){return this.has(e)===!1&&this.items.push(e),this}},{key:`clear`,value:function(){this.items=[]}},{key:`delete`,value:function(e){var t=this.items.length;return this.items=this.items.filter(function(t){return t!==e}),t!==this.items.length}},{key:`forEach`,value:function(e){var t=this;this.items.forEach(function(n){e(n,n,t)})}},{key:`has`,value:function(e){return this.items.indexOf(e)!==-1}},{key:`size`,get:function(){return this.items.length}}])}();function q(e){return e.localName??e.tagName.toLowerCase()}var Xi={article:`article`,aside:`complementary`,button:`button`,datalist:`listbox`,dd:`definition`,details:`group`,dialog:`dialog`,dt:`term`,fieldset:`group`,figure:`figure`,form:`form`,footer:`contentinfo`,h1:`heading`,h2:`heading`,h3:`heading`,h4:`heading`,h5:`heading`,h6:`heading`,header:`banner`,hr:`separator`,html:`document`,legend:`legend`,li:`listitem`,math:`math`,main:`main`,menu:`list`,nav:`navigation`,ol:`list`,optgroup:`group`,option:`option`,output:`status`,progress:`progressbar`,section:`region`,summary:`button`,table:`table`,tbody:`rowgroup`,textarea:`textbox`,tfoot:`rowgroup`,td:`cell`,th:`columnheader`,thead:`rowgroup`,tr:`row`,ul:`list`},Zi={caption:new Set([`aria-label`,`aria-labelledby`]),code:new Set([`aria-label`,`aria-labelledby`]),deletion:new Set([`aria-label`,`aria-labelledby`]),emphasis:new Set([`aria-label`,`aria-labelledby`]),generic:new Set([`aria-label`,`aria-labelledby`,`aria-roledescription`]),insertion:new Set([`aria-label`,`aria-labelledby`]),none:new Set([`aria-label`,`aria-labelledby`]),paragraph:new Set([`aria-label`,`aria-labelledby`]),presentation:new Set([`aria-label`,`aria-labelledby`]),strong:new Set([`aria-label`,`aria-labelledby`]),subscript:new Set([`aria-label`,`aria-labelledby`]),superscript:new Set([`aria-label`,`aria-labelledby`])};function Qi(e,t){return[`aria-atomic`,`aria-busy`,`aria-controls`,`aria-current`,`aria-description`,`aria-describedby`,`aria-details`,`aria-dropeffect`,`aria-flowto`,`aria-grabbed`,`aria-hidden`,`aria-keyshortcuts`,`aria-label`,`aria-labelledby`,`aria-live`,`aria-owns`,`aria-relevant`,`aria-roledescription`].some(function(n){var r;return e.hasAttribute(n)&&!((r=Zi[t])!=null&&r.has(n))})}function $i(e,t){return Qi(e,t)}function ea(e){var t=na(e);if(t===null||ra.indexOf(t)!==-1){var n=ta(e);if(ra.indexOf(t||``)===-1||$i(e,n||``))return n}return t}function ta(e){var t=Xi[q(e)];if(t!==void 0)return t;switch(q(e)){case`a`:case`area`:case`link`:if(e.hasAttribute(`href`))return`link`;break;case`img`:return e.getAttribute(`alt`)===``&&!$i(e,`img`)?`presentation`:`img`;case`input`:var n=e.type;switch(n){case`button`:case`image`:case`reset`:case`submit`:return`button`;case`checkbox`:case`radio`:return n;case`range`:return`slider`;case`email`:case`tel`:case`text`:case`url`:return e.hasAttribute(`list`)?`combobox`:`textbox`;case`search`:return e.hasAttribute(`list`)?`combobox`:`searchbox`;case`number`:return`spinbutton`;default:return null}case`select`:return e.hasAttribute(`multiple`)||e.size>1?`listbox`:`combobox`}return null}function na(e){var t=e.getAttribute(`role`);if(t!==null){var n=t.trim().split(` `)[0];if(n.length>0)return n}return null}var ra=[`presentation`,`none`];function J(e){return e!==null&&e.nodeType===e.ELEMENT_NODE}function ia(e){return J(e)&&q(e)===`caption`}function aa(e){return J(e)&&q(e)===`input`}function oa(e){return J(e)&&q(e)===`optgroup`}function sa(e){return J(e)&&q(e)===`select`}function ca(e){return J(e)&&q(e)===`table`}function la(e){return J(e)&&q(e)===`textarea`}function ua(e){var t=(e.ownerDocument===null?e:e.ownerDocument).defaultView;if(t===null)throw TypeError(`no window available`);return t}function da(e){return J(e)&&q(e)===`fieldset`}function fa(e){return J(e)&&q(e)===`legend`}function pa(e){return J(e)&&q(e)===`slot`}function ma(e){return J(e)&&e.ownerSVGElement!==void 0}function ha(e){return J(e)&&q(e)===`svg`}function ga(e){return ma(e)&&q(e)===`title`}function _a(e,t){if(J(e)&&e.hasAttribute(t)){var n=e.getAttribute(t).split(` `),r=e.getRootNode?e.getRootNode():e.ownerDocument;return n.map(function(e){return r.getElementById(e)}).filter(function(e){return e!==null})}return[]}function va(e,t){return J(e)?t.indexOf(ea(e))!==-1:!1}function ya(e){return e.trim().replace(/\s\s+/g,` `)}function ba(e,t){if(!J(e))return!1;if(e.hasAttribute(`hidden`)||e.getAttribute(`aria-hidden`)===`true`)return!0;var n=t(e);return n.getPropertyValue(`display`)===`none`||n.getPropertyValue(`visibility`)===`hidden`}function xa(e){return va(e,[`button`,`combobox`,`listbox`,`textbox`])||Sa(e,`range`)}function Sa(e,t){if(!J(e))return!1;switch(t){case`range`:return va(e,[`meter`,`progressbar`,`scrollbar`,`slider`,`spinbutton`]);default:throw TypeError(`No knowledge about abstract role '${t}'. This is likely a bug :(`)}}function Ca(e,t){var n=K(e.querySelectorAll(t));return _a(e,`aria-owns`).forEach(function(e){n.push.apply(n,K(e.querySelectorAll(t)))}),n}function wa(e){return sa(e)?e.selectedOptions||Ca(e,`[selected]`):Ca(e,`[aria-selected="true"]`)}function Ta(e){return va(e,ra)}function Ea(e){return ia(e)}function Da(e){return va(e,[`button`,`cell`,`checkbox`,`columnheader`,`gridcell`,`heading`,`label`,`legend`,`link`,`menuitem`,`menuitemcheckbox`,`menuitemradio`,`option`,`radio`,`row`,`rowheader`,`switch`,`tab`,`tooltip`,`treeitem`])}function Oa(e){return!1}function ka(e){return aa(e)||la(e)?e.value:e.textContent||``}function Aa(e){var t=e.getPropertyValue(`content`);return/^["'].*["']$/.test(t)?t.slice(1,-1):``}function ja(e){var t=q(e);return t===`button`||t===`input`&&e.getAttribute(`type`)!==`hidden`||t===`meter`||t===`output`||t===`progress`||t===`select`||t===`textarea`}function Ma(e){if(ja(e))return e;var t=null;return e.childNodes.forEach(function(e){if(t===null&&J(e)){var n=Ma(e);n!==null&&(t=n)}}),t}function Na(e){if(e.control!==void 0)return e.control;var t=e.getAttribute(`for`);return t===null?Ma(e):e.ownerDocument.getElementById(t)}function Pa(e){var t=e.labels;if(t===null)return t;if(t!==void 0)return K(t);if(!ja(e))return null;var n=e.ownerDocument;return K(n.querySelectorAll(`label`)).filter(function(t){return Na(t)===e})}function Fa(e){var t=e.assignedNodes();return t.length===0?K(e.childNodes):t}function Ia(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=new Yi,r=typeof Map>`u`?void 0:new Map,i=ua(e),a=t.compute,o=a===void 0?`name`:a,s=t.computedStyleSupportsPseudoElements,c=s===void 0?t.getComputedStyle!==void 0:s,l=t.getComputedStyle,u=l===void 0?i.getComputedStyle.bind(i):l,d=t.hidden,f=d!==void 0&&d,p=function(e,t){if(t!==void 0)throw Error(`use uncachedGetComputedStyle directly for pseudo elements`);if(r===void 0)return u(e);var n=r.get(e);if(n)return n;var i=u(e,t);return r.set(e,i),i};function m(e,t){var n=``;if(J(e)&&c&&(n=`${Aa(u(e,`::before`))} ${n}`),(pa(e)?Fa(e):K(e.childNodes).concat(_a(e,`aria-owns`))).forEach(function(e){var r=v(e,{isEmbeddedInLabel:t.isEmbeddedInLabel,isReferenced:!1,recursion:!0}),i=(J(e)?p(e).getPropertyValue(`display`):`inline`)===`inline`?``:` `;n+=`${i}${r}${i}`}),J(e)&&c){var r=Aa(u(e,`::after`));n=`${n} ${r}`}return n.trim()}function h(e,t){var r=e.getAttributeNode(t);return r!==null&&!n.has(r)&&r.value.trim()!==``?(n.add(r),r.value):null}function g(e){return J(e)?h(e,`title`):null}function _(e){if(!J(e))return null;if(da(e)){n.add(e);for(var t=K(e.childNodes),r=0;r<t.length;r+=1){var i=t[r];if(fa(i))return v(i,{isEmbeddedInLabel:!1,isReferenced:!1,recursion:!1})}}else if(ca(e)){n.add(e);for(var a=K(e.childNodes),o=0;o<a.length;o+=1){var s=a[o];if(ia(s))return v(s,{isEmbeddedInLabel:!1,isReferenced:!1,recursion:!1})}}else if(ha(e)){n.add(e);for(var c=K(e.childNodes),l=0;l<c.length;l+=1){var u=c[l];if(ga(u))return u.textContent}return null}else if(q(e)===`img`||q(e)===`area`){var d=h(e,`alt`);if(d!==null)return d}else if(oa(e)){var f=h(e,`label`);if(f!==null)return f}if(aa(e)&&(e.type===`button`||e.type===`submit`||e.type===`reset`)){var p=h(e,`value`);if(p!==null)return p;if(e.type===`submit`)return`Submit`;if(e.type===`reset`)return`Reset`}var g=Pa(e);if(g!==null&&g.length!==0)return n.add(e),K(g).map(function(e){return v(e,{isEmbeddedInLabel:!0,isReferenced:!1,recursion:!0})}).filter(function(e){return e.length>0}).join(` `);if(aa(e)&&e.type===`image`){var _=h(e,`alt`);if(_!==null)return _;var y=h(e,`title`);return y===null?`Submit Query`:y}if(va(e,[`button`])){var b=m(e,{isEmbeddedInLabel:!1,isReferenced:!1});if(b!==``)return b}return null}function v(e,t){if(n.has(e))return``;if(!f&&ba(e,p)&&!t.isReferenced)return n.add(e),``;var r=J(e)?e.getAttributeNode(`aria-labelledby`):null,i=r!==null&&!n.has(r)?_a(e,`aria-labelledby`):[];if(o===`name`&&!t.isReferenced&&i.length>0)return n.add(r),i.map(function(e){return v(e,{isEmbeddedInLabel:t.isEmbeddedInLabel,isReferenced:!0,recursion:!1})}).join(` `);var a=t.recursion&&xa(e)&&o===`name`;if(!a){var s=(J(e)&&e.getAttribute(`aria-label`)||``).trim();if(s!==``&&o===`name`)return n.add(e),s;if(!Ta(e)){var c=_(e);if(c!==null)return n.add(e),c}}if(va(e,[`menu`]))return n.add(e),``;if(a||t.isEmbeddedInLabel||t.isReferenced){if(va(e,[`combobox`,`listbox`])){n.add(e);var l=wa(e);return l.length===0?aa(e)?e.value:``:K(l).map(function(e){return v(e,{isEmbeddedInLabel:t.isEmbeddedInLabel,isReferenced:!1,recursion:!0})}).join(` `)}if(Sa(e,`range`))return n.add(e),e.hasAttribute(`aria-valuetext`)?e.getAttribute(`aria-valuetext`):e.hasAttribute(`aria-valuenow`)?e.getAttribute(`aria-valuenow`):e.getAttribute(`value`)||``;if(va(e,[`textbox`]))return n.add(e),ka(e)}if(Da(e)||J(e)&&t.isReferenced||Ea(e)||Oa(e)){var u=m(e,{isEmbeddedInLabel:t.isEmbeddedInLabel,isReferenced:!1});if(u!==``)return n.add(e),u}if(e.nodeType===e.TEXT_NODE)return n.add(e),e.textContent||``;if(t.recursion)return n.add(e),m(e,{isEmbeddedInLabel:t.isEmbeddedInLabel,isReferenced:!1});var d=g(e);return d===null?(n.add(e),``):(n.add(e),d)}return ya(v(e,{isEmbeddedInLabel:!1,isReferenced:o===`description`,recursion:!1}))}function La(e){return va(e,[`caption`,`code`,`deletion`,`emphasis`,`generic`,`insertion`,`none`,`paragraph`,`presentation`,`strong`,`subscript`,`superscript`])}function Ra(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return La(e)?``:Ia(e,t)}var za=e=>{var t=new WeakMap,r=new WeakSet,i=new WeakMap;class a extends e{constructor(...e){super(...e),_(this,r),this.action=null,this.feedback=null,this.feedbackDuration=1e3,this.actionState=w.Idle,this.feedbackMessage=null,x(this,t,null),x(this,i,e=>{if(this.disabled){e.preventDefault();return}Pe(this.action)&&(e.preventDefault(),this.triggerAction(e))})}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,v(i,this))}disconnectedCallback(){this.removeEventListener(`click`,v(i,this)),b(r,this,o).call(this),super.disconnectedCallback()}setActionState(e,t={}){this.actionState=e,this.feedbackMessage=t.message??null,this.dispatchEvent(new CustomEvent(`craft-state-change`,{bubbles:!0,composed:!0,detail:{state:e,actionType:Pe(this.action)?.type,...t}}))}async triggerAction(e){let n=Pe(this.action);if(n){b(r,this,o).call(this),n.type===`http`&&this.setActionState(w.Loading,this.feedback?.loading);try{await Ie(n,{trigger:this,sourceEvent:e}),this.setActionState(w.Success,this.feedback?.success)}catch(e){this.setActionState(w.Error,{message:e instanceof Error?e.message:void 0,...this.feedback?.error??{}})}finally{b(r,this,o).call(this),this.isConnected?y(t,this,setTimeout(()=>{y(t,this,null),this.setActionState(w.Idle)},this.feedbackDuration)):(this.actionState=w.Idle,this.feedbackMessage=null)}}}}function o(){v(t,this)!==null&&(clearTimeout(v(t,this)),y(t,this,null))}return n([s({type:Object})],a.prototype,`action`,void 0),n([s({type:Object})],a.prototype,`feedback`,void 0),n([s({type:Number,attribute:`feedback-duration`})],a.prototype,`feedbackDuration`,void 0),n([s({reflect:!0,attribute:`action-state`})],a.prototype,`actionState`,void 0),n([u()],a.prototype,`feedbackMessage`,void 0),a},Ba,Va={Primary:`primary`,Danger:`danger`,DangerPlain:`danger-plain`,Solid:`solid`,Fill:`fill`,Outline:`outline`,Dashed:`dashed`,Plain:`plain`,Link:`link`,None:`none`},Ha=e=>e.key===` `||e.key===`Enter`,Ua=new WeakMap;function Wa(e){let t=document.createElement(`button`);return t.type=`submit`,t.tabIndex=-1,t.setAttribute(`aria-hidden`,`true`),t.style.cssText=`position:absolute;inset-block-start:0;inset-inline-start:0;width:1px;height:1px;padding:0;border:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap;`,t.addEventListener(`click`,t=>{t.stopPropagation(),t.preventDefault(),e()}),t}function Ga(e){for(let t=e.parentElement?.closest(`fieldset`);t;t=t.parentElement?.closest(`fieldset`))if(t.disabled&&!t.querySelector(`:scope > legend`)?.contains(e))return!0;return!1}var Ka=new WeakMap;function qa(e,t){let n=Ka.get(e);if(!n){let t=new Set,r=new MutationObserver(e=>{e.some(e=>e.target instanceof HTMLFieldSetElement)&&t.forEach(e=>e())});r.observe(e,{attributes:!0,attributeFilter:[`disabled`],subtree:!0}),n={observer:r,watchers:t},Ka.set(e,n)}n.watchers.add(t)}function Ja(e,t){let n=Ka.get(e);n&&(n.watchers.delete(t),n.watchers.size||(n.observer.disconnect(),Ka.delete(e)))}var Ya=new WeakMap,Xa=new WeakMap,Y=new WeakSet,Za=new WeakMap,Qa=new WeakMap,$a=new WeakMap,eo=new WeakMap,to=new WeakMap,no=new WeakMap,ro=new WeakMap,io=new WeakMap,ao=new WeakMap,oo=new WeakMap,so=new WeakMap,co=new WeakMap,lo=new WeakMap,uo=new WeakMap,X=class e extends E(za(l)){get form(){let e=this.getAttribute(`form`);if(e===null)return this.closest(`form`);let t=this.getRootNode().getElementById?.(e);return t instanceof HTMLFormElement?t:null}static get observedAttributes(){return[...super.observedAttributes,`form`]}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),e===`form`&&b(Y,this,go).call(this)}constructor(){super(),_(this,Y),this.type=`button`,this.disabled=!1,this.fieldsetDisabled=!1,x(this,Ya,this.attachInternals?.()),x(this,Xa,!1),x(this,Za,()=>{this.fieldsetDisabled=Ga(this)}),x(this,Qa,!1),x(this,$a,void 0),x(this,eo,e=>{if(fo.call(b(Y,this))){e.preventDefault(),e.stopImmediatePropagation();return}this.type!==`button`&&(y($a,this,e),v(Qa,this)||setTimeout(()=>b(Y,this,ho).call(this,e)))}),x(this,to,()=>{let e=this.active;this.active=!0;let t=()=>{this.active=e,document.removeEventListener(`mouseup`,t,!0),document.removeEventListener(`dragend`,t,!0)};document.addEventListener(`mouseup`,t,!0),document.addEventListener(`dragend`,t,!0)}),x(this,no,e=>{if(e.composedPath()[0]!==this||(e.key===` `&&e.preventDefault(),this.active||!Ha(e)))return;this.active=!0;let t=e=>{Ha(e)&&(this.active=!1,document.removeEventListener(`keyup`,t,!0))};document.addEventListener(`keyup`,t,!0)}),x(this,ro,e=>{Ha(e)&&e.composedPath()[0]===this&&this.click()}),x(this,io,null),x(this,ao,null),x(this,oo,e=>{!this.toggle||fo.call(b(Y,this))||this.loading||this.dispatchEvent(new CustomEvent(`craft-toggle`,{bubbles:!0,composed:!0,cancelable:!0,detail:{active:!this.active,sourceEvent:e}}))}),this.variant=Va.Fill,this.inherit=!1,this.size=`medium`,this.active=!1,this.toggle=!1,this.loading=!1,this.focusableWhenDisabled=!1,this.align=`center`,this.icon=null,this.href=null,this.target=null,this.rel=null,this.download=null,this.iconPosition=`prefix`,this._accessibleName=``,this._hasAccessibilityError=!1,this._hostLabel=null,this._content={label:!1,textLabel:!1,prefix:!1,suffix:!1},x(this,so,null),x(this,co,null),x(this,lo,!1),x(this,uo,null),this.linkHostStateApplied=!1,this.originalType=null,this.addEventListener(`click`,v(eo,this),{capture:!0}),this.addEventListener(`mousedown`,v(to,this)),this.addEventListener(`keydown`,v(no,this)),this.addEventListener(`keyup`,v(ro,this))}click(){if(!(fo.call(b(Y,this))||v(Qa,this))){y(Qa,this,!0);try{super.click()}finally{y(Qa,this,!1)}v($a,this)&&b(Y,this,ho).call(this,v($a,this))}}connectedCallback(){super.connectedCallback(),this._hostLabel=this.getAttribute(`aria-label`),this.hasAttribute(`role`)||this.setAttribute(`role`,`button`),this.syncLinkHostState(),v(Za,this).call(this),y(io,this,this.getRootNode()),qa(v(io,this),v(Za,this)),b(Y,this,go).call(this),this.addEventListener(`click`,v(oo,this)),b(Y,this,vo).call(this),y(co,this,new MutationObserver(()=>{b(Y,this,vo).call(this),this._hostLabel=this.getAttribute(`aria-label`),this.hasUpdated&&b(Y,this,yo).call(this)})),v(co,this).observe(this,{childList:!0,characterData:!0,subtree:!0,attributes:!0,attributeFilter:[`slot`,`aria-label`,`aria-labelledby`,`title`]}),this.hasUpdated&&!this._accessibleName.trim()&&b(Y,this,yo).call(this)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,v(oo,this)),v(co,this)?.disconnect(),y(co,this,null),b(Y,this,Co).call(this),b(Y,this,_o).call(this),v(io,this)&&(Ja(v(io,this),v(Za,this)),y(io,this,null))}willUpdate(e){super.willUpdate(e),e.has(`actionState`)&&e.get(`actionState`)!==void 0&&(this.loading=this.actionState===w.Loading)}updated(t){super.updated(t),(t.has(`href`)||t.has(`disabled`))&&this.syncLinkHostState();let n=t.has(`disabled`)||t.has(`fieldsetDisabled`)||t.has(`href`);if(t.has(`type`))b(Y,this,go).call(this);else if(n&&v(ao,this)){let t=Ua.get(v(ao,this));t&&po.call(e,v(ao,this),t)}if(n&&(fo.call(b(Y,this))?this.getAttribute(`aria-disabled`)!==`true`&&(this.setAttribute(`aria-disabled`,`true`),y(Xa,this,!0)):v(Xa,this)&&(this.removeAttribute(`aria-disabled`),y(Xa,this,!1)),this.fieldsetDisabled&&!this.href?v(Ya,this)?.states?.add(`fieldset-disabled`):v(Ya,this)?.states?.delete(`fieldset-disabled`)),(n||t.has(`focusableWhenDisabled`))&&(this.disabled?this.tabIndex=this.focusableWhenDisabled?0:-1:fo.call(b(Y,this))?this.tabIndex=-1:this.isLink||(this.tabIndex=0)),t.has(`shortcut`)){let e=this.getAttribute(`aria-keyshortcuts`),t=this.shortcutAriaKeys;(e===null||e===v(so,this))&&(t?this.setAttribute(`aria-keyshortcuts`,t):this.removeAttribute(`aria-keyshortcuts`),y(so,this,t))}this.toggle&&(t.has(`active`)||t.has(`toggle`))&&this.setAttribute(`aria-pressed`,String(this.active)),t.has(`loading`)&&(this.loading?this.announceLoading():t.get(`loading`)&&this.clearLoadingAnnouncement())}announceLoading(){this.liveRegion.textContent=t(`Loading`)}clearLoadingAnnouncement(){this.liveRegion.textContent=``}syncLinkHostState(){this.isLink?(this.linkHostStateApplied||(this.originalType=this.type),this.setAttribute(`role`,`presentation`),this.removeAttribute(`tabindex`),this.type=`button`,this.linkHostStateApplied=!0):this.linkHostStateApplied&&=(this.setAttribute(`role`,`button`),this.type=this.originalType??`button`,this.disabled||(this.tabIndex=0),!1)}firstUpdated(e){super.firstUpdated(e),b(Y,this,yo).call(this)}get isLink(){return!!this.href&&!this.disabled}get computedTarget(){return g(this.href,this.target)}render(){let e=this._content.prefix||!!this.icon&&this.iconPosition===`prefix`,t=this._content.suffix||!!this.icon&&this.iconPosition===`suffix`,n=d`
      <div
        class="${I({"button-content":!0,"button-content--spaced-prefix":e&&this._content.label,"button-content--spaced-suffix":t&&this._content.label,"button-content--icon-only":!!this.icon&&!this._content.label&&!this._content.prefix&&!this._content.suffix,"button-content--start":this.align===`start`,"button-content--end":this.align===`end`,"a11y-error":this._hasAccessibilityError})}"
        part="content"
      >
        <slot name="prefix" class="prefix" part="prefix">
          ${this.icon&&this.iconPosition===`prefix`?d`<craft-icon name="${this.icon}"></craft-icon>`:r}
        </slot>
        <slot
          class="${I({label:!0,"label--text":this._content.textLabel})}"
          part="label"
        ></slot>
        <slot name="suffix" class="suffix" part="suffix">
          ${this.icon&&this.iconPosition===`suffix`?d`<craft-icon name="${this.icon}"></craft-icon>`:r}
        </slot>
        ${this.shortcutKeys?d`<craft-shortcut
              class="shortcut"
              aria-hidden="true"
              ?alt="${this.shortcutKeys.alt}"
              ?shift="${this.shortcutKeys.shift}"
              >${this.shortcutKeys.key}</craft-shortcut
            >`:r}
      </div>
      ${this.loading?d`<craft-spinner part="spinner"></craft-spinner>`:r}
      <span class="cp-visually-hidden" role="status" data-live-region></span>
    `;if(this.isLink){let e=this.computedTarget,t=this._hostLabel?.trim()||null,i=!this.target&&!!e;return d`
        <a
          class="link"
          part="link"
          href="${this.href}"
          target="${e??r}"
          rel="${h(e,this.rel)??r}"
          download="${this.download??r}"
          aria-label="${t??r}"
          aria-describedby="${t&&i?`new-tab-cue`:r}"
          >${n}${i?d`<span id="new-tab-cue" class="cp-visually-hidden"
                >${m()}</span
              >`:r}</a
        >
      `}return n}};Ba=X;function fo(){return this.disabled||!this.href&&Ga(this)}function po(e,t){let n=mo.call(Ba,t.owners);if(t.button.disabled=n?fo.call(b(Y,n)):!1,!n)return;let r=[...e.elements].find(e=>e!==t.button&&(e instanceof HTMLButtonElement||e instanceof HTMLInputElement)&&e.type===`submit`);if(r&&!(n.compareDocumentPosition(r)&Node.DOCUMENT_POSITION_FOLLOWING)){t.button.remove();return}let i=r;for(let e=r?.parentElement?.closest(`fieldset`);e&&!e.contains(n);e=e.parentElement?.closest(`fieldset`))i=e;i?t.button.nextElementSibling!==i&&i.before(t.button):e.lastElementChild!==t.button&&e.append(t.button),e.contains(t.button)?t.button.removeAttribute(`form`):t.button.setAttribute(`form`,e.id)}function mo(e){let[t]=[...e].sort((e,t)=>e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1);return t}function ho(e){if(v($a,this)!==e||(y($a,this,void 0),e.defaultPrevented||fo.call(b(Y,this))))return;let t=this.form;this.type===`submit`?t?.requestSubmit():this.type===`reset`&&t?.reset()}function go(){let e=this.isConnected&&this.type===`submit`?this.form:null;if(e===v(ao,this)||(b(Y,this,_o).call(this),!e))return;let t=Ua.get(e);if(!t){let n=new Set;t={button:Wa(()=>mo.call(Ba,n)?.click()),owners:n},Ua.set(e,t)}t.owners.add(this),y(ao,this,e),po.call(Ba,e,t)}function _o(){let e=v(ao,this);if(!e)return;let t=Ua.get(e);y(ao,this,null),t&&(t.owners.delete(this),po.call(Ba,e,t),queueMicrotask(()=>{!t.owners.size&&Ua.get(e)===t&&(t.button.remove(),Ua.delete(e))}))}function vo(){let e=e=>Array.from(this.childNodes).some(t=>t instanceof Element?(t.getAttribute(`slot`)||null)===e:e===null&&t.nodeType===Node.TEXT_NODE&&!!t.textContent?.trim()),t=e(null)&&!Array.from(this.children).some(e=>!e.slot&&!e.classList.contains(`sr-only`)),n={label:e(null),textLabel:t,prefix:e(`prefix`),suffix:e(`suffix`)};(n.label!==this._content.label||n.textLabel!==this._content.textLabel||n.prefix!==this._content.prefix||n.suffix!==this._content.suffix)&&(this._content=n)}function yo(){v(lo,this)||(y(lo,this,!0),N(()=>{y(lo,this,!1),b(Y,this,bo).call(this)}))}function bo(){if(!this.isConnected)return;let e=this.isLink?this.shadowRoot?.querySelector(`a.link`)??this:this;this._accessibleName=Ra(e);let t=this._accessibleName.trim()===``;if(t&&!b(Y,this,xo).call(this)){b(Y,this,So).call(this);return}this._hasAccessibilityError=t}function xo(){return typeof this.checkVisibility==`function`?this.checkVisibility({visibilityProperty:!0}):this.getClientRects().length>0}function So(){v(uo,this)||typeof ResizeObserver>`u`||(y(uo,this,new ResizeObserver(()=>{b(Y,this,xo).call(this)&&(b(Y,this,Co).call(this),b(Y,this,bo).call(this))})),v(uo,this).observe(this))}function Co(){v(uo,this)?.disconnect(),y(uo,this,null)}X.styles=[Fi,M,T,Ii],n([s({reflect:!0})],X.prototype,`type`,void 0),n([s({type:Boolean,reflect:!0})],X.prototype,`disabled`,void 0),n([u()],X.prototype,`fieldsetDisabled`,void 0),n([s({reflect:!0})],X.prototype,`variant`,void 0),n([s({reflect:!0,type:Boolean})],X.prototype,`inherit`,void 0),n([s({reflect:!0})],X.prototype,`size`,void 0),n([s({reflect:!0})],X.prototype,`value`,void 0),n([s({reflect:!0,type:Boolean})],X.prototype,`active`,void 0),n([s({type:Boolean,reflect:!0})],X.prototype,`toggle`,void 0),n([s({reflect:!0,type:Boolean})],X.prototype,`loading`,void 0),n([s({attribute:`focusable-when-disabled`,type:Boolean,reflect:!0})],X.prototype,`focusableWhenDisabled`,void 0),n([s({reflect:!0})],X.prototype,`flush`,void 0),n([s()],X.prototype,`align`,void 0),n([s()],X.prototype,`icon`,void 0),n([s({reflect:!0})],X.prototype,`href`,void 0),n([s()],X.prototype,`target`,void 0),n([s()],X.prototype,`rel`,void 0),n([s()],X.prototype,`download`,void 0),n([s({attribute:`icon-position`})],X.prototype,`iconPosition`,void 0),n([p(`[data-live-region]`)],X.prototype,`liveRegion`,void 0),n([u()],X.prototype,`_accessibleName`,void 0),n([u()],X.prototype,`_hasAccessibilityError`,void 0),n([u()],X.prototype,`_hostLabel`,void 0),n([u()],X.prototype,`_content`,void 0),customElements.get(`craft-button`)||customElements.define(`craft-button`,X);var wo=new WeakMap,To=new WeakMap,Eo=new WeakSet,Do=new WeakMap,Oo=new WeakMap,ko=class extends G{static get styles(){return[...super.styles,i`
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
      `]}constructor(){super(),_(this,Eo),x(this,wo,null),x(this,To,!1),x(this,Do,e=>{e.key!==`Escape`||e.target!==this._control||!b(Eo,this,Ao).call(this)||(e.preventDefault(),e.stopPropagation(),y(To,this,!0),this.clear())}),x(this,Oo,e=>{e.key===`Escape`&&v(To,this)&&(e.stopPropagation(),y(To,this,!1))}),this.inputMode=`search`,this.addEventListener(`keydown`,v(Do,this),{capture:!0}),this.addEventListener(`keyup`,v(Oo,this),{capture:!0})}connectedCallback(){!this.label&&!this.querySelector(`:scope > [slot="label"]`)&&(this.label=t(`Search`)),this.hasAttribute(`label-sr-only`)||(this.labelSrOnly=!0),this.placeholder||=t(`Search`),super.connectedCallback(),this._control?.setAttribute(`enterkeyhint`,`search`),this._control?.hasAttribute(`autocomplete`)||this._control?.setAttribute(`autocomplete`,`off`),b(Eo,this,jo).call(this)}updated(e){super.updated(e),(e.has(`value`)||e.has(`disabled`)||e.has(`readOnly`))&&b(Eo,this,jo).call(this)}_inputGroupInputTemplate(){return d`
      <div class="input-group__input">
        <slot name="input"></slot>
        <div class="input-search__clear">
          <slot name="search-clear"></slot>
        </div>
      </div>
    `}get slots(){return{...super.slots,prefix:()=>d`<craft-icon slot="prefix" name="search"></craft-icon>`}}clear(){this.disabled||this.readOnly||(this.value=``,this._control?.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this._control?.focus(),this.dispatchEvent(new CustomEvent(`clear`,{bubbles:!0,composed:!0})))}};function Ao(){return this.value!==``}function jo(){let e=b(Eo,this,Ao).call(this)&&!this.disabled&&!this.readOnly;e&&!v(wo,this)?(y(wo,this,b(Eo,this,Mo).call(this)),this.append(v(wo,this)),this.toggleAttribute(`clearable`,!0),this.requestUpdate()):!e&&v(wo,this)&&(v(wo,this).contains(document.activeElement)&&this._control?.focus(),v(wo,this).remove(),y(wo,this,null),this.toggleAttribute(`clearable`,!1),this.requestUpdate())}function Mo(){let e=document.createElement(`craft-button`);e.slot=`search-clear`,e.setAttribute(`data-search-clear`,``),e.setAttribute(`type`,`button`),e.setAttribute(`icon`,``),e.setAttribute(`size`,`small`),e.setAttribute(`variant`,`plain`),e.addEventListener(`click`,()=>this.clear());let n=document.createElement(`craft-icon`);return n.setAttribute(`name`,`xmark-large`),n.setAttribute(`label`,t(`Clear search`)),e.append(n),e.updateComplete.then(()=>{e.tabIndex=-1}),e}customElements.get(`craft-input-search`)||customElements.define(`craft-input-search`,ko);function No(e){Object.assign(e.style,{marginBlock:`calc(var(--c-spacing-sm) - var(--c-spacing-xs))`,marginInline:`0`,border:`0`,borderBlockStart:`1px solid var(--c-color-neutral-border-quiet)`})}var Po=class e extends U{constructor(...e){super(...e),this.label=t(`Actions`),this.icon=`ellipsis`,this.disabled=!1,this.searchable=!1,this.uid=ui(),this._generatedInvoker=null,this._generatedContent=null,this._searchContainer=null,this._searchInput=null,this._searchField=null,this._onItemClick=e=>{let t=e.currentTarget;this.open=!1,this.actions===void 0&&this._dispatchChange(t)},this._onSearchKeydown=e=>{if(e.key===`ArrowDown`||e.key===`ArrowUp`){let t=this._getNavigableItems();t.length&&(e.preventDefault(),(e.key===`ArrowDown`?t[0]:t[t.length-1])?.focus());return}e.key===`Enter`&&e.preventDefault()},this._onOverlayShow=()=>{if(!this.open)return;if(this.searchable){this._searchInput?.focus();return}let e=this._getNavigableItems()[0];e?.hasUpdated===!1?e.updateComplete.then(()=>{this.open&&e.focus()}):e?.focus()},this._onContentKeydown=e=>{if(this._searchContainer?.contains(e.target))return;let t=this._getNavigableItems(),n=e.target?.closest?.(`craft-action-item`)??null,r=n?t.indexOf(n):-1;if(e.key===`ArrowDown`||e.key===`ArrowUp`){if(!t.length)return;e.preventDefault();let n;n=e.key===`ArrowDown`?r===-1?0:(r+1)%t.length:r===-1?t.length-1:(r-1+t.length)%t.length,t[n]?.focus();return}if(e.key===`Home`||e.key===`End`){if(!t.length)return;e.preventDefault(),(e.key===`Home`?t[0]:t[t.length-1])?.focus();return}if(e.key===` `&&!this.searchable&&n?.href){e.preventDefault(),(n.shadowRoot?.querySelector(`a[href]`)??n).click();return}n&&this._redirectTypingToSearch(e)},this._onContentSlotChange=()=>{this._syncSearchInput(),this._addEventListeners()},this._onInvokerSlotChange=()=>{if(this.actions===void 0)return;let e=!!this._generatedInvoker;this._renderDataDrivenMenu(),e!==!!this._generatedInvoker&&(this._syncInvoker(),this._setupInvoker())}}_addEventListeners(){let e=this.contentNodes[0];e&&(this._bindContent(e),this._observeContent(e))}_observeContent(e){this._contentObserver?.disconnect(),this._contentObserver=new MutationObserver(()=>this._bindContent(e)),this._contentObserver.observe(e,{childList:!0,subtree:!0})}_bindContent(e){e.querySelectorAll(`craft-action-item`).forEach(e=>e.addEventListener(`click`,this._onItemClick)),e.querySelectorAll(`hr`).forEach(No)}_dispatchChange(e){this.dispatchEvent(new CustomEvent(`craft-select`,{bubbles:!0,composed:!0,detail:{item:e}}))}_setupInvoker(){let e=this.invokerNodes[0];e&&(e.setAttribute(`id`,`invoker-${this.uid}`),e.setAttribute(`aria-controls`,`content-${this.uid}`)),this._syncInvokerDisabled()}_syncInvokerDisabled(){let e=this.invokerNodes[0];if(!e)return;this.disabled?e.setAttribute(`aria-disabled`,`true`):e.removeAttribute(`aria-disabled`);let t=e;t.updateComplete&&!t.hasUpdated&&t.updateComplete.then(()=>this._syncInvokerDisabled())}_setupContent(){let e=this.contentNodes[0];e&&(e.setAttribute(`id`,`content-${this.uid}`),e.setAttribute(`role`,`none`)),this._wireContentKeydown()}_setupOverlay(){super._setupOverlay(),this._setupInvoker(),this._setupContent(),this._addEventListeners()}_teardownOverlay(){this._contentObserver?.disconnect(),this._contentObserver=void 0,super._teardownOverlay()}_overlayShown(){super._overlayShown(),this.updateComplete.then(this._onOverlayShow)}firstUpdated(e){super.firstUpdated(e),this.shadowRoot?.querySelector(`slot[name="invoker"]`)?.addEventListener(`slotchange`,this._onInvokerSlotChange),this.shadowRoot?.querySelector(`slot[name="content"]`)?.addEventListener(`slotchange`,this._onContentSlotChange),this._syncSearchInput()}willUpdate(e){if(super.willUpdate(e),e.has(`open`)&&this.open&&this.disabled){this.open=!1;return}if(e.has(`open`)&&this.open&&this.querySelectorAll(`craft-action-item`).forEach(e=>{e.closest(`craft-action-menu`)===this&&e.renderNow?.()}),this.actions===void 0){this._removeGeneratedNodes();return}let t=e.has(`open`)&&this.open&&this._hasActionsProvider();(e.has(`actions`)||e.has(`label`)||e.has(`icon`)||e.has(`disabled`)||t||!this._generatedContent)&&this._renderDataDrivenMenu()}updated(e){super.updated(e),e.has(`disabled`)&&this._syncInvokerDisabled(),e.has(`open`)&&!this.open&&e.get(`open`)&&this._resetSearchFilter(),e.has(`searchable`)&&this._syncSearchInput(),this.actions!==void 0&&(e.has(`open`)&&this.open&&this._hasActionsProvider()&&(this._setupContent(),this._addEventListeners()),(e.has(`actions`)||e.has(`label`)||e.has(`icon`))&&this._rewireGeneratedMenu())}_rewireGeneratedMenu(){this._syncInvoker(),this._setupInvoker(),this._setupContent(),this._addEventListeners()}_hasSlottedInvoker(){return Array.from(this.children).some(e=>e.slot===`invoker`&&e!==this._generatedInvoker)}_removeGeneratedNodes(){this._generatedInvoker?.isConnected&&this._generatedInvoker.remove(),this._generatedContent?.isConnected&&this._generatedContent.remove(),this._generatedInvoker=null,this._generatedContent=null}_normalizeActions(e){return e.map(e=>e.type===`hr`||e.type===`display`?e:e.type===`group`?{...e,items:this._normalizeActions(e.items)}:`href`in e&&e.href?{...e,type:`link`,label:e.label??``}:{...e,type:e.type??`button`,label:e.label??``})}_sortActions(e){return e.map(e=>e.type===`group`?{...e,items:this._sortActions(e.items)}:e).sort((e,t)=>(`variant`in e&&e.variant===k.Danger)-+(`variant`in t&&t.variant===k.Danger))}_applyItemProps(e,t){let n=new Set([`type`,`label`,`onClick`,`href`,`keywords`,`attributes`]);for(let[r,i]of Object.entries(t))if(!(n.has(r)||i===void 0))try{e[r]=i}catch{}}_renderItem(e){if(e.type===`group`){let t=document.createDocumentFragment();if(e.heading){let n=document.createElement(`div`);n.className=`action-menu__heading`,n.textContent=e.heading,n.setAttribute(`role`,`presentation`),Object.assign(n.style,{paddingBlock:`var(--c-spacing-xs)`,paddingInline:`calc(var(--c-spacing-sm) * 2 + 1px) var(--c-spacing-md)`,fontSize:`var(--c-text-sm)`,fontWeight:`bold`}),t.appendChild(n)}for(let n of e.items){let e=this._renderItem(n);e&&t.appendChild(e)}return t}if(e.type===`hr`){let e=document.createElement(`hr`);return e.className=`action-menu__separator`,No(e),e}if(e.type===`display`)return typeof e.node==`function`?e.node():e.node;let t=document.createElement(`craft-action-item`);if(e.type===`link`&&(t.href=e.href),this._applyItemProps(t,e),e.keywords&&t.setAttribute(`data-keywords`,e.keywords),e.label&&(t.textContent=e.label),typeof e.onClick==`function`){let n=e.onClick;t.addEventListener(`click`,e=>n(e))}return t.addEventListener(`click`,()=>this._dispatchChange(e)),t}_resolveActions(){return typeof this.actions==`function`?this.actions():this.actions??[]}_hasActionsProvider(){return typeof this.actions==`function`}_renderDataDrivenMenu(){let e=this._sortActions(this._normalizeActions(this._resolveActions()));if(this._hasSlottedInvoker())this._generatedInvoker?.isConnected&&this._generatedInvoker.remove(),this._generatedInvoker=null;else{if(!this._generatedInvoker){let e=document.createElement(`craft-button`);e.setAttribute(`slot`,`invoker`),e.setAttribute(`type`,`button`),e.setAttribute(`icon`,``),e.setAttribute(`size`,`small`),e.setAttribute(`inherit`,`true`),e.setAttribute(`variant`,`plain`),this._generatedInvoker=e,this.appendChild(e)}this._generatedInvoker.disabled=this.disabled,this._generatedInvoker.toggleAttribute(`disabled`,this.disabled),o(d`<craft-icon
          name="${this.icon}"
          label="${this.label}"
        ></craft-icon>`,this._generatedInvoker)}if(!this._generatedContent){let e=document.createElement(`div`);e.setAttribute(`slot`,`content`),this._generatedContent=e,this.appendChild(e)}let t=this._generatedContent;t.replaceChildren();for(let n of e){let e=this._renderItem(n);e&&t.appendChild(e)}let n=!1;for(let e of t.children)e.classList.contains(`action-menu__heading`)?e.style.marginBlockStart=n?`var(--c-spacing-md)`:``:e.tagName===`CRAFT-ACTION-ITEM`&&(n=!0);this._syncSearchInput()}_getContentNode(){return this._generatedContent?this._generatedContent:Array.from(this.children).find(e=>e.slot===`content`)??null}_syncSearchInput(){let e=this._getContentNode();if(this._wireContentKeydown(),!this.searchable||!e){this._searchContainer?.isConnected&&this._searchContainer.remove(),e&&this._clearFilterAttributes(e);return}this._searchContainer||=this._buildSearchContainer(),e.firstElementChild!==this._searchContainer&&e.prepend(this._searchContainer)}_buildSearchContainer(){let e=document.createElement(`div`);e.className=`action-menu__search`;let n=document.createElement(`style`);n.textContent=`
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
    `,e.appendChild(n);let r=document.createElement(`input`);r.setAttribute(`aria-label`,t(`Search`)),r.addEventListener(`input`,()=>{this._applySearchFilter(r.value)}),r.addEventListener(`keydown`,this._onSearchKeydown);let i=document.createElement(`craft-input-search`);return i.setAttribute(`size`,`small`),r.slot=`input`,i.append(r),e.appendChild(i),this._searchInput=r,this._searchField=i,e}_getFilterableItems(t){return Array.from(t.querySelectorAll(e._filterableItemsSelector)).filter(n=>{if(this._searchContainer?.contains(n))return!1;let r=n.parentElement?.closest(e._filterableItemsSelector);return!r||!t.contains(r)})}_itemMatchesSearch(e,t){return`${e.textContent??``} ${e.getAttribute(`data-keywords`)??``}`.toLowerCase().includes(t)}_applySearchFilter(e){let t=this._getContentNode();if(!t)return;let n=e.trim().toLowerCase();for(let e of this._getFilterableItems(t))!n||this._itemMatchesSearch(e,n)?e.removeAttribute(`data-search-hidden`):e.setAttribute(`data-search-hidden`,``)}_clearFilterAttributes(e){e.querySelectorAll(`[data-search-hidden]`).forEach(e=>e.removeAttribute(`data-search-hidden`))}_resetSearchFilter(){this._searchField&&(this._searchField.value=``);let e=this._getContentNode();e&&this._clearFilterAttributes(e)}_getNavigableItems(){let e=this._getContentNode();return e?Array.from(e.querySelectorAll(`craft-action-item`)).filter(e=>!e.hasAttribute(`hidden`)&&!e.hasAttribute(`data-search-hidden`)):[]}_wireContentKeydown(){this._getContentNode()?.addEventListener(`keydown`,this._onContentKeydown)}_redirectTypingToSearch(e){if(!this.searchable||!this._searchInput||!(e.key.length===1&&!e.ctrlKey&&!e.metaKey&&!e.altKey)&&e.key!==`Backspace`)return;e.preventDefault();let t=this._searchInput;t.focus(),t.value=e.key===`Backspace`?t.value.slice(0,-1):t.value+e.key,this._applySearchFilter(t.value)}};Po.styles=[...U.styles,i`
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
    `],Po._filterableItemsSelector=`craft-action-item, li, button`,n([s({attribute:!1})],Po.prototype,`actions`,void 0),n([s()],Po.prototype,`label`,void 0),n([s()],Po.prototype,`icon`,void 0),n([s({type:Boolean,reflect:!0})],Po.prototype,`disabled`,void 0),n([s({type:Boolean,reflect:!0})],Po.prototype,`searchable`,void 0),n([C({slot:`invoker`})],Po.prototype,`invokerNodes`,void 0),n([C({slot:`content`})],Po.prototype,`contentNodes`,void 0),customElements.get(`craft-action-menu`)||customElements.define(`craft-action-menu`,Po);var Fo=i`
  /* Square, so it sits close to neighboring icon buttons */
  craft-button {
    cursor: move;
    padding-inline: 0;
  }

  /* The move icon reads small at a small button's icon size */
  craft-icon {
    --c-icon-size: var(--c-size-icon-sm, calc(12rem / 16));
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
`,Z=class extends l{constructor(){super(),this.label=null,this.position=`middle`,this.orientation=`vertical`,this.moves=[],this.variant=`plain`,this.disabled=!1,this.nested=!1,this.canIndent=!1,this.canOutdent=!1,this._hasFocus=!1,this._movedWhileFocused=!1,this._stopMenuEvent=e=>{e.target===e.currentTarget&&e.stopPropagation()},this.addEventListener(`focusin`,()=>{this._hasFocus=!0}),this.addEventListener(`focusout`,e=>{let t=e.relatedTarget;t instanceof Node&&!this.contains(t)?this._hasFocus=!1:t||setTimeout(()=>{this.isConnected&&!this.matches(`:focus-within`)&&(this._hasFocus=!1)})})}connectedCallback(){if(super.connectedCallback(),!this._movedWhileFocused)return;this._movedWhileFocused=!1;let e=document.activeElement;(!e||e===document.body)&&this._focusInvoker()}disconnectedCallback(){super.disconnectedCallback(),this._hasFocus&&(this._movedWhileFocused=!0,setTimeout(()=>{this._movedWhileFocused=!1,this.isConnected||(this._hasFocus=!1)}))}updated(e){super.updated(e),e.has(`disabled`)&&(this.disabled?this.setAttribute(`aria-disabled`,`true`):this.removeAttribute(`aria-disabled`))}_focusInvoker(){this.shadowRoot?.querySelector(`craft-button`)?.focus()}_canMove(e){switch(e){case`up`:return this.position!==`first`&&this.position!==`only`;case`down`:return this.position!==`last`&&this.position!==`only`;case`indent`:return this.nested&&this.canIndent;case`outdent`:return this.nested&&this.canOutdent}}_reorder(e){this.disabled||!this._canMove(e)||(this.matches(`:focus-within`)&&this._focusInvoker(),this.dispatchEvent(new CustomEvent(`craft-reorder`,{detail:{direction:e},bubbles:!0,composed:!0})))}_move(e){this.disabled||this.dispatchEvent(new CustomEvent(`craft-move`,{detail:{value:e},bubbles:!0,composed:!0}))}_isRtl(){return(this.closest(`[dir]`)?.getAttribute(`dir`)??document.documentElement.getAttribute(`dir`))?.toLowerCase()===`rtl`}render(){let e=this.label??t(`Reorder`),n=this.orientation===`horizontal`,i=n&&this._isRtl(),a=n?i?`arrow-right`:`arrow-left`:`arrow-up`,o=n?i?`arrow-left`:`arrow-right`:`arrow-down`,s=t(n?`Move forward`:`Move up`),c=t(n?`Move backward`:`Move down`);return d`
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
          flush=${ze(this.flush)}
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
          ${this.nested?d`
                <craft-action-item
                  icon="${this._isRtl()?`arrow-left`:`arrow-right`}"
                  ?disabled="${!this._canMove(`indent`)}"
                  @click="${()=>this._reorder(`indent`)}"
                  data-action="indent"
                  >${t(`Indent`)}</craft-action-item
                >
                <craft-action-item
                  icon="${this._isRtl()?`arrow-right`:`arrow-left`}"
                  ?disabled="${!this._canMove(`outdent`)}"
                  @click="${()=>this._reorder(`outdent`)}"
                  data-action="outdent"
                  >${t(`Outdent`)}</craft-action-item
                >
              `:r}
          ${this.moves.length>0?d`
                <hr class="separator" />
                ${this.moves.map(e=>d`
                    <craft-action-item
                      icon="${ze(e.icon??void 0)}"
                      @click="${()=>this._move(e.value)}"
                      >${e.label}</craft-action-item
                    >
                  `)}
              `:r}
        </div>
      </craft-action-menu>
    `}};Z.styles=[Fo],n([s()],Z.prototype,`label`,void 0),n([s({reflect:!0})],Z.prototype,`position`,void 0),n([s({reflect:!0})],Z.prototype,`orientation`,void 0),n([s({attribute:!1})],Z.prototype,`moves`,void 0),n([s({reflect:!0})],Z.prototype,`variant`,void 0),n([s({reflect:!0})],Z.prototype,`flush`,void 0),n([s({reflect:!0,type:Boolean})],Z.prototype,`disabled`,void 0),n([s({reflect:!0,type:Boolean})],Z.prototype,`nested`,void 0),n([s({attribute:`can-indent`,type:Boolean})],Z.prototype,`canIndent`,void 0),n([s({attribute:`can-outdent`,type:Boolean})],Z.prototype,`canOutdent`,void 0),customElements.get(`craft-reorder-button`)||customElements.define(`craft-reorder-button`,Z);function Io(e){let[t]=e.composedPath();return t instanceof Element&&t.matches(`:focus-visible`)}function Lo(e){let t=document.activeElement;for(;t?.shadowRoot?.activeElement;)t=t.shadowRoot.activeElement;if(!t?.matches(`:focus-visible`))return!1;for(let n=t;n;){if(n===e)return!0;n=n.parentNode??(n instanceof ShadowRoot?n.host:null)}return!1}function Ro(e){let t=e;return(t.disabled===!0||e.getAttribute(`aria-disabled`)===`true`)&&!t.focusableWhenDisabled}function zo({invoker:e,content:t,show:n,hide:r,delayIn:i=0,delayOut:a=300}){let o=Lo(e),s=!1,c=!1,l,u=t=>{let{type:u}=t;if(t.pointerType!==`touch`){if(clearTimeout(l),u===`pointerdown`){c=!0,s=!1,r();return}u===`pointerleave`&&t.currentTarget===e&&(c=!1),!c&&(o=u===`focusout`?!1:o||u===`focusin`&&Io(t),s=u===`pointerleave`?!1:s||u===`pointerenter`,l=(o||s)&&!Ro(e)?setTimeout(n,i):setTimeout(r,a))}},d=[`pointerenter`,`pointerleave`],f=[`pointerenter`,`pointerleave`,`pointerdown`,`focusin`,`focusout`];for(let e of d)t.addEventListener(e,u);for(let t of f)e.addEventListener(t,u);return{reset(){o=!1,s=!1},setContent(e){for(let n of d)t.removeEventListener(n,u),e.addEventListener(n,u);t=e},teardown(){clearTimeout(l);for(let e of d)t.removeEventListener(e,u);for(let t of f)e.removeEventListener(t,u)}}}var Bo=new WeakMap,Vo=new WeakMap,Ho=new WeakMap,Uo=new WeakMap,Wo=new WeakMap,Go=new WeakMap,Q=new WeakSet,Ko=new WeakMap,qo=new WeakMap,Jo=new WeakMap,Yo=new WeakMap,Xo=new WeakMap,Zo=class extends l{constructor(){super(),_(this,Q),this.open=!1,this.placement=`top`,this.trigger=`hover focus`,this.invokerRelation=`description`,x(this,Bo,null),x(this,Vo,ui(`tooltip`)),x(this,Ho,null),x(this,Uo,null),x(this,Wo,null),x(this,Go,!1),x(this,Ko,()=>{v(Go,this)&&this.invoker!==v(Ho,this)?.node&&b(Q,this,is).call(this)}),x(this,qo,()=>{let e=Array.from(this.children).find(e=>e instanceof HTMLElement&&e.slot===`content`);if(!e||!this.isConnected||e===v(Bo,this))return;let t=v(Ho,this);if(t&&b(Q,this,ss).call(this,t.node,t.attribute),v(Bo,this)?.removeEventListener(`keydown`,v(Yo,this),!0),v(Bo,this)?.removeEventListener(`keyup`,v(Xo,this),!0),y(Bo,this,null),y(Vo,this,ui(`tooltip`)),b(Q,this,rs).call(this),!t){v(Go,this)&&b(Q,this,is).call(this);return}b(Q,this,os).call(this,t.node,t.attribute),v(Uo,this)?.setContent(v(Bo,this)),this.reposition()}),x(this,Jo,()=>{let e=!this.open;b(Q,this,cs).call(this,e);let t=v(Ho,this)?.node;e&&this.open&&t&&!nt(t)&&t.focus({preventScroll:!0})}),x(this,Yo,e=>{e.key===`Escape`&&this.open&&e.preventDefault()}),x(this,Xo,e=>{e.key!==`Escape`||!this.open||ot(e)||(at(e),b(Q,this,cs).call(this,!1))})}requestUpdate(e,t,n){super.requestUpdate(e,t,n),e===`open`&&dt(this)}get invoker(){if(this.for){let e=this.getRootNode();return typeof e.getElementById==`function`?e.getElementById(this.for)??void 0:void 0}return Array.from(this.children).find(e=>e instanceof HTMLElement&&e.slot===`invoker`)}async show(){b(Q,this,cs).call(this,!0),await this.updateComplete}reposition(){v(Wo,this)?.update()}async hide(){b(Q,this,cs).call(this,!1),await this.updateComplete}render(){return d`
      <slot name="invoker" @slotchange=${v(Ko,this)}></slot>
      <div
        class="overlay-layer"
        role="none"
        popover=${pt?`manual`:r}
      >
        <div class="overlay-position">
          <slot name="content" @slotchange=${v(qo,this)}></slot>
        </div>
      </div>
    `}connectedCallback(){v(Bo,this)&&v(Bo,this).parentNode!==this&&v(qo,this).call(this),b(Q,this,rs).call(this),super.connectedCallback(),this.hasUpdated&&!v(Go,this)&&b(Q,this,ns).call(this)}disconnectedCallback(){super.disconnectedCallback(),b(Q,this,ds).call(this),this.updateComplete.then(()=>{if(this.isConnected){this.invoker!==v(Ho,this)?.node&&b(Q,this,is).call(this),this.open&&b(Q,this,us).call(this);return}b(Q,this,as).call(this),this.open=!1,y(Go,this,!1)})}firstUpdated(e){super.firstUpdated(e),b(Q,this,ns).call(this)}updated(e){super.updated(e),v(Go,this)&&((e.has(`for`)||e.has(`trigger`)||e.has(`invokerRelation`))&&b(Q,this,is).call(this),e.has(`open`)&&(this.open?b(Q,this,us).call(this):b(Q,this,ds).call(this)),e.has(`placement`)&&v(Wo,this)&&v(Wo,this).setOptions(b(Q,this,ls).call(this)))}};function Qo(){return v(Bo,this)}function $o(){return this.shadowRoot?.querySelector(`.overlay-layer`)??null}function es(){return this.shadowRoot?.querySelector(`.overlay-position`)??null}function ts(){return this.trigger.split(` `)}function ns(){y(Go,this,!0),b(Q,this,is).call(this),this.open&&b(Q,this,us).call(this)}function rs(){var e;if(v(Bo,this)?.isConnected)return;let t=Array.from(this.children).find(e=>e instanceof HTMLElement&&e.slot===`content`);t||(t=document.createElement(`div`),t.slot=`content`,t.append(...Array.from(this.childNodes).filter(e=>!(e instanceof Element)||e.slot===``)),this.append(t)),(e=t).id||(e.id=v(Vo,this)),y(Vo,this,t.id),t.setAttribute(`role`,`tooltip`),y(Bo,this,t),t.addEventListener(`keydown`,v(Yo,this),!0),t.addEventListener(`keyup`,v(Xo,this),!0)}function is(){b(Q,this,as).call(this);let e=this.invoker,t=Qo.call(b(Q,this));if(!e||!t){b(Q,this,ds).call(this);return}let n=this.invokerRelation===`label`?`aria-labelledby`:`aria-describedby`;y(Ho,this,{node:e,attribute:n}),b(Q,this,os).call(this,e,n),e.addEventListener(`keydown`,v(Yo,this),!0),e.addEventListener(`keyup`,v(Xo,this),!0),ts.call(b(Q,this)).includes(`click`)?e.addEventListener(`click`,v(Jo,this)):ts.call(b(Q,this)).includes(`manual`)||y(Uo,this,zo({invoker:e,content:t,delayIn:200,delayOut:0,show:()=>b(Q,this,cs).call(this,!0),hide:()=>b(Q,this,cs).call(this,!1)})),this.open&&(v(Wo,this)?.destroy(),y(Wo,this,null),b(Q,this,us).call(this))}function as(){if(v(Uo,this)?.teardown(),y(Uo,this,null),!v(Ho,this))return;let{node:e,attribute:t}=v(Ho,this);e.removeEventListener(`keydown`,v(Yo,this),!0),e.removeEventListener(`keyup`,v(Xo,this),!0),e.removeEventListener(`click`,v(Jo,this)),b(Q,this,ss).call(this,e,t),y(Ho,this,null)}function os(e,t){let n=(e.getAttribute(t)??``).split(/\s+/);n.includes(v(Vo,this))||e.setAttribute(t,[...n,v(Vo,this)].filter(Boolean).join(` `))}function ss(e,t){let n=(e.getAttribute(t)??``).split(/\s+/).filter(e=>e&&e!==v(Vo,this));n.length?e.setAttribute(t,n.join(` `)):e.removeAttribute(t)}function cs(e){if(e===this.open)return;let t=new CustomEvent(e?`craft-before-show`:`craft-before-hide`,{cancelable:!0});this.dispatchEvent(t),!t.defaultPrevented&&(this.open=e)}function ls(){return{strategy:`fixed`,placement:gt(this.placement,this),modifiers:_t(4)}}function us(){let e=$o.call(b(Q,this)),t=es.call(b(Q,this)),n=v(Ho,this)?.node;!this.isConnected||!e||!t||!n||v(Wo,this)||(mt(e),y(Wo,this,dr(n,t,b(Q,this,ls).call(this))),v(Wo,this).forceUpdate())}function ds(){let e=$o.call(b(Q,this));v(Wo,this)?.destroy(),y(Wo,this,null),v(Uo,this)?.reset(),e&&ht(e)}Zo.styles=[vt,i`
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
        white-space: normal;
      }
    `],n([s({type:Boolean,reflect:!0})],Zo.prototype,`open`,void 0),n([s({reflect:!0})],Zo.prototype,`for`,void 0),n([s({reflect:!0})],Zo.prototype,`placement`,void 0),n([s({reflect:!0})],Zo.prototype,`trigger`,void 0),n([s({attribute:`invoker-relation`})],Zo.prototype,`invokerRelation`,void 0),customElements.get(`craft-tooltip`)||customElements.define(`craft-tooltip`,Zo);var fs=new WeakMap,ps=new WeakMap,ms=new WeakMap,hs=new WeakSet,gs=class extends l{constructor(...e){super(...e),_(this,hs),this.label=t(`More Info`),this.icon=`circle-info`,this.disabled=!1,x(this,fs,new AbortController),x(this,ps,null),x(this,ms,`info-icon-${Math.random().toString(36).slice(2,8)}`)}connectedCallback(){super.connectedCallback(),v(fs,this).signal.aborted&&y(fs,this,new AbortController);let{signal:e}=v(fs,this);this.addEventListener(`craft-show`,()=>{vs._&&vs._!==this&&vs._.renderRoot.querySelector(`craft-tooltip`)?.hide(),vs._=this,b(hs,this,_s).call(this)},{signal:e}),this.addEventListener(`craft-after-hide`,()=>{vs._===this&&(vs._=null),v(ps,this)?.abort(),y(ps,this,null)},{signal:e})}disconnectedCallback(){vs._===this&&(vs._=null),v(ps,this)?.abort(),y(ps,this,null),v(fs,this).abort(),super.disconnectedCallback()}render(){return d`
      <div class="cp-info-icon">
        <craft-button
          type="button"
          icon
          size="zero"
          variant="plain"
          id="${v(ms,this)}"
        >
          <craft-icon name="${this.icon}" label="${this.label}"></craft-icon>
        </craft-button>

        <craft-tooltip trigger="click" for="${v(ms,this)}"
          ><slot></slot
        ></craft-tooltip>
      </div>
    `}};function _s(){v(ps,this)?.abort(),y(ps,this,new AbortController),document.addEventListener(`pointerdown`,e=>{e.composedPath().includes(this)||this.renderRoot.querySelector(`craft-tooltip`)?.hide()},{capture:!0,signal:v(ps,this).signal})}gs.styles=i`
    :host {
      display: inline-flex;
    }

    craft-button {
      min-inline-size: var(--c-size-touch-target-sm);
      min-block-size: var(--c-size-touch-target-sm);
      cursor: help;
    }
  `;var vs={_:null};n([s()],gs.prototype,`label`,void 0),n([s()],gs.prototype,`icon`,void 0),n([s({type:Boolean,reflect:!0})],gs.prototype,`disabled`,void 0),n([p(`craft-tooltip`)],gs.prototype,`tooltip`,void 0),customElements.get(`craft-info-icon`)||customElements.define(`craft-info-icon`,gs);var ys=i`
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
    inset-inline-start: calc(
      var(--c-field-indicator-inset, var(--c-spacing-lg)) * -1
    );
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
    --_heading-gap: var(--c-spacing);
    --_label-text-bearing: calc(var(--c-spacing) * 0.375);
    position: relative;
    display: flex;
    flex-wrap: wrap;
    gap: var(--_heading-gap);
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

  .field-actions--beside-label {
    position: static;
  }

  .field-actions--after-text {
    margin-inline-start: var(--_label-text-bearing);
  }

  ::slotted([slot='label']) {
    display: flex;
    flex-wrap: wrap;
    gap: var(--_heading-gap);
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
`,$=class extends ki(l){constructor(...e){super(...e),this.required=!1,this.translatable=!1,this.translationDescription=t(`This field is translatable.`),this.fieldset=!1,this.hasErrors=!1,this.instructionsPosition=`before`,this.instructionsSrOnly=!1,this.__hasSlot=new wi(this,`heading-prefix`,`label-extra`,`actions`,`heading-suffix`),this.__lightDomObserver=new MutationObserver(()=>this.__onLightDomChanged()),this.__controlWidthObserver=new MutationObserver(()=>this.__syncControlWidth()),this.__enhancedInput=null}connectedCallback(){super.connectedCallback(),this.__enhancedInput=this._control??null,this.__lightDomObserver.observe(this,{childList:!0}),this.__controlWidthObserver.observe(this,{attributeFilter:[`width`],subtree:!0}),this.__syncHasErrors(),this.__syncHasMaxlength(),this.__syncControlWidth(),this.updateComplete.then(()=>{this._labelNode&&this.addToAriaLabelledBy(this._labelNode),this.__wireDescribedBy()})}__syncHasMaxlength(){let e=this.querySelector(`:scope > [slot="input"]`);this.toggleAttribute(`has-maxlength`,!!(e?.hasAttribute(`maxlength`)&&!e.matches(`textarea, craft-textarea`)))}__syncControlWidth(){if(this.width!==void 0)return;let e=this.querySelector(`:scope > [slot="input"]`)?.getAttribute(`width`);(e===`full`||e===`auto`)&&(this.width=e)}disconnectedCallback(){super.disconnectedCallback(),this.__lightDomObserver.disconnect(),this.__controlWidthObserver.disconnect()}updated(e){super.updated(e),e.has(`helpText`)&&this.__wireDescribedBy(),e.has(`fieldset`)&&this.__syncFieldsetSemantics(),(e.has(`label`)||e.has(`required`)||e.has(`translatable`)||e.has(`translationDescription`))&&this.__syncLabelDecorations()}get control(){return this._control??void 0}get _resolvedOrientation(){return this.orientation?this.orientation:(this.closest(`[dir]`)?.getAttribute(`dir`)??document.documentElement.getAttribute(`dir`))?.toLowerCase()===`rtl`?`rtl`:`ltr`}_enhanceLightDomA11y(){super._enhanceLightDomA11y(),this.__wireDescribedBy(),this.__syncFieldsetSemantics()}addToAriaLabelledBy(e,t={}){let n=this.__formControlTarget();if(n){n.addToAriaLabelledBy(e,{...t,idPrefix:`field-${t.idPrefix??`label`}`});return}if(this.fieldset||!this.__hasNativeLabelTarget()){this.__addGroupAriaReference(`aria-labelledby`,e,`label`);return}super.addToAriaLabelledBy(e,t)}addToAriaDescribedBy(e,t={}){let n=this.__formControlTarget();if(n){n.addToAriaDescribedBy(e,{...t,idPrefix:`field-${t.idPrefix??`description`}`});return}if(this.fieldset||!this.__hasNativeLabelTarget()){this.__addGroupAriaReference(`aria-describedby`,e,t.idPrefix??`description`);return}super.addToAriaDescribedBy(e,t)}removeFromAriaLabelledBy(e){let t=this.__formControlTarget();if(t){t.removeFromAriaLabelledBy(e);return}if(this.fieldset||!this.__hasNativeLabelTarget()){this.__removeGroupAriaReference(`aria-labelledby`,e);return}super.removeFromAriaLabelledBy(e)}removeFromAriaDescribedBy(e){let t=this.__formControlTarget();if(t){t.removeFromAriaDescribedBy(e);return}if(this.fieldset||!this.__hasNativeLabelTarget()){this.__removeGroupAriaReference(`aria-describedby`,e);return}super.removeFromAriaDescribedBy(e)}render(){return d`
      <div
        class="${I({"form-field":!0,[`form-field--${this.status}`]:!!this.status})}"
      >
        ${this._statusBadgeTemplate()}
        <div class="form-field__group-one">${this._groupOneTemplate()}</div>
        <div class="form-field__group-two">${this._groupTwoTemplate()}</div>
      </div>
    `}_groupOneTemplate(){return d`
      ${this._labelTemplate()}
      ${this.instructionsPosition===`before`?this._helpTextTemplate():r}
    `}_groupTwoTemplate(){return d`
      ${this._inputGroupTemplate()}
      ${this.instructionsPosition===`after`?this._helpTextTemplate():r}
      ${this._feedbackTemplate()}
    `}_labelTemplate(){let e=this.__hasLabel,n=this.__hasSlot.test(`label-extra`),i=this.__hasSlot.test(`actions`),a=n||i||this.readOnly&&!this.labelSrOnly||this.__hasSlot.test(`label-badge`)||this.__hasSlot.test(`heading-prefix`)||this.__hasSlot.test(`heading-suffix`);if(!e&&!a&&!this.readOnly)return d``;let o=i&&e&&!this.labelSrOnly,s=i?d`
          <div
            class=${I({"field-actions":!0,"field-actions--beside-label":o,"field-actions--after-text":o&&!this.__hasLabelDecorations})}
            part="actions"
            role="group"
            aria-label=${t(`Field actions`)}
          >
            <slot name="actions"></slot>
          </div>
        `:d`<slot name="actions"></slot>`,c=r;return e&&(c=this.labelSrOnly&&a?d`<span class="cp-visually-hidden"
              ><slot name="label"></slot
            ></span>`:d`<slot name="label"></slot>`),d`
      <div
        class=${I({"form-field__label":!0,"cp-visually-hidden":this.labelSrOnly&&!a})}
      >
        <slot name="heading-prefix"></slot>
        ${c}
        ${this.readOnly?d`<span
              class=${I({"read-only-badge":!0,"cp-visually-hidden":this.labelSrOnly&&a})}
              >${t(`Read Only`)}</span
            >`:r}
        <slot name="label-badge"></slot>
        ${o?s:r}
        ${n||i&&!o?d`<div class="flex-grow"></div>`:r}
        <slot name="label-extra"></slot>
        ${o?r:s}
        <slot name="heading-suffix"></slot>
      </div>
    `}_helpTextTemplate(){return this.__hasHelpText?this.instructionsSrOnly?d`<div class="cp-visually-hidden">${super._helpTextTemplate()}</div>`:super._helpTextTemplate():d``}_inputGroupTemplate(){return d`
      <div class=${I({"input-group":!0,input:!0,[this._resolvedOrientation]:!0,errors:this.hasErrors,disabled:this.disabled})}>
        ${this._inputGroupBeforeTemplate()}
        <div class="input-group__container">
          ${this._inputGroupPrefixTemplate()} ${this._inputGroupInputTemplate()}
          ${this._inputGroupSuffixTemplate()}
        </div>
        ${this._inputGroupAfterTemplate()}
      </div>
    `}_statusBadgeTemplate(){return this.status?d`
      <div
        class="form-field__status-indicator"
        title=${ze(this.statusLabel)}
        aria-hidden="true"
      >
        <craft-visually-hidden>${this.statusLabel}</craft-visually-hidden>
      </div>
    `:r}get __hasLabel(){return this.label.trim()!==``}get __hasHelpText(){return this.helpText.trim()!==``}__lightChild(e){return Array.from(this.children).find(t=>t.slot===e)}__onLightDomChanged(){this.__enhanceSwappedInput(),this.__wireDescribedBy(),this.__syncFieldsetSemantics(),this.__syncHasErrors(),this.__syncLabelDecorations(),this.__syncHasMaxlength(),this.__syncControlWidth(),this.requestUpdate()}__wireDescribedBy(){let e=Array.from(this.children).filter(e=>e.slot===`after`&&`addToAriaDescribedBy`in e);for(let t of[`help-text`,`feedback`]){let n=this.__lightChild(t);if(n){if(t===`help-text`&&n.textContent.trim()===``&&n.childElementCount===0){this.removeFromAriaDescribedBy(n);for(let t of e)t.removeFromAriaDescribedBy(n);continue}this.addToAriaDescribedBy(n,{idPrefix:t});for(let r of e)r.addToAriaDescribedBy(n,{idPrefix:`field-${t}`})}}}__enhanceSwappedInput(){let e=this._control;if(!(!e||e===this.__enhancedInput)){if(this.__enhancedInput=e,e.classList.add(`form-control`),e.id||=this._inputId,this.__formControlTarget()){this._labelNode&&this.addToAriaLabelledBy(this._labelNode);return}this._reflectAriaReferences()}}__formControlTarget(){let e=this._control;return e&&`addToAriaLabelledBy`in e&&`addToAriaDescribedBy`in e?e:void 0}__hasNativeLabelTarget(){return!!this._control?.matches(`button, input, meter, output, progress, select, textarea`)}__addGroupAriaReference(e,t,n){t.id||=`${n}-${this._inputId}`;let r=new Set((this.getAttribute(e)??``).split(/\s+/).filter(Boolean));r.add(t.id),this.setAttribute(e,[...r].join(` `))}__removeGroupAriaReference(e,t){let n=(this.getAttribute(e)??``).split(/\s+/).filter(e=>e&&e!==t.id);n.length?this.setAttribute(e,n.join(` `)):this.removeAttribute(e)}__syncHasErrors(){let e=this.__lightChild(`feedback`);e&&(this.hasErrors=!!(e.childElementCount||e.textContent?.trim()))}__syncFieldsetSemantics(){let e=this._labelNode,t=this.__formControlTarget();this.fieldset||!t&&!this.__hasNativeLabelTarget()?(this.setAttribute(`role`,`group`),e&&(e.id||=`label-${this._inputId}`,this.setAttribute(`aria-labelledby`,e.id),e.removeAttribute(`for`))):(this.getAttribute(`role`)===`group`&&this.removeAttribute(`role`),this.removeAttribute(`aria-labelledby`),e&&t?e.removeAttribute(`for`):e&&this._control&&e.setAttribute(`for`,this._control.id||this._inputId))}get __hasLabelDecorations(){return!!this.label&&(this.required||this.translatable)}__syncLabelDecorations(){let e=this._labelNode;if(!e)return;for(let t of e.querySelectorAll(`[data-craft-field-decoration]`))t.remove();if(!this.label||!this.__hasLabelDecorations)return;let n=document.createElement(`span`);if(n.setAttribute(`data-craft-field-decoration`,``),Object.assign(n.style,{display:`inline-flex`,alignItems:`center`,gap:`var(--_heading-gap)`,marginInlineStart:`var(--_label-text-bearing)`}),e.append(n),this.required){let e=document.createElement(`craft-visually-hidden`);e.textContent=t(`Required`),e.setAttribute(`data-craft-field-decoration`,``);let r=document.createElement(`craft-icon`);r.setAttribute(`name`,`asterisk`),r.setAttribute(`data-craft-field-decoration`,``),r.setAttribute(`data-color`,`danger`),r.setAttribute(`aria-hidden`,`true`),n.append(e,r)}if(this.translatable){let e=document.createElement(`craft-info-icon`);e.icon=`language`,e.label=this.translationDescription,e.textContent=this.translationDescription,e.className=`t9n-indicator prevent-autofocus`,e.setAttribute(`data-craft-field-decoration`,``),e.addEventListener(`click`,e=>e.preventDefault()),n.append(e)}}};$.styles=[M,ci,ys],n([s({type:Boolean,reflect:!0})],$.prototype,`required`,void 0),n([s({type:Boolean,reflect:!0})],$.prototype,`translatable`,void 0),n([s({attribute:`translation-description`})],$.prototype,`translationDescription`,void 0),n([s({type:Boolean,reflect:!0})],$.prototype,`fieldset`,void 0),n([s({reflect:!0})],$.prototype,`status`,void 0),n([s({attribute:`status-label`})],$.prototype,`statusLabel`,void 0),n([s({reflect:!0})],$.prototype,`orientation`,void 0),n([s({type:Boolean,reflect:!0,attribute:`has-errors`})],$.prototype,`hasErrors`,void 0),n([s({attribute:`instructions-position`})],$.prototype,`instructionsPosition`,void 0),n([s({type:Boolean,reflect:!0,attribute:`instructions-sr-only`})],$.prototype,`instructionsSrOnly`,void 0),n([s({type:String,reflect:!0})],$.prototype,`width`,void 0),customElements.get(`craft-field`)||customElements.define(`craft-field`,$);export{D as $,tt as A,me as B,mt as C,at as D,ct as E,Ee as F,ne as G,oe as H,Ae as I,M as J,N as K,Ne as L,ze as M,Ie as N,et as O,De as P,O as Q,I as R,vt as S,_t as T,re as U,fe as V,ie as W,j as X,A as Y,ee as Z,oi as _,ji as a,dr as b,Ti as c,_i as d,w as et,mi as f,si as g,ci as h,G as i,$e as j,nt as k,ki as l,ui as m,Va as n,Mi as o,di as p,P as q,Pi as r,Ai as s,X as t,C as tt,xi as u,li as v,gt as w,ht as x,ai as y,de as z};