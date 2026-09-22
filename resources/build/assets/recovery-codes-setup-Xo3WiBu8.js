import{S as e}from"./nav-item-PE_0Q8tE-A6oeOABY.js";import{c as t,n,t as r}from"./lit-DNaDb1T7.js";import"./cp-ZhUGJoLv.js";import{n as i}from"./decorators-D0-gbKXH.js";import{t as a}from"./decorate-B3KLIx2E.js";var o=class extends r{constructor(...n){super(...n),this.form=null,this.submitButton=null,this.codes=[],this.handleSubmit=async t=>{if(t.preventDefault(),this.submitButton?.setAttribute(`loading`,`true`),Craft.cp.announce(e(`Loading`)),!(t.target instanceof HTMLFormElement))throw Error(`Recovery code setup must be submitted by a form.`);let n=t.target;try{let e=await(await fetch(n.getAttribute(`action`),{method:`POST`,body:JSON.stringify(new FormData(n)),headers:{Accept:`application/json`,"Content-Type":`application/json`}})).json();this.handleSuccess(e)}catch(e){console.error({error:e})}finally{this.submitButton?.removeAttribute(`loading`),Craft.cp.announce(Craft.t(`app`,`Loading complete`))}},this.successTemplate=({codes:n,message:r})=>t`
      <div class="grid gap-6 justify-items-center flex-1">
        <div class="grid justify-items-center gap-2">
          <craft-icon
            name="circle-check"
            data-color="success"
            style="font-size: 36px"
          ></craft-icon>
          <h1 class="auth-method-setup-success-message" tabindex="-1">
            ${r}
          </h1>
        </div>
        <craft-pane class="w-3/4">
          <div class="grid gap-4">
            <ul class="text-center font-mono">
              ${n.map(e=>t`<li>${e}</li>`)}
            </ul>

            <hr />
            <div class="flex justify-center">
              <craft-button
                type="button"
                icon="download"
                .action="${{type:`download`,method:`POST`,url:`auth/download-recovery-codes`}}"
              >
                ${e(`Download Codes`)}
              </craft-button>
            </div>
          </div>
        </craft-pane>
      </div>
    `}connectedCallback(){if(super.connectedCallback(),this.form=this.querySelector(`form`),!this.form){console.warn(`<craft-recovery-codes-setup/> must wrap a <form/> element.`);return}this.form.addEventListener(`submit`,this.handleSubmit),this.submitButton=this.form.querySelector(`[type="submit"]`)}handleSuccess(e){this.form?.remove(),n(this.successTemplate(e),this)}createRenderRoot(){return this}};a([i({attribute:`container-id`})],o.prototype,`containerId`,void 0),customElements.get(`craft-recovery-codes-setup`)||customElements.define(`craft-recovery-codes-setup`,o);export{o as t};