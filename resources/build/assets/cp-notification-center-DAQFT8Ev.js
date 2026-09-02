import{c as e,f as t,r as n,t as r}from"./lit-DNaDb1T7.js";import{L as i,R as a}from"./cp-YsLIDDhd.js";import{t as o}from"./custom-element-Bov83m9_.js";import{n as s}from"./decorators-D0-gbKXH.js";import{t as c}from"./query-Df4-SAIv.js";import{g as l}from"./nav-item-CK1RuKgI-C1XP6PDh.js";import{i as u,n as d,t as f}from"./wayfinder-Byp9MxZi.js";import"./unsafe-html-DTCVn9N-.js";import{t as p}from"./decorate-B3KLIx2E.js";import"./button.ts-DTCVn9N-.js";import"./popover.ts-Dk_YITvo.js";var m=(e,t)=>({url:m.url(e,t),method:`post`});m.definition={methods:[`post`],url:`/{cpTrigger?}/notifications/mark-read`},m.url=(e,t)=>{(typeof e==`string`||typeof e==`number`)&&(e={cpTrigger:e}),Array.isArray(e)&&(e={cpTrigger:e[0]}),e=f(e),u(e,[`cpTrigger`]);let n={cpTrigger:e?.cpTrigger??`admin`};return m.definition.url.replace(`{cpTrigger?}`,n.cpTrigger?.toString()??``).replace(/\/+$/,``)+d(t)},m.post=(e,t)=>({url:m.url(e,t),method:`post`});var h=class extends r{constructor(...e){super(...e),this.notifications=window.Craft.notifications??[]}static{this.styles=t`
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
  `}get#e(){return this.notifications.filter(e=>e.unread)}get#t(){return this.#e.length?l(`Notifications, {count} unread`,{count:this.#e.length}):l(`Notifications`)}async#n(e){let t=this.notifications.filter(t=>t.unread&&e.includes(t.id)).map(e=>e.id);if(t.length){this.#r(t,!1);try{await a.post(m().url,{ids:t})}catch{this.#r(t,!0),Craft.cp?.displayError?.(l(`Couldn’t mark notifications as read.`))}}}#r(e,t){this.notifications=this.notifications.map(n=>e.includes(n.id)?{...n,unread:t}:n)}#i(e,t){return e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||t.target!==``&&t.target!==`_self`}async#a(e,t){let n=t.composedPath().find(e=>e instanceof HTMLAnchorElement);if(n){if(this.#i(t,n)){e.unread&&this.#n([e.id]);return}t.preventDefault();try{await this.#n([e.id])}finally{this.#o(n.href)}}}#o(e){if(this.popoverElement?.hide(),new URL(e).origin!==window.location.origin){window.location.assign(e);return}window.dispatchEvent(new CustomEvent(`action:redirect`,{cancelable:!0,detail:{url:e}}))&&window.location.assign(e)}#s(t){return e`
      <div
        class="notification-visual ${t.image?``:`notification-visual--icon`}"
      >
        ${t.image?e`
              <craft-thumbnail checkered="false">
                <img
                  src=${t.image}
                  alt=${t.imageAlt??``}
                />
              </craft-thumbnail>
            `:t.icon?e`
                <craft-icon
                  name=${t.icon}
                  appearance="plain"
                  aria-hidden="true"
                ></craft-icon>
              `:n}
      </div>
    `}#c(t){return e`
      <article
        class="notification-item ${t.unread?``:`notification-item--read`}"
        role="listitem"
        @click=${e=>this.#a(t,e)}
      >
        ${t.url?e`
              <a
                class="notification-card-link"
                href=${t.url}
                aria-label=${t.title??l(`Open notification`)}
              ></a>
            `:n}
        ${this.#s(t)}

        <div class="notification-content">
          <div class="notification-title-row">
            ${t.title?e`<h3 class="notification-title">${t.title}</h3>`:n}
            ${t.unread?e`
                  <craft-badge-indicator
                    alt-text=${l(`Unread`)}
                  ></craft-badge-indicator>
                `:n}
          </div>

          <div class="notification-message">
            ${i(t.messageHtml)}
          </div>

          <div class="notification-meta">
            ${t.byline?e`
                  <span>${t.byline}</span>
                  <span aria-hidden="true">·</span>
                `:n}
            <time datetime=${t.createdAt}
              >${t.createdAtLabel}</time
            >
          </div>

          ${t.buttons.length||t.unread?e`
                <div class="notification-actions">
                  ${t.buttons.map(t=>e`
                      <craft-button
                        .href=${t.url}
                        .target=${t.target}
                        .icon=${t.icon}
                        variant=${t.variant}
                        size="small"
                      >
                        ${t.label}
                      </craft-button>
                    `)}
                  ${t.unread?e`
                        <craft-button
                          type="button"
                          size="small"
                          variant="plain"
                          @click=${e=>{e.stopPropagation(),this.#n([t.id])}}
                        >
                          ${l(`Mark as read`)}
                        </craft-button>
                      `:n}
                </div>
              `:n}
        </div>
      </article>
    `}render(){return this.notifications.length?e`
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
          ${this.#e.length?e`
                <craft-badge-indicator
                  class="notification-trigger__badge"
                ></craft-badge-indicator>
              `:n}
        </craft-button>

        <div slot="content">
          <header class="notification-header">
            <h2 class="notification-heading">${l(`Notifications`)}</h2>
            ${this.#e.length?e`
                  <craft-button
                    type="button"
                    size="small"
                    variant="plain"
                    @click=${()=>this.#n(this.#e.map(e=>e.id))}
                  >
                    ${l(`Mark all as read`)}
                  </craft-button>
                `:n}
          </header>
          <div class="notification-list" role="list">
            ${this.notifications.map(e=>this.#c(e))}
          </div>
        </div>
      </craft-popover>
    `:n}};p([s({type:Array})],h.prototype,`notifications`,void 0),p([c(`craft-popover`)],h.prototype,`popoverElement`,void 0),h=p([o(`cp-notification-center`)],h);var g=h;export{g as t};