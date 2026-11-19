import{a as e,t}from"./rolldown-runtime-CNC7AqOf.js";import{n}from"./translate.ts-DW16fAdu.js";import{t as r}from"./decorate-B3KLIx2E-B3KLIx2E.js";import{a as i,d as a,f as o,i as s,n as c,o as l,r as u,s as d,t as f,u as p}from"./decorators-B_wqftM0.js";import{t as m}from"./query-Df4-SAIv.js";import{B as h,C as g,D as _,G as v,H as y,J as b,K as x,N as S,O as C,P as w,R as T,S as E,U as ee,V as te,W as D,X as ne,Y as re,Z as ie,_ as ae,a as oe,b as se,c as ce,d as le,f as ue,g as de,h as fe,i as pe,j as me,l as he,m as ge,n as _e,o as ve,p as ye,q as be,r as xe,s as Se,t as Ce,u as we,v as Te,w as Ee,x as De,y as Oe,z as ke}from"./field-DhFnCDCC-BANpp5P0.js";import{a as Ae,n as je,t as Me}from"./external-links.ts-D9CFywYE.js";import{a as O,i as k,n as A,o as j,r as M}from"./Config.ts-CMTyoefP.js";import"./http.ts-Dxb5bouu.js";import{r as Ne}from"./actionClient-DlCWcHgA-BOe1VjYK.js";import"./button-group-B31Aahk_-CaInXewD.js";import{t as Pe}from"./thumbnail-loader.ts-DV_9QuIU.js";import{n as Fe}from"./focus-trap.ts-CYkx7NGB.js";import"./progress.ts-DaLxTC_8.js";import"./apiClient.ts-Dxzf5kBZ.js";var Ie=a`
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
`,Le=class extends u{constructor(...e){super(...e),this.label=null,this._gradientId=null}connectedCallback(){super.connectedCallback(),this._gradientId=`avatar-gradient-${Math.random().toString(36).slice(2,8)}`}text(){return this.label?this.label.split(` `).map(e=>e.charAt(0).toUpperCase()).join(``):`?`}render(){return p`
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
    `}};Le.styles=[Ie],r([c()],Le.prototype,`label`,void 0),r([f()],Le.prototype,`_gradientId`,void 0),customElements.get(`craft-avatar`)||customElements.define(`craft-avatar`,Le);var Re=[`red`,`orange`,`amber`,`yellow`,`lime`,`green`,`emerald`,`teal`,`cyan`,`sky`,`blue`,`indigo`,`violet`,`purple`,`fuchsia`,`pink`,`rose`,`white`,`gray`,`black`,`slate`],ze=[`white`,`gray`,`slate`,`black`],Be={neutral:`slate`,accent:`blue`,info:`sky`,success:`emerald`,warning:`yellow`,danger:`red`},Ve={pending:`sky`,off:`red`,suspended:`red`,expired:`red`,disabled:`gray`,inactive:`gray`,on:`teal`},He=ze.map(e=>`[data-color='${e}']`).join(`, `);function Ue(e=``){return o(`:host([data-color]:not(${He})${e})`)}var We=e=>e.charAt(0).toUpperCase()+e.slice(1),Ge={...Object.fromEntries(Re.map(e=>[We(e),e])),...Object.fromEntries(Object.entries(Be).map(([e,t])=>[We(e),t])),...Object.fromEntries(Object.entries(Ve).map(([e,t])=>[We(e),t]))},Ke=[...Re],qe=class extends u{constructor(...e){super(...e),this.size=`md`,this.fill=`var(--c-color-fill-loud)`,this.label=null}get effectiveAppearance(){return this.appearance?this.appearance:this.fill===Ge.White||this.fill===Ge.Black?we.OutlineFill:we.Solid}getFill(){return Ke.includes(this.fill)||be.includes(this.fill)?`var(--c-color-${this.fill}-fill-loud)`:this.fill}getSize(){switch(this.size){case`md`:return`0.6em`;case`lg`:return`1em`;default:return this.size}}render(){return p`<span
      style="--fill: ${this.getFill()}; --size: ${this.getSize()}"
      aria-label="${this.label??i}"
      role="${this.label?`img`:i}"
      class="${w({indicator:!0,[`indicator--${this.effectiveAppearance}`]:!0,"indicator--white":this.fill===Ge.White,"indicator--black":this.fill===Ge.Black})}"
    ></span>`}};qe.styles=[b,a`
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
        border-color: var(--c-indicator-ring, transparent);
      }

      .indicator--outline {
        background: transparent;
        border-color: var(--_fill);
      }
    `],r([c()],qe.prototype,`size`,void 0),r([c({reflect:!0})],qe.prototype,`fill`,void 0),r([c()],qe.prototype,`label`,void 0),r([c({reflect:!0})],qe.prototype,`appearance`,void 0),customElements.get(`craft-indicator`)||customElements.define(`craft-indicator`,qe);var Je={Small:`small`,Medium:`medium`,Large:`large`};Object.values(Je);var Ye=a`
  :host {
    display: inline-flex;
  }

  /*
   * As with chips, a blue link would clash with the fill, so links take the
   * badge's text color, and are underlined so they still stand apart from it.
   * Neutral badges keep the default link styling (a black badge's contents
   * take the dark theme's).
   */
  ${Ue()} {
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

  ${Ue()} ::slotted(craft-icon) {
    color: inherit;
  }

  .badge__label--text {
    display: block;
    text-box: trim-both cap alphabetic;
  }
`,Xe=class extends u{constructor(...e){super(...e),this.fill=Ge.Gray,this.noPrefix=!1,this.size=Je.Medium,this.hasLabel=!1,this.hasTextLabel=!1,this.hasSuffix=!1,this.contentObserver=new MutationObserver(()=>this.readContent())}connectedCallback(){super.connectedCallback(),this.readContent(),this.contentObserver.observe(this,{childList:!0,characterData:!0,subtree:!0,attributes:!0,attributeFilter:[`slot`]})}disconnectedCallback(){super.disconnectedCallback(),this.contentObserver.disconnect()}readContent(){let e=[...this.childNodes];this.hasLabel=e.some(e=>e instanceof Element&&!e.hasAttribute(`slot`)||e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!==``),this.hasTextLabel=this.hasLabel&&!e.some(e=>e instanceof Element&&!e.slot),this.hasSuffix=e.some(e=>e instanceof Element&&e.slot===`suffix`)}getFill(){return this.fill}willUpdate(e){e.has(`fill`)&&(this.dataset.color=this.getFill())}render(){return p`
      <span
        part="badge"
        class="${w({badge:!0,"badge--small":this.size===Je.Small,"badge--large":this.size===Je.Large,"badge--labeled":this.hasLabel})}"
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
              class="${w({"badge__label--text":this.hasTextLabel})}"
            ></slot>`:i}
        ${this.hasSuffix?p`<span class="badge__suffix">
              <slot name="suffix" part="suffix"></slot>
            </span>`:i}
      </span>
    `}};Xe.styles=[Ye],r([c({reflect:!0})],Xe.prototype,`fill`,void 0),r([c({attribute:`no-prefix`,type:Boolean})],Xe.prototype,`noPrefix`,void 0),r([c()],Xe.prototype,`size`,void 0),r([f()],Xe.prototype,`hasLabel`,void 0),r([f()],Xe.prototype,`hasTextLabel`,void 0),r([f()],Xe.prototype,`hasSuffix`,void 0),customElements.get(`craft-badge`)||customElements.define(`craft-badge`,Xe);var Ze=class extends u{constructor(...e){super(...e),this.rel=`noreferrer noopener`}render(){let e=Me(this.href,this.target);return p`
      <slot name="prefix" part="prefix"></slot>
      ${this.href?p`<a
          part="label"
          class="label"
          href=${this.href}
          target=${e??i}
          rel=${e?this.rel:i}
          ><slot></slot>${!this.target&&e?p`<span class="cp-visually-hidden">${Ae()}</span>`:i}</a
        >`:p`<span part="label" class="label"><slot></slot></span>`}
      <slot name="suffix" part="suffix"></slot>
      <slot name="separator" part="separator" aria-hidden="true"></slot>
    `}};Ze.styles=[D,a`
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
    `],r([c({reflect:!0})],Ze.prototype,`href`,void 0),r([c()],Ze.prototype,`target`,void 0),r([c()],Ze.prototype,`rel`,void 0),customElements.get(`craft-breadcrumb-item`)||customElements.define(`craft-breadcrumb-item`,Ze);var Qe=a`
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
`,$e=class extends u{constructor(...e){super(...e),this.label=n(`Breadcrumbs`),this.items=[],this.visibleItems=0,this.firstRender=!0}getSeparator(){let e=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[e,...e.querySelectorAll(`[id]`)].forEach(e=>e.removeAttribute(`id`)),e.setAttribute(`data-default`,``),e.slot=`separator`,e}calculateBreadcrumbItemsWidth(){this.items=this.breadcrumbsElements.map((e,t)=>{let n=e.offsetWidth;return e.hasAttribute(`hidden`)&&(e.removeAttribute(`hidden`),n=e.offsetWidth,e.setAttribute(`hidden`,``)),{label:e.innerText,href:e.href,value:t.toString(),offsetWidth:n,isVisible:!0}})}async handleSlotChange(){let e=[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>e.tagName.toLowerCase()===`craft-breadcrumb-item`);if(e.forEach((t,n)=>{let r=n===e.length-1,i=t.querySelector(`[slot="separator"]`);r?i?.hasAttribute(`data-default`)&&i.remove():i===null?t.append(this.getSeparator()):i.hasAttribute(`data-default`)&&i.replaceWith(this.getSeparator()),r?t.setAttribute(`aria-current`,`page`):t.removeAttribute(`aria-current`)}),this.breadcrumbsElements.length===0){this.items=[],this.visibleItems=0;return}await Promise.all(this.breadcrumbsElements.map(e=>e.updateComplete)),this.calculateBreadcrumbItemsWidth(),this.visibleItems=0,this.adjustOverflow()}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{if(this.firstRender){this.firstRender=!1;return}this.adjustOverflow()}),this.resizeObserver.observe(this)}adjustOverflow(){}disconnectedCallback(){this.resizeObserver?.unobserve(this),super.disconnectedCallback()}render(){return p`
      <nav class="breadcrumbs" aria-label="${this.label}">
        <slot @slotchange="${this.handleSlotChange}"></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator"><span class="separator">/</span></slot>
      </span>
    `}};$e.styles=[Qe],r([m(`slot`)],$e.prototype,`defaultSlot`,void 0),r([m(`slot[name="separator"]`)],$e.prototype,`separatorSlot`,void 0),r([ie({selector:`craft-breadcrumb-item`})],$e.prototype,`breadcrumbsElements`,void 0),r([c()],$e.prototype,`label`,void 0),r([f()],$e.prototype,`items`,void 0),r([f()],$e.prototype,`visibleItems`,void 0),customElements.get(`craft-breadcrumbs`)||customElements.define(`craft-breadcrumbs`,$e);var et={dark:.9,light:.85},tt={dark:.6,light:.52},nt=.65,rt=.8;function it(e){let t=e.flat().filter(e=>e!==null);return t.length?Math.min(...t.map(([e])=>e))>=.25?`light`:`dark`:null}function at(e,t){let n=Array.isArray(e)?e:[],r=n.length&&it(n.slice(0,1))||`dark`,i=n.length&&it(n.slice(-1))||`dark`;return{header:t?{theme:r,treatment:`bar`,opacity:tt[r]}:{theme:r,treatment:`backed`,opacity:nt},body:{theme:i,opacity:tt[i]}}}var ot=a`
  :host {
    display: block;
  }

  /* On a tinted card links take the card's text color, and are underlined so
     they still stand apart from it. Neutral cards keep the default link
     styling (black's contents take the dark theme's). */
  ${Ue()} {
    --c-text-link: currentColor;
    --c-link-decoration: underline;
    --c-link-decoration-hover: none;
  }

  /* What's in a tinted card takes the card's color rather than gray, as its
     body does: neutral controls and hairlines, the selected tab's indicator,
     form control and checkbox borders, UI text, and input placeholders. */
  ${Ue()} ::slotted(*) {
    --c-color-neutral-fill-quiet: var(--_colorable-fill-quiet);
    --c-color-neutral-fill-normal: var(--_colorable-fill-normal);
    --c-color-neutral-fill-loud: var(--_colorable-fill-loud);
    --c-color-neutral-border-quiet: var(--_colorable-border-quiet);
    --c-color-neutral-border-normal: var(--_colorable-border-normal);
    --c-color-neutral-border-loud: var(--_colorable-border-loud);
    --c-color-neutral-on-quiet: var(--_colorable-on-quiet);
    --c-color-neutral-on-normal: var(--_colorable-on-normal);
    --c-color-neutral-on-loud: var(--_colorable-on-loud);
    --c-tab-indicator-fill-active: var(--_colorable-on-quiet);
    --c-form-control-border-color: var(--_colorable-border-normal);
    --c-text-default: var(--_colorable-on-quiet);
    --c-text-quiet: color-mix(
      in oklab,
      var(--_colorable-on-quiet) 75%,
      var(--_colorable-fill-quiet)
    );
    --c-form-control-placeholder: var(--c-text-quiet);
  }

  /* A neutral card re-resolves the tokens a tinted card recolors (see
     tokens.css). The selected tab's indicator has no token of its own to go
     back to, so it's cleared, leaving tabs their default. */
  :host(:is([data-color='white'], [data-color='gray'], [data-color='slate'])) {
    --c-tab-indicator-fill-active: initial;
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
      /* Plain controls here are pressed over the quiet fill, which would be a
         light patch under the header's light text. */
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
`,st=e=>{if(typeof e!=`string`)return e;try{let t=JSON.parse(e);return Array.isArray(t)?t:null}catch{return null}},ct=e=>e===`dark`?`rgb(255 255 255 / ${et.dark})`:`rgb(0 0 0 / ${et.light})`,lt=e=>e===`dark`?`#000`:`#fff`,ut=e=>e===`dark`?`#fff`:`#000`,dt=(e,t)=>e===`dark`?`rgb(0 0 0 / ${t})`:`rgb(255 255 255 / ${t})`,ft=e=>e===`dark`?`rgb(255 255 255 / 20%)`:`rgb(0 0 0 / 15%)`,pt=class extends he(u,{customProperty:[`--c-card-padding-block`,`--c-card-padding-inline`]}){constructor(...e){super(...e),this.label=``,this.active=!1,this.collapsed=!1,this.showThumb=!0,this.thumbAlignment=`start`,this.coverSrc=``,this._coverFailed=!1,this.luminance=null,this._luminance=null,this._themed=new Set,this._lightDom=new v(this,{characterData:!0}),this._onCoverError=()=>{this._coverFailed=!0}}_hasLabel(){return!!this.label||x(this,`label`)||Array.from(this.children).some(e=>e.slot===`header`&&!!e.querySelector(`[data-card-label]`))}_hasHeaderText(){return this._hasLabel()||x(this,`badge`)}_hasHeaderContent(){let e=e=>e.tagName===`DIV`||e.tagName===`SPAN`;return!!this.label||Array.from(this.children).some(t=>[`header`,`label`,`badge`,`actions`].includes(t.slot)&&(!!t.textContent?.trim()||!e(t)||Array.from(t.querySelectorAll(`*`)).some(t=>!e(t))))}_cover(){return this.coverSrc&&!this._coverFailed?at(this._luminance,this._hasHeaderText()):null}willUpdate(e){super.willUpdate(e),e.has(`luminance`)&&(this._luminance=st(this.luminance)),e.has(`coverSrc`)&&(this._coverFailed=!1)}_coverStyles(e){if(!e)return{};let{header:t,body:n}=e;return{"--_header-ink":ct(t.theme),"--_header-ink-solid":ut(t.theme),"--_header-solid":lt(t.theme),"--_header-fill":dt(t.theme,t.opacity),"--_header-backing":t.treatment===`backed`?dt(t.theme,t.opacity):void 0,"--_header-backing-hover":t.treatment===`backed`?dt(t.theme,rt):void 0,"--_header-rule":ft(t.theme),"--_body-ink":ct(n.theme),"--_body-ink-solid":ut(n.theme),"--_body-solid":lt(n.theme),"--_body-scrim":String(n.opacity),"--_body-rule":ft(n.theme)}}updated(){let e=this._cover(),t=new Set;if(e)for(let n of Array.from(this.children)){if(n.slot===`thumbnail`)continue;let r=n.slot===``||n.slot===`footer`;n.setAttribute(`data-theme`,r?e.body.theme:e.header.theme),n.setAttribute(`data-cover`,r?`body`:e.header.treatment),t.add(n)}for(let e of this._themed)t.has(e)||(e.removeAttribute(`data-theme`),e.removeAttribute(`data-cover`));this._themed=t}render(){let e=this._hasHeaderContent(),t=x(this,`footer`),n=this._cover(),r=!n&&this.showThumb&&x(this,`thumbnail`),a=!n&&e&&!this._hasLabel();return p`
      <div
        part="base"
        class="${w({card:!0,"card--has-thumbnail":r,"card--cover":!!n,"card--cover-bar":n?.header.treatment===`bar`,"card--bare-header":a})}"
        style="${ce({...this.paddingStyles,...this._coverStyles(n)})}"
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
          class="${w({"card-body":!0,"card-body--thumb-start":r&&this.thumbAlignment===`start`,"card-body--thumb-end":r&&this.thumbAlignment===`end`})}"
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
    `}};pt.styles=[ot],r([c()],pt.prototype,`label`,void 0),r([c({type:Boolean,reflect:!0})],pt.prototype,`active`,void 0),r([c({type:Boolean,reflect:!0})],pt.prototype,`collapsed`,void 0),r([c({attribute:`show-thumb`,type:Boolean})],pt.prototype,`showThumb`,void 0),r([c({attribute:`thumb-alignment`})],pt.prototype,`thumbAlignment`,void 0),r([c({attribute:`cover-src`})],pt.prototype,`coverSrc`,void 0),r([f()],pt.prototype,`_coverFailed`,void 0),r([c({type:Array})],pt.prototype,`luminance`,void 0),customElements.get(`craft-card`)||customElements.define(`craft-card`,pt);var mt={ArrowDown:1,ArrowRight:1,ArrowUp:-1,ArrowLeft:-1},ht=(e,{choice:t,multiple:n})=>{var i=new WeakMap,a=new WeakMap,o=new WeakMap,s=new WeakMap,l=new WeakMap,u=new WeakMap,d=new WeakSet,f=new WeakMap,m=new WeakMap;class h extends Se(e){constructor(...e){super(...e),O(this,d),this.name=``,this.required=!1,this.invalid=!1,this.multiple=n,M(this,i,void 0),M(this,a,[]),M(this,o,!1),M(this,s,new WeakSet),M(this,l,new WeakSet),M(this,u,new MutationObserver(e=>{if(j(d,this,b).call(this),!n){let t=this.choices,n=e.map(e=>e.target).reverse().find(e=>t.includes(e)&&e.checked&&e.hasAttribute(`checked`));if(n)j(d,this,C).call(this,n);else for(let e of t)e._syncFromControl?.()}j(d,this,S).call(this)})),M(this,f,e=>{let t=mt[e.key],r=j(d,this,x).call(this,e.target);if(n||this.name||!t||!r||e.altKey||e.ctrlKey||e.metaKey)return;let i=this.choices.filter(e=>!e.disabled),a=e.key!==`ArrowDown`&&e.key!==`ArrowUp`&&getComputedStyle(this).direction===`rtl`,o=i.at((i.indexOf(r)+(a?-t:t))%i.length);o&&(e.preventDefault(),o._control?.focus(),o.checked||o._control?.click())}),M(this,m,e=>{let t=j(d,this,x).call(this,e.target);t&&(A(i,this,void 0),t._syncFromControl(),!n&&t.checked&&j(d,this,C).call(this,t),e.type===`change`&&this.requestUpdate(`value`))})}get choices(){return[...this.querySelectorAll(t)].filter(e=>e.parentElement?.closest(this.localName)===this)}get value(){let e=this.choices.filter(e=>e.checked).map(e=>e.value);return n?e:e[0]??``}set value(e){let t=this.value,n=(Array.isArray(e)?e:e==null||e===``?[]:[e]).map(String);A(i,this,n),j(d,this,y).call(this,this.choices,n),this.requestUpdate(`value`,t)}get _control(){return this}connectedCallback(){j(d,this,g).call(this),super.connectedCallback(),this.setAttribute(`role`,n?`group`:`radiogroup`),this._labelNode?.removeAttribute(`for`),this.classList.remove(`form-control`),this.addEventListener(`input`,k(m,this),!0),this.addEventListener(`change`,k(m,this),!0),this.addEventListener(`keydown`,k(f,this)),k(u,this).observe(this,{childList:!0,subtree:!0,...n?{}:{attributes:!0,attributeFilter:[`checked`,`disabled`]}}),A(a,this,[]),j(d,this,b).call(this)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`input`,k(m,this),!0),this.removeEventListener(`change`,k(m,this),!0),this.removeEventListener(`keydown`,k(f,this)),k(u,this).disconnect()}willUpdate(e){super.willUpdate(e),j(d,this,g).call(this)}updated(e){if(super.updated(e),e.has(`name`)&&k(o,this))for(let e of this.choices)e.name=this.name;if(e.has(`disabled`)&&e.get(`disabled`)!==void 0)for(let e of this.choices)this.disabled?j(d,this,_).call(this,e):k(s,this).delete(e)&&(e.disabled=!1);let t=(e,t)=>t?this.setAttribute(e,`true`):this.removeAttribute(e);e.has(`required`)&&!n&&t(`aria-required`,this.required),e.has(`invalid`)&&t(`aria-invalid`,this.invalid),j(d,this,S).call(this)}_inputGroupTemplate(){return p`<div class="input-group"><slot></slot></div>`}_onChoicesChanged(){}}function g(){if(this.name&&A(o,this,!0),k(o,this))return;let e=n?`checkbox`:`radio`,t=this.querySelector(`input[type="${e}"][name]`);t&&(this.name=t.name)}function _(e){j(d,this,v).call(this,e)||(e.disabled=!0,k(s,this).add(e))}function v(e){let t=e,n=t.querySelector(`:scope > [slot="input"]`);return e.disabled||t.hasAttribute(`disabled`)||n instanceof HTMLInputElement&&n.disabled}function y(e,t){let r=!1;for(let i of e){let e=t.includes(i.value)&&(n||!r);r||=e,i.checked=e}}function b(){let e=this.choices,t=k(a,this);if(e.length===t.length&&e.every((e,n)=>e===t[n]))return;let n=new Set(t),r=e.filter(e=>!n.has(e));A(a,this,e);for(let e of r)k(o,this)&&(e.name=this.name),this.disabled&&j(d,this,_).call(this,e);k(i,this)&&j(d,this,y).call(this,r,k(i,this)),this._onChoicesChanged(),this.requestUpdate(`value`)}function x(e){let n=e.closest(t);return n?._control===e&&n.parentElement?.closest(this.localName)===this?n:void 0}function S(){if(n)return;let e=this.choices,t=this.name?void 0:e.find(e=>e.checked&&!e.disabled)??e.find(e=>!e.disabled);for(let n of e){let e=n._control;if(e)this.name?k(l,this).delete(e)&&e.removeAttribute(`tabindex`):(e.tabIndex=n===t?0:-1,k(l,this).add(e));else continue}}function C(e){for(let t of this.choices)t!==e&&t.checked&&(t.checked=!1),t._syncFromControl?.()}return r([c({reflect:!0})],h.prototype,`name`,void 0),r([c({type:Boolean})],h.prototype,`required`,void 0),r([c({type:Boolean,reflect:!0})],h.prototype,`invalid`,void 0),r([c({attribute:!1})],h.prototype,`value`,null),h},gt=class extends ht(u,{choice:`craft-checkbox`,multiple:!0}){};gt.styles=[ve,a`
      ${ue}

      .input-group {
        display: grid;
        gap: var(--c-spacing-sm);
      }

      ::slotted(label) {
        font-weight: bold;
      }
    `],customElements.get(`craft-checkbox-group`)||customElements.define(`craft-checkbox-group`,gt);var _t=(e,t)=>{e.dispatchEvent(t===void 0?new Event(`input`,{bubbles:!0,composed:!0}):new InputEvent(`input`,{bubbles:!0,composed:!0,inputType:t}))},vt=e=>{e.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))},yt=[ve,a`
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
  `];function bt(e){return(e??``).split(/\s+/).filter(Boolean)}var xt=e=>{var t=new WeakMap,n=new WeakMap,i=new WeakMap,a=new WeakMap,o=new WeakMap,s=new WeakMap,l=new WeakSet,u=new WeakMap,d=new WeakMap,f=new WeakMap,m=new WeakMap;class h extends Se(e){constructor(...e){super(...e),O(this,l),this.name=``,this.required=!1,this.invalid=!1,M(this,t,void 0),M(this,n,void 0),M(this,i,!1),M(this,a,!1),M(this,o,void 0),M(this,s,void 0),M(this,u,e=>{e.target===this._control&&this._syncFromControl()}),M(this,d,e=>{e.target===g.call(j(l,this))?.form&&setTimeout(()=>this._syncFromControl())}),M(this,f,e=>{let t=this._control;e.target===t&&this.toggleAttribute(`focused-visible`,t.matches(`:focus-visible`))}),M(this,m,e=>{e.target===this._control&&this.removeAttribute(`focused-visible`)})}get checked(){return this._control?.checked??k(t,this)??!1}set checked(e){let n=this.checked,r=this._control;r?r.checked=e:A(t,this,e),this.requestUpdate(`checked`,n)}get value(){return k(n,this)??g.call(j(l,this))?.value??this._defaultValue}set value(e){let t=this.value;A(n,this,e==null?void 0:String(e)),this.requestUpdate(`value`,t)}get _control(){return super._control}get _defaultValue(){return``}connectedCallback(){super.connectedCallback(),j(l,this,_).call(this),this.addEventListener(`change`,k(u,this)),this.addEventListener(`focusin`,k(f,this)),this.addEventListener(`focusout`,k(m,this)),A(s,this,this.getRootNode()),k(s,this).addEventListener(`reset`,k(d,this),!0)}disconnectedCallback(){super.disconnectedCallback(),k(s,this)?.removeEventListener(`reset`,k(d,this),!0),this.removeEventListener(`change`,k(u,this)),this.removeEventListener(`focusin`,k(f,this)),this.removeEventListener(`focusout`,k(m,this))}willUpdate(e){super.willUpdate(e),j(l,this,_).call(this)}updated(e){super.updated(e),this._pushToControl(e),A(i,this,this.checked)}_syncFromControl(){let e=this._control;e&&e.checked!==k(i,this)&&this.requestUpdate(`checked`,k(i,this))}focus(e){this._control?.focus(e)}blur(){this._control?.blur()}_enhanceLightDomA11y(){let e=this._control,t=this.getRootNode();if(e&&`getElementById`in t){let n=n=>bt(e.getAttribute(n)).map(e=>t.getElementById(e)).filter(e=>e instanceof HTMLElement);for(let e of n(`aria-labelledby`))this.addToAriaLabelledBy(e);for(let e of n(`aria-describedby`))this.addToAriaDescribedBy(e)}super._enhanceLightDomA11y()}_pushToControl(e){let t=this._control;if(!t)return;let r=!k(a,this);A(a,this,!0);let i=(t,n)=>e.has(t)&&!(r&&(n===void 0||n===``||n===!1)),o=(e,n)=>{n?t.setAttribute(e,`true`):t.removeAttribute(e)},s=g.call(j(l,this));s&&i(`name`,this.name)&&(s.name=this.name),s&&e.has(`value`)&&k(n,this)!==void 0&&(s.value=k(n,this)),i(`disabled`,this.disabled)&&(t.disabled=this.disabled),i(`required`,this.required)&&o(`aria-required`,this.required),i(`invalid`,this.invalid)&&o(`aria-invalid`,this.invalid)}render(){return p`<slot name="input"></slot>
        <div class="choice-field__label">
          <slot name="label"></slot>
        </div>
        <small class="choice-field__help-text">
          <slot name="help-text"></slot>
        </small>`}}function g(){let e=this._control;return e instanceof HTMLInputElement?e:void 0}function _(){let e=this._control;if(!e||e===k(o,this))return;A(o,this,e),customElements.upgrade(e),k(t,this)!==void 0&&(e.checked=k(t,this),A(t,this,void 0)),e.disabled&&!this.disabled&&(this.disabled=!0);let n=e.getAttribute(`name`);!this.name&&n&&(this.name=n),e instanceof HTMLInputElement&&j(l,this,v).call(this,e),this._syncFromControl()}function v(e){let t=this;for(let n of[`checked`,`disabled`]){let r=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,n);if(!r?.get||!r.set)continue;let{get:i,set:a}=r;Object.defineProperty(e,n,{configurable:!0,enumerable:r.enumerable,get(){return i.call(this)},set(e){a.call(this,e),n===`disabled`?t.disabled!==e&&(t.disabled=e):t._syncFromControl()}})}}return h.styles=yt,r([c({type:Boolean,reflect:!0})],h.prototype,`checked`,null),r([c()],h.prototype,`value`,null),r([c({reflect:!0})],h.prototype,`name`,void 0),r([c({type:Boolean})],h.prototype,`required`,void 0),r([c({type:Boolean,reflect:!0})],h.prototype,`invalid`,void 0),h},St=new WeakMap,Ct=class extends xt(u){get slots(){return{...super.slots,input:()=>{let e=document.createElement(`input`);return e.type=`checkbox`,e}}}constructor(){super(),this.indeterminate=!1,M(this,St,void 0),this.addEventListener(`change`,e=>{e.target===this._control&&this.indeterminate&&(this.indeterminate=e.target.indeterminate)})}updated(e){super.updated(e);let t=this._control;t instanceof HTMLInputElement&&(e.has(`indeterminate`)||t!==k(St,this))&&(t.indeterminate=this.indeterminate,A(St,this,t))}render(){return p`${super.render()} ${this._feedbackTemplate()}`}};Ct.styles=[yt,a`
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
    `],r([c({type:Boolean,reflect:!0})],Ct.prototype,`indeterminate`,void 0),customElements.get(`craft-checkbox`)||customElements.define(`craft-checkbox`,Ct);var{I:wt}=d,Tt=()=>document.createComment(``),Et=(e,t,n)=>{let r=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(n===void 0)n=new wt(r.insertBefore(Tt(),i),r.insertBefore(Tt(),i),e,e.options);else{let t=n._$AB.nextSibling,a=n._$AM,o=a!==e;if(o){let t;n._$AQ?.(e),n._$AM=e,n._$AP!==void 0&&(t=e._$AU)!==a._$AU&&n._$AP(t)}if(t!==i||o){let e=n._$AA;for(;e!==t;){let t=e.nextSibling;r.insertBefore(e,i),e=t}}}return n},Dt=(e,t,n=e)=>(e._$AI(t,n),e),Ot={},kt=(e,t=Ot)=>e._$AH=t,At=e=>e._$AH,jt=e=>{e._$AR(),e._$AA.remove()},Mt=(e,t,n)=>{let r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},Nt=ke(class extends h{constructor(e){if(super(e),e.type!==te.CHILD)throw Error(`repeat() can only be used in text expressions`)}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);let i=[],a=[],o=0;for(let t of e)i[o]=r?r(t,o):o,a[o]=n(t,o),o++;return{values:a,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,r]){let i=At(e),{values:a,keys:o}=this.dt(t,n,r);if(!Array.isArray(i))return this.ut=o,a;let s=this.ut??=[],c=[],u,d,f=0,p=i.length-1,m=0,h=a.length-1;for(;f<=p&&m<=h;)if(i[f]===null)f++;else if(i[p]===null)p--;else if(s[f]===o[m])c[m]=Dt(i[f],a[m]),f++,m++;else if(s[p]===o[h])c[h]=Dt(i[p],a[h]),p--,h--;else if(s[f]===o[h])c[h]=Dt(i[f],a[h]),Et(e,c[h+1],i[f]),f++,h--;else if(s[p]===o[m])c[m]=Dt(i[p],a[m]),Et(e,i[f],i[p]),p--,m++;else if(u===void 0&&(u=Mt(o,m,h),d=Mt(s,f,p)),u.has(s[f]))if(u.has(s[p])){let t=d.get(o[m]),n=t===void 0?null:i[t];if(n===null){let t=Et(e,i[f]);Dt(t,a[m]),c[m]=t}else c[m]=Dt(n,a[m]),Et(e,i[f],n),i[t]=null;m++}else jt(i[p]),p--;else jt(i[f]),f++;for(;m<=h;){let t=Et(e,c[h+1]);Dt(t,a[m]),c[m++]=t}for(;f<=p;){let e=i[f++];e!==null&&jt(e)}return this.ut=o,kt(e,c),l}}),Pt=new WeakMap,Ft=new WeakMap,It=new WeakMap,Lt=new WeakMap,Rt=new WeakMap,zt=new WeakSet,Bt=new WeakMap,Vt=new WeakMap,Ht=new WeakMap,Ut=new WeakMap,Wt=class{constructor(e,t){O(this,zt),this.draggingIndex=null,this.dropIndex=null,M(this,Pt,void 0),M(this,Ft,void 0),M(this,It,[]),M(this,Lt,[]),M(this,Rt,null),M(this,Bt,e=>{let t=k(Rt,this);if(!(!t||e.pointerId!==t.pointerId)){if(this.draggingIndex===null){if(Math.hypot(e.clientX-t.x,e.clientY-t.y)<4)return;j(zt,this,Jt).call(this,t.index,null)}e.preventDefault(),j(zt,this,Jt).call(this,this.draggingIndex,j(zt,this,qt).call(this,e))}}),M(this,Vt,e=>{let t=k(Rt,this);if(!t||e.pointerId!==t.pointerId)return;let n=this.draggingIndex,r=this.dropIndex,i=n!==null;if(j(zt,this,Kt).call(this),!i)return;let a=e=>{e.preventDefault(),e.stopImmediatePropagation()};if(t.handle.addEventListener(`click`,a,{capture:!0,once:!0}),setTimeout(()=>t.handle.removeEventListener(`click`,a,!0)),r!==null){let e=r>n?r-1:r;e!==n&&k(Ft,this).onReorder(n,e)}}),M(this,Ht,e=>{e.pointerId===k(Rt,this)?.pointerId&&j(zt,this,Kt).call(this)}),M(this,Ut,e=>{e.key===`Escape`&&this.draggingIndex!==null&&(e.preventDefault(),e.stopPropagation(),j(zt,this,Kt).call(this))}),A(Pt,this,e),A(Ft,this,t),e.addController(this)}hostDisconnected(){j(zt,this,Kt).call(this),this.setItems([])}setItems(e){for(let e of k(Lt,this))e();A(It,this,e),A(Lt,this,e.map(({element:e,handle:t},n)=>{let r=t??e,i=e=>j(zt,this,Gt).call(this,e,n,r);return r.addEventListener(`pointerdown`,i),()=>r.removeEventListener(`pointerdown`,i)}))}};function Gt(e,t,n){e.button!==0||e.pointerType===`touch`||k(Rt,this)||n.matches(`[disabled]`)||(A(Rt,this,{index:t,pointerId:e.pointerId,handle:n,x:e.clientX,y:e.clientY}),window.addEventListener(`pointermove`,k(Bt,this)),window.addEventListener(`pointerup`,k(Vt,this)),window.addEventListener(`pointercancel`,k(Ht,this)),window.addEventListener(`keydown`,k(Ut,this),!0))}function Kt(){A(Rt,this,null),window.removeEventListener(`pointermove`,k(Bt,this)),window.removeEventListener(`pointerup`,k(Vt,this)),window.removeEventListener(`pointercancel`,k(Ht,this)),window.removeEventListener(`keydown`,k(Ut,this),!0),j(zt,this,Jt).call(this,null,null)}function qt(e){let t=k(It,this).length;for(let[n,{element:r}]of k(It,this).entries()){let i=r.getBoundingClientRect();if(e.clientY<i.top+i.height/2){t=n;break}}let n=this.draggingIndex;return n!==null&&(t===n||t===n+1)?null:t}function Jt(e,t){(e!==this.draggingIndex||t!==this.dropIndex)&&(this.draggingIndex=e,this.dropIndex=t,k(Pt,this).requestUpdate())}var Yt=a`
  ${D}

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
`,Xt=`governedName`,Zt=`disabledByGroup`,Qt=0,$t=new WeakMap,en=new WeakMap,tn=new WeakMap,nn=new WeakMap,N=new WeakSet,rn=new WeakMap,an=class extends u{get options(){return j(N,this,En).call(this).map(e=>j(N,this,Tn).call(this,e))}set options(e){let t=j(N,this,En).call(this),n=new Set(e.map(e=>String(e.value)));for(let e of t)n.has(j(N,this,Pn).call(this,e))||e.remove();let r=[],i=j(N,this,On).call(this)??j(N,this,jn).call(this);for(let t of e){let e=j(N,this,Dn).call(this,String(t.value));e||(e=j(N,this,Cn).call(this,t),r.push(e)),j(N,this,wn).call(this,e,t),i?i.after(e):this.prepend(e),i=e}if(j(N,this,An).call(this)&&j(N,this,kn).call(this)?.checked){for(let e of r)j(N,this,gn).call(this,e,!0);j(N,this,vn).call(this)}this.requestUpdate(`options`)}get value(){return j(N,this,An).call(this)&&j(N,this,kn).call(this)?.checked?[this.allValue]:j(N,this,En).call(this).filter(e=>j(N,this,Nn).call(this,e)?.checked).map(e=>j(N,this,Pn).call(this,e))}set value(e){this.allLabel&&!j(N,this,On).call(this)&&(j(N,this,xn).call(this),j(N,this,Sn).call(this));let t=new Set((e??[]).map(String)),n=j(N,this,An).call(this)&&t.has(this.allValue);for(let e of j(N,this,En).call(this)){let r=j(N,this,Nn).call(this,e);r&&!r.disabled&&(r.checked=n||t.has(j(N,this,Pn).call(this,e)))}let r=j(N,this,kn).call(this);r&&j(N,this,An).call(this)&&(r.checked=n),j(N,this,vn).call(this),this.requestUpdate(`value`)}addOption(e,t){let n=j(N,this,Dn).call(this,String(e.value))??j(N,this,Cn).call(this,e);j(N,this,wn).call(this,n,e);let r=j(N,this,En).call(this).filter(e=>e!==n),i=t===void 0?null:r[t]??null,a=r.at(-1)??j(N,this,On).call(this)??j(N,this,jn).call(this);i?i.before(n):a?a.after(n):this.prepend(n),j(N,this,An).call(this)&&j(N,this,kn).call(this)?.checked&&(j(N,this,gn).call(this,n,!0),j(N,this,vn).call(this)),this.requestUpdate()}removeOption(e){j(N,this,Dn).call(this,String(e))?.remove(),this.requestUpdate()}updateOption(e,t){let n=j(N,this,Dn).call(this,String(e));n&&(j(N,this,wn).call(this,n,{...j(N,this,Tn).call(this,n),...t}),j(N,this,yn).call(this),j(N,this,vn).call(this),this.requestUpdate())}constructor(){super(),O(this,N),this.name=null,this.label=null,this.disabled=!1,this.sortable=!1,this.presentation=`checkboxes`,this.allLabel=null,this.allValue=`*`,this.allMode=`single-value`,this._revision=0,this._status=``,M(this,$t,new WeakMap),M(this,en,new Wt(this,{onReorder:(e,t)=>j(N,this,hn).call(this,e,t)})),M(this,tn,null),M(this,nn,null),M(this,rn,e=>{let t=e.target;!(t instanceof HTMLInputElement)||t.type!==`checkbox`||(t===j(N,this,kn).call(this)?j(N,this,_n).call(this,t.checked):j(N,this,vn).call(this),this.requestUpdate())}),this.addEventListener(`change`,k(rn,this),!0);for(let e of[`options`,`value`])if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],queueMicrotask(()=>{this[e]=t})}}connectedCallback(){super.connectedCallback(),A(tn,this,new MutationObserver(()=>j(N,this,bn).call(this))),k(tn,this).observe(this,{childList:!0,subtree:!0,characterData:!0})}disconnectedCallback(){super.disconnectedCallback(),k(tn,this)?.disconnect(),A(tn,this,null)}willUpdate(e){(e.has(`name`)||e.has(`allLabel`)||e.has(`allMode`))&&(j(N,this,xn).call(this),j(N,this,Sn).call(this)),e.has(`disabled`)&&j(N,this,yn).call(this),(e.has(`allMode`)||e.has(`allLabel`))&&j(N,this,vn).call(this);for(let e of j(N,this,En).call(this))k($t,this).has(e)||k($t,this).set(e,`item-${Qt++}`),e.slot=k($t,this).get(e);j(N,this,On).call(this)?.setAttribute(`slot`,`all`)}updated(){k(en,this).setItems(j(N,this,un).call(this).flatMap(e=>{let t=j(N,this,Mn).call(this,e);return t?[{element:t,handle:t.querySelector(`craft-reorder-button`)}]:[]}));let e=k(nn,this);A(nn,this,null),e&&j(N,this,on).call(this,e)}render(){this._revision;let e=j(N,this,ln).call(this),t=j(N,this,dn).call(this),r=j(N,this,un).call(this);return p`
      ${this.label?p`<div id="label" class="label" part="label">${this.label}</div>`:i}
      <div
        class="group"
        part="group"
        role=${this.label?`group`:i}
        aria-labelledby=${this.label?`label`:i}
      >
        <slot name="all"></slot>
        ${e.length?p`<div class="items" part="items">
              ${Nt(e,e=>k($t,this).get(e),e=>j(N,this,sn).call(this,e,r))}
            </div>`:i}
        ${this.presentation===`add-menu`&&t.length&&!this.disabled?p`<craft-action-menu
              class="add"
              part="add-menu"
              ?searchable=${t.length>10}
              .actions=${()=>j(N,this,fn).call(this)}
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
    `}};async function on(e){let t=e();await t?.updateComplete,t?.localName===`craft-reorder-button`&&(t=t.shadowRoot?.querySelector(`craft-button`)??t,await t.updateComplete),t?.focus()}function sn(e,t){let r=k($t,this).get(e),a=t.indexOf(e),o=a!==-1,s=o&&k(en,this).draggingIndex===a,c=k(en,this).dropIndex,l=j(N,this,Tn).call(this,e),u=this.presentation===`add-menu`;return p`<div
      class="row ${s?`row--dragging`:``}"
      part="row"
      data-key=${r}
      data-drop=${c===a?`before`:c===a+1&&a===t.length-1?`after`:i}
    >
      ${this.sortable?p`<craft-reorder-button
            class="handle"
            position=${j(N,this,cn).call(this,a,t.length)}
            ?disabled=${!o||t.length<2}
            @craft-reorder=${e=>j(N,this,hn).call(this,a,a+(e.detail.direction===`up`?-1:1),!0)}
          ></craft-reorder-button>`:i}
      ${u?p`<span class="row__label">
              ${l.labelHtml===void 0?l.label:T(l.labelHtml)}
              ${l.info?p`<span class="row__info"
                    >${T(l.info)}</span
                  >`:i}
            </span>
            ${!l.disabled&&!this.disabled?p`<craft-button
                  class="remove"
                  type="button"
                  icon="xmark"
                  size="small"
                  variant="plain"
                  aria-label=${n(`Remove {name}`,{name:l.label})}
                  @click=${()=>j(N,this,mn).call(this,e)}
                ></craft-button>`:i}`:p`<slot name=${r}></slot>`}
    </div>`}function cn(e,t){return t<2?`only`:e<=0?`first`:e===t-1?`last`:`middle`}function ln(){let e=j(N,this,En).call(this);return this.presentation===`add-menu`?j(N,this,kn).call(this)?.checked?[]:e.filter(e=>j(N,this,Nn).call(this,e)?.checked):e}function un(){return!this.sortable||this.disabled?[]:j(N,this,ln).call(this).filter(e=>!j(N,this,Nn).call(this,e)?.disabled)}function dn(){return j(N,this,kn).call(this)?.checked?[]:j(N,this,En).call(this).filter(e=>{let t=j(N,this,Nn).call(this,e);return t&&!t.checked&&!t.disabled})}function fn(){return j(N,this,dn).call(this).map(e=>({label:j(N,this,Fn).call(this,e),onClick:()=>j(N,this,pn).call(this,e)}))}function pn(e){let t=j(N,this,ln).call(this).at(-1);t&&t!==e&&t.after(e),j(N,this,gn).call(this,e,!0,!0),this._status=n(`Added {name}`,{name:j(N,this,Fn).call(this,e)}),j(N,this,dn).call(this).length||A(nn,this,()=>j(N,this,Mn).call(this,e)?.querySelector(`.remove`))}function mn(e){let t=j(N,this,ln).call(this),r=t.indexOf(e),i=[...t.slice(r+1),...t.slice(0,r).reverse()].find(e=>!j(N,this,Nn).call(this,e)?.disabled);j(N,this,gn).call(this,e,!1,!0),this._status=n(`Removed {name}`,{name:j(N,this,Fn).call(this,e)}),A(nn,this,()=>(i&&j(N,this,Mn).call(this,i)?.querySelector(`.remove`))??this.renderRoot.querySelector(`.add craft-button[slot="invoker"]`))}function hn(e,t,r=!1){let i=j(N,this,un).call(this),a=i[e],o=i[t];!a||!o||a===o||(t>e?o.after(a):o.before(a),this._status=n(`Moved {name} to position {position}`,{name:j(N,this,Fn).call(this,a),position:t+1}),r&&A(nn,this,()=>j(N,this,Mn).call(this,a)?.querySelector(`craft-reorder-button`)),this.requestUpdate(),this.dispatchEvent(new CustomEvent(`craft-order-change`,{bubbles:!0,composed:!0,detail:{value:j(N,this,Pn).call(this,a),index:t}})),vt(this))}function gn(e,t,n=!1){let r=j(N,this,Nn).call(this,e);!r||r.checked===t||(r.checked=t,n&&vt(r))}function _n(e){for(let t of j(N,this,En).call(this))j(N,this,Nn).call(this,t)?.disabled||j(N,this,gn).call(this,t,e);j(N,this,vn).call(this)}function vn(){let e=j(N,this,On).call(this),t=j(N,this,kn).call(this),n=j(N,this,En).call(this).filter(e=>!j(N,this,Nn).call(this,e)?.disabled),r=n.filter(e=>j(N,this,Nn).call(this,e)?.checked).length,i=j(N,this,An).call(this)&&n.length===0;if(e&&t&&!i){let i=n.length>0&&r===n.length;t.checked=i;let a=e.querySelector(`craft-checkbox`);a&&(a.indeterminate=r>0&&!i)}let a=j(N,this,An).call(this)&&!!t?.checked;for(let e of j(N,this,En).call(this)){let t=j(N,this,Nn).call(this,e);t&&(a?t.name&&(t.dataset[Xt]=t.name,t.removeAttribute(`name`)):t.dataset[Xt]!==void 0&&(t.name=t.dataset[Xt],delete t.dataset[Xt]))}}function yn(){for(let e of this.querySelectorAll(`:scope > .cp-checkbox-select__item input[type="checkbox"]`))this.disabled&&!e.disabled?(e.disabled=!0,e.dataset[Zt]=``):!this.disabled&&e.dataset[Zt]!==void 0&&(e.disabled=!1,delete e.dataset[Zt])}function bn(){this._revision++}function xn(){let e=j(N,this,jn).call(this);if(!this.name){e?.remove();return}if(e){e.name=this.name;return}let t=document.createElement(`input`);t.type=`hidden`,t.name=this.name,t.value=``,t.dataset.empty=``,this.prepend(t)}function Sn(){let e=j(N,this,On).call(this);if(!this.allLabel){e?.remove();return}let t=e??j(N,this,Cn).call(this,{value:this.allValue,label:this.allLabel});t.classList.add(`all`);let n=j(N,this,Nn).call(this,t);n.value=this.allValue,e||(t.dataset.generated=``),t.dataset.generated!==void 0&&(this.allMode===`single-value`&&this.name?n.name=`${this.name}[]`:n.removeAttribute(`name`));let r=t.querySelector(`label`);if(r&&r.textContent!==this.allLabel&&(r.textContent=this.allLabel),!e){let e=j(N,this,jn).call(this);e?e.after(t):this.prepend(t)}}function Cn(e){let t=`${this.id||`checkbox-select`}-${Qt++}`,n=document.createElement(`div`);n.className=`cp-checkbox-select__item`;let r=document.createElement(`craft-checkbox`),i=document.createElement(`input`);i.type=`checkbox`,i.className=`checkbox`,i.slot=`input`,i.id=t,i.value=String(e.value),this.name&&(i.name=`${this.name}[]`);let a=document.createElement(`label`);return a.slot=`label`,a.htmlFor=t,a.id=`${t}-label`,r.append(i,a),n.append(r),n}function wn(e,t){let n=j(N,this,Nn).call(this,e),r=e.querySelector(`craft-checkbox > label`);n&&(t.checked!==void 0&&(n.checked=t.checked),t.disabled!==void 0&&(n.disabled=t.disabled,delete n.dataset[Zt])),r&&(t.labelHtml===void 0?r.textContent!==t.label&&(r.textContent=t.label):r.innerHTML!==t.labelHtml&&(r.innerHTML=t.labelHtml),r.dataset.label=t.label);let i=e.querySelector(`craft-checkbox`),a=i?.querySelector(`:scope > [slot="help-text"][data-info]`);t.info?(a||(a=document.createElement(`div`),a.slot=`help-text`,a.dataset.info=``,i?.append(a)),a.innerHTML!==t.info&&(a.innerHTML=t.info)):a?.remove()}function Tn(e){let t=j(N,this,Nn).call(this,e),n=e.querySelector(`craft-checkbox > label, :scope > label`),r=e.querySelector(`[slot="help-text"][data-info]`);return{value:j(N,this,Pn).call(this,e),label:j(N,this,Fn).call(this,e),...n?.children.length?{labelHtml:n.innerHTML}:{},...r?{info:r.innerHTML}:{},checked:!!t?.checked,disabled:!!t?.disabled&&t.dataset[Zt]===void 0}}function En(){return Array.from(this.querySelectorAll(`:scope > .cp-checkbox-select__item`)).filter(e=>!e.classList.contains(`all`))}function Dn(e){return j(N,this,En).call(this).find(t=>j(N,this,Pn).call(this,t)===e)}function On(){return this.querySelector(`:scope > .cp-checkbox-select__item.all`)}function kn(){let e=j(N,this,On).call(this);return e?j(N,this,Nn).call(this,e):null}function An(){return!!j(N,this,On).call(this)&&this.allMode===`single-value`}function jn(){return this.querySelector(`:scope > input[type="hidden"][data-empty]`)}function Mn(e){let t=k($t,this).get(e);return t?this.renderRoot.querySelector(`.row[data-key="${t}"]`):null}function Nn(e){return e.querySelector(`input[type="checkbox"]`)}function Pn(e){let t=j(N,this,Nn).call(this,e);return t?.getAttribute(`value`)??t?.value??``}function Fn(e){let t=e.querySelector(`craft-checkbox > label, :scope > label`);return t?.dataset.label??t?.textContent?.trim()??``}an.styles=[Yt],r([c()],an.prototype,`name`,void 0),r([c()],an.prototype,`label`,void 0),r([c({type:Boolean,reflect:!0})],an.prototype,`disabled`,void 0),r([c({type:Boolean,reflect:!0})],an.prototype,`sortable`,void 0),r([c({reflect:!0})],an.prototype,`presentation`,void 0),r([c({attribute:`all-label`})],an.prototype,`allLabel`,void 0),r([c({attribute:`all-value`})],an.prototype,`allValue`,void 0),r([c({attribute:`all-mode`,reflect:!0})],an.prototype,`allMode`,void 0),r([f()],an.prototype,`_revision`,void 0),r([f()],an.prototype,`_status`,void 0),customElements.get(`craft-checkbox-select`)||customElements.define(`craft-checkbox-select`,an);var In=a`
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
  ${Ue(`:not([appearance~='plain'])`)} {
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

  /* The label clips for its ellipsis, so a label link's ring is drawn on the chip and its own is turned off. */
  :host([data-link-focus-visible]) {
    --c-focus-outline-style: none;
  }

  :host([data-link-focus-visible]) .cp-chip {
    outline: var(--c-focus-outline-width) solid var(--c-color-focus-outline);
    outline-offset: var(--c-focus-outline-offset);
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

  /* A label in a link or a span is a flex item of the body, which the
     body's own ellipsis doesn't reach, so it truncates itself. */
  .cp-chip__body::slotted(a),
  .cp-chip__body::slotted(span) {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .cp-chip__body::slotted(a:hover) {
    text-decoration-line: var(--c-link-decoration-hover);
  }

  /* Suffix */

  .cp-chip__suffix {
    margin-inline-start: calc(var(--c-spacing) * 1.5 - var(--_chip-gap));
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
   *
   * The fill is a surface of its own, so the default text color and the
   * status dot's ring are the page's again, rather than ones a surrounding
   * surface set for itself, such as a highlighted craft-option.
   */
  :host([data-color='white'][appearance~='fill']:not([selected])) .cp-chip,
  :host([data-color='white'][appearance~='outline-fill']:not([selected]))
    .cp-chip {
    --c-text-default: var(--color-slate-900);
    --c-indicator-ring: initial;
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
`;Object.values({Sm:`sm`,Md:`md`,Lg:`lg`,Xl:`xl`,"2xl":`2xl`});var Ln={sm:Je.Small,md:Je.Medium,lg:Je.Large,xl:Je.Large,"2xl":Je.Large},Rn={InlineStart:`inline-start`,BlockStart:`block-start`},P=new WeakSet,zn=new WeakMap,Bn=new WeakMap,Vn=new WeakMap,Hn=new WeakMap,Un=new WeakMap,Wn=class extends u{constructor(...e){super(...e),O(this,P),this.size=null,this.thumbSize=null,this.prefixPlacement=Rn.InlineStart,this.variant=null,this.appearance=we.OutlineFill,this.alignItems=`center`,this.icon=null,this.showStatus=!1,this.showThumb=!1,this.selectable=!1,this.fullWidth=!1,this.rounded=!1,this.selected=!1,this.selectLabel=null,this.selectDisabled=!1,M(this,zn,!1),M(this,Bn,new Pe),M(this,Vn,new v(this,{characterData:!0,onChange:()=>{j(P,this,Kn).call(this),j(P,this,qn).call(this)}})),M(this,Hn,e=>{let t=e.target,n=t.closest(`craft-chip > *`)?.matches(`:not([slot]), [slot=""]`);this.toggleAttribute(`data-link-focus-visible`,t!==this&&!!n&&t.matches(`a[href]:focus-visible`))}),M(this,Un,()=>{this.removeAttribute(`data-link-focus-visible`)})}renderSelect(){return p`<input
      type="checkbox"
      class="cp-chip__select"
      part="select"
      .checked=${this.selected}
      ?disabled=${this.selectDisabled}
      aria-label=${this.selectLabel??n(`Select`)}
      @click=${j(P,this,Jn)}
      @mousedown=${j(P,this,Yn)}
      @mouseup=${j(P,this,Yn)}
      @change=${j(P,this,Xn)}
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
    </div>`}connectedCallback(){super.connectedCallback(),this.addEventListener(`focusin`,k(Hn,this)),this.addEventListener(`focusout`,k(Un,this)),this.hasUpdated&&(A(Bn,this,new Pe),k(Bn,this).load(this))}disconnectedCallback(){this.removeEventListener(`focusin`,k(Hn,this)),this.removeEventListener(`focusout`,k(Un,this)),k(Bn,this).destroy(),super.disconnectedCallback()}firstUpdated(e){super.firstUpdated(e),k(Bn,this).load(this)}updated(e){super.updated(e),e.has(`rounded`)&&j(P,this,qn).call(this)}render(){let e=j(P,this,Qn).call(this),t=e.prefix||e.thumbnail||e.icon;return p`
      <div
        part="chip"
        class="${w({"cp-chip":!0,"cp-chip--xsmall":Gn.call(j(P,this))===`xsmall`,"cp-chip--small":Gn.call(j(P,this))===`small`,"cp-chip--medium":Gn.call(j(P,this))===`medium`,"cp-chip--large":Gn.call(j(P,this))===`large`,[`cp-chip--thumb-${this.thumbSize}`]:this.thumbSize!==null,"cp-chip--stacked":this.prefixPlacement===Rn.BlockStart,"cp-chip--has-header":this.prefixPlacement===Rn.BlockStart&&(this.selectable||e.suffix),"cp-chip--align-start":this.alignItems===`start`,"cp-chip--align-end":this.alignItems===`end`,"cp-chip--plain":this.appearance===we.Plain,"cp-chip--rounded":this.rounded,"cp-chip--selectable":this.selectable,"cp-chip--show-thumb":this.showThumb,"cp-chip--show-status":this.showStatus,[`cp-chip--leads-with-${j(P,this,$n).call(this,e)}`]:!0})}"
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
    `}};function Gn(){return this.size??(this.thumbSize?Ln[this.thumbSize]:null)??Je.Small}function Kn(){for(let e of this.querySelectorAll(`craft-button:not([inherit])`))e.closest(`craft-chip`)===this&&e.toggleAttribute(`inherit`,!0)}function qn(){for(let e of this.querySelectorAll(`craft-thumbnail`))e.closest(`craft-chip`)!==this||!e.closest(`[slot="thumbnail"]`)||(this.rounded?e.dataset.chipMode===void 0&&(e.dataset.chipMode=e.mode,e.mode=`crop`):e.dataset.chipMode!==void 0&&(e.mode=e.dataset.chipMode,delete e.dataset.chipMode))}function Jn(e){A(zn,this,e.shiftKey),e.stopPropagation()}function Yn(e){e.stopPropagation()}function Xn(e){let{checked:t}=e.target;this.selected=t,this.dispatchEvent(new CustomEvent(`craft-selection-change`,{detail:{selected:t,shiftKey:k(zn,this)},bubbles:!0,composed:!0}))}function Zn(e){return Array.from(this.childNodes).some(t=>t instanceof Element?t.slot===e&&(t.localName!==`div`||t.childElementCount!==0||t.textContent.trim()!==``):e===``&&t.nodeType===Node.TEXT_NODE&&t.textContent.trim()!==``)}function Qn(){return{prefix:j(P,this,Zn).call(this,`prefix`),thumbnail:this.showThumb&&j(P,this,Zn).call(this,`thumbnail`),icon:!!this.icon||j(P,this,Zn).call(this,`icon`),status:j(P,this,Zn).call(this,`status`),body:j(P,this,Zn).call(this,``),suffix:j(P,this,Zn).call(this,`suffix`)}}function $n(e){if(this.selectable)return`select`;for(let t of[`prefix`,`thumbnail`,`icon`,`status`])if(e[t])return t;return`body`}Wn.styles=[b,In],r([c()],Wn.prototype,`size`,void 0),r([c({attribute:`thumb-size`,reflect:!0})],Wn.prototype,`thumbSize`,void 0),r([c({attribute:`prefix-placement`,reflect:!0})],Wn.prototype,`prefixPlacement`,void 0),r([c({reflect:!0})],Wn.prototype,`variant`,void 0),r([c({reflect:!0})],Wn.prototype,`appearance`,void 0),r([c({attribute:`align-items`})],Wn.prototype,`alignItems`,void 0),r([c()],Wn.prototype,`icon`,void 0),r([c({attribute:`show-status`,type:Boolean})],Wn.prototype,`showStatus`,void 0),r([c({attribute:`show-thumb`,type:Boolean})],Wn.prototype,`showThumb`,void 0),r([c({type:Boolean})],Wn.prototype,`selectable`,void 0),r([c({type:Boolean,reflect:!0,attribute:`full-width`})],Wn.prototype,`fullWidth`,void 0),r([c({type:Boolean,reflect:!0})],Wn.prototype,`rounded`,void 0),r([c({type:Boolean,reflect:!0})],Wn.prototype,`selected`,void 0),r([c({attribute:`select-label`})],Wn.prototype,`selectLabel`,void 0),r([c({attribute:`select-disabled`,type:Boolean})],Wn.prototype,`selectDisabled`,void 0),customElements.get(`craft-chip`)||customElements.define(`craft-chip`,Wn);var er=a`
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

  /* The loud fill is a surface of its own, like a colored card: content that
     takes the default text color, such as a plain chip's label, takes its
     text color instead, and status dots get a ring in it. */
  :host([active]) {
    background-color: var(--c-color-neutral-fill-loud);
    color: var(--c-color-neutral-on-loud);
    --c-text-default: var(--c-color-neutral-on-loud);
    --c-indicator-ring: var(--c-color-neutral-on-loud);
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
`,tr=new WeakMap,nr=new WeakMap,rr=new WeakSet,ir=class extends u{constructor(...e){super(...e),O(this,rr),this.value=``,M(this,tr,!1),this.active=!1,this.disabled=!1,this.hint=null,M(this,nr,void 0)}get selected(){return k(tr,this)}set selected(e){let t=k(tr,this);A(tr,this,e),this.requestUpdate(`selected`,t),t!==e&&this.dispatchEvent(new Event(`craft-selected-change`,{bubbles:!0}))}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`option`),this.id||=le(`option`),or._.observe(this)}disconnectedCallback(){super.disconnectedCallback(),or._.unobserve(this)}willUpdate(e){e.has(`selected`)&&this.setAttribute(`aria-selected`,String(this.selected)),e.has(`disabled`)&&this.setAttribute(`aria-disabled`,String(this.disabled))}render(){return p`
      <div class="choice-field__label">
        <span class="content"><slot></slot></span>
        ${this.hint?p`<span class="hint">${this.hint}</span>`:i}
        <slot name="suffix"></slot>
      </div>
      ${this.selected?p`<craft-icon class="check" name="check"></craft-icon>`:i}
    `}};function ar(){return k(nr,this)??A(nr,this,parseInt(getComputedStyle(this).getPropertyValue(`--c-option-wide-threshold`)||`640`,10)),k(nr,this)}ir.styles=er;var or={_:new ResizeObserver(e=>{for(let t of e){let e=t.target,n=t.borderBoxSize?.[0]?.inlineSize??t.contentRect.width;e.toggleAttribute(`wide`,n>=j(rr,e,ar).call(e))}})};r([c()],ir.prototype,`value`,void 0),r([c({type:Boolean,reflect:!0})],ir.prototype,`selected`,null),r([c({type:Boolean,reflect:!0})],ir.prototype,`active`,void 0),r([c({type:Boolean,reflect:!0})],ir.prototype,`disabled`,void 0),r([c()],ir.prototype,`hint`,void 0),customElements.get(`craft-option`)||customElements.define(`craft-option`,ir);var sr=a`
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
`,cr=class extends u{constructor(...e){super(...e),this.label=``}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`group`)}willUpdate(){this.setAttribute(`aria-label`,this.label)}render(){return p`
      <div class="label" aria-hidden="true">${this.label}</div>
      <slot></slot>
    `}};cr.styles=sr,r([c()],cr.prototype,`label`,void 0),customElements.get(`craft-option-group`)||customElements.define(`craft-option-group`,cr);var lr=a`
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
`,ur=new WeakMap,dr=class extends u{constructor(...e){super(...e),this.removable=!1,M(this,ur,()=>{this.dispatchEvent(new CustomEvent(`craft-remove`,{bubbles:!0}))})}render(){return this.removable?p`<button
            type="button"
            aria-describedby="remove-hint"
            @click=${k(ur,this)}
          >
            <slot></slot>
            <span class="remove" aria-hidden="true">×</span>
          </button>
          <span id="remove-hint" hidden>${n(`Remove`)}</span>`:p`<slot></slot>`}};dr.styles=lr,r([c({type:Boolean,reflect:!0})],dr.prototype,`removable`,void 0),customElements.get(`craft-combobox-token`)||customElements.define(`craft-combobox-token`,dr);var fr=e=>{var t=new WeakMap,n=new WeakMap,a=new WeakMap,o=new WeakMap,l=new WeakMap;class u extends e{constructor(...e){super(...e),M(this,t,typeof this.attachInternals==`function`?this.attachInternals():void 0),M(this,n,null),M(this,a,!1),M(this,o,void 0),M(this,l,void 0),this.name=``,this.disabled=!1,this._formDisabled=!1,this._formAttribute=null}_formValue(){return null}_restoreFormValue(e){}_setValidity(e={},n=``,r){k(t,this)?.setValidity?.(e,n,r)}get form(){return k(t,this)?.form??null}get validity(){return k(t,this)?.validity??{valid:!0}}get validationMessage(){return k(t,this)?.validationMessage??``}get willValidate(){return k(t,this)?.willValidate??!1}checkValidity(){return k(t,this)?.checkValidity?.()??!0}reportValidity(){return k(t,this)?.reportValidity?.()??!0}connectedCallback(){super.connectedCallback(),k(a,this)||(A(a,this,!0),A(n,this,this._formValue())),this._syncFormValue()}updated(e){super.updated(e),this._syncFormValue()}dispatchEvent(e){return(e.type===`input`||e.type===`change`)&&this._syncFormValue(),super.dispatchEvent(e)}_syncFormValue(){let e=this.name&&!this.disabled?this._formValue():null,t=this._formAttribute,n=JSON.stringify([this.name,e,t]);e===null&&!k(o,this)||n===k(l,this)&&k(o,this)?.parentNode===this||(A(l,this,n),k(o,this)||(A(o,this,document.createElement(`span`)),k(o,this).hidden=!0,k(o,this).slot=`form-value`),k(o,this).parentNode!==this&&this.append(k(o,this)),s(Array.isArray(e)?p`<input
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
              />`,k(o,this)))}formDisabledCallback(e){this._formDisabled=e}formResetCallback(){this._restoreFormValue(k(n,this))}}return u.formAssociated=!0,r([c({reflect:!0})],u.prototype,`name`,void 0),r([c({type:Boolean,reflect:!0})],u.prototype,`disabled`,void 0),r([f()],u.prototype,`_formDisabled`,void 0),r([c({attribute:`form`})],u.prototype,`_formAttribute`,void 0),u},pr={name:`minWidthOfReference`,enabled:!0,phase:`beforeWrite`,requires:[`computeStyles`],fn:({state:e})=>{e.styles.popper={...e.styles.popper,minWidth:`${e.rects.reference.width}px`}}},mr=new WeakMap,hr=new WeakMap,gr=class{constructor(e){this.parts=e,M(this,mr,null),M(this,hr,void 0)}get shown(){return k(mr,this)!==null}show(){let e=this.parts();!e||k(mr,this)||(A(hr,this,e),Oe(e.layer),e.pane.style.minWidth=`${e.reference.getBoundingClientRect().width}px`,A(mr,this,ae(e.reference,e.pane,{strategy:`fixed`,placement:`bottom-start`,modifiers:[...se(0),pr]})),k(mr,this).forceUpdate())}hide(){k(hr,this)&&(Te(k(hr,this).layer),k(mr,this)?.destroy(),A(mr,this,null),A(hr,this,void 0))}update(){k(mr,this)?.update()}};function _r(e){return e?[...e.querySelectorAll(`craft-option`)].filter(e=>!e.hidden):[]}function vr(e){return e.textContent?.trim()??``}function yr(e,t,n,{scroll:r=!0}={}){for(let n of e)n.active=n===t;t?(n?.setAttribute(`aria-activedescendant`,t.id),r&&t.scrollIntoView?.({block:`nearest`})):n?.removeAttribute(`aria-activedescendant`)}function br(e,t,n,{wrap:r=!0,skipDisabled:i=!1}={}){let a=i?e.filter(e=>!e.disabled||e===t):e;if(!a.length)return;let o=t?a.indexOf(t):-1;if(o===-1)return n===1?a[0]:a.at(-1);let s=o+n;return r?a[(s+a.length)%a.length]:a[Math.min(Math.max(s,0),a.length-1)]}var xr=new WeakMap,Sr=new WeakMap,Cr=class{constructor(){M(this,xr,``),M(this,Sr,null)}match(e,t,n){if(e.key.length!==1||e.metaKey||e.ctrlKey||e.altKey||e.key===` `&&k(xr,this)===``)return;A(xr,this,k(xr,this)+e.key.toLowerCase()),k(Sr,this)!==null&&clearTimeout(k(Sr,this)),A(Sr,this,setTimeout(()=>this.reset(),1e3));let r=[...k(xr,this)].every(e=>e===k(xr,this)[0]),i=r?k(xr,this)[0]:k(xr,this),a=n?t.indexOf(n):-1;return[...t.slice(a+ +!!r),...t.slice(0,a+ +!!r)].find(e=>!e.disabled&&vr(e).toLowerCase().startsWith(i))}get typing(){return k(xr,this)!==``}reset(){A(xr,this,``),k(Sr,this)!==null&&(clearTimeout(k(Sr,this)),A(Sr,this,null))}},wr=a`
  ${ue}

  :host {
    width: 100%;
  }

  ::slotted(.form-control) {
    ${ye}
    box-sizing: border-box;
  }

  /* The dropdown sets the field's width as an inline min-width, which wins over this cap on wider fields */
  #overlay-content-node-wrapper {
    max-inline-size: min(calc(360rem / 16), calc(100vw - var(--c-spacing-lg)));
    border: 1px solid var(--c-form-control-border-color);
    border-radius: var(--c-radius-md);
    background-color: var(--c-surface-overlay);
    box-shadow: var(--c-shadow-overlay);
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
    ${ge}
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

  :host([multiple]) .indicator {
    padding-inline-end: calc(
      var(--c-input-spacing-inline) - var(--c-spacing-xs) -
        var(--_input-border-width)
    );
  }

  :host([multiple]) .clear {
    inset-inline-end: calc(
      var(--c-input-spacing-inline) * 1.5 + 1em - var(--c-spacing-xs) -
        var(--_input-border-width)
    );
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
    ${de}
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

  :host([multiple]) {
    --_textbox-min-width: 3rem;
  }

  :host([multiple][clearable]) {
    --_textbox-min-width: calc(3rem + var(--c-size-control-sm));
  }

  :host([multiple]) .combobox__textbox {
    min-width: var(--_textbox-min-width);
  }

  @supports (field-sizing: content) {
    :host([multiple]) .combobox__textbox {
      min-width: auto;
    }

    :host([multiple]) ::slotted(.form-control) {
      field-sizing: content;
      min-width: var(--_textbox-min-width);
    }
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
`;function Tr(e){return Ke.includes(e)||be.includes(e)?`var(--c-color-${e}-fill-loud)`:e}function Er(e){if(Array.isArray(e))return e.map(String);if(typeof e!=`string`||e===``)return[];try{let t=JSON.parse(e);return Array.isArray(t)?t.map(String):[e]}catch{return[e]}}function Dr(e,t){return JSON.stringify(e)===JSON.stringify(t)}var Or=`insertReplacementText`,kr=new WeakMap,Ar=new WeakMap,jr=new WeakMap,Mr=new WeakMap,Nr=new WeakMap,Pr=new WeakMap,Fr=new WeakMap,Ir=new WeakMap,Lr=new WeakMap,Rr=new WeakMap,F=new WeakSet,zr=new WeakMap,Br=new WeakMap,Vr=new WeakMap,Hr=new WeakMap,Ur=new WeakMap,Wr=new WeakMap,Gr=new WeakMap,Kr=new WeakMap,qr=new WeakMap,Jr=new WeakMap,Yr=new WeakMap,Xr=new WeakMap,Zr=new WeakMap,Qr=new WeakMap,$r=class extends fr(Se(u)){get value(){return this.multiple?Er(k(kr,this)):Array.isArray(k(kr,this))?String(k(kr,this)[0]??``):String(k(kr,this)??``)}set value(e){let t=this.value;if(A(kr,this,e??``),Dr(t,this.value))return;let n=this._control?.value;j(F,this,ci).call(this),this._control?.value!==n&&A(Pr,this,!1),this.requestUpdate(`value`,t),k(Ar,this)||A(Fr,this,this.value)}constructor(){super(),O(this,F),this.options=[],this.limit=150,this.multiple=!1,this.requireOptionMatch=!1,this.showAllOnEmpty=!1,this.required=!1,this.invalid=!1,this.open=!1,this.clearable=!1,this.placeholder=``,this.showSelectedHint=!1,M(this,kr,``),M(this,Ar,!1),M(this,jr,[]),M(this,Mr,``),M(this,Nr,!1),M(this,Pr,!1),M(this,Fr,``),M(this,Ir,null),M(this,Lr,``),M(this,Rr,new gr(()=>{let e=this.renderRoot.querySelector(`.overlay-layer`)??null,t=ti.call(j(F,this)),n=this.renderRoot.querySelector(`.input-group__input`)??null;return e&&t&&n?{layer:e,pane:t,reference:n}:void 0})),M(this,zr,e=>{e.composedPath().includes(this)||(E(e,this),this.open=!1)}),M(this,Br,()=>{!this.open&&j(F,this,ai).call(this)&&(this.open=!0)}),M(this,Vr,e=>{e.relatedTarget instanceof Node&&(this.contains(e.relatedTarget)||this.renderRoot.contains(e.relatedTarget))||(this.multiple&&!this.requireOptionMatch&&j(F,this,mi).call(this),this.open=!1,j(F,this,fi).call(this))}),M(this,Hr,e=>{e.stopPropagation();let t=this._control?.value??``,n=k(Lr,this);A(Lr,this,t),A(Pr,this,!0),A(Ar,this,!0),!this.multiple&&!this.requireOptionMatch&&j(F,this,si).call(this,j(F,this,oi).call(this,t)),this.open=j(F,this,ai).call(this),j(F,this,Si).call(this);let r=n.length<t.length||n!==``&&t!==``&&n[0].toLowerCase()!==t[0].toLowerCase();j(F,this,_i).call(this,!this.multiple&&r&&t!==``?j(F,this,hi).call(this).find(e=>!e.disabled):void 0),_t(this)}),M(this,Ur,e=>{if(!e.isComposing)switch(e.key){case`ArrowDown`:case`ArrowUp`:j(F,this,li).call(this,e);break;case`Enter`:j(F,this,ui).call(this,e);break;case`Escape`:this.open&&=(e.preventDefault(),g(e),!1);break;case`Tab`:this.open=!1;break;case`Backspace`:this.multiple&&!ii.call(j(F,this))&&(this._control?.value??``)===``&&(e.preventDefault(),j(F,this,pi).call(this,this.value.slice(0,-1)));break}}),M(this,Wr,e=>{let t=e.target?.closest(`craft-option`);!t||t.disabled||ii.call(j(F,this))||(j(F,this,di).call(this,t),this._control?.focus(),this.multiple||(this.open=!1))}),M(this,Gr,()=>{if(this.multiple){j(F,this,pi).call(this,[]);return}A(Ar,this,!0),this.value=``,j(F,this,ci).call(this),j(F,this,Si).call(this),this._control?.focus(),_t(this),j(F,this,fi).call(this)}),this.announcement=``,M(this,Kr,null),M(this,qr,``),M(this,Jr,!1),this.overflowTotal=0,M(this,Yr,!1),M(this,Xr,e=>{e.button!==0||ii.call(j(F,this))||(e.preventDefault(),A(Yr,this,this.open),this._control?.focus())}),M(this,Zr,()=>{ii.call(j(F,this))||(this.open=!k(Yr,this))}),M(this,Qr,void 0),this.addEventListener(`focusout`,k(Vr,this))}get slots(){return{...super.slots,input:()=>{let e=document.createElement(`input`);return e.autocomplete=`off`,e},listbox:()=>document.createElement(`div`)}}get _control(){let e=super._control;return e instanceof HTMLInputElement?e:e?.querySelector(`input`)??void 0}connectedCallback(){super.connectedCallback();let e=this._control,t=ei.call(j(F,this));e&&t&&j(F,this,ni).call(this,e,t),j(F,this,Si).call(this),j(F,this,ci).call(this)}disconnectedCallback(){k(Kr,this)!==null&&(clearTimeout(k(Kr,this)),A(Kr,this,null)),A(Jr,this,!1),A(qr,this,``),this.announcement=``,k(Rr,this).hide(),document.removeEventListener(`pointerdown`,k(zr,this)),super.disconnectedCallback()}firstUpdated(e){super.firstUpdated(e),A(Mr,this,this.value),A(Fr,this,this.value)}willUpdate(e){super.willUpdate(e),e.has(`multiple`)&&A(kr,this,this.value)}updated(e){super.updated(e);let t=this._control,n=ei.call(j(F,this));e.has(`open`)&&j(F,this,ri).call(this,e.get(`open`)),(e.has(`options`)||e.has(`limit`)||e.has(`open`)||e.has(`value`)||e.has(`showSelectedHint`)||e.has(`multiple`))&&j(F,this,Si).call(this),(e.has(`options`)||e.has(`showSelectedHint`))&&!k(Pr,this)&&j(F,this,ci).call(this),this.multiple?j(F,this,Ni).call(this):(k(Qr,this)?.remove(),A(Qr,this,void 0)),this._reflectAriaReferences(),t&&(t.placeholder=this.placeholder,t.disabled=this.disabled||k(Nr,this),t.readOnly=this.readOnly,this.invalid?t.setAttribute(`aria-invalid`,`true`):t.removeAttribute(`aria-invalid`),this.required?t.setAttribute(`aria-required`,`true`):t.removeAttribute(`aria-required`)),this.multiple?n?.setAttribute(`aria-multiselectable`,`true`):n?.removeAttribute(`aria-multiselectable`),j(F,this,Pi).call(this),this.toggleAttribute(`has-prefix-icon`,j(F,this,Ai).call(this)?.data?.icon!=null||j(F,this,Ai).call(this)?.data?.indicator!=null),this.open&&k(Rr,this).update()}_reflectAriaReferences(){let e=this._control;if(e&&k(jr,this).length){let t=(e.getAttribute(`aria-labelledby`)??``).split(/\s+/).filter(e=>e&&!k(jr,this).includes(e));t.length?e.setAttribute(`aria-labelledby`,t.join(` `)):e.removeAttribute(`aria-labelledby`)}if(super._reflectAriaReferences(),!e)return;let t=k(Qr,this)?.id;A(jr,this,[...(this.getAttribute(`aria-labelledby`)??``).split(/\s+/),t??``].filter(Boolean));let n=(this.getAttribute(`aria-labelledby`)||e.getAttribute(`aria-labelledby`)||``).split(` `).filter(e=>e&&e!==t).join(` `);e.setAttribute(`aria-labelledby`,t?`${n} ${t}`.trim():n),ei.call(j(F,this))?.setAttribute(`aria-labelledby`,n);let r=this.getAttribute(`aria-label`);r&&e.setAttribute(`aria-label`,r)}_inputGroupInputTemplate(){let e=j(F,this,Ai).call(this)?.data,t=e?.icon,r=e?.color,a=e?.indicator;return p`
      <div class="input-group__input">
        <slot name="selection"></slot>
        <div class="combobox__textbox">
          ${t?p`<craft-icon
                class="prefix"
                name=${t}
                style=${r?`color: ${Tr(r)}`:i}
              ></craft-icon>`:a?p`<span class="prefix prefix--indicator">
                  <craft-indicator
                    fill=${a.fill??i}
                    appearance=${a.appearance??i}
                  ></craft-indicator>
                </span>`:i}
          <slot name="input"></slot>
          ${this.clearable&&j(F,this,Ti).call(this)&&!ii.call(j(F,this))?p`<craft-button
                class="clear"
                type="button"
                variant="plain"
                size="small"
                icon
                aria-label=${n(`Clear`)}
                @mousedown=${e=>e.preventDefault()}
                @click=${k(Gr,this)}
              >
                <craft-icon name="xmark-large"></craft-icon>
              </craft-button>`:i}
          <craft-icon
            class="indicator"
            name="chevron-down"
            @mousedown=${k(Xr,this)}
            @click=${k(Zr,this)}
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
    `}focus(e){this._control?.focus(e)}_formValue(){return k(Nr,this)?null:this.multiple?[...this.value]:this.value}formResetCallback(){this.value=k(Mr,this),A(Fr,this,this.value),j(F,this,ci).call(this),this._syncFormValue()}formDisabledCallback(e){A(Nr,this,e),this.requestUpdate(),this._syncFormValue()}};function ei(){return this.querySelector(`:scope > [slot=listbox]`)??void 0}function ti(){return this.renderRoot.querySelector(`#overlay-content-node-wrapper`)}function ni(e,t){e.dataset.comboboxTextbox===void 0&&(e.dataset.comboboxTextbox=``,t.id||=le(`listbox`),t.setAttribute(`role`,`listbox`),t.addEventListener(`mousedown`,e=>e.preventDefault()),t.addEventListener(`click`,k(Wr,this)),e.setAttribute(`role`,`combobox`),e.setAttribute(`aria-haspopup`,`listbox`),e.setAttribute(`aria-autocomplete`,`list`),e.setAttribute(`aria-controls`,t.id),e.setAttribute(`aria-expanded`,`false`),e.addEventListener(`input`,k(Hr,this)),e.addEventListener(`keydown`,k(Ur,this)),e.addEventListener(`click`,k(Br,this)),e.addEventListener(`change`,e=>e.stopPropagation()))}function ri(e){if(this._control?.setAttribute(`aria-expanded`,String(this.open)),this.open){k(Rr,this).show(),document.addEventListener(`pointerdown`,k(zr,this));return}k(Rr,this).hide(),document.removeEventListener(`pointerdown`,k(zr,this)),e&&(j(F,this,_i).call(this,void 0),k(Pr,this)&&(A(Pr,this,!1),j(F,this,ci).call(this)))}function ii(){return this.disabled||this.readOnly||k(Nr,this)}function ai(){return!ii.call(j(F,this))&&((this._control?.value??``)!==``||this.showAllOnEmpty)}function oi(e){let t=e.trim();if(t!==``){for(let e of j(F,this,ji).call(this))if(j(F,this,Mi).call(this,e)===t)return e.value}return e}function si(e){let t=this.value;A(kr,this,e),Dr(t,this.value)||this.requestUpdate(`value`,t)}function ci(){let e=this._control;if(!e||this.multiple)return;let t=this.value,n=j(F,this,ki).call(this,t),r=n?j(F,this,Mi).call(this,n):t;e.value!==r&&(e.value=r),A(Lr,this,r)}function li(e){if(!ii.call(j(F,this))){if(e.preventDefault(),e.altKey){this.open=e.key===`ArrowDown`;return}if(!this.open){this.open=!0;return}j(F,this,_i).call(this,br(j(F,this,hi).call(this),j(F,this,gi).call(this),e.key===`ArrowDown`?1:-1))}}function ui(e){let t=this.open?j(F,this,gi).call(this):void 0;if(this.open&&e.preventDefault(),!ii.call(j(F,this))){if(this.multiple){if(t){t.disabled||j(F,this,di).call(this,t);return}e.preventDefault(),j(F,this,mi).call(this);return}t&&!t.disabled&&j(F,this,di).call(this,t),this.open=!1}}function di(e){let t=e.value;if(this.multiple){let e=this.value;e.includes(t)||j(F,this,pi).call(this,[...e,t],{close:!1,inputType:Or});return}A(Ar,this,!0),this.value=t,A(Pr,this,!1),j(F,this,ci).call(this),_t(this,Or),j(F,this,fi).call(this)}function fi(){A(Ar,this,!1),!(this.multiple||Dr(this.value,k(Fr,this)))&&(A(Fr,this,this.value),vt(this))}function pi(e,{close:t=!0,inputType:r}={}){if(ii.call(j(F,this)))return;let i=this.value.filter(t=>!e.includes(t));this.value=e,this._control&&(this._control.value=``),A(Lr,this,``),A(Pr,this,!1),t&&(this.open=!1),j(F,this,Si).call(this),this._syncFormValue(),_t(this,r),A(Fr,this,this.value),Dr(this.value,e)&&vt(this),this._control?.focus(),i.length&&j(F,this,Di).call(this,n(`Removed {name}`,{name:new Intl.ListFormat(document.documentElement.lang||void 0,{type:`conjunction`}).format(i.map(e=>j(F,this,Oi).call(this,e)))}),!0)}function mi(){let e=this._control?.value??``;if(ii.call(j(F,this))||e===``)return;let t=j(F,this,ki).call(this,e);t?.disabled||this.requireOptionMatch&&!t||j(F,this,pi).call(this,[...new Set([...this.value,e])])}function hi(){return _r(ei.call(j(F,this)))}function gi(){return k(Ir,this)===null?void 0:j(F,this,hi).call(this).find(e=>e.value===k(Ir,this))}function _i(e){A(Ir,this,e?.value??null),yr(j(F,this,hi).call(this),e,this._control,{scroll:this.open})}function vi(e){let t=e.trim().toLowerCase(),n=[];for(let e of this.options)if(j(F,this,bi).call(this,e))for(let r of e.options)(t===``||j(F,this,xi).call(this,t,r))&&n.push({groupLabel:e.label,option:r});else(t===``||j(F,this,xi).call(this,t,e))&&n.push({option:e});return t===``?n:j(F,this,yi).call(this,t,n)}function yi(e,t){let n=({option:t})=>t.label.toLowerCase()===e||String(t.value).toLowerCase()===e,r=[];for(let e=0;e<t.length;){let i=e;for(;i<t.length&&t[i].groupLabel===t[e].groupLabel;)i++;let a=t.slice(e,i);r.push(...a.filter(n),...a.filter(e=>!n(e))),e=i}return r}function bi(e){return e.type===`optgroup`}function xi(e,t){return t.label.toLowerCase().includes(e)||String(t.value).toLowerCase().includes(e)||(t.data?.keywords?.toLowerCase().includes(e)??!1)}function Si(){let e=ei.call(j(F,this));if(!e)return;let t=k(Pr,this)?this._control?.value??``:``,n=this.multiple?this.value:[],r=j(F,this,vi).call(this,t).filter(e=>!n.includes(e.option.value)),i=r.slice(0,this.limit),a=[],o=new Map;for(let e of i){let t=a.at(-1);if(t&&t.groupLabel===e.groupLabel){t.entries.push(e);continue}let n=e.groupLabel??``,r=o.get(n)??0;o.set(n,r+1),a.push({key:`${e.groupLabel===void 0?`options`:`group`}:${n}:${r}`,groupLabel:e.groupLabel,entries:[e]})}let c=this.multiple?null:this.value,l=e=>Nt(e.entries,e=>e.option.value,e=>j(F,this,Ci).call(this,e.option,c!==null&&String(e.option.value)===c));this.overflowTotal=r.length>this.limit?r.length:0,j(F,this,Ei).call(this,r.length),s(p`${Nt(a,e=>e.key,e=>e.groupLabel===void 0?l(e):p`<craft-option-group .label=${e.groupLabel}>
                ${l(e)}
              </craft-option-group>`)}`,e);let u=j(F,this,gi).call(this);k(Ir,this)!==null&&!u&&A(Ir,this,null),yr(j(F,this,hi).call(this),u,this._control,{scroll:!1})}function Ci(e,t){let n=e.data??{},r=e.label,i=r.startsWith(`$`)||r.startsWith(`@`);return p`
      <craft-option
        .value=${String(e.value)}
        .selected=${t}
        .hint=${n.hint??null}
        ?disabled=${e.disabled??!1}
      >
        ${j(F,this,wi).call(this,n)}${i?p`<code>${r}</code>`:r}
      </craft-option>
    `}function wi(e){return p`${e.indicator?p`<craft-indicator
          fill=${e.indicator.fill??i}
          appearance=${e.indicator.appearance??i}
        ></craft-indicator>`:i}${e.icon?p`<craft-icon
          name="${e.icon}"
          style=${e.color?`color: ${Tr(e.color)}`:i}
        ></craft-icon>`:i}`}function Ti(){let e=this.value;return Array.isArray(e)?e.length>0:e!==``}function Ei(e){if(!this.open&&!k(Pr,this)){A(qr,this,``);return}let t=e===0?n(`No results`):n(`{num, number} {num, plural, =1{result} other{results}}`,{num:e});t!==k(qr,this)&&(k(Jr,this)&&!k(Pr,this)||(A(qr,this,t),j(F,this,Di).call(this,t)))}function Di(e,t=!1){A(Jr,this,t),k(Kr,this)!==null&&(clearTimeout(k(Kr,this)),A(Kr,this,null)),this.announcement=``,queueMicrotask(()=>{this.isConnected&&(this.announcement=e)}),A(Kr,this,setTimeout(()=>{A(Kr,this,null),A(Jr,this,!1),this.announcement=``},5e3))}function Oi(e){return j(F,this,ki).call(this,e)?.label??e}function ki(e){for(let t of j(F,this,ji).call(this))if(String(t.value)===e)return t}function Ai(){return this.multiple||!j(F,this,Ti).call(this)?void 0:j(F,this,ki).call(this,this.value)}function*ji(){for(let e of this.options)j(F,this,bi).call(this,e)?yield*e.options:yield e}function Mi(e){return this.showSelectedHint&&e.data?.hint?`${e.label} – ${e.data.hint}`:e.label}function Ni(){k(Qr,this)||(A(Qr,this,document.createElement(`ul`)),k(Qr,this).slot=`selection`,k(Qr,this).id=`selection-${this._inputId}`,k(Qr,this).setAttribute(`role`,`list`),k(Qr,this).setAttribute(`aria-live`,`polite`),k(Qr,this).setAttribute(`aria-atomic`,`false`),this.append(k(Qr,this)));let e=this.value;s(Nt(e,e=>e,e=>p`
          <li>
            <craft-combobox-token
              ?removable=${!ii.call(j(F,this))}
              @craft-remove=${()=>j(F,this,pi).call(this,this.value.filter(t=>t!==e))}
            >
              ${j(F,this,wi).call(this,j(F,this,ki).call(this,e)?.data??{})}
              ${j(F,this,Oi).call(this,e)}
            </craft-combobox-token>
          </li>
        `),k(Qr,this))}function Pi(){let e=this.multiple&&this.required&&!this.disabled&&!this.readOnly&&!k(Nr,this)&&this.value.length===0;this._setValidity(e?{valueMissing:!0}:{},e?n(`This field is required.`):``,this._control)}$r.styles=[ve,D,De,wr],r([c({type:Array})],$r.prototype,`options`,void 0),r([c({type:Number})],$r.prototype,`limit`,void 0),r([c({type:Boolean,attribute:`multiple`,reflect:!0})],$r.prototype,`multiple`,void 0),r([c({type:Boolean,attribute:`require-option-match`})],$r.prototype,`requireOptionMatch`,void 0),r([c({type:Boolean,attribute:`show-all-on-empty`})],$r.prototype,`showAllOnEmpty`,void 0),r([c({type:Boolean})],$r.prototype,`required`,void 0),r([c({type:Boolean,reflect:!0})],$r.prototype,`invalid`,void 0),r([c({type:Boolean,reflect:!0})],$r.prototype,`open`,void 0),r([c({type:Boolean,reflect:!0})],$r.prototype,`clearable`,void 0),r([c({type:String,reflect:!0})],$r.prototype,`placeholder`,void 0),r([c({type:Boolean,reflect:!0,attribute:`show-selected-hint`})],$r.prototype,`showSelectedHint`,void 0),r([c({attribute:`value`})],$r.prototype,`value`,null),r([f()],$r.prototype,`announcement`,void 0),r([f()],$r.prototype,`overflowTotal`,void 0),customElements.get(`craft-combobox`)||customElements.define(`craft-combobox`,$r);var Fi=a`
  :host {
    display: inline-flex;
  }
`,Ii={rest:`custom-icons/clone-dashed`,copying:`custom-icons/clone-dashed`,success:`check`,error:`xmark-large`},Li=new WeakMap,Ri=new WeakSet,zi=class extends u{async copyValue(){if(!(this.status===`copying`||this.disabled)){this.status=`copying`;try{await navigator.clipboard.writeText(this.value),this.dispatchEvent(new CustomEvent(`craft-copy`,{bubbles:!0,cancelable:!1,composed:!0,detail:{value:this.value}}))}catch{this.dispatchEvent(new CustomEvent(`craft-error`,{cancelable:!1,composed:!0,bubbles:!0}))}finally{this.isCopying=!1}}}async showStatus(e){clearTimeout(k(Li,this)),this.status=e,await this.updateComplete,this.hideTooltip?await this.tooltipEl?.show():this.tooltipEl?.reposition(),A(Li,this,setTimeout(()=>{this.status=`rest`,this.tooltipEl?.hide()},this.feedbackDuration))}constructor(){super(),O(this,Ri),this.isCopying=!1,this.status=`rest`,this.hasLabel=!1,this.value=``,this.disabled=!1,this.feedbackDuration=1e3,this.label=null,this.tooltipLabel=null,this.hideTooltip=!1,this.icon=null,this.size=`small`,this.variant=_e.Plain,M(this,Li,void 0),this.addEventListener(`craft-copy`,()=>{this.showStatus(`success`)}),this.addEventListener(`craft-error`,()=>{this.showStatus(`error`)})}connectedCallback(){super.connectedCallback(),this.id||=`copy-${Math.floor(Math.random()*1e8)}`}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(k(Li,this)),this.status=`rest`}render(){return p`
      <craft-tooltip
        for="${this.id}"
        trigger="${this.hideTooltip?`manual`:`hover focus`}"
        >${Bi.call(j(Ri,this))}</craft-tooltip
      >
      <craft-button
        type="button"
        id="${this.id}"
        part="button"
        size="${this.size}"
        variant="${this.variant}"
        flush=${C(this.flush)}
        icon="${this.status===`success`||this.status===`error`?Ii[this.status]:this.icon??Ii[this.status]}"
        aria-label="${this.hasLabel?i:this.label||n(`Copy to clipboard`)}"
        ?disabled=${this.disabled}
        @click="${this.copyValue}"
        >${this.hasLabel?p`<slot @slotchange=${j(Ri,this,Vi)}></slot>`:i}</craft-button
      >
      ${this.hasLabel?i:p`<slot hidden @slotchange=${j(Ri,this,Vi)}></slot>`}
    `}};function Bi(){return this.status===`success`?n(`Copied`):this.status===`error`?n(`Copy failed`):this.hideTooltip?``:this.tooltipLabel||n(`Copy`)}function Vi(){this.hasLabel=[...this.childNodes].some(e=>e instanceof Element||!!e.textContent?.trim())}zi.styles=[Fi],r([f()],zi.prototype,`isCopying`,void 0),r([f()],zi.prototype,`status`,void 0),r([f()],zi.prototype,`hasLabel`,void 0),r([m(`craft-tooltip`)],zi.prototype,`tooltipEl`,void 0),r([c({type:String})],zi.prototype,`value`,void 0),r([c({type:Boolean})],zi.prototype,`disabled`,void 0),r([c({attribute:`feedback-duration`,type:Number})],zi.prototype,`feedbackDuration`,void 0),r([c()],zi.prototype,`label`,void 0),r([c({attribute:`tooltip-label`})],zi.prototype,`tooltipLabel`,void 0),r([c({type:Boolean,attribute:`hide-tooltip`})],zi.prototype,`hideTooltip`,void 0),r([c()],zi.prototype,`icon`,void 0),r([c({reflect:!0})],zi.prototype,`size`,void 0),r([c({reflect:!0})],zi.prototype,`variant`,void 0),r([c({reflect:!0})],zi.prototype,`flush`,void 0),customElements.get(`craft-copy-button`)||customElements.define(`craft-copy-button`,zi);var Hi=a`
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
`,Ui=a`
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
`,Wi=Object.defineProperty,Gi=Object.getOwnPropertyDescriptor,Ki=Object.getOwnPropertySymbols,qi=Object.prototype.hasOwnProperty,Ji=Object.prototype.propertyIsEnumerable,Yi=e=>{throw TypeError(e)},Xi=(e,t,n)=>t in e?Wi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Zi=(e,t)=>{for(var n in t||={})qi.call(t,n)&&Xi(e,n,t[n]);if(Ki)for(var n of Ki(t))Ji.call(t,n)&&Xi(e,n,t[n]);return e},Qi=(e,t,n,r)=>{for(var i=r>1?void 0:r?Gi(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&Wi(t,n,i),i},$i=(e,t,n)=>t.has(e)||Yi(`Cannot `+n),ea=(e,t,n)=>($i(e,t,`read from private field`),n?n.call(e):t.get(e)),ta=(e,t,n)=>t.has(e)?Yi(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),na=(e,t,n,r)=>($i(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),ra,ia=class extends u{constructor(){super(),ta(this,ra,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){let n=new CustomEvent(e,Zi({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(n),n}static define(e,t=this,n={}){let r=customElements.get(e);if(!r){try{customElements.define(e,t,n)}catch{customElements.define(e,class extends t{},n)}return}let i=` (unknown version)`,a=i;`version`in t&&t.version&&(i=` v`+t.version),`version`in r&&r.version&&(a=` v`+r.version),!(i&&a&&i===a)&&console.warn(`Attempted to register <${e}>${i}, but <${e}>${a} has already been registered.`)}attributeChangedCallback(e,t,n){ea(this,ra)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),na(this,ra,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}};ra=new WeakMap,ia.version=`2.20.1`,ia.dependencies={},Qi([c()],ia.prototype,`dir`,2),Qi([c()],ia.prototype,`lang`,2);var aa=class extends ia{render(){return p` <slot></slot> `}};aa.styles=[Ui,Hi],aa.define(`sl-visually-hidden`);var oa=a`
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
`,sa=class extends u{constructor(...e){super(...e),this.value=``,this.disabled=!1}getId(){return`attribute-${this.value.replace(/([a-z])([A-Z])/g,`$1-$2`).replace(/[\s_]+/g,`-`).toLowerCase()}`}render(){return p`
      <craft-copy-button
        id="${this.getId()}"
        value="${this.value}"
        class=${w({"copy-attribute":!0})}
      >
        ${this.value}
      </craft-copy-button>
    `}};sa.styles=[re,oa],r([m(`craft-copy-button`)],sa.prototype,`copyButtonEl`,void 0),r([c({type:String})],sa.prototype,`value`,void 0),r([c({type:Boolean,reflect:!0})],sa.prototype,`disabled`,void 0),customElements.get(`craft-copy-attribute`)||customElements.define(`craft-copy-attribute`,sa);var ca=a`
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
`,la=new WeakMap,ua=new WeakMap,da=new WeakMap,I=new WeakSet,fa=new WeakMap,pa=class extends u{constructor(...e){super(...e),O(this,I),this.target=null,this.label=``,this.minSize=200,this.step=16,this.largeStep=64,this.dragging=null,M(this,la,null),M(this,ua,null),M(this,da,null),M(this,fa,()=>{(k(la,this)!==null||k(ua,this)!==null)&&j(I,this,ya).call(this,k(la,this),k(ua,this))})}connectedCallback(){super.connectedCallback(),window.addEventListener(`resize`,k(fa,this))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`resize`,k(fa,this))}reset(){A(la,this,null),A(ua,this,null),j(I,this,ba).call(this)}render(){let e=j(I,this,Ta).call(this,`x`),t=j(I,this,Ta).call(this,`y`),r=j(I,this,Ta).call(this,`both`);return p`
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
        @keydown=${j(I,this,wa)}
      ></button>
    `}};function ma(){return this.target??this.parentElement}function ha(){let e=ma.call(j(I,this));return e?getComputedStyle(e).direction===`rtl`:!1}function ga(){let e=ma.call(j(I,this))?.getBoundingClientRect();return{width:Math.round(e?.width??0),height:Math.round(e?.height??0)}}function _a(){let e=ma.call(j(I,this)),t=e?getComputedStyle(e):null;return{width:parseFloat(t?.maxWidth??``)||window.innerWidth,height:parseFloat(t?.maxHeight??``)||window.innerHeight}}function va(e,t){return Math.round(Math.min(Math.max(e,this.minSize),t))}function ya(e,t){let n=j(I,this,_a).call(this);A(la,this,e===null?null:j(I,this,va).call(this,e,n.width)),A(ua,this,t===null?null:j(I,this,va).call(this,t,n.height)),j(I,this,ba).call(this)}function ba(){this.dispatchEvent(new CustomEvent(`craft-resize`,{detail:{width:k(la,this),height:k(ua,this)},bubbles:!0,composed:!0}))}function xa(e,t){if(e.button!==0)return;e.preventDefault();let n=e.currentTarget;try{n.setPointerCapture(e.pointerId)}catch{}let r=j(I,this,ga).call(this);A(da,this,{axis:t,pointerId:e.pointerId,startX:e.clientX,startY:e.clientY,startWidth:k(la,this)??r.width,startHeight:k(ua,this)??r.height,sign:ha.call(j(I,this))?-1:1}),this.dragging=t}function Sa(e){let t=k(da,this);if(!t||e.pointerId!==t.pointerId)return;let n=(e.clientX-t.startX)*t.sign,r=e.clientY-t.startY;j(I,this,ya).call(this,t.axis===`y`?k(la,this):t.startWidth+n*2,t.axis===`x`?k(ua,this):t.startHeight+r*2)}function Ca(e){if(!k(da,this)||e.pointerId!==k(da,this).pointerId)return;let t=e.currentTarget;t.hasPointerCapture?.(e.pointerId)&&t.releasePointerCapture(e.pointerId),A(da,this,null),this.dragging=null}function wa(e){let t=e.shiftKey?this.largeStep:this.step,n=j(I,this,ga).call(this),r=k(la,this)??n.width,i=k(ua,this)??n.height,a=ha.call(j(I,this))?-t:t;switch(e.key){case`ArrowLeft`:j(I,this,ya).call(this,r-a,i);break;case`ArrowRight`:j(I,this,ya).call(this,r+a,i);break;case`ArrowUp`:j(I,this,ya).call(this,r,i-t);break;case`ArrowDown`:j(I,this,ya).call(this,r,i+t);break;case`Enter`:this.reset();break;default:return}e.preventDefault()}function Ta(e){return{down:t=>j(I,this,xa).call(this,t,e),move:e=>j(I,this,Sa).call(this,e),up:e=>j(I,this,Ca).call(this,e)}}pa.styles=[ca],r([c({attribute:!1})],pa.prototype,`target`,void 0),r([c()],pa.prototype,`label`,void 0),r([c({type:Number,attribute:`min-size`})],pa.prototype,`minSize`,void 0),r([c({type:Number})],pa.prototype,`step`,void 0),r([c({type:Number,attribute:`large-step`})],pa.prototype,`largeStep`,void 0),r([f()],pa.prototype,`dragging`,void 0),customElements.get(`craft-resize-grips`)||customElements.define(`craft-resize-grips`,pa);var Ea=a`
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

  /*
    Keeps scroll gestures over a modal's backdrop from reaching the page. It
    only honours overscroll-behavior once it is a scroll container.
  */
  dialog::backdrop {
    background-color: rgb(0 0 0 / 0.25);
    overflow: hidden;
    overscroll-behavior: contain;
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
    box-sizing: border-box;
    min-block-size: var(--c-modal-header-height);
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
    overscroll-behavior: contain;
    padding: var(--c-spacing-lg);
  }

  .footer {
    grid-row: 3;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: var(--c-spacing-sm);
    box-sizing: border-box;
    min-block-size: var(--c-modal-footer-height);
    padding-block: var(--c-spacing-sm);
    padding-inline: var(--c-spacing-md);
    border-block-start: 1px solid var(--c-color-neutral-border-quiet);
    box-shadow: var(--c-shadow-sm);
    position: relative;
    z-index: 2;
  }
`,Da=0,Oa=0;function ka(){Oa++===0&&document.body.classList.add(`no-scroll`)}function Aa(){Oa>0&&--Oa===0&&document.body.classList.remove(`no-scroll`)}var ja=new WeakMap,Ma=new WeakMap,Na=new WeakMap,Pa=new WeakMap,Fa=new WeakMap,Ia=new WeakMap,La=new WeakSet,Ra=new WeakMap,za=new WeakMap,Ba=new WeakMap,Va=new WeakMap,Ha=new WeakMap,Ua=new WeakMap,Wa=new WeakMap,Ga=class extends u{constructor(...e){super(...e),O(this,La),this.open=!1,this.label=``,this.nonModal=!1,this.fullscreen=!1,this.closeOnOutsideClick=!1,this.noClose=!1,this.noHeader=!1,M(this,ja,null),M(this,Ma,null),this.resizable=!1,this.resizedSize={width:null,height:null},this.titleId=`craft-dialog-title-${++Da}`,M(this,Na,!1),M(this,Pa,null),M(this,Fa,!1),M(this,Ia,null),M(this,Ra,e=>{e.stopPropagation(),this.resizedSize=e.detail}),M(this,za,e=>{e.preventDefault(),this.requestClose()}),M(this,Ba,()=>{this.open=!1}),M(this,Va,e=>{!this.open||e.key!==`Escape`||e.defaultPrevented||e.isComposing||(e.preventDefault(),this.requestClose())}),M(this,Ha,e=>{e.target?.closest?.(`[data-dialog="close"]`)&&this.requestClose()}),M(this,Ua,e=>{this.closeOnOutsideClick&&e.target===this.dialogElement&&this.requestClose()}),M(this,Wa,()=>{this.closeOnOutsideClick&&this.requestClose()})}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,k(Ha,this)),this.addEventListener(`keydown`,k(Va,this)),A(Ia,this,new MutationObserver(()=>this.requestUpdate())),k(Ia,this).observe(this,{childList:!0})}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,k(Ha,this)),this.removeEventListener(`keydown`,k(Va,this)),k(Ia,this)?.disconnect(),A(Ia,this,null),k(Pa,this)?.call(this),A(Pa,this,null),A(ja,this,null),A(Ma,this,null),j(La,this,Xa).call(this),_()}get dialogElement(){return this.shadowRoot?.querySelector(`dialog`)??null}get hasFooter(){return this.querySelector(`:scope > [slot="footer"]`)!==null}render(){return p`
      ${this.nonModal&&this.open?p`<div
            class="backdrop"
            part="backdrop"
            @click=${k(Wa,this)}
          ></div>`:i}
      <dialog
        part="dialog"
        aria-labelledby=${this.label===``?i:this.titleId}
        @cancel=${k(za,this)}
        @close=${k(Ba,this)}
        @click=${k(Ua,this)}
      >
        ${this.resizable&&!this.fullscreen?p`<div class="frame">
              ${j(La,this,Ka).call(this)}
              <craft-resize-grips
                @craft-resize=${k(Ra,this)}
              ></craft-resize-grips>
            </div>`:j(La,this,Ka).call(this)}
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
    `}updated(e){super.updated(e);let t=this.shadowRoot?.querySelector(`craft-resize-grips`),n=this.shadowRoot?.querySelector(`.surface`);t&&n&&t.target!==n&&(t.target=n),this.open!==k(Na,this)&&(A(Na,this,this.open),this.open?j(La,this,qa).call(this):j(La,this,Ja).call(this),j(La,this,Za).call(this,this.open))}requestClose(){this.dispatchEvent(new CustomEvent(`craft-before-hide`,{bubbles:!0,composed:!0,cancelable:!0}))&&(this.open=!1)}};function Ka(){let{width:e,height:t}=this.resizedSize,n=this.resizable&&!this.fullscreen;return p`<div
      class="surface"
      part="surface"
      style=${ce({"inline-size":n&&e!==null?`${e}px`:void 0,"block-size":n&&t!==null?`${t}px`:void 0})}
    >
      ${this.hasHeader?this.renderHeader():this.renderHiddenTitle()}
      ${this.renderBody()} ${this.renderFooter()}
    </div>`}function qa(){let e=this.dialogElement,t=document.activeElement;A(ja,this,t instanceof HTMLElement?t:null),A(Ma,this,S(k(ja,this))),e&&!e.open&&(this.nonModal?e.show():e.showModal()),this.nonModal&&(k(Pa,this)?.call(this),A(Pa,this,Fe(this)),k(Fa,this)||(A(Fa,this,!0),ka()))}function Ja(){let e=this.dialogElement,t=k(ja,this),n=k(Ma,this);A(ja,this,null),A(Ma,this,null);let r=!1;e?.open&&(r=this.matches(`:focus-within`),e.close()),k(Pa,this)?.call(this),A(Pa,this,null),j(La,this,Xa).call(this),_();let i=document.activeElement,a=!me(i)||this.contains(i);(!this.nonModal||r||a)&&j(La,this,Ya).call(this,t,n,a)}function Ya(e,t,n){let r=this.returnFocus?.(e);if(me(r)){r.focus();return}n&&t?.()?.focus()}function Xa(){k(Fa,this)&&(A(Fa,this,!1),Aa())}function Za(e){j(La,this,Qa).call(this,e?`craft-show`:`craft-hide`),this.updateComplete.then(()=>{this.open===e&&j(La,this,Qa).call(this,e?`craft-after-show`:`craft-after-hide`)})}function Qa(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}Ga.styles=[re,Ea],r([c({type:Boolean,reflect:!0})],Ga.prototype,`open`,void 0),r([c()],Ga.prototype,`label`,void 0),r([c({type:Boolean,attribute:`non-modal`,reflect:!0})],Ga.prototype,`nonModal`,void 0),r([c({type:Boolean,reflect:!0})],Ga.prototype,`fullscreen`,void 0),r([c({type:Boolean,attribute:`close-on-outside-click`})],Ga.prototype,`closeOnOutsideClick`,void 0),r([c({type:Boolean,attribute:`no-close`,reflect:!0})],Ga.prototype,`noClose`,void 0),r([c({type:Boolean,attribute:`no-header`,reflect:!0})],Ga.prototype,`noHeader`,void 0),r([c({attribute:!1})],Ga.prototype,`returnFocus`,void 0),r([c({type:Boolean,reflect:!0})],Ga.prototype,`resizable`,void 0),r([f()],Ga.prototype,`resizedSize`,void 0),customElements.get(`craft-dialog`)||customElements.define(`craft-dialog`,Ga);var $a=new WeakMap,eo=new WeakSet,to=class{constructor(e,t){this.host=e,this.source=t,O(this,eo),M(this,$a,null),e.addController(this)}hostConnected(){j(eo,this,no).call(this)}hostDisconnected(){j(eo,this,ro).call(this)}resubscribe(){j(eo,this,ro).call(this),j(eo,this,no).call(this)}get state(){return this.source()?.state??null}};function no(){A($a,this,this.source()?.on(`change`,()=>this.host.requestUpdate())??null)}function ro(){k($a,this)?.call(this),A($a,this,null)}var io=a`
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
`,ao=new WeakMap,oo=new WeakMap,so=new WeakMap,co=new WeakMap,lo=new WeakMap,uo=new WeakSet,fo=new WeakMap,po=new WeakMap,mo=class extends Ga{constructor(){super(),O(this,uo),this.controller=null,this.showTitle=!1,this.selectLabel=``,this.cancelLabel=``,this.busy=!1,this.loading=!1,this.canSubmit=!1,this.narrow=!1,this.hasIndex=!1,M(this,ao,new to(this,()=>this.controller)),M(this,oo,null),M(this,so,void 0),M(this,co,void 0),M(this,lo,()=>{j(uo,this,go).call(this),clearTimeout(k(co,this)),A(co,this,setTimeout(()=>j(uo,this,ho).call(this),200))}),M(this,fo,()=>{this.submit()}),M(this,po,()=>{this.busy||this.requestClose()}),this.resizable=!0}connectedCallback(){super.connectedCallback(),window.addEventListener(`resize`,k(lo,this)),typeof ResizeObserver<`u`&&(A(oo,this,new ResizeObserver(([e])=>{e&&(this.narrow=e.contentRect.width<550)})),this.hasUpdated&&j(uo,this,_o).call(this))}disconnectedCallback(){super.disconnectedCallback(),k(oo,this)?.disconnect(),window.removeEventListener(`resize`,k(lo,this)),clearTimeout(k(co,this)),j(uo,this,go).call(this)}updated(e){super.updated(e),!this.open||!this.hasIndex?j(uo,this,go).call(this):(e.has(`hasIndex`)||e.has(`open`))&&!this.hasAttribute(`size-locked`)&&j(uo,this,ho).call(this)}willUpdate(e){e.has(`controller`)&&k(ao,this).resubscribe();let t=k(ao,this).state;t&&(this.open=t.open,this.busy=t.busy,this.loading=t.loading,this.canSubmit=t.canSubmit,this.label=t.title,this.showTitle=t.showTitle,this.selectLabel=t.selectLabel,this.hasIndex=t.indexBody!==null),super.willUpdate(e)}firstUpdated(e){super.firstUpdated(e),j(uo,this,_o).call(this)}renderHeader(){if(this.label===``)return p``;let e=p`<h1
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
            @click=${k(po,this)}
          >
            ${this.cancelLabel||n(`Cancel`)}
          </craft-button>
          <craft-button
            part="select"
            type="button"
            variant="primary"
            ?disabled=${!this.canSubmit}
            ?loading=${this.busy}
            @click=${k(fo,this)}
          >
            ${this.selectLabel||n(`Select`)}
          </craft-button>
        </div>
      </footer>
    `}submit(){this.canSubmit&&(this.dispatchEvent(new CustomEvent(`craft-select`,{bubbles:!0,composed:!0})),this.controller?.submit())}requestClose(){if(this.dispatchEvent(new CustomEvent(`craft-cancel`,{bubbles:!0,composed:!0})),this.controller){this.controller.cancel();return}super.requestClose()}};function ho(){k(so,this)!==void 0&&cancelAnimationFrame(k(so,this)),A(so,this,requestAnimationFrame(()=>{A(so,this,requestAnimationFrame(()=>{A(so,this,void 0);let e=this.shadowRoot?.querySelector(`.surface`);if(!this.open||!this.hasIndex||!e)return;let t=e.getBoundingClientRect().height;t>0&&(this.style.setProperty(`--_locked-block-size`,`${t}px`),this.setAttribute(`size-locked`,``))}))}))}function go(){k(so,this)!==void 0&&(cancelAnimationFrame(k(so,this)),A(so,this,void 0)),this.removeAttribute(`size-locked`),this.style.removeProperty(`--_locked-block-size`)}function _o(){let e=this.shadowRoot?.querySelector(`.surface`);e&&k(oo,this)?.observe(e)}mo.styles=[...Ga.styles,io],r([c({attribute:!1})],mo.prototype,`controller`,void 0),r([c({type:Boolean,attribute:`show-title`,reflect:!0})],mo.prototype,`showTitle`,void 0),r([c({attribute:`select-label`})],mo.prototype,`selectLabel`,void 0),r([c({attribute:`cancel-label`})],mo.prototype,`cancelLabel`,void 0),r([c({type:Boolean,reflect:!0})],mo.prototype,`busy`,void 0),r([c({type:Boolean,reflect:!0})],mo.prototype,`loading`,void 0),r([c({type:Boolean,attribute:`can-submit`,reflect:!0})],mo.prototype,`canSubmit`,void 0),r([c({type:Boolean,reflect:!0})],mo.prototype,`narrow`,void 0),r([f()],mo.prototype,`hasIndex`,void 0),customElements.get(`craft-element-selector-modal`)||customElements.define(`craft-element-selector-modal`,mo);var vo=[`chevron-down`,`chevron-up`,`chevron-right`,`chevron-left`],yo=class extends u{constructor(...e){super(...e),this.open=!1,this.label=``,this.appearance=`line`,this.size=`medium`,this.state=null,this.cookieName=null,this.__defaultInvoker=null,this.__boundInvoker=null,this.__externalTrigger=null,this.__externalExpanded=!1,this.__announcedOpened=null,this.toggle=()=>{this.open=!this.open},this.__onSlotChange=()=>{this.__externalTrigger||this.__setupSlottedMode()},this.__toggleExternal=()=>{this.state=this.__externalExpanded?`collapsed`:`expanded`}}show(){this.open=!0}hide(){this.open=!1}get __invoker(){return this.__slotted(`invoker`)}get __content(){return this.__slotted(`content`)}__slotted(e){return Array.from(this.children).find(t=>t instanceof HTMLElement&&t.slot===e)}get __externalTarget(){let e=this.__externalTrigger?.getAttribute(`aria-controls`);return e?document.getElementById(e):null}render(){return p`
      <slot name="invoker" @slotchange=${this.__onSlotChange}></slot>
      <slot name="content" @slotchange=${this.__onSlotChange}></slot>
      <slot></slot>
    `}connectedCallback(){this.__externalTrigger=this.querySelector(`:scope > button[type="button"][aria-controls]:not([slot])`),super.connectedCallback(),this.__externalTrigger?this.__setupExternalMode():this.__setupSlottedMode()}disconnectedCallback(){super.disconnectedCallback(),this.__boundInvoker?.removeEventListener(`click`,this.toggle),this.__boundInvoker=null,this.__externalTrigger&&(this.__handleExternalOpen(),this.__externalTrigger.removeEventListener(`click`,this.__toggleExternal))}updated(e){super.updated(e),e.has(`label`)&&this.__defaultInvoker&&(this.__defaultInvoker.textContent=this.label),e.has(`size`)&&this.__defaultInvoker&&this.__defaultInvoker.setAttribute(`size`,this.size),e.has(`open`)&&!this.__externalTrigger&&(this.__syncSlottedState(),this.__syncInvokerChevron(),this.__announceOpenedChange()),e.has(`state`)&&this.__externalTrigger&&(this.state===`expanded`?this.__handleExternalOpen():this.state===`collapsed`&&this.__handleExternalClose())}__announceOpenedChange(){let e=!!this.open,t=this.__announcedOpened;this.__announcedOpened=e,t!==null&&t!==e&&this.dispatchEvent(new CustomEvent(e?`craft-show`:`craft-hide`))}__setupSlottedMode(){this.__ensureDefaultInvoker();let e=this.__invoker??null,t=this.__content;t&&(t.id||=le(`collapsible-content`)),e!==this.__boundInvoker&&(this.__boundInvoker?.removeEventListener(`click`,this.toggle),e?.addEventListener(`click`,this.toggle),this.__boundInvoker=e),e&&t&&e.setAttribute(`aria-controls`,t.id),this.__syncSlottedState(),this.__syncInvokerChevron()}__syncSlottedState(){this.__invoker?.setAttribute(`aria-expanded`,String(!!this.open)),this.__content?.style.setProperty(`display`,this.open?``:`none`)}__ensureDefaultInvoker(){if(this.__invoker)return;let e=document.createElement(`craft-button`);e.slot=`invoker`,e.setAttribute(`type`,`button`),e.setAttribute(`variant`,`plain`),e.setAttribute(`flush`,``),e.setAttribute(`icon`,`chevron-right`),e.setAttribute(`icon-position`,`suffix`),e.textContent=this.label,this.__defaultInvoker=e,this.prepend(e)}__syncInvokerChevron(){let e=this.__invoker;if(!(e instanceof Ce)||!e.icon||!vo.includes(e.icon))return;let t=getComputedStyle(this).direction===`rtl`;e.iconPosition=`suffix`,e.icon=this.open?`chevron-down`:t?`chevron-left`:`chevron-right`}__setupExternalMode(){let e=this.__externalTrigger;if(!this.__externalTarget){console.error(`No target with id ${e.getAttribute(`aria-controls`)} found for disclosure.`,e);return}e.addEventListener(`click`,this.__toggleExternal),this.state!==`expanded`&&this.state!==`collapsed`&&(this.state=`expanded`)}__handleExternalOpen(){this.__externalExpanded=!0,this.__externalTrigger?.setAttribute(`aria-expanded`,`true`),this.dispatchEvent(new CustomEvent(`craft-show`));let e=this.__externalTarget;e&&(e.dataset.state=`expanded`),this.__persistExternalState(`expanded`)}__handleExternalClose(){this.__externalExpanded=!1,this.__externalTrigger?.setAttribute(`aria-expanded`,`false`),this.dispatchEvent(new CustomEvent(`craft-hide`));let e=this.__externalTarget;e&&(e.dataset.state=`collapsed`),this.__persistExternalState(`collapsed`)}__persistExternalState(e){this.cookieName&&window.Craft?.setCookie(this.cookieName,e)}};yo.styles=a`
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
  `,r([c({type:Boolean,reflect:!0})],yo.prototype,`open`,void 0),r([c()],yo.prototype,`label`,void 0),r([c({reflect:!0})],yo.prototype,`appearance`,void 0),r([c({reflect:!0})],yo.prototype,`size`,void 0),r([c({reflect:!0})],yo.prototype,`state`,void 0),r([c({attribute:`cookie-name`})],yo.prototype,`cookieName`,void 0),customElements.get(`craft-disclosure`)||customElements.define(`craft-disclosure`,yo);var bo=class extends u{constructor(...e){super(...e),this.label=``,this.icon=``,this.appearance=`plain`}render(){return p`
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
    `}};bo.styles=[a`
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
    `],r([c()],bo.prototype,`label`,void 0),r([c()],bo.prototype,`icon`,void 0),r([c({reflect:!0})],bo.prototype,`appearance`,void 0),customElements.get(`craft-empty`)||customElements.define(`craft-empty`,bo);var xo=class extends u{constructor(...e){super(...e),this.separated=!1,this.resizeObserver=new ResizeObserver(()=>this.scheduleColumnUpdate()),this.childObserver=new MutationObserver(()=>{this.observeChildren(),this.scheduleColumnUpdate()}),this.columnUpdateFrame=null}connectedCallback(){super.connectedCallback(),this.toggleColumnTracking()}disconnectedCallback(){super.disconnectedCallback(),this.stopColumnTracking()}updated(e){e.has(`separated`)&&this.toggleColumnTracking()}toggleColumnTracking(){this.stopColumnTracking(),!(!this.separated||!this.isConnected)&&(this.childObserver.observe(this,{childList:!0}),this.observeChildren(),this.scheduleColumnUpdate())}stopColumnTracking(){this.childObserver.disconnect(),this.resizeObserver.disconnect(),this.columnUpdateFrame!==null&&(cancelAnimationFrame(this.columnUpdateFrame),this.columnUpdateFrame=null);for(let e of this.children)e.removeAttribute(`data-follows-column`)}observeChildren(){this.resizeObserver.disconnect(),this.resizeObserver.observe(this);for(let e of this.children)this.resizeObserver.observe(e)}scheduleColumnUpdate(){this.columnUpdateFrame===null&&(this.columnUpdateFrame=requestAnimationFrame(()=>{this.columnUpdateFrame=null,this.updateColumns()}))}updateColumns(){let e=null;for(let t of this.children){if(!(t instanceof HTMLElement)||t.localName===`style`||t.localName===`slot`)continue;let n=t.getClientRects().length>0;t.toggleAttribute(`data-follows-column`,n&&e!==null&&e.offsetTop===t.offsetTop),n&&(e=t)}}render(){return p`
      <style>
        craft-field-group {
          display: grid;
          grid-template-columns: repeat(12, minmax(0, 1fr));
          gap: var(--gap, var(--c-field-group-gap, var(--c-spacing-lg)))
            var(--c-spacing-md);
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
    `}createRenderRoot(){return this}};r([c({type:Boolean,reflect:!0})],xo.prototype,`separated`,void 0),customElements.get(`craft-field-group`)||customElements.define(`craft-field-group`,xo);var So=a`
  ${ue}

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
    ${ge}
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
    ${de}
  }
`,Co=/^[0-9a-f]{6}(?:[0-9a-f]{2})?$/i,wo=/^[0-9a-f]{3,4}$/i,To=/^color\(srgb\s+([\d.e+-]+)\s+([\d.e+-]+)\s+([\d.e+-]+)(?:\s*\/\s*([\d.e+-]+))?\)$/,Eo={fromAttribute(e){if(!e)return[];try{let t=JSON.parse(e);return Array.isArray(t)?t.map(e=>String(e)):[]}catch{return[]}}};function Do(e){return String(e??``).trim().replace(/^#/,``)}function Oo(e){let t=Do(e);return wo.test(t)?t.split(``).map(e=>e+e).join(``):Co.test(t)?t:null}function ko(e){if(e.startsWith(`#`))return e.substring(1);let t=e.match(To);if(!t)return e;let n=e=>Math.round(Math.min(Math.max(parseFloat(e),0),1)*255).toString(16).padStart(2,`0`),[,r=``,i=``,a=``,o]=t,s=n(r)+n(i)+n(a);return o!==void 0&&parseFloat(o)<1&&(s+=n(o)),s}var Ao=new WeakMap,jo=class e extends pe{static get styles(){return[...super.styles,So]}constructor(){super(),this.presets=[],this.alpha=!1,this._pickerListId=`${this._inputId}-presets`,this.type=`text`,M(this,Ao,()=>{let e=this._control;e&&Do(e.value)!==e.value&&(this.value=e.value)})}static doesBrowserSupportColorInputs(){if(e._browserSupportsColorInputs===null){let t=document.createElement(`input`);t.setAttribute(`type`,`color`),e._browserSupportsColorInputs=t.type===`color`}return e._browserSupportsColorInputs}static doesBrowserSupportAlphaColorInputs(){return e._browserSupportsAlphaColorInputs===null&&(e._browserSupportsAlphaColorInputs=`alpha`in document.createElement(`input`)),e._browserSupportsAlphaColorInputs}get slots(){return{...super.slots,input:()=>{let e=document.createElement(`input`),t=this.getAttribute(`value`);return e.type=`text`,e.inputMode=`text`,e.spellcheck=!1,e.setAttribute(`autocorrect`,`off`),e.setAttribute(`autocapitalize`,`off`),t&&e.setAttribute(`value`,Do(t)),e}}}get value(){return super.value}set value(e){super.value=Do(e)}connectedCallback(){super.connectedCallback(),k(Ao,this).call(this),this._control?.addEventListener(`input`,k(Ao,this))}disconnectedCallback(){super.disconnectedCallback(),this._control?.removeEventListener(`input`,k(Ao,this))}get _expandedHexValue(){return Oo(this.value)}_pickerHex(t){return this.alpha&&e.doesBrowserSupportAlphaColorInputs()?t:t.substring(0,6)}get _pickerValue(){return this._expandedHexValue?`#${this._pickerHex(this._expandedHexValue)}`:`#ffffff`}get _validPresets(){return this.presets.map(e=>Oo(e)).filter(e=>e!==null).map(e=>`#${this._pickerHex(e)}`)}_handlePickerInput(e){this.value=ko(e.target.value)}_handlePickerChange(e){this._handlePickerInput(e),this._control&&vt(this._control)}_pickerTemplate(){if(!e.doesBrowserSupportColorInputs())return i;let t=this._validPresets;return p`
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
    `}};jo._browserSupportsColorInputs=null,jo._browserSupportsAlphaColorInputs=null,r([c({converter:Eo})],jo.prototype,`presets`,void 0),r([c({type:Boolean,reflect:!0})],jo.prototype,`alpha`,void 0),customElements.get(`craft-input-color`)||customElements.define(`craft-input-color`,jo);var Mo=class extends pe{constructor(...e){super(...e),this.inlineSuffix=!0}_renderSuffix(){return p`<craft-copy-button
      slot="suffix"
      tooltip-label="${n(`Copy`)}"
    ></craft-copy-button>`}get slots(){return{...super.slots,suffix:()=>this._renderSuffix()}}connectedCallback(){super.connectedCallback(),this.readOnly=!0}_copyButton(){return this.querySelector(`craft-copy-button`)}_syncCopyButton(){let e=this._copyButton();e&&(e.value=this.copyValue??this.value)}updated(e){super.updated(e),this.readOnly=!0,this._syncCopyButton()}};r([c({type:String,attribute:`copy-value`})],Mo.prototype,`copyValue`,void 0),customElements.get(`craft-input-copy`)||customElements.define(`craft-input-copy`,Mo);var No=class extends pe{constructor(){super(),this.type=`date`}};customElements.get(`craft-input-date`)||customElements.define(`craft-input-date`,No);var Po={fromAttribute:e=>e!==`false`,toAttribute:e=>String(e)},Fo=e=>({fromAttribute:t=>t?JSON.parse(t):e(),toAttribute:e=>JSON.stringify(e)}),Io=new WeakSet,Lo=class extends pe{constructor(){super(),O(this,Io),this.minuteIncrement=30,this.disabledTimeRanges=[],this.forceRoundTime=!1,this.type=`time`}connectedCallback(){super.connectedCallback(),this.addEventListener(`change`,j(Io,this,Ro))}disconnectedCallback(){this.removeEventListener(`change`,j(Io,this,Ro)),super.disconnectedCallback()}willUpdate(e){super.willUpdate(e),e.has(`minuteIncrement`)&&(this.step=this.minuteIncrement*60)}updated(e){super.updated(e),j(Io,this,zo).call(this)}};function Ro(e){if(e.target===this||!(e.target instanceof HTMLInputElement))return;let t=e.target;this.forceRoundTime&&j(Io,this,Bo).call(this,t.value)!==t.value&&(this.value=j(Io,this,Bo).call(this,t.value),t.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0}))),j(Io,this,zo).call(this)}function zo(){let e=this._control;if(!e)return;let t=j(Io,this,Vo).call(this,e.value),n=t!==null&&this.disabledTimeRanges.some(([e,n])=>{let r=j(Io,this,Vo).call(this,e),i=j(Io,this,Vo).call(this,n);return r!==null&&i!==null&&t>=r&&t<i});e.setCustomValidity(n?`This time is unavailable.`:``)}function Bo(e){let t=j(Io,this,Vo).call(this,e);if(t===null)return e;let n=Math.max(1,this.minuteIncrement)*60,r=Math.min(86399,Math.round(t/n)*n),i=Math.floor(r/3600),a=Math.floor(r%3600/60);return`${String(i).padStart(2,`0`)}:${String(a).padStart(2,`0`)}`}function Vo(e){let t=/^(\d{1,2}):(\d{2})(?::(\d{2}))?$/.exec(e);return t?Number(t[1])*3600+Number(t[2])*60+Number(t[3]??0):null}r([c({type:Number,attribute:`minute-increment`})],Lo.prototype,`minuteIncrement`,void 0),r([c({attribute:`disabled-time-ranges`,converter:Fo(()=>[])})],Lo.prototype,`disabledTimeRanges`,void 0),r([c({type:Boolean,attribute:`force-round-time`})],Lo.prototype,`forceRoundTime`,void 0),customElements.get(`craft-input-time`)||customElements.define(`craft-input-time`,Lo);var Ho={date:()=>n(`Date`),time:()=>n(`Time`),timezone:()=>n(`Time Zone`)},L=new WeakSet,Uo=new WeakMap,Wo=new WeakMap,Go=new WeakMap,Ko=new WeakMap,qo=new WeakMap,R=class extends u{constructor(...e){super(...e),O(this,L),this.dateValue=``,this.timeValue=``,this.showDate=!0,this.showTime=!0,this.showTimezone=!1,this.minuteIncrement=30,this.disabledTimeRanges=[],this.forceRoundTime=!1,this.disabled=!1,this.readonly=!1,this.required=!1,this.clearable=!1,M(this,Uo,async()=>{this.showDate&&(this.dateValue=``),this.showTime&&(this.timeValue=``),this.showTimezone&&(this.timezone=``),await this.updateComplete,this.dispatchEvent(new Event(`change`,{bubbles:!0})),this.querySelector(`[data-date-time-part] input`)?.focus()}),M(this,Wo,void 0),M(this,Go,void 0),M(this,Ko,e=>{let t=e.type===`focusin`?e.target:e.relatedTarget;this.toggleAttribute(`input-focused`,t instanceof Element&&this.contains(t)&&t.closest(`[data-date-time-part]`)!==null)}),M(this,qo,e=>{let t=e.target instanceof Element?e.target.closest(`[data-date-time-part]`):null;if(!(t instanceof pe))return;let n=t.value;switch(t.dataset.dateTimePart){case`date`:this.dateValue=n;break;case`time`:this.timeValue=n;break;case`timezone`:this.timezone=n}})}render(){return p`<div class="inputs" part="inputs">
        <slot name="inputs"></slot>
      </div>
      <slot @slotchange=${()=>j(L,this,Xo).call(this)}></slot>
      ${this.clearable&&!this.disabled&&!this.readonly?p`<craft-button
            part="clear"
            class=${j(L,this,Jo).call(this)?``:`invisible`}
            type="button"
            icon="xmark-large"
            aria-label=${n(`Clear`)}
            variant="plain"
            size="small"
            @click=${k(Uo,this)}
          ></craft-button>`:null}`}connectedCallback(){super.connectedCallback(),this.addEventListener(`input`,k(qo,this)),this.addEventListener(`focusin`,k(Ko,this)),this.addEventListener(`focusout`,k(Ko,this)),k(Wo,this)??A(Wo,this,new ResizeObserver(()=>j(L,this,Xo).call(this))),k(Wo,this).observe(this)}disconnectedCallback(){this.removeEventListener(`input`,k(qo,this)),this.removeEventListener(`focusin`,k(Ko,this)),this.removeEventListener(`focusout`,k(Ko,this)),k(Wo,this)?.disconnect(),k(Go,this)!==void 0&&(cancelAnimationFrame(k(Go,this)),A(Go,this,void 0)),super.disconnectedCallback()}updated(e){super.updated(e),j(L,this,Zo).call(this),j(L,this,Qo).call(this),j(L,this,$o).call(this),j(L,this,is).call(this,`locale`,this.locale,!0),j(L,this,is).call(this,`timezone`,this.timezone,!this.showTimezone),this.toggleAttribute(`single`,[this.showDate,this.showTime,this.showTimezone].filter(Boolean).length===1),j(L,this,Xo).call(this)}};function Jo(){return!!(this.showDate&&this.dateValue||this.showTime&&this.timeValue||this.showTimezone&&this.timezone)}function Yo(){let e=this.shadowRoot?.querySelector(`.inputs`);if(!e)return;let t=this.getBoundingClientRect(),n=e.getBoundingClientRect(),r=getComputedStyle(this),i=r.direction===`rtl`?n.left-t.left-parseFloat(r.borderLeftWidth):t.right-parseFloat(r.borderRightWidth)-n.right;e.style.setProperty(`--_beside-size`,`${Math.max(0,i)}px`)}function Xo(){k(Go,this)===void 0&&A(Go,this,requestAnimationFrame(()=>{A(Go,this,void 0);let e=[...this.querySelectorAll(`:scope > [data-date-time-part]`)],t=e.map(e=>e.getBoundingClientRect().top);this.toggleAttribute(`stacked`,t.some(e=>e>(t[0]??e)+1)),e.forEach((e,n)=>{let r=t[n+1];e.toggleAttribute(`data-row-end`,r===void 0||r>t[n]+1)}),j(L,this,Yo).call(this)}))}function Zo(){let e=j(L,this,es).call(this,`craft-input-date`,`date`,this.showDate);e instanceof No&&(j(L,this,rs).call(this,e,`date`,this.dateValue,this.required),e.min=this.min,e.max=this.max,j(L,this,ts).call(this,e))}function Qo(){let e=j(L,this,es).call(this,`craft-input-time`,`time`,this.showTime);e instanceof Lo&&(j(L,this,rs).call(this,e,`time`,this.timeValue,this.required),e.min=this.minTime,e.max=this.maxTime,e.minuteIncrement=this.minuteIncrement,e.disabledTimeRanges=this.disabledTimeRanges,e.forceRoundTime=this.forceRoundTime,j(L,this,ts).call(this,e))}function $o(){let e=j(L,this,es).call(this,`craft-input`,`timezone`,this.showTimezone);e&&(j(L,this,rs).call(this,e,`timezone`,this.timezone??``,!1),j(L,this,ts).call(this,e))}function es(e,t,n){let r=[...this.children].find(t=>t.tagName.toLowerCase()===e&&t instanceof pe);if(!n)return r?.remove(),null;let i=r??document.createElement(e);return i.dataset.dateTimePart=t,i.slot=`inputs`,i}function ts(e){e.parentElement!==this&&this.insertBefore(e,j(L,this,ns).call(this))}function ns(){return[...this.children].find(e=>!(e instanceof HTMLElement)||e.dataset.dateTimePart===void 0&&e.dataset.dateTimeMetadata===void 0)??null}function rs(e,t,n,r){e.name=this.name?`${this.name}[${t}]`:``,e.disabled=this.disabled,e.readOnly=this.readonly,e.required=r,e.value!==n&&(e.value=n),this.describedBy?e.setAttribute(`aria-describedby`,this.describedBy):e.removeAttribute(`aria-describedby`),e.label=Ho[t]?.()??t,e.labelSrOnly=!0}function is(e,t,n){let r=this.name?`${this.name}[${e}]`:void 0,i=[...this.children].find(t=>t instanceof HTMLInputElement&&t.type===`hidden`&&t.dataset.dateTimeMetadata===e);if(!r||!n){i?.remove();return}let a=i??document.createElement(`input`);a.type=`hidden`,a.dataset.dateTimeMetadata=e,a.name=r,a.value=t??``,i||this.append(a)}R.styles=a`
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
  `,r([c()],R.prototype,`name`,void 0),r([c({attribute:`date-value`})],R.prototype,`dateValue`,void 0),r([c({attribute:`time-value`})],R.prototype,`timeValue`,void 0),r([c()],R.prototype,`locale`,void 0),r([c()],R.prototype,`timezone`,void 0),r([c({attribute:`show-date`,converter:Po})],R.prototype,`showDate`,void 0),r([c({attribute:`show-time`,converter:Po})],R.prototype,`showTime`,void 0),r([c({type:Boolean,attribute:`show-timezone`})],R.prototype,`showTimezone`,void 0),r([c()],R.prototype,`min`,void 0),r([c()],R.prototype,`max`,void 0),r([c({attribute:`min-time`})],R.prototype,`minTime`,void 0),r([c({attribute:`max-time`})],R.prototype,`maxTime`,void 0),r([c({type:Number,attribute:`minute-increment`})],R.prototype,`minuteIncrement`,void 0),r([c({attribute:`disabled-time-ranges`,converter:Fo(()=>[])})],R.prototype,`disabledTimeRanges`,void 0),r([c({type:Boolean,attribute:`force-round-time`})],R.prototype,`forceRoundTime`,void 0),r([c({reflect:!0})],R.prototype,`width`,void 0),r([c({type:Boolean})],R.prototype,`disabled`,void 0),r([c({type:Boolean})],R.prototype,`readonly`,void 0),r([c({type:Boolean})],R.prototype,`required`,void 0),r([c({type:Boolean})],R.prototype,`clearable`,void 0),r([c({attribute:`described-by`})],R.prototype,`describedBy`,void 0),customElements.get(`craft-input-date-time`)||customElements.define(`craft-input-date-time`,R);var as=class extends pe{constructor(...e){super(...e),this.autocorrect=!1,this.autocapitalize=`off`}static get styles(){return[...super.styles,a`
        .input-group__input {
          font-family: var(--c-font-mono);
          font-size: 0.9em;
        }
      `]}updated(e){super.updated(e),this._control?.setAttribute(`autocorrect`,this.autocorrect?`on`:`off`),this._control?.setAttribute(`autocapitalize`,this.autocapitalize)}};r([c({reflect:!0,converter:{fromAttribute:e=>e!==`off`,toAttribute:e=>e?`on`:`off`}})],as.prototype,`autocorrect`,void 0),r([c({reflect:!0,type:String})],as.prototype,`autocapitalize`,void 0),customElements.get(`craft-input-handle`)||customElements.define(`craft-input-handle`,as);var os=e(t(((e,t)=>{(function(n,r){if(typeof e==`object`&&typeof t==`object`)t.exports=r();else if(typeof define==`function`&&define.amd)define([],r);else{var i=r();for(var a in i)(typeof e==`object`?e:n)[a]=i[a]}})(Object(typeof self<`u`?self:e),function(){return(function(){var e=[,(function(){typeof Object.getPrototypeOf!=`function`&&(Object.getPrototypeOf=typeof`test`.__proto__==`object`?function(e){return e.__proto__}:function(e){return e.constructor.prototype})}),(function(){Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,t){if(this==null)throw TypeError(`"this" is null or not defined`);let n=Object(this),r=n.length>>>0;if(r===0)return!1;let i=t|0,a=Math.max(i>=0?i:r-Math.abs(i),0);for(;a<r;){if(n[a]===e)return!0;a++}return!1}})}),(function(){let e=Function.bind.call(Function.call,Array.prototype.reduce),t=Function.bind.call(Function.call,Object.prototype.propertyIsEnumerable),n=Function.bind.call(Function.call,Array.prototype.concat),r=Object.keys;Object.entries||(Object.entries=function(i){return e(r(i),(e,r)=>n(e,typeof r==`string`&&t(i,r)?[[r,i[r]]]:[]),[])})}),(function(){String.prototype.includes||(String.prototype.includes=function(e,t){return typeof t!=`number`&&(t=0),t+e.length>this.length?!1:this.indexOf(e,t)!==-1})}),(function(){if(FormData.Inputmask===void 0){class e extends FormData{constructor(e,t){super(e,t);let n=this.entries(),r;for(;(r=n.next()).done===!1;){let t=r.value[0],n=r.value[1],i=e[t];i&&i.inputmask!==void 0&&!(n instanceof File)&&this.set(t,i.value)}return this}}e.Inputmask=!0,FormData=e}}),(function(e,t,n){var r=o(n(7)),i=n(20),a=n(22);function o(e){return e&&e.__esModule?e:{default:e}}r.default.extendDefinitions({A:{validator:`[A-Za-zА-яЁёÀ-ÿµ]`,casing:`upper`},"&":{validator:`[0-9A-Za-zА-яЁёÀ-ÿµ]`,casing:`upper`},"#":{validator:`[0-9A-Fa-f]`,casing:`upper`}});let s=/25[0-5]|2[0-4][0-9]|[01][0-9][0-9]/;function c(e,t,n,r,i){if(n-1>-1&&t.buffer[n-1]!==`.`?(e=t.buffer[n-1]+e,e=n-2>-1&&t.buffer[n-2]!==`.`?t.buffer[n-2]+e:`0`+e):e=`00`+e,i.greedy&&parseInt(e)>255&&s.test(`00`+e.charAt(2))){let r=[...t.buffer.slice(0,n),`.`,e.charAt(2)];if(r.join(``).match(/\./g).length<4)return{refreshFromBuffer:!0,buffer:r,caret:n+2}}return s.test(e)}r.default.extendAliases({cssunit:{regex:`[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)`},url:{regex:`(https?|ftp)://.*`,autoUnmask:!1,keepStatic:!1,tabThrough:!0},ip:{mask:`i{1,3}.j{1,3}.k{1,3}.l{1,3}`,definitions:{i:{validator:c},j:{validator:c},k:{validator:c},l:{validator:c}},onUnMask:function(e,t,n){return e},inputmode:`decimal`,substitutes:{",":`.`}},email:{mask:function({separator:e,quantifier:t}){let n=`*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]`,r=n;if(e)for(let i=0;i<t;i++)r+=`[${e}${n}]`;return r},greedy:!1,casing:`lower`,separator:null,quantifier:5,skipOptionalPartCharacter:``,onBeforePaste:function(e,t){return e=e.toLowerCase(),e.replace(`mailto:`,``)},definitions:{"*":{validator:"[0-9１-９A-Za-zА-яЁёÀ-ÿµ!#$%&'*+/=?^_`{|}~-]"},"-":{validator:`[0-9A-Za-z-]`}},onUnMask:function(e,t,n){return e},inputmode:`email`},mac:{mask:`##:##:##:##:##:##`},vin:{mask:`V{13}9{4}`,definitions:{V:{validator:`[A-HJ-NPR-Za-hj-npr-z\\d]`,casing:`upper`}},clearIncomplete:!0,autoUnmask:!0},ssn:{mask:`999-99-9999`,postValidation:function(e,t,n,r,o,s,c){let l=a.getMaskTemplate.call(this,!0,i.getLastValidPosition.call(this),!0,!0);return/^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(l.join(``))}}})}),(function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=m(n(8)),i=m(n(9)),a=m(n(10)),o=n(15),s=m(n(11)),c=n(16),l=n(23),u=n(24),d=n(20),f=n(21),p=n(22);function m(e){return e&&e.__esModule?e:{default:e}}let h=s.default.document,g=`_inputmask_opts`;function _(e,t,n){if(!(this instanceof _))return new _(e,t,n);this.dependencyLib=a.default,this.el=void 0,this.events={},this.maskset=void 0,n!==!0&&(Object.prototype.toString.call(e)===`[object Object]`?t=e:(t||={},e&&(t.alias=e)),this.opts=a.default.extend(!0,{},this.defaults,t),this.noMasksCache=t&&t.definitions!==void 0,this.userOptions=t||{},v(this.opts.alias,t,this.opts)),this.refreshValue=!1,this.undoValue=void 0,this.$el=void 0,this.skipInputEvent=!1,this.validationEvent=!1,this.ignorable=!1,this.maxLength,this.mouseEnter=!1,this.clicked=0,this.originalPlaceholder=void 0,this.isComposing=!1,this.lastInputEvent=null,this.hasAlternator=!1}_.prototype={dataAttribute:`data-inputmask`,defaults:r.default,definitions:i.default,aliases:{},masksCache:{},i18n:{},get isRTL(){return this.opts.isRTL||this.opts.numericInput},mask:function(e){let t=this;return typeof e==`string`&&(e=h.getElementById(e)||h.querySelectorAll(e)),e=e.nodeName?[e]:Array.isArray(e)?e:[].slice.call(e),e.forEach(function(e,n){let r=a.default.extend(!0,{},t.opts);if(y(e,r,a.default.extend(!0,{},t.userOptions),t.dataAttribute)){let n=(0,u.generateMaskSet)(r,t.noMasksCache);n!==void 0&&(e.inputmask!==void 0&&(e.inputmask.opts.autoUnmask=!0,e.inputmask.remove()),e.inputmask=new _(void 0,void 0,!0),e.inputmask.opts=r,e.inputmask.noMasksCache=t.noMasksCache,e.inputmask.userOptions=a.default.extend(!0,{},t.userOptions),e.inputmask.el=e,e.inputmask.$el=(0,a.default)(e),e.inputmask.maskset=n,a.default.data(e,g,t.userOptions),l.mask.call(e.inputmask))}}),e&&e[0]&&e[0].inputmask||this},option:function(e,t){if(typeof e==`string`)return this.opts[e];if(typeof e==`object`)return a.default.extend(this.userOptions,e),this.el&&t!==!0&&this.mask(this.el),this},unmaskedvalue:function(e){if(this.maskset=this.maskset||(0,u.generateMaskSet)(this.opts,this.noMasksCache),this.el===void 0||e!==void 0){let t=(typeof this.opts.onBeforeMask==`function`&&this.opts.onBeforeMask.call(this,e,this.opts)||e).split(``);c.checkVal.call(this,void 0,!1,!1,t),typeof this.opts.onBeforeWrite==`function`&&this.opts.onBeforeWrite.call(this,void 0,d.getBuffer.call(this),0,this.opts)}return c.unmaskedvalue.call(this,this.el)},remove:function(){if(this.el){a.default.data(this.el,g,null);let e=this.opts.autoUnmask?(0,c.unmaskedvalue)(this.el):this._valueGet(this.opts.autoUnmask);e===d.getBufferTemplate.call(this).join(``)?this._valueSet(``):this._valueSet(e,this.opts.autoUnmask),o.EventRuler.off(this.el);let t;Object.getOwnPropertyDescriptor&&Object.getPrototypeOf?(t=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.el),`value`),t&&this.__valueGet&&Object.defineProperty(this.el,"value",{get:this.__valueGet,set:this.__valueSet,configurable:!0})):h.__lookupGetter__&&this.el.__lookupGetter__(`value`)&&this.__valueGet&&(this.el.__defineGetter__(`value`,this.__valueGet),this.el.__defineSetter__(`value`,this.__valueSet)),this.el.inputmask=void 0}return this.el},getemptymask:function(){return this.maskset=this.maskset||(0,u.generateMaskSet)(this.opts,this.noMasksCache),(this.isRTL?d.getBufferTemplate.call(this).reverse():d.getBufferTemplate.call(this)).join(``)},hasMaskedValue:function(){return!this.opts.autoUnmask},isComplete:function(){return this.maskset=this.maskset||(0,u.generateMaskSet)(this.opts,this.noMasksCache),f.isComplete.call(this,d.getBuffer.call(this))},getmetadata:function(){if(this.maskset=this.maskset||(0,u.generateMaskSet)(this.opts,this.noMasksCache),Array.isArray(this.maskset.metadata)){let e=p.getMaskTemplate.call(this,!0,0,!1).join(``);return this.maskset.metadata.forEach(function(t){return t.mask===e?(e=t,!1):!0}),e}return this.maskset.metadata},isValid:function(e){if(this.maskset=this.maskset||(0,u.generateMaskSet)(this.opts,this.noMasksCache),e){let t=(typeof this.opts.onBeforeMask==`function`&&this.opts.onBeforeMask.call(this,e,this.opts)||e).split(``);c.checkVal.call(this,void 0,!0,!1,t)}let t=c.clearOptionalTail.call(this,[]),n=f.isComplete.call(this,t),r=e===(this.isRTL?t.reverse().join(``):t.join(``));return n&&(e===void 0||r)},format:function(e,t){this.maskset=this.maskset||(0,u.generateMaskSet)(this.opts,this.noMasksCache);let n=(typeof this.opts.onBeforeMask==`function`&&this.opts.onBeforeMask.call(this,e,this.opts)||e).split(``);c.checkVal.call(this,void 0,!0,!1,n);let r=this.isRTL?d.getBuffer.call(this).slice().reverse().join(``):d.getBuffer.call(this).join(``);return t?{value:r,metadata:this.getmetadata()}:r},setValue:function(e){this.el&&(0,a.default)(this.el).trigger(`setvalue`,[e])},analyseMask:u.analyseMask};function v(e,t,n){let r=_.prototype.aliases[e];return r?(r.alias&&v(r.alias,void 0,n),a.default.extend(!0,n,r),a.default.extend(!0,n,t),!0):(n.mask===null&&(n.mask=e),!1)}function y(e,t,n,r){function i(t,i){let a=r===``?t:r+`-`+t;i=i===void 0?e.getAttribute(a):i,i!==null&&(typeof i==`string`&&(t.startsWith(`on`)?i=s.default[i]:i===`false`?i=!1:i===`true`?i=!0:t===`mask`&&(i=i.replace(/\\\\/g,`\\`))),n[t]=i)}if(t.importDataAttributes===!0){let a=e.getAttribute(r),o,s,c,l;if(a&&a!==``&&(a=a.replace(/'/g,`"`),s=JSON.parse(`{`+a+`}`)),s){for(l in c=void 0,s)if(l.toLowerCase()===`alias`){c=s[l];break}}for(o in i(`alias`,c),n.alias&&v(n.alias,n,t),t){if(s){for(l in c=void 0,s)if(l.toLowerCase()===o.toLowerCase()){c=s[l];break}}i(o,c)}}return a.default.extend(!0,t,n),(e.dir===`rtl`||t.rightAlign)&&(e.style.textAlign=`right`),(e.dir===`rtl`||t.numericInput)&&(e.dir=`ltr`,e.removeAttribute(`dir`),t.isRTL=!0),Object.keys(n).length}_.extendDefaults=function(e){a.default.extend(!0,_.prototype.defaults,e)},_.extendDefinitions=function(e){a.default.extend(!0,_.prototype.definitions,e)},_.extendAliases=function(e){a.default.extend(!0,_.prototype.aliases,e)},_.format=function(e,t,n){return _(t).format(e,n)},_.unmask=function(e,t){return _(t).unmaskedvalue(e)},_.isValid=function(e,t){return _(t).isValid(e)},_.remove=function(e){typeof e==`string`&&(e=h.getElementById(e)||h.querySelectorAll(e)),e=e.nodeName?[e]:e;for(let t=0;t<e.length;t++)e[t].inputmask&&e[t].inputmask.remove()},_.setValue=function(e,t){typeof e==`string`&&(e=h.getElementById(e)||h.querySelectorAll(e)),e=e.nodeName?[e]:e,e.forEach(function(e){e.inputmask?e.inputmask.setValue(t):(0,a.default)(e).trigger(`setvalue`,[t])})},_.dependencyLib=a.default,s.default.Inputmask=_,t.default=_}),(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default={_maxTestPos:500,placeholder:`_`,optionalmarker:[`[`,`]`],quantifiermarker:[`{`,`}`],groupmarker:[`(`,`)`],alternatormarker:`|`,escapeChar:`\\`,mask:null,regex:null,oncomplete:()=>{},onincomplete:()=>{},oncleared:()=>{},repeat:0,greedy:!1,autoUnmask:!1,removeMaskOnSubmit:!1,clearMaskOnLostFocus:!0,insertMode:!0,insertModeVisual:!0,clearIncomplete:!1,alias:null,onKeyDown:()=>{},onBeforeMask:null,onBeforePaste:function(e,t){return typeof t.onBeforeMask==`function`?t.onBeforeMask.call(this,e,t):e},onBeforeWrite:null,onUnMask:null,outputMask:null,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:()=>{},skipOptionalPartCharacter:` `,numericInput:!1,rightAlign:!1,undoOnEscape:!0,radixPoint:``,_radixDance:!1,groupSeparator:``,keepStatic:null,positionCaretOnTab:!0,tabThrough:!1,supportsInputType:[`text`,`tel`,`url`,`password`,`search`],isComplete:null,preValidation:null,postValidation:null,staticDefinitionSymbol:void 0,jitMasking:!1,nullable:!0,inputEventOnly:!1,noValuePatching:!1,positionCaretOnClick:`lvp`,casing:null,inputmode:`text`,importDataAttributes:!0,shiftPositions:!0,usePrototypeDefinitions:!0,validationEventTimeOut:3e3,substitutes:{}}}),(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default={9:{validator:`\\p{N}`,definitionSymbol:`*`},a:{validator:`\\p{L}`,definitionSymbol:`*`},"*":{validator:`[\\p{L}\\p{N}]`}}}),(function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(n(11)),i=s(n(12)),a=n(13),o=s(n(14));function s(e){return e&&e.__esModule?e:{default:e}}let c=r.default.document;function l(e){if(e instanceof l)return e;if(!(this instanceof l))return new l(e);e!=null&&e!==r.default&&(this[0]=e.nodeName?e:e[0]!==void 0&&e[0].nodeName?e[0]:c.querySelector(e),this[0]!==void 0&&this[0]!==null&&(0,i.default)(this[0],`events`,(0,i.default)(this[0],`events`)||{}))}l.prototype={on:a.on,off:a.off,trigger:a.trigger},l.extend=o.default,l.data=i.default,l.Event=a.Event,t.default=l}),(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=typeof window<`u`&&window.document&&window.document.createElement?window:{}}),(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;function n(e,t,n){if(n===void 0)return e.__data?e.__data[t]:null;e.__data=e.__data||{},e.__data[t]=n}}),(function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.Event=void 0,t.off=f,t.on=d,t.trigger=p;var r=s(n(11)),i=s(n(12)),a=s(n(14)),o=s(n(10));function s(e){return e&&e.__esModule?e:{default:e}}let c=r.default.document;function l(e){return e instanceof Element&&(0,i.default)(e,`events`)}let u=t.Event=void 0;typeof r.default.CustomEvent==`function`?t.Event=u=r.default.CustomEvent:r.default.Event&&c&&c.createEvent?(t.Event=u=function(e,t){t||={bubbles:!1,cancelable:!1,composed:!0,detail:void 0};let n=c.createEvent(`CustomEvent`);return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n},u.prototype=r.default.Event.prototype):typeof Event<`u`&&(t.Event=u=Event);function d(e,t){if(!this[0]||!l(this[0]))return this;let n=this[0],r=(0,i.default)(n,`events`),a=(e,i)=>{n.addEventListener?n.addEventListener(e,t,!1):n.attachEvent&&n.attachEvent(`on${e}`,t),r[e]=r[e]||{},r[e][i]=r[e][i]||[],r[e][i].push(t)};return e.split(` `).forEach(e=>{let[t,n=`global`]=e.split(`.`);a(t,n)}),this}function f(e,t){let n,r;function a(e,t,i){if(e in n)if(r.removeEventListener?r.removeEventListener(e,i,!1):r.detachEvent&&r.detachEvent(`on${e}`,i),t===`global`)for(let t in n[e])n[e][t].splice(n[e][t].indexOf(i),1);else n[e][t].splice(n[e][t].indexOf(i),1)}function o(e,r){let i=[],a,o;if(e.length>0){let s=r?[r]:Object.keys(n[e]);for(let c=0;c<s.length;c++)if(r=s[c],t===void 0)for(a=0,o=n[e][r]?.length||0;a<o;a++)i.push({ev:e,namespace:r,handler:n[e][r][a]});else i.push({ev:e,namespace:r,handler:t})}else if(r.length>0){for(let e in n)if(n[e][r])if(t===void 0)for(a=0,o=n[e][r].length;a<o;a++)i.push({ev:e,namespace:r,handler:n[e][r][a]});else i.push({ev:e,namespace:r,handler:t})}return i}return l(this[0])&&(n=(0,i.default)(this[0],`events`),r=this[0],e||=Object.keys(n).join(` `),e!==``&&e.split(` `).forEach(e=>{let[t,n]=e.split(`.`);o(t,n).forEach(({ev:e,handler:t,namespace:n})=>{a(e,n,t)})})),this}function p(e){if(l(this[0])){let t=(0,i.default)(this[0],`events`),n=this[0],r=typeof e==`string`?e.split(` `):[e.type];for(let i=0;i<r.length;i++){let s=r[i].split(`.`),l=s[0],u=s[1]||`global`;if(c!==void 0){let t,r={bubbles:!0,cancelable:!0,composed:!0,detail:arguments[1]};if(c.createEvent){try{switch(l){case`input`:r.inputType=`insertText`,t=new InputEvent(l,r);break;default:t=new CustomEvent(l,r)}}catch{t=c.createEvent(`CustomEvent`),t.initCustomEvent(l,r.bubbles,r.cancelable,r.detail)}e.type&&(0,a.default)(t,e),n.dispatchEvent(t)}else t=c.createEventObject(),t.eventType=l,t.detail=arguments[1],e.type&&(0,a.default)(t,e),n.fireEvent(`on`+t.eventType,t)}else if(t[l]!==void 0){arguments[0]=arguments[0].type?arguments[0]:o.default.Event(arguments[0]),arguments[0].detail=arguments.slice(1);let e=t[l];(u===`global`?Object.values(e).flat():e[u]).forEach(e=>e.apply(n,arguments))}}}return this}}),(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;function n(){let e,t,r,i,a,o,s=arguments[0]||{},c=1,l=arguments.length,u=!1;for(typeof s==`boolean`&&(u=s,s=arguments[c]||{},c++),typeof s!=`object`&&typeof s!=`function`&&(s={});c<l;c++)if((e=arguments[c])!=null)for(t in e)r=s[t],i=e[t],s!==i&&(u&&i&&(Object.prototype.toString.call(i)===`[object Object]`||(a=Array.isArray(i)))?(a?(a=!1,o=r&&Array.isArray(r)?r:[]):o=r&&Object.prototype.toString.call(r)===`[object Object]`?r:{},s[t]=n(u,o,i)):i!==void 0&&(s[t]=i));return s}}),(function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.EventRuler=void 0;var r=n(16),i=s(n(7)),a=n(19),o=n(20);function s(e){return e&&e.__esModule?e:{default:e}}t.EventRuler={on:function(e,t,n){let s=e.inputmask.dependencyLib,c=function(t){t.originalEvent&&(t=t.originalEvent||t,arguments[0]=t);let c=this,l=c.inputmask,u=l?l.opts:void 0,d;if(l===void 0&&this.nodeName!==`FORM`){let e=s.data(c,`_inputmask_opts`);s(c).off(),e&&new i.default(e).mask(c)}else if(![`submit`,`reset`,`setvalue`].includes(t.type)&&this.nodeName!==`FORM`&&(c.disabled||c.readOnly&&!(t.type===`keydown`&&t.ctrlKey&&t.key===a.keys.c||u.tabThrough===!1&&t.key===a.keys.Tab)))t.preventDefault();else{switch(t.type){case`input`:if(l.skipInputEvent===!0)return l.skipInputEvent=!1,t.preventDefault();l.lastInputEvent={time:Date.now(),data:t.data};break;case`keydown`:if(l.lastInputEvent&&Date.now()-l.lastInputEvent.time<10&&l.lastInputEvent.data===t.key)return!1;break;case`click`:case`focus`:if(l.validationEvent)return l.validationEvent=!1,e.blur(),(0,r.HandleNativePlaceholder)(e,(l.isRTL?o.getBufferTemplate.call(l).slice().reverse():o.getBufferTemplate.call(l)).join(``)),setTimeout(function(){e.focus()},u.validationEventTimeOut),!1;d=arguments,setTimeout(function(){e.inputmask&&n.apply(c,d)},0);return}let i=n.apply(c,arguments);return i===!1&&(t.preventDefault(),t.stopPropagation()),i}};t=`${t}.inputmask`,[`submit.inputmask`,`reset.inputmask`].includes(t)?(c=c.bind(e),e.form!==null&&s(e.form).on(t,c)):s(e).on(t,c)},off:function(e,t){if(e.inputmask){let n=e.inputmask.dependencyLib;n(e).off(t||`.inputmask`)}}}}),(function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.HandleNativePlaceholder=m,t.applyInputValue=d,t.checkVal=p,t.clearOptionalTail=f,t.unmaskedvalue=h,t.writeBuffer=g;var r=n(17),i=n(18),a=u(n(7)),o=n(19),s=n(20),c=n(21),l=n(22);function u(e){return e&&e.__esModule?e:{default:e}}function d(e,t,n,r){let i=e?e.inputmask:this,a=i.opts;e.inputmask.refreshValue=!1,r!==!0&&typeof a.onBeforeMask==`function`&&(t=a.onBeforeMask.call(i,t,a)||t),t=(t||``).toString().split(``),p(e,!0,!1,t,n),i.undoValue=i._valueGet(!0),(a.clearMaskOnLostFocus||a.clearIncomplete)&&e.inputmask._valueGet()===s.getBufferTemplate.call(i).join(``)&&s.getLastValidPosition.call(i)===-1&&e.inputmask._valueSet(``)}function f(e){let t=this;e.length=0;let n=l.getMaskTemplate.call(t,!0,0,!0,void 0,!0),r;for(;(r=n.shift())!==void 0;)e.push(r);return e}function p(e,t,n,r,a){let o=e?e.inputmask:this,u=o.maskset,d=o.opts,f=o.dependencyLib,p=r.slice(),m=``,h=-1,_,v=d.skipOptionalPartCharacter;d.skipOptionalPartCharacter=``;function y(e,t){let n=l.getMaskTemplate.call(o,!0,0).slice(e,s.seekNext.call(o,e,!1,!1)).join(``).replace(/'/g,``),r=n.indexOf(t);for(;r>0&&n[r-1]===` `;)r--;let i=r===0&&!s.isMask.call(o,e)&&(l.getTest.call(o,e).match.nativeDef===t.charAt(0)||l.getTest.call(o,e).match.static===!0&&l.getTest.call(o,e).match.nativeDef===`'`+t.charAt(0)||l.getTest.call(o,e).match.nativeDef===` `&&(l.getTest.call(o,e+1).match.nativeDef===t.charAt(0)||l.getTest.call(o,e+1).match.static===!0&&l.getTest.call(o,e+1).match.nativeDef===`'`+t.charAt(0)));if(!i&&r>0&&!s.isMask.call(o,e,!1,!0)){let t=s.seekNext.call(o,e);o.caretPos.begin<t&&(o.caretPos={begin:t})}return i}s.resetMaskSet.call(o,!1),o.clicked=0,h=d.radixPoint?s.determineNewCaretPosition.call(o,{begin:0,end:0},!1,d.__financeInput===!1?`radixFocus`:void 0).begin:0,u.p=h,o.caretPos={begin:h};let b=[],x=o.caretPos;if(p.forEach(function(e,t){if(e!==void 0){let r=new f.Event(`_checkval`);r.key=e,m+=e;let a=s.getLastValidPosition.call(o,void 0,!0);y(h,m)?_=l.getTest.call(o,t).match.static===!0&&i.EventHandlers.keypressEvent.call(o,r,!0,!1,n,a+1):(_=i.EventHandlers.keypressEvent.call(o,r,!0,!1,n,o.caretPos.begin),_&&(h=o.caretPos.begin+1,m=``)),_?(_.pos!==void 0&&u.validPositions[_.pos]&&u.validPositions[_.pos].match.static===!0&&u.validPositions[_.pos].alternation===void 0&&(b.push(_.pos),o.isRTL||(_.forwardPosition=_.pos+1)),g.call(o,void 0,s.getBuffer.call(o),_.forwardPosition,r,!1),o.caretPos={begin:_.forwardPosition,end:_.forwardPosition},x=o.caretPos):u.validPositions[t]===void 0&&p[t]===l.getPlaceholder.call(o,t)&&s.isMask.call(o,t,!0)?o.caretPos.begin++:o.caretPos=x}}),b.length>0){let e,t,r=s.seekNext.call(o,-1,void 0,!1);if(!c.isComplete.call(o,s.getBuffer.call(o))&&b.length<=r||c.isComplete.call(o,s.getBuffer.call(o))&&b.length>0&&b.length!==r&&b[0]===0){let a=r;for(;(e=b.shift())!==void 0;)if(e<a){let r=new f.Event(`_checkval`);if(t=u.validPositions[e],t.generatedInput=!0,r.key=t.input,_=i.EventHandlers.keypressEvent.call(o,r,!0,!1,n,a),_&&_.pos!==void 0&&_.pos!==e&&u.validPositions[_.pos]&&u.validPositions[_.pos].match.static===!0)b.push(_.pos);else if(!_)break;a++}}else for(;e=b.pop();)t=u.validPositions[e],t&&u.validPositions[e+1]===void 0&&delete u.validPositions[e]}t&&g.call(o,e,s.getBuffer.call(o),_?_.forwardPosition:o.caretPos.begin,a||new f.Event(`checkval`),a&&(a.type===`input`&&o.undoValue!==s.getBuffer.call(o).join(``)||a.type===`paste`)),d.skipOptionalPartCharacter=v}function m(e,t){let n=e?e.inputmask:this;if(r.ie){if(e.inputmask._valueGet()!==t&&(e.placeholder!==t||e.placeholder===``)){let r=s.getBuffer.call(n).slice(),i=e.inputmask._valueGet();if(i!==t){let t=s.getLastValidPosition.call(n);t===-1&&i===s.getBufferTemplate.call(n).join(``)?r=[]:t!==-1&&f.call(n,r),g(e,r)}}}else e.placeholder!==t&&(e.placeholder=t,e.placeholder===``&&e.removeAttribute(`placeholder`))}function h(e){let t=e?e.inputmask:this,n=t.opts,r=t.maskset;if(e){if(e.inputmask===void 0)return e.value;e.inputmask&&e.inputmask.refreshValue&&d(e,e.inputmask._valueGet(!0))}let i=[],o=r.validPositions;for(let e=0,t=o.length;e<t;e++)o[e]&&o[e].match&&(o[e].match.static!=1||n.keepStatic!==!0&&Array.isArray(r.metadata)&&o[e].generatedInput!==!0)&&i.push(o[e].input);let c=i.length===0?``:(t.isRTL?i.reverse():i).join(``);if(typeof n.onUnMask==`function`){let e=(t.isRTL?s.getBuffer.call(t).slice().reverse():s.getBuffer.call(t)).join(``);c=n.onUnMask.call(t,e,c,n)}return n.outputMask&&c.length>0?a.default.format(c,{...n,mask:n.outputMask,alias:null}):c}function g(e,t,n,r,i){let a=e?e.inputmask:this,l=a.opts,u=a.dependencyLib;if(r&&typeof l.onBeforeWrite==`function`){let e=l.onBeforeWrite.call(a,r,t,n,l);if(e){if(e.refreshFromBuffer){let n=e.refreshFromBuffer;c.refreshFromBuffer.call(a,n===!0?n:n.start,n.end,e.buffer||t),t=s.getBuffer.call(a,!0)}n!==void 0&&(n=e.caret===void 0?n:e.caret)}}if(e!==void 0&&(e.inputmask._valueSet(t.join(``)),n!==void 0&&(r===void 0||r.type!==`blur`)&&s.caret.call(a,e,n,void 0,void 0,r!==void 0&&r.type===`keydown`&&(r.key===o.keys.Delete||r.key===o.keys.Backspace)),e.inputmask.writeBufferHook===void 0||e.inputmask.writeBufferHook(n),i===!0)){let n=u(e),r=e.inputmask._valueGet();e.inputmask.skipInputEvent=!0,n.trigger(`input`),setTimeout(function(){r===s.getBufferTemplate.call(a).join(``)?n.trigger(`cleared`):c.isComplete.call(a,t)===!0&&n.trigger(`complete`)},0)}}}),(function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.mobile=t.iphone=t.ie=void 0;var r=i(n(11));function i(e){return e&&e.__esModule?e:{default:e}}let a=r.default.navigator&&r.default.navigator.userAgent||``;t.ie=a.indexOf(`MSIE `)>0||a.indexOf(`Trident/`)>0,t.mobile=!!(navigator.userAgentData?.mobile??((matchMedia(`(pointer:coarse)`).matches||navigator.maxTouchPoints)&&innerWidth<=1024||/Mobi|Android|iPhone/i.test(a))),t.iphone=/iphone/i.test(a)}),(function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.EventHandlers=void 0;var r=n(17),i=u(n(11)),a=n(16),o=n(19),s=n(20),c=n(21),l=n(22);function u(e){return e&&e.__esModule?e:{default:e}}let d=t.EventHandlers={keyEvent:function(e,t,n,i,u){let f=this.inputmask,p=f.opts,m=f.dependencyLib,h=f.maskset,g=this,_=m(g),v=e.key,y=s.caret.call(f,g),b=p.onKeyDown.call(this,e,s.getBuffer.call(f),y,p);if(b!==void 0)return b;if(v===o.keys.Backspace||v===o.keys.Delete||r.iphone&&v===o.keys.BACKSPACE_SAFARI||e.ctrlKey&&v===o.keys.x&&!(`oncut`in g))e.preventDefault(),c.handleRemove.call(f,g,v,y),(0,a.writeBuffer)(g,s.getBuffer.call(f,!0),h.p,e,g.inputmask._valueGet()!==s.getBuffer.call(f).join(``));else if(v===o.keys.End||v===o.keys.PageDown){e.preventDefault();let t=s.seekNext.call(f,s.getLastValidPosition.call(f));s.caret.call(f,g,e.shiftKey?y.begin:t,t,!0)}else v===o.keys.Home&&!e.shiftKey||v===o.keys.PageUp?(e.preventDefault(),s.caret.call(f,g,0,e.shiftKey?y.begin:0,!0)):p.undoOnEscape&&v===o.keys.Escape&&e.altKey!==!0?((0,a.checkVal)(g,!0,!1,f.undoValue.split(``)),_.trigger(`click`)):v===o.keys.Insert&&!(e.shiftKey||e.ctrlKey)&&f.userOptions.insertMode===void 0?c.isSelection.call(f,y)?p.insertMode=!p.insertMode:(p.insertMode=!p.insertMode,s.caret.call(f,g,y.begin,y.begin)):p.tabThrough===!0&&v===o.keys.Tab?e.shiftKey===!0?(y.end=s.seekPrevious.call(f,y.end,!0),l.getTest.call(f,y.end-1).match.static===!0&&y.end--,y.begin=s.seekPrevious.call(f,y.end,!0),y.begin>=0&&y.end>0&&(e.preventDefault(),s.caret.call(f,g,y.begin,y.end))):(y.begin=s.seekNext.call(f,y.begin,!0),y.end=s.seekNext.call(f,y.begin,!0),y.end<h.maskLength&&y.end--,y.begin<=h.maskLength&&(e.preventDefault(),s.caret.call(f,g,y.begin,y.end))):e.shiftKey||(p.insertModeVisual&&p.insertMode===!1?v===o.keys.ArrowRight?setTimeout(function(){let e=s.caret.call(f,g);s.caret.call(f,g,e.begin)},0):v===o.keys.ArrowLeft&&setTimeout(function(){let e={begin:s.translatePosition.call(f,g.inputmask.caretPos.begin),end:s.translatePosition.call(f,g.inputmask.caretPos.end)};f.isRTL?s.caret.call(f,g,e.begin+(e.begin===h.maskLength?0:1)):s.caret.call(f,g,e.begin-(e.begin===0?0:1))},0):f.keyEventHook===void 0||f.keyEventHook(e));return f.isComposing=v===o.keys.Process||v===o.keys.Unidentified,f.ignorable=v===void 0||v.length>1,d.keypressEvent.call(f,e,t,n,i,u)},keypressEvent:function(e,t,n,r,i){let l=this.inputmask||this,u=l.opts,d=l.dependencyLib,f=l.maskset,p=l.el,m=d(p),h=e.key;if(t!==!0&&!(e.ctrlKey&&e.altKey&&!l.ignorable)&&(e.ctrlKey||e.metaKey||l.ignorable))h===o.keys.Enter&&l.undoValue!==l._valueGet(!0)&&(l.undoValue=l._valueGet(!0),setTimeout(function(){m.trigger(`change`)},0));else if(h){let o=t?{begin:i,end:i}:s.caret.call(l,p),d;t||(h=u.substitutes[h]||h),f.writeOutBuffer=!0;let m=c.isValid.call(l,o,h,r,void 0,void 0,void 0,t);if(m!==!1&&(s.resetMaskSet.call(l,!0),d=m.caret===void 0?s.seekNext.call(l,m.pos.begin?m.pos.begin:m.pos):m.caret,f.p=d),d=u.numericInput&&m.caret===void 0?s.seekPrevious.call(l,d):d,n!==!1&&(setTimeout(function(){u.onKeyValidation.call(p,h,m)},0),f.writeOutBuffer&&m!==!1)){let n=s.getBuffer.call(l);(0,a.writeBuffer)(p,n,d,e,t!==!0)}if(e.preventDefault(),t)return m!==!1&&(m.forwardPosition=d),m}},pasteEvent:async function(e){function t(t,n,r,i,c){let l=s.caret.call(t,n,void 0,void 0,!0),u=r.substr(0,l.begin),d=r.substr(l.end,r.length);if(u==(t.isRTL?s.getBufferTemplate.call(t).slice().reverse():s.getBufferTemplate.call(t)).slice(0,l.begin).join(``)&&(u=``),d==(t.isRTL?s.getBufferTemplate.call(t).slice().reverse():s.getBufferTemplate.call(t)).slice(l.end).join(``)&&(d=``),i=u+i+d,t.isRTL&&o.numericInput!==!0){i=i.split(``);for(let e of s.getBufferTemplate.call(t))i[0]===e&&i.shift();i=i.reverse().join(``)}let f=i;if(typeof c==`function`){if(f=c.call(t,f,o),f===!1)return!1;f||=r}(0,a.checkVal)(n,!0,!1,f.toString().split(``),e)}let n=this,r=this.inputmask,o=r.opts,c=r._valueGet(!0),l;r.skipInputEvent=!0,e.clipboardData&&e.clipboardData.getData?l=e.clipboardData.getData(`text/plain`):i.default.clipboardData&&i.default.clipboardData.getData&&(l=i.default.clipboardData.getData(`Text`)),t(r,n,c,l,o.onBeforePaste),e.preventDefault()},inputFallBackEvent:function(e){let t=this.inputmask,n=t.opts,i=t.dependencyLib;function c(e,r,i){let a=e.substr(0,i.begin).split(``),o=e.substr(i.begin).split(``),c=r.substr(0,i.begin).split(``),u=r.substr(i.begin).split(``),d=a.length>=c.length?a.length:c.length,f=o.length>=u.length?o.length:u.length,p,m,h=``,g=[],_;for(;a.length<d;)a.push(`~`);for(;c.length<d;)c.push(`~`);for(;o.length<f;)o.unshift(`~`);for(;u.length<f;)u.unshift(`~`);let v=a.concat(o),y=c.concat(u);for(m=0,p=v.length;m<p;m++)switch(_=l.getPlaceholder.call(t,s.translatePosition.call(t,m)),h){case`insertText`:y[m-1]===v[m]&&i.begin==v.length-1&&g.push(v[m]),m=p;break;case`insertReplacementText`:v[m]===`~`?i.end++:m=p;break;case`deleteContentBackward`:v[m]===`~`?i.end++:m=p;break;default:v[m]!==y[m]&&((v[m+1]===`~`||v[m+1]===_||v[m+1]===void 0)&&(y[m]===_&&y[m+1]===`~`||y[m]===`~`)||y[m+1]===`~`&&y[m]===v[m+1]?(h=`insertText`,g.push(v[m]),i.begin--,i.end--):v[m]!==_&&v[m]!==`~`&&(v[m+1]===`~`||y[m]!==v[m]&&y[m+1]===v[m+1])?(h=`insertReplacementText`,g.push(v[m]),i.begin--):v[m]===`~`?(h=`deleteContentBackward`,(s.isMask.call(t,s.translatePosition.call(t,m),!0)||y[m]===n.radixPoint)&&i.end++):m=p);break}return{action:h,data:g,caret:i}}let u=this,f=u.inputmask._valueGet(!0),p=(t.isRTL?s.getBuffer.call(t).slice().reverse():s.getBuffer.call(t)).join(``),m=s.caret.call(t,u,void 0,void 0,!0),h;if(p!==f){if(h=c(f,p,m),u.getRootNode().activeElement!==u&&u.focus(),(0,a.writeBuffer)(u,s.getBuffer.call(t)),s.caret.call(t,u,m.begin,m.end,!0),!r.mobile&&t.skipNextInsert&&e.inputType===`insertText`&&h.action===`insertText`&&t.isComposing)return!1;switch(e.inputType===`insertCompositionText`&&h.action===`insertText`&&t.isComposing?t.skipNextInsert=!0:t.skipNextInsert=!1,h.action){case`insertText`:case`insertReplacementText`:h.data.forEach(function(e,n){let r=new i.Event(`keypress`);r.key=e,t.ignorable=!1,d.keypressEvent.call(u,r)}),setTimeout(function(){t.$el.trigger(`keyup`)},0);break;case`deleteContentBackward`:var g=new i.Event(`keydown`);g.key=o.keys.Backspace,d.keyEvent.call(u,g);break;default:(0,a.applyInputValue)(u,f,e),s.caret.call(t,u,m.begin,m.end,!0);break}e.preventDefault()}},setValueEvent:function(e){let t=this.inputmask,n=t.dependencyLib,r=this,i=e&&e.detail?e.detail[0]:arguments[1];i===void 0&&(i=r.inputmask._valueGet(!0)),(0,a.applyInputValue)(r,i,new n.Event(`input`),(e&&e.detail?e.detail[0]:arguments[1])!==void 0),(e.detail&&e.detail[1]!==void 0||arguments[2]!==void 0)&&s.caret.call(t,r,e.detail?e.detail[1]:arguments[2])},focusEvent:function(e){let t=this.inputmask,n=t.opts,r=this,i=t&&t._valueGet();n.showMaskOnFocus&&i!==s.getBuffer.call(t).join(``)&&(0,a.writeBuffer)(r,s.getBuffer.call(t),s.seekNext.call(t,s.getLastValidPosition.call(t))),n.positionCaretOnTab===!0&&t.mouseEnter===!1&&(!c.isComplete.call(t,s.getBuffer.call(t))||s.getLastValidPosition.call(t)===-1)&&d.clickEvent.apply(r,[e,!0]),t.undoValue=t&&t._valueGet(!0)},invalidEvent:function(e){this.inputmask.validationEvent=!0},mouseleaveEvent:function(){let e=this.inputmask,t=e.opts,n=this;e.mouseEnter=!1,t.clearMaskOnLostFocus&&n.getRootNode().activeElement!==n&&(0,a.HandleNativePlaceholder)(n,e.originalPlaceholder)},clickEvent:function(e,t){let n=this.inputmask;n.clicked++;let r=this;if(r.getRootNode().activeElement===r){let e=s.determineNewCaretPosition.call(n,s.caret.call(n,r),t);e!==void 0&&s.caret.call(n,r,e)}},cutEvent:function(e){let t=this.inputmask,n=t.maskset,r=this,l=s.caret.call(t,r),u=t.isRTL?s.getBuffer.call(t).slice(l.end,l.begin):s.getBuffer.call(t).slice(l.begin,l.end),d=t.isRTL?u.reverse().join(``):u.join(``);i.default.navigator&&i.default.navigator.clipboard?i.default.navigator.clipboard.writeText(d):i.default.clipboardData&&i.default.clipboardData.getData&&i.default.clipboardData.setData(`Text`,d),c.handleRemove.call(t,r,o.keys.Delete,l),(0,a.writeBuffer)(r,s.getBuffer.call(t),n.p,e,t.undoValue!==t._valueGet(!0))},blurEvent:function(e){let t=this.inputmask,n=t.opts,r=t.dependencyLib;t.clicked=0;let i=r(this),o=this;if(o.inputmask){(0,a.HandleNativePlaceholder)(o,t.originalPlaceholder);let r=o.inputmask._valueGet(),l=s.getBuffer.call(t).slice();if(r!==``&&(n.clearMaskOnLostFocus&&(s.getLastValidPosition.call(t)===-1&&r===s.getBufferTemplate.call(t).join(``)?l=[]:a.clearOptionalTail.call(t,l)),c.isComplete.call(t,l)===!1&&(setTimeout(function(){i.trigger(`incomplete`)},0),n.clearIncomplete&&(s.resetMaskSet.call(t,!1),l=n.clearMaskOnLostFocus?[]:s.getBufferTemplate.call(t).slice())),(0,a.writeBuffer)(o,l,void 0,e)),r=t._valueGet(!0),t.undoValue!==r){let e=(t.isRTL?s.getBufferTemplate.call(t).slice().reverse():s.getBufferTemplate.call(t)).join(``);(r!==``||t.undoValue!==e||t.undoValue===e&&t.maskset.validPositions.length>0)&&(t.undoValue=r,i.trigger(`change`))}}},mouseenterEvent:function(){let e=this.inputmask,{showMaskOnHover:t}=e.opts,n=this;if(e.mouseEnter=!0,n.getRootNode().activeElement!==n){let r=(e.isRTL?s.getBufferTemplate.call(e).slice().reverse():s.getBufferTemplate.call(e)).join(``);t&&(0,a.HandleNativePlaceholder)(n,r)}},submitEvent:function(){let e=this.inputmask,t=e.opts;e.undoValue!==e._valueGet(!0)&&e.$el.trigger(`change`),s.getLastValidPosition.call(e)===-1&&e._valueGet&&e._valueGet()===s.getBufferTemplate.call(e).join(``)&&e._valueSet(``),t.clearIncomplete&&c.isComplete.call(e,s.getBuffer.call(e))===!1&&e._valueSet(``),t.removeMaskOnSubmit&&(e._valueSet(e.unmaskedvalue(),!0),setTimeout(function(){(0,a.writeBuffer)(e.el,s.getBuffer.call(e))},0))},resetEvent:function(){let e=this.inputmask;e.refreshValue=!0,setTimeout(function(){(0,a.applyInputValue)(e.el,e._valueGet(!0))},0)}}}),(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.keys=t.keyCode=void 0,t.toKey=i,t.toKeyCode=a;let n=t.keyCode={c:67,x:88,z:90,BACKSPACE_SAFARI:127,Enter:13,Meta_LEFT:91,Meta_RIGHT:92,Space:32,Alt:18,AltGraph:18,ArrowDown:40,ArrowLeft:37,ArrowRight:39,ArrowUp:38,Backspace:8,CapsLock:20,Control:17,ContextMenu:93,Dead:221,Delete:46,End:35,Escape:27,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,Home:36,Insert:45,NumLock:144,PageDown:34,PageUp:33,Pause:19,PrintScreen:44,Process:229,Shift:16,ScrollLock:145,Tab:9,Unidentified:229},r=Object.entries(n).reduce((e,[t,n])=>(e[n]=e[n]===void 0?t:e[n],e),{});t.keys=Object.entries(n).reduce((e,[t,n])=>(e[t]=t===`Space`?` `:t,e),{});function i(e,t){return r[e]||(t?String.fromCharCode(e):String.fromCharCode(e).toLowerCase())}function a(e){return n[e]}}),(function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.caret=s,t.determineLastRequiredPosition=c,t.determineNewCaretPosition=l,t.getBuffer=u,t.getBufferTemplate=d,t.getLastValidPosition=f,t.isMask=p,t.resetMaskSet=m,t.seekNext=h,t.seekPrevious=g,t.translatePosition=_;var r=o(n(11)),i=n(21),a=n(22);function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t,n,i,a){let o=this,s=this.opts,c;if(t!==void 0){if(Array.isArray(t)&&(n=o.isRTL?t[0]:t[1],t=o.isRTL?t[1]:t[0]),t.begin!==void 0&&(n=o.isRTL?t.begin:t.end,t=o.isRTL?t.end:t.begin),typeof t==`number`){t=i?t:_.call(o,t),n=i?n:_.call(o,n),n=typeof n==`number`?n:t;let l=parseInt(((e.ownerDocument.defaultView||r.default).getComputedStyle?(e.ownerDocument.defaultView||r.default).getComputedStyle(e,null):e.currentStyle).fontSize)*n;if(e.scrollLeft=l>e.scrollWidth?l:0,e.inputmask.caretPos={begin:t,end:n},s.insertModeVisual&&s.insertMode===!1&&t===n&&(a||n++),e===e.getRootNode().activeElement){if(`setSelectionRange`in e)e.setSelectionRange(t,n);else if(r.default.getSelection){if(c=document.createRange(),e.firstChild===void 0||e.firstChild===null){let t=document.createTextNode(``);e.appendChild(t)}c.setStart(e.firstChild,t<e.inputmask._valueGet().length?t:e.inputmask._valueGet().length),c.setEnd(e.firstChild,n<e.inputmask._valueGet().length?n:e.inputmask._valueGet().length),c.collapse(!0);let i=r.default.getSelection();i.removeAllRanges(),i.addRange(c)}else e.createTextRange&&(c=e.createTextRange(),c.collapse(!0),c.moveEnd(`character`,n),c.moveStart(`character`,t),c.select());e.inputmask.caretHook===void 0||e.inputmask.caretHook.call(o,{begin:t,end:n})}}}else return`selectionStart`in e&&`selectionEnd`in e?(t=e.selectionStart,n=e.selectionEnd):r.default.getSelection?(c=r.default.getSelection().getRangeAt(0),(c.commonAncestorContainer.parentNode===e||c.commonAncestorContainer===e)&&(t=c.startOffset,n=c.endOffset)):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),t=0-c.duplicate().moveStart(`character`,-e.inputmask._valueGet().length),n=t+c.text.length),{begin:i?t:_.call(o,t),end:i?n:_.call(o,n)}}function c(e){let t=this,{maskset:n,dependencyLib:r}=t,o=f.call(t),s={},c=n.validPositions[o],l=a.getMaskTemplate.call(t,!0,f.call(t),!0,!0),u=l.length,d,p=c===void 0?void 0:c.locator.slice(),m;for(d=o+1;d<l.length;d++)m=a.getTestTemplate.call(t,d,p,d-1),p=m.locator.slice(),s[d]=r.extend(!0,{},m);let h=c&&c.alternation!==void 0?c.locator[c.alternation]:void 0;for(d=u-1;d>o&&(m=s[d],(m.match.optionality||m.match.optionalQuantifier&&m.match.newBlockMarker||h&&(h!==s[d].locator[c.alternation]&&m.match.static!==!0||m.match.static===!0&&m.locator[c.alternation]&&i.checkAlternationMatch.call(t,m.locator[c.alternation].toString().split(`,`),h.toString().split(`,`))&&a.getTests.call(t,d)[0].def!==``))&&l[d]===a.getPlaceholder.call(t,d,m.match));d--)if(u--,m.match.optionality){let e=d;for(;e>0;){let n=a.getTest.call(t,e);if(n.match.newBlockMarker===`master`||n.match.newBlockMarker===!0)break;e--}if(n.validPositions[e]!==void 0)break}return d===o&&(u=d),e?{l:u,def:s[u]?s[u].match:void 0}:u}function l(e,t,n){let r=this,{maskset:i,opts:o}=r,s,c,l;function d(e){if(o.radixPoint!==``&&o.digits!==0){let t=i.validPositions;if(t[e]===void 0||t[e].input===void 0){if(e<h.call(r,-1))return!0;let n=u.call(r).indexOf(o.radixPoint);if(n!==-1){for(let e in t){let i=Number(e);if(n<i&&t[e].input!==a.getPlaceholder.call(r,i))return!1}return!0}}}return!1}if(t&&(r.isRTL?e.end=e.begin:e.begin=e.end),e.begin===e.end){switch(n||=o.positionCaretOnClick,n){case`none`:break;case`select`:e={begin:0,end:u.call(r).length};break;case`ignore`:e.end=e.begin=h.call(r,f.call(r));break;case`radixFocus`:if(r.clicked>1&&i.validPositions.length===0)break;if(d(e.begin)){let t=u.call(r).join(``).indexOf(o.radixPoint);e.end=e.begin=o.numericInput?h.call(r,t):t;break}default:if(s=e.begin,c=f.call(r,s,!0),l=h.call(r,c===-1&&!p.call(r,0)?-1:c),s<=l)e.end=e.begin=p.call(r,s,!1,!0)?s:h.call(r,s);else{let t=i.validPositions[c],n=a.getTestTemplate.call(r,l,t?t.match.locator:void 0,t),d=a.getPlaceholder.call(r,l,n.match);if(d!==``&&u.call(r)[l]!==d&&n.match.optionalQuantifier!==!0&&n.match.newBlockMarker!==!0||!p.call(r,l,o.keepStatic,!0)&&n.match.def===d){let e=h.call(r,l);(s>=e||s===l)&&(l=e)}e.end=e.begin=l}}return e}}function u(e){let t=this,{maskset:n}=t;return(n.buffer===void 0||e===!0)&&(n.buffer=a.getMaskTemplate.call(t,!0,f.call(t),!0),n._buffer===void 0&&(n._buffer=n.buffer.slice())),n.buffer}function d(){let e=this,t=this.maskset;return t._buffer===void 0&&(t._buffer=a.getMaskTemplate.call(e,!1,1),t.buffer===void 0&&(t.buffer=t._buffer.slice())),t._buffer}function f(e,t,n){let r=this.maskset,i=-1,a=-1,o=n||r.validPositions;e===void 0&&(e=-1);for(let n=0,r=o.length;n<r;n++)o[n]&&(t||o[n].generatedInput!==!0)&&(n<=e&&(i=n),n>=e&&(a=n));return i===-1||i===e?a:a===-1||e-i<a-e?i:a}function p(e,t,n){let r=this,i=this.maskset,o=a.getTestTemplate.call(r,e).match;if(o.def===``&&(o=a.getTest.call(r,e).match),o.static!==!0)return o.fn;if(n===!0&&i.validPositions[e]!==void 0&&i.validPositions[e].generatedInput!==!0)return!0;if(t!==!0&&e>-1){if(n){let t=a.getTests.call(r,e);return t.length>1+ +(t[t.length-1].match.def===``)}let t=a.determineTestTemplate.call(r,e,a.getTests.call(r,e)),i=a.getPlaceholder.call(r,e,t.match);return t.match.def!==i}return!1}function m(e){let t=this.maskset;t.buffer=void 0,e!==!0&&(t.validPositions=[],t.p=0),e===!1&&(t.tests={},t.jitOffset={})}function h(e,t,n){let r=this;n===void 0&&(n=!0);let i=e+1;for(;a.getTest.call(r,i).match.def!==``&&(t===!0&&(a.getTest.call(r,i).match.newBlockMarker!==!0||!p.call(r,i,void 0,!0))||t!==!0&&!p.call(r,i,void 0,n));)i++;return i}function g(e,t){let n=this,r=e-1;if(e<=0)return 0;for(;r>0&&(t===!0&&(a.getTest.call(n,r).match.newBlockMarker!==!0||!p.call(n,r,void 0,!0))||t!==!0&&!p.call(n,r,void 0,!0));)r--;return r}function _(e){let t=this,n=this.opts,r=this.el;return t.isRTL&&typeof e==`number`&&(!n.greedy||n.placeholder!==``)&&r&&(e=t._valueGet().length-e,e<0&&(e=0)),e}}),(function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.alternate=s,t.casing=c,t.checkAlternationMatch=l,t.handleRemove=u,t.isComplete=d,t.isSelection=f,t.isValid=p,t.refreshFromBuffer=h,t.revalidateMask=_;var r=n(18),i=n(19),a=n(20),o=n(22);function s(e,t,n,r,i,c){let l=this,u=this.dependencyLib,d=this.opts,f=l.maskset;if(!l.hasAlternator)return!1;let m=u.extend(!0,[],f.validPositions),h=u.extend(!0,{},f.tests),g,_,v=!1,y=!1,b,x,S,C,w,T=i===void 0?a.getLastValidPosition.call(l):i,E,ee,te,D;if(c&&(te=c.begin,D=c.end,c.begin>c.end&&(te=c.end,D=c.begin)),T===-1&&i===void 0)g=0,x=o.getTest.call(l,g),_=x.alternation;else for(;T>=0;T--)if(b=T===0?o.getTest.call(l,0):f.validPositions[T],b&&b.alternation!==void 0){if(T<=(e||0)&&x&&x.locator[b.alternation]!==b.locator[b.alternation])break;g=T,_=b.alternation,x=b}if(_!==void 0){w=parseInt(g),f.excludes[w]=f.excludes[w]||[],e!==!0&&f.excludes[w].push((0,o.getDecisionTaker)(x)+`:`+x.alternation);let i=[],_=-1;for(S=w;w<a.getLastValidPosition.call(l,void 0,!0)+1;S++)_===-1&&e<=S&&t!==void 0&&(i.push(t),_=i.length-1),C=f.validPositions[w],C&&C.generatedInput!==!0&&(w!==0||C.input!==d.skipOptionalPartCharacter)&&(c===void 0||S<te||S>=D)&&i.push(C.input),f.validPositions.splice(w,1);for(_===-1&&t!==void 0&&(i.push(t),_=i.length-1);f.excludes[w]!==void 0&&f.excludes[w].length<10;){f.tests={},a.resetMaskSet.call(l,!0),v=!0,E=w-1;let g=o.getMaskTemplate.call(l,!0,0);for(S=0;S<i.length&&(ee=i[S],g[E+1]===ee&&d.numericInput!==!0?E++:E=S===0||y.caretPos!==void 0||d.insertMode===!1?a.seekNext.call(l,E):a.getLastValidPosition.call(l,E,!0)+1,v=p.call(l,E,ee,!1,r,!0));S++)S===_&&(y=v),e===!0&&v&&(y={caretPos:S});if(v)break;if(a.resetMaskSet.call(l),x=o.getTest.call(l,w),f.validPositions=u.extend(!0,[],m),f.tests=u.extend(!0,{},h),y=!1,f.excludes[w])if(x.alternation!=null){let i=(0,o.getDecisionTaker)(x);if(f.excludes[w].indexOf(i+`:`+x.alternation)!==-1){y=s.call(l,e,t,n,r,w-1,c);break}for(f.excludes[w].push(i+`:`+x.alternation),S=w;S<a.getLastValidPosition.call(l,void 0,!0)+1;S++)f.validPositions.splice(w)}else delete f.excludes[w];else{y=s.call(l,e,t,n,r,w-1,c);break}}}return(!y||d.keepStatic!==!1)&&delete f.excludes[w],y||(f.validPositions=u.extend(!0,[],m),f.tests=u.extend(!0,{},h)),y}function c(e,t,n){let r=this.opts,a=this.maskset;switch(r.casing||t.casing){case`upper`:e=e.toLocaleUpperCase();break;case`lower`:e=e.toLocaleLowerCase();break;case`title`:var o=a.validPositions[n-1];e=n===0||o&&o.input===String.fromCharCode(i.keyCode.Space)?e.toLocaleUpperCase():e.toLocaleLowerCase();break;case`follow`:t.def&&t.def!==t.def.toLocaleLowerCase()?e=e.toLocaleUpperCase():t.def&&t.def!==t.def.toLocaleUpperCase()&&(e=e.toLocaleLowerCase());break;default:if(typeof r.casing==`function`){let t=Array.prototype.slice.call(arguments);t.push(a.validPositions),e=r.casing.apply(this,t)}}return e}function l(e,t,n){let r=this.opts.greedy?t:t.slice(0,1),i=!1,a=n===void 0?[]:n.split(`,`),o;for(let t=0;t<a.length;t++)(o=e.indexOf(a[t]))!==-1&&e.splice(o,1);for(let t=0;t<e.length;t++)if(r.includes(e[t])){i=!0;break}return i}function u(e,t,n,r,c){let l=this,u=this.maskset,d=this.opts;if((d.numericInput||l.isRTL)&&(t===i.keys.Backspace?t=i.keys.Delete:t===i.keys.Delete&&(t=i.keys.Backspace),l.isRTL)){let e=n.end;n.end=n.begin,n.begin=e}let f=a.getLastValidPosition.call(l,void 0,!0);n.end>=a.getBuffer.call(l).length&&f>=n.end&&(n.end=f+1),t===i.keys.Backspace?n.end-n.begin<1&&(n.begin=a.seekPrevious.call(l,n.begin)):t===i.keys.Delete&&n.begin===n.end&&(n.end=a.isMask.call(l,n.end,!0,!0)?n.end+1:a.seekNext.call(l,n.end)+1);let p;(p=_.call(l,n))!==!1&&((r!==!0&&d.keepStatic!==!1||d.regex!==null&&o.getTest.call(l,n.begin).match.def.indexOf(`|`)!==-1)&&s.call(l,!0),r!==!0&&(u.p=t===i.keys.Delete?n.begin+p:n.begin,u.p=a.determineNewCaretPosition.call(l,{begin:u.p,end:u.p},!1,d.insertMode===!1&&t===i.keys.Backspace?`none`:void 0).begin))}function d(e){let t=this,n=this.opts,r=this.maskset;if(typeof n.isComplete==`function`)return n.isComplete(e,n);if(n.repeat===`*`)return;let i=!1,s=a.determineLastRequiredPosition.call(t,!0),c=s.l;if(s.def===void 0||s.def.newBlockMarker||s.def.optionality||s.def.optionalQuantifier){i=!0;for(let n=0;n<=c;n++){let a=o.getTestTemplate.call(t,n).match;if(a.static!==!0&&r.validPositions[n]===void 0&&(a.optionality===!1||a.optionality===void 0||a.optionality&&a.newBlockMarker==0)&&(a.optionalQuantifier===!1||a.optionalQuantifier===void 0)||a.static===!0&&a.def!=``&&e[n]!==o.getPlaceholder.call(t,n,a)){i=!1;break}}}return i}function f(e){let t=this,n=+!this.opts.insertMode;return t.isRTL?e.begin-e.end>n:e.end-e.begin>n}function p(e,t,n,r,i,l,u){let d=this,m=this.dependencyLib,v=this.opts,y=d.maskset;n=n===!0;let b=e;e.begin!==void 0&&(b=d.isRTL?e.end:e.begin);function x(e){if(e!==void 0){if(e.remove!==void 0&&(Array.isArray(e.remove)||(e.remove=[e.remove]),e.remove.sort(function(e,t){return d.isRTL?e.pos-t.pos:t.pos-e.pos}).forEach(function(e){_.call(d,{begin:e,end:e+1})}),e.remove=void 0),e.insert!==void 0&&(Array.isArray(e.insert)||(e.insert=[e.insert]),e.insert.sort(function(e,t){return d.isRTL?t.pos-e.pos:e.pos-t.pos}).forEach(function(e){e.c!==``&&p.call(d,e.pos,e.c,e.strict===void 0||e.strict,e.fromIsValid===void 0?r:e.fromIsValid)}),e.insert=void 0),e.refreshFromBuffer&&e.buffer){let t=e.refreshFromBuffer;h.call(d,t===!0?t:t.start,t.end,e.buffer),e.refreshFromBuffer=void 0}e.rewritePosition!==void 0&&(b=e.rewritePosition,e=!0)}return e}function S(t,n,i){let s=!1;return o.getTests.call(d,t).every(function(l,u){let p=l.match;if(a.getBuffer.call(d,!0),s=p.jit&&y.validPositions[a.seekPrevious.call(d,t)]===void 0?!1:p.fn==null?(n===p.def||n===v.skipOptionalPartCharacter)&&p.def!==``&&{c:o.getPlaceholder.call(d,t,p,!0)||p.def,pos:t}:p.fn.test(n,y,t,i,v,f.call(d,e)),s!==!1){let i=s.c===void 0?n:s.c,a=t;return i=i===v.skipOptionalPartCharacter&&p.static===!0?o.getPlaceholder.call(d,t,p,!0)||p.def:i,s=x(s),s!==!0&&s.pos!==void 0&&s.pos!==t&&(a=s.pos),s!==!0&&s.pos===void 0&&s.c===void 0||_.call(d,e,m.extend({},l,{input:c.call(d,i,p,a)}),r,a)===!1&&(s=!1),!1}return!0}),s}let C=!0,w=m.extend(!0,[],y.validPositions);if(v.keepStatic===!1&&y.excludes[b]!==void 0&&i!==!0&&r!==!0)for(let t=b;t<(d.isRTL?e.begin:e.end);t++)y.excludes[t]!==void 0&&(y.excludes[t]=void 0,delete y.tests[t]);if(typeof v.preValidation==`function`&&r!==!0&&l!==!0&&(C=v.preValidation.call(d,a.getBuffer.call(d),b,t,f.call(d,e),v,y,e,n||i),C=x(C)),C===!0){if(C=S(b,t,n),(!n||r===!0)&&C===!1&&l!==!0){let r=y.validPositions[b];if(r&&r.match.static===!0&&(r.match.def===t||t===v.skipOptionalPartCharacter))C={caret:a.seekNext.call(d,b)};else if(v.insertMode||y.validPositions[a.seekNext.call(d,b)]===void 0||e.end>b){let r=!1;if(y.jitOffset[b]&&y.validPositions[a.seekNext.call(d,b)]===void 0&&(C=p.call(d,b+y.jitOffset[b],t,!0,!0),C!==!1&&(i!==!0&&(C.caret=b),r=!0)),e.end>b&&(y.validPositions[b]=void 0),!r&&!a.isMask.call(d,b,v.keepStatic&&b===0)){for(let e=b+1,r=a.seekNext.call(d,b,!1,b!==0);e<=r;e++)if(C=S(e,t,n),C!==!1){C=g.call(d,b,C.pos===void 0?e:C.pos)||C,b=e;break}}}}if(d.hasAlternator&&i!==!0&&!n&&(i=!0,C===!1?(v.keepStatic===!0||isFinite(parseInt(v.keepStatic))&&b>=v.keepStatic)&&(C=s.call(d,b,t,n,r,void 0,e)):C===!0&&(f.call(d,e)&&y.tests[b]&&y.tests[b].length>1&&v.keepStatic||v.numericInput!==!0&&y.tests[b]&&y.tests[b].length>1&&a.getLastValidPosition.call(d,void 0,!0)>b)&&(C=s.call(d,!0)||C)),C===!0&&(C={pos:b}),typeof v.postValidation==`function`&&r!==!0&&l!==!0){let r=v.postValidation.call(d,a.getBuffer.call(d,!0),e.begin===void 0?e:d.isRTL?e.end:e.begin,t,C,v,y,n,u,i);r!==void 0&&(C=r===!0?C:r)}}C&&C.pos===void 0&&(C.pos=b),C===!1||l===!0?(a.resetMaskSet.call(d,!0),y.validPositions=m.extend(!0,[],w)):g.call(d,void 0,b,!0);let T=x(C);return d.maxLength!==void 0&&a.getBuffer.call(d).length>d.maxLength&&!r&&(a.resetMaskSet.call(d,!0),y.validPositions=m.extend(!0,[],w),T=!1),T}function m(e,t,n){let r=this,i=this.maskset,a=!1,s=o.getTests.call(r,e);for(let r=0;r<s.length;r++)if(s[r].match&&(s[r].match.nativeDef===t.match[n.shiftPositions?`def`:`nativeDef`]&&(!n.shiftPositions||!t.match.static)||s[r].match.nativeDef===t.match.nativeDef||n.regex&&!s[r].match.static&&s[r].match.fn.test(t.input,i,e,!1,n))){a=!0;break}else if(s[r].match&&s[r].match.def===t.match.nativeDef){a=void 0;break}return a===!1&&i.jitOffset[e]!==void 0&&(a=m.call(r,e+i.jitOffset[e],t,n)),a}function h(e,t,n){let i=this,o=this.maskset,s=this.opts,c=this.dependencyLib,l,u,d=s.skipOptionalPartCharacter,f=i.isRTL?n.slice().reverse():n;if(s.skipOptionalPartCharacter=``,e===!0)a.resetMaskSet.call(i,!1),e=0,t=n.length,u=a.determineNewCaretPosition.call(i,{begin:0,end:0},!1).begin;else{for(l=e;l<t;l++)delete o.validPositions[l];u=e}let p=new c.Event(`keypress`);for(l=e;l<t;l++){p.key=f[l].toString(),i.ignorable=!1;let e=r.EventHandlers.keypressEvent.call(i,p,!0,!1,!1,u);e!==!1&&e!==void 0&&(u=e.forwardPosition)}s.skipOptionalPartCharacter=d}function g(e,t,n){let r=this,i=this.maskset,s=this.dependencyLib;if(e===void 0)for(e=t-1;e>0&&!i.validPositions[e];e--);for(let u=e;u<t;u++)if(i.validPositions[u]===void 0&&!a.isMask.call(r,u,!1)&&(u==0?o.getTest.call(r,u):i.validPositions[u-1])){let e=o.getTests.call(r,u).slice();e[e.length-1].match.def===``&&e.pop();var c=o.determineTestTemplate.call(r,u,e),l;if(c&&(c.match.jit!==!0||c.match.newBlockMarker===`master`&&(l=i.validPositions[u+1])&&l.match.optionalQuantifier===!0)&&(c=s.extend({},c,{input:o.getPlaceholder.call(r,u,c.match,!0)||c.match.def}),c.generatedInput=!0,_.call(r,u,c,!0),n!==!0)){let e=i.validPositions[t].input;return i.validPositions[t]=void 0,p.call(r,t,e,!0,!0)}}}function _(e,t,n,r){let i=this,s=this.maskset,c=this.opts,l=this.dependencyLib;function u(e,t,n){let r=t[e];if(r!==void 0&&r.match.static===!0&&r.match.optionality!==!0&&(t[0]===void 0||t[0].alternation===void 0)){let r=n.begin<=e-1?t[e-1]&&t[e-1].match.static===!0&&t[e-1]:t[e-1],i=n.end>e+1?t[e+1]&&t[e+1].match.static===!0&&t[e+1]:t[e+1];return r&&i}return!1}let d=0,h=e.begin===void 0?e:e.begin,g=e.end===void 0?e:e.end,_=!0;if(e.begin>e.end&&(h=e.end,g=e.begin),r=r===void 0?h:r,n===void 0&&(h!==g||c.insertMode&&s.validPositions[r]!==void 0||t===void 0||t.match.optionalQuantifier||t.match.optionality)){let n=l.extend(!0,[],s.validPositions),v=a.getLastValidPosition.call(i,void 0,!0),y;s.p=h;let b=f.call(i,e)?h:r;for(y=v;y>=b;y--)s.validPositions.splice(y,1),t===void 0&&delete s.tests[y+1];let x=r,S=x,C,w,T;for(t&&(s.validPositions[r]=l.extend(!0,{},t),S++,x++),n[g]==null&&s.jitOffset[g]&&(g+=s.jitOffset[g]+ +!!t),y=t?g:g-1;y<=v;y++){if((C=n[y])!==void 0&&(c.shiftPositions!==!0||C.generatedInput!==!0)&&(y>=g||y>=h&&u(y,n,{begin:h,end:g}))){for(;T=o.getTest.call(i,S),T.match.def!==``;){if((w=m.call(i,S,C,c))!==!1||C.match.def===`+`){C.match.def===`+`&&a.getBuffer.call(i,!0);let e=p.call(i,S,C.input,C.match.def!==`+`,!0);if(_=e!==!1,x=(e.pos||S)+1,!_&&w)break}else _=!1;if(_){t===void 0&&C.match.static&&y===e.begin&&d++;break}if(!_&&a.getBuffer.call(i),S>s.maskLength)break;S++}o.getTest.call(i,S).match.def==``&&(_=!1),S=x}if(!_)break}if(!_)return s.validPositions=l.extend(!0,[],n),a.resetMaskSet.call(i,!0),!1}else t&&o.getTest.call(i,r).match.cd===t.match.cd&&(s.validPositions[r]=l.extend(!0,{},t));return a.resetMaskSet.call(i,!0),d}}),(function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.determineTestTemplate=f,t.getDecisionTaker=c,t.getMaskTemplate=u,t.getPlaceholder=l,t.getTest=m,t.getTestTemplate=d,t.getTests=g,t.isSubsetOf=h;var r=o(n(7)),i=n(20),a=n(21);function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){let n=(e.alternation==null?e.locator:e.mloc[`${c(e)}:${e.alternation}`]||e.locator).join(``);if(n!==``)for(n=n.split(`:`)[0];n.length<t;)n+=`0`;return n}function c(e){let t=e.locator[e.alternation];return typeof t==`string`&&t.length>0&&(t=t.split(`,`).sort((e,t)=>e-t)[0]),t===void 0?``:t.toString()}function l(e,t,n){let r=this,o=this.opts,s=this.maskset;if(t||=m.call(r,e).match,t.placeholder!==void 0||n===!0)if(t.placeholder!==``&&t.static===!0&&t.generated!==!0){let s=i.getLastValidPosition.call(r,e),c=i.seekNext.call(r,s);return(n?e<=c:e<c)?a.casing.call(r,o.staticDefinitionSymbol&&t.static?t.nativeDef:t.def,t,e):typeof t.placeholder==`function`?t.placeholder(o):t.placeholder}else return typeof t.placeholder==`function`?t.placeholder(o):t.placeholder;else if(t.static===!0){if(e>-1&&s.validPositions[e]===void 0){let t=g.call(r,e),n=[],i;if(typeof o.placeholder==`string`&&t.length>1+ +(t[t.length-1].match.def===``)){for(let r=0;r<t.length;r++)if(t[r].match.def!==``&&t[r].match.optionality!==!0&&t[r].match.optionalQuantifier!==!0&&(t[r].match.static===!0||i===void 0||t[r].match.fn.test(i.match.def,s,e,!0,o)!==!1)&&(n.push(t[r]),t[r].match.static===!0&&(i=t[r]),n.length>1&&/[0-9a-zA-Z]/.test(n[0].match.def)))return o.placeholder.charAt(e%o.placeholder.length)}}return t.def}return typeof o.placeholder==`object`?t.def:o.placeholder.charAt(e%o.placeholder.length)}function u(e,t,n,r,i){let a=this,o=this.opts,s=this.maskset,c=o.greedy,u=[];i&&o.greedy&&(o.greedy=!1,a.maskset.tests={}),t||=0;let p,m=0,h,_,v;do{if(e===!0&&s.validPositions[m])_=i&&s.validPositions[m].match.optionality&&s.validPositions[m+1]===void 0&&(s.validPositions[m].generatedInput===!0||s.validPositions[m].input==o.skipOptionalPartCharacter&&m>0)?f.call(a,m,g.call(a,m,p,m-1)):s.validPositions[m],h=_.match,p=_.locator.slice(),u.push(n===!0?_.input:n===!1?h.nativeDef:l.call(a,m,h));else{_=d.call(a,m,p,m-1),h=_.match,p=_.locator.slice();let e=r===!0?!1:o.jitMasking===!1?h.jit:o.jitMasking;v=(v||s.validPositions[m-1])&&h.static&&h.def!==o.groupSeparator&&h.fn===null,v||e===!1||e===void 0||typeof e==`number`&&isFinite(e)&&e>m?u.push(n===!1?h.nativeDef:l.call(a,u.length,h)):v=!1}m++}while(h.static!==!0||h.def!==``||t>m);return u[u.length-1]===``&&u.pop(),(n!==!1||s.maskLength===void 0)&&(s.maskLength=m-1),o.greedy=c,u}function d(e,t,n){let r=this;return this.maskset.validPositions[e]||f.call(r,e,g.call(r,e,t&&t.slice(),n))}function f(e,t){let n=this,r=n.opts,i=p(e,t);e=e>0?e-1:0;let a=Math.max(...t.map(e=>e.locator===void 0?0:e.locator.length)),o=s(m.call(n,e),a),c=0,l,u,d;r.greedy&&t.length>1&&t[t.length-1].match.def===``&&(c=1);for(let e=0;e<t.length-c;e++){let n=t[e];l=s(n,a);let c=Number(l)-Number(o);(n.unMatchedAlternationStopped!==!0||t.filter(e=>e.unMatchedAlternationStopped!==!0).length<=1)&&(u===void 0||l!==``&&c<u||d&&!r.greedy&&d.match.optionality&&d.match.optionality-i>0&&d.match.newBlockMarker===`master`&&(!n.match.optionality||n.match.optionality-i<1||!n.match.newBlockMarker)||d&&!r.greedy&&d.match.optionalQuantifier&&!n.match.optionalQuantifier)&&(u=c,d=n)}return d}function p(e,t){let n=0,r=!1;return t.forEach(e=>{e.match.optionality&&(n!==0&&n!==e.match.optionality&&(r=!0),(n===0||n>e.match.optionality)&&(n=e.match.optionality))}),n&&(e==0||t.length==1?n=0:r||(n=0)),n}function m(e,t){let n=this,r=this.maskset;return r.validPositions[e]?r.validPositions[e]:(t||g.call(n,e))[0]}function h(e,t,n){function r(e){let t=[],n=-1,r;for(let i=0,a=e.length;i<a;i++)if(e.charAt(i)===`-`)for(r=e.charCodeAt(i+1);++n<r;)t.push(String.fromCharCode(n));else n=e.charCodeAt(i),t.push(e.charAt(i));return t.join(``)}return e.match.def===t.match.nativeDef?!0:(n.regex||e.match.fn instanceof RegExp&&t.match.fn instanceof RegExp)&&e.match.static!==!0&&t.match.static!==!0?t.match.fn.source===`.`||r(t.match.fn.source.replace(/[[\]/]/g,``)).indexOf(r(e.match.fn.source.replace(/[[\]/]/g,``)))!==-1:!1}function g(e,t,n){let i=this,a=this.dependencyLib,o=this.maskset,s=this.opts,c=this.el,l=o.maskToken,u=t?n:0,d=t?t.slice():[0],p=[],m=!1,g=!1,_,v=t?t.join(``):``,y=!1;function b(t,n,a,l){function d(a,l,f){function C(e,t){let n=t.matches.indexOf(e)===0;return n||t.matches.every(function(r,i){return r.isQuantifier===!0?n=C(e,t.matches[i-1]):Object.prototype.hasOwnProperty.call(r,`matches`)&&(n=C(e,r)),n?(t.matches[i+1]&&t.matches[i+1].isQuantifier&&(n=i===0),!1):!0}),n}function w(e,t,n){let r,i,a,s,c=`${t}:${n}`;if((o.tests[e]||o.validPositions[e])&&(o.validPositions[e]?[o.validPositions[e]]:o.tests[e]).every(function(e,o){return e.mloc[c]?(r=e,!1):(Object.values(e.mloc).filter(e=>e[n]==t).every(t=>{let n=t.join(``).split(`:`)[0];for(a||=n;n.length<a.length;)n+=`0`;let o=Number(n);return(r===void 0||o<i)&&(i=o,r=e,s=Object.entries(e.mloc).find(e=>e[1].toString()===t.toString())[0]),!0}),!0)}),r){n===void 0&&(c=`${t}:${r.alternation}`);let e=`${r.locator[r.alternation]}:${r.alternation}`,i=r.mloc[s||c]||r.mloc[e]||r.locator;i[i.length-1].toString().indexOf(`:`)!==-1&&i.pop();let a=parseInt(r.alternation)+1;return i.slice(a)}else return n===void 0?void 0:w(e,t)}function T(t,n){return t.match.static===!0&&n.match.static!==!0&&n.match.fn.test(t.match.def,o,e,!1,s,!1)}function E(e,t){function n(n){e.mloc=e.mloc||{};let r=e.locator[n];if(r===void 0)e.alternation=void 0;else{if(t===void 0)typeof r==`string`&&(r=r.split(`,`)[0]),r=`${r}:${n}`,e.mloc[r]===void 0&&(e.mloc[r]=e.locator.slice(),e.mloc[r].push(`:${n}`));else{let n=0;for(let r in t.mloc)if(e.mloc[r]===void 0)e.mloc[r]=t.mloc[r];else do if(e.mloc[r+n]===void 0){e.mloc[r+n]=t.mloc[r];break}while(e.mloc[r+n++]!==void 0);e.locator=S(u,[e,t])}return e.alternation>n&&(e.alternation=n),!0}return!1}let r=e.alternation,i=t===void 0||r<=t.alternation&&e.locator[r].toString().indexOf(t.locator[r])===-1;if(!i&&r>t.alternation){for(let n=0;n<r;n++)if(e.locator[n]!==t.locator[n]){r=n,i=!0;break}}return i?n(r):!1}function ee(){if(a=d(t.matches[t.matches.indexOf(a)+1],l,f),a)return!0}function te(){let t=a,r=p.length;if(a=b(a,n,l,f),p.length>0)if(p.forEach(function(e,t){t>=r&&(e.match.optionality=e.match.optionality?e.match.optionality+1:1)}),_=p[p.length-1].match,f===void 0&&C(_,t))m=!0,u=e;else return a}function D(){function r(e){let t=0;for(let n=0;n<e.length;n++){let r=e[n];r.isQuantifier&&!isNaN(r.quantifier.max)?t+=r.quantifier.max:t++}return t}function _(e){let t=e.matches[0].matches?r(e.matches[0].matches):1,n;for(let i=0;i<e.matches.length&&(n=e.matches[i].matches?r(e.matches[i].matches):1,t===n);i++);return t!==n}i.hasAlternator=!0;let v=a,b=[],x=p.slice(),S=l.length,C=n.length>0?n.shift():-1,ee;if(C===-1||typeof C==`string`){let t=u,r=n.slice(),i=[],te;if(typeof C==`string`)i=C.split(`,`);else for(te=0;te<v.matches.length;te++)i.push(te.toString());if(o.excludes[e]!==void 0){let t=i.slice();for(let t=0,n=o.excludes[e].length;t<n;t++){let n=o.excludes[e][t].toString().split(`:`);l.length==n[1]&&i.splice(i.indexOf(n[0]),1)}i.length===0&&(delete o.excludes[e],i=t)}(s.keepStatic===!0||isFinite(parseInt(s.keepStatic))&&t>=s.keepStatic)&&(i=i.slice(0,1));for(let e=0;e<i.length;e++){te=parseInt(i[e]),p=[],n=typeof C==`string`&&w(u,te,S)||r.slice();let o=v.matches[te];if(o&&d(o,[te].concat(l),f))a=!0;else if(y=_(v),o&&o.matches&&o.matches.length>v.matches[0].matches.length)break;ee=p.slice(),u=t,p=[];for(let e=0;e<ee.length;e++){let n=ee[e],r=!1;n.alternation=n.alternation||S,E(n);for(let e=0;e<b.length;e++){let i=b[e];if(typeof C!=`string`||n.alternation!==void 0&&C.indexOf(n.locator[n.alternation].toString())!==-1){if(n.match.nativeDef===i.match.nativeDef){r=!0,E(i,n);break}else if(h(n,i,s)){E(n,i)&&(r=!0,b.splice(b.indexOf(i),0,n));break}else if(h(i,n,s)){E(i,n);break}else if(T(n,i)){E(n,i)&&(r=!0,b.splice(b.indexOf(i),0,n));break}else if(T(i,n)){E(i,n),i.match.optionality&&c.inputmask.userOptions.keepStatic===void 0&&(s.keepStatic=t);break}}}r||b.push(n)}}p=x.concat(b),u=e,m||=p.length>0&&y,!y&&m&&(g=!0),a=b.length>0&&!y,y&&m&&!a&&p.forEach(function(e,t){e.unMatchedAlternationStopped=!0}),n=r.slice()}else a=d(v.matches[C]||t.matches[C],[C].concat(l),f);if(a)return!0}function ne(){let r=a,i=!1;for(let c=n.length>0?n.shift():0;c<(isNaN(r.quantifier.max)?c+1:r.quantifier.max)&&u<=e;c++){let n=t.matches[t.matches.indexOf(r)-1];if(a=d(n,[c].concat(l),n),a){if(p.forEach(function(t,l){_=x(n,t.match)?t.match:p[p.length-1].match,_.optionalQuantifier=c>=r.quantifier.min,_.jit=(c+1)*(n.matches.indexOf(_)+1)>r.quantifier.jit,(_.optionalQuantifier||_.optionality)&&C(_,n)&&(m=!0,u=e,s.greedy&&o.validPositions[e-1]==null&&c>r.quantifier.min&&[`*`,`+`].indexOf(r.quantifier.max)!=-1&&(p.pop(),v=void 0),i=!0,a=!1),!i&&_.jit&&(o.jitOffset[e]=n.matches.length-n.matches.indexOf(_))}),i)break;return!0}}}if(u>e+s._maxTestPos)throw Error(`Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. ${o.mask}`);if(u===e&&a.matches===void 0)if(p.push({match:a,locator:l.reverse(),cd:v,mloc:{}}),a.optionality&&f===void 0&&(s.definitions&&s.definitions[a.nativeDef]&&s.definitions[a.nativeDef].optional||r.default.prototype.definitions[a.nativeDef]&&r.default.prototype.definitions[a.nativeDef].optional))m=!0,u=e;else return!0;else if(a.matches!==void 0){if(a.isGroup&&f!==a)return ee();if(a.isOptional)return te();if(a.isAlternator)return D();if(a.isQuantifier&&f!==t.matches[t.matches.indexOf(a)-1])return ne();if(a=b(a,n,l,f),a)return!0}else u++}for(let r=n.length>0?n.shift():0;r<t.matches.length;r++)if(t.matches[r].isQuantifier!==!0){let n=d(t.matches[r],[r].concat(a),l);if(n&&u===e)return n;if(u>e)break}}function x(e,t){let n=e.matches.indexOf(t)!=-1;return n||e.matches.forEach((e,r)=>{e.matches!==void 0&&!n&&(n=x(e,t))}),n}function S(e,t){let n=[];return Array.isArray(t)||(t=[t]),t.length>0&&(t[0].alternation===void 0||s.keepStatic===!0||isFinite(parseInt(s.keepStatic))&&e>=s.keepStatic?(n=f.call(i,e,t.slice()).locator.slice(),n.length===0&&(n=t[0].locator.slice())):t.forEach(e=>{Object.values(e.mloc).forEach(e=>{e.forEach((e,t)=>{let r=n[t];e.toString().includes(`:`)||r&&r.toString().includes(`:`)||(r===void 0?n[t]=e:r.toString().includes(e)||(n[t]=n[t]+`,`+e))})})})),n}if(e>-1){if(t===void 0){let t=e-1,n;for(;(n=o.validPositions[t]||o.tests[t])===void 0&&t>-1;)t--;n!==void 0&&t>-1&&(d=S(t,n),v=d.join(``),u=t)}if(o.tests[e]&&o.tests[e][0].cd===v)return o.tests[e];for(let t=d.shift();t<l.length&&!(b(l[t],d,[t])&&u===e||u>e);t++);}(p.length===0||m)&&p.push({match:{fn:null,static:!0,optionality:!1,casing:null,def:``,placeholder:``},locator:y&&p.filter(e=>e.unMatchedAlternationStopped!==!0).length===0||g&&p.length>0&&p.filter(e=>!e.match.static).every(e=>e.match.optionalQuantifier)?[0]:[],mloc:{},cd:v});let C;return t!==void 0&&o.tests[e]?C=a.extend(!0,[],p):(o.tests[e]=a.extend(!0,[],p),C=o.tests[e]),p.forEach(e=>{e.match.optionality=e.match.defOptionality||!1}),C}}),(function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.mask=l;var r=n(17),i=n(18),a=n(15),o=n(16),s=n(20),c=n(21);function l(){let e=this,t=this.opts,n=this.el,l=this.dependencyLib;function u(t,n){function r(t){let r,i;function c(t){if(l.valHooks&&(l.valHooks[t]===void 0||l.valHooks[t].inputmaskpatch!==!0)){let r=l.valHooks[t]&&l.valHooks[t].get?l.valHooks[t].get:function(e){return e.value},i=l.valHooks[t]&&l.valHooks[t].set?l.valHooks[t].set:function(e,t){return e.value=t,e};l.valHooks[t]={get:function(t){if(t.inputmask){if(t.inputmask.opts.autoUnmask)return t.inputmask.unmaskedvalue();{let i=r(t);return s.getLastValidPosition.call(e,void 0,void 0,t.inputmask.maskset.validPositions)!==-1||n.nullable!==!0?i:``}}else return r(t)},set:function(e,t){let n=i(e,t);return e.inputmask&&(0,o.applyInputValue)(e,t),n},inputmaskpatch:!0}}}function u(){return this.inputmask?this.inputmask.opts.autoUnmask?this.inputmask.unmaskedvalue():s.getLastValidPosition.call(e)!==-1||n.nullable!==!0?this.getRootNode().activeElement===this&&n.clearMaskOnLostFocus?(e.isRTL?o.clearOptionalTail.call(e,s.getBuffer.call(e).slice()).reverse():o.clearOptionalTail.call(e,s.getBuffer.call(e).slice())).join(``):r.call(this):``:r.call(this)}function d(e){i.call(this,e),this.inputmask&&(0,o.applyInputValue)(this,e)}function f(e){a.EventRuler.on(e,`mouseenter`,function(){let e=this,t=e.inputmask._valueGet(!0);t!=(e.inputmask.isRTL?s.getBuffer.call(e.inputmask).slice().reverse():s.getBuffer.call(e.inputmask)).join(``)&&(0,o.applyInputValue)(e,t)})}if(!t.inputmask.__valueGet){if(n.noValuePatching!==!0){if(Object.getOwnPropertyDescriptor){let e=Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t),`value`):void 0;e&&e.get&&e.set?(r=e.get,i=e.set,Object.defineProperty(t,"value",{get:u,set:d,configurable:!0})):t.tagName.toLowerCase()!==`input`&&(r=function(){return this.textContent},i=function(e){this.textContent=e},Object.defineProperty(t,"value",{get:u,set:d,configurable:!0}))}else document.__lookupGetter__&&t.__lookupGetter__(`value`)&&(r=t.__lookupGetter__(`value`),i=t.__lookupSetter__(`value`),t.__defineGetter__(`value`,u),t.__defineSetter__(`value`,d));t.inputmask.__valueGet=r,t.inputmask.__valueSet=i}t.inputmask._valueGet=function(t){return e.isRTL&&t!==!0?r.call(this.el).split(``).reverse().join(``):r.call(this.el)},t.inputmask._valueSet=function(t,n){i.call(this.el,t==null?``:n!==!0&&e.isRTL?t.split(``).reverse().join(``):t)},r===void 0&&(r=function(){return this.value},i=function(e){this.value=e},c(t.type),f(t))}}let i=t.getAttribute(`type`),c=t.tagName.toLowerCase()===`input`&&n.supportsInputType.includes(i)||t.isContentEditable||t.tagName.toLowerCase()===`textarea`;if(!c)if(t.tagName.toLowerCase()===`input`){let e=document.createElement(`input`);e.setAttribute(`type`,i),c=e.type===`text`,e=null}else c=`partial`;return c===!1?t.inputmask=void 0:r(t),c}a.EventRuler.off(n);let d=u(n,t);if(d!==!1){e.originalPlaceholder=n.placeholder,e.maxLength=n===void 0?void 0:n.maxLength,e.maxLength===-1&&(e.maxLength=void 0),`inputMode`in n&&n.getAttribute(`inputmode`)===null&&(n.inputMode=t.inputmode,n.setAttribute(`inputmode`,t.inputmode)),d===!0&&(t.showMaskOnFocus=t.showMaskOnFocus&&[`cc-number`,`cc-exp`].indexOf(n.autocomplete)===-1,r.iphone&&(t.insertModeVisual=!1,n.setAttribute(`autocorrect`,`off`)),a.EventRuler.on(n,`submit`,i.EventHandlers.submitEvent),a.EventRuler.on(n,`reset`,i.EventHandlers.resetEvent),a.EventRuler.on(n,`blur`,i.EventHandlers.blurEvent),a.EventRuler.on(n,`focus`,i.EventHandlers.focusEvent),a.EventRuler.on(n,`invalid`,i.EventHandlers.invalidEvent),a.EventRuler.on(n,`click`,i.EventHandlers.clickEvent),a.EventRuler.on(n,`mouseleave`,i.EventHandlers.mouseleaveEvent),a.EventRuler.on(n,`mouseenter`,i.EventHandlers.mouseenterEvent),a.EventRuler.on(n,`paste`,i.EventHandlers.pasteEvent),a.EventRuler.on(n,`cut`,i.EventHandlers.cutEvent),a.EventRuler.on(n,`complete`,t.oncomplete),a.EventRuler.on(n,`incomplete`,t.onincomplete),a.EventRuler.on(n,`cleared`,t.oncleared),t.inputEventOnly!==!0&&a.EventRuler.on(n,`keydown`,i.EventHandlers.keyEvent),(r.mobile||t.inputEventOnly)&&n.removeAttribute(`maxLength`),a.EventRuler.on(n,`input`,i.EventHandlers.inputFallBackEvent)),a.EventRuler.on(n,`setvalue`,i.EventHandlers.setValueEvent),e.applyMaskHook===void 0||e.applyMaskHook(),s.getBufferTemplate.call(e).join(``),e.undoValue=e._valueGet(!0);let l=n.getRootNode().activeElement;if(n.inputmask._valueGet(!0)!==``||t.clearMaskOnLostFocus===!1||l===n){(0,o.applyInputValue)(n,n.inputmask._valueGet(!0));let r=s.getBuffer.call(e).slice();c.isComplete.call(e,r)===!1&&t.clearIncomplete&&s.resetMaskSet.call(e,!1),t.clearMaskOnLostFocus&&l!==n&&(s.getLastValidPosition.call(e)===-1?r=[]:o.clearOptionalTail.call(e,r)),(t.clearMaskOnLostFocus===!1||t.showMaskOnFocus&&l===n||n.inputmask._valueGet(!0)!==``)&&(0,o.writeBuffer)(n,r),l===n?s.caret.call(e,n,s.seekNext.call(e,s.getLastValidPosition.call(e))):s.caret.call(e,n,0)}}}}),(function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.analyseMask=l,t.generateMaskSet=c;var r=s(n(10)),i=n(25),a=s(n(7)),o=s(n(26));function s(e){return e&&e.__esModule?e:{default:e}}function c(e,t){let n;function o(e,{repeat:t,groupmarker:n,quantifiermarker:r,keepStatic:a}){if(t>0||t===`*`||t===`+`){let i=t===`*`?0:t===`+`?1:t;if(i!==t)e=n[0]+e+n[1]+r[0]+i+`,`+t+r[1];else{let t=e;for(let n=1;n<i;n++)e+=t}}if(a===!0){let t=e.match(RegExp(`(.)\\[([^\\]]*)\\]`,`g`));t&&t.forEach((t,n)=>{let[r,a]=t.split(`[`);a=a.replace(`]`,``),e=e.replace(RegExp(`${(0,i.escapeRegex)(r)}\\[${(0,i.escapeRegex)(a)}\\]`),r.charAt(0)===a.charAt(0)?`(${r}|${r}${a})`:`${r}[${a}]`)})}return e}function s(e,n,i){let s=!1;(e===null||e===``)&&(s=i.regex!==null,s?(e=i.regex,e=e.replace(/^(\^)(.*)(\$)$/,`$2`)):(s=!0,e=`.*`)),e.length===1&&i.greedy===!1&&i.repeat!==0&&(i.placeholder=``),e=o(e,i);let c,l;return l=s?`regex_`+i.regex:i.numericInput?e.split(``).reverse().join(``):e,i.keepStatic!==null&&(l=`ks_`+i.keepStatic+l),typeof i.placeholder==`object`&&(l=`ph_`+JSON.stringify(i.placeholder)+l),a.default.prototype.masksCache[l]===void 0||t===!0?(c={mask:e,maskToken:a.default.prototype.analyseMask(e,s,i),validPositions:[],_buffer:void 0,buffer:void 0,tests:{},excludes:{},metadata:n,maskLength:void 0,jitOffset:{}},t!==!0&&(a.default.prototype.masksCache[l]=c,c=r.default.extend(!0,{},a.default.prototype.masksCache[l]))):c=r.default.extend(!0,{},a.default.prototype.masksCache[l]),c}if(typeof e.mask==`function`&&(e.mask=e.mask(e)),Array.isArray(e.mask))if(e.mask.length>1){e.keepStatic===null&&(e.keepStatic=!0);let t=e.groupmarker[0];return(e.isRTL?e.mask.reverse():e.mask).forEach(function(n){t.length>1&&(t+=e.alternatormarker),n.mask!==void 0&&typeof n.mask!=`function`?t+=n.mask:t+=n}),t+=e.groupmarker[1],s(t,e.mask,e)}else e.mask=e.mask.pop();return n=e.mask&&e.mask.mask!==void 0&&typeof e.mask.mask!=`function`?s(e.mask.mask,e.mask,e):s(e.mask,e.mask,e),e.keepStatic===null&&(e.keepStatic=!1),n}function l(e,t,n){let r=/(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g,i=/\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,s=new o.default,c=[],l=[],u=!1,d,f,p,m,h,g,_=!1;function v(e,r,i){i=i===void 0?e.matches.length:i;let o=e.matches[i-1],c=n.casing?`i`:``;if(t)r.indexOf(`[`)===0||u&&/\\d|\\s|\\w|\\p/i.test(r)||r===`.`?(/\\p\{.*}/i.test(r)&&(c+=`u`),e.matches.splice(i++,0,{fn:new RegExp(r,c),static:!1,optionality:!1,newBlockMarker:o===void 0?`master`:o.def!==r,casing:null,def:r,placeholder:typeof n.placeholder==`object`?n.placeholder[s.matches.length]:void 0,nativeDef:r})):(u&&(r=r[r.length-1]),r.split(``).forEach(function(t,r){o=e.matches[i-1],e.matches.splice(i++,0,{fn:/[a-z]/i.test(n.staticDefinitionSymbol||t)?RegExp(`[`+(n.staticDefinitionSymbol||t)+`]`,c):null,static:!0,optionality:!1,newBlockMarker:o===void 0?`master`:o.def!==t&&o.static!==!0,casing:null,def:n.staticDefinitionSymbol||t,placeholder:n.staticDefinitionSymbol===void 0?typeof n.placeholder==`object`?n.placeholder[s.matches.length]:void 0:t,nativeDef:(u?`'`:``)+t})})),u=!1;else{let t=n.definitions&&n.definitions[r]||n.usePrototypeDefinitions&&a.default.prototype.definitions[r];t&&!u?(typeof t.validator==`string`&&/\\p\{.*}/i.test(t.validator)&&(c+=`u`),e.matches.splice(i++,0,{fn:t.validator?typeof t.validator==`string`?new RegExp(t.validator,c):new function(){this.test=t.validator}:/./,static:t.static||!1,optionality:t.optional||!1,defOptionality:t.optional||!1,newBlockMarker:o===void 0||t.optional?`master`:o.def!==(t.definitionSymbol||r),casing:t.casing,def:t.definitionSymbol||r,placeholder:t.placeholder,nativeDef:r,generated:t.generated})):(e.matches.splice(i++,0,{fn:/[a-z]/i.test(n.staticDefinitionSymbol||r)?RegExp(`[`+(n.staticDefinitionSymbol||r)+`]`,c):null,static:!0,optionality:!1,newBlockMarker:o===void 0?`master`:o.def!==r&&o.static!==!0,casing:null,def:n.staticDefinitionSymbol||r,placeholder:n.staticDefinitionSymbol===void 0?void 0:r,nativeDef:(u?`'`:``)+r}),u=!1)}}function y(e){e&&e.matches&&e.matches.forEach(function(r,i){let a=e.matches[i+1];(a===void 0||a.matches===void 0||a.isQuantifier===!1)&&r&&r.isGroup&&(r.isGroup=!1,t||(v(r,n.groupmarker[0],0),r.openGroup!==!0&&v(r,n.groupmarker[1]))),y(r)})}function b(){if(c.length>0){if(m=c[c.length-1],v(m,f),m.isAlternator){h=c.pop();for(let e=0;e<h.matches.length;e++)h.matches[e].isGroup&&(h.matches[e].isGroup=!1);c.length>0?(m=c[c.length-1],m.matches.push(h)):s.matches.push(h)}}else v(s,f)}function x(e){function t(e){return e===n.optionalmarker[0]?e=n.optionalmarker[1]:e===n.optionalmarker[1]?e=n.optionalmarker[0]:e===n.groupmarker[0]?e=n.groupmarker[1]:e===n.groupmarker[1]&&(e=n.groupmarker[0]),e}e.matches=e.matches.reverse();for(let n in e.matches)if(Object.prototype.hasOwnProperty.call(e.matches,n)){let r=parseInt(n);if(e.matches[n].isQuantifier&&e.matches[r+1]&&e.matches[r+1].isGroup){let t=e.matches[n];e.matches.splice(n,1),e.matches.splice(r+1,0,t)}e.matches[n].matches===void 0?e.matches[n]=t(e.matches[n]):e.matches[n]=x(e.matches[n])}return e}function S(e){let t=new o.default(!0);return t.openGroup=!1,t.matches=e,t}function C(){if(p=c.pop(),p.openGroup=!1,p!==void 0)if(c.length>0){if(m=c[c.length-1],m.matches.push(p),m.isAlternator){h=c.pop();for(let e=0;e<h.matches.length;e++)h.matches[e].isGroup=!1,h.matches[e].alternatorGroup=!1;c.length>0?(m=c[c.length-1],m.matches.push(h)):s.matches.push(h)}}else s.matches.push(p);else b()}function w(e){let t=e.pop();return t.isQuantifier&&(t=S([e.pop(),t])),t}for(t&&(n.optionalmarker[0]=void 0,n.optionalmarker[1]=void 0);d=t?i.exec(e):r.exec(e);){if(f=d[0],t){switch(f.charAt(0)){case`?`:f=`{0,1}`;break;case`+`:case`*`:f=`{`+f+`}`;break;case`|`:if(c.length===0){let e=S(s.matches);e.openGroup=!0,c.push(e),s.matches=[],_=!0}break}switch(f){case`\\d`:f=`[0-9]`;break;case`\\p`:f+=i.exec(e)[0],f+=i.exec(e)[0];break;case`(?:`:case`(?=`:case`(?!`:case`(?<=`:case`(?<!`:break}}if(u){b();continue}switch(f.charAt(0)){case`$`:case`^`:t||b();break;case n.escapeChar:u=!0,t&&b();break;case n.optionalmarker[1]:case n.groupmarker[1]:C();break;case n.optionalmarker[0]:c.push(new o.default(!1,!0));break;case n.groupmarker[0]:c.push(new o.default(!0));break;case n.quantifiermarker[0]:{let e=new o.default(!1,!1,!0);f=f.replace(/[{}?]/g,``);let t=f.split(`|`),n=t[0].split(`,`),r=isNaN(n[0])?n[0]:parseInt(n[0]),i=n.length===1?r:isNaN(n[1])?n[1]:parseInt(n[1]),a=isNaN(t[1])?t[1]:parseInt(t[1]);(r===`*`||r===`+`)&&(r=i===`*`?0:1),e.quantifier={min:r,max:i,jit:a};let l=c.length>0?c[c.length-1].matches:s.matches;d=l.pop(),d.isGroup||(d=S([d])),l.push(d),l.push(e)}break;case n.alternatormarker:if(c.length>0){m=c[c.length-1];let e=m.matches[m.matches.length-1];g=m.openGroup&&(e.matches===void 0||e.isGroup===!1&&e.isAlternator===!1)?c.pop():w(m.matches)}else g=w(s.matches);if(g.isAlternator)c.push(g);else if(g.alternatorGroup?(h=c.pop(),g.alternatorGroup=!1):h=new o.default(!1,!1,!1,!0),h.matches.push(g),c.push(h),g.openGroup){g.openGroup=!1;let e=new o.default(!0);e.alternatorGroup=!0,c.push(e)}break;default:b()}}for(_&&C();c.length>0;)p=c.pop(),s.matches.push(p);return s.matches.length>0&&(y(s),l.push(s)),(n.numericInput||n.isRTL)&&x(l[0]),l}}),(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.escapeRegex=r;let n=RegExp(`(\\`+[`/`,`.`,`*`,`+`,`?`,`|`,`(`,`)`,`[`,`]`,`{`,`}`,`\\`,`$`,`^`].join(`|\\`)+`)`,`gim`);function r(e){return e.replace(n,`\\$1`)}}),(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;function n(e,t,n,r){this.matches=[],this.openGroup=e||!1,this.alternatorGroup=!1,this.isGroup=e||!1,this.isOptional=t||!1,this.isQuantifier=n||!1,this.isAlternator=r||!1,this.quantifier={min:1,max:1}}}),(function(e,t,n){var r=n(25),i=c(n(7)),a=n(19),o=n(20),s=n(22);n(28);function c(e){return e&&e.__esModule?e:{default:e}}let l=i.default.dependencyLib;class u{constructor(e,t,n,r){this.mask=e,this.format=t,this.opts=n,this.inputmask=r,this._date=new Date(1,0,1),this.initDateObject(e,this.opts,this.inputmask)}get date(){return this._date===void 0&&(this._date=new Date(1,0,1),this.initDateObject(void 0,this.opts,this.inputmask)),this._date}initDateObject(e,t,n){let r,i=-1;for(x(t).lastIndex=0;r=x(t).exec(this.format);)if(r.index>=i){let a=/\d+$/.exec(r[0]),o=a?r[0][0]+`x`:r[0],c;if(e!==void 0){if(a){let i=x(t).lastIndex,a=D.call(n,r.index,t,n&&n.maskset);x(t).lastIndex=i,c=e.slice(0,e.indexOf(a.nextMatch[0]))}else{let a=r[0][0],l=r.index;for(;n&&(t.placeholder[`${r.index}'${s.getTest.call(n,l).match.placeholder}`]||s.getTest.call(n,l).match.placeholder)===a;)l++;i=l;let u=l-r.index;c=e.slice(0,u||b(o)&&b(o)[4]||o.length)}e=e.slice(c.length)}Object.prototype.hasOwnProperty.call(m,o)&&this.setValue(this,c,o,b(o)[2],b(o)[1])}}setValue(e,t,n,r,i){if(t!==void 0)switch(r){case`ampm`:e[r]=t,e[`raw`+r]=t.replace(/\s/g,`_`);break;case`month`:if(n===`MMM`||n===`MMMM`){n===`MMM`?e[r]=E(p.monthNames.slice(0,12).findIndex(e=>t.toLowerCase()===e.toLowerCase())+1,2):e[r]=E(p.monthNames.slice(12,24).findIndex(e=>t.toLowerCase()===e.toLowerCase())+1,2),e[r]=e[r]===`00`?``:e[r].toString(),e[`raw`+r]=e[r];break}default:e[r]=t.replace(/[^0-9]/g,`0`),e[`raw`+r]=t.replace(/\s/g,`_`)}if(i!==void 0){let t=e[r];(r===`day`&&parseInt(t)===29||r===`month`&&parseInt(t)===2)&&parseInt(e.day)===29&&parseInt(e.month)===2&&(e.year===``||e.year===void 0)&&e._date.setFullYear(2012,1,29),r===`day`&&(d=!0,parseInt(t)===0&&(t=1)),r===`month`&&(d=!0),r===`year`&&(d=!0,t.length<b(n)[4]&&(t=E(t,b(n)[4],!0))),(t!==``&&!isNaN(t)||r===`ampm`)&&i.call(e._date,t)}}reset(){this._date=new Date(1,0,1)}reInit(){this._date=void 0,this.date}}let d=!1,f=new Date().getFullYear(),p=i.default.prototype.i18n,m={d:[`[1-9]|[12][0-9]|3[01]`,Date.prototype.setDate,`day`,Date.prototype.getDate],dd:[`0[1-9]|[12][0-9]|3[01]`,Date.prototype.setDate,`day`,function(){return E(Date.prototype.getDate.call(this),2)}],ddd:[``],dddd:[``],M:[`[1-9]|1[012]`,function(e){let t=e?parseInt(e):0;return t>0&&t--,Date.prototype.setMonth.call(this,t)},`month`,function(){return Date.prototype.getMonth.call(this)+1}],MM:[`0[1-9]|1[012]`,function(e){let t=e?parseInt(e):0;return t>0&&t--,Date.prototype.setMonth.call(this,t)},`month`,function(){return E(Date.prototype.getMonth.call(this)+1,2)}],MMM:[p.monthNames.slice(0,12).join(`|`),function(e){let t=p.monthNames.slice(0,12).findIndex(t=>e.toLowerCase()===t.toLowerCase());return t!==-1&&Date.prototype.setMonth.call(this,t)},`month`,function(){return p.monthNames.slice(0,12)[Date.prototype.getMonth.call(this)]}],MMMM:[p.monthNames.slice(12,24).join(`|`),function(e){let t=p.monthNames.slice(12,24).findIndex(t=>e.toLowerCase()===t.toLowerCase());return t!==-1&&Date.prototype.setMonth.call(this,t)},`month`,function(){return p.monthNames.slice(12,24)[Date.prototype.getMonth.call(this)]}],yy:[`[0-9]{2}`,function(e){let t=new Date().getFullYear().toString().slice(0,2);Date.prototype.setFullYear.call(this,`${t}${e}`)},`year`,function(){return E(Date.prototype.getFullYear.call(this),2)},2],yyyy:[`[0-9]{4}`,Date.prototype.setFullYear,`year`,function(){return E(Date.prototype.getFullYear.call(this),4)},4],h:[`[1-9]|1[0-2]`,Date.prototype.setHours,`hours`,Date.prototype.getHours],hh:[`0[1-9]|1[0-2]`,Date.prototype.setHours,`hours`,function(){return E(Date.prototype.getHours.call(this),2)}],hx:[function(e){return`[0-9]{${e}}`},Date.prototype.setHours,`hours`,function(e){return Date.prototype.getHours}],H:[`1?[0-9]|2[0-3]`,Date.prototype.setHours,`hours`,Date.prototype.getHours],HH:[`0[0-9]|1[0-9]|2[0-3]`,Date.prototype.setHours,`hours`,function(){return E(Date.prototype.getHours.call(this),2)}],Hx:[function(e){return`[0-9]{${e}}`},Date.prototype.setHours,`hours`,function(e){return function(){return E(Date.prototype.getHours.call(this),e)}}],m:[`[1-5]?[0-9]`,Date.prototype.setMinutes,`minutes`,Date.prototype.getMinutes],mm:[`0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]`,Date.prototype.setMinutes,`minutes`,function(){return E(Date.prototype.getMinutes.call(this),2)}],s:[`[1-5]?[0-9]`,Date.prototype.setSeconds,`seconds`,Date.prototype.getSeconds],ss:[`0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]`,Date.prototype.setSeconds,`seconds`,function(){return E(Date.prototype.getSeconds.call(this),2)}],l:[`[0-9]{3}`,Date.prototype.setMilliseconds,`milliseconds`,function(){return E(Date.prototype.getMilliseconds.call(this),3)},3],L:[`[0-9]{2}`,Date.prototype.setMilliseconds,`milliseconds`,function(){return E(Date.prototype.getMilliseconds.call(this),2)},2],t:[`[ap]`,_,`ampm`,v,1],tt:[`[ap]m`,_,`ampm`,v,2],T:[`[AP]`,_,`ampm`,v,1],TT:[`[AP]M`,_,`ampm`,v,2],Z:[`.*`,void 0,`Z`,y],o:[``],S:[``]},h={D:`d`,DD:`dd`,DDD:`ddd`,DDDD:`dddd`,mmm:`MMM`,mmmm:`MMMM`,YY:`yy`,YYYY:`yyyy`,sss:`L`},g={isoDate:`yyyy-MM-dd`,isoTime:`HH:mm:ss`,isoDateTime:`yyyy-MM-dd\\THH:mm:ss`,isoUtcDateTime:`UTC:yyyy-MM-dd\\THH:mm:ss\\Z`};function _(e){let t=this.getHours();e.toLowerCase().includes(`p`)?this.setHours(t+12):e.toLowerCase().includes(`a`)&&t>=12&&this.setHours(t-12)}function v(){let e=this.getHours();return e||=12,e>=12?`PM`:`AM`}function y(){let{1:e}=this.toString().match(/\((.+)\)/);return e.includes(` `)&&(e=e.replace(`-`,` `).toUpperCase(),e=e.split(` `).map(([e])=>e).join(``)),e}function b(e){let t=h[e]||e,n=/\d+$/.exec(t);if(n&&n[0]!==void 0){let e=m[t[0]+`x`].slice(``);return e[0]=e[0](n[0]),e[3]=e[3](n[0]),e}else if(m[t])return m[t]}function x(e){if(!e.tokenizer){let t=[],n=[],r=Object.keys(m).concat(Object.keys(h));for(let e of r)if(/\.*x$/.test(e)){let t=e[0]+`\\d+`;n.indexOf(t)===-1&&n.push(t)}else t.indexOf(e[0])===-1&&t.push(e[0]);e.tokenizer=`(`+(n.length>0?n.join(`|`)+`|`:``)+t.join(`+|`)+`+)+?|.`,e.tokenizer=new RegExp(e.tokenizer,`g`)}return e.tokenizer}function S(e,t,n){if(e.year!==e.rawyear){let r=f.toString(),i=e.rawyear.replace(/[^0-9]/g,``),a=r.slice(0,i.length),o=r.slice(i.length);if(i.length===2&&i===a){let i=new Date(f,e.month-1,e.day);e.day==i.getDate()&&(!n.max||n.max.date.getTime()>=i.getTime())&&(e.date.setFullYear(f),e.year=r,t.insert=[{pos:t.pos+1,c:o[0]},{pos:t.pos+2,c:o[1]}])}}return t}function C(e,t,n){let r=this;if(!d)return!0;if(e.rawday===void 0||!isFinite(e.rawday)&&new Date(e.date.getFullYear(),isFinite(e.rawmonth)?e.month:e.date.getMonth()+1,0).getDate()>=e.day||e.day==`29`&&(!isFinite(e.rawyear)||e.rawyear===void 0||e.rawyear===``)||new Date(e.date.getFullYear(),isFinite(e.rawmonth)?e.month:e.date.getMonth()+1,0).getDate()>=e.day)return t;if(e.day==`29`){let e=D.call(r,t.pos,n,r.maskset);if(e.targetMatch&&[`yyyy`,`YYYY`].includes(e.targetMatch[0])&&t.pos-e.targetMatchIndex===2)return t.remove=t.pos+1,t}else if(e.date.getMonth()==2&&e.day==`30`&&t.c!==void 0)return e.day=`03`,e.date.setDate(3),e.date.setMonth(1),t.insert=[{pos:t.pos,c:`0`},{pos:t.pos+1,c:t.c}],t.caret=o.seekNext.call(this,t.pos+1),t;return!1}function w(e,t,n,r,i){if(!t)return t;if(t&&n.min&&!isNaN(n.min.date.getTime())){let i;for(e.reset(),x(n).lastIndex=0;i=x(n).exec(n.inputFormat);){var a;if((a=b(i[0]))&&a[3]){let t=a[1],o=e[a[2]],s=n.min[a[2]],c=n.max?n.max[a[2]]:s+1,l=[],u=!1;for(let t=0;t<s.length;t++)r.validPositions[t+i.index]===void 0&&!u?(t+i.index==0&&o[t]<s[t]?(l[t]=o[t],u=!0):l[t]=s[t],a[2]===`year`&&o.length-1==t&&s!=c&&(l=(parseInt(l.join(``))+1).toString().split(``)),a[2]===`ampm`&&s!=c&&n.min.date.getTime()>e.date.getTime()&&(l[t]=c[t])):(l[t]=o[t],u||=o[t]>s[t]);t.call(e._date,l.join(``))}}t=n.min.date.getTime()<=e.date.getTime(),e.reInit()}return t&&n.max&&(isNaN(n.max.date.getTime())||(t=n.max.date.getTime()>=e.date.getTime())),t}function T(e,t,n){let i=``,a,o,s=0,c=!1,l={};for(x(n).lastIndex=0;a=x(n).exec(e);)if(a[0]===n.escapeChar)c=!0;else{if(t===void 0)if(!c&&(o=b(a[0])))i+=`(`+o[0]+`)`,n.placeholder&&n.placeholder!==``?(l[s]=n.placeholder[a.index%n.placeholder.length],l[`${a.index}'${n.placeholder[a.index%n.placeholder.length]}`]=a[0].charAt(0)):l[s]=a[0].charAt(0);else switch(a[0]){case`[`:i+=`(`;break;case`]`:i+=`)?`;break;default:i+=(0,r.escapeRegex)(a[0]),l[s]=a[0].charAt(0)}else if(!c&&(o=b(a[0])))if(o[3]){let e=o[3];i+=e.call(t.date)}else o[2]&&t[`raw`+o[2]]!==void 0?i+=t[`raw`+o[2]]:i+=a[0];else i+=a[0];s++,c=!1}return t===void 0&&(n.placeholder=l),i}function E(e,t,n){for(e=String(e),t||=2;e.length<t;)e=n?e+`0`:`0`+e;return e}function ee(e,t,n){let r=this;if(typeof e==`string`)return new u(e,t,n,r);if(e&&typeof e==`object`&&Object.prototype.hasOwnProperty.call(e,`date`))return e}function te(e,t){return T(t.inputFormat,{date:e},t)}function D(e,t,n){let r=this,i=0,a,o,c=0;for(x(t).lastIndex=0;o=x(t).exec(t.inputFormat);){let l=/\d+$/.exec(o[0]);if(l)c=parseInt(l[0]);else{let e=o[0][0],n=i;for(;r&&(t.placeholder[`${o.index}'${s.getTest.call(r,n).match.placeholder}`]||s.getTest.call(r,n).match.placeholder)===e;)n++;c=n-i,c===0&&(c=o[0].length)}if(i+=c,i>=e+1){let r=``;if(n&&n.tests[e]){let a=Object.keys(t.placeholder).filter(t=>{for(let r=o.index-1;r<i;r++)if(t===`${r}'${n.tests[e][0].match.placeholder}`)return!0;return!1});r=a.length>0?t.placeholder[a[0]]:n.tests[e][0].match.placeholder}if(o[0].indexOf(r)!==-1){a=o,o=x(t).exec(t.inputFormat);break}}}return{targetMatchIndex:i-c,nextMatch:o,targetMatch:a}}i.default.extendAliases({datetime:{mask:function(e){if(e.numericInput=!1,m.S=p.ordinalSuffix.join(`|`),e.inputFormat=g[e.inputFormat]||e.inputFormat,e.repeat&&(e.repeat=parseInt(e.repeat.toString()),e.repeat>0)){let t=``;for(let n=0;n<e.repeat;n++)t+=e.inputFormat;e.inputFormat=t,e.repeat=0}return e.displayFormat=g[e.displayFormat]||e.displayFormat||e.inputFormat,e.outputFormat=g[e.outputFormat]||e.outputFormat||e.inputFormat,e.regex=T(e.inputFormat,void 0,e),e.min=ee(e.min,e.inputFormat,e),e.max=ee(e.max,e.inputFormat,e),null},placeholder:``,inputFormat:`isoDateTime`,displayFormat:null,outputFormat:null,min:null,max:null,skipOptionalPartCharacter:``,preValidation:function(e,t,n,r,i,a,o,s){let c=this;if(s)return!0;if(isNaN(n)&&e[t]!==n){let r=D.call(c,t,i,a);if(r.nextMatch&&r.nextMatch[0]===n&&r.targetMatch[0].length>1){let n=b(r.targetMatch[0])[0];if(new RegExp(n).test(`0`+e[t-1]))return e[t]=e[t-1],e[t-1]=`0`,{fuzzy:!0,buffer:e,refreshFromBuffer:{start:t-1,end:t+1},pos:t+1}}}return!0},postValidation:function(e,t,n,r,i,a,o,c){let l=this;if(o)return!0;let u,d;if(r===!1&&(u=D.call(l,t+1,i,a),u.targetMatch&&u.targetMatchIndex===t&&u.targetMatch[0].length>1&&b(u.targetMatch[0])!==void 0?d=b(u.targetMatch[0])[0]:(u=D.call(l,t+2,i,a),u.targetMatch&&u.targetMatchIndex===t+1&&u.targetMatch[0].length>1&&b(u.targetMatch[0])!==void 0&&(d=b(u.targetMatch[0]))),d!==void 0&&(t=u.targetMatchIndex,a.validPositions[t+1]!==void 0&&new RegExp(d).test(n+`0`)?(e[t]=n,e[t+1]=`0`,r={pos:t+2,caret:t+1}):new RegExp(d).test(`0`+n)&&(e[t]=`0`,e[t+1]=n,r={pos:t+2})),r===!1))return r;if(r.fuzzy&&(e=r.buffer,t=r.pos),u=D.call(l,t,i,a),u.targetMatch&&u.targetMatch[0]&&b(u.targetMatch[0])!==void 0){let n=b(u.targetMatch[0]);d=n[0];let r=e.slice(u.targetMatchIndex,u.targetMatchIndex+u.targetMatch[0].length);if(new RegExp(d).test(r.join(``))===!1&&u.targetMatch[0].length===2&&a.validPositions[u.targetMatchIndex]&&a.validPositions[u.targetMatchIndex+1]&&(a.validPositions[u.targetMatchIndex+1].input=`0`),n[2]==`year`){let n=s.getMaskTemplate.call(l,!1,1,void 0,!0);for(let r=t+1;r<e.length;r++)e[r]=n[r],a.validPositions.splice(t+1,1)}}let f=r,p=ee.call(l,e.join(``),i.inputFormat,i);return f&&!isNaN(p.date.getTime())&&(i.prefillYear&&(f=S(p,f,i)),f=C.call(l,p,f,i),f=w(p,f,i,a,c)),t!==void 0&&f&&r.pos!==t?{buffer:T(i.inputFormat,p,i).split(``),refreshFromBuffer:{start:t,end:r.pos},pos:r.caret===void 0?r.pos:r.caret}:f},onKeyDown:function(e,t,n,r){let i=this;e.ctrlKey&&e.key===a.keys.ArrowRight&&(i.inputmask._valueSet(te(new Date,r)),l(i).trigger(`setvalue`))},onUnMask:function(e,t,n){let r=this;return t&&T(n.outputFormat,ee.call(r,e,n.inputFormat,n),n)},casing:`follow`,onBeforeMask:function(e,t){return Object.prototype.toString.call(e)===`[object Date]`&&(e=te(e,t)),e},insertMode:!1,insertModeVisual:!1,shiftPositions:!1,keepStatic:!1,inputmode:`numeric`,prefillYear:!0}})}),(function(e,t,n){var r=i(n(7));function i(e){return e&&e.__esModule?e:{default:e}}r.default.dependencyLib.extend(!0,r.default.prototype.i18n,{dayNames:[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`,`Sun`,`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`,`Sunday`],monthNames:[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`,`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`],ordinalSuffix:[`st`,`nd`,`rd`,`th`]})}),(function(e,t,n){var r=n(25),i=s(n(7)),a=n(19),o=n(20);function s(e){return e&&e.__esModule?e:{default:e}}let c=i.default.dependencyLib;function l(e,t){let n=``;for(let r=0;r<e.length;r++)i.default.prototype.definitions[e.charAt(r)]||t.definitions[e.charAt(r)]||t.optionalmarker[0]===e.charAt(r)||t.optionalmarker[1]===e.charAt(r)||t.quantifiermarker[0]===e.charAt(r)||t.quantifiermarker[1]===e.charAt(r)||t.groupmarker[0]===e.charAt(r)||t.groupmarker[1]===e.charAt(r)||t.alternatormarker===e.charAt(r)?n+=`\\`+e.charAt(r):n+=e.charAt(r);return n}function u(e,t,n,r){if(e.length>0&&t>0&&(!n.digitsOptional||r)){var i=e.indexOf(n.radixPoint),a=!1;n.negationSymbol.back===e[e.length-1]&&(a=!0,e.length--),i===-1&&(e.push(n.radixPoint),i=e.length-1);for(let n=1;n<=t;n++)isFinite(e[i+n])||(e[i+n]=`0`)}return a&&e.push(n.negationSymbol.back),e}function d(e,t){let n=0;e===`+`&&(n=o.seekNext.call(this,t.validPositions.length-1));for(let r in t.tests)if(r=parseInt(r),r>=n){for(let n=0,i=t.tests[r].length;n<i;n++)if((t.validPositions[r]===void 0||e===`-`)&&t.tests[r][n].match.def===e)return r+ +(t.validPositions[r]!==void 0&&e!==`-`)}return n}function f(e,t){let n=-1;for(let r=0,i=t.validPositions.length;r<i;r++){let i=t.validPositions[r];if(i&&i.match.def===e){n=r;break}}return n}function p(e){e.parseMinMaxOptions===void 0&&(e.min!==null&&(e.min=e.min.toString().replace(new RegExp((0,r.escapeRegex)(e.groupSeparator),`g`),``),e.radixPoint===`,`&&(e.min=e.min.replace(e.radixPoint,`.`)),e.min=isFinite(e.min)?parseFloat(e.min):NaN,isNaN(e.min)&&(e.min=Number.MIN_VALUE)),e.max!==null&&(e.max=e.max.toString().replace(new RegExp((0,r.escapeRegex)(e.groupSeparator),`g`),``),e.radixPoint===`,`&&(e.max=e.max.replace(e.radixPoint,`.`)),e.max=isFinite(e.max)?parseFloat(e.max):NaN,isNaN(e.max)&&(e.max=Number.MAX_VALUE)),e.parseMinMaxOptions=`done`)}function m(e){e.repeat=0,e.groupSeparator===e.radixPoint&&e.digits&&e.digits!==`0`&&(e.radixPoint===`.`?e.groupSeparator=`,`:e.radixPoint===`,`?e.groupSeparator=`.`:e.groupSeparator=``),e.groupSeparator===` `&&(e.skipOptionalPartCharacter=void 0),e.placeholder.length>1&&(e.placeholder=e.placeholder.charAt(0)),e.positionCaretOnClick===`radixFocus`&&e.placeholder===``&&(e.positionCaretOnClick=`lvp`);let t=`0`,n=e.radixPoint;e.numericInput===!0&&e.__financeInput===void 0?(t=`1`,e.positionCaretOnClick=e.positionCaretOnClick===`radixFocus`?`lvp`:e.positionCaretOnClick,e.digitsOptional=!1,isNaN(e.digits)&&(e.digits=e.digits.indexOf(`,`)===-1?2:e.digits.split(`,`)[0]),e._radixDance=!1,n=e.radixPoint===`,`?`?`:`!`,e.radixPoint!==``&&e.definitions[n]===void 0&&(e.definitions[n]={},e.definitions[n].validator=`[`+e.radixPoint+`]`,e.definitions[n].placeholder=e.radixPoint,e.definitions[n].static=!0,e.definitions[n].generated=!0)):(e.__financeInput=!1,e.numericInput=!0);let r=`[+]`,i;if(r+=l(e.prefix,e),e.groupSeparator===``?r+=`9{+}`:(e.definitions[e.groupSeparator]===void 0&&(e.definitions[e.groupSeparator]={},e.definitions[e.groupSeparator].validator=`[`+e.groupSeparator+`]`,e.definitions[e.groupSeparator].placeholder=e.groupSeparator,e.definitions[e.groupSeparator].static=!0,e.definitions[e.groupSeparator].generated=!0),r+=e._mask(e)),e.digits!==void 0&&e.digits!==0){let a=e.digits.toString().split(`,`);isFinite(a[0])&&a[1]&&isFinite(a[1])?r+=n+t+`{`+e.digits+`}`:(isNaN(e.digits)||parseInt(e.digits)>0)&&(e.digitsOptional||e.jitMasking?(i=r+n+t+`{0,`+e.digits+`}`,e.keepStatic=!0):r+=n+t+`{`+e.digits+`}`)}else e.inputmode=`numeric`;return r+=l(e.suffix,e),r+=`[-]`,i&&(r=[i+l(e.suffix,e)+`[-]`,r]),e.greedy=!1,p(e),e.radixPoint!==``&&e.substituteRadixPoint&&(e.substitutes[e.radixPoint==`.`?`,`:`.`]=e.radixPoint),r}function h(e,t,n,r,i){return i._radixDance&&i.numericInput&&t!==i.negationSymbol.back&&e<=n&&(n>0||t==i.radixPoint)&&(r.validPositions[e-1]===void 0||r.validPositions[e-1].input!==i.negationSymbol.back)&&--e,e}function g(e,t,n,r,i){let a=t.buffer?t.buffer.indexOf(i.radixPoint):-1,o=(a!==-1||r&&i.jitMasking)&&new RegExp(i.definitions[9].validator).test(e);return!r&&i._radixDance&&a!==-1&&o&&t.validPositions[a]==null?{insert:{pos:a===n?a+1:a,c:i.radixPoint},pos:n}:o}function _(e,t){let n=RegExp(`(^`+(t.negationSymbol.front===``?``:(0,r.escapeRegex)(t.negationSymbol.front)+`?`)+(0,r.escapeRegex)(t.prefix)+`)(.*)(`+(0,r.escapeRegex)(t.suffix)+(t.negationSymbol.back==``?``:(0,r.escapeRegex)(t.negationSymbol.back)+`?`)+`$)`).exec(e.slice().reverse().join(``)),i=n?n[2]:``,a=!1;return i&&(i=i.split(t.radixPoint.charAt(0))[0],a=RegExp(`^[0`+t.groupSeparator+`]*`).exec(i)),a&&(a[0].length>1||a[0].length>0&&a[0].length<i.length)?a:!1}i.default.extendAliases({numeric:{mask:m,_mask:function(e){return`(`+e.groupSeparator+`999){+|1}`},digits:`*`,digitsOptional:!0,enforceDigitsOnBlur:!1,radixPoint:`.`,positionCaretOnClick:`radixFocus`,_radixDance:!0,groupSeparator:``,allowMinus:!0,negationSymbol:{front:`-`,back:``},prefix:``,suffix:``,min:null,max:null,SetMaxOnOverflow:!1,step:1,inputType:`text`,unmaskAsNumber:!1,roundingFN:Math.round,inputmode:`decimal`,shortcuts:{k:`1000`,m:`1000000`},placeholder:`0`,greedy:!1,rightAlign:!0,insertMode:!0,autoUnmask:!1,skipOptionalPartCharacter:``,usePrototypeDefinitions:!1,stripLeadingZeroes:!0,substituteRadixPoint:!0,definitions:{0:{validator:g},1:{validator:g,definitionSymbol:`9`},9:{validator:`[0-9０-９٠-٩۰-۹]`,definitionSymbol:`*`},"+":{validator:function(e,t,n,r,i){return i.allowMinus&&(e===`-`||e===i.negationSymbol.front)}},"-":{validator:function(e,t,n,r,i){return i.allowMinus&&e===i.negationSymbol.back}}},preValidation:function(e,t,n,r,i,a,o,s){let c=this;if(i.__financeInput!==!1&&n===i.radixPoint)return!1;let l=e.indexOf(i.radixPoint),u=t;if(t=h(t,n,l,a,i),n===`-`||n===i.negationSymbol.front){if(i.allowMinus!==!0)return!1;let e=!1,t=f(`+`,a),n=f(`-`,a);return t!==-1&&(e=[t],n!==-1&&e.push(n)),e===!1?{insert:[{pos:d.call(c,`+`,a),c:i.negationSymbol.front,fromIsValid:!0},{pos:d.call(c,`-`,a),c:i.negationSymbol.back,fromIsValid:void 0}],caret:u+i.negationSymbol.back.length}:{remove:e,caret:u-i.negationSymbol.back.length}}if(n===i.groupSeparator)return{caret:u};if(s)return!0;if(l!==-1&&i._radixDance===!0&&r===!1&&n===i.radixPoint&&i.digits!==void 0&&(isNaN(i.digits)||parseInt(i.digits)>0)&&l!==t){let e=d.call(c,i.radixPoint,a);return a.validPositions[e]&&(a.validPositions[e].generatedInput=a.validPositions[e].generated||!1),{caret:i._radixDance&&t===l-1?l+1:l}}if(i.__financeInput===!1)if(r){if(i.digitsOptional)return{rewritePosition:o.end};if(!i.digitsOptional){if(o.begin>l&&o.end<=l)return n===i.radixPoint?{insert:{pos:l+1,c:`0`,fromIsValid:!0},rewritePosition:l}:{rewritePosition:l+1};if(o.begin<l)return{rewritePosition:o.begin-1}}}else{if(!i.showMaskOnHover&&!i.showMaskOnFocus&&!i.digitsOptional&&i.digits>0&&this.__valueGet.call(this.el)===``)return{rewritePosition:l};if(t>=e.length-i.prefix.length&&i.radixPoint!==``){let e=new RegExp(i.definitions[9].validator);if(!a.validPositions.some(t=>t&&!t.generatedInput&&e.test(t.input)))return{rewritePosition:l===-1?0:l}}}return{rewritePosition:t}},postValidation:function(e,t,n,r,i,a,o,s,l){if(r===!1)return r;if(o)return!0;if(i.min!==null||i.max!==null){let t=i.onUnMask(e.slice().reverse().join(``),void 0,c.extend({},i,{unmaskAsNumber:!0}));if(i.min!==null&&t<i.min&&l!==!0&&(t.toString().length>i.min.toString().length||e[0]===i.radixPoint||t<0))return!1;if(i.max!==null&&i.max>=0&&t>i.max)return i.SetMaxOnOverflow?{refreshFromBuffer:!0,buffer:u(i.max.toString().replace(`.`,i.radixPoint).split(``),i.digits,i).reverse()}:!1}return r},onUnMask:function(e,t,n){if(t===``&&n.nullable===!0)return t;let i=e.replace(n.prefix,``);return i=i.replace(n.suffix,``),i=i.replace(new RegExp((0,r.escapeRegex)(n.groupSeparator),`g`),``),n.placeholder.charAt(0)!==``&&(i=i.replace(new RegExp(n.placeholder.charAt(0),`g`),`0`)),n.unmaskAsNumber?(n.radixPoint!==``&&i.indexOf(n.radixPoint)!==-1&&(i=i.replace(r.escapeRegex.call(this,n.radixPoint),`.`)),i=i.replace(RegExp(`^`+(0,r.escapeRegex)(n.negationSymbol.front)),`-`),i=i.replace(RegExp((0,r.escapeRegex)(n.negationSymbol.back)+`$`),``),Number(i)):i},isComplete:function(e,t){let n=(t.numericInput?e.slice().reverse():e).join(``);return n=n.replace(RegExp(`^`+(0,r.escapeRegex)(t.negationSymbol.front)),`-`),n=n.replace(RegExp((0,r.escapeRegex)(t.negationSymbol.back)+`$`),``),n=n.replace(t.prefix,``),n=n.replace(t.suffix,``),n=n.replace(RegExp((0,r.escapeRegex)(t.groupSeparator)+`([0-9]{3})`,`g`),`$1`),t.radixPoint===`,`&&(n=n.replace((0,r.escapeRegex)(t.radixPoint),`.`)),isFinite(n)},onBeforeMask:function(e,t){e??=``;let n=t.radixPoint||`,`;isFinite(t.digits)&&(t.digits=parseInt(t.digits)),(typeof e==`number`||t.inputType===`number`)&&n!==``&&(e=e.toString().replace(`.`,n));let i=e.charAt(0)===`-`||e.charAt(0)===t.negationSymbol.front,a=e.split(n),o=a[0].replace(/[^\-0-9]/g,``),s=a.length>1?a[1].replace(/[^0-9]/g,``):``,c=a.length>1;e=o+(s===``?s:n+s);let l=0;if(n!==``&&(l=t.digitsOptional?t.digits<s.length?t.digits:s.length:t.digits,s!==``||!t.digitsOptional)){let i=10**(l||1);e=e.replace((0,r.escapeRegex)(n),`.`),isNaN(parseFloat(e))||(e=(t.roundingFN(parseFloat(e)*i)/i).toFixed(l)),e=e.toString().replace(`.`,n)}if(t.digits===0&&e.indexOf(n)!==-1&&(e=e.substring(0,e.indexOf(n))),e!==``&&(t.min!==null||t.max!==null)){let r=e.toString().replace(n,`.`);t.min!==null&&r<t.min?e=t.min.toString().replace(`.`,n):t.max!==null&&r>t.max&&(e=t.max.toString().replace(`.`,n))}return i&&e.charAt(0)!==`-`&&(e=`-`+e),u(e.toString().split(``),l,t,c).join(``)},onBeforeWrite:function(e,t,n,i){function a(e,t){if(i.__financeInput!==!1||t){var n=e.indexOf(i.radixPoint);n!==-1&&e.splice(n,1)}if(i.groupSeparator!==``)for(;(n=e.indexOf(i.groupSeparator))!==-1;)e.splice(n,1);return e}let o,s;if(i.stripLeadingZeroes&&(s=_(t,i))){let e=t.join(``).lastIndexOf(s[0].split(``).reverse().join(``))-(s[0]==s.input?0:1),n=+(s[0]==s.input);for(let r=s[0].length-n;r>0;r--)this.maskset.validPositions.splice(e+r,1),delete t[e+r]}if(e)switch(e.type){case`blur`:case`checkval`:if(i.min!==null||i.max!==null){let e=i.onUnMask(t.slice().reverse().join(``),void 0,c.extend({},i,{unmaskAsNumber:!0}));if(i.min!==null&&e<i.min&&t.join()!==``)return{refreshFromBuffer:!0,buffer:u(i.min.toString().replace(`.`,i.radixPoint).split(``),i.digits,i).reverse()};if(i.max!==null&&e>i.max)return{refreshFromBuffer:!0,buffer:u(i.max.toString().replace(`.`,i.radixPoint).split(``),i.digits,i).reverse()}}if(t[t.length-1]===i.negationSymbol.front){let e=RegExp(`(^`+(i.negationSymbol.front==``?``:(0,r.escapeRegex)(i.negationSymbol.front)+`?`)+(0,r.escapeRegex)(i.prefix)+`)(.*)(`+(0,r.escapeRegex)(i.suffix)+(i.negationSymbol.back==``?``:(0,r.escapeRegex)(i.negationSymbol.back)+`?`)+`$)`).exec(a(t.slice(),!0).reverse().join(``));(e?e[2]:``)==0&&(o={refreshFromBuffer:!0,buffer:[0]})}else i.radixPoint!==``&&t.indexOf(i.radixPoint)===i.suffix.length&&(o&&o.buffer?o.buffer.splice(0,1+i.suffix.length):(t.splice(0,1+i.suffix.length),o={refreshFromBuffer:!0,buffer:a(t)}));if(i.enforceDigitsOnBlur){o||={};let e=(o&&o.buffer||t).slice().reverse();o.refreshFromBuffer=!0,o.buffer=u(e,i.digits,i,!0).reverse()}}return o},onKeyDown:function(e,t,n,r){let i=c(this),o;if(e.location!=3){let t,n=e.key;if((t=r.shortcuts&&r.shortcuts[n])&&t.length>1)return this.inputmask.__valueSet.call(this,parseFloat(this.inputmask.unmaskedvalue())*parseInt(t)),i.trigger(`setvalue`),!1}if(e.ctrlKey)switch(e.key){case a.keys.ArrowUp:return this.inputmask.__valueSet.call(this,parseFloat(this.inputmask.unmaskedvalue())+parseInt(r.step)),i.trigger(`setvalue`),!1;case a.keys.ArrowDown:return this.inputmask.__valueSet.call(this,parseFloat(this.inputmask.unmaskedvalue())-parseInt(r.step)),i.trigger(`setvalue`),!1}if(!e.shiftKey&&(e.key===a.keys.Delete||e.key===a.keys.Backspace||e.key===a.keys.BACKSPACE_SAFARI)&&n.begin!==t.length){if(t[e.key===a.keys.Delete?n.begin-1:n.end]===r.negationSymbol.front)return o=t.slice().reverse(),r.negationSymbol.front!==``&&o.shift(),r.negationSymbol.back!==``&&o.pop(),i.trigger(`setvalue`,[o.join(``),n.begin]),!1;if(r._radixDance===!0){let s=t.indexOf(r.radixPoint);if(!r.digitsOptional){if(s!==-1&&(n.begin<s||n.end<s||e.key===a.keys.Delete&&(n.begin===s||n.begin-1===s))){let l;return n.begin===n.end&&(e.key===a.keys.Backspace||e.key===a.keys.BACKSPACE_SAFARI?n.begin++:e.key===a.keys.Delete&&n.begin-1===s&&(l=c.extend({},n),n.begin--,n.end--)),o=t.slice().reverse(),o.splice(o.length-n.begin,n.begin-n.end||1),(e.key===a.keys.Backspace||e.key===a.keys.BACKSPACE_SAFARI)&&o.splice(o.length-n.end+1,0,`0`),o=u(o,r.digits,r).join(``),l&&(n=l),i.trigger(`setvalue`,[o,n.begin>=o.length?s+1:n.begin]),!1}}else if(s===0)return o=t.slice().reverse(),o.pop(),i.trigger(`setvalue`,[o.join(``),n.begin>=o.length?o.length:n.begin]),!1}}}},currency:{prefix:``,groupSeparator:`,`,alias:`numeric`,digits:2,digitsOptional:!1},decimal:{alias:`numeric`},integer:{alias:`numeric`,inputmode:`numeric`,digits:0},percentage:{alias:`numeric`,min:0,max:100,suffix:` %`,digits:0,allowMinus:!1},indianns:{alias:`numeric`,_mask:function(e){return`(`+e.groupSeparator+`99){*|1}(`+e.groupSeparator+`999){1|1}`},groupSeparator:`,`,radixPoint:`.`,placeholder:`0`,digits:2,digitsOptional:!1}})}),(function(e,t,n){var r=a(n(11)),i=a(n(7));function a(e){return e&&e.__esModule?e:{default:e}}let o=r.default.document;if(o&&o.head&&o.head.attachShadow&&r.default.customElements&&r.default.customElements.get(`input-mask`)===void 0){class e extends HTMLElement{constructor(){super();let e=this.getAttributeNames(),t=this.attachShadow({mode:`closed`});this.input=o.createElement(`input`),this.input.type=`text`,t.appendChild(this.input);for(let t in e)Object.prototype.hasOwnProperty.call(e,t)&&this.input.setAttribute(e[t],this.getAttribute(e[t]));let n=new i.default;n.dataAttribute=``,n.mask(this.input)}attributeChangedCallback(e,t,n){this.input.setAttribute(e,n)}get value(){return this.input.value}set value(e){this.input.value=e}}r.default.customElements.define(`input-mask`,e)}})],t={};function n(r){var i=t[r];if(i!==void 0)return i.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}var r={};return(function(){var e=r;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n(1),n(2),n(3),n(4),n(5),n(6),n(27),n(29),n(30);var t=i(n(7));function i(e){return e&&e.__esModule?e:{default:e}}e.default=t.default})(),r})()})}))(),1),ss=os.default.default||os.default;function cs(e,t){let n={minimumFractionDigits:2,maximumFractionDigits:2},r=[[e,{style:`currency`,currency:t}],[e,n],[void 0,n]];for(let[e,t]of r){let n;try{n=new Intl.NumberFormat(e,t)}catch{continue}let r=n.formatToParts(12345.6);return{currency:r.find(({type:e})=>e===`currency`)?.value??``,decimal:r.find(({type:e})=>e===`decimal`)?.value??`.`,group:r.find(({type:e})=>e===`group`)?.value??`,`,decimals:n.resolvedOptions().maximumFractionDigits??2}}return{currency:``,decimal:`.`,group:`,`,decimals:2}}var ls=new WeakMap,us=new WeakSet,ds=new WeakMap,fs=new WeakMap,ps=class extends pe{static get styles(){return[...super.styles,a`
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
      `]}constructor(){super(),O(this,us),this.currency=`USD`,this.locale=`en-US`,this.showCurrency=!0,this.clearable=!0,this.type=`text`,M(this,ls,void 0),M(this,ds,e=>{let t=e.target,{value:n,selectionStart:r,selectionEnd:i}=t;e.key!==`-`||t.readOnly||t.disabled||e.ctrlKey||e.metaKey||e.altKey||r!==0||!i||!n.startsWith(`-`)||(t.value=n.slice(i),t.setSelectionRange(0,0))}),M(this,fs,()=>{this.value=``,j(us,this,ms).call(this)?.inputmask?.setValue(``),j(us,this,ms).call(this)?.focus()}),this.inputMode=`decimal`}connectedCallback(){super.connectedCallback(),this.hasUpdated&&j(us,this,hs).call(this)}willUpdate(e){super.willUpdate(e),(!this.hasUpdated||e.has(`locale`)||e.has(`currency`))&&A(ls,this,cs(this.locale.replaceAll(`_`,`-`),this.currency))}updated(e){super.updated(e),(e.has(`currency`)||e.has(`locale`)||e.has(`decimals`)||e.has(`decimalSeparator`)||e.has(`groupSeparator`)||e.has(`placeholder`))&&j(us,this,hs).call(this),j(us,this,ms).call(this)?.classList.toggle(`money-placeholder`,!j(us,this,gs).call(this))}disconnectedCallback(){j(us,this,ms).call(this)?.inputmask?.remove(),super.disconnectedCallback()}_inputGroupPrefixTemplate(){return this.showCurrency?p`<div class="input-group__prefix">
      <span class="currency"
        >${`(${this.currency}) ${k(ls,this).currency}`}</span
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
        ?hidden=${!this.clearable||this.disabled||!j(us,this,gs).call(this)}
        @mousedown=${e=>e.preventDefault()}
        @click=${k(fs,this)}
      >
        <craft-icon name="xmark-large"></craft-icon>
      </craft-button>
    </div>`}};function ms(){return this._control}function hs(){let e=j(us,this,ms).call(this);if(!e)return;let t=this.value,n=k(ls,this);e.inputmask?.remove(),e.addEventListener(`keydown`,k(ds,this),!0),e.value=t,new ss({alias:`currency`,autoGroup:!1,clearMaskOnLostFocus:!0,digits:this.decimals??n.decimals,digitsOptional:!1,groupSeparator:this.groupSeparator??n.group,placeholder:this.placeholder||`0`,prefix:``,radixPoint:this.decimalSeparator??n.decimal}).mask(e)}function gs(){return this.value!==``}r([c()],ps.prototype,`currency`,void 0),r([c()],ps.prototype,`locale`,void 0),r([c({type:Number})],ps.prototype,`decimals`,void 0),r([c({attribute:`decimal-separator`})],ps.prototype,`decimalSeparator`,void 0),r([c({attribute:`group-separator`})],ps.prototype,`groupSeparator`,void 0),r([c({converter:Po,attribute:`show-currency`})],ps.prototype,`showCurrency`,void 0),r([c({converter:Po})],ps.prototype,`clearable`,void 0),customElements.get(`craft-input-money`)||customElements.define(`craft-input-money`,ps);var _s=new WeakSet,vs=class extends pe{static get styles(){return[...super.styles,a`
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

        /* This positioned suffix has nothing to stretch against, so it needs its own minimum. */
        :host(:not([inline-suffix])) ::slotted(craft-button[slot='suffix']) {
          min-height: var(--c-size-touch-target-sm);
        }

        ::slotted(.form-control) {
          ${de}
          --_input-end-end-radius: var(
            --c-input-radius,
            var(--c-radius-sm)
          ) !important;
          --_input-start-end-radius: var(
            --c-input-radius,
            var(--c-radius-sm)
          ) !important;
        }
      `]}constructor(){super(),O(this,_s),this.passwordRules=``,this._visible=!1,this.type=`password`,this.reveal=()=>{this._visible=!this._visible,this.type=this._visible?`text`:`password`},this.renderSuffix=()=>p`<craft-button
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
    </craft-button>`,this.type=`password`}connectedCallback(){super.connectedCallback(),j(_s,this,ys).call(this)}updated(e){super.updated(e),e.has(`passwordRules`)&&j(_s,this,ys).call(this)}get slots(){return{...super.slots,suffix:()=>this.renderSuffix()}}};function ys(){if(this.passwordRules){this._control?.setAttribute(`passwordrules`,this.passwordRules);return}this._control?.removeAttribute(`passwordrules`)}r([c({attribute:`passwordrules`})],vs.prototype,`passwordRules`,void 0),r([f()],vs.prototype,`_visible`,void 0),customElements.get(`craft-input-password`)||customElements.define(`craft-input-password`,vs);function bs(e,t){let n=t.left>e.x?t.left:t.right<e.x?t.right:void 0;if(!(n===void 0||t.height<=0))return[e,{x:n,y:t.top},{x:n,y:t.bottom}]}function xs(e,t,n){return(e.x-n.x)*(t.y-n.y)-(t.x-n.x)*(e.y-n.y)}function Ss([e,t,n],r){let i=xs(r,e,t),a=xs(r,t,n),o=xs(r,n,e);return!((i<0||a<0||o<0)&&(i>0||a>0||o>0))}var Cs=new WeakMap,ws=new WeakMap,Ts=new WeakMap,Es=new WeakMap,Ds=new WeakMap,Os=new WeakMap,z=new WeakSet,ks=new WeakMap,As=class{constructor(e){O(this,z),M(this,Cs,new Map),M(this,ws,!1),M(this,Ts,void 0),M(this,Es,void 0),M(this,Ds,void 0),M(this,Os,void 0),M(this,ks,e=>{A(Es,this,{x:e.clientX,y:e.clientY}),k(Ds,this)&&j(z,this,Is).call(this)}),this.options=e}get warm(){return k(ws,this)}requestOpen(e,{immediate:t=!1}={}){let n=j(z,this,js).call(this,e);if(j(z,this,Ls).call(this),clearTimeout(n.closeTimer),n.closeTimer=void 0,n.exit=void 0,k(Ds,this)?.element.contains(e.element)&&A(Ds,this,void 0),!t&&j(z,this,Ps).call(this,e)){A(Ds,this,e);return}if(j(z,this,Ms).call(this,e),!(n.open||!t&&n.openTimer!==void 0)){if(t||k(ws,this)){clearTimeout(n.openTimer),n.openTimer=void 0,j(z,this,Rs).call(this,e,n);return}n.openTimer=setTimeout(()=>{n.openTimer=void 0,j(z,this,Rs).call(this,e,n)},this.options.warmUpDelay)}}requestClose(e){let t=j(z,this,js).call(this,e);clearTimeout(t.openTimer),t.openTimer=void 0,k(Ds,this)===e&&A(Ds,this,void 0),!(!t.open||t.closeTimer!==void 0)&&(t.exit=k(Es,this)&&{...k(Es,this),at:Date.now()},j(z,this,Fs).call(this,e,t))}notifyClosed(e){let t=j(z,this,js).call(this,e);clearTimeout(t.openTimer),clearTimeout(t.closeTimer),t.openTimer=void 0,t.closeTimer=void 0,t.open&&(t.open=!1,j(z,this,Bs).call(this))}remove(e){let t=k(Cs,this).get(e);t&&(clearTimeout(t.openTimer),clearTimeout(t.closeTimer),k(Cs,this).delete(e),k(Ds,this)===e&&A(Ds,this,void 0),j(z,this,Bs).call(this))}reset(){for(let[e,t]of k(Cs,this))clearTimeout(t.openTimer),clearTimeout(t.closeTimer),t.open&&e.setOpen(!1);k(Cs,this).clear(),clearTimeout(k(Ts,this)),A(Ts,this,void 0),A(ws,this,!1),A(Ds,this,void 0),A(Es,this,void 0),k(Os,this)?.abort(),A(Os,this,void 0)}};function js(e){let t=k(Cs,this).get(e);return t||(t={open:!1},k(Cs,this).set(e,t)),t}function Ms(e){for(let[t,n]of k(Cs,this))t===e||!n.open||t.element.contains(e.element)||(clearTimeout(n.closeTimer),n.closeTimer=void 0,j(z,this,zs).call(this,t,n))}function Ns(e,t){let{exit:n}=t,r=k(Es,this);if(!n||!r||Date.now()-n.at>=this.options.graceDelay)return!1;let i=e.overlayRect?.(),a=i&&bs(n,i);return!!a&&Ss(a,r)}function Ps(e){for(let[t,n]of k(Cs,this))if(!(t===e||!n.open||t.element.contains(e.element))&&j(z,this,Ns).call(this,t,n))return!0;return!1}function Fs(e,t){t.closeTimer=setTimeout(()=>{if(t.closeTimer=void 0,j(z,this,Ns).call(this,e,t)){j(z,this,Fs).call(this,e,t);return}j(z,this,zs).call(this,e,t),j(z,this,Is).call(this)},this.options.closeDelay)}function Is(){let e=k(Ds,this);A(Ds,this,void 0),e&&this.requestOpen(e)}function Ls(){k(Os,this)||(A(Os,this,new AbortController),document.addEventListener(`pointermove`,k(ks,this),{capture:!0,passive:!0,signal:k(Os,this).signal}))}function Rs(e,t){t.open=!0,clearTimeout(k(Ts,this)),A(Ts,this,void 0),A(ws,this,!0),e.setOpen(!0)}function zs(e,t){t.open=!1,t.exit=void 0,e.setOpen(!1),j(z,this,Bs).call(this)}function Bs(){if(!(!k(ws,this)||k(Ts,this)!==void 0)){for(let e of k(Cs,this).values())if(e.open||e.openTimer!==void 0)return;A(Ts,this,setTimeout(()=>{A(Ts,this,void 0),A(ws,this,!1)},this.options.coolDownDelay))}}var Vs=new As({warmUpDelay:250,closeDelay:150,coolDownDelay:500,graceDelay:300}),Hs=new As({warmUpDelay:500,closeDelay:300,coolDownDelay:500,graceDelay:300}),Us=a`
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
      var(--c-color-mix-hover),
      transparent
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
`,Ws=new WeakMap,Gs=new WeakMap,Ks=new WeakMap,B=new WeakSet,qs=new WeakMap,Js=new WeakMap,Ys=new WeakMap,Xs=new WeakMap,Zs=new WeakMap,Qs=new WeakMap,$s=new WeakMap,ec=class extends u{constructor(){super(),O(this,B),this.label=n(`Link details`),this.anchor=null,this.copyState=ne.Idle,this.detailsOpen=!1,M(this,Ws,!1),M(this,Gs,{element:this,setOpen:e=>{e?j(B,this,sc).call(this):this.detailsPopover?.hide()}}),M(this,Ks,new MutationObserver(()=>j(B,this,tc).call(this))),M(this,qs,e=>{this.copyState=e.detail.state,e.detail.state===ne.Success?this.dispatchEvent(new CustomEvent(`craft-copy`,{bubbles:!0,composed:!0,detail:{value:ac.call(j(B,this))}})):e.detail.state===ne.Error&&this.dispatchEvent(new CustomEvent(`craft-error`,{bubbles:!0,composed:!0}))}),M(this,Js,e=>{e.target===e.currentTarget&&(this.detailsOpen=e.type===`craft-show`,this.detailsOpen||j(B,this,cc).call(this))}),M(this,Ys,e=>{e.pointerType!==`touch`&&(k(Ws,this)||!this.detailsOpen&&this.anchor)&&Hs.requestOpen(k(Gs,this))}),M(this,Xs,e=>{e.pointerType!==`touch`&&Hs.requestClose(k(Gs,this))}),M(this,Zs,()=>{k(Ws,this)||Hs.requestClose(k(Gs,this))}),M(this,Qs,e=>{if(!k(Ws,this))return;let t=this.detailsPopover?.querySelector(`[slot="invoker"]`),n=!!t&&e.composedPath().includes(t);e.type===`focusin`&&n||(j(B,this,cc).call(this),e.type===`click`&&n&&e.stopPropagation())}),M(this,$s,e=>{e.key===`Escape`&&k(Ws,this)&&(e.preventDefault(),e.stopPropagation(),this.detailsPopover?.hide())}),this.addEventListener(`pointerenter`,k(Ys,this)),this.addEventListener(`pointerleave`,k(Xs,this)),this.addEventListener(`pointerdown`,k(Zs,this))}connectedCallback(){super.connectedCallback(),k(Ks,this).observe(this,{subtree:!0,childList:!0,characterData:!0,attributes:!0,attributeFilter:[`href`,`target`,`rel`]}),j(B,this,tc).call(this)}disconnectedCallback(){k(Ks,this).disconnect(),j(B,this,cc).call(this),Hs.remove(k(Gs,this)),super.disconnectedCallback()}render(){let e=ic.call(j(B,this)),t=oc.call(j(B,this)),r=n(`Open in a new tab`);return p`
      ${this.anchor?p`<craft-popover
            placement="bottom-start"
            @craft-show=${k(Js,this)}
            @craft-hide=${k(Js,this)}
            @click=${{handleEvent:k(Qs,this),capture:!0}}
            @focusin=${k(Qs,this)}
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
                label=${[this.label,nc.call(j(B,this))].filter(Boolean).join(` `)}
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
                    .action=${{type:`clipboard`,value:ac.call(j(B,this))}}
                    @craft-state-change=${k(qs,this)}
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
                >${ac.call(j(B,this))}</a
              >
              <span class="details__status" role="status"
                >${this.copyState===ne.Idle?``:t.label}</span
              >
            </div>
          </craft-popover>`:i}
      <span class="text" part="text"
        ><slot @slotchange=${()=>j(B,this,tc).call(this)}></slot
      ></span>
    `}};function tc(){this.anchor=this.querySelector(`a[href]`),this.requestUpdate()}function nc(){return Array.from(this.anchor?.childNodes??[]).filter(e=>!(e instanceof Element&&e.hasAttribute(`data-new-tab-cue`))).map(e=>e.textContent).join(``).replace(/\s+/g,` `).trim()}function rc(){return this.anchor?.protocol??``}function ic(){switch(rc.call(j(B,this))){case`mailto:`:return{icon:`envelope`,heading:n(`Email`)};case`tel:`:return{icon:`phone`,heading:n(`Phone`)};default:return{icon:`link`,heading:n(`Link`)}}}function ac(){let e=this.anchor?.href??``;return rc.call(j(B,this))===`mailto:`||rc.call(j(B,this))===`tel:`?decodeURIComponent(e.slice(rc.call(j(B,this)).length).split(`?`)[0]??``):e}function oc(){switch(this.copyState){case ne.Success:return{icon:`check`,label:n(`Copied`)};case ne.Error:return{icon:`xmark-large`,label:n(`Copy failed`)};default:return{icon:`custom-icons/clone-dashed`,label:n(`Copy`)}}}function sc(){A(Ws,this,!0),document.addEventListener(`keydown`,k($s,this),!0),this.detailsPopover?.show()}function cc(){A(Ws,this,!1),Hs.notifyClosed(k(Gs,this)),document.removeEventListener(`keydown`,k($s,this),!0)}ec.styles=[re,Us],r([c()],ec.prototype,`label`,void 0),r([f()],ec.prototype,`anchor`,void 0),r([f()],ec.prototype,`copyState`,void 0),r([f()],ec.prototype,`detailsOpen`,void 0),r([m(`craft-popover`)],ec.prototype,`detailsPopover`,void 0),customElements.get(`craft-link`)||customElements.define(`craft-link`,ec);var lc=class extends u{constructor(...e){super(...e),this.error=``,this.pluginName=``}render(){return p`
      <p class="error" role="alert">${this.error}</p>
      ${this.pluginName?p`<div class="install-plugin">
            <div class="icon" aria-hidden="true"><slot name="icon"></slot></div>
            <div class="plugin">
              <h3>${this.pluginName}</h3>
              <slot name="action"></slot>
            </div>
          </div>`:i}
    `}};lc.styles=a`
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
  `,r([c()],lc.prototype,`error`,void 0),r([c({attribute:`plugin-name`})],lc.prototype,`pluginName`,void 0),customElements.get(`craft-missing-component`)||customElements.define(`craft-missing-component`,lc);var uc=a`
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
    ${xe}
  }
`,dc=new WeakMap,fc=class extends u{constructor(...e){super(...e),this.altText=null,this.badgeCount=null,this.badgeCountSuffix=null,this.max=99,this.variant=`primary`,M(this,dc,`badge-label-${Math.floor(Math.random()*1e9).toString()}`)}connectedCallback(){super.connectedCallback(),this.id||=`badge-${Math.floor(Math.random()*1e9).toString()}`}showCount(){return this.badgeCount!==null&&this.badgeCount>0}truncatedNumber(){let e=this.badgeCount??0,t=e=>new Intl.NumberFormat(document.documentElement.lang||void 0).format(e);return e>this.max?`${t(this.max)}+`:t(e)}getBadgeRole(){return this.altText?`img`:i}renderBadgeContents(){return p`
      ${this.showCount()?p`
            <span class="number">${this.truncatedNumber()}</span>
            <sl-visually-hidden>${this.badgeCountSuffix}</sl-visually-hidden>
          `:i}
      ${this.altText?p`
            <sl-visually-hidden id=${k(dc,this)}
              >${this.altText}</sl-visually-hidden
            >
          `:i}
    `}render(){return p`
      <div
        part="badge"
        class="${w({"badge-indicator":!0,"badge-indicator--with-number":this.showCount(),"badge-indicator--secondary":this.variant===`secondary`,"badge-indicator--inverse":this.variant===`inverse`})}"
        role="${this.getBadgeRole()}"
        aria-labelledby="${this.altText?k(dc,this):i}"
      >
        ${this.renderBadgeContents()}
      </div>
    `}};fc.styles=[uc],r([c({attribute:`alt-text`})],fc.prototype,`altText`,void 0),r([c({attribute:`badge-count`})],fc.prototype,`badgeCount`,void 0),r([c({attribute:`badge-count-suffix`})],fc.prototype,`badgeCountSuffix`,void 0),r([c({type:Number})],fc.prototype,`max`,void 0),r([c()],fc.prototype,`variant`,void 0),customElements.get(`craft-badge-indicator`)||customElements.define(`craft-badge-indicator`,fc);var pc={List:`list`,Tabs:`tabs`};Object.values(pc);var mc=Symbol.for(``),hc=e=>{if(e?.r===mc)return e?._$litStatic$},gc=e=>({_$litStatic$:e,r:mc}),_c=(e,...t)=>({_$litStatic$:t.reduce(((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1]),e[0]),r:mc}),vc=new Map,yc=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],(i=hc(a))!==void 0);)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=vc.get(e))===void 0&&(o.raw=o,vc.set(e,t=o)),n=s}return e(t,...n)})(p),bc=a`
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
    color: var(--c-nav-item-color, inherit);
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
    ${xe}

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

  /* A hovered row, or one with its flyout open, is back to full strength.
     Before the selected states, which keep their own color. */
  .nav-item:not(.nav-item--static):hover,
  .nav-item--flyout-open {
    color: inherit;
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
    background-color: color-mix(
      in oklab,
      var(--c-color-mix-hover),
      transparent
    );
  }

  /* Pressed, more so, as a tinted button is. A press on one of its controls
     is that control's. */
  :host(:not([current], [appearance='tabs']))
    .nav-item:not(.nav-item--static):active:not(:has(craft-button:active)) {
    background-color: color-mix(in srgb, currentColor 12%, transparent);
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
    padding: var(--c-spacing-md);
  }

  /*
   * A flyout too tall for the viewport scrolls like the CP's other inner
   * scrollers (.cp-inner-scroller): its scrollbar hidden until you hover or
   * focus it, its content fading at an edge with more beyond. The list
   * scrolls rather than the popover's pane, so the fade doesn't take the
   * pane's border and shadow with it; it's capped at the pane's own cap less
   * the pane's borders. The fade's lengths are registered in variables.css.
   */
  @supports (animation-timeline: scroll()) {
    @keyframes nav-item-flyout-fade-start {
      from {
        --c-scroll-fade-start: 0px;
      }
      to {
        --c-scroll-fade-start: var(--c-spacing-xl);
      }
    }

    @keyframes nav-item-flyout-fade-end {
      from {
        --c-scroll-fade-end: var(--c-spacing-xl);
      }
      to {
        --c-scroll-fade-end: 0px;
      }
    }

    @media (forced-colors: none) and (prefers-contrast: no-preference) {
      craft-popover::part(popup) {
        overflow: hidden;
      }

      .flyout {
        box-sizing: border-box;
        max-block-size: calc(
          var(
              --popover-max-block-size,
              var(--_popover-available-block-size, 40vh)
            ) -
            2px
        );
        overflow-y: auto;
        overscroll-behavior: contain;
        scrollbar-width: thin;
        scrollbar-color: transparent transparent;
        scroll-padding-block: var(--c-spacing-xl);
        mask-image: linear-gradient(
          to bottom,
          transparent 0,
          #000 var(--c-scroll-fade-start),
          #000 calc(100% - var(--c-scroll-fade-end)),
          transparent 100%
        );
        animation-name: nav-item-flyout-fade-start, nav-item-flyout-fade-end;
        animation-timing-function: linear;
        animation-fill-mode: both;
        animation-timeline: scroll(self block);
        animation-range:
          0 var(--c-spacing-xl),
          calc(100% - var(--c-spacing-xl)) 100%;
      }

      /* The same revealed thumb as .cp-inner-scroller's. */
      .flyout:is(:hover, :focus-within) {
        scrollbar-color: color-mix(
            in oklab,
            var(--color-slate-600),
            var(--color-blue-500) 20%
          )
          transparent;
      }
    }
  }

  /* Quieter than the label it trails, and sized to the toggle chevron it
     stands in for. */
  .flyout-indicator {
    font-size: var(--c-size-icon-sm, calc(12rem / 16));
    color: var(--c-color-neutral-on-quiet, currentcolor);
  }

  .flyout__label {
    padding-inline: var(--c-spacing-sm);
  }

  /* The row's icon size, though the toggle is a small button. */
  .subnav-toggle craft-icon {
    font-size: var(--c-size-icon-sm, calc(12rem / 16));
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
     * The chevron stands in for the icon in the same square, so it matches the
     * nav item's icon size, rather than the subnav toggle's smaller chevron or
     * the small button's smaller icons.
     */
    --_rail-icon-size: var(
      --c-icon-size,
      var(--c-size-icon-sm, calc(12rem / 16))
    );

    craft-icon {
      font-size: var(--_rail-icon-size);
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
`,xc=new WeakMap,Sc=new WeakMap,Cc=new WeakMap,wc=new WeakSet,Tc=new WeakMap,Ec=new WeakMap,Dc=new WeakMap,Oc=new WeakMap,kc=new WeakMap,Ac=new WeakMap,V=class e extends u{get labelNodes(){return Array.from(this.childNodes).filter(e=>e.nodeType===Node.TEXT_NODE||e.nodeType===Node.ELEMENT_NODE&&!e.hasAttribute(`slot`))}get labelText(){return this.labelNodes.map(e=>e.textContent??``).join(` `).replace(/\s+/g,` `).trim()}get hasLabel(){return this.labelNodes.some(e=>e.nodeType!==Node.TEXT_NODE||!!e.textContent?.trim())}get opensInNewTab(){return!!this.href&&(this.external||je(this.href))}get itemId(){return`item-${this.id}`}get subnavId(){return`${this.id}-subnav`}get ariaCurrentState(){return this.current?this.href?`page`:`true`:this.active?`true`:`false`}constructor(){super(),O(this,wc),this.active=!1,this.current=!1,this.button=!1,this.external=!1,this.indicator=!1,this.iconOnly=!1,this.flush=!1,this.initialState=`closed`,this.appearance=pc.List,this.group=!1,this.togglePosition=`suffix`,this.subnavState=`closed`,this.flyoutOpen=!1,M(this,xc,{element:this,setOpen:e=>{this.flyoutOpen=e},overlayRect:()=>this.shadowRoot?.querySelector(`.flyout`)?.getBoundingClientRect()}),M(this,Sc,void 0),this._lightDom=new v(this,{characterData:!0}),M(this,Cc,void 0),this.fitFlyout=()=>{let t=this.shadowRoot?.querySelector(`craft-popover`),n=this.shadowRoot?.querySelector(`.flyout`);if(!t||!n)return;let{top:r}=n.getBoundingClientRect(),i=window.innerHeight-r-e.flyoutViewportMargin;if(!window.innerHeight||i<=0){t.style.removeProperty(`--popover-max-block-size`);return}t.style.setProperty(`--popover-max-block-size`,`${i}px`)},M(this,Tc,()=>{Vs.requestOpen(k(xc,this))}),M(this,Ec,e=>{Ee(e,this)||Vs.requestClose(k(xc,this))}),M(this,Dc,e=>{e.target===e.currentTarget&&(k(Oc,this).call(this,e),this.flyoutOpen=e.type===`craft-show`,this.flyoutOpen||Vs.notifyClosed(k(xc,this)))}),M(this,Oc,e=>{e.target===e.currentTarget&&e.stopPropagation()}),M(this,kc,e=>{e instanceof KeyboardEvent&&e.key!==`Enter`&&e.key!==` `||e.stopPropagation()}),M(this,Ac,e=>{e.preventDefault(),e.stopPropagation(),this.flyoutOpen?(this.flyoutOpen=!1,Vs.notifyClosed(k(xc,this))):Vs.requestOpen(k(xc,this),{immediate:!0})}),this.id=this.id||Math.random().toString(36).substring(2,6)}connectedCallback(){super.connectedCallback(),this.hasAttribute(`role`)||this.setAttribute(`role`,`listitem`),this.subnavState=this.active||this.initialState===`open`?`open`:`closed`;let{signal:e}=A(Sc,this,new AbortController);this.addEventListener(`mouseenter`,k(Tc,this),{signal:e}),this.addEventListener(`mouseleave`,k(Ec,this),{signal:e}),this.addEventListener(`focusout`,k(Ec,this),{signal:e})}updated(e){e.has(`flyoutOpen`)&&(this.flyoutOpen?j(wc,this,jc).call(this):j(wc,this,Mc).call(this))}willUpdate(e){(e.has(`active`)||e.has(`initialState`))&&(this.subnavState=this.active||this.initialState===`open`?`open`:`closed`)}disconnectedCallback(){k(Sc,this)?.abort(),k(Cc,this)?.abort(),Vs.remove(k(xc,this)),super.disconnectedCallback()}toggleSubnav(e){e.preventDefault(),e.stopPropagation(),this.subnavState=this.subnavState===`open`?`closed`:`open`}actionTag(e){return this.href?_c`a`:e||this.button?_c`button`:_c`span`}focus(e){let t=this.shadowRoot?.querySelector(`.nav-item__action-item:is(a, button), .nav-item:is(a, button)`);t?t.focus(e):super.focus(e)}buttonType(e){return!this.href&&(e||this.button)?`button`:i}isStatic(e){return!this.href&&!e&&!this.button}renderIconItem(e,t){let n=this.actionTag(t);return yc`
      <${n}
        class="${w({"nav-item":!0,"nav-item--icon":!0,"nav-item--static":this.isStatic(t),"nav-item--flyout-open":t&&this.flyoutOpen})}"
        id="${this.itemId}"
        type="${this.buttonType(t)}"
        href="${C(this.href||void 0)}"
        target="${this.opensInNewTab?`_blank`:i}"
        rel="${this.opensInNewTab?`noopener`:i}"
        aria-current="${this.href||this.button?this.ariaCurrentState:i}"
        aria-expanded="${t?this.flyoutOpen?`true`:`false`:i}"
        aria-controls="${t?this.subnavId:i}"
        aria-label="${(this.href||e||this.button)&&this.labelText?this.opensInNewTab?`${this.labelText}, ${Ae()}`:this.labelText:i}"
        @click="${t&&!this.href?k(Ac,this):i}"
      >
        ${this.renderPrefix()} ${this.renderSuffix(!1)}
      </${n}>
      ${t?p`<div class="rail-toggle">${this.renderFlyoutToggle()}</div>`:i}
      ${t?this.renderFlyout(!0):p`<craft-tooltip
              for="${this.itemId}"
              placement="right"
              @craft-show=${k(Oc,this)}
              @craft-hide=${k(Oc,this)}
              @craft-after-show=${k(Oc,this)}
              @craft-after-hide=${k(Oc,this)}
              ><slot></slot
            ></craft-tooltip>`}
    `}renderFlyout(e){return p`
      <craft-popover
        for="${this.itemId}"
        placement="right-start"
        without-invoker-aria
        .open="${this.flyoutOpen}"
        @craft-show=${k(Dc,this)}
        @craft-hide=${k(Dc,this)}
        @craft-after-show=${k(Oc,this)}
        @craft-after-hide=${k(Oc,this)}
      >
        <div class="flyout" id="${this.subnavId}">
          ${e?p`<div class="flyout__label"><slot></slot></div>`:i}
          <slot name="subnav"></slot>
        </div>
      </craft-popover>
    `}renderSubnavToggle(){return p`
      <craft-button
        @click="${this.toggleSubnav}"
        @mousedown="${k(kc,this)}"
        @mouseup="${k(kc,this)}"
        @keydown="${k(kc,this)}"
        @keyup="${k(kc,this)}"
        variant="${we.Plain}"
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
        @click="${k(Ac,this)}"
        @mousedown="${k(kc,this)}"
        @mouseup="${k(kc,this)}"
        @keydown="${k(kc,this)}"
        @keyup="${k(kc,this)}"
        variant="${we.Plain}"
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
              @mousedown="${k(kc,this)}"
              @mouseup="${k(kc,this)}"
              @click="${k(kc,this)}"
              @keydown="${k(kc,this)}"
              @keyup="${k(kc,this)}"
            ></slot>`}
        <slot name="suffix">
          ${e&&this.togglePosition===`suffix`?this.renderSubnavToggle():i}
          ${t?this.renderFlyoutToggle():i}
        </slot>
      </div>
    `}renderItem(e,t,n){return yc`
      <div
        class="${w({"nav-item":!0,"nav-item--prefixed":t,"nav-item--flush":this.flush,"nav-item--static":this.isStatic(n),"nav-item--flyout-open":n&&this.flyoutOpen})}"
        id="${this.itemId}"
      >
        ${t?this.renderPrefix(e):i}
        ${this.renderInteractiveItem(n)}
        ${this.renderSuffix(e,n)}
      </div>
    `}renderInteractiveItem(e){let t=this.actionTag(e);return yc`
      <${t}
        class="nav-item__action-item"
        type="${this.buttonType(e)}"
        href="${C(this.href||void 0)}"
        target="${this.opensInNewTab?`_blank`:i}"
        rel="${this.opensInNewTab?`noopener`:i}"
        aria-current="${this.href||this.button?this.ariaCurrentState:i}"
        aria-expanded="${e?this.flyoutOpen?`true`:`false`:i}"
        aria-controls="${e?this.subnavId:i}"
        @click="${e&&!this.href?k(Ac,this):i}"
      >
        <slot id="${this.id}-label"></slot>${this.opensInNewTab?p`<span class="cp-visually-hidden">${Ae()}</span>`:i}
      </${t}>
    `}render(){let e=x(this,`subnav`),t=this.subnavDisplay??(this.iconOnly?`flyout`:`inline`),n=e&&t===`flyout`,r=e&&!n&&!this.group&&(this.iconOnly||this.hasLabel),a=r&&this.togglePosition===`prefix`||!!this.icon||this.indicator||x(this,`prefix`,`icon`),o=!r||this.subnavState===`open`;return this.group&&this.iconOnly?p`
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
                style="${ce({display:o?`block`:`none`})}"
              >
                <slot name="subnav"></slot>
              </div>
            `:i}
      </li>
    `}};function jc(){j(wc,this,Mc).call(this);let{signal:e}=A(Cc,this,new AbortController);window.addEventListener(`resize`,this.fitFlyout,{signal:e}),requestAnimationFrame(this.fitFlyout)}function Mc(){k(Cc,this)?.abort(),A(Cc,this,void 0),this.shadowRoot?.querySelector(`craft-popover`)?.style.removeProperty(`--popover-max-block-size`)}V.styles=[D,bc],V.flyoutViewportMargin=16,r([c()],V.prototype,`icon`,void 0),r([c()],V.prototype,`href`,void 0),r([c({type:Boolean,reflect:!0})],V.prototype,`active`,void 0),r([c({type:Boolean,reflect:!0})],V.prototype,`current`,void 0),r([c({type:Boolean,reflect:!0})],V.prototype,`button`,void 0),r([c({type:Boolean})],V.prototype,`external`,void 0),r([c({type:Boolean})],V.prototype,`indicator`,void 0),r([c()],V.prototype,`id`,void 0),r([c({reflect:!0,type:Boolean,attribute:`icon-only`})],V.prototype,`iconOnly`,void 0),r([c({type:Boolean})],V.prototype,`flush`,void 0),r([c({reflect:!0,attribute:`initial-state`})],V.prototype,`initialState`,void 0),r([c({reflect:!0})],V.prototype,`appearance`,void 0),r([c({type:Boolean,reflect:!0})],V.prototype,`group`,void 0),r([c({attribute:`toggle-position`})],V.prototype,`togglePosition`,void 0),r([c({attribute:`subnav-display`,reflect:!0})],V.prototype,`subnavDisplay`,void 0),r([f()],V.prototype,`subnavState`,void 0),r([f()],V.prototype,`flyoutOpen`,void 0),customElements.get(`craft-nav-item`)||customElements.define(`craft-nav-item`,V);var Nc=new WeakMap,Pc=class extends u{constructor(...e){super(...e),this.appearance=pc.List,M(this,Nc,()=>{this.items.forEach(e=>{this.appearance===pc.List?e.removeAttribute(`appearance`):e.setAttribute(`appearance`,this.appearance)})})}get items(){return Array.from(this.children).filter(e=>e instanceof HTMLElement&&e.slot===``)}firstUpdated(e){super.firstUpdated(e),this.shadowRoot?.querySelector(`slot`)?.addEventListener(`slotchange`,k(Nc,this)),k(Nc,this).call(this)}updated(e){super.updated(e),e.has(`appearance`)&&k(Nc,this).call(this)}render(){return p`
      <ul class="nav-list">
        <slot></slot>
      </ul>
    `}};Pc.styles=a`
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
  `,r([c({reflect:!0})],Pc.prototype,`appearance`,void 0),customElements.get(`craft-nav-list`)||customElements.define(`craft-nav-list`,Pc);var Fc=a`
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
    ${xe}
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
`,Ic={Raised:`raised`,Outline:`outline`,OutlineFill:`outline-fill`,Plain:`plain`,Sunken:`sunken`};Object.values(Ic);var Lc={Plain:`plain`,Error:`error`,Code:`code`};Object.values(Lc);var Rc=new Set([`clip`,`hidden`]),zc=class extends he(u,{customProperty:`--_pane-spacing`,defaultValue:`lg`}){constructor(...e){super(...e),this.appearance=Ic.Raised,this.variant=Lc.Plain,this.label=``,this.headingLevel=2,this._hasSlottedHeader=!1,this._hasSlottedFooter=!1,this._scrollable=!1,this._hostLabel=``,this._lightDom=new v(this,{attributeFilter:[`aria-label`],characterData:!0,onChange:()=>this._syncLightDom()}),this._observedBoxes=new Set}disconnectedCallback(){super.disconnectedCallback(),this._resizeObserver?.disconnect(),this._observedBoxes.clear()}get _scroller(){return this.renderRoot?.querySelector(`.cp-pane`)??null}_syncSlotPresence(){this._hasSlottedHeader=x(this,`header`,`title`,`header-actions`),this._hasSlottedFooter=x(this,`footer`,`footer-content`,`feedback`,`actions`,`primary-action`,`secondary-action`)}_syncLightDom(){this._syncSlotPresence(),this._hostLabel=this.getAttribute(`aria-label`)??``,this._syncScrollable(),this._observeScrollable()}_syncScrollable(){let e=this._scroller;if(!e?.isConnected){this._scrollable=!1;return}let{overflowX:t,overflowY:n}=getComputedStyle(e);this._scrollable=!Rc.has(n)&&e.scrollHeight-e.clientHeight>1||!Rc.has(t)&&e.scrollWidth-e.clientWidth>1}_observeScrollable(){if(typeof ResizeObserver>`u`)return;let e=this._resizeObserver??=new ResizeObserver(()=>this._syncScrollable()),t=this._scroller,n=new Set(t?[t,...t.querySelectorAll(`.cp-pane__header, .cp-pane__body, .cp-pane__footer`),...this.children]:[]);for(let t of this._observedBoxes)n.has(t)||(e.unobserve(t),this._observedBoxes.delete(t));for(let t of n)this._observedBoxes.has(t)||(e.observe(t),this._observedBoxes.add(t))}get _scrollRegionLabel(){return this.label||this._hostLabel||n(`Scrollable region`)}focus(e){if(this._scrollable&&this._scroller){this._scroller.focus(e);return}super.focus(e)}updated(e){super.updated(e),this._observeScrollable()}_renderTitle(){let e=gc(`h${Math.min(6,Math.max(1,Number(this.headingLevel)||2))}`);return yc`<${e} class="cp-pane__title">${this.label}</${e}>`}render(){let e=!!this.label||this._hasSlottedHeader;return p`
      <div
        class="cp-pane"
        part="base"
        style="${ce(this.paddingStyles)}"
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
    `}};zc.styles=[re,Fc],r([c({reflect:!0})],zc.prototype,`appearance`,void 0),r([c({reflect:!0})],zc.prototype,`variant`,void 0),r([c()],zc.prototype,`label`,void 0),r([c({type:Number,attribute:`heading-level`})],zc.prototype,`headingLevel`,void 0),r([f()],zc.prototype,`_hasSlottedHeader`,void 0),r([f()],zc.prototype,`_hasSlottedFooter`,void 0),r([f()],zc.prototype,`_scrollable`,void 0),r([f()],zc.prototype,`_hostLabel`,void 0),customElements.get(`craft-pane`)||customElements.define(`craft-pane`,zc);var Bc=`craft-checkbox > input[type="checkbox"], input[type="checkbox"].cp-checkbox, craft-radio > input[type="radio"], input[type="radio"].cp-radio {
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
`,Vc=0,Hc=new WeakMap,H=new WeakSet,Uc=class extends u{constructor(...e){super(...e),O(this,H),this.groups=[],this.value=[],this.lockedPermissions=[],this.name=``,this.disabled=!1,M(this,Hc,++Vc)}updated(e){super.updated(e),(e.has(`value`)||e.has(`groups`)||e.has(`name`)||e.has(`disabled`))&&j(H,this,el).call(this)}render(){let e=j(H,this,Kc).call(this);return Nt(this.groups,e=>e.handle,(t,n)=>j(H,this,Wc).call(this,t,n,e))}};function Wc(e,t,r){let a=`permission-tree-heading-${k(Hc,this)}-${t}`;return p`
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
                  @click=${()=>j(H,this,Xc).call(this,e.keys,r)}
                >
                  ${j(H,this,Yc).call(this,e.keys,r)?n(`Deselect all`):n(`Select all`)}
                </craft-button>
              </div>
            `:i}
        ${j(H,this,Gc).call(this,e.permissions,0,this.disabled,r)}
      </section>
    `}function Gc(e,t,n,r){return Nt(Object.entries(e),([e])=>e,([e,a])=>{let o=a.key||e,s=j(H,this,Jc).call(this,o,r),c=a.nested??{};return p`
          <ul>
            <li>
              <craft-checkbox
                class=${t>0?`indented`:``}
                style=${`--permission-level: ${t}`}
                .label=${a.label}
                .value=${o}
                .checked=${s}
                .disabled=${n||j(H,this,qc).call(this,o,r)}
                @input=${e=>e.stopPropagation()}
                @change=${e=>j(H,this,Zc).call(this,e,o,c,r)}
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

              ${Object.keys(c).length?j(H,this,Gc).call(this,c,t+1,n||!s,r):i}
            </li>
          </ul>
        `})}function Kc(){return new Set(this.lockedPermissions.map(e=>e.toLowerCase()))}function qc(e,t){return t.has(e.toLowerCase())}function Jc(e,t){return this.value.includes(e)||j(H,this,qc).call(this,e,t)}function Yc(e,t){let n=e.filter(e=>!j(H,this,qc).call(this,e,t));return n.length>0&&n.every(e=>this.value.includes(e))}function Xc(e,t){let n=e.filter(e=>!j(H,this,qc).call(this,e,t));if(j(H,this,Yc).call(this,e,t)){let e=new Set(n);j(H,this,$c).call(this,this.value.filter(t=>!e.has(t)));return}j(H,this,$c).call(this,[...new Set([...this.value,...n])])}function Zc(e,t,n,r){if(e.stopPropagation(),this.disabled||j(H,this,qc).call(this,t,r))return;let i=e.currentTarget.checked,a=this.value.indexOf(t);if(i&&a===-1){j(H,this,$c).call(this,[...this.value,t]);return}if(i||a===-1)return;let o=new Set([t,...j(H,this,Qc).call(this,n)]);j(H,this,$c).call(this,this.value.filter(e=>!o.has(e)))}function Qc(e){return Object.values(e).flatMap(e=>[e.key,...j(H,this,Qc).call(this,e.nested??{})])}function $c(e){this.value=e,_t(this),vt(this)}function el(){if(this.querySelectorAll(`[data-permission-tree-input]`).forEach(e=>e.remove()),!this.name||this.disabled)return;j(H,this,tl).call(this,this.name,``);let e=new Set(this.groups.flatMap(e=>e.keys));for(let t of this.value)e.has(t)&&j(H,this,tl).call(this,`${this.name}[]`,t)}function tl(e,t){let n=document.createElement(`input`);n.type=`hidden`,n.name=e,n.value=t,n.dataset.permissionTreeInput=``,this.append(n)}Uc.styles=[o(Bc),a`
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
    `],r([c({type:Array})],Uc.prototype,`groups`,void 0),r([c({type:Array})],Uc.prototype,`value`,void 0),r([c({type:Array,attribute:`locked-permissions`})],Uc.prototype,`lockedPermissions`,void 0),r([c()],Uc.prototype,`name`,void 0),r([c({type:Boolean,reflect:!0})],Uc.prototype,`disabled`,void 0),customElements.get(`craft-permission-tree`)||customElements.define(`craft-permission-tree`,Uc);var nl=a`
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
`,rl=new WeakMap,il=new WeakMap,al=class extends u{constructor(...e){super(...e),this.progress=0,this.total=0,this.processed=0,this.showStatus=!1,this.pending=!1,this.smooth=!1,this.label=`Progress`,M(this,rl,0),M(this,il,!1)}willUpdate(e){if(super.willUpdate(e),(e.has(`total`)||e.has(`processed`))&&this.total>0){let e=Math.min(100,Math.round(this.processed/this.total*100));e>=100&&k(rl,this)<100&&A(il,this,!0),this.progress=e}e.has(`progress`)&&(this.progress>0&&this.pending&&(this.pending=!1),A(rl,this,this.progress))}updated(e){super.updated(e),k(il,this)&&(A(il,this,!1),this.dispatchEvent(new CustomEvent(`craft-complete`,{bubbles:!0,composed:!0})))}get progressPercent(){return Math.min(100,Math.max(0,this.progress))}get statusText(){return this.total>0?`${this.processed} / ${this.total}`:`${this.progressPercent}%`}reset(){this.progress=0,this.processed=0,this.pending=!0,A(rl,this,0)}show(){this.hidden=!1}hide(){this.hidden=!0}render(){let e={width:this.pending?`100%`:`${this.progressPercent}%`};return p`
      <div
        class=${w({"progress-bar":!0,"progress-bar--pending":this.pending})}
        part="track"
        role="progressbar"
        aria-valuenow=${this.pending?i:this.progressPercent}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.label}
      >
        <div
          class=${w({"progress-bar__fill":!0,"progress-bar__fill--smooth":this.smooth&&!this.pending})}
          part="fill"
          style=${ce(e)}
        ></div>
      </div>
      ${this.showStatus?p`<div class="progress-bar__status" part="status">
            ${this.statusText}
          </div>`:i}
      <span class="visually-hidden">
        ${this.pending?`Loading`:`${this.progressPercent}%`}
      </span>
    `}};al.styles=[nl],r([c({type:Number})],al.prototype,`progress`,void 0),r([c({type:Number})],al.prototype,`total`,void 0),r([c({type:Number})],al.prototype,`processed`,void 0),r([c({type:Boolean,attribute:`show-status`})],al.prototype,`showStatus`,void 0),r([c({type:Boolean,reflect:!0})],al.prototype,`pending`,void 0),r([c({type:Boolean})],al.prototype,`smooth`,void 0),r([c({type:String})],al.prototype,`label`,void 0),customElements.get(`craft-progress-bar`)||customElements.define(`craft-progress-bar`,al);var ol=class extends ht(u,{choice:`craft-radio`,multiple:!1}){constructor(...e){super(...e),this._wrapped=!1,this._resizeObserver=new ResizeObserver(()=>this._fitRow())}render(){return p`${super.render()}
      <div class="fit-probe" aria-hidden="true"></div>
      <div class="row-size" aria-hidden="true"></div>`}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{let e=this.shadowRoot?.querySelector(`.fit-probe`);e&&this.isConnected&&this._resizeObserver.observe(e)})}disconnectedCallback(){super.disconnectedCallback(),this._resizeObserver.disconnect()}_onChoicesChanged(){this._resizeObserver.disconnect();let e=this.shadowRoot?.querySelector(`.fit-probe`);e&&this._resizeObserver.observe(e);for(let e of this.choices)this._resizeObserver.observe(e);this._syncButtons(),this._fitRow()}updated(e){super.updated(e),e.has(`appearance`)&&(this._syncButtons(),this._fitRow())}_syncButtons(){let e=this.appearance,t=e===`buttons`||e===`button-group`,n=e===`cards`||e===`card-group`,r=(e===`button-group`||e===`card-group`)&&!this._wrapped,i=this.choices;this.style.setProperty(`--_card-count`,String(i.length)),i.forEach((e,a)=>{let o=!r||a===0,s=!r||a===i.length-1;e.toggleAttribute(`data-button`,t),e.toggleAttribute(`data-button-start`,t&&o),e.toggleAttribute(`data-button-end`,t&&s),e.toggleAttribute(`data-card`,n),e.toggleAttribute(`data-card-start`,n&&o),e.toggleAttribute(`data-card-end`,n&&s)})}_fitRow(){let e=!1,t=this.appearance;if(t===`button-group`||t===`card-group`){let n=this.choices,r=n.reduce((e,n)=>e+(t===`card-group`?parseFloat(getComputedStyle(n).minWidth):n.getBoundingClientRect().width),-(n.length-1));e=(this.shadowRoot?.querySelector(`.fit-probe`)??this).getBoundingClientRect().width+.5<r}e!==this._wrapped&&(this._wrapped=e,this.toggleAttribute(`data-wrapped`,e),this._syncButtons())}static get styles(){return[ve,fe,a`
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
      `]}};r([c({reflect:!0})],ol.prototype,`appearance`,void 0),customElements.get(`craft-radio-group`)||customElements.define(`craft-radio-group`,ol);var sl=class extends xt(u){constructor(...e){super(...e),this._syncIconOnly=()=>{let e=this.querySelector(`:scope > [slot="label"]`);this.toggleAttribute(`data-icon-only`,!e?.textContent?.trim())}}get slots(){return{...super.slots,input:()=>{let e=document.createElement(`input`);return e.type=`radio`,e}}}render(){return p`<slot name="input"></slot>
      <div class="choice-field__icon" part="icon">
        <slot name="icon"></slot>
      </div>
      <div class="choice-field__label">
        <slot name="label"></slot>
      </div>
      <small class="choice-field__help-text">
        <slot name="help-text"></slot>
      </small>`}static get styles(){return[...yt,a`
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
      `]}firstUpdated(e){super.firstUpdated(e),this.shadowRoot?.querySelector(`slot[name="label"]`)?.addEventListener(`slotchange`,this._syncIconOnly),this._syncIconOnly()}};customElements.get(`craft-radio`)||customElements.define(`craft-radio`,sl);var cl=a`
  :host {
    ${ye}
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--c-spacing-sm);
    cursor: pointer;
    padding-block: 0;
    padding-inline: var(--c-input-spacing-inline)
      calc(var(--c-input-spacing-inline) - var(--_input-border-width));
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
  }
`,ll=class extends u{constructor(...e){super(...e),this.singleOption=!1,this.disabled=!1,this.plain=!1}render(){return p`<div id="content-wrapper"><slot></slot></div>
      ${this.singleOption||this.plain?``:p`<craft-icon
            class="indicator"
            name="chevron-down"
          ></craft-icon>`}`}};ll.styles=cl,r([c({type:Boolean,attribute:`single-option`,reflect:!0})],ll.prototype,`singleOption`,void 0),r([c({type:Boolean,reflect:!0})],ll.prototype,`disabled`,void 0),r([c({type:Boolean,reflect:!0})],ll.prototype,`plain`,void 0),customElements.get(`craft-select-invoker`)||customElements.define(`craft-select-invoker`,ll);var ul=a`
  ${ue}

  :host {
    width: 100%;
  }

  :host([small]) .input-group__input {
    --c-input-height: var(--c-size-control-sm);
  }

  .input-group__input {
    ${ge}
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
    box-shadow: var(--c-shadow-overlay);
    padding: var(--c-spacing-sm);
    max-height: calc(var(--c-spacing) * 60);
    overflow: auto;
  }
`,dl=new WeakMap,fl=new WeakMap,pl=new WeakMap,ml=new WeakMap,hl=new WeakMap,gl=new WeakMap,_l=new WeakMap,U=new WeakSet,vl=new WeakMap,yl=new WeakMap,bl=new WeakMap,xl=new WeakMap,Sl=new WeakMap,Cl=new WeakMap,wl=new WeakMap,Tl=new WeakMap,El=class extends fr(Se(u)){get value(){return k(dl,this)}set value(e){let t=k(dl,this);A(dl,this,e==null?``:String(e)),j(U,this,Fl).call(this),this.requestUpdate(`value`,t)}constructor(){super(),O(this,U),this.small=!1,this.required=!1,this.invalid=!1,this.open=!1,M(this,dl,``),M(this,fl,``),M(this,pl,!1),M(this,ml,!1),M(this,hl,new Cr),M(this,gl,new MutationObserver(e=>{let t=e=>e===this._control||!!this._control?.contains(e)||!!(e instanceof Element?e:e.parentElement)?.closest(`[slot="form-value"]`);e.some(e=>!t(e.target))&&j(U,this,Pl).call(this)})),M(this,_l,new gr(()=>{let e=this.renderRoot.querySelector(`.overlay-layer`),t=Dl.call(j(U,this)),n=this._control;return e&&t&&n?{layer:e,pane:t,reference:n}:void 0})),M(this,vl,e=>{let t=e.target;if(k(ml,this)||t.parentElement!==this||t.localName!==`craft-option`||!t.selected)return;let n=k(dl,this);A(dl,this,t.value),j(U,this,Fl).call(this),this.requestUpdate(`value`,n)}),M(this,yl,e=>{e.composedPath().includes(this)||(E(e,this),this.open=!1)}),M(this,bl,e=>{(!(e.relatedTarget instanceof Node)||!this.contains(e.relatedTarget))&&(this.open=!1)}),M(this,xl,()=>{this.open?this.open=!1:j(U,this,Bl).call(this)}),M(this,Sl,void 0),M(this,Cl,e=>{if(Ml.call(j(U,this))||e.isComposing)return;if(this.open){j(U,this,Hl).call(this,e);return}switch(e.key){case`Enter`:case` `:case`ArrowDown`:case`ArrowUp`:e.preventDefault(),e.repeat||j(U,this,Bl).call(this);return}let t=k(hl,this).match(e,kl.call(j(U,this)),Al.call(j(U,this)));t&&(e.preventDefault(),j(U,this,Il).call(this,t))}),M(this,wl,e=>{let t=e.target?.closest(`craft-option`);!t||t.disabled||Ml.call(j(U,this))||(j(U,this,Il).call(this,t),this.open=!1,this._control?.focus())}),M(this,Tl,le(`listbox`)),this.addEventListener(`craft-selected-change`,k(vl,this))}get slots(){return{...super.slots,input:()=>document.createElement(`craft-select-invoker`)}}get _control(){return super._control}get _selectsFirstOption(){return!0}get _plainInvoker(){return!1}connectedCallback(){super.connectedCallback();let e=this._control;e&&!e.hasAttribute(`role`)&&(e.addEventListener(`keydown`,k(Cl,this)),e.addEventListener(`click`,k(xl,this)),e.addEventListener(`focusout`,k(bl,this))),k(gl,this).observe(this,{childList:!0,subtree:!0,characterData:!0}),j(U,this,Pl).call(this)}disconnectedCallback(){k(gl,this).disconnect(),k(_l,this).hide(),document.removeEventListener(`pointerdown`,k(yl,this)),k(hl,this).reset(),super.disconnectedCallback()}_formValue(){return k(dl,this)}formResetCallback(){this.value=k(fl,this),this._syncFormValue()}_selectedTemplate(e){return e?[...e.childNodes].map(e=>e.cloneNode(!0)):i}updated(e){super.updated(e),e.has(`open`)&&j(U,this,zl).call(this),(e.has(`disabled`)||e.has(`_formDisabled`)||e.has(`readOnly`)||e.has(`invalid`)||e.has(`required`)||e.has(`open`))&&j(U,this,Ll).call(this),(e.has(`name`)||e.has(`disabled`))&&this._syncFormValue(),this.open&&k(_l,this).update()}focus(e){this._control?.focus(e)}_inputGroupInputTemplate(){return p`
      <div class="input-group__input">
        <slot name="input"></slot>
        <div class="overlay-layer" role="none" popover="manual">
          <div id="overlay-content-node-wrapper">
            <div
              id=${k(Tl,this)}
              role="listbox"
              aria-label=${j(U,this,Wl).call(this)}
              @mousedown=${e=>e.preventDefault()}
              @click=${k(wl,this)}
            >
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
    `}};function Dl(){return this.renderRoot.querySelector(`#overlay-content-node-wrapper`)}function Ol(){return[...this.querySelectorAll(`:scope > craft-option`)].filter(e=>e instanceof ir)}function kl(){return Ol.call(j(U,this)).filter(e=>!e.hidden)}function Al(){return Ol.call(j(U,this)).find(e=>e.selected)}function jl(){return this.disabled||this._formDisabled}function Ml(){return jl.call(j(U,this))||this.readOnly||Nl.call(j(U,this))}function Nl(){return Ol.call(j(U,this)).length===1}function Pl({waited:e=!1}={}){if(!e&&[...this.querySelectorAll(`:scope > craft-option`)].some(e=>!(e instanceof ir))){customElements.whenDefined(`craft-option`).then(()=>queueMicrotask(()=>j(U,this,Pl).call(this,{waited:!0})));return}if(k(dl,this)===``){let e=Al.call(j(U,this));e&&A(dl,this,e.value)}j(U,this,Fl).call(this,{fallBackToFirst:!0}),!k(pl,this)&&Ol.call(j(U,this)).length&&(A(fl,this,k(dl,this)),A(pl,this,!0));let t=k(Sl,this);t&&!Ol.call(j(U,this)).includes(t)&&j(U,this,Vl).call(this,Ol.call(j(U,this)).find(e=>e.value===t.value&&!e.disabled)),j(U,this,Ll).call(this),this._syncFormValue(),this.requestUpdate(),this.updateComplete.then(()=>j(U,this,Rl).call(this))}function Fl({fallBackToFirst:e=!1}={}){let t=Ol.call(j(U,this)),n=t.find(e=>e.value===k(dl,this));!n&&e&&this._selectsFirstOption&&(n=t.find(e=>!e.disabled),n&&A(dl,this,n.value)),A(ml,this,!0);try{for(let e of t)e.selected=e===n}finally{A(ml,this,!1)}j(U,this,Ll).call(this),this._syncFormValue()}function Il(e){e.disabled||e.value===k(dl,this)||(this.value=e.value,_t(this),vt(this))}function Ll(){let e=this._control;if(!e)return;let t=Al.call(j(U,this)),n=Nl.call(j(U,this));e.id||=this._inputId,e.singleOption=n,e.plain=this._plainInvoker,e.disabled=jl.call(j(U,this)),s(this._selectedTemplate(t),e),e.setAttribute(`role`,`combobox`),n?(e.removeAttribute(`aria-haspopup`),e.removeAttribute(`aria-expanded`),e.removeAttribute(`aria-activedescendant`)):(e.setAttribute(`aria-haspopup`,`listbox`),e.setAttribute(`aria-expanded`,String(this.open))),e.tabIndex=jl.call(j(U,this))?-1:0,jl.call(j(U,this))?e.setAttribute(`aria-disabled`,`true`):e.removeAttribute(`aria-disabled`),this.readOnly||n?e.setAttribute(`aria-readonly`,`true`):e.removeAttribute(`aria-readonly`),this.invalid?e.setAttribute(`aria-invalid`,`true`):e.removeAttribute(`aria-invalid`),this.required&&!n?e.setAttribute(`aria-required`,`true`):e.removeAttribute(`aria-required`)}function Rl(){let e=this.renderRoot.querySelector(`.overlay-layer`),t=Dl.call(j(U,this)),n=this._control;if(!e||!t||!n||this.open)return;if(this._plainInvoker){n.style.removeProperty(`min-width`);return}e.style.visibility=`hidden`,e.setAttribute(`data-open`,``),t.style.minWidth=`auto`;let r=t.getBoundingClientRect().width;e.removeAttribute(`data-open`),e.style.removeProperty(`visibility`),r>0&&(n.style.minWidth=`min(${r}px, 100%)`)}function zl(){let e=this._control;if(this.open&&!Ml.call(j(U,this))){k(hl,this).reset(),k(_l,this).show(),document.addEventListener(`pointerdown`,k(yl,this));let e=Al.call(j(U,this));j(U,this,Vl).call(this,e?.hidden?void 0:e);return}k(_l,this).hide(),document.removeEventListener(`pointerdown`,k(yl,this)),j(U,this,Vl).call(this,void 0),k(hl,this).reset(),e?.removeAttribute(`aria-activedescendant`)}function Bl(){Ml.call(j(U,this))||(this.open=!0)}function Vl(e){A(Sl,this,e),yr(Ol.call(j(U,this)),e,this._control,{scroll:this.open})}function Hl(e){let t=kl.call(j(U,this));switch(e.key){case`ArrowDown`:case`ArrowUp`:e.preventDefault(),j(U,this,Vl).call(this,br(t,k(Sl,this),e.key===`ArrowDown`?1:-1,{wrap:!1,skipDisabled:!0}));return;case`Home`:case`End`:{e.preventDefault();let n=t.filter(e=>!e.disabled);j(U,this,Vl).call(this,e.key===`Home`?n[0]:n.at(-1));return}case`Enter`:e.preventDefault(),j(U,this,Ul).call(this);return;case` `:if(!k(hl,this).typing){e.preventDefault(),j(U,this,Ul).call(this);return}break;case`Escape`:e.preventDefault(),g(e),this.open=!1;return;case`Tab`:j(U,this,Ul).call(this);return}let n=k(hl,this).match(e,t,k(Sl,this));n&&(e.preventDefault(),j(U,this,Vl).call(this,n))}function Ul(){k(Sl,this)&&j(U,this,Il).call(this,k(Sl,this)),this.open=!1}function Wl(){return this._labelNode?.textContent?.trim()||this.label}El.styles=[ve,De,ul],r([c({reflect:!0,type:Boolean})],El.prototype,`small`,void 0),r([c({type:Boolean})],El.prototype,`required`,void 0),r([c({type:Boolean,reflect:!0})],El.prototype,`invalid`,void 0),r([c({type:Boolean,reflect:!0})],El.prototype,`open`,void 0),r([c()],El.prototype,`value`,null),customElements.get(`craft-select-rich`)||customElements.define(`craft-select-rich`,El);var Gl=a`
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
`;function Kl(e){return e.charAt(0).toUpperCase()+e.slice(1)}function ql(e){return e.startsWith(`#`)}var Jl=new WeakMap,Yl=new WeakSet,Xl=class extends El{constructor(...e){super(...e),O(this,Yl),this.allowTransparent=!1,this.blankLabel=null,this.allowCustom=!1,this.swatchOnly=!1,this.colors=[...Ke],this.labels={},M(this,Jl,[])}_swatchTemplate(e,t=this._swatchBorder(e)){if(e===`__custom__`)return p`<span
        class="select-color__swatch"
        style="flex:0 0 auto;inline-size:1rem;block-size:1rem;"
        aria-hidden="true"
      ></span>`;let n=e===`__blank__`||e===`transparent`,r=`flex:0 0 auto;inline-size:1rem;block-size:1rem;border-radius:var(--c-radius-full);box-shadow:${[`0 0 0 1px var(--c-select-color-swatch-ring, transparent)`,`0 1px 1px rgb(0 0 0 / 20%)`,`inset 0 0 0 1px ${t}`].join(`, `)};`,i=`var(--c-select-color-swatch-checker, rgb(0 0 0 / 15%))`,a=`background:linear-gradient(45deg, ${i} 25%, transparent 25%),linear-gradient(-45deg, ${i} 25%, transparent 25%),linear-gradient(45deg, transparent 75%, ${i} 75%),linear-gradient(-45deg, transparent 75%, ${i} 75%);background-position:0 0, 0 0.25rem, 0.25rem -0.25rem, -0.25rem 0;background-size:0.5rem 0.5rem;`,o=ql(e)?e:e===`white`?`var(--c-surface-white)`:`var(--c-color-${e}-fill-quiet)`;return p`<span
      class="select-color__swatch"
      style="${n?r+a:e===``?r:r+`background-color:${o};`}"
      aria-hidden="true"
    ></span>`}_swatchBorder(e){if(ql(e)||e===`transparent`||e===``)return this._swatchBorder(`__blank__`);switch(e){case`__blank__`:return`var(--c-select-color-swatch-edge, rgb(0 0 0 / 15%))`;case`black`:return`color-mix(in srgb, var(--c-color-black-on-quiet), transparent 80%)`;case`white`:return`var(--c-table-border-color)`;default:return`var(--c-color-${e}-border-quiet)`}}_optionTemplate(e,t){return p`<craft-option .value=${e}>
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
      ><span class="sr-only">${e?.textContent?.trim()??``}</span>`}connectedCallback(){j(Yl,this,Zl).call(this),super.connectedCallback()}updated(e){super.updated(e),(e.has(`colors`)||e.has(`labels`)||e.has(`allowTransparent`)||e.has(`blankLabel`)||e.has(`allowCustom`)||e.has(`swatchOnly`))&&j(Yl,this,Zl).call(this)}};function Zl(){let e=document.createElement(`div`);s(p`${this.allowTransparent?this._optionTemplate(`__blank__`,this.blankLabel??n(`Transparent`)):i}${this.colors.map(e=>this._optionTemplate(e,this.labels[e]??(ql(e)?e:n(Kl(e)))))}${this.allowCustom?this._optionTemplate(`__custom__`,n(`Custom…`)):i}`,e);for(let e of k(Jl,this))e.remove();A(Jl,this,[...e.children]),this.append(...k(Jl,this))}Xl.styles=[...El.styles,Gl],r([c({type:Boolean,reflect:!0,attribute:`allow-transparent`})],Xl.prototype,`allowTransparent`,void 0),r([c({attribute:`blank-label`})],Xl.prototype,`blankLabel`,void 0),r([c({type:Boolean,reflect:!0,attribute:`allow-custom`})],Xl.prototype,`allowCustom`,void 0),r([c({type:Boolean,reflect:!0,attribute:`swatch-only`})],Xl.prototype,`swatchOnly`,void 0),r([c({type:Array})],Xl.prototype,`colors`,void 0),r([c({type:Object})],Xl.prototype,`labels`,void 0),customElements.get(`craft-select-color`)||customElements.define(`craft-select-color`,Xl);var Ql=a`
  ${ue}

  :host {
    width: 100%;
  }

  :host([small]) .input-group__input {
    --c-input-height: var(--c-size-control-sm);
  }

  ::slotted(.form-control) {
    ${ye}
  }

  .input-group__input {
    ${ge}
  }

  .indicator {
    position: absolute;
    inset-block-start: 50%;
    inset-inline-end: var(--c-input-spacing-inline);
    transform: translateY(-50%);
    width: 1em;
    height: 1em;
  }
`,$l=class extends oe(u){constructor(...e){super(...e),this.small=!1}get _control(){return super._control}_inputGroupInputTemplate(){return p`
      <div class="input-group__input">
        <slot name="input"></slot>
        <craft-icon class="indicator" name="chevron-down"></craft-icon>
      </div>
    `}};$l.styles=[ve,Ql],r([c({reflect:!0,type:Boolean})],$l.prototype,`small`,void 0),customElements.get(`craft-select`)||customElements.define(`craft-select`,$l);var eu=a`
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
`,tu=new WeakSet,nu=new WeakMap,ru=class extends u{constructor(){super(),O(this,tu),this.min=0,this.max=100,this.step=10,this.value=``,this.disabled=!1,this.readOnly=!1,this.valueText=String,M(this,nu,e=>{if(!iu.call(j(tu,this)))return;let t=j(tu,this,su).call(this)?-this.step:this.step,n={ArrowUp:au.call(j(tu,this))+this.step,ArrowDown:au.call(j(tu,this))-this.step,ArrowRight:au.call(j(tu,this))+t,ArrowLeft:au.call(j(tu,this))-t,Home:this.min,End:this.max};e.key in n&&(e.preventDefault(),j(tu,this,cu).call(this,n[e.key]))}),this.addEventListener(`keydown`,k(nu,this))}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`slider`)}updated(e){super.updated(e),this.setAttribute(`aria-valuemin`,String(this.min)),this.setAttribute(`aria-valuemax`,String(this.max)),this.setAttribute(`aria-valuenow`,String(au.call(j(tu,this)))),this.setAttribute(`aria-valuetext`,this.valueText(au.call(j(tu,this)))),this.setAttribute(`aria-readonly`,String(this.readOnly)),this.setAttribute(`aria-disabled`,String(this.disabled)),e.has(`disabled`)&&(this.tabIndex=this.disabled?-1:0)}render(){return p`
      <div class="slide-picker">
        ${j(tu,this,ou).call(this).map(e=>p`
            <span
              class=${w({"slide-picker__segment":!0,"is-active":e<=au.call(j(tu,this)),"is-last-active":e===au.call(j(tu,this))})}
              aria-hidden="true"
              @click=${()=>j(tu,this,cu).call(this,e)}
              title=${this.valueText(e)}
              >${i}</span
            >
          `)}
      </div>
    `}};function iu(){return!this.readOnly&&!this.disabled}function au(){return this.value===``?this.min:Number(this.value)}function ou(){let{min:e,max:t,step:n}=this;if(n<=0||t<e)throw Error(`Invalid craft-slide-picker range configuration.`);let r=(t-e)/n;if(!Number.isInteger(r))throw Error(`Invalid craft-slide-picker step configuration for the provided range.`);return Array.from({length:r+1},(t,r)=>e+r*n)}function su(){return(this.closest(`[dir]`)?.getAttribute(`dir`)??document.documentElement.getAttribute(`dir`))?.toLowerCase()===`rtl`}function cu(e){let t=Math.min(Math.max(e,this.min),this.max);!iu.call(j(tu,this))||t===au.call(j(tu,this))||(this.value=String(t),this.dispatchEvent(new Event(`input`)))}ru.styles=[eu],r([c({type:Number})],ru.prototype,`min`,void 0),r([c({type:Number})],ru.prototype,`max`,void 0),r([c({type:Number})],ru.prototype,`step`,void 0),r([c()],ru.prototype,`value`,void 0),r([c({type:Boolean,reflect:!0})],ru.prototype,`disabled`,void 0),r([c({type:Boolean,reflect:!0,attribute:`readonly`})],ru.prototype,`readOnly`,void 0),r([c({attribute:!1})],ru.prototype,`valueText`,void 0),customElements.get(`craft-slide-picker-slider`)||customElements.define(`craft-slide-picker-slider`,ru);var lu=a`
  :host {
    display: block;
  }
`,uu=new WeakMap,du=new WeakSet,fu=new WeakMap,pu=class extends fr(Se(u)){constructor(...e){super(...e),O(this,du),this.value=0,this.min=0,this.max=100,this.step=10,this.valueUnit=``,M(this,uu,void 0),M(this,fu,e=>{e.stopPropagation(),this.value=Number(e.target.value),this._syncFormValue(),_t(this),vt(this)})}get slots(){return{...super.slots,input:()=>document.createElement(`craft-slide-picker-slider`)}}connectedCallback(){super.connectedCallback(),k(uu,this)??A(uu,this,j(du,this,hu).call(this,this.value)),mu.call(j(du,this))?.addEventListener(`input`,k(fu,this))}disconnectedCallback(){mu.call(j(du,this))?.removeEventListener(`input`,k(fu,this)),super.disconnectedCallback()}_formValue(){return String(this.value)}formResetCallback(){this.value=k(uu,this)??this.min}willUpdate(e){super.willUpdate(e);let t=j(du,this,hu).call(this,this.value);t!==this.value&&(this.value=t)}updated(e){super.updated(e);let t=mu.call(j(du,this));t&&(t.min=this.min,t.max=this.max,t.step=this.step,t.value=String(this.value),t.readOnly=this.readOnly,t.disabled=this.disabled||this._formDisabled,t.valueText=e=>j(du,this,gu).call(this,e))}focus(e){mu.call(j(du,this))?.focus(e)}};function mu(){return this._control}function hu(e){let{min:t,max:n,step:r}=this,i=t+Math.round((Math.min(Math.max(Number.isFinite(e)?e:t,t),n)-t)/r)*r;return Math.min(Math.max(i,t),n)}function gu(e){if(this.valueLabel)return this.valueLabel(e);let t=this.valueUnit.trim(),n=/^\p{L}/u.test(t)?` `:``;return t?`${e}${n}${t}`:`${e}`}pu.styles=[ve,lu],r([c({type:Number})],pu.prototype,`value`,void 0),r([c({type:Number})],pu.prototype,`min`,void 0),r([c({type:Number})],pu.prototype,`max`,void 0),r([c({type:Number})],pu.prototype,`step`,void 0),r([c({attribute:`value-unit`})],pu.prototype,`valueUnit`,void 0),r([c({attribute:!1})],pu.prototype,`valueLabel`,void 0),customElements.get(`craft-slide-picker`)||customElements.define(`craft-slide-picker`,pu);var _u=a`
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
`,W=new WeakSet,vu=new WeakMap,yu=new WeakMap,bu=new WeakMap,xu=new WeakMap,Su=new WeakMap,Cu=new WeakMap,wu=new WeakMap,Tu=new WeakMap,Eu=class extends fr(u){constructor(...e){super(...e),O(this,W),this.min=-45,this.max=45,this.value=0,this.graduationMin=-70,this.graduationMax=70,this.label=n(`Rotate`),M(this,vu,!1),M(this,yu,!1),M(this,bu,0),M(this,xu,0),M(this,Su,0),M(this,Cu,0),M(this,wu,!1),M(this,Tu,null)}_formValue(){return String(this.value)}_restoreFormValue(e){this.value=Math.min(Math.max(Number(e??0),this.min),this.max)}connectedCallback(){super.connectedCallback(),A(Tu,this,new ResizeObserver(()=>j(W,this,ku).call(this))),k(Tu,this).observe(this)}disconnectedCallback(){super.disconnectedCallback(),k(Tu,this)?.disconnect(),A(Tu,this,null)}firstUpdated(){A(Cu,this,(j(W,this,Ou).call(this).length-1)*10),j(W,this,ku).call(this)}updated(e){super.updated(e),(e.has(`value`)||e.has(`min`)||e.has(`max`)||e.has(`graduationMin`)||e.has(`graduationMax`))&&j(W,this,ku).call(this)}render(){return p`
      <div
        class="slide-rule"
        role="slider"
        tabindex=${Du.call(j(W,this))?0:-1}
        aria-label=${this.label}
        aria-valuemin=${this.min}
        aria-valuemax=${this.max}
        aria-valuenow=${this.value}
        aria-valuetext=${j(W,this,Pu).call(this,this.value)}
        aria-disabled=${Du.call(j(W,this))?`false`:`true`}
        @keydown=${j(W,this,Ku)}
        @pointerdown=${j(W,this,Bu)}
        @pointermove=${j(W,this,Vu)}
        @pointerup=${j(W,this,Hu)}
        @pointercancel=${j(W,this,Uu)}
      >
        <div class="cursor"></div>
        <div class="graduations">
          <div
            class="indicator"
            aria-hidden="true"
            ?hidden=${this.value===0}
          ></div>
          <ul aria-hidden="true">
            ${j(W,this,Ou).call(this).map(e=>p`
                <li
                  class=${w({graduation:!0,"main-graduation":e%5==0})}
                  data-graduation=${e}
                >
                  <div class="label">${e}</div>
                </li>
              `)}
          </ul>
        </div>
      </div>
    `}};function Du(){return!this.disabled&&!this._formDisabled}function Ou(){let e=[];for(let t=this.graduationMin;t<=this.graduationMax;t++)e.push(t);return e}function ku(){this._graduations?.offsetWidth&&j(W,this,Mu).call(this),j(W,this,ju).call(this),!(!this._list||!this._graduations?.offsetWidth)&&(this._list.style.transform=`translateX(${j(W,this,Iu).call(this,this.value)}px)`,j(W,this,Au).call(this))}function Au(){k(wu,this)||(A(wu,this,!0),requestAnimationFrame(()=>this._root?.classList.add(`placed`)))}function ju(){if(!this._indicator)return;let e=(this.graduationMin-this.graduationMax)*-1,t=k(Cu,this)/e;this._indicator.style.inlineSize=`${Math.abs(this.value)*t}px`,this._indicator.style.translate=this.value>0?`-100%`:`0`}function Mu(){let e=j(W,this,Ou).call(this).length,t=this._list.getBoundingClientRect().width/e;t>0&&A(Cu,this,(e-1)*t)}function Nu(){let{transform:e}=getComputedStyle(this._list);return!e||e===`none`?0:new DOMMatrixReadOnly(e).m41}function Pu(e){return n(`{num, number} {num, plural, =1{degree} other{degrees}}`,{num:Math.round(e)})}function Fu(e){let t=this.graduationMin*-1,n=(this.graduationMin-this.graduationMax)*-1;return(this._graduations.offsetWidth/2+e*-1)/k(Cu,this)*n-t}function Iu(e){let t=this.graduationMin*-1,n=(this.graduationMin-this.graduationMax)*-1;return-((e+t)*k(Cu,this)/n-this._graduations.offsetWidth/2)}function Lu(e){let t=Math.min(Math.max(e,this.min),this.max);return t===this.value?!1:(this.value=t,this.dispatchEvent(new Event(`input`,{bubbles:!0,composed:!0})),!0)}function Ru(){this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}function zu(e){this.dispatchEvent(new CustomEvent(e,{detail:{value:this.value},bubbles:!0,composed:!0}))}function Bu(e){A(yu,this,Du.call(j(W,this))&&this._graduations.contains(e.target)&&e.target!==this._graduations),k(yu,this)&&(e.preventDefault(),A(xu,this,e.clientX),A(Su,this,j(W,this,Nu).call(this)),A(bu,this,this.value),this._root.setPointerCapture(e.pointerId),j(W,this,zu).call(this,`craft-drag-start`))}function Vu(e){k(yu,this)&&Math.abs(e.clientX-k(xu,this))>3&&(A(vu,this,!0),this._root.classList.add(`dragging`),e.preventDefault(),j(W,this,Gu).call(this,e))}function Hu(e){k(yu,this)&&(k(vu,this)?e.preventDefault():j(W,this,Gu).call(this,e),j(W,this,Wu).call(this,e))}function Uu(e){k(yu,this)&&j(W,this,Wu).call(this,e)}function Wu(e){A(vu,this,!1),this._root.classList.remove(`dragging`),this.value!==k(bu,this)&&j(W,this,Ru).call(this),j(W,this,zu).call(this,`craft-drag-end`),this._root.hasPointerCapture(e.pointerId)&&this._root.releasePointerCapture(e.pointerId),A(xu,this,0),A(yu,this,!1)}function Gu(e){let t=k(vu,this)?k(xu,this):this._cursor.getBoundingClientRect().left+this._cursor.offsetWidth/2,n=k(vu,this)?t-e.clientX:e.clientX-t,r=k(Su,this)-n;j(W,this,Lu).call(this,j(W,this,Fu).call(this,r))}function Ku(e){if(!Du.call(j(W,this)))return;let t=this.value,n;switch(e.key){case`ArrowUp`:case`ArrowRight`:n=j(W,this,Lu).call(this,t+1);break;case`ArrowDown`:case`ArrowLeft`:n=j(W,this,Lu).call(this,t-1);break;case`PageUp`:n=j(W,this,Lu).call(this,t+10);break;case`PageDown`:n=j(W,this,Lu).call(this,t-10);break;case`Home`:n=j(W,this,Lu).call(this,this.min);break;case`End`:n=j(W,this,Lu).call(this,this.max);break;default:return}n&&j(W,this,Ru).call(this),e.preventDefault()}Eu.shadowRootOptions={...u.shadowRootOptions,delegatesFocus:!0},Eu.styles=[_u],r([c({type:Number})],Eu.prototype,`min`,void 0),r([c({type:Number})],Eu.prototype,`max`,void 0),r([c({type:Number})],Eu.prototype,`value`,void 0),r([c({type:Number,attribute:`graduation-min`})],Eu.prototype,`graduationMin`,void 0),r([c({type:Number,attribute:`graduation-max`})],Eu.prototype,`graduationMax`,void 0),r([c()],Eu.prototype,`label`,void 0),r([m(`.slide-rule`)],Eu.prototype,`_root`,void 0),r([m(`.graduations`)],Eu.prototype,`_graduations`,void 0),r([m(`.graduations ul`)],Eu.prototype,`_list`,void 0),r([m(`.cursor`)],Eu.prototype,`_cursor`,void 0),r([m(`.indicator`)],Eu.prototype,`_indicator`,void 0),customElements.get(`craft-slide-rule`)||customElements.define(`craft-slide-rule`,Eu);var qu=a`
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
`,Ju=class extends u{constructor(...e){super(...e),this.label=null,this.status=null}getLabel(){return!this.label&&this.status?n(`Status: {status}`,{status:this.status}):this.label}render(){return p`
      <span
        class="${w({status:!0,"status--live":this.status===`live`,"status--enabled":this.status===`enabled`,"status--pending":this.status===`pending`,"status--expired":this.status===`expired`,"status--disabled":this.status===`disabled`})}"
        role="${this.getLabel()?`img`:i}"
        aria-label="${this.getLabel()??i}"
      ></span>
    `}};Ju.styles=[qu],r([c()],Ju.prototype,`label`,void 0),r([c()],Ju.prototype,`status`,void 0),customElements.get(`craft-status`)||customElements.define(`craft-status`,Ju);var Yu=new WeakSet,Xu=new WeakMap,Zu=new WeakMap,Qu=new WeakMap,$u=class extends u{constructor(...e){super(...e),O(this,Yu),this.checked=!1,this.disabled=!1,this.indeterminate=!1,M(this,Xu,()=>j(Yu,this,ed).call(this)),M(this,Zu,e=>{e.key===` `&&e.preventDefault()}),M(this,Qu,e=>{(e.key===` `||e.key===`Enter`)&&j(Yu,this,ed).call(this)})}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`switch`),this.addEventListener(`click`,k(Xu,this)),this.addEventListener(`keydown`,k(Zu,this)),this.addEventListener(`keyup`,k(Qu,this))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,k(Xu,this)),this.removeEventListener(`keydown`,k(Zu,this)),this.removeEventListener(`keyup`,k(Qu,this))}updated(e){super.updated(e),e.has(`disabled`)&&(this.tabIndex=this.disabled?-1:0,this.setAttribute(`aria-disabled`,String(this.disabled))),(e.has(`indeterminate`)||e.has(`checked`))&&this.setAttribute(`aria-checked`,this.checked?`true`:this.indeterminate?`mixed`:`false`)}render(){return p`
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
          ${de}
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
      `]}};function ed(){this.disabled||(this.focus(),this.checked=!this.checked,_t(this),vt(this))}r([c({type:Boolean,reflect:!0})],$u.prototype,`checked`,void 0),r([c({type:Boolean,reflect:!0})],$u.prototype,`disabled`,void 0),r([c({type:Boolean,reflect:!0})],$u.prototype,`indeterminate`,void 0),customElements.get(`craft-switch-button`)||customElements.define(`craft-switch-button`,$u);var td=a`
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
`;function nd(e){return(e??``).split(/\s+/).filter(Boolean)}function rd(e){return typeof CSS<`u`&&typeof CSS.escape==`function`?CSS.escape(e):e}var id=new WeakMap,ad=new WeakSet,od=new WeakMap,sd=class extends xt(u){constructor(...e){super(...e),O(this,ad),this.size=`medium`,this.onLabel=``,this.offLabel=``,this.indeterminateValue=`-`,this.indeterminate=!1,this.__clickableExternalLabels=new Set,M(this,id,!1),this.__onKeydown=e=>{if(e.key!==`ArrowLeft`&&e.key!==`ArrowRight`||this.disabled||e.target!==this._control)return;e.preventDefault();let t=getComputedStyle(this).direction===`rtl`;this._setCheckedState(e.key===(t?`ArrowLeft`:`ArrowRight`))},M(this,od,e=>{e.target===this._control&&this.__syncHiddenInput()}),this.__onExternalLabelClick=e=>{this.disabled||e.composedPath().includes(this)||this._control?.click()}}get _defaultValue(){return`1`}get _control(){return super._control}get slots(){return{...super.slots,input:()=>{let e=document.createElement(`craft-switch-button`);return e.setAttribute(`size`,this.size),e.setAttribute(`data-tag-name`,`craft-switch-button`),e},"state-description":()=>{let e=document.createElement(`div`);return e.textContent=this._stateDescriptionText,e},"hidden-input":()=>{if(!this.name)return;let e=document.createElement(`input`);return e.type=`hidden`,e.name=this.name,e.value=this._postedValue,e.disabled=this.disabled,e}}}connectedCallback(){this.name||=this._hiddenInputNode?.name??``,super.connectedCallback(),this.__setupExternalLabelClicks(),this.addEventListener(`keydown`,this.__onKeydown),this.addEventListener(`input`,k(od,this),!0),this.addEventListener(`change`,k(od,this),!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`keydown`,this.__onKeydown),this.removeEventListener(`input`,k(od,this),!0),this.removeEventListener(`change`,k(od,this),!0),this.__teardownExternalLabelClicks()}_onLabelClick(){this.disabled||this._control?.click()}get _hiddenInputNode(){return Array.from(this.children).find(e=>e instanceof HTMLInputElement&&e.slot===`hidden-input`)}get _postedValue(){return this.checked?this.value:this.indeterminate?this.indeterminateValue:``}get _stateDescriptionNode(){return Array.from(this.children).find(e=>e.slot===`state-description`)}get _stateDescriptionText(){return[this.onLabel?n(`Check for {onLabel}.`,{onLabel:this.onLabel}):``,this.offLabel?n(`Uncheck for {offLabel}.`,{offLabel:this.offLabel}):``].filter(Boolean).join(` `)}willUpdate(e){super.willUpdate(e),e.has(`checked`)&&this.checked&&this.indeterminate&&(this.indeterminate=!1)}updated(e){super.updated(e),(e.has(`onLabel`)||e.has(`offLabel`))&&this.__syncStateDescription(),[`checked`,`indeterminate`,`value`,`indeterminateValue`,`disabled`,`size`].some(t=>e.has(t))&&(this.__syncSwitchButton(),this.__syncHiddenInput()),(e.has(`checked`)||e.has(`indeterminate`))&&this.__syncToggleTargets()}__syncToggleTargets(){let e=this._control;if(!e)return;let t=e.getAttribute(`data-target`),n=e.getAttribute(`data-reverse-target`);if(!t&&!n)return;let r=window.jQuery;r&&r(e).data?.(`fieldtoggle`)||(this.__toggleTargets(t,this.checked),this.__toggleTargets(n,!this.checked))}__toggleTargets(e,t){if(!e)return;let n=/^[#.]/.test(e)?e:`#${e}`,r=this.getRootNode(),i=!1;for(let e of r.querySelectorAll(n))e.classList.contains(`hidden`)===t&&(e.classList.toggle(`hidden`,!t),i=!0);i&&t&&window.dispatchEvent(new Event(`resize`))}_setCheckedState(e){if(this.disabled)return;let t=this.indeterminate;this.checked===e&&!t||(this.indeterminate=!1,this.checked=e,this.__dispatchNativeChange())}get on(){return this.checked}get postedValue(){return this._postedValue}turnOn(e=!1){j(ad,this,cd).call(this,()=>this._setCheckedState(!0),e)}turnOff(e=!1){j(ad,this,cd).call(this,()=>this._setCheckedState(!1),e)}turnIndeterminate(e=!1){j(ad,this,cd).call(this,()=>{this.indeterminate&&!this.checked||(this.checked=!1,this.indeterminate=!0,this.__dispatchNativeChange())},e)}__dispatchNativeChange(){k(id,this)||this._control&&vt(this._control)}__setupExternalLabelClicks(){let e=this._control;if(!e)return;let t=this.getRootNode(),n=new Set(nd(e.getAttribute(`aria-labelledby`)).map(e=>t.getElementById?.(e)).filter(e=>e instanceof HTMLLabelElement).filter(e=>e!==this._labelNode));if(e.id)for(let r of t.querySelectorAll(`label[for="${rd(e.id)}"]`))n.add(r);for(let e of n)this.__clickableExternalLabels.has(e)||(e.addEventListener(`click`,this.__onExternalLabelClick),this.__clickableExternalLabels.add(e))}__teardownExternalLabelClicks(){for(let e of this.__clickableExternalLabels)e.removeEventListener(`click`,this.__onExternalLabelClick);this.__clickableExternalLabels.clear()}__syncSwitchButton(){let e=this._control;if(!e)return;e.getAttribute(`size`)!==this.size&&e.setAttribute(`size`,this.size);let t=this.indeterminate&&!this.checked;e.indeterminate!==t&&(e.indeterminate=t)}__syncHiddenInput(){let e=this._hiddenInputNode;e&&(e.value=this._postedValue,e.disabled=this.disabled,this.name&&e.name!==this.name&&(e.name=this.name))}__syncStateDescription(){let e=this._stateDescriptionNode;if(!e)return;let t=this._stateDescriptionText;e.textContent=t,t?this.addToAriaDescribedBy(e,{idPrefix:`state-description`}):this.removeFromAriaDescribedBy(e)}render(){return p`
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
    `}};function cd(e,t){if(!this.disabled){if(!t){e();return}A(id,this,!0),e(),A(id,this,!1)}}sd.styles=[...yt,ue,td],r([c({type:String,reflect:!0})],sd.prototype,`size`,void 0),r([c({type:String,attribute:`on-label`})],sd.prototype,`onLabel`,void 0),r([c({type:String,attribute:`off-label`})],sd.prototype,`offLabel`,void 0),r([c({attribute:`indeterminate-value`})],sd.prototype,`indeterminateValue`,void 0),r([c({type:Boolean,reflect:!0})],sd.prototype,`indeterminate`,void 0),customElements.get(`craft-switch`)||customElements.define(`craft-switch`,sd);var ld=a`
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
   * Room beside each label for its hover fill. The gap between tabs shrinks to
   * make up for it, so the labels sit only a little further apart.
   */
  :host(:not([appearance='fill'])) {
    --c-tab-padding-inline: var(--c-spacing-md);
    --c-tabs-tab-gap: var(--c-spacing-md);
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
    /* Keeps a hovered tab's fill clear of the rule; the indicator is pulled
       back across the gap to sit on the rule. */
    --_strip-padding: var(--c-spacing-md);
  }

  :host(:is([placement='inline-start'], [placement='inline-end'])) .tabs {
    flex-direction: row;
  }

  :host(:is([placement='inline-start'], [placement='inline-end']))
    .tabs__strip {
    align-items: stretch;
    min-inline-size: var(--c-tabs-strip-min-inline-size, calc(120rem / 16));
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
    --c-tab-indicator-inset-inline-end: calc(-1px - var(--_strip-padding));
  }

  :host([placement='inline-start']) .tabs__strip {
    padding-inline-end: var(--_strip-padding);
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
    --c-tab-indicator-inset-inline-start: calc(-1px - var(--_strip-padding));
    --c-tab-indicator-inset-inline-end: auto;
  }

  :host([placement='inline-end']) .tabs__strip {
    padding-inline-start: var(--_strip-padding);
    border-inline-start-width: 1px;
  }

  /*
   * Fill: the tabs sit on a quiet track instead of a rule, and the selected
   * one is raised out of it. Its border carries the selection, so it keeps 3:1
   * against the track. The underline indicator isn't drawn.
   */
  :host([appearance='fill']) {
    /* The fill appearance has its own hover state. */
    --c-tab-fill-hover: transparent;
    --_track-padding: var(--c-spacing-sm);
    --_tab-radius: var(--c-form-control-radius);
    --c-tab-indicator-fill-active: transparent;
    --c-tab-padding-inline: var(--c-spacing-md);
    --c-tab-padding-block: 0.25em;
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
`,ud={BlockStart:`block-start`,BlockEnd:`block-end`,InlineStart:`inline-start`,InlineEnd:`inline-end`};Object.values(ud);var dd={Line:`line`,Fill:`fill`};Object.values(dd);var fd={Horizontal:`horizontal`,Vertical:`vertical`};Object.values(fd);var pd=[ud.InlineStart,ud.InlineEnd],md={horizontal:new Set([`ArrowLeft`,`ArrowRight`,`Home`,`End`]),vertical:new Set([`ArrowUp`,`ArrowDown`,`Home`,`End`])},hd=new WeakMap,G=new WeakSet,gd=new WeakMap,_d=new WeakMap,vd=new WeakMap,yd=new WeakMap,bd=new WeakMap,xd=new WeakMap,Sd=new WeakMap,Cd=new WeakMap,wd=new WeakMap,Td=new WeakMap,Ed=new WeakMap,Dd=class extends u{constructor(...e){super(...e),O(this,G),M(this,hd,0),this.placement=ud.BlockStart,this.appearance=dd.Line,this.label=null,this.equalWidth=!1,this.syncLocationHash=!0,this.size=`medium`,M(this,gd,[]),M(this,_d,!1),M(this,vd,[]),M(this,yd,null),M(this,bd,null),M(this,xd,void 0),M(this,Sd,!1),M(this,Cd,()=>{let e=decodeURIComponent(window.location.hash.slice(1));if(e===``)return;let t=K.call(j(G,this)).findIndex((t,n)=>j(G,this,Ld).call(this,n)===e);t>=0&&t!==this.selectedIndex&&(this.selectedIndex=t)}),M(this,wd,()=>{j(G,this,zd).call(this),!k(_d,this)&&this.tabs.length!==this.panels.length&&console.warn(`The amount of tabs (${this.tabs.length}) doesn't match the amount of panels (${this.panels.length}).`),K.call(j(G,this)).forEach((e,t)=>{let n=()=>j(G,this,qd).call(this,t,!0),r=e=>{kd.call(j(G,this)).has(e.key)&&e.preventDefault()},i=e=>j(G,this,Jd).call(this,e);e.addEventListener(`click`,n),e.addEventListener(`keydown`,r),e.addEventListener(`keyup`,i),k(gd,this).push(()=>{e.removeEventListener(`click`,n),e.removeEventListener(`keydown`,r),e.removeEventListener(`keyup`,i)})}),j(G,this,Pd).call(this)||j(G,this,Bd).call(this)}),M(this,Td,()=>{k(Sd,this)||(A(Sd,this,!0),requestAnimationFrame(()=>{A(Sd,this,!1),j(G,this,Hd).call(this)}))}),M(this,Ed,e=>{e.target===e.currentTarget&&e.stopPropagation()})}get selectedIndex(){return k(hd,this)}set selectedIndex(e){A(hd,this,e),k(_d,this)||j(G,this,Bd).call(this)}get layout(){return Od.call(j(G,this))?fd.Vertical:fd.Horizontal}set layout(e){this.placement=e===fd.Vertical?ud.InlineStart:ud.BlockStart}get tabs(){return j(G,this,Ad).call(this,`tab`)}get panels(){return j(G,this,Ad).call(this,`panel`)}refresh(){j(G,this,Bd).call(this),j(G,this,Hd).call(this)}firstUpdated(e){super.firstUpdated(e),A(_d,this,K.call(j(G,this)).some(e=>e.controls));let t=this.shadowRoot?.querySelector(`slot[name="tab"]`);t?.addEventListener(`slotchange`,k(wd,this)),this.shadowRoot?.querySelector(`slot[name="panel"]`)?.addEventListener(`slotchange`,k(wd,this)),k(wd,this).call(this),A(bd,this,this.selectedIndex),this.syncLocationHash&&k(Cd,this).call(this),t?.addEventListener(`slotchange`,k(Td,this)),j(G,this,Nd).call(this),j(G,this,Hd).call(this),this.label||console.error("<craft-tabs> needs a `label` naming what its tabs switch between.",this)}connectedCallback(){super.connectedCallback(),this.hasUpdated&&(k(wd,this).call(this),j(G,this,Nd).call(this))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener(`hashchange`,k(Cd,this)),j(G,this,zd).call(this),k(xd,this)?.disconnect(),A(xd,this,void 0)}updated(e){super.updated(e),!(e.has(`selectedIndex`)&&j(G,this,Pd).call(this))&&(e.has(`selectedIndex`)&&(k(_d,this)&&j(G,this,Bd).call(this),k(bd,this)!==null&&this.selectedIndex!==k(bd,this)&&(j(G,this,Rd).call(this),this.dispatchEvent(new CustomEvent(`craft-tab-show`))),A(bd,this,this.selectedIndex)),(e.has(`selectedIndex`)||e.has(`placement`)||e.has(`size`)||e.has(`equalWidth`))&&j(G,this,Hd).call(this))}render(){return p`
      <div class="tabs" part="base">
        <div class="tabs__strip" part="strip">
          <div
            class="tabs__tab-group"
            part="tab-group"
            role="tablist"
            aria-label="${this.label||i}"
            aria-orientation="${Od.call(j(G,this))?`vertical`:`horizontal`}"
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
            @craft-show=${k(Ed,this)}
            @craft-hide=${k(Ed,this)}
            @craft-after-show=${k(Ed,this)}
            @craft-after-hide=${k(Ed,this)}
            @craft-select=${k(Ed,this)}
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
    `}};function Od(){return pd.includes(this.placement)}function kd(){return md[Od.call(j(G,this))?`vertical`:`horizontal`]}function Ad(e){return Array.from(this.children).filter(t=>t instanceof HTMLElement&&t.slot===e)}function K(){return this.tabs}function jd(){return this.shadowRoot?.querySelector(`.tabs__tab-group`)??null}function Md(){return this.shadowRoot?.querySelector(`.tabs__overflow`)??null}function Nd(){this.syncLocationHash&&window.addEventListener(`hashchange`,k(Cd,this)),A(xd,this,new ResizeObserver(k(Td,this))),k(xd,this).observe(this)}function Pd(){if(j(G,this,Fd).call(this,this.selectedIndex))return!1;let e=K.call(j(G,this)).findIndex((e,t)=>j(G,this,Fd).call(this,t));return e<0||e===this.selectedIndex?!1:(this.selectedIndex=e,!0)}function Fd(e){let t=K.call(j(G,this))[e];return!!t&&!t.disabled&&(k(_d,this)||e<this.panels.length)}function Id(){K.call(j(G,this)).forEach((e,t)=>{e.setAttribute(`tabindex`,t===this.selectedIndex?`0`:`-1`)})}function Ld(e){return K.call(j(G,this))[e]?.controls||null}function Rd(){let e=this.syncLocationHash?j(G,this,Ld).call(this,this.selectedIndex):null;if(e===null)return;let t=new URL(window.location.href);t.hash=e,window.history.replaceState(window.history.state,``,t)}function zd(){for(;k(gd,this).length;)k(gd,this).pop()?.()}function Bd(){if(!this.hasUpdated)return;let e=this.panels,t=K.call(j(G,this)).map((t,n)=>k(_d,this)?j(G,this,Vd).call(this,t):e[n]??null),n=t.some(Boolean);K.call(j(G,this)).forEach((e,r)=>{let i=r===this.selectedIndex,a=t[r];if(e.id||=le(`tab`),e.setAttribute(`role`,`tab`),e.toggleAttribute(`selected`,i),e.setAttribute(`aria-selected`,String(i)),!a){k(_d,this)&&n&&console.error(`<craft-tabs> found no panel with id "${e.controls}".`,e);return}a.id||=le(`panel`),e.setAttribute(`aria-controls`,a.id),a.setAttribute(`role`,`tabpanel`),a.setAttribute(`aria-labelledby`,e.id),a.hasAttribute(`tabindex`)||a.setAttribute(`tabindex`,`0`),k(_d,this)&&a.classList.toggle(`hidden`,!i),a.toggleAttribute(`selected`,i)}),k(_d,this)||e.slice(K.call(j(G,this)).length).forEach(e=>e.removeAttribute(`selected`)),j(G,this,Id).call(this)}function Vd(e){return e.controls?document.getElementById(e.controls):null}function Hd(){let e=jd.call(j(G,this)),t=Md.call(j(G,this)),n=K.call(j(G,this));if(!e||!t)return;if(Od.call(j(G,this))||this.equalWidth||n.length===0){j(G,this,Wd).call(this,[]);return}n.forEach(e=>e.removeAttribute(`hidden`)),t.hidden=!0,e.classList.add(`tabs__tab-group--measuring`);let r=j(G,this,Ud).call(this,e),i=n.map(e=>e.offsetWidth);if(e.classList.remove(`tabs__tab-group--measuring`),i.reduce((e,t,n)=>e+t+(n?r:0),0)<=e.clientWidth+1){j(G,this,Wd).call(this,[]);return}t.hidden=!1;let a=e.clientWidth,o=[],s=0;for(let e=0;e<n.length;e++){let t=i[e]+(o.length?r:0);if(s+t>a+1)break;s+=t,o.push(e)}let c=this.selectedIndex;if(c>=0&&c<n.length&&!o.includes(c)){let e=i[c];for(;o.length&&s+e+r>a;){let e=o.pop();s-=i[e]+(o.length?r:0)}o.push(c)}let l=new Set(o);j(G,this,Wd).call(this,n.map((e,t)=>t).filter(e=>!l.has(e)))}function Ud(e){let t=parseFloat(getComputedStyle(e).columnGap);return Number.isFinite(t)?t:0}function Wd(e){let t=Md.call(j(G,this)),n=new Set(e);if(K.call(j(G,this)).forEach((e,t)=>{e.toggleAttribute(`hidden`,n.has(t))}),A(vd,this,e),!t)return;t.hidden=e.length===0;let r=JSON.stringify(e.map(e=>{let t=K.call(j(G,this))[e];return[e,t.textContent?.trim()??``,t.disabled]}));r!==k(yd,this)&&(A(yd,this,r),t.actions=j(G,this,Gd).call(this))}function Gd(){return k(vd,this).map(e=>{let t=K.call(j(G,this))[e];return{label:t.textContent?.trim()??``,disabled:t.disabled,onClick:()=>j(G,this,Kd).call(this,e)}})}function Kd(e){let t=K.call(j(G,this))[e];if(!t||!j(G,this,Fd).call(this,e))return;let n=Md.call(j(G,this));n&&(n.open=!1),this.selectedIndex=e,j(G,this,Hd).call(this),t.focus()}function qd(e,t){let n=K.call(j(G,this))[e];!n||!j(G,this,Fd).call(this,e)||(this.selectedIndex=e,t&&n.focus())}function Jd(e){if(!kd.call(j(G,this)).has(e.key))return;let t=j(G,this,Yd).call(this,e.key);t!==-1&&j(G,this,qd).call(this,t,!0)}function Yd(e){let t=K.call(j(G,this)),n=e=>j(G,this,Fd).call(this,e)&&!t[e].hidden;if(e===`Home`)return t.findIndex((e,t)=>n(t));if(e===`End`){for(let e=t.length-1;e>=0;e--)if(n(e))return e;return-1}let r=e===`ArrowRight`||e===`ArrowDown`?1:-1;for(let e=1;e<=t.length;e++){let i=((this.selectedIndex+r*e)%t.length+t.length)%t.length;if(n(i))return i}return-1}Dd.styles=[re,ld],r([c({type:Number,attribute:`selected-index`,reflect:!0})],Dd.prototype,`selectedIndex`,null),r([c({reflect:!0})],Dd.prototype,`placement`,void 0),r([c({reflect:!0})],Dd.prototype,`appearance`,void 0),r([c()],Dd.prototype,`label`,void 0),r([c({type:Boolean,reflect:!0,attribute:`equal-width`})],Dd.prototype,`equalWidth`,void 0),r([c({attribute:`sync-location-hash`,converter:{fromAttribute:e=>e!==`false`}})],Dd.prototype,`syncLocationHash`,void 0),r([c({reflect:!0})],Dd.prototype,`layout`,null),r([c({reflect:!0})],Dd.prototype,`size`,void 0),Dd.disableWarning?.(`change-in-update`),customElements.get(`craft-tabs`)||customElements.define(`craft-tabs`,Dd);var Xd=a`
  :host {
    display: inline-flex;
    padding-inline: var(--c-tab-padding-inline, 0);
    padding-block: var(--c-tab-padding-block, 0.5em);
    position: relative;
    /* Keeps the hover fill below behind the label, but not behind the page. */
    isolation: isolate;
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
      --c-tab-indicator-fill-active,
      var(--c-color-accent-fill-loud)
    );
  }

  @media (forced-colors: active) {
    :host([selected])::after {
      background-color: Highlight;
    }
  }

  /*
   * The hover fill, like the sidebar nav's: shorter than the tab and centered
   * in it, so it stays clear of the strip's rule and the selected indicator.
   * It's drawn on ::before rather than the host's background for that reason.
   */
  @media (hover: hover) {
    :host(:hover:not([selected]):not([disabled]))::before {
      content: '';
      position: absolute;
      inset-inline: 0;
      inset-block: 0;
      /* The set height for a one-line label, growing a line at a time as the
         label wraps: the tab's content box less one line is the extra lines. */
      --_fill-block-size: var(--c-tab-fill-block-size, calc(30em / 14));
      block-size: min(
        100%,
        max(
          var(--_fill-block-size),
          100% - 2 * var(--c-tab-padding-block, 0.5em) - 1lh +
            var(--_fill-block-size)
        )
      );
      margin-block: auto;
      z-index: -1;
      border-radius: var(--c-radius-md);
      background-color: var(
        --c-tab-fill-hover,
        color-mix(in oklab, var(--c-color-mix-hover), transparent)
      );
    }
  }

  /* Forced colors drop the fill, so a hovered tab shows the indicator instead. */
  @media (forced-colors: active) {
    :host(:hover:not([selected]):not([disabled]))::after {
      background-color: CanvasText;
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
    ${xe}
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
`,Zd=class extends u{constructor(...e){super(...e),this.disabled=!1,this.controls=null,this._lightDom=new v(this,{characterData:!0})}get selected(){return this.hasAttribute(`selected`)}render(){return p`<slot name="prefix" class="tab__prefix"></slot
      ><span class="tab__label" data-text="${this.textContent?.trim()??``}"
        ><span class="tab__text"><slot></slot></span></span
      ><slot name="suffix" class="tab__suffix"></slot>`}};Zd.styles=[re,Xd],r([c({type:Boolean,reflect:!0})],Zd.prototype,`disabled`,void 0),r([c({reflect:!0})],Zd.prototype,`controls`,void 0),customElements.get(`craft-tab`)||customElements.define(`craft-tab`,Zd);var Qd=class{diff(e,t,n={}){let r;typeof n==`function`?(r=n,n={}):`callback`in n&&(r=n.callback);let i=this.castInput(e,n),a=this.castInput(t,n),o=this.removeEmpty(this.tokenize(i,n)),s=this.removeEmpty(this.tokenize(a,n));return this.diffWithOptionsObj(o,s,n,r)}diffWithOptionsObj(e,t,n,r){let i=e=>{if(e=this.postProcess(e,n),r){setTimeout(function(){r(e)},0);return}else return e},a=t.length,o=e.length,s=1,c=a+o;n.maxEditLength!=null&&(c=Math.min(c,n.maxEditLength));let l=n.timeout??1/0,u=Date.now()+l,d=[{oldPos:-1,lastComponent:void 0}],f=this.extractCommon(d[0],t,e,0,n);if(d[0].oldPos+1>=o&&f+1>=a)return i(this.buildValues(d[0].lastComponent,t,e));let p=-1/0,m=1/0,h=()=>{for(let r=Math.max(p,-s);r<=Math.min(m,s);r+=2){let s,c=d[r-1],l=d[r+1];c&&(d[r-1]=void 0);let u=!1;if(l){let e=l.oldPos-r;u=l&&0<=e&&e<a}let h=c&&c.oldPos+1<o;if(!u&&!h){d[r]=void 0;continue}if(s=!h||u&&c.oldPos<l.oldPos?this.addToPath(l,!0,!1,0,n):this.addToPath(c,!1,!0,1,n),f=this.extractCommon(s,t,e,r,n),s.oldPos+1>=o&&f+1>=a)return i(this.buildValues(s.lastComponent,t,e))||!0;d[r]=s,s.oldPos+1>=o&&(m=Math.min(m,r-1)),f+1>=a&&(p=Math.max(p,r+1))}s++};if(r)(function e(){setTimeout(function(){if(s>c||Date.now()>u)return r(void 0);h()||e()},0)})();else for(;s<=c&&Date.now()<=u;){let e=h();if(e)return e}}addToPath(e,t,n,r,i){let a=e.lastComponent;return a&&!i.oneChangePerToken&&a.added===t&&a.removed===n?{oldPos:e.oldPos+r,lastComponent:{count:a.count+1,added:t,removed:n,previousComponent:a.previousComponent}}:{oldPos:e.oldPos+r,lastComponent:{count:1,added:t,removed:n,previousComponent:a}}}extractCommon(e,t,n,r,i){let a=t.length,o=n.length,s=e.oldPos,c=s-r,l=0;for(;c+1<a&&s+1<o&&this.equals(n[s+1],t[c+1],i);)c++,s++,l++,i.oneChangePerToken&&(e.lastComponent={count:1,previousComponent:e.lastComponent,added:!1,removed:!1});return l&&!i.oneChangePerToken&&(e.lastComponent={count:l,previousComponent:e.lastComponent,added:!1,removed:!1}),e.oldPos=s,c}equals(e,t,n){return n.comparator?n.comparator(e,t):e===t||!!n.ignoreCase&&e.toLowerCase()===t.toLowerCase()}removeEmpty(e){let t=[];for(let n=0;n<e.length;n++)e[n]&&t.push(e[n]);return t}castInput(e,t){return e}tokenize(e,t){return Array.from(e)}join(e){return e.join(``)}postProcess(e,t){return e}get useLongestToken(){return!1}buildValues(e,t,n){let r=[],i;for(;e;)r.push(e),i=e.previousComponent,delete e.previousComponent,e=i;r.reverse();let a=r.length,o=0,s=0,c=0;for(;o<a;o++){let e=r[o];if(e.removed)e.value=this.join(n.slice(c,c+e.count)),c+=e.count;else{if(!e.added&&this.useLongestToken){let r=t.slice(s,s+e.count);r=r.map(function(e,t){let r=n[c+t];return r.length>e.length?r:e}),e.value=this.join(r)}else e.value=this.join(t.slice(s,s+e.count));s+=e.count,e.added||(c+=e.count)}}return r}};new class extends Qd{};function $d(e,t){let n;for(n=0;n<e.length&&n<t.length;n++)if(e[n]!=t[n])return e.slice(0,n);return e.slice(0,n)}function ef(e,t){let n;if(!e||!t||e[e.length-1]!=t[t.length-1])return``;for(n=0;n<e.length&&n<t.length;n++)if(e[e.length-(n+1)]!=t[t.length-(n+1)])return e.slice(-n);return e.slice(-n)}function tf(e,t,n){if(e.slice(0,t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't start with prefix ${JSON.stringify(t)}; this is a bug`);return n+e.slice(t.length)}function nf(e,t,n){if(!t)return e+n;if(e.slice(-t.length)!=t)throw Error(`string ${JSON.stringify(e)} doesn't end with suffix ${JSON.stringify(t)}; this is a bug`);return e.slice(0,-t.length)+n}function rf(e,t){return tf(e,t,``)}function af(e,t){return nf(e,t,``)}function of(e,t){return t.slice(0,sf(e,t))}function sf(e,t){let n=0;e.length>t.length&&(n=e.length-t.length);let r=t.length;e.length<t.length&&(r=e.length);let i=Array(r),a=0;i[0]=0;for(let e=1;e<r;e++){for(t[e]==t[a]?i[e]=i[a]:i[e]=a;a>0&&t[e]!=t[a];)a=i[a];t[e]==t[a]&&a++}a=0;for(let r=n;r<e.length;r++){for(;a>0&&e[r]!=t[a];)a=i[a];e[r]==t[a]&&a++}return a}function cf(e,t){let n=[];for(let r of Array.from(t.segment(e))){let e=r.segment;n.length&&/\s/.test(n[n.length-1])&&/\s/.test(e)?n[n.length-1]+=e:n.push(e)}return n}function lf(e,t){if(t)return df(e,t)[1];let n;for(n=e.length-1;n>=0&&e[n].match(/\s/);n--);return e.substring(n+1)}function uf(e,t){if(t)return df(e,t)[0];let n=e.match(/^\s*/);return n?n[0]:``}function df(e,t){if(!t)return[uf(e),lf(e)];if(t.resolvedOptions().granularity!=`word`)throw Error(`The segmenter passed must have a granularity of "word"`);let n=cf(e,t),r=n[0],i=n[n.length-1];return[/\s/.test(r)?r:``,/\s/.test(i)?i:``]}var ff=`a-zA-Z0-9_\\u{AD}\\u{C0}-\\u{D6}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}`,pf=RegExp(`[${ff}]+|\\s+|[^${ff}]`,`ug`);new class extends Qd{equals(e,t,n){return n.ignoreCase&&(e=e.toLowerCase(),t=t.toLowerCase()),e.trim()===t.trim()}tokenize(e,t={}){let n;if(t.intlSegmenter){let r=t.intlSegmenter;if(r.resolvedOptions().granularity!=`word`)throw Error(`The segmenter passed must have a granularity of "word"`);n=cf(e,r)}else n=e.match(pf)||[];let r=[],i=null;return n.forEach(e=>{/\s/.test(e)?i==null?r.push(e):r.push(r.pop()+e):i!=null&&/\s/.test(i)?r[r.length-1]==i?r.push(r.pop()+e):r.push(i+e):r.push(e),i=e}),r}join(e){return e.map((e,t)=>t==0?e:e.replace(/^\s+/,``)).join(``)}postProcess(e,t){if(!e||t.oneChangePerToken)return e;let n=null,r=null,i=null;return e.forEach(e=>{e.added?r=e:e.removed?i=e:((r||i)&&mf(n,i,r,e,t.intlSegmenter),n=e,r=null,i=null)}),(r||i)&&mf(n,i,r,null,t.intlSegmenter),e}};function mf(e,t,n,r,i){if(t&&n){let[a,o]=df(t.value,i),[s,c]=df(n.value,i);if(e){let r=$d(a,s);e.value=nf(e.value,s,r),t.value=rf(t.value,r),n.value=rf(n.value,r)}if(r){let e=ef(o,c);r.value=tf(r.value,c,e),t.value=af(t.value,e),n.value=af(n.value,e)}}else if(n){if(e){let e=uf(n.value,i);n.value=n.value.substring(e.length)}if(r){let e=uf(r.value,i);r.value=r.value.substring(e.length)}}else if(e&&r){let n=uf(r.value,i),[a,o]=df(t.value,i),s=$d(n,a);t.value=rf(t.value,s);let c=ef(rf(n,s),o);t.value=af(t.value,c),r.value=tf(r.value,n,c),e.value=nf(e.value,n,n.slice(0,n.length-c.length))}else if(r){let e=uf(r.value,i),n=of(lf(t.value,i),e);t.value=af(t.value,n)}else if(e){let n=of(lf(e.value,i),uf(t.value,i));t.value=rf(t.value,n)}}var hf=new class extends Qd{tokenize(e){let t=RegExp(`(\\r?\\n)|[${ff}]+|[^\\S\\n\\r]+|[^${ff}]`,`ug`);return e.match(t)||[]}};function gf(e,t,n){return hf.diff(e,t,n)}new class extends Qd{constructor(){super(...arguments),this.tokenize=_f}equals(e,t,n){return n.ignoreWhitespace?((!n.newlineIsToken||!e.includes(`
`))&&(e=e.trim()),(!n.newlineIsToken||!t.includes(`
`))&&(t=t.trim())):n.ignoreNewlineAtEof&&!n.newlineIsToken&&(e.endsWith(`
`)&&(e=e.slice(0,-1)),t.endsWith(`
`)&&(t=t.slice(0,-1))),super.equals(e,t,n)}};function _f(e,t){t.stripTrailingCr&&(e=e.replace(/\r\n/g,`
`));let n=[],r=e.split(/(\n|\r\n)/);r[r.length-1]||r.pop();for(let e=0;e<r.length;e++){let i=r[e];e%2&&!t.newlineIsToken?n[n.length-1]+=i:n.push(i)}return n}function vf(e){return e==`.`||e==`!`||e==`?`}new class extends Qd{tokenize(e){let t=[],n=0;for(let r=0;r<e.length;r++){if(r==e.length-1){t.push(e.slice(n));break}if(vf(e[r])&&e[r+1].match(/\s/)){for(t.push(e.slice(n,r+1)),r=n=r+1;e[r+1]?.match(/\s/);)r++;t.push(e.slice(n,r+1)),n=r+1}}return t}},new class extends Qd{tokenize(e){return e.split(/([{}:;,]|\s+)/)}},new class extends Qd{constructor(){super(...arguments),this.tokenize=_f}get useLongestToken(){return!0}castInput(e,t){let{undefinedReplacement:n,stringifyReplacer:r=(e,t)=>t===void 0?n:t}=t;return typeof e==`string`?e:JSON.stringify(yf(e,null,null,r),null,`  `)}equals(e,t,n){return super.equals(e.replace(/,([\r\n])/g,`$1`),t.replace(/,([\r\n])/g,`$1`),n)}};function yf(e,t,n,r,i){t||=[],n||=[],r&&(e=r(i===void 0?``:i,e));let a;for(a=0;a<t.length;a+=1)if(t[a]===e)return n[a];let o;if(Object.prototype.toString.call(e)===`[object Array]`){for(t.push(e),o=Array(e.length),n.push(o),a=0;a<e.length;a+=1)o[a]=yf(e[a],t,n,r,String(a));return t.pop(),n.pop(),o}if(e&&e.toJSON&&(e=e.toJSON()),typeof e==`object`&&e){t.push(e),o={},n.push(o);let i=[],s;for(s in e)Object.prototype.hasOwnProperty.call(e,s)&&i.push(s);for(i.sort(),a=0;a<i.length;a+=1)s=i[a],o[s]=yf(e[s],t,n,r,s);t.pop(),n.pop()}else o=e;return o}new class extends Qd{tokenize(e){return e.slice()}join(e){return e}removeEmpty(e){return e}};var bf=e=>!e.added&&!e.removed;function xf(e,t){let n=gf(e,t,{timeout:100})??[{value:e,added:!1,removed:!0,count:1},{value:t,added:!0,removed:!1,count:1}],r=[],i=``,a=``,o=()=>{i&&r.push({value:i,added:!1,removed:!0,count:1}),a&&r.push({value:a,added:!0,removed:!1,count:1}),i=a=``};return n.forEach((e,t)=>{let s=n[t+1],c=bf(e)&&/^[^\S\r\n\u2028\u2029]+$/.test(e.value)&&!!(i||a)&&s!==void 0&&!bf(s);(e.removed||c)&&(i+=e.value),(e.added||c)&&(a+=e.value),bf(e)&&!c&&(o(),r.push(e))}),o(),r}function Sf(e,t,n=[],r=!1){if(!e)return{pieces:[{kind:`equal`,parts:[{text:t.map(e=>e.value).join(``),marked:!1}]}],collapsible:!1};let i=n.flatMap(t=>{let n=e.indexOf(t);return n===-1?[]:[[n,n+t.length]]}),a=[],o=0,s=!1;return t.forEach((e,n)=>{let c=e.value;if(e.added){a.push({kind:`insert`,parts:[{text:c,marked:!1}]});return}let l=o;if(o+=c.length,e.removed||c.length<=200){a.push({kind:e.removed?`delete`:`equal`,parts:Ef(c,l,i)});return}let u=[],d={kind:`gap`,parts:[{text:`…`,marked:!1}]},f=0;for(let[e,r]of Cf(c,l,n>0,n<t.length-1,i))e>f&&u.push(d),u.push({kind:`equal`,parts:Ef(c.slice(e,r),l+e,i)}),f=r;f<c.length&&u.push(d),s||=u.includes(d),a.push(...r?[{kind:`equal`,parts:Ef(c,l,i)}]:u)}),{pieces:a,collapsible:s}}function Cf(e,t,n,r,i){let a=[];n&&a.push([0,80]),r&&a.push([e.length-80,e.length]);for(let[n,r]of i)n<t+e.length&&r>t&&a.push([n-t-80/2,r-t+80/2]);if(!a.length)return[[0,e.length]];let o=[];for(let[t,n]of a.map(([t,n])=>[wf(e,Math.max(t,0)),Tf(e,Math.min(n,e.length))]).sort((e,t)=>e[0]-t[0])){let e=o.at(-1);e&&t-e[1]<40?e[1]=Math.max(e[1],n):o.push([t,n])}return o[0][0]<40&&(o[0][0]=0),e.length-o.at(-1)[1]<40&&(o.at(-1)[1]=e.length),o}function wf(e,t){let n=e.slice(0,t).search(/\s\S*$/);return t===0||n===-1?0:n+1}function Tf(e,t){let n=e.slice(t).search(/\s/);return n===-1?e.length:t+n}function Ef(e,t,n){let r=(e,t)=>n.some(([n,r])=>n<t&&r>e),i=new Set([0,e.length]);for(let[r,a]of n)i.add(Math.min(Math.max(r-t,0),e.length)),i.add(Math.min(Math.max(a-t,0),e.length));let a=[...i].sort((e,t)=>e-t);return a.slice(1).flatMap((n,i)=>{let o=a[i];return n>o?[{text:e.slice(o,n),marked:r(t+o,t+n)}]:[]})}var Df=a`
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
`,Of=class extends u{constructor(...e){super(...e),this.current=``,this.proposed=``,this.highlights=[],this.collapse=!1,this.label=``,this.expanded=!1,this.changes=[]}willUpdate(e){(e.has(`current`)||e.has(`proposed`))&&(this.changes=xf(this.current,this.proposed),this.expanded=!1)}render(){let{pieces:e,collapsible:t}=Sf(this.current,this.changes,this.highlights,!this.collapse||this.expanded);return p`
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
        >`;default:return t}}};Of.styles=[D,Df],r([c()],Of.prototype,`current`,void 0),r([c()],Of.prototype,`proposed`,void 0),r([c({type:Array})],Of.prototype,`highlights`,void 0),r([c({type:Boolean,reflect:!0})],Of.prototype,`collapse`,void 0),r([c()],Of.prototype,`label`,void 0),r([f()],Of.prototype,`expanded`,void 0),customElements.get(`craft-text-diff`)||customElements.define(`craft-text-diff`,Of);var kf=new Map;function Af(e){var t=kf.get(e);t&&t.destroy()}function jf(e){var t=kf.get(e);t&&t.update()}var Mf=null;typeof window>`u`?((Mf=function(e){return e}).destroy=function(e){return e},Mf.update=function(e){return e}):((Mf=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],function(e){return function(e){if(e&&e.nodeName&&e.nodeName===`TEXTAREA`&&!kf.has(e)){var t,n=null,r=window.getComputedStyle(e),i=(t=e.value,function(){o({testForHeightReduction:t===``||!e.value.startsWith(t),restoreTextAlign:null}),t=e.value}),a=function(t){e.removeEventListener(`autosize:destroy`,a),e.removeEventListener(`autosize:update`,s),e.removeEventListener(`input`,i),window.removeEventListener(`resize`,s),Object.keys(t).forEach(function(n){return e.style[n]=t[n]}),kf.delete(e)}.bind(e,{height:e.style.height,resize:e.style.resize,textAlign:e.style.textAlign,overflowY:e.style.overflowY,overflowX:e.style.overflowX,wordWrap:e.style.wordWrap});e.addEventListener(`autosize:destroy`,a),e.addEventListener(`autosize:update`,s),e.addEventListener(`input`,i),window.addEventListener(`resize`,s),e.style.overflowX=`hidden`,e.style.wordWrap=`break-word`,kf.set(e,{destroy:a,update:s}),s()}function o(t){var i,a,s=t.restoreTextAlign,c=s===void 0?null:s,l=t.testForHeightReduction,u=l===void 0||l,d=r.overflowY;if(e.scrollHeight!==0&&(r.resize===`vertical`?e.style.resize=`none`:r.resize===`both`&&(e.style.resize=`horizontal`),u&&(i=function(e){for(var t=[];e&&e.parentNode&&e.parentNode instanceof Element;)e.parentNode.scrollTop&&t.push([e.parentNode,e.parentNode.scrollTop]),e=e.parentNode;return function(){return t.forEach(function(e){var t=e[0],n=e[1];t.style.scrollBehavior=`auto`,t.scrollTop=n,t.style.scrollBehavior=null})}}(e),e.style.height=``),a=r.boxSizing===`content-box`?e.scrollHeight-(parseFloat(r.paddingTop)+parseFloat(r.paddingBottom)):e.scrollHeight+parseFloat(r.borderTopWidth)+parseFloat(r.borderBottomWidth),r.maxHeight!==`none`&&a>parseFloat(r.maxHeight)?(r.overflowY===`hidden`&&(e.style.overflow=`scroll`),a=parseFloat(r.maxHeight)):r.overflowY!==`hidden`&&(e.style.overflow=`hidden`),e.style.height=a+`px`,c&&(e.style.textAlign=c),i&&i(),n!==a&&(e.dispatchEvent(new Event(`autosize:resized`,{bubbles:!0})),n=a),d!==r.overflow&&!c)){var f=r.textAlign;r.overflow===`hidden`&&(e.style.textAlign=f===`start`?`end`:`start`),o({restoreTextAlign:f,testForHeightReduction:!0})}}function s(){o({testForHeightReduction:!0,restoreTextAlign:null})}}(e)}),e}).destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],Af),e},Mf.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],jf),e});var Nf=Mf,Pf=a`
  :host([monospace]) ::slotted([slot='input']) {
    font-family: var(--c-font-mono, monospace) !important;
    font-size: var(--c-text-sm);
  }

  ::slotted(label) {
    font-weight: bold;
  }

  ::slotted([slot='input']) {
    ${de}
    padding-block: var(--_spacing-block);
    line-height: var(--leading-normal);
    resize: vertical;
  }

  :host {
    --_spacing-block: var(--c-textarea-spacing-block, var(--c-spacing-md));
  }

  @supports (field-sizing: content) {
    /* Matches the selector that makes the textarea content-box. */
    .input-group__container > .input-group__input ::slotted([slot='input']) {
      box-sizing: border-box;
      --_block-offset: calc(
        2 * (var(--_spacing-block, 0px) + var(--_input-border-width, 0px))
      );
      field-sizing: content;
      min-block-size: calc(var(--_rows) * 1lh + var(--_block-offset));
      max-block-size: calc(var(--_max-rows) * 1lh + var(--_block-offset));
      /* Scrolls once it stops growing, even where the page hides overflow. */
      overflow-y: auto !important;
    }
  }
`,Ff=typeof CSS<`u`&&CSS.supports?.(`field-sizing`,`content`),If=new WeakMap,Lf=new WeakMap,Rf=new WeakMap,zf=new WeakMap,Bf=new WeakSet,Vf=new WeakMap,Hf=class extends oe(u){constructor(...e){super(...e),O(this,Bf),this.rows=2,this.maxRows=30,this.monospace=!1,M(this,If,void 0),M(this,Lf,void 0),M(this,Rf,void 0),M(this,zf,null),M(this,Vf,e=>{A(zf,this,e.target.style.height)})}get slots(){return{...super.slots,input:()=>document.createElement(`textarea`)}}get _control(){return super._control}connectedCallback(){super.connectedCallback();let e=this._control;e&&!Ff&&(Nf(e),A(Rf,this,new IntersectionObserver(()=>this.resizeTextarea())),k(Rf,this).observe(this)),j(Bf,this,Wf).call(this)}_pushToControl(e){super._pushToControl(e),e.has(`rows`)&&this._control&&(this._control.rows=this.rows)}updated(e){super.updated(e),e.has(`value`)&&this.resizeTextarea(),(e.has(`rows`)||e.has(`maxRows`))&&j(Bf,this,Uf).call(this)}resizeTextarea(){this._control&&!Ff&&Nf.update(this._control)}disconnectedCallback(){super.disconnectedCallback(),k(Rf,this)?.disconnect(),A(Rf,this,void 0),this._control&&Nf.destroy(this._control),k(If,this)?.disconnect(),A(If,this,void 0),k(Lf,this)?.disconnect(),A(Lf,this,void 0),this._control?.removeEventListener(`autosize:resized`,k(Vf,this))}};function Uf(){let e=this._control;if(!e)return;if(Ff){e.style.setProperty(`--_rows`,String(this.rows)),Number.isFinite(this.maxRows)?e.style.setProperty(`--_max-rows`,String(this.maxRows)):e.style.removeProperty(`--_max-rows`);return}if(!Number.isFinite(this.maxRows)){e.style.removeProperty(`max-height`);return}let{value:t}=e;e.value=``,this.resizeTextarea();let n=getComputedStyle(e),r=parseFloat(n.lineHeight)||parseFloat(n.height)/this.rows,i=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom),a=parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth),o=n.boxSizing===`border-box`?i+a:0;e.style.maxHeight=`${r*this.maxRows+o}px`,e.value=t,this.resizeTextarea()}function Wf(){let e=this._control;Ff||!e||typeof ResizeObserver>`u`||typeof MutationObserver>`u`||(A(zf,this,e.style.height),e.style.removeProperty(`resize`),e.addEventListener(`autosize:resized`,k(Vf,this)),A(Lf,this,new MutationObserver(()=>{e.style.resize!==``&&e.style.removeProperty(`resize`)})),k(Lf,this).observe(e,{attributes:!0,attributeFilter:[`style`]}),A(If,this,new ResizeObserver(()=>{if(e.style.height===k(zf,this))return;let t=e.style.height;Nf.destroy(e),e.style.height=t,e.style.removeProperty(`overflow`),k(Lf,this)?.disconnect(),A(Lf,this,void 0),k(If,this)?.disconnect(),A(If,this,void 0)})),k(If,this).observe(e))}Hf.styles=[ve,a`
      .input-group__container > .input-group__input ::slotted(.form-control) {
        box-sizing: content-box;
        /* Keeps Firefox from reserving height for a horizontal scrollbar. */
        overflow-x: hidden;
      }

      :host([disabled]) ::slotted(textarea) {
        user-select: none;
      }
    `,fe,Pf],r([c({type:Number,reflect:!0})],Hf.prototype,`rows`,void 0),r([c({attribute:`max-rows`,converter:{fromAttribute:e=>e===`none`?1/0:e===null?30:Number(e)}})],Hf.prototype,`maxRows`,void 0),r([c({type:Boolean,reflect:!0})],Hf.prototype,`monospace`,void 0),customElements.get(`craft-textarea`)||customElements.define(`craft-textarea`,Hf);var Gf=a`
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
`,Kf=class extends u{constructor(...e){super(...e),this.last=!1,this._hasHeading=!1,this._hasMeta=!1,this._hasBody=!1,this._hasFooter=!1,this._lightDomObserver=new MutationObserver(()=>this._syncSlotPresence())}connectedCallback(){super.connectedCallback(),this._syncSlotPresence(),this._lightDomObserver.observe(this,{childList:!0,subtree:!0,attributes:!0,characterData:!0,attributeFilter:[`slot`]})}disconnectedCallback(){super.disconnectedCallback(),this._lightDomObserver.disconnect()}_syncSlotPresence(){this._hasHeading=!!this.querySelector(`:scope > [slot="heading"]`),this._hasMeta=!!this.querySelector(`:scope > [slot="meta"]`),this._hasBody=[...this.childNodes].some(e=>e.nodeType===Node.TEXT_NODE?!!e.textContent?.trim():e instanceof HTMLElement&&!e.slot),this._hasFooter=!!this.querySelector(`:scope > [slot="footer"]`)}render(){return p`
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
    `}};Kf.styles=[Gf],r([c({type:Boolean,reflect:!0})],Kf.prototype,`last`,void 0),r([f()],Kf.prototype,`_hasHeading`,void 0),r([f()],Kf.prototype,`_hasMeta`,void 0),r([f()],Kf.prototype,`_hasBody`,void 0),r([f()],Kf.prototype,`_hasFooter`,void 0),customElements.get(`craft-timeline-item`)||customElements.define(`craft-timeline-item`,Kf);var qf=class{constructor(e,t,{tabInsertsSuggestions:n,firstOptionSelectionMode:r,scrollIntoViewOptions:i}={}){this.input=e,this.list=t,this.tabInsertsSuggestions=n??!0,this.firstOptionSelectionMode=r??`none`,this.scrollIntoViewOptions=i??{block:`nearest`,inline:`nearest`},this.isComposing=!1,this.didAutoAssignLastSelectedId=!1,t.id||=`combobox-${Math.random().toString().slice(2,6)}`,this.ctrlBindings=!!navigator.userAgent.match(/Macintosh/),this.keyboardEventHandler=e=>Jf(e,this),this.compositionEventHandler=e=>ep(e,this),this.inputHandler=this.clearSelection.bind(this),e.setAttribute(`role`,`combobox`),e.setAttribute(`aria-controls`,t.id),e.setAttribute(`aria-expanded`,`false`),e.setAttribute(`aria-autocomplete`,`list`),e.setAttribute(`aria-haspopup`,`listbox`)}destroy(){this.clearSelection(),this.stop(),this.input.removeAttribute(`role`),this.input.removeAttribute(`aria-controls`),this.input.removeAttribute(`aria-expanded`),this.input.removeAttribute(`aria-autocomplete`),this.input.removeAttribute(`aria-haspopup`)}start(){this.input.setAttribute(`aria-expanded`,`true`),this.input.addEventListener(`compositionstart`,this.compositionEventHandler),this.input.addEventListener(`compositionend`,this.compositionEventHandler),this.input.addEventListener(`input`,this.inputHandler),this.input.addEventListener(`keydown`,this.keyboardEventHandler),this.list.addEventListener(`click`,Yf),this.resetSelection()}stop(){this.clearSelection(),this.input.setAttribute(`aria-expanded`,`false`),this.input.removeEventListener(`compositionstart`,this.compositionEventHandler),this.input.removeEventListener(`compositionend`,this.compositionEventHandler),this.input.removeEventListener(`input`,this.inputHandler),this.input.removeEventListener(`keydown`,this.keyboardEventHandler),this.list.removeEventListener(`click`,Yf)}indicateDefaultOption(){var e;this.firstOptionSelectionMode===`active`?(e=Array.from(this.list.querySelectorAll(`[role="option"]:not([aria-disabled="true"])`)).filter($f)[0])==null||e.setAttribute(`data-combobox-option-default`,`true`):this.firstOptionSelectionMode===`selected`&&this.navigate(1)}navigate(e=1){let t=Array.from(this.list.querySelectorAll(`[aria-selected="true"]`)).filter($f)[0],n=Array.from(this.list.querySelectorAll(`[role="option"]`)).filter($f),r=n.indexOf(t);if(r===n.length-1&&e===1||r===0&&e===-1){this.clearSelection(),this.input.focus();return}let i=e===1?0:n.length-1;if(t&&r>=0){let t=r+e;t>=0&&t<n.length&&(i=t)}let a=n[i];if(a)for(let e of n)e.removeAttribute(`data-combobox-option-default`),a===e?(!a.id&&!document.getElementById(`${this.list.id}-selected`)&&(a.id=`${this.list.id}-selected`,this.didAutoAssignLastSelectedId=!0),a.id&&this.input.setAttribute(`aria-activedescendant`,a.id),a.setAttribute(`aria-selected`,`true`),Qf(a),a.scrollIntoView(this.scrollIntoViewOptions)):(e.id===`${this.list.id}-selected`&&this.didAutoAssignLastSelectedId&&(e.removeAttribute(`id`),this.didAutoAssignLastSelectedId=!1),e.removeAttribute(`aria-selected`))}clearSelection(){this.input.removeAttribute(`aria-activedescendant`);for(let e of this.list.querySelectorAll(`[aria-selected="true"], [data-combobox-option-default="true"]`))e.removeAttribute(`aria-selected`),e.removeAttribute(`data-combobox-option-default`),e.id===`${this.list.id}-selected`&&this.didAutoAssignLastSelectedId&&(e.removeAttribute(`id`),this.didAutoAssignLastSelectedId=!1)}resetSelection(){this.clearSelection(),this.indicateDefaultOption()}};function Jf(e,t){if(!(e.shiftKey||e.metaKey||e.altKey)&&!(!t.ctrlBindings&&e.ctrlKey)&&!t.isComposing)switch(e.key){case`Enter`:Xf(t.input,t.list)&&e.preventDefault();break;case`Tab`:t.tabInsertsSuggestions&&Xf(t.input,t.list)&&e.preventDefault();break;case`Escape`:t.clearSelection();break;case`ArrowDown`:t.navigate(1),e.preventDefault();break;case`ArrowUp`:t.navigate(-1),e.preventDefault();break;case`n`:t.ctrlBindings&&e.ctrlKey&&(t.navigate(1),e.preventDefault());break;case`p`:t.ctrlBindings&&e.ctrlKey&&(t.navigate(-1),e.preventDefault());break;default:if(e.ctrlKey)break;t.resetSelection()}}function Yf(e){if(!(e.target instanceof Element))return;let t=e.target.closest(`[role="option"]`);t&&t.getAttribute(`aria-disabled`)!==`true`&&Zf(t,{event:e})}function Xf(e,t){let n=t.querySelector(`[aria-selected="true"], [data-combobox-option-default="true"]`);return n?(n.getAttribute(`aria-disabled`)===`true`||n.click(),!0):!1}function Zf(e,t){e.dispatchEvent(new CustomEvent(`combobox-commit`,{bubbles:!0,detail:t}))}function Qf(e){e.dispatchEvent(new Event(`combobox-select`,{bubbles:!0}))}function $f(e){return!e.hidden&&!(e instanceof HTMLInputElement&&e.type===`hidden`)&&(e.offsetWidth>0||e.offsetHeight>0)}function ep(e,t){t.isComposing=e.type===`compositionstart`,document.getElementById(t.input.getAttribute(`aria-controls`)||``)&&t.clearSelection()}var tp=class extends Event{constructor(){super(`update`)}},np=new WeakMap,rp=class e extends EventTarget{#e=new MutationObserver(()=>this.#f());#t=new ResizeObserver(()=>this.#d());#n;#r=document.createElement(`div`);#i=document.createElement(`div`);static for(t){let n=np.get(t);return n||(n=new e(t),np.set(t,n)),n}constructor(e){super(),this.#n=new WeakRef(e),this.#r.style.position=`absolute`,this.#r.style.pointerEvents=`none`,this.#r.setAttribute(`aria-hidden`,`true`),this.#r.appendChild(this.#i),this.#i.style.pointerEvents=`none`,this.#i.style.userSelect=`none`,this.#i.style.overflow=`hidden`,this.#i.style.display=`block`,this.#i.style.visibility=`hidden`,e instanceof HTMLTextAreaElement?(this.#i.style.whiteSpace=`pre-wrap`,this.#i.style.wordWrap=`break-word`):(this.#i.style.whiteSpace=`nowrap`,this.#i.style.display=`table-cell`,this.#i.style.verticalAlign=`middle`),e.after(this.#r),this.#f(),this.#p(),this.#e.observe(e,{attributeFilter:[`style`,`dir`]}),this.#t.observe(e),document.addEventListener(`scroll`,this.#h,{capture:!0}),window.addEventListener(`resize`,this.#h,{capture:!0}),e.addEventListener(`input`,this.#m,{capture:!0})}get element(){return this.#i}forceUpdate(){this.#f(),this.#p()}disconnect(){this.#r?.remove(),this.#e.disconnect(),this.#t.disconnect(),document.removeEventListener(`scroll`,this.#h,{capture:!0}),window.removeEventListener(`resize`,this.#h,{capture:!0});let e=this.#a;e&&(e.removeEventListener(`input`,this.#m,{capture:!0}),np.delete(e))}get#a(){return this.#n?.deref()}#o(e){let t=this.#a;return t?e(t):this.disconnect()}#s=0;#c=0;#l(){this.#o(e=>{let t=window.getComputedStyle(e);this.#i.style.height=t.height,this.#i.style.width=t.width,e.clientHeight!==this.#i.clientHeight&&(this.#i.style.height=`calc(${t.height} + ${e.clientHeight-this.#i.clientHeight}px)`),e.clientWidth!==this.#i.clientWidth&&(this.#i.style.width=`calc(${t.width} + ${e.clientWidth-this.#i.clientWidth}px)`);let n=e.getBoundingClientRect(),r=this.#i.getBoundingClientRect();this.#s=this.#s+n.left-r.left,this.#c=this.#c+n.top-r.top,this.#i.style.transform=`translate(${this.#s}px, ${this.#c}px)`,this.#i.scrollTop=e.scrollTop,this.#i.scrollLeft=e.scrollLeft,this.dispatchEvent(new tp)})}#u=!1;#d(){this.#u||(this.#u=!0,requestAnimationFrame(()=>{this.#l(),this.#u=!1}))}#f(){this.#o(e=>{let t=window.getComputedStyle(e);for(let e of ip)this.#i.style[e]=t[e];this.#d()})}#p(){this.#o(e=>{this.#i.textContent=e.value,this.#l()})}#m=()=>this.#p();#h=e=>{this.#o(t=>{(e.target===document||e.target===window||e.target instanceof Node&&e.target.contains(t))&&this.#d()})}},ip=`direction.writingMode.unicodeBidi.textOrientation.boxSizing.borderTopWidth.borderRightWidth.borderBottomWidth.borderLeftWidth.borderStyle.paddingTop.paddingRight.paddingBottom.paddingLeft.fontStyle.fontVariant.fontWeight.fontStretch.fontSize.fontSizeAdjust.lineHeight.fontFamily.textAlign.textTransform.textIndent.textDecoration.letterSpacing.wordSpacing.tabSize.MozTabSize`.split(`.`),ap=class e{#e;#t;#n;constructor(e,t=0,n=t){this.#e=e,this.#t=t,this.#n=n}static fromSelection(t){let{selectionStart:n,selectionEnd:r}=t;return new e(t,n??void 0,r??void 0)}get collapsed(){return this.startOffset===this.endOffset}get commonAncestorContainer(){return this.#e}get endContainer(){return this.#e}get startContainer(){return this.#e}get startOffset(){return this.#t}get endOffset(){return this.#n}setStartOffset(e){this.#t=this.#a(e)}setEndOffset(e){this.#n=this.#a(e)}collapse(e=!1){e?this.setEndOffset(this.startOffset):this.setStartOffset(this.endOffset)}cloneContents(){return this.#o().cloneContents()}cloneRange(){return new e(this.#e,this.startOffset,this.endOffset)}getBoundingClientRect(){return this.#o().getBoundingClientRect()}getClientRects(){return this.#o().getClientRects()}toString(){return this.#o().toString()}getStyleClone(){return this.#r}get#r(){return rp.for(this.#e)}get#i(){return this.#r}#a(e){return Math.max(0,Math.min(e,this.#e.value.length))}#o(){let e=document.createRange(),t=this.#i.element.childNodes[0];return t&&(e.setStart(t,this.startOffset),e.setEnd(t,this.endOffset)),e}},op=a`
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
`,sp=/^[\p{L}\p{N}_.-]*$/u,cp=n(`Suggestions`),lp=[`role`,`aria-autocomplete`,`aria-haspopup`,`aria-expanded`,`aria-controls`,`aria-activedescendant`,`aria-busy`],up=0,q=new WeakMap,dp=new WeakMap,fp=new WeakMap,pp=new WeakMap,J=new WeakMap,mp=new WeakMap,hp=new WeakMap,gp=new WeakMap,_p=new WeakMap,vp=new WeakMap,yp=new WeakMap,bp=new WeakMap,xp=new WeakMap,Sp=new WeakMap,Cp=new WeakMap,Y=new WeakSet,wp=new WeakMap,Tp=new WeakMap,Ep=new WeakMap,Dp=new WeakMap,Op=new WeakMap,kp=new WeakMap,Ap=new WeakMap,jp=new WeakMap,Mp=new WeakMap,Np=new WeakMap,Pp=new WeakMap,Fp=new WeakMap,Ip=class extends u{constructor(...e){super(...e),O(this,Y),this.for=``,this.triggers=[],this.loading=!1,this.announcement=``,M(this,q,void 0),M(this,dp,null),M(this,fp,null),M(this,pp,new Map),M(this,J,null),M(this,mp,[]),M(this,hp,0),M(this,gp,null),M(this,_p,null),M(this,vp,null),M(this,yp,!1),M(this,bp,null),M(this,xp,new DOMRect),M(this,Sp,new MutationObserver(()=>{let e=j(Y,this,Rp).call(this);(sm(e)&&e!==k(dp,this)||k(dp,this)&&!k(dp,this).isConnected)&&j(Y,this,zp).call(this)})),M(this,Cp,new MutationObserver(e=>{for(let{target:t}of e)t instanceof ir&&(t.active=t.getAttribute(`aria-selected`)===`true`)})),M(this,wp,()=>{k(yp,this)||j(Y,this,Kp).call(this)}),M(this,Tp,()=>{A(yp,this,!0),j(Y,this,tm).call(this)}),M(this,Ep,()=>{A(yp,this,!1),j(Y,this,Kp).call(this)}),M(this,Dp,()=>{queueMicrotask(()=>j(Y,this,tm).call(this))}),M(this,Op,()=>{let e=k(dp,this);!e||!k(J,this)||!cm(e)||queueMicrotask(()=>{k(J,this)&&(e.selectionStart!==k(J,this).end||e.selectionEnd!==k(J,this).end)&&j(Y,this,Kp).call(this)})}),M(this,kp,()=>{k(J,this)&&j(Y,this,$p).call(this)}),M(this,Ap,e=>{let t=e;k(J,this)&&k(q,this).querySelector(`[aria-selected="true"]`)&&[`ArrowDown`,`ArrowUp`,`Enter`].includes(t.key)&&t.stopPropagation()}),M(this,jp,e=>{e.target instanceof Element&&e.target.closest(`[role="option"]`)&&e.preventDefault()}),M(this,Mp,e=>{e.pointerType===`touch`&&e.target instanceof Element&&e.target.closest(`[role="option"]`)?.click()}),M(this,Np,e=>{j(Y,this,Xp).call(this,Number(e.target.dataset.index))}),M(this,Pp,e=>{if(e.target!==this.popoverElement)return;let t=k(q,this).getAttribute(`aria-label`)??cp;j(Y,this,im).call(this),A(J,this,null),j(Y,this,rm).call(this),j(Y,this,am).call(this,t===cp?n(`Suggestions collapsed`):n(`{name} suggestions collapsed`,{name:t})),k(Fp,this).call(this,e)}),M(this,Fp,e=>{e.target===this.popoverElement&&e.stopPropagation()})}connectedCallback(){super.connectedCallback(),j(Y,this,Lp).call(this),this.hasUpdated&&j(Y,this,zp).call(this)}disconnectedCallback(){j(Y,this,Vp).call(this),k(Cp,this).disconnect(),k(q,this)?.remove(),k(vp,this)!==null&&(clearTimeout(k(vp,this)),A(vp,this,null)),super.disconnectedCallback()}firstUpdated(e){super.firstUpdated(e),j(Y,this,zp).call(this)}updated(e){if(super.updated(e),e.has(`for`)&&k(dp,this)!==j(Y,this,Rp).call(this)&&j(Y,this,zp).call(this),e.has(`triggers`)&&e.get(`triggers`)&&k(J,this)){let e=k(q,this).querySelector(`[aria-selected="true"]`),t=e?k(mp,this)[Number(e.dataset.index)]:void 0;j(Y,this,Kp).call(this,t)}}render(){return p`
      <craft-popover
        exportparts="popup"
        without-invoker-aria
        manual
        @craft-show=${k(Fp,this)}
        @craft-hide=${k(Pp,this)}
        @craft-after-show=${k(Fp,this)}
        @craft-after-hide=${k(Fp,this)}
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
    `}};function Lp(){A(q,this,document.createElement(`div`)),k(q,this).id=`craft-text-expander-listbox-${++up}`,k(q,this).slot=`listbox`,k(q,this).setAttribute(`part`,`listbox`),k(q,this).role=`listbox`,k(q,this).setAttribute(`aria-label`,cp),k(q,this).addEventListener(`pointerdown`,k(jp,this)),k(q,this).addEventListener(`pointerup`,k(Mp,this)),k(q,this).addEventListener(`combobox-commit`,k(Np,this)),k(Cp,this).observe(k(q,this),{subtree:!0,attributeFilter:[`aria-selected`]}),this.append(k(q,this))}function Rp(){return this.getRootNode().getElementById(this.for)}function zp(){let e=j(Y,this,Rp).call(this);if(j(Y,this,Vp).call(this),!sm(e)){j(Y,this,Bp).call(this);return}A(dp,this,e),j(Y,this,Hp).call(this,e),A(fp,this,new qf(e,k(q,this),{tabInsertsSuggestions:!1,firstOptionSelectionMode:`selected`,scrollIntoViewOptions:{block:`nearest`}})),j(Y,this,Up).call(this,e),e.addEventListener(`input`,k(wp,this)),e.addEventListener(`keydown`,k(Ap,this)),e.addEventListener(`blur`,k(Dp,this)),e.addEventListener(`compositionstart`,k(Tp,this)),e.addEventListener(`compositionend`,k(Ep,this)),e.ownerDocument.addEventListener(`selectionchange`,k(Op,this)),this.popoverElement.anchor={contextElement:e,getBoundingClientRect:()=>k(xp,this)},j(Y,this,Bp).call(this)}function Bp(){k(Sp,this).observe(this.getRootNode(),{attributes:!0,attributeFilter:[`id`],childList:!0,subtree:!0})}function Vp(){k(Sp,this).disconnect(),j(Y,this,tm).call(this);let e=k(dp,this);e&&(e.removeEventListener(`input`,k(wp,this)),e.removeEventListener(`keydown`,k(Ap,this)),e.removeEventListener(`blur`,k(Dp,this)),e.removeEventListener(`compositionstart`,k(Tp,this)),e.removeEventListener(`compositionend`,k(Ep,this)),e.ownerDocument.removeEventListener(`selectionchange`,k(Op,this)),k(bp,this)?.getStyleClone().disconnect(),A(bp,this,null),k(fp,this)?.destroy(),A(fp,this,null),j(Y,this,Wp).call(this,e),A(dp,this,null))}function Hp(e){k(pp,this).clear();for(let t of lp)k(pp,this).set(t,e.getAttribute(t))}function Up(e){let t=[k(pp,this).get(`aria-controls`),k(q,this).id].filter(Boolean).join(` `);e.setAttribute(`aria-autocomplete`,`list`),e.setAttribute(`aria-controls`,t),e.setAttribute(`data-text-expander-input`,``),e.getAttribute(`role`)===`combobox`&&e.removeAttribute(`role`),e instanceof HTMLInputElement?e.setAttribute(`aria-haspopup`,`listbox`):j(Y,this,Gp).call(this,e,`aria-haspopup`),j(Y,this,Gp).call(this,e,`aria-expanded`)}function Wp(e){for(let t of lp)j(Y,this,Gp).call(this,e,t);k(pp,this).clear()}function Gp(e,t){let n=k(pp,this).get(t);n==null?e.removeAttribute(t):e.setAttribute(t,n)}function Kp(e){j(Y,this,im).call(this);let t=j(Y,this,Jp).call(this);if(!t){A(J,this,null),j(Y,this,nm).call(this);return}A(J,this,t);let r=t.trigger.limit;if(t.trigger.options){this.loading=!1;let n=t.query.toLowerCase(),i=t.trigger.options.filter(e=>[e.label,...e.keywords??[]].some(e=>e.toLowerCase().includes(n)));j(Y,this,Yp).call(this,r===void 0?i:i.slice(0,r),e);return}this.loading=!0,j(Y,this,Yp).call(this,[]),j(Y,this,am).call(this,n(`Loading`));let i=k(hp,this);A(_p,this,setTimeout(()=>{j(Y,this,qp).call(this,t,r,i,e)},150))}async function qp(e,t,n,r){A(gp,this,new AbortController);let i;try{let n=await Ne.get(e.trigger.source,{params:{query:`${e.character}${e.query}`,...t===void 0?{}:{limit:t}},signal:k(gp,this).signal});if(!Array.isArray(n.data))throw TypeError(`Text expander sources must return an array.`);i=n.data}catch(t){if(n!==k(hp,this)||lm(t))return;j(Y,this,tm).call(this),this.dispatchEvent(new CustomEvent(`craft-error`,{bubbles:!0,composed:!0,detail:{character:e.character,query:e.query,error:t}}));return}n===k(hp,this)&&(this.loading=!1,j(Y,this,Yp).call(this,t===void 0?i:i.slice(0,t),r))}function Jp(){let e=k(dp,this);if(!e||!e.isConnected||e.disabled||e.readOnly||!cm(e)||e.selectionStart===null||e.selectionEnd===null||e.selectionStart!==e.selectionEnd)return null;let t=e.selectionStart,n=e.value.slice(0,t),r=null;for(let e of this.triggers){let i=e.trigger,a=n.lastIndexOf(i);if(a===-1||r&&a<=r.start)continue;let o=Array.from(n.slice(0,a)).at(-1),s=n.slice(a+i.length);(e.boundary===`anywhere`||(e.boundary===`start`?a===0:!o||/\s/u.test(o)))&&sp.test(s)&&(r={character:i,query:s,start:a,end:t,trigger:e})}return r}function Yp(e,t){if(j(Y,this,Qp).call(this),A(mp,this,e),k(q,this).replaceChildren(),k(q,this).hidden=this.loading,k(q,this).setAttribute(`aria-label`,k(J,this)?.trigger.label??cp),e.forEach((e,t)=>{let n=document.createElement(`craft-option`),r=om(e);n.id=`${k(q,this).id}-option-${t}`,n.setAttribute(`part`,`option`),n.dataset.index=String(t),n.setAttribute(`aria-label`,r?`${e.label}, ${r}`:e.label),n.hint=r,n.append(k(J,this)?.trigger.renderOption?.(e)??document.createTextNode(e.label)),k(q,this).append(n)}),!this.loading&&!e.length){A(J,this,null),j(Y,this,nm).call(this),j(Y,this,am).call(this,n(`No suggestions`));return}this.updateComplete.then(()=>{k(J,this)&&j(Y,this,Zp).call(this,t)})}function Xp(e){let t=k(dp,this),n=k(mp,this)[e],r=j(Y,this,Jp).call(this),i=k(J,this);if(!t||!n||!i||!r||r.start!==i.start||r.end!==i.end||r.character!==i.character||r.query!==i.query){j(Y,this,tm).call(this);return}um(t,i.start,i.end,n.value);let a={character:i.character,query:i.query,option:n};j(Y,this,tm).call(this),this.dispatchEvent(new CustomEvent(`craft-select`,{bubbles:!0,composed:!0,detail:a}))}async function Zp(e){await this.popoverElement.updateComplete;let t=k(dp,this);if(!t||!j(Y,this,$p).call(this)){j(Y,this,tm).call(this);return}if(t.setAttribute(`aria-busy`,String(this.loading)),await this.popoverElement.show(),!(!k(J,this)||t!==k(dp,this))&&k(mp,this).length&&(k(fp,this)?.start(),j(Y,this,Gp).call(this,t,`aria-expanded`),t.removeEventListener(`input`,k(wp,this)),t.addEventListener(`input`,k(wp,this)),e)){let t=k(mp,this).findIndex(t=>t.label===e.label&&t.value===e.value);for(let e=0;e<t;e++)k(fp,this)?.navigate(1)}}function Qp(){k(fp,this)?.stop(),k(dp,this)&&j(Y,this,Gp).call(this,k(dp,this),`aria-expanded`)}function $p(){let e=k(dp,this),t=e?.selectionStart;if(!e?.isConnected||t==null)return!1;if(!k(bp,this)){A(bp,this,new ap(e));let t=k(bp,this).getStyleClone(),n=t.element.parentElement;n.slot=e.slot,n.style.visibility=`hidden`,t.forceUpdate(),t.addEventListener(`update`,k(kp,this))}return k(bp,this).setStartOffset(t),k(bp,this).setEndOffset(t),A(xp,this,k(bp,this).getBoundingClientRect()),this.popoverElement.placement=j(Y,this,em).call(this,k(xp,this)),this.popoverElement.reposition(),!0}function em(e){let t=this.ownerDocument.documentElement.clientHeight,n=this.querySelector(`[slot="listbox"]`),r=this.renderRoot.querySelector(`.text-expander__popup`),i=n&&parseFloat(getComputedStyle(n).maxHeight)||0,a=r?parseFloat(getComputedStyle(r).paddingTop)+parseFloat(getComputedStyle(r).paddingBottom):0,o=t-e.bottom,s=e.top;return o<i+a&&s>o?`top-start`:`bottom-start`}function tm(){j(Y,this,im).call(this),A(J,this,null),j(Y,this,nm).call(this)}function nm(){j(Y,this,rm).call(this),this.popoverElement.hide()}function rm(){this.loading=!1,j(Y,this,Qp).call(this),A(mp,this,[]),k(q,this)?.replaceChildren(),k(q,this)&&(k(q,this).hidden=!1);let e=k(dp,this);e&&(j(Y,this,Gp).call(this,e,`aria-activedescendant`),j(Y,this,Gp).call(this,e,`aria-busy`))}function im(){var e;A(hp,this,(e=k(hp,this),e++,e)),k(_p,this)&&(clearTimeout(k(_p,this)),A(_p,this,null)),k(gp,this)?.abort(),A(gp,this,null)}function am(e){k(vp,this)!==null&&(clearTimeout(k(vp,this)),A(vp,this,null)),this.announcement=``,queueMicrotask(()=>{this.isConnected&&(this.announcement=e)}),A(vp,this,setTimeout(()=>{A(vp,this,null),this.announcement=``},5e3))}Ip.styles=[D,op],r([c({reflect:!0})],Ip.prototype,`for`,void 0),r([c({type:Array})],Ip.prototype,`triggers`,void 0),r([f()],Ip.prototype,`loading`,void 0),r([f()],Ip.prototype,`announcement`,void 0),r([m(`craft-popover`)],Ip.prototype,`popoverElement`,void 0);function om(e){return typeof e.data!=`object`||e.data===null||!(`hint`in e.data)||typeof e.data.hint!=`string`?null:e.data.hint}function sm(e){return e instanceof HTMLTextAreaElement||e instanceof HTMLInputElement&&e.type===`text`}function cm(e){return e.getRootNode().activeElement===e}function lm(e){return e instanceof DOMException&&e.name===`AbortError`}function um(e,t,n,r){e.maxLength>=0&&(r=r.slice(0,Math.max(0,e.maxLength-(e.value.length-(n-t)))));let i=`${e.value.slice(0,t)}${r}${e.value.slice(n)}`,a=!1,o=()=>{a=!0};e.focus({preventScroll:!0}),e.setSelectionRange(t,n),e.addEventListener(`input`,o,{once:!0});try{e.ownerDocument.execCommand?.(`insertText`,!1,r)}catch{}e.removeEventListener(`input`,o),e.value!==i&&(e.setRangeText(r,t,n,`end`),a=!1),a||e.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0,data:r,inputType:`insertReplacementText`}))}customElements.get(`craft-text-expander`)||customElements.define(`craft-text-expander`,Ip);var dm=a`
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
    ${xe}
  }
`,fm=new WeakMap,pm=new WeakMap,mm=new WeakSet,hm=class extends u{constructor(...e){super(...e),O(this,mm),this.placement=`top`,this.disabled=!1,this.overflowing=!1,this.text=``,M(this,fm,void 0),M(this,pm,typeof ResizeObserver<`u`?new ResizeObserver(()=>j(mm,this,gm).call(this)):null)}connectedCallback(){super.connectedCallback(),k(pm,this)?.observe(this)}disconnectedCallback(){k(pm,this)?.disconnect(),k(fm,this)!==void 0&&(ee(k(fm,this)),A(fm,this,void 0)),super.disconnectedCallback()}firstUpdated(){k(pm,this)||j(mm,this,gm).call(this)}render(){let e=this.overflowing&&!this.disabled;return p`
      <span class="truncate" id="content">
        <slot @slotchange=${j(mm,this,_m)}></slot>
      </span>
      ${e?p`<craft-tooltip for="content" placement=${this.placement}
            >${this.text}</craft-tooltip
          >`:``}
    `}};function gm(){this.text=(this.textContent??``).replace(/\s+/g,` `).trim();let e=this.content;this.overflowing=!!e&&e.scrollWidth>e.clientWidth}function _m(){k(fm,this)===void 0&&A(fm,this,y(()=>{A(fm,this,void 0),j(mm,this,gm).call(this)}))}hm.styles=dm,r([c({reflect:!0})],hm.prototype,`placement`,void 0),r([c({type:Boolean,reflect:!0})],hm.prototype,`disabled`,void 0),r([f()],hm.prototype,`overflowing`,void 0),r([f()],hm.prototype,`text`,void 0),r([m(`.truncate`)],hm.prototype,`content`,void 0),customElements.get(`craft-truncate`)||customElements.define(`craft-truncate`,hm);var vm=a`
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
`,ym=class e extends u{constructor(...e){super(...e),this.src=null,this.mode=`fit`,this.svgAspectRatios=new Map,this.placeholder=null,this.loaded=!1,this.srcset=null,this.sizes=null,this.alt=``,this.width=null,this.height=null,this.loading=`lazy`,this.checkered=!1,this.rounded=!1,this.animated=!1,this.frozen=!1,this.capturedFrame=null,this.resizeObserver=null}get isAnimated(){return this.animated||e.animatedExtensionPattern.test(this.src??``)||e.animatedExtensionPattern.test(this.srcset??``)}restoreSlottedSvgs(){for(let[e,t]of this.svgAspectRatios)t===null?e.removeAttribute(`preserveAspectRatio`):e.setAttribute(`preserveAspectRatio`,t);this.svgAspectRatios.clear()}updateSlottedSvgs(){if(this.restoreSlottedSvgs(),this.mode!==`crop`&&this.mode!==`stretch`)return;let e=this.shadowRoot?.querySelector(`slot`);for(let t of e?.assignedElements()??[])t instanceof SVGSVGElement&&(this.svgAspectRatios.set(t,t.getAttribute(`preserveAspectRatio`)),t.setAttribute(`preserveAspectRatio`,this.mode===`crop`?`xMidYMid slice`:`none`))}willUpdate(e){let t=e.has(`src`)||e.has(`srcset`)||e.has(`animated`);if(e.has(`src`)&&(this.loaded=!1),t&&(this.frozen=!1,this.capturedFrame=null,this.resizeObserver?.disconnect(),this.resizeObserver=null,!e.has(`src`))){let e=this.shadowRoot?.querySelector(`img`);e?.complete&&this.attemptFreeze(e)}}updated(){this.updateSlottedSvgs()}connectedCallback(){if(super.connectedCallback(),this.updateSlottedSvgs(),this.hasUpdated&&!this.frozen){let e=this.shadowRoot?.querySelector(`img`);e?.complete&&this.attemptFreeze(e)}}disconnectedCallback(){this.restoreSlottedSvgs(),this.resizeObserver?.disconnect(),this.resizeObserver=null,super.disconnectedCallback()}render(){let e=this.sizedImage,t={thumbnail:!0,"thumbnail--checkered":this.checkered,"thumbnail--rounded":this.rounded,"thumbnail--crop":this.mode===`crop`,"thumbnail--stretch":this.mode===`stretch`,"thumbnail--placeholder":this.showsPlaceholder&&!e},n=this.showsPlaceholder?{"--_placeholder":`url(${JSON.stringify(this.placeholder)})`}:{};return p`
      <div
        class="${w(t)}"
        style="${ce(e?{}:n)}"
        part="thumbnail"
      >
        ${this.src?p`<img
              class="${w({thumbnail__image:!0,"thumbnail__image--landscape":e===`landscape`,"thumbnail__image--portrait":e===`portrait`,"thumbnail__image--placeholder":!!e&&this.showsPlaceholder,"cp-visually-hidden":this.frozen})}"
              style="${ce(e?{...n,"--_width":`${this.width}px`,"--_height":`${this.height}px`,"aspect-ratio":`${this.width} / ${this.height}`}:{})}"
              part="image"
              src="${this.src}"
              srcset="${C(this.srcset??void 0)}"
              sizes="${C(this.sizes??void 0)}"
              width="${C(this.width??void 0)}"
              height="${C(this.height??void 0)}"
              alt="${this.alt}"
              loading="${this.loading}"
              decoding="async"
              @load=${this.onImageLoad}
            />`:i}
        ${this.src&&this.isAnimated?p`<canvas
              class="${w({thumbnail__cover:!0,"thumbnail__cover--pending":!this.frozen})}"
              part="cover"
              aria-hidden="true"
              role="presentation"
            ></canvas>`:i}
        <slot @slotchange=${this.updateSlottedSvgs}></slot>
      </div>
    `}get sizedImage(){return this.mode!==`fit`||!this.width||!this.height?null:Number(this.width)>=Number(this.height)?`landscape`:`portrait`}get showsPlaceholder(){return!!(this.placeholder&&this.src&&!this.loaded)}onImageLoad(e){this.loaded=!0,this.attemptFreeze(e.target)}attemptFreeze(e){if(!this.isAnimated||!e.currentSrc)return;let t=new Image;t.onload=()=>{this.capturedFrame=t,this.resizeObserver?.disconnect(),this.resizeObserver=new ResizeObserver(()=>{this.capturedFrame&&this.paintCover(this.capturedFrame,e)}),this.resizeObserver.observe(e)},t.src=e.currentSrc}paintCover(e,t){if(!e.naturalWidth||!e.naturalHeight)return;let n=this.shadowRoot?.querySelector(`canvas.thumbnail__cover`),r=n?.getContext(`2d`);if(!n||!r)return;let i=t.clientWidth,a=t.clientHeight;if(!i||!a)return;let o=window.devicePixelRatio||1;if(n.width=i*o,n.height=a*o,n.style.width=`${i}px`,n.style.height=`${a}px`,r.scale(o,o),this.mode===`crop`){let t=Math.max(i/e.naturalWidth,a/e.naturalHeight),n=i/t,o=a/t;r.drawImage(e,(e.naturalWidth-n)/2,(e.naturalHeight-o)/2,n,o,0,0,i,a)}else r.drawImage(e,0,0,i,a);this.resizeObserver?.disconnect(),this.resizeObserver=null,this.frozen=!0}};ym.styles=[D,vm],ym.animatedExtensionPattern=/\.(?:gif|webp)(?=[?#\s,]|$)/i,r([c()],ym.prototype,`src`,void 0),r([c({reflect:!0})],ym.prototype,`mode`,void 0),r([c()],ym.prototype,`placeholder`,void 0),r([f()],ym.prototype,`loaded`,void 0),r([c()],ym.prototype,`srcset`,void 0),r([c()],ym.prototype,`sizes`,void 0),r([c()],ym.prototype,`alt`,void 0),r([c({type:Number})],ym.prototype,`width`,void 0),r([c({type:Number})],ym.prototype,`height`,void 0),r([c()],ym.prototype,`loading`,void 0),r([c({type:Boolean,reflect:!0})],ym.prototype,`checkered`,void 0),r([c({type:Boolean,reflect:!0})],ym.prototype,`rounded`,void 0),r([c({type:Boolean,reflect:!0})],ym.prototype,`animated`,void 0),r([f()],ym.prototype,`frozen`,void 0),customElements.get(`craft-thumbnail`)||customElements.define(`craft-thumbnail`,ym);var bm=new WeakMap,xm=new WeakSet,Sm=class extends HTMLElement{constructor(...e){super(...e),O(this,xm),M(this,bm,null)}connectedCallback(){j(xm,this,Cm).call(this)}disconnectedCallback(){k(bm,this)?.destroy(),A(bm,this,null)}};function Cm(){if(!(k(bm,this)||!this.isConnected)){if(!this.querySelector(`[data-sizes]`)){requestAnimationFrame(()=>j(xm,this,Cm).call(this));return}A(bm,this,new Pe),k(bm,this).load(this)}}customElements.get(`craft-thumbnail-loader`)||customElements.define(`craft-thumbnail-loader`,Sm);var wm=async(e,t)=>{let{data:n}=await Ne.post(e,t);return n},Tm=new WeakMap,Em=new WeakMap,Dm=new WeakMap,Om=new WeakMap,km=new WeakMap,Am=new WeakMap,jm=new WeakMap,Mm=new WeakMap,Nm=new WeakMap,Pm=new WeakMap,X=new WeakSet,Fm=class e{constructor(t){O(this,X),M(this,Tm,null),M(this,Em,[]),M(this,Dm,[]),M(this,Om,null),M(this,km,!1),M(this,Am,!1),M(this,jm,!1),M(this,Mm,null),M(this,Nm,void 0),M(this,Pm,new Map),this.options={...e.defaults,modalTitle:n(`Select element`),selectBtnLabel:n(`Select`),...Bm(t)},A(Dm,this,[...this.options.disabledElementIds??[]]),A(Nm,this,j(X,this,Im).call(this))}get elementType(){return this.options.elementType}get state(){return k(Nm,this)}get index(){return k(Tm,this)}get hasSelection(){return k(Em,this).length>0}on(e,t){let n=k(Pm,this).get(e);return n||(n=new Set,k(Pm,this).set(e,n)),n.add(t),()=>{k(Pm,this).get(e)?.delete(t)}}async open(){A(Em,this,[]),k(Tm,this)?.clearSelection(),k(km,this)||(A(km,this,!0),j(X,this,zm).call(this,`open`,void 0)),j(X,this,Lm).call(this),k(Om,this)||await this.reload()}close(){k(km,this)&&(A(km,this,!1),j(X,this,zm).call(this,`close`,void 0),this.options.onClose?.(),j(X,this,Lm).call(this))}destroy(){k(Tm,this)?.destroy?.(),A(Tm,this,null),A(Em,this,[]),A(Om,this,null),A(km,this,!1),A(jm,this,!1),A(Am,this,!1),A(Mm,this,null),j(X,this,Lm).call(this),k(Pm,this).clear()}async reload(){let e=this.options.loadIndexBody??wm;A(Am,this,!0),A(Mm,this,null),j(X,this,Lm).call(this);try{A(Om,this,await e(this.options.bodyAction,this.indexParams()))}catch(e){j(X,this,Rm).call(this,e)}finally{A(Am,this,!1),j(X,this,Lm).call(this)}}async submit(){if(!k(Nm,this).canSubmit)return;let e=this.buildElementInfo(k(Em,this)),t=this.selectMeta();A(jm,this,!0),j(X,this,Lm).call(this);try{j(X,this,zm).call(this,`select`,{elements:e,meta:t}),await this.options.onSelect?.(e,t)}catch(e){j(X,this,Rm).call(this,e);return}finally{A(jm,this,!1),j(X,this,Lm).call(this)}this.options.disableElementsOnSelect&&(this.setDisabledElementIds([...k(Dm,this),...e.map(e=>Number(e.id))]),k(Tm,this)?.clearSelection()),this.options.hideOnSelect&&this.close()}cancel(){k(Nm,this).canCancel&&(j(X,this,zm).call(this,`cancel`,void 0),this.options.onCancel?.(),this.close())}attachIndex(e){A(Tm,this,e),j(X,this,Lm).call(this)}detachIndex(){A(Tm,this,null),j(X,this,Lm).call(this)}setSelection(e){A(Em,this,[...e]),j(X,this,Lm).call(this)}setDisabledElementIds(e){A(Dm,this,[...new Set(e.map(Number))]),j(X,this,Lm).call(this)}setBusy(e){A(jm,this,e),j(X,this,Lm).call(this)}indexParams(){let{options:e}=this,t={context:e.context??`modal`,elementType:this.elementType,sources:e.sources,selectionCondition:e.condition,criteria:{...e.criteria}};e.showSiteMenu!=null&&e.showSiteMenu!==`auto`&&(t.showSiteMenu=e.showSiteMenu?`1`:`0`),e.siteIds&&(t.siteIds=e.siteIds),e.criteria&&(t.criteria={...e.criteria}),typeof e.indexSettings.showFolders==`boolean`&&(t.showFolders=e.indexSettings.showFolders);let n=e.defaultSource??e.indexSettings.defaultSource,r=e.defaultSourcePath??e.indexSettings.defaultSourcePath??[];n&&(t.source=n);let i=Number(r[r.length-1]?.folderId);return Number.isFinite(i)&&(t.folderId=i),e.referenceElementId&&(t.referenceElementId=e.referenceElementId,t.referenceElementOwnerId=e.referenceElementOwnerId??null,t.referenceElementSiteId=e.referenceElementSiteId??null),t}indexSettings(){let{options:e}=this;return{context:e.context??`modal`,storageKey:e.storageKey,condition:e.condition,referenceElementId:e.referenceElementId,referenceElementOwnerId:e.referenceElementOwnerId,referenceElementSiteId:e.referenceElementSiteId,criteria:{...e.criteria},disabledElementIds:[...k(Dm,this)],selectable:!0,multiSelect:e.multiSelect,waitForDoubleClicks:!0,hideSidebar:e.hideSidebar,defaultSiteId:e.defaultSiteId,defaultSource:e.defaultSource,defaultSourcePath:e.defaultSourcePath,preferStoredSource:e.preferStoredSource,showSourcePath:e.showSourcePath,...e.indexSettings}}canSubmitSelection(){return k(Em,this).length>0}buildElementInfo(e){return e.map(e=>({...e}))}selectMeta(){return{}}notifyChange(){j(X,this,Lm).call(this)}get selection(){return k(Em,this)}get disabledElementIds(){return k(Dm,this)}};function Im(){let e=k(jm,this),t=k(Am,this);return Object.freeze({open:k(km,this),loading:t,busy:e,selection:Object.freeze([...k(Em,this)]),disabledElementIds:Object.freeze([...k(Dm,this)]),indexBody:k(Om,this),error:k(Mm,this),title:this.options.modalTitle,showTitle:this.options.showTitle,selectLabel:this.options.selectBtnLabel,canSubmit:!e&&!t&&this.canSubmitSelection(),canCancel:!e})}function Lm(){A(Nm,this,j(X,this,Im).call(this)),j(X,this,zm).call(this,`change`,k(Nm,this))}function Rm(e){A(Mm,this,e instanceof Error?e:Error(String(e??`Unknown`))),j(X,this,zm).call(this,`error`,k(Mm,this))}function zm(e,t){let n=k(Pm,this).get(e);n&&[...n].forEach(e=>e(t))}Fm.defaults={multiSelect:!1,disabledElementIds:[],disableElementsOnSelect:!1,hideOnSelect:!0,showTitle:!1,fullscreen:!1,bodyAction:`element-selector-modals/body`,indexSettings:{},preferStoredSource:!1,showSourcePath:!0,hideSidebar:!1};function Bm(e){return Object.fromEntries(Object.entries(e).filter(([,e])=>e!==void 0))}var Vm=async(e,t)=>{let{data:n}=await Ne.post(`assets/generate-transform`,{assetId:e,handle:t});return n?.url||!1},Hm=new WeakMap,Um=class e extends Fm{constructor(e){super(e),M(this,Hm,null)}get transforms(){return this.options.transforms??[]}get canApplyTransform(){return this.selection.length>0&&this.transforms.length>0}async selectWithTransform(t){var n;let r=(n=e.transformUrls)[t]??(n[t]={}),i=this.selection.map(e=>Number(e.id)).filter(e=>r[e]===void 0);if(i.length>0){let e=this.options.fetchTransformUrl??Vm;this.setBusy(!0);try{for(let n of i)try{r[n]=await e(n,t)}catch{r[n]=!1}}finally{this.setBusy(!1)}}A(Hm,this,t);try{await this.submit()}finally{A(Hm,this,null)}}buildElementInfo(t){let n=super.buildElementInfo(t);if(!k(Hm,this))return n;let r=e.transformUrls[k(Hm,this)]??{};for(let e of n){let t=r[Number(e.id)];t!==void 0&&t!==!1&&(e.url=t)}return n}selectMeta(){return{transform:k(Hm,this)}}};Um.transformUrls={};var Wm=`CraftCms\\Cms\\Asset\\Elements\\Asset`,Gm=new WeakSet,Km=class extends Fm{constructor(e={}){let{disabledFolderIds:t=[],...n}=e;super({...n,elementType:Wm,showSiteMenu:!1}),O(this,Gm),this.disabledFolderIds=[...t]}indexParams(){return{...super.indexParams(),foldersOnly:!0,showFolders:!0}}indexSettings(){return{...super.indexSettings(),foldersOnly:!0,disabledFolderIds:[...this.disabledFolderIds]}}currentFolderId(){let e=this.index?.sourcePath;if(!e?.length)return null;let t=e[e.length-1],n=Number(t.folderId);return Number.isFinite(n)?this.disabledFolderIds.includes(n)?null:n:null}canSubmitSelection(){return super.canSubmitSelection()||this.currentFolderId()!==null}buildElementInfo(e){if(e.length>0)return e.map(e=>({...e,folderId:Number(e.folderId??e.id)}));let t=this.currentFolderId();return t===null?[]:[{id:t,folderId:t,siteId:null,label:j(Gm,this,qm).call(this),status:null,url:null,hasThumb:!1}]}};function qm(){let e=this.index?.sourcePath;return e?.[e.length-1]?.label??``}var Jm=new Map;function Ym(e,t){if(Jm.has(e))throw Error(`An element selector controller has already been registered for the element type “${e}”.`);Jm.set(e,t)}function Xm(e){return Jm.has(e)}function Zm(e){return Jm.get(e)??Fm}function Qm(e){return new(Zm(e.elementType))(e)}function $m(){if(typeof window>`u`)return;let e=window.Craft?._elementSelectorModalClasses;if(e)for(let[t,n]of Object.entries(e))Jm.has(t)||Jm.set(t,n)}var eh={START:`asset-indexes/start-indexing`,STOP:`asset-indexes/stop-indexing-session`,PROCESS:`asset-indexes/process-indexing-session`,OVERVIEW:`asset-indexes/indexing-session-overview`,FINISH:`asset-indexes/finish-indexing-session`},th=new WeakMap,nh=new WeakMap,rh=new WeakMap,ih=new WeakMap,ah=new WeakMap,oh=new WeakMap,sh=new WeakMap,Z=new WeakSet,ch=class{constructor(e={}){O(this,Z),M(this,th,new Map),M(this,nh,null),M(this,rh,0),M(this,ih,[]),M(this,ah,[]),M(this,oh,new Set),M(this,sh,new Map);let{existingSessions:t=[],maxConcurrentConnections:n=3,autoResume:r=!0}=e;this.maxConcurrentConnections=n;for(let e of t)k(th,this).set(e.id,e);r&&(j(Z,this,fh).call(this),k(nh,this)!==null&&j(Z,this,ph).call(this))}getSessions(){return Array.from(k(th,this).values())}getCurrentSessionId(){return k(nh,this)}isProcessing(){return k(rh,this)>0}on(e,t){return k(sh,this).has(e)||k(sh,this).set(e,new Set),k(sh,this).get(e).add(t),()=>{k(sh,this).get(e)?.delete(t)}}async startIndexing(e){let t=await Ne.post(eh.START,e),{data:n}=t;return n.session&&(k(th,this).set(n.session.id,n.session),A(nh,this,n.session.id),j(Z,this,uh).call(this),n.stop||j(Z,this,ph).call(this)),n.stop&&j(Z,this,dh).call(this,n.stop),t}stopSession(e){j(Z,this,mh).call(this,e),j(Z,this,hh).call(this,{sessionId:e,action:eh.STOP,params:{sessionId:e},priority:!0})}getSessionOverview(e){j(Z,this,hh).call(this,{sessionId:e,action:eh.OVERVIEW,params:{sessionId:e},priority:!0})}finishSession(e){j(Z,this,hh).call(this,{sessionId:e.sessionId,action:eh.FINISH,params:e,priority:!0})}destroy(){k(th,this).clear(),A(ih,this,[]),A(ah,this,[]),k(sh,this).clear(),A(nh,this,null),A(rh,this,0)}};function lh(e,t){k(sh,this).get(e)?.forEach(e=>e(t))}function uh(e){j(Z,this,lh).call(this,`change`,{sessions:this.getSessions(),currentSessionId:k(nh,this),reviewSessionId:e})}function dh(e){k(th,this).delete(e),k(nh,this)===e&&A(nh,this,null),j(Z,this,uh).call(this)}function fh(){for(let[e,t]of k(th,this))if(!t.actionRequired&&!k(oh,this).has(e)){A(nh,this,e);return}A(nh,this,null)}function ph(){if(k(nh,this)||j(Z,this,fh).call(this),!k(nh,this))return;let e=k(th,this).get(k(nh,this));if(!e)return;let t=e.totalEntries-e.processedEntries,n=this.maxConcurrentConnections-k(rh,this),r=Math.min(n,t);for(let t=0;t<r;t++)j(Z,this,hh).call(this,{sessionId:e.id,action:eh.PROCESS,params:{sessionId:k(nh,this)},priority:!1});e.processIfRootEmpty&&j(Z,this,hh).call(this,{sessionId:e.id,action:eh.PROCESS,params:{sessionId:k(nh,this)},priority:!1})}function mh(e){k(oh,this).add(e),A(ih,this,k(ih,this).filter(t=>t.sessionId!==e))}function hh(e){e.priority?k(ah,this).push(e):k(ih,this).push(e),j(Z,this,gh).call(this)}function gh(){if(!(k(ih,this).length+k(ah,this).length===0||k(rh,this)>=this.maxConcurrentConnections))for(;k(ih,this).length+k(ah,this).length>0&&k(rh,this)<this.maxConcurrentConnections;){var e;A(rh,this,(e=k(rh,this),e++,e));let t=k(ah,this).length>0?k(ah,this).shift():k(ih,this).shift();j(Z,this,_h).call(this,t)}}async function _h(e){try{let t=await Ne.post(e.action,e.params);j(Z,this,vh).call(this,t.data)}catch(t){j(Z,this,yh).call(this,t,e)}finally{var t;A(rh,this,(t=k(rh,this),t--,t)),j(Z,this,gh).call(this)}}function vh(e){let t;e.session&&(k(th,this).set(e.session.id,e.session),j(Z,this,fh).call(this),e.session.actionRequired&&!e.skipDialog?k(oh,this).has(e.session.id)||(t=e.session.id):k(oh,this).has(e.session.id)||j(Z,this,ph).call(this)),j(Z,this,fh).call(this),e.stop&&(k(th,this).delete(e.stop),k(nh,this)===e.stop&&A(nh,this,null)),j(Z,this,uh).call(this,t),k(th,this).size===0&&j(Z,this,lh).call(this,`complete`,{})}function yh(e,t){j(Z,this,fh).call(this);let n=e?.response?.data?.message||e.message||`An error occurred during indexing.`;j(Z,this,lh).call(this,`error`,{message:n,sessionId:t.sessionId}),j(Z,this,gh).call(this)}var bh=function(e,t,n,r,i){if(r===`m`)throw TypeError(`Private method is not writable`);if(r===`a`&&!i)throw TypeError(`Private accessor was defined without a setter`);if(typeof t==`function`?e!==t||!i:!t.has(e))throw TypeError(`Cannot write private member to an object whose class did not declare it`);return r===`a`?i.call(e,n):i?i.value=n:t.set(e,n),n},xh=function(e,t,n,r){if(n===`a`&&!r)throw TypeError(`Private accessor was defined without a getter`);if(typeof t==`function`?e!==t||!r:!t.has(e))throw TypeError(`Cannot read private member from an object whose class did not declare it`);return n===`m`?r:n===`a`?r.call(e):r?r.value:t.get(e)},Sh,Ch=class{formatToParts(e){let t=[];for(let n of e)t.push({type:`element`,value:n}),t.push({type:`literal`,value:`, `});return t.slice(0,-1)}},wh=typeof Intl<`u`&&Intl.ListFormat||Ch,Th=[[`years`,`year`],[`months`,`month`],[`weeks`,`week`],[`days`,`day`],[`hours`,`hour`],[`minutes`,`minute`],[`seconds`,`second`],[`milliseconds`,`millisecond`]],Eh={minimumIntegerDigits:2},Dh=class{constructor(e,t={}){Sh.set(this,void 0);let n=String(t.style||`short`);n!==`long`&&n!==`short`&&n!==`narrow`&&n!==`digital`&&(n=`short`);let r=n===`digital`?`numeric`:n,i=t.hours||r;r=i===`2-digit`?`numeric`:i;let a=t.minutes||r;r=a===`2-digit`?`numeric`:a;let o=t.seconds||r;r=o===`2-digit`?`numeric`:o;let s=t.milliseconds||r;bh(this,Sh,{locale:e,style:n,years:t.years||n===`digital`?`short`:n,yearsDisplay:t.yearsDisplay===`always`?`always`:`auto`,months:t.months||n===`digital`?`short`:n,monthsDisplay:t.monthsDisplay===`always`?`always`:`auto`,weeks:t.weeks||n===`digital`?`short`:n,weeksDisplay:t.weeksDisplay===`always`?`always`:`auto`,days:t.days||n===`digital`?`short`:n,daysDisplay:t.daysDisplay===`always`?`always`:`auto`,hours:i,hoursDisplay:t.hoursDisplay===`always`||n===`digital`?`always`:`auto`,minutes:a,minutesDisplay:t.minutesDisplay===`always`||n===`digital`?`always`:`auto`,seconds:o,secondsDisplay:t.secondsDisplay===`always`||n===`digital`?`always`:`auto`,milliseconds:s,millisecondsDisplay:t.millisecondsDisplay===`always`?`always`:`auto`},`f`)}resolvedOptions(){return xh(this,Sh,`f`)}formatToParts(e){let t=[],n=xh(this,Sh,`f`),r=n.style,i=n.locale;for(let[a,o]of Th){let s=e[a];if(n[`${a}Display`]===`auto`&&!s)continue;let c=n[a],l=c===`2-digit`?Eh:c===`numeric`?{}:{style:`unit`,unit:o,unitDisplay:c},u=new Intl.NumberFormat(i,l).format(s);a===`months`&&(c===`narrow`||r===`narrow`&&u.endsWith(`m`))&&(u=u.replace(/(\d+)m$/,`$1mo`)),t.push(u)}return new wh(i,{type:`unit`,style:r===`digital`?`short`:r}).formatToParts(t)}format(e){return this.formatToParts(e).map(e=>e.value).join(``)}};Sh=new WeakMap;var Oh=/^[-+]?P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)W)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?$/,kh=[`year`,`month`,`week`,`day`,`hour`,`minute`,`second`,`millisecond`],Ah=e=>Oh.test(e),jh=class e{constructor(e=0,t=0,n=0,r=0,i=0,a=0,o=0,s=0){this.years=e,this.months=t,this.weeks=n,this.days=r,this.hours=i,this.minutes=a,this.seconds=o,this.milliseconds=s,this.years||=0,this.sign||=Math.sign(this.years),this.months||=0,this.sign||=Math.sign(this.months),this.weeks||=0,this.sign||=Math.sign(this.weeks),this.days||=0,this.sign||=Math.sign(this.days),this.hours||=0,this.sign||=Math.sign(this.hours),this.minutes||=0,this.sign||=Math.sign(this.minutes),this.seconds||=0,this.sign||=Math.sign(this.seconds),this.milliseconds||=0,this.sign||=Math.sign(this.milliseconds),this.blank=this.sign===0}abs(){return new e(Math.abs(this.years),Math.abs(this.months),Math.abs(this.weeks),Math.abs(this.days),Math.abs(this.hours),Math.abs(this.minutes),Math.abs(this.seconds),Math.abs(this.milliseconds))}static from(t){if(typeof t==`string`){let n=String(t).trim(),r=n.startsWith(`-`)?-1:1,i=n.match(Oh)?.slice(1).map(e=>(Number(e)||0)*r);return i?new e(...i):new e}else if(typeof t==`object`){let{years:n,months:r,weeks:i,days:a,hours:o,minutes:s,seconds:c,milliseconds:l}=t;return new e(n,r,i,a,o,s,c,l)}throw RangeError(`invalid duration`)}static compare(t,n){let r=Date.now(),i=Math.abs(Mh(r,e.from(t)).getTime()-r),a=Math.abs(Mh(r,e.from(n)).getTime()-r);return i>a?-1:+(i<a)}toLocaleString(e,t){return new Dh(e,t).format(this)}};function Mh(e,t){let n=new Date(e);return t.sign<0?(n.setUTCSeconds(n.getUTCSeconds()+t.seconds),n.setUTCMinutes(n.getUTCMinutes()+t.minutes),n.setUTCHours(n.getUTCHours()+t.hours),n.setUTCDate(n.getUTCDate()+t.weeks*7+t.days),n.setUTCMonth(n.getUTCMonth()+t.months),n.setUTCFullYear(n.getUTCFullYear()+t.years)):(n.setUTCFullYear(n.getUTCFullYear()+t.years),n.setUTCMonth(n.getUTCMonth()+t.months),n.setUTCDate(n.getUTCDate()+t.weeks*7+t.days),n.setUTCHours(n.getUTCHours()+t.hours),n.setUTCMinutes(n.getUTCMinutes()+t.minutes),n.setUTCSeconds(n.getUTCSeconds()+t.seconds)),n}function Nh(e,t=`second`,n=Date.now()){let r=e.getTime()-n;if(r===0)return new jh;let i=Math.sign(r),a=Math.abs(r),o=Math.floor(a/1e3),s=Math.floor(o/60),c=Math.floor(s/60),l=Math.floor(c/24),u=Math.floor(l/30),d=Math.floor(u/12),f=kh.indexOf(t)||kh.length;return new jh(f>=0?d*i:0,f>=1?(u-d*12)*i:0,0,f>=3?(l-u*30)*i:0,f>=4?(c-l*24)*i:0,f>=5?(s-c*60)*i:0,f>=6?(o-s*60)*i:0,f>=7?(a-o*1e3)*i:0)}function Ph(e,{relativeTo:t=Date.now()}={}){if(t=new Date(t),e.blank)return e;let n=e.sign,r=Math.abs(e.years),i=Math.abs(e.months),a=Math.abs(e.weeks),o=Math.abs(e.days),s=Math.abs(e.hours),c=Math.abs(e.minutes),l=Math.abs(e.seconds),u=Math.abs(e.milliseconds);u>=900&&(l+=Math.round(u/1e3)),(l||c||s||o||a||i||r)&&(u=0),l>=55&&(c+=Math.round(l/60)),(c||s||o||a||i||r)&&(l=0),c>=55&&(s+=Math.round(c/60)),(s||o||a||i||r)&&(c=0),o&&s>=12&&(o+=Math.round(s/24)),!o&&s>=21&&(o+=Math.round(s/24)),(o||a||i||r)&&(s=0);let d=t.getFullYear(),f=t.getMonth(),p=t.getDate();if(o>=27||r+i+o){let e=new Date(t);e.setDate(1),e.setMonth(f+i*n+1),e.setDate(0);let s=Math.max(0,p-e.getDate()),c=new Date(t);c.setFullYear(d+r*n),c.setDate(p-s),c.setMonth(f+i*n),c.setDate(p-s+o*n);let l=c.getFullYear()-t.getFullYear(),u=c.getMonth()-t.getMonth(),m=Math.abs(Math.round((Number(c)-Number(t))/864e5))+s,h=Math.abs(l*12+u);m<27?(o>=6?(a+=Math.round(o/7),o=0):o=m,i=r=0):h<=11?(i=h,r=0):(i=0,r=l*n),(i||r)&&(o=0)}return r&&(i=0),a>=4&&(i+=Math.round(a/4)),(i||r)&&(a=0),o&&a&&!i&&!r&&(a+=Math.round(o/7),o=0),new jh(r*n,i*n,a*n,o*n,s*n,c*n,l*n,u*n)}function Fh(e,t){let n=Ph(e,t);if(n.blank)return[0,`second`];for(let e of kh){if(e===`millisecond`)continue;let t=n[`${e}s`];if(t)return[t,e]}return[0,`second`]}var Q=function(e,t,n,r){if(n===`a`&&!r)throw TypeError(`Private accessor was defined without a getter`);if(typeof t==`function`?e!==t||!r:!t.has(e))throw TypeError(`Cannot read private member from an object whose class did not declare it`);return n===`m`?r:n===`a`?r.call(e):r?r.value:t.get(e)},Ih=function(e,t,n,r,i){if(r===`m`)throw TypeError(`Private method is not writable`);if(r===`a`&&!i)throw TypeError(`Private accessor was defined without a setter`);if(typeof t==`function`?e!==t||!i:!t.has(e))throw TypeError(`Cannot write private member to an object whose class did not declare it`);return r===`a`?i.call(e,n):i?i.value=n:t.set(e,n),n},$,Lh,Rh,zh,Bh,Vh,Hh,Uh,Wh,Gh,Kh,qh,Jh,Yh,Xh,Zh,Qh=globalThis.HTMLElement||null,$h=new jh,eg=new jh(0,0,0,0,0,1),tg=class extends Event{constructor(e,t,n,r){super(`relative-time-updated`,{bubbles:!0,composed:!0}),this.oldText=e,this.newText=t,this.oldTitle=n,this.newTitle=r}};function ng(e){if(!e.date)return 1/0;if(e.format===`duration`||e.format===`elapsed`){let t=e.precision;if(t===`second`)return 1e3;if(t===`minute`)return 60*1e3}let t=Math.abs(Date.now()-e.date.getTime());return t<60*1e3?1e3:t<3600*1e3?60*1e3:3600*1e3}var rg=new class{constructor(){this.elements=new Set,this.time=1/0,this.timer=-1}observe(e){if(this.elements.has(e))return;this.elements.add(e);let t=e.date;if(t&&t.getTime()){let t=ng(e),n=Date.now()+t;n<this.time&&(clearTimeout(this.timer),this.timer=setTimeout(()=>this.update(),t),this.time=n)}}unobserve(e){this.elements.has(e)&&this.elements.delete(e)}update(){if(clearTimeout(this.timer),!this.elements.size)return;let e=1/0;for(let t of this.elements)e=Math.min(e,ng(t)),t.update();this.time=Math.min(3600*1e3,e),this.timer=setTimeout(()=>this.update(),this.time),this.time+=Date.now()}},ig=class extends Qh{constructor(){super(...arguments),$.add(this),Lh.set(this,!1),Rh.set(this,!1),Bh.set(this,this.shadowRoot?this.shadowRoot:this.attachShadow?this.attachShadow({mode:`open`}):this),Zh.set(this,null)}static define(e=`relative-time`,t=customElements){return t.define(e,this),this}get timeZone(){return this.closest(`[time-zone]`)?.getAttribute(`time-zone`)||this.ownerDocument.documentElement.getAttribute(`time-zone`)||void 0}static get observedAttributes(){return[`second`,`minute`,`hour`,`weekday`,`day`,`month`,`year`,`time-zone-name`,`prefix`,`threshold`,`tense`,`precision`,`format`,`format-style`,`no-title`,`datetime`,`lang`,`title`,`aria-hidden`,`time-zone`]}get onRelativeTimeUpdated(){return Q(this,Zh,`f`)}set onRelativeTimeUpdated(e){Q(this,Zh,`f`)&&this.removeEventListener(`relative-time-updated`,Q(this,Zh,`f`)),Ih(this,Zh,typeof e==`object`||typeof e==`function`?e:null,`f`),typeof e==`function`&&this.addEventListener(`relative-time-updated`,e)}get second(){let e=this.getAttribute(`second`);if(e===`numeric`||e===`2-digit`)return e}set second(e){this.setAttribute(`second`,e||``)}get minute(){let e=this.getAttribute(`minute`);if(e===`numeric`||e===`2-digit`)return e}set minute(e){this.setAttribute(`minute`,e||``)}get hour(){let e=this.getAttribute(`hour`);if(e===`numeric`||e===`2-digit`)return e}set hour(e){this.setAttribute(`hour`,e||``)}get weekday(){let e=this.getAttribute(`weekday`);if(e===`long`||e===`short`||e===`narrow`)return e;if(this.format===`datetime`&&e!==``)return this.formatStyle}set weekday(e){this.setAttribute(`weekday`,e||``)}get day(){let e=this.getAttribute(`day`)??`numeric`;if(e===`numeric`||e===`2-digit`)return e}set day(e){this.setAttribute(`day`,e||``)}get month(){let e=this.format,t=this.getAttribute(`month`);if(t!==``&&(t??=e===`datetime`?this.formatStyle:`short`,t===`numeric`||t===`2-digit`||t===`short`||t===`long`||t===`narrow`))return t}set month(e){this.setAttribute(`month`,e||``)}get year(){let e=this.getAttribute(`year`);if(e===`numeric`||e===`2-digit`)return e;if(!this.hasAttribute(`year`)&&new Date().getUTCFullYear()!==this.date?.getUTCFullYear())return`numeric`}set year(e){this.setAttribute(`year`,e||``)}get timeZoneName(){let e=this.getAttribute(`time-zone-name`);if(e===`long`||e===`short`||e===`shortOffset`||e===`longOffset`||e===`shortGeneric`||e===`longGeneric`)return e}set timeZoneName(e){this.setAttribute(`time-zone-name`,e||``)}get prefix(){return this.getAttribute(`prefix`)??(this.format===`datetime`?``:`on`)}set prefix(e){this.setAttribute(`prefix`,e)}get threshold(){let e=this.getAttribute(`threshold`);return e&&Ah(e)?e:`P30D`}set threshold(e){this.setAttribute(`threshold`,e)}get tense(){let e=this.getAttribute(`tense`);return e===`past`?`past`:e===`future`?`future`:`auto`}set tense(e){this.setAttribute(`tense`,e)}get precision(){let e=this.getAttribute(`precision`);return kh.includes(e)?e:this.format===`micro`?`minute`:`second`}set precision(e){this.setAttribute(`precision`,e)}get format(){let e=this.getAttribute(`format`);return e===`datetime`?`datetime`:e===`relative`?`relative`:e===`duration`?`duration`:e===`micro`?`micro`:e===`elapsed`?`elapsed`:`auto`}set format(e){this.setAttribute(`format`,e)}get formatStyle(){let e=this.getAttribute(`format-style`);if(e===`long`)return`long`;if(e===`short`)return`short`;if(e===`narrow`)return`narrow`;let t=this.format;return t===`elapsed`||t===`micro`?`narrow`:t===`datetime`?`short`:`long`}set formatStyle(e){this.setAttribute(`format-style`,e)}get noTitle(){return this.hasAttribute(`no-title`)}set noTitle(e){this.toggleAttribute(`no-title`,e)}get datetime(){return this.getAttribute(`datetime`)||``}set datetime(e){this.setAttribute(`datetime`,e)}get date(){let e=Date.parse(this.datetime);return Number.isNaN(e)?null:new Date(e)}set date(e){this.datetime=e?.toISOString()||``}connectedCallback(){this.update()}disconnectedCallback(){rg.unobserve(this)}attributeChangedCallback(e,t,n){t!==n&&(e===`title`&&Ih(this,Lh,n!==null&&(this.date&&Q(this,$,`m`,Vh).call(this,this.date))!==n,`f`),!Q(this,Rh,`f`)&&!(e===`title`&&Q(this,Lh,`f`))&&Ih(this,Rh,(async()=>{await Promise.resolve(),this.update(),Ih(this,Rh,!1,`f`)})(),`f`))}update(){let e=Q(this,Bh,`f`).textContent||this.textContent||``,t=this.getAttribute(`title`)||``,n=t,r=this.date;if(typeof Intl>`u`||!Intl.DateTimeFormat||!r){Q(this,Bh,`f`).textContent=e;return}let i=Date.now();Q(this,Lh,`f`)||(n=Q(this,$,`m`,Vh).call(this,r)||``,n&&!this.noTitle&&this.setAttribute(`title`,n));let a=Nh(r,this.precision,i),o=Q(this,$,`m`,Hh).call(this,a),s=e,c=Q(this,$,`m`,Xh).call(this,o);s=c?Q(this,$,`m`,Jh).call(this,r):o===`duration`?Q(this,$,`m`,Uh).call(this,a):o===`relative`?Q(this,$,`m`,Wh).call(this,a):Q(this,$,`m`,Gh).call(this,r),s?Q(this,$,`m`,Yh).call(this,s):this.shadowRoot===Q(this,Bh,`f`)&&this.textContent&&Q(this,$,`m`,Yh).call(this,this.textContent),(s!==e||n!==t)&&this.dispatchEvent(new tg(e,s,t,n)),o===`relative`||o===`duration`||c&&(Q(this,$,`m`,Kh).call(this,r)||Q(this,$,`m`,qh).call(this,r))?rg.observe(this):rg.unobserve(this)}};Lh=new WeakMap,Rh=new WeakMap,Bh=new WeakMap,Zh=new WeakMap,$=new WeakSet,zh=function(){let e=this.closest(`[lang]`)?.getAttribute(`lang`)||this.ownerDocument.documentElement.getAttribute(`lang`);try{return new Intl.Locale(e??``).toString()}catch{return`default`}},Vh=function(e){return new Intl.DateTimeFormat(Q(this,$,`a`,zh),{day:`numeric`,month:`short`,year:`numeric`,hour:`numeric`,minute:`2-digit`,timeZoneName:`short`,timeZone:this.timeZone}).format(e)},Hh=function(e){let t=this.format;if(t===`datetime`)return`datetime`;if(t===`duration`||t===`elapsed`||t===`micro`)return`duration`;if((t===`auto`||t===`relative`)&&typeof Intl<`u`&&Intl.RelativeTimeFormat){let t=this.tense;if(t===`past`||t===`future`||jh.compare(e,this.threshold)===1)return`relative`}return`datetime`},Uh=function(e){let t=Q(this,$,`a`,zh),n=this.format,r=this.formatStyle,i=this.tense,a=$h;n===`micro`?(e=Ph(e),a=eg,e.months===0&&(this.tense===`past`&&e.sign!==-1||this.tense===`future`&&e.sign!==1)&&(e=eg)):(i===`past`&&e.sign!==-1||i===`future`&&e.sign!==1)&&(e=a);let o=`${this.precision}sDisplay`;return e.blank?a.toLocaleString(t,{style:r,[o]:`always`}):e.abs().toLocaleString(t,{style:r})},Wh=function(e){let t=new Intl.RelativeTimeFormat(Q(this,$,`a`,zh),{numeric:`auto`,style:this.formatStyle}),n=this.tense;n===`future`&&e.sign!==1&&(e=$h),n===`past`&&e.sign!==-1&&(e=$h);let[r,i]=Fh(e);return i===`second`&&r<10?t.format(0,this.precision===`millisecond`?`second`:this.precision):t.format(r,i)},Gh=function(e){let t=new Intl.DateTimeFormat(Q(this,$,`a`,zh),{second:this.second,minute:this.minute,hour:this.hour,weekday:this.weekday,day:this.day,month:this.month,year:this.year,timeZoneName:this.timeZoneName,timeZone:this.timeZone});return`${this.prefix} ${t.format(e)}`.trim()},Kh=function(e){let t=new Date,n=new Intl.DateTimeFormat(Q(this,$,`a`,zh),{timeZone:this.timeZone,year:`numeric`,month:`2-digit`,day:`2-digit`});return n.format(t)===n.format(e)},qh=function(e){let t=new Date,n=new Intl.DateTimeFormat(Q(this,$,`a`,zh),{timeZone:this.timeZone,year:`numeric`});return n.format(t)===n.format(e)},Jh=function(e){let t={hour:`numeric`,minute:`2-digit`,timeZoneName:`short`,timeZone:this.timeZone};if(Q(this,$,`m`,Kh).call(this,e)){let n=new Intl.RelativeTimeFormat(Q(this,$,`a`,zh),{numeric:`auto`}).format(0,`day`);n=n.charAt(0).toLocaleUpperCase(Q(this,$,`a`,zh))+n.slice(1);let r=new Intl.DateTimeFormat(Q(this,$,`a`,zh),t).format(e);return`${n} ${r}`}let n=Object.assign(Object.assign({},t),{day:`numeric`,month:`short`});return Q(this,$,`m`,qh).call(this,e)?new Intl.DateTimeFormat(Q(this,$,`a`,zh),n).format(e):new Intl.DateTimeFormat(Q(this,$,`a`,zh),Object.assign(Object.assign({},n),{year:`numeric`})).format(e)},Yh=function(e){if(this.hasAttribute(`aria-hidden`)&&this.getAttribute(`aria-hidden`)===`true`){let t=document.createElement(`span`);t.setAttribute(`aria-hidden`,`true`),t.textContent=e,Q(this,Bh,`f`).replaceChildren(t)}else Q(this,Bh,`f`).textContent=e},Xh=function(e){return e===`duration`?!1:this.ownerDocument.documentElement.getAttribute(`data-prefers-absolute-time`)===`true`||this.ownerDocument.body?.getAttribute(`data-prefers-absolute-time`)===`true`};var ag=typeof globalThis<`u`?globalThis:window;try{ag.RelativeTimeElement=ig.define()}catch(e){if(!(ag.DOMException&&e instanceof DOMException&&e.name===`NotSupportedError`)&&!(e instanceof ReferenceError))throw e}Object.values({Enabled:`enabled`,Disabled:`disabled`,Live:`live`,Pending:`pending`,Expired:`expired`,Active:`active`,Suspended:`suspended`,Inactive:`inactive`});var og={on:`teal`,live:`teal`,active:`teal`,enabled:`teal`,turquoise:`teal`,off:`red`,suspended:`red`,expired:`red`,warning:`amber`,pending:`sky`,grey:`gray`};function sg(e){return e?og[e]||(Ke.includes(e)?e:`gray`):`gray`}export{Ga as _,$m as a,Ke as b,Um as c,sd as d,$l as f,jo as g,as as h,Ym as i,Fm as l,ps as m,ch as n,Xm as o,Xl as p,Qm as r,Km as s,sg as t,Hf as u,gr as v,Ge as x,Ct as y};