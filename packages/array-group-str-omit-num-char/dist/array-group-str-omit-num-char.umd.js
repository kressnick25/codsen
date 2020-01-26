/**
 * array-group-str-omit-num-char
 * Groups array of strings by omitting number characters
 * Version: 2.1.31
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/array-group-str-omit-num-char
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).arrayGroupStrOmitNumChar=e()}(this,(function(){"use strict";var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var e=/^\[object .+?Constructor\]$/,r="object"==typeof t&&t&&t.Object===Object&&t,n="object"==typeof self&&self&&self.Object===Object&&self,o=r||n||Function("return this")();function a(t,e){return!!(t?t.length:0)&&function(t,e,r){if(e!=e)return function(t,e,r,n){var o=t.length,a=r+(n?1:-1);for(;n?a--:++a<o;)if(e(t[a],a,t))return a;return-1}(t,u,r);var n=r-1,o=t.length;for(;++n<o;)if(t[n]===e)return n;return-1}(t,e,0)>-1}function i(t,e,r){for(var n=-1,o=t?t.length:0;++n<o;)if(r(e,t[n]))return!0;return!1}function u(t){return t!=t}function c(t,e){return t.has(e)}function s(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var f,l=Array.prototype,p=Function.prototype,h=Object.prototype,y=o["__core-js_shared__"],g=(f=/[^.]+$/.exec(y&&y.keys&&y.keys.IE_PROTO||""))?"Symbol(src)_1."+f:"",_=p.toString,d=h.hasOwnProperty,b=h.toString,v=RegExp("^"+_.call(d).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),j=l.splice,m=F(o,"Map"),w=F(o,"Set"),O=F(Object,"create");function T(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function W(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function $(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function A(t){var e=-1,r=t?t.length:0;for(this.__data__=new $;++e<r;)this.add(t[e])}function E(t,e){for(var r,n,o=t.length;o--;)if((r=t[o][0])===(n=e)||r!=r&&n!=n)return o;return-1}function I(t){return!(!x(t)||(r=t,g&&g in r))&&(function(t){var e=x(t)?b.call(t):"";return"[object Function]"==e||"[object GeneratorFunction]"==e}(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?v:e).test(function(t){if(null!=t){try{return _.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var r}T.prototype.clear=function(){this.__data__=O?O(null):{}},T.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},T.prototype.get=function(t){var e=this.__data__;if(O){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return d.call(e,t)?e[t]:void 0},T.prototype.has=function(t){var e=this.__data__;return O?void 0!==e[t]:d.call(e,t)},T.prototype.set=function(t,e){return this.__data__[t]=O&&void 0===e?"__lodash_hash_undefined__":e,this},W.prototype.clear=function(){this.__data__=[]},W.prototype.delete=function(t){var e=this.__data__,r=E(e,t);return!(r<0)&&(r==e.length-1?e.pop():j.call(e,r,1),!0)},W.prototype.get=function(t){var e=this.__data__,r=E(e,t);return r<0?void 0:e[r][1]},W.prototype.has=function(t){return E(this.__data__,t)>-1},W.prototype.set=function(t,e){var r=this.__data__,n=E(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},$.prototype.clear=function(){this.__data__={hash:new T,map:new(m||W),string:new T}},$.prototype.delete=function(t){return S(this,t).delete(t)},$.prototype.get=function(t){return S(this,t).get(t)},$.prototype.has=function(t){return S(this,t).has(t)},$.prototype.set=function(t,e){return S(this,t).set(t,e),this},A.prototype.add=A.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},A.prototype.has=function(t){return this.__data__.has(t)};var R=w&&1/s(new w([,-0]))[1]==1/0?function(t){return new w(t)}:function(){};function S(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function F(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return I(r)?r:void 0}function x(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}var N=function(t){return t&&t.length?function(t,e,r){var n=-1,o=a,u=t.length,f=!0,l=[],p=l;if(r)f=!1,o=i;else if(u>=200){var h=e?null:R(t);if(h)return s(h);f=!1,o=c,p=new A}else p=e?[]:l;t:for(;++n<u;){var y=t[n],g=e?e(y):y;if(y=r||0!==y?y:0,f&&g==g){for(var _=p.length;_--;)if(p[_]===g)continue t;e&&p.push(g),l.push(y)}else o(p,g,r)||(p!==l&&p.push(g),l.push(y))}return l}(t):[]},D=function(t,e){if(e){if("object"!=typeof e)throw new TypeError(String(e)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in e){if("boolean"!=typeof e.includeZero)throw new TypeError(String(e.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(e.includeZero&&0===t)return!0}}return Number.isSafeInteger(t)&&t>=1};
/*!
	 * is-natural-number.js | MIT (c) Shinnosuke Watanabe
	 * https://github.com/shinnn/is-natural-number.js
	*/const C=Array.isArray;function H(t,e){if(!C(t))throw new TypeError(`ranges-sort: [THROW_ID_01] Input must be an array, consisting of range arrays! Currently its type is: ${typeof t}, equal to: ${JSON.stringify(t,null,4)}`);if(0===t.length)return t;const r=Object.assign({},{strictlyTwoElementsInRangeArrays:!1,progressFn:null},e);let n,o;if(r.strictlyTwoElementsInRangeArrays&&!t.every((t,e)=>2===t.length||(n=e,o=t.length,!1)))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${n}th range (${JSON.stringify(t[n],null,4)}) has not two but ${o} elements!`);if(!t.every((t,e)=>!(!D(t[0],{includeZero:!0})||!D(t[1],{includeZero:!0}))||(n=e,!1)))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${n}th range (${JSON.stringify(t[n],null,4)}) does not consist of only natural numbers!`);const a=t.length*t.length;let i=0;return Array.from(t).sort((t,e)=>(r.progressFn&&(i++,r.progressFn(Math.floor(100*i/a))),t[0]===e[0]?t[1]<e[1]?-1:t[1]>e[1]?1:0:t[0]<e[0]?-1:1))}var P=function(t,e){return t(e={exports:{}},e.exports),e.exports}((function(e,r){var n="[object Arguments]",o="[object Function]",a="[object GeneratorFunction]",i="[object Map]",u="[object Set]",c=/\w*$/,s=/^\[object .+?Constructor\]$/,f=/^(?:0|[1-9]\d*)$/,l={};l[n]=l["[object Array]"]=l["[object ArrayBuffer]"]=l["[object DataView]"]=l["[object Boolean]"]=l["[object Date]"]=l["[object Float32Array]"]=l["[object Float64Array]"]=l["[object Int8Array]"]=l["[object Int16Array]"]=l["[object Int32Array]"]=l[i]=l["[object Number]"]=l["[object Object]"]=l["[object RegExp]"]=l[u]=l["[object String]"]=l["[object Symbol]"]=l["[object Uint8Array]"]=l["[object Uint8ClampedArray]"]=l["[object Uint16Array]"]=l["[object Uint32Array]"]=!0,l["[object Error]"]=l[o]=l["[object WeakMap]"]=!1;var p="object"==typeof t&&t&&t.Object===Object&&t,h="object"==typeof self&&self&&self.Object===Object&&self,y=p||h||Function("return this")(),g=r&&!r.nodeType&&r,_=g&&e&&!e.nodeType&&e,d=_&&_.exports===g;function b(t,e){return t.set(e[0],e[1]),t}function v(t,e){return t.add(e),t}function j(t,e,r,n){var o=-1,a=t?t.length:0;for(n&&a&&(r=t[++o]);++o<a;)r=e(r,t[o],o,t);return r}function m(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function w(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function O(t,e){return function(r){return t(e(r))}}function T(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var W=Array.prototype,$=Function.prototype,A=Object.prototype,E=y["__core-js_shared__"],I=function(){var t=/[^.]+$/.exec(E&&E.keys&&E.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),R=$.toString,S=A.hasOwnProperty,F=A.toString,x=RegExp("^"+R.call(S).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),N=d?y.Buffer:void 0,D=y.Symbol,C=y.Uint8Array,H=O(Object.getPrototypeOf,Object),P=Object.create,M=A.propertyIsEnumerable,k=W.splice,J=Object.getOwnPropertySymbols,q=N?N.isBuffer:void 0,U=O(Object.keys,Object),B=gt(y,"DataView"),Z=gt(y,"Map"),V=gt(y,"Promise"),z=gt(y,"Set"),G=gt(y,"WeakMap"),L=gt(Object,"create"),K=jt(B),Q=jt(Z),X=jt(V),Y=jt(z),tt=jt(G),et=D?D.prototype:void 0,rt=et?et.valueOf:void 0;function nt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function ot(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function at(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function it(t){this.__data__=new ot(t)}function ut(t,e){var r=wt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Ot(t)}(t)&&S.call(t,"callee")&&(!M.call(t,"callee")||F.call(t)==n)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],o=r.length,a=!!o;for(var i in t)!e&&!S.call(t,i)||a&&("length"==i||bt(i,o))||r.push(i);return r}function ct(t,e,r){var n=t[e];S.call(t,e)&&mt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function st(t,e){for(var r=t.length;r--;)if(mt(t[r][0],e))return r;return-1}function ft(t,e,r,s,f,p,h){var y;if(s&&(y=p?s(t,f,p,h):s(t)),void 0!==y)return y;if(!$t(t))return t;var g=wt(t);if(g){if(y=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&S.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,y)}else{var _=dt(t),d=_==o||_==a;if(Tt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if("[object Object]"==_||_==n||d&&!p){if(m(t))return p?t:{};if(y=function(t){return"function"!=typeof t.constructor||vt(t)?{}:(e=H(t),$t(e)?P(e):{});var e}(d?{}:t),!e)return function(t,e){return ht(t,_t(t),e)}(t,function(t,e){return t&&ht(e,At(e),t)}(y,t))}else{if(!l[_])return p?t:{};y=function(t,e,r,n){var o=t.constructor;switch(e){case"[object ArrayBuffer]":return pt(t);case"[object Boolean]":case"[object Date]":return new o(+t);case"[object DataView]":return function(t,e){var r=e?pt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return function(t,e){var r=e?pt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case i:return function(t,e,r){return j(e?r(w(t),!0):w(t),b,new t.constructor)}(t,n,r);case"[object Number]":case"[object String]":return new o(t);case"[object RegExp]":return function(t){var e=new t.constructor(t.source,c.exec(t));return e.lastIndex=t.lastIndex,e}(t);case u:return function(t,e,r){return j(e?r(T(t),!0):T(t),v,new t.constructor)}(t,n,r);case"[object Symbol]":return a=t,rt?Object(rt.call(a)):{}}var a}(t,_,ft,e)}}h||(h=new it);var O=h.get(t);if(O)return O;if(h.set(t,y),!g)var W=r?function(t){return function(t,e,r){var n=e(t);return wt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,At,_t)}(t):At(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(W||t,(function(n,o){W&&(n=t[o=n]),ct(y,o,ft(n,e,r,s,o,t,h))})),y}function lt(t){return!(!$t(t)||(e=t,I&&I in e))&&(Wt(t)||m(t)?x:s).test(jt(t));var e}function pt(t){var e=new t.constructor(t.byteLength);return new C(e).set(new C(t)),e}function ht(t,e,r,n){r||(r={});for(var o=-1,a=e.length;++o<a;){var i=e[o],u=n?n(r[i],t[i],i,r,t):void 0;ct(r,i,void 0===u?t[i]:u)}return r}function yt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function gt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return lt(r)?r:void 0}nt.prototype.clear=function(){this.__data__=L?L(null):{}},nt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},nt.prototype.get=function(t){var e=this.__data__;if(L){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return S.call(e,t)?e[t]:void 0},nt.prototype.has=function(t){var e=this.__data__;return L?void 0!==e[t]:S.call(e,t)},nt.prototype.set=function(t,e){return this.__data__[t]=L&&void 0===e?"__lodash_hash_undefined__":e,this},ot.prototype.clear=function(){this.__data__=[]},ot.prototype.delete=function(t){var e=this.__data__,r=st(e,t);return!(r<0)&&(r==e.length-1?e.pop():k.call(e,r,1),!0)},ot.prototype.get=function(t){var e=this.__data__,r=st(e,t);return r<0?void 0:e[r][1]},ot.prototype.has=function(t){return st(this.__data__,t)>-1},ot.prototype.set=function(t,e){var r=this.__data__,n=st(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},at.prototype.clear=function(){this.__data__={hash:new nt,map:new(Z||ot),string:new nt}},at.prototype.delete=function(t){return yt(this,t).delete(t)},at.prototype.get=function(t){return yt(this,t).get(t)},at.prototype.has=function(t){return yt(this,t).has(t)},at.prototype.set=function(t,e){return yt(this,t).set(t,e),this},it.prototype.clear=function(){this.__data__=new ot},it.prototype.delete=function(t){return this.__data__.delete(t)},it.prototype.get=function(t){return this.__data__.get(t)},it.prototype.has=function(t){return this.__data__.has(t)},it.prototype.set=function(t,e){var r=this.__data__;if(r instanceof ot){var n=r.__data__;if(!Z||n.length<199)return n.push([t,e]),this;r=this.__data__=new at(n)}return r.set(t,e),this};var _t=J?O(J,Object):function(){return[]},dt=function(t){return F.call(t)};function bt(t,e){return!!(e=null==e?9007199254740991:e)&&("number"==typeof t||f.test(t))&&t>-1&&t%1==0&&t<e}function vt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||A)}function jt(t){if(null!=t){try{return R.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function mt(t,e){return t===e||t!=t&&e!=e}(B&&"[object DataView]"!=dt(new B(new ArrayBuffer(1)))||Z&&dt(new Z)!=i||V&&"[object Promise]"!=dt(V.resolve())||z&&dt(new z)!=u||G&&"[object WeakMap]"!=dt(new G))&&(dt=function(t){var e=F.call(t),r="[object Object]"==e?t.constructor:void 0,n=r?jt(r):void 0;if(n)switch(n){case K:return"[object DataView]";case Q:return i;case X:return"[object Promise]";case Y:return u;case tt:return"[object WeakMap]"}return e});var wt=Array.isArray;function Ot(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}(t.length)&&!Wt(t)}var Tt=q||function(){return!1};function Wt(t){var e=$t(t)?F.call(t):"";return e==o||e==a}function $t(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function At(t){return Ot(t)?ut(t):function(t){if(!vt(t))return U(t);var e=[];for(var r in Object(t))S.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}e.exports=function(t){return ft(t,!0,!0)}}));var M,k,J=Function.prototype,q=Object.prototype,U=J.toString,B=q.hasOwnProperty,Z=U.call(Object),V=q.toString,z=(M=Object.getPrototypeOf,k=Object,function(t){return M(k(t))});var G=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||"[object Object]"!=V.call(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=z(t);if(null===e)return!0;var r=B.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&U.call(r)==Z};function L(t,e){function r(t){return"string"==typeof t}if(!Array.isArray(t))return t;const n={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};let o;if(e){if(!G(e))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(e,null,4)} (type ${typeof e})`);if(o=Object.assign({},n,e),o.progressFn&&G(o.progressFn)&&!Object.keys(o.progressFn).length)o.progressFn=null;else if(o.progressFn&&"function"!=typeof o.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof o.progressFn}", equal to ${JSON.stringify(o.progressFn,null,4)}`);if(o.mergeType&&1!==o.mergeType&&2!==o.mergeType)if(r(o.mergeType)&&"1"===o.mergeType.trim())o.mergeType=1;else{if(!r(o.mergeType)||"2"!==o.mergeType.trim())throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof o.mergeType}", equal to ${JSON.stringify(o.mergeType,null,4)}`);o.mergeType=2}if("boolean"!=typeof o.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof o.joinRangesThatTouchEdges}", equal to ${JSON.stringify(o.joinRangesThatTouchEdges,null,4)}`)}else o=P(n);const a=P(t).filter(t=>void 0!==t[2]||t[0]!==t[1]);let i,u,c;i=o.progressFn?H(a,{progressFn:t=>{c=Math.floor(t/5),c!==u&&(u=c,o.progressFn(c))}}):H(a);const s=i.length-1;for(let t=s;t>0;t--)o.progressFn&&(c=Math.floor(78*(1-t/s))+21,c!==u&&c>u&&(u=c,o.progressFn(c))),(i[t][0]<=i[t-1][0]||!o.joinRangesThatTouchEdges&&i[t][0]<i[t-1][1]||o.joinRangesThatTouchEdges&&i[t][0]<=i[t-1][1])&&(i[t-1][0]=Math.min(i[t][0],i[t-1][0]),i[t-1][1]=Math.max(i[t][1],i[t-1][1]),void 0!==i[t][2]&&(i[t-1][0]>=i[t][0]||i[t-1][1]<=i[t][1])&&null!==i[t-1][2]&&(null===i[t][2]&&null!==i[t-1][2]?i[t-1][2]=null:void 0!==i[t-1][2]?2===o.mergeType&&i[t-1][0]===i[t][0]?i[t-1][2]=i[t][2]:i[t-1][2]+=i[t][2]:i[t-1][2]=i[t][2]),i.splice(t,1),t=i.length);return i}function K(t){return null!=t}function Q(t){return"string"==typeof t}var X=Array.isArray;return function(t,e){if(!X(t))return t;if(!t.length)return{};var r,n,o={wildcard:"*",dedupePlease:!0};r=null!=e?Object.assign({},o,e):Object.assign({},o);for(var a=(n=r.dedupePlease?N(t):Array.from(t)).length,i={},u=0;u<a;u++){var c=n[u].match(/\d+/gm);c?function(){var t=n[u].replace(/\d+/gm,r.wildcard);Object.prototype.hasOwnProperty.call(i,t)?(c.forEach((function(e,r){i[t].elementsWhichWeCanReplaceWithWildcards[r]&&e!==i[t].elementsWhichWeCanReplaceWithWildcards[r]&&(i[t].elementsWhichWeCanReplaceWithWildcards[r]=!1)})),i[t].count++):i[t]={count:1,elementsWhichWeCanReplaceWithWildcards:Array.from(c)}}():i[n[u]]={count:1}}var s={};return Object.keys(i).forEach((function(t){var e=t;if(X(i[t].elementsWhichWeCanReplaceWithWildcards)&&i[t].elementsWhichWeCanReplaceWithWildcards.some((function(t){return!1!==t}))){for(var n=[],o=0,a=0;a<i[t].elementsWhichWeCanReplaceWithWildcards.length;a++)o=e.indexOf(r.wildcard,o+r.wildcard.length),!1!==i[t].elementsWhichWeCanReplaceWithWildcards[a]&&n.push([o,o+r.wildcard.length,i[t].elementsWhichWeCanReplaceWithWildcards[a]]);e=function(t,e,r){let n=0,o=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if(!Q(t))throw new TypeError(`ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ${typeof t}, equal to: ${JSON.stringify(t,null,4)}`);if(null===e)return t;if(!Array.isArray(e))throw new TypeError(`ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(r&&"function"!=typeof r)throw new TypeError(`ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: ${typeof r}, equal to: ${JSON.stringify(r,null,4)}`);Array.isArray(e)&&(Number.isInteger(e[0])&&e[0]>=0||/^\d*$/.test(e[0]))&&(Number.isInteger(e[1])&&e[1]>=0||/^\d*$/.test(e[1]))&&(e=[e]);const a=e.length;let i=0;e.forEach((t,u)=>{if(r&&(n=Math.floor(i/a*10),n!==o&&(o=n,r(n))),!Array.isArray(t))throw new TypeError(`ranges-apply: [THROW_ID_05] ranges array, second input arg., has ${u}th element not an array: ${JSON.stringify(t,null,4)}, which is ${typeof t}`);if(!Number.isInteger(t[0])||t[0]<0){if(!/^\d*$/.test(t[0]))throw new TypeError(`ranges-apply: [THROW_ID_06] ranges array, second input arg. has ${u}th element, array [${t[0]},${t[1]}]. That array has first element not an integer, but ${typeof t[0]}, equal to: ${JSON.stringify(t[0],null,4)}. Computer doesn't like this.`);e[u][0]=Number.parseInt(e[u][0],10)}if(!Number.isInteger(t[1])){if(!/^\d*$/.test(t[1]))throw new TypeError(`ranges-apply: [THROW_ID_07] ranges array, second input arg. has ${u}th element, array [${t[0]},${t[1]}]. That array has second element not an integer, but ${typeof t[1]}, equal to: ${JSON.stringify(t[1],null,4)}. Computer doesn't like this.`);e[u][1]=Number.parseInt(e[u][1],10)}i++});const u=L(e,{progressFn:t=>{r&&(n=10+Math.floor(t/10),n!==o&&(o=n,r(n)))}}),c=u.length;if(c>0){const e=t.slice(u[c-1][1]);t=u.reduce((e,a,i,u)=>{r&&(n=20+Math.floor(i/c*80),n!==o&&(o=n,r(n)));const s=0===i?0:u[i-1][1],f=u[i][0];return e+t.slice(s,f)+(K(u[i][2])?u[i][2]:"")},""),t+=e}return t}(e,n)}s[e]=i[t].count})),s}}));
