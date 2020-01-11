/**
 * color-shorthand-hex-to-six-digit
 * Convert shorthand hex color codes into full
 * Version: 2.10.53
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/color-shorthand-hex-to-six-digit
 */

!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t=t||self).colorShorthandHexToSixDigit=r()}(this,(function(){"use strict";
/*!
   * hex-color-regex <https://github.com/regexps/hex-color-regex>
   *
   * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
   * Released under the MIT license.
   */var t,r,e=Function.prototype,n=Object.prototype,o=e.toString,c=n.hasOwnProperty,a=o.call(Object),u=n.toString,i=(t=Object.getPrototypeOf,r=Object,function(e){return t(r(e))});var f=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||"[object Object]"!=u.call(t)||function(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}(t))return!1;var r=i(t);if(null===r)return!0;var e=c.call(r,"constructor")&&r.constructor;return"function"==typeof e&&e instanceof e&&o.call(e)==a},s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var l=function(t,r){return t(r={exports:{}},r.exports),r.exports}((function(t,r){var e="[object Arguments]",n="[object Function]",o="[object GeneratorFunction]",c="[object Map]",a="[object Set]",u=/\w*$/,i=/^\[object .+?Constructor\]$/,f=/^(?:0|[1-9]\d*)$/,l={};l[e]=l["[object Array]"]=l["[object ArrayBuffer]"]=l["[object DataView]"]=l["[object Boolean]"]=l["[object Date]"]=l["[object Float32Array]"]=l["[object Float64Array]"]=l["[object Int8Array]"]=l["[object Int16Array]"]=l["[object Int32Array]"]=l[c]=l["[object Number]"]=l["[object Object]"]=l["[object RegExp]"]=l[a]=l["[object String]"]=l["[object Symbol]"]=l["[object Uint8Array]"]=l["[object Uint8ClampedArray]"]=l["[object Uint16Array]"]=l["[object Uint32Array]"]=!0,l["[object Error]"]=l[n]=l["[object WeakMap]"]=!1;var p="object"==typeof s&&s&&s.Object===Object&&s,b="object"==typeof self&&self&&self.Object===Object&&self,y=p||b||Function("return this")(),h=r&&!r.nodeType&&r,_=h&&t&&!t.nodeType&&t,j=_&&_.exports===h;function v(t,r){return t.set(r[0],r[1]),t}function d(t,r){return t.add(r),t}function g(t,r,e,n){var o=-1,c=t?t.length:0;for(n&&c&&(e=t[++o]);++o<c;)e=r(e,t[o],o,t);return e}function w(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}function A(t){var r=-1,e=Array(t.size);return t.forEach((function(t,n){e[++r]=[n,t]})),e}function O(t,r){return function(e){return t(r(e))}}function m(t){var r=-1,e=Array(t.size);return t.forEach((function(t){e[++r]=t})),e}var x,S=Array.prototype,I=Function.prototype,P=Object.prototype,E=y["__core-js_shared__"],F=(x=/[^.]+$/.exec(E&&E.keys&&E.keys.IE_PROTO||""))?"Symbol(src)_1."+x:"",U=I.toString,$=P.hasOwnProperty,k=P.toString,D=RegExp("^"+U.call($).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),B=j?y.Buffer:void 0,M=y.Symbol,T=y.Uint8Array,V=O(Object.getPrototypeOf,Object),C=Object.create,R=P.propertyIsEnumerable,W=S.splice,L=Object.getOwnPropertySymbols,z=B?B.isBuffer:void 0,N=O(Object.keys,Object),G=_t(y,"DataView"),H=_t(y,"Map"),q=_t(y,"Promise"),J=_t(y,"Set"),K=_t(y,"WeakMap"),Q=_t(Object,"create"),X=wt(G),Y=wt(H),Z=wt(q),tt=wt(J),rt=wt(K),et=M?M.prototype:void 0,nt=et?et.valueOf:void 0;function ot(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function ct(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function at(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function ut(t){this.__data__=new ct(t)}function it(t,r){var n=Ot(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&mt(t)}(t)&&$.call(t,"callee")&&(!R.call(t,"callee")||k.call(t)==e)}(t)?function(t,r){for(var e=-1,n=Array(t);++e<t;)n[e]=r(e);return n}(t.length,String):[],o=n.length,c=!!o;for(var a in t)!r&&!$.call(t,a)||c&&("length"==a||dt(a,o))||n.push(a);return n}function ft(t,r,e){var n=t[r];$.call(t,r)&&At(n,e)&&(void 0!==e||r in t)||(t[r]=e)}function st(t,r){for(var e=t.length;e--;)if(At(t[e][0],r))return e;return-1}function lt(t,r,i,f,s,p,b){var y;if(f&&(y=p?f(t,s,p,b):f(t)),void 0!==y)return y;if(!It(t))return t;var h=Ot(t);if(h){if(y=function(t){var r=t.length,e=t.constructor(r);r&&"string"==typeof t[0]&&$.call(t,"index")&&(e.index=t.index,e.input=t.input);return e}(t),!r)return function(t,r){var e=-1,n=t.length;r||(r=Array(n));for(;++e<n;)r[e]=t[e];return r}(t,y)}else{var _=vt(t),j=_==n||_==o;if(xt(t))return function(t,r){if(r)return t.slice();var e=new t.constructor(t.length);return t.copy(e),e}(t,r);if("[object Object]"==_||_==e||j&&!p){if(w(t))return p?t:{};if(y=function(t){return"function"!=typeof t.constructor||gt(t)?{}:(r=V(t),It(r)?C(r):{});var r}(j?{}:t),!r)return function(t,r){return yt(t,jt(t),r)}(t,function(t,r){return t&&yt(r,Pt(r),t)}(y,t))}else{if(!l[_])return p?t:{};y=function(t,r,e,n){var o=t.constructor;switch(r){case"[object ArrayBuffer]":return bt(t);case"[object Boolean]":case"[object Date]":return new o(+t);case"[object DataView]":return function(t,r){var e=r?bt(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.byteLength)}(t,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return function(t,r){var e=r?bt(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)}(t,n);case c:return function(t,r,e){return g(r?e(A(t),!0):A(t),v,new t.constructor)}(t,n,e);case"[object Number]":case"[object String]":return new o(t);case"[object RegExp]":return function(t){var r=new t.constructor(t.source,u.exec(t));return r.lastIndex=t.lastIndex,r}(t);case a:return function(t,r,e){return g(r?e(m(t),!0):m(t),d,new t.constructor)}(t,n,e);case"[object Symbol]":return i=t,nt?Object(nt.call(i)):{}}var i}(t,_,lt,r)}}b||(b=new ut);var O=b.get(t);if(O)return O;if(b.set(t,y),!h)var x=i?function(t){return function(t,r,e){var n=r(t);return Ot(t)?n:function(t,r){for(var e=-1,n=r.length,o=t.length;++e<n;)t[o+e]=r[e];return t}(n,e(t))}(t,Pt,jt)}(t):Pt(t);return function(t,r){for(var e=-1,n=t?t.length:0;++e<n&&!1!==r(t[e],e,t););}(x||t,(function(e,n){x&&(e=t[n=e]),ft(y,n,lt(e,r,i,f,n,t,b))})),y}function pt(t){return!(!It(t)||function(t){return!!F&&F in t}(t))&&(St(t)||w(t)?D:i).test(wt(t))}function bt(t){var r=new t.constructor(t.byteLength);return new T(r).set(new T(t)),r}function yt(t,r,e,n){e||(e={});for(var o=-1,c=r.length;++o<c;){var a=r[o],u=n?n(e[a],t[a],a,e,t):void 0;ft(e,a,void 0===u?t[a]:u)}return e}function ht(t,r){var e,n,o=t.__data__;return("string"==(n=typeof(e=r))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e)?o["string"==typeof r?"string":"hash"]:o.map}function _t(t,r){var e=function(t,r){return null==t?void 0:t[r]}(t,r);return pt(e)?e:void 0}ot.prototype.clear=function(){this.__data__=Q?Q(null):{}},ot.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},ot.prototype.get=function(t){var r=this.__data__;if(Q){var e=r[t];return"__lodash_hash_undefined__"===e?void 0:e}return $.call(r,t)?r[t]:void 0},ot.prototype.has=function(t){var r=this.__data__;return Q?void 0!==r[t]:$.call(r,t)},ot.prototype.set=function(t,r){return this.__data__[t]=Q&&void 0===r?"__lodash_hash_undefined__":r,this},ct.prototype.clear=function(){this.__data__=[]},ct.prototype.delete=function(t){var r=this.__data__,e=st(r,t);return!(e<0)&&(e==r.length-1?r.pop():W.call(r,e,1),!0)},ct.prototype.get=function(t){var r=this.__data__,e=st(r,t);return e<0?void 0:r[e][1]},ct.prototype.has=function(t){return st(this.__data__,t)>-1},ct.prototype.set=function(t,r){var e=this.__data__,n=st(e,t);return n<0?e.push([t,r]):e[n][1]=r,this},at.prototype.clear=function(){this.__data__={hash:new ot,map:new(H||ct),string:new ot}},at.prototype.delete=function(t){return ht(this,t).delete(t)},at.prototype.get=function(t){return ht(this,t).get(t)},at.prototype.has=function(t){return ht(this,t).has(t)},at.prototype.set=function(t,r){return ht(this,t).set(t,r),this},ut.prototype.clear=function(){this.__data__=new ct},ut.prototype.delete=function(t){return this.__data__.delete(t)},ut.prototype.get=function(t){return this.__data__.get(t)},ut.prototype.has=function(t){return this.__data__.has(t)},ut.prototype.set=function(t,r){var e=this.__data__;if(e instanceof ct){var n=e.__data__;if(!H||n.length<199)return n.push([t,r]),this;e=this.__data__=new at(n)}return e.set(t,r),this};var jt=L?O(L,Object):function(){return[]},vt=function(t){return k.call(t)};function dt(t,r){return!!(r=null==r?9007199254740991:r)&&("number"==typeof t||f.test(t))&&t>-1&&t%1==0&&t<r}function gt(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||P)}function wt(t){if(null!=t){try{return U.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function At(t,r){return t===r||t!=t&&r!=r}(G&&"[object DataView]"!=vt(new G(new ArrayBuffer(1)))||H&&vt(new H)!=c||q&&"[object Promise]"!=vt(q.resolve())||J&&vt(new J)!=a||K&&"[object WeakMap]"!=vt(new K))&&(vt=function(t){var r=k.call(t),e="[object Object]"==r?t.constructor:void 0,n=e?wt(e):void 0;if(n)switch(n){case X:return"[object DataView]";case Y:return c;case Z:return"[object Promise]";case tt:return a;case rt:return"[object WeakMap]"}return r});var Ot=Array.isArray;function mt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}(t.length)&&!St(t)}var xt=z||function(){return!1};function St(t){var r=It(t)?k.call(t):"";return r==n||r==o}function It(t){var r=typeof t;return!!t&&("object"==r||"function"==r)}function Pt(t){return mt(t)?it(t):function(t){if(!gt(t))return N(t);var r=[];for(var e in Object(t))$.call(t,e)&&"constructor"!=e&&r.push(e);return r}(t)}t.exports=function(t){return lt(t,!0,!0)}}));return function t(r){var e,n=l(r);if("string"==typeof r)n=n.replace((e=e&&"object"==typeof e?e:{}).strict?/^#([a-f0-9]{3,4}|[a-f0-9]{4}(?:[a-f0-9]{2}){1,2})\b$/i:/#([a-f0-9]{3}|[a-f0-9]{4}(?:[a-f0-9]{2}){0,2})\b/gi,(function(t,r,e,n){return"&"!==n[e-1]&&4===t.length&&"#"===t.charAt(0)&&(t="#".concat(t.charAt(1)).concat(t.charAt(1)).concat(t.charAt(2)).concat(t.charAt(2)).concat(t.charAt(3)).concat(t.charAt(3))),t.toLowerCase()}));else if(Array.isArray(n))for(var o=0,c=n.length;o<c;o++)n[o]=t(n[o]);else{if(!f(r))return r;Object.keys(n).forEach((function(r){n[r]=t(n[r])}))}return n}}));
