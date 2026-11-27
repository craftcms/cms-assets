import{n as e}from"./translate.ts-DW16fAdu.js";import{a as t,n,r,t as i,u as a}from"./decorators-B_wqftM0.js";import{t as o}from"./custom-element-Bov83m9_.js";import{H as s}from"./field-CafPjHry-DYV9CWSl.js";import{r as c}from"./actionClient-DlCWcHgA-BOe1VjYK.js";import"./cp-CeBFHYQD.js";import{t as l}from"./open-image-editor-dialog-0TTr_EmT.js";import{Kn as u,Mn as d,Wn as f,Zn as ee,er as p,gn as m}from"./vue.esm-bundler-6ql8m0cP.js";import{u as h}from"./useSlideout-BHUTO9z4.js";import{p as g}from"./dist-kboYdBwq.js";import{r as _}from"./dom-DAAnzQDJ.js";import{t as v}from"./strings-CF1CAFGg.js";import{t as y}from"./decorate-B3KLIx2E.js";import"./slideouts-DlrQFffG.js";import"./pane.ts-BVD9ThUG.js";import{n as b}from"./clipboard-CvG_xHWn.js";import{n as te}from"./element-instances-DMOZlNoG.js";import"./field.ts-DpilB2IH.js";import"./chip.ts-BzvD86-i.js";import{t as ne}from"./create-element-selector-modal-l0yTifPC.js";import{n as x,t as S}from"./useElementActionMenu-BHKs-FFI.js";import{t as C}from"./EditElementController-BsQBjyP_.js";var w=f(new Map),T=new Map,E=0,D=new Set,O=new Set,k=!1,A=null,re=0;function j(e){return Number(e)||null}function M(e,t){return[e.elementType,e.viewMode,e.thumbSize??``,t].join(`|`)}function N(e,t,n){return`${M(e,t)}|${n}`}function P(e){return T.set(e,++E),E}function F(){let e=new Set;return D.forEach(t=>{let n=t.query();t.elements().forEach(({id:t,siteId:r})=>e.add(N(n,r,t)))}),e}async function I(){let e=new Set(O),t=k;O.clear(),k=!1;let n=new Map;D.forEach(r=>{let i=r.query();r.elements().forEach(({id:r,siteId:a})=>{if(!t&&!e.has(r))return;let o=M(i,a),s=n.get(o)??{query:i,siteId:a,ids:new Set};s.ids.add(r),n.set(o,s)})}),await Promise.all([...n.values()].map(({query:e,siteId:t,ids:n})=>L(e,t,[...n])))}async function L(e,t,n){let r=new Map(n.map(n=>{let r=N(e,t,n);return[r,P(r)]})),{data:i}=await c.post(`relational-fields/structured-elements`,{elementType:e.elementType,elementIds:n,siteId:t,viewMode:e.viewMode,thumbSize:e.thumbSize??null});i.elements?.forEach(n=>{let i=N(e,t,n.id);r.has(i)&&T.get(i)===r.get(i)&&w.set(i,n)})}function R(){A??=te(e=>{O.size===0&&!k&&queueMicrotask(()=>{I().catch(e=>{console.warn(`Couldn’t refresh elements:`,e)})}),e===null?k=!0:O.add(e)},{includeSelf:!0})}function z(){let e=F();[...new Set([...w.keys(),...T.keys()])].filter(t=>!e.has(t)).forEach(e=>{w.delete(e),T.delete(e)}),D.size===0&&(A?.(),A=null)}function B(e,t){let n={query:()=>p(e),elements:()=>p(t)};D.add(n),R(),m(()=>{let e=n.query();return n.elements().map(({id:t,siteId:n})=>N(e,n,t)).join(`,`)},()=>z()),g(()=>{D.delete(n),z()});let r=++re,i=new WeakMap;function a(e){let t=e.cardAttributes?.id;if(typeof t!=`string`||t===``)return e;let n=i.get(e);if(!n){let a=`${t}-${r}`,o=RegExp(`${v(t)}(?!\\w)`,`g`);n=Object.fromEntries(Object.entries(e).map(([e,t])=>[e,e.endsWith(`Html`)&&typeof t==`string`?t.replace(o,a):t])),n.cardAttributes={...e.cardAttributes,id:a},i.set(e,n)}return n}return{get:(t,n)=>{let r=w.get(N(p(e),j(n),t));return r&&a(r)},seed:(t,n,{replace:r=!1}={})=>{let i=F();t.forEach(t=>{let a=N(p(e),j(t.siteId??n),t.id);i.has(a)&&(r?(w.set(a,t),P(a)):w.has(a)||w.set(a,t))})},load:async t=>{let n=new Map;t.forEach(({id:e,siteId:t})=>{let r=j(t);n.set(r,[...n.get(r)??[],e])}),await Promise.all([...n].map(([t,n])=>L(p(e),t,n)))}}}var V=class{constructor(e,t,n){this.host=e,this.query=t,this.elements=n,this.scope=null,this.presentations=null,this.version=u(0),this.lastKey=``,e.addController(this)}hostConnected(){if(this.scope)return;let e=()=>(this.version.value,this.elements());this.scope=d(!0),this.scope.run(()=>{this.presentations=B(this.query,e),m(()=>e().map(({id:e,siteId:t})=>this.get(e,t)),()=>this.host.requestUpdate())})}hostDisconnected(){queueMicrotask(()=>{this.host.isConnected||(this.scope?.stop(),this.scope=null,this.presentations=null)})}hostUpdate(){let e=JSON.stringify([this.query(),this.elements()]);e!==this.lastKey&&(this.lastKey=e,this.version.value++)}get(e,t){let n=this.presentations?.get(e,t);return n&&ee(n)}seed(e,t,n){this.presentations?.seed(e,t,n)}async load(e){await this.presentations?.load(e)}};function H(e,t,n={}){return h(e.cpEditUrl??C[`/{cpTrigger?}/{actionTrigger?}/elements/edit`].url(void 0,{query:{elementType:t,elementId:e.id,siteId:e.siteId??null}}),n)}function U(e,t){return{type:t,id:e.id,siteId:e.siteId===null?null:Number(e.siteId),draftId:e.draftId??null,revisionId:e.revisionId??null}}function W(e){return e.filter(e=>e.length>0).flatMap((e,t)=>t===0?e:[{type:`hr`},...e])}function G(t,n){if(t.actions?.length)return n.toActionItems(t.actions);let r=[];return t.url&&r.push({icon:`share`,label:e(`View in a new tab`),onClick:()=>window.open(t.url,`_blank`,`noopener`)}),t.canCopy&&r.push({icon:`custom-icons/clone-dashed`,label:e(`Copy {type}`,{type:n.elementDisplayName}),onClick:()=>b([U(t,n.elementType)])}),r}function K(t,n,r){let i=G(t,n),a=[];r.edit&&t.canEdit===!0&&a.push({icon:`edit`,label:r.edit.label,onClick:r.edit.open});let o=[];return n.editable&&(n.elementType&&a.push({icon:`arrows-rotate`,label:e(`Replace`),onClick:r.replace}),o.push({icon:`remove`,label:e(`Remove`),variant:`danger`,onClick:r.remove})),W([i,a,o])}function q(t,n,r){if(!t.length)return[];let i=[],a=t.filter(e=>e.canCopy);return a.length&&i.push({icon:`custom-icons/clone-dashed`,label:e(`Copy selected`),onClick:()=>b(a.map(e=>U(e,n.elementType)))}),n.editable&&i.push({icon:`remove`,label:e(`Remove selected`),variant:`danger`,onClick:r}),i}var J={urlSuffix:``,target:``,title:``,class:``,id:``,rel:``,ariaLabel:``,download:!1,filename:``},Y=[`type`,`value`,`label`,...Object.keys(J)],ie=0;function X(e){return JSON.stringify(e)}var ae=new Set([`previewFile`,`editImage`]);function Z(e){return{id:e.id,siteId:Number(e.siteId)||null}}function Q(e){return Object.keys(e).every(e=>[`id`,`label`,`siteId`].includes(e))}var $=class extends r{constructor(...e){super(...e),this.advancedFields=[],this.showLabelField=!1,this.types=[],this.modelValue=null,this.name=``,this.disabled=!1,this.live=!1,this.previewing=!1,this.defaultLabel=``,this.label=``,this.selectedElement=null,this.elementRemoved=!1,this.requestedChip=null,this.givenChips=new WeakSet,this.sentChips=new Set,this.presentations=new V(this,()=>({elementType:this.selectedType?.elementType??``,viewMode:`list`,thumbSize:`sm`}),()=>{let e=this.linkedElement();return e?[Z(e)]:[]}),this.elementActionItems=x(),this.dispatchAction=S(),this.toActionItems=e=>this.elementActionItems(e).map((t,n)=>{let r=e[n];if(!r||r.type===`hr`||!ae.has(r.behavior.type))return t;let{behavior:i,destructive:a}=r;return{...t,onClick:e=>void this.runDialogAction(()=>i.type===`editImage`?this.editImage(i):this.dispatchAction(i,a,e))}}),this.linkAttributes={...J},this.typeId=``,this.value=``,this.valueError=``,this.advancedPanelId=`craft-link-field-advanced-${++ie}`,this.valueErrorId=`${this.advancedPanelId}-value-errors`,this.emittedValue=null,this.chipMenuProvider=()=>{let e=this.selectedType,t=this.chip;return e&&t?this.chipActions(e,t):[]}}connectedCallback(){super.connectedCallback(),this.typeId||=this.types[0]?.id??``}willUpdate(e){let t=e.has(`modelValue`),n=t&&this.isEcho(this.modelValue),r=t?this.modelValue?.element:null,i=!!(r&&!this.givenChips.has(r)&&!this.sentChips.has(X(r)));if(t&&!n){let e=this.modelValue??{};this.elementRemoved=!1,this.selectedElement=e.element??null,this.defaultLabel=e.defaultLabel??``,this.label=e.label??``,this.linkAttributes={urlSuffix:e.urlSuffix??``,target:e.target??``,title:e.title??``,class:e.class??``,id:e.id??``,rel:e.rel??``,ariaLabel:e.ariaLabel??``,download:!!e.download,filename:e.filename??``},this.typeId=e.type??``,this.value=e.value??``}(!this.typeId||!this.types.some(e=>e.id===this.typeId))&&(this.typeId=this.types[0]?.id??``),r&&(i&&!Q(r)&&this.presentations.seed([r],null,{replace:this.hasUpdated}),i&&this.sentChips.clear(),this.givenChips.add(r)),this.loadPlaceholderElement()}linkedElement(){let e=this.selectedType;return this.value&&e?.kind===`element`&&e.elementType?this.selectedElement:null}get chip(){let e=this.linkedElement();return e?this.presentations.get(e.id,e.siteId)??e:null}loadPlaceholderElement(){let e=this.chip;if(!e||!Q(e)){this.requestedChip=null;return}e!==this.requestedChip&&(this.requestedChip=e,this.presentations.load([Z(e)]).catch(()=>{}))}isEcho(e){let t=this.emittedValue;return!!(t&&e&&Object.keys(t).every(n=>n===`href`||n===`element`||e[n]===t[n]))}get selectedType(){return this.types.find(e=>e.id===this.typeId)}hasAdvancedField(e){return this.advancedFields.includes(e)}get showAdvancedFields(){return this.showLabelField||this.advancedFields.length>0}handleTypeChange(e){e.target instanceof HTMLSelectElement&&(this.typeId=e.target.value,this.value=``,this.elementRemoved=!1,this.defaultLabel=``,this.selectedElement=null,this.valueError=``,this.change(`discrete`))}handleValueChange(e){let t=e.currentTarget;this.value=t.value,this.valueError=``,this.defaultLabel=this.defaultLabelFor(this.normalizeTextValue(this.value)),this.change(`typing`)}handleLabelChange(e){this.label=e.currentTarget.value,this.change(`typing`)}handleAttributeInput(e){return t=>{this.linkAttributes={...this.linkAttributes,[e]:t.currentTarget.value},this.change(`typing`)}}handleSwitch(e){return t=>{let{checked:n}=t.currentTarget;this.linkAttributes={...this.linkAttributes,...e(n)},this.change(`discrete`)}}async chooseElement(t){let n=this.selectedType;if(!n?.elementType||!n.refHandle)return;let r={...n.elementSelectConfig};delete r.elementType,delete r.limit,delete r.single,await this.dispatchElementSelectStartEvent(t);let i=null,a=await ne(n.elementType,{...r,hideOnSelect:!0,modalTitle:e(`Choose {type}`,{type:n.label}),multiSelect:!1,triggerElement:()=>this.actionMenuInvoker()??t,onHandoff:e=>{i=e},onSelect:e=>{let[t]=e;t?.id&&(this.value=`{${n.refHandle}:${t.id}@${t.siteId}:url}`,this.elementRemoved=!1,this.defaultLabel=String(t.label||``),this.selectedElement={id:t.id,label:this.defaultLabel,siteId:t.siteId},this.valueError=``,this.change(`discrete`))}});a.on(`close`,()=>{let e=()=>this.dispatchElementSelectEvent(`element-select-end`);i?i.then(e):e(),a.destroy()})}async removeElement(){this.value=``,this.defaultLabel=``,this.selectedElement=null,this.elementRemoved=!!this.modelValue?.value,this.change(`discrete`),await this.updateComplete,this.querySelector(`.craft-link-field__element > craft-button`)?.focus()}async editElement(e,t){if(this.previewing)return;let n=this.actionMenuInvoker();await this.dispatchElementSelectStartEvent(n),await H(t,e.elementType,{opener:n,onSaved:({data:n})=>this.replaceAsset(e,t,n?.replacedAssetId,n?.newAssetId),onClosed:()=>this.dispatchElementSelectEvent(`element-select-end`)})||this.dispatchElementSelectEvent(`element-select-end`)}replaceAsset(e,t,n,r){if(this.disabled||this.typeId!==e.id||this.selectedElement?.id!==t.id)return;let i=Number(n),a=Number(r),o=this.value.replace(/^\{(\w+):\d+/,`{$1:${a}`);i===t.id&&Number.isInteger(a)&&a>0&&o!==this.value&&(this.value=o,this.selectedElement={id:a,label:this.defaultLabel,siteId:t.siteId},this.change(`discrete`))}editImage(e){let t=this.selectedType,n=this.chip;return l(e.settings,r=>{t&&n&&r.newAssetId&&this.replaceAsset(t,n,e.assetId,r.newAssetId)}).then(({closed:e})=>e)}async runDialogAction(e){await this.dispatchElementSelectStartEvent(this.actionMenuInvoker());try{await e()}catch(e){console.error(e)}this.isConnected&&this.dispatchElementSelectEvent(`element-select-end`)}handleChipDoubleClick(e,t){let n=this.chip;n?.canEdit!==!0||_(t,t.currentTarget)||this.editElement(e,n)}actionMenuInvoker(){return this.querySelector(`.craft-link-field__chip craft-action-menu > [slot="invoker"]`)}chipActions(t,n){return K(n,{elementType:t.elementType??``,elementDisplayName:t.label,editable:!this.disabled,toActionItems:this.toActionItems},{edit:this.previewing?void 0:{label:e(`Edit {type}`,{type:t.label}),open:()=>void this.editElement(t,n)},replace:()=>void this.chooseElement(this.actionMenuInvoker()),remove:()=>void this.removeElement()})}async dispatchElementSelectStartEvent(e){let t=[];this.dispatchEvent(new CustomEvent(`element-select-start`,{bubbles:!0,detail:{restoreFocusTo:e??void 0,waitUntil:e=>t.push(e)}})),await Promise.all(t)}dispatchElementSelectEvent(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0}))}normalizeTextValue(e){let t=this.selectedType;if(e=e.trim(),!e||t?.kind!==`text`||this.validateTextValue(e))return e;let n=`${t.prefixes?.[0]??``}${e}`;return this.validateTextValue(n)?n:e}normalizeUrlSuffix(e){return e=e.trim(),!e||e.startsWith(`#`)||e.startsWith(`?`)?e:`?${e}`}renderTextDestination(e,t){return e===`url`||e===`email`?t.replaceAll(` `,`+`):e===`sms`?this.renderSmsDestination(t):e===`tel`?t.replaceAll(` `,`-`):t}renderSmsDestination(e){let[,t=``,n=``]=e.match(/^([^?&]*)(?:[?&]+(.*))?$/)??[];return(n?`${t}&${n.replaceAll(` `,`%20`)}`:t).replaceAll(` `,`-`)}validateTextValue(e){let t=this.selectedType?.pattern;if(!t)return!0;try{return new RegExp(t,`i`).test(e)}catch{return!0}}defaultLabelFor(e){let t=this.selectedType;if(!e||t?.kind!==`text`)return this.chip?.label||this.defaultLabel;let n=e;for(let e of t.prefixes??[])n.toLowerCase().startsWith(e.toLowerCase())&&(n=n.slice(e.length));return/^[^/]+\/$/.test(n)?n.slice(0,-1):n}currentValue(){let e=this.selectedType;if(!e)return null;let t=e.kind===`text`?this.normalizeTextValue(this.value):this.value,n=this.normalizeUrlSuffix(this.linkAttributes.urlSuffix),r=e.kind===`text`?this.renderTextDestination(e.id,t):t,i=e.kind===`element`?this.chip:null;return i&&this.sentChips.add(X(i)),{...this.linkAttributes,defaultLabel:this.defaultLabelFor(t),element:i,href:t?`${r}${n}`:``,label:this.label.trim(),title:this.linkAttributes.title.trim(),type:e.id,urlSuffix:n,value:t}}change(e){if(!this.live)return;let t=this.currentValue();t&&(this.emittedValue=t,this.modelValue=t,this.dispatchEvent(new CustomEvent(`link-change`,{bubbles:!0,detail:{kind:e,value:t}})))}apply(){let t=this.selectedType,n=this.currentValue();if(!(!t||!n)){if(!n.value&&!this.elementRemoved){this.valueError=e(`{attribute} cannot be blank.`,{attribute:t.label});return}if(t.kind===`text`&&!this.validateTextValue(n.value)){this.valueError=e(`{attribute} is invalid.`,{attribute:t.label});return}this.valueError=``,this.modelValue=n,this.dispatchEvent(new CustomEvent(`apply`,{bubbles:!0,detail:n}))}}cancel(){this.dispatchEvent(new CustomEvent(`cancel`,{bubbles:!0}))}renderLabel(e){return a`<span slot="label">${e}</span>`}renderTypeSelect(){return this.types.length<2?t:a`
      <craft-field>
        ${this.renderLabel(e(`Link Type`))}
        <craft-select
          slot="input"
          .value=${this.typeId}
          .disabled=${this.disabled}
        >
          <select
            slot="input"
            .value=${this.typeId}
            @change=${this.handleTypeChange}
          >
            ${this.types.map(e=>a`<option value=${e.id}>${e.label}</option>`)}
          </select>
        </craft-select>
      </craft-field>
    `}renderSelectedElement(n,r){let i=r.label||this.defaultLabel,o=r.status,c=this.chipActions(n,r).length>0;return a`
      <craft-chip
        size="small"
        class="craft-link-field__chip"
        data-color=${r.color??t}
        ?show-status=${!!o}
        ?show-thumb=${!!r.thumbHtml}
        @dblclick=${e=>this.handleChipDoubleClick(n,e)}
      >
        ${r.thumbHtml?a`<div slot="thumbnail" class="flex">
              ${s(r.thumbHtml)}
            </div>`:t}
        ${o?a`<div slot="status">
              ${o.draft?a`<craft-icon
                    name="scribble"
                    label=${`${e(`Status:`)} ${o.label}`}
                  ></craft-icon>`:a`<craft-indicator
                    fill=${o.fill}
                    shape=${o.shape??t}
                    label=${`${e(`Status:`)} ${o.label}`}
                  ></craft-indicator>`}
            </div>`:t}
        ${i}
        ${c?a`<div slot="suffix" class="flex items-center">
              <craft-action-menu
                .actions=${this.chipMenuProvider}
              ></craft-action-menu>
            </div>`:t}
      </craft-chip>
    `}renderTypeInput(){let n=this.selectedType;if(!n)return t;if(n.kind===`element`)return a`
        <craft-field>
          ${this.renderLabel(n.label)}
          <div slot="input" class="craft-link-field__element">
            ${this.chip?this.renderSelectedElement(n,this.chip):a`<craft-button
                  type="button"
                  variant="dashed"
                  icon="plus"
                  ?disabled=${this.disabled}
                  aria-describedby=${this.valueError?this.valueErrorId:t}
                  aria-invalid=${this.valueError?`true`:t}
                  @click=${e=>void this.chooseElement(e.currentTarget)}
                >
                  ${e(`Choose`)}
                </craft-button>`}
          </div>
          ${this.renderValueError(`feedback`)}
        </craft-field>
      `;let r=n.inputAttributes?.type??`text`,i=n.inputAttributes?.inputmode??void 0;return a`
      <craft-field>
        ${this.renderLabel(n.label)}
        <craft-input
          slot="input"
          data-link-value
          type=${r}
          inputmode=${i??t}
          ?invalid=${!!this.valueError}
          .value=${this.value}
          .disabled=${this.disabled}
          @input=${this.handleValueChange}
        ></craft-input>
        ${this.renderValueError(`feedback`)}
      </craft-field>
    `}renderValueError(n){return this.valueError?a`
      <ul id=${this.valueErrorId} class="errors" slot=${n??t}>
        <li>
          <span class="sr-only">${e(`Error:`)}</span>
          ${this.valueError}
        </li>
      </ul>
    `:t}renderTextAttribute(e,n,r={}){return a`
      <craft-input
        label=${n}
        help-text=${r.helpText??t}
        placeholder=${r.placeholder??t}
        type="text"
        ?monospace=${r.code}
        .value=${this.linkAttributes[e]??``}
        .disabled=${this.disabled}
        @input=${this.handleAttributeInput(e)}
      ></craft-input>
    `}renderAdvancedField(n){let r=e(`Separate multiple values with spaces.`);switch(n){case`urlSuffix`:return this.renderTextAttribute(`urlSuffix`,e(`URL Suffix`),{helpText:e(`Query params (e.g. {ex1}) or a URI fragment (e.g. {ex2}) that should be appended to the URL.`,{ex1:`?p1=foo&p2=bar`,ex2:`#anchor`})});case`target`:return a`
          <craft-switch
            label=${e(`Open in a new tab`)}
            .checked=${this.linkAttributes.target===`_blank`}
            .disabled=${this.disabled}
            @change=${this.handleSwitch(e=>({target:e?`_blank`:``}))}
          ></craft-switch>
        `;case`title`:return this.renderTextAttribute(`title`,e(`Title Text`));case`class`:return this.renderTextAttribute(`class`,e(`Class Name`),{helpText:r,code:!0});case`id`:return this.renderTextAttribute(`id`,e(`ID`),{code:!0});case`rel`:return this.renderTextAttribute(`rel`,e(`Relation ({ex})`,{ex:`rel`}),{helpText:r,code:!0});case`ariaLabel`:return this.renderTextAttribute(`ariaLabel`,e(`ARIA Label`));case`download`:return a`
          <craft-switch
            label=${e(`Download`)}
            .checked=${this.linkAttributes.download}
            .disabled=${this.disabled}
            @change=${this.handleSwitch(e=>({download:e}))}
          ></craft-switch>
          ${this.linkAttributes.download?this.renderTextAttribute(`filename`,e(`Filename`)):t}
        `}}renderAdvancedFields(){if(!this.showAdvancedFields)return t;let n=[`urlSuffix`,`target`,`title`,`class`,`id`,`rel`,`ariaLabel`,`download`].filter(e=>this.hasAdvancedField(e));return a`
      <craft-disclosure id=${this.advancedPanelId} size="small">
        <craft-button
          slot="invoker"
          type="button"
          variant="plain"
          size="small"
          flush
          icon="chevron-right"
          icon-position="suffix"
        >
          ${e(`Advanced`)}
        </craft-button>
        <craft-field-group slot="content">
          ${this.showLabelField?a`
                <craft-input
                  label=${e(`Label`)}
                  type="text"
                  placeholder=${this.chip?.label||this.defaultLabel||t}
                  .value=${this.label}
                  .disabled=${this.disabled}
                  @input=${this.handleLabelChange}
                ></craft-input>
              `:t}
          ${n.map(e=>this.renderAdvancedField(e))}
        </craft-field-group>
      </craft-disclosure>
    `}renderButtons(){return this.live?t:a`
      <div class="buttons right">
        <craft-button
          type="button"
          variant="plain"
          size="small"
          ?disabled=${this.disabled}
          @click=${this.cancel}
        >
          ${e(`Cancel`)}
        </craft-button>
        <craft-button
          type="button"
          size="small"
          ?disabled=${this.disabled}
          @click=${this.apply}
        >
          ${e(`Apply`)}
        </craft-button>
      </div>
    `}renderHiddenInputs(){return this.name?Y.map(e=>{let t=this.modelValue?.[e];return a`
        <input
          type="hidden"
          name=${`${this.name}[${e}]`}
          .value=${typeof t==`boolean`?t?`1`:``:t??``}
          ?disabled=${this.disabled}
        />
      `}):t}render(){let e=a`
      <div class="craft-link-field">
        <div class="craft-link-field__destination">
          ${this.renderTypeSelect()} ${this.renderTypeInput()}
        </div>
        ${this.renderAdvancedFields()} ${this.renderButtons()}
      </div>
    `;return a`
      ${this.live&&this.showAdvancedFields?a`<craft-pane
            class="craft-link-field__pane"
            appearance="outline"
            padding="lg"
            >${e}</craft-pane
          >`:e}
      ${this.renderHiddenInputs()}
    `}createRenderRoot(){return this}};y([n({attribute:`advanced-fields`,type:Array})],$.prototype,`advancedFields`,void 0),y([n({attribute:`show-label-field`,type:Boolean})],$.prototype,`showLabelField`,void 0),y([n({type:Array})],$.prototype,`types`,void 0),y([n({attribute:`model-value`,type:Object})],$.prototype,`modelValue`,void 0),y([n()],$.prototype,`name`,void 0),y([n({reflect:!0,type:Boolean})],$.prototype,`disabled`,void 0),y([n({reflect:!0,type:Boolean})],$.prototype,`live`,void 0),y([n({type:Boolean})],$.prototype,`previewing`,void 0),y([i()],$.prototype,`defaultLabel`,void 0),y([i()],$.prototype,`label`,void 0),y([i()],$.prototype,`selectedElement`,void 0),y([i()],$.prototype,`linkAttributes`,void 0),y([i()],$.prototype,`typeId`,void 0),y([i()],$.prototype,`value`,void 0),y([i()],$.prototype,`valueError`,void 0),$=y([o(`craft-link-field`)],$);export{B as i,q as n,H as r,K as t};