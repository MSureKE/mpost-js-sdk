import t from"isomorphic-unfetch";function e(){return e=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},e.apply(this,arguments)}function r(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,o(t,e)}function o(t,e){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},o(t,e)}var n,i=/*#__PURE__*/function(){function r(t){this.apiKey=void 0,this.baseUrl=void 0,this.apiKey=t.apiKey,this.baseUrl=t.baseUrl||"https://jsonplaceholder.typicode.com"}return r.prototype.request=function(r,o){var n=""+this.baseUrl+r,i=e({},o,{headers:{"Content-Type":"application/json","api-key":this.apiKey}});return t(n,i).then(function(t){if(t.ok)return t.json();throw new Error(t.statusText)})},r}(),s=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}r(e,t);var o=e.prototype;return o.getDeliveryRequestById=function(t){return this.request("/posts/"+t)},o.getDeliveryRequests=function(){return this.request("/posts")},o.createDeliveryRequest=function(t){return this.request("/posts",{method:"POST",body:JSON.stringify(t)})},o.calculateDistance=function(t){return this.request("/posts/distance",{method:"POST",body:JSON.stringify(t)})},e}(i),p=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}return r(e,t),e}(i);n=p,[s].forEach(function(t){Object.getOwnPropertyNames(t.prototype).forEach(function(e){var r=Object.getOwnPropertyDescriptor(t.prototype,e);r&&Object.defineProperty(n.prototype,e,r)})});export{p as default};