import{a as e,t}from"./rolldown-runtime-CNC7AqOf.js";import{n}from"./translate.ts-DW16fAdu.js";import{t as r}from"./decorate-B3KLIx2E-B3KLIx2E.js";import{a as i,d as a,f as o,i as s,n as c,o as l,r as u,s as d,t as f,u as p}from"./decorators-B_wqftM0.js";import{t as m}from"./query-Df4-SAIv.js";import{B as h,C as g,E as _,G as v,H as y,I as b,K as x,L as S,M as C,R as w,S as T,T as E,U as ee,V as D,W as te,_ as ne,a as re,b as ie,c as ae,d as oe,f as se,g as ce,h as le,i as ue,j as de,k as fe,l as pe,m as me,n as he,o as ge,p as _e,q as ve,r as ye,s as be,t as xe,u as Se,v as Ce,w as we,x as Te,y as Ee,z as De}from"./field-D4DsXqi6-C1Ix3Ubc.js";import{a as Oe,n as ke,t as Ae}from"./external-links.ts-D9CFywYE.js";import{a as O,i as k,n as A,o as j,r as M}from"./Config.ts-CMTyoefP.js";import"./http.ts-Dxb5bouu.js";import{r as je}from"./actionClient-DlCWcHgA-BOe1VjYK.js";import"./button-group-B31Aahk_-CaInXewD.js";import{t as Me}from"./thumbnail-loader.ts-DV_9QuIU.js";import{n as Ne}from"./focus-trap.ts-CYkx7NGB.js";import"./progress.ts-DaLxTC_8.js";import"./apiClient.ts-Dxzf5kBZ.js";var Pe=a`
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
`,Fe=class extends u{constructor(...e){super(...e),this.label=null,this._gradientId=null}connectedCallback(){super.connectedCallback(),this._gradientId=`avatar-gradient-${Math.random().toString(36).slice(2,8)}`}text(){return this.label?this.label.split(` `).map(e=>e.charAt(0).toUpperCase()).join(``):`?`}render(){return p`
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
    `}};Fe.styles=[Pe],r([c()],Fe.prototype,`label`,void 0),r([f()],Fe.prototype,`_gradientId`,void 0),customElements.get(`craft-avatar`)||customElements.define(`craft-avatar`,Fe);var Ie=[`red`,`orange`,`amber`,`yellow`,`lime`,`green`,`emerald`,`teal`,`cyan`,`sky`,`blue`,`indigo`,`violet`,`purple`,`fuchsia`,`pink`,`rose`,`white`,`gray`,`black`,`slate`],Le=[`white`,`gray`,`slate`,`black`],Re={neutral:`slate`,accent:`blue`,info:`sky`,success:`emerald`,warning:`yellow`,danger:`red`},ze={pending:`sky`,off:`red`,suspended:`red`,expired:`red`,disabled:`gray`,inactive:`gray`,on:`teal`},Be=Le.map(e=>`[data-color='${e}']`).join(`, `);function Ve(e=``){return o(`:host([data-color]:not(${Be})${e})`)}var He=e=>e.charAt(0).toUpperCase()+e.slice(1),Ue={...Object.fromEntries(Ie.map(e=>[He(e),e])),...Object.fromEntries(Object.entries(Re).map(([e,t])=>[He(e),t])),...Object.fromEntries(Object.entries(ze).map(([e,t])=>[He(e),t]))},We=[...Ie],Ge=class extends u{constructor(...e){super(...e),this.size=`md`,this.fill=`var(--c-color-fill-loud)`,this.label=null}get effectiveAppearance(){return this.appearance?this.appearance:this.fill===Ue.White||this.fill===Ue.Black?Se.OutlineFill:Se.Solid}getFill(){return We.includes(this.fill)||ee.includes(this.fill)?`var(--c-color-${this.fill}-fill-loud)`:this.fill}getSize(){switch(this.size){case`md`:return`0.6em`;case`lg`:return`1em`;default:return this.size}}render(){return p`<span
      style="--fill: ${this.getFill()}; --size: ${this.getSize()}"
      aria-label="${this.label??i}"
      role="${this.label?`img`:i}"
      class="${C({indicator:!0,[`indicator--${this.effectiveAppearance}`]:!0,"indicator--white":this.fill===Ue.White,"indicator--black":this.fill===Ue.Black})}"
    ></span>`}};Ge.styles=[te,a`
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
    `],r([c()],Ge.prototype,`size`,void 0),r([c({reflect:!0})],Ge.prototype,`fill`,void 0),r([c()],Ge.prototype,`label`,void 0),r([c({reflect:!0})],Ge.prototype,`appearance`,void 0),customElements.get(`craft-indicator`)||customElements.define(`craft-indicator`,Ge);var Ke={Small:`small`,Medium:`medium`,Large:`large`};Object.values(Ke);var qe=a`
  :host {
    display: inline-flex;
  }

  /*
   * As with chips, a blue link would clash with the fill, so links take the
   * badge's text color, and are underlined so they still stand apart from it.
   * Neutral badges keep the default link styling (a black badge's contents
   * take the dark theme's).
   */
  ${Ve()} {
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

  ${Ve()} ::slotted(craft-icon) {
    color: inherit;
  }

  .badge__label--text {
    display: block;
    text-box: trim-both cap alphabetic;
  }
`,Je=class extends u{constructor(...e){super(...e),this.fill=Ue.Gray,this.noPrefix=!1,this.size=Ke.Medium,this.hasLabel=!1,this.hasTextLabel=!1,this.hasSuffix=!1,this.contentObserver=new MutationObserver(()=>this.readContent())}connectedCallback(){super.connectedCallback(),this.readContent(),this.contentObserver.observe(this,{childList:!0,characterData:!0,subtree:!0,attributes:!0,attributeFilter:[`slot`]})}disconnectedCallback(){super.disconnectedCallback(),this.contentObserver.disconnect()}readContent(){let e=[...this.childNodes];this.hasLabel=e.some(e=>e instanceof Element&&!e.hasAttribute(`slot`)||e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!==``),this.hasTextLabel=this.hasLabel&&!e.some(e=>e instanceof Element&&!e.slot),this.hasSuffix=e.some(e=>e instanceof Element&&e.slot===`suffix`)}getFill(){return this.fill}willUpdate(e){e.has(`fill`)&&(this.dataset.color=this.getFill())}render(){return p`
      <span
        part="badge"
        class="${C({badge:!0,"badge--small":this.size===Ke.Small,"badge--large":this.size===Ke.Large,"badge--labeled":this.hasLabel})}"
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
              class="${C({"badge__label--text":this.hasTextLabel})}"
            ></slot>`:i}
        ${this.hasSuffix?p`<span class="badge__suffix">
              <slot name="suffix" part="suffix"></slot>
            </span>`:i}
      </span>
    `}};Je.styles=[qe],r([c({reflect:!0})],Je.prototype,`fill`,void 0),r([c({attribute:`no-prefix`,type:Boolean})],Je.prototype,`noPrefix`,void 0),r([c()],Je.prototype,`size`,void 0),r([f()],Je.prototype,`hasLabel`,void 0),r([f()],Je.prototype,`hasTextLabel`,void 0),r([f()],Je.prototype,`hasSuffix`,void 0),customElements.get(`craft-badge`)||customElements.define(`craft-badge`,Je);var Ye=class extends u{constructor(...e){super(...e),this.rel=`noreferrer noopener`}render(){let e=Ae(this.href,this.target);return p`
      <slot name="prefix" part="prefix"></slot>
      ${this.href?p`<a
          part="label"
          class="label"
          href=${this.href}
          target=${e??i}
          rel=${e?this.rel:i}
          ><slot></slot>${!this.target&&e?p`<span class="cp-visually-hidden">${Oe()}</span>`:i}</a
        >`:p`<span part="label" class="label"><slot></slot></span>`}
      <slot name="suffix" part="suffix"></slot>
      <slot name="separator" part="separator" aria-hidden="true"></slot>
    `}};Ye.styles=[h,a`
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

      /* With the crumb's gap, its margin puts as much space before it as the
         list's gap puts after it (see craft-breadcrumbs), centering it. */
      slot[name='separator']::slotted(*) {
        color: var(--color-slate-300);
        font-size: var(--c-text-base);
        font-weight: var(--font-weight-light);
        margin-block: 0;
        margin-inline: var(--c-spacing-sm) 0;
      }

      slot[name='separator']::slotted([data-default]) {
        --_chevron-stroke: 1px;
        --_chevron-angle: 30deg;
        --_chevron-reach: calc(12rem / 16 * tan(var(--_chevron-angle)));
        --_chevron-arm: calc(12rem / 16 / cos(var(--_chevron-angle)));
        position: relative;
        display: inline-block;
        inline-size: calc(var(--_chevron-reach) + var(--_chevron-stroke));
        block-size: calc(24rem / 16);
        color: var(--c-color-neutral-border-quiet);
        font-size: 0;
      }

      slot[name='separator']::slotted([data-default])::before,
      slot[name='separator']::slotted([data-default])::after {
        content: '';
        position: absolute;
        inset-inline-start: calc(var(--_chevron-reach) / 2);
        block-size: var(--_chevron-arm);
        border-inline-start: var(--_chevron-stroke) solid currentColor;
      }

      slot[name='separator']::slotted([data-default])::before {
        inset-block-start: calc((12rem / 16 - var(--_chevron-arm)) / 2);
        rotate: calc(var(--_chevron-angle) * -1);
      }

      slot[name='separator']::slotted([data-default])::after {
        inset-block-end: calc((12rem / 16 - var(--_chevron-arm)) / 2);
        rotate: var(--_chevron-angle);
      }

      :host(:dir(rtl)) slot[name='separator']::slotted([data-default]) {
        scale: -1 1;
      }
    `],r([c({reflect:!0})],Ye.prototype,`href`,void 0),r([c()],Ye.prototype,`target`,void 0),r([c()],Ye.prototype,`rel`,void 0),customElements.get(`craft-breadcrumb-item`)||customElements.define(`craft-breadcrumb-item`,Ye);var Xe=a`
  /* Matches the space before each separator: a crumb's own gap and the
     separator's margin (see craft-breadcrumb-item). */
  :host {
    gap: var(--c-spacing-md);
  }

  .breadcrumbs {
    display: flex;
    align-items: center;
    /* The host isn't the flex container, so a gap set on it (e.g. a utility
       class) is handed down to the one that is. */
    gap: inherit;
  }
`,Ze=class extends u{constructor(...e){super(...e),this.label=n(`Breadcrumbs`),this.items=[],this.visibleItems=0,this.firstRender=!0}getSeparator(){let e=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[e,...e.querySelectorAll(`[id]`)].forEach(e=>e.removeAttribute(`id`)),e.setAttribute(`data-default`,``),e.slot=`separator`,e}calculateBreadcrumbItemsWidth(){this.items=this.breadcrumbsElements.map((e,t)=>{let n=e.offsetWidth;return e.hasAttribute(`hidden`)&&(e.removeAttribute(`hidden`),n=e.offsetWidth,e.setAttribute(`hidden`,``)),{label:e.innerText,href:e.href,value:t.toString(),offsetWidth:n,isVisible:!0}})}async handleSlotChange(){let e=[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>e.tagName.toLowerCase()===`craft-breadcrumb-item`);if(e.forEach((t,n)=>{let r=n===e.length-1,i=t.querySelector(`[slot="separator"]`);r?i?.hasAttribute(`data-default`)&&i.remove():i===null?t.append(this.getSeparator()):i.hasAttribute(`data-default`)&&i.replaceWith(this.getSeparator()),r?t.setAttribute(`aria-current`,`page`):t.removeAttribute(`aria-current`)}),this.breadcrumbsElements.length===0){this.items=[],this.visibleItems=0;return}await Promise.all(this.breadcrumbsElements.map(e=>e.updateComplete)),this.calculateBreadcrumbItemsWidth(),this.visibleItems=0,this.adjustOverflow()}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{if(this.firstRender){this.firstRender=!1;return}this.adjustOverflow()}),this.resizeObserver.observe(this)}adjustOverflow(){}disconnectedCallback(){this.resizeObserver?.unobserve(this),super.disconnectedCallback()}render(){return p`
      <nav class="breadcrumbs" aria-label="${this.label}">
        <slot @slotchange="${this.handleSlotChange}"></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator"><span class="separator">/</span></slot>
      </span>
    `}};Ze.styles=[Xe],r([m(`slot`)],Ze.prototype,`defaultSlot`,void 0),r([m(`slot[name="separator"]`)],Ze.prototype,`separatorSlot`,void 0),r([ve({selector:`craft-breadcrumb-item`})],Ze.prototype,`breadcrumbsElements`,void 0),r([c()],Ze.prototype,`label`,void 0),r([f()],Ze.prototype,`items`,void 0),r([f()],Ze.prototype,`visibleItems`,void 0),customElements.get(`craft-breadcrumbs`)||customElements.define(`craft-breadcrumbs`,Ze);var Qe={dark:.9,light:.85},$e={dark:.6,light:.52},et=.65,tt=.8;function nt(e){let t=e.flat().filter(e=>e!==null);return t.length?Math.min(...t.map(([e])=>e))>=.25?`light`:`dark`:null}function rt(e,t){let n=Array.isArray(e)?e:[],r=n.length&&nt(n.slice(0,1))||`dark`,i=n.length&&nt(n.slice(-1))||`dark`;return{header:t?{theme:r,treatment:`bar`,opacity:$e[r]}:{theme:r,treatment:`backed`,opacity:et},body:{theme:i,opacity:$e[i]}}}var it=a`
  :host {
    display: block;
  }

  /* On a tinted card links take the card's text color, and are underlined so
     they still stand apart from it. Neutral cards keep the default link
     styling (black's contents take the dark theme's). */
  ${Ve()} {
    --c-text-link: currentColor;
    --c-link-decoration: underline;
    --c-link-decoration-hover: none;
  }

  /* What's in a tinted card takes the card's color rather than gray, as its
     body does: neutral controls and hairlines, the selected tab's indicator,
     form control and checkbox borders, and UI text. */
  ${Ve()} ::slotted(*) {
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
    /* Sizes the body's padding to the card. */
    container: card / inline-size;
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

  /* The body's padding grows with the card: 16px up to 400px wide, 24px
     from 800px. */
  .card-body {
    --_body-padding: clamp(
      var(--c-spacing-lg),
      2cqi + var(--c-spacing-md),
      calc(var(--c-spacing) * 6)
    );
    --_body-padding-inline: var(--c-card-padding-inline, var(--_body-padding));
    --_body-padding-block: var(--c-card-padding-block, var(--_body-padding));
    /* Fields in the card mark changes along its edge. */
    --c-field-indicator-inset: var(--_body-padding-inline);
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
`,at=e=>{if(typeof e!=`string`)return e;try{let t=JSON.parse(e);return Array.isArray(t)?t:null}catch{return null}},ot=e=>e===`dark`?`rgb(255 255 255 / ${Qe.dark})`:`rgb(0 0 0 / ${Qe.light})`,st=e=>e===`dark`?`#000`:`#fff`,ct=e=>e===`dark`?`#fff`:`#000`,lt=(e,t)=>e===`dark`?`rgb(0 0 0 / ${t})`:`rgb(255 255 255 / ${t})`,ut=e=>e===`dark`?`rgb(255 255 255 / 20%)`:`rgb(0 0 0 / 15%)`,dt=class extends pe(u,{customProperty:[`--c-card-padding-block`,`--c-card-padding-inline`]}){constructor(...e){super(...e),this.label=``,this.active=!1,this.collapsed=!1,this.showThumb=!0,this.thumbAlignment=`start`,this.coverSrc=``,this._coverFailed=!1,this.luminance=null,this._luminance=null,this._themed=new Set,this._lightDom=new D(this,{characterData:!0}),this._onCoverError=()=>{this._coverFailed=!0}}_hasLabel(){return!!this.label||y(this,`label`)||Array.from(this.children).some(e=>e.slot===`header`&&!!e.querySelector(`[data-card-label]`))}_hasHeaderText(){return this._hasLabel()||y(this,`badge`)}_hasHeaderContent(){let e=e=>e.tagName===`DIV`||e.tagName===`SPAN`;return!!this.label||Array.from(this.children).some(t=>[`header`,`label`,`badge`,`actions`].includes(t.slot)&&(!!t.textContent?.trim()||!e(t)||Array.from(t.querySelectorAll(`*`)).some(t=>!e(t))))}_cover(){return this.coverSrc&&!this._coverFailed?rt(this._luminance,this._hasHeaderText()):null}willUpdate(e){super.willUpdate(e),e.has(`luminance`)&&(this._luminance=at(this.luminance)),e.has(`coverSrc`)&&(this._coverFailed=!1)}_coverStyles(e){if(!e)return{};let{header:t,body:n}=e;return{"--_header-ink":ot(t.theme),"--_header-ink-solid":ct(t.theme),"--_header-solid":st(t.theme),"--_header-fill":lt(t.theme,t.opacity),"--_header-backing":t.treatment===`backed`?lt(t.theme,t.opacity):void 0,"--_header-backing-hover":t.treatment===`backed`?lt(t.theme,tt):void 0,"--_header-rule":ut(t.theme),"--_body-ink":ot(n.theme),"--_body-ink-solid":ct(n.theme),"--_body-solid":st(n.theme),"--_body-scrim":String(n.opacity),"--_body-rule":ut(n.theme)}}updated(){let e=this._cover(),t=new Set;if(e)for(let n of Array.from(this.children)){if(n.slot===`thumbnail`)continue;let r=n.slot===``||n.slot===`footer`;n.setAttribute(`data-theme`,r?e.body.theme:e.header.theme),n.setAttribute(`data-cover`,r?`body`:e.header.treatment),t.add(n)}for(let e of this._themed)t.has(e)||(e.removeAttribute(`data-theme`),e.removeAttribute(`data-cover`));this._themed=t}render(){let e=this._hasHeaderContent(),t=y(this,`footer`),n=this._cover(),r=!n&&this.showThumb&&y(this,`thumbnail`),a=!n&&e&&!this._hasLabel();return p`
      <div
        part="base"
        class="${C({card:!0,"card--has-thumbnail":r,"card--cover":!!n,"card--cover-bar":n?.header.treatment===`bar`,"card--bare-header":a})}"
        style="${ae({...this.paddingStyles,...this._coverStyles(n)})}"
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
          class="${C({"card-body":!0,"card-body--thumb-start":r&&this.thumbAlignment===`start`,"card-body--thumb-end":r&&this.thumbAlignment===`end`})}"
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
    `}};dt.styles=[it],r([c()],dt.prototype,`label`,void 0),r([c({type:Boolean,reflect:!0})],dt.prototype,`active`,void 0),r([c({type:Boolean,reflect:!0})],dt.prototype,`collapsed`,void 0),r([c({attribute:`show-thumb`,type:Boolean})],dt.prototype,`showThumb`,void 0),r([c({attribute:`thumb-alignment`})],dt.prototype,`thumbAlignment`,void 0),r([c({attribute:`cover-src`})],dt.prototype,`coverSrc`,void 0),r([f()],dt.prototype,`_coverFailed`,void 0),r([c({type:Array})],dt.prototype,`luminance`,void 0),customElements.get(`craft-card`)||customElements.define(`craft-card`,dt);var ft={ArrowDown:1,ArrowRight:1,ArrowUp:-1,ArrowLeft:-1},pt=(e,{choice:t,multiple:n})=>{var i=new WeakMap,a=new WeakMap,o=new WeakMap,s=new WeakMap,l=new WeakMap,u=new WeakMap,d=new WeakSet,f=new WeakMap,m=new WeakMap;class h extends be(e){constructor(...e){super(...e),O(this,d),this.name=``,this.required=!1,this.invalid=!1,this.multiple=n,M(this,i,void 0),M(this,a,[]),M(this,o,!1),M(this,s,new WeakSet),M(this,l,new WeakSet),M(this,u,new MutationObserver(e=>{if(j(d,this,b).call(this),!n){let t=this.choices,n=e.map(e=>e.target).reverse().find(e=>t.includes(e)&&e.checked&&e.hasAttribute(`checked`));if(n)j(d,this,C).call(this,n);else for(let e of t)e._syncFromControl?.()}j(d,this,S).call(this)})),M(this,f,e=>{let t=ft[e.key],r=j(d,this,x).call(this,e.target);if(n||this.name||!t||!r||e.altKey||e.ctrlKey||e.metaKey)return;let i=this.choices.filter(e=>!e.disabled),a=e.key!==`ArrowDown`&&e.key!==`ArrowUp`&&getComputedStyle(this).direction===`rtl`,o=i.at((i.indexOf(r)+(a?-t:t))%i.length);o&&(e.preventDefault(),o._control?.focus(),o.checked||o._control?.click())}),M(this,m,e=>{let t=j(d,this,x).call(this,e.target);t&&(A(i,this,void 0),t._syncFromControl(),!n&&t.checked&&j(d,this,C).call(this,t),e.type===`change`&&this.requestUpdate(`value`))})}get choices(){return[...this.querySelectorAll(t)].filter(e=>e.parentElement?.closest(this.localName)===this)}get value(){let e=this.choices.filter(e=>e.checked).map(e=>e.value);return n?e:e[0]??``}set value(e){let t=this.value,n=(Array.isArray(e)?e:e==null||e===``?[]:[e]).map(String);A(i,this,n),j(d,this,y).call(this,this.choices,n),this.requestUpdate(`value`,t)}get _control(){return this}connectedCallback(){j(d,this,g).call(this),super.connectedCallback(),this.setAttribute(`role`,n?`group`:`radiogroup`),this._labelNode?.removeAttribute(`for`),this.classList.remove(`form-control`),this.addEventListener(`input`,k(m,this),!0),this.addEventListener(`change`,k(m,this),!0),this.addEventListener(`keydown`,k(f,this)),k(u,this).observe(this,{childList:!0,subtree:!0,...n?{}:{attributes:!0,attributeFilter:[`checked`,`disabled`]}}),A(a,this,[]),j(d,this,b).call(this)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`input`,k(m,this),!0),this.removeEventListener(`change`,k(m,this),!0),this.removeEventListener(`keydown`,k(f,this)),k(u,this).disconnect()}willUpdate(e){super.willUpdate(e),j(d,this,g).call(this)}updated(e){if(super.updated(e),e.has(`name`)&&k(o,this))for(let e of this.choices)e.name=this.name;if(e.has(`disabled`)&&e.get(`disabled`)!==void 0)for(let e of this.choices)this.disabled?j(d,this,_).call(this,e):k(s,this).delete(e)&&(e.disabled=!1);let t=(e,t)=>t?this.setAttribute(e,`true`):this.removeAttribute(e);e.has(`required`)&&!n&&t(`aria-required`,this.required),e.has(`invalid`)&&t(`aria-invalid`,this.invalid),j(d,this,S).call(this)}_inputGroupTemplate(){return p`<div class="input-group"><slot></slot></div>`}_onChoicesChanged(){}}function g(){if(this.name&&A(o,this,!0),k(o,this))return;let e=n?`checkbox`:`radio`,t=this.querySelector(`input[type="${e}"][name]`);t&&(this.name=t.name)}function _(e){j(d,this,v).call(this,e)||(e.disabled=!0,k(s,this).add(e))}function v(e){let t=e,n=t.querySelector(`:scope > [slot="input"]`);return e.disabled||t.hasAttribute(`disabled`)||n instanceof HTMLInputElement&&n.disabled}function y(e,t){let r=!1;for(let i of e){let e=t.includes(i.value)&&(n||!r);r||=e,i.checked=e}}function b(){let e=this.choices,t=k(a,this);if(e.length===t.length&&e.every((e,n)=>e===t[n]))return;let n=new Set(t),r=e.filter(e=>!n.has(e));A(a,this,e);for(let e of r)k(o,this)&&(e.name=this.name),this.disabled&&j(d,this,_).call(this,e);k(i,this)&&j(d,this,y).call(this,r,k(i,this)),this._onChoicesChanged(),this.requestUpdate(`value`)}function x(e){let n=e.closest(t);return n?._control===e&&n.parentElement?.closest(this.localName)===this?n:void 0}function S(){if(n)return;let e=this.choices,t=this.name?void 0:e.find(e=>e.checked&&!e.disabled)??e.find(e=>!e.disabled);for(let n of e){let e=n._control;if(e)this.name?k(l,this).delete(e)&&e.removeAttribute(`tabindex`):(e.tabIndex=n===t?0:-1,k(l,this).add(e));else continue}}function C(e){for(let t of this.choices)t!==e&&t.checked&&(t.checked=!1),t._syncFromControl?.()}return r([c({reflect:!0})],h.prototype,`name`,void 0),r([c({type:Boolean})],h.prototype,`required`,void 0),r([c({type:Boolean,reflect:!0})],h.prototype,`invalid`,void 0),r([c({attribute:!1})],h.prototype,`value`,null),h},mt=class extends pt(u,{choice:`craft-checkbox`,multiple:!0}){};mt.styles=[ge,a`
      ${se}

      .input-group {
        display: grid;
        gap: var(--c-spacing-sm);
      }

      ::slotted(label) {
        font-weight: bold;
      }
    `],customElements.get(`craft-checkbox-group`)||customElements.define(`craft-checkbox-group`,mt);var ht=(e,t)=>{e.dispatchEvent(t===void 0?new Event(`input`,{bubbles:!0,composed:!0}):new InputEvent(`input`,{bubbles:!0,composed:!0,inputType:t}))},gt=e=>{e.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))},_t=[ge,a`
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
  `];function vt(e){return(e??``).split(/\s+/).filter(Boolean)}var yt=e=>{var t=new WeakMap,n=new WeakMap,i=new WeakMap,a=new WeakMap,o=new WeakMap,s=new WeakMap,l=new WeakSet,u=new WeakMap,d=new WeakMap,f=new WeakMap,m=new WeakMap;class h extends be(e){constructor(...e){super(...e),O(this,l),this.name=``,this.required=!1,this.invalid=!1,M(this,t,void 0),M(this,n,void 0),M(this,i,!1),M(this,a,!1),M(this,o,void 0),M(this,s,void 0),M(this,u,e=>{e.target===this._control&&this._syncFromControl()}),M(this,d,e=>{e.target===g.call(j(l,this))?.form&&setTimeout(()=>this._syncFromControl())}),M(this,f,e=>{let t=this._control;e.target===t&&this.toggleAttribute(`focused-visible`,t.matches(`:focus-visible`))}),M(this,m,e=>{e.target===this._control&&this.removeAttribute(`focused-visible`)})}get checked(){return this._control?.checked??k(t,this)??!1}set checked(e){let n=this.checked,r=this._control;r?r.checked=e:A(t,this,e),this.requestUpdate(`checked`,n)}get value(){return k(n,this)??g.call(j(l,this))?.value??this._defaultValue}set value(e){let t=this.value;A(n,this,e==null?void 0:String(e)),this.requestUpdate(`value`,t)}get _control(){return super._control}get _defaultValue(){return``}connectedCallback(){super.connectedCallback(),j(l,this,_).call(this),this.addEventListener(`change`,k(u,this)),this.addEventListener(`focusin`,k(f,this)),this.addEventListener(`focusout`,k(m,this)),A(s,this,this.getRootNode()),k(s,this).addEventListener(`reset`,k(d,this),!0)}disconnectedCallback(){super.disconnectedCallback(),k(s,this)?.removeEventListener(`reset`,k(d,this),!0),this.removeEventListener(`change`,k(u,this)),this.removeEventListener(`focusin`,k(f,this)),this.removeEventListener(`focusout`,k(m,this))}willUpdate(e){super.willUpdate(e),j(l,this,_).call(this)}updated(e){super.updated(e),this._pushToControl(e),A(i,this,this.checked)}_syncFromControl(){let e=this._control;e&&e.checked!==k(i,this)&&this.requestUpdate(`checked`,k(i,this))}focus(e){this._control?.focus(e)}blur(){this._control?.blur()}_enhanceLightDomA11y(){let e=this._control,t=this.getRootNode();if(e&&`getElementById`in t){let n=n=>vt(e.getAttribute(n)).map(e=>t.getElementById(e)).filter(e=>e instanceof HTMLElement);for(let e of n(`aria-labelledby`))this.addToAriaLabelledBy(e);for(let e of n(`aria-describedby`))this.addToAriaDescribedBy(e)}super._enhanceLightDomA11y()}_pushToControl(e){let t=this._control;if(!t)return;let r=!k(a,this);A(a,this,!0);let i=(t,n)=>e.has(t)&&!(r&&(n===void 0||n===``||n===!1)),o=(e,n)=>{n?t.setAttribute(e,`true`):t.removeAttribute(e)},s=g.call(j(l,this));s&&i(`name`,this.name)&&(s.name=this.name),s&&e.has(`value`)&&k(n,this)!==void 0&&(s.value=k(n,this)),i(`disabled`,this.disabled)&&(t.disabled=this.disabled),i(`required`,this.required)&&o(`aria-required`,this.required),i(`invalid`,this.invalid)&&o(`aria-invalid`,this.invalid)}render(){return p`<slot name="input"></slot>
        <div class="choice-field__label">
          <slot name="label"></slot>
        </div>
        <small class="choice-field__help-text">
          <slot name="help-text"></slot>
        </small>`}}function g(){let e=this._control;return e instanceof HTMLInputElement?e:void 0}function _(){let e=this._control;if(!e||e===k(o,this))return;A(o,this,e),customElements.upgrade(e),k(t,this)!==void 0&&(e.checked=k(t,this),A(t,this,void 0)),e.disabled&&!this.disabled&&(this.disabled=!0);let n=e.getAttribute(`name`);!this.name&&n&&(this.name=n),e instanceof HTMLInputElement&&j(l,this,v).call(this,e),this._syncFromControl()}function v(e){let t=this;for(let n of[`checked`,`disabled`]){let r=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,n);if(!r?.get||!r.set)continue;let{get:i,set:a}=r;Object.defineProperty(e,n,{configurable:!0,enumerable:r.enumerable,get(){return i.call(this)},set(e){a.call(this,e),n===`disabled`?t.disabled!==e&&(t.disabled=e):t._syncFromControl()}})}}return h.styles=_t,r([c({type:Boolean,reflect:!0})],h.prototype,`checked`,null),r([c()],h.prototype,`value`,null),r([c({reflect:!0})],h.prototype,`name`,void 0),r([c({type:Boolean})],h.prototype,`required`,void 0),r([c({type:Boolean,reflect:!0})],h.prototype,`invalid`,void 0),h},bt=new WeakMap,xt=class extends yt(u){get slots(){return{...super.slots,input:()=>{let e=document.createElement(`input`);return e.type=`checkbox`,e}}}constructor(){super(),this.indeterminate=!1,M(this,bt,void 0),this.addEventListener(`change`,e=>{e.target===this._control&&this.indeterminate&&(this.indeterminate=e.target.indeterminate)})}updated(e){super.updated(e);let t=this._control;t instanceof HTMLInputElement&&(e.has(`indeterminate`)||t!==k(bt,this))&&(t.indeterminate=this.indeterminate,A(bt,this,t))}render(){return p`${super.render()} ${this._feedbackTemplate()}`}};xt.styles=[_t,a`
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
    `],r([c({type:Boolean,reflect:!0})],xt.prototype,`indeterminate`,void 0),customElements.get(`craft-checkbox`)||customElements.define(`craft-checkbox`,xt);var{I:St}=d,Ct=()=>document.createComment(``),wt=(e,t,n)=>{let r=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(n===void 0)n=new St(r.insertBefore(Ct(),i),r.insertBefore(Ct(),i),e,e.options);else{let t=n._$AB.nextSibling,a=n._$AM,o=a!==e;if(o){let t;n._$AQ?.(e),n._$AM=e,n._$AP!==void 0&&(t=e._$AU)!==a._$AU&&n._$AP(t)}if(t!==i||o){let e=n._$AA;for(;e!==t;){let t=e.nextSibling;r.insertBefore(e,i),e=t}}}return n},Tt=(e,t,n=e)=>(e._$AI(t,n),e),Et={},Dt=(e,t=Et)=>e._$AH=t,Ot=e=>e._$AH,kt=e=>{e._$AR(),e._$AA.remove()},At=(e,t,n)=>{let r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},jt=S(class extends w{constructor(e){if(super(e),e.type!==De.CHILD)throw Error(`repeat() can only be used in text expressions`)}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);let i=[],a=[],o=0;for(let t of e)i[o]=r?r(t,o):o,a[o]=n(t,o),o++;return{values:a,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,r]){let i=Ot(e),{values:a,keys:o}=this.dt(t,n,r);if(!Array.isArray(i))return this.ut=o,a;let s=this.ut??=[],c=[],u,d,f=0,p=i.length-1,m=0,h=a.length-1;for(;f<=p&&m<=h;)if(i[f]===null)f++;else if(i[p]===null)p--;else if(s[f]===o[m])c[m]=Tt(i[f],a[m]),f++,m++;else if(s[p]===o[h])c[h]=Tt(i[p],a[h]),p--,h--;else if(s[f]===o[h])c[h]=Tt(i[f],a[h]),wt(e,c[h+1],i[f]),f++,h--;else if(s[p]===o[m])c[m]=Tt(i[p],a[m]),wt(e,i[f],i[p]),p--,m++;else if(u===void 0&&(u=At(o,m,h),d=At(s,f,p)),u.has(s[f]))if(u.has(s[p])){let t=d.get(o[m]),n=t===void 0?null:i[t];if(n===null){let t=wt(e,i[f]);Tt(t,a[m]),c[m]=t}else c[m]=Tt(n,a[m]),wt(e,i[f],n),i[t]=null;m++}else kt(i[p]),p--;else kt(i[f]),f++;for(;m<=h;){let t=wt(e,c[h+1]);Tt(t,a[m]),c[m++]=t}for(;f<=p;){let e=i[f++];e!==null&&kt(e)}return this.ut=o,Dt(e,c),l}}),Mt=new WeakMap,Nt=new WeakMap,Pt=new WeakMap,Ft=new WeakMap,It=new WeakMap,Lt=new WeakSet,Rt=new WeakMap,zt=new WeakMap,Bt=new WeakMap,Vt=new WeakMap,Ht=class{constructor(e,t){O(this,Lt),this.draggingIndex=null,this.dropIndex=null,M(this,Mt,void 0),M(this,Nt,void 0),M(this,Pt,[]),M(this,Ft,[]),M(this,It,null),M(this,Rt,e=>{let t=k(It,this);if(!(!t||e.pointerId!==t.pointerId)){if(this.draggingIndex===null){if(Math.hypot(e.clientX-t.x,e.clientY-t.y)<4)return;j(Lt,this,Kt).call(this,t.index,null)}e.preventDefault(),j(Lt,this,Kt).call(this,this.draggingIndex,j(Lt,this,Gt).call(this,e))}}),M(this,zt,e=>{let t=k(It,this);if(!t||e.pointerId!==t.pointerId)return;let n=this.draggingIndex,r=this.dropIndex,i=n!==null;if(j(Lt,this,Wt).call(this),!i)return;let a=e=>{e.preventDefault(),e.stopImmediatePropagation()};if(t.handle.addEventListener(`click`,a,{capture:!0,once:!0}),setTimeout(()=>t.handle.removeEventListener(`click`,a,!0)),r!==null){let e=r>n?r-1:r;e!==n&&k(Nt,this).onReorder(n,e)}}),M(this,Bt,e=>{e.pointerId===k(It,this)?.pointerId&&j(Lt,this,Wt).call(this)}),M(this,Vt,e=>{e.key===`Escape`&&this.draggingIndex!==null&&(e.preventDefault(),e.stopPropagation(),j(Lt,this,Wt).call(this))}),A(Mt,this,e),A(Nt,this,t),e.addController(this)}hostDisconnected(){j(Lt,this,Wt).call(this),this.setItems([])}setItems(e){for(let e of k(Ft,this))e();A(Pt,this,e),A(Ft,this,e.map(({element:e,handle:t},n)=>{let r=t??e,i=e=>j(Lt,this,Ut).call(this,e,n,r);return r.addEventListener(`pointerdown`,i),()=>r.removeEventListener(`pointerdown`,i)}))}};function Ut(e,t,n){e.button!==0||e.pointerType===`touch`||k(It,this)||n.matches(`[disabled]`)||(A(It,this,{index:t,pointerId:e.pointerId,handle:n,x:e.clientX,y:e.clientY}),window.addEventListener(`pointermove`,k(Rt,this)),window.addEventListener(`pointerup`,k(zt,this)),window.addEventListener(`pointercancel`,k(Bt,this)),window.addEventListener(`keydown`,k(Vt,this),!0))}function Wt(){A(It,this,null),window.removeEventListener(`pointermove`,k(Rt,this)),window.removeEventListener(`pointerup`,k(zt,this)),window.removeEventListener(`pointercancel`,k(Bt,this)),window.removeEventListener(`keydown`,k(Vt,this),!0),j(Lt,this,Kt).call(this,null,null)}function Gt(e){let t=k(Pt,this).length;for(let[n,{element:r}]of k(Pt,this).entries()){let i=r.getBoundingClientRect();if(e.clientY<i.top+i.height/2){t=n;break}}let n=this.draggingIndex;return n!==null&&(t===n||t===n+1)?null:t}function Kt(e,t){(e!==this.draggingIndex||t!==this.dropIndex)&&(this.draggingIndex=e,this.dropIndex=t,k(Mt,this).requestUpdate())}var qt=a`
  ${h}

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
`,Jt=`governedName`,Yt=`disabledByGroup`,Xt=0,Zt=new WeakMap,Qt=new WeakMap,$t=new WeakMap,en=new WeakMap,N=new WeakSet,tn=new WeakMap,nn=class extends u{get options(){return j(N,this,wn).call(this).map(e=>j(N,this,Cn).call(this,e))}set options(e){let t=j(N,this,wn).call(this),n=new Set(e.map(e=>String(e.value)));for(let e of t)n.has(j(N,this,Mn).call(this,e))||e.remove();let r=[],i=j(N,this,En).call(this)??j(N,this,kn).call(this);for(let t of e){let e=j(N,this,Tn).call(this,String(t.value));e||(e=j(N,this,xn).call(this,t),r.push(e)),j(N,this,Sn).call(this,e,t),i?i.after(e):this.prepend(e),i=e}if(j(N,this,On).call(this)&&j(N,this,Dn).call(this)?.checked){for(let e of r)j(N,this,mn).call(this,e,!0);j(N,this,gn).call(this)}this.requestUpdate(`options`)}get value(){return j(N,this,On).call(this)&&j(N,this,Dn).call(this)?.checked?[this.allValue]:j(N,this,wn).call(this).filter(e=>j(N,this,jn).call(this,e)?.checked).map(e=>j(N,this,Mn).call(this,e))}set value(e){this.allLabel&&!j(N,this,En).call(this)&&(j(N,this,yn).call(this),j(N,this,bn).call(this));let t=new Set((e??[]).map(String)),n=j(N,this,On).call(this)&&t.has(this.allValue);for(let e of j(N,this,wn).call(this)){let r=j(N,this,jn).call(this,e);r&&!r.disabled&&(r.checked=n||t.has(j(N,this,Mn).call(this,e)))}let r=j(N,this,Dn).call(this);r&&j(N,this,On).call(this)&&(r.checked=n),j(N,this,gn).call(this),this.requestUpdate(`value`)}addOption(e,t){let n=j(N,this,Tn).call(this,String(e.value))??j(N,this,xn).call(this,e);j(N,this,Sn).call(this,n,e);let r=j(N,this,wn).call(this).filter(e=>e!==n),i=t===void 0?null:r[t]??null,a=r.at(-1)??j(N,this,En).call(this)??j(N,this,kn).call(this);i?i.before(n):a?a.after(n):this.prepend(n),j(N,this,On).call(this)&&j(N,this,Dn).call(this)?.checked&&(j(N,this,mn).call(this,n,!0),j(N,this,gn).call(this)),this.requestUpdate()}removeOption(e){j(N,this,Tn).call(this,String(e))?.remove(),this.requestUpdate()}updateOption(e,t){let n=j(N,this,Tn).call(this,String(e));n&&(j(N,this,Sn).call(this,n,{...j(N,this,Cn).call(this,n),...t}),j(N,this,_n).call(this),j(N,this,gn).call(this),this.requestUpdate())}constructor(){super(),O(this,N),this.name=null,this.label=null,this.disabled=!1,this.sortable=!1,this.presentation=`checkboxes`,this.allLabel=null,this.allValue=`*`,this.allMode=`single-value`,this._revision=0,this._status=``,M(this,Zt,new WeakMap),M(this,Qt,new Ht(this,{onReorder:(e,t)=>j(N,this,pn).call(this,e,t)})),M(this,$t,null),M(this,en,null),M(this,tn,e=>{let t=e.target;!(t instanceof HTMLInputElement)||t.type!==`checkbox`||(t===j(N,this,Dn).call(this)?j(N,this,hn).call(this,t.checked):j(N,this,gn).call(this),this.requestUpdate())}),this.addEventListener(`change`,k(tn,this),!0);for(let e of[`options`,`value`])if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],queueMicrotask(()=>{this[e]=t})}}connectedCallback(){super.connectedCallback(),A($t,this,new MutationObserver(()=>j(N,this,vn).call(this))),k($t,this).observe(this,{childList:!0,subtree:!0,characterData:!0})}disconnectedCallback(){super.disconnectedCallback(),k($t,this)?.disconnect(),A($t,this,null)}willUpdate(e){(e.has(`name`)||e.has(`allLabel`)||e.has(`allMode`))&&(j(N,this,yn).call(this),j(N,this,bn).call(this)),e.has(`disabled`)&&j(N,this,_n).call(this),(e.has(`allMode`)||e.has(`allLabel`))&&j(N,this,gn).call(this);for(let e of j(N,this,wn).call(this))k(Zt,this).has(e)||k(Zt,this).set(e,`item-${Xt++}`),e.slot=k(Zt,this).get(e);j(N,this,En).call(this)?.setAttribute(`slot`,`all`)}updated(){k(Qt,this).setItems(j(N,this,cn).call(this).flatMap(e=>{let t=j(N,this,An).call(this,e);return t?[{element:t,handle:t.querySelector(`craft-reorder-button`)}]:[]}));let e=k(en,this);A(en,this,null),e&&j(N,this,rn).call(this,e)}render(){this._revision;let e=j(N,this,sn).call(this),t=j(N,this,ln).call(this),r=j(N,this,cn).call(this);return p`
      ${this.label?p`<div id="label" class="label" part="label">${this.label}</div>`:i}
      <div
        class="group"
        part="group"
        role=${this.label?`group`:i}
        aria-labelledby=${this.label?`label`:i}
      >
        <slot name="all"></slot>
        ${e.length?p`<div class="items" part="items">
              ${jt(e,e=>k(Zt,this).get(e),e=>j(N,this,an).call(this,e,r))}
            </div>`:i}
        ${this.presentation===`add-menu`&&t.length&&!this.disabled?p`<craft-action-menu
              class="add"
              part="add-menu"
              ?searchable=${t.length>10}
              .actions=${()=>j(N,this,un).call(this)}
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
    `}};async function rn(e){let t=e();await t?.updateComplete,t?.localName===`craft-reorder-button`&&(t=t.shadowRoot?.querySelector(`craft-button`)??t,await t.updateComplete),t?.focus()}function an(e,t){let r=k(Zt,this).get(e),a=t.indexOf(e),o=a!==-1,s=o&&k(Qt,this).draggingIndex===a,c=k(Qt,this).dropIndex,l=j(N,this,Cn).call(this,e),u=this.presentation===`add-menu`;return p`<div
      class="row ${s?`row--dragging`:``}"
      part="row"
      data-key=${r}
      data-drop=${c===a?`before`:c===a+1&&a===t.length-1?`after`:i}
    >
      ${this.sortable?p`<craft-reorder-button
            class="handle"
            position=${j(N,this,on).call(this,a,t.length)}
            ?disabled=${!o||t.length<2}
            @craft-reorder=${e=>j(N,this,pn).call(this,a,a+(e.detail.direction===`up`?-1:1),!0)}
          ></craft-reorder-button>`:i}
      ${u?p`<span class="row__label">
              ${l.labelHtml===void 0?l.label:b(l.labelHtml)}
              ${l.info?p`<span class="row__info"
                    >${b(l.info)}</span
                  >`:i}
            </span>
            ${!l.disabled&&!this.disabled?p`<craft-button
                  class="remove"
                  type="button"
                  icon="xmark"
                  size="small"
                  variant="plain"
                  aria-label=${n(`Remove {name}`,{name:l.label})}
                  @click=${()=>j(N,this,fn).call(this,e)}
                ></craft-button>`:i}`:p`<slot name=${r}></slot>`}
    </div>`}function on(e,t){return t<2?`only`:e<=0?`first`:e===t-1?`last`:`middle`}function sn(){let e=j(N,this,wn).call(this);return this.presentation===`add-menu`?j(N,this,Dn).call(this)?.checked?[]:e.filter(e=>j(N,this,jn).call(this,e)?.checked):e}function cn(){return!this.sortable||this.disabled?[]:j(N,this,sn).call(this).filter(e=>!j(N,this,jn).call(this,e)?.disabled)}function ln(){return j(N,this,Dn).call(this)?.checked?[]:j(N,this,wn).call(this).filter(e=>{let t=j(N,this,jn).call(this,e);return t&&!t.checked&&!t.disabled})}function un(){return j(N,this,ln).call(this).map(e=>({label:j(N,this,Nn).call(this,e),onClick:()=>j(N,this,dn).call(this,e)}))}function dn(e){let t=j(N,this,sn).call(this).at(-1);t&&t!==e&&t.after(e),j(N,this,mn).call(this,e,!0,!0),this._status=n(`Added {name}`,{name:j(N,this,Nn).call(this,e)}),j(N,this,ln).call(this).length||A(en,this,()=>j(N,this,An).call(this,e)?.querySelector(`.remove`))}function fn(e){let t=j(N,this,sn).call(this),r=t.indexOf(e),i=[...t.slice(r+1),...t.slice(0,r).reverse()].find(e=>!j(N,this,jn).call(this,e)?.disabled);j(N,this,mn).call(this,e,!1,!0),this._status=n(`Removed {name}`,{name:j(N,this,Nn).call(this,e)}),A(en,this,()=>(i&&j(N,this,An).call(this,i)?.querySelector(`.remove`))??this.renderRoot.querySelector(`.add craft-button[slot="invoker"]`))}function pn(e,t,r=!1){let i=j(N,this,cn).call(this),a=i[e],o=i[t];!a||!o||a===o||(t>e?o.after(a):o.before(a),this._status=n(`Moved {name} to position {position}`,{name:j(N,this,Nn).call(this,a),position:t+1}),r&&A(en,this,()=>j(N,this,An).call(this,a)?.querySelector(`craft-reorder-button`)),this.requestUpdate(),this.dispatchEvent(new CustomEvent(`craft-order-change`,{bubbles:!0,composed:!0,detail:{value:j(N,this,Mn).call(this,a),index:t}})),gt(this))}function mn(e,t,n=!1){let r=j(N,this,jn).call(this,e);!r||r.checked===t||(r.checked=t,n&&gt(r))}function hn(e){for(let t of j(N,this,wn).call(this))j(N,this,jn).call(this,t)?.disabled||j(N,this,mn).call(this,t,e);j(N,this,gn).call(this)}function gn(){let e=j(N,this,En).call(this),t=j(N,this,Dn).call(this),n=j(N,this,wn).call(this).filter(e=>!j(N,this,jn).call(this,e)?.disabled),r=n.filter(e=>j(N,this,jn).call(this,e)?.checked).length,i=j(N,this,On).call(this)&&n.length===0;if(e&&t&&!i){let i=n.length>0&&r===n.length;t.checked=i;let a=e.querySelector(`craft-checkbox`);a&&(a.indeterminate=r>0&&!i)}let a=j(N,this,On).call(this)&&!!t?.checked;for(let e of j(N,this,wn).call(this)){let t=j(N,this,jn).call(this,e);t&&(a?t.name&&(t.dataset[Jt]=t.name,t.removeAttribute(`name`)):t.dataset[Jt]!==void 0&&(t.name=t.dataset[Jt],delete t.dataset[Jt]))}}function _n(){for(let e of this.querySelectorAll(`:scope > .cp-checkbox-select__item input[type="checkbox"]`))this.disabled&&!e.disabled?(e.disabled=!0,e.dataset[Yt]=``):!this.disabled&&e.dataset[Yt]!==void 0&&(e.disabled=!1,delete e.dataset[Yt])}function vn(){this._revision++}function yn(){let e=j(N,this,kn).call(this);if(!this.name){e?.remove();return}if(e){e.name=this.name;return}let t=document.createElement(`input`);t.type=`hidden`,t.name=this.name,t.value=``,t.dataset.empty=``,this.prepend(t)}function bn(){let e=j(N,this,En).call(this);if(!this.allLabel){e?.remove();return}let t=e??j(N,this,xn).call(this,{value:this.allValue,label:this.allLabel});t.classList.add(`all`);let n=j(N,this,jn).call(this,t);n.value=this.allValue,e||(t.dataset.generated=``),t.dataset.generated!==void 0&&(this.allMode===`single-value`&&this.name?n.name=`${this.name}[]`:n.removeAttribute(`name`));let r=t.querySelector(`label`);if(r&&r.textContent!==this.allLabel&&(r.textContent=this.allLabel),!e){let e=j(N,this,kn).call(this);e?e.after(t):this.prepend(t)}}function xn(e){let t=`${this.id||`checkbox-select`}-${Xt++}`,n=document.createElement(`div`);n.className=`cp-checkbox-select__item`;let r=document.createElement(`craft-checkbox`),i=document.createElement(`input`);i.type=`checkbox`,i.className=`checkbox`,i.slot=`input`,i.id=t,i.value=String(e.value),this.name&&(i.name=`${this.name}[]`);let a=document.createElement(`label`);return a.slot=`label`,a.htmlFor=t,a.id=`${t}-label`,r.append(i,a),n.append(r),n}function Sn(e,t){let n=j(N,this,jn).call(this,e),r=e.querySelector(`craft-checkbox > label`);n&&(t.checked!==void 0&&(n.checked=t.checked),t.disabled!==void 0&&(n.disabled=t.disabled,delete n.dataset[Yt])),r&&(t.labelHtml===void 0?r.textContent!==t.label&&(r.textContent=t.label):r.innerHTML!==t.labelHtml&&(r.innerHTML=t.labelHtml),r.dataset.label=t.label);let i=e.querySelector(`craft-checkbox`),a=i?.querySelector(`:scope > [slot="help-text"][data-info]`);t.info?(a||(a=document.createElement(`div`),a.slot=`help-text`,a.dataset.info=``,i?.append(a)),a.innerHTML!==t.info&&(a.innerHTML=t.info)):a?.remove()}function Cn(e){let t=j(N,this,jn).call(this,e),n=e.querySelector(`craft-checkbox > label, :scope > label`),r=e.querySelector(`[slot="help-text"][data-info]`);return{value:j(N,this,Mn).call(this,e),label:j(N,this,Nn).call(this,e),...n?.children.length?{labelHtml:n.innerHTML}:{},...r?{info:r.innerHTML}:{},checked:!!t?.checked,disabled:!!t?.disabled&&t.dataset[Yt]===void 0}}function wn(){return Array.from(this.querySelectorAll(`:scope > .cp-checkbox-select__item`)).filter(e=>!e.classList.contains(`all`))}function Tn(e){return j(N,this,wn).call(this).find(t=>j(N,this,Mn).call(this,t)===e)}function En(){return this.querySelector(`:scope > .cp-checkbox-select__item.all`)}function Dn(){let e=j(N,this,En).call(this);return e?j(N,this,jn).call(this,e):null}function On(){return!!j(N,this,En).call(this)&&this.allMode===`single-value`}function kn(){return this.querySelector(`:scope > input[type="hidden"][data-empty]`)}function An(e){let t=k(Zt,this).get(e);return t?this.renderRoot.querySelector(`.row[data-key="${t}"]`):null}function jn(e){return e.querySelector(`input[type="checkbox"]`)}function Mn(e){let t=j(N,this,jn).call(this,e);return t?.getAttribute(`value`)??t?.value??``}function Nn(e){let t=e.querySelector(`craft-checkbox > label, :scope > label`);return t?.dataset.label??t?.textContent?.trim()??``}nn.styles=[qt],r([c()],nn.prototype,`name`,void 0),r([c()],nn.prototype,`label`,void 0),r([c({type:Boolean,reflect:!0})],nn.prototype,`disabled`,void 0),r([c({type:Boolean,reflect:!0})],nn.prototype,`sortable`,void 0),r([c({reflect:!0})],nn.prototype,`presentation`,void 0),r([c({attribute:`all-label`})],nn.prototype,`allLabel`,void 0),r([c({attribute:`all-value`})],nn.prototype,`allValue`,void 0),r([c({attribute:`all-mode`,reflect:!0})],nn.prototype,`allMode`,void 0),r([f()],nn.prototype,`_revision`,void 0),r([f()],nn.prototype,`_status`,void 0),customElements.get(`craft-checkbox-select`)||customElements.define(`craft-checkbox-select`,nn);var Pn=a`
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
  ${Ve(`:not([appearance~='plain'])`)} {
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
`;Object.values({Sm:`sm`,Md:`md`,Lg:`lg`,Xl:`xl`,"2xl":`2xl`});var Fn={sm:Ke.Small,md:Ke.Medium,lg:Ke.Large,xl:Ke.Large,"2xl":Ke.Large},In={InlineStart:`inline-start`,BlockStart:`block-start`},P=new WeakSet,Ln=new WeakMap,Rn=new WeakMap,zn=new WeakMap,Bn=class extends u{constructor(...e){super(...e),O(this,P),this.size=null,this.thumbSize=null,this.prefixPlacement=In.InlineStart,this.variant=null,this.appearance=Se.OutlineFill,this.alignItems=`center`,this.icon=null,this.showStatus=!1,this.showThumb=!1,this.selectable=!1,this.fullWidth=!1,this.rounded=!1,this.selected=!1,this.selectLabel=null,this.selectDisabled=!1,M(this,Ln,!1),M(this,Rn,new Me),M(this,zn,new D(this,{characterData:!0,onChange:()=>j(P,this,Hn).call(this)}))}renderSelect(){return p`<input
      type="checkbox"
      class="cp-chip__select"
      part="select"
      .checked=${this.selected}
      ?disabled=${this.selectDisabled}
      aria-label=${this.selectLabel??n(`Select`)}
      @click=${j(P,this,Un)}
      @mousedown=${j(P,this,Wn)}
      @mouseup=${j(P,this,Wn)}
      @change=${j(P,this,Gn)}
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
    </div>`}connectedCallback(){super.connectedCallback(),this.hasUpdated&&(A(Rn,this,new Me),k(Rn,this).load(this))}disconnectedCallback(){k(Rn,this).destroy(),super.disconnectedCallback()}firstUpdated(e){super.firstUpdated(e),k(Rn,this).load(this)}render(){let e=j(P,this,qn).call(this),t=e.prefix||e.thumbnail||e.icon;return p`
      <div
        part="chip"
        class="${C({"cp-chip":!0,"cp-chip--xsmall":Vn.call(j(P,this))===`xsmall`,"cp-chip--small":Vn.call(j(P,this))===`small`,"cp-chip--medium":Vn.call(j(P,this))===`medium`,"cp-chip--large":Vn.call(j(P,this))===`large`,[`cp-chip--thumb-${this.thumbSize}`]:this.thumbSize!==null,"cp-chip--stacked":this.prefixPlacement===In.BlockStart,"cp-chip--has-header":this.prefixPlacement===In.BlockStart&&(this.selectable||e.suffix),"cp-chip--align-start":this.alignItems===`start`,"cp-chip--align-end":this.alignItems===`end`,"cp-chip--plain":this.appearance===Se.Plain,"cp-chip--rounded":this.rounded,"cp-chip--selectable":this.selectable,"cp-chip--show-thumb":this.showThumb,"cp-chip--show-status":this.showStatus,[`cp-chip--leads-with-${j(P,this,Jn).call(this,e)}`]:!0})}"
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
    `}};function Vn(){return this.size??(this.thumbSize?Fn[this.thumbSize]:null)??Ke.Small}function Hn(){for(let e of this.querySelectorAll(`craft-button:not([inherit])`))e.closest(`craft-chip`)===this&&e.toggleAttribute(`inherit`,!0)}function Un(e){A(Ln,this,e.shiftKey),e.stopPropagation()}function Wn(e){e.stopPropagation()}function Gn(e){let{checked:t}=e.target;this.selected=t,this.dispatchEvent(new CustomEvent(`craft-selection-change`,{detail:{selected:t,shiftKey:k(Ln,this)},bubbles:!0,composed:!0}))}function Kn(e){return Array.from(this.childNodes).some(t=>t instanceof Element?t.slot===e&&(t.localName!==`div`||t.childElementCount!==0||t.textContent.trim()!==``):e===``&&t.nodeType===Node.TEXT_NODE&&t.textContent.trim()!==``)}function qn(){return{prefix:j(P,this,Kn).call(this,`prefix`),thumbnail:this.showThumb&&j(P,this,Kn).call(this,`thumbnail`),icon:!!this.icon||j(P,this,Kn).call(this,`icon`),status:j(P,this,Kn).call(this,`status`),body:j(P,this,Kn).call(this,``),suffix:j(P,this,Kn).call(this,`suffix`)}}function Jn(e){if(this.selectable)return`select`;for(let t of[`prefix`,`thumbnail`,`icon`,`status`])if(e[t])return t;return`body`}Bn.styles=[te,Pn],r([c()],Bn.prototype,`size`,void 0),r([c({attribute:`thumb-size`,reflect:!0})],Bn.prototype,`thumbSize`,void 0),r([c({attribute:`prefix-placement`,reflect:!0})],Bn.prototype,`prefixPlacement`,void 0),r([c({reflect:!0})],Bn.prototype,`variant`,void 0),r([c({reflect:!0})],Bn.prototype,`appearance`,void 0),r([c({attribute:`align-items`})],Bn.prototype,`alignItems`,void 0),r([c()],Bn.prototype,`icon`,void 0),r([c({attribute:`show-status`,type:Boolean})],Bn.prototype,`showStatus`,void 0),r([c({attribute:`show-thumb`,type:Boolean})],Bn.prototype,`showThumb`,void 0),r([c({type:Boolean})],Bn.prototype,`selectable`,void 0),r([c({type:Boolean,reflect:!0,attribute:`full-width`})],Bn.prototype,`fullWidth`,void 0),r([c({type:Boolean,reflect:!0})],Bn.prototype,`rounded`,void 0),r([c({type:Boolean,reflect:!0})],Bn.prototype,`selected`,void 0),r([c({attribute:`select-label`})],Bn.prototype,`selectLabel`,void 0),r([c({attribute:`select-disabled`,type:Boolean})],Bn.prototype,`selectDisabled`,void 0),customElements.get(`craft-chip`)||customElements.define(`craft-chip`,Bn);var Yn=a`
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
`,Xn=new WeakMap,Zn=new WeakMap,Qn=new WeakSet,$n=class extends u{constructor(...e){super(...e),O(this,Qn),this.value=``,M(this,Xn,!1),this.active=!1,this.disabled=!1,this.hint=null,M(this,Zn,void 0)}get selected(){return k(Xn,this)}set selected(e){let t=k(Xn,this);A(Xn,this,e),this.requestUpdate(`selected`,t),t!==e&&this.dispatchEvent(new Event(`craft-selected-change`,{bubbles:!0}))}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`option`),this.id||=oe(`option`),tr._.observe(this)}disconnectedCallback(){super.disconnectedCallback(),tr._.unobserve(this)}willUpdate(e){e.has(`selected`)&&this.setAttribute(`aria-selected`,String(this.selected)),e.has(`disabled`)&&this.setAttribute(`aria-disabled`,String(this.disabled))}render(){return p`
      <div class="choice-field__label">
        <span class="content"><slot></slot></span>
        ${this.hint?p`<span class="hint">${this.hint}</span>`:i}
        <slot name="suffix"></slot>
      </div>
      ${this.selected?p`<craft-icon class="check" name="check"></craft-icon>`:i}
    `}};function er(){return k(Zn,this)??A(Zn,this,parseInt(getComputedStyle(this).getPropertyValue(`--c-option-wide-threshold`)||`640`,10)),k(Zn,this)}$n.styles=Yn;var tr={_:new ResizeObserver(e=>{for(let t of e){let e=t.target,n=t.borderBoxSize?.[0]?.inlineSize??t.contentRect.width;e.toggleAttribute(`wide`,n>=j(Qn,e,er).call(e))}})};r([c()],$n.prototype,`value`,void 0),r([c({type:Boolean,reflect:!0})],$n.prototype,`selected`,null),r([c({type:Boolean,reflect:!0})],$n.prototype,`active`,void 0),r([c({type:Boolean,reflect:!0})],$n.prototype,`disabled`,void 0),r([c()],$n.prototype,`hint`,void 0),customElements.get(`craft-option`)||customElements.define(`craft-option`,$n);var nr=a`
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
`,rr=class extends u{constructor(...e){super(...e),this.label=``}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`group`)}willUpdate(){this.setAttribute(`aria-label`,this.label)}render(){return p`
      <div class="label" aria-hidden="true">${this.label}</div>
      <slot></slot>
    `}};rr.styles=nr,r([c()],rr.prototype,`label`,void 0),customElements.get(`craft-option-group`)||customElements.define(`craft-option-group`,rr);var ir=a`
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
`,ar=new WeakMap,or=class extends u{constructor(...e){super(...e),this.removable=!1,M(this,ar,()=>{this.dispatchEvent(new CustomEvent(`craft-remove`,{bubbles:!0}))})}render(){return this.removable?p`<button
            type="button"
            aria-describedby="remove-hint"
            @click=${k(ar,this)}
          >
            <slot></slot>
            <span class="remove" aria-hidden="true">×</span>
          </button>
          <span id="remove-hint" hidden>${n(`Remove`)}</span>`:p`<slot></slot>`}};or.styles=ir,r([c({type:Boolean,reflect:!0})],or.prototype,`removable`,void 0),customElements.get(`craft-combobox-token`)||customElements.define(`craft-combobox-token`,or);var sr=e=>{var t=new WeakMap,n=new WeakMap,a=new WeakMap,o=new WeakMap,l=new WeakMap;class u extends e{constructor(...e){super(...e),M(this,t,typeof this.attachInternals==`function`?this.attachInternals():void 0),M(this,n,null),M(this,a,!1),M(this,o,void 0),M(this,l,void 0),this.name=``,this.disabled=!1,this._formDisabled=!1,this._formAttribute=null}_formValue(){return null}_restoreFormValue(e){}_setValidity(e={},n=``,r){k(t,this)?.setValidity?.(e,n,r)}get form(){return k(t,this)?.form??null}get validity(){return k(t,this)?.validity??{valid:!0}}get validationMessage(){return k(t,this)?.validationMessage??``}get willValidate(){return k(t,this)?.willValidate??!1}checkValidity(){return k(t,this)?.checkValidity?.()??!0}reportValidity(){return k(t,this)?.reportValidity?.()??!0}connectedCallback(){super.connectedCallback(),k(a,this)||(A(a,this,!0),A(n,this,this._formValue())),this._syncFormValue()}updated(e){super.updated(e),this._syncFormValue()}dispatchEvent(e){return(e.type===`input`||e.type===`change`)&&this._syncFormValue(),super.dispatchEvent(e)}_syncFormValue(){let e=this.name&&!this.disabled?this._formValue():null,t=this._formAttribute,n=JSON.stringify([this.name,e,t]);e===null&&!k(o,this)||n===k(l,this)&&k(o,this)?.parentNode===this||(A(l,this,n),k(o,this)||(A(o,this,document.createElement(`span`)),k(o,this).hidden=!0,k(o,this).slot=`form-value`),k(o,this).parentNode!==this&&this.append(k(o,this)),s(Array.isArray(e)?p`<input
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
              />`,k(o,this)))}formDisabledCallback(e){this._formDisabled=e}formResetCallback(){this._restoreFormValue(k(n,this))}}return u.formAssociated=!0,r([c({reflect:!0})],u.prototype,`name`,void 0),r([c({type:Boolean,reflect:!0})],u.prototype,`disabled`,void 0),r([f()],u.prototype,`_formDisabled`,void 0),r([c({attribute:`form`})],u.prototype,`_formAttribute`,void 0),u},cr={name:`minWidthOfReference`,enabled:!0,phase:`beforeWrite`,requires:[`computeStyles`],fn:({state:e})=>{e.styles.popper={...e.styles.popper,minWidth:`${e.rects.reference.width}px`}}},lr=new WeakMap,ur=new WeakMap,dr=class{constructor(e){this.parts=e,M(this,lr,null),M(this,ur,void 0)}get shown(){return k(lr,this)!==null}show(){let e=this.parts();!e||k(lr,this)||(A(ur,this,e),Ee(e.layer),e.pane.style.minWidth=`${e.reference.getBoundingClientRect().width}px`,A(lr,this,ne(e.reference,e.pane,{strategy:`fixed`,placement:`bottom-start`,modifiers:[...ie(0),cr]})),k(lr,this).forceUpdate())}hide(){k(ur,this)&&(Ce(k(ur,this).layer),k(lr,this)?.destroy(),A(lr,this,null),A(ur,this,void 0))}update(){k(lr,this)?.update()}};function fr(e){return e?[...e.querySelectorAll(`craft-option`)].filter(e=>!e.hidden):[]}function pr(e){return e.textContent?.trim()??``}function mr(e,t,n,{scroll:r=!0}={}){for(let n of e)n.active=n===t;t?(n?.setAttribute(`aria-activedescendant`,t.id),r&&t.scrollIntoView?.({block:`nearest`})):n?.removeAttribute(`aria-activedescendant`)}function hr(e,t,n,{wrap:r=!0,skipDisabled:i=!1}={}){let a=i?e.filter(e=>!e.disabled||e===t):e;if(!a.length)return;let o=t?a.indexOf(t):-1;if(o===-1)return n===1?a[0]:a.at(-1);let s=o+n;return r?a[(s+a.length)%a.length]:a[Math.min(Math.max(s,0),a.length-1)]}var gr=new WeakMap,_r=new WeakMap,vr=class{constructor(){M(this,gr,``),M(this,_r,null)}match(e,t,n){if(e.key.length!==1||e.metaKey||e.ctrlKey||e.altKey||e.key===` `&&k(gr,this)===``)return;A(gr,this,k(gr,this)+e.key.toLowerCase()),k(_r,this)!==null&&clearTimeout(k(_r,this)),A(_r,this,setTimeout(()=>this.reset(),1e3));let r=[...k(gr,this)].every(e=>e===k(gr,this)[0]),i=r?k(gr,this)[0]:k(gr,this),a=n?t.indexOf(n):-1;return[...t.slice(a+ +!!r),...t.slice(0,a+ +!!r)].find(e=>!e.disabled&&pr(e).toLowerCase().startsWith(i))}get typing(){return k(gr,this)!==``}reset(){A(gr,this,``),k(_r,this)!==null&&(clearTimeout(k(_r,this)),A(_r,this,null))}},yr=a`
  ${se}

  :host {
    width: 100%;
  }

  ::slotted(.form-control) {
    ${_e}
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
    ${me}
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
    ${ce}
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
`;function br(e){return We.includes(e)||ee.includes(e)?`var(--c-color-${e}-fill-loud)`:e}function xr(e){if(Array.isArray(e))return e.map(String);if(typeof e!=`string`||e===``)return[];try{let t=JSON.parse(e);return Array.isArray(t)?t.map(String):[e]}catch{return[e]}}function Sr(e,t){return JSON.stringify(e)===JSON.stringify(t)}var Cr=`insertReplacementText`,wr=new WeakMap,Tr=new WeakMap,Er=new WeakMap,Dr=new WeakMap,Or=new WeakMap,kr=new WeakMap,Ar=new WeakMap,jr=new WeakMap,Mr=new WeakMap,Nr=new WeakMap,F=new WeakSet,Pr=new WeakMap,Fr=new WeakMap,Ir=new WeakMap,Lr=new WeakMap,Rr=new WeakMap,zr=new WeakMap,Br=new WeakMap,Vr=new WeakMap,Hr=new WeakMap,Ur=new WeakMap,Wr=new WeakMap,Gr=new WeakMap,Kr=new WeakMap,qr=new WeakMap,Jr=class extends sr(be(u)){get value(){return this.multiple?xr(k(wr,this)):Array.isArray(k(wr,this))?String(k(wr,this)[0]??``):String(k(wr,this)??``)}set value(e){let t=this.value;if(A(wr,this,e??``),Sr(t,this.value))return;let n=this._control?.value;j(F,this,ri).call(this),this._control?.value!==n&&A(kr,this,!1),this.requestUpdate(`value`,t),k(Tr,this)||A(Ar,this,this.value)}constructor(){super(),O(this,F),this.options=[],this.limit=150,this.multiple=!1,this.requireOptionMatch=!1,this.showAllOnEmpty=!1,this.required=!1,this.invalid=!1,this.open=!1,this.clearable=!1,this.placeholder=``,this.showSelectedHint=!1,M(this,wr,``),M(this,Tr,!1),M(this,Er,[]),M(this,Dr,``),M(this,Or,!1),M(this,kr,!1),M(this,Ar,``),M(this,jr,null),M(this,Mr,``),M(this,Nr,new dr(()=>{let e=this.renderRoot.querySelector(`.overlay-layer`)??null,t=Xr.call(j(F,this)),n=this.renderRoot.querySelector(`.input-group__input`)??null;return e&&t&&n?{layer:e,pane:t,reference:n}:void 0})),M(this,Pr,e=>{e.composedPath().includes(this)||(T(e,this),this.open=!1)}),M(this,Fr,()=>{!this.open&&j(F,this,ei).call(this)&&(this.open=!0)}),M(this,Ir,e=>{e.relatedTarget instanceof Node&&(this.contains(e.relatedTarget)||this.renderRoot.contains(e.relatedTarget))||(this.multiple&&!this.requireOptionMatch&&j(F,this,li).call(this),this.open=!1,j(F,this,si).call(this))}),M(this,Lr,e=>{e.stopPropagation();let t=this._control?.value??``,n=k(Mr,this);A(Mr,this,t),A(kr,this,!0),A(Tr,this,!0),!this.multiple&&!this.requireOptionMatch&&j(F,this,ni).call(this,j(F,this,ti).call(this,t)),this.open=j(F,this,ei).call(this),j(F,this,_i).call(this);let r=n.length<t.length||n!==``&&t!==``&&n[0].toLowerCase()!==t[0].toLowerCase();j(F,this,fi).call(this,!this.multiple&&r&&t!==``?j(F,this,ui).call(this).find(e=>!e.disabled):void 0),ht(this)}),M(this,Rr,e=>{if(!e.isComposing)switch(e.key){case`ArrowDown`:case`ArrowUp`:j(F,this,ii).call(this,e);break;case`Enter`:j(F,this,ai).call(this,e);break;case`Escape`:this.open&&=(e.preventDefault(),g(e),!1);break;case`Tab`:this.open=!1;break;case`Backspace`:this.multiple&&!$r.call(j(F,this))&&(this._control?.value??``)===``&&(e.preventDefault(),j(F,this,ci).call(this,this.value.slice(0,-1)));break}}),M(this,zr,e=>{let t=e.target?.closest(`craft-option`);!t||t.disabled||$r.call(j(F,this))||(j(F,this,oi).call(this,t),this._control?.focus(),this.multiple||(this.open=!1))}),M(this,Br,()=>{if(this.multiple){j(F,this,ci).call(this,[]);return}A(Tr,this,!0),this.value=``,j(F,this,ri).call(this),j(F,this,_i).call(this),this._control?.focus(),ht(this),j(F,this,si).call(this)}),this.announcement=``,M(this,Vr,null),M(this,Hr,``),M(this,Ur,!1),this.overflowTotal=0,M(this,Wr,!1),M(this,Gr,e=>{e.button!==0||$r.call(j(F,this))||(e.preventDefault(),A(Wr,this,this.open),this._control?.focus())}),M(this,Kr,()=>{$r.call(j(F,this))||(this.open=!k(Wr,this))}),M(this,qr,void 0),this.addEventListener(`focusout`,k(Ir,this))}get slots(){return{...super.slots,input:()=>{let e=document.createElement(`input`);return e.autocomplete=`off`,e},listbox:()=>document.createElement(`div`)}}get _control(){let e=super._control;return e instanceof HTMLInputElement?e:e?.querySelector(`input`)??void 0}connectedCallback(){super.connectedCallback();let e=this._control,t=Yr.call(j(F,this));e&&t&&j(F,this,Zr).call(this,e,t),j(F,this,_i).call(this),j(F,this,ri).call(this)}disconnectedCallback(){k(Vr,this)!==null&&(clearTimeout(k(Vr,this)),A(Vr,this,null)),A(Ur,this,!1),A(Hr,this,``),this.announcement=``,k(Nr,this).hide(),document.removeEventListener(`pointerdown`,k(Pr,this)),super.disconnectedCallback()}firstUpdated(e){super.firstUpdated(e),A(Dr,this,this.value),A(Ar,this,this.value)}willUpdate(e){super.willUpdate(e),e.has(`multiple`)&&A(wr,this,this.value)}updated(e){super.updated(e);let t=this._control,n=Yr.call(j(F,this));e.has(`open`)&&j(F,this,Qr).call(this,e.get(`open`)),(e.has(`options`)||e.has(`limit`)||e.has(`open`)||e.has(`value`)||e.has(`showSelectedHint`)||e.has(`multiple`))&&j(F,this,_i).call(this),(e.has(`options`)||e.has(`showSelectedHint`))&&!k(kr,this)&&j(F,this,ri).call(this),this.multiple?j(F,this,Oi).call(this):(k(qr,this)?.remove(),A(qr,this,void 0)),this._reflectAriaReferences(),t&&(t.placeholder=this.placeholder,t.disabled=this.disabled||k(Or,this),t.readOnly=this.readOnly,this.invalid?t.setAttribute(`aria-invalid`,`true`):t.removeAttribute(`aria-invalid`),this.required?t.setAttribute(`aria-required`,`true`):t.removeAttribute(`aria-required`)),this.multiple?n?.setAttribute(`aria-multiselectable`,`true`):n?.removeAttribute(`aria-multiselectable`),j(F,this,ki).call(this),this.toggleAttribute(`has-prefix-icon`,j(F,this,Ti).call(this)?.data?.icon!=null||j(F,this,Ti).call(this)?.data?.indicator!=null),this.open&&k(Nr,this).update()}_reflectAriaReferences(){let e=this._control;if(e&&k(Er,this).length){let t=(e.getAttribute(`aria-labelledby`)??``).split(/\s+/).filter(e=>e&&!k(Er,this).includes(e));t.length?e.setAttribute(`aria-labelledby`,t.join(` `)):e.removeAttribute(`aria-labelledby`)}if(super._reflectAriaReferences(),!e)return;let t=k(qr,this)?.id;A(Er,this,[...(this.getAttribute(`aria-labelledby`)??``).split(/\s+/),t??``].filter(Boolean));let n=(this.getAttribute(`aria-labelledby`)||e.getAttribute(`aria-labelledby`)||``).split(` `).filter(e=>e&&e!==t).join(` `);e.setAttribute(`aria-labelledby`,t?`${n} ${t}`.trim():n),Yr.call(j(F,this))?.setAttribute(`aria-labelledby`,n);let r=this.getAttribute(`aria-label`);r&&e.setAttribute(`aria-label`,r)}_inputGroupInputTemplate(){let e=j(F,this,Ti).call(this)?.data,t=e?.icon,r=e?.color,a=e?.indicator;return p`
      <div class="input-group__input">
        <slot name="selection"></slot>
        <div class="combobox__textbox">
          ${t?p`<craft-icon
                class="prefix"
                name=${t}
                style=${r?`color: ${br(r)}`:i}
              ></craft-icon>`:a?p`<span class="prefix prefix--indicator">
                  <craft-indicator
                    fill=${a.fill??i}
                    appearance=${a.appearance??i}
                  ></craft-indicator>
                </span>`:i}
          <slot name="input"></slot>
          ${this.clearable&&j(F,this,bi).call(this)&&!$r.call(j(F,this))?p`<craft-button
                class="clear"
                type="button"
                variant="plain"
                size="small"
                icon
                aria-label=${n(`Clear`)}
                @mousedown=${e=>e.preventDefault()}
                @click=${k(Br,this)}
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
            @mousedown=${k(Gr,this)}
            @click=${k(Kr,this)}
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
    `}focus(e){this._control?.focus(e)}_formValue(){return k(Or,this)?null:this.multiple?[...this.value]:this.value}formResetCallback(){this.value=k(Dr,this),A(Ar,this,this.value),j(F,this,ri).call(this),this._syncFormValue()}formDisabledCallback(e){A(Or,this,e),this.requestUpdate(),this._syncFormValue()}};function Yr(){return this.querySelector(`:scope > [slot=listbox]`)??void 0}function Xr(){return this.renderRoot.querySelector(`#overlay-content-node-wrapper`)}function Zr(e,t){e.dataset.comboboxTextbox===void 0&&(e.dataset.comboboxTextbox=``,t.id||=oe(`listbox`),t.setAttribute(`role`,`listbox`),t.addEventListener(`mousedown`,e=>e.preventDefault()),t.addEventListener(`click`,k(zr,this)),e.setAttribute(`role`,`combobox`),e.setAttribute(`aria-haspopup`,`listbox`),e.setAttribute(`aria-autocomplete`,`list`),e.setAttribute(`aria-controls`,t.id),e.setAttribute(`aria-expanded`,`false`),e.addEventListener(`input`,k(Lr,this)),e.addEventListener(`keydown`,k(Rr,this)),e.addEventListener(`click`,k(Fr,this)),e.addEventListener(`change`,e=>e.stopPropagation()))}function Qr(e){if(this._control?.setAttribute(`aria-expanded`,String(this.open)),this.open){k(Nr,this).show(),document.addEventListener(`pointerdown`,k(Pr,this));return}k(Nr,this).hide(),document.removeEventListener(`pointerdown`,k(Pr,this)),e&&(j(F,this,fi).call(this,void 0),k(kr,this)&&(A(kr,this,!1),j(F,this,ri).call(this)))}function $r(){return this.disabled||this.readOnly||k(Or,this)}function ei(){return!$r.call(j(F,this))&&((this._control?.value??``)!==``||this.showAllOnEmpty)}function ti(e){let t=e.trim();if(t!==``){for(let e of j(F,this,Ei).call(this))if(j(F,this,Di).call(this,e)===t)return e.value}return e}function ni(e){let t=this.value;A(wr,this,e),Sr(t,this.value)||this.requestUpdate(`value`,t)}function ri(){let e=this._control;if(!e||this.multiple)return;let t=this.value,n=j(F,this,wi).call(this,t),r=n?j(F,this,Di).call(this,n):t;e.value!==r&&(e.value=r),A(Mr,this,r)}function ii(e){if(!$r.call(j(F,this))){if(e.preventDefault(),e.altKey){this.open=e.key===`ArrowDown`;return}if(!this.open){this.open=!0;return}j(F,this,fi).call(this,hr(j(F,this,ui).call(this),j(F,this,di).call(this),e.key===`ArrowDown`?1:-1))}}function ai(e){let t=this.open?j(F,this,di).call(this):void 0;if(this.open&&e.preventDefault(),!$r.call(j(F,this))){if(this.multiple){if(t){t.disabled||j(F,this,oi).call(this,t);return}e.preventDefault(),j(F,this,li).call(this);return}t&&!t.disabled&&j(F,this,oi).call(this,t),this.open=!1}}function oi(e){let t=e.value;if(this.multiple){let e=this.value;e.includes(t)||j(F,this,ci).call(this,[...e,t],{close:!1,inputType:Cr});return}A(Tr,this,!0),this.value=t,A(kr,this,!1),j(F,this,ri).call(this),ht(this,Cr),j(F,this,si).call(this)}function si(){A(Tr,this,!1),!(this.multiple||Sr(this.value,k(Ar,this)))&&(A(Ar,this,this.value),gt(this))}function ci(e,{close:t=!0,inputType:r}={}){if($r.call(j(F,this)))return;let i=this.value.filter(t=>!e.includes(t));this.value=e,this._control&&(this._control.value=``),A(Mr,this,``),A(kr,this,!1),t&&(this.open=!1),j(F,this,_i).call(this),this._syncFormValue(),ht(this,r),A(Ar,this,this.value),Sr(this.value,e)&&gt(this),this._control?.focus(),i.length&&j(F,this,Si).call(this,n(`Removed {name}`,{name:new Intl.ListFormat(document.documentElement.lang||void 0,{type:`conjunction`}).format(i.map(e=>j(F,this,Ci).call(this,e)))}),!0)}function li(){let e=this._control?.value??``;if($r.call(j(F,this))||e===``)return;let t=j(F,this,wi).call(this,e);t?.disabled||this.requireOptionMatch&&!t||j(F,this,ci).call(this,[...new Set([...this.value,e])])}function ui(){return fr(Yr.call(j(F,this)))}function di(){return k(jr,this)===null?void 0:j(F,this,ui).call(this).find(e=>e.value===k(jr,this))}function fi(e){A(jr,this,e?.value??null),mr(j(F,this,ui).call(this),e,this._control,{scroll:this.open})}function pi(e){let t=e.trim().toLowerCase(),n=[];for(let e of this.options)if(j(F,this,hi).call(this,e))for(let r of e.options)(t===``||j(F,this,gi).call(this,t,r))&&n.push({groupLabel:e.label,option:r});else(t===``||j(F,this,gi).call(this,t,e))&&n.push({option:e});return t===``?n:j(F,this,mi).call(this,t,n)}function mi(e,t){let n=({option:t})=>t.label.toLowerCase()===e||String(t.value).toLowerCase()===e,r=[];for(let e=0;e<t.length;){let i=e;for(;i<t.length&&t[i].groupLabel===t[e].groupLabel;)i++;let a=t.slice(e,i);r.push(...a.filter(n),...a.filter(e=>!n(e))),e=i}return r}function hi(e){return e.type===`optgroup`}function gi(e,t){return t.label.toLowerCase().includes(e)||String(t.value).toLowerCase().includes(e)||(t.data?.keywords?.toLowerCase().includes(e)??!1)}function _i(){let e=Yr.call(j(F,this));if(!e)return;let t=k(kr,this)?this._control?.value??``:``,n=this.multiple?this.value:[],r=j(F,this,pi).call(this,t).filter(e=>!n.includes(e.option.value)),i=r.slice(0,this.limit),a=[],o=new Map;for(let e of i){let t=a.at(-1);if(t&&t.groupLabel===e.groupLabel){t.entries.push(e);continue}let n=e.groupLabel??``,r=o.get(n)??0;o.set(n,r+1),a.push({key:`${e.groupLabel===void 0?`options`:`group`}:${n}:${r}`,groupLabel:e.groupLabel,entries:[e]})}let c=this.multiple?null:this.value,l=e=>jt(e.entries,e=>e.option.value,e=>j(F,this,vi).call(this,e.option,c!==null&&String(e.option.value)===c));this.overflowTotal=r.length>this.limit?r.length:0,j(F,this,xi).call(this,r.length),s(p`${jt(a,e=>e.key,e=>e.groupLabel===void 0?l(e):p`<craft-option-group .label=${e.groupLabel}>
                ${l(e)}
              </craft-option-group>`)}`,e);let u=j(F,this,di).call(this);k(jr,this)!==null&&!u&&A(jr,this,null),mr(j(F,this,ui).call(this),u,this._control,{scroll:!1})}function vi(e,t){let n=e.data??{},r=e.label,i=r.startsWith(`$`)||r.startsWith(`@`);return p`
      <craft-option
        .value=${String(e.value)}
        .selected=${t}
        .hint=${n.hint??null}
        ?disabled=${e.disabled??!1}
      >
        ${j(F,this,yi).call(this,n)}${i?p`<code>${r}</code>`:r}
      </craft-option>
    `}function yi(e){return p`${e.indicator?p`<craft-indicator
          fill=${e.indicator.fill??i}
          appearance=${e.indicator.appearance??i}
        ></craft-indicator>`:i}${e.icon?p`<craft-icon
          name="${e.icon}"
          style=${e.color?`color: ${br(e.color)}`:i}
        ></craft-icon>`:i}`}function bi(){let e=this.value;return Array.isArray(e)?e.length>0:e!==``}function xi(e){if(!this.open&&!k(kr,this)){A(Hr,this,``);return}let t=e===0?n(`No results`):n(`{num, number} {num, plural, =1{result} other{results}}`,{num:e});t!==k(Hr,this)&&(k(Ur,this)&&!k(kr,this)||(A(Hr,this,t),j(F,this,Si).call(this,t)))}function Si(e,t=!1){A(Ur,this,t),k(Vr,this)!==null&&(clearTimeout(k(Vr,this)),A(Vr,this,null)),this.announcement=``,queueMicrotask(()=>{this.isConnected&&(this.announcement=e)}),A(Vr,this,setTimeout(()=>{A(Vr,this,null),A(Ur,this,!1),this.announcement=``},5e3))}function Ci(e){return j(F,this,wi).call(this,e)?.label??e}function wi(e){for(let t of j(F,this,Ei).call(this))if(String(t.value)===e)return t}function Ti(){return this.multiple||!j(F,this,bi).call(this)?void 0:j(F,this,wi).call(this,this.value)}function*Ei(){for(let e of this.options)j(F,this,hi).call(this,e)?yield*e.options:yield e}function Di(e){return this.showSelectedHint&&e.data?.hint?`${e.label} – ${e.data.hint}`:e.label}function Oi(){k(qr,this)||(A(qr,this,document.createElement(`ul`)),k(qr,this).slot=`selection`,k(qr,this).id=`selection-${this._inputId}`,k(qr,this).setAttribute(`role`,`list`),k(qr,this).setAttribute(`aria-live`,`polite`),k(qr,this).setAttribute(`aria-atomic`,`false`),this.append(k(qr,this)));let e=this.value;s(jt(e,e=>e,e=>p`
          <li>
            <craft-combobox-token
              ?removable=${!$r.call(j(F,this))}
              @craft-remove=${()=>j(F,this,ci).call(this,this.value.filter(t=>t!==e))}
            >
              ${j(F,this,yi).call(this,j(F,this,wi).call(this,e)?.data??{})}
              ${j(F,this,Ci).call(this,e)}
            </craft-combobox-token>
          </li>
        `),k(qr,this))}function ki(){let e=this.multiple&&this.required&&!this.disabled&&!this.readOnly&&!k(Or,this)&&this.value.length===0;this._setValidity(e?{valueMissing:!0}:{},e?n(`This field is required.`):``,this._control)}Jr.styles=[ge,h,Te,yr],r([c({type:Array})],Jr.prototype,`options`,void 0),r([c({type:Number})],Jr.prototype,`limit`,void 0),r([c({type:Boolean,attribute:`multiple`,reflect:!0})],Jr.prototype,`multiple`,void 0),r([c({type:Boolean,attribute:`require-option-match`})],Jr.prototype,`requireOptionMatch`,void 0),r([c({type:Boolean,attribute:`show-all-on-empty`})],Jr.prototype,`showAllOnEmpty`,void 0),r([c({type:Boolean})],Jr.prototype,`required`,void 0),r([c({type:Boolean,reflect:!0})],Jr.prototype,`invalid`,void 0),r([c({type:Boolean,reflect:!0})],Jr.prototype,`open`,void 0),r([c({type:Boolean,reflect:!0})],Jr.prototype,`clearable`,void 0),r([c({type:String,reflect:!0})],Jr.prototype,`placeholder`,void 0),r([c({type:Boolean,reflect:!0,attribute:`show-selected-hint`})],Jr.prototype,`showSelectedHint`,void 0),r([c({attribute:`value`})],Jr.prototype,`value`,null),r([f()],Jr.prototype,`announcement`,void 0),r([f()],Jr.prototype,`overflowTotal`,void 0),customElements.get(`craft-combobox`)||customElements.define(`craft-combobox`,Jr);var Ai=a`
  :host {
    display: inline-flex;
  }
`,ji={rest:`custom-icons/clone-dashed`,copying:`custom-icons/clone-dashed`,success:`check`,error:`xmark-large`},Mi=new WeakMap,Ni=new WeakSet,Pi=class extends u{async copyValue(){if(!(this.status===`copying`||this.disabled)){this.status=`copying`;try{await navigator.clipboard.writeText(this.value),this.dispatchEvent(new CustomEvent(`craft-copy`,{bubbles:!0,cancelable:!1,composed:!0,detail:{value:this.value}}))}catch{this.dispatchEvent(new CustomEvent(`craft-error`,{cancelable:!1,composed:!0,bubbles:!0}))}finally{this.isCopying=!1}}}async showStatus(e){clearTimeout(k(Mi,this)),this.status=e,await this.updateComplete,this.hideTooltip?await this.tooltipEl?.show():this.tooltipEl?.reposition(),A(Mi,this,setTimeout(()=>{this.status=`rest`,this.tooltipEl?.hide()},this.feedbackDuration))}constructor(){super(),O(this,Ni),this.isCopying=!1,this.status=`rest`,this.hasLabel=!1,this.value=``,this.disabled=!1,this.feedbackDuration=1e3,this.label=null,this.tooltipLabel=null,this.hideTooltip=!1,this.icon=null,this.size=`small`,this.variant=he.Plain,M(this,Mi,void 0),this.addEventListener(`craft-copy`,()=>{this.showStatus(`success`)}),this.addEventListener(`craft-error`,()=>{this.showStatus(`error`)})}connectedCallback(){super.connectedCallback(),this.id||=`copy-${Math.floor(Math.random()*1e8)}`}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(k(Mi,this)),this.status=`rest`}render(){return p`
      <craft-tooltip
        for="${this.id}"
        trigger="${this.hideTooltip?`manual`:`hover focus`}"
        >${Fi.call(j(Ni,this))}</craft-tooltip
      >
      <craft-button
        type="button"
        id="${this.id}"
        part="button"
        size="${this.size}"
        variant="${this.variant}"
        flush=${_(this.flush)}
        icon="${this.status===`success`||this.status===`error`?ji[this.status]:this.icon??ji[this.status]}"
        aria-label="${this.hasLabel?i:this.label||n(`Copy to clipboard`)}"
        ?disabled=${this.disabled}
        @click="${this.copyValue}"
        >${this.hasLabel?p`<slot @slotchange=${j(Ni,this,Ii)}></slot>`:i}</craft-button
      >
      ${this.hasLabel?i:p`<slot hidden @slotchange=${j(Ni,this,Ii)}></slot>`}
    `}};function Fi(){return this.status===`success`?n(`Copied`):this.status===`error`?n(`Copy failed`):this.hideTooltip?``:this.tooltipLabel||n(`Copy`)}function Ii(){this.hasLabel=[...this.childNodes].some(e=>e instanceof Element||!!e.textContent?.trim())}Pi.styles=[Ai],r([f()],Pi.prototype,`isCopying`,void 0),r([f()],Pi.prototype,`status`,void 0),r([f()],Pi.prototype,`hasLabel`,void 0),r([m(`craft-tooltip`)],Pi.prototype,`tooltipEl`,void 0),r([c({type:String})],Pi.prototype,`value`,void 0),r([c({type:Boolean})],Pi.prototype,`disabled`,void 0),r([c({attribute:`feedback-duration`,type:Number})],Pi.prototype,`feedbackDuration`,void 0),r([c()],Pi.prototype,`label`,void 0),r([c({attribute:`tooltip-label`})],Pi.prototype,`tooltipLabel`,void 0),r([c({type:Boolean,attribute:`hide-tooltip`})],Pi.prototype,`hideTooltip`,void 0),r([c()],Pi.prototype,`icon`,void 0),r([c({reflect:!0})],Pi.prototype,`size`,void 0),r([c({reflect:!0})],Pi.prototype,`variant`,void 0),r([c({reflect:!0})],Pi.prototype,`flush`,void 0),customElements.get(`craft-copy-button`)||customElements.define(`craft-copy-button`,Pi);var Li=a`
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
`,Ri=a`
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
`,zi=Object.defineProperty,Bi=Object.getOwnPropertyDescriptor,Vi=Object.getOwnPropertySymbols,Hi=Object.prototype.hasOwnProperty,Ui=Object.prototype.propertyIsEnumerable,Wi=e=>{throw TypeError(e)},Gi=(e,t,n)=>t in e?zi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ki=(e,t)=>{for(var n in t||={})Hi.call(t,n)&&Gi(e,n,t[n]);if(Vi)for(var n of Vi(t))Ui.call(t,n)&&Gi(e,n,t[n]);return e},qi=(e,t,n,r)=>{for(var i=r>1?void 0:r?Bi(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&zi(t,n,i),i},Ji=(e,t,n)=>t.has(e)||Wi(`Cannot `+n),Yi=(e,t,n)=>(Ji(e,t,`read from private field`),n?n.call(e):t.get(e)),Xi=(e,t,n)=>t.has(e)?Wi(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),Zi=(e,t,n,r)=>(Ji(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),Qi,$i=class extends u{constructor(){super(),Xi(this,Qi,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){let n=new CustomEvent(e,Ki({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(n),n}static define(e,t=this,n={}){let r=customElements.get(e);if(!r){try{customElements.define(e,t,n)}catch{customElements.define(e,class extends t{},n)}return}let i=` (unknown version)`,a=i;`version`in t&&t.version&&(i=` v`+t.version),`version`in r&&r.version&&(a=` v`+r.version),!(i&&a&&i===a)&&console.warn(`Attempted to register <${e}>${i}, but <${e}>${a} has already been registered.`)}attributeChangedCallback(e,t,n){Yi(this,Qi)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),Zi(this,Qi,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}};Qi=new WeakMap,$i.version=`2.20.1`,$i.dependencies={},qi([c()],$i.prototype,`dir`,2),qi([c()],$i.prototype,`lang`,2);var ea=class extends $i{render(){return p` <slot></slot> `}};ea.styles=[Ri,Li],ea.define(`sl-visually-hidden`);var ta=a`
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
`,na=class extends u{constructor(...e){super(...e),this.value=``,this.disabled=!1}getId(){return`attribute-${this.value.replace(/([a-z])([A-Z])/g,`$1-$2`).replace(/[\s_]+/g,`-`).toLowerCase()}`}render(){return p`
      <craft-copy-button
        id="${this.getId()}"
        value="${this.value}"
        class=${C({"copy-attribute":!0})}
      >
        ${this.value}
      </craft-copy-button>
    `}};na.styles=[v,ta],r([m(`craft-copy-button`)],na.prototype,`copyButtonEl`,void 0),r([c({type:String})],na.prototype,`value`,void 0),r([c({type:Boolean,reflect:!0})],na.prototype,`disabled`,void 0),customElements.get(`craft-copy-attribute`)||customElements.define(`craft-copy-attribute`,na);var ra=a`
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
`,ia=new WeakMap,aa=new WeakMap,oa=new WeakMap,I=new WeakSet,sa=new WeakMap,ca=class extends u{constructor(...e){super(...e),O(this,I),this.target=null,this.label=``,this.minSize=200,this.step=16,this.largeStep=64,this.dragging=null,M(this,ia,null),M(this,aa,null),M(this,oa,null),M(this,sa,()=>{(k(ia,this)!==null||k(aa,this)!==null)&&j(I,this,ma).call(this,k(ia,this),k(aa,this))})}connectedCallback(){super.connectedCallback(),window.addEventListener(`resize`,k(sa,this))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`resize`,k(sa,this))}reset(){A(ia,this,null),A(aa,this,null),j(I,this,ha).call(this)}render(){let e=j(I,this,ba).call(this,`x`),t=j(I,this,ba).call(this,`y`),r=j(I,this,ba).call(this,`both`);return p`
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
        @keydown=${j(I,this,ya)}
      ></button>
    `}};function la(){return this.target??this.parentElement}function ua(){let e=la.call(j(I,this));return e?getComputedStyle(e).direction===`rtl`:!1}function da(){let e=la.call(j(I,this))?.getBoundingClientRect();return{width:Math.round(e?.width??0),height:Math.round(e?.height??0)}}function fa(){let e=la.call(j(I,this)),t=e?getComputedStyle(e):null;return{width:parseFloat(t?.maxWidth??``)||window.innerWidth,height:parseFloat(t?.maxHeight??``)||window.innerHeight}}function pa(e,t){return Math.round(Math.min(Math.max(e,this.minSize),t))}function ma(e,t){let n=j(I,this,fa).call(this);A(ia,this,e===null?null:j(I,this,pa).call(this,e,n.width)),A(aa,this,t===null?null:j(I,this,pa).call(this,t,n.height)),j(I,this,ha).call(this)}function ha(){this.dispatchEvent(new CustomEvent(`craft-resize`,{detail:{width:k(ia,this),height:k(aa,this)},bubbles:!0,composed:!0}))}function ga(e,t){if(e.button!==0)return;e.preventDefault();let n=e.currentTarget;try{n.setPointerCapture(e.pointerId)}catch{}let r=j(I,this,da).call(this);A(oa,this,{axis:t,pointerId:e.pointerId,startX:e.clientX,startY:e.clientY,startWidth:k(ia,this)??r.width,startHeight:k(aa,this)??r.height,sign:ua.call(j(I,this))?-1:1}),this.dragging=t}function _a(e){let t=k(oa,this);if(!t||e.pointerId!==t.pointerId)return;let n=(e.clientX-t.startX)*t.sign,r=e.clientY-t.startY;j(I,this,ma).call(this,t.axis===`y`?k(ia,this):t.startWidth+n*2,t.axis===`x`?k(aa,this):t.startHeight+r*2)}function va(e){if(!k(oa,this)||e.pointerId!==k(oa,this).pointerId)return;let t=e.currentTarget;t.hasPointerCapture?.(e.pointerId)&&t.releasePointerCapture(e.pointerId),A(oa,this,null),this.dragging=null}function ya(e){let t=e.shiftKey?this.largeStep:this.step,n=j(I,this,da).call(this),r=k(ia,this)??n.width,i=k(aa,this)??n.height,a=ua.call(j(I,this))?-t:t;switch(e.key){case`ArrowLeft`:j(I,this,ma).call(this,r-a,i);break;case`ArrowRight`:j(I,this,ma).call(this,r+a,i);break;case`ArrowUp`:j(I,this,ma).call(this,r,i-t);break;case`ArrowDown`:j(I,this,ma).call(this,r,i+t);break;case`Enter`:this.reset();break;default:return}e.preventDefault()}function ba(e){return{down:t=>j(I,this,ga).call(this,t,e),move:e=>j(I,this,_a).call(this,e),up:e=>j(I,this,va).call(this,e)}}ca.styles=[ra],r([c({attribute:!1})],ca.prototype,`target`,void 0),r([c()],ca.prototype,`label`,void 0),r([c({type:Number,attribute:`min-size`})],ca.prototype,`minSize`,void 0),r([c({type:Number})],ca.prototype,`step`,void 0),r([c({type:Number,attribute:`large-step`})],ca.prototype,`largeStep`,void 0),r([f()],ca.prototype,`dragging`,void 0),customElements.get(`craft-resize-grips`)||customElements.define(`craft-resize-grips`,ca);var xa=a`
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
`,Sa=0,Ca=0;function wa(){Ca++===0&&document.body.classList.add(`no-scroll`)}function Ta(){Ca>0&&--Ca===0&&document.body.classList.remove(`no-scroll`)}var Ea=new WeakMap,Da=new WeakMap,Oa=new WeakMap,ka=new WeakMap,Aa=new WeakMap,ja=new WeakMap,Ma=new WeakSet,Na=new WeakMap,Pa=new WeakMap,Fa=new WeakMap,Ia=new WeakMap,La=new WeakMap,Ra=new WeakMap,za=new WeakMap,Ba=class extends u{constructor(...e){super(...e),O(this,Ma),this.open=!1,this.label=``,this.nonModal=!1,this.fullscreen=!1,this.closeOnOutsideClick=!1,this.noClose=!1,this.noHeader=!1,M(this,Ea,null),M(this,Da,null),this.resizable=!1,this.resizedSize={width:null,height:null},this.titleId=`craft-dialog-title-${++Sa}`,M(this,Oa,!1),M(this,ka,null),M(this,Aa,!1),M(this,ja,null),M(this,Na,e=>{e.stopPropagation(),this.resizedSize=e.detail}),M(this,Pa,e=>{e.preventDefault(),this.requestClose()}),M(this,Fa,()=>{this.open=!1}),M(this,Ia,e=>{!this.open||e.key!==`Escape`||e.defaultPrevented||e.isComposing||(e.preventDefault(),this.requestClose())}),M(this,La,e=>{e.target?.closest?.(`[data-dialog="close"]`)&&this.requestClose()}),M(this,Ra,e=>{this.closeOnOutsideClick&&e.target===this.dialogElement&&this.requestClose()}),M(this,za,()=>{this.closeOnOutsideClick&&this.requestClose()})}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,k(La,this)),this.addEventListener(`keydown`,k(Ia,this)),A(ja,this,new MutationObserver(()=>this.requestUpdate())),k(ja,this).observe(this,{childList:!0})}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,k(La,this)),this.removeEventListener(`keydown`,k(Ia,this)),k(ja,this)?.disconnect(),A(ja,this,null),k(ka,this)?.call(this),A(ka,this,null),A(Ea,this,null),A(Da,this,null),j(Ma,this,Ga).call(this),E()}get dialogElement(){return this.shadowRoot?.querySelector(`dialog`)??null}get hasFooter(){return this.querySelector(`:scope > [slot="footer"]`)!==null}render(){return p`
      ${this.nonModal&&this.open?p`<div
            class="backdrop"
            part="backdrop"
            @click=${k(za,this)}
          ></div>`:i}
      <dialog
        part="dialog"
        aria-labelledby=${this.label===``?i:this.titleId}
        @cancel=${k(Pa,this)}
        @close=${k(Fa,this)}
        @click=${k(Ra,this)}
      >
        ${this.resizable&&!this.fullscreen?p`<div class="frame">
              ${j(Ma,this,Va).call(this)}
              <craft-resize-grips
                @craft-resize=${k(Na,this)}
              ></craft-resize-grips>
            </div>`:j(Ma,this,Va).call(this)}
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
    `}updated(e){super.updated(e);let t=this.shadowRoot?.querySelector(`craft-resize-grips`),n=this.shadowRoot?.querySelector(`.surface`);t&&n&&t.target!==n&&(t.target=n),this.open!==k(Oa,this)&&(A(Oa,this,this.open),this.open?j(Ma,this,Ha).call(this):j(Ma,this,Ua).call(this),j(Ma,this,Ka).call(this,this.open))}requestClose(){this.dispatchEvent(new CustomEvent(`craft-before-hide`,{bubbles:!0,composed:!0,cancelable:!0}))&&(this.open=!1)}};function Va(){let{width:e,height:t}=this.resizedSize,n=this.resizable&&!this.fullscreen;return p`<div
      class="surface"
      part="surface"
      style=${ae({"inline-size":n&&e!==null?`${e}px`:void 0,"block-size":n&&t!==null?`${t}px`:void 0})}
    >
      ${this.hasHeader?this.renderHeader():this.renderHiddenTitle()}
      ${this.renderBody()} ${this.renderFooter()}
    </div>`}function Ha(){let e=this.dialogElement,t=document.activeElement;A(Ea,this,t instanceof HTMLElement?t:null),A(Da,this,de(k(Ea,this))),e&&!e.open&&(this.nonModal?e.show():e.showModal()),this.nonModal&&(k(ka,this)?.call(this),A(ka,this,Ne(this))),k(Aa,this)||(A(Aa,this,!0),wa())}function Ua(){let e=this.dialogElement,t=k(Ea,this),n=k(Da,this);A(Ea,this,null),A(Da,this,null);let r=!1;e?.open&&(r=this.matches(`:focus-within`),e.close()),k(ka,this)?.call(this),A(ka,this,null),j(Ma,this,Ga).call(this),E();let i=document.activeElement,a=!fe(i)||this.contains(i);(!this.nonModal||r||a)&&j(Ma,this,Wa).call(this,t,n,a)}function Wa(e,t,n){let r=this.returnFocus?.(e);if(fe(r)){r.focus();return}n&&t?.()?.focus()}function Ga(){k(Aa,this)&&(A(Aa,this,!1),Ta())}function Ka(e){j(Ma,this,qa).call(this,e?`craft-show`:`craft-hide`),this.updateComplete.then(()=>{this.open===e&&j(Ma,this,qa).call(this,e?`craft-after-show`:`craft-after-hide`)})}function qa(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}Ba.styles=[v,xa],r([c({type:Boolean,reflect:!0})],Ba.prototype,`open`,void 0),r([c()],Ba.prototype,`label`,void 0),r([c({type:Boolean,attribute:`non-modal`,reflect:!0})],Ba.prototype,`nonModal`,void 0),r([c({type:Boolean,reflect:!0})],Ba.prototype,`fullscreen`,void 0),r([c({type:Boolean,attribute:`close-on-outside-click`})],Ba.prototype,`closeOnOutsideClick`,void 0),r([c({type:Boolean,attribute:`no-close`,reflect:!0})],Ba.prototype,`noClose`,void 0),r([c({type:Boolean,attribute:`no-header`,reflect:!0})],Ba.prototype,`noHeader`,void 0),r([c({attribute:!1})],Ba.prototype,`returnFocus`,void 0),r([c({type:Boolean,reflect:!0})],Ba.prototype,`resizable`,void 0),r([f()],Ba.prototype,`resizedSize`,void 0),customElements.get(`craft-dialog`)||customElements.define(`craft-dialog`,Ba);var Ja=new WeakMap,Ya=new WeakSet,Xa=class{constructor(e,t){this.host=e,this.source=t,O(this,Ya),M(this,Ja,null),e.addController(this)}hostConnected(){j(Ya,this,Za).call(this)}hostDisconnected(){j(Ya,this,Qa).call(this)}resubscribe(){j(Ya,this,Qa).call(this),j(Ya,this,Za).call(this)}get state(){return this.source()?.state??null}};function Za(){A(Ja,this,this.source()?.on(`change`,()=>this.host.requestUpdate())??null)}function Qa(){k(Ja,this)?.call(this),A(Ja,this,null)}var $a=a`
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
`,eo=new WeakMap,to=new WeakMap,no=new WeakMap,ro=new WeakMap,io=new WeakMap,ao=new WeakSet,oo=new WeakMap,so=new WeakMap,co=class extends Ba{constructor(){super(),O(this,ao),this.controller=null,this.showTitle=!1,this.selectLabel=``,this.cancelLabel=``,this.busy=!1,this.loading=!1,this.canSubmit=!1,this.narrow=!1,this.hasIndex=!1,M(this,eo,new Xa(this,()=>this.controller)),M(this,to,null),M(this,no,void 0),M(this,ro,void 0),M(this,io,()=>{j(ao,this,uo).call(this),clearTimeout(k(ro,this)),A(ro,this,setTimeout(()=>j(ao,this,lo).call(this),200))}),M(this,oo,()=>{this.submit()}),M(this,so,()=>{this.busy||this.requestClose()}),this.resizable=!0}connectedCallback(){super.connectedCallback(),window.addEventListener(`resize`,k(io,this)),typeof ResizeObserver<`u`&&(A(to,this,new ResizeObserver(([e])=>{e&&(this.narrow=e.contentRect.width<550)})),this.hasUpdated&&j(ao,this,fo).call(this))}disconnectedCallback(){super.disconnectedCallback(),k(to,this)?.disconnect(),window.removeEventListener(`resize`,k(io,this)),clearTimeout(k(ro,this)),j(ao,this,uo).call(this)}updated(e){super.updated(e),!this.open||!this.hasIndex?j(ao,this,uo).call(this):(e.has(`hasIndex`)||e.has(`open`))&&!this.hasAttribute(`size-locked`)&&j(ao,this,lo).call(this)}willUpdate(e){e.has(`controller`)&&k(eo,this).resubscribe();let t=k(eo,this).state;t&&(this.open=t.open,this.busy=t.busy,this.loading=t.loading,this.canSubmit=t.canSubmit,this.label=t.title,this.showTitle=t.showTitle,this.selectLabel=t.selectLabel,this.hasIndex=t.indexBody!==null),super.willUpdate(e)}firstUpdated(e){super.firstUpdated(e),j(ao,this,fo).call(this)}renderHeader(){if(this.label===``)return p``;let e=p`<h1
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
            @click=${k(so,this)}
          >
            ${this.cancelLabel||n(`Cancel`)}
          </craft-button>
          <craft-button
            part="select"
            type="button"
            variant="primary"
            ?disabled=${!this.canSubmit}
            ?loading=${this.busy}
            @click=${k(oo,this)}
          >
            ${this.selectLabel||n(`Select`)}
          </craft-button>
        </div>
      </footer>
    `}submit(){this.canSubmit&&(this.dispatchEvent(new CustomEvent(`craft-select`,{bubbles:!0,composed:!0})),this.controller?.submit())}requestClose(){if(this.dispatchEvent(new CustomEvent(`craft-cancel`,{bubbles:!0,composed:!0})),this.controller){this.controller.cancel();return}super.requestClose()}};function lo(){k(no,this)!==void 0&&cancelAnimationFrame(k(no,this)),A(no,this,requestAnimationFrame(()=>{A(no,this,requestAnimationFrame(()=>{A(no,this,void 0);let e=this.shadowRoot?.querySelector(`.surface`);if(!this.open||!this.hasIndex||!e)return;let t=e.getBoundingClientRect().height;t>0&&(this.style.setProperty(`--_locked-block-size`,`${t}px`),this.setAttribute(`size-locked`,``))}))}))}function uo(){k(no,this)!==void 0&&(cancelAnimationFrame(k(no,this)),A(no,this,void 0)),this.removeAttribute(`size-locked`),this.style.removeProperty(`--_locked-block-size`)}function fo(){let e=this.shadowRoot?.querySelector(`.surface`);e&&k(to,this)?.observe(e)}co.styles=[...Ba.styles,$a],r([c({attribute:!1})],co.prototype,`controller`,void 0),r([c({type:Boolean,attribute:`show-title`,reflect:!0})],co.prototype,`showTitle`,void 0),r([c({attribute:`select-label`})],co.prototype,`selectLabel`,void 0),r([c({attribute:`cancel-label`})],co.prototype,`cancelLabel`,void 0),r([c({type:Boolean,reflect:!0})],co.prototype,`busy`,void 0),r([c({type:Boolean,reflect:!0})],co.prototype,`loading`,void 0),r([c({type:Boolean,attribute:`can-submit`,reflect:!0})],co.prototype,`canSubmit`,void 0),r([c({type:Boolean,reflect:!0})],co.prototype,`narrow`,void 0),r([f()],co.prototype,`hasIndex`,void 0),customElements.get(`craft-element-selector-modal`)||customElements.define(`craft-element-selector-modal`,co);var po=[`chevron-down`,`chevron-up`,`chevron-right`,`chevron-left`],mo=class extends u{constructor(...e){super(...e),this.open=!1,this.label=``,this.appearance=`line`,this.size=`medium`,this.state=null,this.cookieName=null,this.__defaultInvoker=null,this.__boundInvoker=null,this.__externalTrigger=null,this.__externalExpanded=!1,this.__announcedOpened=null,this.toggle=()=>{this.open=!this.open},this.__onSlotChange=()=>{this.__externalTrigger||this.__setupSlottedMode()},this.__toggleExternal=()=>{this.state=this.__externalExpanded?`collapsed`:`expanded`}}show(){this.open=!0}hide(){this.open=!1}get __invoker(){return this.__slotted(`invoker`)}get __content(){return this.__slotted(`content`)}__slotted(e){return Array.from(this.children).find(t=>t instanceof HTMLElement&&t.slot===e)}get __externalTarget(){let e=this.__externalTrigger?.getAttribute(`aria-controls`);return e?document.getElementById(e):null}render(){return p`
      <slot name="invoker" @slotchange=${this.__onSlotChange}></slot>
      <slot name="content" @slotchange=${this.__onSlotChange}></slot>
      <slot></slot>
    `}connectedCallback(){this.__externalTrigger=this.querySelector(`:scope > button[type="button"][aria-controls]:not([slot])`),super.connectedCallback(),this.__externalTrigger?this.__setupExternalMode():this.__setupSlottedMode()}disconnectedCallback(){super.disconnectedCallback(),this.__boundInvoker?.removeEventListener(`click`,this.toggle),this.__boundInvoker=null,this.__externalTrigger&&(this.__handleExternalOpen(),this.__externalTrigger.removeEventListener(`click`,this.__toggleExternal))}updated(e){super.updated(e),e.has(`label`)&&this.__defaultInvoker&&(this.__defaultInvoker.textContent=this.label),e.has(`size`)&&this.__defaultInvoker&&this.__defaultInvoker.setAttribute(`size`,this.size),e.has(`open`)&&!this.__externalTrigger&&(this.__syncSlottedState(),this.__syncInvokerChevron(),this.__announceOpenedChange()),e.has(`state`)&&this.__externalTrigger&&(this.state===`expanded`?this.__handleExternalOpen():this.state===`collapsed`&&this.__handleExternalClose())}__announceOpenedChange(){let e=!!this.open,t=this.__announcedOpened;this.__announcedOpened=e,t!==null&&t!==e&&this.dispatchEvent(new CustomEvent(e?`craft-show`:`craft-hide`))}__setupSlottedMode(){this.__ensureDefaultInvoker();let e=this.__invoker??null,t=this.__content;t&&(t.id||=oe(`collapsible-content`)),e!==this.__boundInvoker&&(this.__boundInvoker?.removeEventListener(`click`,this.toggle),e?.addEventListener(`click`,this.toggle),this.__boundInvoker=e),e&&t&&e.setAttribute(`aria-controls`,t.id),this.__syncSlottedState(),this.__syncInvokerChevron()}__syncSlottedState(){this.__invoker?.setAttribute(`aria-expanded`,String(!!this.open)),this.__content?.style.setProperty(`display`,this.open?``:`none`)}__ensureDefaultInvoker(){if(this.__invoker)return;let e=document.createElement(`craft-button`);e.slot=`invoker`,e.setAttribute(`type`,`button`),e.setAttribute(`variant`,`plain`),e.setAttribute(`flush`,``),e.setAttribute(`icon`,`chevron-right`),e.setAttribute(`icon-position`,`suffix`),e.textContent=this.label,this.__defaultInvoker=e,this.prepend(e)}__syncInvokerChevron(){let e=this.__invoker;if(!(e instanceof xe)||!e.icon||!po.includes(e.icon))return;let t=getComputedStyle(this).direction===`rtl`;e.iconPosition=`suffix`,e.icon=this.open?`chevron-down`:t?`chevron-left`:`chevron-right`}__setupExternalMode(){let e=this.__externalTrigger;if(!this.__externalTarget){console.error(`No target with id ${e.getAttribute(`aria-controls`)} found for disclosure.`,e);return}e.addEventListener(`click`,this.__toggleExternal),this.state!==`expanded`&&this.state!==`collapsed`&&(this.state=`expanded`)}__handleExternalOpen(){this.__externalExpanded=!0,this.__externalTrigger?.setAttribute(`aria-expanded`,`true`),this.dispatchEvent(new CustomEvent(`craft-show`));let e=this.__externalTarget;e&&(e.dataset.state=`expanded`),this.__persistExternalState(`expanded`)}__handleExternalClose(){this.__externalExpanded=!1,this.__externalTrigger?.setAttribute(`aria-expanded`,`false`),this.dispatchEvent(new CustomEvent(`craft-hide`));let e=this.__externalTarget;e&&(e.dataset.state=`collapsed`),this.__persistExternalState(`collapsed`)}__persistExternalState(e){this.cookieName&&window.Craft?.setCookie(this.cookieName,e)}};mo.styles=a`
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
  `,r([c({type:Boolean,reflect:!0})],mo.prototype,`open`,void 0),r([c()],mo.prototype,`label`,void 0),r([c({reflect:!0})],mo.prototype,`appearance`,void 0),r([c({reflect:!0})],mo.prototype,`size`,void 0),r([c({reflect:!0})],mo.prototype,`state`,void 0),r([c({attribute:`cookie-name`})],mo.prototype,`cookieName`,void 0),customElements.get(`craft-disclosure`)||customElements.define(`craft-disclosure`,mo);var ho=class extends u{constructor(...e){super(...e),this.label=``,this.icon=``,this.appearance=`plain`}render(){return p`
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
    `}};ho.styles=[a`
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
    `],r([c()],ho.prototype,`label`,void 0),r([c()],ho.prototype,`icon`,void 0),r([c({reflect:!0})],ho.prototype,`appearance`,void 0),customElements.get(`craft-empty`)||customElements.define(`craft-empty`,ho);var go=class extends u{constructor(...e){super(...e),this.separated=!1,this.resizeObserver=new ResizeObserver(()=>this.scheduleColumnUpdate()),this.childObserver=new MutationObserver(()=>{this.observeChildren(),this.scheduleColumnUpdate()}),this.columnUpdateFrame=null}connectedCallback(){super.connectedCallback(),this.toggleColumnTracking()}disconnectedCallback(){super.disconnectedCallback(),this.stopColumnTracking()}updated(e){e.has(`separated`)&&this.toggleColumnTracking()}toggleColumnTracking(){this.stopColumnTracking(),!(!this.separated||!this.isConnected)&&(this.childObserver.observe(this,{childList:!0}),this.observeChildren(),this.scheduleColumnUpdate())}stopColumnTracking(){this.childObserver.disconnect(),this.resizeObserver.disconnect(),this.columnUpdateFrame!==null&&(cancelAnimationFrame(this.columnUpdateFrame),this.columnUpdateFrame=null);for(let e of this.children)e.removeAttribute(`data-follows-column`)}observeChildren(){this.resizeObserver.disconnect(),this.resizeObserver.observe(this);for(let e of this.children)this.resizeObserver.observe(e)}scheduleColumnUpdate(){this.columnUpdateFrame===null&&(this.columnUpdateFrame=requestAnimationFrame(()=>{this.columnUpdateFrame=null,this.updateColumns()}))}updateColumns(){let e=null;for(let t of this.children){if(!(t instanceof HTMLElement)||t.localName===`style`||t.localName===`slot`)continue;let n=t.getClientRects().length>0;t.toggleAttribute(`data-follows-column`,n&&e!==null&&e.offsetTop===t.offsetTop),n&&(e=t)}}render(){return p`
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
          craft-icon[name='asterisk'][data-craft-field-decoration] {
          display: none;
        }

        craft-field[fieldset][required]
          > craft-field-group
          craft-field[required]
          > [slot='label']
          > [data-craft-field-decoration]:not(:has(craft-info-icon)) {
          display: contents !important;
        }

        craft-field[fieldset][required]
          > craft-field-group
          craft-field[required]:not([translatable])::part(actions) {
          margin-inline-start: var(--_label-text-bearing);
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
    `}createRenderRoot(){return this}};r([c({type:Boolean,reflect:!0})],go.prototype,`separated`,void 0),customElements.get(`craft-field-group`)||customElements.define(`craft-field-group`,go);var _o=a`
  ${se}

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
    ${me}
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
    ${ce}
  }
`,vo=/^[0-9a-f]{6}(?:[0-9a-f]{2})?$/i,yo=/^[0-9a-f]{3,4}$/i,bo=/^color\(srgb\s+([\d.e+-]+)\s+([\d.e+-]+)\s+([\d.e+-]+)(?:\s*\/\s*([\d.e+-]+))?\)$/,xo={fromAttribute(e){if(!e)return[];try{let t=JSON.parse(e);return Array.isArray(t)?t.map(e=>String(e)):[]}catch{return[]}}};function So(e){return String(e??``).trim().replace(/^#/,``)}function Co(e){let t=So(e);return yo.test(t)?t.split(``).map(e=>e+e).join(``):vo.test(t)?t:null}function wo(e){if(e.startsWith(`#`))return e.substring(1);let t=e.match(bo);if(!t)return e;let n=e=>Math.round(Math.min(Math.max(parseFloat(e),0),1)*255).toString(16).padStart(2,`0`),[,r=``,i=``,a=``,o]=t,s=n(r)+n(i)+n(a);return o!==void 0&&parseFloat(o)<1&&(s+=n(o)),s}var To=new WeakMap,Eo=class e extends ue{static get styles(){return[...super.styles,_o]}constructor(){super(),this.presets=[],this.alpha=!1,this._pickerListId=`${this._inputId}-presets`,this.type=`text`,M(this,To,()=>{let e=this._control;e&&So(e.value)!==e.value&&(this.value=e.value)})}static doesBrowserSupportColorInputs(){if(e._browserSupportsColorInputs===null){let t=document.createElement(`input`);t.setAttribute(`type`,`color`),e._browserSupportsColorInputs=t.type===`color`}return e._browserSupportsColorInputs}static doesBrowserSupportAlphaColorInputs(){return e._browserSupportsAlphaColorInputs===null&&(e._browserSupportsAlphaColorInputs=`alpha`in document.createElement(`input`)),e._browserSupportsAlphaColorInputs}get slots(){return{...super.slots,input:()=>{let e=document.createElement(`input`),t=this.getAttribute(`value`);return e.type=`text`,e.inputMode=`text`,e.spellcheck=!1,e.setAttribute(`autocorrect`,`off`),e.setAttribute(`autocapitalize`,`off`),t&&e.setAttribute(`value`,So(t)),e}}}get value(){return super.value}set value(e){super.value=So(e)}connectedCallback(){super.connectedCallback(),k(To,this).call(this),this._control?.addEventListener(`input`,k(To,this))}disconnectedCallback(){super.disconnectedCallback(),this._control?.removeEventListener(`input`,k(To,this))}get _expandedHexValue(){return Co(this.value)}_pickerHex(t){return this.alpha&&e.doesBrowserSupportAlphaColorInputs()?t:t.substring(0,6)}get _pickerValue(){return this._expandedHexValue?`#${this._pickerHex(this._expandedHexValue)}`:`#ffffff`}get _validPresets(){return this.presets.map(e=>Co(e)).filter(e=>e!==null).map(e=>`#${this._pickerHex(e)}`)}_handlePickerInput(e){this.value=wo(e.target.value)}_handlePickerChange(e){this._handlePickerInput(e),this._control&&gt(this._control)}_pickerTemplate(){if(!e.doesBrowserSupportColorInputs())return i;let t=this._validPresets;return p`
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
    `}};Eo._browserSupportsColorInputs=null,Eo._browserSupportsAlphaColorInputs=null,r([c({converter:xo})],Eo.prototype,`presets`,void 0),r([c({type:Boolean,reflect:!0})],Eo.prototype,`alpha`,void 0),customElements.get(`craft-input-color`)||customElements.define(`craft-input-color`,Eo);var Do=class extends ue{constructor(...e){super(...e),this.inlineSuffix=!0}_renderSuffix(){return p`<craft-copy-button
      slot="suffix"
      tooltip-label="${n(`Copy`)}"
    ></craft-copy-button>`}get slots(){return{...super.slots,suffix:()=>this._renderSuffix()}}connectedCallback(){super.connectedCallback(),this.readOnly=!0}_copyButton(){return this.querySelector(`craft-copy-button`)}_syncCopyButton(){let e=this._copyButton();e&&(e.value=this.copyValue??this.value)}updated(e){super.updated(e),this.readOnly=!0,this._syncCopyButton()}};r([c({type:String,attribute:`copy-value`})],Do.prototype,`copyValue`,void 0),customElements.get(`craft-input-copy`)||customElements.define(`craft-input-copy`,Do);var Oo=class extends ue{constructor(){super(),this.type=`date`}};customElements.get(`craft-input-date`)||customElements.define(`craft-input-date`,Oo);var ko={fromAttribute:e=>e!==`false`,toAttribute:e=>String(e)},Ao=e=>({fromAttribute:t=>t?JSON.parse(t):e(),toAttribute:e=>JSON.stringify(e)}),jo=new WeakSet,Mo=class extends ue{constructor(){super(),O(this,jo),this.minuteIncrement=30,this.disabledTimeRanges=[],this.forceRoundTime=!1,this.type=`time`}connectedCallback(){super.connectedCallback(),this.addEventListener(`change`,j(jo,this,No))}disconnectedCallback(){this.removeEventListener(`change`,j(jo,this,No)),super.disconnectedCallback()}willUpdate(e){super.willUpdate(e),e.has(`minuteIncrement`)&&(this.step=this.minuteIncrement*60)}updated(e){super.updated(e),j(jo,this,Po).call(this)}};function No(e){if(e.target===this||!(e.target instanceof HTMLInputElement))return;let t=e.target;this.forceRoundTime&&j(jo,this,Fo).call(this,t.value)!==t.value&&(this.value=j(jo,this,Fo).call(this,t.value),t.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0}))),j(jo,this,Po).call(this)}function Po(){let e=this._control;if(!e)return;let t=j(jo,this,Io).call(this,e.value),n=t!==null&&this.disabledTimeRanges.some(([e,n])=>{let r=j(jo,this,Io).call(this,e),i=j(jo,this,Io).call(this,n);return r!==null&&i!==null&&t>=r&&t<i});e.setCustomValidity(n?`This time is unavailable.`:``)}function Fo(e){let t=j(jo,this,Io).call(this,e);if(t===null)return e;let n=Math.max(1,this.minuteIncrement)*60,r=Math.min(86399,Math.round(t/n)*n),i=Math.floor(r/3600),a=Math.floor(r%3600/60);return`${String(i).padStart(2,`0`)}:${String(a).padStart(2,`0`)}`}function Io(e){let t=/^(\d{1,2}):(\d{2})(?::(\d{2}))?$/.exec(e);return t?Number(t[1])*3600+Number(t[2])*60+Number(t[3]??0):null}r([c({type:Number,attribute:`minute-increment`})],Mo.prototype,`minuteIncrement`,void 0),r([c({attribute:`disabled-time-ranges`,converter:Ao(()=>[])})],Mo.prototype,`disabledTimeRanges`,void 0),r([c({type:Boolean,attribute:`force-round-time`})],Mo.prototype,`forceRoundTime`,void 0),customElements.get(`craft-input-time`)||customElements.define(`craft-input-time`,Mo);var Lo={date:()=>n(`Date`),time:()=>n(`Time`),timezone:()=>n(`Time Zone`)},L=new WeakSet,Ro=new WeakMap,zo=new WeakMap,Bo=new WeakMap,Vo=new WeakMap,Ho=new WeakMap,R=class extends u{constructor(...e){super(...e),O(this,L),this.dateValue=``,this.timeValue=``,this.showDate=!0,this.showTime=!0,this.showTimezone=!1,this.minuteIncrement=30,this.disabledTimeRanges=[],this.forceRoundTime=!1,this.disabled=!1,this.readonly=!1,this.required=!1,this.clearable=!1,M(this,Ro,async()=>{this.showDate&&(this.dateValue=``),this.showTime&&(this.timeValue=``),this.showTimezone&&(this.timezone=``),await this.updateComplete,this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.querySelector(`[data-date-time-part] input`)?.focus()}),M(this,zo,void 0),M(this,Bo,void 0),M(this,Vo,e=>{let t=e.type===`focusin`?e.target:e.relatedTarget;this.toggleAttribute(`input-focused`,t instanceof Element&&this.contains(t)&&t.closest(`[data-date-time-part]`)!==null)}),M(this,Ho,e=>{let t=e.target instanceof Element?e.target.closest(`[data-date-time-part]`):null;if(!(t instanceof ue))return;let n=t.value;switch(t.dataset.dateTimePart){case`date`:this.dateValue=n;break;case`time`:this.timeValue=n;break;case`timezone`:this.timezone=n}})}render(){return p`<div class="inputs" part="inputs">
        <slot name="inputs"></slot>
      </div>
      <slot @slotchange=${()=>j(L,this,Go).call(this)}></slot>
      ${this.clearable&&!this.disabled&&!this.readonly?p`<craft-button
            part="clear"
            class=${j(L,this,Uo).call(this)?``:`invisible`}
            type="button"
            icon="xmark-large"
            aria-label=${n(`Clear`)}
            variant="plain"
            size="small"
            @click=${k(Ro,this)}
          ></craft-button>`:null}`}connectedCallback(){super.connectedCallback(),this.addEventListener(`input`,k(Ho,this)),this.addEventListener(`focusin`,k(Vo,this)),this.addEventListener(`focusout`,k(Vo,this)),k(zo,this)??A(zo,this,new ResizeObserver(()=>j(L,this,Go).call(this))),k(zo,this).observe(this)}disconnectedCallback(){this.removeEventListener(`input`,k(Ho,this)),this.removeEventListener(`focusin`,k(Vo,this)),this.removeEventListener(`focusout`,k(Vo,this)),k(zo,this)?.disconnect(),k(Bo,this)!==void 0&&(cancelAnimationFrame(k(Bo,this)),A(Bo,this,void 0)),super.disconnectedCallback()}updated(e){super.updated(e),j(L,this,Ko).call(this),j(L,this,qo).call(this),j(L,this,Jo).call(this),j(L,this,$o).call(this,`locale`,this.locale,!0),j(L,this,$o).call(this,`timezone`,this.timezone,!this.showTimezone),this.toggleAttribute(`single`,[this.showDate,this.showTime,this.showTimezone].filter(Boolean).length===1),j(L,this,Go).call(this)}};function Uo(){return!!(this.showDate&&this.dateValue||this.showTime&&this.timeValue||this.showTimezone&&this.timezone)}function Wo(){let e=this.shadowRoot?.querySelector(`.inputs`);if(!e)return;let t=this.getBoundingClientRect(),n=e.getBoundingClientRect(),r=getComputedStyle(this),i=r.direction===`rtl`?n.left-t.left-parseFloat(r.borderLeftWidth):t.right-parseFloat(r.borderRightWidth)-n.right;e.style.setProperty(`--_beside-size`,`${Math.max(0,i)}px`)}function Go(){k(Bo,this)===void 0&&A(Bo,this,requestAnimationFrame(()=>{A(Bo,this,void 0);let e=[...this.querySelectorAll(`:scope > [data-date-time-part]`)],t=e.map(e=>e.getBoundingClientRect().top);this.toggleAttribute(`stacked`,t.some(e=>e>(t[0]??e)+1)),e.forEach((e,n)=>{let r=t[n+1];e.toggleAttribute(`data-row-end`,r===void 0||r>t[n]+1)}),j(L,this,Wo).call(this)}))}function Ko(){let e=j(L,this,Yo).call(this,`craft-input-date`,`date`,this.showDate);e instanceof Oo&&(j(L,this,Qo).call(this,e,`date`,this.dateValue,this.required),e.min=this.min,e.max=this.max,j(L,this,Xo).call(this,e))}function qo(){let e=j(L,this,Yo).call(this,`craft-input-time`,`time`,this.showTime);e instanceof Mo&&(j(L,this,Qo).call(this,e,`time`,this.timeValue,this.required),e.min=this.minTime,e.max=this.maxTime,e.minuteIncrement=this.minuteIncrement,e.disabledTimeRanges=this.disabledTimeRanges,e.forceRoundTime=this.forceRoundTime,j(L,this,Xo).call(this,e))}function Jo(){let e=j(L,this,Yo).call(this,`craft-input`,`timezone`,this.showTimezone);e&&(j(L,this,Qo).call(this,e,`timezone`,this.timezone??``,!1),j(L,this,Xo).call(this,e))}function Yo(e,t,n){let r=[...this.children].find(t=>t.tagName.toLowerCase()===e&&t instanceof ue);if(!n)return r?.remove(),null;let i=r??document.createElement(e);return i.dataset.dateTimePart=t,i.slot=`inputs`,i}function Xo(e){e.parentElement!==this&&this.insertBefore(e,j(L,this,Zo).call(this))}function Zo(){return[...this.children].find(e=>!(e instanceof HTMLElement)||e.dataset.dateTimePart===void 0&&e.dataset.dateTimeMetadata===void 0)??null}function Qo(e,t,n,r){e.name=this.name?`${this.name}[${t}]`:``,e.disabled=this.disabled,e.readOnly=this.readonly,e.required=r,e.value!==n&&(e.value=n),this.describedBy?e.setAttribute(`aria-describedby`,this.describedBy):e.removeAttribute(`aria-describedby`),e.label=Lo[t]?.()??t,e.labelSrOnly=!0}function $o(e,t,n){let r=this.name?`${this.name}[${e}]`:void 0,i=[...this.children].find(t=>t instanceof HTMLInputElement&&t.type===`hidden`&&t.dataset.dateTimeMetadata===e);if(!r||!n){i?.remove();return}let a=i??document.createElement(`input`);a.type=`hidden`,a.dataset.dateTimeMetadata=e,a.name=r,a.value=t??``,i||this.append(a)}R.styles=a`
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
  `,r([c()],R.prototype,`name`,void 0),r([c({attribute:`date-value`})],R.prototype,`dateValue`,void 0),r([c({attribute:`time-value`})],R.prototype,`timeValue`,void 0),r([c()],R.prototype,`locale`,void 0),r([c()],R.prototype,`timezone`,void 0),r([c({attribute:`show-date`,converter:ko})],R.prototype,`showDate`,void 0),r([c({attribute:`show-time`,converter:ko})],R.prototype,`showTime`,void 0),r([c({type:Boolean,attribute:`show-timezone`})],R.prototype,`showTimezone`,void 0),r([c()],R.prototype,`min`,void 0),r([c()],R.prototype,`max`,void 0),r([c({attribute:`min-time`})],R.prototype,`minTime`,void 0),r([c({attribute:`max-time`})],R.prototype,`maxTime`,void 0),r([c({type:Number,attribute:`minute-increment`})],R.prototype,`minuteIncrement`,void 0),r([c({attribute:`disabled-time-ranges`,converter:Ao(()=>[])})],R.prototype,`disabledTimeRanges`,void 0),r([c({type:Boolean,attribute:`force-round-time`})],R.prototype,`forceRoundTime`,void 0),r([c({reflect:!0})],R.prototype,`width`,void 0),r([c({type:Boolean})],R.prototype,`disabled`,void 0),r([c({type:Boolean})],R.prototype,`readonly`,void 0),r([c({type:Boolean})],R.prototype,`required`,void 0),r([c({type:Boolean})],R.prototype,`clearable`,void 0),r([c({attribute:`described-by`})],R.prototype,`describedBy`,void 0),customElements.get(`craft-input-date-time`)||customElements.define(`craft-input-date-time`,R);var es=class extends ue{constructor(...e){super(...e),this.autocorrect=!1,this.autocapitalize=`off`}static get styles(){return[...super.styles,a`
        .input-group__input {
          font-family: var(--c-font-mono);
          font-size: 0.9em;
        }
      `]}updated(e){super.updated(e),this._control?.setAttribute(`autocorrect`,this.autocorrect?`on`:`off`),this._control?.setAttribute(`autocapitalize`,this.autocapitalize)}};r([c({reflect:!0,converter:{fromAttribute:e=>e!==`off`,toAttribute:e=>e?`on`:`off`}})],es.prototype,`autocorrect`,void 0),r([c({reflect:!0,type:String})],es.prototype,`autocapitalize`,void 0),customElements.get(`craft-input-handle`)||customElements.define(`craft-input-handle`,es);var ts=e(t(((e,t)=>{(function(n,r){if(typeof e==`object`&&typeof t==`object`)t.exports=r();else if(typeof define==`function`&&define.amd)define([],r);else{var i=r();for(var a in i)(typeof e==`object`?e:n)[a]=i[a]}})(Object(typeof self<`u`?self:e),function(){return(function(){var e=[,(function(){typeof Object.getPrototypeOf!=`function`&&(Object.getPrototypeOf=typeof`test`.__proto__==`object`?function(e){return e.__proto__}:function(e){return e.constructor.prototype})}),(function(){Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,t){if(this==null)throw TypeError(`"this" is null or not defined`);let n=Object(this),r=n.length>>>0;if(r===0)return!1;let i=t|0,a=Math.max(i>=0?i:r-Math.abs(i),0);for(;a<r;){if(n[a]===e)return!0;a++}return!1}})}),(function(){let e=Function.bind.call(Function.call,Array.prototype.reduce),t=Function.bind.call(Function.call,Object.prototype.propertyIsEnumerable),n=Function.bind.call(Function.call,Array.prototype.concat),r=Object.keys;Object.entries||(Object.entries=function(i){return e(r(i),(e,r)=>n(e,typeof r==`string`&&t(i,r)?[[r,i[r]]]:[]),[])})}),(function(){String.prototype.includes||(String.prototype.includes=function(e,t){return typeof t!=`number`&&(t=0),t+e.length>this.length?!1:this.indexOf(e,t)!==-1})}),(function(){if(FormData.Inputmask===void 0){class e extends FormData{constructor(e,t){super(e,t);let n=this.entries(),r;for(;(r=n.next()).done===!1;){let t=r.value[0],n=r.value[1],i=e[t];i&&i.inputmask!==void 0&&!(n instanceof File)&&this.set(t,i.value)}return this}}e.Inputmask=!0,FormData=e}}),(function(e,t,n){var r=o(n(7)),i=n(20),a=n(22);function o(e){return e&&e.__esModule?e:{default:e}}r.default.extendDefinitions({A:{validator:`[A-Za-zА-яЁёÀ-ÿµ]`,casing:`upper`},"&":{validator:`[0-9A-Za-zА-яЁёÀ-ÿµ]`,casing:`upper`},"#":{validator:`[0-9A-Fa-f]`,casing:`upper`}});let s=/25[0-5]|2[0-4][0-9]|[01][0-9][0-9]/;function c(e,t,n,r,i){if(n-1>-1&&t.buffer[n-1]!==`.`?(e=t.buffer[n-1]+e,e=n-2>-1&&t.buffer[n-2]!==`.`?t.buffer[n-2]+e:`0`+e):e=`00`+e,i.greedy&&parseInt(e)>255&&s.test(`00`+e.charAt(2))){let r=[...t.buffer.slice(0,n),`.`,e.charAt(2)];if(r.join(``).match(/\./g).length<4)return{refreshFromBuffer:!0,buffer:r,caret:n+2}}return s.test(e)}r.default.extendAliases({cssunit:{regex:`[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)`},url:{regex:`(https?|ftp)://.*`,autoUnmask:!1,keepStatic:!1,tabThrough:!0},ip:{mask:`i{1,3}.j{1,3}.k{1,3}.l{1,3}`,definitions:{i:{validator:c},j:{validator:c},k:{validator:c},l:{validator:c}},onUnMask:function(e,t,n){return e},inputmode:`decimal`,substitutes:{",":`.`}},email:{mask:function({separator:e,quantifier:t}){let n=`*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]`,r=n;if(e)for(let i=0;i<t;i++)r+=`[${e}${n}]`;return r},greedy:!1,casing:`lower`,separator:null,quantifier:5,skipOptionalPartCharacter:``,onBeforePaste:function(e,t){return e=e.toLowerCase(),e.replace(`mailto:`,``)},definitions:{"*":{validator:"[0-9１-９A-Za-zА-яЁёÀ-ÿµ!#$%&'*+/=?^_`{|}~-]"},"-":{validator:`[0-9A-Za-z-]`}},onUnMask:function(e,t,n){return e},inputmode:`email`},mac:{mask:`##:##:##:##:##:##`},vin:{mask:`V{13}9{4}`,definitions:{V:{validator:`[A-HJ-NPR-Za-hj-npr-z\\d]`,casing:`upper`}},clearIncomplete:!0,autoUnmask:!0},ssn:{mask:`999-99-9999`,postValidation:function(e,t,n,r,o,s,c){let l=a.getMaskTemplate.call(this,!0,i.getLastValidPosition.call(this),!0,!0);return/^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(l.join(``))}}})}),(function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=m(n(8)),i=m(n(9)),a=m(n(10)),o=n(15),s=m(n(11)),c=n(16),l=n(23),u=n(24),d=n(20),f=n(21),p=n(22);function m(e){return e&&e.__esModule?e:{default:e}}let h=s.default.document,g=`_inputmask_opts`;function _(e,t,n){if(!(this instanceof _))return new _(e,t,n);this.dependencyLib=a.default,this.el=void 0,this.events={},this.maskset=void 0,n!==!0&&(Object.prototype.toString.call(e)===`[object Object]`?t=e:(t||={},e&&(t.alias=e)),this.opts=a.default.extend(!0,{},this.defaults,t),this.noMasksCache=t&&t.definitions!==void 0,this.userOptions=t||{},v(this.opts.alias,t,this.opts)),this.refreshValue=!1,this.undoValue=void 0,this.$el=void 0,this.skipInputEvent=!1,this.validationEvent=!1,this.ignorable=!1,this.maxLength,this.mouseEnter=!1,this.clicked=0,this.originalPlaceholder=void 0,this.isComposing=!1,this.lastInputEvent=null,this.hasAlternator=!1}_.prototype={dataAttribute:`data-inputmask`,defaults:r.default,definitions:i.default,aliases:{},masksCache:{},i18n:{},get isRTL(){return this.opts.isRTL||this.opts.numericInput},mask:function(e){let t=this;return typeof e==`string`&&(e=h.getElementById(e)||h.querySelectorAll(e)),e=e.nodeName?[e]:Array.isArray(e)?e:[].slice.call(e),e.forEach(function(e,n){let r=a.default.extend(!0,{},t.opts);if(y(e,r,a.default.extend(!0,{},t.userOptions),t.dataAttribute)){let n=(0,u.generateMaskSet)(r,t.noMasksCache);n!==void 0&&(e.inputmask!==void 0&&(e.inputmask.opts.autoUnmask=!0,e.inputmask.remove()),e.inputmask=new _(void 0,void 0,!0),e.inputmask.opts=r,e.inputmask.noMasksCache=t.noMasksCache,e.inputmask.userOptions=a.default.extend(!0,{},t.userOptions),e.inputmask.el=e,e.inputmask.$el=(0,a.default)(e),e.inputmask.maskset=n,a.default.data(e,g,t.userOptions),l.mask.call(e.inputmask))}}),e&&e[0]&&e[0].inputmask||this},option:function(e,t){if(typeof e==`string`)return this.opts[e];if(typeof e==`object`)return a.default.extend(this.userOptions,e),this.el&&t!==!0&&this.mask(this.el),this},unmaskedvalue:function(e){if(this.maskset=this.maskset||(0,u.generateMaskSet)(this.opts,this.noMasksCache),this.el===void 0||e!==void 0){let t=(typeof this.opts.onBeforeMask==`function`&&this.opts.onBeforeMask.call(this,e,this.opts)||e).split(``);c.checkVal.call(this,void 0,!1,!1,t),typeof this.opts.onBeforeWrite==`function`&&this.opts.onBeforeWrite.call(this,void 0,d.getBuffer.call(this),0,this.opts)}return c.unmaskedvalue.call(this,this.el)},remove:function(){if(this.el){a.default.data(this.el,g,null);let e=this.opts.autoUnmask?(0,c.unmaskedvalue)(this.el):this._valueGet(this.opts.autoUnmask);e===d.getBufferTemplate.call(this).join(``)?this._valueSet(``):this._valueSet(e,this.opts.autoUnmask),o.EventRuler.off(this.el);let t;Object.getOwnPropertyDescriptor&&Object.getPrototypeOf?(t=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.el),`value`),t&&this.__valueGet&&Object.defineProperty(this.el,"value",{get:this.__valueGet,set:this.__valueSet,configurable:!0})):h.__lookupGetter__&&this.el.__lookupGetter__(`value`)&&this.__valueGet&&(this.el.__defineGetter__(`value`,this.__valueGet),this.el.__defineSetter__(`value`,this.__valueSet)),this.el.inputmask=void 0}return this.el},getemptymask:function(){return this.maskset=this.maskset||(0,u.generateMaskSet)(this.opts,this.noMasksCache),(this.isRTL?d.getBufferTemplate.call(this).reverse():d.getBufferTemplate.call(this)).join(``)},hasMaskedValue:function(){return!this.opts.autoUnmask},isComplete:function(){return this.maskset=this.maskset||(0,u.generateMaskSet)(this.opts,this.noMasksCache),f.isComplete.call(this,d.getBuffer.call(this))},getmetadata:function(){if(this.maskset=this.maskset||(0,u.generateMaskSet)(this.opts,this.noMasksCache),Array.isArray(this.maskset.metadata)){let e=p.getMaskTemplate.call(this,!0,0,!1).join(``);return this.maskset.metadata.forEach(function(t){return t.mask===e?(e=t,!1):!0}),e}return this.maskset.metadata},isValid:function(e){if(this.maskset=this.maskset||(0,u.generateMaskSet)(this.opts,this.noMasksCache),e){let t=(typeof this.opts.onBeforeMask==`function`&&this.opts.onBeforeMask.call(this,e,this.opts)||e).split(``);c.checkVal.call(this,void 0,!0,!1,t)}let t=c.clearOptionalTail.call(this,[]),n=f.isComplete.call(this,t),r=e===(this.isRTL?t.reverse().join(``):t.join(``));return n&&(e===void 0||r)},format:function(e,t){this.maskset=this.maskset||(0,u.generateMaskSet)(this.opts,this.noMasksCache);let n=(typeof this.opts.onBeforeMask==`function`&&this.opts.onBeforeMask.call(this,e,this.opts)||e).split(``);c.checkVal.call(this,void 0,!0,!1,n);let r=this.isRTL?d.getBuffer.call(this).slice().reverse().join(``):d.getBuffer.call(this).join(``);return t?{value:r,metadata:this.getmetadata()}:r},setValue:function(e){this.el&&(0,a.default)(this.el).trigger(`setvalue`,[e])},analyseMask:u.analyseMask};function v(e,t,n){let r=_.prototype.aliases[e];return r?(r.alias&&v(r.alias,void 0,n),a.default.extend(!0,n,r),a.default.extend(!0,n,t),!0):(n.mask===null&&(n.mask=e),!1)}function y(e,t,n,r){function i(t,i){let a=r===``?t:r+`-`+t;i=i===void 0?e.getAttribute(a):i,i!==null&&(typeof i==`string`&&(t.startsWith(`on`)?i=s.default[i]:i===`false`?i=!1:i===`true`?i=!0:t===`mask`&&(i=i.replace(/\\\\/g,`\\`))),n[t]=i)}if(t.importDataAttributes===!0){let a=e.getAttribute(r),o,s,c,l;if(a&&a!==``&&(a=a.replace(/'/g,`"`),s=JSON.parse(`{`+a+`}`)),s){for(l in c=void 0,s)if(l.toLowerCase()===`alias`){c=s[l];break}}for(o in i(`alias`,c),n.alias&&v(n.alias,n,t),t){if(s){for(l in c=void 0,s)if(l.toLowerCase()===o.toLowerCase()){c=s[l];break}}i(o,c)}}return a.default.extend(!0,t,n),(e.dir===`rtl`||t.rightAlign)&&(e.style.textAlign=`right`),(e.dir===`rtl`||t.numericInput)&&(e.dir=`ltr`,e.removeAttribute(`dir`),t.isRTL=!0),Object.keys(n).length}_.extendDefaults=function(e){a.default.extend(!0,_.prototype.defaults,e)},_.extendDefinitions=function(e){a.default.extend(!0,_.prototype.definitions,e)},_.extendAliases=function(e){a.default.extend(!0,_.prototype.aliases,e)},_.format=function(e,t,n){return _(t).format(e,n)},_.unmask=function(e,t){return _(t).unmaskedvalue(e)},_.isValid=function(e,t){return _(t).isValid(e)},_.remove=function(e){typeof e==`string`&&(e=h.getElementById(e)||h.querySelectorAll(e)),e=e.nodeName?[e]:e;for(let t=0;t<e.length;t++)e[t].inputmask&&e[t].inputmask.remove()},_.setValue=function(e,t){typeof e==`string`&&(e=h.getElementById(e)||h.querySelectorAll(e)),e=e.nodeName?[e]:e,e.forEach(function(e){e.inputmask?e.inputmask.setValue(t):(0,a.default)(e).trigger(`setvalue`,[t])})},_.dependencyLib=a.default,s.default.Inputmask=_,t.default=_}),(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default={_maxTestPos:500,placeholder:`_`,optionalmarker:[`[`,`]`],quantifiermarker:[`{`,`}`],groupmarker:[`(`,`)`],alternatormarker:`|`,escapeChar:`\\`,mask:null,regex:null,oncomplete:()=>{},onincomplete:()=>{},oncleared:()=>{},repeat:0,greedy:!1,autoUnmask:!1,removeMaskOnSubmit:!1,clearMaskOnLostFocus:!0,insertMode:!0,insertModeVisual:!0,clearIncomplete:!1,alias:null,onKeyDown:()=>{},onBeforeMask:null,onBeforePaste:function(e,t){return typeof t.onBeforeMask==`function`?t.onBeforeMask.call(this,e,t):e},onBeforeWrite:null,onUnMask:null,outputMask:null,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:()=>{},skipOptionalPartCharacter:` `,numericInput:!1,rightAlign:!1,undoOnEscape:!0,radixPoint:``,_radixDance:!1,groupSeparator:``,keepStatic:null,positionCaretOnTab:!0,tabThrough:!1,supportsInputType:[`text`,`tel`,`url`,`password`,`search`],isComplete:null,preValidation:null,postValidation:null,staticDefinitionSymbol:void 0,jitMasking:!1,nullable:!0,inputEventOnly:!1,noValuePatching:!1,positionCaretOnClick:`lvp`,casing:null,inputmode:`text`,importDataAttributes:!0,shiftPositions:!0,usePrototypeDefinitions:!0,validationEventTimeOut:3e3,substitutes:{}}}),(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default={9:{validator:`\\p{N}`,definitionSymbol:`*`},a:{validator:`\\p{L}`,definitionSymbol:`*`},"*":{validator:`[\\p{L}\\p{N}]`}}}),(function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(n(11)),i=s(n(12)),a=n(13),o=s(n(14));function s(e){return e&&e.__esModule?e:{default:e}}let c=r.default.document;function l(e){if(e instanceof l)return e;if(!(this instanceof l))return new l(e);e!=null&&e!==r.default&&(this[0]=e.nodeName?e:e[0]!==void 0&&e[0].nodeName?e[0]:c.querySelector(e),this[0]!==void 0&&this[0]!==null&&(0,i.default)(this[0],`events`,(0,i.default)(this[0],`events`)||{}))}l.prototype={on:a.on,off:a.off,trigger:a.trigger},l.extend=o.default,l.data=i.default,l.Event=a.Event,t.default=l}),(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=typeof window<`u`&&window.document&&window.document.createElement?window:{}}),(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;function n(e,t,n){if(n===void 0)return e.__data?e.__data[t]:null;e.__data=e.__data||{},e.__data[t]=n}}),(function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.Event=void 0,t.off=f,t.on=d,t.trigger=p;var r=s(n(11)),i=s(n(12)),a=s(n(14)),o=s(n(10));function s(e){return e&&e.__esModule?e:{default:e}}let c=r.default.document;function l(e){return e instanceof Element&&(0,i.default)(e,`events`)}let u=t.Event=void 0;typeof r.default.CustomEvent==`function`?t.Event=u=r.default.CustomEvent:r.default.Event&&c&&c.createEvent?(t.Event=u=function(e,t){t||={bubbles:!1,cancelable:!1,composed:!0,detail:void 0};let n=c.createEvent(`CustomEvent`);return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n},u.prototype=r.default.Event.prototype):typeof Event<`u`&&(t.Event=u=Event);function d(e,t){if(!this[0]||!l(this[0]))return this;let n=this[0],r=(0,i.default)(n,`events`),a=(e,i)=>{n.addEventListener?n.addEventListener(e,t,!1):n.attachEvent&&n.attachEvent(`on${e}`,t),r[e]=r[e]||{},r[e][i]=r[e][i]||[],r[e][i].push(t)};return e.split(` `).forEach(e=>{let[t,n=`global`]=e.split(`.`);a(t,n)}),this}function f(e,t){let n,r;function a(e,t,i){if(e in n)if(r.removeEventListener?r.removeEventListener(e,i,!1):r.detachEvent&&r.detachEvent(`on${e}`,i),t===`global`)for(let t in n[e])n[e][t].splice(n[e][t].indexOf(i),1);else n[e][t].splice(n[e][t].indexOf(i),1)}function o(e,r){let i=[],a,o;if(e.length>0){let s=r?[r]:Object.keys(n[e]);for(let c=0;c<s.length;c++)if(r=s[c],t===void 0)for(a=0,o=n[e][r]?.length||0;a<o;a++)i.push({ev:e,namespace:r,handler:n[e][r][a]});else i.push({ev:e,namespace:r,handler:t})}else if(r.length>0){for(let e in n)if(n[e][r])if(t===void 0)for(a=0,o=n[e][r].length;a<o;a++)i.push({ev:e,namespace:r,handler:n[e][r][a]});else i.push({ev:e,namespace:r,handler:t})}return i}return l(this[0])&&(n=(0,i.default)(this[0],`events`),r=this[0],e||=Object.keys(n).join(` `),e!==``&&e.split(` `).forEach(e=>{let[t,n]=e.split(`.`);o(t,n).forEach(({ev:e,handler:t,namespace:n})=>{a(e,n,t)})})),this}function p(e){if(l(this[0])){let t=(0,i.default)(this[0],`events`),n=this[0],r=typeof e==`string`?e.split(` `):[e.type];for(let i=0;i<r.length;i++){let s=r[i].split(`.`),l=s[0],u=s[1]||`global`;if(c!==void 0){let t,r={bubbles:!0,cancelable:!0,composed:!0,detail:arguments[1]};if(c.createEvent){try{switch(l){case`input`:r.inputType=`insertText`,t=new InputEvent(l,r);break;default:t=new CustomEvent(l,r)}}catch{t=c.createEvent(`CustomEvent`),t.initCustomEvent(l,r.bubbles,r.cancelable,r.detail)}e.type&&(0,a.default)(t,e),n.dispatchEvent(t)}else t=c.createEventObject(),t.eventType=l,t.detail=arguments[1],e.type&&(0,a.default)(t,e),n.fireEvent(`on`+t.eventType,t)}else if(t[l]!==void 0){arguments[0]=arguments[0].type?arguments[0]:o.default.Event(arguments[0]),arguments[0].detail=arguments.slice(1);let e=t[l];(u===`global`?Object.values(e).flat():e[u]).forEach(e=>e.apply(n,arguments))}}}return this}}),(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;function n(){let e,t,r,i,a,o,s=arguments[0]||{},c=1,l=arguments.length,u=!1;for(typeof s==`boolean`&&(u=s,s=arguments[c]||{},c++),typeof s!=`object`&&typeof s!=`function`&&(s={});c<l;c++)if((e=arguments[c])!=null)for(t in e)r=s[t],i=e[t],s!==i&&(u&&i&&(Object.prototype.toString.call(i)===`[object Object]`||(a=Array.isArray(i)))?(a?(a=!1,o=r&&Array.isArray(r)?r:[]):o=r&&Object.prototype.toString.call(r)===`[object Object]`?r:{},s[t]=n(u,o,i)):i!==void 0&&(s[t]=i));return s}}),(function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.EventRuler=void 0;var r=n(16),i=s(n(7)),a=n(19),o=n(20);function s(e){return e&&e.__esModule?e:{default:e}}t.EventRuler={on:function(e,t,n){let s=e.inputmask.dependencyLib,c=function(t){t.originalEvent&&(t=t.originalEvent||t,arguments[0]=t);let c=this,l=c.inputmask,u=l?l.opts:void 0,d;if(l===void 0&&this.nodeName!==`FORM`){let e=s.data(c,`_inputmask_opts`);s(c).off(),e&&new i.default(e).mask(c)}else if(![`submit`,`reset`,`setvalue`].includes(t.type)&&this.nodeName!==`FORM`&&(c.disabled||c.readOnly&&!(t.type===`keydown`&&t.ctrlKey&&t.key===a.keys.c||u.tabThrough===!1&&t.key===a.keys.Tab)))t.preventDefault();else{switch(t.type){case`input`:if(l.skipInputEvent===!0)return l.skipInputEvent=!1,t.preventDefault();l.lastInputEvent={time:Date.now(),data:t.data};break;case`keydown`:if(l.lastInputEvent&&Date.now()-l.lastInputEvent.time<10&&l.lastInputEvent.data===t.key)return!1;break;case`click`:case`focus`:if(l.validationEvent)return l.validationEvent=!1,e.blur(),(0,r.HandleNativePlaceholder)(e,(l.isRTL?o.getBufferTemplate.call(l).slice().reverse():o.getBufferTemplate.call(l)).join(``)),setTimeout(function(){e.focus()},u.validationEventTimeOut),!1;d=arguments,setTimeout(function(){e.inputmask&&n.apply(c,d)},0);return}let i=n.apply(c,arguments);return i===!1&&(t.preventDefault(),t.stopPropagation()),i}};t=`${t}.inputmask`,[`submit.inputmask`,`reset.inputmask`].includes(t)?(c=c.bind(e),e.form!==null&&s(e.form).on(t,c)):s(e).on(t,c)},off:function(e,t){if(e.inputmask){let n=e.inputmask.dependencyLib;n(e).off(t||`.inputmask`)}}}}),(function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.HandleNativePlaceholder=m,t.applyInputValue=d,t.checkVal=p,t.clearOptionalTail=f,t.unmaskedvalue=h,t.writeBuffer=g;var r=n(17),i=n(18),a=u(n(7)),o=n(19),s=n(20),c=n(21),l=n(22);function u(e){return e&&e.__esModule?e:{default:e}}function d(e,t,n,r){let i=e?e.inputmask:this,a=i.opts;e.inputmask.refreshValue=!1,r!==!0&&typeof a.onBeforeMask==`function`&&(t=a.onBeforeMask.call(i,t,a)||t),t=(t||``).toString().split(``),p(e,!0,!1,t,n),i.undoValue=i._valueGet(!0),(a.clearMaskOnLostFocus||a.clearIncomplete)&&e.inputmask._valueGet()===s.getBufferTemplate.call(i).join(``)&&s.getLastValidPosition.call(i)===-1&&e.inputmask._valueSet(``)}function f(e){let t=this;e.length=0;let n=l.getMaskTemplate.call(t,!0,0,!0,void 0,!0),r;for(;(r=n.shift())!==void 0;)e.push(r);return e}function p(e,t,n,r,a){let o=e?e.inputmask:this,u=o.maskset,d=o.opts,f=o.dependencyLib,p=r.slice(),m=``,h=-1,_,v=d.skipOptionalPartCharacter;d.skipOptionalPartCharacter=``;function y(e,t){let n=l.getMaskTemplate.call(o,!0,0).slice(e,s.seekNext.call(o,e,!1,!1)).join(``).replace(/'/g,``),r=n.indexOf(t);for(;r>0&&n[r-1]===` `;)r--;let i=r===0&&!s.isMask.call(o,e)&&(l.getTest.call(o,e).match.nativeDef===t.charAt(0)||l.getTest.call(o,e).match.static===!0&&l.getTest.call(o,e).match.nativeDef===`'`+t.charAt(0)||l.getTest.call(o,e).match.nativeDef===` `&&(l.getTest.call(o,e+1).match.nativeDef===t.charAt(0)||l.getTest.call(o,e+1).match.static===!0&&l.getTest.call(o,e+1).match.nativeDef===`'`+t.charAt(0)));if(!i&&r>0&&!s.isMask.call(o,e,!1,!0)){let t=s.seekNext.call(o,e);o.caretPos.begin<t&&(o.caretPos={begin:t})}return i}s.resetMaskSet.call(o,!1),o.clicked=0,h=d.radixPoint?s.determineNewCaretPosition.call(o,{begin:0,end:0},!1,d.__financeInput===!1?`radixFocus`:void 0).begin:0,u.p=h,o.caretPos={begin:h};let b=[],x=o.caretPos;if(p.forEach(function(e,t){if(e!==void 0){let r=new f.Event(`_checkval`);r.key=e,m+=e;let a=s.getLastValidPosition.call(o,void 0,!0);y(h,m)?_=l.getTest.call(o,t).match.static===!0&&i.EventHandlers.keypressEvent.call(o,r,!0,!1,n,a+1):(_=i.EventHandlers.keypressEvent.call(o,r,!0,!1,n,o.caretPos.begin),_&&(h=o.caretPos.begin+1,m=``)),_?(_.pos!==void 0&&u.validPositions[_.pos]&&u.validPositions[_.pos].match.static===!0&&u.validPositions[_.pos].alternation===void 0&&(b.push(_.pos),o.isRTL||(_.forwardPosition=_.pos+1)),g.call(o,void 0,s.getBuffer.call(o),_.forwardPosition,r,!1),o.caretPos={begin:_.forwardPosition,end:_.forwardPosition},x=o.caretPos):u.validPositions[t]===void 0&&p[t]===l.getPlaceholder.call(o,t)&&s.isMask.call(o,t,!0)?o.caretPos.begin++:o.caretPos=x}}),b.length>0){let e,t,r=s.seekNext.call(o,-1,void 0,!1);if(!c.isComplete.call(o,s.getBuffer.call(o))&&b.length<=r||c.isComplete.call(o,s.getBuffer.call(o))&&b.length>0&&b.length!==r&&b[0]===0){let a=r;for(;(e=b.shift())!==void 0;)if(e<a){let r=new f.Event(`_checkval`);if(t=u.validPositions[e],t.generatedInput=!0,r.key=t.input,_=i.EventHandlers.keypressEvent.call(o,r,!0,!1,n,a),_&&_.pos!==void 0&&_.pos!==e&&u.validPositions[_.pos]&&u.validPositions[_.pos].match.static===!0)b.push(_.pos);else if(!_)break;a++}}else for(;e=b.pop();)t=u.validPositions[e],t&&u.validPositions[e+1]===void 0&&delete u.validPositions[e]}t&&g.call(o,e,s.getBuffer.call(o),_?_.forwardPosition:o.caretPos.begin,a||new f.Event(`checkval`),a&&(a.type===`input`&&o.undoValue!==s.getBuffer.call(o).join(``)||a.type===`paste`)),d.skipOptionalPartCharacter=v}function m(e,t){let n=e?e.inputmask:this;if(r.ie){if(e.inputmask._valueGet()!==t&&(e.placeholder!==t||e.placeholder===``)){let r=s.getBuffer.call(n).slice(),i=e.inputmask._valueGet();if(i!==t){let t=s.getLastValidPosition.call(n);t===-1&&i===s.getBufferTemplate.call(n).join(``)?r=[]:t!==-1&&f.call(n,r),g(e,r)}}}else e.placeholder!==t&&(e.placeholder=t,e.placeholder===``&&e.removeAttribute(`placeholder`))}function h(e){let t=e?e.inputmask:this,n=t.opts,r=t.maskset;if(e){if(e.inputmask===void 0)return e.value;e.inputmask&&e.inputmask.refreshValue&&d(e,e.inputmask._valueGet(!0))}let i=[],o=r.validPositions;for(let e=0,t=o.length;e<t;e++)o[e]&&o[e].match&&(o[e].match.static!=1||n.keepStatic!==!0&&Array.isArray(r.metadata)&&o[e].generatedInput!==!0)&&i.push(o[e].input);let c=i.length===0?``:(t.isRTL?i.reverse():i).join(``);if(typeof n.onUnMask==`function`){let e=(t.isRTL?s.getBuffer.call(t).slice().reverse():s.getBuffer.call(t)).join(``);c=n.onUnMask.call(t,e,c,n)}return n.outputMask&&c.length>0?a.default.format(c,{...n,mask:n.outputMask,alias:null}):c}function g(e,t,n,r,i){let a=e?e.inputmask:this,l=a.opts,u=a.dependencyLib;if(r&&typeof l.onBeforeWrite==`function`){let e=l.onBeforeWrite.call(a,r,t,n,l);if(e){if(e.refreshFromBuffer){let n=e.refreshFromBuffer;c.refreshFromBuffer.call(a,n===!0?n:n.start,n.end,e.buffer||t),t=s.getBuffer.call(a,!0)}n!==void 0&&(n=e.caret===void 0?n:e.caret)}}if(e!==void 0&&(e.inputmask._valueSet(t.join(``)),n!==void 0&&(r===void 0||r.type!==`blur`)&&s.caret.call(a,e,n,void 0,void 0,r!==void 0&&r.type===`keydown`&&(r.key===o.keys.Delete||r.key===o.keys.Backspace)),e.inputmask.writeBufferHook===void 0||e.inputmask.writeBufferHook(n),i===!0)){let n=u(e),r=e.inputmask._valueGet();e.inputmask.skipInputEvent=!0,n.trigger(`input`),setTimeout(function(){r===s.getBufferTemplate.call(a).join(``)?n.trigger(`cleared`):c.isComplete.call(a,t)===!0&&n.trigger(`complete`)},0)}}}),(function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.mobile=t.iphone=t.ie=void 0;var r=i(n(11));function i(e){return e&&e.__esModule?e:{default:e}}let a=r.default.navigator&&r.default.navigator.userAgent||``;t.ie=a.indexOf(`MSIE `)>0||a.indexOf(`Trident/`)>0,t.mobile=!!(navigator.userAgentData?.mobile??((matchMedia(`(pointer:coarse)`).matches||navigator.maxTouchPoints)&&innerWidth<=1024||/Mobi|Android|iPhone/i.test(a))),t.iphone=/iphone/i.test(a)}),(function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.EventHandlers=void 0;var r=n(17),i=u(n(11)),a=n(16),o=n(19),s=n(20),c=n(21),l=n(22);function u(e){return e&&e.__esModule?e:{default:e}}let d=t.EventHandlers={keyEvent:function(e,t,n,i,u){let f=this.inputmask,p=f.opts,m=f.dependencyLib,h=f.maskset,g=this,_=m(g),v=e.key,y=s.caret.call(f,g),b=p.onKeyDown.call(this,e,s.getBuffer.call(f),y,p);if(b!==void 0)return b;if(v===o.keys.Backspace||v===o.keys.Delete||r.iphone&&v===o.keys.BACKSPACE_SAFARI||e.ctrlKey&&v===o.keys.x&&!(`oncut`in g))e.preventDefault(),c.handleRemove.call(f,g,v,y),(0,a.writeBuffer)(g,s.getBuffer.call(f,!0),h.p,e,g.inputmask._valueGet()!==s.getBuffer.call(f).join(``));else if(v===o.keys.End||v===o.keys.PageDown){e.preventDefault();let t=s.seekNext.call(f,s.getLastValidPosition.call(f));s.caret.call(f,g,e.shiftKey?y.begin:t,t,!0)}else v===o.keys.Home&&!e.shiftKey||v===o.keys.PageUp?(e.preventDefault(),s.caret.call(f,g,0,e.shiftKey?y.begin:0,!0)):p.undoOnEscape&&v===o.keys.Escape&&e.altKey!==!0?((0,a.checkVal)(g,!0,!1,f.undoValue.split(``)),_.trigger(`click`)):v===o.keys.Insert&&!(e.shiftKey||e.ctrlKey)&&f.userOptions.insertMode===void 0?c.isSelection.call(f,y)?p.insertMode=!p.insertMode:(p.insertMode=!p.insertMode,s.caret.call(f,g,y.begin,y.begin)):p.tabThrough===!0&&v===o.keys.Tab?e.shiftKey===!0?(y.end=s.seekPrevious.call(f,y.end,!0),l.getTest.call(f,y.end-1).match.static===!0&&y.end--,y.begin=s.seekPrevious.call(f,y.end,!0),y.begin>=0&&y.end>0&&(e.preventDefault(),s.caret.call(f,g,y.begin,y.end))):(y.begin=s.seekNext.call(f,y.begin,!0),y.end=s.seekNext.call(f,y.begin,!0),y.end<h.maskLength&&y.end--,y.begin<=h.maskLength&&(e.preventDefault(),s.caret.call(f,g,y.begin,y.end))):e.shiftKey||(p.insertModeVisual&&p.insertMode===!1?v===o.keys.ArrowRight?setTimeout(function(){let e=s.caret.call(f,g);s.caret.call(f,g,e.begin)},0):v===o.keys.ArrowLeft&&setTimeout(function(){let e={begin:s.translatePosition.call(f,g.inputmask.caretPos.begin),end:s.translatePosition.call(f,g.inputmask.caretPos.end)};f.isRTL?s.caret.call(f,g,e.begin+(e.begin===h.maskLength?0:1)):s.caret.call(f,g,e.begin-(e.begin===0?0:1))},0):f.keyEventHook===void 0||f.keyEventHook(e));return f.isComposing=v===o.keys.Process||v===o.keys.Unidentified,f.ignorable=v===void 0||v.length>1,d.keypressEvent.call(f,e,t,n,i,u)},keypressEvent:function(e,t,n,r,i){let l=this.inputmask||this,u=l.opts,d=l.dependencyLib,f=l.maskset,p=l.el,m=d(p),h=e.key;if(t!==!0&&!(e.ctrlKey&&e.altKey&&!l.ignorable)&&(e.ctrlKey||e.metaKey||l.ignorable))h===o.keys.Enter&&l.undoValue!==l._valueGet(!0)&&(l.undoValue=l._valueGet(!0),setTimeout(function(){m.trigger(`change`)},0));else if(h){let o=t?{begin:i,end:i}:s.caret.call(l,p),d;t||(h=u.substitutes[h]||h),f.writeOutBuffer=!0;let m=c.isValid.call(l,o,h,r,void 0,void 0,void 0,t);if(m!==!1&&(s.resetMaskSet.call(l,!0),d=m.caret===void 0?s.seekNext.call(l,m.pos.begin?m.pos.begin:m.pos):m.caret,f.p=d),d=u.numericInput&&m.caret===void 0?s.seekPrevious.call(l,d):d,n!==!1&&(setTimeout(function(){u.onKeyValidation.call(p,h,m)},0),f.writeOutBuffer&&m!==!1)){let n=s.getBuffer.call(l);(0,a.writeBuffer)(p,n,d,e,t!==!0)}if(e.preventDefault(),t)return m!==!1&&(m.forwardPosition=d),m}},pasteEvent:async function(e){function t(t,n,r,i,c){let l=s.caret.call(t,n,void 0,void 0,!0),u=r.substr(0,l.begin),d=r.substr(l.end,r.length);if(u==(t.isRTL?s.getBufferTemplate.call(t).slice().reverse():s.getBufferTemplate.call(t)).slice(0,l.begin).join(``)&&(u=``),d==(t.isRTL?s.getBufferTemplate.call(t).slice().reverse():s.getBufferTemplate.call(t)).slice(l.end).join(``)&&(d=``),i=u+i+d,t.isRTL&&o.numericInput!==!0){i=i.split(``);for(let e of s.getBufferTemplate.call(t))i[0]===e&&i.shift();i=i.reverse().join(``)}let f=i;if(typeof c==`function`){if(f=c.call(t,f,o),f===!1)return!1;f||=r}(0,a.checkVal)(n,!0,!1,f.toString().split(``),e)}let n=this,r=this.inputmask,o=r.opts,c=r._valueGet(!0),l;r.skipInputEvent=!0,e.clipboardData&&e.clipboardData.getData?l=e.clipboardData.getData(`text/plain`):i.default.clipboardData&&i.default.clipboardData.getData&&(l=i.default.clipboardData.getData(`Text`)),t(r,n,c,l,o.onBeforePaste),e.preventDefault()},inputFallBackEvent:function(e){let t=this.inputmask,n=t.opts,i=t.dependencyLib;function c(e,r,i){let a=e.substr(0,i.begin).split(``),o=e.substr(i.begin).split(``),c=r.substr(0,i.begin).split(``),u=r.substr(i.begin).split(``),d=a.length>=c.length?a.length:c.length,f=o.length>=u.length?o.length:u.length,p,m,h=``,g=[],_;for(;a.length<d;)a.push(`~`);for(;c.length<d;)c.push(`~`);for(;o.length<f;)o.unshift(`~`);for(;u.length<f;)u.unshift(`~`);let v=a.concat(o),y=c.concat(u);for(m=0,p=v.length;m<p;m++)switch(_=l.getPlaceholder.call(t,s.translatePosition.call(t,m)),h){case`insertText`:y[m-1]===v[m]&&i.begin==v.length-1&&g.push(v[m]),m=p;break;case`insertReplacementText`:v[m]===`~`?i.end++:m=p;break;case`deleteContentBackward`:v[m]===`~`?i.end++:m=p;break;default:v[m]!==y[m]&&((v[m+1]===`~`||v[m+1]===_||v[m+1]===void 0)&&(y[m]===_&&y[m+1]===`~`||y[m]===`~`)||y[m+1]===`~`&&y[m]===v[m+1]?(h=`insertText`,g.push(v[m]),i.begin--,i.end--):v[m]!==_&&v[m]!==`~`&&(v[m+1]===`~`||y[m]!==v[m]&&y[m+1]===v[m+1])?(h=`insertReplacementText`,g.push(v[m]),i.begin--):v[m]===`~`?(h=`deleteContentBackward`,(s.isMask.call(t,s.translatePosition.call(t,m),!0)||y[m]===n.radixPoint)&&i.end++):m=p);break}return{action:h,data:g,caret:i}}let u=this,f=u.inputmask._valueGet(!0),p=(t.isRTL?s.getBuffer.call(t).slice().reverse():s.getBuffer.call(t)).join(``),m=s.caret.call(t,u,void 0,void 0,!0),h;if(p!==f){if(h=c(f,p,m),u.getRootNode().activeElement!==u&&u.focus(),(0,a.writeBuffer)(u,s.getBuffer.call(t)),s.caret.call(t,u,m.begin,m.end,!0),!r.mobile&&t.skipNextInsert&&e.inputType===`insertText`&&h.action===`insertText`&&t.isComposing)return!1;switch(e.inputType===`insertCompositionText`&&h.action===`insertText`&&t.isComposing?t.skipNextInsert=!0:t.skipNextInsert=!1,h.action){case`insertText`:case`insertReplacementText`:h.data.forEach(function(e,n){let r=new i.Event(`keypress`);r.key=e,t.ignorable=!1,d.keypressEvent.call(u,r)}),setTimeout(function(){t.$el.trigger(`keyup`)},0);break;case`deleteContentBackward`:var g=new i.Event(`keydown`);g.key=o.keys.Backspace,d.keyEvent.call(u,g);break;default:(0,a.applyInputValue)(u,f,e),s.caret.call(t,u,m.begin,m.end,!0);break}e.preventDefault()}},setValueEvent:function(e){let t=this.inputmask,n=t.dependencyLib,r=this,i=e&&e.detail?e.detail[0]:arguments[1];i===void 0&&(i=r.inputmask._valueGet(!0)),(0,a.applyInputValue)(r,i,new n.Event(`input`),(e&&e.detail?e.detail[0]:arguments[1])!==void 0),(e.detail&&e.detail[1]!==void 0||arguments[2]!==void 0)&&s.caret.call(t,r,e.detail?e.detail[1]:arguments[2])},focusEvent:function(e){let t=this.inputmask,n=t.opts,r=this,i=t&&t._valueGet();n.showMaskOnFocus&&i!==s.getBuffer.call(t).join(``)&&(0,a.writeBuffer)(r,s.getBuffer.call(t),s.seekNext.call(t,s.getLastValidPosition.call(t))),n.positionCaretOnTab===!0&&t.mouseEnter===!1&&(!c.isComplete.call(t,s.getBuffer.call(t))||s.getLastValidPosition.call(t)===-1)&&d.clickEvent.apply(r,[e,!0]),t.undoValue=t&&t._valueGet(!0)},invalidEvent:function(e){this.inputmask.validationEvent=!0},mouseleaveEvent:function(){let e=this.inputmask,t=e.opts,n=this;e.mouseEnter=!1,t.clearMaskOnLostFocus&&n.getRootNode().activeElement!==n&&(0,a.HandleNativePlaceholder)(n,e.originalPlaceholder)},clickEvent:function(e,t){let n=this.inputmask;n.clicked++;let r=this;if(r.getRootNode().activeElement===r){let e=s.determineNewCaretPosition.call(n,s.caret.call(n,r),t);e!==void 0&&s.caret.call(n,r,e)}},cutEvent:function(e){let t=this.inputmask,n=t.maskset,r=this,l=s.caret.call(t,r),u=t.isRTL?s.getBuffer.call(t).slice(l.end,l.begin):s.getBuffer.call(t).slice(l.begin,l.end),d=t.isRTL?u.reverse().join(``):u.join(``);i.default.navigator&&i.default.navigator.clipboard?i.default.navigator.clipboard.writeText(d):i.default.clipboardData&&i.default.clipboardData.getData&&i.default.clipboardData.setData(`Text`,d),c.handleRemove.call(t,r,o.keys.Delete,l),(0,a.writeBuffer)(r,s.getBuffer.call(t),n.p,e,t.undoValue!==t._valueGet(!0))},blurEvent:function(e){let t=this.inputmask,n=t.opts,r=t.dependencyLib;t.clicked=0;let i=r(this),o=this;if(o.inputmask){(0,a.HandleNativePlaceholder)(o,t.originalPlaceholder);let r=o.inputmask._valueGet(),l=s.getBuffer.call(t).slice();if(r!==``&&(n.clearMaskOnLostFocus&&(s.getLastValidPosition.call(t)===-1&&r===s.getBufferTemplate.call(t).join(``)?l=[]:a.clearOptionalTail.call(t,l)),c.isComplete.call(t,l)===!1&&(setTimeout(function(){i.trigger(`incomplete`)},0),n.clearIncomplete&&(s.resetMaskSet.call(t,!1),l=n.clearMaskOnLostFocus?[]:s.getBufferTemplate.call(t).slice())),(0,a.writeBuffer)(o,l,void 0,e)),r=t._valueGet(!0),t.undoValue!==r){let e=(t.isRTL?s.getBufferTemplate.call(t).slice().reverse():s.getBufferTemplate.call(t)).join(``);(r!==``||t.undoValue!==e||t.undoValue===e&&t.maskset.validPositions.length>0)&&(t.undoValue=r,i.trigger(`change`))}}},mouseenterEvent:function(){let e=this.inputmask,{showMaskOnHover:t}=e.opts,n=this;if(e.mouseEnter=!0,n.getRootNode().activeElement!==n){let r=(e.isRTL?s.getBufferTemplate.call(e).slice().reverse():s.getBufferTemplate.call(e)).join(``);t&&(0,a.HandleNativePlaceholder)(n,r)}},submitEvent:function(){let e=this.inputmask,t=e.opts;e.undoValue!==e._valueGet(!0)&&e.$el.trigger(`change`),s.getLastValidPosition.call(e)===-1&&e._valueGet&&e._valueGet()===s.getBufferTemplate.call(e).join(``)&&e._valueSet(``),t.clearIncomplete&&c.isComplete.call(e,s.getBuffer.call(e))===!1&&e._valueSet(``),t.removeMaskOnSubmit&&(e._valueSet(e.unmaskedvalue(),!0),setTimeout(function(){(0,a.writeBuffer)(e.el,s.getBuffer.call(e))},0))},resetEvent:function(){let e=this.inputmask;e.refreshValue=!0,setTimeout(function(){(0,a.applyInputValue)(e.el,e._valueGet(!0))},0)}}}),(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.keys=t.keyCode=void 0,t.toKey=i,t.toKeyCode=a;let n=t.keyCode={c:67,x:88,z:90,BACKSPACE_SAFARI:127,Enter:13,Meta_LEFT:91,Meta_RIGHT:92,Space:32,Alt:18,AltGraph:18,ArrowDown:40,ArrowLeft:37,ArrowRight:39,ArrowUp:38,Backspace:8,CapsLock:20,Control:17,ContextMenu:93,Dead:221,Delete:46,End:35,Escape:27,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,Home:36,Insert:45,NumLock:144,PageDown:34,PageUp:33,Pause:19,PrintScreen:44,Process:229,Shift:16,ScrollLock:145,Tab:9,Unidentified:229},r=Object.entries(n).reduce((e,[t,n])=>(e[n]=e[n]===void 0?t:e[n],e),{});t.keys=Object.entries(n).reduce((e,[t,n])=>(e[t]=t===`Space`?` `:t,e),{});function i(e,t){return r[e]||(t?String.fromCharCode(e):String.fromCharCode(e).toLowerCase())}function a(e){return n[e]}}),(function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.caret=s,t.determineLastRequiredPosition=c,t.determineNewCaretPosition=l,t.getBuffer=u,t.getBufferTemplate=d,t.getLastValidPosition=f,t.isMask=p,t.resetMaskSet=m,t.seekNext=h,t.seekPrevious=g,t.translatePosition=_;var r=o(n(11)),i=n(21),a=n(22);function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t,n,i,a){let o=this,s=this.opts,c;if(t!==void 0){if(Array.isArray(t)&&(n=o.isRTL?t[0]:t[1],t=o.isRTL?t[1]:t[0]),t.begin!==void 0&&(n=o.isRTL?t.begin:t.end,t=o.isRTL?t.end:t.begin),typeof t==`number`){t=i?t:_.call(o,t),n=i?n:_.call(o,n),n=typeof n==`number`?n:t;let l=parseInt(((e.ownerDocument.defaultView||r.default).getComputedStyle?(e.ownerDocument.defaultView||r.default).getComputedStyle(e,null):e.currentStyle).fontSize)*n;if(e.scrollLeft=l>e.scrollWidth?l:0,e.inputmask.caretPos={begin:t,end:n},s.insertModeVisual&&s.insertMode===!1&&t===n&&(a||n++),e===e.getRootNode().activeElement){if(`setSelectionRange`in e)e.setSelectionRange(t,n);else if(r.default.getSelection){if(c=document.createRange(),e.firstChild===void 0||e.firstChild===null){let t=document.createTextNode(``);e.appendChild(t)}c.setStart(e.firstChild,t<e.inputmask._valueGet().length?t:e.inputmask._valueGet().length),c.setEnd(e.firstChild,n<e.inputmask._valueGet().length?n:e.inputmask._valueGet().length),c.collapse(!0);let i=r.default.getSelection();i.removeAllRanges(),i.addRange(c)}else e.createTextRange&&(c=e.createTextRange(),c.collapse(!0),c.moveEnd(`character`,n),c.moveStart(`character`,t),c.select());e.inputmask.caretHook===void 0||e.inputmask.caretHook.call(o,{begin:t,end:n})}}}else return`selectionStart`in e&&`selectionEnd`in e?(t=e.selectionStart,n=e.selectionEnd):r.default.getSelection?(c=r.default.getSelection().getRangeAt(0),(c.commonAncestorContainer.parentNode===e||c.commonAncestorContainer===e)&&(t=c.startOffset,n=c.endOffset)):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),t=0-c.duplicate().moveStart(`character`,-e.inputmask._valueGet().length),n=t+c.text.length),{begin:i?t:_.call(o,t),end:i?n:_.call(o,n)}}function c(e){let t=this,{maskset:n,dependencyLib:r}=t,o=f.call(t),s={},c=n.validPositions[o],l=a.getMaskTemplate.call(t,!0,f.call(t),!0,!0),u=l.length,d,p=c===void 0?void 0:c.locator.slice(),m;for(d=o+1;d<l.length;d++)m=a.getTestTemplate.call(t,d,p,d-1),p=m.locator.slice(),s[d]=r.extend(!0,{},m);let h=c&&c.alternation!==void 0?c.locator[c.alternation]:void 0;for(d=u-1;d>o&&(m=s[d],(m.match.optionality||m.match.optionalQuantifier&&m.match.newBlockMarker||h&&(h!==s[d].locator[c.alternation]&&m.match.static!==!0||m.match.static===!0&&m.locator[c.alternation]&&i.checkAlternationMatch.call(t,m.locator[c.alternation].toString().split(`,`),h.toString().split(`,`))&&a.getTests.call(t,d)[0].def!==``))&&l[d]===a.getPlaceholder.call(t,d,m.match));d--)if(u--,m.match.optionality){let e=d;for(;e>0;){let n=a.getTest.call(t,e);if(n.match.newBlockMarker===`master`||n.match.newBlockMarker===!0)break;e--}if(n.validPositions[e]!==void 0)break}return d===o&&(u=d),e?{l:u,def:s[u]?s[u].match:void 0}:u}function l(e,t,n){let r=this,{maskset:i,opts:o}=r,s,c,l;function d(e){if(o.radixPoint!==``&&o.digits!==0){let t=i.validPositions;if(t[e]===void 0||t[e].input===void 0){if(e<h.call(r,-1))return!0;let n=u.call(r).indexOf(o.radixPoint);if(n!==-1){for(let e in t){let i=Number(e);if(n<i&&t[e].input!==a.getPlaceholder.call(r,i))return!1}return!0}}}return!1}if(t&&(r.isRTL?e.end=e.begin:e.begin=e.end),e.begin===e.end){switch(n||=o.positionCaretOnClick,n){case`none`:break;case`select`:e={begin:0,end:u.call(r).length};break;case`ignore`:e.end=e.begin=h.call(r,f.call(r));break;case`radixFocus`:if(r.clicked>1&&i.validPositions.length===0)break;if(d(e.begin)){let t=u.call(r).join(``).indexOf(o.radixPoint);e.end=e.begin=o.numericInput?h.call(r,t):t;break}default:if(s=e.begin,c=f.call(r,s,!0),l=h.call(r,c===-1&&!p.call(r,0)?-1:c),s<=l)e.end=e.begin=p.call(r,s,!1,!0)?s:h.call(r,s);else{let t=i.validPositions[c],n=a.getTestTemplate.call(r,l,t?t.match.locator:void 0,t),d=a.getPlaceholder.call(r,l,n.match);if(d!==``&&u.call(r)[l]!==d&&n.match.optionalQuantifier!==!0&&n.match.newBlockMarker!==!0||!p.call(r,l,o.keepStatic,!0)&&n.match.def===d){let e=h.call(r,l);(s>=e||s===l)&&(l=e)}e.end=e.begin=l}}return e}}function u(e){let t=this,{maskset:n}=t;return(n.buffer===void 0||e===!0)&&(n.buffer=a.getMaskTemplate.call(t,!0,f.call(t),!0),n._buffer===void 0&&(n._buffer=n.buffer.slice())),n.buffer}function d(){let e=this,t=this.maskset;return t._buffer===void 0&&(t._buffer=a.getMaskTemplate.call(e,!1,1),t.buffer===void 0&&(t.buffer=t._buffer.slice())),t._buffer}function f(e,t,n){let r=this.maskset,i=-1,a=-1,o=n||r.validPositions;e===void 0&&(e=-1);for(let n=0,r=o.length;n<r;n++)o[n]&&(t||o[n].generatedInput!==!0)&&(n<=e&&(i=n),n>=e&&(a=n));return i===-1||i===e?a:a===-1||e-i<a-e?i:a}function p(e,t,n){let r=this,i=this.maskset,o=a.getTestTemplate.call(r,e).match;if(o.def===``&&(o=a.getTest.call(r,e).match),o.static!==!0)return o.fn;if(n===!0&&i.validPositions[e]!==void 0&&i.validPositions[e].generatedInput!==!0)return!0;if(t!==!0&&e>-1){if(n){let t=a.getTests.call(r,e);return t.length>1+ +(t[t.length-1].match.def===``)}let t=a.determineTestTemplate.call(r,e,a.getTests.call(r,e)),i=a.getPlaceholder.call(r,e,t.match);return t.match.def!==i}return!1}function m(e){let t=this.maskset;t.buffer=void 0,e!==!0&&(t.validPositions=[],t.p=0),e===!1&&(t.tests={},t.jitOffset={})}function h(e,t,n){let r=this;n===void 0&&(n=!0);let i=e+1;for(;a.getTest.call(r,i).match.def!==``&&(t===!0&&(a.getTest.call(r,i).match.newBlockMarker!==!0||!p.call(r,i,void 0,!0))||t!==!0&&!p.call(r,i,void 0,n));)i++;return i}function g(e,t){let n=this,r=e-1;if(e<=0)return 0;for(;r>0&&(t===!0&&(a.getTest.call(n,r).match.newBlockMarker!==!0||!p.call(n,r,void 0,!0))||t!==!0&&!p.call(n,r,void 0,!0));)r--;return r}function _(e){let t=this,n=this.opts,r=this.el;return t.isRTL&&typeof e==`number`&&(!n.greedy||n.placeholder!==``)&&r&&(e=t._valueGet().length-e,e<0&&(e=0)),e}}),(function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.alternate=s,t.casing=c,t.checkAlternationMatch=l,t.handleRemove=u,t.isComplete=d,t.isSelection=f,t.isValid=p,t.refreshFromBuffer=h,t.revalidateMask=_;var r=n(18),i=n(19),a=n(20),o=n(22);function s(e,t,n,r,i,c){let l=this,u=this.dependencyLib,d=this.opts,f=l.maskset;if(!l.hasAlternator)return!1;let m=u.extend(!0,[],f.validPositions),h=u.extend(!0,{},f.tests),g,_,v=!1,y=!1,b,x,S,C,w,T=i===void 0?a.getLastValidPosition.call(l):i,E,ee,D,te;if(c&&(D=c.begin,te=c.end,c.begin>c.end&&(D=c.end,te=c.begin)),T===-1&&i===void 0)g=0,x=o.getTest.call(l,g),_=x.alternation;else for(;T>=0;T--)if(b=T===0?o.getTest.call(l,0):f.validPositions[T],b&&b.alternation!==void 0){if(T<=(e||0)&&x&&x.locator[b.alternation]!==b.locator[b.alternation])break;g=T,_=b.alternation,x=b}if(_!==void 0){w=parseInt(g),f.excludes[w]=f.excludes[w]||[],e!==!0&&f.excludes[w].push((0,o.getDecisionTaker)(x)+`:`+x.alternation);let i=[],_=-1;for(S=w;w<a.getLastValidPosition.call(l,void 0,!0)+1;S++)_===-1&&e<=S&&t!==void 0&&(i.push(t),_=i.length-1),C=f.validPositions[w],C&&C.generatedInput!==!0&&(w!==0||C.input!==d.skipOptionalPartCharacter)&&(c===void 0||S<D||S>=te)&&i.push(C.input),f.validPositions.splice(w,1);for(_===-1&&t!==void 0&&(i.push(t),_=i.length-1);f.excludes[w]!==void 0&&f.excludes[w].length<10;){f.tests={},a.resetMaskSet.call(l,!0),v=!0,E=w-1;let g=o.getMaskTemplate.call(l,!0,0);for(S=0;S<i.length&&(ee=i[S],g[E+1]===ee&&d.numericInput!==!0?E++:E=S===0||y.caretPos!==void 0||d.insertMode===!1?a.seekNext.call(l,E):a.getLastValidPosition.call(l,E,!0)+1,v=p.call(l,E,ee,!1,r,!0));S++)S===_&&(y=v),e===!0&&v&&(y={caretPos:S});if(v)break;if(a.resetMaskSet.call(l),x=o.getTest.call(l,w),f.validPositions=u.extend(!0,[],m),f.tests=u.extend(!0,{},h),y=!1,f.excludes[w])if(x.alternation!=null){let i=(0,o.getDecisionTaker)(x);if(f.excludes[w].indexOf(i+`:`+x.alternation)!==-1){y=s.call(l,e,t,n,r,w-1,c);break}for(f.excludes[w].push(i+`:`+x.alternation),S=w;S<a.getLastValidPosition.call(l,void 0,!0)+1;S++)f.validPositions.splice(w)}else delete f.excludes[w];else{y=s.call(l,e,t,n,r,w-1,c);break}}}return(!y||d.keepStatic!==!1)&&delete f.excludes[w],y||(f.validPositions=u.extend(!0,[],m),f.tests=u.extend(!0,{},h)),y}function c(e,t,n){let r=this.opts,a=this.maskset;switch(r.casing||t.casing){case`upper`:e=e.toLocaleUpperCase();break;case`lower`:e=e.toLocaleLowerCase();break;case`title`:var o=a.validPositions[n-1];e=n===0||o&&o.input===String.fromCharCode(i.keyCode.Space)?e.toLocaleUpperCase():e.toLocaleLowerCase();break;case`follow`:t.def&&t.def!==t.def.toLocaleLowerCase()?e=e.toLocaleUpperCase():t.def&&t.def!==t.def.toLocaleUpperCase()&&(e=e.toLocaleLowerCase());break;default:if(typeof r.casing==`function`){let t=Array.prototype.slice.call(arguments);t.push(a.validPositions),e=r.casing.apply(this,t)}}return e}function l(e,t,n){let r=this.opts.greedy?t:t.slice(0,1),i=!1,a=n===void 0?[]:n.split(`,`),o;for(let t=0;t<a.length;t++)(o=e.indexOf(a[t]))!==-1&&e.splice(o,1);for(let t=0;t<e.length;t++)if(r.includes(e[t])){i=!0;break}return i}function u(e,t,n,r,c){let l=this,u=this.maskset,d=this.opts;if((d.numericInput||l.isRTL)&&(t===i.keys.Backspace?t=i.keys.Delete:t===i.keys.Delete&&(t=i.keys.Backspace),l.isRTL)){let e=n.end;n.end=n.begin,n.begin=e}let f=a.getLastValidPosition.call(l,void 0,!0);n.end>=a.getBuffer.call(l).length&&f>=n.end&&(n.end=f+1),t===i.keys.Backspace?n.end-n.begin<1&&(n.begin=a.seekPrevious.call(l,n.begin)):t===i.keys.Delete&&n.begin===n.end&&(n.end=a.isMask.call(l,n.end,!0,!0)?n.end+1:a.seekNext.call(l,n.end)+1);let p;(p=_.call(l,n))!==!1&&((r!==!0&&d.keepStatic!==!1||d.regex!==null&&o.getTest.call(l,n.begin).match.def.indexOf(`|`)!==-1)&&s.call(l,!0),r!==!0&&(u.p=t===i.keys.Delete?n.begin+p:n.begin,u.p=a.determineNewCaretPosition.call(l,{begin:u.p,end:u.p},!1,d.insertMode===!1&&t===i.keys.Backspace?`none`:void 0).begin))}function d(e){let t=this,n=this.opts,r=this.maskset;if(typeof n.isComplete==`function`)return n.isComplete(e,n);if(n.repeat===`*`)return;let i=!1,s=a.determineLastRequiredPosition.call(t,!0),c=s.l;if(s.def===void 0||s.def.newBlockMarker||s.def.optionality||s.def.optionalQuantifier){i=!0;for(let n=0;n<=c;n++){let a=o.getTestTemplate.call(t,n).match;if(a.static!==!0&&r.validPositions[n]===void 0&&(a.optionality===!1||a.optionality===void 0||a.optionality&&a.newBlockMarker==0)&&(a.optionalQuantifier===!1||a.optionalQuantifier===void 0)||a.static===!0&&a.def!=``&&e[n]!==o.getPlaceholder.call(t,n,a)){i=!1;break}}}return i}function f(e){let t=this,n=+!this.opts.insertMode;return t.isRTL?e.begin-e.end>n:e.end-e.begin>n}function p(e,t,n,r,i,l,u){let d=this,m=this.dependencyLib,v=this.opts,y=d.maskset;n=n===!0;let b=e;e.begin!==void 0&&(b=d.isRTL?e.end:e.begin);function x(e){if(e!==void 0){if(e.remove!==void 0&&(Array.isArray(e.remove)||(e.remove=[e.remove]),e.remove.sort(function(e,t){return d.isRTL?e.pos-t.pos:t.pos-e.pos}).forEach(function(e){_.call(d,{begin:e,end:e+1})}),e.remove=void 0),e.insert!==void 0&&(Array.isArray(e.insert)||(e.insert=[e.insert]),e.insert.sort(function(e,t){return d.isRTL?t.pos-e.pos:e.pos-t.pos}).forEach(function(e){e.c!==``&&p.call(d,e.pos,e.c,e.strict===void 0||e.strict,e.fromIsValid===void 0?r:e.fromIsValid)}),e.insert=void 0),e.refreshFromBuffer&&e.buffer){let t=e.refreshFromBuffer;h.call(d,t===!0?t:t.start,t.end,e.buffer),e.refreshFromBuffer=void 0}e.rewritePosition!==void 0&&(b=e.rewritePosition,e=!0)}return e}function S(t,n,i){let s=!1;return o.getTests.call(d,t).every(function(l,u){let p=l.match;if(a.getBuffer.call(d,!0),s=p.jit&&y.validPositions[a.seekPrevious.call(d,t)]===void 0?!1:p.fn==null?(n===p.def||n===v.skipOptionalPartCharacter)&&p.def!==``&&{c:o.getPlaceholder.call(d,t,p,!0)||p.def,pos:t}:p.fn.test(n,y,t,i,v,f.call(d,e)),s!==!1){let i=s.c===void 0?n:s.c,a=t;return i=i===v.skipOptionalPartCharacter&&p.static===!0?o.getPlaceholder.call(d,t,p,!0)||p.def:i,s=x(s),s!==!0&&s.pos!==void 0&&s.pos!==t&&(a=s.pos),s!==!0&&s.pos===void 0&&s.c===void 0||_.call(d,e,m.extend({},l,{input:c.call(d,i,p,a)}),r,a)===!1&&(s=!1),!1}return!0}),s}let C=!0,w=m.extend(!0,[],y.validPositions);if(v.keepStatic===!1&&y.excludes[b]!==void 0&&i!==!0&&r!==!0)for(let t=b;t<(d.isRTL?e.begin:e.end);t++)y.excludes[t]!==void 0&&(y.excludes[t]=void 0,delete y.tests[t]);if(typeof v.preValidation==`function`&&r!==!0&&l!==!0&&(C=v.preValidation.call(d,a.getBuffer.call(d),b,t,f.call(d,e),v,y,e,n||i),C=x(C)),C===!0){if(C=S(b,t,n),(!n||r===!0)&&C===!1&&l!==!0){let r=y.validPositions[b];if(r&&r.match.static===!0&&(r.match.def===t||t===v.skipOptionalPartCharacter))C={caret:a.seekNext.call(d,b)};else if(v.insertMode||y.validPositions[a.seekNext.call(d,b)]===void 0||e.end>b){let r=!1;if(y.jitOffset[b]&&y.validPositions[a.seekNext.call(d,b)]===void 0&&(C=p.call(d,b+y.jitOffset[b],t,!0,!0),C!==!1&&(i!==!0&&(C.caret=b),r=!0)),e.end>b&&(y.validPositions[b]=void 0),!r&&!a.isMask.call(d,b,v.keepStatic&&b===0)){for(let e=b+1,r=a.seekNext.call(d,b,!1,b!==0);e<=r;e++)if(C=S(e,t,n),C!==!1){C=g.call(d,b,C.pos===void 0?e:C.pos)||C,b=e;break}}}}if(d.hasAlternator&&i!==!0&&!n&&(i=!0,C===!1?(v.keepStatic===!0||isFinite(parseInt(v.keepStatic))&&b>=v.keepStatic)&&(C=s.call(d,b,t,n,r,void 0,e)):C===!0&&(f.call(d,e)&&y.tests[b]&&y.tests[b].length>1&&v.keepStatic||v.numericInput!==!0&&y.tests[b]&&y.tests[b].length>1&&a.getLastValidPosition.call(d,void 0,!0)>b)&&(C=s.call(d,!0)||C)),C===!0&&(C={pos:b}),typeof v.postValidation==`function`&&r!==!0&&l!==!0){let r=v.postValidation.call(d,a.getBuffer.call(d,!0),e.begin===void 0?e:d.isRTL?e.end:e.begin,t,C,v,y,n,u,i);r!==void 0&&(C=r===!0?C:r)}}C&&C.pos===void 0&&(C.pos=b),C===!1||l===!0?(a.resetMaskSet.call(d,!0),y.validPositions=m.extend(!0,[],w)):g.call(d,void 0,b,!0);let T=x(C);return d.maxLength!==void 0&&a.getBuffer.call(d).length>d.maxLength&&!r&&(a.resetMaskSet.call(d,!0),y.validPositions=m.extend(!0,[],w),T=!1),T}function m(e,t,n){let r=this,i=this.maskset,a=!1,s=o.getTests.call(r,e);for(let r=0;r<s.length;r++)if(s[r].match&&(s[r].match.nativeDef===t.match[n.shiftPositions?`def`:`nativeDef`]&&(!n.shiftPositions||!t.match.static)||s[r].match.nativeDef===t.match.nativeDef||n.regex&&!s[r].match.static&&s[r].match.fn.test(t.input,i,e,!1,n))){a=!0;break}else if(s[r].match&&s[r].match.def===t.match.nativeDef){a=void 0;break}return a===!1&&i.jitOffset[e]!==void 0&&(a=m.call(r,e+i.jitOffset[e],t,n)),a}function h(e,t,n){let i=this,o=this.maskset,s=this.opts,c=this.dependencyLib,l,u,d=s.skipOptionalPartCharacter,f=i.isRTL?n.slice().reverse():n;if(s.skipOptionalPartCharacter=``,e===!0)a.resetMaskSet.call(i,!1),e=0,t=n.length,u=a.determineNewCaretPosition.call(i,{begin:0,end:0},!1).begin;else{for(l=e;l<t;l++)delete o.validPositions[l];u=e}let p=new c.Event(`keypress`);for(l=e;l<t;l++){p.key=f[l].toString(),i.ignorable=!1;let e=r.EventHandlers.keypressEvent.call(i,p,!0,!1,!1,u);e!==!1&&e!==void 0&&(u=e.forwardPosition)}s.skipOptionalPartCharacter=d}function g(e,t,n){let r=this,i=this.maskset,s=this.dependencyLib;if(e===void 0)for(e=t-1;e>0&&!i.validPositions[e];e--);for(let u=e;u<t;u++)if(i.validPositions[u]===void 0&&!a.isMask.call(r,u,!1)&&(u==0?o.getTest.call(r,u):i.validPositions[u-1])){let e=o.getTests.call(r,u).slice();e[e.length-1].match.def===``&&e.pop();var c=o.determineTestTemplate.call(r,u,e),l;if(c&&(c.match.jit!==!0||c.match.newBlockMarker===`master`&&(l=i.validPositions[u+1])&&l.match.optionalQuantifier===!0)&&(c=s.extend({},c,{input:o.getPlaceholder.call(r,u,c.match,!0)||c.match.def}),c.generatedInput=!0,_.call(r,u,c,!0),n!==!0)){let e=i.validPositions[t].input;return i.validPositions[t]=void 0,p.call(r,t,e,!0,!0)}}}function _(e,t,n,r){let i=this,s=this.maskset,c=this.opts,l=this.dependencyLib;function u(e,t,n){let r=t[e];if(r!==void 0&&r.match.static===!0&&r.match.optionality!==!0&&(t[0]===void 0||t[0].alternation===void 0)){let r=n.begin<=e-1?t[e-1]&&t[e-1].match.static===!0&&t[e-1]:t[e-1],i=n.end>e+1?t[e+1]&&t[e+1].match.static===!0&&t[e+1]:t[e+1];return r&&i}return!1}let d=0,h=e.begin===void 0?e:e.begin,g=e.end===void 0?e:e.end,_=!0;if(e.begin>e.end&&(h=e.end,g=e.begin),r=r===void 0?h:r,n===void 0&&(h!==g||c.insertMode&&s.validPositions[r]!==void 0||t===void 0||t.match.optionalQuantifier||t.match.optionality)){let n=l.extend(!0,[],s.validPositions),v=a.getLastValidPosition.call(i,void 0,!0),y;s.p=h;let b=f.call(i,e)?h:r;for(y=v;y>=b;y--)s.validPositions.splice(y,1),t===void 0&&delete s.tests[y+1];let x=r,S=x,C,w,T;for(t&&(s.validPositions[r]=l.extend(!0,{},t),S++,x++),n[g]==null&&s.jitOffset[g]&&(g+=s.jitOffset[g]+ +!!t),y=t?g:g-1;y<=v;y++){if((C=n[y])!==void 0&&(c.shiftPositions!==!0||C.generatedInput!==!0)&&(y>=g||y>=h&&u(y,n,{begin:h,end:g}))){for(;T=o.getTest.call(i,S),T.match.def!==``;){if((w=m.call(i,S,C,c))!==!1||C.match.def===`+`){C.match.def===`+`&&a.getBuffer.call(i,!0);let e=p.call(i,S,C.input,C.match.def!==`+`,!0);if(_=e!==!1,x=(e.pos||S)+1,!_&&w)break}else _=!1;if(_){t===void 0&&C.match.static&&y===e.begin&&d++;break}if(!_&&a.getBuffer.call(i),S>s.maskLength)break;S++}o.getTest.call(i,S).match.def==``&&(_=!1),S=x}if(!_)break}if(!_)return s.validPositions=l.extend(!0,[],n),a.resetMaskSet.call(i,!0),!1}else t&&o.getTest.call(i,r).match.cd===t.match.cd&&(s.validPositions[r]=l.extend(!0,{},t));return a.resetMaskSet.call(i,!0),d}}),(function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.determineTestTemplate=f,t.getDecisionTaker=c,t.getMaskTemplate=u,t.getPlaceholder=l,t.getTest=m,t.getTestTemplate=d,t.getTests=g,t.isSubsetOf=h;var r=o(n(7)),i=n(20),a=n(21);function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){let n=(e.alternation==null?e.locator:e.mloc[`${c(e)}:${e.alternation}`]||e.locator).join(``);if(n!==``)for(n=n.split(`:`)[0];n.length<t;)n+=`0`;return n}function c(e){let t=e.locator[e.alternation];return typeof t==`string`&&t.length>0&&(t=t.split(`,`).sort((e,t)=>e-t)[0]),t===void 0?``:t.toString()}function l(e,t,n){let r=this,o=this.opts,s=this.maskset;if(t||=m.call(r,e).match,t.placeholder!==void 0||n===!0)if(t.placeholder!==``&&t.static===!0&&t.generated!==!0){let s=i.getLastValidPosition.call(r,e),c=i.seekNext.call(r,s);return(n?e<=c:e<c)?a.casing.call(r,o.staticDefinitionSymbol&&t.static?t.nativeDef:t.def,t,e):typeof t.placeholder==`function`?t.placeholder(o):t.placeholder}else return typeof t.placeholder==`function`?t.placeholder(o):t.placeholder;else if(t.static===!0){if(e>-1&&s.validPositions[e]===void 0){let t=g.call(r,e),n=[],i;if(typeof o.placeholder==`string`&&t.length>1+ +(t[t.length-1].match.def===``)){for(let r=0;r<t.length;r++)if(t[r].match.def!==``&&t[r].match.optionality!==!0&&t[r].match.optionalQuantifier!==!0&&(t[r].match.static===!0||i===void 0||t[r].match.fn.test(i.match.def,s,e,!0,o)!==!1)&&(n.push(t[r]),t[r].match.static===!0&&(i=t[r]),n.length>1&&/[0-9a-zA-Z]/.test(n[0].match.def)))return o.placeholder.charAt(e%o.placeholder.length)}}return t.def}return typeof o.placeholder==`object`?t.def:o.placeholder.charAt(e%o.placeholder.length)}function u(e,t,n,r,i){let a=this,o=this.opts,s=this.maskset,c=o.greedy,u=[];i&&o.greedy&&(o.greedy=!1,a.maskset.tests={}),t||=0;let p,m=0,h,_,v;do{if(e===!0&&s.validPositions[m])_=i&&s.validPositions[m].match.optionality&&s.validPositions[m+1]===void 0&&(s.validPositions[m].generatedInput===!0||s.validPositions[m].input==o.skipOptionalPartCharacter&&m>0)?f.call(a,m,g.call(a,m,p,m-1)):s.validPositions[m],h=_.match,p=_.locator.slice(),u.push(n===!0?_.input:n===!1?h.nativeDef:l.call(a,m,h));else{_=d.call(a,m,p,m-1),h=_.match,p=_.locator.slice();let e=r===!0?!1:o.jitMasking===!1?h.jit:o.jitMasking;v=(v||s.validPositions[m-1])&&h.static&&h.def!==o.groupSeparator&&h.fn===null,v||e===!1||e===void 0||typeof e==`number`&&isFinite(e)&&e>m?u.push(n===!1?h.nativeDef:l.call(a,u.length,h)):v=!1}m++}while(h.static!==!0||h.def!==``||t>m);return u[u.length-1]===``&&u.pop(),(n!==!1||s.maskLength===void 0)&&(s.maskLength=m-1),o.greedy=c,u}function d(e,t,n){let r=this;return this.maskset.validPositions[e]||f.call(r,e,g.call(r,e,t&&t.slice(),n))}function f(e,t){let n=this,r=n.opts,i=p(e,t);e=e>0?e-1:0;let a=Math.max(...t.map(e=>e.locator===void 0?0:e.locator.length)),o=s(m.call(n,e),a),c=0,l,u,d;r.greedy&&t.length>1&&t[t.length-1].match.def===``&&(c=1);for(let e=0;e<t.length-c;e++){let n=t[e];l=s(n,a);let c=Number(l)-Number(o);(n.unMatchedAlternationStopped!==!0||t.filter(e=>e.unMatchedAlternationStopped!==!0).length<=1)&&(u===void 0||l!==``&&c<u||d&&!r.greedy&&d.match.optionality&&d.match.optionality-i>0&&d.match.newBlockMarker===`master`&&(!n.match.optionality||n.match.optionality-i<1||!n.match.newBlockMarker)||d&&!r.greedy&&d.match.optionalQuantifier&&!n.match.optionalQuantifier)&&(u=c,d=n)}return d}function p(e,t){let n=0,r=!1;return t.forEach(e=>{e.match.optionality&&(n!==0&&n!==e.match.optionality&&(r=!0),(n===0||n>e.match.optionality)&&(n=e.match.optionality))}),n&&(e==0||t.length==1?n=0:r||(n=0)),n}function m(e,t){let n=this,r=this.maskset;return r.validPositions[e]?r.validPositions[e]:(t||g.call(n,e))[0]}function h(e,t,n){function r(e){let t=[],n=-1,r;for(let i=0,a=e.length;i<a;i++)if(e.charAt(i)===`-`)for(r=e.charCodeAt(i+1);++n<r;)t.push(String.fromCharCode(n));else n=e.charCodeAt(i),t.push(e.charAt(i));return t.join(``)}return e.match.def===t.match.nativeDef?!0:(n.regex||e.match.fn instanceof RegExp&&t.match.fn instanceof RegExp)&&e.match.static!==!0&&t.match.static!==!0?t.match.fn.source===`.`||r(t.match.fn.source.replace(/[[\]/]/g,``)).indexOf(r(e.match.fn.source.replace(/[[\]/]/g,``)))!==-1:!1}function g(e,t,n){let i=this,a=this.dependencyLib,o=this.maskset,s=this.opts,c=this.el,l=o.maskToken,u=t?n:0,d=t?t.slice():[0],p=[],m=!1,g=!1,_,v=t?t.join(``):``,y=!1;function b(t,n,a,l){function d(a,l,f){function C(e,t){let n=t.matches.indexOf(e)===0;return n||t.matches.every(function(r,i){return r.isQuantifier===!0?n=C(e,t.matches[i-1]):Object.prototype.hasOwnProperty.call(r,`matches`)&&(n=C(e,r)),n?(t.matches[i+1]&&t.matches[i+1].isQuantifier&&(n=i===0),!1):!0}),n}function w(e,t,n){let r,i,a,s,c=`${t}:${n}`;if((o.tests[e]||o.validPositions[e])&&(o.validPositions[e]?[o.validPositions[e]]:o.tests[e]).every(function(e,o){return e.mloc[c]?(r=e,!1):(Object.values(e.mloc).filter(e=>e[n]==t).every(t=>{let n=t.join(``).split(`:`)[0];for(a||=n;n.length<a.length;)n+=`0`;let o=Number(n);return(r===void 0||o<i)&&(i=o,r=e,s=Object.entries(e.mloc).find(e=>e[1].toString()===t.toString())[0]),!0}),!0)}),r){n===void 0&&(c=`${t}:${r.alternation}`);let e=`${r.locator[r.alternation]}:${r.alternation}`,i=r.mloc[s||c]||r.mloc[e]||r.locator;i[i.length-1].toString().indexOf(`:`)!==-1&&i.pop();let a=parseInt(r.alternation)+1;return i.slice(a)}else return n===void 0?void 0:w(e,t)}function T(t,n){return t.match.static===!0&&n.match.static!==!0&&n.match.fn.test(t.match.def,o,e,!1,s,!1)}function E(e,t){function n(n){e.mloc=e.mloc||{};let r=e.locator[n];if(r===void 0)e.alternation=void 0;else{if(t===void 0)typeof r==`string`&&(r=r.split(`,`)[0]),r=`${r}:${n}`,e.mloc[r]===void 0&&(e.mloc[r]=e.locator.slice(),e.mloc[r].push(`:${n}`));else{let n=0;for(let r in t.mloc)if(e.mloc[r]===void 0)e.mloc[r]=t.mloc[r];else do if(e.mloc[r+n]===void 0){e.mloc[r+n]=t.mloc[r];break}while(e.mloc[r+n++]!==void 0);e.locator=S(u,[e,t])}return e.alternation>n&&(e.alternation=n),!0}return!1}let r=e.alternation,i=t===void 0||r<=t.alternation&&e.locator[r].toString().indexOf(t.locator[r])===-1;if(!i&&r>t.alternation){for(let n=0;n<r;n++)if(e.locator[n]!==t.locator[n]){r=n,i=!0;break}}return i?n(r):!1}function ee(){if(a=d(t.matches[t.matches.indexOf(a)+1],l,f),a)return!0}function D(){let t=a,r=p.length;if(a=b(a,n,l,f),p.length>0)if(p.forEach(function(e,t){t>=r&&(e.match.optionality=e.match.optionality?e.match.optionality+1:1)}),_=p[p.length-1].match,f===void 0&&C(_,t))m=!0,u=e;else return a}function te(){function r(e){let t=0;for(let n=0;n<e.length;n++){let r=e[n];r.isQuantifier&&!isNaN(r.quantifier.max)?t+=r.quantifier.max:t++}return t}function _(e){let t=e.matches[0].matches?r(e.matches[0].matches):1,n;for(let i=0;i<e.matches.length&&(n=e.matches[i].matches?r(e.matches[i].matches):1,t===n);i++);return t!==n}i.hasAlternator=!0;let v=a,b=[],x=p.slice(),S=l.length,C=n.length>0?n.shift():-1,ee;if(C===-1||typeof C==`string`){let t=u,r=n.slice(),i=[],D;if(typeof C==`string`)i=C.split(`,`);else for(D=0;D<v.matches.length;D++)i.push(D.toString());if(o.excludes[e]!==void 0){let t=i.slice();for(let t=0,n=o.excludes[e].length;t<n;t++){let n=o.excludes[e][t].toString().split(`:`);l.length==n[1]&&i.splice(i.indexOf(n[0]),1)}i.length===0&&(delete o.excludes[e],i=t)}(s.keepStatic===!0||isFinite(parseInt(s.keepStatic))&&t>=s.keepStatic)&&(i=i.slice(0,1));for(let e=0;e<i.length;e++){D=parseInt(i[e]),p=[],n=typeof C==`string`&&w(u,D,S)||r.slice();let o=v.matches[D];if(o&&d(o,[D].concat(l),f))a=!0;else if(y=_(v),o&&o.matches&&o.matches.length>v.matches[0].matches.length)break;ee=p.slice(),u=t,p=[];for(let e=0;e<ee.length;e++){let n=ee[e],r=!1;n.alternation=n.alternation||S,E(n);for(let e=0;e<b.length;e++){let i=b[e];if(typeof C!=`string`||n.alternation!==void 0&&C.indexOf(n.locator[n.alternation].toString())!==-1){if(n.match.nativeDef===i.match.nativeDef){r=!0,E(i,n);break}else if(h(n,i,s)){E(n,i)&&(r=!0,b.splice(b.indexOf(i),0,n));break}else if(h(i,n,s)){E(i,n);break}else if(T(n,i)){E(n,i)&&(r=!0,b.splice(b.indexOf(i),0,n));break}else if(T(i,n)){E(i,n),i.match.optionality&&c.inputmask.userOptions.keepStatic===void 0&&(s.keepStatic=t);break}}}r||b.push(n)}}p=x.concat(b),u=e,m||=p.length>0&&y,!y&&m&&(g=!0),a=b.length>0&&!y,y&&m&&!a&&p.forEach(function(e,t){e.unMatchedAlternationStopped=!0}),n=r.slice()}else a=d(v.matches[C]||t.matches[C],[C].concat(l),f);if(a)return!0}function ne(){let r=a,i=!1;for(let c=n.length>0?n.shift():0;c<(isNaN(r.quantifier.max)?c+1:r.quantifier.max)&&u<=e;c++){let n=t.matches[t.matches.indexOf(r)-1];if(a=d(n,[c].concat(l),n),a){if(p.forEach(function(t,l){_=x(n,t.match)?t.match:p[p.length-1].match,_.optionalQuantifier=c>=r.quantifier.min,_.jit=(c+1)*(n.matches.indexOf(_)+1)>r.quantifier.jit,(_.optionalQuantifier||_.optionality)&&C(_,n)&&(m=!0,u=e,s.greedy&&o.validPositions[e-1]==null&&c>r.quantifier.min&&[`*`,`+`].indexOf(r.quantifier.max)!=-1&&(p.pop(),v=void 0),i=!0,a=!1),!i&&_.jit&&(o.jitOffset[e]=n.matches.length-n.matches.indexOf(_))}),i)break;return!0}}}if(u>e+s._maxTestPos)throw Error(`Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. ${o.mask}`);if(u===e&&a.matches===void 0)if(p.push({match:a,locator:l.reverse(),cd:v,mloc:{}}),a.optionality&&f===void 0&&(s.definitions&&s.definitions[a.nativeDef]&&s.definitions[a.nativeDef].optional||r.default.prototype.definitions[a.nativeDef]&&r.default.prototype.definitions[a.nativeDef].optional))m=!0,u=e;else return!0;else if(a.matches!==void 0){if(a.isGroup&&f!==a)return ee();if(a.isOptional)return D();if(a.isAlternator)return te();if(a.isQuantifier&&f!==t.matches[t.matches.indexOf(a)-1])return ne();if(a=b(a,n,l,f),a)return!0}else u++}for(let r=n.length>0?n.shift():0;r<t.matches.length;r++)if(t.matches[r].isQuantifier!==!0){let n=d(t.matches[r],[r].concat(a),l);if(n&&u===e)return n;if(u>e)break}}function x(e,t){let n=e.matches.indexOf(t)!=-1;return n||e.matches.forEach((e,r)=>{e.matches!==void 0&&!n&&(n=x(e,t))}),n}function S(e,t){let n=[];return Array.isArray(t)||(t=[t]),t.length>0&&(t[0].alternation===void 0||s.keepStatic===!0||isFinite(parseInt(s.keepStatic))&&e>=s.keepStatic?(n=f.call(i,e,t.slice()).locator.slice(),n.length===0&&(n=t[0].locator.slice())):t.forEach(e=>{Object.values(e.mloc).forEach(e=>{e.forEach((e,t)=>{let r=n[t];e.toString().includes(`:`)||r&&r.toString().includes(`:`)||(r===void 0?n[t]=e:r.toString().includes(e)||(n[t]=n[t]+`,`+e))})})})),n}if(e>-1){if(t===void 0){let t=e-1,n;for(;(n=o.validPositions[t]||o.tests[t])===void 0&&t>-1;)t--;n!==void 0&&t>-1&&(d=S(t,n),v=d.join(``),u=t)}if(o.tests[e]&&o.tests[e][0].cd===v)return o.tests[e];for(let t=d.shift();t<l.length&&!(b(l[t],d,[t])&&u===e||u>e);t++);}(p.length===0||m)&&p.push({match:{fn:null,static:!0,optionality:!1,casing:null,def:``,placeholder:``},locator:y&&p.filter(e=>e.unMatchedAlternationStopped!==!0).length===0||g&&p.length>0&&p.filter(e=>!e.match.static).every(e=>e.match.optionalQuantifier)?[0]:[],mloc:{},cd:v});let C;return t!==void 0&&o.tests[e]?C=a.extend(!0,[],p):(o.tests[e]=a.extend(!0,[],p),C=o.tests[e]),p.forEach(e=>{e.match.optionality=e.match.defOptionality||!1}),C}}),(function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.mask=l;var r=n(17),i=n(18),a=n(15),o=n(16),s=n(20),c=n(21);function l(){let e=this,t=this.opts,n=this.el,l=this.dependencyLib;function u(t,n){function r(t){let r,i;function c(t){if(l.valHooks&&(l.valHooks[t]===void 0||l.valHooks[t].inputmaskpatch!==!0)){let r=l.valHooks[t]&&l.valHooks[t].get?l.valHooks[t].get:function(e){return e.value},i=l.valHooks[t]&&l.valHooks[t].set?l.valHooks[t].set:function(e,t){return e.value=t,e};l.valHooks[t]={get:function(t){if(t.inputmask){if(t.inputmask.opts.autoUnmask)return t.inputmask.unmaskedvalue();{let i=r(t);return s.getLastValidPosition.call(e,void 0,void 0,t.inputmask.maskset.validPositions)!==-1||n.nullable!==!0?i:``}}else return r(t)},set:function(e,t){let n=i(e,t);return e.inputmask&&(0,o.applyInputValue)(e,t),n},inputmaskpatch:!0}}}function u(){return this.inputmask?this.inputmask.opts.autoUnmask?this.inputmask.unmaskedvalue():s.getLastValidPosition.call(e)!==-1||n.nullable!==!0?this.getRootNode().activeElement===this&&n.clearMaskOnLostFocus?(e.isRTL?o.clearOptionalTail.call(e,s.getBuffer.call(e).slice()).reverse():o.clearOptionalTail.call(e,s.getBuffer.call(e).slice())).join(``):r.call(this):``:r.call(this)}function d(e){i.call(this,e),this.inputmask&&(0,o.applyInputValue)(this,e)}function f(e){a.EventRuler.on(e,`mouseenter`,function(){let e=this,t=e.inputmask._valueGet(!0);t!=(e.inputmask.isRTL?s.getBuffer.call(e.inputmask).slice().reverse():s.getBuffer.call(e.inputmask)).join(``)&&(0,o.applyInputValue)(e,t)})}if(!t.inputmask.__valueGet){if(n.noValuePatching!==!0){if(Object.getOwnPropertyDescriptor){let e=Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t),`value`):void 0;e&&e.get&&e.set?(r=e.get,i=e.set,Object.defineProperty(t,"value",{get:u,set:d,configurable:!0})):t.tagName.toLowerCase()!==`input`&&(r=function(){return this.textContent},i=function(e){this.textContent=e},Object.defineProperty(t,"value",{get:u,set:d,configurable:!0}))}else document.__lookupGetter__&&t.__lookupGetter__(`value`)&&(r=t.__lookupGetter__(`value`),i=t.__lookupSetter__(`value`),t.__defineGetter__(`value`,u),t.__defineSetter__(`value`,d));t.inputmask.__valueGet=r,t.inputmask.__valueSet=i}t.inputmask._valueGet=function(t){return e.isRTL&&t!==!0?r.call(this.el).split(``).reverse().join(``):r.call(this.el)},t.inputmask._valueSet=function(t,n){i.call(this.el,t==null?``:n!==!0&&e.isRTL?t.split(``).reverse().join(``):t)},r===void 0&&(r=function(){return this.value},i=function(e){this.value=e},c(t.type),f(t))}}let i=t.getAttribute(`type`),c=t.tagName.toLowerCase()===`input`&&n.supportsInputType.includes(i)||t.isContentEditable||t.tagName.toLowerCase()===`textarea`;if(!c)if(t.tagName.toLowerCase()===`input`){let e=document.createElement(`input`);e.setAttribute(`type`,i),c=e.type===`text`,e=null}else c=`partial`;return c===!1?t.inputmask=void 0:r(t),c}a.EventRuler.off(n);let d=u(n,t);if(d!==!1){e.originalPlaceholder=n.placeholder,e.maxLength=n===void 0?void 0:n.maxLength,e.maxLength===-1&&(e.maxLength=void 0),`inputMode`in n&&n.getAttribute(`inputmode`)===null&&(n.inputMode=t.inputmode,n.setAttribute(`inputmode`,t.inputmode)),d===!0&&(t.showMaskOnFocus=t.showMaskOnFocus&&[`cc-number`,`cc-exp`].indexOf(n.autocomplete)===-1,r.iphone&&(t.insertModeVisual=!1,n.setAttribute(`autocorrect`,`off`)),a.EventRuler.on(n,`submit`,i.EventHandlers.submitEvent),a.EventRuler.on(n,`reset`,i.EventHandlers.resetEvent),a.EventRuler.on(n,`blur`,i.EventHandlers.blurEvent),a.EventRuler.on(n,`focus`,i.EventHandlers.focusEvent),a.EventRuler.on(n,`invalid`,i.EventHandlers.invalidEvent),a.EventRuler.on(n,`click`,i.EventHandlers.clickEvent),a.EventRuler.on(n,`mouseleave`,i.EventHandlers.mouseleaveEvent),a.EventRuler.on(n,`mouseenter`,i.EventHandlers.mouseenterEvent),a.EventRuler.on(n,`paste`,i.EventHandlers.pasteEvent),a.EventRuler.on(n,`cut`,i.EventHandlers.cutEvent),a.EventRuler.on(n,`complete`,t.oncomplete),a.EventRuler.on(n,`incomplete`,t.onincomplete),a.EventRuler.on(n,`cleared`,t.oncleared),t.inputEventOnly!==!0&&a.EventRuler.on(n,`keydown`,i.EventHandlers.keyEvent),(r.mobile||t.inputEventOnly)&&n.removeAttribute(`maxLength`),a.EventRuler.on(n,`input`,i.EventHandlers.inputFallBackEvent)),a.EventRuler.on(n,`setvalue`,i.EventHandlers.setValueEvent),e.applyMaskHook===void 0||e.applyMaskHook(),s.getBufferTemplate.call(e).join(``),e.undoValue=e._valueGet(!0);let l=n.getRootNode().activeElement;if(n.inputmask._valueGet(!0)!==``||t.clearMaskOnLostFocus===!1||l===n){(0,o.applyInputValue)(n,n.inputmask._valueGet(!0));let r=s.getBuffer.call(e).slice();c.isComplete.call(e,r)===!1&&t.clearIncomplete&&s.resetMaskSet.call(e,!1),t.clearMaskOnLostFocus&&l!==n&&(s.getLastValidPosition.call(e)===-1?r=[]:o.clearOptionalTail.call(e,r)),(t.clearMaskOnLostFocus===!1||t.showMaskOnFocus&&l===n||n.inputmask._valueGet(!0)!==``)&&(0,o.writeBuffer)(n,r),l===n?s.caret.call(e,n,s.seekNext.call(e,s.getLastValidPosition.call(e))):s.caret.call(e,n,0)}}}}),(function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.analyseMask=l,t.generateMaskSet=c;var r=s(n(10)),i=n(25),a=s(n(7)),o=s(n(26));function s(e){return e&&e.__esModule?e:{default:e}}function c(e,t){let n;function o(e,{repeat:t,groupmarker:n,quantifiermarker:r,keepStatic:a}){if(t>0||t===`*`||t===`+`){let i=t===`*`?0:t===`+`?1:t;if(i!==t)e=n[0]+e+n[1]+r[0]+i+`,`+t+r[1];else{let t=e;for(let n=1;n<i;n++)e+=t}}if(a===!0){let t=e.match(RegExp(`(.)\\[([^\\]]*)\\]`,`g`));t&&t.forEach((t,n)=>{let[r,a]=t.split(`[`);a=a.replace(`]`,``),e=e.replace(RegExp(`${(0,i.escapeRegex)(r)}\\[${(0,i.escapeRegex)(a)}\\]`),r.charAt(0)===a.charAt(0)?`(${r}|${r}${a})`:`${r}[${a}]`)})}return e}function s(e,n,i){let s=!1;(e===null||e===``)&&(s=i.regex!==null,s?(e=i.regex,e=e.replace(/^(\^)(.*)(\$)$/,`$2`)):(s=!0,e=`.*`)),e.length===1&&i.greedy===!1&&i.repeat!==0&&(i.placeholder=``),e=o(e,i);let c,l;return l=s?`regex_`+i.regex:i.numericInput?e.split(``).reverse().join(``):e,i.keepStatic!==null&&(l=`ks_`+i.keepStatic+l),typeof i.placeholder==`object`&&(l=`ph_`+JSON.stringify(i.placeholder)+l),a.default.prototype.masksCache[l]===void 0||t===!0?(c={mask:e,maskToken:a.default.prototype.analyseMask(e,s,i),validPositions:[],_buffer:void 0,buffer:void 0,tests:{},excludes:{},metadata:n,maskLength:void 0,jitOffset:{}},t!==!0&&(a.default.prototype.masksCache[l]=c,c=r.default.extend(!0,{},a.default.prototype.masksCache[l]))):c=r.default.extend(!0,{},a.default.prototype.masksCache[l]),c}if(typeof e.mask==`function`&&(e.mask=e.mask(e)),Array.isArray(e.mask))if(e.mask.length>1){e.keepStatic===null&&(e.keepStatic=!0);let t=e.groupmarker[0];return(e.isRTL?e.mask.reverse():e.mask).forEach(function(n){t.length>1&&(t+=e.alternatormarker),n.mask!==void 0&&typeof n.mask!=`function`?t+=n.mask:t+=n}),t+=e.groupmarker[1],s(t,e.mask,e)}else e.mask=e.mask.pop();return n=e.mask&&e.mask.mask!==void 0&&typeof e.mask.mask!=`function`?s(e.mask.mask,e.mask,e):s(e.mask,e.mask,e),e.keepStatic===null&&(e.keepStatic=!1),n}function l(e,t,n){let r=/(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g,i=/\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,s=new o.default,c=[],l=[],u=!1,d,f,p,m,h,g,_=!1;function v(e,r,i){i=i===void 0?e.matches.length:i;let o=e.matches[i-1],c=n.casing?`i`:``;if(t)r.indexOf(`[`)===0||u&&/\\d|\\s|\\w|\\p/i.test(r)||r===`.`?(/\\p\{.*}/i.test(r)&&(c+=`u`),e.matches.splice(i++,0,{fn:new RegExp(r,c),static:!1,optionality:!1,newBlockMarker:o===void 0?`master`:o.def!==r,casing:null,def:r,placeholder:typeof n.placeholder==`object`?n.placeholder[s.matches.length]:void 0,nativeDef:r})):(u&&(r=r[r.length-1]),r.split(``).forEach(function(t,r){o=e.matches[i-1],e.matches.splice(i++,0,{fn:/[a-z]/i.test(n.staticDefinitionSymbol||t)?RegExp(`[`+(n.staticDefinitionSymbol||t)+`]`,c):null,static:!0,optionality:!1,newBlockMarker:o===void 0?`master`:o.def!==t&&o.static!==!0,casing:null,def:n.staticDefinitionSymbol||t,placeholder:n.staticDefinitionSymbol===void 0?typeof n.placeholder==`object`?n.placeholder[s.matches.length]:void 0:t,nativeDef:(u?`'`:``)+t})})),u=!1;else{let t=n.definitions&&n.definitions[r]||n.usePrototypeDefinitions&&a.default.prototype.definitions[r];t&&!u?(typeof t.validator==`string`&&/\\p\{.*}/i.test(t.validator)&&(c+=`u`),e.matches.splice(i++,0,{fn:t.validator?typeof t.validator==`string`?new RegExp(t.validator,c):new function(){this.test=t.validator}:/./,static:t.static||!1,optionality:t.optional||!1,defOptionality:t.optional||!1,newBlockMarker:o===void 0||t.optional?`master`:o.def!==(t.definitionSymbol||r),casing:t.casing,def:t.definitionSymbol||r,placeholder:t.placeholder,nativeDef:r,generated:t.generated})):(e.matches.splice(i++,0,{fn:/[a-z]/i.test(n.staticDefinitionSymbol||r)?RegExp(`[`+(n.staticDefinitionSymbol||r)+`]`,c):null,static:!0,optionality:!1,newBlockMarker:o===void 0?`master`:o.def!==r&&o.static!==!0,casing:null,def:n.staticDefinitionSymbol||r,placeholder:n.staticDefinitionSymbol===void 0?void 0:r,nativeDef:(u?`'`:``)+r}),u=!1)}}function y(e){e&&e.matches&&e.matches.forEach(function(r,i){let a=e.matches[i+1];(a===void 0||a.matches===void 0||a.isQuantifier===!1)&&r&&r.isGroup&&(r.isGroup=!1,t||(v(r,n.groupmarker[0],0),r.openGroup!==!0&&v(r,n.groupmarker[1]))),y(r)})}function b(){if(c.length>0){if(m=c[c.length-1],v(m,f),m.isAlternator){h=c.pop();for(let e=0;e<h.matches.length;e++)h.matches[e].isGroup&&(h.matches[e].isGroup=!1);c.length>0?(m=c[c.length-1],m.matches.push(h)):s.matches.push(h)}}else v(s,f)}function x(e){function t(e){return e===n.optionalmarker[0]?e=n.optionalmarker[1]:e===n.optionalmarker[1]?e=n.optionalmarker[0]:e===n.groupmarker[0]?e=n.groupmarker[1]:e===n.groupmarker[1]&&(e=n.groupmarker[0]),e}e.matches=e.matches.reverse();for(let n in e.matches)if(Object.prototype.hasOwnProperty.call(e.matches,n)){let r=parseInt(n);if(e.matches[n].isQuantifier&&e.matches[r+1]&&e.matches[r+1].isGroup){let t=e.matches[n];e.matches.splice(n,1),e.matches.splice(r+1,0,t)}e.matches[n].matches===void 0?e.matches[n]=t(e.matches[n]):e.matches[n]=x(e.matches[n])}return e}function S(e){let t=new o.default(!0);return t.openGroup=!1,t.matches=e,t}function C(){if(p=c.pop(),p.openGroup=!1,p!==void 0)if(c.length>0){if(m=c[c.length-1],m.matches.push(p),m.isAlternator){h=c.pop();for(let e=0;e<h.matches.length;e++)h.matches[e].isGroup=!1,h.matches[e].alternatorGroup=!1;c.length>0?(m=c[c.length-1],m.matches.push(h)):s.matches.push(h)}}else s.matches.push(p);else b()}function w(e){let t=e.pop();return t.isQuantifier&&(t=S([e.pop(),t])),t}for(t&&(n.optionalmarker[0]=void 0,n.optionalmarker[1]=void 0);d=t?i.exec(e):r.exec(e);){if(f=d[0],t){switch(f.charAt(0)){case`?`:f=`{0,1}`;break;case`+`:case`*`:f=`{`+f+`}`;break;case`|`:if(c.length===0){let e=S(s.matches);e.openGroup=!0,c.push(e),s.matches=[],_=!0}break}switch(f){case`\\d`:f=`[0-9]`;break;case`\\p`:f+=i.exec(e)[0],f+=i.exec(e)[0];break;case`(?:`:case`(?=`:case`(?!`:case`(?<=`:case`(?<!`:break}}if(u){b();continue}switch(f.charAt(0)){case`$`:case`^`:t||b();break;case n.escapeChar:u=!0,t&&b();break;case n.optionalmarker[1]:case n.groupmarker[1]:C();break;case n.optionalmarker[0]:c.push(new o.default(!1,!0));break;case n.groupmarker[0]:c.push(new o.default(!0));break;case n.quantifiermarker[0]:{let e=new o.default(!1,!1,!0);f=f.replace(/[{}?]/g,``);let t=f.split(`|`),n=t[0].split(`,`),r=isNaN(n[0])?n[0]:parseInt(n[0]),i=n.length===1?r:isNaN(n[1])?n[1]:parseInt(n[1]),a=isNaN(t[1])?t[1]:parseInt(t[1]);(r===`*`||r===`+`)&&(r=i===`*`?0:1),e.quantifier={min:r,max:i,jit:a};let l=c.length>0?c[c.length-1].matches:s.matches;d=l.pop(),d.isGroup||(d=S([d])),l.push(d),l.push(e)}break;case n.alternatormarker:if(c.length>0){m=c[c.length-1];let e=m.matches[m.matches.length-1];g=m.openGroup&&(e.matches===void 0||e.isGroup===!1&&e.isAlternator===!1)?c.pop():w(m.matches)}else g=w(s.matches);if(g.isAlternator)c.push(g);else if(g.alternatorGroup?(h=c.pop(),g.alternatorGroup=!1):h=new o.default(!1,!1,!1,!0),h.matches.push(g),c.push(h),g.openGroup){g.openGroup=!1;let e=new o.default(!0);e.alternatorGroup=!0,c.push(e)}break;default:b()}}for(_&&C();c.length>0;)p=c.pop(),s.matches.push(p);return s.matches.length>0&&(y(s),l.push(s)),(n.numericInput||n.isRTL)&&x(l[0]),l}}),(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.escapeRegex=r;let n=RegExp(`(\\`+[`/`,`.`,`*`,`+`,`?`,`|`,`(`,`)`,`[`,`]`,`{`,`}`,`\\`,`$`,`^`].join(`|\\`)+`)`,`gim`);function r(e){return e.replace(n,`\\$1`)}}),(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;function n(e,t,n,r){this.matches=[],this.openGroup=e||!1,this.alternatorGroup=!1,this.isGroup=e||!1,this.isOptional=t||!1,this.isQuantifier=n||!1,this.isAlternator=r||!1,this.quantifier={min:1,max:1}}}),(function(e,t,n){var r=n(25),i=c(n(7)),a=n(19),o=n(20),s=n(22);n(28);function c(e){return e&&e.__esModule?e:{default:e}}let l=i.default.dependencyLib;class u{constructor(e,t,n,r){this.mask=e,this.format=t,this.opts=n,this.inputmask=r,this._date=new Date(1,0,1),this.initDateObject(e,this.opts,this.inputmask)}get date(){return this._date===void 0&&(this._date=new Date(1,0,1),this.initDateObject(void 0,this.opts,this.inputmask)),this._date}initDateObject(e,t,n){let r,i=-1;for(x(t).lastIndex=0;r=x(t).exec(this.format);)if(r.index>=i){let a=/\d+$/.exec(r[0]),o=a?r[0][0]+`x`:r[0],c;if(e!==void 0){if(a){let i=x(t).lastIndex,a=te.call(n,r.index,t,n&&n.maskset);x(t).lastIndex=i,c=e.slice(0,e.indexOf(a.nextMatch[0]))}else{let a=r[0][0],l=r.index;for(;n&&(t.placeholder[`${r.index}'${s.getTest.call(n,l).match.placeholder}`]||s.getTest.call(n,l).match.placeholder)===a;)l++;i=l;let u=l-r.index;c=e.slice(0,u||b(o)&&b(o)[4]||o.length)}e=e.slice(c.length)}Object.prototype.hasOwnProperty.call(m,o)&&this.setValue(this,c,o,b(o)[2],b(o)[1])}}setValue(e,t,n,r,i){if(t!==void 0)switch(r){case`ampm`:e[r]=t,e[`raw`+r]=t.replace(/\s/g,`_`);break;case`month`:if(n===`MMM`||n===`MMMM`){n===`MMM`?e[r]=E(p.monthNames.slice(0,12).findIndex(e=>t.toLowerCase()===e.toLowerCase())+1,2):e[r]=E(p.monthNames.slice(12,24).findIndex(e=>t.toLowerCase()===e.toLowerCase())+1,2),e[r]=e[r]===`00`?``:e[r].toString(),e[`raw`+r]=e[r];break}default:e[r]=t.replace(/[^0-9]/g,`0`),e[`raw`+r]=t.replace(/\s/g,`_`)}if(i!==void 0){let t=e[r];(r===`day`&&parseInt(t)===29||r===`month`&&parseInt(t)===2)&&parseInt(e.day)===29&&parseInt(e.month)===2&&(e.year===``||e.year===void 0)&&e._date.setFullYear(2012,1,29),r===`day`&&(d=!0,parseInt(t)===0&&(t=1)),r===`month`&&(d=!0),r===`year`&&(d=!0,t.length<b(n)[4]&&(t=E(t,b(n)[4],!0))),(t!==``&&!isNaN(t)||r===`ampm`)&&i.call(e._date,t)}}reset(){this._date=new Date(1,0,1)}reInit(){this._date=void 0,this.date}}let d=!1,f=new Date().getFullYear(),p=i.default.prototype.i18n,m={d:[`[1-9]|[12][0-9]|3[01]`,Date.prototype.setDate,`day`,Date.prototype.getDate],dd:[`0[1-9]|[12][0-9]|3[01]`,Date.prototype.setDate,`day`,function(){return E(Date.prototype.getDate.call(this),2)}],ddd:[``],dddd:[``],M:[`[1-9]|1[012]`,function(e){let t=e?parseInt(e):0;return t>0&&t--,Date.prototype.setMonth.call(this,t)},`month`,function(){return Date.prototype.getMonth.call(this)+1}],MM:[`0[1-9]|1[012]`,function(e){let t=e?parseInt(e):0;return t>0&&t--,Date.prototype.setMonth.call(this,t)},`month`,function(){return E(Date.prototype.getMonth.call(this)+1,2)}],MMM:[p.monthNames.slice(0,12).join(`|`),function(e){let t=p.monthNames.slice(0,12).findIndex(t=>e.toLowerCase()===t.toLowerCase());return t!==-1&&Date.prototype.setMonth.call(this,t)},`month`,function(){return p.monthNames.slice(0,12)[Date.prototype.getMonth.call(this)]}],MMMM:[p.monthNames.slice(12,24).join(`|`),function(e){let t=p.monthNames.slice(12,24).findIndex(t=>e.toLowerCase()===t.toLowerCase());return t!==-1&&Date.prototype.setMonth.call(this,t)},`month`,function(){return p.monthNames.slice(12,24)[Date.prototype.getMonth.call(this)]}],yy:[`[0-9]{2}`,function(e){let t=new Date().getFullYear().toString().slice(0,2);Date.prototype.setFullYear.call(this,`${t}${e}`)},`year`,function(){return E(Date.prototype.getFullYear.call(this),2)},2],yyyy:[`[0-9]{4}`,Date.prototype.setFullYear,`year`,function(){return E(Date.prototype.getFullYear.call(this),4)},4],h:[`[1-9]|1[0-2]`,Date.prototype.setHours,`hours`,Date.prototype.getHours],hh:[`0[1-9]|1[0-2]`,Date.prototype.setHours,`hours`,function(){return E(Date.prototype.getHours.call(this),2)}],hx:[function(e){return`[0-9]{${e}}`},Date.prototype.setHours,`hours`,function(e){return Date.prototype.getHours}],H:[`1?[0-9]|2[0-3]`,Date.prototype.setHours,`hours`,Date.prototype.getHours],HH:[`0[0-9]|1[0-9]|2[0-3]`,Date.prototype.setHours,`hours`,function(){return E(Date.prototype.getHours.call(this),2)}],Hx:[function(e){return`[0-9]{${e}}`},Date.prototype.setHours,`hours`,function(e){return function(){return E(Date.prototype.getHours.call(this),e)}}],m:[`[1-5]?[0-9]`,Date.prototype.setMinutes,`minutes`,Date.prototype.getMinutes],mm:[`0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]`,Date.prototype.setMinutes,`minutes`,function(){return E(Date.prototype.getMinutes.call(this),2)}],s:[`[1-5]?[0-9]`,Date.prototype.setSeconds,`seconds`,Date.prototype.getSeconds],ss:[`0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]`,Date.prototype.setSeconds,`seconds`,function(){return E(Date.prototype.getSeconds.call(this),2)}],l:[`[0-9]{3}`,Date.prototype.setMilliseconds,`milliseconds`,function(){return E(Date.prototype.getMilliseconds.call(this),3)},3],L:[`[0-9]{2}`,Date.prototype.setMilliseconds,`milliseconds`,function(){return E(Date.prototype.getMilliseconds.call(this),2)},2],t:[`[ap]`,_,`ampm`,v,1],tt:[`[ap]m`,_,`ampm`,v,2],T:[`[AP]`,_,`ampm`,v,1],TT:[`[AP]M`,_,`ampm`,v,2],Z:[`.*`,void 0,`Z`,y],o:[``],S:[``]},h={D:`d`,DD:`dd`,DDD:`ddd`,DDDD:`dddd`,mmm:`MMM`,mmmm:`MMMM`,YY:`yy`,YYYY:`yyyy`,sss:`L`},g={isoDate:`yyyy-MM-dd`,isoTime:`HH:mm:ss`,isoDateTime:`yyyy-MM-dd\\THH:mm:ss`,isoUtcDateTime:`UTC:yyyy-MM-dd\\THH:mm:ss\\Z`};function _(e){let t=this.getHours();e.toLowerCase().includes(`p`)?this.setHours(t+12):e.toLowerCase().includes(`a`)&&t>=12&&this.setHours(t-12)}function v(){let e=this.getHours();return e||=12,e>=12?`PM`:`AM`}function y(){let{1:e}=this.toString().match(/\((.+)\)/);return e.includes(` `)&&(e=e.replace(`-`,` `).toUpperCase(),e=e.split(` `).map(([e])=>e).join(``)),e}function b(e){let t=h[e]||e,n=/\d+$/.exec(t);if(n&&n[0]!==void 0){let e=m[t[0]+`x`].slice(``);return e[0]=e[0](n[0]),e[3]=e[3](n[0]),e}else if(m[t])return m[t]}function x(e){if(!e.tokenizer){let t=[],n=[],r=Object.keys(m).concat(Object.keys(h));for(let e of r)if(/\.*x$/.test(e)){let t=e[0]+`\\d+`;n.indexOf(t)===-1&&n.push(t)}else t.indexOf(e[0])===-1&&t.push(e[0]);e.tokenizer=`(`+(n.length>0?n.join(`|`)+`|`:``)+t.join(`+|`)+`+)+?|.`,e.tokenizer=new RegExp(e.tokenizer,`g`)}return e.tokenizer}function S(e,t,n){if(e.year!==e.rawyear){let r=f.toString(),i=e.rawyear.replace(/[^0-9]/g,``),a=r.slice(0,i.length),o=r.slice(i.length);if(i.length===2&&i===a){let i=new Date(f,e.month-1,e.day);e.day==i.getDate()&&(!n.max||n.max.date.getTime()>=i.getTime())&&(e.date.setFullYear(f),e.year=r,t.insert=[{pos:t.pos+1,c:o[0]},{pos:t.pos+2,c:o[1]}])}}return t}function C(e,t,n){let r=this;if(!d)return!0;if(e.rawday===void 0||!isFinite(e.rawday)&&new Date(e.date.getFullYear(),isFinite(e.rawmonth)?e.month:e.date.getMonth()+1,0).getDate()>=e.day||e.day==`29`&&(!isFinite(e.rawyear)||e.rawyear===void 0||e.rawyear===``)||new Date(e.date.getFullYear(),isFinite(e.rawmonth)?e.month:e.date.getMonth()+1,0).getDate()>=e.day)return t;if(e.day==`29`){let e=te.call(r,t.pos,n,r.maskset);if(e.targetMatch&&[`yyyy`,`YYYY`].includes(e.targetMatch[0])&&t.pos-e.targetMatchIndex===2)return t.remove=t.pos+1,t}else if(e.date.getMonth()==2&&e.day==`30`&&t.c!==void 0)return e.day=`03`,e.date.setDate(3),e.date.setMonth(1),t.insert=[{pos:t.pos,c:`0`},{pos:t.pos+1,c:t.c}],t.caret=o.seekNext.call(this,t.pos+1),t;return!1}function w(e,t,n,r,i){if(!t)return t;if(t&&n.min&&!isNaN(n.min.date.getTime())){let i;for(e.reset(),x(n).lastIndex=0;i=x(n).exec(n.inputFormat);){var a;if((a=b(i[0]))&&a[3]){let t=a[1],o=e[a[2]],s=n.min[a[2]],c=n.max?n.max[a[2]]:s+1,l=[],u=!1;for(let t=0;t<s.length;t++)r.validPositions[t+i.index]===void 0&&!u?(t+i.index==0&&o[t]<s[t]?(l[t]=o[t],u=!0):l[t]=s[t],a[2]===`year`&&o.length-1==t&&s!=c&&(l=(parseInt(l.join(``))+1).toString().split(``)),a[2]===`ampm`&&s!=c&&n.min.date.getTime()>e.date.getTime()&&(l[t]=c[t])):(l[t]=o[t],u||=o[t]>s[t]);t.call(e._date,l.join(``))}}t=n.min.date.getTime()<=e.date.getTime(),e.reInit()}return t&&n.max&&(isNaN(n.max.date.getTime())||(t=n.max.date.getTime()>=e.date.getTime())),t}function T(e,t,n){let i=``,a,o,s=0,c=!1,l={};for(x(n).lastIndex=0;a=x(n).exec(e);)if(a[0]===n.escapeChar)c=!0;else{if(t===void 0)if(!c&&(o=b(a[0])))i+=`(`+o[0]+`)`,n.placeholder&&n.placeholder!==``?(l[s]=n.placeholder[a.index%n.placeholder.length],l[`${a.index}'${n.placeholder[a.index%n.placeholder.length]}`]=a[0].charAt(0)):l[s]=a[0].charAt(0);else switch(a[0]){case`[`:i+=`(`;break;case`]`:i+=`)?`;break;default:i+=(0,r.escapeRegex)(a[0]),l[s]=a[0].charAt(0)}else if(!c&&(o=b(a[0])))if(o[3]){let e=o[3];i+=e.call(t.date)}else o[2]&&t[`raw`+o[2]]!==void 0?i+=t[`raw`+o[2]]:i+=a[0];else i+=a[0];s++,c=!1}return t===void 0&&(n.placeholder=l),i}function E(e,t,n){for(e=String(e),t||=2;e.length<t;)e=n?e+`0`:`0`+e;return e}function ee(e,t,n){let r=this;if(typeof e==`string`)return new u(e,t,n,r);if(e&&typeof e==`object`&&Object.prototype.hasOwnProperty.call(e,`date`))return e}function D(e,t){return T(t.inputFormat,{date:e},t)}function te(e,t,n){let r=this,i=0,a,o,c=0;for(x(t).lastIndex=0;o=x(t).exec(t.inputFormat);){let l=/\d+$/.exec(o[0]);if(l)c=parseInt(l[0]);else{let e=o[0][0],n=i;for(;r&&(t.placeholder[`${o.index}'${s.getTest.call(r,n).match.placeholder}`]||s.getTest.call(r,n).match.placeholder)===e;)n++;c=n-i,c===0&&(c=o[0].length)}if(i+=c,i>=e+1){let r=``;if(n&&n.tests[e]){let a=Object.keys(t.placeholder).filter(t=>{for(let r=o.index-1;r<i;r++)if(t===`${r}'${n.tests[e][0].match.placeholder}`)return!0;return!1});r=a.length>0?t.placeholder[a[0]]:n.tests[e][0].match.placeholder}if(o[0].indexOf(r)!==-1){a=o,o=x(t).exec(t.inputFormat);break}}}return{targetMatchIndex:i-c,nextMatch:o,targetMatch:a}}i.default.extendAliases({datetime:{mask:function(e){if(e.numericInput=!1,m.S=p.ordinalSuffix.join(`|`),e.inputFormat=g[e.inputFormat]||e.inputFormat,e.repeat&&(e.repeat=parseInt(e.repeat.toString()),e.repeat>0)){let t=``;for(let n=0;n<e.repeat;n++)t+=e.inputFormat;e.inputFormat=t,e.repeat=0}return e.displayFormat=g[e.displayFormat]||e.displayFormat||e.inputFormat,e.outputFormat=g[e.outputFormat]||e.outputFormat||e.inputFormat,e.regex=T(e.inputFormat,void 0,e),e.min=ee(e.min,e.inputFormat,e),e.max=ee(e.max,e.inputFormat,e),null},placeholder:``,inputFormat:`isoDateTime`,displayFormat:null,outputFormat:null,min:null,max:null,skipOptionalPartCharacter:``,preValidation:function(e,t,n,r,i,a,o,s){let c=this;if(s)return!0;if(isNaN(n)&&e[t]!==n){let r=te.call(c,t,i,a);if(r.nextMatch&&r.nextMatch[0]===n&&r.targetMatch[0].length>1){let n=b(r.targetMatch[0])[0];if(new RegExp(n).test(`0`+e[t-1]))return e[t]=e[t-1],e[t-1]=`0`,{fuzzy:!0,buffer:e,refreshFromBuffer:{start:t-1,end:t+1},pos:t+1}}}return!0},postValidation:function(e,t,n,r,i,a,o,c){let l=this;if(o)return!0;let u,d;if(r===!1&&(u=te.call(l,t+1,i,a),u.targetMatch&&u.targetMatchIndex===t&&u.targetMatch[0].length>1&&b(u.targetMatch[0])!==void 0?d=b(u.targetMatch[0])[0]:(u=te.call(l,t+2,i,a),u.targetMatch&&u.targetMatchIndex===t+1&&u.targetMatch[0].length>1&&b(u.targetMatch[0])!==void 0&&(d=b(u.targetMatch[0]))),d!==void 0&&(t=u.targetMatchIndex,a.validPositions[t+1]!==void 0&&new RegExp(d).test(n+`0`)?(e[t]=n,e[t+1]=`0`,r={pos:t+2,caret:t+1}):new RegExp(d).test(`0`+n)&&(e[t]=`0`,e[t+1]=n,r={pos:t+2})),r===!1))return r;if(r.fuzzy&&(e=r.buffer,t=r.pos),u=te.call(l,t,i,a),u.targetMatch&&u.targetMatch[0]&&b(u.targetMatch[0])!==void 0){let n=b(u.targetMatch[0]);d=n[0];let r=e.slice(u.targetMatchIndex,u.targetMatchIndex+u.targetMatch[0].length);if(new RegExp(d).test(r.join(``))===!1&&u.targetMatch[0].length===2&&a.validPositions[u.targetMatchIndex]&&a.validPositions[u.targetMatchIndex+1]&&(a.validPositions[u.targetMatchIndex+1].input=`0`),n[2]==`year`){let n=s.getMaskTemplate.call(l,!1,1,void 0,!0);for(let r=t+1;r<e.length;r++)e[r]=n[r],a.validPositions.splice(t+1,1)}}let f=r,p=ee.call(l,e.join(``),i.inputFormat,i);return f&&!isNaN(p.date.getTime())&&(i.prefillYear&&(f=S(p,f,i)),f=C.call(l,p,f,i),f=w(p,f,i,a,c)),t!==void 0&&f&&r.pos!==t?{buffer:T(i.inputFormat,p,i).split(``),refreshFromBuffer:{start:t,end:r.pos},pos:r.caret===void 0?r.pos:r.caret}:f},onKeyDown:function(e,t,n,r){let i=this;e.ctrlKey&&e.key===a.keys.ArrowRight&&(i.inputmask._valueSet(D(new Date,r)),l(i).trigger(`setvalue`))},onUnMask:function(e,t,n){let r=this;return t&&T(n.outputFormat,ee.call(r,e,n.inputFormat,n),n)},casing:`follow`,onBeforeMask:function(e,t){return Object.prototype.toString.call(e)===`[object Date]`&&(e=D(e,t)),e},insertMode:!1,insertModeVisual:!1,shiftPositions:!1,keepStatic:!1,inputmode:`numeric`,prefillYear:!0}})}),(function(e,t,n){var r=i(n(7));function i(e){return e&&e.__esModule?e:{default:e}}r.default.dependencyLib.extend(!0,r.default.prototype.i18n,{dayNames:[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`,`Sun`,`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`,`Sunday`],monthNames:[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`,`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`],ordinalSuffix:[`st`,`nd`,`rd`,`th`]})}),(function(e,t,n){var r=n(25),i=s(n(7)),a=n(19),o=n(20);function s(e){return e&&e.__esModule?e:{default:e}}let c=i.default.dependencyLib;function l(e,t){let n=``;for(let r=0;r<e.length;r++)i.default.prototype.definitions[e.charAt(r)]||t.definitions[e.charAt(r)]||t.optionalmarker[0]===e.charAt(r)||t.optionalmarker[1]===e.charAt(r)||t.quantifiermarker[0]===e.charAt(r)||t.quantifiermarker[1]===e.charAt(r)||t.groupmarker[0]===e.charAt(r)||t.groupmarker[1]===e.charAt(r)||t.alternatormarker===e.charAt(r)?n+=`\\`+e.charAt(r):n+=e.charAt(r);return n}function u(e,t,n,r){if(e.length>0&&t>0&&(!n.digitsOptional||r)){var i=e.indexOf(n.radixPoint),a=!1;n.negationSymbol.back===e[e.length-1]&&(a=!0,e.length--),i===-1&&(e.push(n.radixPoint),i=e.length-1);for(let n=1;n<=t;n++)isFinite(e[i+n])||(e[i+n]=`0`)}return a&&e.push(n.negationSymbol.back),e}function d(e,t){let n=0;e===`+`&&(n=o.seekNext.call(this,t.validPositions.length-1));for(let r in t.tests)if(r=parseInt(r),r>=n){for(let n=0,i=t.tests[r].length;n<i;n++)if((t.validPositions[r]===void 0||e===`-`)&&t.tests[r][n].match.def===e)return r+ +(t.validPositions[r]!==void 0&&e!==`-`)}return n}function f(e,t){let n=-1;for(let r=0,i=t.validPositions.length;r<i;r++){let i=t.validPositions[r];if(i&&i.match.def===e){n=r;break}}return n}function p(e){e.parseMinMaxOptions===void 0&&(e.min!==null&&(e.min=e.min.toString().replace(new RegExp((0,r.escapeRegex)(e.groupSeparator),`g`),``),e.radixPoint===`,`&&(e.min=e.min.replace(e.radixPoint,`.`)),e.min=isFinite(e.min)?parseFloat(e.min):NaN,isNaN(e.min)&&(e.min=Number.MIN_VALUE)),e.max!==null&&(e.max=e.max.toString().replace(new RegExp((0,r.escapeRegex)(e.groupSeparator),`g`),``),e.radixPoint===`,`&&(e.max=e.max.replace(e.radixPoint,`.`)),e.max=isFinite(e.max)?parseFloat(e.max):NaN,isNaN(e.max)&&(e.max=Number.MAX_VALUE)),e.parseMinMaxOptions=`done`)}function m(e){e.repeat=0,e.groupSeparator===e.radixPoint&&e.digits&&e.digits!==`0`&&(e.radixPoint===`.`?e.groupSeparator=`,`:e.radixPoint===`,`?e.groupSeparator=`.`:e.groupSeparator=``),e.groupSeparator===` `&&(e.skipOptionalPartCharacter=void 0),e.placeholder.length>1&&(e.placeholder=e.placeholder.charAt(0)),e.positionCaretOnClick===`radixFocus`&&e.placeholder===``&&(e.positionCaretOnClick=`lvp`);let t=`0`,n=e.radixPoint;e.numericInput===!0&&e.__financeInput===void 0?(t=`1`,e.positionCaretOnClick=e.positionCaretOnClick===`radixFocus`?`lvp`:e.positionCaretOnClick,e.digitsOptional=!1,isNaN(e.digits)&&(e.digits=e.digits.indexOf(`,`)===-1?2:e.digits.split(`,`)[0]),e._radixDance=!1,n=e.radixPoint===`,`?`?`:`!`,e.radixPoint!==``&&e.definitions[n]===void 0&&(e.definitions[n]={},e.definitions[n].validator=`[`+e.radixPoint+`]`,e.definitions[n].placeholder=e.radixPoint,e.definitions[n].static=!0,e.definitions[n].generated=!0)):(e.__financeInput=!1,e.numericInput=!0);let r=`[+]`,i;if(r+=l(e.prefix,e),e.groupSeparator===``?r+=`9{+}`:(e.definitions[e.groupSeparator]===void 0&&(e.definitions[e.groupSeparator]={},e.definitions[e.groupSeparator].validator=`[`+e.groupSeparator+`]`,e.definitions[e.groupSeparator].placeholder=e.groupSeparator,e.definitions[e.groupSeparator].static=!0,e.definitions[e.groupSeparator].generated=!0),r+=e._mask(e)),e.digits!==void 0&&e.digits!==0){let a=e.digits.toString().split(`,`);isFinite(a[0])&&a[1]&&isFinite(a[1])?r+=n+t+`{`+e.digits+`}`:(isNaN(e.digits)||parseInt(e.digits)>0)&&(e.digitsOptional||e.jitMasking?(i=r+n+t+`{0,`+e.digits+`}`,e.keepStatic=!0):r+=n+t+`{`+e.digits+`}`)}else e.inputmode=`numeric`;return r+=l(e.suffix,e),r+=`[-]`,i&&(r=[i+l(e.suffix,e)+`[-]`,r]),e.greedy=!1,p(e),e.radixPoint!==``&&e.substituteRadixPoint&&(e.substitutes[e.radixPoint==`.`?`,`:`.`]=e.radixPoint),r}function h(e,t,n,r,i){return i._radixDance&&i.numericInput&&t!==i.negationSymbol.back&&e<=n&&(n>0||t==i.radixPoint)&&(r.validPositions[e-1]===void 0||r.validPositions[e-1].input!==i.negationSymbol.back)&&--e,e}function g(e,t,n,r,i){let a=t.buffer?t.buffer.indexOf(i.radixPoint):-1,o=(a!==-1||r&&i.jitMasking)&&new RegExp(i.definitions[9].validator).test(e);return!r&&i._radixDance&&a!==-1&&o&&t.validPositions[a]==null?{insert:{pos:a===n?a+1:a,c:i.radixPoint},pos:n}:o}function _(e,t){let n=RegExp(`(^`+(t.negationSymbol.front===``?``:(0,r.escapeRegex)(t.negationSymbol.front)+`?`)+(0,r.escapeRegex)(t.prefix)+`)(.*)(`+(0,r.escapeRegex)(t.suffix)+(t.negationSymbol.back==``?``:(0,r.escapeRegex)(t.negationSymbol.back)+`?`)+`$)`).exec(e.slice().reverse().join(``)),i=n?n[2]:``,a=!1;return i&&(i=i.split(t.radixPoint.charAt(0))[0],a=RegExp(`^[0`+t.groupSeparator+`]*`).exec(i)),a&&(a[0].length>1||a[0].length>0&&a[0].length<i.length)?a:!1}i.default.extendAliases({numeric:{mask:m,_mask:function(e){return`(`+e.groupSeparator+`999){+|1}`},digits:`*`,digitsOptional:!0,enforceDigitsOnBlur:!1,radixPoint:`.`,positionCaretOnClick:`radixFocus`,_radixDance:!0,groupSeparator:``,allowMinus:!0,negationSymbol:{front:`-`,back:``},prefix:``,suffix:``,min:null,max:null,SetMaxOnOverflow:!1,step:1,inputType:`text`,unmaskAsNumber:!1,roundingFN:Math.round,inputmode:`decimal`,shortcuts:{k:`1000`,m:`1000000`},placeholder:`0`,greedy:!1,rightAlign:!0,insertMode:!0,autoUnmask:!1,skipOptionalPartCharacter:``,usePrototypeDefinitions:!1,stripLeadingZeroes:!0,substituteRadixPoint:!0,definitions:{0:{validator:g},1:{validator:g,definitionSymbol:`9`},9:{validator:`[0-9０-９٠-٩۰-۹]`,definitionSymbol:`*`},"+":{validator:function(e,t,n,r,i){return i.allowMinus&&(e===`-`||e===i.negationSymbol.front)}},"-":{validator:function(e,t,n,r,i){return i.allowMinus&&e===i.negationSymbol.back}}},preValidation:function(e,t,n,r,i,a,o,s){let c=this;if(i.__financeInput!==!1&&n===i.radixPoint)return!1;let l=e.indexOf(i.radixPoint),u=t;if(t=h(t,n,l,a,i),n===`-`||n===i.negationSymbol.front){if(i.allowMinus!==!0)return!1;let e=!1,t=f(`+`,a),n=f(`-`,a);return t!==-1&&(e=[t],n!==-1&&e.push(n)),e===!1?{insert:[{pos:d.call(c,`+`,a),c:i.negationSymbol.front,fromIsValid:!0},{pos:d.call(c,`-`,a),c:i.negationSymbol.back,fromIsValid:void 0}],caret:u+i.negationSymbol.back.length}:{remove:e,caret:u-i.negationSymbol.back.length}}if(n===i.groupSeparator)return{caret:u};if(s)return!0;if(l!==-1&&i._radixDance===!0&&r===!1&&n===i.radixPoint&&i.digits!==void 0&&(isNaN(i.digits)||parseInt(i.digits)>0)&&l!==t){let e=d.call(c,i.radixPoint,a);return a.validPositions[e]&&(a.validPositions[e].generatedInput=a.validPositions[e].generated||!1),{caret:i._radixDance&&t===l-1?l+1:l}}if(i.__financeInput===!1)if(r){if(i.digitsOptional)return{rewritePosition:o.end};if(!i.digitsOptional){if(o.begin>l&&o.end<=l)return n===i.radixPoint?{insert:{pos:l+1,c:`0`,fromIsValid:!0},rewritePosition:l}:{rewritePosition:l+1};if(o.begin<l)return{rewritePosition:o.begin-1}}}else{if(!i.showMaskOnHover&&!i.showMaskOnFocus&&!i.digitsOptional&&i.digits>0&&this.__valueGet.call(this.el)===``)return{rewritePosition:l};if(t>=e.length-i.prefix.length&&i.radixPoint!==``){let e=new RegExp(i.definitions[9].validator);if(!a.validPositions.some(t=>t&&!t.generatedInput&&e.test(t.input)))return{rewritePosition:l===-1?0:l}}}return{rewritePosition:t}},postValidation:function(e,t,n,r,i,a,o,s,l){if(r===!1)return r;if(o)return!0;if(i.min!==null||i.max!==null){let t=i.onUnMask(e.slice().reverse().join(``),void 0,c.extend({},i,{unmaskAsNumber:!0}));if(i.min!==null&&t<i.min&&l!==!0&&(t.toString().length>i.min.toString().length||e[0]===i.radixPoint||t<0))return!1;if(i.max!==null&&i.max>=0&&t>i.max)return i.SetMaxOnOverflow?{refreshFromBuffer:!0,buffer:u(i.max.toString().replace(`.`,i.radixPoint).split(``),i.digits,i).reverse()}:!1}return r},onUnMask:function(e,t,n){if(t===``&&n.nullable===!0)return t;let i=e.replace(n.prefix,``);return i=i.replace(n.suffix,``),i=i.replace(new RegExp((0,r.escapeRegex)(n.groupSeparator),`g`),``),n.placeholder.charAt(0)!==``&&(i=i.replace(new RegExp(n.placeholder.charAt(0),`g`),`0`)),n.unmaskAsNumber?(n.radixPoint!==``&&i.indexOf(n.radixPoint)!==-1&&(i=i.replace(r.escapeRegex.call(this,n.radixPoint),`.`)),i=i.replace(RegExp(`^`+(0,r.escapeRegex)(n.negationSymbol.front)),`-`),i=i.replace(RegExp((0,r.escapeRegex)(n.negationSymbol.back)+`$`),``),Number(i)):i},isComplete:function(e,t){let n=(t.numericInput?e.slice().reverse():e).join(``);return n=n.replace(RegExp(`^`+(0,r.escapeRegex)(t.negationSymbol.front)),`-`),n=n.replace(RegExp((0,r.escapeRegex)(t.negationSymbol.back)+`$`),``),n=n.replace(t.prefix,``),n=n.replace(t.suffix,``),n=n.replace(RegExp((0,r.escapeRegex)(t.groupSeparator)+`([0-9]{3})`,`g`),`$1`),t.radixPoint===`,`&&(n=n.replace((0,r.escapeRegex)(t.radixPoint),`.`)),isFinite(n)},onBeforeMask:function(e,t){e??=``;let n=t.radixPoint||`,`;isFinite(t.digits)&&(t.digits=parseInt(t.digits)),(typeof e==`number`||t.inputType===`number`)&&n!==``&&(e=e.toString().replace(`.`,n));let i=e.charAt(0)===`-`||e.charAt(0)===t.negationSymbol.front,a=e.split(n),o=a[0].replace(/[^\-0-9]/g,``),s=a.length>1?a[1].replace(/[^0-9]/g,``):``,c=a.length>1;e=o+(s===``?s:n+s);let l=0;if(n!==``&&(l=t.digitsOptional?t.digits<s.length?t.digits:s.length:t.digits,s!==``||!t.digitsOptional)){let i=10**(l||1);e=e.replace((0,r.escapeRegex)(n),`.`),isNaN(parseFloat(e))||(e=(t.roundingFN(parseFloat(e)*i)/i).toFixed(l)),e=e.toString().replace(`.`,n)}if(t.digits===0&&e.indexOf(n)!==-1&&(e=e.substring(0,e.indexOf(n))),e!==``&&(t.min!==null||t.max!==null)){let r=e.toString().replace(n,`.`);t.min!==null&&r<t.min?e=t.min.toString().replace(`.`,n):t.max!==null&&r>t.max&&(e=t.max.toString().replace(`.`,n))}return i&&e.charAt(0)!==`-`&&(e=`-`+e),u(e.toString().split(``),l,t,c).join(``)},onBeforeWrite:function(e,t,n,i){function a(e,t){if(i.__financeInput!==!1||t){var n=e.indexOf(i.radixPoint);n!==-1&&e.splice(n,1)}if(i.groupSeparator!==``)for(;(n=e.indexOf(i.groupSeparator))!==-1;)e.splice(n,1);return e}let o,s;if(i.stripLeadingZeroes&&(s=_(t,i))){let e=t.join(``).lastIndexOf(s[0].split(``).reverse().join(``))-(s[0]==s.input?0:1),n=+(s[0]==s.input);for(let r=s[0].length-n;r>0;r--)this.maskset.validPositions.splice(e+r,1),delete t[e+r]}if(e)switch(e.type){case`blur`:case`checkval`:if(i.min!==null||i.max!==null){let e=i.onUnMask(t.slice().reverse().join(``),void 0,c.extend({},i,{unmaskAsNumber:!0}));if(i.min!==null&&e<i.min&&t.join()!==``)return{refreshFromBuffer:!0,buffer:u(i.min.toString().replace(`.`,i.radixPoint).split(``),i.digits,i).reverse()};if(i.max!==null&&e>i.max)return{refreshFromBuffer:!0,buffer:u(i.max.toString().replace(`.`,i.radixPoint).split(``),i.digits,i).reverse()}}if(t[t.length-1]===i.negationSymbol.front){let e=RegExp(`(^`+(i.negationSymbol.front==``?``:(0,r.escapeRegex)(i.negationSymbol.front)+`?`)+(0,r.escapeRegex)(i.prefix)+`)(.*)(`+(0,r.escapeRegex)(i.suffix)+(i.negationSymbol.back==``?``:(0,r.escapeRegex)(i.negationSymbol.back)+`?`)+`$)`).exec(a(t.slice(),!0).reverse().join(``));(e?e[2]:``)==0&&(o={refreshFromBuffer:!0,buffer:[0]})}else i.radixPoint!==``&&t.indexOf(i.radixPoint)===i.suffix.length&&(o&&o.buffer?o.buffer.splice(0,1+i.suffix.length):(t.splice(0,1+i.suffix.length),o={refreshFromBuffer:!0,buffer:a(t)}));if(i.enforceDigitsOnBlur){o||={};let e=(o&&o.buffer||t).slice().reverse();o.refreshFromBuffer=!0,o.buffer=u(e,i.digits,i,!0).reverse()}}return o},onKeyDown:function(e,t,n,r){let i=c(this),o;if(e.location!=3){let t,n=e.key;if((t=r.shortcuts&&r.shortcuts[n])&&t.length>1)return this.inputmask.__valueSet.call(this,parseFloat(this.inputmask.unmaskedvalue())*parseInt(t)),i.trigger(`setvalue`),!1}if(e.ctrlKey)switch(e.key){case a.keys.ArrowUp:return this.inputmask.__valueSet.call(this,parseFloat(this.inputmask.unmaskedvalue())+parseInt(r.step)),i.trigger(`setvalue`),!1;case a.keys.ArrowDown:return this.inputmask.__valueSet.call(this,parseFloat(this.inputmask.unmaskedvalue())-parseInt(r.step)),i.trigger(`setvalue`),!1}if(!e.shiftKey&&(e.key===a.keys.Delete||e.key===a.keys.Backspace||e.key===a.keys.BACKSPACE_SAFARI)&&n.begin!==t.length){if(t[e.key===a.keys.Delete?n.begin-1:n.end]===r.negationSymbol.front)return o=t.slice().reverse(),r.negationSymbol.front!==``&&o.shift(),r.negationSymbol.back!==``&&o.pop(),i.trigger(`setvalue`,[o.join(``),n.begin]),!1;if(r._radixDance===!0){let s=t.indexOf(r.radixPoint);if(!r.digitsOptional){if(s!==-1&&(n.begin<s||n.end<s||e.key===a.keys.Delete&&(n.begin===s||n.begin-1===s))){let l;return n.begin===n.end&&(e.key===a.keys.Backspace||e.key===a.keys.BACKSPACE_SAFARI?n.begin++:e.key===a.keys.Delete&&n.begin-1===s&&(l=c.extend({},n),n.begin--,n.end--)),o=t.slice().reverse(),o.splice(o.length-n.begin,n.begin-n.end||1),(e.key===a.keys.Backspace||e.key===a.keys.BACKSPACE_SAFARI)&&o.splice(o.length-n.end+1,0,`0`),o=u(o,r.digits,r).join(``),l&&(n=l),i.trigger(`setvalue`,[o,n.begin>=o.length?s+1:n.begin]),!1}}else if(s===0)return o=t.slice().reverse(),o.pop(),i.trigger(`setvalue`,[o.join(``),n.begin>=o.length?o.length:n.begin]),!1}}}},currency:{prefix:``,groupSeparator:`,`,alias:`numeric`,digits:2,digitsOptional:!1},decimal:{alias:`numeric`},integer:{alias:`numeric`,inputmode:`numeric`,digits:0},percentage:{alias:`numeric`,min:0,max:100,suffix:` %`,digits:0,allowMinus:!1},indianns:{alias:`numeric`,_mask:function(e){return`(`+e.groupSeparator+`99){*|1}(`+e.groupSeparator+`999){1|1}`},groupSeparator:`,`,radixPoint:`.`,placeholder:`0`,digits:2,digitsOptional:!1}})}),(function(e,t,n){var r=a(n(11)),i=a(n(7));function a(e){return e&&e.__esModule?e:{default:e}}let o=r.default.document;if(o&&o.head&&o.head.attachShadow&&r.default.customElements&&r.default.customElements.get(`input-mask`)===void 0){class e extends HTMLElement{constructor(){super();let e=this.getAttributeNames(),t=this.attachShadow({mode:`closed`});this.input=o.createElement(`input`),this.input.type=`text`,t.appendChild(this.input);for(let t in e)Object.prototype.hasOwnProperty.call(e,t)&&this.input.setAttribute(e[t],this.getAttribute(e[t]));let n=new i.default;n.dataAttribute=``,n.mask(this.input)}attributeChangedCallback(e,t,n){this.input.setAttribute(e,n)}get value(){return this.input.value}set value(e){this.input.value=e}}r.default.customElements.define(`input-mask`,e)}})],t={};function n(r){var i=t[r];if(i!==void 0)return i.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}var r={};return(function(){var e=r;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n(1),n(2),n(3),n(4),n(5),n(6),n(27),n(29),n(30);var t=i(n(7));function i(e){return e&&e.__esModule?e:{default:e}}e.default=t.default})(),r})()})}))(),1),ns=ts.default.default||ts.default;function rs(e,t){let n={minimumFractionDigits:2,maximumFractionDigits:2},r=[[e,{style:`currency`,currency:t}],[e,n],[void 0,n]];for(let[e,t]of r){let n;try{n=new Intl.NumberFormat(e,t)}catch{continue}let r=n.formatToParts(12345.6);return{currency:r.find(({type:e})=>e===`currency`)?.value??``,decimal:r.find(({type:e})=>e===`decimal`)?.value??`.`,group:r.find(({type:e})=>e===`group`)?.value??`,`,decimals:n.resolvedOptions().maximumFractionDigits??2}}return{currency:``,decimal:`.`,group:`,`,decimals:2}}var is=new WeakMap,as=new WeakSet,os=new WeakMap,ss=class extends ue{static get styles(){return[...super.styles,a`
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
      `]}constructor(){super(),O(this,as),this.currency=`USD`,this.locale=`en-US`,this.showCurrency=!0,this.clearable=!0,this.type=`text`,M(this,is,void 0),M(this,os,()=>{this.value=``,j(as,this,cs).call(this)?.inputmask?.setValue(``),j(as,this,cs).call(this)?.focus()}),this.inputMode=`decimal`}connectedCallback(){super.connectedCallback(),this.hasUpdated&&j(as,this,ls).call(this)}willUpdate(e){super.willUpdate(e),(!this.hasUpdated||e.has(`locale`)||e.has(`currency`))&&A(is,this,rs(this.locale.replaceAll(`_`,`-`),this.currency))}updated(e){super.updated(e),(e.has(`currency`)||e.has(`locale`)||e.has(`decimals`)||e.has(`decimalSeparator`)||e.has(`groupSeparator`)||e.has(`placeholder`))&&j(as,this,ls).call(this),j(as,this,cs).call(this)?.classList.toggle(`money-placeholder`,!j(as,this,us).call(this))}disconnectedCallback(){j(as,this,cs).call(this)?.inputmask?.remove(),super.disconnectedCallback()}_inputGroupPrefixTemplate(){return this.showCurrency?p`<div class="input-group__prefix">
      <span class="currency"
        >${`(${this.currency}) ${k(is,this).currency}`}</span
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
        ?hidden=${!this.clearable||this.disabled||!j(as,this,us).call(this)}
        @mousedown=${e=>e.preventDefault()}
        @click=${k(os,this)}
      >
        <craft-icon name="xmark-large" style="font-size: 0.8em"></craft-icon>
      </craft-button>
    </div>`}};function cs(){return this._control}function ls(){let e=j(as,this,cs).call(this);if(!e)return;let t=this.value,n=k(is,this);e.inputmask?.remove(),e.value=t,new ns({alias:`currency`,autoGroup:!1,clearMaskOnLostFocus:!0,digits:this.decimals??n.decimals,digitsOptional:!1,groupSeparator:this.groupSeparator??n.group,placeholder:this.placeholder||`0`,prefix:``,radixPoint:this.decimalSeparator??n.decimal}).mask(e)}function us(){return this.value!==``}r([c()],ss.prototype,`currency`,void 0),r([c()],ss.prototype,`locale`,void 0),r([c({type:Number})],ss.prototype,`decimals`,void 0),r([c({attribute:`decimal-separator`})],ss.prototype,`decimalSeparator`,void 0),r([c({attribute:`group-separator`})],ss.prototype,`groupSeparator`,void 0),r([c({converter:ko,attribute:`show-currency`})],ss.prototype,`showCurrency`,void 0),r([c({converter:ko})],ss.prototype,`clearable`,void 0),customElements.get(`craft-input-money`)||customElements.define(`craft-input-money`,ss);var ds=new WeakSet,fs=class extends ue{static get styles(){return[...super.styles,a`
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
          ${ce}
          --_input-end-end-radius: var(
            --c-input-radius,
            var(--c-radius-sm)
          ) !important;
          --_input-start-end-radius: var(
            --c-input-radius,
            var(--c-radius-sm)
          ) !important;
        }
      `]}constructor(){super(),O(this,ds),this.passwordRules=``,this._visible=!1,this.type=`password`,this.reveal=()=>{this._visible=!this._visible,this.type=this._visible?`text`:`password`},this.renderSuffix=()=>p`<craft-button
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
    </craft-button>`,this.type=`password`}connectedCallback(){super.connectedCallback(),j(ds,this,ps).call(this)}updated(e){super.updated(e),e.has(`passwordRules`)&&j(ds,this,ps).call(this)}get slots(){return{...super.slots,suffix:()=>this.renderSuffix()}}};function ps(){if(this.passwordRules){this._control?.setAttribute(`passwordrules`,this.passwordRules);return}this._control?.removeAttribute(`passwordrules`)}r([c({attribute:`passwordrules`})],fs.prototype,`passwordRules`,void 0),r([f()],fs.prototype,`_visible`,void 0),customElements.get(`craft-input-password`)||customElements.define(`craft-input-password`,fs);function ms(e,t){let n=t.left>e.x?t.left:t.right<e.x?t.right:void 0;if(!(n===void 0||t.height<=0))return[e,{x:n,y:t.top},{x:n,y:t.bottom}]}function hs(e,t,n){return(e.x-n.x)*(t.y-n.y)-(t.x-n.x)*(e.y-n.y)}function gs([e,t,n],r){let i=hs(r,e,t),a=hs(r,t,n),o=hs(r,n,e);return!((i<0||a<0||o<0)&&(i>0||a>0||o>0))}var _s=new WeakMap,vs=new WeakMap,ys=new WeakMap,bs=new WeakMap,xs=new WeakMap,Ss=new WeakMap,z=new WeakSet,Cs=new WeakMap,ws=class{constructor(e){O(this,z),M(this,_s,new Map),M(this,vs,!1),M(this,ys,void 0),M(this,bs,void 0),M(this,xs,void 0),M(this,Ss,void 0),M(this,Cs,e=>{A(bs,this,{x:e.clientX,y:e.clientY}),k(xs,this)&&j(z,this,As).call(this)}),this.options=e}get warm(){return k(vs,this)}requestOpen(e,{immediate:t=!1}={}){let n=j(z,this,Ts).call(this,e);if(j(z,this,js).call(this),clearTimeout(n.closeTimer),n.closeTimer=void 0,n.exit=void 0,k(xs,this)?.element.contains(e.element)&&A(xs,this,void 0),!t&&j(z,this,Os).call(this,e)){A(xs,this,e);return}if(j(z,this,Es).call(this,e),!(n.open||!t&&n.openTimer!==void 0)){if(t||k(vs,this)){clearTimeout(n.openTimer),n.openTimer=void 0,j(z,this,Ms).call(this,e,n);return}n.openTimer=setTimeout(()=>{n.openTimer=void 0,j(z,this,Ms).call(this,e,n)},this.options.warmUpDelay)}}requestClose(e){let t=j(z,this,Ts).call(this,e);clearTimeout(t.openTimer),t.openTimer=void 0,k(xs,this)===e&&A(xs,this,void 0),!(!t.open||t.closeTimer!==void 0)&&(t.exit=k(bs,this)&&{...k(bs,this),at:Date.now()},j(z,this,ks).call(this,e,t))}notifyClosed(e){let t=j(z,this,Ts).call(this,e);clearTimeout(t.openTimer),clearTimeout(t.closeTimer),t.openTimer=void 0,t.closeTimer=void 0,t.open&&(t.open=!1,j(z,this,Ps).call(this))}remove(e){let t=k(_s,this).get(e);t&&(clearTimeout(t.openTimer),clearTimeout(t.closeTimer),k(_s,this).delete(e),k(xs,this)===e&&A(xs,this,void 0),j(z,this,Ps).call(this))}reset(){for(let[e,t]of k(_s,this))clearTimeout(t.openTimer),clearTimeout(t.closeTimer),t.open&&e.setOpen(!1);k(_s,this).clear(),clearTimeout(k(ys,this)),A(ys,this,void 0),A(vs,this,!1),A(xs,this,void 0),A(bs,this,void 0),k(Ss,this)?.abort(),A(Ss,this,void 0)}};function Ts(e){let t=k(_s,this).get(e);return t||(t={open:!1},k(_s,this).set(e,t)),t}function Es(e){for(let[t,n]of k(_s,this))t===e||!n.open||t.element.contains(e.element)||(clearTimeout(n.closeTimer),n.closeTimer=void 0,j(z,this,Ns).call(this,t,n))}function Ds(e,t){let{exit:n}=t,r=k(bs,this);if(!n||!r||Date.now()-n.at>=this.options.graceDelay)return!1;let i=e.overlayRect?.(),a=i&&ms(n,i);return!!a&&gs(a,r)}function Os(e){for(let[t,n]of k(_s,this))if(!(t===e||!n.open||t.element.contains(e.element))&&j(z,this,Ds).call(this,t,n))return!0;return!1}function ks(e,t){t.closeTimer=setTimeout(()=>{if(t.closeTimer=void 0,j(z,this,Ds).call(this,e,t)){j(z,this,ks).call(this,e,t);return}j(z,this,Ns).call(this,e,t),j(z,this,As).call(this)},this.options.closeDelay)}function As(){let e=k(xs,this);A(xs,this,void 0),e&&this.requestOpen(e)}function js(){k(Ss,this)||(A(Ss,this,new AbortController),document.addEventListener(`pointermove`,k(Cs,this),{capture:!0,passive:!0,signal:k(Ss,this).signal}))}function Ms(e,t){t.open=!0,clearTimeout(k(ys,this)),A(ys,this,void 0),A(vs,this,!0),e.setOpen(!0)}function Ns(e,t){t.open=!1,t.exit=void 0,e.setOpen(!1),j(z,this,Ps).call(this)}function Ps(){if(!(!k(vs,this)||k(ys,this)!==void 0)){for(let e of k(_s,this).values())if(e.open||e.openTimer!==void 0)return;A(ys,this,setTimeout(()=>{A(ys,this,void 0),A(vs,this,!1)},this.options.coolDownDelay))}}var Fs=new ws({warmUpDelay:250,closeDelay:150,coolDownDelay:500,graceDelay:300}),Is=new ws({warmUpDelay:500,closeDelay:300,coolDownDelay:500,graceDelay:300}),Ls=a`
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
`,Rs=new WeakMap,zs=new WeakMap,Bs=new WeakMap,B=new WeakSet,Vs=new WeakMap,Hs=new WeakMap,Us=new WeakMap,Ws=new WeakMap,Gs=new WeakMap,Ks=new WeakMap,qs=new WeakMap,Js=class extends u{constructor(){super(),O(this,B),this.label=n(`Link details`),this.anchor=null,this.copyState=x.Idle,this.detailsOpen=!1,M(this,Rs,!1),M(this,zs,{element:this,setOpen:e=>{e?j(B,this,tc).call(this):this.detailsPopover?.hide()}}),M(this,Bs,new MutationObserver(()=>j(B,this,Ys).call(this))),M(this,Vs,e=>{this.copyState=e.detail.state,e.detail.state===x.Success?this.dispatchEvent(new CustomEvent(`craft-copy`,{bubbles:!0,composed:!0,detail:{value:$s.call(j(B,this))}})):e.detail.state===x.Error&&this.dispatchEvent(new CustomEvent(`craft-error`,{bubbles:!0,composed:!0}))}),M(this,Hs,e=>{e.target===e.currentTarget&&(this.detailsOpen=e.type===`craft-show`,this.detailsOpen||j(B,this,nc).call(this))}),M(this,Us,e=>{e.pointerType!==`touch`&&(k(Rs,this)||!this.detailsOpen&&this.anchor)&&Is.requestOpen(k(zs,this))}),M(this,Ws,e=>{e.pointerType!==`touch`&&Is.requestClose(k(zs,this))}),M(this,Gs,()=>{k(Rs,this)||Is.requestClose(k(zs,this))}),M(this,Ks,e=>{if(!k(Rs,this))return;let t=this.detailsPopover?.querySelector(`[slot="invoker"]`),n=!!t&&e.composedPath().includes(t);e.type===`focusin`&&n||(j(B,this,nc).call(this),e.type===`click`&&n&&e.stopPropagation())}),M(this,qs,e=>{e.key===`Escape`&&k(Rs,this)&&(e.preventDefault(),e.stopPropagation(),this.detailsPopover?.hide())}),this.addEventListener(`pointerenter`,k(Us,this)),this.addEventListener(`pointerleave`,k(Ws,this)),this.addEventListener(`pointerdown`,k(Gs,this))}connectedCallback(){super.connectedCallback(),k(Bs,this).observe(this,{subtree:!0,childList:!0,characterData:!0,attributes:!0,attributeFilter:[`href`,`target`,`rel`]}),j(B,this,Ys).call(this)}disconnectedCallback(){k(Bs,this).disconnect(),j(B,this,nc).call(this),Is.remove(k(zs,this)),super.disconnectedCallback()}render(){let e=Qs.call(j(B,this)),t=ec.call(j(B,this)),r=n(`Open in a new tab`);return p`
      ${this.anchor?p`<craft-popover
            placement="bottom-start"
            @craft-show=${k(Hs,this)}
            @craft-hide=${k(Hs,this)}
            @click=${{handleEvent:k(Ks,this),capture:!0}}
            @focusin=${k(Ks,this)}
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
                label=${[this.label,Xs.call(j(B,this))].filter(Boolean).join(` `)}
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
                    .action=${{type:`clipboard`,value:$s.call(j(B,this))}}
                    @craft-state-change=${k(Vs,this)}
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
                >${$s.call(j(B,this))}</a
              >
              <span class="details__status" role="status"
                >${this.copyState===x.Idle?``:t.label}</span
              >
            </div>
          </craft-popover>`:i}
      <span class="text" part="text"
        ><slot @slotchange=${()=>j(B,this,Ys).call(this)}></slot
      ></span>
    `}};function Ys(){this.anchor=this.querySelector(`a[href]`),this.requestUpdate()}function Xs(){return Array.from(this.anchor?.childNodes??[]).filter(e=>!(e instanceof Element&&e.hasAttribute(`data-new-tab-cue`))).map(e=>e.textContent).join(``).replace(/\s+/g,` `).trim()}function Zs(){return this.anchor?.protocol??``}function Qs(){switch(Zs.call(j(B,this))){case`mailto:`:return{icon:`envelope`,heading:n(`Email`)};case`tel:`:return{icon:`phone`,heading:n(`Phone`)};default:return{icon:`link`,heading:n(`Link`)}}}function $s(){let e=this.anchor?.href??``;return Zs.call(j(B,this))===`mailto:`||Zs.call(j(B,this))===`tel:`?decodeURIComponent(e.slice(Zs.call(j(B,this)).length).split(`?`)[0]??``):e}function ec(){switch(this.copyState){case x.Success:return{icon:`check`,label:n(`Copied`)};case x.Error:return{icon:`xmark-large`,label:n(`Copy failed`)};default:return{icon:`custom-icons/clone-dashed`,label:n(`Copy`)}}}function tc(){A(Rs,this,!0),document.addEventListener(`keydown`,k(qs,this),!0),this.detailsPopover?.show()}function nc(){A(Rs,this,!1),Is.notifyClosed(k(zs,this)),document.removeEventListener(`keydown`,k(qs,this),!0)}Js.styles=[v,Ls],r([c()],Js.prototype,`label`,void 0),r([f()],Js.prototype,`anchor`,void 0),r([f()],Js.prototype,`copyState`,void 0),r([f()],Js.prototype,`detailsOpen`,void 0),r([m(`craft-popover`)],Js.prototype,`detailsPopover`,void 0),customElements.get(`craft-link`)||customElements.define(`craft-link`,Js);var rc=class extends u{constructor(...e){super(...e),this.error=``,this.pluginName=``}render(){return p`
      <p class="error" role="alert">${this.error}</p>
      ${this.pluginName?p`<div class="install-plugin">
            <div class="icon" aria-hidden="true"><slot name="icon"></slot></div>
            <div class="plugin">
              <h3>${this.pluginName}</h3>
              <slot name="action"></slot>
            </div>
          </div>`:i}
    `}};rc.styles=a`
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
  `,r([c()],rc.prototype,`error`,void 0),r([c({attribute:`plugin-name`})],rc.prototype,`pluginName`,void 0),customElements.get(`craft-missing-component`)||customElements.define(`craft-missing-component`,rc);var ic=a`
  :host {
    display: inline-flex;
  }

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
    font-variant-numeric: tabular-nums;
    ${ye}
  }
`,ac=new WeakMap,oc=class extends u{constructor(...e){super(...e),this.altText=null,this.badgeCount=null,this.badgeCountSuffix=null,this.max=99,this.variant=`primary`,M(this,ac,`badge-label-${Math.floor(Math.random()*1e9).toString()}`)}connectedCallback(){super.connectedCallback(),this.id||=`badge-${Math.floor(Math.random()*1e9).toString()}`}showCount(){return this.badgeCount!==null&&this.badgeCount>0}truncatedNumber(){let e=this.badgeCount??0,t=e=>new Intl.NumberFormat(document.documentElement.lang||void 0).format(e);return e>this.max?`${t(this.max)}+`:t(e)}getBadgeRole(){return this.altText?`img`:i}renderBadgeContents(){return p`
      ${this.showCount()?p`
            <span class="number">${this.truncatedNumber()}</span>
            <sl-visually-hidden>${this.badgeCountSuffix}</sl-visually-hidden>
          `:i}
      ${this.altText?p`
            <sl-visually-hidden id=${k(ac,this)}
              >${this.altText}</sl-visually-hidden
            >
          `:i}
    `}render(){return p`
      <div
        part="badge"
        class="${C({"badge-indicator":!0,"badge-indicator--with-number":this.showCount(),"badge-indicator--secondary":this.variant===`secondary`,"badge-indicator--inverse":this.variant===`inverse`})}"
        role="${this.getBadgeRole()}"
        aria-labelledby="${this.altText?k(ac,this):i}"
      >
        ${this.renderBadgeContents()}
      </div>
    `}};oc.styles=[ic],r([c({attribute:`alt-text`})],oc.prototype,`altText`,void 0),r([c({attribute:`badge-count`})],oc.prototype,`badgeCount`,void 0),r([c({attribute:`badge-count-suffix`})],oc.prototype,`badgeCountSuffix`,void 0),r([c({type:Number})],oc.prototype,`max`,void 0),r([c()],oc.prototype,`variant`,void 0),customElements.get(`craft-badge-indicator`)||customElements.define(`craft-badge-indicator`,oc);var sc={List:`list`,Tabs:`tabs`};Object.values(sc);var cc=Symbol.for(``),lc=e=>{if(e?.r===cc)return e?._$litStatic$},uc=e=>({_$litStatic$:e,r:cc}),dc=(e,...t)=>({_$litStatic$:t.reduce(((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1]),e[0]),r:cc}),fc=new Map,pc=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],(i=lc(a))!==void 0);)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=fc.get(e))===void 0&&(o.raw=o,fc.set(e,t=o)),n=s}return e(t,...n)})(p),mc=a`
  :host {
    --_padding-inline: var(--c-spacing-md);
    /* The icon column of a row with a prefix. */
    --_prefix-size: calc(24rem / 16);
    /* Enough to center the icon column in a row, border included. */
    --_padding-block: calc(
      (var(--_rail-size) - var(--_prefix-size) - var(--_rail-border) * 2) / 2
    );
    /* The space between the icon column and the label (tighter than the row's gap). */
    --_prefix-gap: var(--c-spacing-sm);
    /* The rule down the side of an inline subnav. */
    --_subnav-rule: 2px;
    /* The square a collapsed row occupies, border included. The row draws a
       transparent border to keep room for its focus state. */
    --_rail-border: 1px;
    --_rail-size: var(--c-nav-item-size, var(--c-size-touch-target));
    /* A row with an icon, less its border, so the icon sits where a collapsed
       row centers it. */
    --_prefixed-padding-inline: calc(
      (var(--_rail-size) - var(--_prefix-size)) / 2 - var(--_rail-border)
    );

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
    /* A full row whether or not there's an icon to fill one. */
    box-sizing: border-box;
    min-block-size: var(--_rail-size);

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
    ${ye}

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
    padding-inline: var(--_prefixed-padding-inline);
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

  /* Not on the page you're on: its selected fill is the state to show. A row
     with its flyout open looks hovered while the pointer is in the flyout. */
  :host(:not([current], [appearance='tabs']))
    .nav-item:not(.nav-item--static):hover:not(:has(craft-button:hover)),
  :host(:not([current], [appearance='tabs'])) .nav-item--flyout-open {
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
  .nav-item:not(.nav-item--static):hover .nav-item__prefix,
  .nav-item--flyout-open .nav-item__prefix {
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
      var(--_prefixed-padding-inline) + var(--_prefix-size) +
        var(--_prefix-gap) - var(--_subnav-rule) - var(--c-spacing-sm) -
        var(--_padding-inline)
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

  :host([appearance='tabs']),
  :host([appearance='tabs']) .nav-item {
    border-radius: 0;
  }

  /* No gap, so the empty suffix column doesn't carry one and leave the bar
     below wider than the label it marks. */
  :host([appearance='tabs']) .nav-item {
    gap: 0;
    padding-inline: 0;
    border-color: transparent;
    background-color: transparent;
  }

  :host([appearance='tabs'][current]) .nav-item {
    color: inherit;
    font-weight: var(--font-weight-semibold);
  }

  :host([appearance='tabs'][active]:not([current])) .nav-item::before {
    display: none;
  }

  :host([appearance='tabs']) .nav-item::after {
    content: '';
    position: absolute;
    inset-block-end: -1px;
    inset-inline: 0;
    block-size: calc(2rem / 16);
    background-color: transparent;
  }

  :host([appearance='tabs'][current]) .nav-item::after {
    background-color: var(
      --c-nav-item-border-active,
      var(--c-color-accent-fill-loud)
    );
  }

  @media (forced-colors: active) {
    :host([appearance='tabs'][current]) .nav-item::after {
      background-color: Highlight;
    }
  }
`,hc=new WeakMap,gc=new WeakMap,_c=new WeakMap,vc=new WeakSet,yc=new WeakMap,bc=new WeakMap,xc=new WeakMap,Sc=new WeakMap,Cc=new WeakMap,wc=new WeakMap,V=class e extends u{get labelNodes(){return Array.from(this.childNodes).filter(e=>e.nodeType===Node.TEXT_NODE||e.nodeType===Node.ELEMENT_NODE&&!e.hasAttribute(`slot`))}get labelText(){return this.labelNodes.map(e=>e.textContent??``).join(` `).replace(/\s+/g,` `).trim()}get hasLabel(){return this.labelNodes.some(e=>e.nodeType!==Node.TEXT_NODE||!!e.textContent?.trim())}get opensInNewTab(){return!!this.href&&(this.external||ke(this.href))}get itemId(){return`item-${this.id}`}get subnavId(){return`${this.id}-subnav`}get ariaCurrentState(){return this.current?this.href?`page`:`true`:this.active?`true`:`false`}constructor(){super(),O(this,vc),this.active=!1,this.current=!1,this.button=!1,this.external=!1,this.indicator=!1,this.iconOnly=!1,this.flush=!1,this.initialState=`closed`,this.appearance=sc.List,this.group=!1,this.togglePosition=`suffix`,this.subnavState=`closed`,this.flyoutOpen=!1,M(this,hc,{element:this,setOpen:e=>{this.flyoutOpen=e},overlayRect:()=>this.shadowRoot?.querySelector(`.flyout`)?.getBoundingClientRect()}),M(this,gc,void 0),this._lightDom=new D(this,{characterData:!0}),M(this,_c,void 0),this.fitFlyout=()=>{let t=this.shadowRoot?.querySelector(`craft-popover`),n=this.shadowRoot?.querySelector(`.flyout`);if(!t||!n)return;let{top:r}=n.getBoundingClientRect(),i=window.innerHeight-r-e.flyoutViewportMargin;if(!window.innerHeight||i<=0){t.style.removeProperty(`--popover-max-block-size`);return}t.style.setProperty(`--popover-max-block-size`,`${i}px`)},M(this,yc,()=>{Fs.requestOpen(k(hc,this))}),M(this,bc,e=>{we(e,this)||Fs.requestClose(k(hc,this))}),M(this,xc,e=>{e.target===e.currentTarget&&(k(Sc,this).call(this,e),this.flyoutOpen=e.type===`craft-show`,this.flyoutOpen||Fs.notifyClosed(k(hc,this)))}),M(this,Sc,e=>{e.target===e.currentTarget&&e.stopPropagation()}),M(this,Cc,e=>{e instanceof KeyboardEvent&&e.key!==`Enter`&&e.key!==` `||e.stopPropagation()}),M(this,wc,e=>{e.preventDefault(),e.stopPropagation(),this.flyoutOpen?(this.flyoutOpen=!1,Fs.notifyClosed(k(hc,this))):Fs.requestOpen(k(hc,this),{immediate:!0})}),this.id=this.id||Math.random().toString(36).substring(2,6)}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`listitem`),this.subnavState=this.active||this.initialState===`open`?`open`:`closed`;let{signal:e}=A(gc,this,new AbortController);this.addEventListener(`mouseenter`,k(yc,this),{signal:e}),this.addEventListener(`mouseleave`,k(bc,this),{signal:e}),this.addEventListener(`focusout`,k(bc,this),{signal:e})}updated(e){e.has(`flyoutOpen`)&&(this.flyoutOpen?j(vc,this,Tc).call(this):j(vc,this,Ec).call(this))}willUpdate(e){(e.has(`active`)||e.has(`initialState`))&&(this.subnavState=this.active||this.initialState===`open`?`open`:`closed`)}disconnectedCallback(){k(gc,this)?.abort(),k(_c,this)?.abort(),Fs.remove(k(hc,this)),super.disconnectedCallback()}toggleSubnav(e){e.preventDefault(),e.stopPropagation(),this.subnavState=this.subnavState===`open`?`closed`:`open`}actionTag(e){return this.href?dc`a`:e||this.button?dc`button`:dc`span`}focus(e){let t=this.shadowRoot?.querySelector(`.nav-item__action-item:is(a, button), .nav-item:is(a, button)`);t?t.focus(e):super.focus(e)}buttonType(e){return!this.href&&(e||this.button)?`button`:i}isStatic(e){return!this.href&&!e&&!this.button}renderIconItem(e,t){let n=this.actionTag(t);return pc`
      <${n}
        class="${C({"nav-item":!0,"nav-item--icon":!0,"nav-item--static":this.isStatic(t),"nav-item--flyout-open":t&&this.flyoutOpen})}"
        id="${this.itemId}"
        type="${this.buttonType(t)}"
        href="${_(this.href||void 0)}"
        target="${this.opensInNewTab?`_blank`:i}"
        rel="${this.opensInNewTab?`noopener`:i}"
        aria-current="${this.href||this.button?this.ariaCurrentState:i}"
        aria-expanded="${t?this.flyoutOpen?`true`:`false`:i}"
        aria-controls="${t?this.subnavId:i}"
        aria-label="${(this.href||e||this.button)&&this.labelText?this.opensInNewTab?`${this.labelText}, ${Oe()}`:this.labelText:i}"
        @click="${t&&!this.href?k(wc,this):i}"
      >
        ${this.renderPrefix()} ${this.renderSuffix(!1)}
      </${n}>
      ${t?p`<div class="rail-toggle">${this.renderFlyoutToggle()}</div>`:i}
      ${t?this.renderFlyout(!0):p`<craft-tooltip
              for="${this.itemId}"
              placement="right"
              @craft-show=${k(Sc,this)}
              @craft-hide=${k(Sc,this)}
              @craft-after-show=${k(Sc,this)}
              @craft-after-hide=${k(Sc,this)}
              ><slot></slot
            ></craft-tooltip>`}
    `}renderFlyout(e){return p`
      <craft-popover
        for="${this.itemId}"
        placement="right-start"
        without-invoker-aria
        .open="${this.flyoutOpen}"
        @craft-show=${k(xc,this)}
        @craft-hide=${k(xc,this)}
        @craft-after-show=${k(Sc,this)}
        @craft-after-hide=${k(Sc,this)}
      >
        <div class="flyout" id="${this.subnavId}">
          ${e?p`<div class="flyout__label"><slot></slot></div>`:i}
          <slot name="subnav"></slot>
        </div>
      </craft-popover>
    `}renderSubnavToggle(){return p`
      <craft-button
        @click="${this.toggleSubnav}"
        @mousedown="${k(Cc,this)}"
        @mouseup="${k(Cc,this)}"
        @keydown="${k(Cc,this)}"
        @keyup="${k(Cc,this)}"
        variant="${Se.Plain}"
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
        @click="${k(wc,this)}"
        @mousedown="${k(Cc,this)}"
        @mouseup="${k(Cc,this)}"
        @keydown="${k(Cc,this)}"
        @keyup="${k(Cc,this)}"
        variant="${Se.Plain}"
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
              @mousedown="${k(Cc,this)}"
              @mouseup="${k(Cc,this)}"
              @click="${k(Cc,this)}"
              @keydown="${k(Cc,this)}"
              @keyup="${k(Cc,this)}"
            ></slot>`}
        <slot name="suffix">
          ${e&&this.togglePosition===`suffix`?this.renderSubnavToggle():i}
          ${t?this.renderFlyoutToggle():i}
        </slot>
      </div>
    `}renderItem(e,t,n){return pc`
      <div
        class="${C({"nav-item":!0,"nav-item--prefixed":t,"nav-item--flush":this.flush,"nav-item--static":this.isStatic(n),"nav-item--flyout-open":n&&this.flyoutOpen})}"
        id="${this.itemId}"
      >
        ${t?this.renderPrefix(e):i}
        ${this.renderInteractiveItem(n)}
        ${this.renderSuffix(e,n)}
      </div>
    `}renderInteractiveItem(e){let t=this.actionTag(e);return pc`
      <${t}
        class="nav-item__action-item"
        type="${this.buttonType(e)}"
        href="${_(this.href||void 0)}"
        target="${this.opensInNewTab?`_blank`:i}"
        rel="${this.opensInNewTab?`noopener`:i}"
        aria-current="${this.href||this.button?this.ariaCurrentState:i}"
        aria-expanded="${e?this.flyoutOpen?`true`:`false`:i}"
        aria-controls="${e?this.subnavId:i}"
        @click="${e&&!this.href?k(wc,this):i}"
      >
        <slot id="${this.id}-label"></slot>${this.opensInNewTab?p`<span class="cp-visually-hidden">${Oe()}</span>`:i}
      </${t}>
    `}render(){let e=y(this,`subnav`),t=this.subnavDisplay??(this.iconOnly?`flyout`:`inline`),n=e&&t===`flyout`,r=e&&!n&&!this.group&&(this.iconOnly||this.hasLabel),a=r&&this.togglePosition===`prefix`||!!this.icon||this.indicator||y(this,`prefix`,`icon`),o=!r||this.subnavState===`open`;return this.group&&this.iconOnly?p`
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
                style="${ae({display:o?`block`:`none`})}"
              >
                <slot name="subnav"></slot>
              </div>
            `:i}
      </li>
    `}};function Tc(){j(vc,this,Ec).call(this);let{signal:e}=A(_c,this,new AbortController);window.addEventListener(`resize`,this.fitFlyout,{signal:e}),requestAnimationFrame(this.fitFlyout)}function Ec(){k(_c,this)?.abort(),A(_c,this,void 0),this.shadowRoot?.querySelector(`craft-popover`)?.style.removeProperty(`--popover-max-block-size`)}V.styles=[h,mc],V.flyoutViewportMargin=16,r([c()],V.prototype,`icon`,void 0),r([c()],V.prototype,`href`,void 0),r([c({type:Boolean,reflect:!0})],V.prototype,`active`,void 0),r([c({type:Boolean,reflect:!0})],V.prototype,`current`,void 0),r([c({type:Boolean,reflect:!0})],V.prototype,`button`,void 0),r([c({type:Boolean})],V.prototype,`external`,void 0),r([c({type:Boolean})],V.prototype,`indicator`,void 0),r([c()],V.prototype,`id`,void 0),r([c({reflect:!0,type:Boolean,attribute:`icon-only`})],V.prototype,`iconOnly`,void 0),r([c({type:Boolean})],V.prototype,`flush`,void 0),r([c({reflect:!0,attribute:`initial-state`})],V.prototype,`initialState`,void 0),r([c({reflect:!0})],V.prototype,`appearance`,void 0),r([c({type:Boolean,reflect:!0})],V.prototype,`group`,void 0),r([c({attribute:`toggle-position`})],V.prototype,`togglePosition`,void 0),r([c({attribute:`subnav-display`,reflect:!0})],V.prototype,`subnavDisplay`,void 0),r([f()],V.prototype,`subnavState`,void 0),r([f()],V.prototype,`flyoutOpen`,void 0),customElements.get(`craft-nav-item`)||customElements.define(`craft-nav-item`,V);var Dc=new WeakMap,Oc=class extends u{constructor(...e){super(...e),this.appearance=sc.List,M(this,Dc,()=>{this.items.forEach(e=>{this.appearance===sc.List?e.removeAttribute(`appearance`):e.setAttribute(`appearance`,this.appearance)})})}get items(){return Array.from(this.children).filter(e=>e instanceof HTMLElement&&e.slot===``)}firstUpdated(e){super.firstUpdated(e),this.shadowRoot?.querySelector(`slot`)?.addEventListener(`slotchange`,k(Dc,this)),k(Dc,this).call(this)}updated(e){super.updated(e),e.has(`appearance`)&&k(Dc,this).call(this)}render(){return p`
      <ul class="nav-list">
        <slot></slot>
      </ul>
    `}};Oc.styles=a`
    :host {
      display: block;
    }

    .nav-list {
      display: grid;
      margin: 0;
      padding: 0;
      list-style: none;
      gap: var(--c-nav-list-gap, var(--c-spacing-xs));
    }

    :host([appearance='tabs']) .nav-list {
      display: flex;
      flex-wrap: wrap;
      gap: var(--c-nav-list-gap, var(--c-spacing-lg));
      border: 0 solid
        var(--c-nav-list-border, var(--c-color-neutral-border-quiet));
      border-block-end-width: 1px;
    }
  `,r([c({reflect:!0})],Oc.prototype,`appearance`,void 0),customElements.get(`craft-nav-list`)||customElements.define(`craft-nav-list`,Oc);var kc=a`
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
    --c-form-control-border-color: var(--color-slate-500);
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
    ${ye}
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
`,Ac={Raised:`raised`,Outline:`outline`,OutlineFill:`outline-fill`,Plain:`plain`,Sunken:`sunken`};Object.values(Ac);var jc={Plain:`plain`,Error:`error`,Code:`code`};Object.values(jc);var Mc=new Set([`clip`,`hidden`]),Nc=class extends pe(u,{customProperty:`--_pane-spacing`,defaultValue:`lg`}){constructor(...e){super(...e),this.appearance=Ac.Raised,this.variant=jc.Plain,this.label=``,this.headingLevel=2,this._hasSlottedHeader=!1,this._hasSlottedFooter=!1,this._scrollable=!1,this._hostLabel=``,this._lightDom=new D(this,{attributeFilter:[`aria-label`],characterData:!0,onChange:()=>this._syncLightDom()}),this._observedBoxes=new Set}disconnectedCallback(){super.disconnectedCallback(),this._resizeObserver?.disconnect(),this._observedBoxes.clear()}get _scroller(){return this.renderRoot?.querySelector(`.cp-pane`)??null}_syncSlotPresence(){this._hasSlottedHeader=y(this,`header`,`title`,`header-actions`),this._hasSlottedFooter=y(this,`footer`,`footer-content`,`feedback`,`actions`,`primary-action`,`secondary-action`)}_syncLightDom(){this._syncSlotPresence(),this._hostLabel=this.getAttribute(`aria-label`)??``,this._syncScrollable(),this._observeScrollable()}_syncScrollable(){let e=this._scroller;if(!e?.isConnected){this._scrollable=!1;return}let{overflowX:t,overflowY:n}=getComputedStyle(e);this._scrollable=!Mc.has(n)&&e.scrollHeight-e.clientHeight>1||!Mc.has(t)&&e.scrollWidth-e.clientWidth>1}_observeScrollable(){if(typeof ResizeObserver>`u`)return;let e=this._resizeObserver??=new ResizeObserver(()=>this._syncScrollable()),t=this._scroller,n=new Set(t?[t,...t.querySelectorAll(`.cp-pane__header, .cp-pane__body, .cp-pane__footer`),...this.children]:[]);for(let t of this._observedBoxes)n.has(t)||(e.unobserve(t),this._observedBoxes.delete(t));for(let t of n)this._observedBoxes.has(t)||(e.observe(t),this._observedBoxes.add(t))}get _scrollRegionLabel(){return this.label||this._hostLabel||n(`Scrollable region`)}focus(e){if(this._scrollable&&this._scroller){this._scroller.focus(e);return}super.focus(e)}updated(e){super.updated(e),this._observeScrollable()}_renderTitle(){let e=uc(`h${Math.min(6,Math.max(1,Number(this.headingLevel)||2))}`);return pc`<${e} class="cp-pane__title">${this.label}</${e}>`}render(){let e=!!this.label||this._hasSlottedHeader;return p`
      <div
        class="cp-pane"
        part="base"
        style="${ae(this.paddingStyles)}"
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
    `}};Nc.styles=[v,kc],r([c({reflect:!0})],Nc.prototype,`appearance`,void 0),r([c({reflect:!0})],Nc.prototype,`variant`,void 0),r([c()],Nc.prototype,`label`,void 0),r([c({type:Number,attribute:`heading-level`})],Nc.prototype,`headingLevel`,void 0),r([f()],Nc.prototype,`_hasSlottedHeader`,void 0),r([f()],Nc.prototype,`_hasSlottedFooter`,void 0),r([f()],Nc.prototype,`_scrollable`,void 0),r([f()],Nc.prototype,`_hostLabel`,void 0),customElements.get(`craft-pane`)||customElements.define(`craft-pane`,Nc);var Pc=`craft-checkbox > input[type="checkbox"], input[type="checkbox"].cp-checkbox, craft-radio > input[type="radio"], input[type="radio"].cp-radio {
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
`,Fc=0,Ic=new WeakMap,H=new WeakSet,Lc=class extends u{constructor(...e){super(...e),O(this,H),this.groups=[],this.value=[],this.lockedPermissions=[],this.name=``,this.disabled=!1,M(this,Ic,++Fc)}updated(e){super.updated(e),(e.has(`value`)||e.has(`groups`)||e.has(`name`)||e.has(`disabled`))&&j(H,this,Jc).call(this)}render(){let e=j(H,this,Bc).call(this);return jt(this.groups,e=>e.handle,(t,n)=>j(H,this,Rc).call(this,t,n,e))}};function Rc(e,t,r){let a=`permission-tree-heading-${k(Ic,this)}-${t}`;return p`
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
                  @click=${()=>j(H,this,Wc).call(this,e.keys,r)}
                >
                  ${j(H,this,Uc).call(this,e.keys,r)?n(`Deselect all`):n(`Select all`)}
                </craft-button>
              </div>
            `:i}
        ${j(H,this,zc).call(this,e.permissions,0,this.disabled,r)}
      </section>
    `}function zc(e,t,n,r){return jt(Object.entries(e),([e])=>e,([e,a])=>{let o=a.key||e,s=j(H,this,Hc).call(this,o,r),c=a.nested??{};return p`
          <ul>
            <li>
              <craft-checkbox
                class=${t>0?`indented`:``}
                style=${`--permission-level: ${t}`}
                .label=${a.label}
                .value=${o}
                .checked=${s}
                .disabled=${n||j(H,this,Vc).call(this,o,r)}
                @input=${e=>e.stopPropagation()}
                @change=${e=>j(H,this,Gc).call(this,e,o,c,r)}
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

              ${Object.keys(c).length?j(H,this,zc).call(this,c,t+1,n||!s,r):i}
            </li>
          </ul>
        `})}function Bc(){return new Set(this.lockedPermissions.map(e=>e.toLowerCase()))}function Vc(e,t){return t.has(e.toLowerCase())}function Hc(e,t){return this.value.includes(e)||j(H,this,Vc).call(this,e,t)}function Uc(e,t){let n=e.filter(e=>!j(H,this,Vc).call(this,e,t));return n.length>0&&n.every(e=>this.value.includes(e))}function Wc(e,t){let n=e.filter(e=>!j(H,this,Vc).call(this,e,t));if(j(H,this,Uc).call(this,e,t)){let e=new Set(n);j(H,this,qc).call(this,this.value.filter(t=>!e.has(t)));return}j(H,this,qc).call(this,[...new Set([...this.value,...n])])}function Gc(e,t,n,r){if(e.stopPropagation(),this.disabled||j(H,this,Vc).call(this,t,r))return;let i=e.currentTarget.checked,a=this.value.indexOf(t);if(i&&a===-1){j(H,this,qc).call(this,[...this.value,t]);return}if(i||a===-1)return;let o=new Set([t,...j(H,this,Kc).call(this,n)]);j(H,this,qc).call(this,this.value.filter(e=>!o.has(e)))}function Kc(e){return Object.values(e).flatMap(e=>[e.key,...j(H,this,Kc).call(this,e.nested??{})])}function qc(e){this.value=e,ht(this),gt(this)}function Jc(){if(this.querySelectorAll(`[data-permission-tree-input]`).forEach(e=>e.remove()),!this.name||this.disabled)return;j(H,this,Yc).call(this,this.name,``);let e=new Set(this.groups.flatMap(e=>e.keys));for(let t of this.value)e.has(t)&&j(H,this,Yc).call(this,`${this.name}[]`,t)}function Yc(e,t){let n=document.createElement(`input`);n.type=`hidden`,n.name=e,n.value=t,n.dataset.permissionTreeInput=``,this.append(n)}Lc.styles=[o(Pc),a`
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
    `],r([c({type:Array})],Lc.prototype,`groups`,void 0),r([c({type:Array})],Lc.prototype,`value`,void 0),r([c({type:Array,attribute:`locked-permissions`})],Lc.prototype,`lockedPermissions`,void 0),r([c()],Lc.prototype,`name`,void 0),r([c({type:Boolean,reflect:!0})],Lc.prototype,`disabled`,void 0),customElements.get(`craft-permission-tree`)||customElements.define(`craft-permission-tree`,Lc);var Xc=a`
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
`,Zc=new WeakMap,Qc=new WeakMap,$c=class extends u{constructor(...e){super(...e),this.progress=0,this.total=0,this.processed=0,this.showStatus=!1,this.pending=!1,this.smooth=!1,this.label=`Progress`,M(this,Zc,0),M(this,Qc,!1)}willUpdate(e){if(super.willUpdate(e),(e.has(`total`)||e.has(`processed`))&&this.total>0){let e=Math.min(100,Math.round(this.processed/this.total*100));e>=100&&k(Zc,this)<100&&A(Qc,this,!0),this.progress=e}e.has(`progress`)&&(this.progress>0&&this.pending&&(this.pending=!1),A(Zc,this,this.progress))}updated(e){super.updated(e),k(Qc,this)&&(A(Qc,this,!1),this.dispatchEvent(new CustomEvent(`craft-complete`,{bubbles:!0,composed:!0})))}get progressPercent(){return Math.min(100,Math.max(0,this.progress))}get statusText(){return this.total>0?`${this.processed} / ${this.total}`:`${this.progressPercent}%`}reset(){this.progress=0,this.processed=0,this.pending=!0,A(Zc,this,0)}show(){this.hidden=!1}hide(){this.hidden=!0}render(){let e={width:this.pending?`100%`:`${this.progressPercent}%`};return p`
      <div
        class=${C({"progress-bar":!0,"progress-bar--pending":this.pending})}
        part="track"
        role="progressbar"
        aria-valuenow=${this.pending?i:this.progressPercent}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.label}
      >
        <div
          class=${C({"progress-bar__fill":!0,"progress-bar__fill--smooth":this.smooth&&!this.pending})}
          part="fill"
          style=${ae(e)}
        ></div>
      </div>
      ${this.showStatus?p`<div class="progress-bar__status" part="status">
            ${this.statusText}
          </div>`:i}
      <span class="visually-hidden">
        ${this.pending?`Loading`:`${this.progressPercent}%`}
      </span>
    `}};$c.styles=[Xc],r([c({type:Number})],$c.prototype,`progress`,void 0),r([c({type:Number})],$c.prototype,`total`,void 0),r([c({type:Number})],$c.prototype,`processed`,void 0),r([c({type:Boolean,attribute:`show-status`})],$c.prototype,`showStatus`,void 0),r([c({type:Boolean,reflect:!0})],$c.prototype,`pending`,void 0),r([c({type:Boolean})],$c.prototype,`smooth`,void 0),r([c({type:String})],$c.prototype,`label`,void 0),customElements.get(`craft-progress-bar`)||customElements.define(`craft-progress-bar`,$c);var el=class extends pt(u,{choice:`craft-radio`,multiple:!1}){constructor(...e){super(...e),this._wrapped=!1,this._resizeObserver=new ResizeObserver(()=>this._fitRow())}render(){return p`${super.render()}
      <div class="fit-probe" aria-hidden="true"></div>
      <div class="row-size" aria-hidden="true"></div>`}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{let e=this.shadowRoot?.querySelector(`.fit-probe`);e&&this.isConnected&&this._resizeObserver.observe(e)})}disconnectedCallback(){super.disconnectedCallback(),this._resizeObserver.disconnect()}_onChoicesChanged(){this._resizeObserver.disconnect();let e=this.shadowRoot?.querySelector(`.fit-probe`);e&&this._resizeObserver.observe(e);for(let e of this.choices)this._resizeObserver.observe(e);this._syncButtons(),this._fitRow()}updated(e){super.updated(e),e.has(`appearance`)&&(this._syncButtons(),this._fitRow())}_syncButtons(){let e=this.appearance,t=e===`buttons`||e===`button-group`,n=e===`cards`||e===`card-group`,r=(e===`button-group`||e===`card-group`)&&!this._wrapped,i=this.choices;this.style.setProperty(`--_card-count`,String(i.length)),i.forEach((e,a)=>{let o=!r||a===0,s=!r||a===i.length-1;e.toggleAttribute(`data-button`,t),e.toggleAttribute(`data-button-start`,t&&o),e.toggleAttribute(`data-button-end`,t&&s),e.toggleAttribute(`data-card`,n),e.toggleAttribute(`data-card-start`,n&&o),e.toggleAttribute(`data-card-end`,n&&s)})}_fitRow(){let e=!1,t=this.appearance;if(t===`button-group`||t===`card-group`){let n=this.choices,r=n.reduce((e,n)=>e+(t===`card-group`?parseFloat(getComputedStyle(n).minWidth):n.getBoundingClientRect().width),-(n.length-1));e=(this.shadowRoot?.querySelector(`.fit-probe`)??this).getBoundingClientRect().width+.5<r}e!==this._wrapped&&(this._wrapped=e,this.toggleAttribute(`data-wrapped`,e),this._syncButtons())}static get styles(){return[ge,le,a`
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
      `]}};r([c({reflect:!0})],el.prototype,`appearance`,void 0),customElements.get(`craft-radio-group`)||customElements.define(`craft-radio-group`,el);var tl=class extends yt(u){constructor(...e){super(...e),this._syncIconOnly=()=>{let e=this.querySelector(`:scope > [slot="label"]`);this.toggleAttribute(`data-icon-only`,!e?.textContent?.trim())}}get slots(){return{...super.slots,input:()=>{let e=document.createElement(`input`);return e.type=`radio`,e}}}render(){return p`<slot name="input"></slot>
      <div class="choice-field__icon" part="icon">
        <slot name="icon"></slot>
      </div>
      <div class="choice-field__label">
        <slot name="label"></slot>
      </div>
      <small class="choice-field__help-text">
        <slot name="help-text"></slot>
      </small>`}static get styles(){return[..._t,a`
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
      `]}firstUpdated(e){super.firstUpdated(e),this.shadowRoot?.querySelector(`slot[name="label"]`)?.addEventListener(`slotchange`,this._syncIconOnly),this._syncIconOnly()}};customElements.get(`craft-radio`)||customElements.define(`craft-radio`,tl);var nl=a`
  :host {
    ${_e}
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

  :host([plain]) {
    justify-content: center;
    inline-size: var(--c-input-height, var(--c-size-control-md));
    padding-inline: 0;
    border-color: transparent;
    background-color: transparent;
    box-shadow: none;
  }

  :host([plain]:focus-visible:not([disabled])) {
    outline-offset: calc(var(--c-focus-outline-width) * -1);
  }

  :host([plain]:hover),
  :host([plain][aria-expanded='true']) {
    background-color: color-mix(
      in oklab,
      var(--c-color-neutral-fill-quiet),
      var(--c-color-mix-hover)
    );
  }

  :host([plain]:active) {
    background-color: color-mix(
      in oklab,
      var(--c-color-neutral-fill-quiet),
      var(--c-color-mix-active)
    );
  }

  :host([plain][disabled]) {
    background-color: transparent;
  }

  :host([plain]) #content-wrapper {
    display: flex;
    flex: none;
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
`,rl=class extends u{constructor(...e){super(...e),this.singleOption=!1,this.disabled=!1,this.plain=!1}render(){return p`<div id="content-wrapper"><slot></slot></div>
      ${this.singleOption||this.plain?``:p`<craft-icon
            class="indicator"
            name="chevron-down"
          ></craft-icon>`}`}};rl.styles=nl,r([c({type:Boolean,attribute:`single-option`,reflect:!0})],rl.prototype,`singleOption`,void 0),r([c({type:Boolean,reflect:!0})],rl.prototype,`disabled`,void 0),r([c({type:Boolean,reflect:!0})],rl.prototype,`plain`,void 0),customElements.get(`craft-select-invoker`)||customElements.define(`craft-select-invoker`,rl);var il=a`
  ${se}

  :host {
    width: 100%;
  }

  :host([small]) .input-group__input {
    --c-input-height: var(--c-size-control-sm);
  }

  .input-group__input {
    ${me}
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
`,al=new WeakMap,ol=new WeakMap,sl=new WeakMap,cl=new WeakMap,ll=new WeakMap,ul=new WeakMap,dl=new WeakMap,U=new WeakSet,fl=new WeakMap,pl=new WeakMap,ml=new WeakMap,hl=new WeakMap,gl=new WeakMap,_l=new WeakMap,vl=new WeakMap,yl=new WeakMap,bl=class extends sr(be(u)){get value(){return k(al,this)}set value(e){let t=k(al,this);A(al,this,e==null?``:String(e)),j(U,this,kl).call(this),this.requestUpdate(`value`,t)}constructor(){super(),O(this,U),this.small=!1,this.required=!1,this.invalid=!1,this.open=!1,M(this,al,``),M(this,ol,``),M(this,sl,!1),M(this,cl,!1),M(this,ll,new vr),M(this,ul,new MutationObserver(e=>{let t=e=>e===this._control||!!this._control?.contains(e)||!!(e instanceof Element?e:e.parentElement)?.closest(`[slot="form-value"]`);e.some(e=>!t(e.target))&&j(U,this,Ol).call(this)})),M(this,dl,new dr(()=>{let e=this.renderRoot.querySelector(`.overlay-layer`),t=xl.call(j(U,this)),n=this._control;return e&&t&&n?{layer:e,pane:t,reference:n}:void 0})),M(this,fl,e=>{let t=e.target;if(k(cl,this)||t.parentElement!==this||t.localName!==`craft-option`||!t.selected)return;let n=k(al,this);A(al,this,t.value),j(U,this,kl).call(this),this.requestUpdate(`value`,n)}),M(this,pl,e=>{e.composedPath().includes(this)||(T(e,this),this.open=!1)}),M(this,ml,e=>{(!(e.relatedTarget instanceof Node)||!this.contains(e.relatedTarget))&&(this.open=!1)}),M(this,hl,()=>{this.open?this.open=!1:j(U,this,Pl).call(this)}),M(this,gl,void 0),M(this,_l,e=>{if(El.call(j(U,this))||e.isComposing)return;if(this.open){j(U,this,Il).call(this,e);return}switch(e.key){case`Enter`:case` `:case`ArrowDown`:case`ArrowUp`:e.preventDefault(),e.repeat||j(U,this,Pl).call(this);return}let t=k(ll,this).match(e,Cl.call(j(U,this)),wl.call(j(U,this)));t&&(e.preventDefault(),j(U,this,Al).call(this,t))}),M(this,vl,e=>{let t=e.target?.closest(`craft-option`);!t||t.disabled||El.call(j(U,this))||(j(U,this,Al).call(this,t),this.open=!1,this._control?.focus())}),M(this,yl,oe(`listbox`)),this.addEventListener(`craft-selected-change`,k(fl,this))}get slots(){return{...super.slots,input:()=>document.createElement(`craft-select-invoker`)}}get _control(){return super._control}get _selectsFirstOption(){return!0}get _plainInvoker(){return!1}connectedCallback(){super.connectedCallback();let e=this._control;e&&!e.hasAttribute(`role`)&&(e.addEventListener(`keydown`,k(_l,this)),e.addEventListener(`click`,k(hl,this)),e.addEventListener(`focusout`,k(ml,this))),k(ul,this).observe(this,{childList:!0,subtree:!0,characterData:!0}),j(U,this,Ol).call(this)}disconnectedCallback(){k(ul,this).disconnect(),k(dl,this).hide(),document.removeEventListener(`pointerdown`,k(pl,this)),k(ll,this).reset(),super.disconnectedCallback()}_formValue(){return k(al,this)}formResetCallback(){this.value=k(ol,this),this._syncFormValue()}_selectedTemplate(e){return e?[...e.childNodes].map(e=>e.cloneNode(!0)):i}updated(e){super.updated(e),e.has(`open`)&&j(U,this,Nl).call(this),(e.has(`disabled`)||e.has(`_formDisabled`)||e.has(`readOnly`)||e.has(`invalid`)||e.has(`required`)||e.has(`open`))&&j(U,this,jl).call(this),(e.has(`name`)||e.has(`disabled`))&&this._syncFormValue(),this.open&&k(dl,this).update()}focus(e){this._control?.focus(e)}_inputGroupInputTemplate(){return p`
      <div class="input-group__input">
        <slot name="input"></slot>
        <div class="overlay-layer" role="none" popover="manual">
          <div id="overlay-content-node-wrapper">
            <div
              id=${k(yl,this)}
              role="listbox"
              aria-label=${j(U,this,Rl).call(this)}
              @mousedown=${e=>e.preventDefault()}
              @click=${k(vl,this)}
            >
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
    `}};function xl(){return this.renderRoot.querySelector(`#overlay-content-node-wrapper`)}function Sl(){return[...this.querySelectorAll(`:scope > craft-option`)].filter(e=>e instanceof $n)}function Cl(){return Sl.call(j(U,this)).filter(e=>!e.hidden)}function wl(){return Sl.call(j(U,this)).find(e=>e.selected)}function Tl(){return this.disabled||this._formDisabled}function El(){return Tl.call(j(U,this))||this.readOnly||Dl.call(j(U,this))}function Dl(){return Sl.call(j(U,this)).length===1}function Ol({waited:e=!1}={}){if(!e&&[...this.querySelectorAll(`:scope > craft-option`)].some(e=>!(e instanceof $n))){customElements.whenDefined(`craft-option`).then(()=>queueMicrotask(()=>j(U,this,Ol).call(this,{waited:!0})));return}if(k(al,this)===``){let e=wl.call(j(U,this));e&&A(al,this,e.value)}j(U,this,kl).call(this,{fallBackToFirst:!0}),!k(sl,this)&&Sl.call(j(U,this)).length&&(A(ol,this,k(al,this)),A(sl,this,!0));let t=k(gl,this);t&&!Sl.call(j(U,this)).includes(t)&&j(U,this,Fl).call(this,Sl.call(j(U,this)).find(e=>e.value===t.value&&!e.disabled)),j(U,this,jl).call(this),this._syncFormValue(),this.requestUpdate(),this.updateComplete.then(()=>j(U,this,Ml).call(this))}function kl({fallBackToFirst:e=!1}={}){let t=Sl.call(j(U,this)),n=t.find(e=>e.value===k(al,this));!n&&e&&this._selectsFirstOption&&(n=t.find(e=>!e.disabled),n&&A(al,this,n.value)),A(cl,this,!0);try{for(let e of t)e.selected=e===n}finally{A(cl,this,!1)}j(U,this,jl).call(this),this._syncFormValue()}function Al(e){e.disabled||e.value===k(al,this)||(this.value=e.value,ht(this),gt(this))}function jl(){let e=this._control;if(!e)return;let t=wl.call(j(U,this)),n=Dl.call(j(U,this));e.id||=this._inputId,e.singleOption=n,e.plain=this._plainInvoker,e.disabled=Tl.call(j(U,this)),s(this._selectedTemplate(t),e),e.setAttribute(`role`,`combobox`),n?(e.removeAttribute(`aria-haspopup`),e.removeAttribute(`aria-expanded`),e.removeAttribute(`aria-activedescendant`)):(e.setAttribute(`aria-haspopup`,`listbox`),e.setAttribute(`aria-expanded`,String(this.open))),e.tabIndex=Tl.call(j(U,this))?-1:0,Tl.call(j(U,this))?e.setAttribute(`aria-disabled`,`true`):e.removeAttribute(`aria-disabled`),this.readOnly||n?e.setAttribute(`aria-readonly`,`true`):e.removeAttribute(`aria-readonly`),this.invalid?e.setAttribute(`aria-invalid`,`true`):e.removeAttribute(`aria-invalid`),this.required&&!n?e.setAttribute(`aria-required`,`true`):e.removeAttribute(`aria-required`)}function Ml(){let e=this.renderRoot.querySelector(`.overlay-layer`),t=xl.call(j(U,this)),n=this._control;if(!e||!t||!n||this.open)return;if(this._plainInvoker){n.style.removeProperty(`min-width`);return}e.style.visibility=`hidden`,e.setAttribute(`data-open`,``),t.style.minWidth=`auto`;let r=t.getBoundingClientRect().width;e.removeAttribute(`data-open`),e.style.removeProperty(`visibility`),r>0&&(n.style.minWidth=`min(${r}px, 100%)`)}function Nl(){let e=this._control;if(this.open&&!El.call(j(U,this))){k(ll,this).reset(),k(dl,this).show(),document.addEventListener(`pointerdown`,k(pl,this));let e=wl.call(j(U,this));j(U,this,Fl).call(this,e?.hidden?void 0:e);return}k(dl,this).hide(),document.removeEventListener(`pointerdown`,k(pl,this)),j(U,this,Fl).call(this,void 0),k(ll,this).reset(),e?.removeAttribute(`aria-activedescendant`)}function Pl(){El.call(j(U,this))||(this.open=!0)}function Fl(e){A(gl,this,e),mr(Sl.call(j(U,this)),e,this._control,{scroll:this.open})}function Il(e){let t=Cl.call(j(U,this));switch(e.key){case`ArrowDown`:case`ArrowUp`:e.preventDefault(),j(U,this,Fl).call(this,hr(t,k(gl,this),e.key===`ArrowDown`?1:-1,{wrap:!1,skipDisabled:!0}));return;case`Home`:case`End`:{e.preventDefault();let n=t.filter(e=>!e.disabled);j(U,this,Fl).call(this,e.key===`Home`?n[0]:n.at(-1));return}case`Enter`:e.preventDefault(),j(U,this,Ll).call(this);return;case` `:if(!k(ll,this).typing){e.preventDefault(),j(U,this,Ll).call(this);return}break;case`Escape`:e.preventDefault(),g(e),this.open=!1;return;case`Tab`:j(U,this,Ll).call(this);return}let n=k(ll,this).match(e,t,k(gl,this));n&&(e.preventDefault(),j(U,this,Fl).call(this,n))}function Ll(){k(gl,this)&&j(U,this,Al).call(this,k(gl,this)),this.open=!1}function Rl(){return this._labelNode?.textContent?.trim()||this.label}bl.styles=[ge,Te,il],r([c({reflect:!0,type:Boolean})],bl.prototype,`small`,void 0),r([c({type:Boolean})],bl.prototype,`required`,void 0),r([c({type:Boolean,reflect:!0})],bl.prototype,`invalid`,void 0),r([c({type:Boolean,reflect:!0})],bl.prototype,`open`,void 0),r([c()],bl.prototype,`value`,null),customElements.get(`craft-select-rich`)||customElements.define(`craft-select-rich`,bl);var zl=a`
  :host {
    display: block;
  }

  :host([swatch-only]) {
    display: inline-block;
    width: auto;
  }

  :host([swatch-only]) .input-group__input ::slotted(.form-control) {
    flex: none;
  }

  @media (forced-colors: active) {
    :host([swatch-only]) {
      --_swatch-only-edge: CanvasText;
    }
  }
`;function Bl(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Vl(e){return e.startsWith(`#`)}var Hl=new WeakMap,Ul=new WeakSet,Wl=class extends bl{constructor(...e){super(...e),O(this,Ul),this.allowTransparent=!1,this.blankLabel=null,this.allowCustom=!1,this.swatchOnly=!1,this.colors=[...We],this.labels={},M(this,Hl,[])}_swatchTemplate(e,t=this._swatchBorder(e)){if(e===`__custom__`)return p`<span
        class="select-color__swatch"
        style="flex:0 0 auto;inline-size:1rem;block-size:1rem;"
        aria-hidden="true"
      ></span>`;let n=e===`__blank__`||e===`transparent`,r=`flex:0 0 auto;inline-size:1rem;block-size:1rem;border-radius:var(--c-radius-full);box-shadow:${[`0 0 0 1px var(--c-select-color-swatch-ring, transparent)`,`0 1px 1px rgb(0 0 0 / 20%)`,`inset 0 0 0 1px ${t}`].join(`, `)};`,i=`var(--c-select-color-swatch-checker, rgb(0 0 0 / 15%))`,a=`background:linear-gradient(45deg, ${i} 25%, transparent 25%),linear-gradient(-45deg, ${i} 25%, transparent 25%),linear-gradient(45deg, transparent 75%, ${i} 75%),linear-gradient(-45deg, transparent 75%, ${i} 75%);background-position:0 0, 0 0.25rem, 0.25rem -0.25rem, -0.25rem 0;background-size:0.5rem 0.5rem;`,o=Vl(e)?e:e===`white`?`var(--c-surface-white)`:`var(--c-color-${e}-fill-quiet)`;return p`<span
      class="select-color__swatch"
      style="${n?r+a:e===``?r:r+`background-color:${o};`}"
      aria-hidden="true"
    ></span>`}_swatchBorder(e){if(Vl(e)||e===`transparent`||e===``)return this._swatchBorder(`__blank__`);switch(e){case`__blank__`:return`var(--c-select-color-swatch-edge, rgb(0 0 0 / 15%))`;case`black`:return`color-mix(in srgb, var(--c-color-black-on-quiet), transparent 80%)`;case`white`:return`var(--c-table-border-color)`;default:return`var(--c-color-${e}-border-quiet)`}}_optionTemplate(e,t){return p`<craft-option .value=${e}>
      <span
        class="select-color__option"
        style="display:flex;align-items:center;gap:var(--c-spacing-sm);"
      >
        ${this._swatchTemplate(e)}
        <span class="select-color__label" style="white-space:nowrap;"
          >${t}</span
        >
      </span>
    </craft-option>`}get _selectsFirstOption(){return!1}get _plainInvoker(){return this.swatchOnly}_selectedTemplate(e){if(!this.swatchOnly)return super._selectedTemplate(e);let t=e?.value===`__custom__`?``:e?.value??``;return p`<span style="display:flex;forced-color-adjust:none;"
        >${this._swatchTemplate(t,`var(--_swatch-only-edge, var(--c-color-neutral-border-normal))`)}</span
      ><span class="sr-only">${e?.textContent?.trim()??``}</span>`}connectedCallback(){j(Ul,this,Gl).call(this),super.connectedCallback()}updated(e){super.updated(e),(e.has(`colors`)||e.has(`labels`)||e.has(`allowTransparent`)||e.has(`blankLabel`)||e.has(`allowCustom`)||e.has(`swatchOnly`))&&j(Ul,this,Gl).call(this)}};function Gl(){let e=document.createElement(`div`);s(p`${this.allowTransparent?this._optionTemplate(`__blank__`,this.blankLabel??n(`Transparent`)):i}${this.colors.map(e=>this._optionTemplate(e,this.labels[e]??(Vl(e)?e:n(Bl(e)))))}${this.allowCustom?this._optionTemplate(`__custom__`,n(`Custom…`)):i}`,e);for(let e of k(Hl,this))e.remove();A(Hl,this,[...e.children]),this.append(...k(Hl,this))}Wl.styles=[...bl.styles,zl],r([c({type:Boolean,reflect:!0,attribute:`allow-transparent`})],Wl.prototype,`allowTransparent`,void 0),r([c({attribute:`blank-label`})],Wl.prototype,`blankLabel`,void 0),r([c({type:Boolean,reflect:!0,attribute:`allow-custom`})],Wl.prototype,`allowCustom`,void 0),r([c({type:Boolean,reflect:!0,attribute:`swatch-only`})],Wl.prototype,`swatchOnly`,void 0),r([c({type:Array})],Wl.prototype,`colors`,void 0),r([c({type:Object})],Wl.prototype,`labels`,void 0),customElements.get(`craft-select-color`)||customElements.define(`craft-select-color`,Wl);var Kl=a`
  ${se}

  :host {
    width: 100%;
  }

  :host([small]) .input-group__input {
    --c-input-height: var(--c-size-control-sm);
  }

  ::slotted(.form-control) {
    ${_e}
  }

  .input-group__input {
    ${me}
  }

  .indicator {
    position: absolute;
    inset-block-start: 50%;
    inset-inline-end: var(--c-input-spacing-inline);
    transform: translateY(-50%);
    width: 1em;
    height: 1em;
  }
`,ql=class extends re(u){constructor(...e){super(...e),this.small=!1}get _control(){return super._control}_inputGroupInputTemplate(){return p`
      <div class="input-group__input">
        <slot name="input"></slot>
        <craft-icon
          class="indicator"
          name="chevron-down"
          style="font-size: 0.8em"
        ></craft-icon>
      </div>
    `}};ql.styles=[ge,Kl],r([c({reflect:!0,type:Boolean})],ql.prototype,`small`,void 0),customElements.get(`craft-select`)||customElements.define(`craft-select`,ql);var Jl=a`
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
`,Yl=new WeakSet,Xl=new WeakMap,Zl=class extends u{constructor(){super(),O(this,Yl),this.min=0,this.max=100,this.step=10,this.value=``,this.disabled=!1,this.readOnly=!1,this.valueText=String,M(this,Xl,e=>{if(!Ql.call(j(Yl,this)))return;let t=j(Yl,this,tu).call(this)?-this.step:this.step,n={ArrowUp:$l.call(j(Yl,this))+this.step,ArrowDown:$l.call(j(Yl,this))-this.step,ArrowRight:$l.call(j(Yl,this))+t,ArrowLeft:$l.call(j(Yl,this))-t,Home:this.min,End:this.max};e.key in n&&(e.preventDefault(),j(Yl,this,nu).call(this,n[e.key]))}),this.addEventListener(`keydown`,k(Xl,this))}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`slider`)}updated(e){super.updated(e),this.setAttribute(`aria-valuemin`,String(this.min)),this.setAttribute(`aria-valuemax`,String(this.max)),this.setAttribute(`aria-valuenow`,String($l.call(j(Yl,this)))),this.setAttribute(`aria-valuetext`,this.valueText($l.call(j(Yl,this)))),this.setAttribute(`aria-readonly`,String(this.readOnly)),this.setAttribute(`aria-disabled`,String(this.disabled)),e.has(`disabled`)&&(this.tabIndex=this.disabled?-1:0)}render(){return p`
      <div class="slide-picker">
        ${j(Yl,this,eu).call(this).map(e=>p`
            <span
              class=${C({"slide-picker__segment":!0,"is-active":e<=$l.call(j(Yl,this)),"is-last-active":e===$l.call(j(Yl,this))})}
              aria-hidden="true"
              @click=${()=>j(Yl,this,nu).call(this,e)}
              title=${this.valueText(e)}
              >${i}</span
            >
          `)}
      </div>
    `}};function Ql(){return!this.readOnly&&!this.disabled}function $l(){return this.value===``?this.min:Number(this.value)}function eu(){let{min:e,max:t,step:n}=this;if(n<=0||t<e)throw Error(`Invalid craft-slide-picker range configuration.`);let r=(t-e)/n;if(!Number.isInteger(r))throw Error(`Invalid craft-slide-picker step configuration for the provided range.`);return Array.from({length:r+1},(t,r)=>e+r*n)}function tu(){return(this.closest(`[dir]`)?.getAttribute(`dir`)??document.documentElement.getAttribute(`dir`))?.toLowerCase()===`rtl`}function nu(e){let t=Math.min(Math.max(e,this.min),this.max);!Ql.call(j(Yl,this))||t===$l.call(j(Yl,this))||(this.value=String(t),this.dispatchEvent(new Event(`input`)))}Zl.styles=[Jl],r([c({type:Number})],Zl.prototype,`min`,void 0),r([c({type:Number})],Zl.prototype,`max`,void 0),r([c({type:Number})],Zl.prototype,`step`,void 0),r([c()],Zl.prototype,`value`,void 0),r([c({type:Boolean,reflect:!0})],Zl.prototype,`disabled`,void 0),r([c({type:Boolean,reflect:!0,attribute:`readonly`})],Zl.prototype,`readOnly`,void 0),r([c({attribute:!1})],Zl.prototype,`valueText`,void 0),customElements.get(`craft-slide-picker-slider`)||customElements.define(`craft-slide-picker-slider`,Zl);var ru=a`
  :host {
    display: block;
  }
`,iu=new WeakMap,au=new WeakSet,ou=new WeakMap,su=class extends sr(be(u)){constructor(...e){super(...e),O(this,au),this.value=0,this.min=0,this.max=100,this.step=10,this.valueUnit=``,M(this,iu,void 0),M(this,ou,e=>{e.stopPropagation(),this.value=Number(e.target.value),this._syncFormValue(),ht(this),gt(this)})}get slots(){return{...super.slots,input:()=>document.createElement(`craft-slide-picker-slider`)}}connectedCallback(){super.connectedCallback(),k(iu,this)??A(iu,this,j(au,this,lu).call(this,this.value)),cu.call(j(au,this))?.addEventListener(`input`,k(ou,this))}disconnectedCallback(){cu.call(j(au,this))?.removeEventListener(`input`,k(ou,this)),super.disconnectedCallback()}_formValue(){return String(this.value)}formResetCallback(){this.value=k(iu,this)??this.min}willUpdate(e){super.willUpdate(e);let t=j(au,this,lu).call(this,this.value);t!==this.value&&(this.value=t)}updated(e){super.updated(e);let t=cu.call(j(au,this));t&&(t.min=this.min,t.max=this.max,t.step=this.step,t.value=String(this.value),t.readOnly=this.readOnly,t.disabled=this.disabled||this._formDisabled,t.valueText=e=>j(au,this,uu).call(this,e))}focus(e){cu.call(j(au,this))?.focus(e)}};function cu(){return this._control}function lu(e){let{min:t,max:n,step:r}=this,i=t+Math.round((Math.min(Math.max(Number.isFinite(e)?e:t,t),n)-t)/r)*r;return Math.min(Math.max(i,t),n)}function uu(e){if(this.valueLabel)return this.valueLabel(e);let t=this.valueUnit.trim(),n=/^\p{L}/u.test(t)?` `:``;return t?`${e}${n}${t}`:`${e}`}su.styles=[ge,ru],r([c({type:Number})],su.prototype,`value`,void 0),r([c({type:Number})],su.prototype,`min`,void 0),r([c({type:Number})],su.prototype,`max`,void 0),r([c({type:Number})],su.prototype,`step`,void 0),r([c({attribute:`value-unit`})],su.prototype,`valueUnit`,void 0),r([c({attribute:!1})],su.prototype,`valueLabel`,void 0),customElements.get(`craft-slide-picker`)||customElements.define(`craft-slide-picker`,su);var du=a`
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
`,W=new WeakSet,fu=new WeakMap,pu=new WeakMap,mu=new WeakMap,hu=new WeakMap,gu=new WeakMap,_u=new WeakMap,vu=new WeakMap,yu=new WeakMap,bu=class extends sr(u){constructor(...e){super(...e),O(this,W),this.min=-45,this.max=45,this.value=0,this.graduationMin=-70,this.graduationMax=70,this.label=n(`Rotate`),M(this,fu,!1),M(this,pu,!1),M(this,mu,0),M(this,hu,0),M(this,gu,0),M(this,_u,0),M(this,vu,!1),M(this,yu,null)}_formValue(){return String(this.value)}_restoreFormValue(e){this.value=Math.min(Math.max(Number(e??0),this.min),this.max)}connectedCallback(){super.connectedCallback(),A(yu,this,new ResizeObserver(()=>j(W,this,Cu).call(this))),k(yu,this).observe(this)}disconnectedCallback(){super.disconnectedCallback(),k(yu,this)?.disconnect(),A(yu,this,null)}firstUpdated(){A(_u,this,(j(W,this,Su).call(this).length-1)*10),j(W,this,Cu).call(this)}updated(e){super.updated(e),(e.has(`value`)||e.has(`min`)||e.has(`max`)||e.has(`graduationMin`)||e.has(`graduationMax`))&&j(W,this,Cu).call(this)}render(){return p`
      <div
        class="slide-rule"
        role="slider"
        tabindex=${xu.call(j(W,this))?0:-1}
        aria-label=${this.label}
        aria-valuemin=${this.min}
        aria-valuemax=${this.max}
        aria-valuenow=${this.value}
        aria-valuetext=${j(W,this,Ou).call(this,this.value)}
        aria-disabled=${xu.call(j(W,this))?`false`:`true`}
        @keydown=${j(W,this,Bu)}
        @pointerdown=${j(W,this,Pu)}
        @pointermove=${j(W,this,Fu)}
        @pointerup=${j(W,this,Iu)}
        @pointercancel=${j(W,this,Lu)}
      >
        <div class="cursor"></div>
        <div class="graduations">
          <div
            class="indicator"
            aria-hidden="true"
            ?hidden=${this.value===0}
          ></div>
          <ul aria-hidden="true">
            ${j(W,this,Su).call(this).map(e=>p`
                <li
                  class=${C({graduation:!0,"main-graduation":e%5==0})}
                  data-graduation=${e}
                >
                  <div class="label">${e}</div>
                </li>
              `)}
          </ul>
        </div>
      </div>
    `}};function xu(){return!this.disabled&&!this._formDisabled}function Su(){let e=[];for(let t=this.graduationMin;t<=this.graduationMax;t++)e.push(t);return e}function Cu(){this._graduations?.offsetWidth&&j(W,this,Eu).call(this),j(W,this,Tu).call(this),!(!this._list||!this._graduations?.offsetWidth)&&(this._list.style.transform=`translateX(${j(W,this,Au).call(this,this.value)}px)`,j(W,this,wu).call(this))}function wu(){k(vu,this)||(A(vu,this,!0),requestAnimationFrame(()=>this._root?.classList.add(`placed`)))}function Tu(){if(!this._indicator)return;let e=(this.graduationMin-this.graduationMax)*-1,t=k(_u,this)/e;this._indicator.style.inlineSize=`${Math.abs(this.value)*t}px`,this._indicator.style.translate=this.value>0?`-100%`:`0`}function Eu(){let e=j(W,this,Su).call(this).length,t=this._list.getBoundingClientRect().width/e;t>0&&A(_u,this,(e-1)*t)}function Du(){let{transform:e}=getComputedStyle(this._list);return!e||e===`none`?0:new DOMMatrixReadOnly(e).m41}function Ou(e){return n(`{num, number} {num, plural, =1{degree} other{degrees}}`,{num:Math.round(e)})}function ku(e){let t=this.graduationMin*-1,n=(this.graduationMin-this.graduationMax)*-1;return(this._graduations.offsetWidth/2+e*-1)/k(_u,this)*n-t}function Au(e){let t=this.graduationMin*-1,n=(this.graduationMin-this.graduationMax)*-1;return-((e+t)*k(_u,this)/n-this._graduations.offsetWidth/2)}function ju(e){let t=Math.min(Math.max(e,this.min),this.max);return t===this.value?!1:(this.value=t,this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),!0)}function Mu(){this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}function Nu(e){this.dispatchEvent(new CustomEvent(e,{detail:{value:this.value},bubbles:!0,composed:!0}))}function Pu(e){A(pu,this,xu.call(j(W,this))&&this._graduations.contains(e.target)&&e.target!==this._graduations),k(pu,this)&&(e.preventDefault(),A(hu,this,e.clientX),A(gu,this,j(W,this,Du).call(this)),A(mu,this,this.value),this._root.setPointerCapture(e.pointerId),j(W,this,Nu).call(this,`craft-drag-start`))}function Fu(e){k(pu,this)&&Math.abs(e.clientX-k(hu,this))>3&&(A(fu,this,!0),this._root.classList.add(`dragging`),e.preventDefault(),j(W,this,zu).call(this,e))}function Iu(e){k(pu,this)&&(k(fu,this)?e.preventDefault():j(W,this,zu).call(this,e),j(W,this,Ru).call(this,e))}function Lu(e){k(pu,this)&&j(W,this,Ru).call(this,e)}function Ru(e){A(fu,this,!1),this._root.classList.remove(`dragging`),this.value!==k(mu,this)&&j(W,this,Mu).call(this),j(W,this,Nu).call(this,`craft-drag-end`),this._root.hasPointerCapture(e.pointerId)&&this._root.releasePointerCapture(e.pointerId),A(hu,this,0),A(pu,this,!1)}function zu(e){let t=k(fu,this)?k(hu,this):this._cursor.getBoundingClientRect().left+this._cursor.offsetWidth/2,n=k(fu,this)?t-e.clientX:e.clientX-t,r=k(gu,this)-n;j(W,this,ju).call(this,j(W,this,ku).call(this,r))}function Bu(e){if(!xu.call(j(W,this)))return;let t=this.value,n;switch(e.key){case`ArrowUp`:case`ArrowRight`:n=j(W,this,ju).call(this,t+1);break;case`ArrowDown`:case`ArrowLeft`:n=j(W,this,ju).call(this,t-1);break;case`PageUp`:n=j(W,this,ju).call(this,t+10);break;case`PageDown`:n=j(W,this,ju).call(this,t-10);break;case`Home`:n=j(W,this,ju).call(this,this.min);break;case`End`:n=j(W,this,ju).call(this,this.max);break;default:return}n&&j(W,this,Mu).call(this),e.preventDefault()}bu.shadowRootOptions={...u.shadowRootOptions,delegatesFocus:!0},bu.styles=[du],r([c({type:Number})],bu.prototype,`min`,void 0),r([c({type:Number})],bu.prototype,`max`,void 0),r([c({type:Number})],bu.prototype,`value`,void 0),r([c({type:Number,attribute:`graduation-min`})],bu.prototype,`graduationMin`,void 0),r([c({type:Number,attribute:`graduation-max`})],bu.prototype,`graduationMax`,void 0),r([c()],bu.prototype,`label`,void 0),r([m(`.slide-rule`)],bu.prototype,`_root`,void 0),r([m(`.graduations`)],bu.prototype,`_graduations`,void 0),r([m(`.graduations ul`)],bu.prototype,`_list`,void 0),r([m(`.cursor`)],bu.prototype,`_cursor`,void 0),r([m(`.indicator`)],bu.prototype,`_indicator`,void 0),customElements.get(`craft-slide-rule`)||customElements.define(`craft-slide-rule`,bu);var Vu=a`
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
`,Hu=class extends u{constructor(...e){super(...e),this.label=null,this.status=null}getLabel(){return!this.label&&this.status?n(`Status: {status}`,{status:this.status}):this.label}render(){return p`
      <span
        class="${C({status:!0,"status--live":this.status===`live`,"status--enabled":this.status===`enabled`,"status--pending":this.status===`pending`,"status--expired":this.status===`expired`,"status--disabled":this.status===`disabled`})}"
        role="${this.getLabel()?`img`:i}"
        aria-label="${this.getLabel()??i}"
      ></span>
    `}};Hu.styles=[Vu],r([c()],Hu.prototype,`label`,void 0),r([c()],Hu.prototype,`status`,void 0),customElements.get(`craft-status`)||customElements.define(`craft-status`,Hu);var Uu=new WeakSet,Wu=new WeakMap,Gu=new WeakMap,Ku=new WeakMap,qu=class extends u{constructor(...e){super(...e),O(this,Uu),this.checked=!1,this.disabled=!1,this.indeterminate=!1,M(this,Wu,()=>j(Uu,this,Ju).call(this)),M(this,Gu,e=>{e.key===` `&&e.preventDefault()}),M(this,Ku,e=>{(e.key===` `||e.key===`Enter`)&&j(Uu,this,Ju).call(this)})}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`switch`),this.addEventListener(`click`,k(Wu,this)),this.addEventListener(`keydown`,k(Gu,this)),this.addEventListener(`keyup`,k(Ku,this))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,k(Wu,this)),this.removeEventListener(`keydown`,k(Gu,this)),this.removeEventListener(`keyup`,k(Ku,this))}updated(e){super.updated(e),e.has(`disabled`)&&(this.tabIndex=this.disabled?-1:0,this.setAttribute(`aria-disabled`,String(this.disabled))),(e.has(`indeterminate`)||e.has(`checked`))&&this.setAttribute(`aria-checked`,this.checked?`true`:this.indeterminate?`mixed`:`false`)}render(){return p`
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
          ${ce}
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
      `]}};function Ju(){this.disabled||(this.focus(),this.checked=!this.checked,ht(this),gt(this))}r([c({type:Boolean,reflect:!0})],qu.prototype,`checked`,void 0),r([c({type:Boolean,reflect:!0})],qu.prototype,`disabled`,void 0),r([c({type:Boolean,reflect:!0})],qu.prototype,`indeterminate`,void 0),customElements.get(`craft-switch-button`)||customElements.define(`craft-switch-button`,qu);var Yu=a`
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
`;function Xu(e){return(e??``).split(/\s+/).filter(Boolean)}function Zu(e){return typeof CSS<`u`&&typeof CSS.escape==`function`?CSS.escape(e):e}var Qu=new WeakMap,$u=new WeakSet,ed=new WeakMap,td=class extends yt(u){constructor(...e){super(...e),O(this,$u),this.size=`medium`,this.onLabel=``,this.offLabel=``,this.indeterminateValue=`-`,this.indeterminate=!1,this.__clickableExternalLabels=new Set,M(this,Qu,!1),this.__onKeydown=e=>{if(e.key!==`ArrowLeft`&&e.key!==`ArrowRight`||this.disabled||e.target!==this._control)return;e.preventDefault();let t=getComputedStyle(this).direction===`rtl`;this._setCheckedState(e.key===(t?`ArrowLeft`:`ArrowRight`))},M(this,ed,e=>{e.target===this._control&&this.__syncHiddenInput()}),this.__onExternalLabelClick=e=>{this.disabled||e.composedPath().includes(this)||this._control?.click()}}get _defaultValue(){return`1`}get _control(){return super._control}get slots(){return{...super.slots,input:()=>{let e=document.createElement(`craft-switch-button`);return e.setAttribute(`size`,this.size),e.setAttribute(`data-tag-name`,`craft-switch-button`),e},"state-description":()=>{let e=document.createElement(`div`);return e.textContent=this._stateDescriptionText,e},"hidden-input":()=>{if(!this.name)return;let e=document.createElement(`input`);return e.type=`hidden`,e.name=this.name,e.value=this._postedValue,e.disabled=this.disabled,e}}}connectedCallback(){this.name||=this._hiddenInputNode?.name??``,super.connectedCallback(),this.__setupExternalLabelClicks(),this.addEventListener(`keydown`,this.__onKeydown),this.addEventListener(`input`,k(ed,this),!0),this.addEventListener(`change`,k(ed,this),!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`keydown`,this.__onKeydown),this.removeEventListener(`input`,k(ed,this),!0),this.removeEventListener(`change`,k(ed,this),!0),this.__teardownExternalLabelClicks()}_onLabelClick(){this.disabled||this._control?.click()}get _hiddenInputNode(){return Array.from(this.children).find(e=>e instanceof HTMLInputElement&&e.slot===`hidden-input`)}get _postedValue(){return this.checked?this.value:this.indeterminate?this.indeterminateValue:``}get _stateDescriptionNode(){return Array.from(this.children).find(e=>e.slot===`state-description`)}get _stateDescriptionText(){return[this.onLabel?n(`Check for {onLabel}.`,{onLabel:this.onLabel}):``,this.offLabel?n(`Uncheck for {offLabel}.`,{offLabel:this.offLabel}):``].filter(Boolean).join(` `)}willUpdate(e){super.willUpdate(e),e.has(`checked`)&&this.checked&&this.indeterminate&&(this.indeterminate=!1)}updated(e){super.updated(e),(e.has(`onLabel`)||e.has(`offLabel`))&&this.__syncStateDescription(),[`checked`,`indeterminate`,`value`,`indeterminateValue`,`disabled`,`size`].some(t=>e.has(t))&&(this.__syncSwitchButton(),this.__syncHiddenInput()),(e.has(`checked`)||e.has(`indeterminate`))&&this.__syncToggleTargets()}__syncToggleTargets(){let e=this._control;if(!e)return;let t=e.getAttribute(`data-target`),n=e.getAttribute(`data-reverse-target`);if(!t&&!n)return;let r=window.jQuery;r&&r(e).data?.(`fieldtoggle`)||(this.__toggleTargets(t,this.checked),this.__toggleTargets(n,!this.checked))}__toggleTargets(e,t){if(!e)return;let n=/^[#.]/.test(e)?e:`#${e}`,r=this.getRootNode(),i=!1;for(let e of r.querySelectorAll(n))e.classList.contains(`hidden`)===t&&(e.classList.toggle(`hidden`,!t),i=!0);i&&t&&window.dispatchEvent(new Event(`resize`))}_setCheckedState(e){if(this.disabled)return;let t=this.indeterminate;this.checked===e&&!t||(this.indeterminate=!1,this.checked=e,this.__dispatchNativeChange())}get on(){return this.checked}get postedValue(){return this._postedValue}turnOn(e=!1){j($u,this,nd).call(this,()=>this._setCheckedState(!0),e)}turnOff(e=!1){j($u,this,nd).call(this,()=>this._setCheckedState(!1),e)}turnIndeterminate(e=!1){j($u,this,nd).call(this,()=>{this.indeterminate&&!this.checked||(this.checked=!1,this.indeterminate=!0,this.__dispatchNativeChange())},e)}__dispatchNativeChange(){k(Qu,this)||this._control&&gt(this._control)}__setupExternalLabelClicks(){let e=this._control;if(!e)return;let t=this.getRootNode(),n=new Set(Xu(e.getAttribute(`aria-labelledby`)).map(e=>t.getElementById?.(e)).filter(e=>e instanceof HTMLLabelElement).filter(e=>e!==this._labelNode));if(e.id)for(let r of t.querySelectorAll(`label[for="${Zu(e.id)}"]`))n.add(r);for(let e of n)this.__clickableExternalLabels.has(e)||(e.addEventListener(`click`,this.__onExternalLabelClick),this.__clickableExternalLabels.add(e))}__teardownExternalLabelClicks(){for(let e of this.__clickableExternalLabels)e.removeEventListener(`click`,this.__onExternalLabelClick);this.__clickableExternalLabels.clear()}__syncSwitchButton(){let e=this._control;if(!e)return;e.getAttribute(`size`)!==this.size&&e.setAttribute(`size`,this.size);let t=this.indeterminate&&!this.checked;e.indeterminate!==t&&(e.indeterminate=t)}__syncHiddenInput(){let e=this._hiddenInputNode;e&&(e.value=this._postedValue,e.disabled=this.disabled,this.name&&e.name!==this.name&&(e.name=this.name))}__syncStateDescription(){let e=this._stateDescriptionNode;if(!e)return;let t=this._stateDescriptionText;e.textContent=t,t?this.addToAriaDescribedBy(e,{idPrefix:`state-description`}):this.removeFromAriaDescribedBy(e)}render(){return p`
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
    `}};function nd(e,t){if(!this.disabled){if(!t){e();return}A(Qu,this,!0),e(),A(Qu,this,!1)}}td.styles=[..._t,se,Yu],r([c({type:String,reflect:!0})],td.prototype,`size`,void 0),r([c({type:String,attribute:`on-label`})],td.prototype,`onLabel`,void 0),r([c({type:String,attribute:`off-label`})],td.prototype,`offLabel`,void 0),r([c({attribute:`indeterminate-value`})],td.prototype,`indeterminateValue`,void 0),r([c({type:Boolean,reflect:!0})],td.prototype,`indeterminate`,void 0),customElements.get(`craft-switch`)||customElements.define(`craft-switch`,td);var rd=a`
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
`,id={BlockStart:`block-start`,BlockEnd:`block-end`,InlineStart:`inline-start`,InlineEnd:`inline-end`};Object.values(id);var ad={Line:`line`,Fill:`fill`};Object.values(ad);var od={Horizontal:`horizontal`,Vertical:`vertical`};Object.values(od);var sd=[id.InlineStart,id.InlineEnd],cd={horizontal:new Set([`ArrowLeft`,`ArrowRight`,`Home`,`End`]),vertical:new Set([`ArrowUp`,`ArrowDown`,`Home`,`End`])},ld=new WeakMap,G=new WeakSet,ud=new WeakMap,dd=new WeakMap,fd=new WeakMap,pd=new WeakMap,md=new WeakMap,hd=new WeakMap,gd=new WeakMap,_d=new WeakMap,vd=new WeakMap,yd=new WeakMap,bd=new WeakMap,xd=class extends u{constructor(...e){super(...e),O(this,G),M(this,ld,0),this.placement=id.BlockStart,this.appearance=ad.Line,this.label=null,this.equalWidth=!1,this.syncLocationHash=!0,this.size=`medium`,M(this,ud,[]),M(this,dd,!1),M(this,fd,[]),M(this,pd,null),M(this,md,null),M(this,hd,void 0),M(this,gd,!1),M(this,_d,()=>{let e=decodeURIComponent(window.location.hash.slice(1));if(e===``)return;let t=K.call(j(G,this)).findIndex((t,n)=>j(G,this,jd).call(this,n)===e);t>=0&&t!==this.selectedIndex&&(this.selectedIndex=t)}),M(this,vd,()=>{j(G,this,Nd).call(this),!k(dd,this)&&this.tabs.length!==this.panels.length&&console.warn(`The amount of tabs (${this.tabs.length}) doesn't match the amount of panels (${this.panels.length}).`),K.call(j(G,this)).forEach((e,t)=>{let n=()=>j(G,this,Vd).call(this,t,!0),r=e=>{Cd.call(j(G,this)).has(e.key)&&e.preventDefault()},i=e=>j(G,this,Hd).call(this,e);e.addEventListener(`click`,n),e.addEventListener(`keydown`,r),e.addEventListener(`keyup`,i),k(ud,this).push(()=>{e.removeEventListener(`click`,n),e.removeEventListener(`keydown`,r),e.removeEventListener(`keyup`,i)})}),j(G,this,Od).call(this)||j(G,this,Pd).call(this)}),M(this,yd,()=>{k(gd,this)||(A(gd,this,!0),requestAnimationFrame(()=>{A(gd,this,!1),j(G,this,Id).call(this)}))}),M(this,bd,e=>{e.target===e.currentTarget&&e.stopPropagation()})}get selectedIndex(){return k(ld,this)}set selectedIndex(e){A(ld,this,e),k(dd,this)||j(G,this,Pd).call(this)}get layout(){return Sd.call(j(G,this))?od.Vertical:od.Horizontal}set layout(e){this.placement=e===od.Vertical?id.InlineStart:id.BlockStart}get tabs(){return j(G,this,wd).call(this,`tab`)}get panels(){return j(G,this,wd).call(this,`panel`)}refresh(){j(G,this,Pd).call(this),j(G,this,Id).call(this)}firstUpdated(e){super.firstUpdated(e),A(dd,this,K.call(j(G,this)).some(e=>e.controls));let t=this.shadowRoot?.querySelector(`slot[name="tab"]`);t?.addEventListener(`slotchange`,k(vd,this)),this.shadowRoot?.querySelector(`slot[name="panel"]`)?.addEventListener(`slotchange`,k(vd,this)),k(vd,this).call(this),A(md,this,this.selectedIndex),this.syncLocationHash&&k(_d,this).call(this),t?.addEventListener(`slotchange`,k(yd,this)),j(G,this,Dd).call(this),j(G,this,Id).call(this),this.label||console.error("<craft-tabs> needs a `label` naming what its tabs switch between.",this)}connectedCallback(){super.connectedCallback(),this.hasUpdated&&(k(vd,this).call(this),j(G,this,Dd).call(this))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`hashchange`,k(_d,this)),j(G,this,Nd).call(this),k(hd,this)?.disconnect(),A(hd,this,void 0)}updated(e){super.updated(e),!(e.has(`selectedIndex`)&&j(G,this,Od).call(this))&&(e.has(`selectedIndex`)&&(k(dd,this)&&j(G,this,Pd).call(this),k(md,this)!==null&&this.selectedIndex!==k(md,this)&&(j(G,this,Md).call(this),this.dispatchEvent(new CustomEvent(`craft-tab-show`))),A(md,this,this.selectedIndex)),(e.has(`selectedIndex`)||e.has(`placement`)||e.has(`size`)||e.has(`equalWidth`))&&j(G,this,Id).call(this))}render(){return p`
      <div class="tabs" part="base">
        <div class="tabs__strip" part="strip">
          <div
            class="tabs__tab-group"
            part="tab-group"
            role="tablist"
            aria-label="${this.label||i}"
            aria-orientation="${Sd.call(j(G,this))?`vertical`:`horizontal`}"
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
            @craft-show=${k(bd,this)}
            @craft-hide=${k(bd,this)}
            @craft-after-show=${k(bd,this)}
            @craft-after-hide=${k(bd,this)}
            @craft-select=${k(bd,this)}
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
    `}};function Sd(){return sd.includes(this.placement)}function Cd(){return cd[Sd.call(j(G,this))?`vertical`:`horizontal`]}function wd(e){return Array.from(this.children).filter(t=>t instanceof HTMLElement&&t.slot===e)}function K(){return this.tabs}function Td(){return this.shadowRoot?.querySelector(`.tabs__tab-group`)??null}function Ed(){return this.shadowRoot?.querySelector(`.tabs__overflow`)??null}function Dd(){this.syncLocationHash&&window.addEventListener(`hashchange`,k(_d,this)),A(hd,this,new ResizeObserver(k(yd,this))),k(hd,this).observe(this)}function Od(){if(j(G,this,kd).call(this,this.selectedIndex))return!1;let e=K.call(j(G,this)).findIndex((e,t)=>j(G,this,kd).call(this,t));return e<0||e===this.selectedIndex?!1:(this.selectedIndex=e,!0)}function kd(e){let t=K.call(j(G,this))[e];return!!t&&!t.disabled&&(k(dd,this)||e<this.panels.length)}function Ad(){K.call(j(G,this)).forEach((e,t)=>{e.setAttribute(`tabindex`,t===this.selectedIndex?`0`:`-1`)})}function jd(e){return K.call(j(G,this))[e]?.controls||null}function Md(){let e=this.syncLocationHash?j(G,this,jd).call(this,this.selectedIndex):null;if(e===null)return;let t=new URL(window.location.href);t.hash=e,window.history.replaceState(window.history.state,``,t)}function Nd(){for(;k(ud,this).length;)k(ud,this).pop()?.()}function Pd(){if(!this.hasUpdated)return;let e=this.panels,t=K.call(j(G,this)).map((t,n)=>k(dd,this)?j(G,this,Fd).call(this,t):e[n]??null),n=t.some(Boolean);K.call(j(G,this)).forEach((e,r)=>{let i=r===this.selectedIndex,a=t[r];if(e.id||=oe(`tab`),e.setAttribute(`role`,`tab`),e.toggleAttribute(`selected`,i),e.setAttribute(`aria-selected`,String(i)),!a){k(dd,this)&&n&&console.error(`<craft-tabs> found no panel with id "${e.controls}".`,e);return}a.id||=oe(`panel`),e.setAttribute(`aria-controls`,a.id),a.setAttribute(`role`,`tabpanel`),a.setAttribute(`aria-labelledby`,e.id),a.hasAttribute(`tabindex`)||a.setAttribute(`tabindex`,`0`),k(dd,this)&&a.classList.toggle(`hidden`,!i),a.toggleAttribute(`selected`,i)}),k(dd,this)||e.slice(K.call(j(G,this)).length).forEach(e=>e.removeAttribute(`selected`)),j(G,this,Ad).call(this)}function Fd(e){return e.controls?document.getElementById(e.controls):null}function Id(){let e=Td.call(j(G,this)),t=Ed.call(j(G,this)),n=K.call(j(G,this));if(!e||!t)return;if(Sd.call(j(G,this))||this.equalWidth||n.length===0){j(G,this,Rd).call(this,[]);return}n.forEach(e=>e.removeAttribute(`hidden`)),t.hidden=!0,e.classList.add(`tabs__tab-group--measuring`);let r=j(G,this,Ld).call(this,e),i=n.map(e=>e.offsetWidth);if(e.classList.remove(`tabs__tab-group--measuring`),i.reduce((e,t,n)=>e+t+(n?r:0),0)<=e.clientWidth+1){j(G,this,Rd).call(this,[]);return}t.hidden=!1;let a=e.clientWidth,o=[],s=0;for(let e=0;e<n.length;e++){let t=i[e]+(o.length?r:0);if(s+t>a+1)break;s+=t,o.push(e)}let c=this.selectedIndex;if(c>=0&&c<n.length&&!o.includes(c)){let e=i[c];for(;o.length&&s+e+r>a;){let e=o.pop();s-=i[e]+(o.length?r:0)}o.push(c)}let l=new Set(o);j(G,this,Rd).call(this,n.map((e,t)=>t).filter(e=>!l.has(e)))}function Ld(e){let t=parseFloat(getComputedStyle(e).columnGap);return Number.isFinite(t)?t:0}function Rd(e){let t=Ed.call(j(G,this)),n=new Set(e);if(K.call(j(G,this)).forEach((e,t)=>{e.toggleAttribute(`hidden`,n.has(t))}),A(fd,this,e),!t)return;t.hidden=e.length===0;let r=JSON.stringify(e.map(e=>{let t=K.call(j(G,this))[e];return[e,t.textContent?.trim()??``,t.disabled]}));r!==k(pd,this)&&(A(pd,this,r),t.actions=j(G,this,zd).call(this))}function zd(){return k(fd,this).map(e=>{let t=K.call(j(G,this))[e];return{label:t.textContent?.trim()??``,disabled:t.disabled,onClick:()=>j(G,this,Bd).call(this,e)}})}function Bd(e){let t=K.call(j(G,this))[e];if(!t||!j(G,this,kd).call(this,e))return;let n=Ed.call(j(G,this));n&&(n.open=!1),this.selectedIndex=e,j(G,this,Id).call(this),t.focus()}function Vd(e,t){let n=K.call(j(G,this))[e];!n||!j(G,this,kd).call(this,e)||(this.selectedIndex=e,t&&n.focus())}function Hd(e){if(!Cd.call(j(G,this)).has(e.key))return;let t=j(G,this,Ud).call(this,e.key);t!==-1&&j(G,this,Vd).call(this,t,!0)}function Ud(e){let t=K.call(j(G,this)),n=e=>j(G,this,kd).call(this,e)&&!t[e].hidden;if(e===`Home`)return t.findIndex((e,t)=>n(t));if(e===`End`){for(let e=t.length-1;e>=0;e--)if(n(e))return e;return-1}let r=e===`ArrowRight`||e===`ArrowDown`?1:-1;for(let e=1;e<=t.length;e++){let i=((this.selectedIndex+r*e)%t.length+t.length)%t.length;if(n(i))return i}return-1}xd.styles=[v,rd],r([c({type:Number,attribute:`selected-index`,reflect:!0})],xd.prototype,`selectedIndex`,null),r([c({reflect:!0})],xd.prototype,`placement`,void 0),r([c({reflect:!0})],xd.prototype,`appearance`,void 0),r([c()],xd.prototype,`label`,void 0),r([c({type:Boolean,reflect:!0,attribute:`equal-width`})],xd.prototype,`equalWidth`,void 0),r([c({attribute:`sync-location-hash`,converter:{fromAttribute:e=>e!==`false`}})],xd.prototype,`syncLocationHash`,void 0),r([c({reflect:!0})],xd.prototype,`layout`,null),r([c({reflect:!0})],xd.prototype,`size`,void 0),xd.disableWarning?.(`change-in-update`),customElements.get(`craft-tabs`)||customElements.define(`craft-tabs`,xd);var Wd=a`
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
    ${ye}
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
`,Gd=class extends u{constructor(...e){super(...e),this.disabled=!1,this.controls=null,this._lightDom=new D(this,{characterData:!0})}get selected(){return this.hasAttribute(`selected`)}render(){return p`<slot name="prefix" class="tab__prefix"></slot
      ><span class="tab__label" data-text="${this.textContent?.trim()??``}"
        ><span class="tab__text"><slot></slot></span></span
      ><slot name="suffix" class="tab__suffix"></slot>`}};Gd.styles=[v,Wd],r([c({type:Boolean,reflect:!0})],Gd.prototype,`disabled`,void 0),r([c({reflect:!0})],Gd.prototype,`controls`,void 0),customElements.get(`craft-tab`)||customElements.define(`craft-tab`,Gd);var Kd=class{diff(e,t,n={}){let r;typeof n==`function`?(r=n,n={}):`callback`in n&&(r=n.callback);let i=this.castInput(e,n),a=this.castInput(t,n),o=this.removeEmpty(this.tokenize(i,n)),s=this.removeEmpty(this.tokenize(a,n));return this.diffWithOptionsObj(o,s,n,r)}diffWithOptionsObj(e,t,n,r){let i=e=>{if(e=this.postProcess(e,n),r){setTimeout(function(){r(e)},0);return}else return e},a=t.length,o=e.length,s=1,c=a+o;n.maxEditLength!=null&&(c=Math.min(c,n.maxEditLength));let l=n.timeout??1/0,u=Date.now()+l,d=[{oldPos:-1,lastComponent:void 0}],f=this.extractCommon(d[0],t,e,0,n);if(d[0].oldPos+1>=o&&f+1>=a)return i(this.buildValues(d[0].lastComponent,t,e));let p=-1/0,m=1/0,h=()=>{for(let r=Math.max(p,-s);r<=Math.min(m,s);r+=2){let s,c=d[r-1],l=d[r+1];c&&(d[r-1]=void 0);let u=!1;if(l){let e=l.oldPos-r;u=l&&0<=e&&e<a}let h=c&&c.oldPos+1<o;if(!u&&!h){d[r]=void 0;continue}if(s=!h||u&&c.oldPos<l.oldPos?this.addToPath(l,!0,!1,0,n):this.addToPath(c,!1,!0,1,n),f=this.extractCommon(s,t,e,r,n),s.oldPos+1>=o&&f+1>=a)return i(this.buildValues(s.lastComponent,t,e))||!0;d[r]=s,s.oldPos+1>=o&&(m=Math.min(m,r-1)),f+1>=a&&(p=Math.max(p,r+1))}s++};if(r)(function e(){setTimeout(function(){if(s>c||Date.now()>u)return r(void 0);h()||e()},0)})();else for(;s<=c&&Date.now()<=u;){let e=h();if(e)return e}}addToPath(e,t,n,r,i){let a=e.lastComponent;return a&&!i.oneChangePerToken&&a.added===t&&a.removed===n?{oldPos:e.oldPos+r,lastComponent:{count:a.count+1,added:t,removed:n,previousComponent:a.previousComponent}}:{oldPos:e.oldPos+r,lastComponent:{count:1,added:t,removed:n,previousComponent:a}}}extractCommon(e,t,n,r,i){let a=t.length,o=n.length,s=e.oldPos,c=s-r,l=0;for(;c+1<a&&s+1<o&&this.equals(n[s+1],t[c+1],i);)c++,s++,l++,i.oneChangePerToken&&(e.lastComponent={count:1,previousComponent:e.lastComponent,added:!1,removed:!1});return l&&!i.oneChangePerToken&&(e.lastComponent={count:l,previousComponent:e.lastComponent,added:!1,removed:!1}),e.oldPos=s,c}equals(e,t,n){return n.comparator?n.comparator(e,t):e===t||!!n.ignoreCase&&e.toLowerCase()===t.toLowerCase()}removeEmpty(e){let t=[];for(let n=0;n<e.length;n++)e[n]&&t.push(e[n]);return t}castInput(e,t){return e}tokenize(e,t){return Array.from(e)}join(e){return e.join(``)}postProcess(e,t){return e}get useLongestToken(){return!1}buildValues(e,t,n){let r=[],i;for(;e;)r.push(e),i=e.previousComponent,delete e.previousComponent,e=i;r.reverse();let a=r.length,o=0,s=0,c=0;for(;o<a;o++){let e=r[o];if(e.removed)e.value=this.join(n.slice(c,c+e.count)),c+=e.count;else{if(!e.added&&this.useLongestToken){let r=t.slice(s,s+e.count);r=r.map(function(e,t){let r=n[c+t];return r.length>e.length?r:e}),e.value=this.join(r)}else e.value=this.join(t.slice(s,s+e.count));s+=e.count,e.added||(c+=e.count)}}return r}};new class extends Kd{};function qd(e,t){let n;for(n=0;n<e.length&&n<t.length;n++)if(e[n]!=t[n])return e.slice(0,n);return e.slice(0,n)}function Jd(e,t){let n;if(!e||!t||e[e.length-1]!=t[t.length-1])return``;for(n=0;n<e.length&&n<t.length;n++)if(e[e.length-(n+1)]!=t[t.length-(n+1)])return e.slice(-n);return e.slice(-n)}function Yd(e,t,n){if(e.slice(0,t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't start with prefix ${JSON.stringify(t)}; this is a bug`);return n+e.slice(t.length)}function Xd(e,t,n){if(!t)return e+n;if(e.slice(-t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't end with suffix ${JSON.stringify(t)}; this is a bug`);return e.slice(0,-t.length)+n}function Zd(e,t){return Yd(e,t,``)}function Qd(e,t){return Xd(e,t,``)}function $d(e,t){return t.slice(0,ef(e,t))}function ef(e,t){let n=0;e.length>t.length&&(n=e.length-t.length);let r=t.length;e.length<t.length&&(r=e.length);let i=Array(r),a=0;i[0]=0;for(let e=1;e<r;e++){for(t[e]==t[a]?i[e]=i[a]:i[e]=a;a>0&&t[e]!=t[a];)a=i[a];t[e]==t[a]&&a++}a=0;for(let r=n;r<e.length;r++){for(;a>0&&e[r]!=t[a];)a=i[a];e[r]==t[a]&&a++}return a}function tf(e,t){let n=[];for(let r of Array.from(t.segment(e))){let e=r.segment;n.length&&/\s/.test(n[n.length-1])&&/\s/.test(e)?n[n.length-1]+=e:n.push(e)}return n}function nf(e,t){if(t)return af(e,t)[1];let n;for(n=e.length-1;n>=0&&e[n].match(/\s/);n--);return e.substring(n+1)}function rf(e,t){if(t)return af(e,t)[0];let n=e.match(/^\s*/);return n?n[0]:``}function af(e,t){if(!t)return[rf(e),nf(e)];if(t.resolvedOptions().granularity!=`word`)throw Error(`The segmenter passed must have a granularity of "word"`);let n=tf(e,t),r=n[0],i=n[n.length-1];return[/\s/.test(r)?r:``,/\s/.test(i)?i:``]}var of=`a-zA-Z0-9_\\u{AD}\\u{C0}-\\u{D6}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}`,sf=RegExp(`[${of}]+|\\s+|[^${of}]`,`ug`);new class extends Kd{equals(e,t,n){return n.ignoreCase&&(e=e.toLowerCase(),t=t.toLowerCase()),e.trim()===t.trim()}tokenize(e,t={}){let n;if(t.intlSegmenter){let r=t.intlSegmenter;if(r.resolvedOptions().granularity!=`word`)throw Error(`The segmenter passed must have a granularity of "word"`);n=tf(e,r)}else n=e.match(sf)||[];let r=[],i=null;return n.forEach(e=>{/\s/.test(e)?i==null?r.push(e):r.push(r.pop()+e):i!=null&&/\s/.test(i)?r[r.length-1]==i?r.push(r.pop()+e):r.push(i+e):r.push(e),i=e}),r}join(e){return e.map((e,t)=>t==0?e:e.replace(/^\s+/,``)).join(``)}postProcess(e,t){if(!e||t.oneChangePerToken)return e;let n=null,r=null,i=null;return e.forEach(e=>{e.added?r=e:e.removed?i=e:((r||i)&&cf(n,i,r,e,t.intlSegmenter),n=e,r=null,i=null)}),(r||i)&&cf(n,i,r,null,t.intlSegmenter),e}};function cf(e,t,n,r,i){if(t&&n){let[a,o]=af(t.value,i),[s,c]=af(n.value,i);if(e){let r=qd(a,s);e.value=Xd(e.value,s,r),t.value=Zd(t.value,r),n.value=Zd(n.value,r)}if(r){let e=Jd(o,c);r.value=Yd(r.value,c,e),t.value=Qd(t.value,e),n.value=Qd(n.value,e)}}else if(n){if(e){let e=rf(n.value,i);n.value=n.value.substring(e.length)}if(r){let e=rf(r.value,i);r.value=r.value.substring(e.length)}}else if(e&&r){let n=rf(r.value,i),[a,o]=af(t.value,i),s=qd(n,a);t.value=Zd(t.value,s);let c=Jd(Zd(n,s),o);t.value=Qd(t.value,c),r.value=Yd(r.value,n,c),e.value=Xd(e.value,n,n.slice(0,n.length-c.length))}else if(r){let e=rf(r.value,i),n=$d(nf(t.value,i),e);t.value=Qd(t.value,n)}else if(e){let n=$d(nf(e.value,i),rf(t.value,i));t.value=Zd(t.value,n)}}var lf=new class extends Kd{tokenize(e){let t=RegExp(`(\\r?\\n)|[${of}]+|[^\\S\\n\\r]+|[^${of}]`,`ug`);return e.match(t)||[]}};function uf(e,t,n){return lf.diff(e,t,n)}new class extends Kd{constructor(){super(...arguments),this.tokenize=df}equals(e,t,n){return n.ignoreWhitespace?((!n.newlineIsToken||!e.includes(`
`))&&(e=e.trim()),(!n.newlineIsToken||!t.includes(`
`))&&(t=t.trim())):n.ignoreNewlineAtEof&&!n.newlineIsToken&&(e.endsWith(`
`)&&(e=e.slice(0,-1)),t.endsWith(`
`)&&(t=t.slice(0,-1))),super.equals(e,t,n)}};function df(e,t){t.stripTrailingCr&&(e=e.replace(/\r\n/g,`
`));let n=[],r=e.split(/(\n|\r\n)/);r[r.length-1]||r.pop();for(let e=0;e<r.length;e++){let i=r[e];e%2&&!t.newlineIsToken?n[n.length-1]+=i:n.push(i)}return n}function ff(e){return e==`.`||e==`!`||e==`?`}new class extends Kd{tokenize(e){let t=[],n=0;for(let r=0;r<e.length;r++){if(r==e.length-1){t.push(e.slice(n));break}if(ff(e[r])&&e[r+1].match(/\s/)){for(t.push(e.slice(n,r+1)),r=n=r+1;e[r+1]?.match(/\s/);)r++;t.push(e.slice(n,r+1)),n=r+1}}return t}},new class extends Kd{tokenize(e){return e.split(/([{}:;,]|\s+)/)}},new class extends Kd{constructor(){super(...arguments),this.tokenize=df}get useLongestToken(){return!0}castInput(e,t){let{undefinedReplacement:n,stringifyReplacer:r=(e,t)=>t===void 0?n:t}=t;return typeof e==`string`?e:JSON.stringify(pf(e,null,null,r),null,`  `)}equals(e,t,n){return super.equals(e.replace(/,([\r\n])/g,`$1`),t.replace(/,([\r\n])/g,`$1`),n)}};function pf(e,t,n,r,i){t||=[],n||=[],r&&(e=r(i===void 0?``:i,e));let a;for(a=0;a<t.length;a+=1)if(t[a]===e)return n[a];let o;if(Object.prototype.toString.call(e)===`[object Array]`){for(t.push(e),o=Array(e.length),n.push(o),a=0;a<e.length;a+=1)o[a]=pf(e[a],t,n,r,String(a));return t.pop(),n.pop(),o}if(e&&e.toJSON&&(e=e.toJSON()),typeof e==`object`&&e){t.push(e),o={},n.push(o);let i=[],s;for(s in e)Object.prototype.hasOwnProperty.call(e,s)&&i.push(s);for(i.sort(),a=0;a<i.length;a+=1)s=i[a],o[s]=pf(e[s],t,n,r,s);t.pop(),n.pop()}else o=e;return o}new class extends Kd{tokenize(e){return e.slice()}join(e){return e}removeEmpty(e){return e}};var mf=e=>!e.added&&!e.removed;function hf(e,t){let n=uf(e,t,{timeout:100})??[{value:e,added:!1,removed:!0,count:1},{value:t,added:!0,removed:!1,count:1}],r=[],i=``,a=``,o=()=>{i&&r.push({value:i,added:!1,removed:!0,count:1}),a&&r.push({value:a,added:!0,removed:!1,count:1}),i=a=``};return n.forEach((e,t)=>{let s=n[t+1],c=mf(e)&&/^[^\S\r\n\u2028\u2029]+$/.test(e.value)&&!!(i||a)&&s!==void 0&&!mf(s);(e.removed||c)&&(i+=e.value),(e.added||c)&&(a+=e.value),mf(e)&&!c&&(o(),r.push(e))}),o(),r}function gf(e,t,n=[],r=!1){if(!e)return{pieces:[{kind:`equal`,parts:[{text:t.map(e=>e.value).join(``),marked:!1}]}],collapsible:!1};let i=n.flatMap(t=>{let n=e.indexOf(t);return n===-1?[]:[[n,n+t.length]]}),a=[],o=0,s=!1;return t.forEach((e,n)=>{let c=e.value;if(e.added){a.push({kind:`insert`,parts:[{text:c,marked:!1}]});return}let l=o;if(o+=c.length,e.removed||c.length<=200){a.push({kind:e.removed?`delete`:`equal`,parts:bf(c,l,i)});return}let u=[],d={kind:`gap`,parts:[{text:`…`,marked:!1}]},f=0;for(let[e,r]of _f(c,l,n>0,n<t.length-1,i))e>f&&u.push(d),u.push({kind:`equal`,parts:bf(c.slice(e,r),l+e,i)}),f=r;f<c.length&&u.push(d),s||=u.includes(d),a.push(...r?[{kind:`equal`,parts:bf(c,l,i)}]:u)}),{pieces:a,collapsible:s}}function _f(e,t,n,r,i){let a=[];n&&a.push([0,80]),r&&a.push([e.length-80,e.length]);for(let[n,r]of i)n<t+e.length&&r>t&&a.push([n-t-80/2,r-t+80/2]);if(!a.length)return[[0,e.length]];let o=[];for(let[t,n]of a.map(([t,n])=>[vf(e,Math.max(t,0)),yf(e,Math.min(n,e.length))]).sort((e,t)=>e[0]-t[0])){let e=o.at(-1);e&&t-e[1]<40?e[1]=Math.max(e[1],n):o.push([t,n])}return o[0][0]<40&&(o[0][0]=0),e.length-o.at(-1)[1]<40&&(o.at(-1)[1]=e.length),o}function vf(e,t){let n=e.slice(0,t).search(/\s\S*$/);return t===0||n===-1?0:n+1}function yf(e,t){let n=e.slice(t).search(/\s/);return n===-1?e.length:t+n}function bf(e,t,n){let r=(e,t)=>n.some(([n,r])=>n<t&&r>e),i=new Set([0,e.length]);for(let[r,a]of n)i.add(Math.min(Math.max(r-t,0),e.length)),i.add(Math.min(Math.max(a-t,0),e.length));let a=[...i].sort((e,t)=>e-t);return a.slice(1).flatMap((n,i)=>{let o=a[i];return n>o?[{text:e.slice(o,n),marked:r(t+o,t+n)}]:[]})}var xf=a`
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
`,Sf=class extends u{constructor(...e){super(...e),this.current=``,this.proposed=``,this.highlights=[],this.collapse=!1,this.label=``,this.expanded=!1,this.changes=[]}willUpdate(e){(e.has(`current`)||e.has(`proposed`))&&(this.changes=hf(this.current,this.proposed),this.expanded=!1)}render(){let{pieces:e,collapsible:t}=gf(this.current,this.changes,this.highlights,!this.collapse||this.expanded);return p`
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
        >`;default:return t}}};Sf.styles=[h,xf],r([c()],Sf.prototype,`current`,void 0),r([c()],Sf.prototype,`proposed`,void 0),r([c({type:Array})],Sf.prototype,`highlights`,void 0),r([c({type:Boolean,reflect:!0})],Sf.prototype,`collapse`,void 0),r([c()],Sf.prototype,`label`,void 0),r([f()],Sf.prototype,`expanded`,void 0),customElements.get(`craft-text-diff`)||customElements.define(`craft-text-diff`,Sf);var Cf=new Map;function wf(e){var t=Cf.get(e);t&&t.destroy()}function Tf(e){var t=Cf.get(e);t&&t.update()}var Ef=null;typeof window>`u`?((Ef=function(e){return e}).destroy=function(e){return e},Ef.update=function(e){return e}):((Ef=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],function(e){return function(e){if(e&&e.nodeName&&e.nodeName===`TEXTAREA`&&!Cf.has(e)){var t,n=null,r=window.getComputedStyle(e),i=(t=e.value,function(){o({testForHeightReduction:t===``||!e.value.startsWith(t),restoreTextAlign:null}),t=e.value}),a=function(t){e.removeEventListener(`autosize:destroy`,a),e.removeEventListener(`autosize:update`,s),e.removeEventListener(`input`,i),window.removeEventListener(`resize`,s),Object.keys(t).forEach(function(n){return e.style[n]=t[n]}),Cf.delete(e)}.bind(e,{height:e.style.height,resize:e.style.resize,textAlign:e.style.textAlign,overflowY:e.style.overflowY,overflowX:e.style.overflowX,wordWrap:e.style.wordWrap});e.addEventListener(`autosize:destroy`,a),e.addEventListener(`autosize:update`,s),e.addEventListener(`input`,i),window.addEventListener(`resize`,s),e.style.overflowX=`hidden`,e.style.wordWrap=`break-word`,Cf.set(e,{destroy:a,update:s}),s()}function o(t){var i,a,s=t.restoreTextAlign,c=s===void 0?null:s,l=t.testForHeightReduction,u=l===void 0||l,d=r.overflowY;if(e.scrollHeight!==0&&(r.resize===`vertical`?e.style.resize=`none`:r.resize===`both`&&(e.style.resize=`horizontal`),u&&(i=function(e){for(var t=[];e&&e.parentNode&&e.parentNode instanceof Element;)e.parentNode.scrollTop&&t.push([e.parentNode,e.parentNode.scrollTop]),e=e.parentNode;return function(){return t.forEach(function(e){var t=e[0],n=e[1];t.style.scrollBehavior=`auto`,t.scrollTop=n,t.style.scrollBehavior=null})}}(e),e.style.height=``),a=r.boxSizing===`content-box`?e.scrollHeight-(parseFloat(r.paddingTop)+parseFloat(r.paddingBottom)):e.scrollHeight+parseFloat(r.borderTopWidth)+parseFloat(r.borderBottomWidth),r.maxHeight!==`none`&&a>parseFloat(r.maxHeight)?(r.overflowY===`hidden`&&(e.style.overflow=`scroll`),a=parseFloat(r.maxHeight)):r.overflowY!==`hidden`&&(e.style.overflow=`hidden`),e.style.height=a+`px`,c&&(e.style.textAlign=c),i&&i(),n!==a&&(e.dispatchEvent(new Event(`autosize:resized`,{bubbles:!0})),n=a),d!==r.overflow&&!c)){var f=r.textAlign;r.overflow===`hidden`&&(e.style.textAlign=f===`start`?`end`:`start`),o({restoreTextAlign:f,testForHeightReduction:!0})}}function s(){o({testForHeightReduction:!0,restoreTextAlign:null})}}(e)}),e}).destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],wf),e},Ef.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],Tf),e});var Df=Ef,Of=a`
  :host([monospace]) ::slotted([slot='input']) {
    font-family: var(--c-font-mono, monospace) !important;
    font-size: var(--c-text-sm);
  }

  ::slotted(label) {
    font-weight: bold;
  }

  ::slotted([slot='input']) {
    ${ce}
    padding-block: var(--c-spacing-md);
    line-height: var(--leading-normal);
    resize: vertical;
  }
`,kf=new WeakMap,Af=new WeakMap,jf=new WeakMap,Mf=new WeakMap,Nf=new WeakSet,Pf=new WeakMap,Ff=class extends re(u){constructor(...e){super(...e),O(this,Nf),this.rows=2,this.maxRows=30,this.monospace=!1,M(this,kf,void 0),M(this,Af,void 0),M(this,jf,void 0),M(this,Mf,null),M(this,Pf,e=>{A(Mf,this,e.target.style.height)})}get slots(){return{...super.slots,input:()=>document.createElement(`textarea`)}}get _control(){return super._control}connectedCallback(){super.connectedCallback();let e=this._control;e&&(Df(e),A(jf,this,new IntersectionObserver(()=>this.resizeTextarea())),k(jf,this).observe(this)),j(Nf,this,Lf).call(this)}_pushToControl(e){super._pushToControl(e),e.has(`rows`)&&this._control&&(this._control.rows=this.rows)}updated(e){super.updated(e),e.has(`value`)&&this.resizeTextarea(),(e.has(`rows`)||e.has(`maxRows`))&&j(Nf,this,If).call(this)}resizeTextarea(){this._control&&Df.update(this._control)}disconnectedCallback(){super.disconnectedCallback(),k(jf,this)?.disconnect(),A(jf,this,void 0),this._control&&Df.destroy(this._control),k(kf,this)?.disconnect(),A(kf,this,void 0),k(Af,this)?.disconnect(),A(Af,this,void 0),this._control?.removeEventListener(`autosize:resized`,k(Pf,this))}};function If(){let e=this._control;if(!e)return;if(!Number.isFinite(this.maxRows)){e.style.removeProperty(`max-height`);return}let{value:t}=e;e.value=``,this.resizeTextarea();let n=getComputedStyle(e),r=parseFloat(n.lineHeight)||parseFloat(n.height)/this.rows,i=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom),a=parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth),o=n.boxSizing===`border-box`?i+a:0;e.style.maxHeight=`${r*this.maxRows+o}px`,e.value=t,this.resizeTextarea()}function Lf(){let e=this._control;!e||typeof ResizeObserver>`u`||typeof MutationObserver>`u`||(A(Mf,this,e.style.height),e.style.removeProperty(`resize`),e.addEventListener(`autosize:resized`,k(Pf,this)),A(Af,this,new MutationObserver(()=>{e.style.resize!==``&&e.style.removeProperty(`resize`)})),k(Af,this).observe(e,{attributes:!0,attributeFilter:[`style`]}),A(kf,this,new ResizeObserver(()=>{if(e.style.height===k(Mf,this))return;let t=e.style.height;Df.destroy(e),e.style.height=t,e.style.removeProperty(`overflow`),k(Af,this)?.disconnect(),A(Af,this,void 0),k(kf,this)?.disconnect(),A(kf,this,void 0)})),k(kf,this).observe(e))}Ff.styles=[ge,a`
      .input-group__container > .input-group__input ::slotted(.form-control) {
        box-sizing: content-box;
        /* Keeps Firefox from reserving height for a horizontal scrollbar. */
        overflow-x: hidden;
      }

      :host([disabled]) ::slotted(textarea) {
        user-select: none;
      }
    `,le,Of],r([c({type:Number,reflect:!0})],Ff.prototype,`rows`,void 0),r([c({attribute:`max-rows`,converter:{fromAttribute:e=>e===`none`?1/0:e===null?30:Number(e)}})],Ff.prototype,`maxRows`,void 0),r([c({type:Boolean,reflect:!0})],Ff.prototype,`monospace`,void 0),customElements.get(`craft-textarea`)||customElements.define(`craft-textarea`,Ff);var Rf=a`
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
`,zf=class extends u{constructor(...e){super(...e),this.last=!1,this._hasHeading=!1,this._hasMeta=!1,this._hasBody=!1,this._hasFooter=!1,this._lightDomObserver=new MutationObserver(()=>this._syncSlotPresence())}connectedCallback(){super.connectedCallback(),this._syncSlotPresence(),this._lightDomObserver.observe(this,{childList:!0,subtree:!0,attributes:!0,characterData:!0,attributeFilter:[`slot`]})}disconnectedCallback(){super.disconnectedCallback(),this._lightDomObserver.disconnect()}_syncSlotPresence(){this._hasHeading=!!this.querySelector(`:scope > [slot="heading"]`),this._hasMeta=!!this.querySelector(`:scope > [slot="meta"]`),this._hasBody=[...this.childNodes].some(e=>e.nodeType===Node.TEXT_NODE?!!e.textContent?.trim():e instanceof HTMLElement&&!e.slot),this._hasFooter=!!this.querySelector(`:scope > [slot="footer"]`)}render(){return p`
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
    `}};zf.styles=[Rf],r([c({type:Boolean,reflect:!0})],zf.prototype,`last`,void 0),r([f()],zf.prototype,`_hasHeading`,void 0),r([f()],zf.prototype,`_hasMeta`,void 0),r([f()],zf.prototype,`_hasBody`,void 0),r([f()],zf.prototype,`_hasFooter`,void 0),customElements.get(`craft-timeline-item`)||customElements.define(`craft-timeline-item`,zf);var Bf=class{constructor(e,t,{tabInsertsSuggestions:n,firstOptionSelectionMode:r,scrollIntoViewOptions:i}={}){this.input=e,this.list=t,this.tabInsertsSuggestions=n??!0,this.firstOptionSelectionMode=r??`none`,this.scrollIntoViewOptions=i??{block:`nearest`,inline:`nearest`},this.isComposing=!1,this.didAutoAssignLastSelectedId=!1,t.id||=`combobox-${Math.random().toString().slice(2,6)}`,this.ctrlBindings=!!navigator.userAgent.match(/Macintosh/),this.keyboardEventHandler=e=>Vf(e,this),this.compositionEventHandler=e=>qf(e,this),this.inputHandler=this.clearSelection.bind(this),e.setAttribute(`role`,`combobox`),e.setAttribute(`aria-controls`,t.id),e.setAttribute(`aria-expanded`,`false`),e.setAttribute(`aria-autocomplete`,`list`),e.setAttribute(`aria-haspopup`,`listbox`)}destroy(){this.clearSelection(),this.stop(),this.input.removeAttribute(`role`),this.input.removeAttribute(`aria-controls`),this.input.removeAttribute(`aria-expanded`),this.input.removeAttribute(`aria-autocomplete`),this.input.removeAttribute(`aria-haspopup`)}start(){this.input.setAttribute(`aria-expanded`,`true`),this.input.addEventListener(`compositionstart`,this.compositionEventHandler),this.input.addEventListener(`compositionend`,this.compositionEventHandler),this.input.addEventListener(`input`,this.inputHandler),this.input.addEventListener(`keydown`,this.keyboardEventHandler),this.list.addEventListener(`click`,Hf),this.resetSelection()}stop(){this.clearSelection(),this.input.setAttribute(`aria-expanded`,`false`),this.input.removeEventListener(`compositionstart`,this.compositionEventHandler),this.input.removeEventListener(`compositionend`,this.compositionEventHandler),this.input.removeEventListener(`input`,this.inputHandler),this.input.removeEventListener(`keydown`,this.keyboardEventHandler),this.list.removeEventListener(`click`,Hf)}indicateDefaultOption(){var e;this.firstOptionSelectionMode===`active`?(e=Array.from(this.list.querySelectorAll(`[role="option"]:not([aria-disabled="true"])`)).filter(Kf)[0])==null||e.setAttribute(`data-combobox-option-default`,`true`):this.firstOptionSelectionMode===`selected`&&this.navigate(1)}navigate(e=1){let t=Array.from(this.list.querySelectorAll(`[aria-selected="true"]`)).filter(Kf)[0],n=Array.from(this.list.querySelectorAll(`[role="option"]`)).filter(Kf),r=n.indexOf(t);if(r===n.length-1&&e===1||r===0&&e===-1){this.clearSelection(),this.input.focus();return}let i=e===1?0:n.length-1;if(t&&r>=0){let t=r+e;t>=0&&t<n.length&&(i=t)}let a=n[i];if(a)for(let e of n)e.removeAttribute(`data-combobox-option-default`),a===e?(!a.id&&!document.getElementById(`${this.list.id}-selected`)&&(a.id=`${this.list.id}-selected`,this.didAutoAssignLastSelectedId=!0),a.id&&this.input.setAttribute(`aria-activedescendant`,a.id),a.setAttribute(`aria-selected`,`true`),Gf(a),a.scrollIntoView(this.scrollIntoViewOptions)):(e.id===`${this.list.id}-selected`&&this.didAutoAssignLastSelectedId&&(e.removeAttribute(`id`),this.didAutoAssignLastSelectedId=!1),e.removeAttribute(`aria-selected`))}clearSelection(){this.input.removeAttribute(`aria-activedescendant`);for(let e of this.list.querySelectorAll(`[aria-selected="true"], [data-combobox-option-default="true"]`))e.removeAttribute(`aria-selected`),e.removeAttribute(`data-combobox-option-default`),e.id===`${this.list.id}-selected`&&this.didAutoAssignLastSelectedId&&(e.removeAttribute(`id`),this.didAutoAssignLastSelectedId=!1)}resetSelection(){this.clearSelection(),this.indicateDefaultOption()}};function Vf(e,t){if(!(e.shiftKey||e.metaKey||e.altKey)&&!(!t.ctrlBindings&&e.ctrlKey)&&!t.isComposing)switch(e.key){case`Enter`:Uf(t.input,t.list)&&e.preventDefault();break;case`Tab`:t.tabInsertsSuggestions&&Uf(t.input,t.list)&&e.preventDefault();break;case`Escape`:t.clearSelection();break;case`ArrowDown`:t.navigate(1),e.preventDefault();break;case`ArrowUp`:t.navigate(-1),e.preventDefault();break;case`n`:t.ctrlBindings&&e.ctrlKey&&(t.navigate(1),e.preventDefault());break;case`p`:t.ctrlBindings&&e.ctrlKey&&(t.navigate(-1),e.preventDefault());break;default:if(e.ctrlKey)break;t.resetSelection()}}function Hf(e){if(!(e.target instanceof Element))return;let t=e.target.closest(`[role="option"]`);t&&t.getAttribute(`aria-disabled`)!==`true`&&Wf(t,{event:e})}function Uf(e,t){let n=t.querySelector(`[aria-selected="true"], [data-combobox-option-default="true"]`);return n?(n.getAttribute(`aria-disabled`)===`true`||n.click(),!0):!1}function Wf(e,t){e.dispatchEvent(new CustomEvent(`combobox-commit`,{bubbles:!0,detail:t}))}function Gf(e){e.dispatchEvent(new Event(`combobox-select`,{bubbles:!0}))}function Kf(e){return!e.hidden&&!(e instanceof HTMLInputElement&&e.type===`hidden`)&&(e.offsetWidth>0||e.offsetHeight>0)}function qf(e,t){t.isComposing=e.type===`compositionstart`,document.getElementById(t.input.getAttribute(`aria-controls`)||``)&&t.clearSelection()}var Jf=class extends Event{constructor(){super(`update`)}},Yf=new WeakMap,Xf=class e extends EventTarget{#e=new MutationObserver(()=>this.#f());#t=new ResizeObserver(()=>this.#d());#n;#r=document.createElement(`div`);#i=document.createElement(`div`);static for(t){let n=Yf.get(t);return n||(n=new e(t),Yf.set(t,n)),n}constructor(e){super(),this.#n=new WeakRef(e),this.#r.style.position=`absolute`,this.#r.style.pointerEvents=`none`,this.#r.setAttribute(`aria-hidden`,`true`),this.#r.appendChild(this.#i),this.#i.style.pointerEvents=`none`,this.#i.style.userSelect=`none`,this.#i.style.overflow=`hidden`,this.#i.style.display=`block`,this.#i.style.visibility=`hidden`,e instanceof HTMLTextAreaElement?(this.#i.style.whiteSpace=`pre-wrap`,this.#i.style.wordWrap=`break-word`):(this.#i.style.whiteSpace=`nowrap`,this.#i.style.display=`table-cell`,this.#i.style.verticalAlign=`middle`),e.after(this.#r),this.#f(),this.#p(),this.#e.observe(e,{attributeFilter:[`style`,`dir`]}),this.#t.observe(e),document.addEventListener(`scroll`,this.#h,{capture:!0}),window.addEventListener(`resize`,this.#h,{capture:!0}),e.addEventListener(`input`,this.#m,{capture:!0})}get element(){return this.#i}forceUpdate(){this.#f(),this.#p()}disconnect(){this.#r?.remove(),this.#e.disconnect(),this.#t.disconnect(),document.removeEventListener(`scroll`,this.#h,{capture:!0}),window.removeEventListener(`resize`,this.#h,{capture:!0});let e=this.#a;e&&(e.removeEventListener(`input`,this.#m,{capture:!0}),Yf.delete(e))}get#a(){return this.#n?.deref()}#o(e){let t=this.#a;return t?e(t):this.disconnect()}#s=0;#c=0;#l(){this.#o(e=>{let t=window.getComputedStyle(e);this.#i.style.height=t.height,this.#i.style.width=t.width,e.clientHeight!==this.#i.clientHeight&&(this.#i.style.height=`calc(${t.height} + ${e.clientHeight-this.#i.clientHeight}px)`),e.clientWidth!==this.#i.clientWidth&&(this.#i.style.width=`calc(${t.width} + ${e.clientWidth-this.#i.clientWidth}px)`);let n=e.getBoundingClientRect(),r=this.#i.getBoundingClientRect();this.#s=this.#s+n.left-r.left,this.#c=this.#c+n.top-r.top,this.#i.style.transform=`translate(${this.#s}px, ${this.#c}px)`,this.#i.scrollTop=e.scrollTop,this.#i.scrollLeft=e.scrollLeft,this.dispatchEvent(new Jf)})}#u=!1;#d(){this.#u||(this.#u=!0,requestAnimationFrame(()=>{this.#l(),this.#u=!1}))}#f(){this.#o(e=>{let t=window.getComputedStyle(e);for(let e of Zf)this.#i.style[e]=t[e];this.#d()})}#p(){this.#o(e=>{this.#i.textContent=e.value,this.#l()})}#m=()=>this.#p();#h=e=>{this.#o(t=>{(e.target===document||e.target===window||e.target instanceof Node&&e.target.contains(t))&&this.#d()})}},Zf=`direction.writingMode.unicodeBidi.textOrientation.boxSizing.borderTopWidth.borderRightWidth.borderBottomWidth.borderLeftWidth.borderStyle.paddingTop.paddingRight.paddingBottom.paddingLeft.fontStyle.fontVariant.fontWeight.fontStretch.fontSize.fontSizeAdjust.lineHeight.fontFamily.textAlign.textTransform.textIndent.textDecoration.letterSpacing.wordSpacing.tabSize.MozTabSize`.split(`.`),Qf=class e{#e;#t;#n;constructor(e,t=0,n=t){this.#e=e,this.#t=t,this.#n=n}static fromSelection(t){let{selectionStart:n,selectionEnd:r}=t;return new e(t,n??void 0,r??void 0)}get collapsed(){return this.startOffset===this.endOffset}get commonAncestorContainer(){return this.#e}get endContainer(){return this.#e}get startContainer(){return this.#e}get startOffset(){return this.#t}get endOffset(){return this.#n}setStartOffset(e){this.#t=this.#a(e)}setEndOffset(e){this.#n=this.#a(e)}collapse(e=!1){e?this.setEndOffset(this.startOffset):this.setStartOffset(this.endOffset)}cloneContents(){return this.#o().cloneContents()}cloneRange(){return new e(this.#e,this.startOffset,this.endOffset)}getBoundingClientRect(){return this.#o().getBoundingClientRect()}getClientRects(){return this.#o().getClientRects()}toString(){return this.#o().toString()}getStyleClone(){return this.#r}get#r(){return Xf.for(this.#e)}get#i(){return this.#r}#a(e){return Math.max(0,Math.min(e,this.#e.value.length))}#o(){let e=document.createRange(),t=this.#i.element.childNodes[0];return t&&(e.setStart(t,this.startOffset),e.setEnd(t,this.endOffset)),e}},$f=a`
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
`,ep=/^[\p{L}\p{N}_.-]*$/u,tp=n(`Suggestions`),np=[`role`,`aria-autocomplete`,`aria-haspopup`,`aria-expanded`,`aria-controls`,`aria-activedescendant`,`aria-busy`],rp=0,q=new WeakMap,ip=new WeakMap,ap=new WeakMap,op=new WeakMap,J=new WeakMap,sp=new WeakMap,cp=new WeakMap,lp=new WeakMap,up=new WeakMap,dp=new WeakMap,fp=new WeakMap,pp=new WeakMap,mp=new WeakMap,hp=new WeakMap,gp=new WeakMap,Y=new WeakSet,_p=new WeakMap,vp=new WeakMap,yp=new WeakMap,bp=new WeakMap,xp=new WeakMap,Sp=new WeakMap,Cp=new WeakMap,wp=new WeakMap,Tp=new WeakMap,Ep=new WeakMap,Dp=new WeakMap,Op=new WeakMap,kp=class extends u{constructor(...e){super(...e),O(this,Y),this.for=``,this.triggers=[],this.loading=!1,this.announcement=``,M(this,q,void 0),M(this,ip,null),M(this,ap,null),M(this,op,new Map),M(this,J,null),M(this,sp,[]),M(this,cp,0),M(this,lp,null),M(this,up,null),M(this,dp,null),M(this,fp,!1),M(this,pp,null),M(this,mp,new DOMRect),M(this,hp,new MutationObserver(()=>{let e=j(Y,this,jp).call(this);($p(e)&&e!==k(ip,this)||k(ip,this)&&!k(ip,this).isConnected)&&j(Y,this,Mp).call(this)})),M(this,gp,new MutationObserver(e=>{for(let{target:t}of e)t instanceof $n&&(t.active=t.getAttribute(`aria-selected`)===`true`)})),M(this,_p,()=>{k(fp,this)||j(Y,this,zp).call(this)}),M(this,vp,()=>{A(fp,this,!0),j(Y,this,qp).call(this)}),M(this,yp,()=>{A(fp,this,!1),j(Y,this,zp).call(this)}),M(this,bp,()=>{queueMicrotask(()=>j(Y,this,qp).call(this))}),M(this,xp,()=>{let e=k(ip,this);!e||!k(J,this)||!em(e)||queueMicrotask(()=>{k(J,this)&&(e.selectionStart!==k(J,this).end||e.selectionEnd!==k(J,this).end)&&j(Y,this,zp).call(this)})}),M(this,Sp,()=>{k(J,this)&&j(Y,this,Kp).call(this)}),M(this,Cp,e=>{let t=e;k(J,this)&&k(q,this).querySelector(`[aria-selected="true"]`)&&[`ArrowDown`,`ArrowUp`,`Enter`].includes(t.key)&&t.stopPropagation()}),M(this,wp,e=>{e.target instanceof Element&&e.target.closest(`[role="option"]`)&&e.preventDefault()}),M(this,Tp,e=>{e.pointerType===`touch`&&e.target instanceof Element&&e.target.closest(`[role="option"]`)?.click()}),M(this,Ep,e=>{j(Y,this,Up).call(this,Number(e.target.dataset.index))}),M(this,Dp,e=>{if(e.target!==this.popoverElement)return;let t=k(q,this).getAttribute(`aria-label`)??tp;j(Y,this,Xp).call(this),A(J,this,null),j(Y,this,Yp).call(this),j(Y,this,Zp).call(this,t===tp?n(`Suggestions collapsed`):n(`{name} suggestions collapsed`,{name:t})),k(Op,this).call(this,e)}),M(this,Op,e=>{e.target===this.popoverElement&&e.stopPropagation()})}connectedCallback(){super.connectedCallback(),j(Y,this,Ap).call(this),this.hasUpdated&&j(Y,this,Mp).call(this)}disconnectedCallback(){j(Y,this,Pp).call(this),k(gp,this).disconnect(),k(q,this)?.remove(),k(dp,this)!==null&&(clearTimeout(k(dp,this)),A(dp,this,null)),super.disconnectedCallback()}firstUpdated(e){super.firstUpdated(e),j(Y,this,Mp).call(this)}updated(e){if(super.updated(e),e.has(`for`)&&k(ip,this)!==j(Y,this,jp).call(this)&&j(Y,this,Mp).call(this),e.has(`triggers`)&&e.get(`triggers`)&&k(J,this)){let e=k(q,this).querySelector(`[aria-selected="true"]`),t=e?k(sp,this)[Number(e.dataset.index)]:void 0;j(Y,this,zp).call(this,t)}}render(){return p`
      <craft-popover
        exportparts="popup"
        without-invoker-aria
        manual
        @craft-show=${k(Op,this)}
        @craft-hide=${k(Dp,this)}
        @craft-after-show=${k(Op,this)}
        @craft-after-hide=${k(Op,this)}
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
    `}};function Ap(){A(q,this,document.createElement(`div`)),k(q,this).id=`craft-text-expander-listbox-${++rp}`,k(q,this).slot=`listbox`,k(q,this).setAttribute(`part`,`listbox`),k(q,this).role=`listbox`,k(q,this).setAttribute(`aria-label`,tp),k(q,this).addEventListener(`pointerdown`,k(wp,this)),k(q,this).addEventListener(`pointerup`,k(Tp,this)),k(q,this).addEventListener(`combobox-commit`,k(Ep,this)),k(gp,this).observe(k(q,this),{subtree:!0,attributeFilter:[`aria-selected`]}),this.append(k(q,this))}function jp(){return this.getRootNode().getElementById(this.for)}function Mp(){let e=j(Y,this,jp).call(this);if(j(Y,this,Pp).call(this),!$p(e)){j(Y,this,Np).call(this);return}A(ip,this,e),j(Y,this,Fp).call(this,e),A(ap,this,new Bf(e,k(q,this),{tabInsertsSuggestions:!1,firstOptionSelectionMode:`selected`,scrollIntoViewOptions:{block:`nearest`}})),j(Y,this,Ip).call(this,e),e.addEventListener(`input`,k(_p,this)),e.addEventListener(`keydown`,k(Cp,this)),e.addEventListener(`blur`,k(bp,this)),e.addEventListener(`compositionstart`,k(vp,this)),e.addEventListener(`compositionend`,k(yp,this)),e.ownerDocument.addEventListener(`selectionchange`,k(xp,this)),this.popoverElement.anchor={contextElement:e,getBoundingClientRect:()=>k(mp,this)},j(Y,this,Np).call(this)}function Np(){k(hp,this).observe(this.getRootNode(),{attributes:!0,attributeFilter:[`id`],childList:!0,subtree:!0})}function Pp(){k(hp,this).disconnect(),j(Y,this,qp).call(this);let e=k(ip,this);e&&(e.removeEventListener(`input`,k(_p,this)),e.removeEventListener(`keydown`,k(Cp,this)),e.removeEventListener(`blur`,k(bp,this)),e.removeEventListener(`compositionstart`,k(vp,this)),e.removeEventListener(`compositionend`,k(yp,this)),e.ownerDocument.removeEventListener(`selectionchange`,k(xp,this)),k(pp,this)?.getStyleClone().disconnect(),A(pp,this,null),k(ap,this)?.destroy(),A(ap,this,null),j(Y,this,Lp).call(this,e),A(ip,this,null))}function Fp(e){k(op,this).clear();for(let t of np)k(op,this).set(t,e.getAttribute(t))}function Ip(e){let t=[k(op,this).get(`aria-controls`),k(q,this).id].filter(Boolean).join(` `);e.setAttribute(`aria-autocomplete`,`list`),e.setAttribute(`aria-controls`,t),e.setAttribute(`data-text-expander-input`,``),e.getAttribute(`role`)===`combobox`&&e.removeAttribute(`role`),e instanceof HTMLInputElement?e.setAttribute(`aria-haspopup`,`listbox`):j(Y,this,Rp).call(this,e,`aria-haspopup`),j(Y,this,Rp).call(this,e,`aria-expanded`)}function Lp(e){for(let t of np)j(Y,this,Rp).call(this,e,t);k(op,this).clear()}function Rp(e,t){let n=k(op,this).get(t);n==null?e.removeAttribute(t):e.setAttribute(t,n)}function zp(e){j(Y,this,Xp).call(this);let t=j(Y,this,Vp).call(this);if(!t){A(J,this,null),j(Y,this,Jp).call(this);return}A(J,this,t);let r=t.trigger.limit;if(t.trigger.options){this.loading=!1;let n=t.query.toLowerCase(),i=t.trigger.options.filter(e=>[e.label,...e.keywords??[]].some(e=>e.toLowerCase().includes(n)));j(Y,this,Hp).call(this,r===void 0?i:i.slice(0,r),e);return}this.loading=!0,j(Y,this,Hp).call(this,[]),j(Y,this,Zp).call(this,n(`Loading`));let i=k(cp,this);A(up,this,setTimeout(()=>{j(Y,this,Bp).call(this,t,r,i,e)},150))}async function Bp(e,t,n,r){A(lp,this,new AbortController);let i;try{let n=await je.get(e.trigger.source,{params:{query:`${e.character}${e.query}`,...t===void 0?{}:{limit:t}},signal:k(lp,this).signal});if(!Array.isArray(n.data))throw TypeError(`Text expander sources must return an array.`);i=n.data}catch(t){if(n!==k(cp,this)||tm(t))return;j(Y,this,qp).call(this),this.dispatchEvent(new CustomEvent(`craft-error`,{bubbles:!0,composed:!0,detail:{character:e.character,query:e.query,error:t}}));return}n===k(cp,this)&&(this.loading=!1,j(Y,this,Hp).call(this,t===void 0?i:i.slice(0,t),r))}function Vp(){let e=k(ip,this);if(!e||!e.isConnected||e.disabled||e.readOnly||!em(e)||e.selectionStart===null||e.selectionEnd===null||e.selectionStart!==e.selectionEnd)return null;let t=e.selectionStart,n=e.value.slice(0,t),r=null;for(let e of this.triggers){let i=e.trigger,a=n.lastIndexOf(i);if(a===-1||r&&a<=r.start)continue;let o=Array.from(n.slice(0,a)).at(-1),s=n.slice(a+i.length);(e.boundary===`anywhere`||(e.boundary===`start`?a===0:!o||/\s/u.test(o)))&&ep.test(s)&&(r={character:i,query:s,start:a,end:t,trigger:e})}return r}function Hp(e,t){if(j(Y,this,Gp).call(this),A(sp,this,e),k(q,this).replaceChildren(),k(q,this).hidden=this.loading,k(q,this).setAttribute(`aria-label`,k(J,this)?.trigger.label??tp),e.forEach((e,t)=>{let n=document.createElement(`craft-option`),r=Qp(e);n.id=`${k(q,this).id}-option-${t}`,n.setAttribute(`part`,`option`),n.dataset.index=String(t),n.setAttribute(`aria-label`,r?`${e.label}, ${r}`:e.label),n.hint=r,n.append(k(J,this)?.trigger.renderOption?.(e)??document.createTextNode(e.label)),k(q,this).append(n)}),!this.loading&&!e.length){A(J,this,null),j(Y,this,Jp).call(this),j(Y,this,Zp).call(this,n(`No suggestions`));return}this.updateComplete.then(()=>{k(J,this)&&j(Y,this,Wp).call(this,t)})}function Up(e){let t=k(ip,this),n=k(sp,this)[e],r=j(Y,this,Vp).call(this),i=k(J,this);if(!t||!n||!i||!r||r.start!==i.start||r.end!==i.end||r.character!==i.character||r.query!==i.query){j(Y,this,qp).call(this);return}nm(t,i.start,i.end,n.value);let a={character:i.character,query:i.query,option:n};j(Y,this,qp).call(this),this.dispatchEvent(new CustomEvent(`craft-select`,{bubbles:!0,composed:!0,detail:a}))}async function Wp(e){await this.popoverElement.updateComplete;let t=k(ip,this);if(!t||!j(Y,this,Kp).call(this)){j(Y,this,qp).call(this);return}if(t.setAttribute(`aria-busy`,String(this.loading)),await this.popoverElement.show(),!(!k(J,this)||t!==k(ip,this))&&k(sp,this).length&&(k(ap,this)?.start(),j(Y,this,Rp).call(this,t,`aria-expanded`),t.removeEventListener(`input`,k(_p,this)),t.addEventListener(`input`,k(_p,this)),e)){let t=k(sp,this).findIndex(t=>t.label===e.label&&t.value===e.value);for(let e=0;e<t;e++)k(ap,this)?.navigate(1)}}function Gp(){k(ap,this)?.stop(),k(ip,this)&&j(Y,this,Rp).call(this,k(ip,this),`aria-expanded`)}function Kp(){let e=k(ip,this),t=e?.selectionStart;if(!e?.isConnected||t==null)return!1;if(!k(pp,this)){A(pp,this,new Qf(e));let t=k(pp,this).getStyleClone(),n=t.element.parentElement;n.slot=e.slot,n.style.visibility=`hidden`,t.forceUpdate(),t.addEventListener(`update`,k(Sp,this))}return k(pp,this).setStartOffset(t),k(pp,this).setEndOffset(t),A(mp,this,k(pp,this).getBoundingClientRect()),this.popoverElement.reposition(),!0}function qp(){j(Y,this,Xp).call(this),A(J,this,null),j(Y,this,Jp).call(this)}function Jp(){j(Y,this,Yp).call(this),this.popoverElement.hide()}function Yp(){this.loading=!1,j(Y,this,Gp).call(this),A(sp,this,[]),k(q,this)?.replaceChildren(),k(q,this)&&(k(q,this).hidden=!1);let e=k(ip,this);e&&(j(Y,this,Rp).call(this,e,`aria-activedescendant`),j(Y,this,Rp).call(this,e,`aria-busy`))}function Xp(){var e;A(cp,this,(e=k(cp,this),e++,e)),k(up,this)&&(clearTimeout(k(up,this)),A(up,this,null)),k(lp,this)?.abort(),A(lp,this,null)}function Zp(e){k(dp,this)!==null&&(clearTimeout(k(dp,this)),A(dp,this,null)),this.announcement=``,queueMicrotask(()=>{this.isConnected&&(this.announcement=e)}),A(dp,this,setTimeout(()=>{A(dp,this,null),this.announcement=``},5e3))}kp.styles=[h,$f],r([c({reflect:!0})],kp.prototype,`for`,void 0),r([c({type:Array})],kp.prototype,`triggers`,void 0),r([f()],kp.prototype,`loading`,void 0),r([f()],kp.prototype,`announcement`,void 0),r([m(`craft-popover`)],kp.prototype,`popoverElement`,void 0);function Qp(e){return typeof e.data!=`object`||e.data===null||!(`hint`in e.data)||typeof e.data.hint!=`string`?null:e.data.hint}function $p(e){return e instanceof HTMLTextAreaElement||e instanceof HTMLInputElement&&e.type===`text`}function em(e){return e.getRootNode().activeElement===e}function tm(e){return e instanceof DOMException&&e.name===`AbortError`}function nm(e,t,n,r){e.maxLength>=0&&(r=r.slice(0,Math.max(0,e.maxLength-(e.value.length-(n-t)))));let i=`${e.value.slice(0,t)}${r}${e.value.slice(n)}`,a=!1,o=()=>{a=!0};e.focus({preventScroll:!0}),e.setSelectionRange(t,n),e.addEventListener(`input`,o,{once:!0});try{e.ownerDocument.execCommand?.(`insertText`,!1,r)}catch{}e.removeEventListener(`input`,o),e.value!==i&&(e.setRangeText(r,t,n,`end`),a=!1),a||e.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0,data:r,inputType:`insertReplacementText`}))}customElements.get(`craft-text-expander`)||customElements.define(`craft-text-expander`,kp);var rm=a`
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
    unicode-bidi: plaintext;
    ${ye}
  }
`,im=new WeakMap,am=new WeakSet,om=class extends u{constructor(...e){super(...e),O(this,am),this.placement=`top`,this.disabled=!1,this.overflowing=!1,this.text=``,M(this,im,typeof ResizeObserver<`u`?new ResizeObserver(()=>j(am,this,sm).call(this)):null)}connectedCallback(){super.connectedCallback(),k(im,this)?.observe(this)}disconnectedCallback(){k(im,this)?.disconnect(),super.disconnectedCallback()}firstUpdated(){k(im,this)||j(am,this,sm).call(this)}render(){let e=this.overflowing&&!this.disabled;return p`
      <span class="truncate" id="content">
        <slot @slotchange=${j(am,this,cm)}></slot>
      </span>
      ${e?p`<craft-tooltip for="content" placement=${this.placement}
            >${this.text}</craft-tooltip
          >`:``}
    `}};function sm(){this.text=(this.textContent??``).replace(/\s+/g,` `).trim();let e=this.content;this.overflowing=!!e&&e.scrollWidth>e.clientWidth}function cm(){j(am,this,sm).call(this)}om.styles=rm,r([c({reflect:!0})],om.prototype,`placement`,void 0),r([c({type:Boolean,reflect:!0})],om.prototype,`disabled`,void 0),r([f()],om.prototype,`overflowing`,void 0),r([f()],om.prototype,`text`,void 0),r([m(`.truncate`)],om.prototype,`content`,void 0),customElements.get(`craft-truncate`)||customElements.define(`craft-truncate`,om);var lm=a`
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
`,um=class e extends u{constructor(...e){super(...e),this.src=null,this.mode=`fit`,this.svgAspectRatios=new Map,this.placeholder=null,this.loaded=!1,this.srcset=null,this.sizes=null,this.alt=``,this.width=null,this.height=null,this.loading=`lazy`,this.checkered=!1,this.rounded=!1,this.animated=!1,this.frozen=!1,this.capturedFrame=null,this.resizeObserver=null}get isAnimated(){return this.animated||e.animatedExtensionPattern.test(this.src??``)||e.animatedExtensionPattern.test(this.srcset??``)}restoreSlottedSvgs(){for(let[e,t]of this.svgAspectRatios)t===null?e.removeAttribute(`preserveAspectRatio`):e.setAttribute(`preserveAspectRatio`,t);this.svgAspectRatios.clear()}updateSlottedSvgs(){if(this.restoreSlottedSvgs(),this.mode!==`crop`&&this.mode!==`stretch`)return;let e=this.shadowRoot?.querySelector(`slot`);for(let t of e?.assignedElements()??[])t instanceof SVGSVGElement&&(this.svgAspectRatios.set(t,t.getAttribute(`preserveAspectRatio`)),t.setAttribute(`preserveAspectRatio`,this.mode===`crop`?`xMidYMid slice`:`none`))}willUpdate(e){let t=e.has(`src`)||e.has(`srcset`)||e.has(`animated`);if(e.has(`src`)&&(this.loaded=!1),t&&(this.frozen=!1,this.capturedFrame=null,this.resizeObserver?.disconnect(),this.resizeObserver=null,!e.has(`src`))){let e=this.shadowRoot?.querySelector(`img`);e?.complete&&this.attemptFreeze(e)}}updated(){this.updateSlottedSvgs()}connectedCallback(){if(super.connectedCallback(),this.updateSlottedSvgs(),this.hasUpdated&&!this.frozen){let e=this.shadowRoot?.querySelector(`img`);e?.complete&&this.attemptFreeze(e)}}disconnectedCallback(){this.restoreSlottedSvgs(),this.resizeObserver?.disconnect(),this.resizeObserver=null,super.disconnectedCallback()}render(){let e=this.sizedImage,t={thumbnail:!0,"thumbnail--checkered":this.checkered,"thumbnail--rounded":this.rounded,"thumbnail--crop":this.mode===`crop`,"thumbnail--stretch":this.mode===`stretch`,"thumbnail--placeholder":this.showsPlaceholder&&!e},n=this.showsPlaceholder?{"--_placeholder":`url(${JSON.stringify(this.placeholder)})`}:{};return p`
      <div
        class="${C(t)}"
        style="${ae(e?{}:n)}"
        part="thumbnail"
      >
        ${this.src?p`<img
              class="${C({thumbnail__image:!0,"thumbnail__image--landscape":e===`landscape`,"thumbnail__image--portrait":e===`portrait`,"thumbnail__image--placeholder":!!e&&this.showsPlaceholder,"cp-visually-hidden":this.frozen})}"
              style="${ae(e?{...n,"--_width":`${this.width}px`,"--_height":`${this.height}px`,"aspect-ratio":`${this.width} / ${this.height}`}:{})}"
              part="image"
              src="${this.src}"
              srcset="${_(this.srcset??void 0)}"
              sizes="${_(this.sizes??void 0)}"
              width="${_(this.width??void 0)}"
              height="${_(this.height??void 0)}"
              alt="${this.alt}"
              loading="${this.loading}"
              decoding="async"
              @load=${this.onImageLoad}
            />`:i}
        ${this.src&&this.isAnimated?p`<canvas
              class="${C({thumbnail__cover:!0,"thumbnail__cover--pending":!this.frozen})}"
              part="cover"
              aria-hidden="true"
              role="presentation"
            ></canvas>`:i}
        <slot @slotchange=${this.updateSlottedSvgs}></slot>
      </div>
    `}get sizedImage(){return this.mode!==`fit`||!this.width||!this.height?null:Number(this.width)>=Number(this.height)?`landscape`:`portrait`}get showsPlaceholder(){return!!(this.placeholder&&this.src&&!this.loaded)}onImageLoad(e){this.loaded=!0,this.attemptFreeze(e.target)}attemptFreeze(e){if(!this.isAnimated||!e.currentSrc)return;let t=new Image;t.onload=()=>{this.capturedFrame=t,this.resizeObserver?.disconnect(),this.resizeObserver=new ResizeObserver(()=>{this.capturedFrame&&this.paintCover(this.capturedFrame,e)}),this.resizeObserver.observe(e)},t.src=e.currentSrc}paintCover(e,t){if(!e.naturalWidth||!e.naturalHeight)return;let n=this.shadowRoot?.querySelector(`canvas.thumbnail__cover`),r=n?.getContext(`2d`);if(!n||!r)return;let i=t.clientWidth,a=t.clientHeight;if(!i||!a)return;let o=window.devicePixelRatio||1;if(n.width=i*o,n.height=a*o,n.style.width=`${i}px`,n.style.height=`${a}px`,r.scale(o,o),this.mode===`crop`){let t=Math.max(i/e.naturalWidth,a/e.naturalHeight),n=i/t,o=a/t;r.drawImage(e,(e.naturalWidth-n)/2,(e.naturalHeight-o)/2,n,o,0,0,i,a)}else r.drawImage(e,0,0,i,a);this.resizeObserver?.disconnect(),this.resizeObserver=null,this.frozen=!0}};um.styles=[h,lm],um.animatedExtensionPattern=/\.(?:gif|webp)(?=[?#\s,]|$)/i,r([c()],um.prototype,`src`,void 0),r([c({reflect:!0})],um.prototype,`mode`,void 0),r([c()],um.prototype,`placeholder`,void 0),r([f()],um.prototype,`loaded`,void 0),r([c()],um.prototype,`srcset`,void 0),r([c()],um.prototype,`sizes`,void 0),r([c()],um.prototype,`alt`,void 0),r([c({type:Number})],um.prototype,`width`,void 0),r([c({type:Number})],um.prototype,`height`,void 0),r([c()],um.prototype,`loading`,void 0),r([c({type:Boolean,reflect:!0})],um.prototype,`checkered`,void 0),r([c({type:Boolean,reflect:!0})],um.prototype,`rounded`,void 0),r([c({type:Boolean,reflect:!0})],um.prototype,`animated`,void 0),r([f()],um.prototype,`frozen`,void 0),customElements.get(`craft-thumbnail`)||customElements.define(`craft-thumbnail`,um);var dm=new WeakMap,fm=new WeakSet,pm=class extends HTMLElement{constructor(...e){super(...e),O(this,fm),M(this,dm,null)}connectedCallback(){j(fm,this,mm).call(this)}disconnectedCallback(){k(dm,this)?.destroy(),A(dm,this,null)}};function mm(){if(!(k(dm,this)||!this.isConnected)){if(!this.querySelector(`[data-sizes]`)){requestAnimationFrame(()=>j(fm,this,mm).call(this));return}A(dm,this,new Me),k(dm,this).load(this)}}customElements.get(`craft-thumbnail-loader`)||customElements.define(`craft-thumbnail-loader`,pm);var hm=async(e,t)=>{let{data:n}=await je.post(e,t);return n},gm=new WeakMap,_m=new WeakMap,vm=new WeakMap,ym=new WeakMap,bm=new WeakMap,xm=new WeakMap,Sm=new WeakMap,Cm=new WeakMap,wm=new WeakMap,Tm=new WeakMap,X=new WeakSet,Em=class e{constructor(t){O(this,X),M(this,gm,null),M(this,_m,[]),M(this,vm,[]),M(this,ym,null),M(this,bm,!1),M(this,xm,!1),M(this,Sm,!1),M(this,Cm,null),M(this,wm,void 0),M(this,Tm,new Map),this.options={...e.defaults,modalTitle:n(`Select element`),selectBtnLabel:n(`Select`),...jm(t)},A(vm,this,[...this.options.disabledElementIds??[]]),A(wm,this,j(X,this,Dm).call(this))}get elementType(){return this.options.elementType}get state(){return k(wm,this)}get index(){return k(gm,this)}get hasSelection(){return k(_m,this).length>0}on(e,t){let n=k(Tm,this).get(e);return n||(n=new Set,k(Tm,this).set(e,n)),n.add(t),()=>{k(Tm,this).get(e)?.delete(t)}}async open(){A(_m,this,[]),k(gm,this)?.clearSelection(),k(bm,this)||(A(bm,this,!0),j(X,this,Am).call(this,`open`,void 0)),j(X,this,Om).call(this),k(ym,this)||await this.reload()}close(){k(bm,this)&&(A(bm,this,!1),j(X,this,Am).call(this,`close`,void 0),this.options.onClose?.(),j(X,this,Om).call(this))}destroy(){k(gm,this)?.destroy?.(),A(gm,this,null),A(_m,this,[]),A(ym,this,null),A(bm,this,!1),A(Sm,this,!1),A(xm,this,!1),A(Cm,this,null),j(X,this,Om).call(this),k(Tm,this).clear()}async reload(){let e=this.options.loadIndexBody??hm;A(xm,this,!0),A(Cm,this,null),j(X,this,Om).call(this);try{A(ym,this,await e(this.options.bodyAction,this.indexParams()))}catch(e){j(X,this,km).call(this,e)}finally{A(xm,this,!1),j(X,this,Om).call(this)}}async submit(){if(!k(wm,this).canSubmit)return;let e=this.buildElementInfo(k(_m,this)),t=this.selectMeta();A(Sm,this,!0),j(X,this,Om).call(this);try{j(X,this,Am).call(this,`select`,{elements:e,meta:t}),await this.options.onSelect?.(e,t)}catch(e){j(X,this,km).call(this,e);return}finally{A(Sm,this,!1),j(X,this,Om).call(this)}this.options.disableElementsOnSelect&&(this.setDisabledElementIds([...k(vm,this),...e.map(e=>Number(e.id))]),k(gm,this)?.clearSelection()),this.options.hideOnSelect&&this.close()}cancel(){k(wm,this).canCancel&&(j(X,this,Am).call(this,`cancel`,void 0),this.options.onCancel?.(),this.close())}attachIndex(e){A(gm,this,e),j(X,this,Om).call(this)}detachIndex(){A(gm,this,null),j(X,this,Om).call(this)}setSelection(e){A(_m,this,[...e]),j(X,this,Om).call(this)}setDisabledElementIds(e){A(vm,this,[...new Set(e.map(Number))]),j(X,this,Om).call(this)}setBusy(e){A(Sm,this,e),j(X,this,Om).call(this)}indexParams(){let{options:e}=this,t={context:e.context??`modal`,elementType:this.elementType,sources:e.sources,selectionCondition:e.condition,criteria:{...e.criteria}};e.showSiteMenu!=null&&e.showSiteMenu!==`auto`&&(t.showSiteMenu=e.showSiteMenu?`1`:`0`),e.siteIds&&(t.siteIds=e.siteIds),e.criteria&&(t.criteria={...e.criteria}),typeof e.indexSettings.showFolders==`boolean`&&(t.showFolders=e.indexSettings.showFolders);let n=e.defaultSource??e.indexSettings.defaultSource,r=e.defaultSourcePath??e.indexSettings.defaultSourcePath??[];n&&(t.source=n);let i=Number(r[r.length-1]?.folderId);return Number.isFinite(i)&&(t.folderId=i),e.referenceElementId&&(t.referenceElementId=e.referenceElementId,t.referenceElementOwnerId=e.referenceElementOwnerId??null,t.referenceElementSiteId=e.referenceElementSiteId??null),t}indexSettings(){let{options:e}=this;return{context:e.context??`modal`,storageKey:e.storageKey,condition:e.condition,referenceElementId:e.referenceElementId,referenceElementOwnerId:e.referenceElementOwnerId,referenceElementSiteId:e.referenceElementSiteId,criteria:{...e.criteria},disabledElementIds:[...k(vm,this)],selectable:!0,multiSelect:e.multiSelect,waitForDoubleClicks:!0,hideSidebar:e.hideSidebar,defaultSiteId:e.defaultSiteId,defaultSource:e.defaultSource,defaultSourcePath:e.defaultSourcePath,preferStoredSource:e.preferStoredSource,showSourcePath:e.showSourcePath,...e.indexSettings}}canSubmitSelection(){return k(_m,this).length>0}buildElementInfo(e){return e.map(e=>({...e}))}selectMeta(){return{}}notifyChange(){j(X,this,Om).call(this)}get selection(){return k(_m,this)}get disabledElementIds(){return k(vm,this)}};function Dm(){let e=k(Sm,this),t=k(xm,this);return Object.freeze({open:k(bm,this),loading:t,busy:e,selection:Object.freeze([...k(_m,this)]),disabledElementIds:Object.freeze([...k(vm,this)]),indexBody:k(ym,this),error:k(Cm,this),title:this.options.modalTitle,showTitle:this.options.showTitle,selectLabel:this.options.selectBtnLabel,canSubmit:!e&&!t&&this.canSubmitSelection(),canCancel:!e})}function Om(){A(wm,this,j(X,this,Dm).call(this)),j(X,this,Am).call(this,`change`,k(wm,this))}function km(e){A(Cm,this,e instanceof Error?e:Error(String(e??`Unknown`))),j(X,this,Am).call(this,`error`,k(Cm,this))}function Am(e,t){let n=k(Tm,this).get(e);n&&[...n].forEach(e=>e(t))}Em.defaults={multiSelect:!1,disabledElementIds:[],disableElementsOnSelect:!1,hideOnSelect:!0,showTitle:!1,fullscreen:!1,bodyAction:`element-selector-modals/body`,indexSettings:{},preferStoredSource:!1,showSourcePath:!0,hideSidebar:!1};function jm(e){return Object.fromEntries(Object.entries(e).filter(([,e])=>e!==void 0))}var Mm=async(e,t)=>{let{data:n}=await je.post(`assets/generate-transform`,{assetId:e,handle:t});return n?.url||!1},Nm=new WeakMap,Pm=class e extends Em{constructor(e){super(e),M(this,Nm,null)}get transforms(){return this.options.transforms??[]}get canApplyTransform(){return this.selection.length>0&&this.transforms.length>0}async selectWithTransform(t){var n;let r=(n=e.transformUrls)[t]??(n[t]={}),i=this.selection.map(e=>Number(e.id)).filter(e=>r[e]===void 0);if(i.length>0){let e=this.options.fetchTransformUrl??Mm;this.setBusy(!0);try{for(let n of i)try{r[n]=await e(n,t)}catch{r[n]=!1}}finally{this.setBusy(!1)}}A(Nm,this,t);try{await this.submit()}finally{A(Nm,this,null)}}buildElementInfo(t){let n=super.buildElementInfo(t);if(!k(Nm,this))return n;let r=e.transformUrls[k(Nm,this)]??{};for(let e of n){let t=r[Number(e.id)];t!==void 0&&t!==!1&&(e.url=t)}return n}selectMeta(){return{transform:k(Nm,this)}}};Pm.transformUrls={};var Fm=`CraftCms\\Cms\\Asset\\Elements\\Asset`,Im=new WeakSet,Lm=class extends Em{constructor(e={}){let{disabledFolderIds:t=[],...n}=e;super({...n,elementType:Fm,showSiteMenu:!1}),O(this,Im),this.disabledFolderIds=[...t]}indexParams(){return{...super.indexParams(),foldersOnly:!0,showFolders:!0}}indexSettings(){return{...super.indexSettings(),foldersOnly:!0,disabledFolderIds:[...this.disabledFolderIds]}}currentFolderId(){let e=this.index?.sourcePath;if(!e?.length)return null;let t=e[e.length-1],n=Number(t.folderId);return Number.isFinite(n)?this.disabledFolderIds.includes(n)?null:n:null}canSubmitSelection(){return super.canSubmitSelection()||this.currentFolderId()!==null}buildElementInfo(e){if(e.length>0)return e.map(e=>({...e,folderId:Number(e.folderId??e.id)}));let t=this.currentFolderId();return t===null?[]:[{id:t,folderId:t,siteId:null,label:j(Im,this,Rm).call(this),status:null,url:null,hasThumb:!1}]}};function Rm(){let e=this.index?.sourcePath;return e?.[e.length-1]?.label??``}var zm=new Map;function Bm(e,t){if(zm.has(e))throw Error(`An element selector controller has already been registered for the element type “${e}”.`);zm.set(e,t)}function Vm(e){return zm.has(e)}function Hm(e){return zm.get(e)??Em}function Um(e){return new(Hm(e.elementType))(e)}function Wm(){if(typeof window>`u`)return;let e=window.Craft?._elementSelectorModalClasses;if(e)for(let[t,n]of Object.entries(e))zm.has(t)||zm.set(t,n)}var Gm={START:`asset-indexes/start-indexing`,STOP:`asset-indexes/stop-indexing-session`,PROCESS:`asset-indexes/process-indexing-session`,OVERVIEW:`asset-indexes/indexing-session-overview`,FINISH:`asset-indexes/finish-indexing-session`},Km=new WeakMap,qm=new WeakMap,Jm=new WeakMap,Ym=new WeakMap,Xm=new WeakMap,Zm=new WeakMap,Qm=new WeakMap,Z=new WeakSet,$m=class{constructor(e={}){O(this,Z),M(this,Km,new Map),M(this,qm,null),M(this,Jm,0),M(this,Ym,[]),M(this,Xm,[]),M(this,Zm,new Set),M(this,Qm,new Map);let{existingSessions:t=[],maxConcurrentConnections:n=3,autoResume:r=!0}=e;this.maxConcurrentConnections=n;for(let e of t)k(Km,this).set(e.id,e);r&&(j(Z,this,rh).call(this),k(qm,this)!==null&&j(Z,this,ih).call(this))}getSessions(){return Array.from(k(Km,this).values())}getCurrentSessionId(){return k(qm,this)}isProcessing(){return k(Jm,this)>0}on(e,t){return k(Qm,this).has(e)||k(Qm,this).set(e,new Set),k(Qm,this).get(e).add(t),()=>{k(Qm,this).get(e)?.delete(t)}}async startIndexing(e){let t=await je.post(Gm.START,e),{data:n}=t;return n.session&&(k(Km,this).set(n.session.id,n.session),A(qm,this,n.session.id),j(Z,this,th).call(this),n.stop||j(Z,this,ih).call(this)),n.stop&&j(Z,this,nh).call(this,n.stop),t}stopSession(e){j(Z,this,ah).call(this,e),j(Z,this,oh).call(this,{sessionId:e,action:Gm.STOP,params:{sessionId:e},priority:!0})}getSessionOverview(e){j(Z,this,oh).call(this,{sessionId:e,action:Gm.OVERVIEW,params:{sessionId:e},priority:!0})}finishSession(e){j(Z,this,oh).call(this,{sessionId:e.sessionId,action:Gm.FINISH,params:e,priority:!0})}destroy(){k(Km,this).clear(),A(Ym,this,[]),A(Xm,this,[]),k(Qm,this).clear(),A(qm,this,null),A(Jm,this,0)}};function eh(e,t){k(Qm,this).get(e)?.forEach(e=>e(t))}function th(e){j(Z,this,eh).call(this,`change`,{sessions:this.getSessions(),currentSessionId:k(qm,this),reviewSessionId:e})}function nh(e){k(Km,this).delete(e),k(qm,this)===e&&A(qm,this,null),j(Z,this,th).call(this)}function rh(){for(let[e,t]of k(Km,this))if(!t.actionRequired&&!k(Zm,this).has(e)){A(qm,this,e);return}A(qm,this,null)}function ih(){if(k(qm,this)||j(Z,this,rh).call(this),!k(qm,this))return;let e=k(Km,this).get(k(qm,this));if(!e)return;let t=e.totalEntries-e.processedEntries,n=this.maxConcurrentConnections-k(Jm,this),r=Math.min(n,t);for(let t=0;t<r;t++)j(Z,this,oh).call(this,{sessionId:e.id,action:Gm.PROCESS,params:{sessionId:k(qm,this)},priority:!1});e.processIfRootEmpty&&j(Z,this,oh).call(this,{sessionId:e.id,action:Gm.PROCESS,params:{sessionId:k(qm,this)},priority:!1})}function ah(e){k(Zm,this).add(e),A(Ym,this,k(Ym,this).filter(t=>t.sessionId!==e))}function oh(e){e.priority?k(Xm,this).push(e):k(Ym,this).push(e),j(Z,this,sh).call(this)}function sh(){if(!(k(Ym,this).length+k(Xm,this).length===0||k(Jm,this)>=this.maxConcurrentConnections))for(;k(Ym,this).length+k(Xm,this).length>0&&k(Jm,this)<this.maxConcurrentConnections;){var e;A(Jm,this,(e=k(Jm,this),e++,e));let t=k(Xm,this).length>0?k(Xm,this).shift():k(Ym,this).shift();j(Z,this,ch).call(this,t)}}async function ch(e){try{let t=await je.post(e.action,e.params);j(Z,this,lh).call(this,t.data)}catch(t){j(Z,this,uh).call(this,t,e)}finally{var t;A(Jm,this,(t=k(Jm,this),t--,t)),j(Z,this,sh).call(this)}}function lh(e){let t;e.session&&(k(Km,this).set(e.session.id,e.session),j(Z,this,rh).call(this),e.session.actionRequired&&!e.skipDialog?k(Zm,this).has(e.session.id)||(t=e.session.id):k(Zm,this).has(e.session.id)||j(Z,this,ih).call(this)),j(Z,this,rh).call(this),e.stop&&(k(Km,this).delete(e.stop),k(qm,this)===e.stop&&A(qm,this,null)),j(Z,this,th).call(this,t),k(Km,this).size===0&&j(Z,this,eh).call(this,`complete`,{})}function uh(e,t){j(Z,this,rh).call(this);let n=e?.response?.data?.message||e.message||`An error occurred during indexing.`;j(Z,this,eh).call(this,`error`,{message:n,sessionId:t.sessionId}),j(Z,this,sh).call(this)}var dh=function(e,t,n,r,i){if(r===`m`)throw TypeError(`Private method is not writable`);if(r===`a`&&!i)throw TypeError(`Private accessor was defined without a setter`);if(typeof t==`function`?e!==t||!i:!t.has(e))throw TypeError(`Cannot write private member to an object whose class did not declare it`);return r===`a`?i.call(e,n):i?i.value=n:t.set(e,n),n},fh=function(e,t,n,r){if(n===`a`&&!r)throw TypeError(`Private accessor was defined without a getter`);if(typeof t==`function`?e!==t||!r:!t.has(e))throw TypeError(`Cannot read private member from an object whose class did not declare it`);return n===`m`?r:n===`a`?r.call(e):r?r.value:t.get(e)},ph,mh=class{formatToParts(e){let t=[];for(let n of e)t.push({type:`element`,value:n}),t.push({type:`literal`,value:`, `});return t.slice(0,-1)}},hh=typeof Intl<`u`&&Intl.ListFormat||mh,gh=[[`years`,`year`],[`months`,`month`],[`weeks`,`week`],[`days`,`day`],[`hours`,`hour`],[`minutes`,`minute`],[`seconds`,`second`],[`milliseconds`,`millisecond`]],_h={minimumIntegerDigits:2},vh=class{constructor(e,t={}){ph.set(this,void 0);let n=String(t.style||`short`);n!==`long`&&n!==`short`&&n!==`narrow`&&n!==`digital`&&(n=`short`);let r=n===`digital`?`numeric`:n,i=t.hours||r;r=i===`2-digit`?`numeric`:i;let a=t.minutes||r;r=a===`2-digit`?`numeric`:a;let o=t.seconds||r;r=o===`2-digit`?`numeric`:o;let s=t.milliseconds||r;dh(this,ph,{locale:e,style:n,years:t.years||n===`digital`?`short`:n,yearsDisplay:t.yearsDisplay===`always`?`always`:`auto`,months:t.months||n===`digital`?`short`:n,monthsDisplay:t.monthsDisplay===`always`?`always`:`auto`,weeks:t.weeks||n===`digital`?`short`:n,weeksDisplay:t.weeksDisplay===`always`?`always`:`auto`,days:t.days||n===`digital`?`short`:n,daysDisplay:t.daysDisplay===`always`?`always`:`auto`,hours:i,hoursDisplay:t.hoursDisplay===`always`||n===`digital`?`always`:`auto`,minutes:a,minutesDisplay:t.minutesDisplay===`always`||n===`digital`?`always`:`auto`,seconds:o,secondsDisplay:t.secondsDisplay===`always`||n===`digital`?`always`:`auto`,milliseconds:s,millisecondsDisplay:t.millisecondsDisplay===`always`?`always`:`auto`},`f`)}resolvedOptions(){return fh(this,ph,`f`)}formatToParts(e){let t=[],n=fh(this,ph,`f`),r=n.style,i=n.locale;for(let[a,o]of gh){let s=e[a];if(n[`${a}Display`]===`auto`&&!s)continue;let c=n[a],l=c===`2-digit`?_h:c===`numeric`?{}:{style:`unit`,unit:o,unitDisplay:c},u=new Intl.NumberFormat(i,l).format(s);a===`months`&&(c===`narrow`||r===`narrow`&&u.endsWith(`m`))&&(u=u.replace(/(\d+)m$/,`$1mo`)),t.push(u)}return new hh(i,{type:`unit`,style:r===`digital`?`short`:r}).formatToParts(t)}format(e){return this.formatToParts(e).map(e=>e.value).join(``)}};ph=new WeakMap;var yh=/^[-+]?P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)W)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?$/,bh=[`year`,`month`,`week`,`day`,`hour`,`minute`,`second`,`millisecond`],xh=e=>yh.test(e),Sh=class e{constructor(e=0,t=0,n=0,r=0,i=0,a=0,o=0,s=0){this.years=e,this.months=t,this.weeks=n,this.days=r,this.hours=i,this.minutes=a,this.seconds=o,this.milliseconds=s,this.years||=0,this.sign||=Math.sign(this.years),this.months||=0,this.sign||=Math.sign(this.months),this.weeks||=0,this.sign||=Math.sign(this.weeks),this.days||=0,this.sign||=Math.sign(this.days),this.hours||=0,this.sign||=Math.sign(this.hours),this.minutes||=0,this.sign||=Math.sign(this.minutes),this.seconds||=0,this.sign||=Math.sign(this.seconds),this.milliseconds||=0,this.sign||=Math.sign(this.milliseconds),this.blank=this.sign===0}abs(){return new e(Math.abs(this.years),Math.abs(this.months),Math.abs(this.weeks),Math.abs(this.days),Math.abs(this.hours),Math.abs(this.minutes),Math.abs(this.seconds),Math.abs(this.milliseconds))}static from(t){if(typeof t==`string`){let n=String(t).trim(),r=n.startsWith(`-`)?-1:1,i=n.match(yh)?.slice(1).map(e=>(Number(e)||0)*r);return i?new e(...i):new e}else if(typeof t==`object`){let{years:n,months:r,weeks:i,days:a,hours:o,minutes:s,seconds:c,milliseconds:l}=t;return new e(n,r,i,a,o,s,c,l)}throw RangeError(`invalid duration`)}static compare(t,n){let r=Date.now(),i=Math.abs(Ch(r,e.from(t)).getTime()-r),a=Math.abs(Ch(r,e.from(n)).getTime()-r);return i>a?-1:+(i<a)}toLocaleString(e,t){return new vh(e,t).format(this)}};function Ch(e,t){let n=new Date(e);return t.sign<0?(n.setUTCSeconds(n.getUTCSeconds()+t.seconds),n.setUTCMinutes(n.getUTCMinutes()+t.minutes),n.setUTCHours(n.getUTCHours()+t.hours),n.setUTCDate(n.getUTCDate()+t.weeks*7+t.days),n.setUTCMonth(n.getUTCMonth()+t.months),n.setUTCFullYear(n.getUTCFullYear()+t.years)):(n.setUTCFullYear(n.getUTCFullYear()+t.years),n.setUTCMonth(n.getUTCMonth()+t.months),n.setUTCDate(n.getUTCDate()+t.weeks*7+t.days),n.setUTCHours(n.getUTCHours()+t.hours),n.setUTCMinutes(n.getUTCMinutes()+t.minutes),n.setUTCSeconds(n.getUTCSeconds()+t.seconds)),n}function wh(e,t=`second`,n=Date.now()){let r=e.getTime()-n;if(r===0)return new Sh;let i=Math.sign(r),a=Math.abs(r),o=Math.floor(a/1e3),s=Math.floor(o/60),c=Math.floor(s/60),l=Math.floor(c/24),u=Math.floor(l/30),d=Math.floor(u/12),f=bh.indexOf(t)||bh.length;return new Sh(f>=0?d*i:0,f>=1?(u-d*12)*i:0,0,f>=3?(l-u*30)*i:0,f>=4?(c-l*24)*i:0,f>=5?(s-c*60)*i:0,f>=6?(o-s*60)*i:0,f>=7?(a-o*1e3)*i:0)}function Th(e,{relativeTo:t=Date.now()}={}){if(t=new Date(t),e.blank)return e;let n=e.sign,r=Math.abs(e.years),i=Math.abs(e.months),a=Math.abs(e.weeks),o=Math.abs(e.days),s=Math.abs(e.hours),c=Math.abs(e.minutes),l=Math.abs(e.seconds),u=Math.abs(e.milliseconds);u>=900&&(l+=Math.round(u/1e3)),(l||c||s||o||a||i||r)&&(u=0),l>=55&&(c+=Math.round(l/60)),(c||s||o||a||i||r)&&(l=0),c>=55&&(s+=Math.round(c/60)),(s||o||a||i||r)&&(c=0),o&&s>=12&&(o+=Math.round(s/24)),!o&&s>=21&&(o+=Math.round(s/24)),(o||a||i||r)&&(s=0);let d=t.getFullYear(),f=t.getMonth(),p=t.getDate();if(o>=27||r+i+o){let e=new Date(t);e.setDate(1),e.setMonth(f+i*n+1),e.setDate(0);let s=Math.max(0,p-e.getDate()),c=new Date(t);c.setFullYear(d+r*n),c.setDate(p-s),c.setMonth(f+i*n),c.setDate(p-s+o*n);let l=c.getFullYear()-t.getFullYear(),u=c.getMonth()-t.getMonth(),m=Math.abs(Math.round((Number(c)-Number(t))/864e5))+s,h=Math.abs(l*12+u);m<27?(o>=6?(a+=Math.round(o/7),o=0):o=m,i=r=0):h<=11?(i=h,r=0):(i=0,r=l*n),(i||r)&&(o=0)}return r&&(i=0),a>=4&&(i+=Math.round(a/4)),(i||r)&&(a=0),o&&a&&!i&&!r&&(a+=Math.round(o/7),o=0),new Sh(r*n,i*n,a*n,o*n,s*n,c*n,l*n,u*n)}function Eh(e,t){let n=Th(e,t);if(n.blank)return[0,`second`];for(let e of bh){if(e===`millisecond`)continue;let t=n[`${e}s`];if(t)return[t,e]}return[0,`second`]}var Q=function(e,t,n,r){if(n===`a`&&!r)throw TypeError(`Private accessor was defined without a getter`);if(typeof t==`function`?e!==t||!r:!t.has(e))throw TypeError(`Cannot read private member from an object whose class did not declare it`);return n===`m`?r:n===`a`?r.call(e):r?r.value:t.get(e)},Dh=function(e,t,n,r,i){if(r===`m`)throw TypeError(`Private method is not writable`);if(r===`a`&&!i)throw TypeError(`Private accessor was defined without a setter`);if(typeof t==`function`?e!==t||!i:!t.has(e))throw TypeError(`Cannot write private member to an object whose class did not declare it`);return r===`a`?i.call(e,n):i?i.value=n:t.set(e,n),n},$,Oh,kh,Ah,jh,Mh,Nh,Ph,Fh,Ih,Lh,Rh,zh,Bh,Vh,Hh,Uh=globalThis.HTMLElement||null,Wh=new Sh,Gh=new Sh(0,0,0,0,0,1),Kh=class extends Event{constructor(e,t,n,r){super(`relative-time-updated`,{bubbles:!0,composed:!0}),this.oldText=e,this.newText=t,this.oldTitle=n,this.newTitle=r}};function qh(e){if(!e.date)return 1/0;if(e.format===`duration`||e.format===`elapsed`){let t=e.precision;if(t===`second`)return 1e3;if(t===`minute`)return 60*1e3}let t=Math.abs(Date.now()-e.date.getTime());return t<60*1e3?1e3:t<3600*1e3?60*1e3:3600*1e3}var Jh=new class{constructor(){this.elements=new Set,this.time=1/0,this.timer=-1}observe(e){if(this.elements.has(e))return;this.elements.add(e);let t=e.date;if(t&&t.getTime()){let t=qh(e),n=Date.now()+t;n<this.time&&(clearTimeout(this.timer),this.timer=setTimeout(()=>this.update(),t),this.time=n)}}unobserve(e){this.elements.has(e)&&this.elements.delete(e)}update(){if(clearTimeout(this.timer),!this.elements.size)return;let e=1/0;for(let t of this.elements)e=Math.min(e,qh(t)),t.update();this.time=Math.min(3600*1e3,e),this.timer=setTimeout(()=>this.update(),this.time),this.time+=Date.now()}},Yh=class extends Uh{constructor(){super(...arguments),$.add(this),Oh.set(this,!1),kh.set(this,!1),jh.set(this,this.shadowRoot?this.shadowRoot:this.attachShadow?this.attachShadow({mode:`open`}):this),Hh.set(this,null)}static define(e=`relative-time`,t=customElements){return t.define(e,this),this}get timeZone(){return this.closest(`[time-zone]`)?.getAttribute(`time-zone`)||this.ownerDocument.documentElement.getAttribute(`time-zone`)||void 0}static get observedAttributes(){return[`second`,`minute`,`hour`,`weekday`,`day`,`month`,`year`,`time-zone-name`,`prefix`,`threshold`,`tense`,`precision`,`format`,`format-style`,`no-title`,`datetime`,`lang`,`title`,`aria-hidden`,`time-zone`]}get onRelativeTimeUpdated(){return Q(this,Hh,`f`)}set onRelativeTimeUpdated(e){Q(this,Hh,`f`)&&this.removeEventListener(`relative-time-updated`,Q(this,Hh,`f`)),Dh(this,Hh,typeof e==`object`||typeof e==`function`?e:null,`f`),typeof e==`function`&&this.addEventListener(`relative-time-updated`,e)}get second(){let e=this.getAttribute(`second`);if(e===`numeric`||e===`2-digit`)return e}set second(e){this.setAttribute(`second`,e||``)}get minute(){let e=this.getAttribute(`minute`);if(e===`numeric`||e===`2-digit`)return e}set minute(e){this.setAttribute(`minute`,e||``)}get hour(){let e=this.getAttribute(`hour`);if(e===`numeric`||e===`2-digit`)return e}set hour(e){this.setAttribute(`hour`,e||``)}get weekday(){let e=this.getAttribute(`weekday`);if(e===`long`||e===`short`||e===`narrow`)return e;if(this.format===`datetime`&&e!==``)return this.formatStyle}set weekday(e){this.setAttribute(`weekday`,e||``)}get day(){let e=this.getAttribute(`day`)??`numeric`;if(e===`numeric`||e===`2-digit`)return e}set day(e){this.setAttribute(`day`,e||``)}get month(){let e=this.format,t=this.getAttribute(`month`);if(t!==``&&(t??=e===`datetime`?this.formatStyle:`short`,t===`numeric`||t===`2-digit`||t===`short`||t===`long`||t===`narrow`))return t}set month(e){this.setAttribute(`month`,e||``)}get year(){let e=this.getAttribute(`year`);if(e===`numeric`||e===`2-digit`)return e;if(!this.hasAttribute(`year`)&&new Date().getUTCFullYear()!==this.date?.getUTCFullYear())return`numeric`}set year(e){this.setAttribute(`year`,e||``)}get timeZoneName(){let e=this.getAttribute(`time-zone-name`);if(e===`long`||e===`short`||e===`shortOffset`||e===`longOffset`||e===`shortGeneric`||e===`longGeneric`)return e}set timeZoneName(e){this.setAttribute(`time-zone-name`,e||``)}get prefix(){return this.getAttribute(`prefix`)??(this.format===`datetime`?``:`on`)}set prefix(e){this.setAttribute(`prefix`,e)}get threshold(){let e=this.getAttribute(`threshold`);return e&&xh(e)?e:`P30D`}set threshold(e){this.setAttribute(`threshold`,e)}get tense(){let e=this.getAttribute(`tense`);return e===`past`?`past`:e===`future`?`future`:`auto`}set tense(e){this.setAttribute(`tense`,e)}get precision(){let e=this.getAttribute(`precision`);return bh.includes(e)?e:this.format===`micro`?`minute`:`second`}set precision(e){this.setAttribute(`precision`,e)}get format(){let e=this.getAttribute(`format`);return e===`datetime`?`datetime`:e===`relative`?`relative`:e===`duration`?`duration`:e===`micro`?`micro`:e===`elapsed`?`elapsed`:`auto`}set format(e){this.setAttribute(`format`,e)}get formatStyle(){let e=this.getAttribute(`format-style`);if(e===`long`)return`long`;if(e===`short`)return`short`;if(e===`narrow`)return`narrow`;let t=this.format;return t===`elapsed`||t===`micro`?`narrow`:t===`datetime`?`short`:`long`}set formatStyle(e){this.setAttribute(`format-style`,e)}get noTitle(){return this.hasAttribute(`no-title`)}set noTitle(e){this.toggleAttribute(`no-title`,e)}get datetime(){return this.getAttribute(`datetime`)||``}set datetime(e){this.setAttribute(`datetime`,e)}get date(){let e=Date.parse(this.datetime);return Number.isNaN(e)?null:new Date(e)}set date(e){this.datetime=e?.toISOString()||``}connectedCallback(){this.update()}disconnectedCallback(){Jh.unobserve(this)}attributeChangedCallback(e,t,n){t!==n&&(e===`title`&&Dh(this,Oh,n!==null&&(this.date&&Q(this,$,`m`,Mh).call(this,this.date))!==n,`f`),!Q(this,kh,`f`)&&!(e===`title`&&Q(this,Oh,`f`))&&Dh(this,kh,(async()=>{await Promise.resolve(),this.update(),Dh(this,kh,!1,`f`)})(),`f`))}update(){let e=Q(this,jh,`f`).textContent||this.textContent||``,t=this.getAttribute(`title`)||``,n=t,r=this.date;if(typeof Intl>`u`||!Intl.DateTimeFormat||!r){Q(this,jh,`f`).textContent=e;return}let i=Date.now();Q(this,Oh,`f`)||(n=Q(this,$,`m`,Mh).call(this,r)||``,n&&!this.noTitle&&this.setAttribute(`title`,n));let a=wh(r,this.precision,i),o=Q(this,$,`m`,Nh).call(this,a),s=e,c=Q(this,$,`m`,Vh).call(this,o);s=c?Q(this,$,`m`,zh).call(this,r):o===`duration`?Q(this,$,`m`,Ph).call(this,a):o===`relative`?Q(this,$,`m`,Fh).call(this,a):Q(this,$,`m`,Ih).call(this,r),s?Q(this,$,`m`,Bh).call(this,s):this.shadowRoot===Q(this,jh,`f`)&&this.textContent&&Q(this,$,`m`,Bh).call(this,this.textContent),(s!==e||n!==t)&&this.dispatchEvent(new Kh(e,s,t,n)),o===`relative`||o===`duration`||c&&(Q(this,$,`m`,Lh).call(this,r)||Q(this,$,`m`,Rh).call(this,r))?Jh.observe(this):Jh.unobserve(this)}};Oh=new WeakMap,kh=new WeakMap,jh=new WeakMap,Hh=new WeakMap,$=new WeakSet,Ah=function(){let e=this.closest(`[lang]`)?.getAttribute(`lang`)||this.ownerDocument.documentElement.getAttribute(`lang`);try{return new Intl.Locale(e??``).toString()}catch{return`default`}},Mh=function(e){return new Intl.DateTimeFormat(Q(this,$,`a`,Ah),{day:`numeric`,month:`short`,year:`numeric`,hour:`numeric`,minute:`2-digit`,timeZoneName:`short`,timeZone:this.timeZone}).format(e)},Nh=function(e){let t=this.format;if(t===`datetime`)return`datetime`;if(t===`duration`||t===`elapsed`||t===`micro`)return`duration`;if((t===`auto`||t===`relative`)&&typeof Intl<`u`&&Intl.RelativeTimeFormat){let t=this.tense;if(t===`past`||t===`future`||Sh.compare(e,this.threshold)===1)return`relative`}return`datetime`},Ph=function(e){let t=Q(this,$,`a`,Ah),n=this.format,r=this.formatStyle,i=this.tense,a=Wh;n===`micro`?(e=Th(e),a=Gh,e.months===0&&(this.tense===`past`&&e.sign!==-1||this.tense===`future`&&e.sign!==1)&&(e=Gh)):(i===`past`&&e.sign!==-1||i===`future`&&e.sign!==1)&&(e=a);let o=`${this.precision}sDisplay`;return e.blank?a.toLocaleString(t,{style:r,[o]:`always`}):e.abs().toLocaleString(t,{style:r})},Fh=function(e){let t=new Intl.RelativeTimeFormat(Q(this,$,`a`,Ah),{numeric:`auto`,style:this.formatStyle}),n=this.tense;n===`future`&&e.sign!==1&&(e=Wh),n===`past`&&e.sign!==-1&&(e=Wh);let[r,i]=Eh(e);return i===`second`&&r<10?t.format(0,this.precision===`millisecond`?`second`:this.precision):t.format(r,i)},Ih=function(e){let t=new Intl.DateTimeFormat(Q(this,$,`a`,Ah),{second:this.second,minute:this.minute,hour:this.hour,weekday:this.weekday,day:this.day,month:this.month,year:this.year,timeZoneName:this.timeZoneName,timeZone:this.timeZone});return`${this.prefix} ${t.format(e)}`.trim()},Lh=function(e){let t=new Date,n=new Intl.DateTimeFormat(Q(this,$,`a`,Ah),{timeZone:this.timeZone,year:`numeric`,month:`2-digit`,day:`2-digit`});return n.format(t)===n.format(e)},Rh=function(e){let t=new Date,n=new Intl.DateTimeFormat(Q(this,$,`a`,Ah),{timeZone:this.timeZone,year:`numeric`});return n.format(t)===n.format(e)},zh=function(e){let t={hour:`numeric`,minute:`2-digit`,timeZoneName:`short`,timeZone:this.timeZone};if(Q(this,$,`m`,Lh).call(this,e)){let n=new Intl.RelativeTimeFormat(Q(this,$,`a`,Ah),{numeric:`auto`}).format(0,`day`);n=n.charAt(0).toLocaleUpperCase(Q(this,$,`a`,Ah))+n.slice(1);let r=new Intl.DateTimeFormat(Q(this,$,`a`,Ah),t).format(e);return`${n} ${r}`}let n=Object.assign(Object.assign({},t),{day:`numeric`,month:`short`});return Q(this,$,`m`,Rh).call(this,e)?new Intl.DateTimeFormat(Q(this,$,`a`,Ah),n).format(e):new Intl.DateTimeFormat(Q(this,$,`a`,Ah),Object.assign(Object.assign({},n),{year:`numeric`})).format(e)},Bh=function(e){if(this.hasAttribute(`aria-hidden`)&&this.getAttribute(`aria-hidden`)===`true`){let t=document.createElement(`span`);t.setAttribute(`aria-hidden`,`true`),t.textContent=e,Q(this,jh,`f`).replaceChildren(t)}else Q(this,jh,`f`).textContent=e},Vh=function(e){return e===`duration`?!1:this.ownerDocument.documentElement.getAttribute(`data-prefers-absolute-time`)===`true`||this.ownerDocument.body?.getAttribute(`data-prefers-absolute-time`)===`true`};var Xh=typeof globalThis<`u`?globalThis:window;try{Xh.RelativeTimeElement=Yh.define()}catch(e){if(!(Xh.DOMException&&e instanceof DOMException&&e.name===`NotSupportedError`)&&!(e instanceof ReferenceError))throw e}Object.values({Enabled:`enabled`,Disabled:`disabled`,Live:`live`,Pending:`pending`,Expired:`expired`,Active:`active`,Suspended:`suspended`,Inactive:`inactive`});var Zh={on:`teal`,live:`teal`,active:`teal`,enabled:`teal`,turquoise:`teal`,off:`red`,suspended:`red`,expired:`red`,warning:`amber`,pending:`sky`,grey:`gray`};function Qh(e){return e?Zh[e]||(We.includes(e)?e:`gray`):`gray`}export{Ba as _,Wm as a,We as b,Pm as c,td as d,ql as f,Eo as g,es as h,Bm as i,Em as l,ss as m,$m as n,Vm as o,Wl as p,Um as r,Lm as s,Qh as t,Ff as u,dr as v,Ue as x,xt as y};