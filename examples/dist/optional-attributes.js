!function(n,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["t"]=t():n["t"]=t()}(self,(()=>(()=>{"use strict";var n={};function t(n,t){var r=n(t);return Array.isArray(r)&&(r=r.join("")),r}(n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"o",{value:!0})})(n);var r={},e=function(n,t){var e=n+JSON.stringify(Object.keys(t).join(""));if(!r[e]){var o="return (state) => {".concat(Object.keys(t).map((function(n){return"const ".concat(n,' = state["').concat(n,'"].value;')})).join("\n")," return ").concat(n,"}");r[e]=Function(o)()}return r[e]},o=/<\/?[\w-]+/g,i=/[\w-]+(\s*=\s*("|')[^"']*("|'))/g,u=/[^\w\s]/g,a=/\s+/g,c=function(n,r,o,i){for(var u=n,a="",c=0;c<r.length;c++){var f=r[c],l=f.start,s=f.end,v=f.value,d=u.slice(0,l),m=u.slice(s+1),b=r[c].i,h=r[c].u.filter((function(n){return i.includes(n)}));(h.length||null===b)&&(b=t(e(v,o),o),r[c].i=b),a+="".concat(d).concat(b),u=m}return a+u},f=function(n,t){for(var r=[],e=String(n),c=!0,f=function(){var n=function(n){for(var t=n.indexOf("{{"),r=0,e=t;e<n.length;e++)if("{"===n[e]&&"{"===n[e+1]?(r++,e++):"}"===n[e]&&"}"===n[e+1]&&(r--,e++),0===r)return{start:t,end:e};return{start:t,end:-1}}(e),f=n.start,l=n.end;if(-1===l)return c=!1,1;var s,v,d,m=e.slice(f+2,l-1),b=e.slice(l+1),h=(s=m,(v=document.createElement("div")).innerHTML=function(n){return n.replace(/<(?=[^<>]*>)/g,"&lt;").replace(/(?<=[^<>]*)>/g,"&gt;")}(s),(v.textContent||v.innerText||"").replace(/[\r\n]+/g,"").trim()),p={},y=new Set;(d=h,d.replace(o,"").replace(i,"$1").replace(u," ").trim().replace(a,"@")).split("@").filter((function(n){return!p[n]&&(p[n]=!0)})).filter((function(n){return t[n]})).forEach((function(n){t[n].u.length?t[n].u.forEach((function(n){return y.add(n)})):y.add(n)})),r.push({start:f,end:l,value:h,u:Array.from(y),i:null}),e=b};c&&!f(););return r},l=function(n){return n.split("-").reduce((function(n,t,r){return n+(r?t[0].toUpperCase()+t.slice(1):t)}),"")};function s(n){return"true"===n||"false"!==n&&("null"===n?null:"undefined"===n?void 0:""===n?"":isNaN(Number(n))?n:Number(n))}var v={};function d(n,t,r){var e=JSON.stringify(n)+JSON.stringify(t);if(!v[e]){for(var o=Object.assign({},t),i=0;i<n.length;i++){var u=l(n[i].name),a=n[i].value,f=[];n[i].l&&(f=Array.from(new Set(n[i].v.map((function(n){return n.u})).flat())),a=c(n[i].value,n[i].v,t,r)),o[u]={value:s(a),m:[],h:[],u:f}}v[e]=o}return v[e]}function m(n,t,r,e,o){var i=o.find((function(t){return t.id===n}));if(!i)return d(t,r,e);var u=m(i.parentId,i.attributes,r,e,o);return Object.assign({},u,d(t,u,e))}var b=function(n,t,r){var o=t.getAttribute("data-on-".concat(n));if(!o)throw new Error("Missing data-handler attribute");var i=e(o,r);return function(t){try{i(r),t.preventDefault()}catch(t){throw new Error("".concat(t.message,": data-on-").concat(n,"=").concat(o))}}};function h(n,t,r){n.querySelectorAll("[data-on-".concat(t,"]")).forEach((function(n){var e=b(t,n,r);n.addEventListener(t,e),n["".concat(t,"Handler")]=e}))}function p(n,t){h(n,"click",t),h(n,"change",t)}function y(n){return(new DOMParser).parseFromString(n,"text/html").body.firstChild}function j(n,t){for(var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){return!0},e=[],o=document.evaluate(t,n,null,XPathResult.ORDERED_NODE_ITERATOR_TYPE,null),i=o.iterateNext();i;)r(i)&&e.push(i),i=o.iterateNext();return e}function O(n,t,r,e,o){var i,u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[],a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,l=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null,s=e.replace(/>\s*([\s\S]*?)\s*</g,">$1<"),v=f(s,o),d=y(c(s,v,o,[]));return function(n,t,r){t.map((function(t){t.u.forEach((function(t){-1===r[t].m.indexOf(n)&&r[t].m.push(n)}))}))}(n,v,o),t.add({id:n,parentId:a,element:d,p:s,lastTemplateEvaluation:d.cloneNode(!0),attributes:u,v,shouldUpdate:!1,j:[],O:l}),null===(i=r.parentElement)||void 0===i||i.replaceChild(d,r),d}function g(n){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},g(n)}function w(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.push.apply(r,e)}return r}function S(n){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){var e,o,i;e=n,o=t,i=r[t],(o=function(n){var t=function(n,t){if("object"!==g(n)||null===n)return n;var r=n[Symbol.toPrimitive];if(void 0!==r){var e=r.call(n,"string");if("object"!==g(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"===g(t)?t:String(t)}(o))in e?Object.defineProperty(e,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(r,t))}))}return n}function A(n,t,r,e){function o(){return Reflect.construct(HTMLElement,[],o)}o.prototype=Object.create(HTMLElement.prototype),o.prototype.constructor=o,o.prototype.connectedCallback=function(n,t,r){return function(){var e=this.tagName.toLowerCase(),o=r.id(),i=this.dataset.parentId?Number(this.dataset.parentId):null;t.S(e,o);var u=t.value;if(t.A&&t.A[e]){var a=t.A[e].customElements[o];Object.keys(a).forEach((function(n){if(a[n].value instanceof Function){var t=a[n].value;a[n].value=function(){for(var n=arguments.length,r=new Array(n),e=0;e<n;e++)r[e]=arguments[e];return t.apply(void 0,r.concat(["cogId:".concat(o)]))}}})),u=S(S({},t.value),a)}var c=function(n,t){var r=function(n,t){return Array.from(n.attributes).map((function(n){var r=f(n.value,t);return{name:n.name,value:n.value,v:r,l:!!r.length}}))}(n,t),e=f(n.innerHTML,t);return r.push({name:"children",value:n.innerHTML,v:e,l:!!e.length}),r}(this,m(i,[],t.value,[],r.list)),l=function(n,t){var r=y(n);if(r.nodeType!==Node.TEXT_NODE){N(r,t);for(var e=r.querySelectorAll("*"),o=0;o<e.length;o++)N(e[o],t)}var i=r.outerHTML;return i||(i=r.textContent),i}(n.innerHTML,o),s=m(i,c,u,[],r.list),v=O(o,r,this,l,s,c,i,e);p(v,u),v.cogAnchorId=o}}(t,r,e),customElements.define(n,o)}function N(n,t){n.tagName.includes("-")&&n.setAttribute("data-parent-id",String(t))}function E(n,t){for(var r=[],e=0;e<n.attributes.length;e++){var o=n.attributes[e],i=t.getAttribute(o.name);i!==o.value&&r.push({name:o.name,newValue:s(i||"")})}return r}function x(n,t){if(t.name.startsWith("data-attribute-")){var r=t.name.substring(15);t.newValue?(n[r]=!0,n.setAttribute(r,t.newValue)):(n[r]=!1,n.removeAttribute(r))}}var T=function(n){return n.nodeType!==Node.TEXT_NODE&&-1!==n.tagName.indexOf("-")};function I(n,t){n.querySelectorAll("[data-on-".concat(t,"]")).forEach((function(n){var r=n["".concat(t,"Handler")];r&&n.removeEventListener(t,r)}))}function M(n,t){if(n.nodeType===Node.TEXT_NODE)return function(n,t){return n.textContent!==t.textContent?[{node:t,content:t.textContent}]:[]}(n,t);var r,e=E(n,t),o=e.length>0?[{node:t,attributes:e}]:[];return T(n)?o.concat((r=t,n.innerHTML!==r.innerHTML?[{node:r,content:r.innerHTML}]:[])):o.concat(function(n,t){for(var r=[],e=[],o=Math.max(n.childNodes.length,t.childNodes.length),i=[],u=0;u<o;u++){var a,c,f=n.childNodes[u],l=t.childNodes[u];if((null==f?void 0:f.nodeType)===Node.TEXT_NODE&&(null==l?void 0:l.nodeType)===Node.TEXT_NODE){if((null===(a=f.textContent)||void 0===a?void 0:a.trim())!==(null===(c=l.textContent)||void 0===c?void 0:c.trim()))return[{node:t,content:t.innerHTML}]}else f?l?i=i.concat(M(f,l)):r.push(f):e.push(l)}return r.length&&i.push({node:t,N:r}),e.length&&i.push({node:t,T:e}),i}(n,t))}function C(n,t,r){for(var e=[],o=n;o!==t;)e.unshift(Array.prototype.indexOf.call(o.parentNode.childNodes,o)),o=o.parentNode;for(var i=r,u=0;u<e.length;u++){var a=e[u];if(!i.childNodes[a])return null;i=i.childNodes[a]}return i}function U(n){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},U(n)}function F(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.push.apply(r,e)}return r}function P(n){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){var e,o,i;e=n,o=t,i=r[t],(o=function(n){var t=function(n,t){if("object"!==U(n)||null===n)return n;var r=n[Symbol.toPrimitive];if(void 0!==r){var e=r.call(n,"string");if("object"!==U(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"===U(t)?t:String(t)}(o))in e?Object.defineProperty(e,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(r,t))}))}return n}function k(n){return function(n){if(Array.isArray(n))return H(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,t){if(n){if("string"==typeof n)return H(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?H(n,t):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function H(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}function $(n,t,r,e,o){var i,u=null!==(i=null==r?void 0:r.slice())&&void 0!==i?i:[],a=[];if(u.forEach((function(n){a.push({name:n.name,value:n.newValue,v:[],l:!1})})),void 0!==t&&a.push({name:"children",value:t,v:[],l:!1}),a.length){var c=e.get(n.cogAnchorId),f=function(n,t){for(var r=n.concat(t),e={},o=0;o<r.length;o++)e[r[o].name]=r[o];return Object.values(e)}(c.attributes,a);c.attributes=f,c.j=c.attributes.map((function(n){return l(n.name)})),0==o.filter((function(n){return n.id===c.id})).length&&o.push(c)}}function J(n,t,r){var e;n.nodeType===Node.TEXT_NODE?n.textContent=t:(I(e=n,"click"),I(e,"change"),n.innerHTML=t,p(n,r))}function L(n,t){for(var r=0;r<t.length;r++)x(n,t[r]),n.setAttribute(t[r].name,t[r].newValue)}function R(n,t){for(var r=document.createDocumentFragment(),e=0;e<t.length;e++)r.appendChild(t[e]);n.appendChild(r)}function B(n,t){for(var r=0;r<t.length;r++)n.removeChild(t[r])}function D(n,t,r,e,o,i,u){for(var a=0;a<n.length;a++){var c=n[a],f=C(c.node,r,e);if(T(c.node))$(f,c.content,c.attributes,i,u);else{var l=K(c,t,e),s=l.I,v=l.M;void 0!==c.content?J(f,c.content,o):void 0!==c.attributes?L(f,c.attributes):s.length?R(f,s):v.length&&B(f,v)}}}function K(n,t,r){var e=[],o=[];if(void 0!==n.T&&(o=n.T),void 0!==n.N)for(var i=0;i<n.N.length;i++){var u=C(n.N[i],t,r);u&&e.push(u)}return{I:o,M:e}}function _(n){return function(n){if(Array.isArray(n))return q(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,t){if(n){if("string"==typeof n)return q(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?q(n,t):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function q(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}var V=function(){var n=null,t={C:0,list:[],index:{},get value(){return this.list},get:function(n){return this.list[this.index[n]]},add:function(n){this.list.push(n),this.index[n.id]=this.list.length-1},update:function(n,t,r){this.list[this.index[n]][t]=r},U:function(){this.list=this.list.filter((function(n){var t=n.element;return document.body.contains(t)})),this.index=this.list.reduce((function(n,t,r){return n[t.id]=r,n}),{})},id:function(){return this.C++}},r=null,e={state:null,A:null,F:[],P:[],k:{},get value(){return this.state||(this.state={}),this.state},H:function(n){return this.A||(this.A={}),this.A[n]},S:function(n,t){if(!this.A)throw new Error("No templates state found");if(!this.A[n])throw new Error("No state found for ".concat(n));this.A[n].customElements[t]={};for(var r=0;r<this.A[n].keys.length;r++)this.A[n].customElements[t][this.A[n].keys[r]]={value:this.A[n].$[this.A[n].keys[r]].value,m:[],h:[],u:[]}},J:function(n,t,r){this.A||(this.A={}),this.A[n]||(this.A[n]={keys:[],$:{},customElements:{}}),this.A[n].$[t]={value:r,m:[],h:[],u:[]},this.A[n].keys.push(t)},L:function(n,t,r,e){this.A[n].customElements[t][r].value=e,-1===this.P.indexOf(t)&&(this.P.push(t),this.k[t]=[]),this.k[t].push(r)},set:function(n,t){this.state||(this.state={}),this.state[n]?this.state[n].value=t:this.state[n]={value:t,m:[],h:[],u:[]}},R:function(n){-1===this.F.indexOf(n)&&this.F.push(n)},B:function(){this.F=[],this.P=[],this.k={}}};var o=0;function i(){null!==r&&cancelAnimationFrame(r),r=requestAnimationFrame((function(n){n-o>16.666666666666668&&(o=n,function(){var n={};e.F.map((function(n){return e.value[n].m})).flat().forEach((function(t){return n[t]=!0}));var r=e.F;e.P.forEach((function(t){n[t]=!0,r=[].concat(_(r),_(e.k[t]))}));var o=Object.keys(n).map((function(n){return t.get(Number(n))}));!function(n,t,r,e){for(var o=0;o<t.length;o++){var i=t[o],u=[].concat(k(e),k(i.j)),a=r.value;if(r.A&&i.O&&r.A[i.O]){var f=r.A[i.O].customElements[i.id];a=P(P({},r.value),f)}i.j=[];var l=m(i.parentId,i.attributes,a,u,t),s=c(i.p,i.v,l,u),v=i.lastTemplateEvaluation.cloneNode(!0),d=y(s),b=M(v,d);b.length>0&&(t[o].lastTemplateEvaluation=d.cloneNode(!0),D(b,v,d,i.element,l,n,t))}}(t,o,e,r),t.U(),e.B()}())}))}var u=function(n){e.value[n].h.forEach((function(n){e.R(n)})),e.R(n),i()};return{render:function(n){console.log(e),p(n,e.value),function(n,t,r){for(var e=j(n,"self::*[text()[contains(., '{{')] and text()[contains(., '}}')]] | self::*[@*[contains(., '{{') and contains(., '}}')]] | .//*[text()[contains(., '{{')] and text()[contains(., '}}')]] | .//*[@*[contains(., '{{') and contains(., '}}')]]",(function(n){return!T(n)})),o=0;o<e.length;o++){var i=r.id(),u=e[o];u.innerHTML=u.innerHTML.trim();for(var a=O(i,r,u,u.outerHTML,t),c=E(u,a),f=0;f<c.length;f++)x(a,c[f])}}(n,e.value,t),function(n,t,r){for(var e=j(n,"template"),o=document.createDocumentFragment(),i=0;i<e.length;i++){var u=e[i].getAttribute("id");if(u){if(e[i].innerHTML=e[i].innerHTML.replace(/[\r\n]+\s*/g,""),1!==e[i].content.childNodes.length)throw new Error("Template ".concat(u," should have a single child"));A(u,e[i],t,r),o.appendChild(e[i])}}o.textContent=""}(n,e,t)},variable:function(t,r,o){var a=t;return o&&(a="".concat(o,".").concat(t)),r instanceof Function?r=function(t,r){return function(e){for(var o=arguments.length,i=new Array(o>1?o-1:0),u=1;u<o;u++)i[u-1]=arguments[u];"string"==typeof e&&(0===e.indexOf("cogId:")?e=e.replace("cogId:",""):(i.unshift(e),e=null)),n=e?"".concat(t,":").concat(e):t;var a=r.apply(void 0,i);return n=null,a}}(a,r):Array.isArray(r)&&(r=function(n,t){return new Proxy(t,{get:function(t,r){var e=t[r];return"push"===r?function(){u(n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return e.apply(t,o)}:e}})}(a,r)),o?e.J(o,t,r):e.set(t,r),{get value(){if(o){var r,i=null===(r=n)||void 0===r?void 0:r.split(":")[1];if(!i)throw new Error("Can't call outside of a template");return e.H(o).customElements[Number(i)][t].value}return null!==n&&-1===e.value[t].h.indexOf(n)&&e.value[t].h.push(n),e.value[t].value},set value(r){if(o){var a,c=null===(a=n)||void 0===a?void 0:a.split(":")[1];if(!c)throw new Error("Can't call outside of a template");e.L(o,Number(c),t,r),i()}else e.set(t,r),u(t)},set:function(n){o||(e.set(t,n),u(t))}}}}}(),X=V.variable,z=V.render;document.addEventListener("DOMContentLoaded",(function(){z(document.getElementById("app"))}));var G=X("checked",!1);return window.toggleChecked=function(){G.value=!G.value},n})()));