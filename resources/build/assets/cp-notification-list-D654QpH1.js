import{n as e}from"./translate.ts-DW16fAdu.js";import{a as t,d as n,r,u as i}from"./decorators-B_wqftM0.js";import{t as a}from"./custom-element-Bov83m9_.js";import{H as o}from"./field-CafPjHry-BXxgOyt5.js";import"./cp-NxAjTc0M.js";import{i as s,n as c,r as l,t as u}from"./store-DmiouDDb.js";import{t as d}from"./decorate-B3KLIx2E.js";import"./button.ts-CHqje8tj.js";var f=class extends r{static{this.styles=n`
    :host {
      display: block;
    }

    /* Padding rather than a gap, so the command palette can trim it through the item parts. */
    .notification-item {
      position: relative;
      display: block;
      padding-block: calc(var(--c-spacing) * 1.5);
      padding-inline: var(--c-spacing-lg);
    }

    .notification-item:first-child {
      padding-block-start: calc(var(--c-spacing) * 3);
    }

    .notification-item:last-child {
      padding-block-end: calc(var(--c-spacing) * 3);
    }

    .notification-item--read {
      opacity: 0.7;
    }

    .notification-item:has(.notification-card-link):hover:not(
      :has(craft-button:hover)
    ) {
      background-color: color-mix(in oklab, currentColor 5%, transparent);

      .notification-title {
        text-decoration-line: underline;
      }
    }

    .notification-card-link {
      position: absolute;
      z-index: 1;
      inset: 0;
    }

    .notification-thumbnail img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .notification-title-row {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .notification-title {
      min-width: 0;
      margin: 0;
      font-size: var(--c-text-base);
      font-weight: var(--font-weight-semibold);
      line-height: 1.25;
    }

    .notification-message {
      position: relative;
      color: var(--c-text-default);
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
      gap: var(--c-spacing-sm);
      margin-block-start: var(--c-spacing-xs);
    }

    .notification-mark-read {
      position: relative;
      z-index: 2;
      font-size: inherit;
    }

    .notification-actions {
      position: relative;
      z-index: 2;
      display: flex;
      flex-wrap: wrap;
      gap: var(--c-spacing-md);
      margin-block-start: var(--c-spacing-md);
    }
  `}#e;connectedCallback(){super.connectedCallback(),this.#e=s(()=>this.requestUpdate())}disconnectedCallback(){super.disconnectedCallback(),this.#e?.()}async#t(e,t){let n=c(e);await this.updateComplete,t()?.focus(),await n}#n(e,t){return e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||t.target!==``&&t.target!==`_self`}async#r(e,t){let n=t.composedPath().find(e=>e instanceof HTMLAnchorElement);if(n){if(this.#n(t,n)){e.unread&&c([e.id]);return}t.preventDefault();try{await c([e.id])}finally{this.dispatchEvent(new CustomEvent(`cp-notification-navigate`,{bubbles:!0,composed:!0,cancelable:!0,detail:{url:n.href}}))&&l(n.href)}}}#i(n,r){return i`
      <article
        part=${r?`item first-item`:`item`}
        class="notification-item ${n.unread?``:`notification-item--read`}"
        role="listitem"
        @click=${e=>this.#r(n,e)}
      >
        ${n.url?i`
              <a
                class="notification-card-link"
                href=${n.url}
                aria-label=${n.title??e(`Open notification`)}
              ></a>
            `:t}
        <craft-media-item
          icon=${n.image?t:n.icon??`bell`}
        >
          ${n.image?i`
                <craft-thumbnail
                  slot="thumbnail"
                  class="notification-thumbnail"
                >
                  <img
                    src=${n.image}
                    alt=${n.imageAlt??``}
                  />
                </craft-thumbnail>
              `:t}
          <div slot="heading" class="notification-title-row">
            ${n.title?i`<h3 class="notification-title">${n.title}</h3>`:t}
            ${n.unread?i`
                  <craft-badge-indicator
                    alt-text=${e(`Unread`)}
                  ></craft-badge-indicator>
                `:t}
          </div>

          <div class="notification-message">
            ${o(n.messageHtml)}
          </div>

          <div class="notification-meta">
            ${n.byline?i`
                  <span>${n.byline}</span>
                  <span aria-hidden="true">·</span>
                `:t}
            <time datetime=${n.createdAt}
              >${n.createdAtLabel}</time
            >
            ${n.unread?i`
                  <span aria-hidden="true">·</span>
                  <craft-button
                    class="notification-mark-read"
                    type="button"
                    size="small"
                    variant="link"
                    @click=${e=>{e.stopPropagation();let t=e.currentTarget.closest(`article`);this.#t([n.id],()=>t?.querySelector(`.notification-card-link`))}}
                  >
                    ${e(`Mark as read`)}
                  </craft-button>
                `:t}
          </div>

          ${n.buttons.length?i`
                <div class="notification-actions">
                  ${n.buttons.map(e=>i`
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
                </div>
              `:t}
        </craft-media-item>
      </article>
    `}render(){return i`
      <div role="list">
        ${u().map((e,t)=>this.#i(e,t===0))}
      </div>
    `}};f=d([a(`cp-notification-list`)],f);