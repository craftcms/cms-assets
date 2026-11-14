import{n as e}from"./translate.ts-DW16fAdu.js";import{t}from"./decorate-B3KLIx2E-B3KLIx2E.js";import{a as n,d as r,f as i,i as a,n as o,o as s,r as c,t as l,u}from"./decorators-B_wqftM0.js";import{n as d,t as f}from"./query-Df4-SAIv.js";import{a as p,i as m,t as h}from"./external-links.ts-D9CFywYE.js";import{a as g,i as _,n as v,o as y,r as b}from"./Config.ts-CMTyoefP.js";import{r as x}from"./actionClient-DlCWcHgA-BOe1VjYK.js";function S(e){return(t,n)=>{let{slot:r,selector:i}=e??{},a=`slot`+(r?`[name=${r}]`:`:not([name])`);return d(t,n,{get(){let t=(this.renderRoot?.querySelector(a))?.assignedElements(e)??[];return i===void 0?t:t.filter((e=>e.matches(i)))}})}}var C={Idle:`idle`,Loading:`loading`,Success:`success`,Error:`error`},w=r`
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
`,T=e=>{class n extends e{constructor(...e){super(...e),this.shortcut=null}get shortcutKeys(){let e=this.shortcut;if(typeof e==`string`&&e.trim().startsWith(`{`))try{e=JSON.parse(e)}catch{}return e?typeof e==`string`?{key:e,alt:!1,shift:!1}:{key:e.key,alt:e.alt??!1,shift:e.shift??!1}:null}get shortcutAriaKeys(){let e=this.shortcutKeys;return e?[/mac|iphone|ipad|ipod/i.test(navigator.platform)?`Meta`:`Control`,...e.alt?[`Alt`]:[],...e.shift?[`Shift`]:[],e.key.length===1?e.key.toUpperCase():e.key].join(`+`):null}}return t([o()],n.prototype,`shortcut`,void 0),n},E=r`
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
`;r`
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
`;var D=r`
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
`,O={Neutral:`neutral`,Success:`success`,Warning:`warning`,Danger:`danger`,Info:`info`},k=Object.values(O),A=class{constructor(e,t={}){this.host=e,this.options=t,this.observer=new MutationObserver(()=>{this.options.onChange?.(),this.host.requestUpdate()}),e.addController(this)}hostConnected(){this.options.onChange?.(),this.observer.observe(this.host,{childList:!0,subtree:!0,characterData:this.options.characterData??!1,attributes:!0,attributeFilter:[`slot`,...this.options.attributeFilter??[]]})}hostDisconnected(){this.observer.disconnect()}};function j(e,...t){return Array.from(e.children).some(e=>t.includes(e.slot))}var M=r`
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
`,N=`kbd {
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
`,P=class extends c{constructor(){super(),this.alt=!1,this.shift=!1,this.os=`Unknown`,this.os=this.detectOS()}connectedCallback(){super.connectedCallback(),this.os===`Unknown`&&(this.os=this.detectOS())}detectOS(){let e=navigator.platform.toLowerCase();return e.includes(`mac`)||/iphone|ipad|ipod/.test(e)?`Mac`:e.includes(`win`)?`Windows`:e.includes(`linux`)?`Linux`:`Unknown`}modifierKeys(){return this.os===`Mac`?[...this.alt?[{label:`⌥`,name:`Option`}]:[],...this.shift?[{label:`⇧`,name:`Shift`}]:[],{label:`⌘`,name:`Command`}]:[`Ctrl`,...this.alt?[`Alt`]:[],...this.shift?[`Shift`]:[]].map(e=>({label:e,name:e}))}render(){return u`<span class="shortcut"
      >${this.modifierKeys().map(e=>e.label===e.name?u`<kbd class="shortcut__key">${e.label}</kbd>`:u`<kbd class="shortcut__key"
              ><span aria-hidden="true">${e.label}</span
              ><span class="cp-visually-hidden">${e.name}</span></kbd
            >`)}<kbd class="shortcut__key"><slot></slot></kbd
    ></span>`}};P.styles=[M,i(N),r`
      :host {
        display: inline-flex;
      }

      .shortcut {
        display: inline-flex;
        gap: 0.25em;
      }
    `],t([o({type:Boolean})],P.prototype,`alt`,void 0),t([o({type:Boolean})],P.prototype,`shift`,void 0),t([o()],P.prototype,`os`,void 0),customElements.get(`craft-shortcut`)||customElements.define(`craft-shortcut`,P);var F={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ee=e=>(...t)=>({_$litDirective$:e,values:t}),te=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},ne=class extends te{constructor(e){if(super(e),this.it=n,e.type!==F.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===n||e==null)return this._t=void 0,this.it=e;if(e===s)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};ne.directiveName=`unsafeHTML`,ne.resultType=1;var re=ee(ne),ie=class extends ne{};ie.directiveName=`unsafeSVG`,ie.resultType=2;var ae=ee(ie),oe=new Map;async function se(e,t){try{let r=await fetch(e,{mode:`cors`});if(!r.ok)return n;let i=document.createElement(`div`);i.innerHTML=await r.text();let a=i.firstElementChild;if(a?.tagName?.toLowerCase()!==`svg`)return n;if(a.setAttribute(`fill`,`currentColor`),a.setAttribute(`part`,`svg`),t){let e=a.getAttribute(`style`);a.setAttribute(`style`,e?`${e}; scale: -1 1`:`scale: -1 1`)}return u`${ae(a.outerHTML)}`}catch{return n}}function ce(e,t=`classic`,n=`regular`,r=`/vendor/craft/icons`){let i=`solid`,a=n,o=e.endsWith(`.svg`)?e.split(`.svg`)[0]:e;if(e.includes(`/`)){let[t,...n]=e.split(`/`);a=t??a,o=n.join(`/`)}return a===`thin`?i=`thin`:a===`light`?i=`light`:a===`regular`?i=`regular`:a===`solid`&&(i=`solid`),(t===`brands`||a===`brands`)&&(i=`brands`),(t===`custom-icons`||a===`custom-icons`)&&(i=`custom-icons`),`${r}/${i}/${o}.svg`}function le(e){return(t,r,i)=>{let a=e(t,r,i);if(a===null)return n;let{url:o,flip:s=!1}=typeof a==`string`?{url:a}:a,c=s?`${o}#flip`:o,l=oe.get(c);return l||(l=se(o,s),oe.set(c,l)),l.then(e=>(e===n&&oe.delete(c),e))}}var ue=le(ce);function de(e){ue=e}function fe(e,t=`classic`,n=`regular`){return Promise.resolve(ue(e,t,n))}var pe=new WeakSet,me=class extends c{constructor(...e){super(...e),g(this,pe),this.appearance=`plain`,this._svg=n,this._hasSlottedContent=!1}connectedCallback(){super.connectedCallback(),this.appearance===`badge`&&!this.getAttribute(`data-color`)&&this.setAttribute(`data-color`,`warning`),this._hasSlottedContent=this.childElementCount>0}firstUpdated(){y(pe,this,_e).call(this)}updated(e){super.updated(e),(e.has(`name`)||e.has(`family`)||e.has(`variant`))&&y(pe,this,ge).call(this),e.has(`label`)&&this.hasUpdated&&y(pe,this,_e).call(this)}_handleSlotChange(e){let t=e.target;this._hasSlottedContent=t.assignedElements({flatten:!0}).length>0}render(){return u`
      <slot @slotchange=${this._handleSlotChange}></slot>
      ${this._hasSlottedContent?n:this._svg}
    `}static get styles(){return[r`
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
      `]}};function he(){return this.name?{name:this.name,family:this.family??`classic`,variant:this.variant??`solid`}:null}async function ge(){let e=y(pe,this,he).call(this);if(e===null){this._svg=n;return}let t;try{t=await fe(e.name,e.family,e.variant)}catch(e){console.error(e),t=n}let r=y(pe,this,he).call(this);r!==null&&e.name===r.name&&e.family===r.family&&e.variant===r.variant&&(this._svg=t)}function _e(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}t([o({reflect:!0})],me.prototype,`name`,void 0),t([o({reflect:!0})],me.prototype,`family`,void 0),t([o({reflect:!0})],me.prototype,`variant`,void 0),t([o()],me.prototype,`label`,void 0),t([o({reflect:!0})],me.prototype,`appearance`,void 0),t([l()],me.prototype,`_svg`,void 0),t([l()],me.prototype,`_hasSlottedContent`,void 0),customElements.get(`craft-icon`)||customElements.define(`craft-icon`,me);var ve=class extends c{constructor(...e){super(...e),this.debug=!1}render(){return u`<slot></slot>`}};ve.styles=r`
    :host(:not([debug])) {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
      white-space: nowrap;
    }
  `,t([o({type:Boolean,reflect:!0})],ve.prototype,`debug`,void 0),customElements.get(`craft-visually-hidden`)||customElements.define(`craft-visually-hidden`,ve);var I=ee(class extends te{constructor(e){if(super(e),e.type!==F.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter((t=>e[t])).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter((e=>e!==``))));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return s}}),ye=r`
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
`,be=class extends c{constructor(...e){super(...e),this.visible=!0,this.label=``}show(){this.visible=!0,this.dispatchEvent(new CustomEvent(`craft-show`))}hide(){this.visible=!1,this.dispatchEvent(new CustomEvent(`craft-hide`))}focus(){this.wrapper?.focus()}render(){return u`
      <div
        tabindex="-1"
        class="${I({wrapper:!0,hidden:!this.visible})}"
      >
        <div class="spinner"></div>
        <span class="cp-visually-hidden"><slot>${this.label}</slot></span>
      </div>
    `}};be.styles=[M,ye],t([o({reflect:!0,type:Boolean})],be.prototype,`visible`,void 0),t([o()],be.prototype,`label`,void 0),t([f(`.wrapper`)],be.prototype,`wrapper`,void 0),customElements.get(`craft-spinner`)||customElements.define(`craft-spinner`,be);var xe=`craft-action-menu, craft-popover`,Se=`data-focus-key`;function Ce(e){return!(e instanceof HTMLElement)||!e.isConnected||e===document.body||we(e,`[inert]`)||e.matches(`:disabled`)?!1:typeof e.checkVisibility==`function`?e.checkVisibility({visibilityProperty:!0}):!we(e,`[hidden]`)}function we(e,t){let n=e;for(;n;){let e=n.closest(t);if(e)return e;let r=n.getRootNode();n=r instanceof ShadowRoot?r.host:null}return null}function Te(e){let t=e.anchor;if(t instanceof HTMLElement)return t;let n=t?.contextElement;if(n instanceof HTMLElement)return n;let r=e.getAttribute(`for`);if(r){let t=e.getRootNode();return typeof t.getElementById==`function`?t.getElementById(r):null}return e.querySelector(`:scope > [slot="invoker"]`)}function Ee(e){let t=[],n=e,r=we(n,xe);for(;r;)Te(r)?.contains(n)||t.push(r),n=r,r=r.parentElement?we(r.parentElement,xe):null;return t}function De(e){let[t]=Ee(e);return t?Te(t):null}function Oe(e){return we(e,`[data-focus-scope]`)?.getAttribute(`data-focus-scope`)??null}function ke(e,t){let n=xe.split(`, `).map(e=>`${e}[${Se}]`).join(`, `);return[...document.querySelectorAll(n)].filter(n=>n.getAttribute(`data-focus-key`)===e&&Oe(n)===t)}function Ae(e){if(!e)return()=>null;let t=Ee(e).map(e=>({menu:e,key:e.getAttribute(`data-focus-key`)||null,scopeKey:Oe(e)}));return()=>{if(Ce(e))return e;for(let{menu:e}of t){let t=e.isConnected?Te(e):null;if(Ce(t))return t}for(let{key:e,scopeKey:n}of t)if(e!==null)for(let t of ke(e,n)){let e=Te(t);if(Ce(e))return e}return null}}function je(e){if(typeof e!=`string`)return e;try{return JSON.parse(e)}catch{return null}}function Me(e,{trigger:t,sourceEvent:n}){let r={...e??{},...n?{sourceEvent:n}:{}};if(t){r.trigger=t;let e;Object.defineProperty(r,"returnFocus",{enumerable:!0,get:()=>e??=Ae(t)})}return r}async function Ne(e,t={}){switch(e.type){case`clipboard`:await navigator.clipboard.writeText(e.value);break;case`http`:{if(e.confirm&&!confirm(e.confirm)||e.requireElevatedSession&&!await Pe())return;let t=await fetch(e.url,{method:e.method||`POST`,headers:{"Content-Type":`application/json`,Accept:`application/json`},body:e.body?JSON.stringify(e.body):void 0}),n=await t.json().catch(()=>({}));if(!t.ok)throw Error(n.message??`Request failed`);for(let e of Array.isArray(n.messages)?n.messages:[])window.dispatchEvent(new CustomEvent(`craft-message`,{detail:e}));typeof n.redirect==`string`&&n.redirect&&Fe(n.redirect);break}case`event`:if(e.confirm&&!confirm(e.confirm))return;window.dispatchEvent(new CustomEvent(e.name,{detail:Me(e.detail,t)}));break;case`download`:{if(e.confirm&&!confirm(e.confirm)||e.requireElevatedSession&&!await Pe())return;if(e.method&&e.method!==`GET`){let t=await x.request({url:e.url,method:e.method,data:e.body,responseType:`blob`}),n=String(t.headers[`content-disposition`]??``),r=/filename\*?=(?:UTF-8'')?"?([^";]+)"?/i.exec(n),i=e.filename??(r?.[1]?decodeURIComponent(r[1]):`download`),a=URL.createObjectURL(t.data),o=document.createElement(`a`);o.href=a,o.download=i,document.body.appendChild(o),o.click(),o.remove(),URL.revokeObjectURL(a);break}let t=document.createElement(`a`);t.href=e.url,t.download=e.filename??``,t.click();break}default:throw Error(`Unknown action type: ${e.type}`)}}async function Pe(){let e={};return window.dispatchEvent(new CustomEvent(`craft:require-elevated-session`,{detail:e})),e.confirmed??!0}function Fe(e){window.dispatchEvent(new CustomEvent(`action:redirect`,{cancelable:!0,detail:{url:e}}))&&window.location.assign(e)}var Ie=e=>e??n,Le=r`
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
`,Re=[`a[href]`,`button`,`input`,`select`,`textarea`,`[tabindex]:not([tabindex="-1"])`,`craft-button`,`craft-action-item`,`craft-checkbox`,`craft-switch`].join(`, `),ze=new WeakSet,L=class extends T(c){constructor(...e){super(...e),g(this,ze),this.icon=null,this.iconColor=null,this.href=null,this.target=null,this.rel=null,this.disabled=!1,this.variant=O.Neutral,this.checked=!1,this.active=!1,this.current=!1,this.type=`button`,this.action=null,this.feedback=null,this.feedbackDuration=1e3,this.state=C.Idle,this.feedbackMessage=null,this._resetStateTimeout=null,this._blockDisabledClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this._hasNestedControl=!1,this._lightDom=new A(this,{onChange:()=>this._checkSuffixForControls()})}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,this._blockDisabledClick,{capture:!0}),this.addEventListener(`click`,this)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this._blockDisabledClick,{capture:!0}),this.removeEventListener(`click`,this),this._clearResetStateTimeout()}focus(e){let t=this.shadowRoot?.querySelector(`[part="control"]`);t?t.focus(e):super.focus(e)}_clearResetStateTimeout(){this._resetStateTimeout!==null&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=null)}setState(e,t={}){this.state=e,this.feedbackMessage=t.message??null,this.dispatchEvent(new CustomEvent(`craft-state-change`,{bubbles:!0,composed:!0,detail:{state:e,actionType:je(this.action)?.type,...t}}))}async handleEvent(e){if(this.disabled){e.preventDefault();return}let t=je(this.action);if(e.type===`click`&&t){t.type===`http`&&this.setState(C.Loading);try{await Ne(t,{trigger:this,sourceEvent:e}),this.setState(C.Success,this.feedback?.success)}catch(e){this.setState(C.Error,{message:e.message,...this.feedback?.error||{}})}finally{this._clearResetStateTimeout(),this._resetStateTimeout=setTimeout(()=>{this._resetStateTimeout=null,this.setState(C.Idle)},this.feedbackDuration)}}}renderCheckbox(){return u`<span class="action-item__check">
      <slot name="checkmark">
        ${this.checked?u`<craft-icon name="check"></craft-icon>`:n}
      </slot>
    </span>`}renderIcon(){switch(this.state){case C.Loading:return u`<craft-spinner style="--size: 0.8em"></craft-spinner>`;case C.Success:return u`<craft-icon
          name="check"
          style="color: var(--c-color-success-on-normal)"
        ></craft-icon>`;case C.Error:return u`<craft-icon
          name="xmark-large"
          style="color: var(--c-color-danger-on-normal)"
        ></craft-icon>`;default:return u`
          <slot name="icon">
            ${this.icon?u`<craft-icon
                  name="${this.icon}"
                  style="${this.iconColor?`color: ${y(ze,this,Be).call(this,this.iconColor)}`:n}"
                ></craft-icon>`:n}
          </slot>
        `}}renderPrefix(){let e=!!this.querySelector(`[slot="icon"]`)||!!this.icon,t=!!this.querySelector(`[slot="prefix"]`);return u`
      ${this.type===`checkbox`?this.renderCheckbox():n}
      ${t?u`<slot name="prefix" part="prefix"></slot>`:n}
      ${e?u`<div class="action-item__icon">${this.renderIcon()}</div>`:n}
    `}_checkSuffixForControls(){this._hasNestedControl=Array.from(this.children).some(e=>e.slot===`suffix`&&e.matches(Re))}renderBody(){return u`
      ${this.renderPrefix()}

      <span class="action-item__label">
        ${this.feedbackMessage?this.feedbackMessage:u`<slot></slot>`}
      </span>

      <span
        class="${I({"action-item__suffix":!0,"a11y-error":this._hasNestedControl})}"
      >
        <slot name="suffix"></slot>
        ${this.shortcutKeys?u`<craft-shortcut
              ?alt="${this.shortcutKeys.alt}"
              ?shift="${this.shortcutKeys.shift}"
              >${this.shortcutKeys.key}</craft-shortcut
            >`:n}
      </span>
    `}render(){let e=h(this.href,this.target);return this.href?u`
          <a
            part="control"
            class="${I({"action-item":!0,"action-item--checkbox":this.type===`checkbox`})}"
            href="${this.href}"
            aria-current="${this.current?`true`:n}"
            aria-disabled="${this.disabled?`true`:n}"
            aria-keyshortcuts="${this.shortcutAriaKeys??n}"
            target="${Ie(e??void 0)}"
            rel="${Ie(this.rel??(e===`_blank`?`noopener`:null)??void 0)}"
          >
            ${this.renderBody()}${!this.target&&e?u`<span class="cp-visually-hidden">${p()}</span>`:n}
          </a>
        `:u`
          <button
            type="button"
            part="control"
            class="${I({"action-item":!0,"action-item--checkbox":this.type===`checkbox`})}"
            aria-current="${this.current?`true`:n}"
            aria-keyshortcuts="${this.shortcutAriaKeys??n}"
            aria-disabled="${this.disabled?`true`:n}"
          >
            ${this.renderBody()}
          </button>
        `}};function Be(e){return e.startsWith(`--`)?`var(${e}, currentColor)`:e===`black`||e===`white`?`var(--c-text-default)`:`var(--c-color-${e}-fill-loud, currentColor)`}L.styles=[E,D,w,M,Le],L.shadowRootOptions={...c.shadowRootOptions,delegatesFocus:!0},t([o()],L.prototype,`icon`,void 0),t([o({attribute:`icon-color`})],L.prototype,`iconColor`,void 0),t([o()],L.prototype,`href`,void 0),t([o()],L.prototype,`target`,void 0),t([o()],L.prototype,`rel`,void 0),t([o({type:Boolean})],L.prototype,`disabled`,void 0),t([o({reflect:!0})],L.prototype,`variant`,void 0),t([o({type:Boolean})],L.prototype,`checked`,void 0),t([o({type:Boolean,reflect:!0})],L.prototype,`active`,void 0),t([o({type:Boolean})],L.prototype,`current`,void 0),t([o()],L.prototype,`type`,void 0),t([o({type:Object})],L.prototype,`action`,void 0),t([o({type:Object})],L.prototype,`feedback`,void 0),t([o({type:Number,attribute:`feedback-duration`})],L.prototype,`feedbackDuration`,void 0),t([l()],L.prototype,`state`,void 0),t([l()],L.prototype,`feedbackMessage`,void 0),t([l()],L.prototype,`_hasNestedControl`,void 0),customElements.get(`craft-action-item`)||customElements.define(`craft-action-item`,L);var Ve=!1,He=!1;window.addEventListener(`keydown`,e=>{e.key===`Enter`&&(Ve=!0)},!0),window.addEventListener(`keyup`,e=>{e.key===`Enter`&&(Ve=!1)},!0),window.addEventListener(`blur`,()=>{Ve=!1});function Ue(){if(!Ve||He)return;He=!0;let e=()=>{He=!1,window.removeEventListener(`keyup`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`blur`,e)},t=t=>{t.key===`Enter`&&(t.preventDefault(),t.stopImmediatePropagation(),e())},n=t=>{t.key===`Enter`&&!t.repeat&&e()};window.addEventListener(`keyup`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`blur`,e)}function We(e,...t){let n=e.relatedTarget;if(!(n instanceof Node))return!1;for(let e=n;e;e=Ge(e))if(t.includes(e))return!0;return!1}function Ge(e){let t=`assignedSlot`in e?e.assignedSlot:null;if(t)return t;let n=e.parentNode;return n instanceof ShadowRoot?n.host:n}var Ke=new WeakSet;function qe(e){Ke.add(e)}function Je(e){return Ke.has(e)}var Ye=new WeakMap;function Xe(e,t){Ye.set(e,[...Ye.get(e)??[],t])}function Ze(e,t){return(Ye.get(e)??[]).some(e=>{for(let n=e;n;n=Ge(n))if(n===t)return!0;return!1})}var Qe=new WeakMap;function $e(e){let t=!!e.open;t!==(Qe.get(e)??!1)&&(Qe.set(e,t),e.dispatchEvent(new CustomEvent(t?`craft-show`:`craft-hide`,{bubbles:!0,composed:!0})),e.updateComplete.then(()=>{!!e.open===t&&e.dispatchEvent(new CustomEvent(t?`craft-after-show`:`craft-after-hide`,{bubbles:!0,composed:!0}))}))}function et(){return[{name:`computeStyles`,options:{gpuAcceleration:!1}},{name:`containingBlockCorrection`,enabled:!0,phase:`afterWrite`,fn:({state:e})=>{let t=e.elements.popper,n=parseFloat(t.style.left),r=parseFloat(t.style.top);if(Number.isNaN(n)||Number.isNaN(r))return;let i=t.getBoundingClientRect(),a=i.x-n,o=i.y-r;(a!==0||o!==0)&&(t.style.left=`${n-a}px`,t.style.top=`${r-o}px`)}}]}var tt=typeof HTMLElement<`u`&&typeof HTMLElement.prototype.showPopover==`function`;function nt(e){e.toggleAttribute(`data-open`,!0),tt&&!e.matches(`:popover-open`)&&e.showPopover()}function rt(e){tt&&e.matches(`:popover-open`)&&e.hidePopover(),e.removeAttribute(`data-open`)}function it(e){return[{name:`preventOverflow`,options:{padding:8}},{name:`flip`,options:{padding:16}},{name:`offset`,options:{offset:[0,e]}},{name:`arrow`,enabled:!1},...et()]}var at=r`
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
`,ot=`bottom`,st=`right`,ct=`left`,lt=`auto`,ut=[`top`,ot,st,ct],dt=`start`,ft=`clippingParents`,pt=`viewport`,mt=`popper`,ht=`reference`,gt=ut.reduce(function(e,t){return e.concat([t+`-`+dt,t+`-end`])},[]),_t=[].concat(ut,[lt]).reduce(function(e,t){return e.concat([t,t+`-`+dt,t+`-end`])},[]),vt=[`beforeRead`,`read`,`afterRead`,`beforeMain`,`main`,`afterMain`,`beforeWrite`,`write`,`afterWrite`];function yt(e){return e?(e.nodeName||``).toLowerCase():null}function R(e){if(e==null)return window;if(e.toString()!==`[object Window]`){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function bt(e){return e instanceof R(e).Element||e instanceof Element}function z(e){return e instanceof R(e).HTMLElement||e instanceof HTMLElement}function xt(e){return typeof ShadowRoot>`u`?!1:e instanceof R(e).ShadowRoot||e instanceof ShadowRoot}function St(e){var t=e.state;Object.keys(t.elements).forEach(function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},i=t.elements[e];!z(i)||!yt(i)||(Object.assign(i.style,n),Object.keys(r).forEach(function(e){var t=r[e];t===!1?i.removeAttribute(e):i.setAttribute(e,t===!0?``:t)}))})}function Ct(e){var t=e.state,n={popper:{position:t.options.strategy,left:`0`,top:`0`,margin:`0`},arrow:{position:`absolute`},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(e){var r=t.elements[e],i=t.attributes[e]||{},a=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce(function(e,t){return e[t]=``,e},{});!z(r)||!yt(r)||(Object.assign(r.style,a),Object.keys(i).forEach(function(e){r.removeAttribute(e)}))})}}var wt={name:`applyStyles`,enabled:!0,phase:`write`,fn:St,effect:Ct,requires:[`computeStyles`]};function Tt(e){return e.split(`-`)[0]}var Et=Math.max,Dt=Math.min,Ot=Math.round;function kt(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(e){return e.brand+`/`+e.version}).join(` `):navigator.userAgent}function At(){return!/^((?!chrome|android).)*safari/i.test(kt())}function jt(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var r=e.getBoundingClientRect(),i=1,a=1;t&&z(e)&&(i=e.offsetWidth>0&&Ot(r.width)/e.offsetWidth||1,a=e.offsetHeight>0&&Ot(r.height)/e.offsetHeight||1);var o=(bt(e)?R(e):window).visualViewport,s=!At()&&n,c=(r.left+(s&&o?o.offsetLeft:0))/i,l=(r.top+(s&&o?o.offsetTop:0))/a,u=r.width/i,d=r.height/a;return{width:u,height:d,top:l,right:c+u,bottom:l+d,left:c,x:c,y:l}}function Mt(e){var t=jt(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function Nt(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&xt(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function Pt(e){return R(e).getComputedStyle(e)}function Ft(e){return[`table`,`td`,`th`].indexOf(yt(e))>=0}function It(e){return((bt(e)?e.ownerDocument:e.document)||window.document).documentElement}function Lt(e){return yt(e)===`html`?e:e.assignedSlot||e.parentNode||(xt(e)?e.host:null)||It(e)}function Rt(e){return!z(e)||Pt(e).position===`fixed`?null:e.offsetParent}function zt(e){var t=/firefox/i.test(kt());if(/Trident/i.test(kt())&&z(e)&&Pt(e).position===`fixed`)return null;var n=Lt(e);for(xt(n)&&(n=n.host);z(n)&&[`html`,`body`].indexOf(yt(n))<0;){var r=Pt(n);if(r.transform!==`none`||r.perspective!==`none`||r.contain===`paint`||[`transform`,`perspective`].indexOf(r.willChange)!==-1||t&&r.willChange===`filter`||t&&r.filter&&r.filter!==`none`)return n;n=n.parentNode}return null}function Bt(e){for(var t=R(e),n=Rt(e);n&&Ft(n)&&Pt(n).position===`static`;)n=Rt(n);return n&&(yt(n)===`html`||yt(n)===`body`&&Pt(n).position===`static`)?t:n||zt(e)||t}function Vt(e){return[`top`,`bottom`].indexOf(e)>=0?`x`:`y`}function Ht(e,t,n){return Et(e,Dt(t,n))}function Ut(e,t,n){var r=Ht(e,t,n);return r>n?n:r}function Wt(){return{top:0,right:0,bottom:0,left:0}}function Gt(e){return Object.assign({},Wt(),e)}function Kt(e,t){return t.reduce(function(t,n){return t[n]=e,t},{})}var qt=function(e,t){return e=typeof e==`function`?e(Object.assign({},t.rects,{placement:t.placement})):e,Gt(typeof e==`number`?Kt(e,ut):e)};function Jt(e){var t,n=e.state,r=e.name,i=e.options,a=n.elements.arrow,o=n.modifiersData.popperOffsets,s=Tt(n.placement),c=Vt(s),l=[`left`,`right`].indexOf(s)>=0?`height`:`width`;if(!(!a||!o)){var u=qt(i.padding,n),d=Mt(a),f=c===`y`?`top`:ct,p=c===`y`?ot:st,m=n.rects.reference[l]+n.rects.reference[c]-o[c]-n.rects.popper[l],h=o[c]-n.rects.reference[c],g=Bt(a),_=g?c===`y`?g.clientHeight||0:g.clientWidth||0:0,v=m/2-h/2,y=u[f],b=_-d[l]-u[p],x=_/2-d[l]/2+v,S=Ht(y,x,b),C=c;n.modifiersData[r]=(t={},t[C]=S,t.centerOffset=S-x,t)}}function Yt(e){var t=e.state,n=e.options.element,r=n===void 0?`[data-popper-arrow]`:n;r!=null&&(typeof r==`string`&&(r=t.elements.popper.querySelector(r),!r)||Nt(t.elements.popper,r)&&(t.elements.arrow=r))}var Xt={name:`arrow`,enabled:!0,phase:`main`,fn:Jt,effect:Yt,requires:[`popperOffsets`],requiresIfExists:[`preventOverflow`]};function Zt(e){return e.split(`-`)[1]}var Qt={top:`auto`,right:`auto`,bottom:`auto`,left:`auto`};function $t(e,t){var n=e.x,r=e.y,i=t.devicePixelRatio||1;return{x:Ot(n*i)/i||0,y:Ot(r*i)/i||0}}function en(e){var t,n=e.popper,r=e.popperRect,i=e.placement,a=e.variation,o=e.offsets,s=e.position,c=e.gpuAcceleration,l=e.adaptive,u=e.roundOffsets,d=e.isFixed,f=o.x,p=f===void 0?0:f,m=o.y,h=m===void 0?0:m,g=typeof u==`function`?u({x:p,y:h}):{x:p,y:h};p=g.x,h=g.y;var _=o.hasOwnProperty(`x`),v=o.hasOwnProperty(`y`),y=ct,b=`top`,x=window;if(l){var S=Bt(n),C=`clientHeight`,w=`clientWidth`;if(S===R(n)&&(S=It(n),Pt(S).position!==`static`&&s===`absolute`&&(C=`scrollHeight`,w=`scrollWidth`)),S=S,i===`top`||(i===`left`||i===`right`)&&a===`end`){b=ot;var T=d&&S===x&&x.visualViewport?x.visualViewport.height:S[C];h-=T-r.height,h*=c?1:-1}if(i===`left`||(i===`top`||i===`bottom`)&&a===`end`){y=st;var E=d&&S===x&&x.visualViewport?x.visualViewport.width:S[w];p-=E-r.width,p*=c?1:-1}}var D=Object.assign({position:s},l&&Qt),O=u===!0?$t({x:p,y:h},R(n)):{x:p,y:h};if(p=O.x,h=O.y,c){var k;return Object.assign({},D,(k={},k[b]=v?`0`:``,k[y]=_?`0`:``,k.transform=(x.devicePixelRatio||1)<=1?`translate(`+p+`px, `+h+`px)`:`translate3d(`+p+`px, `+h+`px, 0)`,k))}return Object.assign({},D,(t={},t[b]=v?h+`px`:``,t[y]=_?p+`px`:``,t.transform=``,t))}function tn(e){var t=e.state,n=e.options,r=n.gpuAcceleration,i=r===void 0||r,a=n.adaptive,o=a===void 0||a,s=n.roundOffsets,c=s===void 0||s,l={placement:Tt(t.placement),variation:Zt(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:t.options.strategy===`fixed`};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,en(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o,roundOffsets:c})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,en(Object.assign({},l,{offsets:t.modifiersData.arrow,position:`absolute`,adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var nn={name:`computeStyles`,enabled:!0,phase:`beforeWrite`,fn:tn,data:{}},rn={passive:!0};function an(e){var t=e.state,n=e.instance,r=e.options,i=r.scroll,a=i===void 0||i,o=r.resize,s=o===void 0||o,c=R(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&l.forEach(function(e){e.addEventListener(`scroll`,n.update,rn)}),s&&c.addEventListener(`resize`,n.update,rn),function(){a&&l.forEach(function(e){e.removeEventListener(`scroll`,n.update,rn)}),s&&c.removeEventListener(`resize`,n.update,rn)}}var on={name:`eventListeners`,enabled:!0,phase:`write`,fn:function(){},effect:an,data:{}},sn={left:`right`,right:`left`,bottom:`top`,top:`bottom`};function cn(e){return e.replace(/left|right|bottom|top/g,function(e){return sn[e]})}var ln={start:`end`,end:`start`};function un(e){return e.replace(/start|end/g,function(e){return ln[e]})}function dn(e){var t=R(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function fn(e){return jt(It(e)).left+dn(e).scrollLeft}function pn(e,t){var n=R(e),r=It(e),i=n.visualViewport,a=r.clientWidth,o=r.clientHeight,s=0,c=0;if(i){a=i.width,o=i.height;var l=At();(l||!l&&t===`fixed`)&&(s=i.offsetLeft,c=i.offsetTop)}return{width:a,height:o,x:s+fn(e),y:c}}function mn(e){var t=It(e),n=dn(e),r=e.ownerDocument?.body,i=Et(t.scrollWidth,t.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),a=Et(t.scrollHeight,t.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),o=-n.scrollLeft+fn(e),s=-n.scrollTop;return Pt(r||t).direction===`rtl`&&(o+=Et(t.clientWidth,r?r.clientWidth:0)-i),{width:i,height:a,x:o,y:s}}function hn(e){var t=Pt(e),n=t.overflow,r=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}function gn(e){return[`html`,`body`,`#document`].indexOf(yt(e))>=0?e.ownerDocument.body:z(e)&&hn(e)?e:gn(Lt(e))}function _n(e,t){t===void 0&&(t=[]);var n=gn(e),r=n===e.ownerDocument?.body,i=R(n),a=r?[i].concat(i.visualViewport||[],hn(n)?n:[]):n,o=t.concat(a);return r?o:o.concat(_n(Lt(a)))}function vn(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function yn(e,t){var n=jt(e,!1,t===`fixed`);return n.top+=e.clientTop,n.left+=e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function bn(e,t,n){return t===`viewport`?vn(pn(e,n)):bt(t)?yn(t,n):vn(mn(It(e)))}function xn(e){var t=_n(Lt(e)),n=[`absolute`,`fixed`].indexOf(Pt(e).position)>=0&&z(e)?Bt(e):e;return bt(n)?t.filter(function(e){return bt(e)&&Nt(e,n)&&yt(e)!==`body`}):[]}function Sn(e,t,n,r){var i=t===`clippingParents`?xn(e):[].concat(t),a=[].concat(i,[n]),o=a[0],s=a.reduce(function(t,n){var i=bn(e,n,r);return t.top=Et(i.top,t.top),t.right=Dt(i.right,t.right),t.bottom=Dt(i.bottom,t.bottom),t.left=Et(i.left,t.left),t},bn(e,o,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function Cn(e){var t=e.reference,n=e.element,r=e.placement,i=r?Tt(r):null,a=r?Zt(r):null,o=t.x+t.width/2-n.width/2,s=t.y+t.height/2-n.height/2,c;switch(i){case`top`:c={x:o,y:t.y-n.height};break;case ot:c={x:o,y:t.y+t.height};break;case st:c={x:t.x+t.width,y:s};break;case ct:c={x:t.x-n.width,y:s};break;default:c={x:t.x,y:t.y}}var l=i?Vt(i):null;if(l!=null){var u=l===`y`?`height`:`width`;switch(a){case dt:c[l]=c[l]-(t[u]/2-n[u]/2);break;case`end`:c[l]=c[l]+(t[u]/2-n[u]/2);break;default:}}return c}function wn(e,t){t===void 0&&(t={});var n=t,r=n.placement,i=r===void 0?e.placement:r,a=n.strategy,o=a===void 0?e.strategy:a,s=n.boundary,c=s===void 0?ft:s,l=n.rootBoundary,u=l===void 0?pt:l,d=n.elementContext,f=d===void 0?mt:d,p=n.altBoundary,m=p!==void 0&&p,h=n.padding,g=h===void 0?0:h,_=Gt(typeof g==`number`?Kt(g,ut):g),v=f===`popper`?ht:mt,y=e.rects.popper,b=e.elements[m?v:f],x=Sn(bt(b)?b:b.contextElement||It(e.elements.popper),c,u,o),S=jt(e.elements.reference),C=Cn({reference:S,element:y,strategy:`absolute`,placement:i}),w=vn(Object.assign({},y,C)),T=f===`popper`?w:S,E={top:x.top-T.top+_.top,bottom:T.bottom-x.bottom+_.bottom,left:x.left-T.left+_.left,right:T.right-x.right+_.right},D=e.modifiersData.offset;if(f===`popper`&&D){var O=D[i];Object.keys(E).forEach(function(e){var t=[`right`,`bottom`].indexOf(e)>=0?1:-1,n=[`top`,`bottom`].indexOf(e)>=0?`y`:`x`;E[e]+=O[n]*t})}return E}function Tn(e,t){t===void 0&&(t={});var n=t,r=n.placement,i=n.boundary,a=n.rootBoundary,o=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,l=c===void 0?_t:c,u=Zt(r),d=u?s?gt:gt.filter(function(e){return Zt(e)===u}):ut,f=d.filter(function(e){return l.indexOf(e)>=0});f.length===0&&(f=d);var p=f.reduce(function(t,n){return t[n]=wn(e,{placement:n,boundary:i,rootBoundary:a,padding:o})[Tt(n)],t},{});return Object.keys(p).sort(function(e,t){return p[e]-p[t]})}function En(e){if(Tt(e)===`auto`)return[];var t=cn(e);return[un(e),t,un(t)]}function Dn(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var i=n.mainAxis,a=i===void 0||i,o=n.altAxis,s=o===void 0||o,c=n.fallbackPlacements,l=n.padding,u=n.boundary,d=n.rootBoundary,f=n.altBoundary,p=n.flipVariations,m=p===void 0||p,h=n.allowedAutoPlacements,g=t.options.placement,_=Tt(g)===g,v=c||(_||!m?[cn(g)]:En(g)),y=[g].concat(v).reduce(function(e,n){return e.concat(Tt(n)===`auto`?Tn(t,{placement:n,boundary:u,rootBoundary:d,padding:l,flipVariations:m,allowedAutoPlacements:h}):n)},[]),b=t.rects.reference,x=t.rects.popper,S=new Map,C=!0,w=y[0],T=0;T<y.length;T++){var E=y[T],D=Tt(E),O=Zt(E)===dt,k=[`top`,ot].indexOf(D)>=0,A=k?`width`:`height`,j=wn(t,{placement:E,boundary:u,rootBoundary:d,altBoundary:f,padding:l}),M=k?O?st:ct:O?ot:`top`;b[A]>x[A]&&(M=cn(M));var N=cn(M),P=[];if(a&&P.push(j[D]<=0),s&&P.push(j[M]<=0,j[N]<=0),P.every(function(e){return e})){w=E,C=!1;break}S.set(E,P)}if(C)for(var F=m?3:1,ee=function(e){var t=y.find(function(t){var n=S.get(t);if(n)return n.slice(0,e).every(function(e){return e})});if(t)return w=t,`break`},te=F;te>0&&ee(te)!==`break`;te--);t.placement!==w&&(t.modifiersData[r]._skip=!0,t.placement=w,t.reset=!0)}}var On={name:`flip`,enabled:!0,phase:`main`,fn:Dn,requiresIfExists:[`offset`],data:{_skip:!1}};function kn(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function An(e){return[`top`,st,ot,ct].some(function(t){return e[t]>=0})}function jn(e){var t=e.state,n=e.name,r=t.rects.reference,i=t.rects.popper,a=t.modifiersData.preventOverflow,o=wn(t,{elementContext:`reference`}),s=wn(t,{altBoundary:!0}),c=kn(o,r),l=kn(s,i,a),u=An(c),d=An(l);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:u,hasPopperEscaped:d},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":d})}var Mn={name:`hide`,enabled:!0,phase:`main`,requiresIfExists:[`preventOverflow`],fn:jn};function Nn(e,t,n){var r=Tt(e),i=[`left`,`top`].indexOf(r)>=0?-1:1,a=typeof n==`function`?n(Object.assign({},t,{placement:e})):n,o=a[0],s=a[1];return o||=0,s=(s||0)*i,[`left`,`right`].indexOf(r)>=0?{x:s,y:o}:{x:o,y:s}}function Pn(e){var t=e.state,n=e.options,r=e.name,i=n.offset,a=i===void 0?[0,0]:i,o=_t.reduce(function(e,n){return e[n]=Nn(n,t.rects,a),e},{}),s=o[t.placement],c=s.x,l=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=l),t.modifiersData[r]=o}var Fn={name:`offset`,enabled:!0,phase:`main`,requires:[`popperOffsets`],fn:Pn};function In(e){var t=e.state,n=e.name;t.modifiersData[n]=Cn({reference:t.rects.reference,element:t.rects.popper,strategy:`absolute`,placement:t.placement})}var Ln={name:`popperOffsets`,enabled:!0,phase:`read`,fn:In,data:{}};function Rn(e){return e===`x`?`y`:`x`}function zn(e){var t=e.state,n=e.options,r=e.name,i=n.mainAxis,a=i===void 0||i,o=n.altAxis,s=o!==void 0&&o,c=n.boundary,l=n.rootBoundary,u=n.altBoundary,d=n.padding,f=n.tether,p=f===void 0||f,m=n.tetherOffset,h=m===void 0?0:m,g=wn(t,{boundary:c,rootBoundary:l,padding:d,altBoundary:u}),_=Tt(t.placement),v=Zt(t.placement),y=!v,b=Vt(_),x=Rn(b),S=t.modifiersData.popperOffsets,C=t.rects.reference,w=t.rects.popper,T=typeof h==`function`?h(Object.assign({},t.rects,{placement:t.placement})):h,E=typeof T==`number`?{mainAxis:T,altAxis:T}:Object.assign({mainAxis:0,altAxis:0},T),D=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,O={x:0,y:0};if(S){if(a){var k=b===`y`?`top`:ct,A=b===`y`?ot:st,j=b===`y`?`height`:`width`,M=S[b],N=M+g[k],P=M-g[A],F=p?-w[j]/2:0,ee=v===`start`?C[j]:w[j],te=v===`start`?-w[j]:-C[j],ne=t.elements.arrow,re=p&&ne?Mt(ne):{width:0,height:0},ie=t.modifiersData[`arrow#persistent`]?t.modifiersData[`arrow#persistent`].padding:Wt(),ae=ie[k],oe=ie[A],se=Ht(0,C[j],re[j]),ce=y?C[j]/2-F-se-ae-E.mainAxis:ee-se-ae-E.mainAxis,le=y?-C[j]/2+F+se+oe+E.mainAxis:te+se+oe+E.mainAxis,ue=t.elements.arrow&&Bt(t.elements.arrow),de=ue?b===`y`?ue.clientTop||0:ue.clientLeft||0:0,fe=D?.[b]??0,pe=M+ce-fe-de,me=M+le-fe,he=Ht(p?Dt(N,pe):N,M,p?Et(P,me):P);S[b]=he,O[b]=he-M}if(s){var ge=b===`x`?`top`:ct,_e=b===`x`?ot:st,ve=S[x],I=x===`y`?`height`:`width`,ye=ve+g[ge],be=ve-g[_e],xe=[`top`,ct].indexOf(_)!==-1,Se=D?.[x]??0,Ce=xe?ye:ve-C[I]-w[I]-Se+E.altAxis,we=xe?ve+C[I]+w[I]-Se-E.altAxis:be,Te=p&&xe?Ut(Ce,ve,we):Ht(p?Ce:ye,ve,p?we:be);S[x]=Te,O[x]=Te-ve}t.modifiersData[r]=O}}var Bn={name:`preventOverflow`,enabled:!0,phase:`main`,fn:zn,requiresIfExists:[`offset`]};function Vn(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Hn(e){return e===R(e)||!z(e)?dn(e):Vn(e)}function Un(e){var t=e.getBoundingClientRect(),n=Ot(t.width)/e.offsetWidth||1,r=Ot(t.height)/e.offsetHeight||1;return n!==1||r!==1}function Wn(e,t,n){n===void 0&&(n=!1);var r=z(t),i=z(t)&&Un(t),a=It(t),o=jt(e,i,n),s={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&((yt(t)!==`body`||hn(a))&&(s=Hn(t)),z(t)?(c=jt(t,!0),c.x+=t.clientLeft,c.y+=t.clientTop):a&&(c.x=fn(a))),{x:o.left+s.scrollLeft-c.x,y:o.top+s.scrollTop-c.y,width:o.width,height:o.height}}function Gn(e){var t=new Map,n=new Set,r=[];e.forEach(function(e){t.set(e.name,e)});function i(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach(function(e){if(!n.has(e)){var r=t.get(e);r&&i(r)}}),r.push(e)}return e.forEach(function(e){n.has(e.name)||i(e)}),r}function Kn(e){var t=Gn(e);return vt.reduce(function(e,n){return e.concat(t.filter(function(e){return e.phase===n}))},[])}function qn(e){var t;return function(){return t||=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})}),t}}function Jn(e){var t=e.reduce(function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e},{});return Object.keys(t).map(function(e){return t[e]})}var Yn={placement:`bottom`,modifiers:[],strategy:`absolute`};function Xn(){return![...arguments].some(function(e){return!(e&&typeof e.getBoundingClientRect==`function`)})}function Zn(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,r=n===void 0?[]:n,i=t.defaultOptions,a=i===void 0?Yn:i;return function(e,t,n){n===void 0&&(n=a);var i={placement:`bottom`,orderedModifiers:[],options:Object.assign({},Yn,a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},o=[],s=!1,c={state:i,setOptions:function(n){var o=typeof n==`function`?n(i.options):n;u(),i.options=Object.assign({},a,i.options,o),i.scrollParents={reference:bt(e)?_n(e):e.contextElement?_n(e.contextElement):[],popper:_n(t)};var s=Kn(Jn([].concat(r,i.options.modifiers)));return i.orderedModifiers=s.filter(function(e){return e.enabled}),l(),c.update()},forceUpdate:function(){if(!s){var e=i.elements,t=e.reference,n=e.popper;if(Xn(t,n)){i.rects={reference:Wn(t,Bt(n),i.options.strategy===`fixed`),popper:Mt(n)},i.reset=!1,i.placement=i.options.placement,i.orderedModifiers.forEach(function(e){return i.modifiersData[e.name]=Object.assign({},e.data)});for(var r=0;r<i.orderedModifiers.length;r++){if(i.reset===!0){i.reset=!1,r=-1;continue}var a=i.orderedModifiers[r],o=a.fn,l=a.options,u=l===void 0?{}:l,d=a.name;typeof o==`function`&&(i=o({state:i,options:u,name:d,instance:c})||i)}}}},update:qn(function(){return new Promise(function(e){c.forceUpdate(),e(i)})}),destroy:function(){u(),s=!0}};if(!Xn(e,t))return c;c.setOptions(n).then(function(e){!s&&n.onFirstUpdate&&n.onFirstUpdate(e)});function l(){i.orderedModifiers.forEach(function(e){var t=e.name,n=e.options,r=n===void 0?{}:n,a=e.effect;if(typeof a==`function`){var s=a({state:i,name:t,instance:c,options:r});o.push(s||function(){})}})}function u(){o.forEach(function(e){return e()}),o=[]}return c}}var Qn=Zn({defaultModifiers:[on,Ln,nn,wt,Fn,On,Bn,Xt,Mn]}),$n=r`
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
`,er={name:`fitAvailableBlockSize`,enabled:!0,phase:`main`,requiresIfExists:[`offset`,`preventOverflow`,`flip`],fn:({state:e,instance:t})=>{let n=e.modifiersData.popperOffsets?.y??0,r=document.documentElement.clientHeight,i=e.placement.split(`-`)[0],a=Math.floor(i===`top`?n+e.rects.popper.height-16:i===`bottom`?r-16-n:r-32),o=e.elements.popper.style,s=`--_popover-available-block-size`,c=o.getPropertyValue(s);!r||a<=0?o.removeProperty(s):o.setProperty(s,`${a}px`),o.getPropertyValue(s)!==c&&t.update()}},tr={name:`matchReferenceWidth`,enabled:!0,phase:`main`,fn:({state:e,instance:t})=>{let n=e.elements.popper.style,r=n.minWidth;n.minWidth=`${e.rects.reference.width}px`,n.minWidth!==r&&t.update()}},nr=new WeakMap,B=new WeakMap,V=new WeakMap,rr=new WeakMap,ir=new WeakMap,ar=new WeakMap,or=new WeakMap,sr=new WeakMap,cr=new WeakMap,lr=new WeakMap,H=new WeakSet,ur=new WeakMap,dr=new WeakMap,fr=new WeakMap,pr=new WeakMap,mr=new WeakMap,hr=new WeakMap,gr=new WeakMap,_r=new WeakMap,vr=new WeakMap,yr=new WeakMap,br=new WeakMap,xr=new WeakMap,U=class extends c{constructor(){super(),g(this,H),this.open=!1,this.placement=`bottom-start`,this.distance=4,this.matchInvokerWidth=!1,this.withoutInvokerAria=!1,this.manual=!1,b(this,nr,null),b(this,B,null),b(this,V,null),b(this,rr,!1),b(this,ir,!1),b(this,ar,!1),b(this,or,!1),b(this,sr,!1),b(this,cr,null),b(this,lr,e=>{!this.open||!(e.relatedTarget instanceof Node)||We(e,this,this.invoker)||y(H,this,Cr).call(this,e.relatedTarget)||y(H,this,Sr).call(this)||y(H,this,Ar).call(this,!1)}),b(this,ur,e=>{e.composedPath().includes(this)||_(lr,this).call(this,e)}),b(this,dr,()=>{let e=_(B,this)?.node;this.manual||!e||e.disabled||e.getAttribute(`aria-disabled`)===`true`||y(H,this,Ar).call(this,!this.open)}),b(this,fr,!1),b(this,pr,e=>{e.key===`Escape`&&(v(fr,this,e.defaultPrevented),this.open&&e.preventDefault())}),b(this,mr,e=>{if(!(e.key!==`Escape`||Je(e))){if(_(fr,this)){v(fr,this,!1),qe(e);return}this.open&&(qe(e),y(H,this,Ar).call(this,!1))}}),b(this,hr,e=>{e.stopPropagation(),y(H,this,Ar).call(this,!1)}),b(this,gr,()=>{v(or,this,!0)}),b(this,_r,()=>{v(sr,this,!0)}),b(this,vr,e=>{v(cr,this,e)}),b(this,yr,()=>{let e=y(H,this,Sr).call(this);setTimeout(()=>{!_(or,this)&&!_(sr,this)&&!e&&y(H,this,Ar).call(this,!1),v(or,this,!1),v(sr,this,!1),v(cr,this,null)})}),b(this,br,()=>{setTimeout(()=>y(H,this,Ar).call(this,!1))}),b(this,xr,()=>{_(ar,this)&&this._syncInvoker()}),this.addEventListener(`keydown`,_(pr,this)),this.addEventListener(`focusout`,_(lr,this))}requestUpdate(e,t,n){super.requestUpdate(e,t,n),e===`open`&&$e(this)}get invoker(){if(this.anchor instanceof HTMLElement)return this.anchor;if(this.anchor?.contextElement instanceof HTMLElement)return this.anchor.contextElement;if(this.for){let e=this.getRootNode();return typeof e.getElementById==`function`?e.getElementById(this.for)??void 0:void 0}return Array.from(this.children).find(e=>e instanceof HTMLElement&&e.slot===`invoker`)}async show(){y(H,this,Ar).call(this,!0),await this.updateComplete}async hide(){y(H,this,Ar).call(this,!1),await this.updateComplete}reposition(){_(V,this)?.update()}async toggle(){await(this.open?this.hide():this.show())}_setupOverlay(){}_teardownOverlay(){}_overlayShown(){}_syncInvoker(){let e=this.invoker??null;e===_(B,this)?.node?y(H,this,kr).call(this):(y(H,this,Dr).call(this),e&&(v(B,this,{node:e,ariaExpanded:e.getAttribute(`aria-expanded`),ownsAria:!1}),e.addEventListener(`click`,_(dr,this)),e.addEventListener(`keyup`,_(mr,this)),e.addEventListener(`focusout`,_(ur,this)),_(rr,this)&&y(H,this,jr).call(this,e),y(H,this,kr).call(this)));let t=wr.call(y(H,this));t?_(rr,this)?_(V,this)?.state.elements.reference!==t&&y(H,this,Ir).call(this):_(ir,this)&&this.open&&y(H,this,Lr).call(this):_(rr,this)&&(y(H,this,Rr).call(this),v(ir,this,!0))}render(){return u`
      <slot name="invoker" @slotchange=${_(xr,this)}></slot>
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
        popover=${tt?`manual`:n}
      >
        <div class="overlay-position">
          <div
            class="popover-pane"
            part="popup"
            @keyup=${_(mr,this)}
            @close-overlay=${_(hr,this)}
          >
            <slot name="content">
              <slot name="content-body"></slot>
              <slot name="content-footer"></slot>
            </slot>
          </div>
        </div>
      </div>
    `}connectedCallback(){y(H,this,Vr).call(this),super.connectedCallback(),this.hasUpdated&&!_(ar,this)&&y(H,this,Br).call(this)}disconnectedCallback(){super.disconnectedCallback(),y(H,this,Rr).call(this,{restoreFocus:!1}),this.updateComplete.then(()=>{if(this.isConnected){this._syncInvoker(),this.open&&y(H,this,Lr).call(this);return}this.open&&Ue(),y(H,this,Dr).call(this),this._teardownOverlay(),v(ar,this,!1)})}firstUpdated(e){super.firstUpdated(e),y(H,this,Br).call(this)}updated(e){super.updated(e),_(ar,this)&&((e.has(`for`)||e.has(`anchor`))&&this._syncInvoker(),e.has(`withoutInvokerAria`)&&y(H,this,kr).call(this),e.has(`open`)&&e.get(`open`)!==void 0&&(this.open?y(H,this,Lr).call(this):y(H,this,Rr).call(this)),_(V,this)&&(e.has(`placement`)||e.has(`distance`)||e.has(`matchInvokerWidth`))&&(y(H,this,Fr).call(this),_(V,this).setOptions(y(H,this,Pr).call(this))))}};function Sr(){return _(cr,this)!==null&&Ze(_(cr,this),this)}function Cr(e){if(!(e instanceof Element))return!1;let t=e.getRootNode();return(e.getAttribute(`aria-controls`)??``).split(/\s+/).filter(Boolean).some(e=>{let n=t.getElementById(e);return n!==null&&this.contains(n)})}function wr(){return this.anchor??this.invoker}function Tr(){return this.shadowRoot?.querySelector(`.overlay-layer`)??null}function Er(){return this.shadowRoot?.querySelector(`.overlay-position`)??null}function Dr(){if(!_(B,this))return;let{node:e,ariaExpanded:t,ownsAria:n}=_(B,this);e.removeEventListener(`click`,_(dr,this)),e.removeEventListener(`keyup`,_(mr,this)),e.removeEventListener(`focusout`,_(ur,this)),y(H,this,Mr).call(this,e),n&&y(H,this,Or).call(this,e,`aria-expanded`,t),v(B,this,null)}function Or(e,t,n){n===null?e.removeAttribute(t):e.setAttribute(t,n)}function kr(){if(!_(B,this))return;let e=_(B,this);this.withoutInvokerAria?e.ownsAria&&=(y(H,this,Or).call(this,e.node,`aria-expanded`,e.ariaExpanded),!1):(e.node.setAttribute(`aria-expanded`,String(_(rr,this))),e.ownsAria=!0)}function Ar(e){if(e===this.open)return;let t=new CustomEvent(e?`craft-before-show`:`craft-before-hide`,{cancelable:!0});this.dispatchEvent(t),!t.defaultPrevented&&(this.open=e)}function jr(e){e.addEventListener(`mousedown`,_(gr,this),!0),e.addEventListener(`mouseup`,_(_r,this),!0)}function Mr(e){e.removeEventListener(`mousedown`,_(gr,this),!0),e.removeEventListener(`mouseup`,_(_r,this),!0)}function Nr(){let e=this.getRootNode().activeElement;if(!e)return!1;let t=this.invoker;return t&&(t===e||t.contains(e))?!1:e===this||this.contains(e)}function Pr(){return{strategy:`fixed`,placement:this.placement,modifiers:[...it(this.distance),er,...this.matchInvokerWidth?[tr]:[]]}}function Fr(){let e=Er.call(y(H,this)),t=wr.call(y(H,this));e&&(this.matchInvokerWidth&&t?(e.style.minWidth=`${t.getBoundingClientRect().width}px`,e.style.width=`auto`):(e.style.removeProperty(`min-width`),e.style.removeProperty(`width`)))}function Ir(){let e=Er.call(y(H,this)),t=wr.call(y(H,this));_(V,this)?.destroy(),v(V,this,null),e&&(y(H,this,Fr).call(this),t&&(v(V,this,Qn(t,e,y(H,this,Pr).call(this))),_(V,this).forceUpdate()))}function Lr(){let e=Tr.call(y(H,this)),t=Er.call(y(H,this));!e||!t||_(rr,this)||!this.isConnected||(v(ir,this,!wr.call(y(H,this))),!_(ir,this)&&(nt(e),v(rr,this,!0),y(H,this,kr).call(this),y(H,this,Ir).call(this),y(H,this,jr).call(this,t),_(B,this)&&y(H,this,jr).call(this,_(B,this).node),document.documentElement.addEventListener(`pointerdown`,_(vr,this),!0),document.documentElement.addEventListener(`mouseup`,_(yr,this),!0),window.addEventListener(`blur`,_(br,this)),this._overlayShown()))}function Rr({restoreFocus:e=!0}={}){let t=Tr.call(y(H,this)),n=Er.call(y(H,this));if(!t||!n||!_(rr,this))return;let r=e&&y(H,this,Nr).call(this);Ue(),rt(t),_(V,this)?.destroy(),v(V,this,null),v(rr,this,!1),y(H,this,kr).call(this),y(H,this,Mr).call(this,n),_(B,this)&&y(H,this,Mr).call(this,_(B,this).node),document.documentElement.removeEventListener(`pointerdown`,_(vr,this),!0),document.documentElement.removeEventListener(`mouseup`,_(yr,this),!0),window.removeEventListener(`blur`,_(br,this)),v(or,this,!1),v(sr,this,!1),v(cr,this,null),r&&y(H,this,zr).call(this)}function zr(){if(Ce(document.activeElement)&&!y(H,this,Nr).call(this))return;let e=this.invoker;e?.focus(),e?.scrollIntoView({block:`nearest`})}function Br(){v(ar,this,!0),this._syncInvoker(),this._setupOverlay(),this.open&&y(H,this,Lr).call(this)}function Vr(){if(_(nr,this)?.isConnected)return;let e=Array.from(this.childNodes).filter(e=>e instanceof Element?e.slot===``:e instanceof Text&&e.data.trim()!==``);if(!e.length)return;let t=document.createElement(`div`);t.slot=`content`,t.append(...e),this.append(t),v(nr,this,t)}U.styles=[E,at,$n],t([o({type:Boolean,reflect:!0})],U.prototype,`open`,void 0),t([o({reflect:!0})],U.prototype,`for`,void 0),t([o({attribute:!1})],U.prototype,`anchor`,void 0),t([o({reflect:!0})],U.prototype,`placement`,void 0),t([o({type:Number})],U.prototype,`distance`,void 0),t([o({attribute:`match-invoker-width`,type:Boolean,reflect:!0})],U.prototype,`matchInvokerWidth`,void 0),t([o({type:Boolean,attribute:`without-invoker-aria`,reflect:!0})],U.prototype,`withoutInvokerAria`,void 0),t([o({type:Boolean,reflect:!0})],U.prototype,`manual`,void 0),customElements.get(`craft-popover`)||customElements.define(`craft-popover`,U);var Hr=r`
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
`,Ur=r`
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
`;r`
  ${Hr}
  ${Ur}
`;var Wr=r`
  ${Hr}
  width: 100%;
  height: 100%;
  appearance: none;
  padding-inline: var(--c-input-spacing-inline)
    calc(var(--c-input-spacing-inline) * 1.5 + 1em);
`,Gr=r`
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
`,Kr=r`
  ${Gr}

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
    ${Ur}
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
`;function qr(e=``){let t=Math.random().toString(36).slice(2,12);return e?`${e}-${t}`:t}var Jr={Solid:`solid`,OutlineFill:`outline-fill`,Fill:`fill`,Outline:`outline`,Plain:`plain`};Object.values(Jr);var Yr=[`sm`,`md`,`lg`,`xl`];function Xr(e){if(e!=null&&e!==``){if(e===0||e===`0`||e===`none`)return`0`;if(Yr.includes(e))return`var(--c-spacing-${e})`}}var Zr=(e,{customProperty:n,defaultValue:r})=>{let i=Array.isArray(n)?n:[n];class a extends e{constructor(...e){super(...e),this.padding=r}get resolvedPadding(){return Xr(this.padding)}get paddingStyles(){let e=this.resolvedPadding;return e===void 0?{}:Object.fromEntries(i.map(t=>[t,e]))}}return t([o()],a.prototype,`padding`,void 0),a},Qr=`important`,$r=` !important`,ei=ee(class extends te{constructor(e){if(super(e),e.type!==F.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`}),``)}update(e,[t]){let{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?n.removeProperty(e):n[e]=null);for(let e in t){let r=t[e];if(r!=null){this.ft.add(e);let t=typeof r==`string`&&r.endsWith($r);e.includes(`-`)||t?n.setProperty(e,t?r.slice(0,-11):r,t?Qr:``):n[e]=r}}return s}}),ti=r`
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
`,W=class extends Zr(c,{customProperty:[`--_callout-padding-block`,`--_callout-padding-inline`]}){constructor(...e){super(...e),this.variant=O.Neutral,this.appearance=Jr.OutlineFill,this.label=``,this.icon=null,this.hideIcon=!1,this.rounded=`all`,this.inline=!1,this.size=`auto`,this.resolvedIcon=null,this._lightDom=new A(this)}connectedCallback(){super.connectedCallback(),this._textObserver=new ResizeObserver(()=>this.syncFirstLineFont()),this.updateComplete.then(()=>{let e=this.renderRoot.querySelector(`.callout__text`);e&&this._textObserver?.observe(e)})}disconnectedCallback(){super.disconnectedCallback(),this._textObserver?.disconnect(),this._textObserver=void 0}updated(){this.syncFirstLineFont()}syncFirstLineFont(){let e=this.renderRoot.querySelector(`.callout__strut`);if(!e)return;let t=ni((this.renderRoot.querySelector(`slot[name="title"]`)??this.renderRoot.querySelector(`.callout__description slot`))?.assignedNodes({flatten:!0})??[]),n=t?.parentElement===this?t.assignedSlot:t?.parentElement,r=n?getComputedStyle(n):null;e.style.fontFamily=r?.fontFamily??``,e.style.fontSize=r?.fontSize??``,e.style.lineHeight=r?.lineHeight??``}willUpdate(){this.resolvedIcon=this.icon??this.getDefaultIcon()}getDefaultIcon(){switch(this.variant){case O.Info:return`lightbulb`;case O.Success:return`circle-check`;case O.Warning:return`circle-exclamation`;case O.Danger:return`triangle-exclamation`;default:return null}}render(){let e=this.label||j(this,`title`),t=!this.hideIcon&&(!!this.resolvedIcon||j(this,`icon`));return u`
      <div
        part="base"
        data-variant="${this.variant}"
        style="${ei(this.paddingStyles)}"
        class="${I({callout:!0,"callout--hide-icon":!t,"callout--small":this.size===`small`})}"
      >
        <div class="callout__body">
          ${t?u`<span class="callout__icon">
                <span class="callout__strut" aria-hidden="true">&#8203;</span>
                <slot name="icon">
                  ${this.resolvedIcon?u`<craft-icon
                        name="${this.resolvedIcon}"
                        style="font-size: 0.9em"
                      ></craft-icon>`:n}
                </slot>
              </span>`:n}
          <div class="callout__text">
            ${e?u`<div class="callout__title">
                  <slot name="title">${this.label}</slot>
                </div>`:n}

            <div class="callout__description">
              <slot></slot>
            </div>
          </div>
        </div>

        ${j(this,`action`)?u`<div class="callout__action"><slot name="action"></slot></div>`:n}
      </div>
    `}};W.styles=[D,ti],t([o({reflect:!0})],W.prototype,`variant`,void 0),t([o({reflect:!0})],W.prototype,`appearance`,void 0),t([o()],W.prototype,`label`,void 0),t([o()],W.prototype,`icon`,void 0),t([o({type:Boolean,attribute:`hide-icon`})],W.prototype,`hideIcon`,void 0),t([o({reflect:!0})],W.prototype,`rounded`,void 0),t([o({reflect:!0,type:Boolean})],W.prototype,`inline`,void 0),t([o()],W.prototype,`size`,void 0),t([l()],W.prototype,`resolvedIcon`,void 0);function ni(e){for(let t of e)if(t instanceof Text){if(t.data.trim())return t}else if(t instanceof Element){let e=ni(t.childNodes);if(e)return e}return null}customElements.get(`craft-callout`)||customElements.define(`craft-callout`,W);var ri=class e{constructor(e,...t){this.host=e,this.presence=[],this.handleMutations=()=>{let e=this.snapshot();e.some((e,t)=>e!==this.presence[t])&&(this.presence=e,this.host.requestUpdate())},this.slotNames=t,e.addController(this)}test(t){return t===e.DEFAULT_SLOT?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.presence=this.snapshot(),this.observer??=new MutationObserver(this.handleMutations),this.observer.observe(this.host,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[`slot`],characterData:this.slotNames.includes(e.DEFAULT_SLOT)})}hostDisconnected(){this.observer?.disconnect()}hasDefaultSlot(){return Array.from(this.host.childNodes).some(e=>e.nodeType===Node.TEXT_NODE?e.textContent.trim()!==``:e.nodeType===Node.ELEMENT_NODE&&!e.slot)}hasNamedSlot(e){return Array.from(this.host.children).some(t=>t.slot===e)}snapshot(){return this.slotNames.map(e=>this.test(e))}};ri.DEFAULT_SLOT=`[default]`;var ii=r`
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
`,ai=[`prefix`,`suffix`,`before`,`after`],oi=[`tip`,`warning`],si={labelledBy:[`addToAriaLabelledBy`,`removeFromAriaLabelledBy`],describedBy:[`addToAriaDescribedBy`,`removeFromAriaDescribedBy`]},ci=r=>{var i=new WeakMap,s=new WeakMap,c=new WeakMap,l=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,m=new WeakMap,h=new WeakMap,x=new WeakMap,S=new WeakMap,C=new WeakMap,w=new WeakMap,T=new WeakMap,E=new WeakMap,D=new WeakMap,O=new WeakMap,k=new WeakMap,A=new WeakSet,j=new WeakMap,M=new WeakMap;class N extends r{constructor(...e){super(...e),g(this,A),this.labelSrOnly=!1,this.readOnly=!1,this.disabled=!1,this.labelledBy=null,this.describedBy=null,b(this,i,void 0),b(this,s,void 0),this._inputId=qr(this.localName),b(this,c,[]),b(this,l,[]),b(this,d,void 0),b(this,f,new MutationObserver(()=>y(A,this,oe).call(this))),b(this,p,new Map),b(this,m,new Set),b(this,h,new Map),b(this,x,!1),b(this,S,new ri(this,`prefix`,`suffix`)),b(this,C,!1),b(this,w,!1),b(this,T,new Set),b(this,E,!1),b(this,D,new MutationObserver(()=>y(A,this,ne).call(this))),b(this,O,!1),b(this,k,{labelledBy:[],describedBy:[]}),b(this,j,e=>{this._feedbackNode?.setAttribute(`aria-live`,e.type===`focusin`?`polite`:`assertive`)}),b(this,M,e=>{e.defaultPrevented||this._onLabelClick()})}get label(){return _(i,this)??this._labelNode?.textContent??``}set label(e){let t=this.label;v(i,this,e===null?``:e),this.requestUpdate(`label`,t)}get helpText(){return _(s,this)??this._helpTextNode?.textContent??``}set helpText(e){let t=this.helpText;v(s,this,e===null?``:e),this.requestUpdate(`helpText`,t)}get slots(){return{label:()=>{let e=document.createElement(`label`);return e.textContent=this.label,e},"help-text":()=>{let e=document.createElement(`div`);return e.textContent=this.helpText,e}}}get _control(){return y(A,this,P).call(this,`input`)}get _labelNode(){return y(A,this,P).call(this,`label`)}get _helpTextNode(){return y(A,this,P).call(this,`help-text`)}get _feedbackNode(){return y(A,this,P).call(this,`feedback`)}connectedCallback(){super.connectedCallback(),y(A,this,ie).call(this),this._enhanceLightDomA11y(),_(f,this).observe(this,{childList:!0}),this._labelNode?.addEventListener(`click`,_(M,this)),this.addEventListener(`focusin`,_(j,this)),this.addEventListener(`focusout`,_(j,this)),y(A,this,te).call(this),y(A,this,ne).call(this),y(A,this,re).call(this,`labelledBy`),y(A,this,re).call(this,`describedBy`)}disconnectedCallback(){super.disconnectedCallback(),_(D,this).disconnect(),v(O,this,!1),_(f,this).disconnect(),this._labelNode?.removeEventListener(`click`,_(M,this)),this.removeEventListener(`focusin`,_(j,this)),this.removeEventListener(`focusout`,_(j,this))}willUpdate(e){super.willUpdate(e),v(C,this,y(A,this,F).call(this,this.label,`label`)),v(w,this,y(A,this,F).call(this,this.helpText,`help-text`)),v(T,this,y(A,this,ee).call(this))}updated(e){super.updated(e),y(A,this,ae).call(this),y(A,this,te).call(this);for(let e of _(T,this)){let t=y(A,this,P).call(this,e);t&&this.renderRoot.querySelector(`slot[name="${e}"]`)&&this.addToAriaDescribedBy(t,{idPrefix:e})}for(let t of[`labelledBy`,`describedBy`])e.has(t)&&y(A,this,re).call(this,t);e.has(`label`)&&_(i,this)!==void 0&&this._labelNode&&(this._labelNode.textContent=this.label),e.has(`helpText`)&&_(s,this)!==void 0&&this._helpTextNode&&(this._helpTextNode.textContent=this.helpText),this._reflectAriaReferences()}_onLabelClick(){this.disabled||this._control?.focus()}_enhanceLightDomA11y(){let{_control:e,_labelNode:t,_helpTextNode:n}=this;e?.classList.add(`form-control`),e&&(e.id||=this._inputId),t&&(t.setAttribute(`for`,e?.id??this._inputId),this.addToAriaLabelledBy(t,{idPrefix:`label`})),n&&this.addToAriaDescribedBy(n,{idPrefix:`help-text`}),y(A,this,oe).call(this);for(let e of ai){let t=y(A,this,P).call(this,e);t?.hasAttribute(`data-label`)&&this.addToAriaLabelledBy(t,{idPrefix:e}),t?.hasAttribute(`data-description`)&&this.addToAriaDescribedBy(t,{idPrefix:e})}}addToAriaLabelledBy(e,{idPrefix:t=``}={}){e.id||=qr(`${t}-${this._inputId}`),_(c,this).includes(e)||(v(c,this,[..._(c,this),e]),this._reflectAriaReferences())}removeFromAriaLabelledBy(e){_(c,this).includes(e)&&(v(c,this,_(c,this).filter(t=>t!==e)),this._reflectAriaReferences())}addToAriaDescribedBy(e,{idPrefix:t=``}={}){e.id||=qr(`${t}-${this._inputId}`),_(l,this).includes(e)||(v(l,this,[..._(l,this),e]),this._reflectAriaReferences())}removeFromAriaDescribedBy(e){_(l,this).includes(e)&&(v(l,this,_(l,this).filter(t=>t!==e)),this._reflectAriaReferences())}_reflectAriaReferences(){let e=this._control;if(!e)return;let t=(t,n)=>{let r=n.map(e=>e.id),i=_(p,this).get(t)??[],a=new Set([...(e.getAttribute(t)??``).split(/\s+/).filter(e=>e&&!i.includes(e)),...r]);_(p,this).set(t,r),a.size?e.setAttribute(t,[...a].join(` `)):i.length&&e.removeAttribute(t)},n=e=>e!==this._labelNode&&e!==this._helpTextNode||e.textContent.trim()!==``||e.childElementCount>0;t(`aria-labelledby`,_(c,this).filter(n)),t(`aria-describedby`,_(l,this).filter(n))}render(){return u`
        <div class="form-field__group-one">${this._groupOneTemplate()}</div>
        <div class="form-field__group-two">${this._groupTwoTemplate()}</div>
      `}_groupOneTemplate(){return u`${this._labelTemplate()} ${this._helpTextTemplate()}`}_groupTwoTemplate(){return u`${this._inputGroupTemplate()} ${this._feedbackTemplate()}`}_labelTemplate(){return v(E,this,!0),_(C,this)?u`
        <div class="form-field__label">
          <slot name="label"></slot>
        </div>
      `:n}_helpTextTemplate(){return v(E,this,!0),_(w,this)?u`
        <small class="form-field__help-text">
          <slot name="help-text"></slot>
        </small>
      `:n}_inputGroupTemplate(){return u`
        <div class="input-group">
          ${this._inputGroupBeforeTemplate()}
          <div class="input-group__container">
            ${this._inputGroupPrefixTemplate()}
            ${this._inputGroupInputTemplate()}
            ${this._inputGroupSuffixTemplate()}
          </div>
          ${this._inputGroupAfterTemplate()}
        </div>
      `}_inputGroupBeforeTemplate(){return u`
        <div class="input-group__before">
          <slot name="before"></slot>
        </div>
      `}_inputGroupPrefixTemplate(){return _(S,this).test(`prefix`)?u`
            <div class="input-group__prefix">
              <slot name="prefix"></slot>
            </div>
          `:n}_inputGroupInputTemplate(){return u`
        <div class="input-group__input">
          <slot name="input"></slot>
        </div>
      `}_inputGroupSuffixTemplate(){return _(S,this).test(`suffix`)?u`
            <div class="input-group__suffix">
              <slot name="suffix"></slot>
            </div>
          `:n}_inputGroupAfterTemplate(){return u`
        <div class="input-group__after">
          <slot name="after"></slot>
        </div>
      `}_feedbackTemplate(){return u`
        ${this._noticeTemplate(`tip`)} ${this._noticeTemplate(`warning`)}
        <div class="form-field__feedback">
          <slot name="feedback"></slot>
        </div>
      `}_noticeTemplate(t){if(v(E,this,!0),!_(T,this).has(t))return n;let r=t===`tip`;return u`
        <craft-callout
          class="field-notice"
          variant=${r?`info`:`warning`}
          appearance="plain"
          padding="none"
        >
          <craft-visually-hidden>
            ${e(r?`Tip:`:`Warning:`)}
          </craft-visually-hidden>
          <slot name=${t}></slot>
        </craft-callout>
      `}}function P(e){return this.querySelector(`:scope > [slot="${e}"]`)??void 0}function F(e,t){return e.trim()!==``||(y(A,this,P).call(this,t)?.childElementCount??0)>0}function ee(){return new Set(oi.filter(e=>y(A,this,P).call(this,e)))}function te(){_(E,this)&&!_(O,this)&&this.isConnected&&(v(O,this,!0),_(D,this).observe(this,{childList:!0,subtree:!0,characterData:!0,attributeFilter:[`slot`]}),y(A,this,ne).call(this))}function ne(){if(!_(E,this))return;let e=y(A,this,ee).call(this);(y(A,this,F).call(this,this.label,`label`)!==_(C,this)||y(A,this,F).call(this,this.helpText,`help-text`)!==_(w,this)||e.size!==_(T,this).size||[...e].some(e=>!_(T,this).has(e)))&&this.requestUpdate()}function re(e){let[t,n]=si[e],r=this.getRootNode();if(typeof r.getElementById!=`function`)return;let i=(this[e]??``).split(/\s+/).filter(Boolean).map(e=>r.getElementById(e)).filter(e=>e!==null);for(let t of _(k,this)[e])i.includes(t)||this[n](t);for(let e of i)this[t](e);_(k,this)[e]=i}function ie(){if(_(x,this))return;v(x,this,!0);let e=this.slots;for(let t of Object.keys(e))y(A,this,P).call(this,t)&&_(m,this).add(t);for(let[t,n]of Object.entries(e)){if(_(m,this).has(t))continue;let e=n();if(e instanceof Node)e instanceof Element&&(e.slot=t),this.append(e);else if(e){let e=document.createComment(`slot:${t}`);this.append(e),_(h,this).set(t,e)}}y(A,this,ae).call(this)}function ae(){let e=this.slots;for(let[t,n]of _(h,this)){let r=e[t]?.();r&&!(r instanceof Node)&&a(r,this,{renderBefore:n,host:this})}}function oe(){let e=this._feedbackNode;e!==_(d,this)&&(_(d,this)&&this.removeFromAriaDescribedBy(_(d,this)),e&&this.addToAriaDescribedBy(e,{idPrefix:`feedback`}),v(d,this,e))}return N.styles=[ii],t([o()],N.prototype,`label`,null),t([o({attribute:`help-text`})],N.prototype,`helpText`,null),t([o({type:Boolean,attribute:`label-sr-only`,reflect:!0})],N.prototype,`labelSrOnly`,void 0),t([o({type:Boolean,attribute:`readonly`,reflect:!0})],N.prototype,`readOnly`,void 0),t([o({type:Boolean,reflect:!0})],N.prototype,`disabled`,void 0),t([o({attribute:`labelled-by`})],N.prototype,`labelledBy`,void 0),t([o({attribute:`described-by`})],N.prototype,`describedBy`,void 0),N},li=e=>{var n=new WeakMap,r=new WeakMap,i=new WeakSet,a=new WeakMap,s=new WeakMap,c=new WeakMap,l=new WeakMap,u=new WeakMap;class d extends ci(e){constructor(...e){super(...e),g(this,i),this.required=!1,this.autofocus=!1,this.invalid=!1,b(this,n,void 0),b(this,r,!1),b(this,a,void 0),b(this,s,()=>{this.requestUpdate(`value`)}),b(this,c,e=>{e.target===this._control?.form&&setTimeout(()=>{e.defaultPrevented||this.requestUpdate(`value`)})}),b(this,l,e=>{e.target===this._control&&this.toggleAttribute(`focused-visible`,this._control.matches(`:focus-visible`))}),b(this,u,e=>{e.target===this._control&&this.removeAttribute(`focused-visible`)})}get _control(){return super._control}get value(){let e=this._control;return e&&this.isConnected?e.value:_(n,this)??e?.value??``}set value(e){let t=this.value,r=this._control;!r||!this.isConnected?v(n,this,e):r.value!==e&&y(i,this,f).call(this,r,e),this.requestUpdate(`value`,t)}connectedCallback(){super.connectedCallback(),_(n,this)!==void 0&&this._control&&(this._control.value=_(n,this),v(n,this,void 0)),this.addEventListener(`input`,_(s,this)),this.addEventListener(`focusin`,_(l,this)),this.addEventListener(`focusout`,_(u,this)),v(a,this,this.getRootNode()),_(a,this).addEventListener(`reset`,_(c,this),!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`input`,_(s,this)),this.removeEventListener(`focusin`,_(l,this)),this.removeEventListener(`focusout`,_(u,this)),_(a,this)?.removeEventListener(`reset`,_(c,this),!0),v(a,this,void 0)}focus(e){this._control?.focus(e)}blur(){this._control?.blur()}updated(e){super.updated(e),this._pushToControl(e)}_pushToControl(e){let t=this._control;if(!t)return;let n=!_(r,this);v(r,this,!0);let i=(t,r)=>e.has(t)&&!(n&&(r===void 0||r===``||r===!1));i(`name`,this.name)&&(t.name=this.name??``),i(`placeholder`,this.placeholder)&&!(t instanceof HTMLSelectElement)&&(t.placeholder=this.placeholder??``),i(`autocomplete`,this.autocomplete)&&t.setAttribute(`autocomplete`,this.autocomplete??``),i(`required`,this.required)&&(this.required?t.setAttribute(`aria-required`,`true`):t.removeAttribute(`aria-required`)),i(`autofocus`,this.autofocus)&&(t.autofocus=this.autofocus),i(`disabled`,this.disabled)&&(t.disabled=this.disabled),i(`readOnly`,this.readOnly)&&!(t instanceof HTMLSelectElement)&&(t.readOnly=this.readOnly),i(`invalid`,this.invalid)&&(this.invalid?t.setAttribute(`aria-invalid`,`true`):t.removeAttribute(`aria-invalid`))}}function f(e,t){if(e.matches(`:focus`)&&!(e instanceof HTMLSelectElement)&&e.selectionStart!==null)try{let n=e.selectionStart;e.value=t,e.selectionStart=n,e.selectionEnd=n;return}catch{}e.value=t}return t([o({reflect:!0})],d.prototype,`name`,void 0),t([o()],d.prototype,`placeholder`,void 0),t([o()],d.prototype,`autocomplete`,void 0),t([o({type:Boolean})],d.prototype,`required`,void 0),t([o({type:Boolean})],d.prototype,`autofocus`,void 0),t([o({type:Boolean,reflect:!0})],d.prototype,`invalid`,void 0),t([o({attribute:!1})],d.prototype,`value`,null),d},ui=r`
  ::slotted(.form-control) {
    ${Hr}
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
`,G=class extends li(c){constructor(...e){super(...e),this.size=`medium`,this.inputMode=``,this.autoCorrect=!0,this.autoCapitalize=!0,this.small=!1,this.center=!1,this.monospace=!1,this.inlineSuffix=!1,this.hiddenInput=!1}get slots(){return{...super.slots,input:()=>{let e=document.createElement(`input`),t=this.getAttribute(`value`);return e.type=this.type??`text`,this.syncNativeAttributes(e),t&&e.setAttribute(`value`,t),e}}}get _control(){return super._control}connectedCallback(){super.connectedCallback(),this.syncNativeAttributes()}_pushToControl(e){super._pushToControl(e),e.has(`type`)&&this.type&&this._control&&(this._control.type=this.type)}updated(e){super.updated(e),(e.has(`inputSize`)||e.has(`maxlength`)||e.has(`width`)||e.has(`min`)||e.has(`max`)||e.has(`step`)||e.has(`inputMode`)||e.has(`autoCorrect`)||e.has(`autoCapitalize`))&&this.syncNativeAttributes()}get maxlengthSize(){return this.maxlength&&this.maxlength>0&&this.width!==`full`?this.maxlength:void 0}syncNativeAttributes(e=this._control){let t={size:this.inputSize??this.maxlengthSize,maxlength:this.maxlength&&this.maxlength>0?this.maxlength:void 0,min:this.min,max:this.max,step:this.step,inputmode:this.inputMode,autocorrect:this.autoCorrect?void 0:`off`,autocapitalize:this.autoCapitalize?void 0:`none`};for(let[n,r]of Object.entries(t)){if(r===void 0){e?.removeAttribute(n);continue}e?.setAttribute(n,String(r))}}};G.styles=[ii,Kr,ui],t([o({reflect:!0})],G.prototype,`type`,void 0),t([o({type:Number,reflect:!0})],G.prototype,`maxlength`,void 0),t([o({type:String,reflect:!0})],G.prototype,`size`,void 0),t([o({type:Number,attribute:!1})],G.prototype,`inputSize`,void 0),t([o({attribute:!1})],G.prototype,`min`,void 0),t([o({attribute:!1})],G.prototype,`max`,void 0),t([o({attribute:!1})],G.prototype,`step`,void 0),t([o({attribute:!1})],G.prototype,`inputMode`,void 0),t([o({attribute:!1})],G.prototype,`autoCorrect`,void 0),t([o({attribute:!1})],G.prototype,`autoCapitalize`,void 0),t([o({reflect:!0,type:Boolean})],G.prototype,`small`,void 0),t([o({type:String,reflect:!0})],G.prototype,`width`,void 0),t([o({reflect:!0,type:Boolean})],G.prototype,`center`,void 0),t([o({reflect:!0,type:Boolean})],G.prototype,`monospace`,void 0),t([o({reflect:!0,type:Boolean,attribute:`inline-suffix`})],G.prototype,`inlineSuffix`,void 0),t([o({reflect:!0,type:Boolean,attribute:`hidden-input`})],G.prototype,`hiddenInput`,void 0),customElements.get(`craft-input`)||customElements.define(`craft-input`,G);var di=r`
  @supports (text-box: trim-both cap alphabetic) {
    text-box: trim-both cap alphabetic;
    padding-block: calc((1lh - 1cap) / 2);
  }
`,fi=r`
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
`,pi=r`
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

  /* An xsmall button's own icon is half its height rather than 0.8em, so it
     sits a whole number of pixels inside the borders (3px in a 16px button).
     0.8em would put it a fraction of a pixel in, which 1x screens round off
     center. Keyed on the content rather than \`[icon]\`, which isn't there
     when \`icon\` is set as a property. */
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
  :host([variant~='plain'][inherit].is-active:not(:disabled):not(.loading)),
  :host([variant~='plain'][inherit][slot='invoker'][aria-expanded='true']) {
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
    ${di}
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
`,mi=Object.prototype.toString;function hi(e){return typeof e==`function`||mi.call(e)===`[object Function]`}function gi(e){var t=Number(e);return isNaN(t)?0:t===0||!isFinite(t)?t:(t>0?1:-1)*Math.floor(Math.abs(t))}var _i=2**53-1;function vi(e){var t=gi(e);return Math.min(Math.max(t,0),_i)}function K(e,t){var n=Array,r=Object(e);if(e==null)throw TypeError(`Array.from requires an array-like object - not null or undefined`);if(t!==void 0&&!hi(t))throw TypeError(`Array.from: when provided, the second argument must be a function`);for(var i=vi(r.length),a=hi(n)?Object(new n(i)):Array(i),o=0,s;o<i;)s=r[o],t?a[o]=t(s,o):a[o]=s,o+=1;return a.length=i,a}function yi(e){"@babel/helpers - typeof";return yi=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},yi(e)}function bi(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function xi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,wi(r.key),r)}}function Si(e,t,n){return t&&xi(e.prototype,t),n&&xi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ci(e,t,n){return t=wi(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function wi(e){var t=Ti(e,`string`);return yi(t)==`symbol`?t:t+``}function Ti(e,t){if(yi(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(yi(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var Ei=typeof Set>`u`?Set:function(){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];bi(this,e),Ci(this,`items`,void 0),this.items=t}return Si(e,[{key:`add`,value:function(e){return this.has(e)===!1&&this.items.push(e),this}},{key:`clear`,value:function(){this.items=[]}},{key:`delete`,value:function(e){var t=this.items.length;return this.items=this.items.filter(function(t){return t!==e}),t!==this.items.length}},{key:`forEach`,value:function(e){var t=this;this.items.forEach(function(n){e(n,n,t)})}},{key:`has`,value:function(e){return this.items.indexOf(e)!==-1}},{key:`size`,get:function(){return this.items.length}}])}();function q(e){return e.localName??e.tagName.toLowerCase()}var Di={article:`article`,aside:`complementary`,button:`button`,datalist:`listbox`,dd:`definition`,details:`group`,dialog:`dialog`,dt:`term`,fieldset:`group`,figure:`figure`,form:`form`,footer:`contentinfo`,h1:`heading`,h2:`heading`,h3:`heading`,h4:`heading`,h5:`heading`,h6:`heading`,header:`banner`,hr:`separator`,html:`document`,legend:`legend`,li:`listitem`,math:`math`,main:`main`,menu:`list`,nav:`navigation`,ol:`list`,optgroup:`group`,option:`option`,output:`status`,progress:`progressbar`,section:`region`,summary:`button`,table:`table`,tbody:`rowgroup`,textarea:`textbox`,tfoot:`rowgroup`,td:`cell`,th:`columnheader`,thead:`rowgroup`,tr:`row`,ul:`list`},Oi={caption:new Set([`aria-label`,`aria-labelledby`]),code:new Set([`aria-label`,`aria-labelledby`]),deletion:new Set([`aria-label`,`aria-labelledby`]),emphasis:new Set([`aria-label`,`aria-labelledby`]),generic:new Set([`aria-label`,`aria-labelledby`,`aria-roledescription`]),insertion:new Set([`aria-label`,`aria-labelledby`]),none:new Set([`aria-label`,`aria-labelledby`]),paragraph:new Set([`aria-label`,`aria-labelledby`]),presentation:new Set([`aria-label`,`aria-labelledby`]),strong:new Set([`aria-label`,`aria-labelledby`]),subscript:new Set([`aria-label`,`aria-labelledby`]),superscript:new Set([`aria-label`,`aria-labelledby`])};function ki(e,t){return[`aria-atomic`,`aria-busy`,`aria-controls`,`aria-current`,`aria-description`,`aria-describedby`,`aria-details`,`aria-dropeffect`,`aria-flowto`,`aria-grabbed`,`aria-hidden`,`aria-keyshortcuts`,`aria-label`,`aria-labelledby`,`aria-live`,`aria-owns`,`aria-relevant`,`aria-roledescription`].some(function(n){var r;return e.hasAttribute(n)&&!((r=Oi[t])!=null&&r.has(n))})}function Ai(e,t){return ki(e,t)}function ji(e){var t=Ni(e);if(t===null||Pi.indexOf(t)!==-1){var n=Mi(e);if(Pi.indexOf(t||``)===-1||Ai(e,n||``))return n}return t}function Mi(e){var t=Di[q(e)];if(t!==void 0)return t;switch(q(e)){case`a`:case`area`:case`link`:if(e.hasAttribute(`href`))return`link`;break;case`img`:return e.getAttribute(`alt`)===``&&!Ai(e,`img`)?`presentation`:`img`;case`input`:var n=e.type;switch(n){case`button`:case`image`:case`reset`:case`submit`:return`button`;case`checkbox`:case`radio`:return n;case`range`:return`slider`;case`email`:case`tel`:case`text`:case`url`:return e.hasAttribute(`list`)?`combobox`:`textbox`;case`search`:return e.hasAttribute(`list`)?`combobox`:`searchbox`;case`number`:return`spinbutton`;default:return null}case`select`:return e.hasAttribute(`multiple`)||e.size>1?`listbox`:`combobox`}return null}function Ni(e){var t=e.getAttribute(`role`);if(t!==null){var n=t.trim().split(` `)[0];if(n.length>0)return n}return null}var Pi=[`presentation`,`none`];function J(e){return e!==null&&e.nodeType===e.ELEMENT_NODE}function Fi(e){return J(e)&&q(e)===`caption`}function Ii(e){return J(e)&&q(e)===`input`}function Li(e){return J(e)&&q(e)===`optgroup`}function Ri(e){return J(e)&&q(e)===`select`}function zi(e){return J(e)&&q(e)===`table`}function Bi(e){return J(e)&&q(e)===`textarea`}function Vi(e){var t=(e.ownerDocument===null?e:e.ownerDocument).defaultView;if(t===null)throw TypeError(`no window available`);return t}function Hi(e){return J(e)&&q(e)===`fieldset`}function Ui(e){return J(e)&&q(e)===`legend`}function Wi(e){return J(e)&&q(e)===`slot`}function Gi(e){return J(e)&&e.ownerSVGElement!==void 0}function Ki(e){return J(e)&&q(e)===`svg`}function qi(e){return Gi(e)&&q(e)===`title`}function Ji(e,t){if(J(e)&&e.hasAttribute(t)){var n=e.getAttribute(t).split(` `),r=e.getRootNode?e.getRootNode():e.ownerDocument;return n.map(function(e){return r.getElementById(e)}).filter(function(e){return e!==null})}return[]}function Yi(e,t){return J(e)?t.indexOf(ji(e))!==-1:!1}function Xi(e){return e.trim().replace(/\s\s+/g,` `)}function Zi(e,t){if(!J(e))return!1;if(e.hasAttribute(`hidden`)||e.getAttribute(`aria-hidden`)===`true`)return!0;var n=t(e);return n.getPropertyValue(`display`)===`none`||n.getPropertyValue(`visibility`)===`hidden`}function Qi(e){return Yi(e,[`button`,`combobox`,`listbox`,`textbox`])||$i(e,`range`)}function $i(e,t){if(!J(e))return!1;switch(t){case`range`:return Yi(e,[`meter`,`progressbar`,`scrollbar`,`slider`,`spinbutton`]);default:throw TypeError(`No knowledge about abstract role '${t}'. This is likely a bug :(`)}}function ea(e,t){var n=K(e.querySelectorAll(t));return Ji(e,`aria-owns`).forEach(function(e){n.push.apply(n,K(e.querySelectorAll(t)))}),n}function ta(e){return Ri(e)?e.selectedOptions||ea(e,`[selected]`):ea(e,`[aria-selected="true"]`)}function na(e){return Yi(e,Pi)}function ra(e){return Fi(e)}function ia(e){return Yi(e,[`button`,`cell`,`checkbox`,`columnheader`,`gridcell`,`heading`,`label`,`legend`,`link`,`menuitem`,`menuitemcheckbox`,`menuitemradio`,`option`,`radio`,`row`,`rowheader`,`switch`,`tab`,`tooltip`,`treeitem`])}function aa(e){return!1}function oa(e){return Ii(e)||Bi(e)?e.value:e.textContent||``}function sa(e){var t=e.getPropertyValue(`content`);return/^["'].*["']$/.test(t)?t.slice(1,-1):``}function ca(e){var t=q(e);return t===`button`||t===`input`&&e.getAttribute(`type`)!==`hidden`||t===`meter`||t===`output`||t===`progress`||t===`select`||t===`textarea`}function la(e){if(ca(e))return e;var t=null;return e.childNodes.forEach(function(e){if(t===null&&J(e)){var n=la(e);n!==null&&(t=n)}}),t}function ua(e){if(e.control!==void 0)return e.control;var t=e.getAttribute(`for`);return t===null?la(e):e.ownerDocument.getElementById(t)}function da(e){var t=e.labels;if(t===null)return t;if(t!==void 0)return K(t);if(!ca(e))return null;var n=e.ownerDocument;return K(n.querySelectorAll(`label`)).filter(function(t){return ua(t)===e})}function fa(e){var t=e.assignedNodes();return t.length===0?K(e.childNodes):t}function pa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=new Ei,r=typeof Map>`u`?void 0:new Map,i=Vi(e),a=t.compute,o=a===void 0?`name`:a,s=t.computedStyleSupportsPseudoElements,c=s===void 0?t.getComputedStyle!==void 0:s,l=t.getComputedStyle,u=l===void 0?i.getComputedStyle.bind(i):l,d=t.hidden,f=d!==void 0&&d,p=function(e,t){if(t!==void 0)throw Error(`use uncachedGetComputedStyle directly for pseudo elements`);if(r===void 0)return u(e);var n=r.get(e);if(n)return n;var i=u(e,t);return r.set(e,i),i};function m(e,t){var n=``;if(J(e)&&c&&(n=`${sa(u(e,`::before`))} ${n}`),(Wi(e)?fa(e):K(e.childNodes).concat(Ji(e,`aria-owns`))).forEach(function(e){var r=v(e,{isEmbeddedInLabel:t.isEmbeddedInLabel,isReferenced:!1,recursion:!0}),i=(J(e)?p(e).getPropertyValue(`display`):`inline`)===`inline`?``:` `;n+=`${i}${r}${i}`}),J(e)&&c){var r=sa(u(e,`::after`));n=`${n} ${r}`}return n.trim()}function h(e,t){var r=e.getAttributeNode(t);return r!==null&&!n.has(r)&&r.value.trim()!==``?(n.add(r),r.value):null}function g(e){return J(e)?h(e,`title`):null}function _(e){if(!J(e))return null;if(Hi(e)){n.add(e);for(var t=K(e.childNodes),r=0;r<t.length;r+=1){var i=t[r];if(Ui(i))return v(i,{isEmbeddedInLabel:!1,isReferenced:!1,recursion:!1})}}else if(zi(e)){n.add(e);for(var a=K(e.childNodes),o=0;o<a.length;o+=1){var s=a[o];if(Fi(s))return v(s,{isEmbeddedInLabel:!1,isReferenced:!1,recursion:!1})}}else if(Ki(e)){n.add(e);for(var c=K(e.childNodes),l=0;l<c.length;l+=1){var u=c[l];if(qi(u))return u.textContent}return null}else if(q(e)===`img`||q(e)===`area`){var d=h(e,`alt`);if(d!==null)return d}else if(Li(e)){var f=h(e,`label`);if(f!==null)return f}if(Ii(e)&&(e.type===`button`||e.type===`submit`||e.type===`reset`)){var p=h(e,`value`);if(p!==null)return p;if(e.type===`submit`)return`Submit`;if(e.type===`reset`)return`Reset`}var g=da(e);if(g!==null&&g.length!==0)return n.add(e),K(g).map(function(e){return v(e,{isEmbeddedInLabel:!0,isReferenced:!1,recursion:!0})}).filter(function(e){return e.length>0}).join(` `);if(Ii(e)&&e.type===`image`){var _=h(e,`alt`);if(_!==null)return _;var y=h(e,`title`);return y===null?`Submit Query`:y}if(Yi(e,[`button`])){var b=m(e,{isEmbeddedInLabel:!1,isReferenced:!1});if(b!==``)return b}return null}function v(e,t){if(n.has(e))return``;if(!f&&Zi(e,p)&&!t.isReferenced)return n.add(e),``;var r=J(e)?e.getAttributeNode(`aria-labelledby`):null,i=r!==null&&!n.has(r)?Ji(e,`aria-labelledby`):[];if(o===`name`&&!t.isReferenced&&i.length>0)return n.add(r),i.map(function(e){return v(e,{isEmbeddedInLabel:t.isEmbeddedInLabel,isReferenced:!0,recursion:!1})}).join(` `);var a=t.recursion&&Qi(e)&&o===`name`;if(!a){var s=(J(e)&&e.getAttribute(`aria-label`)||``).trim();if(s!==``&&o===`name`)return n.add(e),s;if(!na(e)){var c=_(e);if(c!==null)return n.add(e),c}}if(Yi(e,[`menu`]))return n.add(e),``;if(a||t.isEmbeddedInLabel||t.isReferenced){if(Yi(e,[`combobox`,`listbox`])){n.add(e);var l=ta(e);return l.length===0?Ii(e)?e.value:``:K(l).map(function(e){return v(e,{isEmbeddedInLabel:t.isEmbeddedInLabel,isReferenced:!1,recursion:!0})}).join(` `)}if($i(e,`range`))return n.add(e),e.hasAttribute(`aria-valuetext`)?e.getAttribute(`aria-valuetext`):e.hasAttribute(`aria-valuenow`)?e.getAttribute(`aria-valuenow`):e.getAttribute(`value`)||``;if(Yi(e,[`textbox`]))return n.add(e),oa(e)}if(ia(e)||J(e)&&t.isReferenced||ra(e)||aa(e)){var u=m(e,{isEmbeddedInLabel:t.isEmbeddedInLabel,isReferenced:!1});if(u!==``)return n.add(e),u}if(e.nodeType===e.TEXT_NODE)return n.add(e),e.textContent||``;if(t.recursion)return n.add(e),m(e,{isEmbeddedInLabel:t.isEmbeddedInLabel,isReferenced:!1});var d=g(e);return d===null?(n.add(e),``):(n.add(e),d)}return Xi(v(e,{isEmbeddedInLabel:!1,isReferenced:o===`description`,recursion:!1}))}function ma(e){return Yi(e,[`caption`,`code`,`deletion`,`emphasis`,`generic`,`insertion`,`none`,`paragraph`,`presentation`,`strong`,`subscript`,`superscript`])}function ha(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return ma(e)?``:pa(e,t)}var ga=e=>{var n=new WeakMap,r=new WeakSet,i=new WeakMap;class a extends e{constructor(...e){super(...e),g(this,r),this.action=null,this.feedback=null,this.feedbackDuration=1e3,this.actionState=C.Idle,this.feedbackMessage=null,b(this,n,null),b(this,i,e=>{if(this.disabled){e.preventDefault();return}je(this.action)&&(e.preventDefault(),this.triggerAction(e))})}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,_(i,this))}disconnectedCallback(){this.removeEventListener(`click`,_(i,this)),y(r,this,s).call(this),super.disconnectedCallback()}setActionState(e,t={}){this.actionState=e,this.feedbackMessage=t.message??null,this.dispatchEvent(new CustomEvent(`craft-state-change`,{bubbles:!0,composed:!0,detail:{state:e,actionType:je(this.action)?.type,...t}}))}async triggerAction(e){let t=je(this.action);if(t){y(r,this,s).call(this),t.type===`http`&&this.setActionState(C.Loading,this.feedback?.loading);try{await Ne(t,{trigger:this,sourceEvent:e}),this.setActionState(C.Success,this.feedback?.success)}catch(e){this.setActionState(C.Error,{message:e instanceof Error?e.message:void 0,...this.feedback?.error??{}})}finally{y(r,this,s).call(this),this.isConnected?v(n,this,setTimeout(()=>{v(n,this,null),this.setActionState(C.Idle)},this.feedbackDuration)):(this.actionState=C.Idle,this.feedbackMessage=null)}}}}function s(){_(n,this)!==null&&(clearTimeout(_(n,this)),v(n,this,null))}return t([o({type:Object})],a.prototype,`action`,void 0),t([o({type:Object})],a.prototype,`feedback`,void 0),t([o({type:Number,attribute:`feedback-duration`})],a.prototype,`feedbackDuration`,void 0),t([o({reflect:!0,attribute:`action-state`})],a.prototype,`actionState`,void 0),t([l()],a.prototype,`feedbackMessage`,void 0),a},_a,va={Primary:`primary`,Danger:`danger`,DangerPlain:`danger-plain`,Solid:`solid`,Fill:`fill`,Outline:`outline`,Dashed:`dashed`,Plain:`plain`,Link:`link`,None:`none`},ya=e=>e.key===` `||e.key===`Enter`,ba=new WeakMap;function xa(e){let t=document.createElement(`button`);return t.type=`submit`,t.tabIndex=-1,t.setAttribute(`aria-hidden`,`true`),t.style.cssText=`position:absolute;inset-block-start:0;inset-inline-start:0;width:1px;height:1px;padding:0;border:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap;`,t.addEventListener(`click`,t=>{t.stopPropagation(),t.preventDefault(),e()}),t}function Sa(e){for(let t=e.parentElement?.closest(`fieldset`);t;t=t.parentElement?.closest(`fieldset`))if(t.disabled&&!t.querySelector(`:scope > legend`)?.contains(e))return!0;return!1}var Ca=new WeakMap;function wa(e,t){let n=Ca.get(e);if(!n){let t=new Set,r=new MutationObserver(e=>{e.some(e=>e.target instanceof HTMLFieldSetElement)&&t.forEach(e=>e())});r.observe(e,{attributes:!0,attributeFilter:[`disabled`],subtree:!0}),n={observer:r,watchers:t},Ca.set(e,n)}n.watchers.add(t)}function Ta(e,t){let n=Ca.get(e);n&&(n.watchers.delete(t),n.watchers.size||(n.observer.disconnect(),Ca.delete(e)))}var Ea=new WeakMap,Da=new WeakMap,Y=new WeakSet,Oa=new WeakMap,ka=new WeakMap,Aa=new WeakMap,ja=new WeakMap,Ma=new WeakMap,Na=new WeakMap,Pa=new WeakMap,Fa=new WeakMap,Ia=new WeakMap,La=new WeakMap,Ra=new WeakMap,za=new WeakMap,Ba=new WeakMap,X=class t extends T(ga(c)){get form(){let e=this.getAttribute(`form`);if(e===null)return this.closest(`form`);let t=this.getRootNode().getElementById?.(e);return t instanceof HTMLFormElement?t:null}static get observedAttributes(){return[...super.observedAttributes,`form`]}attributeChangedCallback(e,t,n){super.attributeChangedCallback(e,t,n),e===`form`&&y(Y,this,Ga).call(this)}constructor(){super(),g(this,Y),this.type=`button`,this.disabled=!1,this.fieldsetDisabled=!1,b(this,Ea,this.attachInternals?.()),b(this,Da,!1),b(this,Oa,()=>{this.fieldsetDisabled=Sa(this)}),b(this,ka,!1),b(this,Aa,void 0),b(this,ja,e=>{if(Va.call(y(Y,this))){e.preventDefault(),e.stopImmediatePropagation();return}this.type!==`button`&&(v(Aa,this,e),_(ka,this)||setTimeout(()=>y(Y,this,Wa).call(this,e)))}),b(this,Ma,()=>{let e=this.active;this.active=!0;let t=()=>{this.active=e,document.removeEventListener(`mouseup`,t,!0),document.removeEventListener(`dragend`,t,!0)};document.addEventListener(`mouseup`,t,!0),document.addEventListener(`dragend`,t,!0)}),b(this,Na,e=>{if(e.composedPath()[0]!==this||(e.key===` `&&e.preventDefault(),this.active||!ya(e)))return;this.active=!0;let t=e=>{ya(e)&&(this.active=!1,document.removeEventListener(`keyup`,t,!0))};document.addEventListener(`keyup`,t,!0)}),b(this,Pa,e=>{ya(e)&&e.composedPath()[0]===this&&this.click()}),b(this,Fa,null),b(this,Ia,null),b(this,La,e=>{!this.toggle||Va.call(y(Y,this))||this.loading||this.dispatchEvent(new CustomEvent(`craft-toggle`,{bubbles:!0,composed:!0,cancelable:!0,detail:{active:!this.active,sourceEvent:e}}))}),this.variant=va.Fill,this.inherit=!1,this.size=`medium`,this.active=!1,this.toggle=!1,this.loading=!1,this.focusableWhenDisabled=!1,this.align=`center`,this.icon=null,this.href=null,this.target=null,this.rel=null,this.download=null,this.iconPosition=`prefix`,this._accessibleName=``,this._hasAccessibilityError=!1,this._hostLabel=null,this._content={label:!1,textLabel:!1,prefix:!1,suffix:!1},b(this,Ra,null),b(this,za,null),b(this,Ba,null),this.linkHostStateApplied=!1,this.originalType=null,this.addEventListener(`click`,_(ja,this),{capture:!0}),this.addEventListener(`mousedown`,_(Ma,this)),this.addEventListener(`keydown`,_(Na,this)),this.addEventListener(`keyup`,_(Pa,this))}click(){if(!(Va.call(y(Y,this))||_(ka,this))){v(ka,this,!0);try{super.click()}finally{v(ka,this,!1)}_(Aa,this)&&y(Y,this,Wa).call(this,_(Aa,this))}}connectedCallback(){super.connectedCallback(),this._hostLabel=this.getAttribute(`aria-label`),this.hasAttribute(`role`)||this.setAttribute(`role`,`button`),this.syncLinkHostState(),_(Oa,this).call(this),v(Fa,this,this.getRootNode()),wa(_(Fa,this),_(Oa,this)),y(Y,this,Ga).call(this),this.addEventListener(`click`,_(La,this)),y(Y,this,qa).call(this),v(za,this,new MutationObserver(()=>{y(Y,this,qa).call(this),this._hostLabel=this.getAttribute(`aria-label`),this.hasUpdated&&this.updateComplete.then(()=>y(Y,this,Ja).call(this))})),_(za,this).observe(this,{childList:!0,characterData:!0,subtree:!0,attributes:!0,attributeFilter:[`slot`,`aria-label`,`aria-labelledby`,`title`]}),this.hasUpdated&&!this._accessibleName.trim()&&y(Y,this,Ja).call(this)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,_(La,this)),_(za,this)?.disconnect(),v(za,this,null),y(Y,this,Za).call(this),y(Y,this,Ka).call(this),_(Fa,this)&&(Ta(_(Fa,this),_(Oa,this)),v(Fa,this,null))}willUpdate(e){super.willUpdate(e),e.has(`actionState`)&&e.get(`actionState`)!==void 0&&(this.loading=this.actionState===C.Loading)}updated(e){super.updated(e),(e.has(`href`)||e.has(`disabled`))&&this.syncLinkHostState();let n=e.has(`disabled`)||e.has(`fieldsetDisabled`)||e.has(`href`);if(e.has(`type`))y(Y,this,Ga).call(this);else if(n&&_(Ia,this)){let e=ba.get(_(Ia,this));e&&Ha.call(t,_(Ia,this),e)}if(n&&(Va.call(y(Y,this))?this.getAttribute(`aria-disabled`)!==`true`&&(this.setAttribute(`aria-disabled`,`true`),v(Da,this,!0)):_(Da,this)&&(this.removeAttribute(`aria-disabled`),v(Da,this,!1)),this.fieldsetDisabled&&!this.href?_(Ea,this)?.states?.add(`fieldset-disabled`):_(Ea,this)?.states?.delete(`fieldset-disabled`)),(n||e.has(`focusableWhenDisabled`))&&(this.disabled?this.tabIndex=this.focusableWhenDisabled?0:-1:Va.call(y(Y,this))?this.tabIndex=-1:this.isLink||(this.tabIndex=0)),e.has(`shortcut`)){let e=this.getAttribute(`aria-keyshortcuts`),t=this.shortcutAriaKeys;(e===null||e===_(Ra,this))&&(t?this.setAttribute(`aria-keyshortcuts`,t):this.removeAttribute(`aria-keyshortcuts`),v(Ra,this,t))}this.toggle&&(e.has(`active`)||e.has(`toggle`))&&this.setAttribute(`aria-pressed`,String(this.active)),e.has(`loading`)&&(this.loading?this.announceLoading():e.get(`loading`)&&this.clearLoadingAnnouncement())}announceLoading(){this.liveRegion.textContent=e(`Loading`)}clearLoadingAnnouncement(){this.liveRegion.textContent=``}syncLinkHostState(){this.isLink?(this.linkHostStateApplied||(this.originalType=this.type),this.setAttribute(`role`,`presentation`),this.removeAttribute(`tabindex`),this.type=`button`,this.linkHostStateApplied=!0):this.linkHostStateApplied&&=(this.setAttribute(`role`,`button`),this.type=this.originalType??`button`,this.disabled||(this.tabIndex=0),!1)}async firstUpdated(e){super.firstUpdated(e),await this.updateComplete;let t=this.querySelectorAll(`craft-icon, craft-spinner`);await Promise.all(Array.from(t).map(e=>e.updateComplete)),y(Y,this,Ja).call(this)}get isLink(){return!!this.href&&!this.disabled}get computedTarget(){return h(this.href,this.target)}render(){let e=this._content.prefix||!!this.icon&&this.iconPosition===`prefix`,t=this._content.suffix||!!this.icon&&this.iconPosition===`suffix`,r=u`
      <div
        class="${I({"button-content":!0,"button-content--spaced-prefix":e&&this._content.label,"button-content--spaced-suffix":t&&this._content.label,"button-content--icon-only":!!this.icon&&!this._content.label&&!this._content.prefix&&!this._content.suffix,"button-content--start":this.align===`start`,"button-content--end":this.align===`end`,"a11y-error":this._hasAccessibilityError})}"
        part="content"
      >
        <slot name="prefix" class="prefix" part="prefix">
          ${this.icon&&this.iconPosition===`prefix`?u`<craft-icon name="${this.icon}"></craft-icon>`:n}
        </slot>
        <slot
          class="${I({label:!0,"label--text":this._content.textLabel})}"
          part="label"
        ></slot>
        <slot name="suffix" class="suffix" part="suffix">
          ${this.icon&&this.iconPosition===`suffix`?u`<craft-icon name="${this.icon}"></craft-icon>`:n}
        </slot>
        ${this.shortcutKeys?u`<craft-shortcut
              class="shortcut"
              aria-hidden="true"
              ?alt="${this.shortcutKeys.alt}"
              ?shift="${this.shortcutKeys.shift}"
              >${this.shortcutKeys.key}</craft-shortcut
            >`:n}
      </div>
      ${this.loading?u`<craft-spinner part="spinner"></craft-spinner>`:n}
      <span class="cp-visually-hidden" role="status" data-live-region></span>
    `;if(this.isLink){let e=this.computedTarget,t=this._hostLabel?.trim()||null,i=!this.target&&!!e;return u`
        <a
          class="link"
          part="link"
          href="${this.href}"
          target="${e??n}"
          rel="${m(e,this.rel)??n}"
          download="${this.download??n}"
          aria-label="${t??n}"
          aria-describedby="${t&&i?`new-tab-cue`:n}"
          >${r}${i?u`<span id="new-tab-cue" class="cp-visually-hidden"
                >${p()}</span
              >`:n}</a
        >
      `}return r}};_a=X;function Va(){return this.disabled||!this.href&&Sa(this)}function Ha(e,t){let n=Ua.call(_a,t.owners);if(t.button.disabled=n?Va.call(y(Y,n)):!1,!n)return;let r=[...e.elements].find(e=>e!==t.button&&(e instanceof HTMLButtonElement||e instanceof HTMLInputElement)&&e.type===`submit`);if(r&&!(n.compareDocumentPosition(r)&Node.DOCUMENT_POSITION_FOLLOWING)){t.button.remove();return}let i=r;for(let e=r?.parentElement?.closest(`fieldset`);e&&!e.contains(n);e=e.parentElement?.closest(`fieldset`))i=e;i?t.button.nextElementSibling!==i&&i.before(t.button):e.lastElementChild!==t.button&&e.append(t.button),e.contains(t.button)?t.button.removeAttribute(`form`):t.button.setAttribute(`form`,e.id)}function Ua(e){let[t]=[...e].sort((e,t)=>e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1);return t}function Wa(e){if(_(Aa,this)!==e||(v(Aa,this,void 0),e.defaultPrevented||Va.call(y(Y,this))))return;let t=this.form;this.type===`submit`?t?.requestSubmit():this.type===`reset`&&t?.reset()}function Ga(){let e=this.isConnected&&this.type===`submit`?this.form:null;if(e===_(Ia,this)||(y(Y,this,Ka).call(this),!e))return;let t=ba.get(e);if(!t){let n=new Set;t={button:xa(()=>Ua.call(_a,n)?.click()),owners:n},ba.set(e,t)}t.owners.add(this),v(Ia,this,e),Ha.call(_a,e,t)}function Ka(){let e=_(Ia,this);if(!e)return;let t=ba.get(e);v(Ia,this,null),t&&(t.owners.delete(this),Ha.call(_a,e,t),queueMicrotask(()=>{!t.owners.size&&ba.get(e)===t&&(t.button.remove(),ba.delete(e))}))}function qa(){let e=e=>Array.from(this.childNodes).some(t=>t instanceof Element?(t.getAttribute(`slot`)||null)===e:e===null&&t.nodeType===Node.TEXT_NODE&&!!t.textContent?.trim()),t=e(null)&&!Array.from(this.children).some(e=>!e.slot&&!e.classList.contains(`sr-only`)),n={label:e(null),textLabel:t,prefix:e(`prefix`),suffix:e(`suffix`)};(n.label!==this._content.label||n.textLabel!==this._content.textLabel||n.prefix!==this._content.prefix||n.suffix!==this._content.suffix)&&(this._content=n)}function Ja(){if(!this.isConnected)return;let e=this.isLink?this.shadowRoot?.querySelector(`a.link`)??this:this;this._accessibleName=ha(e);let t=this._accessibleName.trim()===``;if(t&&!y(Y,this,Ya).call(this)){y(Y,this,Xa).call(this);return}this._hasAccessibilityError=t}function Ya(){return typeof this.checkVisibility==`function`?this.checkVisibility({visibilityProperty:!0}):this.getClientRects().length>0}function Xa(){_(Ba,this)||typeof ResizeObserver>`u`||(v(Ba,this,new ResizeObserver(()=>{y(Y,this,Ya).call(this)&&(y(Y,this,Za).call(this),y(Y,this,Ja).call(this))})),_(Ba,this).observe(this))}function Za(){_(Ba,this)?.disconnect(),v(Ba,this,null)}X.styles=[fi,M,w,pi],t([o({reflect:!0})],X.prototype,`type`,void 0),t([o({type:Boolean,reflect:!0})],X.prototype,`disabled`,void 0),t([l()],X.prototype,`fieldsetDisabled`,void 0),t([o({reflect:!0})],X.prototype,`variant`,void 0),t([o({reflect:!0,type:Boolean})],X.prototype,`inherit`,void 0),t([o({reflect:!0})],X.prototype,`size`,void 0),t([o({reflect:!0})],X.prototype,`value`,void 0),t([o({reflect:!0,type:Boolean})],X.prototype,`active`,void 0),t([o({type:Boolean,reflect:!0})],X.prototype,`toggle`,void 0),t([o({reflect:!0,type:Boolean})],X.prototype,`loading`,void 0),t([o({attribute:`focusable-when-disabled`,type:Boolean,reflect:!0})],X.prototype,`focusableWhenDisabled`,void 0),t([o({reflect:!0})],X.prototype,`flush`,void 0),t([o()],X.prototype,`align`,void 0),t([o()],X.prototype,`icon`,void 0),t([o({reflect:!0})],X.prototype,`href`,void 0),t([o()],X.prototype,`target`,void 0),t([o()],X.prototype,`rel`,void 0),t([o()],X.prototype,`download`,void 0),t([o({attribute:`icon-position`})],X.prototype,`iconPosition`,void 0),t([f(`[data-live-region]`)],X.prototype,`liveRegion`,void 0),t([l()],X.prototype,`_accessibleName`,void 0),t([l()],X.prototype,`_hasAccessibilityError`,void 0),t([l()],X.prototype,`_hostLabel`,void 0),t([l()],X.prototype,`_content`,void 0),customElements.get(`craft-button`)||customElements.define(`craft-button`,X);var Qa=new WeakMap,$a=new WeakMap,eo=new WeakSet,to=new WeakMap,no=new WeakMap,ro=class extends G{static get styles(){return[...super.styles,r`
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
      `]}constructor(){super(),g(this,eo),b(this,Qa,null),b(this,$a,!1),b(this,to,e=>{e.key!==`Escape`||e.target!==this._control||!y(eo,this,io).call(this)||(e.preventDefault(),e.stopPropagation(),v($a,this,!0),this.clear())}),b(this,no,e=>{e.key===`Escape`&&_($a,this)&&(e.stopPropagation(),v($a,this,!1))}),this.inputMode=`search`,this.addEventListener(`keydown`,_(to,this),{capture:!0}),this.addEventListener(`keyup`,_(no,this),{capture:!0})}connectedCallback(){!this.label&&!this.querySelector(`:scope > [slot="label"]`)&&(this.label=e(`Search`)),this.hasAttribute(`label-sr-only`)||(this.labelSrOnly=!0),this.placeholder||=e(`Search`),super.connectedCallback(),this._control?.setAttribute(`enterkeyhint`,`search`),this._control?.hasAttribute(`autocomplete`)||this._control?.setAttribute(`autocomplete`,`off`),y(eo,this,ao).call(this)}updated(e){super.updated(e),(e.has(`value`)||e.has(`disabled`)||e.has(`readOnly`))&&y(eo,this,ao).call(this)}_inputGroupInputTemplate(){return u`
      <div class="input-group__input">
        <slot name="input"></slot>
        <div class="input-search__clear">
          <slot name="search-clear"></slot>
        </div>
      </div>
    `}get slots(){return{...super.slots,prefix:()=>u`<craft-icon slot="prefix" name="search"></craft-icon>`}}clear(){this.disabled||this.readOnly||(this.value=``,this._control?.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),this._control?.focus(),this.dispatchEvent(new CustomEvent(`clear`,{bubbles:!0,composed:!0})))}};function io(){return this.value!==``}function ao(){let e=y(eo,this,io).call(this)&&!this.disabled&&!this.readOnly;e&&!_(Qa,this)?(v(Qa,this,y(eo,this,oo).call(this)),this.append(_(Qa,this)),this.toggleAttribute(`clearable`,!0),this.requestUpdate()):!e&&_(Qa,this)&&(_(Qa,this).contains(document.activeElement)&&this._control?.focus(),_(Qa,this).remove(),v(Qa,this,null),this.toggleAttribute(`clearable`,!1),this.requestUpdate())}function oo(){let t=document.createElement(`craft-button`);t.slot=`search-clear`,t.setAttribute(`data-search-clear`,``),t.setAttribute(`type`,`button`),t.setAttribute(`icon`,``),t.setAttribute(`size`,`small`),t.setAttribute(`variant`,`plain`),t.addEventListener(`click`,()=>this.clear());let n=document.createElement(`craft-icon`);return n.setAttribute(`name`,`xmark-large`),n.setAttribute(`label`,e(`Clear search`)),t.append(n),t.updateComplete.then(()=>{t.tabIndex=-1}),t}customElements.get(`craft-input-search`)||customElements.define(`craft-input-search`,ro);function so(e){Object.assign(e.style,{marginBlock:`calc(var(--c-spacing-sm) - var(--c-spacing-xs))`,marginInline:`0`,border:`0`,borderBlockStart:`1px solid var(--c-color-neutral-border-quiet)`})}var co=class t extends U{constructor(...t){super(...t),this.label=e(`Actions`),this.icon=`ellipsis`,this.disabled=!1,this.searchable=!1,this.uid=qr(),this._generatedInvoker=null,this._generatedContent=null,this._searchContainer=null,this._searchInput=null,this._searchField=null,this._onItemClick=e=>{let t=e.currentTarget;this.open=!1,this.actions===void 0&&this._dispatchChange(t)},this._onSearchKeydown=e=>{if(e.key===`ArrowDown`||e.key===`ArrowUp`){let t=this._getNavigableItems();t.length&&(e.preventDefault(),(e.key===`ArrowDown`?t[0]:t[t.length-1])?.focus());return}e.key===`Enter`&&e.preventDefault()},this._onOverlayShow=()=>{if(!this.open)return;if(this.searchable){this._searchInput?.focus();return}let e=this._getNavigableItems()[0];e?.hasUpdated===!1?e.updateComplete.then(()=>{this.open&&e.focus()}):e?.focus()},this._onContentKeydown=e=>{if(this._searchContainer?.contains(e.target))return;let t=this._getNavigableItems(),n=e.target?.closest?.(`craft-action-item`)??null,r=n?t.indexOf(n):-1;if(e.key===`ArrowDown`||e.key===`ArrowUp`){if(!t.length)return;e.preventDefault();let n;n=e.key===`ArrowDown`?r===-1?0:(r+1)%t.length:r===-1?t.length-1:(r-1+t.length)%t.length,t[n]?.focus();return}if(e.key===`Home`||e.key===`End`){if(!t.length)return;e.preventDefault(),(e.key===`Home`?t[0]:t[t.length-1])?.focus();return}if(e.key===` `&&!this.searchable&&n?.href){e.preventDefault(),(n.shadowRoot?.querySelector(`a[href]`)??n).click();return}n&&this._redirectTypingToSearch(e)},this._onContentSlotChange=()=>{this._syncSearchInput(),this._addEventListeners()},this._onInvokerSlotChange=()=>{if(this.actions===void 0)return;let e=!!this._generatedInvoker;this._renderDataDrivenMenu(),e!==!!this._generatedInvoker&&(this._syncInvoker(),this._setupInvoker())}}_addEventListeners(){let e=this.contentNodes[0];e&&(this._bindContent(e),this._observeContent(e))}_observeContent(e){this._contentObserver?.disconnect(),this._contentObserver=new MutationObserver(()=>this._bindContent(e)),this._contentObserver.observe(e,{childList:!0,subtree:!0})}_bindContent(e){e.querySelectorAll(`craft-action-item`).forEach(e=>e.addEventListener(`click`,this._onItemClick)),e.querySelectorAll(`hr`).forEach(so)}_dispatchChange(e){this.dispatchEvent(new CustomEvent(`craft-select`,{bubbles:!0,composed:!0,detail:{item:e}}))}_setupInvoker(){let e=this.invokerNodes[0];e&&(e.setAttribute(`id`,`invoker-${this.uid}`),e.setAttribute(`aria-controls`,`content-${this.uid}`)),this._syncInvokerDisabled()}_syncInvokerDisabled(){let e=this.invokerNodes[0];if(!e)return;this.disabled?e.setAttribute(`aria-disabled`,`true`):e.removeAttribute(`aria-disabled`);let t=e;t.updateComplete&&!t.hasUpdated&&t.updateComplete.then(()=>this._syncInvokerDisabled())}_setupContent(){let e=this.contentNodes[0];e&&(e.setAttribute(`id`,`content-${this.uid}`),e.setAttribute(`role`,`none`)),this._wireContentKeydown()}_setupOverlay(){super._setupOverlay(),this._setupInvoker(),this._setupContent(),this._addEventListeners()}_teardownOverlay(){this._contentObserver?.disconnect(),this._contentObserver=void 0,super._teardownOverlay()}_overlayShown(){super._overlayShown(),this.updateComplete.then(this._onOverlayShow)}firstUpdated(e){super.firstUpdated(e),this.shadowRoot?.querySelector(`slot[name="invoker"]`)?.addEventListener(`slotchange`,this._onInvokerSlotChange),this.shadowRoot?.querySelector(`slot[name="content"]`)?.addEventListener(`slotchange`,this._onContentSlotChange),this._syncSearchInput()}willUpdate(e){if(super.willUpdate(e),e.has(`open`)&&this.open&&this.disabled){this.open=!1;return}if(this.actions===void 0){this._removeGeneratedNodes();return}let t=e.has(`open`)&&this.open&&this._hasActionsProvider();(e.has(`actions`)||e.has(`label`)||e.has(`icon`)||e.has(`disabled`)||t||!this._generatedContent)&&this._renderDataDrivenMenu()}updated(e){super.updated(e),e.has(`disabled`)&&this._syncInvokerDisabled(),e.has(`open`)&&!this.open&&e.get(`open`)&&this._resetSearchFilter(),e.has(`searchable`)&&this._syncSearchInput(),this.actions!==void 0&&(e.has(`open`)&&this.open&&this._hasActionsProvider()&&(this._setupContent(),this._addEventListeners()),(e.has(`actions`)||e.has(`label`)||e.has(`icon`))&&this._rewireGeneratedMenu())}_rewireGeneratedMenu(){this._syncInvoker(),this._setupInvoker(),this._setupContent(),this._addEventListeners()}_hasSlottedInvoker(){return Array.from(this.children).some(e=>e.slot===`invoker`&&e!==this._generatedInvoker)}_removeGeneratedNodes(){this._generatedInvoker?.isConnected&&this._generatedInvoker.remove(),this._generatedContent?.isConnected&&this._generatedContent.remove(),this._generatedInvoker=null,this._generatedContent=null}_normalizeActions(e){return e.map(e=>e.type===`hr`||e.type===`display`?e:e.type===`group`?{...e,items:this._normalizeActions(e.items)}:`href`in e&&e.href?{...e,type:`link`,label:e.label??``}:{...e,type:e.type??`button`,label:e.label??``})}_sortActions(e){return e.map(e=>e.type===`group`?{...e,items:this._sortActions(e.items)}:e).sort((e,t)=>(`variant`in e&&e.variant===O.Danger)-+(`variant`in t&&t.variant===O.Danger))}_applyItemProps(e,t){let n=new Set([`type`,`label`,`onClick`,`href`,`keywords`,`attributes`]);for(let[r,i]of Object.entries(t))if(!(n.has(r)||i===void 0))try{e[r]=i}catch{}}_renderItem(e){if(e.type===`group`){let t=document.createDocumentFragment();if(e.heading){let n=document.createElement(`div`);n.className=`action-menu__heading`,n.textContent=e.heading,n.setAttribute(`role`,`presentation`),Object.assign(n.style,{paddingBlock:`var(--c-spacing-xs)`,paddingInline:`calc(var(--c-spacing-sm) * 2 + 1px) var(--c-spacing-md)`,fontSize:`var(--c-text-sm)`,fontWeight:`bold`}),t.appendChild(n)}for(let n of e.items){let e=this._renderItem(n);e&&t.appendChild(e)}return t}if(e.type===`hr`){let e=document.createElement(`hr`);return e.className=`action-menu__separator`,so(e),e}if(e.type===`display`)return typeof e.node==`function`?e.node():e.node;let t=document.createElement(`craft-action-item`);if(e.type===`link`&&(t.href=e.href),this._applyItemProps(t,e),e.keywords&&t.setAttribute(`data-keywords`,e.keywords),e.label&&(t.textContent=e.label),typeof e.onClick==`function`){let n=e.onClick;t.addEventListener(`click`,e=>n(e))}return t.addEventListener(`click`,()=>this._dispatchChange(e)),t}_resolveActions(){return typeof this.actions==`function`?this.actions():this.actions??[]}_hasActionsProvider(){return typeof this.actions==`function`}_renderDataDrivenMenu(){let e=this._sortActions(this._normalizeActions(this._resolveActions()));if(this._hasSlottedInvoker())this._generatedInvoker?.isConnected&&this._generatedInvoker.remove(),this._generatedInvoker=null;else{if(!this._generatedInvoker){let e=document.createElement(`craft-button`);e.setAttribute(`slot`,`invoker`),e.setAttribute(`type`,`button`),e.setAttribute(`icon`,``),e.setAttribute(`size`,`small`),e.setAttribute(`inherit`,`true`),e.setAttribute(`variant`,`plain`),this._generatedInvoker=e,this.appendChild(e)}this._generatedInvoker.disabled=this.disabled,this._generatedInvoker.toggleAttribute(`disabled`,this.disabled),a(u`<craft-icon
          name="${this.icon}"
          label="${this.label}"
        ></craft-icon>`,this._generatedInvoker)}if(!this._generatedContent){let e=document.createElement(`div`);e.setAttribute(`slot`,`content`),this._generatedContent=e,this.appendChild(e)}let t=this._generatedContent;t.replaceChildren();for(let n of e){let e=this._renderItem(n);e&&t.appendChild(e)}let n=!1;for(let e of t.children)e.classList.contains(`action-menu__heading`)?e.style.marginBlockStart=n?`var(--c-spacing-md)`:``:e.tagName===`CRAFT-ACTION-ITEM`&&(n=!0);this._syncSearchInput()}_getContentNode(){return this._generatedContent?this._generatedContent:Array.from(this.children).find(e=>e.slot===`content`)??null}_syncSearchInput(){let e=this._getContentNode();if(this._wireContentKeydown(),!this.searchable||!e){this._searchContainer?.isConnected&&this._searchContainer.remove(),e&&this._clearFilterAttributes(e);return}this._searchContainer||=this._buildSearchContainer(),e.firstElementChild!==this._searchContainer&&e.prepend(this._searchContainer)}_buildSearchContainer(){let t=document.createElement(`div`);t.className=`action-menu__search`;let n=document.createElement(`style`);n.textContent=`
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
    `,t.appendChild(n);let r=document.createElement(`input`);r.setAttribute(`aria-label`,e(`Search`)),r.addEventListener(`input`,()=>{this._applySearchFilter(r.value)}),r.addEventListener(`keydown`,this._onSearchKeydown);let i=document.createElement(`craft-input-search`);return i.setAttribute(`size`,`small`),r.slot=`input`,i.append(r),t.appendChild(i),this._searchInput=r,this._searchField=i,t}_getFilterableItems(e){return Array.from(e.querySelectorAll(t._filterableItemsSelector)).filter(n=>{if(this._searchContainer?.contains(n))return!1;let r=n.parentElement?.closest(t._filterableItemsSelector);return!r||!e.contains(r)})}_itemMatchesSearch(e,t){return`${e.textContent??``} ${e.getAttribute(`data-keywords`)??``}`.toLowerCase().includes(t)}_applySearchFilter(e){let t=this._getContentNode();if(!t)return;let n=e.trim().toLowerCase();for(let e of this._getFilterableItems(t))!n||this._itemMatchesSearch(e,n)?e.removeAttribute(`data-search-hidden`):e.setAttribute(`data-search-hidden`,``)}_clearFilterAttributes(e){e.querySelectorAll(`[data-search-hidden]`).forEach(e=>e.removeAttribute(`data-search-hidden`))}_resetSearchFilter(){this._searchField&&(this._searchField.value=``);let e=this._getContentNode();e&&this._clearFilterAttributes(e)}_getNavigableItems(){let e=this._getContentNode();return e?Array.from(e.querySelectorAll(`craft-action-item`)).filter(e=>!e.hasAttribute(`hidden`)&&!e.hasAttribute(`data-search-hidden`)):[]}_wireContentKeydown(){this._getContentNode()?.addEventListener(`keydown`,this._onContentKeydown)}_redirectTypingToSearch(e){if(!this.searchable||!this._searchInput||!(e.key.length===1&&!e.ctrlKey&&!e.metaKey&&!e.altKey)&&e.key!==`Backspace`)return;e.preventDefault();let t=this._searchInput;t.focus(),t.value=e.key===`Backspace`?t.value.slice(0,-1):t.value+e.key,this._applySearchFilter(t.value)}};co.styles=[...U.styles,r`
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
    `],co._filterableItemsSelector=`craft-action-item, li, button`,t([o({attribute:!1})],co.prototype,`actions`,void 0),t([o()],co.prototype,`label`,void 0),t([o()],co.prototype,`icon`,void 0),t([o({type:Boolean,reflect:!0})],co.prototype,`disabled`,void 0),t([o({type:Boolean,reflect:!0})],co.prototype,`searchable`,void 0),t([S({slot:`invoker`})],co.prototype,`invokerNodes`,void 0),t([S({slot:`content`})],co.prototype,`contentNodes`,void 0),customElements.get(`craft-action-menu`)||customElements.define(`craft-action-menu`,co);var lo=r`
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
`,Z=class extends c{constructor(){super(),this.label=null,this.position=`middle`,this.orientation=`vertical`,this.moves=[],this.variant=`plain`,this.disabled=!1,this.nested=!1,this.canIndent=!1,this.canOutdent=!1,this._hasFocus=!1,this._movedWhileFocused=!1,this._stopMenuEvent=e=>{e.target===e.currentTarget&&e.stopPropagation()},this.addEventListener(`focusin`,()=>{this._hasFocus=!0}),this.addEventListener(`focusout`,e=>{let t=e.relatedTarget;t instanceof Node&&!this.contains(t)?this._hasFocus=!1:t||setTimeout(()=>{this.isConnected&&!this.matches(`:focus-within`)&&(this._hasFocus=!1)})})}connectedCallback(){if(super.connectedCallback(),!this._movedWhileFocused)return;this._movedWhileFocused=!1;let e=document.activeElement;(!e||e===document.body)&&this._focusInvoker()}disconnectedCallback(){super.disconnectedCallback(),this._hasFocus&&(this._movedWhileFocused=!0,setTimeout(()=>{this._movedWhileFocused=!1,this.isConnected||(this._hasFocus=!1)}))}updated(e){super.updated(e),e.has(`disabled`)&&(this.disabled?this.setAttribute(`aria-disabled`,`true`):this.removeAttribute(`aria-disabled`))}_focusInvoker(){this.shadowRoot?.querySelector(`craft-button`)?.focus()}_canMove(e){switch(e){case`up`:return this.position!==`first`&&this.position!==`only`;case`down`:return this.position!==`last`&&this.position!==`only`;case`indent`:return this.nested&&this.canIndent;case`outdent`:return this.nested&&this.canOutdent}}_reorder(e){this.disabled||!this._canMove(e)||(this.matches(`:focus-within`)&&this._focusInvoker(),this.dispatchEvent(new CustomEvent(`craft-reorder`,{detail:{direction:e},bubbles:!0,composed:!0})))}_move(e){this.disabled||this.dispatchEvent(new CustomEvent(`craft-move`,{detail:{value:e},bubbles:!0,composed:!0}))}_isRtl(){return(this.closest(`[dir]`)?.getAttribute(`dir`)??document.documentElement.getAttribute(`dir`))?.toLowerCase()===`rtl`}render(){let t=this.label??e(`Reorder`),r=this.orientation===`horizontal`,i=r&&this._isRtl(),a=r?i?`arrow-right`:`arrow-left`:`arrow-up`,o=r?i?`arrow-left`:`arrow-right`:`arrow-down`,s=e(r?`Move forward`:`Move up`),c=e(r?`Move backward`:`Move down`);return u`
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
          flush=${Ie(this.flush)}
          ?disabled="${this.disabled}"
        >
          <craft-icon label="${t}">
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
          ${this.nested?u`
                <craft-action-item
                  icon="${this._isRtl()?`arrow-left`:`arrow-right`}"
                  ?disabled="${!this._canMove(`indent`)}"
                  @click="${()=>this._reorder(`indent`)}"
                  data-action="indent"
                  >${e(`Indent`)}</craft-action-item
                >
                <craft-action-item
                  icon="${this._isRtl()?`arrow-right`:`arrow-left`}"
                  ?disabled="${!this._canMove(`outdent`)}"
                  @click="${()=>this._reorder(`outdent`)}"
                  data-action="outdent"
                  >${e(`Outdent`)}</craft-action-item
                >
              `:n}
          ${this.moves.length>0?u`
                <hr class="separator" />
                ${this.moves.map(e=>u`
                    <craft-action-item
                      icon="${Ie(e.icon??void 0)}"
                      @click="${()=>this._move(e.value)}"
                      >${e.label}</craft-action-item
                    >
                  `)}
              `:n}
        </div>
      </craft-action-menu>
    `}};Z.styles=[lo],t([o()],Z.prototype,`label`,void 0),t([o({reflect:!0})],Z.prototype,`position`,void 0),t([o({reflect:!0})],Z.prototype,`orientation`,void 0),t([o({attribute:!1})],Z.prototype,`moves`,void 0),t([o({reflect:!0})],Z.prototype,`variant`,void 0),t([o({reflect:!0})],Z.prototype,`flush`,void 0),t([o({reflect:!0,type:Boolean})],Z.prototype,`disabled`,void 0),t([o({reflect:!0,type:Boolean})],Z.prototype,`nested`,void 0),t([o({attribute:`can-indent`,type:Boolean})],Z.prototype,`canIndent`,void 0),t([o({attribute:`can-outdent`,type:Boolean})],Z.prototype,`canOutdent`,void 0),customElements.get(`craft-reorder-button`)||customElements.define(`craft-reorder-button`,Z);function uo(e){let[t]=e.composedPath();return t instanceof Element&&t.matches(`:focus-visible`)}function fo(e){let t=document.activeElement;for(;t?.shadowRoot?.activeElement;)t=t.shadowRoot.activeElement;if(!t?.matches(`:focus-visible`))return!1;for(let n=t;n;){if(n===e)return!0;n=n.parentNode??(n instanceof ShadowRoot?n.host:null)}return!1}function po(e){let t=e;return(t.disabled===!0||e.getAttribute(`aria-disabled`)===`true`)&&!t.focusableWhenDisabled}function mo({invoker:e,content:t,show:n,hide:r,delayIn:i=0,delayOut:a=300}){let o=fo(e),s=!1,c=!1,l,u=t=>{let{type:u}=t;if(t.pointerType!==`touch`){if(clearTimeout(l),u===`pointerdown`){c=!0,s=!1,r();return}u===`pointerleave`&&t.currentTarget===e&&(c=!1),!c&&(o=u===`focusout`?!1:o||u===`focusin`&&uo(t),s=u===`pointerleave`?!1:s||u===`pointerenter`,l=(o||s)&&!po(e)?setTimeout(n,i):setTimeout(r,a))}},d=[`pointerenter`,`pointerleave`],f=[`pointerenter`,`pointerleave`,`pointerdown`,`focusin`,`focusout`];for(let e of d)t.addEventListener(e,u);for(let t of f)e.addEventListener(t,u);return{reset(){o=!1,s=!1},setContent(e){for(let n of d)t.removeEventListener(n,u),e.addEventListener(n,u);t=e},teardown(){clearTimeout(l);for(let e of d)t.removeEventListener(e,u);for(let t of f)e.removeEventListener(t,u)}}}var ho=new WeakMap,go=new WeakMap,_o=new WeakMap,vo=new WeakMap,yo=new WeakMap,bo=new WeakMap,Q=new WeakSet,xo=new WeakMap,So=new WeakMap,Co=new WeakMap,wo=new WeakMap,To=class extends c{constructor(){super(),g(this,Q),this.open=!1,this.placement=`top`,this.trigger=`hover focus`,this.invokerRelation=`description`,b(this,ho,null),b(this,go,qr(`tooltip`)),b(this,_o,null),b(this,vo,null),b(this,yo,null),b(this,bo,!1),b(this,xo,()=>{_(bo,this)&&this.invoker!==_(_o,this)?.node&&y(Q,this,Mo).call(this)}),b(this,So,()=>{let e=Array.from(this.children).find(e=>e instanceof HTMLElement&&e.slot===`content`);if(!e||!this.isConnected||e===_(ho,this))return;let t=_(_o,this);if(t&&y(Q,this,Fo).call(this,t.node,t.attribute),_(ho,this)?.removeEventListener(`keyup`,_(wo,this),!0),v(ho,this,null),v(go,this,qr(`tooltip`)),y(Q,this,jo).call(this),!t){_(bo,this)&&y(Q,this,Mo).call(this);return}y(Q,this,Po).call(this,t.node,t.attribute),_(vo,this)?.setContent(_(ho,this)),this.reposition()}),b(this,Co,()=>{y(Q,this,Io).call(this,!this.open)}),b(this,wo,e=>{e.key!==`Escape`||!this.open||Je(e)||(qe(e),y(Q,this,Io).call(this,!1))})}requestUpdate(e,t,n){super.requestUpdate(e,t,n),e===`open`&&$e(this)}get invoker(){if(this.for){let e=this.getRootNode();return typeof e.getElementById==`function`?e.getElementById(this.for)??void 0:void 0}return Array.from(this.children).find(e=>e instanceof HTMLElement&&e.slot===`invoker`)}async show(){y(Q,this,Io).call(this,!0),await this.updateComplete}reposition(){_(yo,this)?.update()}async hide(){y(Q,this,Io).call(this,!1),await this.updateComplete}render(){return u`
      <slot name="invoker" @slotchange=${_(xo,this)}></slot>
      <div
        class="overlay-layer"
        role="none"
        popover=${tt?`manual`:n}
      >
        <div class="overlay-position">
          <slot name="content" @slotchange=${_(So,this)}></slot>
        </div>
      </div>
    `}connectedCallback(){_(ho,this)&&_(ho,this).parentNode!==this&&_(So,this).call(this),y(Q,this,jo).call(this),super.connectedCallback(),this.hasUpdated&&!_(bo,this)&&y(Q,this,Ao).call(this)}disconnectedCallback(){super.disconnectedCallback(),y(Q,this,zo).call(this),this.updateComplete.then(()=>{if(this.isConnected){this.invoker!==_(_o,this)?.node&&y(Q,this,Mo).call(this),this.open&&y(Q,this,Ro).call(this);return}y(Q,this,No).call(this),this.open=!1,v(bo,this,!1)})}firstUpdated(e){super.firstUpdated(e),y(Q,this,Ao).call(this)}updated(e){super.updated(e),_(bo,this)&&((e.has(`for`)||e.has(`trigger`)||e.has(`invokerRelation`))&&y(Q,this,Mo).call(this),e.has(`open`)&&(this.open?y(Q,this,Ro).call(this):y(Q,this,zo).call(this)),e.has(`placement`)&&_(yo,this)&&_(yo,this).setOptions(y(Q,this,Lo).call(this)))}};function Eo(){return _(ho,this)}function Do(){return this.shadowRoot?.querySelector(`.overlay-layer`)??null}function Oo(){return this.shadowRoot?.querySelector(`.overlay-position`)??null}function ko(){return this.trigger.split(` `)}function Ao(){v(bo,this,!0),y(Q,this,Mo).call(this),this.open&&y(Q,this,Ro).call(this)}function jo(){var e;if(_(ho,this)?.isConnected)return;let t=Array.from(this.children).find(e=>e instanceof HTMLElement&&e.slot===`content`);t||(t=document.createElement(`div`),t.slot=`content`,t.append(...Array.from(this.childNodes).filter(e=>!(e instanceof Element)||e.slot===``)),this.append(t)),(e=t).id||(e.id=_(go,this)),v(go,this,t.id),t.setAttribute(`role`,`tooltip`),v(ho,this,t),t.addEventListener(`keyup`,_(wo,this),!0)}function Mo(){y(Q,this,No).call(this);let e=this.invoker,t=Eo.call(y(Q,this));if(!e||!t){y(Q,this,zo).call(this);return}let n=this.invokerRelation===`label`?`aria-labelledby`:`aria-describedby`;v(_o,this,{node:e,attribute:n}),y(Q,this,Po).call(this,e,n),e.addEventListener(`keyup`,_(wo,this),!0),ko.call(y(Q,this)).includes(`click`)?e.addEventListener(`click`,_(Co,this)):ko.call(y(Q,this)).includes(`manual`)||v(vo,this,mo({invoker:e,content:t,delayIn:200,delayOut:0,show:()=>y(Q,this,Io).call(this,!0),hide:()=>y(Q,this,Io).call(this,!1)})),this.open&&(_(yo,this)?.destroy(),v(yo,this,null),y(Q,this,Ro).call(this))}function No(){if(_(vo,this)?.teardown(),v(vo,this,null),!_(_o,this))return;let{node:e,attribute:t}=_(_o,this);e.removeEventListener(`keyup`,_(wo,this),!0),e.removeEventListener(`click`,_(Co,this)),y(Q,this,Fo).call(this,e,t),v(_o,this,null)}function Po(e,t){let n=(e.getAttribute(t)??``).split(/\s+/);n.includes(_(go,this))||e.setAttribute(t,[...n,_(go,this)].filter(Boolean).join(` `))}function Fo(e,t){let n=(e.getAttribute(t)??``).split(/\s+/).filter(e=>e&&e!==_(go,this));n.length?e.setAttribute(t,n.join(` `)):e.removeAttribute(t)}function Io(e){if(e===this.open)return;let t=new CustomEvent(e?`craft-before-show`:`craft-before-hide`,{cancelable:!0});this.dispatchEvent(t),!t.defaultPrevented&&(this.open=e)}function Lo(){return{strategy:`fixed`,placement:this.placement,modifiers:it(4)}}function Ro(){let e=Do.call(y(Q,this)),t=Oo.call(y(Q,this)),n=_(_o,this)?.node;!this.isConnected||!e||!t||!n||_(yo,this)||(nt(e),v(yo,this,Qn(n,t,y(Q,this,Lo).call(this))),_(yo,this).forceUpdate())}function zo(){let e=Do.call(y(Q,this));_(yo,this)?.destroy(),v(yo,this,null),_(vo,this)?.reset(),e&&rt(e)}To.styles=[at,r`
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
    `],t([o({type:Boolean,reflect:!0})],To.prototype,`open`,void 0),t([o({reflect:!0})],To.prototype,`for`,void 0),t([o({reflect:!0})],To.prototype,`placement`,void 0),t([o({reflect:!0})],To.prototype,`trigger`,void 0),t([o({attribute:`invoker-relation`})],To.prototype,`invokerRelation`,void 0),customElements.get(`craft-tooltip`)||customElements.define(`craft-tooltip`,To);var Bo=new WeakMap,Vo=new WeakMap,Ho=new WeakMap,Uo=new WeakSet,Wo=class extends c{constructor(...t){super(...t),g(this,Uo),this.label=e(`More Info`),this.icon=`circle-info`,this.disabled=!1,b(this,Bo,new AbortController),b(this,Vo,null),b(this,Ho,`info-icon-${Math.random().toString(36).slice(2,8)}`)}connectedCallback(){super.connectedCallback(),_(Bo,this).signal.aborted&&v(Bo,this,new AbortController);let{signal:e}=_(Bo,this);this.addEventListener(`craft-show`,()=>{Ko._&&Ko._!==this&&Ko._.renderRoot.querySelector(`craft-tooltip`)?.hide(),Ko._=this,y(Uo,this,Go).call(this)},{signal:e}),this.addEventListener(`craft-after-hide`,()=>{Ko._===this&&(Ko._=null),_(Vo,this)?.abort(),v(Vo,this,null)},{signal:e})}disconnectedCallback(){Ko._===this&&(Ko._=null),_(Vo,this)?.abort(),v(Vo,this,null),_(Bo,this).abort(),super.disconnectedCallback()}render(){return u`
      <div class="cp-info-icon">
        <craft-button
          type="button"
          icon
          size="zero"
          variant="plain"
          id="${_(Ho,this)}"
        >
          <craft-icon name="${this.icon}" label="${this.label}"></craft-icon>
        </craft-button>

        <craft-tooltip trigger="click" for="${_(Ho,this)}"
          ><slot></slot
        ></craft-tooltip>
      </div>
    `}};function Go(){_(Vo,this)?.abort(),v(Vo,this,new AbortController),document.addEventListener(`pointerdown`,e=>{e.composedPath().includes(this)||this.renderRoot.querySelector(`craft-tooltip`)?.hide()},{capture:!0,signal:_(Vo,this).signal})}Wo.styles=r`
    :host {
      display: inline-flex;
    }
  `;var Ko={_:null};t([o()],Wo.prototype,`label`,void 0),t([o()],Wo.prototype,`icon`,void 0),t([o({type:Boolean,reflect:!0})],Wo.prototype,`disabled`,void 0),t([f(`craft-tooltip`)],Wo.prototype,`tooltip`,void 0),customElements.get(`craft-info-icon`)||customElements.define(`craft-info-icon`,Wo);var qo=r`
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
`,$=class extends ci(c){constructor(...t){super(...t),this.required=!1,this.translatable=!1,this.translationDescription=e(`This field is translatable.`),this.fieldset=!1,this.hasErrors=!1,this.instructionsPosition=`before`,this.instructionsSrOnly=!1,this.__hasSlot=new ri(this,`heading-prefix`,`label-extra`,`actions`,`heading-suffix`),this.__lightDomObserver=new MutationObserver(()=>this.__onLightDomChanged()),this.__enhancedInput=null}connectedCallback(){super.connectedCallback(),this.__enhancedInput=this._control??null,this.__lightDomObserver.observe(this,{childList:!0}),this.__syncHasErrors(),this.__syncHasMaxlength(),this.__syncControlWidth(),this.updateComplete.then(()=>{this._labelNode&&this.addToAriaLabelledBy(this._labelNode),this.__wireDescribedBy()})}__syncHasMaxlength(){let e=this.querySelector(`:scope > [slot="input"]`);this.toggleAttribute(`has-maxlength`,!!(e?.hasAttribute(`maxlength`)&&!e.matches(`textarea, craft-textarea`)))}__syncControlWidth(){if(this.width!==void 0)return;let e=this.querySelector(`:scope > [slot="input"]`)?.getAttribute(`width`);(e===`full`||e===`auto`)&&(this.width=e)}disconnectedCallback(){super.disconnectedCallback(),this.__lightDomObserver.disconnect()}updated(e){super.updated(e),e.has(`fieldset`)&&this.__syncFieldsetSemantics(),(e.has(`label`)||e.has(`required`)||e.has(`translatable`)||e.has(`translationDescription`))&&this.__syncLabelDecorations()}get control(){return this._control??void 0}get _resolvedOrientation(){return this.orientation?this.orientation:(this.closest(`[dir]`)?.getAttribute(`dir`)??document.documentElement.getAttribute(`dir`))?.toLowerCase()===`rtl`?`rtl`:`ltr`}_enhanceLightDomA11y(){super._enhanceLightDomA11y(),this.__wireDescribedBy(),this.__syncFieldsetSemantics()}addToAriaLabelledBy(e,t={}){let n=this.__formControlTarget();if(n){n.addToAriaLabelledBy(e,{...t,idPrefix:`field-${t.idPrefix??`label`}`});return}if(this.fieldset||!this.__hasNativeLabelTarget()){this.__addGroupAriaReference(`aria-labelledby`,e,`label`);return}super.addToAriaLabelledBy(e,t)}addToAriaDescribedBy(e,t={}){let n=this.__formControlTarget();if(n){n.addToAriaDescribedBy(e,{...t,idPrefix:`field-${t.idPrefix??`description`}`});return}if(this.fieldset||!this.__hasNativeLabelTarget()){this.__addGroupAriaReference(`aria-describedby`,e,t.idPrefix??`description`);return}super.addToAriaDescribedBy(e,t)}removeFromAriaLabelledBy(e){let t=this.__formControlTarget();if(t){t.removeFromAriaLabelledBy(e);return}if(this.fieldset||!this.__hasNativeLabelTarget()){this.__removeGroupAriaReference(`aria-labelledby`,e);return}super.removeFromAriaLabelledBy(e)}removeFromAriaDescribedBy(e){let t=this.__formControlTarget();if(t){t.removeFromAriaDescribedBy(e);return}if(this.fieldset||!this.__hasNativeLabelTarget()){this.__removeGroupAriaReference(`aria-describedby`,e);return}super.removeFromAriaDescribedBy(e)}render(){return u`
      <div
        class="${I({"form-field":!0,[`form-field--${this.status}`]:!!this.status})}"
      >
        ${this._statusBadgeTemplate()}
        <div class="form-field__group-one">${this._groupOneTemplate()}</div>
        <div class="form-field__group-two">${this._groupTwoTemplate()}</div>
      </div>
    `}_groupOneTemplate(){return u`
      ${this._labelTemplate()}
      ${this.instructionsPosition===`before`?this._helpTextTemplate():n}
    `}_groupTwoTemplate(){return u`
      ${this._inputGroupTemplate()}
      ${this.instructionsPosition===`after`?this._helpTextTemplate():n}
      ${this._feedbackTemplate()}
    `}_labelTemplate(){let t=this.__hasLabel,r=this.__hasSlot.test(`label-extra`),i=this.__hasSlot.test(`actions`),a=r||i||this.readOnly&&!this.labelSrOnly||this.__hasSlot.test(`label-badge`)||this.__hasSlot.test(`heading-prefix`)||this.__hasSlot.test(`heading-suffix`);if(!t&&!a&&!this.readOnly)return u``;let o=i&&t&&!this.labelSrOnly,s=i?u`
          <div
            class=${I({"field-actions":!0,"field-actions--beside-label":o,"field-actions--after-text":o&&!this.__hasLabelDecorations})}
            part="actions"
            role="group"
            aria-label=${e(`Field actions`)}
          >
            <slot name="actions"></slot>
          </div>
        `:u`<slot name="actions"></slot>`,c=n;return t&&(c=this.labelSrOnly&&a?u`<span class="cp-visually-hidden"
              ><slot name="label"></slot
            ></span>`:u`<slot name="label"></slot>`),u`
      <div
        class=${I({"form-field__label":!0,"cp-visually-hidden":this.labelSrOnly&&!a})}
      >
        <slot name="heading-prefix"></slot>
        ${c}
        ${this.readOnly?u`<span
              class=${I({"read-only-badge":!0,"cp-visually-hidden":this.labelSrOnly&&a})}
              >${e(`Read Only`)}</span
            >`:n}
        <slot name="label-badge"></slot>
        ${o?s:n}
        ${r||i&&!o?u`<div class="flex-grow"></div>`:n}
        <slot name="label-extra"></slot>
        ${o?n:s}
        <slot name="heading-suffix"></slot>
      </div>
    `}_helpTextTemplate(){return this.__hasHelpText?this.instructionsSrOnly?u`<div class="cp-visually-hidden">${super._helpTextTemplate()}</div>`:super._helpTextTemplate():u``}_inputGroupTemplate(){return u`
      <div class=${I({"input-group":!0,input:!0,[this._resolvedOrientation]:!0,errors:this.hasErrors,disabled:this.disabled})}>
        ${this._inputGroupBeforeTemplate()}
        <div class="input-group__container">
          ${this._inputGroupPrefixTemplate()} ${this._inputGroupInputTemplate()}
          ${this._inputGroupSuffixTemplate()}
        </div>
        ${this._inputGroupAfterTemplate()}
      </div>
    `}_statusBadgeTemplate(){return this.status?u`
      <div
        class="form-field__status-indicator"
        title=${Ie(this.statusLabel)}
        aria-hidden="true"
      >
        <craft-visually-hidden>${this.statusLabel}</craft-visually-hidden>
      </div>
    `:n}get __hasLabel(){return this.label.trim()!==``}get __hasHelpText(){return this.helpText.trim()!==``}__lightChild(e){return Array.from(this.children).find(t=>t.slot===e)}__onLightDomChanged(){this.__enhanceSwappedInput(),this.__wireDescribedBy(),this.__syncFieldsetSemantics(),this.__syncHasErrors(),this.__syncLabelDecorations(),this.__syncHasMaxlength(),this.__syncControlWidth(),this.requestUpdate()}__wireDescribedBy(){let e=Array.from(this.children).filter(e=>e.slot===`after`&&`addToAriaDescribedBy`in e);for(let t of[`help-text`,`feedback`]){let n=this.__lightChild(t);if(n){this.addToAriaDescribedBy(n,{idPrefix:t});for(let r of e)r.addToAriaDescribedBy(n,{idPrefix:`field-${t}`})}}}__enhanceSwappedInput(){let e=this._control;if(!(!e||e===this.__enhancedInput)){if(this.__enhancedInput=e,e.classList.add(`form-control`),e.id||=this._inputId,this.__formControlTarget()){this._labelNode&&this.addToAriaLabelledBy(this._labelNode);return}this._reflectAriaReferences()}}__formControlTarget(){let e=this._control;return e&&`addToAriaLabelledBy`in e&&`addToAriaDescribedBy`in e?e:void 0}__hasNativeLabelTarget(){return!!this._control?.matches(`button, input, meter, output, progress, select, textarea`)}__addGroupAriaReference(e,t,n){t.id||=`${n}-${this._inputId}`;let r=new Set((this.getAttribute(e)??``).split(/\s+/).filter(Boolean));r.add(t.id),this.setAttribute(e,[...r].join(` `))}__removeGroupAriaReference(e,t){let n=(this.getAttribute(e)??``).split(/\s+/).filter(e=>e&&e!==t.id);n.length?this.setAttribute(e,n.join(` `)):this.removeAttribute(e)}__syncHasErrors(){let e=this.__lightChild(`feedback`);e&&(this.hasErrors=!!(e.childElementCount||e.textContent?.trim()))}__syncFieldsetSemantics(){let e=this._labelNode,t=this.__formControlTarget();this.fieldset||!t&&!this.__hasNativeLabelTarget()?(this.setAttribute(`role`,`group`),e&&(e.id||=`label-${this._inputId}`,this.setAttribute(`aria-labelledby`,e.id),e.removeAttribute(`for`))):(this.getAttribute(`role`)===`group`&&this.removeAttribute(`role`),this.removeAttribute(`aria-labelledby`),e&&t?e.removeAttribute(`for`):e&&this._control&&e.setAttribute(`for`,this._control.id||this._inputId))}get __hasLabelDecorations(){return!!this.label&&(this.required||this.translatable)}__syncLabelDecorations(){let t=this._labelNode;if(!t)return;for(let e of t.querySelectorAll(`[data-craft-field-decoration]`))e.remove();if(!this.label||!this.__hasLabelDecorations)return;let n=document.createElement(`span`);if(n.setAttribute(`data-craft-field-decoration`,``),Object.assign(n.style,{display:`inline-flex`,alignItems:`center`,gap:`var(--_heading-gap)`,marginInlineStart:`var(--_label-text-bearing)`}),t.append(n),this.required){let t=document.createElement(`craft-visually-hidden`);t.textContent=e(`Required`),t.setAttribute(`data-craft-field-decoration`,``);let r=document.createElement(`craft-icon`);r.setAttribute(`name`,`asterisk`),r.setAttribute(`data-craft-field-decoration`,``),r.setAttribute(`data-color`,`danger`),r.setAttribute(`aria-hidden`,`true`),n.append(t,r)}if(this.translatable){let e=document.createElement(`craft-info-icon`);e.icon=`language`,e.label=this.translationDescription,e.textContent=this.translationDescription,e.className=`t9n-indicator prevent-autofocus`,e.setAttribute(`data-craft-field-decoration`,``),e.addEventListener(`click`,e=>e.preventDefault()),n.append(e)}}};$.styles=[M,Gr,qo],t([o({type:Boolean,reflect:!0})],$.prototype,`required`,void 0),t([o({type:Boolean,reflect:!0})],$.prototype,`translatable`,void 0),t([o({attribute:`translation-description`})],$.prototype,`translationDescription`,void 0),t([o({type:Boolean,reflect:!0})],$.prototype,`fieldset`,void 0),t([o({reflect:!0})],$.prototype,`status`,void 0),t([o({attribute:`status-label`})],$.prototype,`statusLabel`,void 0),t([o({reflect:!0})],$.prototype,`orientation`,void 0),t([o({type:Boolean,reflect:!0,attribute:`has-errors`})],$.prototype,`hasErrors`,void 0),t([o({attribute:`instructions-position`})],$.prototype,`instructionsPosition`,void 0),t([o({type:Boolean,reflect:!0,attribute:`instructions-sr-only`})],$.prototype,`instructionsSrOnly`,void 0),t([o({type:String,reflect:!0})],$.prototype,`width`,void 0),customElements.get(`craft-field`)||customElements.define(`craft-field`,$);export{De as A,M as B,qe as C,Ne as D,Ie as E,le as F,E as G,j as H,re as I,C as K,ee as L,I as M,ce as N,we as O,de as P,te as R,Xe as S,Ue as T,k as U,A as V,D as W,Qn as _,li as a,it as b,ei as c,qr as d,Gr as f,Hr as g,Kr as h,G as i,Ae as j,Ce as k,Zr as l,Ur as m,va as n,ii as o,Wr as p,S as q,di as r,ci as s,X as t,Jr as u,rt as v,We as w,at as x,nt as y,F as z};