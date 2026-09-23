import{S as e,l as t}from"./nav-item-D1WrRPUi-B7Kn9qEa.js";import{c as n,f as r,r as i,t as a}from"./lit-DNaDb1T7.js";import"./cp-ByL1o6B6.js";import{t as o}from"./custom-element-Bov83m9_.js";import{n as s}from"./decorators-D0-gbKXH.js";import{t as c}from"./query-Df4-SAIv.js";import{t as l}from"./actionClient-NFMyfrDL-DsDU7tG9.js";import{i as u,n as d,t as f}from"./wayfinder-Byp9MxZi.js";import"./actionClient.ts-zYZ3wcB4.js";import"./unsafe-html-CqxCXw4K.js";import{t as p}from"./decorate-B3KLIx2E.js";import"./button.ts-CqxCXw4K.js";import"./popover.ts-CqxCXw4K.js";var m=(e,t)=>({url:m.url(e,t),method:`post`});m.definition={methods:[`post`],url:`/{cpTrigger?}/notifications/mark-read`},m.url=(e,t)=>{(typeof e==`string`||typeof e==`number`)&&(e={cpTrigger:e}),Array.isArray(e)&&(e={cpTrigger:e[0]}),e=f(e),u(e,[`cpTrigger`]);let n={cpTrigger:e?.cpTrigger??`admin`};return m.definition.url.replace(`{cpTrigger?}`,n.cpTrigger?.toString()??``).replace(/\/+$/,``)+d(t)},m.post=(e,t)=>({url:m.url(e,t),method:`post`});var h=class extends a{constructor(...e){super(...e),this.notifications=window.Craft.notifications??[]}static{this.styles=r`
    :host {
      display: contents;
    }

    .notification-trigger {
      position: relative;
    }

    .notification-trigger__icon {
      font-size: 1.1em;
    }

    .notification-trigger__badge {
      display: inline-flex;
      position: absolute;
      inset-block-start: -0.125rem;
      inset-inline-end: -0.125rem;
    }

    .notification-trigger__badge::part(badge) {
      background-color: var(--c-color-danger-fill-loud);
    }

    craft-popover::part(popup) {
      width: min(26rem, calc(100vw - 2rem));
      max-width: none;
      max-height: none;
      overflow: hidden;
    }

    .notification-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      padding: 0.75rem 1rem;
    }

    .notification-heading {
      margin: 0;
      font-size: var(--c-text-lg);
      font-weight: var(--font-weight-semibold);
    }

    .notification-list {
      max-height: min(34rem, calc(100vh - 8rem));
      overflow-y: auto;
      border-block-start: 1px solid var(--c-color-neutral-border-quiet);
    }

    .notification-item {
      position: relative;
      display: flex;
      gap: 0.75rem;
      padding: 1rem;
      border-block-end: 1px solid var(--c-color-neutral-border-quiet);
    }

    .notification-item--read {
      opacity: 0.7;
    }

    .notification-card-link {
      position: absolute;
      z-index: 1;
      inset: 0;
    }

    .notification-visual {
      display: flex;
      flex: none;
      align-items: center;
      justify-content: center;
      width: 2.5rem;
      height: 2.5rem;
      overflow: hidden;
      border-radius: var(--c-radius-md);
    }

    .notification-visual--icon {
      color: var(--c-text-default);
      background-color: var(--c-color-neutral-fill-quiet);
    }

    .notification-visual--icon craft-icon {
      width: 1.5rem;
      height: 1.5rem;
      font-size: 1.5rem;
    }

    .notification-visual--icon svg {
      display: block;
      width: 100%;
      height: 100%;
    }

    .notification-visual craft-thumbnail {
      --c-thumbnail-size: 100%;
    }

    .notification-visual img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .notification-content {
      min-width: 0;
      flex-grow: 1;
    }

    .notification-title-row {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .notification-title {
      min-width: 0;
      margin: 0;
      font-size: var(--c-text-lg);
      font-weight: var(--font-weight-semibold);
      line-height: 1.25;
    }

    .notification-message {
      position: relative;
      margin-block-start: 0.25rem;
      font-size: var(--c-text-base);
    }

    .notification-message a {
      position: relative;
      z-index: 2;
    }

    .notification-message p {
      margin: 0;
    }

    .notification-meta {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.25rem;
      margin-block-start: 0.5rem;
      color: var(--c-text-quiet);
      font-size: var(--c-text-sm);
    }

    .notification-actions {
      position: relative;
      z-index: 2;
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-block-start: 0.75rem;
    }
  `}get#e(){return this.notifications.filter(e=>e.unread)}get#t(){return this.#e.length?e(`Notifications, {count} unread`,{count:this.#e.length}):e(`Notifications`)}async#n(t){let n=this.notifications.filter(e=>e.unread&&t.includes(e.id)).map(e=>e.id);if(n.length){this.#r(n,!1);try{await l.post(m().url,{ids:n})}catch{this.#r(n,!0),Craft.cp?.displayError?.(e(`Couldn’t mark notifications as read.`))}}}#r(e,t){this.notifications=this.notifications.map(n=>e.includes(n.id)?{...n,unread:t}:n)}#i(e,t){return e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||t.target!==``&&t.target!==`_self`}async#a(e,t){let n=t.composedPath().find(e=>e instanceof HTMLAnchorElement);if(n){if(this.#i(t,n)){e.unread&&this.#n([e.id]);return}t.preventDefault();try{await this.#n([e.id])}finally{this.#o(n.href)}}}#o(e){if(this.popoverElement?.hide(),new URL(e).origin!==window.location.origin){window.location.assign(e);return}window.dispatchEvent(new CustomEvent(`action:redirect`,{cancelable:!0,detail:{url:e}}))&&window.location.assign(e)}#s(e){return n`
      <div
        class="notification-visual ${e.image?``:`notification-visual--icon`}"
      >
        ${e.image?n`
              <craft-thumbnail checkered="false">
                <img
                  src=${e.image}
                  alt=${e.imageAlt??``}
                />
              </craft-thumbnail>
            `:e.icon?n`
                <craft-icon
                  name=${e.icon}
                  appearance="plain"
                  aria-hidden="true"
                ></craft-icon>
              `:i}
      </div>
    `}#c(r){return n`
      <article
        class="notification-item ${r.unread?``:`notification-item--read`}"
        role="listitem"
        @click=${e=>this.#a(r,e)}
      >
        ${r.url?n`
              <a
                class="notification-card-link"
                href=${r.url}
                aria-label=${r.title??e(`Open notification`)}
              ></a>
            `:i}
        ${this.#s(r)}

        <div class="notification-content">
          <div class="notification-title-row">
            ${r.title?n`<h3 class="notification-title">${r.title}</h3>`:i}
            ${r.unread?n`
                  <craft-badge-indicator
                    alt-text=${e(`Unread`)}
                  ></craft-badge-indicator>
                `:i}
          </div>

          <div class="notification-message">
            ${t(r.messageHtml)}
          </div>

          <div class="notification-meta">
            ${r.byline?n`
                  <span>${r.byline}</span>
                  <span aria-hidden="true">·</span>
                `:i}
            <time datetime=${r.createdAt}
              >${r.createdAtLabel}</time
            >
          </div>

          ${r.buttons.length||r.unread?n`
                <div class="notification-actions">
                  ${r.buttons.map(e=>n`
                      <craft-button
                        .href=${e.url}
                        .target=${e.target}
                        .icon=${e.icon}
                        variant=${e.variant}
                        size="small"
                      >
                        ${e.label}
                      </craft-button>
                    `)}
                  ${r.unread?n`
                        <craft-button
                          type="button"
                          size="small"
                          variant="plain"
                          @click=${e=>{e.stopPropagation(),this.#n([r.id])}}
                        >
                          ${e(`Mark as read`)}
                        </craft-button>
                      `:i}
                </div>
              `:i}
        </div>
      </article>
    `}render(){return this.notifications.length?n`
      <craft-popover placement="bottom-end" .distance=${8}>
        <craft-button
          slot="invoker"
          class="notification-trigger"
          type="button"
          size="small"
          variant="none"
          aria-label=${this.#t}
        >
          <craft-icon
            class="notification-trigger__icon"
            name="bell"
          ></craft-icon>
          ${this.#e.length?n`
                <craft-badge-indicator
                  class="notification-trigger__badge"
                ></craft-badge-indicator>
              `:i}
        </craft-button>

        <div slot="content">
          <header class="notification-header">
            <h2 class="notification-heading">${e(`Notifications`)}</h2>
            ${this.#e.length?n`
                  <craft-button
                    type="button"
                    size="small"
                    variant="plain"
                    @click=${()=>this.#n(this.#e.map(e=>e.id))}
                  >
                    ${e(`Mark all as read`)}
                  </craft-button>
                `:i}
          </header>
          <div class="notification-list" role="list">
            ${this.notifications.map(e=>this.#c(e))}
          </div>
        </div>
      </craft-popover>
    `:i}};p([s({type:Array})],h.prototype,`notifications`,void 0),p([c(`craft-popover`)],h.prototype,`popoverElement`,void 0),h=p([o(`cp-notification-center`)],h);var g=h;export{g as t};