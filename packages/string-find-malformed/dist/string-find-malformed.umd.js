/**
 * string-find-malformed
 * Search for a malformed string. Think of Levenshtein distance but in search.
 * Version: 1.1.10
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/string-find-malformed
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).stringFindMalformed=e()}(this,(function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function r(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function n(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(r){e(t,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function o(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}Function.prototype.toString.call(Object);var c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};!function(t,e,r){t(r={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&r.path)}},r.exports),r.exports}((function(e,r){var n="[object Arguments]",o="[object Function]",i="[object GeneratorFunction]",a="[object Map]",u="[object Set]",f=/\w*$/,s=/^\[object .+?Constructor\]$/,l=/^(?:0|[1-9]\d*)$/,p={};p[n]=p["[object Array]"]=p["[object ArrayBuffer]"]=p["[object DataView]"]=p["[object Boolean]"]=p["[object Date]"]=p["[object Float32Array]"]=p["[object Float64Array]"]=p["[object Int8Array]"]=p["[object Int16Array]"]=p["[object Int32Array]"]=p[a]=p["[object Number]"]=p["[object Object]"]=p["[object RegExp]"]=p[u]=p["[object String]"]=p["[object Symbol]"]=p["[object Uint8Array]"]=p["[object Uint8ClampedArray]"]=p["[object Uint16Array]"]=p["[object Uint32Array]"]=!0,p["[object Error]"]=p[o]=p["[object WeakMap]"]=!1;var y="object"==t(c)&&c&&c.Object===Object&&c,h="object"==("undefined"==typeof self?"undefined":t(self))&&self&&self.Object===Object&&self,b=y||h||Function("return this")(),d=r&&!r.nodeType&&r,g=d&&e&&!e.nodeType&&e,_=g&&g.exports===d;function j(t,e){return t.set(e[0],e[1]),t}function v(t,e){return t.add(e),t}function m(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}function O(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function w(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function A(t,e){return function(r){return t(e(r))}}function T(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var k,S=Array.prototype,C=Function.prototype,x=Object.prototype,D=b["__core-js_shared__"],I=(k=/[^.]+$/.exec(D&&D.keys&&D.keys.IE_PROTO||""))?"Symbol(src)_1."+k:"",E=C.toString,P=x.hasOwnProperty,F=x.toString,M=RegExp("^"+E.call(P).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),W=_?b.Buffer:void 0,U=b.Symbol,$=b.Uint8Array,R=A(Object.getPrototypeOf,Object),B=Object.create,q=x.propertyIsEnumerable,L=S.splice,H=Object.getOwnPropertySymbols,V=W?W.isBuffer:void 0,N=A(Object.keys,Object),z=gt(b,"DataView"),G=gt(b,"Map"),J=gt(b,"Promise"),K=gt(b,"Set"),Q=gt(b,"WeakMap"),X=gt(Object,"create"),Y=Ot(z),Z=Ot(G),tt=Ot(J),et=Ot(K),rt=Ot(Q),nt=U?U.prototype:void 0,ot=nt?nt.valueOf:void 0;function it(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function ct(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function at(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function ut(t){this.__data__=new ct(t)}function ft(e,r){var o=At(e)||function(e){return function(e){return function(e){return!!e&&"object"==t(e)}(e)&&Tt(e)}(e)&&P.call(e,"callee")&&(!q.call(e,"callee")||F.call(e)==n)}(e)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(e.length,String):[],i=o.length,c=!!i;for(var a in e)!r&&!P.call(e,a)||c&&("length"==a||vt(a,i))||o.push(a);return o}function st(t,e,r){var n=t[e];P.call(t,e)&&wt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function lt(t,e){for(var r=t.length;r--;)if(wt(t[r][0],e))return r;return-1}function pt(t,e,r,c,s,l,y){var h;if(c&&(h=l?c(t,s,l,y):c(t)),void 0!==h)return h;if(!Ct(t))return t;var b=At(t);if(b){if(h=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&P.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,h)}else{var d=jt(t),g=d==o||d==i;if(kt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if("[object Object]"==d||d==n||g&&!l){if(O(t))return l?t:{};if(h=function(t){return"function"!=typeof t.constructor||mt(t)?{}:(e=R(t),Ct(e)?B(e):{});var e}(g?{}:t),!e)return function(t,e){return bt(t,_t(t),e)}(t,function(t,e){return t&&bt(e,xt(e),t)}(h,t))}else{if(!p[d])return l?t:{};h=function(t,e,r,n){var o=t.constructor;switch(e){case"[object ArrayBuffer]":return ht(t);case"[object Boolean]":case"[object Date]":return new o(+t);case"[object DataView]":return function(t,e){var r=e?ht(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return function(t,e){var r=e?ht(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case a:return function(t,e,r){return m(e?r(w(t),!0):w(t),j,new t.constructor)}(t,n,r);case"[object Number]":case"[object String]":return new o(t);case"[object RegExp]":return function(t){var e=new t.constructor(t.source,f.exec(t));return e.lastIndex=t.lastIndex,e}(t);case u:return function(t,e,r){return m(e?r(T(t),!0):T(t),v,new t.constructor)}(t,n,r);case"[object Symbol]":return i=t,ot?Object(ot.call(i)):{}}var i}(t,d,pt,e)}}y||(y=new ut);var _=y.get(t);if(_)return _;if(y.set(t,h),!b)var A=r?function(t){return function(t,e,r){var n=e(t);return At(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,xt,_t)}(t):xt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(A||t,(function(n,o){A&&(n=t[o=n]),st(h,o,pt(n,e,r,c,o,t,y))})),h}function yt(t){return!(!Ct(t)||(e=t,I&&I in e))&&(St(t)||O(t)?M:s).test(Ot(t));var e}function ht(t){var e=new t.constructor(t.byteLength);return new $(e).set(new $(t)),e}function bt(t,e,r,n){r||(r={});for(var o=-1,i=e.length;++o<i;){var c=e[o],a=n?n(r[c],t[c],c,r,t):void 0;st(r,c,void 0===a?t[c]:a)}return r}function dt(e,r){var n,o,i=e.__data__;return("string"==(o=t(n=r))||"number"==o||"symbol"==o||"boolean"==o?"__proto__"!==n:null===n)?i["string"==typeof r?"string":"hash"]:i.map}function gt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return yt(r)?r:void 0}it.prototype.clear=function(){this.__data__=X?X(null):{}},it.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},it.prototype.get=function(t){var e=this.__data__;if(X){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return P.call(e,t)?e[t]:void 0},it.prototype.has=function(t){var e=this.__data__;return X?void 0!==e[t]:P.call(e,t)},it.prototype.set=function(t,e){return this.__data__[t]=X&&void 0===e?"__lodash_hash_undefined__":e,this},ct.prototype.clear=function(){this.__data__=[]},ct.prototype.delete=function(t){var e=this.__data__,r=lt(e,t);return!(r<0)&&(r==e.length-1?e.pop():L.call(e,r,1),!0)},ct.prototype.get=function(t){var e=this.__data__,r=lt(e,t);return r<0?void 0:e[r][1]},ct.prototype.has=function(t){return lt(this.__data__,t)>-1},ct.prototype.set=function(t,e){var r=this.__data__,n=lt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},at.prototype.clear=function(){this.__data__={hash:new it,map:new(G||ct),string:new it}},at.prototype.delete=function(t){return dt(this,t).delete(t)},at.prototype.get=function(t){return dt(this,t).get(t)},at.prototype.has=function(t){return dt(this,t).has(t)},at.prototype.set=function(t,e){return dt(this,t).set(t,e),this},ut.prototype.clear=function(){this.__data__=new ct},ut.prototype.delete=function(t){return this.__data__.delete(t)},ut.prototype.get=function(t){return this.__data__.get(t)},ut.prototype.has=function(t){return this.__data__.has(t)},ut.prototype.set=function(t,e){var r=this.__data__;if(r instanceof ct){var n=r.__data__;if(!G||n.length<199)return n.push([t,e]),this;r=this.__data__=new at(n)}return r.set(t,e),this};var _t=H?A(H,Object):function(){return[]},jt=function(t){return F.call(t)};function vt(t,e){return!!(e=null==e?9007199254740991:e)&&("number"==typeof t||l.test(t))&&t>-1&&t%1==0&&t<e}function mt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||x)}function Ot(t){if(null!=t){try{return E.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function wt(t,e){return t===e||t!=t&&e!=e}(z&&"[object DataView]"!=jt(new z(new ArrayBuffer(1)))||G&&jt(new G)!=a||J&&"[object Promise]"!=jt(J.resolve())||K&&jt(new K)!=u||Q&&"[object WeakMap]"!=jt(new Q))&&(jt=function(t){var e=F.call(t),r="[object Object]"==e?t.constructor:void 0,n=r?Ot(r):void 0;if(n)switch(n){case Y:return"[object DataView]";case Z:return a;case tt:return"[object Promise]";case et:return u;case rt:return"[object WeakMap]"}return e});var At=Array.isArray;function Tt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}(t.length)&&!St(t)}var kt=V||function(){return!1};function St(t){var e=Ct(t)?F.call(t):"";return e==o||e==i}function Ct(e){var r=t(e);return!!e&&("object"==r||"function"==r)}function xt(t){return Tt(t)?ft(t):function(t){if(!mt(t))return N(t);var e=[];for(var r in Object(t))P.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}e.exports=function(t){return pt(t,!0,!0)}}));function a(t,e){return function(t,e,r){if("string"!=typeof t||!t.length)return null;if(e&&"number"==typeof e||(e=0),!t[e+1])return null;if(t[e+1]&&(!r&&t[e+1].trim()||r&&(t[e+1].trim()||"\n\r".includes(t[e+1]))))return e+1;if(t[e+2]&&(!r&&t[e+2].trim()||r&&(t[e+2].trim()||"\n\r".includes(t[e+2]))))return e+2;for(var n=e+1,o=t.length;n<o;n++)if(t[n]&&(!r&&t[n].trim()||r&&(t[n].trim()||"\n\r".includes(t[n]))))return n;return null}(t,e,!1)}function u(t){return"string"==typeof t}return function(e,r,i,c){if(!u(e))throw new TypeError("string-find-malformed: [THROW_ID_01] the first input argument, string where to look for, must be a string! Currently it's equal to: ".concat(e," (type: ").concat(t(e),")"));if(e.length){if(!u(r))throw new TypeError("string-find-malformed: [THROW_ID_02] the second input argument, string we should find, must be a string! Currently it's equal to: ".concat(r," (type: ").concat(t(r),")"));if(r.length){if("function"!=typeof i)throw new TypeError("string-find-malformed: [THROW_ID_03] the third input argument, a callback function, must be a function! Currently it's equal to: ".concat(i," (type: ").concat(t(i),")"));if(c&&(!(f=c)||"object"!==t(f)||Array.isArray(f)))throw new TypeError("string-find-malformed: [THROW_ID_04] the fourth input argument, an Optional Options Object, must be a plain object! Currently it's equal to: ".concat(c," (type: ").concat(t(c),")"));var f,s=n(n({},{stringOffset:0,maxDistance:1,ignoreWhitespace:!0}),c);if("string"==typeof s.stringOffset&&/^\d*$/.test(s.stringOffset))s.stringOffset=Number(s.stringOffset);else if(!Number.isInteger(s.stringOffset)||s.stringOffset<0)throw new TypeError("".concat(s.source," [THROW_ID_05] opts.stringOffset must be a natural number or zero! Currently it's: ").concat(s.fromIndex));for(var l,p=e.length,y=Math.min(r.length,s.maxDistance+1),h=[],b=s.maxDistance,d=0;d<p;d++)if(!s.ignoreWhitespace||e[d].trim()){for(var g=0,_=h.length;g<_;g++)l=!1,Array.isArray(h[g].pendingToCheck)&&h[g].pendingToCheck.length&&e[d]===h[g].pendingToCheck[0]?(l=!0,h[g].pendingToCheck.shift()):Array.isArray(h[g].pendingToCheck)&&h[g].pendingToCheck.length&&e[d]===h[g].pendingToCheck[1]?(l=!0,h[g].pendingToCheck.shift(),h[g].pendingToCheck.shift(),h[g].patienceLeft-=1):(h[g].patienceLeft-=1,e[a(e,d)]!==h[g].pendingToCheck[0]&&(h[g].pendingToCheck.shift(),e[d]===h[g].pendingToCheck[0]&&h[g].pendingToCheck.shift()));var j=(h=h.filter((function(t){return t.patienceLeft>=0}))).filter((function(t){return 0===t.pendingToCheck.length})).map((function(t){return t.startsAt}));if(Array.isArray(j)&&j.length){var v=Math.min.apply(Math,o(j)),m=d+(l?1:0);e.slice(v,m)!==r&&i({idxFrom:v+s.stringOffset,idxTo:m+s.stringOffset}),h=h.filter((function(t){return t.pendingToCheck.length}))}for(var O=0;O<y;O++)if(e[d]===r[O]){var w={startsAt:d,patienceLeft:b-O,pendingToCheck:Array.from(r.slice(O+1))};h.push(w);break}}}}}}));
