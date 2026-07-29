import{o as e}from"./nav-item-rzpCmjrR-CTzArtfO.js";import{o as t,r as n,t as r,u as i}from"./lit-CY4PVSWl.js";import{Mt as a,Ot as o,gt as s}from"./vue.esm-bundler-FbJc_qe_.js";import{a as c,i as l,r as u}from"./decorators-DBVcUAk8.js";import{n as d}from"./axios-lGwWjwFZ.js";import{t as f}from"./useAnnouncer-C1vAx-SZ.js";import{t as p}from"./login-form.styles-CWod-swA.js";import{t as m}from"./decorate-6SDBMwo1.js";function h(e){let t=new Uint8Array(e),n=``;for(let e of t)n+=String.fromCharCode(e);return btoa(n).replace(/\+/g,`-`).replace(/\//g,`_`).replace(/=/g,``)}function g(e){let t=e.replace(/-/g,`+`).replace(/_/g,`/`),n=(4-t.length%4)%4,r=t.padEnd(t.length+n,`=`),i=atob(r),a=new ArrayBuffer(i.length),o=new Uint8Array(a);for(let e=0;e<i.length;e++)o[e]=i.charCodeAt(e);return a}function _(){return v.stubThis(globalThis?.PublicKeyCredential!==void 0&&typeof globalThis.PublicKeyCredential==`function`)}var v={stubThis:e=>e};function y(e){let{id:t}=e;return{...e,id:g(t),transports:e.transports}}function b(e){return e===`localhost`||/^((xn--[a-z0-9-]+|[a-z0-9]+(-[a-z0-9]+)*)\.)+([a-z]{2,}|xn--[a-z0-9-]+)$/i.test(e)}var x=class extends Error{constructor({message:e,code:t,cause:n,name:r}){super(e,{cause:n}),Object.defineProperty(this,`code`,{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=r??n.name,this.code=t}},S=new class{constructor(){Object.defineProperty(this,`controller`,{enumerable:!0,configurable:!0,writable:!0,value:void 0})}createNewAbortSignal(){if(this.controller){let e=Error(`Cancelling existing WebAuthn API call for new one`);e.name=`AbortError`,this.controller.abort(e)}let e=new AbortController;return this.controller=e,e.signal}cancelCeremony(){if(this.controller){let e=Error(`Manually cancelling existing WebAuthn API call`);e.name=`AbortError`,this.controller.abort(e),this.controller=void 0}}},C=[`cross-platform`,`platform`];function w(e){if(e&&!(C.indexOf(e)<0))return e}function T(){if(!_())return E.stubThis(new Promise(e=>e(!1)));let e=globalThis.PublicKeyCredential;return e?.isConditionalMediationAvailable===void 0?E.stubThis(new Promise(e=>e(!1))):E.stubThis(e.isConditionalMediationAvailable())}var E={stubThis:e=>e};function D({error:e,options:t}){let{publicKey:n}=t;if(!n)throw Error(`options was missing required publicKey property`);if(e.name===`AbortError`){if(t.signal instanceof AbortSignal)return new x({message:`Authentication ceremony was sent an abort signal`,code:`ERROR_CEREMONY_ABORTED`,cause:e})}else if(e.name===`NotAllowedError`)return new x({message:e.message,code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:e});else if(e.name===`SecurityError`){let t=globalThis.location.hostname;if(!b(t))return new x({message:`${globalThis.location.hostname} is an invalid domain`,code:`ERROR_INVALID_DOMAIN`,cause:e});if(n.rpId!==t)return new x({message:`The RP ID "${n.rpId}" is invalid for this domain`,code:`ERROR_INVALID_RP_ID`,cause:e})}else if(e.name===`UnknownError`)return new x({message:`The authenticator was unable to process the specified options, or could not create a new assertion signature`,code:`ERROR_AUTHENTICATOR_GENERAL_ERROR`,cause:e});return e}async function O(e){!e.optionsJSON&&e.challenge&&(console.warn(`startAuthentication() was not called correctly. It will try to continue with the provided options, but this call should be refactored to use the expected call structure instead. See https://simplewebauthn.dev/docs/packages/browser#typeerror-cannot-read-properties-of-undefined-reading-challenge for more information.`),e={optionsJSON:e});let{optionsJSON:t,useBrowserAutofill:n=!1,verifyBrowserAutofillInput:r=!0}=e;if(!_())throw Error(`WebAuthn is not supported in this browser`);let i;t.allowCredentials?.length!==0&&(i=t.allowCredentials?.map(y));let a={...t,challenge:g(t.challenge),allowCredentials:i},o={};if(n){if(!await T())throw Error(`Browser does not support WebAuthn autofill`);if(document.querySelectorAll(`input[autocomplete$='webauthn']`).length<1&&r)throw Error('No <input> with "webauthn" as the only or last value in its `autocomplete` attribute was detected');o.mediation=`conditional`,a.allowCredentials=[]}o.publicKey=a,o.signal=S.createNewAbortSignal();let s;try{s=await navigator.credentials.get(o)}catch(e){throw D({error:e,options:o})}if(!s)throw Error(`Authentication was not completed`);let{id:c,rawId:l,response:u,type:d}=s,f;return u.userHandle&&(f=h(u.userHandle)),{id:c,rawId:h(l),response:{authenticatorData:h(u.authenticatorData),clientDataJSON:h(u.clientDataJSON),signature:h(u.signature),userHandle:f},type:d,clientExtensionResults:s.getClientExtensionResults(),authenticatorAttachment:w(s.authenticatorAttachment)}}function k(){return _()?PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable():new Promise(e=>e(!1))}var A=new Map,j=class extends r{constructor(...e){super(...e),this.returnUrl=``,this._state=`idle`}static{this.styles=[i`
      :host {
        display: block;
        width: 100%;
      }

      .spinner-overlay {
        display: grid;
        place-items: center;
      }

      .login-form__fields {
        display: flex;
        gap: var(--c-spacing-md);
        align-items: end;
      }

      .login-form__actions {
        margin-block-start: var(--c-spacing-lg);
      }

      .login-form__error {
        margin-block-start: var(--c-spacing-md);
      }

      .alternative-login-methods {
        margin-block-start: var(--c-spacing-lg);
      }

      hr {
        margin-block: var(--c-spacing-lg);
        border: none;
        border-block-end: 1px solid var(--c-color-border-quiet);
      }
    `]}firstUpdated(){this._input?.focus()}async _onSubmit(e){e.preventDefault(),await this._submit(this._input?.value??``)}async _submit(t){if(this._state!==`loading`){this._state=`loading`;try{await s.post(this.endpoint,{code:t}),this.dispatchEvent(new CustomEvent(`login-verified`,{bubbles:!0,composed:!0,detail:{returnUrl:this.returnUrl}})),this._state=`success`,setTimeout(()=>{this._state=`idle`},2e3)}catch(t){this._state=`error`,this.dispatchEvent(new CustomEvent(`login-failed`,{bubbles:!0,composed:!0,detail:{message:t?.response?.data?.message??e(`A server error occurred.`)}}))}}}renderInput(){return t`<slot name="input">
      <div>
        ${e(`Implement the renderInput() method or provide an input slot`)}
      </div>
    </slot>`}renderFields(){return t`
      <slot name="fields">
        ${this.renderInput()}
        <slot name="submit-button">
          <craft-button
            slot="after"
            type="submit"
            variant="primary"
            ?loading="${this._state===`loading`}"
          >
            ${e(`Verify`)}
          </craft-button>
        </slot>
      </slot>
    `}render(){return t`
      <form
        class="login-form"
        accept-charset="UTF-8"
        @submit="${this._onSubmit}"
      >
        <div class="login-form__fields">${this.renderFields()}</div>
      </form>
    `}static register(e,t){customElements.get(e)||customElements.define(e,t),A.set(t.METHOD,t)}static isNative(e){return A.has(e)}};m([c({attribute:`return-url`})],j.prototype,`returnUrl`,void 0),m([l()],j.prototype,`_state`,void 0),m([u(`craft-input`)],j.prototype,`_input`,void 0);var M=window.Craft??(window.Craft={});M.AuthChallengeForm=j;var N=class extends j{static{this.METHOD=`totp`}get endpoint(){return`auth/verify-totp`}renderInput(){return t`
      <craft-input
        label="${e(`Verification Code`)}"
        id="totp-code"
        class="totp-code"
        name="code"
        .maxlength="${6}"
        autocomplete="one-time-code"
        inputmode="numeric"
        aria-required="true"
      ></craft-input>
    `}};m([u(`craft-input.totp-code`)],N.prototype,`_input`,void 0),j.register(`craft-totp-form`,N);var P=class extends j{static{this.METHOD=`recovery-codes`}get endpoint(){return`auth/verify-recovery-code`}renderInput(){return t`
      <craft-input
        label="${e(`Recovery Code`)}"
        id="recovery-code"
        class="recovery-code"
        name="code"
        autocomplete="off"
        aria-required="true"
      ></craft-input>
    `}};m([u(`craft-input.recovery-code`)],P.prototype,`_input`,void 0),j.register(`craft-recovery-code-form`,P);var F=class extends r{constructor(...e){super(...e),this._switching=!1,this.#e=!1}static{this.styles=[p]}#e;async updated(e){super.updated(e),!j.isNative(this.data?.authMethod)&&!this.#e&&!this._switching&&this._container&&(this.#e=!0,await this.#t())}async#t(){this._container&&(await Craft.appendHeadHtml(this.data.headHtml),await Craft.appendBodyHtml(this.data.bodyHtml),Craft.initUiElements(this._container),Craft.createAuthFormHandler(this.data.authMethod,this._container,()=>{this.dispatchEvent(new CustomEvent(`login-verified`,{bubbles:!0,composed:!0,detail:{returnUrl:this.data.returnUrl}}))},e=>{this.dispatchEvent(new CustomEvent(`login-failed`,{bubbles:!0,composed:!0,detail:{message:e}}))}),this._container.querySelector(`:focus-visible, input, button`)?.focus())}async#n(e){this._switching=!0,this.#e=!1;try{let t=await fetch(e.url,{headers:{Accept:`application/json`,"Content-Type":`application/json`}});if(!t.ok)throw Error(`Failed to fetch challenge data.`);this.data=await t.json()}finally{this._switching=!1}}render(){return this._switching?t`
        <craft-pane>
          <div class="spinner-overlay">
            <craft-spinner></craft-spinner>
          </div>
        </craft-pane>
      `:t`
      <craft-pane>
        <div class="auth-form-container">${a(this.data.authForm)}</div>
        ${this.data.otherMethods.length?t`
              <hr />
              <craft-action-menu>
                <craft-button slot="invoker" appearance="plain" size="zero">
                  <craft-icon slot="prefix" name="chevron-down"></craft-icon>
                  ${e(`Try another way`)}
                </craft-button>

                <div slot="content">
                  ${this.data.otherMethods.map(e=>t`
                      <craft-action-item
                        @click="${()=>this.#n(e)}"
                      >
                        ${e.name}
                      </craft-action-item>
                    `)}
                </div>
              </craft-action-menu>
            `:n}
      </craft-pane>
    `}};m([c({attribute:!1})],F.prototype,`data`,void 0),m([l()],F.prototype,`_switching`,void 0),m([u(`.auth-form-container`)],F.prototype,`_container`,void 0),customElements.get(`craft-login-challenge`)||customElements.define(`craft-login-challenge`,F);var I=class extends r{constructor(...e){super(...e),this.useEmailAsUsername=!1,this.username=``,this._busy=!1,this._error=``}static{this.styles=[p]}firstUpdated(){this.updateComplete.then(()=>{this._input?.focus()})}#e(){return this.useEmailAsUsername?e(`Email`):e(`Username or Email`)}#t(e){let t=e.trim();this._error=t,f().announce(t)}async#n(t){t.preventDefault(),this._error=``,this._busy=!0;try{await s.post(`users/send-password-reset-email`,{loginName:this._input.value});let t=document.createElement(`craft-dialog`);t.setAttribute(`open`,``);let n=document.createElement(`p`);n.textContent=e(`Check your email for instructions to reset your password.`),t.appendChild(n),document.body.appendChild(t)}catch(t){this.#t(t?.response?.data?.message??e(`A server error occurred.`))}finally{this._busy=!1}}#r(){this.dispatchEvent(new CustomEvent(`craft:login:reset-back`,{bubbles:!0,composed:!0,detail:{username:this._input?.value??``}}))}render(){return t`
      <craft-pane>
        <form
          class="auth-form auth-form--reset"
          method="post"
          accept-charset="UTF-8"
          @submit="${this.#n}"
        >
          <craft-field-group>
            <craft-input
              label="${this.#e()}"
              id="reset-username"
              type="${this.useEmailAsUsername?`email`:`text`}"
              class="reset-username"
              name="username"
              .value="${this.username}"
              autocomplete="username"
              autocapitalize="off"
              required
            >
            </craft-input>
          </craft-field-group>

          <div class="auth-form__actions">
            <craft-button
              type="submit"
              variant="accent"
              ?loading="${this._busy}"
            >
              ${e(`Reset password`)}
            </craft-button>
          </div>

          ${this._error?t`<craft-callout variant="danger" class="auth-form__error"
                >${this._error}</craft-callout
              >`:n}
        </form>

        <hr />

        <craft-button
          type="button"
          appearance="plain"
          size="small"
          @click="${this.#r}"
        >
          <craft-icon slot="prefix" name="arrow-left"></craft-icon>
          ${e(`Back to sign in`)}
        </craft-button>
      </craft-pane>
    `}};m([c({type:Boolean,attribute:`use-email-as-username`})],I.prototype,`useEmailAsUsername`,void 0),m([c()],I.prototype,`username`,void 0),m([l()],I.prototype,`_busy`,void 0),m([l()],I.prototype,`_error`,void 0),m([u(`.reset-username`)],I.prototype,`_input`,void 0),customElements.get(`craft-login-reset-password`)||customElements.define(`craft-login-reset-password`,I);var L=class extends r{constructor(...e){super(...e),this.showPasskeyBtn=!0,this.showResetPassword=!1,this.showRememberMe=!1,this.username=``,this.staticEmail=``,this.useEmailAsUsername=!1,this.rememberMeLabel=``,this.initialError=``,this.action=``,this._view=`login`,this._error=``,this._loginBusy=!1,this._passkeyBusy=!1,this._canUsePasskey=!1,this._twoFactorData=null,this._resetUsername=``}static{this.styles=[o,p]}async connectedCallback(){super.connectedCallback(),this.initialError&&(this._error=this.initialError),this.showPasskeyBtn&&_()&&(this._canUsePasskey=await k())}focus(e){this.updateComplete.then(()=>{(this.staticEmail?this._passwordInput:this._usernameInput??this._passwordInput)?.focus(e)})}#e(){return this.useEmailAsUsername?e(`Email`):e(`Username or Email`)}async#t(e){e.preventDefault(),this._error=``,this._loginBusy=!0;try{let e=await fetch(this.action,{method:`post`,headers:{Accept:`application/json`,"Content-Type":`application/json`,"X-CSRF-TOKEN":d.getInstance().get(`csrfTokenValue`)},body:JSON.stringify({loginName:this._usernameInput.value,password:this._passwordInput.value,rememberMe:this._rememberMeInput?.checked?`1`:``})}),t=await e.json();if(!e.ok)throw Error(t.message||`A server error occurred.`);t.authMethod?(this._twoFactorData=t,this._view=`challenge`,this._loginBusy=!1):(this.#c(t.returnUrl),this._loginBusy=!1)}catch(e){this._loginBusy=!1,this.#s(e.message)}}async#n(){if(!this._passkeyBusy){this._error=``,this._passkeyBusy=!0;try{let{data:e}=await s.post(`auth/passkey-request-options`),t=await O({optionsJSON:JSON.parse(e.options)}),{data:n}=await s.post(`users/login-with-passkey`,{requestOptions:e.options,authResponse:JSON.stringify(t)});this.#c(n.returnUrl),this._passkeyBusy=!1}catch(e){this._passkeyBusy=!1;let t=e?.response?.data?.message;t?this.#s(t):console.warn(e)}}}#r(){this._error=``,this._resetUsername=this._usernameInput?.value??``,this._view=`reset-password`}#i(e){let t=e.detail?.username??``;this._view=`login`,this.updateComplete.then(()=>{t&&this._usernameInput&&(this._usernameInput.value=t),this._usernameInput?.focus()})}#a(e){this.#c(e.detail.returnUrl)}#o(e){let t=e.detail.message,n=new CustomEvent(`craft:login:error`,{bubbles:!0,composed:!0,cancelable:!0,detail:{message:t}});this.dispatchEvent(n),n.defaultPrevented||this.#s(t)}#s(e){let{announce:t}=f();this._error=e.trim(),t(this._error)}#c(e){let t=new CustomEvent(`craft:login:success`,{bubbles:!0,composed:!0,cancelable:!0,detail:{returnUrl:e}});this.dispatchEvent(t),t.defaultPrevented||(window.location.href=e)}render(){return t`
      <div>
        <span
          class="cp-visually-hidden"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        ></span>

        ${this._view===`login`?this.#l():this._view===`reset-password`?t`
                <craft-login-reset-password
                  ?use-email-as-username="${this.useEmailAsUsername}"
                  username="${this._resetUsername}"
                  @craft:login:reset-back="${this.#i}"
                ></craft-login-reset-password>
              `:t`
                <craft-login-challenge
                  .data="${this._twoFactorData}"
                  @login-verified="${this.#a}"
                  @login-failed="${this.#o}"
                ></craft-login-challenge>
              `}
      </div>
    `}#l(){let r=this._canUsePasskey||this.querySelector(`[slot="alternative-methods"]`);return t`
      <craft-pane>
        <form
          class="auth-form"
          method="post"
          accept-charset="UTF-8"
          @submit="${this.#t}"
        >
          <craft-field-group>
            ${this.staticEmail?t`<input
                  type="hidden"
                  class="login-username"
                  name="username"
                  .value="${this.staticEmail}"
                />`:t`
                  <div class="field">
                    <craft-input
                      label="${this.#e()}"
                      id="login-username"
                      type="${this.useEmailAsUsername?`email`:`text`}"
                      class="login-username"
                      name="username"
                      .value="${this.username}"
                      autocomplete="username"
                      autocapitalize="off"
                      required
                    />
                  </div>
                `}

            <div>
              <craft-input-password
                label="${e(`Password`)}"
                id="login-password"
                class="login-password"
                name="password"
                autocomplete="current-password"
                required
              ></craft-input-password>

              ${this.showResetPassword?t`
                    <craft-button
                      type="button"
                      size="small"
                      appearance="plain"
                      @click="${this.#r}"
                      style="margin-block-start: var(--c-spacing-sm)"
                    >
                      ${e(`Forgot password?`)}
                    </craft-button>
                  `:n}
            </div>

            ${this.showRememberMe?t`
                  <div class="remember-me-row">
                    <craft-checkbox
                      label="${this.rememberMeLabel||e(`Stay signed in`)}"
                      type="checkbox"
                      id="login-remember-me"
                      class="login-remember-me"
                    ></craft-checkbox>
                  </div>
                `:n}
          </craft-field-group>

          <div class="auth-form__actions">
            <craft-button
              type="submit"
              variant="accent"
              ?loading="${this._loginBusy}"
              style="width: 100%"
            >
              ${e(`Sign in`)}
            </craft-button>
          </div>
        </form>

        ${this._error?t`<craft-callout class="auth-form__error" variant="danger"
              >${this._error}</craft-callout
            >`:n}
      </craft-pane>

      ${r?t`
            <div class="alternative-login-methods">
              ${this._canUsePasskey?t`
                    <craft-button
                      type="button"
                      appearance="filled"
                      ?loading="${this._passkeyBusy}"
                      @click="${this.#n}"
                      style="width: 100%"
                    >
                      ${e(`Sign in with a passkey`)}
                    </craft-button>
                  `:n}
              <slot name="alternative-methods"></slot>
            </div>
          `:n}
    `}};m([c({type:Boolean,attribute:`show-passkey-btn`})],L.prototype,`showPasskeyBtn`,void 0),m([c({type:Boolean,attribute:`show-reset-password`})],L.prototype,`showResetPassword`,void 0),m([c({type:Boolean,attribute:`show-remember-me`})],L.prototype,`showRememberMe`,void 0),m([c()],L.prototype,`username`,void 0),m([c({attribute:`static-email`})],L.prototype,`staticEmail`,void 0),m([c({type:Boolean,attribute:`use-email-as-username`})],L.prototype,`useEmailAsUsername`,void 0),m([c({attribute:`remember-me-label`})],L.prototype,`rememberMeLabel`,void 0),m([c({attribute:`initial-error`})],L.prototype,`initialError`,void 0),m([c()],L.prototype,`action`,void 0),m([l()],L.prototype,`_view`,void 0),m([l()],L.prototype,`_error`,void 0),m([l()],L.prototype,`_loginBusy`,void 0),m([l()],L.prototype,`_passkeyBusy`,void 0),m([l()],L.prototype,`_canUsePasskey`,void 0),m([l()],L.prototype,`_twoFactorData`,void 0),m([l()],L.prototype,`_resetUsername`,void 0),m([u(`.login-username`)],L.prototype,`_usernameInput`,void 0),m([u(`craft-input-password.login-password`)],L.prototype,`_passwordInput`,void 0),m([u(`.login-remember-me`)],L.prototype,`_rememberMeInput`,void 0),customElements.get(`craft-login-form`)||customElements.define(`craft-login-form`,L);export{_ as t};