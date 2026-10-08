import{i as e,n as t,r as n,u as r}from"./decorators-BPqkjGyG.js";import"./cp-B7FUz32S.js";import{r as i}from"./preload-helper-E3ME-qyR.js";import{t as a}from"./decorate-B3KLIx2E.js";var o=class extends n{constructor(...e){super(...e),this.form=null,this.submitButton=null,this.codes=[],this.handleSubmit=async e=>{if(e.preventDefault(),this.submitButton?.setAttribute(`loading`,`true`),Craft.cp.announce(i(`Loading`)),!(e.target instanceof HTMLFormElement))throw Error(`Recovery code setup must be submitted by a form.`);let t=e.target;try{let e=await(await fetch(t.getAttribute(`action`),{method:`POST`,body:JSON.stringify(new FormData(t)),headers:{Accept:`application/json`,"Content-Type":`application/json`}})).json();this.handleSuccess(e)}catch(e){console.error({error:e})}finally{this.submitButton?.removeAttribute(`loading`),Craft.cp.announce(Craft.t(`app`,`Loading complete`))}},this.successTemplate=({codes:e,message:t})=>r`
      <div class="grid gap-6 justify-items-center flex-1">
        <div class="grid justify-items-center gap-2">
          <craft-icon
            name="circle-check"
            data-color="success"
            style="font-size: 36px"
          ></craft-icon>
          <h1 class="auth-method-setup-success-message" tabindex="-1">
            ${t}
          </h1>
        </div>
        <craft-pane class="w-3/4">
          <div class="grid gap-4">
            <ul class="text-center font-mono">
              ${e.map(e=>r`<li>${e}</li>`)}
            </ul>

            <hr />
            <div class="flex justify-center">
              <craft-button
                type="button"
                icon="download"
                .action="${{type:`download`,method:`POST`,url:`auth/download-recovery-codes`}}"
              >
                ${i(`Download Codes`)}
              </craft-button>
            </div>
          </div>
        </craft-pane>
      </div>
    `}connectedCallback(){if(super.connectedCallback(),this.form=this.querySelector(`form`),!this.form){console.warn(`<craft-recovery-codes-setup/> must wrap a <form/> element.`);return}this.form.addEventListener(`submit`,this.handleSubmit),this.submitButton=this.form.querySelector(`[type="submit"]`)}handleSuccess(t){this.form?.remove(),e(this.successTemplate(t),this)}createRenderRoot(){return this}};a([t({attribute:`container-id`})],o.prototype,`containerId`,void 0),customElements.get(`craft-recovery-codes-setup`)||customElements.define(`craft-recovery-codes-setup`,o);export{o as t};