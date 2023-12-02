!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports["t"]=n():t["t"]=n()}(self,(()=>(()=>{"use strict";var t={};(t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"o",{value:!0})})(t);var n=function(t){return t.split("-").reduce((function(t,n,e){return t+(e?n[0].toUpperCase()+n.slice(1):n)}),"")};function e(t){return"true"===t||"false"!==t&&(isNaN(Number(t))?t:Number(t))}var r=function(t,n){var e="return (state) => {".concat(Object.keys(n).map((function(t){return"const ".concat(t,' = state["').concat(t,'"];')})).join("\n")," return ").concat(t,"}");return Function(e)()};function o(t,n){try{var e=r(t,n)(n);return Array.isArray(e)&&(e=e.join("")),e}catch(n){throw new Error("Failed to create function from expression {{".concat(t,"}}: ").concat(n.message))}}function u(t,r){for(var u=Object.assign({},r),a=0;a<t.length;a++)u[n(t[a].name)]=e(t[a].u?o(t[a].value,r):t[a].value);return u}function a(t){for(var n=t.indexOf("{{"),e=0,r=n;r<t.length;r++)if("{{"===t.slice(r,r+2)?(e++,r++):"}}"===t.slice(r,r+2)&&(e--,r++),0===e)return{start:n,end:r};return{start:n,end:-1}}var i=function(t){return t.replace(/[\r\n]+\s*/g,"")},c=function(t,n){for(var e,r,u=t,c=!0,f="";c;){var l=a(u),d=l.start,s=l.end;if(-1===s){c=!1;break}var v=u.slice(d+2,s-1),h=u.slice(0,d),m=u.slice(s+1),p=o((e=i(v),r=void 0,(r=document.createElement("div")).innerHTML=function(t){return t.replace(/<(?=[^<>]*>)/g,"&lt;").replace(/(?<=[^<>]*)>/g,"&gt;")}(e),r.textContent||r.innerText||""),n);f+="".concat(h).concat(p),u=m}return f+u},f=/\{\{(.+?)\}\}/,l=function(t){return Array.from(t.attributes).map((function(t){var n=f.exec(t.value);return{name:t.name,value:n?n[1]:t.value,u:!!n}}))};function d(t,n,e){for(var r=function(t){for(var n=[],e=document.evaluate("template",t,null,XPathResult.ORDERED_NODE_ITERATOR_TYPE,null),r=e.iterateNext();r;)n.push(r),r=e.iterateNext();return n}(t),o=document.createDocumentFragment(),u=0;u<r.length;u++){var a=r[u].getAttribute("id");if(a){if(r[u].innerHTML=i(r[u].innerHTML),1!==r[u].content.childNodes.length)throw new Error("Template ".concat(a," should have a single child"));s(a,r[u],n,e),o.appendChild(r[u])}}o.textContent=""}function s(t,n,e,r){function o(){return Reflect.construct(HTMLElement,[],o)}o.prototype=Object.create(HTMLElement.prototype),o.prototype.constructor=o,o.prototype.connectedCallback=function(t,n,e){return function(){var r,o,a=l(this),i=u(a,n),f=t.innerHTML.replace(/\{\{\s*children\s*\}\}/g,this.innerHTML),d=c(f,i),s=document.createElement("div");s.innerHTML=d;var v=s.firstChild;null===(r=this.parentNode)||void 0===r||r.insertBefore(v,this),e.add({element:v,i:f,l:d,v:a}),e.h(),null===(o=this.parentNode)||void 0===o||o.removeChild(this)}}(n,e,r),customElements.define(t,o)}var v=function(t,n,e){var o=n.getAttribute("data-on-".concat(t));if(!o)throw new Error("Missing data-handler attribute");var u=r(o,e);return function(n){try{u(e),n.preventDefault()}catch(n){throw new Error("".concat(n.message,": data-on-").concat(t,"=").concat(o))}}};function h(t,n,e){t.querySelectorAll("[data-on-".concat(n,"]")).forEach((function(t){var r=v(n,t,e);t.addEventListener(n,r),t["".concat(n,"Handler")]=r}))}function m(t,n){h(t,"click",n),h(t,"change",n)}var p=function(t){return t.nodeType!==Node.TEXT_NODE&&-1!==t.tagName.indexOf("-")},b=function(t,n){for(var e=document.evaluate("self::*[text()[contains(., '{{')] and text()[contains(., '}}')]] | self::*[@*[contains(., '{{') and contains(., '}}')]] | .//*[text()[contains(., '{{')] and text()[contains(., '}}')]] | .//*[@*[contains(., '{{') and contains(., '}}')]]",t,null,XPathResult.ORDERED_NODE_ITERATOR_TYPE,null),r=e.iterateNext();r;)p(r)||n.add({element:r,i:r.outerHTML,l:r.outerHTML,v:[]}),r=e.iterateNext()};function y(t,n){t.querySelectorAll("[data-on-".concat(n,"]")).forEach((function(t){var e=t["".concat(n,"Handler")];e&&t.removeEventListener(n,e)}))}function g(t,n){if(t.nodeType===Node.TEXT_NODE)return function(t,n){var e;return t.textContent!==n.textContent?[{node:t,m:n,content:null!==(e=n.textContent)&&void 0!==e?e:""}]:[]}(t,n);t.innerHTML=i(t.innerHTML),n.innerHTML=i(n.innerHTML);var r=function(t,n){for(var r=[],o=0;o<t.attributes.length;o++){var u=t.attributes[o],a=n.getAttribute(u.name);a!==u.value&&r.push({name:u.name,newValue:e(a||"")})}return r}(t,n);return(r.length>0?[{node:t,m:n,attributes:r}]:[]).concat(function(t,n){for(var e=[],r=0;r<t.childNodes.length;r++){var o=t.childNodes[r],u=n.childNodes[r];if(o.nodeType===Node.TEXT_NODE&&(null==u?void 0:u.nodeType)===Node.TEXT_NODE){if(o.textContent!==u.textContent){e.push({node:t,m:n,content:n.innerHTML});break}}else{var a=g(o,u);e=e.concat(a)}}return e}(t,n))}function w(t){return(new DOMParser).parseFromString(t,"text/html").body.firstChild}function x(t,n,e){for(var r=[],o=t;o!==n;)r.unshift(Array.prototype.indexOf.call(o.parentNode.childNodes,o)),o=o.parentNode;for(var u=e,a=0,i=r;a<i.length;a++){var c=i[a];if(!u.childNodes[c])return null;u=u.childNodes[c]}return u}var E=function(t,n,e,r,o){var u,a;if(p(n))null===(u=t.parentElement)||void 0===u||u.replaceChild(n,t);else if(void 0!==e)t.nodeType===Node.TEXT_NODE?t.textContent=e:(y(a=t,"click"),y(a,"change"),t.innerHTML=e,m(t,o));else if(void 0!==r)for(var i=0;i<r.length;i++){if(r[i].name.startsWith("data-attribute-")){var c=r[i].name.substring(15);r[i].newValue?t.setAttribute(c,r[i].newValue):t.removeAttribute(c)}t.setAttribute(r[i].name,r[i].newValue)}},N=function(t,n){for(var e=0;e<t.value.length;e++){var r=t.value[e],o=r.element,a=r.i,i=r.v,f=r.l,l=u(i,n),d=c(a,l),s=w(d),v=w(f),h=g(v,s);if(h.length>0){t.p(e,d);for(var m=0;m<h.length;m++){var p=x(h[m].node,v,o);E(p,h[m].m,h[m].content,h[m].attributes,l)}}}};function j(){return{list:[],get value(){return this.list},add:function(t){this.list.push(t)},p:function(t,n){this.list[t].l=n},h:function(){this.list=this.list.filter((function(t){var n=t.element;return document.body.contains(n)}))}}}var A=function(t){var n={list:[],get value(){return this.list},add:function(t){this.list.push(t)},p:function(t,n){this.list[t].l=n}},e=j(),r=function(t){return{element:null,get value(){if(this.element||(this.element=t.querySelector("#app")),!this.element)throw new Error("No app element found!");return this.element}}}(t),o={state:null,get value(){return this.state||(this.state={}),this.state},set:function(t,n){this.state||(this.state={}),this.state[t]=n}};function u(){N(n,o.value),N(e,o.value)}function a(t,n){setTimeout((function(){o.set(t,n),u()}),0)}var i=function(){d(r.value,o.value,e),b(r.value,n),m(r.value,o.value),u()},c=t.N;return c&&t.removeEventListener("DOMContentLoaded",c),t.addEventListener("DOMContentLoaded",i),t.N=i,{variable:function(t,n){return o.set(t,n),{set value(n){a(t,n)},get value(){return o.value[t]},set:function(n){a(t,n)}}}}}(document).variable;function T(t){return function(t){if(Array.isArray(t))return O(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(t){if("string"==typeof t)return O(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?O(t,n):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var M=A("todos",[{text:"hello",done:!1}]);A("save",(function(){var t=document.querySelector("[data-input=todo");null!=t&&t.value&&(M.set([].concat(T(M.value),[{text:t.value,done:!1}])),t.value="")})),A("toggleTodo",(function(t){var n=T(M.value);n[t].done=!n[t].done,M.set(n)})),A("Checkbox",(function(t){var n=t.index,e=void 0===n?-1:n,r=t.checked,o=void 0!==r&&r;return'<input type="checkbox" id="todo'.concat(e,'" data-on-change="toggleTodo(').concat(e,')" ').concat(o?"checked":""," />")}));var k=A("counter",0);return A("increment",(function(){k.set(k.value+1)})),t})()));