import{f as e,n as t,r as n,u as r}from"./decorators-lVTfPMaS.js";import{c as i,l as a,o,s,u as c}from"./http.ts-DqpDJgPF.js";function l(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}var u=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,m=new WeakMap,h=new WeakMap,g=new WeakMap,_=new WeakMap,v=new WeakMap,y=new WeakMap,b=new WeakMap,x=new WeakSet,S=class extends n{constructor(...e){super(...e),a(this,x),this.progress=0,this.failed=!1,this.color=`currentColor`,this.bgColor=`#a3afbb`,this.failColor=`#da5a47`,this.label=`Progress`,this.autoComplete=!1,s(this,u,null),s(this,d,0),s(this,f,0),s(this,p,0),s(this,m,0),s(this,h,0),s(this,g,null),s(this,_,0),s(this,v,null),s(this,y,0),s(this,b,!1)}connectedCallback(){super.connectedCallback(),i(b,this,window.matchMedia(`(prefers-reduced-motion: reduce)`).matches)}disconnectedCallback(){super.disconnectedCallback(),c(x,this,k).call(this)}firstUpdated(){i(u,this,this.renderRoot.querySelector(`canvas`)),c(x,this,C).call(this),c(x,this,w).call(this)}updated(e){e.has(`progress`)?c(x,this,w).call(this):(e.has(`color`)||e.has(`bgColor`)||e.has(`failColor`)||e.has(`failed`))&&c(x,this,E).call(this)}get canvas(){return o(u,this)}get prefersReducedMotion(){return o(b,this)}runCompleteAnimation(){return new Promise(e=>{if(o(b,this)){i(h,this,1),o(u,this)&&(o(u,this).style.opacity=`0`),c(x,this,E).call(this),e();return}c(x,this,O).call(this,1,()=>{o(u,this)&&(o(u,this).style.transition=`opacity 0.4s`,o(u,this).style.opacity=`0`),setTimeout(e,400)})})}async complete(){await this.runCompleteAnimation(),this.dispatchEvent(new CustomEvent(`craft-complete`,{bubbles:!0,composed:!0}))}render(){return r`
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
    `}};function C(){let e=getComputedStyle(this),t=parseFloat(e.getPropertyValue(`--_size`)),n=parseFloat(e.getPropertyValue(`--_stroke-width`)),r=window.devicePixelRatio>1?2:1;i(d,this,t*r),i(f,this,o(d,this)/2),i(m,this,n*r),i(p,this,(t/2-n/2)*r),o(u,this)&&(o(u,this).width=o(d,this),o(u,this).height=o(d,this))}function w(){if(this.progress>=0&&o(v,this)!==null&&(cancelAnimationFrame(o(v,this)),i(v,this,null),i(_,this,0)),this.progress<0){o(v,this)===null&&c(x,this,T).call(this);return}let e=this.progress/100;if(this.autoComplete&&this.progress>=100&&o(y,this)<100){i(y,this,this.progress),this.complete();return}o(y,this)>0&&this.progress>o(y,this)&&!o(b,this)?c(x,this,O).call(this,e):(i(h,this,e),c(x,this,E).call(this)),i(y,this,this.progress)}function T(){if(o(b,this)){i(h,this,.25),c(x,this,E).call(this);return}let e=()=>{i(_,this,o(_,this)+.05),i(h,this,.15+.1*Math.sin(o(_,this)*3)),c(x,this,E).call(this),i(v,this,requestAnimationFrame(e))};i(v,this,requestAnimationFrame(e))}function E(){let e=o(u,this)?.getContext(`2d`);if(e){if(e.clearRect(0,0,o(d,this),o(d,this)),this.failed){c(x,this,D).call(this,e,this.failColor,1,0);return}if(c(x,this,D).call(this,e,this.bgColor,1,0),o(h,this)>0){let t=this.progress<0?o(_,this):-Math.PI/2;c(x,this,D).call(this,e,this.color,o(h,this),t)}}}function D(e,t,n,r){e.strokeStyle=t,e.lineWidth=o(m,this),e.lineCap=`round`,e.beginPath(),e.arc(o(f,this),o(f,this),o(p,this),r,r+n*2*Math.PI),e.stroke()}function O(e,t){c(x,this,k).call(this);let n=performance.now(),r=o(h,this),a=o=>{let s=o-n,l=Math.min(s/500,1),u=1-(1-l)**3;i(h,this,r+(e-r)*u),c(x,this,E).call(this),l<1?i(g,this,requestAnimationFrame(a)):(i(g,this,null),t?.())};i(g,this,requestAnimationFrame(a))}function k(){o(g,this)!==null&&(cancelAnimationFrame(o(g,this)),i(g,this,null)),o(v,this)!==null&&(cancelAnimationFrame(o(v,this)),i(v,this,null))}S.styles=e`
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
      inset-block-start: 0;
      inset-inline-start: 0;
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
  `,l([t({type:Number})],S.prototype,`progress`,void 0),l([t({type:Boolean})],S.prototype,`failed`,void 0),l([t({type:String})],S.prototype,`color`,void 0),l([t({type:String,attribute:`bg-color`})],S.prototype,`bgColor`,void 0),l([t({type:String,attribute:`fail-color`})],S.prototype,`failColor`,void 0),l([t({type:String})],S.prototype,`label`,void 0),l([t({type:Boolean,attribute:`auto-complete`})],S.prototype,`autoComplete`,void 0),customElements.get(`craft-progress`)||customElements.define(`craft-progress`,S);export{l as t};