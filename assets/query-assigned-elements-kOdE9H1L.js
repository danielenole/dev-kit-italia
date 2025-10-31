import{a as m}from"./query-Bgk1JvUp.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function d(t){return(c,a)=>{const{slot:r,selector:o}=t??{},i="slot"+(r?`[name=${r}]`:":not([name])");return m(c,a,{get(){var s;const e=(s=this.renderRoot)==null?void 0:s.querySelector(i),n=(e==null?void 0:e.assignedElements(t))??[];return o===void 0?n:n.filter((l=>l.matches(o)))}})}}export{d as o};
