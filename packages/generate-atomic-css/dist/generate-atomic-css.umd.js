/**
 * generate-atomic-css
 * Generate Atomic CSS
 * Version: 1.2.39
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/generate-atomic-css
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).generateAtomicCss={})}(this,(function(t){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var c,u=t[Symbol.iterator]();!(r=(c=u.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==u.return||u.return()}finally{if(i)throw o}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var c,u,a=Function.prototype,l=Object.prototype,f=a.toString,s=l.hasOwnProperty,d=f.call(Object),h=l.toString,g=(c=Object.getPrototypeOf,u=Object,function(t){return c(u(t))});var p=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||"[object Object]"!=h.call(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=g(t);if(null===e)return!0;var n=s.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&f.call(n)==d},v="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};!function(t,e){t(e={exports:{}},e.exports)}((function(t,e){var n="[object Arguments]",r="[object Function]",i="[object GeneratorFunction]",o="[object Map]",c="[object Set]",u=/\w*$/,a=/^\[object .+?Constructor\]$/,l=/^(?:0|[1-9]\d*)$/,f={};f[n]=f["[object Array]"]=f["[object ArrayBuffer]"]=f["[object DataView]"]=f["[object Boolean]"]=f["[object Date]"]=f["[object Float32Array]"]=f["[object Float64Array]"]=f["[object Int8Array]"]=f["[object Int16Array]"]=f["[object Int32Array]"]=f[o]=f["[object Number]"]=f["[object Object]"]=f["[object RegExp]"]=f[c]=f["[object String]"]=f["[object Symbol]"]=f["[object Uint8Array]"]=f["[object Uint8ClampedArray]"]=f["[object Uint16Array]"]=f["[object Uint32Array]"]=!0,f["[object Error]"]=f[r]=f["[object WeakMap]"]=!1;var s="object"==typeof v&&v&&v.Object===Object&&v,d="object"==typeof self&&self&&self.Object===Object&&self,h=s||d||Function("return this")(),g=e&&!e.nodeType&&e,p=g&&t&&!t.nodeType&&t,y=p&&p.exports===g;function b(t,e){return t.set(e[0],e[1]),t}function m(t,e){return t.add(e),t}function O(t,e,n,r){var i=-1,o=t?t.length:0;for(r&&o&&(n=t[++i]);++i<o;)n=e(n,t[i],i,t);return n}function _(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function j(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n}function A(t,e){return function(n){return t(e(n))}}function w(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}var S,x=Array.prototype,T=Function.prototype,C=Object.prototype,E=h["__core-js_shared__"],I=(S=/[^.]+$/.exec(E&&E.keys&&E.keys.IE_PROTO||""))?"Symbol(src)_1."+S:"",N=T.toString,$=C.hasOwnProperty,F=C.toString,P=RegExp("^"+N.call($).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),D=y?h.Buffer:void 0,W=h.Symbol,R=h.Uint8Array,H=A(Object.getPrototypeOf,Object),G=Object.create,M=C.propertyIsEnumerable,L=x.splice,U=Object.getOwnPropertySymbols,k=D?D.isBuffer:void 0,B=A(Object.keys,Object),V=vt(h,"DataView"),z=vt(h,"Map"),J=vt(h,"Promise"),q=vt(h,"Set"),K=vt(h,"WeakMap"),Q=vt(Object,"create"),X=_t(V),Y=_t(z),Z=_t(J),tt=_t(q),et=_t(K),nt=W?W.prototype:void 0,rt=nt?nt.valueOf:void 0;function it(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function ot(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function ct(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function ut(t){this.__data__=new ot(t)}function at(t,e){var r=At(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&wt(t)}(t)&&$.call(t,"callee")&&(!M.call(t,"callee")||F.call(t)==n)}(t)?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],i=r.length,o=!!i;for(var c in t)!e&&!$.call(t,c)||o&&("length"==c||mt(c,i))||r.push(c);return r}function lt(t,e,n){var r=t[e];$.call(t,e)&&jt(r,n)&&(void 0!==n||e in t)||(t[e]=n)}function ft(t,e){for(var n=t.length;n--;)if(jt(t[n][0],e))return n;return-1}function st(t,e,a,l,s,d,h){var g;if(l&&(g=d?l(t,s,d,h):l(t)),void 0!==g)return g;if(!Tt(t))return t;var p=At(t);if(p){if(g=function(t){var e=t.length,n=t.constructor(e);e&&"string"==typeof t[0]&&$.call(t,"index")&&(n.index=t.index,n.input=t.input);return n}(t),!e)return function(t,e){var n=-1,r=t.length;e||(e=Array(r));for(;++n<r;)e[n]=t[n];return e}(t,g)}else{var v=bt(t),y=v==r||v==i;if(St(t))return function(t,e){if(e)return t.slice();var n=new t.constructor(t.length);return t.copy(n),n}(t,e);if("[object Object]"==v||v==n||y&&!d){if(_(t))return d?t:{};if(g=function(t){return"function"!=typeof t.constructor||Ot(t)?{}:(e=H(t),Tt(e)?G(e):{});var e}(y?{}:t),!e)return function(t,e){return gt(t,yt(t),e)}(t,function(t,e){return t&&gt(e,Ct(e),t)}(g,t))}else{if(!f[v])return d?t:{};g=function(t,e,n,r){var i=t.constructor;switch(e){case"[object ArrayBuffer]":return ht(t);case"[object Boolean]":case"[object Date]":return new i(+t);case"[object DataView]":return function(t,e){var n=e?ht(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}(t,r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return function(t,e){var n=e?ht(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}(t,r);case o:return function(t,e,n){return O(e?n(j(t),!0):j(t),b,new t.constructor)}(t,r,n);case"[object Number]":case"[object String]":return new i(t);case"[object RegExp]":return function(t){var e=new t.constructor(t.source,u.exec(t));return e.lastIndex=t.lastIndex,e}(t);case c:return function(t,e,n){return O(e?n(w(t),!0):w(t),m,new t.constructor)}(t,r,n);case"[object Symbol]":return a=t,rt?Object(rt.call(a)):{}}var a}(t,v,st,e)}}h||(h=new ut);var A=h.get(t);if(A)return A;if(h.set(t,g),!p)var S=a?function(t){return function(t,e,n){var r=e(t);return At(t)?r:function(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}(r,n(t))}(t,Ct,yt)}(t):Ct(t);return function(t,e){for(var n=-1,r=t?t.length:0;++n<r&&!1!==e(t[n],n,t););}(S||t,(function(n,r){S&&(n=t[r=n]),lt(g,r,st(n,e,a,l,r,t,h))})),g}function dt(t){return!(!Tt(t)||function(t){return!!I&&I in t}(t))&&(xt(t)||_(t)?P:a).test(_t(t))}function ht(t){var e=new t.constructor(t.byteLength);return new R(e).set(new R(t)),e}function gt(t,e,n,r){n||(n={});for(var i=-1,o=e.length;++i<o;){var c=e[i],u=r?r(n[c],t[c],c,n,t):void 0;lt(n,c,void 0===u?t[c]:u)}return n}function pt(t,e){var n,r,i=t.__data__;return("string"==(r=typeof(n=e))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?i["string"==typeof e?"string":"hash"]:i.map}function vt(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return dt(n)?n:void 0}it.prototype.clear=function(){this.__data__=Q?Q(null):{}},it.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},it.prototype.get=function(t){var e=this.__data__;if(Q){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return $.call(e,t)?e[t]:void 0},it.prototype.has=function(t){var e=this.__data__;return Q?void 0!==e[t]:$.call(e,t)},it.prototype.set=function(t,e){return this.__data__[t]=Q&&void 0===e?"__lodash_hash_undefined__":e,this},ot.prototype.clear=function(){this.__data__=[]},ot.prototype.delete=function(t){var e=this.__data__,n=ft(e,t);return!(n<0)&&(n==e.length-1?e.pop():L.call(e,n,1),!0)},ot.prototype.get=function(t){var e=this.__data__,n=ft(e,t);return n<0?void 0:e[n][1]},ot.prototype.has=function(t){return ft(this.__data__,t)>-1},ot.prototype.set=function(t,e){var n=this.__data__,r=ft(n,t);return r<0?n.push([t,e]):n[r][1]=e,this},ct.prototype.clear=function(){this.__data__={hash:new it,map:new(z||ot),string:new it}},ct.prototype.delete=function(t){return pt(this,t).delete(t)},ct.prototype.get=function(t){return pt(this,t).get(t)},ct.prototype.has=function(t){return pt(this,t).has(t)},ct.prototype.set=function(t,e){return pt(this,t).set(t,e),this},ut.prototype.clear=function(){this.__data__=new ot},ut.prototype.delete=function(t){return this.__data__.delete(t)},ut.prototype.get=function(t){return this.__data__.get(t)},ut.prototype.has=function(t){return this.__data__.has(t)},ut.prototype.set=function(t,e){var n=this.__data__;if(n instanceof ot){var r=n.__data__;if(!z||r.length<199)return r.push([t,e]),this;n=this.__data__=new ct(r)}return n.set(t,e),this};var yt=U?A(U,Object):function(){return[]},bt=function(t){return F.call(t)};function mt(t,e){return!!(e=null==e?9007199254740991:e)&&("number"==typeof t||l.test(t))&&t>-1&&t%1==0&&t<e}function Ot(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||C)}function _t(t){if(null!=t){try{return N.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function jt(t,e){return t===e||t!=t&&e!=e}(V&&"[object DataView]"!=bt(new V(new ArrayBuffer(1)))||z&&bt(new z)!=o||J&&"[object Promise]"!=bt(J.resolve())||q&&bt(new q)!=c||K&&"[object WeakMap]"!=bt(new K))&&(bt=function(t){var e=F.call(t),n="[object Object]"==e?t.constructor:void 0,r=n?_t(n):void 0;if(r)switch(r){case X:return"[object DataView]";case Y:return o;case Z:return"[object Promise]";case tt:return c;case et:return"[object WeakMap]"}return e});var At=Array.isArray;function wt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}(t.length)&&!xt(t)}var St=k||function(){return!1};function xt(t){var e=Tt(t)?F.call(t):"";return e==r||e==i}function Tt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Ct(t){return wt(t)?at(t):function(t){if(!Ot(t))return B(t);var e=[];for(var n in Object(t))$.call(t,n)&&"constructor"!=n&&e.push(n);return e}(t)}t.exports=function(t){return st(t,!0,!0)}}));function y(t){const e={value:t,hungry:!1,optional:!1};return(e.value.endsWith("?*")||e.value.endsWith("*?"))&&e.value.length>2?(e.value=e.value.slice(0,e.value.length-2),e.optional=!0,e.hungry=!0):e.value.endsWith("?")&&e.value.length>1?(e.value=e.value.slice(0,e.value.length-1),e.optional=!0):e.value.endsWith("*")&&e.value.length>1&&(e.value=e.value.slice(0,e.value.length-1),e.hungry=!0),e}function b(t,e){return function(t,e,n){if("string"!=typeof t||!t.length)return null;if(e&&"number"==typeof e||(e=0),!t[e+1])return null;if(t[e+1]&&(!n&&t[e+1].trim()||n&&(t[e+1].trim()||"\n\r".includes(t[e+1]))))return e+1;if(t[e+2]&&(!n&&t[e+2].trim()||n&&(t[e+2].trim()||"\n\r".includes(t[e+2]))))return e+2;for(let r=e+1,i=t.length;r<i;r++)if(t[r]&&(!n&&t[r].trim()||n&&(t[r].trim()||"\n\r".includes(t[r]))))return r;return null}(t,e,!1)}function m(t,e){return function(t,e,n){if("string"!=typeof t||!t.length)return null;if(e&&"number"==typeof e||(e=0),e<1)return null;if(t[e-1]&&(!n&&t[e-1].trim()||n&&(t[e-1].trim()||"\n\r".includes(t[e-1]))))return e-1;if(t[e-2]&&(!n&&t[e-2].trim()||n&&(t[e-2].trim()||"\n\r".includes(t[e-2]))))return e-2;for(let r=e;r--;)if(t[r]&&(!n&&t[r].trim()||n&&(t[r].trim()||"\n\r".includes(t[r]))))return r;return null}(t,e,!1)}function O(t,e,n,r,i){if("string"!=typeof e||!e.length)return null;if(n&&"number"==typeof n||(n=0),"right"===t&&!e[n+1]||"left"===t&&!e[n-1])return null;let o=n;const c=[];let u,a,l,f=0;for(;f<i.length;){if("string"!=typeof i[f]||!i[f].length){f+=1;continue}const{value:n,optional:s,hungry:d}=y(i[f]),h="right"===t?b(e,o):m(e,o);if(!(r.i&&e[h].toLowerCase()===n.toLowerCase()||!r.i&&e[h]===n)){if(s){f+=1;continue}if(l){f+=1,l=void 0;continue}return null}{const i="right"===t?b(e,h):m(e,h);d&&(r.i&&e[i].toLowerCase()===n.toLowerCase()||!r.i&&e[i]===n)?l=!0:f+=1,"right"===t&&h>o+1?c.push([o+1,h]):"left"===t&&h<o-1&&c.unshift([h+1,o]),o=h,"right"===t?(void 0===u&&(u=h),a=h):(void 0===a&&(a=h),u=h)}}return void 0===u?null:{gaps:c,leftmostChar:u,rightmostChar:a}}function _(t,e,...n){if(!n.length)return m(t,e);const r={i:!1};let i;return i=p(n[0])?{...r,...n.shift()}:r,O("left",t,e,i,Array.from(n).reverse())}function j(t,e,...n){if(!n.length)return b(t,e);const r={i:!1};let i;return i=p(n[0])?{...r,...n.shift()}:r,O("right",t,e,i,n)}var A=Array.isArray;function w(t){return"string"==typeof t}var S={CONFIGHEAD:"GENERATE-ATOMIC-CSS-CONFIG-STARTS",CONFIGTAIL:"GENERATE-ATOMIC-CSS-CONFIG-ENDS",CONTENTHEAD:"GENERATE-ATOMIC-CSS-CONTENT-STARTS",CONTENTTAIL:"GENERATE-ATOMIC-CSS-CONTENT-ENDS"},x=["px","em","%","rem","cm","mm","in","pt","pc","ex","ch","vw","vmin","vmax"],T=S.CONFIGHEAD,C=S.CONFIGTAIL,E=S.CONTENTHEAD,I=S.CONTENTTAIL,N=[":"];function $(t){var e=t,n="",r="";if(t.includes(T)&&t.includes(C)){if(-1!==t.indexOf(C)&&-1!==t.indexOf(E)&&t.indexOf(C)>t.indexOf(E))throw new Error("generate-atomic-css: [THROW_ID_02] Config heads are after config tails!");var i=t.indexOf(T)+T.length,o=t.indexOf(C);if("*"===t[b(t,i)]&&"/"===t[b(t,b(t,i))]&&(i=b(t,b(t,i))+1),"*"===t[m(t,o)]&&"/"===t[m(t,m(t,o))]&&(o=m(t,m(t,o))),!w(e=t.slice(i,o).trim())||!e.trim().length)return{log:{count:0},result:""}}else if(t.includes(T)&&!t.includes(C)&&t.includes(E)){if(t.indexOf(T)>t.indexOf(E))throw new Error("generate-atomic-css: [THROW_ID_03] Config heads are after content heads!");e=t.slice(t.indexOf(T)+T.length,t.indexOf(E))}else if(t.includes(T)||t.includes(C)||!t.includes(E)&&!t.includes(I)){for(var c=new RegExp("(\\/\\s*\\*\\s*)*".concat(E,"(\\s*\\*\\s*\\/)*")),u=new RegExp("(\\/\\s*\\*\\s*)*".concat(I,"(\\s*\\*\\s*\\/)*")),a=!1,l=[],f=[],s=t.split("\n").filter((function(t){return!!a||(t.includes("$$$")||t.includes("{")||t.includes(":")?(a=!0,!0):(l.push(t),!1))})),d=s.length;d--&&!(s[d].includes("$$$")||s[d].includes("}")||s[d].includes(":"));)f.unshift(s.pop());e=s.join("\n").replace(c,"").replace(u,""),l.length&&(n="".concat(l.join("\n"),"\n")),f.length&&(r="\n".concat(f.join("\n")))}else if((e=t).includes(E)){if(m(t,e.indexOf(E))){var h=e.indexOf(E);_(t,h,"/","*")&&(h=_(t,h,"/","*").leftmostChar),n=0===h?"":t.slice(0,h)}var g=e.indexOf(E)+E.length;j(e,g-1,"*","/")&&(g=j(e,g-1,"*","/").rightmostChar+1);var p=null;if(t.includes(I)){p=t.indexOf(I),"*"===t[m(t,p)]&&"/"===t[m(t,m(t,p))]&&(p=m(t,m(t,p)));var v=t.indexOf(I)+I.length;"*"===t[b(t,v-1)]&&"/"===t[b(t,b(t,v-1))]&&(v=b(t,b(t,v-1))+1),b(t,v)&&(r=t.slice(v))}e=p?e.slice(g,p).trim():e.slice(g).trim()}else if(e.includes(I)){var y,O=[],A=!1,S=(e=e.split("\n").filter((function(t){return t.includes("$$$")||A?(A||(A=!0),!0):(A||O.push(t),!1)})).join("\n")).indexOf(I);_(e,S,"/","*")&&(S=_(e,S,"/","*").leftmostChar),e=e.slice(0,S).trim(),O.length&&(n="".concat(O.join("\n"),"\n")),b(t,t.indexOf(I)+I.length)&&(y=t.indexOf(I)+I.length,"*"===t[b(t,y)]&&"/"===t[b(t,b(t,y))]&&(y=b(t,b(t,y))+1,b(t,y)&&(r=t.slice(y))))}return[e,n,r]}function F(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!e)return t;var n=Array.from(t);if(n.length&&w(n[0])&&!n[0].trim().length)do{n.shift()}while(w(n[0])&&!n[0].trim().length);if(n.length&&w(n[n.length-1])&&!n[n.length-1].trim().length)do{n.pop()}while(n&&n[n.length-1]&&!n[n.length-1].trim().length);return n}function P(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:500,i=n,o=r,c=t;if(t.lastIndexOf("}")>0&&t.slice(t.lastIndexOf("}")+1).includes("|")?e=t.slice(t.lastIndexOf("}")+1).split("|").filter((function(t){return t.trim().length})).map((function(t){return t.trim()})).filter((function(t){return String(t).split("").every((function(t){return/\d/g.test(t)}))})):t.includes("|")&&(e=t.split("|").filter((function(t){return t.trim().length})).map((function(t){return t.trim()})).filter((function(t){return String(t).split("").every((function(t){return/\d/g.test(t)}))}))),A(e)&&(1===e.length?o=Number.parseInt(e[0],10):e.length>1&&(i=Number.parseInt(e[0],10),o=Number.parseInt(e[1],10))),t.lastIndexOf("}")>0&&t.slice(t.lastIndexOf("}")+1).includes("|")){if((c=t.slice(0,t.indexOf("|",t.lastIndexOf("}")+1)).trimEnd()).trim().startsWith("|"))for(;c.trim().startsWith("|");)c=c.trimStart().slice(1)}else{for(var u=null,a=!1,l=0,f=t.length,s=null,d=0,h=t.length;d<h;d++)if("0123456789".includes(t[d])?null===s&&t[d].trim().length&&(s=!0):"|"!==t[d]&&t[d].trim().length&&(s=!1),!t[d+1]&&s&&(f=u),"|"===t[d]){if(s){f=u;break}u=d,s=null}else!a&&t[d].trim().length&&(a=!0,null!==u&&(l=u+1));c=t.slice(l,f).trimEnd()}return[i,o,c]}function D(t,e,n,r,o,c){for(var u,a=0,l=i(P(t,0,500),3),f=l[0],s=l[1],d=l[2],h=r-n,g="",p=function(t){for(var r=0,i=0,l=function(e,n){d[e].charCodeAt(0);if("$"===d[e]&&"$"===d[e-1]&&"$"===d[e-2]){var o,u=d.slice(e+1);if(0!==t||!x.some((function(t){if(u.startsWith(t))return o=t,!0}))||"{"!==d[b(d,e+o.length)]&&d[e+o.length+1].trim().length){var a;if(x.some((function(t){if(d.slice(e+1).startsWith(t))return a=t,!0})),!d[e-3].trim().length||N.some((function(t){return d.slice(i,e-2).trim().endsWith(t)}))){var l=0;0===t&&x.some((function(t){return"".concat(d.slice(i,e-2)).startsWith(t)&&(l=t.length),!0})),g+="".concat(d.slice(i+l,e-2)).concat(c?String(t).padStart(String(s).length+(0===t&&a?a.length:0)):t)}else d[e+1].trim().length&&"{"!==d[b(d,e)]?(g+="".concat(d.slice(i,e-2)).concat(t),c&&(r=String(s).length-String(t).length)):g+="".concat(d.slice(i,e-2)).concat(c?String(t).padEnd(String(s).length+(0===t&&a?a.length:0)):t);i=e+1}else g+="".concat(d.slice(i,e-2)).concat(c?String(t).padStart(String(s).length-String(t).length+o.length+1):t),i=e+1+(o?o.length:0)}if("{"===d[e]&&c&&r&&(g+="".concat(d.slice(i,e)).concat(" ".repeat(r)),i=e,r=0),!d[e+1]){var f,h=d.slice(i);0===t&&x.some((function(t){if(h.startsWith(t))return f=t,!0}))?g+="".concat(d.slice(i+f.length)):g+="".concat(d.slice(i)),g+="".concat(t!==s?"\n":"")}},p=0,v=d.length;p<v;p++)l(p);o.count+=1,"function"==typeof e&&(u=Math.floor(n+t/(s-f)*h))!==a&&(a=u,e(u))},v=f;v<=s;v++)p(v);return g}function W(t,e){return/\.\w/g.test(t)&&(e.count+=1),t}t.extractFromToSource=P,t.genAtomic=function(t,o){if("string"!=typeof t)throw new Error('generate-atomic-css: [THROW_ID_01] First input argument must be a string! It was given as "'.concat(JSON.stringify(t,null,4),'" (type ').concat(e(t),")"));var c=S.CONFIGHEAD,u=S.CONFIGTAIL,a=S.CONTENTHEAD,l=S.CONTENTTAIL,f={count:0},s=function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach((function(e){n(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}({},{includeConfig:!0,includeHeadsAndTails:!0,pad:!0,configOverride:null,reportProgressFunc:null,reportProgressFuncFrom:0,reportProgressFuncTo:100},{},o);if(s.includeConfig&&!s.includeHeadsAndTails&&(s.includeHeadsAndTails=!0),!s.configOverride&&!t.includes("$$$")&&!t.includes(c)&&!t.includes(u)&&!t.includes(a)&&!t.includes(l)||w(s.configOverride)&&!s.configOverride.includes("$$$")&&!s.configOverride.includes(c)&&!s.configOverride.includes(u)&&!s.configOverride.includes(a)&&!s.configOverride.includes(l))return{log:{count:0},result:t};var d="",h="",g=i($(s.configOverride?s.configOverride:t),3),p=g[0],v=g[1],y=g[2];if(!w(p)||!p.trim())return{log:{count:0},result:""};if((s.includeConfig||s.includeHeadsAndTails)&&(d="".concat(a," */\n"),s.includeConfig||(d="/* ".concat(d)),h="\n/* ".concat(l," */")),s.includeConfig&&(d="/* ".concat(c,"\n").concat(p.trim(),"\n").concat(u,"\n").concat(d)),t.includes(c)&&null!=m(t,t.indexOf(c))){var O=t.indexOf(c);"*"===t[m(t,O)]&&"/"===t[m(t,m(t,O))]&&(O=m(t,m(t,O)));var _="/* ";("/"===t[b(t,O-1)]&&"*"===t[b(t,b(t,O-1))]||d.trim().startsWith("/*"))&&(_=""),d="".concat(t.slice(0,O)).concat(_).concat(d)}if(t.includes(u)&&b(t,t.indexOf(u)+u.length)){var j=t.indexOf(u)+u.length;if("*"===t[b(t,t.indexOf(u)+u.length)]&&"/"===t[b(t,b(t,t.indexOf(u)+u.length))]&&(j=b(t,b(t,t.indexOf(u)+u.length))+1),t.slice(b(t,j-1)).startsWith(a)){var A=b(t,j);"*"===t[b(t,(j=A+a.length)-1)]&&"/"===t[b(t,b(t,j-1))]&&(j=b(t,b(t,j-1))+1),t.includes(l)&&(j=t.indexOf(l)+l.length,"*"===t[b(t,j)]&&"/"===t[b(t,b(t,j))]&&(j=b(t,b(t,j))+1))}var x=t.slice(j);x.length&&x.includes(l)&&(j=t.indexOf(l)+l.length,"*"===t[b(t,j)]&&"/"===t[b(t,b(t,j))]&&(j=b(t,b(t,j))+1)),h="".concat(h).concat(t[j]&&b(t,j-1)?t.slice(j):"")}if(w(v)&&(d="".concat(v).concat(d)),w(y)){if(y.trim().endsWith("/*")&&!y.trim().startsWith("*/")){var T="";w(y)&&y[0]&&!y[0].trim()&&(T=y.slice(0,b(y,0))),y="".concat(T,"/* ").concat(y.trim())}h="".concat(h).concat(y)}var C="".concat(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.includeConfig||e.includeHeadsAndTails?t.trim():t}("".concat(d).concat(function(t,e,n,r){var i=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],o=arguments.length>5?arguments[5]:void 0,c=arguments.length>6?arguments[6]:void 0;return F(t.split(/\r?\n/).map((function(t,i,u){return t.includes("$$$")?D(t,e,n+(r-n)/u.length*i,n+(r-n)/u.length*(i+1),o,c):W(t,o)})),i).join("\n")}(p,s.reportProgressFunc,s.reportProgressFuncFrom,s.reportProgressFuncTo,!0,f,s.pad)).concat(h),s),"\n");return{log:{count:f.count},result:C}},t.headsAndTails=S,t.version="1.2.39",Object.defineProperty(t,"__esModule",{value:!0})}));
