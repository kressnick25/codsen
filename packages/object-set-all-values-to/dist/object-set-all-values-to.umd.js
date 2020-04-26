/**
 * object-set-all-values-to
 * Recursively walk the input and set all found values in plain objects to something
 * Version: 3.9.57
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/object-set-all-values-to
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).objectSetAllValuesTo=e()}(this,(function(){"use strict";var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var e=function(t,e){return t(e={exports:{}},e.exports),e.exports}((function(e,r){var n="[object Arguments]",o="[object Function]",c="[object GeneratorFunction]",u="[object Map]",a="[object Set]",i=/\w*$/,f=/^\[object .+?Constructor\]$/,s=/^(?:0|[1-9]\d*)$/,l={};l[n]=l["[object Array]"]=l["[object ArrayBuffer]"]=l["[object DataView]"]=l["[object Boolean]"]=l["[object Date]"]=l["[object Float32Array]"]=l["[object Float64Array]"]=l["[object Int8Array]"]=l["[object Int16Array]"]=l["[object Int32Array]"]=l[u]=l["[object Number]"]=l["[object Object]"]=l["[object RegExp]"]=l[a]=l["[object String]"]=l["[object Symbol]"]=l["[object Uint8Array]"]=l["[object Uint8ClampedArray]"]=l["[object Uint16Array]"]=l["[object Uint32Array]"]=!0,l["[object Error]"]=l[o]=l["[object WeakMap]"]=!1;var p="object"==typeof t&&t&&t.Object===Object&&t,b="object"==typeof self&&self&&self.Object===Object&&self,y=p||b||Function("return this")(),_=r&&!r.nodeType&&r,h=_&&e&&!e.nodeType&&e,j=h&&h.exports===_;function v(t,e){return t.set(e[0],e[1]),t}function d(t,e){return t.add(e),t}function g(t,e,r,n){var o=-1,c=t?t.length:0;for(n&&c&&(r=t[++o]);++o<c;)r=e(r,t[o],o,t);return r}function w(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function O(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function A(t,e){return function(r){return t(e(r))}}function m(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var x,S=Array.prototype,E=Function.prototype,I=Object.prototype,P=y["__core-js_shared__"],F=(x=/[^.]+$/.exec(P&&P.keys&&P.keys.IE_PROTO||""))?"Symbol(src)_1."+x:"",U=E.toString,k=I.hasOwnProperty,$=I.toString,B=RegExp("^"+U.call(k).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),D=j?y.Buffer:void 0,M=y.Symbol,T=y.Uint8Array,V=A(Object.getPrototypeOf,Object),R=Object.create,W=I.propertyIsEnumerable,C=S.splice,z=Object.getOwnPropertySymbols,L=D?D.isBuffer:void 0,N=A(Object.keys,Object),G=ht(y,"DataView"),q=ht(y,"Map"),H=ht(y,"Promise"),J=ht(y,"Set"),K=ht(y,"WeakMap"),Q=ht(Object,"create"),X=wt(G),Y=wt(q),Z=wt(H),tt=wt(J),et=wt(K),rt=M?M.prototype:void 0,nt=rt?rt.valueOf:void 0;function ot(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function ct(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function ut(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function at(t){this.__data__=new ct(t)}function it(t,e){var r=At(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&mt(t)}(t)&&k.call(t,"callee")&&(!W.call(t,"callee")||$.call(t)==n)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],o=r.length,c=!!o;for(var u in t)!e&&!k.call(t,u)||c&&("length"==u||dt(u,o))||r.push(u);return r}function ft(t,e,r){var n=t[e];k.call(t,e)&&Ot(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function st(t,e){for(var r=t.length;r--;)if(Ot(t[r][0],e))return r;return-1}function lt(t,e,r,f,s,p,b){var y;if(f&&(y=p?f(t,s,p,b):f(t)),void 0!==y)return y;if(!Et(t))return t;var _=At(t);if(_){if(y=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&k.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,y)}else{var h=vt(t),j=h==o||h==c;if(xt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if("[object Object]"==h||h==n||j&&!p){if(w(t))return p?t:{};if(y=function(t){return"function"!=typeof t.constructor||gt(t)?{}:(e=V(t),Et(e)?R(e):{});var e}(j?{}:t),!e)return function(t,e){return yt(t,jt(t),e)}(t,function(t,e){return t&&yt(e,It(e),t)}(y,t))}else{if(!l[h])return p?t:{};y=function(t,e,r,n){var o=t.constructor;switch(e){case"[object ArrayBuffer]":return bt(t);case"[object Boolean]":case"[object Date]":return new o(+t);case"[object DataView]":return function(t,e){var r=e?bt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return function(t,e){var r=e?bt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case u:return function(t,e,r){return g(e?r(O(t),!0):O(t),v,new t.constructor)}(t,n,r);case"[object Number]":case"[object String]":return new o(t);case"[object RegExp]":return function(t){var e=new t.constructor(t.source,i.exec(t));return e.lastIndex=t.lastIndex,e}(t);case a:return function(t,e,r){return g(e?r(m(t),!0):m(t),d,new t.constructor)}(t,n,r);case"[object Symbol]":return c=t,nt?Object(nt.call(c)):{}}var c}(t,h,lt,e)}}b||(b=new at);var A=b.get(t);if(A)return A;if(b.set(t,y),!_)var x=r?function(t){return function(t,e,r){var n=e(t);return At(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,It,jt)}(t):It(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(x||t,(function(n,o){x&&(n=t[o=n]),ft(y,o,lt(n,e,r,f,o,t,b))})),y}function pt(t){return!(!Et(t)||(e=t,F&&F in e))&&(St(t)||w(t)?B:f).test(wt(t));var e}function bt(t){var e=new t.constructor(t.byteLength);return new T(e).set(new T(t)),e}function yt(t,e,r,n){r||(r={});for(var o=-1,c=e.length;++o<c;){var u=e[o],a=n?n(r[u],t[u],u,r,t):void 0;ft(r,u,void 0===a?t[u]:a)}return r}function _t(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function ht(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return pt(r)?r:void 0}ot.prototype.clear=function(){this.__data__=Q?Q(null):{}},ot.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},ot.prototype.get=function(t){var e=this.__data__;if(Q){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return k.call(e,t)?e[t]:void 0},ot.prototype.has=function(t){var e=this.__data__;return Q?void 0!==e[t]:k.call(e,t)},ot.prototype.set=function(t,e){return this.__data__[t]=Q&&void 0===e?"__lodash_hash_undefined__":e,this},ct.prototype.clear=function(){this.__data__=[]},ct.prototype.delete=function(t){var e=this.__data__,r=st(e,t);return!(r<0)&&(r==e.length-1?e.pop():C.call(e,r,1),!0)},ct.prototype.get=function(t){var e=this.__data__,r=st(e,t);return r<0?void 0:e[r][1]},ct.prototype.has=function(t){return st(this.__data__,t)>-1},ct.prototype.set=function(t,e){var r=this.__data__,n=st(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},ut.prototype.clear=function(){this.__data__={hash:new ot,map:new(q||ct),string:new ot}},ut.prototype.delete=function(t){return _t(this,t).delete(t)},ut.prototype.get=function(t){return _t(this,t).get(t)},ut.prototype.has=function(t){return _t(this,t).has(t)},ut.prototype.set=function(t,e){return _t(this,t).set(t,e),this},at.prototype.clear=function(){this.__data__=new ct},at.prototype.delete=function(t){return this.__data__.delete(t)},at.prototype.get=function(t){return this.__data__.get(t)},at.prototype.has=function(t){return this.__data__.has(t)},at.prototype.set=function(t,e){var r=this.__data__;if(r instanceof ct){var n=r.__data__;if(!q||n.length<199)return n.push([t,e]),this;r=this.__data__=new ut(n)}return r.set(t,e),this};var jt=z?A(z,Object):function(){return[]},vt=function(t){return $.call(t)};function dt(t,e){return!!(e=null==e?9007199254740991:e)&&("number"==typeof t||s.test(t))&&t>-1&&t%1==0&&t<e}function gt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||I)}function wt(t){if(null!=t){try{return U.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Ot(t,e){return t===e||t!=t&&e!=e}(G&&"[object DataView]"!=vt(new G(new ArrayBuffer(1)))||q&&vt(new q)!=u||H&&"[object Promise]"!=vt(H.resolve())||J&&vt(new J)!=a||K&&"[object WeakMap]"!=vt(new K))&&(vt=function(t){var e=$.call(t),r="[object Object]"==e?t.constructor:void 0,n=r?wt(r):void 0;if(n)switch(n){case X:return"[object DataView]";case Y:return u;case Z:return"[object Promise]";case tt:return a;case et:return"[object WeakMap]"}return e});var At=Array.isArray;function mt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}(t.length)&&!St(t)}var xt=L||function(){return!1};function St(t){var e=Et(t)?$.call(t):"";return e==o||e==c}function Et(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function It(t){return mt(t)?it(t):function(t){if(!gt(t))return N(t);var e=[];for(var r in Object(t))k.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}e.exports=function(t){return lt(t,!0,!0)}}));var r,n,o=Function.prototype,c=Object.prototype,u=o.toString,a=c.hasOwnProperty,i=u.call(Object),f=c.toString,s=(r=Object.getPrototypeOf,n=Object,function(t){return r(n(t))});var l=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||"[object Object]"!=f.call(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=s(t);if(null===e)return!0;var r=a.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&u.call(r)==i},p=Array.isArray;return function t(r,n){var o,c=e(r);return o=!(arguments.length<2)&&(l(n)||p(n)?e(n):n),p(c)?c.forEach((function(e,r){(l(c[r])||p(c[r]))&&(c[r]=t(c[r],o))})):l(c)&&Object.keys(c).forEach((function(e){p(c[e])||l(c[e])?c[e]=t(c[e],o):c[e]=o})),c}}));
