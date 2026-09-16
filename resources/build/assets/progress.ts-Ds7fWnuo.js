import{c as e,f as t,t as n}from"./lit-DNaDb1T7.js";import{t as r}from"./decorate-B3KLIx2E-B3KLIx2E.js";import{n as i}from"./decorators-D0-gbKXH.js";import{a,i as o,n as s,r as c,t as l}from"./classPrivateFieldSet2-BrH7O_C6-CUGCWNrd.js";var u=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,m=new WeakMap,h=new WeakMap,g=new WeakMap,_=new WeakMap,v=new WeakMap,y=new WeakMap,b=new WeakMap,x=new WeakSet,S=class extends n{constructor(...e){super(...e),o(this,x),this.progress=0,this.failed=!1,this.color=`currentColor`,this.bgColor=`#a3afbb`,this.failColor=`#da5a47`,this.label=`Progress`,this.autoComplete=!1,s(this,u,null),s(this,d,0),s(this,f,0),s(this,p,0),s(this,m,0),s(this,h,0),s(this,g,null),s(this,_,0),s(this,v,null),s(this,y,0),s(this,b,!1)}connectedCallback(){super.connectedCallback(),l(b,this,window.matchMedia(`(prefers-reduced-motion: reduce)`).matches)}disconnectedCallback(){super.disconnectedCallback(),a(x,this,k).call(this)}firstUpdated(){l(u,this,this.renderRoot.querySelector(`canvas`)),a(x,this,C).call(this),a(x,this,w).call(this)}updated(e){e.has(`progress`)?a(x,this,w).call(this):(e.has(`color`)||e.has(`bgColor`)||e.has(`failColor`)||e.has(`failed`))&&a(x,this,E).call(this)}get canvas(){return c(u,this)}get prefersReducedMotion(){return c(b,this)}runCompleteAnimation(){return new Promise(e=>{if(c(b,this)){l(h,this,1),c(u,this)&&(c(u,this).style.opacity=`0`),a(x,this,E).call(this),e();return}a(x,this,O).call(this,1,()=>{c(u,this)&&(c(u,this).style.transition=`opacity 0.4s`,c(u,this).style.opacity=`0`),setTimeout(e,400)})})}async complete(){await this.runCompleteAnimation(),this.dispatchEvent(new CustomEvent(`complete`,{bubbles:!0,composed:!0}))}render(){return e`
      <canvas
        part="canvas"
        role="progressbar"
        aria-valuenow=${(this.progress>=0?this.progress:void 0)??``}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.label}
      ></canvas>
      <span class="visually-hidden">
        ${this.failed?`Failed`:this.progress<0?`Loading`:`${this.progress}%`}
      </span>
    `}};function C(){let e=getComputedStyle(this),t=parseFloat(e.getPropertyValue(`--_size`)),n=parseFloat(e.getPropertyValue(`--_stroke-width`)),r=window.devicePixelRatio>1?2:1;l(d,this,t*r),l(f,this,c(d,this)/2),l(m,this,n*r),l(p,this,(t/2-n/2)*r),c(u,this)&&(c(u,this).width=c(d,this),c(u,this).height=c(d,this))}function w(){if(this.progress>=0&&c(v,this)!==null&&(cancelAnimationFrame(c(v,this)),l(v,this,null),l(_,this,0)),this.progress<0){c(v,this)===null&&a(x,this,T).call(this);return}let e=this.progress/100;if(this.autoComplete&&this.progress>=100&&c(y,this)<100){l(y,this,this.progress),this.complete();return}c(y,this)>0&&this.progress>c(y,this)&&!c(b,this)?a(x,this,O).call(this,e):(l(h,this,e),a(x,this,E).call(this)),l(y,this,this.progress)}function T(){if(c(b,this)){l(h,this,.25),a(x,this,E).call(this);return}let e=()=>{l(_,this,c(_,this)+.05),l(h,this,.15+.1*Math.sin(c(_,this)*3)),a(x,this,E).call(this),l(v,this,requestAnimationFrame(e))};l(v,this,requestAnimationFrame(e))}function E(){let e=c(u,this)?.getContext(`2d`);if(e){if(e.clearRect(0,0,c(d,this),c(d,this)),this.failed){a(x,this,D).call(this,e,this.failColor,1,0);return}if(a(x,this,D).call(this,e,this.bgColor,1,0),c(h,this)>0){let t=this.progress<0?c(_,this):-Math.PI/2;a(x,this,D).call(this,e,this.color,c(h,this),t)}}}function D(e,t,n,r){e.strokeStyle=t,e.lineWidth=c(m,this),e.lineCap=`round`,e.beginPath(),e.arc(c(f,this),c(f,this),c(p,this),r,r+n*2*Math.PI),e.stroke()}function O(e,t){a(x,this,k).call(this);let n=performance.now(),r=c(h,this),i=o=>{let s=o-n,c=Math.min(s/500,1),u=1-(1-c)**3;l(h,this,r+(e-r)*u),a(x,this,E).call(this),c<1?l(g,this,requestAnimationFrame(i)):(l(g,this,null),t?.())};l(g,this,requestAnimationFrame(i))}function k(){c(g,this)!==null&&(cancelAnimationFrame(c(g,this)),l(g,this,null)),c(v,this)!==null&&(cancelAnimationFrame(c(v,this)),l(v,this,null))}S.styles=t`
    :host {
      --_size: var(--c-progress-size, 16px);
      --_stroke-width: var(--c-progress-stroke-width, 3px);

      display: inline-block;
      position: relative;
      width: var(--_size);
      height: var(--_size);
    }

    canvas {
      position: absolute;
      top: 0;
      left: 0;
      width: var(--_size);
      height: var(--_size);
    }

    .visually-hidden {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }
  `,r([i({type:Number})],S.prototype,`progress`,void 0),r([i({type:Boolean})],S.prototype,`failed`,void 0),r([i({type:String})],S.prototype,`color`,void 0),r([i({type:String,attribute:`bg-color`})],S.prototype,`bgColor`,void 0),r([i({type:String,attribute:`fail-color`})],S.prototype,`failColor`,void 0),r([i({type:String})],S.prototype,`label`,void 0),r([i({type:Boolean,attribute:`auto-complete`})],S.prototype,`autoComplete`,void 0),customElements.get(`craft-progress`)||customElements.define(`craft-progress`,S);