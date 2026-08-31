import{c as e,r as t,t as n}from"./lit-DNaDb1T7.js";import"./cp-30EypLgn.js";import{n as r,t as i}from"./decorators-D0-gbKXH.js";import{g as a}from"./nav-item-CK1RuKgI-C1XP6PDh.js";import{t as o}from"./login-form.styles-CWUEj_6V.js";import{t as s}from"./decorate-B3KLIx2E.js";var c=class extends n{constructor(...e){super(...e),this.action=``,this.uid=``,this.code=``,this.initialError=``,this._busy=!1}static{this.styles=[o]}#e(){this._busy=!0}render(){return e`
      <craft-pane>
        <form
          class="auth-form"
          method="post"
          action="${this.action}"
          accept-charset="UTF-8"
          @submit="${this.#e}"
        >
          <input type="hidden" name="uid" value="${this.uid}" />
          <input type="hidden" name="code" value="${this.code}" />

          <h2 class="auth-form__heading">${a(`Verify your email address`)}</h2>

          <div class="auth-form__actions">
            <craft-button
              type="submit"
              variant="accent"
              ?loading="${this._busy}"
              style="width: 100%"
            >
              ${a(`Verify`)}
            </craft-button>
          </div>
        </form>

        ${this.initialError?e`<craft-callout class="auth-form__error" variant="danger"
              >${this.initialError}</craft-callout
            >`:t}
      </craft-pane>
    `}};s([r()],c.prototype,`action`,void 0),s([r()],c.prototype,`uid`,void 0),s([r()],c.prototype,`code`,void 0),s([r({attribute:`initial-error`})],c.prototype,`initialError`,void 0),s([i()],c.prototype,`_busy`,void 0),customElements.get(`craft-verify-email-form`)||customElements.define(`craft-verify-email-form`,c);