import{E as u,c as l,u as d}from"./iframe-BNEzD0SD.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const y=t=>t??u;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const g=t=>(r,e)=>{e!==void 0?e.addInitializer((()=>{customElements.define(t,r)})):customElements.define(t,r)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const p={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:l},f=(t=p,r,e)=>{const{kind:a,metadata:i}=e;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),a==="setter"&&((t=Object.create(t)).wrapped=!0),o.set(e.name,t),a==="accessor"){const{name:s}=e;return{set(n){const c=r.get.call(this);r.set.call(this,n),this.requestUpdate(s,c,t)},init(n){return n!==void 0&&this.C(s,void 0,t,n),n}}}if(a==="setter"){const{name:s}=e;return function(n){const c=this[s];r.call(this,n),this.requestUpdate(s,c,t)}}throw Error("Unsupported decorator location: "+a)};function h(t){return(r,e)=>typeof e=="object"?f(t,r,e):((a,i,o)=>{const s=i.hasOwnProperty(o);return i.constructor.createProperty(o,a),s?Object.getOwnPropertyDescriptor(i,o):void 0})(t,r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function v(t){return h({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const b=(t,r,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof r!="object"&&Object.defineProperty(t,r,e),e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function P(t,r){return(e,a,i)=>{const o=s=>{var n;return((n=s.renderRoot)==null?void 0:n.querySelector(t))??null};return b(e,a,{get(){return o(this)}})}}export{b as a,P as e,h as n,y as o,v as r,g as t};
