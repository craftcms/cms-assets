import{c as e,f as t,r as n,t as r}from"./lit-DNaDb1T7.js";import{E as i,S as a,_ as o}from"./nav-item-dDjxs2dE-9idAgG5g.js";import"./cp-BI3Y3q_A.js";import{n as s,t as c}from"./decorators-D0-gbKXH.js";import{t as l}from"./query-Df4-SAIv.js";import{n as u}from"./axios-Mm3N8iqg.js";import{n as d,t as f}from"./actionClient-NFMyfrDL-DsDU7tG9.js";import{t as p}from"./useAnnouncer-CCNEF9F8.js";import"./actionClient.ts-zYZ3wcB4.js";import{t as m}from"./login-form.styles-CWUEj_6V.js";import"./unsafe-html-nvjvDmy8.js";import{t as h}from"./craft-global-D42SH_IP.js";import{t as g}from"./decorate-B3KLIx2E.js";function _(e){let t=new Uint8Array(e),n=``;for(let e of t)n+=String.fromCharCode(e);return btoa(n).replace(/\+/g,`-`).replace(/\//g,`_`).replace(/=/g,``)}function v(e){let t=e.replace(/-/g,`+`).replace(/_/g,`/`),n=(4-t.length%4)%4,r=t.padEnd(t.length+n,`=`),i=atob(r),a=new ArrayBuffer(i.length),o=new Uint8Array(a);for(let e=0;e<i.length;e++)o[e]=i.charCodeAt(e);return a}function y(){return b.stubThis(globalThis?.PublicKeyCredential!==void 0&&typeof globalThis.PublicKeyCredential==`function`)}var b={stubThis:e=>e};function x(e){let{id:t}=e;return{...e,id:v(t),transports:e.transports}}function S(e){return e===`localhost`||/^((xn--[a-z0-9-]+|[a-z0-9]+(-[a-z0-9]+)*)\.)+([a-z]{2,}|xn--[a-z0-9-]+)$/i.test(e)}var C=class extends Error{constructor({message:e,code:t,cause:n,name:r}){super(e,{cause:n}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=r??n.name,this.code=t}};function w({error:e,options:t}){let{publicKey:n}=t;if(!n)throw Error(`options was missing required publicKey property`);if(e.name===`AbortError`){if(t.signal instanceof AbortSignal)return new C({message:`Registration ceremony was sent an abort signal`,code:`ERROR_CEREMONY_ABORTED`,cause:e})}else if(e.name===`ConstraintError`){if(n.authenticatorSelection?.requireResidentKey===!0)return new C({message:`Discoverable credentials were required but no available authenticator supported it`,code:`ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT`,cause:e});if(t.mediation===`conditional`&&n.authenticatorSelection?.userVerification===`required`)return new C({message:`User verification was required during automatic registration but it could not be performed`,code:`ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE`,cause:e});if(n.authenticatorSelection?.userVerification===`required`)return new C({message:`User verification was required but no available authenticator supported it`,code:`ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT`,cause:e})}else if(e.name===`InvalidStateError`)return new C({message:`The authenticator was previously registered`,code:`ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED`,cause:e});else if(e.name===`NotAllowedError`)return new C({message:e.message,code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:e});else if(e.name===`NotSupportedError`)return n.pubKeyCredParams.filter(e=>e.type===`public-key`).length===0?new C({message:`No entry in pubKeyCredParams was of type "public-key"`,code:`ERROR_MALFORMED_PUBKEYCREDPARAMS`,cause:e}):new C({message:`No available authenticator supported any of the specified pubKeyCredParams algorithms`,code:`ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG`,cause:e});else if(e.name===`SecurityError`){let t=globalThis.location.hostname;if(!S(t))return new C({message:`${globalThis.location.hostname} is an invalid domain`,code:`ERROR_INVALID_DOMAIN`,cause:e});if(n.rp.id!==t)return new C({message:`The RP ID "${n.rp.id}" is invalid for this domain`,code:`ERROR_INVALID_RP_ID`,cause:e})}else if(e.name===`TypeError`){if(n.user.id.byteLength<1||n.user.id.byteLength>64)return new C({message:`User ID was not between 1 and 64 characters`,code:`ERROR_INVALID_USER_ID_LENGTH`,cause:e})}else if(e.name===`UnknownError`)return new C({message:`The authenticator was unable to process the specified options, or could not create a new credential`,code:`ERROR_AUTHENTICATOR_GENERAL_ERROR`,cause:e});return e}var T=new class{constructor(){Object.defineProperty(this,"controller",{enumerable:!0,configurable:!0,writable:!0,value:void 0})}createNewAbortSignal(){if(this.controller){let e=Error(`Cancelling existing WebAuthn API call for new one`);e.name=`AbortError`,this.controller.abort(e)}let e=new AbortController;return this.controller=e,e.signal}cancelCeremony(){if(this.controller){let e=Error(`Manually cancelling existing WebAuthn API call`);e.name=`AbortError`,this.controller.abort(e),this.controller=void 0}}},E=[`cross-platform`,`platform`];function D(e){if(e&&!(E.indexOf(e)<0))return e}async function O(e){!e.optionsJSON&&e.challenge&&(console.warn(`startRegistration() was not called correctly. It will try to continue with the provided options, but this call should be refactored to use the expected call structure instead. See https://simplewebauthn.dev/docs/packages/browser#typeerror-cannot-read-properties-of-undefined-reading-challenge for more information.`),e={optionsJSON:e});let{optionsJSON:t,useAutoRegister:n=!1}=e;if(!y())throw Error(`WebAuthn is not supported in this browser`);let r={...t,challenge:v(t.challenge),user:{...t.user,id:v(t.user.id)},excludeCredentials:t.excludeCredentials?.map(x)},i={};n&&(i.mediation=`conditional`),i.publicKey=r,i.signal=T.createNewAbortSignal();let a;try{a=await navigator.credentials.create(i)}catch(e){throw w({error:e,options:i})}if(!a)throw Error(`Registration was not completed`);let{id:o,rawId:s,response:c,type:l}=a,u;typeof c.getTransports==`function`&&(u=c.getTransports());let d;if(typeof c.getPublicKeyAlgorithm==`function`)try{d=c.getPublicKeyAlgorithm()}catch(e){k(`getPublicKeyAlgorithm()`,e)}let f;if(typeof c.getPublicKey==`function`)try{let e=c.getPublicKey();e!==null&&(f=_(e))}catch(e){k(`getPublicKey()`,e)}let p;if(typeof c.getAuthenticatorData==`function`)try{p=_(c.getAuthenticatorData())}catch(e){k(`getAuthenticatorData()`,e)}return{id:o,rawId:_(s),response:{attestationObject:_(c.attestationObject),clientDataJSON:_(c.clientDataJSON),transports:u,publicKeyAlgorithm:d,publicKey:f,authenticatorData:p},type:l,clientExtensionResults:a.getClientExtensionResults(),authenticatorAttachment:D(a.authenticatorAttachment)}}function k(e,t){console.warn(`The browser extension that intercepted this WebAuthn API call incorrectly implemented ${e}. You should report this error to them.\n`,t)}function A(){if(!y())return j.stubThis(new Promise(e=>e(!1)));let e=globalThis.PublicKeyCredential;return e?.isConditionalMediationAvailable===void 0?j.stubThis(new Promise(e=>e(!1))):j.stubThis(e.isConditionalMediationAvailable())}var j={stubThis:e=>e};function M({error:e,options:t}){let{publicKey:n}=t;if(!n)throw Error(`options was missing required publicKey property`);if(e.name===`AbortError`){if(t.signal instanceof AbortSignal)return new C({message:`Authentication ceremony was sent an abort signal`,code:`ERROR_CEREMONY_ABORTED`,cause:e})}else if(e.name===`NotAllowedError`)return new C({message:e.message,code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:e});else if(e.name===`SecurityError`){let t=globalThis.location.hostname;if(!S(t))return new C({message:`${globalThis.location.hostname} is an invalid domain`,code:`ERROR_INVALID_DOMAIN`,cause:e});if(n.rpId!==t)return new C({message:`The RP ID "${n.rpId}" is invalid for this domain`,code:`ERROR_INVALID_RP_ID`,cause:e})}else if(e.name===`UnknownError`)return new C({message:`The authenticator was unable to process the specified options, or could not create a new assertion signature`,code:`ERROR_AUTHENTICATOR_GENERAL_ERROR`,cause:e});return e}async function N(e){!e.optionsJSON&&e.challenge&&(console.warn(`startAuthentication() was not called correctly. It will try to continue with the provided options, but this call should be refactored to use the expected call structure instead. See https://simplewebauthn.dev/docs/packages/browser#typeerror-cannot-read-properties-of-undefined-reading-challenge for more information.`),e={optionsJSON:e});let{optionsJSON:t,useBrowserAutofill:n=!1,verifyBrowserAutofillInput:r=!0}=e;if(!y())throw Error(`WebAuthn is not supported in this browser`);let i;t.allowCredentials?.length!==0&&(i=t.allowCredentials?.map(x));let a={...t,challenge:v(t.challenge),allowCredentials:i},o={};if(n){if(!await A())throw Error(`Browser does not support WebAuthn autofill`);if(document.querySelectorAll(`input[autocomplete$='webauthn']`).length<1&&r)throw Error('No <input> with "webauthn" as the only or last value in its `autocomplete` attribute was detected');o.mediation=`conditional`,a.allowCredentials=[]}o.publicKey=a,o.signal=T.createNewAbortSignal();let s;try{s=await navigator.credentials.get(o)}catch(e){throw M({error:e,options:o})}if(!s)throw Error(`Authentication was not completed`);let{id:c,rawId:l,response:u,type:d}=s,f;return u.userHandle&&(f=_(u.userHandle)),{id:c,rawId:_(l),response:{authenticatorData:_(u.authenticatorData),clientDataJSON:_(u.clientDataJSON),signature:_(u.signature),userHandle:f},type:d,clientExtensionResults:s.getClientExtensionResults(),authenticatorAttachment:D(s.authenticatorAttachment)}}function P(){return y()?PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable():new Promise(e=>e(!1))}var F=new Map,I=class extends r{constructor(...e){super(...e),this.returnUrl=``,this._state=`idle`}static{this.styles=[t`
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
    `]}firstUpdated(){this._input?.focus()}async _onSubmit(e){e.preventDefault(),await this._submit(this._input?.value??``)}async _submit(e){if(this._state!==`loading`){this._state=`loading`;try{await f.post(this.endpoint,{code:e}),this.dispatchEvent(new CustomEvent(`login-verified`,{bubbles:!0,composed:!0,detail:{returnUrl:this.returnUrl}})),this._state=`success`,setTimeout(()=>{this._state=`idle`},2e3)}catch(e){this._state=`error`,this.dispatchEvent(new CustomEvent(`login-failed`,{bubbles:!0,composed:!0,detail:{message:e?.response?.data?.message??o(`A server error occurred.`)}}))}}}renderInput(){return e`<slot name="input">
      <div>
        ${o(`Implement the renderInput() method or provide an input slot`)}
      </div>
    </slot>`}renderFields(){return e`
      <slot name="fields">
        ${this.renderInput()}
        <slot name="submit-button">
          <craft-button
            slot="after"
            type="submit"
            variant="primary"
            ?loading="${this._state===`loading`}"
          >
            ${o(`Verify`)}
          </craft-button>
        </slot>
      </slot>
    `}render(){return e`
      <form
        class="login-form"
        accept-charset="UTF-8"
        @submit="${this._onSubmit}"
      >
        <div class="login-form__fields">${this.renderFields()}</div>
      </form>
    `}static register(e,t){customElements.get(e)||customElements.define(e,t),F.set(t.METHOD,t)}static isNative(e){return F.has(e)}};g([s({attribute:`return-url`})],I.prototype,`returnUrl`,void 0),g([c()],I.prototype,`_state`,void 0),g([l(`craft-input`)],I.prototype,`_input`,void 0),h({AuthChallengeForm:I});var L=class extends I{static{this.METHOD=`totp`}get endpoint(){return`auth/verify-totp`}renderInput(){return e`
      <craft-input
        label="${o(`Verification Code`)}"
        id="totp-code"
        class="totp-code"
        name="code"
        .maxlength="${6}"
        autocomplete="one-time-code"
        inputmode="numeric"
        aria-required="true"
      ></craft-input>
    `}};g([l(`craft-input.totp-code`)],L.prototype,`_input`,void 0),I.register(`craft-totp-form`,L);var R=class extends I{static{this.METHOD=`recovery-codes`}get endpoint(){return`auth/verify-recovery-code`}renderInput(){return e`
      <craft-input
        label="${o(`Recovery Code`)}"
        id="recovery-code"
        class="recovery-code"
        name="code"
        autocomplete="off"
        aria-required="true"
      ></craft-input>
    `}};g([l(`craft-input.recovery-code`)],R.prototype,`_input`,void 0),I.register(`craft-recovery-code-form`,R);var z=class extends r{constructor(...e){super(...e),this._switching=!1,this.#e=!1}static{this.styles=[m]}#e;async updated(e){super.updated(e),!I.isNative(this.data?.authMethod)&&!this.#e&&!this._switching&&this._container&&(this.#e=!0,await this.#t())}async#t(){if(!this._container)return;let e=document.createElement(`template`);e.innerHTML=this.data.authForm.trim();let t=e.content.firstElementChild;t&&(await Craft.appendHeadHtml(this.data.headHtml),await Craft.appendBodyHtml(this.data.bodyHtml),Craft.initUiElements(t),Craft.createAuthFormHandler(this.data.authMethod,t,()=>{this.dispatchEvent(new CustomEvent(`login-verified`,{bubbles:!0,composed:!0,detail:{returnUrl:this.data.returnUrl}}))},e=>{this.dispatchEvent(new CustomEvent(`login-failed`,{bubbles:!0,composed:!0,detail:{message:e}}))}),this._container.append(t),this._container.querySelector(`:focus-visible, input, button`)?.focus())}async#n(e){this._switching=!0,this.#e=!1;try{let t=await fetch(e.url,{headers:{Accept:`application/json`,"Content-Type":`application/json`}});if(!t.ok)throw Error(`Failed to fetch challenge data.`);this.data=await t.json()}finally{this._switching=!1}}render(){return this._switching?e`
        <craft-pane>
          <div class="spinner-overlay">
            <craft-spinner></craft-spinner>
          </div>
        </craft-pane>
      `:e`
      <craft-pane>
        <div class="auth-form-container">
          ${I.isNative(this.data?.authMethod)?i(this.data.authForm):n}
        </div>
        ${this.data.otherMethods.length?e`
              <hr />
              <craft-action-menu>
                <craft-button slot="invoker" variant="plain" size="zero">
                  <craft-icon slot="prefix" name="chevron-down"></craft-icon>
                  ${o(`Try another way`)}
                </craft-button>

                <div slot="content">
                  ${this.data.otherMethods.map(t=>e`
                      <craft-action-item
                        @click="${()=>this.#n(t)}"
                      >
                        ${t.name}
                      </craft-action-item>
                    `)}
                </div>
              </craft-action-menu>
            `:n}
      </craft-pane>
    `}};g([s({attribute:!1})],z.prototype,`data`,void 0),g([c()],z.prototype,`_switching`,void 0),g([l(`.auth-form-container`)],z.prototype,`_container`,void 0),customElements.get(`craft-login-challenge`)||customElements.define(`craft-login-challenge`,z);var B=class extends r{constructor(...e){super(...e),this.useEmailAsUsername=!1,this.username=``,this._busy=!1,this._error=``}static{this.styles=[m]}firstUpdated(){this.updateComplete.then(()=>{this._input?.focus()})}#e(){return this.useEmailAsUsername?o(`Email`):o(`Username or Email`)}#t(e){let t=e.trim();this._error=t,p().announce(t)}async#n(e){e.preventDefault(),this._error=``,this._busy=!0;try{await f.post(`users/send-password-reset-email`,{loginName:this._input.value});let e=document.createElement(`craft-dialog`);e.setAttribute(`label`,o(`Check your email`)),e.setAttribute(`open`,``);let t=document.createElement(`p`);t.textContent=o(`Check your email for instructions to reset your password.`),e.appendChild(t),document.body.appendChild(e)}catch(e){this.#t(e?.response?.data?.message??o(`A server error occurred.`))}finally{this._busy=!1}}#r(){this.dispatchEvent(new CustomEvent(`craft:login:reset-back`,{bubbles:!0,composed:!0,detail:{username:this._input?.value??``}}))}render(){return e`
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
              ${o(`Reset password`)}
            </craft-button>
          </div>

          ${this._error?e`<craft-callout variant="danger" class="auth-form__error"
                >${this._error}</craft-callout
              >`:n}
        </form>

        <hr />

        <craft-button
          type="button"
          variant="link"
          size="small"
          @click="${this.#r}"
        >
          <craft-icon slot="prefix" name="arrow-left"></craft-icon>
          ${o(`Back to sign in`)}
        </craft-button>
      </craft-pane>
    `}};g([s({type:Boolean,attribute:`use-email-as-username`})],B.prototype,`useEmailAsUsername`,void 0),g([s()],B.prototype,`username`,void 0),g([c()],B.prototype,`_busy`,void 0),g([c()],B.prototype,`_error`,void 0),g([l(`.reset-username`)],B.prototype,`_input`,void 0),customElements.get(`craft-login-reset-password`)||customElements.define(`craft-login-reset-password`,B);var V=class extends r{constructor(...e){super(...e),this.showPasskeyBtn=!0,this.showResetPassword=!1,this.showRememberMe=!1,this.username=``,this.staticEmail=``,this.useEmailAsUsername=!1,this.rememberMeLabel=``,this.initialError=``,this.action=``,this._view=`login`,this._error=``,this._loginBusy=!1,this._passkeyBusy=!1,this._canUsePasskey=!1,this._twoFactorData=null,this._resetUsername=``}static{this.styles=[a,m]}async connectedCallback(){super.connectedCallback(),this.initialError&&(this._error=this.initialError),this.showPasskeyBtn&&y()&&(this._canUsePasskey=await P())}focus(e){this.updateComplete.then(()=>{(this.staticEmail?this._passwordInput:this._usernameInput??this._passwordInput)?.focus(e)})}#e(){return this.useEmailAsUsername?o(`Email`):o(`Username or Email`)}async#t(e){e.preventDefault(),this._error=``,this._loginBusy=!0;try{await d.refreshToken();let e=await fetch(this.action,{method:`post`,headers:{Accept:`application/json`,"Content-Type":`application/json`,"X-CSRF-TOKEN":u.getInstance().get(`csrfTokenValue`)},body:JSON.stringify({loginName:this._usernameInput.value,password:this._passwordInput.value,rememberMe:this._rememberMeInput?.checked?`1`:``})}),t=await e.json();if(!e.ok)throw Error(t.message||`A server error occurred.`);t.authMethod?(this._twoFactorData=t,this._view=`challenge`,this._loginBusy=!1):(await this.#c(t.returnUrl),this._loginBusy=!1)}catch(e){this._loginBusy=!1,this.#s(e.message)}}async#n(){if(!this._passkeyBusy){this._error=``,this._passkeyBusy=!0;try{let{data:e}=await f.post(`auth/passkey-request-options`),t=await N({optionsJSON:JSON.parse(e.options)}),{data:n}=await f.post(`users/login-with-passkey`,{requestOptions:e.options,authResponse:JSON.stringify(t)});await this.#c(n.returnUrl),this._passkeyBusy=!1}catch(e){this._passkeyBusy=!1;let t=e?.response?.data?.message;t?this.#s(t):console.warn(e)}}}#r(){this._error=``,this._resetUsername=this._usernameInput?.value??``,this._view=`reset-password`}#i(e){let t=e.detail?.username??``;this._view=`login`,this.updateComplete.then(()=>{t&&this._usernameInput&&(this._usernameInput.value=t),this._usernameInput?.focus()})}async#a(e){try{await this.#c(e.detail.returnUrl)}catch(e){this.#s(e.message)}}#o(e){let{message:t}=e.detail,n=new CustomEvent(`craft:login:error`,{bubbles:!0,composed:!0,cancelable:!0,detail:{message:t}});this.dispatchEvent(n),n.defaultPrevented||this.#s(t)}#s(e){let{announce:t}=p();this._error=e.trim(),t(this._error)}async#c(e){await d.refreshToken();let t=new CustomEvent(`craft:login:success`,{bubbles:!0,composed:!0,cancelable:!0,detail:{returnUrl:e}});this.dispatchEvent(t),t.defaultPrevented||(window.location.href=e)}render(){return e`
      <div>
        <span
          class="cp-visually-hidden"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        ></span>

        ${this._view===`login`?this.#l():this._view===`reset-password`?e`
                <craft-login-reset-password
                  ?use-email-as-username="${this.useEmailAsUsername}"
                  username="${this._resetUsername}"
                  @craft:login:reset-back="${this.#i}"
                ></craft-login-reset-password>
              `:e`
                <craft-login-challenge
                  .data="${this._twoFactorData}"
                  @login-verified="${this.#a}"
                  @login-failed="${this.#o}"
                ></craft-login-challenge>
              `}
      </div>
    `}#l(){let t=this._canUsePasskey||this.querySelector(`[slot="alternative-methods"]`);return e`
      <craft-pane>
        <form
          class="auth-form"
          method="post"
          accept-charset="UTF-8"
          @submit="${this.#t}"
        >
          <craft-field-group>
            ${this.staticEmail?e`<input
                  type="hidden"
                  class="login-username"
                  name="username"
                  .value="${this.staticEmail}"
                />`:e`
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
                label="${o(`Password`)}"
                id="login-password"
                class="login-password"
                name="password"
                autocomplete="current-password"
                required
              ></craft-input-password>

              ${this.showResetPassword?e`
                    <craft-button
                      type="button"
                      size="small"
                      variant="link"
                      @click="${this.#r}"
                      style="margin-block-start: var(--c-spacing-sm)"
                    >
                      ${o(`Forgot password?`)}
                    </craft-button>
                  `:n}
            </div>

            ${this.showRememberMe?e`
                  <div class="remember-me-row">
                    <craft-checkbox
                      label="${this.rememberMeLabel||o(`Stay signed in`)}"
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
              variant="primary"
              ?loading="${this._loginBusy}"
              style="width: 100%"
            >
              ${o(`Sign in`)}
            </craft-button>
          </div>
        </form>

        ${this._error?e`<craft-callout class="auth-form__error" variant="danger"
              >${this._error}</craft-callout
            >`:n}
      </craft-pane>

      ${t?e`
            <div class="alternative-login-methods">
              ${this._canUsePasskey?e`
                    <craft-button
                      type="button"
                      variant="fill"
                      ?loading="${this._passkeyBusy}"
                      @click="${this.#n}"
                      style="width: 100%"
                    >
                      ${o(`Sign in with a passkey`)}
                    </craft-button>
                  `:n}
              <slot name="alternative-methods"></slot>
            </div>
          `:n}
    `}};g([s({type:Boolean,attribute:`show-passkey-btn`})],V.prototype,`showPasskeyBtn`,void 0),g([s({type:Boolean,attribute:`show-reset-password`})],V.prototype,`showResetPassword`,void 0),g([s({type:Boolean,attribute:`show-remember-me`})],V.prototype,`showRememberMe`,void 0),g([s()],V.prototype,`username`,void 0),g([s({attribute:`static-email`})],V.prototype,`staticEmail`,void 0),g([s({type:Boolean,attribute:`use-email-as-username`})],V.prototype,`useEmailAsUsername`,void 0),g([s({attribute:`remember-me-label`})],V.prototype,`rememberMeLabel`,void 0),g([s({attribute:`initial-error`})],V.prototype,`initialError`,void 0),g([s()],V.prototype,`action`,void 0),g([c()],V.prototype,`_view`,void 0),g([c()],V.prototype,`_error`,void 0),g([c()],V.prototype,`_loginBusy`,void 0),g([c()],V.prototype,`_passkeyBusy`,void 0),g([c()],V.prototype,`_canUsePasskey`,void 0),g([c()],V.prototype,`_twoFactorData`,void 0),g([c()],V.prototype,`_resetUsername`,void 0),g([l(`.login-username`)],V.prototype,`_usernameInput`,void 0),g([l(`craft-input-password.login-password`)],V.prototype,`_passwordInput`,void 0),g([l(`.login-remember-me`)],V.prototype,`_rememberMeInput`,void 0),customElements.get(`craft-login-form`)||customElements.define(`craft-login-form`,V);export{O as n,y as r,P as t};