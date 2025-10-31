import{i as oi,x as E,a as ri}from"./iframe-CXDqws0b.js";import{r as Be,e as jt,n as D,t as si,o as et}from"./query-Bgk1JvUp.js";import"./it-button-GG-ZkDmX.js";import"./it-dropdown-item-BhJzuVog.js";import"./it-icon-CLY6zOjc.js";import"./preload-helper-Dp1pzeXC.js";import"./directive-CvdRHFdJ.js";function x(e,t,i,n){var o=arguments.length,r=o<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(o<3?s(r):o>3?s(t,i,r):s(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r}function A(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)}function We(e){var t,i,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(i=We(e[t]))&&(n&&(n+=" "),n+=i)}else for(i in e)e[i]&&(n&&(n+=" "),n+=i);return n}function ai(){for(var e,t,i=0,n="",o=arguments.length;i<o;i++)(e=arguments[i])&&(t=We(e))&&(n&&(n+=" "),n+=t);return n}const It=new Set;window&&!window.translations&&(window.translations=new Map);const{translations:ot}=window;let tt,qt="ltr",Ht="en";const je=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";function qe(){je&&(qt=document.documentElement.dir||"ltr",Ht=document.documentElement.lang||navigator.language),[...It.keys()].forEach(e=>{const t=e;typeof t.requestUpdate=="function"&&t.requestUpdate()})}if(je){const e=new MutationObserver(qe);qt=document.documentElement.dir||"ltr",Ht=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function He(...e){e.forEach(t=>{const i=t.$code.toLowerCase();ot.has(i)?ot.set(i,{...ot.get(i),...t}):ot.set(i,t),tt||(tt=t)}),qe()}window.registerTranslation=He;class li{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){It.add(this.host)}hostDisconnected(){It.delete(this.host)}dir(){return`${this.host.dir||qt}`.toLowerCase()}lang(){return`${this.host.lang||Ht}`.toLowerCase()}getTranslationData(t){var a;const i=new Intl.Locale(t.replace(/_/g,"-")),n=i==null?void 0:i.language.toLowerCase(),o=((a=i==null?void 0:i.region)==null?void 0:a.toLowerCase())??"",r=ot.get(`${n}-${o}`),s=ot.get(n);return{locale:i,language:n,region:o,primary:r,secondary:s}}exists(t,i){const{primary:n,secondary:o}=this.getTranslationData(i.lang??this.lang()),r={includeFallback:!1,...i};return!!(n&&n[t]||o&&o[t]||r.includeFallback&&tt&&tt[t])}term(t,...i){const{primary:n,secondary:o}=this.getTranslationData(this.lang());let r;if(n&&n[t])r=n[t];else if(o&&o[t])r=o[t];else if(tt&&tt[t])r=tt[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof r=="function"?r(...i):r}date(t,i){const n=new Date(t);return new Intl.DateTimeFormat(this.lang(),i).format(n)}number(t,i){const n=Number(t);return Number.isNaN(n)?"":new Intl.NumberFormat(this.lang(),i).format(n)}relativeTime(t,i,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(t,i)}}const di=e=>class extends e{constructor(){super(...arguments),this.localize=new li(this)}get $localize(){return this.localize}$t(t){return this.localize.term(t)}$d(t,i){return this.localize.date(t,i)}$n(t,i){return this.localize.number(t,i)}};class ci{constructor(t){this.tag=t}format(t,i){return[`[${this.tag}] ${i}`]}warn(t){console.warn(...this.format("warn",t))}error(t){console.error(...this.format("error",t))}info(t){console.info(...this.format("info",t))}}class Ue extends ri{constructor(){super(),this.composeClass=ai,this.logger=new ci(this.tagName.toLowerCase())}get _ariaAttributes(){const t={};for(const i of this.getAttributeNames())i==="it-role"?t.role=this.getAttribute(i):i.startsWith("it-aria-")&&(t[i.replace(/^it-/,"")]=this.getAttribute(i));return t}generateId(t){return`${t}-${Math.random().toString(36).slice(2)}`}addFocus(t){}getActiveElement(){let t=document.activeElement;for(;t&&t.shadowRoot&&t.shadowRoot.activeElement;)t=t.shadowRoot.activeElement;return t}get focusElement(){return this}get prefersReducedMotion(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}connectedCallback(){var i;super.connectedCallback();const t=((i=this.id)==null?void 0:i.length)>0?this.id:this.tagName.toLowerCase();this._id=this.generateId(t)}}const mi=di(Ue),ct=new WeakMap,mt=new WeakMap,pt=new WeakMap,Pt=new WeakSet,ht=new WeakMap;class pi{constructor(t,i){this.handleFormData=n=>{const o=this.options.disabled(this.host),r=this.options.name(this.host),s=this.options.value(this.host),a=this.host.tagName.toLowerCase(),d=a==="it-button";if(this.host.isConnected&&!o&&!d&&typeof r=="string"&&r.length>0&&typeof s<"u")switch(a){case"it-radio":this.host.checked&&n.formData.append(r,s);break;default:Array.isArray(s)?s.forEach(l=>{n.formData.append(r,l.toString())}):n.formData.append(r,s.toString())}},this.handleFormSubmit=n=>{var s;const o=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&((s=ct.get(this.form))==null||s.forEach(a=>{this.setUserInteracted(a,!0)})),this.form&&!this.form.noValidate&&!o&&!r(this.host)&&n.preventDefault()},this.handleFormReset=()=>{this.options.setValue(this.host,""),this.setUserInteracted(this.host,!1),ht.set(this.host,[])},this.handleInteraction=n=>{const o=ht.get(this.host);o.includes(n.type)||o.push(n.type),o.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const n=this.form.querySelectorAll("*");for(const o of n)if(typeof o.checkValidity=="function"&&!o.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const n=this.form.querySelectorAll("*");for(const o of n)if(typeof o.reportValidity=="function"&&!o.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options={form:n=>{const o=n.form;if(o){const s=n.getRootNode().querySelector(`#${o}`);if(s)return s}return n.closest("form")},name:n=>n.name,value:n=>n.value,disabled:n=>n.disabled??!1,reportValidity:n=>typeof n.reportValidity=="function"?n.reportValidity():!0,checkValidity:n=>typeof n.checkValidity=="function"?n.checkValidity():!0,setValue:(n,o)=>{n.value=o},assumeInteractionOn:["it-input"],...i}}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),ht.set(this.host,[]),this.options.assumeInteractionOn.forEach(i=>{this.host.addEventListener(i,this.handleInteraction)})}hostDisconnected(){this.detachForm(),ht.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,ct.has(this.form)?ct.get(this.form).add(this.host):ct.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),mt.has(this.form)||(mt.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),pt.has(this.form)||(pt.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=ct.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),mt.has(this.form)&&(this.form.reportValidity=mt.get(this.form),mt.delete(this.form)),pt.has(this.form)&&(this.form.checkValidity=pt.get(this.form),pt.delete(this.form)),this.form=void 0))}setUserInteracted(t,i){i?Pt.add(t):Pt.delete(t),t.requestUpdate()}doAction(t,i){if(this.form){const n=document.createElement("button");n.type=t,n.style.position="absolute",n.style.width="0",n.style.height="0",n.style.clipPath="inset(50%)",n.style.overflow="hidden",n.style.whiteSpace="nowrap",i&&(n.name=i.name,n.value=i.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(o=>{i.hasAttribute(o)&&n.setAttribute(o,i.getAttribute(o))})),this.form.append(n),n.click(),n.remove()}}getForm(){return this.form??null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const i=this.host,n=!!Pt.has(i),o=!!i.required;i.toggleAttribute("data-required",o),i.toggleAttribute("data-optional",!o),i.toggleAttribute("data-invalid",!t),i.toggleAttribute("data-valid",t),i.toggleAttribute("data-user-invalid",!t&&n),i.toggleAttribute("data-user-valid",t&&n)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const i=new CustomEvent("it-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||i.preventDefault(),this.host.dispatchEvent(i)||t==null||t.preventDefault()}}const ui={$code:"it",$name:"Italiano",$dir:"ltr",validityRequired:"Questo campo è obbligatorio.",validityPattern:"Il valore non corrisponde al formato richiesto.",validityMinlength:"Il valore deve essere lungo almeno {minlength} caratteri.",validityMaxlength:"Il valore deve essere lungo al massimo {maxlength} caratteri."};He(ui);class S extends mi{constructor(){super(...arguments),this.formControlController=new pi(this,{assumeInteractionOn:["it-input","it-blur","it-change"]}),this._touched=!1,this.name="",this.value="",this.disabled=!1,this.form="",this.customValidation=!1,this.validationText="",this.step="any",this.minlength=-1,this.maxlength=-1,this.required=!1,this.validationMessage=""}get validity(){var t;return(t=this.inputElement)==null?void 0:t.validity}checkValidity(){var i;return((i=this.inputElement)==null?void 0:i.checkValidity())??!0}getForm(){return this.formControlController.getForm()}reportValidity(){const t=this.inputElement.checkValidity();return this.handleValidationMessages(),t}setCustomValidity(t){this.inputElement.setCustomValidity(t),this.validationMessage=this.inputElement.validationMessage,this.formControlController.updateValidity()}_handleReady(){requestAnimationFrame(()=>{this.dispatchEvent(new CustomEvent("it-input-ready",{bubbles:!0,detail:{el:this.inputElement}}))})}_handleInput(t){this.handleValidationMessages(),this.dispatchEvent(new CustomEvent("it-input",{detail:{value:this.inputElement.value,el:this.inputElement},bubbles:!0,composed:!0}))}_handleBlur(t){this._touched=!0,this.handleValidationMessages(),this.dispatchEvent(new FocusEvent("it-blur",{bubbles:!0,composed:!0}))}_handleFocus(t){this.dispatchEvent(new FocusEvent("it-focus",{bubbles:!0,composed:!0}))}_handleClick(t){this.dispatchEvent(new MouseEvent("it-click",{bubbles:!0,composed:!0}))}handleValidationMessages(){if(!this.customValidation){const t=this.inputElement.validity;t.valueMissing?this.setCustomValidity(this.$t("validityRequired")):t.patternMismatch?this.setCustomValidity(this.$t("validityPattern")):t.tooShort?this.setCustomValidity(this.$t("validityMinlength").replace("{minlength}",this.minlength.toString())):t.tooLong?this.setCustomValidity(this.$t("validityMaxlength").replace("{maxlength}",this.maxlength.toString())):t.typeMismatch||t.rangeUnderflow||t.rangeOverflow||t.stepMismatch||t.badInput||this.setCustomValidity("")}this.validationMessage=this.inputElement.validationMessage}_handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}_handleChange(t){const i=t.target;let n;if(i instanceof HTMLInputElement)switch(i.type){case"checkbox":case"radio":n=i.checked;break;case"file":n=i.files;break;default:n=i.value}else i instanceof HTMLSelectElement&&i.multiple?n=Array.from(i.selectedOptions).map(o=>o.value):n=i.value;this.dispatchEvent(new CustomEvent("it-change",{detail:{value:n,el:i},bubbles:!0,composed:!0}))}updated(t){var i;(i=super.updated)==null||i.call(this,t),this.customValidation?this.setCustomValidity(this.validationText??""):this.formControlController.updateValidity()}}x([Be(),A("design:type",Object)],S.prototype,"_touched",void 0);x([jt(".it-form__control"),A("design:type",HTMLInputElement)],S.prototype,"inputElement",void 0);x([D({type:String,reflect:!0}),A("design:type",Object)],S.prototype,"name",void 0);x([D({reflect:!0}),A("design:type",Object)],S.prototype,"value",void 0);x([D({type:Boolean,reflect:!0}),A("design:type",Object)],S.prototype,"disabled",void 0);x([D({reflect:!0,type:String}),A("design:type",Object)],S.prototype,"form",void 0);x([D({type:Boolean,reflect:!0,attribute:"custom-validation"}),A("design:type",Object)],S.prototype,"customValidation",void 0);x([D({attribute:"validity-message",reflect:!0}),A("design:type",String)],S.prototype,"validationText",void 0);x([D(),A("design:type",String)],S.prototype,"pattern",void 0);x([D(),A("design:type",Object)],S.prototype,"min",void 0);x([D(),A("design:type",Object)],S.prototype,"max",void 0);x([D(),A("design:type",Object)],S.prototype,"step",void 0);x([D({type:Number}),A("design:type",Object)],S.prototype,"minlength",void 0);x([D({type:Number}),A("design:type",Object)],S.prototype,"maxlength",void 0);x([D({type:Boolean,reflect:!0}),A("design:type",Object)],S.prototype,"required",void 0);x([Be(),A("design:type",Object)],S.prototype,"validationMessage",void 0);const Q=Math.min,O=Math.max,Ot=Math.round,gt=Math.floor,N=e=>({x:e,y:e}),fi={left:"right",right:"left",bottom:"top",top:"bottom"},hi={start:"end",end:"start"};function Nt(e,t,i){return O(e,Q(t,i))}function at(e,t){return typeof e=="function"?e(t):e}function K(e){return e.split("-")[0]}function lt(e){return e.split("-")[1]}function Xe(e){return e==="x"?"y":"x"}function Ut(e){return e==="y"?"height":"width"}const gi=new Set(["top","bottom"]);function U(e){return gi.has(K(e))?"y":"x"}function Xt(e){return Xe(U(e))}function wi(e,t,i){i===void 0&&(i=!1);const n=lt(e),o=Xt(e),r=Ut(o);let s=o==="x"?n===(i?"end":"start")?"right":"left":n==="start"?"bottom":"top";return t.reference[r]>t.floating[r]&&(s=Mt(s)),[s,Mt(s)]}function vi(e){const t=Mt(e);return[Bt(e),t,Bt(t)]}function Bt(e){return e.replace(/start|end/g,t=>hi[t])}const Jt=["left","right"],Zt=["right","left"],bi=["top","bottom"],yi=["bottom","top"];function xi(e,t,i){switch(e){case"top":case"bottom":return i?t?Zt:Jt:t?Jt:Zt;case"left":case"right":return t?bi:yi;default:return[]}}function Ai(e,t,i,n){const o=lt(e);let r=xi(K(e),i==="start",n);return o&&(r=r.map(s=>s+"-"+o),t&&(r=r.concat(r.map(Bt)))),r}function Mt(e){return e.replace(/left|right|bottom|top/g,t=>fi[t])}function zi(e){return{top:0,right:0,bottom:0,left:0,...e}}function Ye(e){return typeof e!="number"?zi(e):{top:e,right:e,bottom:e,left:e}}function Tt(e){const{x:t,y:i,width:n,height:o}=e;return{width:n,height:o,top:i,left:t,right:t+n,bottom:i+o,x:t,y:i}}function te(e,t,i){let{reference:n,floating:o}=e;const r=U(t),s=Xt(t),a=Ut(s),d=K(t),l=r==="y",c=n.x+n.width/2-o.width/2,p=n.y+n.height/2-o.height/2,f=n[a]/2-o[a]/2;let m;switch(d){case"top":m={x:c,y:n.y-o.height};break;case"bottom":m={x:c,y:n.y+n.height};break;case"right":m={x:n.x+n.width,y:p};break;case"left":m={x:n.x-o.width,y:p};break;default:m={x:n.x,y:n.y}}switch(lt(t)){case"start":m[s]-=f*(i&&l?-1:1);break;case"end":m[s]+=f*(i&&l?-1:1);break}return m}const Ei=async(e,t,i)=>{const{placement:n="bottom",strategy:o="absolute",middleware:r=[],platform:s}=i,a=r.filter(Boolean),d=await(s.isRTL==null?void 0:s.isRTL(t));let l=await s.getElementRects({reference:e,floating:t,strategy:o}),{x:c,y:p}=te(l,n,d),f=n,m={},u=0;for(let h=0;h<a.length;h++){const{name:w,fn:g}=a[h],{x:v,y:b,data:z,reset:y}=await g({x:c,y:p,initialPlacement:n,placement:f,strategy:o,middlewareData:m,rects:l,platform:s,elements:{reference:e,floating:t}});c=v??c,p=b??p,m={...m,[w]:{...m[w],...z}},y&&u<=50&&(u++,typeof y=="object"&&(y.placement&&(f=y.placement),y.rects&&(l=y.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:o}):y.rects),{x:c,y:p}=te(l,f,d)),h=-1)}return{x:c,y:p,placement:f,strategy:o,middlewareData:m}};async function Yt(e,t){var i;t===void 0&&(t={});const{x:n,y:o,platform:r,rects:s,elements:a,strategy:d}=e,{boundary:l="clippingAncestors",rootBoundary:c="viewport",elementContext:p="floating",altBoundary:f=!1,padding:m=0}=at(t,e),u=Ye(m),w=a[f?p==="floating"?"reference":"floating":p],g=Tt(await r.getClippingRect({element:(i=await(r.isElement==null?void 0:r.isElement(w)))==null||i?w:w.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(a.floating)),boundary:l,rootBoundary:c,strategy:d})),v=p==="floating"?{x:n,y:o,width:s.floating.width,height:s.floating.height}:s.reference,b=await(r.getOffsetParent==null?void 0:r.getOffsetParent(a.floating)),z=await(r.isElement==null?void 0:r.isElement(b))?await(r.getScale==null?void 0:r.getScale(b))||{x:1,y:1}:{x:1,y:1},y=Tt(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:v,offsetParent:b,strategy:d}):v);return{top:(g.top-y.top+u.top)/z.y,bottom:(y.bottom-g.bottom+u.bottom)/z.y,left:(g.left-y.left+u.left)/z.x,right:(y.right-g.right+u.right)/z.x}}const Ci=e=>({name:"arrow",options:e,async fn(t){const{x:i,y:n,placement:o,rects:r,platform:s,elements:a,middlewareData:d}=t,{element:l,padding:c=0}=at(e,t)||{};if(l==null)return{};const p=Ye(c),f={x:i,y:n},m=Xt(o),u=Ut(m),h=await s.getDimensions(l),w=m==="y",g=w?"top":"left",v=w?"bottom":"right",b=w?"clientHeight":"clientWidth",z=r.reference[u]+r.reference[m]-f[m]-r.floating[u],y=f[m]-r.reference[m],_=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l));let C=_?_[b]:0;(!C||!await(s.isElement==null?void 0:s.isElement(_)))&&(C=a.floating[b]||r.floating[u]);const q=z/2-y/2,F=C/2-h[u]/2-1,R=Q(p[g],F),X=Q(p[v],F),I=R,Y=C-h[u]-X,$=C/2-h[u]/2+q,Z=Nt(I,$,Y),H=!d.arrow&&lt(o)!=null&&$!==Z&&r.reference[u]/2-($<I?R:X)-h[u]/2<0,L=H?$<I?$-I:$-Y:0;return{[m]:f[m]+L,data:{[m]:Z,centerOffset:$-Z-L,...H&&{alignmentOffset:L}},reset:H}}}),Si=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var i,n;const{placement:o,middlewareData:r,rects:s,initialPlacement:a,platform:d,elements:l}=t,{mainAxis:c=!0,crossAxis:p=!0,fallbackPlacements:f,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:u="none",flipAlignment:h=!0,...w}=at(e,t);if((i=r.arrow)!=null&&i.alignmentOffset)return{};const g=K(o),v=U(a),b=K(a)===a,z=await(d.isRTL==null?void 0:d.isRTL(l.floating)),y=f||(b||!h?[Mt(a)]:vi(a)),_=u!=="none";!f&&_&&y.push(...Ai(a,h,u,z));const C=[a,...y],q=await Yt(t,w),F=[];let R=((n=r.flip)==null?void 0:n.overflows)||[];if(c&&F.push(q[g]),p){const $=wi(o,s,z);F.push(q[$[0]],q[$[1]])}if(R=[...R,{placement:o,overflows:F}],!F.every($=>$<=0)){var X,I;const $=(((X=r.flip)==null?void 0:X.index)||0)+1,Z=C[$];if(Z&&(!(p==="alignment"?v!==U(Z):!1)||R.every(k=>U(k.placement)===v?k.overflows[0]>0:!0)))return{data:{index:$,overflows:R},reset:{placement:Z}};let H=(I=R.filter(L=>L.overflows[0]<=0).sort((L,k)=>L.overflows[1]-k.overflows[1])[0])==null?void 0:I.placement;if(!H)switch(m){case"bestFit":{var Y;const L=(Y=R.filter(k=>{if(_){const G=U(k.placement);return G===v||G==="y"}return!0}).map(k=>[k.placement,k.overflows.filter(G=>G>0).reduce((G,ni)=>G+ni,0)]).sort((k,G)=>k[1]-G[1])[0])==null?void 0:Y[0];L&&(H=L);break}case"initialPlacement":H=a;break}if(o!==H)return{reset:{placement:H}}}return{}}}},$i=new Set(["left","top"]);async function Di(e,t){const{placement:i,platform:n,elements:o}=e,r=await(n.isRTL==null?void 0:n.isRTL(o.floating)),s=K(i),a=lt(i),d=U(i)==="y",l=$i.has(s)?-1:1,c=r&&d?-1:1,p=at(t,e);let{mainAxis:f,crossAxis:m,alignmentAxis:u}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:p.mainAxis||0,crossAxis:p.crossAxis||0,alignmentAxis:p.alignmentAxis};return a&&typeof u=="number"&&(m=a==="end"?u*-1:u),d?{x:m*c,y:f*l}:{x:f*l,y:m*c}}const Oi=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var i,n;const{x:o,y:r,placement:s,middlewareData:a}=t,d=await Di(t,e);return s===((i=a.offset)==null?void 0:i.placement)&&(n=a.arrow)!=null&&n.alignmentOffset?{}:{x:o+d.x,y:r+d.y,data:{...d,placement:s}}}}},Mi=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:i,y:n,placement:o}=t,{mainAxis:r=!0,crossAxis:s=!1,limiter:a={fn:w=>{let{x:g,y:v}=w;return{x:g,y:v}}},...d}=at(e,t),l={x:i,y:n},c=await Yt(t,d),p=U(K(o)),f=Xe(p);let m=l[f],u=l[p];if(r){const w=f==="y"?"top":"left",g=f==="y"?"bottom":"right",v=m+c[w],b=m-c[g];m=Nt(v,m,b)}if(s){const w=p==="y"?"top":"left",g=p==="y"?"bottom":"right",v=u+c[w],b=u-c[g];u=Nt(v,u,b)}const h=a.fn({...t,[f]:m,[p]:u});return{...h,data:{x:h.x-i,y:h.y-n,enabled:{[f]:r,[p]:s}}}}}},Ti=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var i,n;const{placement:o,rects:r,platform:s,elements:a}=t,{apply:d=()=>{},...l}=at(e,t),c=await Yt(t,l),p=K(o),f=lt(o),m=U(o)==="y",{width:u,height:h}=r.floating;let w,g;p==="top"||p==="bottom"?(w=p,g=f===(await(s.isRTL==null?void 0:s.isRTL(a.floating))?"start":"end")?"left":"right"):(g=p,w=f==="end"?"top":"bottom");const v=h-c.top-c.bottom,b=u-c.left-c.right,z=Q(h-c[w],v),y=Q(u-c[g],b),_=!t.middlewareData.shift;let C=z,q=y;if((i=t.middlewareData.shift)!=null&&i.enabled.x&&(q=b),(n=t.middlewareData.shift)!=null&&n.enabled.y&&(C=v),_&&!f){const R=O(c.left,0),X=O(c.right,0),I=O(c.top,0),Y=O(c.bottom,0);m?q=u-2*(R!==0||X!==0?R+X:O(c.left,c.right)):C=h-2*(I!==0||Y!==0?I+Y:O(c.top,c.bottom))}await d({...t,availableWidth:q,availableHeight:C});const F=await s.getDimensions(a.floating);return u!==F.width||h!==F.height?{reset:{rects:!0}}:{}}}};function Rt(){return typeof window<"u"}function dt(e){return Ge(e)?(e.nodeName||"").toLowerCase():"#document"}function M(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function W(e){var t;return(t=(Ge(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Ge(e){return Rt()?e instanceof Node||e instanceof M(e).Node:!1}function V(e){return Rt()?e instanceof Element||e instanceof M(e).Element:!1}function B(e){return Rt()?e instanceof HTMLElement||e instanceof M(e).HTMLElement:!1}function ee(e){return!Rt()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof M(e).ShadowRoot}const Ri=new Set(["inline","contents"]);function ft(e){const{overflow:t,overflowX:i,overflowY:n,display:o}=P(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+i)&&!Ri.has(o)}const _i=new Set(["table","td","th"]);function Li(e){return _i.has(dt(e))}const ki=[":popover-open",":modal"];function _t(e){return ki.some(t=>{try{return e.matches(t)}catch{return!1}})}const Vi=["transform","translate","scale","rotate","perspective"],Pi=["transform","translate","scale","rotate","perspective","filter"],Fi=["paint","layout","strict","content"];function Gt(e){const t=Qt(),i=V(e)?P(e):e;return Vi.some(n=>i[n]?i[n]!=="none":!1)||(i.containerType?i.containerType!=="normal":!1)||!t&&(i.backdropFilter?i.backdropFilter!=="none":!1)||!t&&(i.filter?i.filter!=="none":!1)||Pi.some(n=>(i.willChange||"").includes(n))||Fi.some(n=>(i.contain||"").includes(n))}function Ii(e){let t=J(e);for(;B(t)&&!st(t);){if(Gt(t))return t;if(_t(t))return null;t=J(t)}return null}function Qt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const Ni=new Set(["html","body","#document"]);function st(e){return Ni.has(dt(e))}function P(e){return M(e).getComputedStyle(e)}function Lt(e){return V(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function J(e){if(dt(e)==="html")return e;const t=e.assignedSlot||e.parentNode||ee(e)&&e.host||W(e);return ee(t)?t.host:t}function Qe(e){const t=J(e);return st(t)?e.ownerDocument?e.ownerDocument.body:e.body:B(t)&&ft(t)?t:Qe(t)}function ut(e,t,i){var n;t===void 0&&(t=[]),i===void 0&&(i=!0);const o=Qe(e),r=o===((n=e.ownerDocument)==null?void 0:n.body),s=M(o);if(r){const a=Wt(s);return t.concat(s,s.visualViewport||[],ft(o)?o:[],a&&i?ut(a):[])}return t.concat(o,ut(o,[],i))}function Wt(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Ke(e){const t=P(e);let i=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const o=B(e),r=o?e.offsetWidth:i,s=o?e.offsetHeight:n,a=Ot(i)!==r||Ot(n)!==s;return a&&(i=r,n=s),{width:i,height:n,$:a}}function Kt(e){return V(e)?e:e.contextElement}function rt(e){const t=Kt(e);if(!B(t))return N(1);const i=t.getBoundingClientRect(),{width:n,height:o,$:r}=Ke(t);let s=(r?Ot(i.width):i.width)/n,a=(r?Ot(i.height):i.height)/o;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}const Bi=N(0);function Je(e){const t=M(e);return!Qt()||!t.visualViewport?Bi:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Wi(e,t,i){return t===void 0&&(t=!1),!i||t&&i!==M(e)?!1:t}function it(e,t,i,n){t===void 0&&(t=!1),i===void 0&&(i=!1);const o=e.getBoundingClientRect(),r=Kt(e);let s=N(1);t&&(n?V(n)&&(s=rt(n)):s=rt(e));const a=Wi(r,i,n)?Je(r):N(0);let d=(o.left+a.x)/s.x,l=(o.top+a.y)/s.y,c=o.width/s.x,p=o.height/s.y;if(r){const f=M(r),m=n&&V(n)?M(n):n;let u=f,h=Wt(u);for(;h&&n&&m!==u;){const w=rt(h),g=h.getBoundingClientRect(),v=P(h),b=g.left+(h.clientLeft+parseFloat(v.paddingLeft))*w.x,z=g.top+(h.clientTop+parseFloat(v.paddingTop))*w.y;d*=w.x,l*=w.y,c*=w.x,p*=w.y,d+=b,l+=z,u=M(h),h=Wt(u)}}return Tt({width:c,height:p,x:d,y:l})}function kt(e,t){const i=Lt(e).scrollLeft;return t?t.left+i:it(W(e)).left+i}function Ze(e,t){const i=e.getBoundingClientRect(),n=i.left+t.scrollLeft-kt(e,i),o=i.top+t.scrollTop;return{x:n,y:o}}function ji(e){let{elements:t,rect:i,offsetParent:n,strategy:o}=e;const r=o==="fixed",s=W(n),a=t?_t(t.floating):!1;if(n===s||a&&r)return i;let d={scrollLeft:0,scrollTop:0},l=N(1);const c=N(0),p=B(n);if((p||!p&&!r)&&((dt(n)!=="body"||ft(s))&&(d=Lt(n)),B(n))){const m=it(n);l=rt(n),c.x=m.x+n.clientLeft,c.y=m.y+n.clientTop}const f=s&&!p&&!r?Ze(s,d):N(0);return{width:i.width*l.x,height:i.height*l.y,x:i.x*l.x-d.scrollLeft*l.x+c.x+f.x,y:i.y*l.y-d.scrollTop*l.y+c.y+f.y}}function qi(e){return Array.from(e.getClientRects())}function Hi(e){const t=W(e),i=Lt(e),n=e.ownerDocument.body,o=O(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),r=O(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let s=-i.scrollLeft+kt(e);const a=-i.scrollTop;return P(n).direction==="rtl"&&(s+=O(t.clientWidth,n.clientWidth)-o),{width:o,height:r,x:s,y:a}}const ie=25;function Ui(e,t){const i=M(e),n=W(e),o=i.visualViewport;let r=n.clientWidth,s=n.clientHeight,a=0,d=0;if(o){r=o.width,s=o.height;const c=Qt();(!c||c&&t==="fixed")&&(a=o.offsetLeft,d=o.offsetTop)}const l=kt(n);if(l<=0){const c=n.ownerDocument,p=c.body,f=getComputedStyle(p),m=c.compatMode==="CSS1Compat"&&parseFloat(f.marginLeft)+parseFloat(f.marginRight)||0,u=Math.abs(n.clientWidth-p.clientWidth-m);u<=ie&&(r-=u)}else l<=ie&&(r+=l);return{width:r,height:s,x:a,y:d}}const Xi=new Set(["absolute","fixed"]);function Yi(e,t){const i=it(e,!0,t==="fixed"),n=i.top+e.clientTop,o=i.left+e.clientLeft,r=B(e)?rt(e):N(1),s=e.clientWidth*r.x,a=e.clientHeight*r.y,d=o*r.x,l=n*r.y;return{width:s,height:a,x:d,y:l}}function ne(e,t,i){let n;if(t==="viewport")n=Ui(e,i);else if(t==="document")n=Hi(W(e));else if(V(t))n=Yi(t,i);else{const o=Je(e);n={x:t.x-o.x,y:t.y-o.y,width:t.width,height:t.height}}return Tt(n)}function ti(e,t){const i=J(e);return i===t||!V(i)||st(i)?!1:P(i).position==="fixed"||ti(i,t)}function Gi(e,t){const i=t.get(e);if(i)return i;let n=ut(e,[],!1).filter(a=>V(a)&&dt(a)!=="body"),o=null;const r=P(e).position==="fixed";let s=r?J(e):e;for(;V(s)&&!st(s);){const a=P(s),d=Gt(s);!d&&a.position==="fixed"&&(o=null),(r?!d&&!o:!d&&a.position==="static"&&!!o&&Xi.has(o.position)||ft(s)&&!d&&ti(e,s))?n=n.filter(c=>c!==s):o=a,s=J(s)}return t.set(e,n),n}function Qi(e){let{element:t,boundary:i,rootBoundary:n,strategy:o}=e;const s=[...i==="clippingAncestors"?_t(t)?[]:Gi(t,this._c):[].concat(i),n],a=s[0],d=s.reduce((l,c)=>{const p=ne(t,c,o);return l.top=O(p.top,l.top),l.right=Q(p.right,l.right),l.bottom=Q(p.bottom,l.bottom),l.left=O(p.left,l.left),l},ne(t,a,o));return{width:d.right-d.left,height:d.bottom-d.top,x:d.left,y:d.top}}function Ki(e){const{width:t,height:i}=Ke(e);return{width:t,height:i}}function Ji(e,t,i){const n=B(t),o=W(t),r=i==="fixed",s=it(e,!0,r,t);let a={scrollLeft:0,scrollTop:0};const d=N(0);function l(){d.x=kt(o)}if(n||!n&&!r)if((dt(t)!=="body"||ft(o))&&(a=Lt(t)),n){const m=it(t,!0,r,t);d.x=m.x+t.clientLeft,d.y=m.y+t.clientTop}else o&&l();r&&!n&&o&&l();const c=o&&!n&&!r?Ze(o,a):N(0),p=s.left+a.scrollLeft-d.x-c.x,f=s.top+a.scrollTop-d.y-c.y;return{x:p,y:f,width:s.width,height:s.height}}function Ft(e){return P(e).position==="static"}function oe(e,t){if(!B(e)||P(e).position==="fixed")return null;if(t)return t(e);let i=e.offsetParent;return W(e)===i&&(i=i.ownerDocument.body),i}function ei(e,t){const i=M(e);if(_t(e))return i;if(!B(e)){let o=J(e);for(;o&&!st(o);){if(V(o)&&!Ft(o))return o;o=J(o)}return i}let n=oe(e,t);for(;n&&Li(n)&&Ft(n);)n=oe(n,t);return n&&st(n)&&Ft(n)&&!Gt(n)?i:n||Ii(e)||i}const Zi=async function(e){const t=this.getOffsetParent||ei,i=this.getDimensions,n=await i(e.floating);return{reference:Ji(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function tn(e){return P(e).direction==="rtl"}const en={convertOffsetParentRelativeRectToViewportRelativeRect:ji,getDocumentElement:W,getClippingRect:Qi,getOffsetParent:ei,getElementRects:Zi,getClientRects:qi,getDimensions:Ki,getScale:rt,isElement:V,isRTL:tn};function ii(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function nn(e,t){let i=null,n;const o=W(e);function r(){var a;clearTimeout(n),(a=i)==null||a.disconnect(),i=null}function s(a,d){a===void 0&&(a=!1),d===void 0&&(d=1),r();const l=e.getBoundingClientRect(),{left:c,top:p,width:f,height:m}=l;if(a||t(),!f||!m)return;const u=gt(p),h=gt(o.clientWidth-(c+f)),w=gt(o.clientHeight-(p+m)),g=gt(c),b={rootMargin:-u+"px "+-h+"px "+-w+"px "+-g+"px",threshold:O(0,Q(1,d))||1};let z=!0;function y(_){const C=_[0].intersectionRatio;if(C!==d){if(!z)return s();C?s(!1,C):n=setTimeout(()=>{s(!1,1e-7)},1e3)}C===1&&!ii(l,e.getBoundingClientRect())&&s(),z=!1}try{i=new IntersectionObserver(y,{...b,root:o.ownerDocument})}catch{i=new IntersectionObserver(y,b)}i.observe(e)}return s(!0),r}function on(e,t,i,n){n===void 0&&(n={});const{ancestorScroll:o=!0,ancestorResize:r=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:d=!1}=n,l=Kt(e),c=o||r?[...l?ut(l):[],...ut(t)]:[];c.forEach(g=>{o&&g.addEventListener("scroll",i,{passive:!0}),r&&g.addEventListener("resize",i)});const p=l&&a?nn(l,i):null;let f=-1,m=null;s&&(m=new ResizeObserver(g=>{let[v]=g;v&&v.target===l&&m&&(m.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var b;(b=m)==null||b.observe(t)})),i()}),l&&!d&&m.observe(l),m.observe(t));let u,h=d?it(e):null;d&&w();function w(){const g=it(e);h&&!ii(h,g)&&i(),h=g,u=requestAnimationFrame(w)}return i(),()=>{var g;c.forEach(v=>{o&&v.removeEventListener("scroll",i),r&&v.removeEventListener("resize",i)}),p==null||p(),(g=m)==null||g.disconnect(),m=null,d&&cancelAnimationFrame(u)}}const rn=Oi,sn=Mi,an=Si,ln=Ti,dn=Ci,cn=(e,t,i)=>{const n=new Map,o={platform:en,...i},r={...o.platform,_c:n};return Ei(e,t,{...o,platform:r})};var mn=oi`/***************************** 1 ****************************************/
/***************************** 2 ****************************************/
/***************************** 1 ****************************************/
/***************************** 2 ****************************************/
/***************************** 1 ****************************************/
/***************************** 2 ****************************************/
/***************************** 3 ****************************************/
/***************************** 1 ****************************************/
/***************************** 2 ****************************************/
/***************************** 3 ****************************************/
/***************************** NEUTRAL 1 ****************************************/
/***************************** NEUTRAL 2 ****************************************/
/***************************** NEUTRAL 2 / 3 ****************************************/
:host {
  --bs-dropdown-background: var(--bs-color-background-inverse);
}`;let nt=class extends Ue{constructor(){super(...arguments),this.open=!1,this.placement="bottom-start",this._onDocumentClick=t=>{if(!this.open)return;const i=t.composedPath();!i.includes(this)&&!i.includes(this._contentElement)&&!i.includes(this._triggerElement)&&(this.open=!1)}}get _triggerElement(){var t;return(t=this._triggerSlot)==null?void 0:t.assignedElements({flatten:!0})[0]}get _contentElement(){var t;return(t=this._contentSlot)==null?void 0:t.assignedElements({flatten:!0})[0]}_setChildrenProperties(){var t,i,n,o;this._triggerElement&&this._triggerElement.tagName==="IT-BUTTON"?(this._triggerElement.hasAttribute("it-aria-haspopup")||(t=this._triggerElement)==null||t.setAttribute("it-aria-haspopup","true"),this._triggerElement.expanded=this.open):((i=this._triggerElement)!=null&&i.hasAttribute("aria-haspopup")||(n=this._triggerElement)==null||n.setAttribute("aria-haspopup","true"),(o=this._triggerElement)==null||o.setAttribute("aria-expanded",String(this.open)))}connectedCallback(){var t;(t=super.connectedCallback)==null||t.call(this),document.addEventListener("click",this._onDocumentClick)}disconnectedCallback(){var t,i;(t=super.disconnectedCallback)==null||t.call(this),document.removeEventListener("click",this._onDocumentClick),(i=this._cleanup)==null||i.call(this)}updated(t){this._setChildrenProperties(),t.has("open")&&(this.open?(this._show(),this.dispatchEvent(new CustomEvent("it-popover-open",{bubbles:!0,composed:!0}))):(this._hide(),this.dispatchEvent(new CustomEvent("it-popover-close",{bubbles:!0,composed:!0}))))}_createArrow(){this._contentElement&&(this._arrowElement||(this._arrowElement=document.createElement("div"),this._arrowElement.className="arrow",this._contentElement.prepend(this._arrowElement)))}_show(){!this._triggerElement||!this._contentElement||(this._contentElement.style.position="absolute",this._contentElement.style.visibility="visible",this._createArrow(),this._cleanup=on(this._triggerElement,this._contentElement,()=>{cn(this._triggerElement,this._contentElement,{placement:this.placement,middleware:[rn(12),an(),sn({padding:8}),ln({apply({rects:t,elements:i}){Object.assign(i.floating.style,{minWidth:`${t.reference.width}px`})}}),dn({element:this._arrowElement})]}).then(({x:t,y:i,placement:n,middlewareData:o})=>{if(Object.assign(this._contentElement.style,{left:`${t}px`,top:`${i}px`}),o.arrow){const{x:r,y:s}=o.arrow,a={top:"bottom",right:"left",bottom:"top",left:"right"}[n.split("-")[0]];Object.assign(this._arrowElement.style,{left:r!=null?"20px":"",top:s!=null?`${s}px`:"",right:"",bottom:"",[a]:"-8px",position:"absolute",transform:"rotate(45deg)"})}})}),this._focusContent())}_hide(){var t;(t=this._cleanup)==null||t.call(this),this._contentElement.style.visibility="hidden"}_focusContent(){var t,i;(i=(t=this._contentElement)==null?void 0:t.focus)==null||i.call(t)}toggle(){this.open=!this.open}openPopover(){this.open=!0}closePopover(){this.open=!1}render(){return E`
      <slot name="trigger" part="trigger" @slotchange=${this._setChildrenProperties}></slot>
      <slot name="content"></slot>
    `}};nt.styles=mn;x([D({type:Boolean,reflect:!0}),A("design:type",Object)],nt.prototype,"open",void 0);x([D({type:String}),A("design:type",String)],nt.prototype,"placement",void 0);x([jt('slot[name="trigger"]'),A("design:type",HTMLSlotElement)],nt.prototype,"_triggerSlot",void 0);x([jt('slot[name="content"]'),A("design:type",HTMLSlotElement)],nt.prototype,"_contentSlot",void 0);nt=x([si("it-popover")],nt);const Vt="height:200px;display:flex;align-items:flex-start;",T={title:"Componenti/Dropdown",component:"it-dropdown",tags:["autodocs"],args:{label:"Apri dropdown",disabled:!1,alignment:void 0,variant:"primary",size:void 0,"it-role":void 0,dark:!1,"full-width":!1},argTypes:{label:{control:"text"},disabled:{control:"boolean"},alignment:{control:"select",options:["top","right","bottom","left","top-start","top-end","right-start","right-end","bottom-start","bottom-end","left-start","left-end"]},variant:{control:"select",options:["primary","secondary","success","danger","warning","light","link"]},size:{control:"select",options:["sm","lg"]},"it-role":{control:"select",options:["menu","list"]},dark:{control:"boolean"},"full-width":{control:"boolean"}},decorators:[e=>E`<div style=${Vt}>${e()}</div>`],parameters:{docs:{description:{component:'\n<Description>Attiva o disattiva overlay contestuali per visualizzare liste di link ed altro ancora con questi menu a tendina.</Description>\n\nPer la creazione di un dropdown è necessario utilizzare il componente `<it-dropdown>` che può contenere al suo interno uno o più `<it-dropdown-item>`.\nÈ necessario specificare l\'etichetta del menu tramite l\'attributo `label`.\nÈ possibile specificare una variante tramite l\'attributo `variant`, questa verrà applicata al pulsante di attivazione del menu.\n\n<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità</span></div>\n<p>Lo standard <a href="https://www.w3.org/TR/wai-aria/">WAI ARIA</a> definisce un widget con proprietà <a href="https://www.w3.org/TR/wai-aria/#menu">`role="menu"`</a>, specifica per i menu applicativi con link o azioni.\nQuesti menu possono contenere solo voci di menu, voci di menu di caselle di controllo, voci di menu dei pulsanti di opzione, gruppi di pulsanti di opzione e sottomenu.</p>\n<p>I dropdown di **Dev Kit Italia** sono progettati per essere invece generici e applicabili a una varietà di situazioni. Per questo motivo, il componente `it-dropdown` ha come ruolo predefinito il ruolo `menu` e gestisce automaticamente il ruolo degli elementi interni, ma gli autori potranno modificare il ruolo del Dropdown generato da questo componente ad una semplice lista impostando l\'attributo `it-role="list"`.</p>\n<p>Questo componente comprende di base il supporto per la maggior parte delle interazioni standard del menu della tastiera, come la possibilità di spostarsi tra i singoli elementi `it-dropdown-item` usando i tasti freccia, e chiude il menu con il tasto ESC.</p>\n</div></div>\n'}}}};function j(e){return Object.keys(T.argTypes).reduce((t,i)=>(e!=null&&e.includes(i)||(t[i]={table:{disable:!0}}),t),{})}const wt={render:e=>E`
    <it-dropdown
      label=${e.label}
      ?disabled=${e.disabled}
      alignment=${et(e.alignment)}
      size=${et(e.size)}
      variant=${e.variant}
      it-role=${et(e["it-role"])}
      ?dark=${e.dark}
      ?full-width=${e["full-width"]}
    >
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  `,parameters:{...T.parameters,docs:{source:{excludeDecorators:!0},canvas:{sourceState:"shown"}}},tags:["!autodocs","!dev"]},vt={name:"Dropdown button varianti",render:()=>E`
    <it-dropdown label="Primario" variant="primary">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Secondario" variant="secondary">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Success" variant="success">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Danger" variant="danger">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  `,decorators:[e=>E`<div style="${Vt}gap:0.5rem;flex-wrap:wrap;display:flex">${e()}</div>`],argTypes:{...j()},parameters:{...T.parameters,docs:{source:{excludeDecorators:!0},description:{story:"Ovviamente sono disponibili tutte le varianti già disponibili per i pulsanti. Di seguito, un esempio di utilizzo con le varianti `primary`, `secondary`, `success` e `danger`."}}}},bt={render:()=>E`
    <it-dropdown label="Giù" alignment="bottom-start">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Su" alignment="top-start">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Sinistra" alignment="left">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Destra" alignment="right">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  `,decorators:[e=>E`<div
        style="${Vt}gap:2rem;flex-wrap:wrap;align-items:space-between;justify-content:center;flex-direction:column;"
      >
        ${e()}
      </div>`],argTypes:{...j()},parameters:{...T.parameters,docs:{source:{excludeDecorators:!0},description:{story:"Per aprire le voci di menu in direzioni diverse,\nè possibile utilizzare l'attributo `alignment` con i valori `top`, `right`,\n`bottom`, `left`, `top-start`, `top-end`, `right-start`, `right-end`,\n`bottom-start`, `bottom-end`, `left-start` e `left-end`.\n\nI valori `top`, `right`, `bottom` e `left` aprono il menu in direzioni standard,\ncentrate rispetto al trigger,\nmentre i valori `top-start`, `top-end`, `right-start`, `right-end`,\n`bottom-start`, `bottom-end`, `left-start` e `left-end` permettono di specificare\nla posizione esatta del menu rispetto al trigger.\n"}}}},yt={name:"Menu con voci attive",render:e=>E`
    <it-dropdown label=${e.label} variant=${e.variant}>
      <it-dropdown-item href="#" active>Attivo</it-dropdown-item>
      <it-dropdown-item href="#">Non attivo</it-dropdown-item>
      <it-dropdown-item href="#">Non attivo</it-dropdown-item>
    </it-dropdown>
  `,argTypes:{...j(["label","variant"])},parameters:{...T.parameters,docs:{source:{excludeDecorators:!0},description:{story:`Aggiungere l'attributo active agli elementi del dropdown che si vogliono mostrare come attivi.
Per questioni di accessibilità il componente aggiungerà automaticamente <span class="visually-hidden"> attivo</span> in coda al testo degli elementi attivi.`}}}},xt={name:"Menu disabilitato",args:{disabled:!0},render:e=>E`
    <it-dropdown label=${e.label} ?disabled=${e.disabled} variant=${e.variant}>
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  `,argTypes:{...j(["label","variant"])},parameters:{...T.parameters,docs:{source:{excludeDecorators:!0},description:{story:"Aggiungere l'attributo `disabled` al dropdown per **disabilitarlo** completamente."}}}},At={name:"Menu con voci disabilitate",render:e=>E`
    <it-dropdown label=${e.label} variant=${e.variant}>
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#" disabled>Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  `,argTypes:{...j(["label","variant"])},parameters:{...T.parameters,docs:{source:{excludeDecorators:!0},description:{story:"Aggiungere l'attributo `disabled` agli elementi del dropdown che si vogliono mostrare come **disabilitati**."}}}},zt={name:"Menu con intestazioni e separatori",render:e=>E`
    <it-dropdown label="Item con separatore e header" variant=${e.variant}>
      <h4 slot="header" class="link-list-heading dropdown-header">Intestazione</h4>
      <it-dropdown-item href="#">Prima voce</it-dropdown-item>
      <it-dropdown-item separator></it-dropdown-item>
      <it-dropdown-item href="#">Dopo separatore</it-dropdown-item>
    </it-dropdown>
  `,argTypes:{...j(["variant"])},parameters:{...T.parameters,docs:{source:{excludeDecorators:!0},description:{story:"All'interno del menu dropdown possono essere inseriti header e separatori."}}}},Et={name:"Menu con voci grandi",render:e=>E`
    <it-dropdown label=${e.label} variant=${e.variant}>
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#" large>Grande</it-dropdown-item>
    </it-dropdown>
  `,argTypes:{...j(["label","variant"])},parameters:{...T.parameters,docs:{source:{excludeDecorators:!0},description:{story:"Per aumentare la dimensione degli elementi contenuti nel dropdown\nè sufficiente aggiungere agli stessi l'attributo `large`."}}}},Ct={name:"Menu a tutta larghezza",args:{"full-width":!0},render:e=>E`
    <it-dropdown
      label=${e.label}
      ?disabled=${e.disabled}
      alignment=${et(e.alignment)}
      size=${et(e.size)}
      variant=${et(e.variant)}
      it-role=${et(e["it-role"])}
      ?dark=${e.dark}
      ?full-width=${e["full-width"]}
      style="width: 100%;"
    >
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  `,decorators:[e=>E`<div style="${Vt}min-width:300px">${e()}</div>`],parameters:{...T.parameters,docs:{source:{excludeDecorators:!0},description:{story:"Per ottenere un dropdown menu largo quanto l’elemento che contiene il dropdown button\nè sufficiente aggiungere l'attributo `full-width`.\nI link e testi contenuti al suo interno saranno disposti in orizzontale."}}}},St={name:"Menu con icona a destra",render:e=>E`
    <it-dropdown label=${e.label} variant=${e.variant}>
      <it-dropdown-item href="#">
        Azione 1
        <it-icon slot="suffix" name="it-star-outline" size="sm" color="primary"></it-icon>
      </it-dropdown-item>
      <it-dropdown-item href="#">
        Azione 2
        <it-icon slot="suffix" name="it-star-outline" size="sm" color="primary"></it-icon>
      </it-dropdown-item>
      <it-dropdown-item href="#">
        Azione 3
        <it-icon slot="suffix" name="it-star-outline" size="sm" color="primary"></it-icon>
      </it-dropdown-item>
    </it-dropdown>
  `,argTypes:{...j(["label","variant"])},parameters:{...T.parameters,docs:{source:{excludeDecorators:!0},description:{story:"Agli elementi contenuti nel menu può essere aggiunta un’icona illustrativa\nallineata a destra utilizzando lo slot `suffix`"}}}},$t={name:"Menu con icona a sinistra",render:e=>E`
    <it-dropdown label=${e.label} variant=${e.variant}>
      <it-dropdown-item href="#">
        <it-icon slot="prefix" name="it-star-outline" size="sm" color="primary"></it-icon>
        Azione 1
      </it-dropdown-item>
      <it-dropdown-item href="#">
        <it-icon slot="prefix" name="it-star-outline" size="sm" color="primary"></it-icon>
        Azione 2
      </it-dropdown-item>
      <it-dropdown-item href="#">
        <it-icon slot="prefix" name="it-star-outline" size="sm" color="primary"></it-icon>
        Azione 3
      </it-dropdown-item>
    </it-dropdown>
  `,argTypes:{...j(["label","variant"])},parameters:{...T.parameters,docs:{source:{excludeDecorators:!0},description:{story:"Agli elementi contenuti nel menu può essere aggiunta un’icona illustrativa\nallineata a sinistra utilizzando lo slot `prefix`"}}}},Dt={name:"Menu scuro",args:{dark:!0},render:e=>E`
    <it-dropdown label=${e.label} variant=${e.variant} dark>
      <h4 slot="header" class="link-list-heading dropdown-header">Intestazione</h4>
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item separator></it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  `,argTypes:{...j(["label","variant"])},parameters:{...T.parameters,docs:{source:{excludeDecorators:!0},description:{story:"Aggiungendo l'attributo `dark` al dropdown si ottiene una versione con un colore primario scuro.\nLink ed elementi interni vengono declinati di conseguenza."}}}};var re,se,ae;wt.parameters={...wt.parameters,docs:{...(re=wt.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: args => html\`
    <it-dropdown
      label=\${args.label}
      ?disabled=\${args.disabled}
      alignment=\${ifDefined(args.alignment)}
      size=\${ifDefined(args.size)}
      variant=\${args.variant}
      it-role=\${ifDefined(args['it-role'])}
      ?dark=\${args.dark}
      ?full-width=\${args['full-width']}
    >
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  \`,
  parameters: {
    ...meta.parameters,
    docs: {
      source: {
        excludeDecorators: true
      },
      canvas: {
        sourceState: 'shown'
      }
    }
  },
  tags: ['!autodocs', '!dev']
}`,...(ae=(se=wt.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var le,de,ce;vt.parameters={...vt.parameters,docs:{...(le=vt.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: 'Dropdown button varianti',
  render: () => html\`
    <it-dropdown label="Primario" variant="primary">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Secondario" variant="secondary">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Success" variant="success">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Danger" variant="danger">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  \`,
  decorators: [Story => html\`<div style="\${containerStyle}gap:0.5rem;flex-wrap:wrap;display:flex">\${Story()}</div>\`],
  argTypes: {
    ...disabledControls()
  },
  parameters: {
    ...meta.parameters,
    docs: {
      source: {
        excludeDecorators: true
      },
      description: {
        story: 'Ovviamente sono disponibili tutte le varianti già disponibili per i pulsanti. Di seguito, un esempio di utilizzo con le varianti \`primary\`, \`secondary\`, \`success\` e \`danger\`.'
      }
    }
  }
}`,...(ce=(de=vt.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var me,pe,ue;bt.parameters={...bt.parameters,docs:{...(me=bt.parameters)==null?void 0:me.docs,source:{originalSource:'{\n  render: () => html`\n    <it-dropdown label="Giù" alignment="bottom-start">\n      <it-dropdown-item href="#">Azione 1</it-dropdown-item>\n      <it-dropdown-item href="#">Azione 2</it-dropdown-item>\n      <it-dropdown-item href="#">Azione 3</it-dropdown-item>\n    </it-dropdown>\n\n    <it-dropdown label="Su" alignment="top-start">\n      <it-dropdown-item href="#">Azione 1</it-dropdown-item>\n      <it-dropdown-item href="#">Azione 2</it-dropdown-item>\n      <it-dropdown-item href="#">Azione 3</it-dropdown-item>\n    </it-dropdown>\n\n    <it-dropdown label="Sinistra" alignment="left">\n      <it-dropdown-item href="#">Azione 1</it-dropdown-item>\n      <it-dropdown-item href="#">Azione 2</it-dropdown-item>\n      <it-dropdown-item href="#">Azione 3</it-dropdown-item>\n    </it-dropdown>\n\n    <it-dropdown label="Destra" alignment="right">\n      <it-dropdown-item href="#">Azione 1</it-dropdown-item>\n      <it-dropdown-item href="#">Azione 2</it-dropdown-item>\n      <it-dropdown-item href="#">Azione 3</it-dropdown-item>\n    </it-dropdown>\n  `,\n  decorators: [Story => html`<div\n        style="${containerStyle}gap:2rem;flex-wrap:wrap;align-items:space-between;justify-content:center;flex-direction:column;"\n      >\n        ${Story()}\n      </div>`],\n  argTypes: {\n    ...disabledControls()\n  },\n  parameters: {\n    ...meta.parameters,\n    docs: {\n      source: {\n        excludeDecorators: true\n      },\n      description: {\n        story: `Per aprire le voci di menu in direzioni diverse,\nè possibile utilizzare l\'attributo \\`alignment\\` con i valori \\`top\\`, \\`right\\`,\n\\`bottom\\`, \\`left\\`, \\`top-start\\`, \\`top-end\\`, \\`right-start\\`, \\`right-end\\`,\n\\`bottom-start\\`, \\`bottom-end\\`, \\`left-start\\` e \\`left-end\\`.\n\nI valori \\`top\\`, \\`right\\`, \\`bottom\\` e \\`left\\` aprono il menu in direzioni standard,\ncentrate rispetto al trigger,\nmentre i valori \\`top-start\\`, \\`top-end\\`, \\`right-start\\`, \\`right-end\\`,\n\\`bottom-start\\`, \\`bottom-end\\`, \\`left-start\\` e \\`left-end\\` permettono di specificare\nla posizione esatta del menu rispetto al trigger.\n`\n      }\n    }\n  }\n}',...(ue=(pe=bt.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var fe,he,ge;yt.parameters={...yt.parameters,docs:{...(fe=yt.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  name: 'Menu con voci attive',
  render: args => html\`
    <it-dropdown label=\${args.label} variant=\${args.variant}>
      <it-dropdown-item href="#" active>Attivo</it-dropdown-item>
      <it-dropdown-item href="#">Non attivo</it-dropdown-item>
      <it-dropdown-item href="#">Non attivo</it-dropdown-item>
    </it-dropdown>
  \`,
  argTypes: {
    ...disabledControls(['label', 'variant'])
  },
  parameters: {
    ...meta.parameters,
    docs: {
      source: {
        excludeDecorators: true
      },
      description: {
        story: \`Aggiungere l'attributo active agli elementi del dropdown che si vogliono mostrare come attivi.
Per questioni di accessibilità il componente aggiungerà automaticamente <span class="visually-hidden"> attivo</span> in coda al testo degli elementi attivi.\`
      }
    }
  }
}`,...(ge=(he=yt.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};var we,ve,be;xt.parameters={...xt.parameters,docs:{...(we=xt.parameters)==null?void 0:we.docs,source:{originalSource:`{
  name: 'Menu disabilitato',
  args: {
    disabled: true
  },
  render: args => html\`
    <it-dropdown label=\${args.label} ?disabled=\${args.disabled} variant=\${args.variant}>
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  \`,
  argTypes: {
    ...disabledControls(['label', 'variant'])
  },
  parameters: {
    ...meta.parameters,
    docs: {
      source: {
        excludeDecorators: true
      },
      description: {
        story: \`Aggiungere l'attributo \\\`disabled\\\` al dropdown per **disabilitarlo** completamente.\`
      }
    }
  }
}`,...(be=(ve=xt.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};var ye,xe,Ae;At.parameters={...At.parameters,docs:{...(ye=At.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  name: 'Menu con voci disabilitate',
  render: args => html\`
    <it-dropdown label=\${args.label} variant=\${args.variant}>
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#" disabled>Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  \`,
  argTypes: {
    ...disabledControls(['label', 'variant'])
  },
  parameters: {
    ...meta.parameters,
    docs: {
      source: {
        excludeDecorators: true
      },
      description: {
        story: \`Aggiungere l'attributo \\\`disabled\\\` agli elementi del dropdown che si vogliono mostrare come **disabilitati**.\`
      }
    }
  }
}`,...(Ae=(xe=At.parameters)==null?void 0:xe.docs)==null?void 0:Ae.source}}};var ze,Ee,Ce;zt.parameters={...zt.parameters,docs:{...(ze=zt.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  name: 'Menu con intestazioni e separatori',
  render: args => html\`
    <it-dropdown label="Item con separatore e header" variant=\${args.variant}>
      <h4 slot="header" class="link-list-heading dropdown-header">Intestazione</h4>
      <it-dropdown-item href="#">Prima voce</it-dropdown-item>
      <it-dropdown-item separator></it-dropdown-item>
      <it-dropdown-item href="#">Dopo separatore</it-dropdown-item>
    </it-dropdown>
  \`,
  argTypes: {
    ...disabledControls(['variant'])
  },
  parameters: {
    ...meta.parameters,
    docs: {
      source: {
        excludeDecorators: true
      },
      description: {
        story: \`All'interno del menu dropdown possono essere inseriti header e separatori.\`
      }
    }
  }
}`,...(Ce=(Ee=zt.parameters)==null?void 0:Ee.docs)==null?void 0:Ce.source}}};var Se,$e,De;Et.parameters={...Et.parameters,docs:{...(Se=Et.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  name: 'Menu con voci grandi',
  render: args => html\`
    <it-dropdown label=\${args.label} variant=\${args.variant}>
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#" large>Grande</it-dropdown-item>
    </it-dropdown>
  \`,
  argTypes: {
    ...disabledControls(['label', 'variant'])
  },
  parameters: {
    ...meta.parameters,
    docs: {
      source: {
        excludeDecorators: true
      },
      description: {
        story: \`Per aumentare la dimensione degli elementi contenuti nel dropdown
è sufficiente aggiungere agli stessi l'attributo \\\`large\\\`.\`
      }
    }
  }
}`,...(De=($e=Et.parameters)==null?void 0:$e.docs)==null?void 0:De.source}}};var Oe,Me,Te;Ct.parameters={...Ct.parameters,docs:{...(Oe=Ct.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  name: 'Menu a tutta larghezza',
  args: {
    'full-width': true
  },
  render: args => html\`
    <it-dropdown
      label=\${args.label}
      ?disabled=\${args.disabled}
      alignment=\${ifDefined(args.alignment)}
      size=\${ifDefined(args.size)}
      variant=\${ifDefined(args.variant)}
      it-role=\${ifDefined(args['it-role'])}
      ?dark=\${args.dark}
      ?full-width=\${args['full-width']}
      style="width: 100%;"
    >
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  \`,
  decorators: [Story => html\`<div style="\${containerStyle}min-width:300px">\${Story()}</div>\`],
  parameters: {
    ...meta.parameters,
    docs: {
      source: {
        excludeDecorators: true
      },
      description: {
        story: \`Per ottenere un dropdown menu largo quanto l’elemento che contiene il dropdown button
è sufficiente aggiungere l'attributo \\\`full-width\\\`.
I link e testi contenuti al suo interno saranno disposti in orizzontale.\`
      }
    }
  }
}`,...(Te=(Me=Ct.parameters)==null?void 0:Me.docs)==null?void 0:Te.source}}};var Re,_e,Le;St.parameters={...St.parameters,docs:{...(Re=St.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  name: 'Menu con icona a destra',
  render: args => html\`
    <it-dropdown label=\${args.label} variant=\${args.variant}>
      <it-dropdown-item href="#">
        Azione 1
        <it-icon slot="suffix" name="it-star-outline" size="sm" color="primary"></it-icon>
      </it-dropdown-item>
      <it-dropdown-item href="#">
        Azione 2
        <it-icon slot="suffix" name="it-star-outline" size="sm" color="primary"></it-icon>
      </it-dropdown-item>
      <it-dropdown-item href="#">
        Azione 3
        <it-icon slot="suffix" name="it-star-outline" size="sm" color="primary"></it-icon>
      </it-dropdown-item>
    </it-dropdown>
  \`,
  argTypes: {
    ...disabledControls(['label', 'variant'])
  },
  parameters: {
    ...meta.parameters,
    docs: {
      source: {
        excludeDecorators: true
      },
      description: {
        story: \`Agli elementi contenuti nel menu può essere aggiunta un’icona illustrativa
allineata a destra utilizzando lo slot \\\`suffix\\\`\`
      }
    }
  }
}`,...(Le=(_e=St.parameters)==null?void 0:_e.docs)==null?void 0:Le.source}}};var ke,Ve,Pe;$t.parameters={...$t.parameters,docs:{...(ke=$t.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  name: 'Menu con icona a sinistra',
  render: args => html\`
    <it-dropdown label=\${args.label} variant=\${args.variant}>
      <it-dropdown-item href="#">
        <it-icon slot="prefix" name="it-star-outline" size="sm" color="primary"></it-icon>
        Azione 1
      </it-dropdown-item>
      <it-dropdown-item href="#">
        <it-icon slot="prefix" name="it-star-outline" size="sm" color="primary"></it-icon>
        Azione 2
      </it-dropdown-item>
      <it-dropdown-item href="#">
        <it-icon slot="prefix" name="it-star-outline" size="sm" color="primary"></it-icon>
        Azione 3
      </it-dropdown-item>
    </it-dropdown>
  \`,
  argTypes: {
    ...disabledControls(['label', 'variant'])
  },
  parameters: {
    ...meta.parameters,
    docs: {
      source: {
        excludeDecorators: true
      },
      description: {
        story: \`Agli elementi contenuti nel menu può essere aggiunta un’icona illustrativa
allineata a sinistra utilizzando lo slot \\\`prefix\\\`\`
      }
    }
  }
}`,...(Pe=(Ve=$t.parameters)==null?void 0:Ve.docs)==null?void 0:Pe.source}}};var Fe,Ie,Ne;Dt.parameters={...Dt.parameters,docs:{...(Fe=Dt.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  name: 'Menu scuro',
  args: {
    dark: true
  },
  render: args => html\`
    <it-dropdown label=\${args.label} variant=\${args.variant} dark>
      <h4 slot="header" class="link-list-heading dropdown-header">Intestazione</h4>
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item separator></it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  \`,
  argTypes: {
    ...disabledControls(['label', 'variant'])
  },
  parameters: {
    ...meta.parameters,
    docs: {
      source: {
        excludeDecorators: true
      },
      description: {
        story: \`Aggiungendo l'attributo \\\`dark\\\` al dropdown si ottiene una versione con un colore primario scuro.
Link ed elementi interni vengono declinati di conseguenza.\`
      }
    }
  }
}`,...(Ne=(Ie=Dt.parameters)==null?void 0:Ie.docs)==null?void 0:Ne.source}}};const yn=["Base","Varianti","Direzioni","MenuVociAttive","MenuDisabilitato","MenuVociDisabilitate","MenuIntestazioniSeparatori","MenuVociGrandi","MenuATuttaLarghezza","MenuIconaDestra","MenuIconaSinistra","MenuScuro"];export{wt as Base,bt as Direzioni,Ct as MenuATuttaLarghezza,xt as MenuDisabilitato,St as MenuIconaDestra,$t as MenuIconaSinistra,zt as MenuIntestazioniSeparatori,Dt as MenuScuro,yt as MenuVociAttive,At as MenuVociDisabilitate,Et as MenuVociGrandi,vt as Varianti,yn as __namedExportsOrder,T as default};
