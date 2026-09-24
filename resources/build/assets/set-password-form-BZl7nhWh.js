import{c as e,r as t,t as n}from"./lit-DNaDb1T7.js";import{_ as r}from"./nav-item-BaculwHk-XKDDKY1Y.js";import"./cp-BG9hcZdl.js";import{n as i,t as a}from"./decorators-D0-gbKXH.js";import{t as o}from"./login-form.styles-CWUEj_6V.js";import{t as s}from"./decorate-B3KLIx2E.js";var c=class extends n{constructor(...e){super(...e),this.action=``,this.uid=``,this.code=``,this.passwordRules=``,this.initialError=``,this.newUser=!1,this._busy=!1}static{this.styles=[o]}#e(){return this.newUser?r(`Choose a password`):r(`Choose a new password`)}#t(){this._busy=!0}render(){return e`
      <craft-pane>
        <form
          class="auth-form"
          method="post"
          action="${this.action}"
          accept-charset="UTF-8"
          @submit="${this.#t}"
        >
          <input type="hidden" name="uid" value="${this.uid}" />
          <input type="hidden" name="code" value="${this.code}" />

          <craft-field-group>
            <craft-input-password
              label="${this.#e()}"
              id="newPassword"
              name="newPassword"
              autocomplete="new-password"
              passwordrules="${this.passwordRules}"
              required
              autofocus
            ></craft-input-password>
          </craft-field-group>

          <div class="auth-form__actions">
            <craft-button
              type="submit"
              variant="accent"
              ?loading="${this._busy}"
              style="width: 100%"
            >
              ${r(`Set Password`)}
            </craft-button>
          </div>
        </form>

        ${this.initialError?e`<craft-callout class="auth-form__error" variant="danger"
              >${this.initialError}</craft-callout
            >`:t}
      </craft-pane>
    `}};s([i()],c.prototype,`action`,void 0),s([i()],c.prototype,`uid`,void 0),s([i()],c.prototype,`code`,void 0),s([i({attribute:`password-rules`})],c.prototype,`passwordRules`,void 0),s([i({attribute:`initial-error`})],c.prototype,`initialError`,void 0),s([i({type:Boolean,attribute:`new-user`})],c.prototype,`newUser`,void 0),s([a()],c.prototype,`_busy`,void 0),customElements.get(`craft-set-password-form`)||customElements.define(`craft-set-password-form`,c);