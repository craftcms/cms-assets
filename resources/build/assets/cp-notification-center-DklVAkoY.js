import{n as e}from"./translate.ts-DW16fAdu.js";import{a as t,d as n,n as r,r as i,u as a}from"./decorators-B_wqftM0.js";import{t as o}from"./custom-element-Bov83m9_.js";import{t as s}from"./query-Df4-SAIv.js";import"./field-DrrL8YtL-DBeK1eHP.js";import{h as c}from"./cp-C88mftVh.js";import{t as l}from"./decorate-B3KLIx2E.js";import"./button.ts-Bvpti7M9.js";import"./popover.ts-Bvpti7M9.js";import{a as u,i as d,n as f,t as p}from"./cp-notification-list-B3cg_SfI.js";var m=class extends i{static{this.styles=n`
    :host {
      display: contents;
    }

    .notification-trigger {
      --c-icon-size: var(--cp-chrome-icon-size, 1em);
      position: relative;
      margin-inline: -7.25px;
    }

    .notification-trigger__icon {
      translate: 0 1.5px;
    }

    .notification-trigger__icon--indicated {
      --c-badge-indicator-cutout-x: calc(100% - 2px);
      --c-badge-indicator-cutout-y: -2px;
      ${c}
    }

    .notification-trigger__icon--indicated:dir(rtl) {
      --c-badge-indicator-cutout-x: 2px;
    }

    .notification-trigger__badge {
      position: absolute;
      inset-block-start: 0;
      inset-inline-end: 2px;
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
      padding-block: 0.75rem;
      padding-inline: 1rem;
    }

    .notification-heading {
      margin: 0;
      font-size: var(--c-text-lg);
      font-weight: var(--font-weight-semibold);
    }

    cp-notification-list {
      max-height: min(34rem, calc(100vh - 8rem));
      overflow-y: auto;
      border-block-start: 1px solid var(--c-color-neutral-border-quiet);
    }
  `}set notifications(e){u(e)}get notifications(){return p()}#e;connectedCallback(){super.connectedCallback(),this.#e=d(()=>this.requestUpdate())}disconnectedCallback(){super.disconnectedCallback(),this.#e?.()}get#t(){return this.notifications.filter(e=>e.unread)}get#n(){return this.#t.length?e(`Notifications, {count} unread`,{count:this.#t.length}):e(`Notifications`)}async#r(){let e=f(this.#t.map(e=>e.id));await this.updateComplete,this.headingElement?.focus(),await e}render(){return this.notifications.length?a`
      <craft-popover placement="bottom-end" .distance=${8}>
        <craft-button
          slot="invoker"
          id="notification-trigger"
          class="notification-trigger"
          type="button"
          size="small"
          variant="plain"
          flush=${this.flush??t}
          icon
        >
          <span slot="prefix">
            <craft-icon
              class="notification-trigger__icon ${this.#t.length?`notification-trigger__icon--indicated`:``}"
              name="bell"
            ></craft-icon>
            ${this.#t.length?a`
                  <craft-badge-indicator
                    class="notification-trigger__badge"
                  ></craft-badge-indicator>
                `:t}
          </span>
        </craft-button>

        <div slot="content">
          <header class="notification-header">
            <h2 class="notification-heading" tabindex="-1">
              ${e(`Notifications`)}
            </h2>
            ${this.#t.length?a`
                  <craft-button
                    type="button"
                    size="small"
                    variant="link"
                    @click=${()=>this.#r()}
                  >
                    ${e(`Mark all as read`)}
                  </craft-button>
                `:t}
          </header>
          <cp-notification-list
            @cp-notification-navigate=${()=>void this.popoverElement?.hide()}
          ></cp-notification-list>
        </div>
      </craft-popover>
      <!-- Labels the icon-only button, as the Search button's tooltip does. -->
      <craft-tooltip for="notification-trigger" invoker-relation="label">
        ${this.#n}
      </craft-tooltip>
    `:t}};l([r({reflect:!0})],m.prototype,`flush`,void 0),l([r({type:Array,attribute:!1})],m.prototype,`notifications`,null),l([s(`craft-popover`)],m.prototype,`popoverElement`,void 0),l([s(`.notification-heading`)],m.prototype,`headingElement`,void 0),m=l([o(`cp-notification-center`)],m);var h=m;export{h as t};