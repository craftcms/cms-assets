import{o as e}from"./nav-item-WegLRBLq-DazoeTHk.js";import{a as t,b as n,h as r,n as i,w as a}from"./cp-CgmJm7BH.js";import{o,r as s,t as c}from"./lit-DrXmpO9_.js";import{a as l,i as u,r as d}from"./decorators-Cw2Sd_kC.js";import{t as f}from"./login-form.styles-B-4ZpnnF.js";import{t as p}from"./decorate-67TPaHGy.js";function m(e){let t=new Uint8Array(e),n=``;for(let e of t)n+=String.fromCharCode(e);return btoa(n).replace(/\+/g,`-`).replace(/\//g,`_`).replace(/=/g,``)}function h(e){let t=e.replace(/-/g,`+`).replace(/_/g,`/`),n=(4-t.length%4)%4,r=t.padEnd(t.length+n,`=`),i=atob(r),a=new ArrayBuffer(i.length),o=new Uint8Array(a);for(let e=0;e<i.length;e++)o[e]=i.charCodeAt(e);return a}function g(){return _.stubThis(globalThis?.PublicKeyCredential!==void 0&&typeof globalThis.PublicKeyCredential==`function`)}var _={stubThis:e=>e};function v(e){let{id:t}=e;return{...e,id:h(t),transports:e.transports}}function y(e){return e===`localhost`||/^((xn--[a-z0-9-]+|[a-z0-9]+(-[a-z0-9]+)*)\.)+([a-z]{2,}|xn--[a-z0-9-]+)$/i.test(e)}var b=class extends Error{constructor({message:e,code:t,cause:n,name:r}){super(e,{cause:n}),Object.defineProperty(this,`code`,{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=r??n.name,this.code=t}},x=new class{constructor(){Object.defineProperty(this,`controller`,{enumerable:!0,configurable:!0,writable:!0,value:void 0})}createNewAbortSignal(){if(this.controller){let e=Error(`Cancelling existing WebAuthn API call for new one`);e.name=`AbortError`,this.controller.abort(e)}let e=new AbortController;return this.controller=e,e.signal}cancelCeremony(){if(this.controller){let e=Error(`Manually cancelling existing WebAuthn API call`);e.name=`AbortError`,this.controller.abort(e),this.controller=void 0}}},S=[`cross-platform`,`platform`];function C(e){if(e&&!(S.indexOf(e)<0))return e}function w(){if(!g())return T.stubThis(new Promise(e=>e(!1)));let e=globalThis.PublicKeyCredential;return e?.isConditionalMediationAvailable===void 0?T.stubThis(new Promise(e=>e(!1))):T.stubThis(e.isConditionalMediationAvailable())}var T={stubThis:e=>e};function E({error:e,options:t}){let{publicKey:n}=t;if(!n)throw Error(`options was missing required publicKey property`);if(e.name===`AbortError`){if(t.signal instanceof AbortSignal)return new b({message:`Authentication ceremony was sent an abort signal`,code:`ERROR_CEREMONY_ABORTED`,cause:e})}else if(e.name===`NotAllowedError`)return new b({message:e.message,code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:e});else if(e.name===`SecurityError`){let t=globalThis.location.hostname;if(!y(t))return new b({message:`${globalThis.location.hostname} is an invalid domain`,code:`ERROR_INVALID_DOMAIN`,cause:e});if(n.rpId!==t)return new b({message:`The RP ID "${n.rpId}" is invalid for this domain`,code:`ERROR_INVALID_RP_ID`,cause:e})}else if(e.name===`UnknownError`)return new b({message:`The authenticator was unable to process the specified options, or could not create a new assertion signature`,code:`ERROR_AUTHENTICATOR_GENERAL_ERROR`,cause:e});return e}async function D(e){!e.optionsJSON&&e.challenge&&(console.warn(`startAuthentication() was not called correctly. It will try to continue with the provided options, but this call should be refactored to use the expected call structure instead. See https://simplewebauthn.dev/docs/packages/browser#typeerror-cannot-read-properties-of-undefined-reading-challenge for more information.`),e={optionsJSON:e});let{optionsJSON:t,useBrowserAutofill:n=!1,verifyBrowserAutofillInput:r=!0}=e;if(!g())throw Error(`WebAuthn is not supported in this browser`);let i;t.allowCredentials?.length!==0&&(i=t.allowCredentials?.map(v));let a={...t,challenge:h(t.challenge),allowCredentials:i},o={};if(n){if(!await w())throw Error(`Browser does not support WebAuthn autofill`);if(document.querySelectorAll(`input[autocomplete$='webauthn']`).length<1&&r)throw Error('No <input> with "webauthn" as the only or last value in its `autocomplete` attribute was detected');o.mediation=`conditional`,a.allowCredentials=[]}o.publicKey=a,o.signal=x.createNewAbortSignal();let s;try{s=await navigator.credentials.get(o)}catch(e){throw E({error:e,options:o})}if(!s)throw Error(`Authentication was not completed`);let{id:c,rawId:l,response:u,type:d}=s,f;return u.userHandle&&(f=m(u.userHandle)),{id:c,rawId:m(l),response:{authenticatorData:m(u.authenticatorData),clientDataJSON:m(u.clientDataJSON),signature:m(u.signature),userHandle:f},type:d,clientExtensionResults:s.getClientExtensionResults(),authenticatorAttachment:C(s.authenticatorAttachment)}}function O(){return g()?PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable():new Promise(e=>e(!1))}var k=class extends i{static{this.METHOD=`totp`}get endpoint(){return`auth/verify-totp`}renderInput(){return o`
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
    `}};p([d(`craft-input.totp-code`)],k.prototype,`_input`,void 0),i.register(`craft-totp-form`,k);var A=class extends i{static{this.METHOD=`recovery-codes`}get endpoint(){return`auth/verify-recovery-code`}renderInput(){return o`
      <craft-input
        label="${e(`Recovery Code`)}"
        id="recovery-code"
        class="recovery-code"
        name="code"
        autocomplete="off"
        aria-required="true"
      ></craft-input>
    `}};p([d(`craft-input.recovery-code`)],A.prototype,`_input`,void 0),i.register(`craft-recovery-code-form`,A);var j=class extends c{constructor(...e){super(...e),this._switching=!1,this.#e=!1}static{this.styles=[f]}#e;async updated(e){super.updated(e),!i.isNative(this.data?.authMethod)&&!this.#e&&!this._switching&&this._container&&(this.#e=!0,await this.#t())}async#t(){this._container&&(await Craft.appendHeadHtml(this.data.headHtml),await Craft.appendBodyHtml(this.data.bodyHtml),Craft.initUiElements(this._container),Craft.createAuthFormHandler(this.data.authMethod,this._container,()=>{this.dispatchEvent(new CustomEvent(`login-verified`,{bubbles:!0,composed:!0,detail:{returnUrl:this.data.returnUrl}}))},e=>{this.dispatchEvent(new CustomEvent(`login-failed`,{bubbles:!0,composed:!0,detail:{message:e}}))}),this._container.querySelector(`:focus-visible, input, button`)?.focus())}async#n(e){this._switching=!0,this.#e=!1;try{let t=await fetch(e.url,{headers:{Accept:`application/json`,"Content-Type":`application/json`}});if(!t.ok)throw Error(`Failed to fetch challenge data.`);this.data=await t.json()}finally{this._switching=!1}}render(){return this._switching?o`
        <craft-pane>
          <div class="spinner-overlay">
            <craft-spinner></craft-spinner>
          </div>
        </craft-pane>
      `:o`
      <craft-pane>
        <div class="auth-form-container">${n(this.data.authForm)}</div>
        ${this.data.otherMethods.length?o`
              <hr />
              <craft-action-menu>
                <craft-button slot="invoker" appearance="plain" size="zero">
                  <craft-icon slot="prefix" name="chevron-down"></craft-icon>
                  ${e(`Try another way`)}
                </craft-button>

                <div slot="content">
                  ${this.data.otherMethods.map(e=>o`
                      <craft-action-item
                        @click="${()=>this.#n(e)}"
                      >
                        ${e.name}
                      </craft-action-item>
                    `)}
                </div>
              </craft-action-menu>
            `:s}
      </craft-pane>
    `}};p([l({attribute:!1})],j.prototype,`data`,void 0),p([u()],j.prototype,`_switching`,void 0),p([d(`.auth-form-container`)],j.prototype,`_container`,void 0),customElements.get(`craft-login-challenge`)||customElements.define(`craft-login-challenge`,j);var M=class extends c{constructor(...e){super(...e),this.useEmailAsUsername=!1,this.username=``,this._busy=!1,this._error=``}static{this.styles=[f]}firstUpdated(){this.updateComplete.then(()=>{this._input?.focus()})}#e(){return this.useEmailAsUsername?e(`Email`):e(`Username or Email`)}async#t(n){n.preventDefault(),this._error=``,this._busy=!0;try{await t.post(`users/send-password-reset-email`,{loginName:this._input.value});let n=document.createElement(`craft-dialog`);n.setAttribute(`open`,``);let r=document.createElement(`p`);r.textContent=e(`Check your email for instructions to reset your password.`),n.appendChild(r),document.body.appendChild(n)}catch(t){this._error=t?.response?.data?.message??e(`A server error occurred.`)}finally{this._busy=!1}}#n(){this.dispatchEvent(new CustomEvent(`craft:login:reset-back`,{bubbles:!0,composed:!0,detail:{username:this._input?.value??``}}))}render(){return o`
      <craft-pane>
        <form
          class="auth-form auth-form--reset"
          method="post"
          accept-charset="UTF-8"
          @submit="${this.#t}"
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

          ${this._error?o`<craft-callout variant="danger" class="auth-form__error"
                >${this._error}</craft-callout
              >`:s}
        </form>

        <hr />

        <craft-button
          type="button"
          appearance="plain"
          size="small"
          @click="${this.#n}"
        >
          <craft-icon slot="prefix" name="arrow-left"></craft-icon>
          ${e(`Back to sign in`)}
        </craft-button>
      </craft-pane>
    `}};p([l({type:Boolean,attribute:`use-email-as-username`})],M.prototype,`useEmailAsUsername`,void 0),p([l()],M.prototype,`username`,void 0),p([u()],M.prototype,`_busy`,void 0),p([u()],M.prototype,`_error`,void 0),p([d(`.reset-username`)],M.prototype,`_input`,void 0),customElements.get(`craft-login-reset-password`)||customElements.define(`craft-login-reset-password`,M);var N=class extends c{constructor(...e){super(...e),this.showPasskeyBtn=!0,this.showResetPassword=!1,this.showRememberMe=!1,this.username=``,this.staticEmail=``,this.useEmailAsUsername=!1,this.rememberMeLabel=``,this.initialError=``,this.action=``,this._view=`login`,this._error=``,this._loginBusy=!1,this._passkeyBusy=!1,this._canUsePasskey=!1,this._twoFactorData=null,this._resetUsername=``}static{this.styles=[r,f]}async connectedCallback(){super.connectedCallback(),this.initialError&&(this._error=this.initialError),this.showPasskeyBtn&&g()&&(this._canUsePasskey=await O())}focus(e){this.updateComplete.then(()=>{(this.staticEmail?this._passwordInput:this._usernameInput??this._passwordInput)?.focus(e)})}#e(){return this.useEmailAsUsername?e(`Email`):e(`Username or Email`)}async#t(e){e.preventDefault(),this._error=``,this._loginBusy=!0;try{let e=await fetch(this.action,{method:`post`,headers:{Accept:`application/json`,"Content-Type":`application/json`,"X-CSRF-TOKEN":a.getInstance().get(`csrfTokenValue`)},body:JSON.stringify({loginName:this._usernameInput.value,password:this._passwordInput.value,rememberMe:this._rememberMeInput?.checked?`1`:``})}),t=await e.json();if(!e.ok)throw Error(t.message||`A server error occurred.`);t.authMethod?(this._twoFactorData=t,this._view=`challenge`,this._loginBusy=!1):(this.#c(t.returnUrl),this._loginBusy=!1)}catch(e){this._loginBusy=!1,this.#s(e.message)}}async#n(){if(!this._passkeyBusy){this._error=``,this._passkeyBusy=!0;try{let{data:e}=await t.post(`auth/passkey-request-options`),n=await D({optionsJSON:JSON.parse(e.options)}),{data:r}=await t.post(`users/login-with-passkey`,{requestOptions:e.options,authResponse:JSON.stringify(n)});this.#c(r.returnUrl),this._passkeyBusy=!1}catch(e){this._passkeyBusy=!1;let t=e?.response?.data?.message;t?this.#s(t):console.warn(e)}}}#r(){this._error=``,this._resetUsername=this._usernameInput?.value??``,this._view=`reset-password`}#i(e){let t=e.detail?.username??``;this._view=`login`,this.updateComplete.then(()=>{t&&this._usernameInput&&(this._usernameInput.value=t),this._usernameInput?.focus()})}#a(e){this.#c(e.detail.returnUrl)}#o(e){let t=e.detail.message,n=new CustomEvent(`craft:login:error`,{bubbles:!0,composed:!0,cancelable:!0,detail:{message:t}});this.dispatchEvent(n),n.defaultPrevented||this.#s(t)}#s(e){this._error=e.trim();let t=this.shadowRoot?.querySelector(`.cp-visually-hidden[role="status"]`);t&&(t.textContent=e)}#c(e){let t=new CustomEvent(`craft:login:success`,{bubbles:!0,composed:!0,cancelable:!0,detail:{returnUrl:e}});this.dispatchEvent(t),t.defaultPrevented||(window.location.href=e)}render(){return o`
      <div>
        <span
          class="cp-visually-hidden"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        ></span>

        ${this._view===`login`?this.#l():this._view===`reset-password`?o`
                <craft-login-reset-password
                  ?use-email-as-username="${this.useEmailAsUsername}"
                  username="${this._resetUsername}"
                  @craft:login:reset-back="${this.#i}"
                ></craft-login-reset-password>
              `:o`
                <craft-login-challenge
                  .data="${this._twoFactorData}"
                  @login-verified="${this.#a}"
                  @login-failed="${this.#o}"
                ></craft-login-challenge>
              `}
      </div>
    `}#l(){let t=this._canUsePasskey||this.querySelector(`[slot="alternative-methods"]`);return o`
      <craft-pane>
        <form
          class="auth-form"
          method="post"
          accept-charset="UTF-8"
          @submit="${this.#t}"
        >
          <craft-field-group>
            ${this.staticEmail?o`<input
                  type="hidden"
                  class="login-username"
                  name="username"
                  .value="${this.staticEmail}"
                />`:o`
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

              ${this.showResetPassword?o`
                    <craft-button
                      type="button"
                      size="small"
                      appearance="plain"
                      @click="${this.#r}"
                      style="margin-block-start: var(--c-spacing-sm)"
                    >
                      ${e(`Forgot password?`)}
                    </craft-button>
                  `:s}
            </div>

            ${this.showRememberMe?o`
                  <div class="remember-me-row">
                    <craft-checkbox
                      label="${this.rememberMeLabel||e(`Stay signed in`)}"
                      type="checkbox"
                      id="login-remember-me"
                      class="login-remember-me"
                    ></craft-checkbox>
                  </div>
                `:s}
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

        ${this._error?o`<craft-callout class="auth-form__error" variant="danger"
              >${this._error}</craft-callout
            >`:s}
      </craft-pane>

      ${t?o`
            <div class="alternative-login-methods">
              ${this._canUsePasskey?o`
                    <craft-button
                      type="button"
                      appearance="filled"
                      ?loading="${this._passkeyBusy}"
                      @click="${this.#n}"
                      style="width: 100%"
                    >
                      ${e(`Sign in with a passkey`)}
                    </craft-button>
                  `:s}
              <slot name="alternative-methods"></slot>
            </div>
          `:s}
    `}};p([l({type:Boolean,attribute:`show-passkey-btn`})],N.prototype,`showPasskeyBtn`,void 0),p([l({type:Boolean,attribute:`show-reset-password`})],N.prototype,`showResetPassword`,void 0),p([l({type:Boolean,attribute:`show-remember-me`})],N.prototype,`showRememberMe`,void 0),p([l()],N.prototype,`username`,void 0),p([l({attribute:`static-email`})],N.prototype,`staticEmail`,void 0),p([l({type:Boolean,attribute:`use-email-as-username`})],N.prototype,`useEmailAsUsername`,void 0),p([l({attribute:`remember-me-label`})],N.prototype,`rememberMeLabel`,void 0),p([l({attribute:`initial-error`})],N.prototype,`initialError`,void 0),p([l()],N.prototype,`action`,void 0),p([u()],N.prototype,`_view`,void 0),p([u()],N.prototype,`_error`,void 0),p([u()],N.prototype,`_loginBusy`,void 0),p([u()],N.prototype,`_passkeyBusy`,void 0),p([u()],N.prototype,`_canUsePasskey`,void 0),p([u()],N.prototype,`_twoFactorData`,void 0),p([u()],N.prototype,`_resetUsername`,void 0),p([d(`.login-username`)],N.prototype,`_usernameInput`,void 0),p([d(`craft-input-password.login-password`)],N.prototype,`_passwordInput`,void 0),p([d(`.login-remember-me`)],N.prototype,`_rememberMeInput`,void 0),customElements.get(`craft-login-form`)||customElements.define(`craft-login-form`,N);