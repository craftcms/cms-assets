import{c as e,f as t,t as n}from"./lit-DNaDb1T7.js";import{t as r}from"./decorate-B3KLIx2E-B3KLIx2E.js";import{n as i}from"./decorators-D0-gbKXH.js";import{a,i as o,o as s,r as c,s as l}from"./axios-Mm3N8iqg.js";var u=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,m=new WeakMap,h=new WeakMap,g=new WeakMap,_=new WeakMap,v=new WeakMap,y=new WeakMap,b=new WeakMap,x=new WeakSet,S=class extends n{constructor(...e){super(...e),s(this,x),this.progress=0,this.failed=!1,this.color=`currentColor`,this.bgColor=`#a3afbb`,this.failColor=`#da5a47`,this.label=`Progress`,this.autoComplete=!1,o(this,u,null),o(this,d,0),o(this,f,0),o(this,p,0),o(this,m,0),o(this,h,0),o(this,g,null),o(this,_,0),o(this,v,null),o(this,y,0),o(this,b,!1)}connectedCallback(){super.connectedCallback(),c(b,this,window.matchMedia(`(prefers-reduced-motion: reduce)`).matches)}disconnectedCallback(){super.disconnectedCallback(),l(x,this,k).call(this)}firstUpdated(){c(u,this,this.renderRoot.querySelector(`canvas`)),l(x,this,C).call(this),l(x,this,w).call(this)}updated(e){e.has(`progress`)?l(x,this,w).call(this):(e.has(`color`)||e.has(`bgColor`)||e.has(`failColor`)||e.has(`failed`))&&l(x,this,E).call(this)}get canvas(){return a(u,this)}get prefersReducedMotion(){return a(b,this)}runCompleteAnimation(){return new Promise(e=>{if(a(b,this)){c(h,this,1),a(u,this)&&(a(u,this).style.opacity=`0`),l(x,this,E).call(this),e();return}l(x,this,O).call(this,1,()=>{a(u,this)&&(a(u,this).style.transition=`opacity 0.4s`,a(u,this).style.opacity=`0`),setTimeout(e,400)})})}async complete(){await this.runCompleteAnimation(),this.dispatchEvent(new CustomEvent(`craft-complete`,{bubbles:!0,composed:!0}))}render(){return e`
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
    `}};function C(){let e=getComputedStyle(this),t=parseFloat(e.getPropertyValue(`--_size`)),n=parseFloat(e.getPropertyValue(`--_stroke-width`)),r=window.devicePixelRatio>1?2:1;c(d,this,t*r),c(f,this,a(d,this)/2),c(m,this,n*r),c(p,this,(t/2-n/2)*r),a(u,this)&&(a(u,this).width=a(d,this),a(u,this).height=a(d,this))}function w(){if(this.progress>=0&&a(v,this)!==null&&(cancelAnimationFrame(a(v,this)),c(v,this,null),c(_,this,0)),this.progress<0){a(v,this)===null&&l(x,this,T).call(this);return}let e=this.progress/100;if(this.autoComplete&&this.progress>=100&&a(y,this)<100){c(y,this,this.progress),this.complete();return}a(y,this)>0&&this.progress>a(y,this)&&!a(b,this)?l(x,this,O).call(this,e):(c(h,this,e),l(x,this,E).call(this)),c(y,this,this.progress)}function T(){if(a(b,this)){c(h,this,.25),l(x,this,E).call(this);return}let e=()=>{c(_,this,a(_,this)+.05),c(h,this,.15+.1*Math.sin(a(_,this)*3)),l(x,this,E).call(this),c(v,this,requestAnimationFrame(e))};c(v,this,requestAnimationFrame(e))}function E(){let e=a(u,this)?.getContext(`2d`);if(e){if(e.clearRect(0,0,a(d,this),a(d,this)),this.failed){l(x,this,D).call(this,e,this.failColor,1,0);return}if(l(x,this,D).call(this,e,this.bgColor,1,0),a(h,this)>0){let t=this.progress<0?a(_,this):-Math.PI/2;l(x,this,D).call(this,e,this.color,a(h,this),t)}}}function D(e,t,n,r){e.strokeStyle=t,e.lineWidth=a(m,this),e.lineCap=`round`,e.beginPath(),e.arc(a(f,this),a(f,this),a(p,this),r,r+n*2*Math.PI),e.stroke()}function O(e,t){l(x,this,k).call(this);let n=performance.now(),r=a(h,this),i=a=>{let o=a-n,s=Math.min(o/500,1),u=1-(1-s)**3;c(h,this,r+(e-r)*u),l(x,this,E).call(this),s<1?c(g,this,requestAnimationFrame(i)):(c(g,this,null),t?.())};c(g,this,requestAnimationFrame(i))}function k(){a(g,this)!==null&&(cancelAnimationFrame(a(g,this)),c(g,this,null)),a(v,this)!==null&&(cancelAnimationFrame(a(v,this)),c(v,this,null))}S.styles=t`
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