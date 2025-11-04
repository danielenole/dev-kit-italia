import{f as s,T as n,E as T,m as l}from"./iframe-BiclfI91.js";import{e as p,i as f,t}from"./directive-CvdRHFdJ.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const c=p(class extends f{constructor(e){if(super(e),e.type!==t.PROPERTY&&e.type!==t.ATTRIBUTE&&e.type!==t.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!s(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[r]){if(r===n||r===T)return r;const i=e.element,o=e.name;if(e.type===t.PROPERTY){if(r===i[o])return n}else if(e.type===t.BOOLEAN_ATTRIBUTE){if(!!r===i.hasAttribute(o))return n}else if(e.type===t.ATTRIBUTE&&i.getAttribute(o)===r+"")return n;return l(e),r}});export{c as l};
