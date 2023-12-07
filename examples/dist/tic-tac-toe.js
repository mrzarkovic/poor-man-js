!function(n,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["t"]=t():n["t"]=t()}(self,(()=>(()=>{"use strict";var n={};function t(n,t){var r=n(t);return Array.isArray(r)&&(r=r.join("")),r}function r(n){for(var t=n.indexOf("{{"),r=0,e=t;e<n.length;e++)if("{"===n[e]&&"{"===n[e+1]?(r++,e++):"}"===n[e]&&"}"===n[e+1]&&(r--,e++),0===r)return{start:t,end:e};return{start:t,end:-1}}(n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"i",{value:!0})})(n);var e={},i=function(n,t){try{var r=n+JSON.stringify(Object.keys(t).join(""));if(!e[r]){var i="return (state) => {".concat(Object.keys(t).map((function(n){return"const ".concat(n,' = state["').concat(n,'"];')})).join("\n")," return ").concat(n,"}");e[r]=Function(i)()}return e[r]}catch(t){throw new Error("Failed to create function from expression {{".concat(n,"}}: ").concat(t.message))}},o=function(n,r,e){for(var o=n,u="",a=0;a<r.length;a++){var f=r[a],l=f.start,c=f.end,v=f.value,s=o.slice(0,l),d=o.slice(c+1),h=t(i(v,e),e);u+="".concat(s).concat(h),o=d}return u+o},u=function(n){for(var t,e,i=[],o=String(n),u=!0;u;){var a=r(o),f=a.start,l=a.end;if(-1===l){u=!1;break}var c=o.slice(f+2,l-1),v=o.slice(l+1),s=(t=c,e=void 0,(e=document.createElement("div")).innerHTML=function(n){return n.replace(/<(?=[^<>]*>)/g,"&lt;").replace(/(?<=[^<>]*)>/g,"&gt;")}(t),(e.textContent||e.innerText||"").replace(/[\r\n]+/g,""));i.push({start:f,end:l,value:s}),o=v}return i},a=function(n){return Array.from(n.attributes).map((function(n){var t=u(n.value);return{name:n.name,value:n.value,o:t,u:!!t.length}}))},f=function(n){return n.split("-").reduce((function(n,t,r){return n+(r?t[0].toUpperCase()+t.slice(1):t)}),"")};function l(n){return"true"===n||"false"!==n&&("null"===n?null:"undefined"===n?void 0:""===n?"":isNaN(Number(n))?n:Number(n))}var c={};function v(n,t){var r=JSON.stringify(n)+JSON.stringify(t);if(!c[r]){for(var e=Object.assign({},t),i=0;i<n.length;i++)e[f(n[i].name)]=l(n[i].u?o(n[i].value,n[i].o,t):n[i].value);c[r]=e}return c[r]}function s(n,t,r,e){var i=e.find((function(t){return t.id===n}));if(!i)return v(t,r);var o=s(i.parentId,i.attributes,r,e);return Object.assign({},o,v(t,o))}var d=function(n){return n.replace(/[\r\n]+\s*/g,"")};function h(n){return(new DOMParser).parseFromString(n,"text/html").body.firstChild}function m(n,t,r,e,i){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[],u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,a=arguments.length>7&&void 0!==arguments[7]?arguments[7]:[];t.add({id:n,parentId:u,element:r,l:e,lastTemplateEvaluation:i,attributes:o,o:a,shouldUpdate:!1})}function b(n,t,r){for(var e=function(n){for(var t=[],r=document.evaluate("template",n,null,XPathResult.ORDERED_NODE_ITERATOR_TYPE,null),e=r.iterateNext();e;)t.push(e),e=r.iterateNext();return t}(n),i=document.createDocumentFragment(),o=0;o<e.length;o++){var u=e[o].getAttribute("id");if(u){if(e[o].innerHTML=d(e[o].innerHTML),1!==e[o].content.childNodes.length)throw new Error("Template ".concat(u," should have a single child"));p(u,e[o],t,r),i.appendChild(e[o])}}i.textContent=""}function p(n,t,r,e){function i(){return Reflect.construct(HTMLElement,[],i)}i.prototype=Object.create(HTMLElement.prototype),i.prototype.constructor=i,i.prototype.connectedCallback=function(n,t,r){return function(){var e,i=r.id(),f=a(this),l=u(this.innerHTML);f.push({name:"children",value:this.innerHTML,o:l,u:!!l.length});var c=h(n.innerHTML);if(c.nodeType!==Node.TEXT_NODE)for(var v=c.querySelectorAll("*"),d=0;d<v.length;d++){var b=v[d];b.tagName.includes("-")&&b.setAttribute("data-parent-id",String(i))}var p=c.outerHTML;p||(p=c.textContent||"");var y=this.dataset.parentId?Number(this.dataset.parentId):null,w=h(p),g=u(p);try{var O=s(y,f,t,r.list);w=h(o(p,g,O))}catch(n){}w.cogAnchorId=i,null===(e=this.parentElement)||void 0===e||e.replaceChild(w,this),m(i,r,w,p,null,f,y,g)}}(t,r,e),customElements.define(n,i)}var y=function(n,t,r){var e=t.getAttribute("data-on-".concat(n));if(!e)throw new Error("Missing data-handler attribute");var o=i(e,r);return function(t){try{o(r),t.preventDefault()}catch(t){throw new Error("".concat(t.message,": data-on-").concat(n,"=").concat(e))}}};function w(n,t,r){n.querySelectorAll("[data-on-".concat(t,"]")).forEach((function(n){var e=y(t,n,r);n.addEventListener(t,e),n["".concat(t,"Handler")]=e}))}function g(n,t){w(n,"click",t),w(n,"change",t)}var O=function(n){return n.nodeType!==Node.TEXT_NODE&&-1!==n.tagName.indexOf("-")},x=function(n,t){for(var r=[],e=document.evaluate("self::*[text()[contains(., '{{')] and text()[contains(., '}}')]] | self::*[@*[contains(., '{{') and contains(., '}}')]] | .//*[text()[contains(., '{{')] and text()[contains(., '}}')]] | .//*[@*[contains(., '{{') and contains(., '}}')]]",n,null,XPathResult.ORDERED_NODE_ITERATOR_TYPE,null),i=e.iterateNext();i;)O(i)||r.push(i),i=e.iterateNext();for(var o=0;o<r.length;o++){var a=t.id(),f=r[o];f.innerHTML=f.innerHTML.trim();var l=f.outerHTML,c=u(l);m(a,t,f,l,-1!==l.indexOf("data-attribute")?l:null,[],null,c)}};function N(n,t){n.querySelectorAll("[data-on-".concat(t,"]")).forEach((function(n){var r=n["".concat(t,"Handler")];r&&n.removeEventListener(t,r)}))}function j(n,t){if(n.nodeType===Node.TEXT_NODE)return function(n,t){var r;return n.textContent!==t.textContent?[{node:n,content:null!==(r=t.textContent)&&void 0!==r?r:""}]:[]}(n,t);n.innerHTML=d(n.innerHTML),t.innerHTML=d(t.innerHTML);var r=function(n,t){for(var r=[],e=0;e<n.attributes.length;e++){var i=n.attributes[e],o=t.getAttribute(i.name);o!==i.value&&r.push({name:i.name,newValue:l(o||"")})}return r}(n,t);return(r.length>0?[{node:n,attributes:r}]:[]).concat(function(n,t){for(var r=[],e=!1,i=[],o=[],u=Math.max(n.childNodes.length,t.childNodes.length),a=0;a<u;a++){var f,l,c=n.childNodes[a],v=t.childNodes[a];if(void 0!==c&&c.nodeType===Node.TEXT_NODE&&void 0!==v&&v.nodeType===Node.TEXT_NODE){if((null===(f=c.textContent)||void 0===f?void 0:f.trim())!==(null===(l=v.textContent)||void 0===l?void 0:l.trim())){e=!0;break}}else void 0===c&&void 0!==v?o.push(v):void 0!==c&&void 0===v?i.push(c):r=r.concat(j(c,v))}return i.length>0&&r.push({node:n,v:i}),o.length>0&&r.push({node:n,h:o}),e?[{node:n,content:t.innerHTML}]:r}(n,t))}function S(n,t,r){for(var e=[],i=n;i!==t;)e.unshift(Array.prototype.indexOf.call(i.parentNode.childNodes,i)),i=i.parentNode;for(var o=r,u=0;u<e.length;u++){var a=e[u];if(!o.childNodes[a])return null;o=o.childNodes[a]}return o}function A(n,t){if(t.name.startsWith("data-attribute-")){var r=t.name.substring(15);t.newValue?(n[r]=!0,n.setAttribute(r,t.newValue)):(n[r]=!1,n.removeAttribute(r))}}var E=function(n,t,r,e,i,o,a,f){if(O(t)){var l,c=null!==(l=null==e?void 0:e.slice())&&void 0!==l?l:[];if(void 0!==r&&c.push({name:"children",newValue:r}),c.length){var v=function(n){return n.map((function(n){var t=u(n.newValue);return{name:n.name,value:n.newValue,o:t,u:!!t.length}}))}(c),s=f.index[n.cogAnchorId],d=f.list[s];f.update(s,"attributes",function(n,t){for(var r=n.concat(t),e={},i=0;i<r.length;i++)e[r[i].name]=r[i];return Object.values(e)}(d.attributes,v))}}else{if(void 0!==r)n.nodeType===Node.TEXT_NODE?n.textContent=r:(N(y=n,"click"),N(y,"change"),n.innerHTML=r,g(n,a));else if(void 0!==e)for(var h=0;h<e.length;h++)A(n,e[h]),n.setAttribute(e[h].name,e[h].newValue);else if(i.length){for(var m=document.createDocumentFragment(),b=0;b<i.length;b++)m.appendChild(i[b]);n.appendChild(m)}else if(o.length)for(var p=0;p<o.length;p++)n.removeChild(o[p]);var y}};function M(n,t,r){if(null===n)return t;var e=r.find((function(t){return t.id===n}));return M(e.parentId,e.attributes,r).concat(t)}var T=function(n){return new RegExp("(\\s".concat(n,"\\s|{").concat(n,"\\s|\\s").concat(n,"}|{").concat(n,"}|(").concat(n,"))"),"gm")},I=function(n,t){return n.map(T).some((function(n){return n.test(t)}))};function X(){return{m:0,list:[],index:{},get value(){return this.list},add:function(n){this.list.push(n),this.index[n.id]=this.list.length-1},update:function(n,t,r){"attributes"===t&&(this.list[n].shouldUpdate=!0),this.list[n][t]=r},p:function(n){this.list=n.filter((function(n){var t=n.element;return document.body.contains(t)})),this.index=this.list.reduce((function(n,t,r){return n[t.id]=r,n}),{})},id:function(){return this.m++}}}var R=function(n){var t=X(),r=function(n){return{element:null,get value(){if(this.element||(this.element=n.querySelector("#app")),!this.element)throw new Error("No app element found!");return this.element}}}(n),e=null,i={state:null,O:[],get value(){return this.state||(this.state={}),this.state},set:function(n,t){this.state||(this.state={}),this.state[n]=t,this.O.push(n)},N:function(){this.O=[]}};function u(n,r){i.set(n,r),null!==e&&cancelAnimationFrame(e),e=requestAnimationFrame((function(){!function(n,t,r){for(var e=0;e<n.value.length;e++){var i=n.value[e],u=i.id,a=i.parentId,f=i.attributes,l=i.element,c=i.l,v=i.lastTemplateEvaluation,d=i.o,m=i.shouldUpdate,b=M(a,f,n.list);if(I(r,c+" "+b.map((function(n){return n.value})).join(" "))||m){m&&n.update(e,"shouldUpdate",!1);var p=null,y=s(a,f,t,n.list);try{p=o(c,d,y)}catch(n){console.error(n);continue}var w=h(p);if(null===v){var g;n.update(e,"lastTemplateEvaluation",p),n.update(e,"element",w),w.cogAnchorId=u,null===(g=l.parentNode)||void 0===g||g.replaceChild(w,l)}else{var O=h(v),x=j(O,w);if(x.length>0){n.update(e,"lastTemplateEvaluation",p);for(var N=0;N<x.length;N++){var A=S(x[N].node,O,l),T=[],X=[];if(void 0!==x[N].h&&(X=x[N].h),void 0!==x[N].v)for(var R=0;R<x[N].v.length;R++){var k=S(x[N].v[R],O,l);k&&T.push(k)}E(A,x[N].node,x[N].content,x[N].attributes,X,T,y,n)}}}}}n.p(n.list)}(t,i.value,i.O),i.N()}))}return x(r.value,t),b(r.value,i.value,t),g(r.value,i.value),{variable:function(n,t){return u(n,t),{set value(t){u(n,t)},get value(){return i.value[n]},set:function(t){u(n,t)}}}}}(document).variable;function k(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var r=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var e,i,o,u,a=[],f=!0,l=!1;try{if(o=(r=r.call(n)).next,0===t){if(Object(r)!==r)return;f=!1}else for(;!(f=(e=o.call(r)).done)&&(a.push(e.value),a.length!==t);f=!0);}catch(n){l=!0,i=n}finally{try{if(!f&&null!=r.j&&(u=r.j(),Object(u)!==u))return}finally{if(l)throw i}}return a}}(n,t)||F(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(n,t){if(n){if("string"==typeof n)return H(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?H(n,t):void 0}}function H(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}var U=R("history",[Array(9).fill("")]),J=0,P=function(){return J%2==0},q=R("status","Next player: X"),B=R("squares",U.value[0]);function D(n){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var e=k(t[r],3),i=e[0],o=e[1],u=e[2];if(n[i]&&n[i]===n[o]&&n[i]===n[u])return q.set("Winner: "+n[i]),n[i]}return 10===U.value.length?(q.set("Draw"),null):(q.set("Next player: "+(P()?"X":"O")),null)}return window.jumpTo=function(n){J=n,B.set(U.value[J]),q.set("Next player: "+(P()?"X":"O"))},window.handleClick=function(n){if(!D(B.value)&&!B.value[n]){var t=B.value.slice();P()?t[n]="X":t[n]="O",function(n){var t,r=[].concat(function(n){if(Array.isArray(n))return H(n)}(t=U.value.slice(0,J+1))||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(t)||F(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[n]);J=r.length-1,U.set(r),B.set(n),D(n)}(t)}},n})()));