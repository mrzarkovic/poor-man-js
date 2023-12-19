!function(n,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["t"]=t():n["t"]=t()}(self,(()=>(()=>{"use strict";var n={};function t(n,t){var e=n(t);return Array.isArray(e)&&(e=e.join("")),e}(n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"i",{value:!0})})(n);var e={},r=function(n,t){var r=n+JSON.stringify(Object.keys(t).join(""));if(!e[r]){var i="return (state) => {".concat(Object.keys(t).map((function(n){return"const ".concat(n,' = state["').concat(n,'"].value;')})).join("\n")," return ").concat(n,"}");e[r]=Function(i)()}return e[r]},i=/<\/?[\w-]+/g,u=/[\w-]+(\s*=\s*("|')[^"']*("|'))/g,o=/[^\w\s]/g,a=/\s+/g,c=function(n,e,i,u){for(var o=n,a="",c=0;c<e.length;c++){var f=e[c],s=f.start,l=f.end,v=f.value,d=o.slice(0,s),h=o.slice(l+1),m=e[c].u,p=e[c].o.filter((function(n){return u.includes(n)}));(p.length||null===m)&&(m=t(r(v,i),i),e[c].u=m),a+="".concat(d).concat(m),o=h}return a+o},f=function(n,t){for(var e=[],r=String(n),c=!0,f=function(){var n=function(n){for(var t=n.indexOf("{{"),e=0,r=t;r<n.length;r++)if("{"===n[r]&&"{"===n[r+1]?(e++,r++):"}"===n[r]&&"}"===n[r+1]&&(e--,r++),0===e)return{start:t,end:r};return{start:t,end:-1}}(r),f=n.start,s=n.end;if(-1===s)return c=!1,1;var l,v,d,h=r.slice(f+2,s-1),m=r.slice(s+1),p=(l=h,(v=document.createElement("div")).innerHTML=function(n){return n.replace(/<(?=[^<>]*>)/g,"&lt;").replace(/(?<=[^<>]*)>/g,"&gt;")}(l),(v.textContent||v.innerText||"").replace(/[\r\n]+/g,"").trim()),b={},g=new Set;(d=p,d.replace(i,"").replace(u,"$1").replace(o," ").trim().replace(a,"@")).split("@").filter((function(n){return!b[n]&&(b[n]=!0)})).filter((function(n){return t[n]})).forEach((function(n){t[n].o.length?t[n].o.forEach((function(n){return g.add(n)})):g.add(n)})),e.push({start:f,end:s,value:p,o:Array.from(g),u:null}),r=m};c&&!f(););return e},s=function(n){return n.split("-").reduce((function(n,t,e){return n+(e?t[0].toUpperCase()+t.slice(1):t)}),"")};function l(n){return"true"===n||"false"!==n&&("null"===n?null:"undefined"===n?void 0:""===n?"":isNaN(Number(n))?n:Number(n))}function v(n,t,e){for(var r=Object.assign({},t),i=0;i<n.length;i++){var u=s(n[i].name),o=n[i].value,a=[];n[i].l&&(a=Array.from(new Set(n[i].v.map((function(n){return n.o})).flat())),o=c(n[i].value,n[i].v,t,e)),r[u]={value:l(o),h:[],m:[],o:a}}return r}function d(n,t,e,r,i){var u=i.find((function(t){return t.id===n}));if(!u)return v(t,e,r);var o=d(u.parentId,u.attributes,e,r,i);return Object.assign({},o,v(t,o,r))}var h=function(n,t,e){var i=t.getAttribute("data-on-".concat(n));if(!i)throw new Error("Missing data-handler attribute");var u=r(i,e);return function(t){try{u(e),t.preventDefault()}catch(t){throw new Error("".concat(t.message,": data-on-").concat(n,"=").concat(i))}}};function m(n,t,e){n.querySelectorAll("[data-on-".concat(t,"]")).forEach((function(n){var r=h(t,n,e);n.addEventListener(t,r),n["".concat(t,"Handler")]=r}))}function p(n,t){m(n,"click",t),m(n,"change",t)}function b(n){return(new DOMParser).parseFromString(n,"text/html").body.firstChild}function g(n,t){for(var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){return!0},r=[],i=document.evaluate(t,n,null,XPathResult.ORDERED_NODE_ITERATOR_TYPE,null),u=i.iterateNext();u;)e(u)&&r.push(u),u=i.iterateNext();return r}function y(n,t,e,r,i){var u,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[],a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null,l=r.replace(/>\s*([\s\S]*?)\s*</g,">$1<"),v=f(l,i),d=b(c(l,v,i,[]));return function(n,t,e){t.map((function(t){t.o.forEach((function(t){-1===e[t].h.indexOf(n)&&e[t].h.push(n)}))}))}(n,v,i),t.add({id:n,parentId:a,element:d,p:l,lastTemplateEvaluation:d.cloneNode(!0),attributes:o,v,shouldUpdate:!1,N:[],S:s}),null===(u=e.parentElement)||void 0===u||u.replaceChild(d,e),d}function w(n,t,e,r){function i(){return Reflect.construct(HTMLElement,[],i)}i.prototype=Object.create(HTMLElement.prototype),i.prototype.constructor=i,i.prototype.connectedCallback=function(n,t,e){return function(){var r=this.tagName.toLowerCase(),i=e.id(),u=this.dataset.parentId?Number(this.dataset.parentId):null;t.j(r,i);var o=t.value;if(t.A&&t.A[r]){var a=t.A[r].customElements[i];Object.keys(a).forEach((function(n){if(a[n].value instanceof Function){var t=a[n].value;a[n].value=function(){for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];return t.apply(void 0,e.concat(["cogId:".concat(i)]))}}})),o=Object.assign({},t.value,a)}var c=d(u,[],o,[],e.list),s=function(n,t){var e=function(n,t){return Array.from(n.attributes).map((function(n){var e=f(n.value,t);return{name:n.name,value:n.value,v:e,l:!!e.length}}))}(n,t),r=f(n.innerHTML,t);return e.push({name:"children",value:n.innerHTML,v:r,l:!!r.length}),e}(this,c),l=function(n,t){var e=b(n);if(e.nodeType!==Node.TEXT_NODE){N(e,t);for(var r=e.querySelectorAll("*"),i=0;i<r.length;i++)N(r[i],t)}var u=e.outerHTML;return u||(u=e.textContent),u}(n.innerHTML,i),h=v(s,c,[]),m=y(i,e,this,l,h,s,u,r);m.nodeType!==Node.TEXT_NODE&&p(m,o),m.cogAnchorId=i}}(t,e,r),customElements.define(n,i)}function N(n,t){n.tagName.includes("-")&&n.setAttribute("data-parent-id",String(t))}function S(n,t){for(var e=[],r=0;r<n.attributes.length;r++){var i=n.attributes[r],u=t.getAttribute(i.name);u!==i.value&&e.push({name:i.name,newValue:l(u||"")})}return e}function x(n,t){if(t.name.startsWith("data-attribute-")){var e=t.name.substring(15);t.newValue?(n[e]=!0,n.setAttribute(e,t.newValue)):(n[e]=!1,n.removeAttribute(e))}}var j=function(n){return n.nodeType!==Node.TEXT_NODE&&-1!==n.tagName.indexOf("-")};function A(n,t){n.querySelectorAll("[data-on-".concat(t,"]")).forEach((function(n){var e=n["".concat(t,"Handler")];e&&n.removeEventListener(t,e)}))}function E(n,t){if(n.nodeType===Node.TEXT_NODE)return function(n,t){return n.textContent!==t.textContent?[{node:t,content:t.textContent}]:[]}(n,t);var e,r=S(n,t),i=r.length>0?[{node:t,attributes:r}]:[];return j(n)?i.concat((e=t,n.innerHTML!==e.innerHTML?[{node:e,content:e.innerHTML}]:[])):i.concat(function(n,t){for(var e=[],r=[],i=Math.max(n.childNodes.length,t.childNodes.length),u=[],o=0;o<i;o++){var a,c,f=n.childNodes[o],s=t.childNodes[o];if((null==f?void 0:f.nodeType)===Node.TEXT_NODE&&(null==s?void 0:s.nodeType)===Node.TEXT_NODE){if((null===(a=f.textContent)||void 0===a?void 0:a.trim())!==(null===(c=s.textContent)||void 0===c?void 0:c.trim()))return[{node:t,content:t.innerHTML}]}else f?s?u=u.concat(E(f,s)):e.push(f):r.push(s)}return e.length&&u.push({node:t,O:e}),r.length&&u.push({node:t,M:r}),u}(n,t))}function O(n,t,e){for(var r=[],i=n;i!==t;)r.unshift(Array.prototype.indexOf.call(i.parentNode.childNodes,i)),i=i.parentNode;for(var u=e,o=0;o<r.length;o++){var a=r[o];if(!u.childNodes[a])return null;u=u.childNodes[a]}return u}function M(n,t,e,r,i,u){var o,a=null!==(o=null==e?void 0:e.slice())&&void 0!==o?o:[],c=[];if(a.forEach((function(n){c.push({name:n.name,value:n.newValue,v:[],l:!1})})),void 0!==t&&c.push({name:"children",value:t,v:[],l:!1}),c.length){var f=r.get(n.cogAnchorId),l=function(n,t){for(var e=n.concat(t),r={},i=0;i<e.length;i++)r[e[i].name]=e[i];return Object.values(r)}(f.attributes,c);f.attributes=l,f.N=f.attributes.map((function(n){return s(n.name)})),H(r,f,i,u)}}function T(n,t,e){var r;n.nodeType===Node.TEXT_NODE?n.textContent=t:(A(r=n,"click"),A(r,"change"),n.innerHTML=t,p(n,e))}function C(n,t){for(var e=0;e<t.length;e++)x(n,t[e]),n.setAttribute(t[e].name,t[e].newValue)}function F(n,t){for(var e=document.createDocumentFragment(),r=0;r<t.length;r++)e.appendChild(t[r]);n.appendChild(e)}function I(n,t){for(var e=0;e<t.length;e++)n.removeChild(t[e])}function U(n,t,e){var r=[],i=[];if(void 0!==n.M&&(i=n.M),void 0!==n.O)for(var u=0;u<n.O.length;u++){var o=O(n.O[u],t,e);o&&r.push(o)}return{T:i,C:r}}var H=function(n,t,e,r){var i=r.concat(t.N),u=e.value;if(e.A&&t.S&&e.A[t.S]){var o=e.A[t.S].customElements[t.id];u=Object.assign({},e.value,o)}t.N=[];var a=d(t.parentId,t.attributes,u,i,n.list),f=c(t.p,t.v,a,i),s=t.lastTemplateEvaluation.cloneNode(!0),l=b(f),v=E(s,l);v.length>0&&(t.lastTemplateEvaluation=l.cloneNode(!0),function(n,t,e,r,i,u,o,a){for(var c=0;c<n.length;c++){var f=n[c],s=O(f.node,e,r);if(j(f.node))M(s,f.content,f.attributes,u,o,a);else{var l=U(f,t,r),v=l.T,d=l.C;void 0!==f.content?T(s,f.content,i):void 0!==f.attributes?C(s,f.attributes):v.length?F(s,v):d.length&&I(s,d)}}}(v,s,l,t.element,a,n,e,r))};var _=function(){var n=null,t={F:0,list:[],index:{},get value(){return this.list},get:function(n){return this.list[this.index[n]]},add:function(n){this.list.push(n),this.index[n.id]=this.list.length-1},update:function(n,t,e){this.list[this.index[n]][t]=e},I:function(){this.list=this.list.filter((function(n){var t=n.element;return document.body.contains(t)})),this.index=this.list.reduce((function(n,t,e){return n[t.id]=e,n}),{})},id:function(){return this.F++}},e=null,r={state:null,A:null,U:[],H:{},get value(){return this.state||(this.state={}),this.state},_:function(n){return this.A||(this.A={}),this.A[n]},j:function(n,t){if(this.A&&this.A[n]){this.A[n].customElements[t]={};for(var e=0;e<this.A[n].keys.length;e++){var r=this.A[n].keys[e],i=this.A[n].k[r].value,u=this.A[n].k[r].G;u&&(i=u(r,i.slice(0))),this.A[n].customElements[t][r]={value:i,h:[],m:[],o:[]}}}},L:function(n,t,e,r){this.A||(this.A={}),this.A[n]||(this.A[n]={keys:[],k:{},customElements:{}}),this.A[n].k[t]={value:e,G:r},this.A[n].keys.push(t)},P:function(n,t,e,r){var i=this;this.A[n].customElements[t][e].value=r,this.A[n].customElements[t][e].m.forEach((function(n){i.R(t,n)})),this.R(t,e)},B:function(n,t){this.state||(this.state={}),this.state[n]?this.state[n].value=t:this.state[n]={value:t,h:[],m:[],o:[]}},D:function(n,t){var e=this;this.state[n].value=t,this.value[n].m.forEach((function(n){e.$(n)})),this.$(n)},$:function(n){var t=this,e=n.split(".");if(e.length>1){var r=e[1].split(":"),i=r[0],u=Number(r[1]);this.R(u,i)}else this.value[n].h.forEach((function(e){t.R(e,n)}))},R:function(n,t){-1===this.U.indexOf(n)&&(this.U.push(n),this.H[n]=[]),-1===this.H[n].indexOf(t)&&this.H[n].push(t)},q:function(){this.U=[],this.H={}}},i=0;function u(){null!==e&&cancelAnimationFrame(e),e=requestAnimationFrame((function(n){n-i>16.666666666666668&&(i=n,r.U.forEach((function(n){var e=t.get(n);H(t,e,r,r.H[n])})),t.I(),r.q())}))}var o=function(t,e){return new Proxy(e,{get:function(e,i){var o=e[i];return"push"===i?function(){var i,a=null===(i=n)||void 0===i?void 0:i.split(".");if(a&&a.length>1){var c=Number(a[1].split(":")[1]);r.R(c,t)}else r.value[t].m.forEach((function(n){r.$(n)})),r.$(t);u();for(var f=arguments.length,s=new Array(f),l=0;l<f;l++)s[l]=arguments[l];return o.apply(e,s)}:o}})};return{render:function(n){p(n,r.value),function(n,t,e){for(var r=g(n,"self::*[text()[contains(., '{{')] and text()[contains(., '}}')]] | self::*[@*[contains(., '{{') and contains(., '}}')]] | .//*[text()[contains(., '{{')] and text()[contains(., '}}')]] | .//*[@*[contains(., '{{') and contains(., '}}')]]",(function(n){return!j(n)})),i=0;i<r.length;i++){var u=e.id(),o=r[i];o.innerHTML=o.innerHTML.trim();for(var a=y(u,e,o,o.outerHTML,t),c=S(o,a),f=0;f<c.length;f++)x(a,c[f])}}(n,r.value,t),function(n,t,e){for(var r=g(n,"template"),i=document.createDocumentFragment(),u=0;u<r.length;u++){var o=r[u].getAttribute("id");if(o){if(r[u].innerHTML=r[u].innerHTML.replace(/[\r\n]+\s*/g,""),1!==r[u].content.childNodes.length)throw new Error("Template ".concat(o," should have a single child"));w(o,r[u],t,e),i.appendChild(r[u])}}i.textContent=""}(n,r,t)},variable:function(t,e,i){var a=t;if(i&&(a="".concat(i,".").concat(t)),e instanceof Function&&(e=function(t,e){return function(r){for(var i=arguments.length,u=new Array(i>1?i-1:0),o=1;o<i;o++)u[o-1]=arguments[o];"string"==typeof r&&(0===r.indexOf("cogId:")?r=r.replace("cogId:",""):(u.unshift(r),r=null)),n=r?"".concat(t,":").concat(r):t;var a=e.apply(void 0,u);return n=null,a}}(a,e)),i){var c=void 0;Array.isArray(e)&&(c=o),r.L(i,t,e,c)}else Array.isArray(e)&&(e=o(t,e)),r.B(t,e);return{get value(){if(i){var e,u=(null===(e=n)||void 0===e?void 0:e.split(":"))||[],o=u[1]?Number(u[1]):null;if(null===o)throw new Error("Can't use outside of a template: ".concat(t," (for ").concat(i,")"));var a=u[0].split("."),c=a[0],f=a[1];if(c!==i)throw new Error("Can't use from another template: ".concat(t," (for ").concat(i,", used in ").concat(c,")"));var s=r._(i).customElements[o][t];return f&&-1===s.m.indexOf(f)&&s.m.push(f),s.value}return null!==n&&-1===r.value[t].m.indexOf(n)&&r.value[t].m.push(n),r.value[t].value},set value(e){if(i){var o,a=null===(o=n)||void 0===o?void 0:o.split(":")[1];if(!a)throw new Error("Can't call outside of a template");r.P(i,Number(a),t,e)}else r.D(t,e);u()},set:function(e){if(i){var o,a=null===(o=n)||void 0===o?void 0:o.split(":")[1];if(!a)throw new Error("Can't call outside of a template");r.P(i,Number(a),t,e)}else r.D(t,e);u()}}}}}(),k=_.variable,G=_.render;document.addEventListener("DOMContentLoaded",(function(){G(document.getElementById("app"))}));var L=k("count",0,"my-counter");return k("increment",(function(){return L.value++}),"my-counter"),k("isEven",(function(){return L.value%2==0}),"my-counter"),n})()));