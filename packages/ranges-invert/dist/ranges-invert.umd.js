/**
 * ranges-invert
 * Invert string index ranges [ [1, 3] ] => [ [0, 1], [3, ...] ]
 * Version: 2.1.30
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/ranges-invert
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).rangesInvert=t()}(this,(function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}
/*!
   * is-natural-number.js | MIT (c) Shinnosuke Watanabe
   * https://github.com/shinnn/is-natural-number.js
  */var t=function(e,t){if(t){if("object"!=typeof t)throw new TypeError(String(t)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in t){if("boolean"!=typeof t.includeZero)throw new TypeError(String(t.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(t.includeZero&&0===e)return!0}}return Number.isSafeInteger(e)&&e>=1};const r=Array.isArray;function n(e,n){if(!r(e))throw new TypeError(`ranges-sort: [THROW_ID_01] Input must be an array, consisting of range arrays! Currently its type is: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(0===e.length)return e;const o=Object.assign({},{strictlyTwoElementsInRangeArrays:!1,progressFn:null},n);let a,i;if(o.strictlyTwoElementsInRangeArrays&&!e.every((e,t)=>2===e.length||(a=t,i=e.length,!1)))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${a}th range (${JSON.stringify(e[a],null,4)}) has not two but ${i} elements!`);if(!e.every((e,r)=>!(!t(e[0],{includeZero:!0})||!t(e[1],{includeZero:!0}))||(a=r,!1)))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${a}th range (${JSON.stringify(e[a],null,4)}) does not consist of only natural numbers!`);const s=e.length*e.length;let u=0;return Array.from(e).sort((e,t)=>(o.progressFn&&(u++,o.progressFn(Math.floor(100*u/s))),e[0]===t[0]?e[1]<t[1]?-1:e[1]>t[1]?1:0:e[0]<t[0]?-1:1))}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var a=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e,t){var r="[object Arguments]",n="[object Function]",a="[object GeneratorFunction]",i="[object Map]",s="[object Set]",u=/\w*$/,c=/^\[object .+?Constructor\]$/,f=/^(?:0|[1-9]\d*)$/,l={};l[r]=l["[object Array]"]=l["[object ArrayBuffer]"]=l["[object DataView]"]=l["[object Boolean]"]=l["[object Date]"]=l["[object Float32Array]"]=l["[object Float64Array]"]=l["[object Int8Array]"]=l["[object Int16Array]"]=l["[object Int32Array]"]=l[i]=l["[object Number]"]=l["[object Object]"]=l["[object RegExp]"]=l[s]=l["[object String]"]=l["[object Symbol]"]=l["[object Uint8Array]"]=l["[object Uint8ClampedArray]"]=l["[object Uint16Array]"]=l["[object Uint32Array]"]=!0,l["[object Error]"]=l[n]=l["[object WeakMap]"]=!1;var y="object"==typeof o&&o&&o.Object===Object&&o,p="object"==typeof self&&self&&self.Object===Object&&self,g=y||p||Function("return this")(),h=t&&!t.nodeType&&t,b=h&&e&&!e.nodeType&&e,_=b&&b.exports===h;function d(e,t){return e.set(t[0],t[1]),e}function v(e,t){return e.add(t),e}function m(e,t,r,n){var o=-1,a=e?e.length:0;for(n&&a&&(r=e[++o]);++o<a;)r=t(r,e[o],o,e);return r}function w(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}function j(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r}function T(e,t){return function(r){return e(t(r))}}function O(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}var A,R=Array.prototype,S=Function.prototype,I=Object.prototype,E=g["__core-js_shared__"],$=(A=/[^.]+$/.exec(E&&E.keys&&E.keys.IE_PROTO||""))?"Symbol(src)_1."+A:"",F=S.toString,N=I.hasOwnProperty,x=I.toString,D=RegExp("^"+F.call(N).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),W=_?g.Buffer:void 0,k=g.Symbol,H=g.Uint8Array,J=T(Object.getPrototypeOf,Object),C=Object.create,Z=I.propertyIsEnumerable,M=R.splice,P=Object.getOwnPropertySymbols,B=W?W.isBuffer:void 0,U=T(Object.keys,Object),q=be(g,"DataView"),Y=be(g,"Map"),V=be(g,"Promise"),z=be(g,"Set"),G=be(g,"WeakMap"),L=be(Object,"create"),K=we(q),Q=we(Y),X=we(V),ee=we(z),te=we(G),re=k?k.prototype:void 0,ne=re?re.valueOf:void 0;function oe(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function ae(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function ie(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function se(e){this.__data__=new ae(e)}function ue(e,t){var n=Te(e)||function(e){return function(e){return function(e){return!!e&&"object"==typeof e}(e)&&Oe(e)}(e)&&N.call(e,"callee")&&(!Z.call(e,"callee")||x.call(e)==r)}(e)?function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}(e.length,String):[],o=n.length,a=!!o;for(var i in e)!t&&!N.call(e,i)||a&&("length"==i||ve(i,o))||n.push(i);return n}function ce(e,t,r){var n=e[t];N.call(e,t)&&je(n,r)&&(void 0!==r||t in e)||(e[t]=r)}function fe(e,t){for(var r=e.length;r--;)if(je(e[r][0],t))return r;return-1}function le(e,t,o,c,f,y,p){var g;if(c&&(g=y?c(e,f,y,p):c(e)),void 0!==g)return g;if(!Se(e))return e;var h=Te(e);if(h){if(g=function(e){var t=e.length,r=e.constructor(t);t&&"string"==typeof e[0]&&N.call(e,"index")&&(r.index=e.index,r.input=e.input);return r}(e),!t)return function(e,t){var r=-1,n=e.length;t||(t=Array(n));for(;++r<n;)t[r]=e[r];return t}(e,g)}else{var b=de(e),_=b==n||b==a;if(Ae(e))return function(e,t){if(t)return e.slice();var r=new e.constructor(e.length);return e.copy(r),r}(e,t);if("[object Object]"==b||b==r||_&&!y){if(w(e))return y?e:{};if(g=function(e){return"function"!=typeof e.constructor||me(e)?{}:(t=J(e),Se(t)?C(t):{});var t}(_?{}:e),!t)return function(e,t){return ge(e,_e(e),t)}(e,function(e,t){return e&&ge(t,Ie(t),e)}(g,e))}else{if(!l[b])return y?e:{};g=function(e,t,r,n){var o=e.constructor;switch(t){case"[object ArrayBuffer]":return pe(e);case"[object Boolean]":case"[object Date]":return new o(+e);case"[object DataView]":return function(e,t){var r=t?pe(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}(e,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return function(e,t){var r=t?pe(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}(e,n);case i:return function(e,t,r){return m(t?r(j(e),!0):j(e),d,new e.constructor)}(e,n,r);case"[object Number]":case"[object String]":return new o(e);case"[object RegExp]":return function(e){var t=new e.constructor(e.source,u.exec(e));return t.lastIndex=e.lastIndex,t}(e);case s:return function(e,t,r){return m(t?r(O(e),!0):O(e),v,new e.constructor)}(e,n,r);case"[object Symbol]":return a=e,ne?Object(ne.call(a)):{}}var a}(e,b,le,t)}}p||(p=new se);var T=p.get(e);if(T)return T;if(p.set(e,g),!h)var A=o?function(e){return function(e,t,r){var n=t(e);return Te(e)?n:function(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e}(n,r(e))}(e,Ie,_e)}(e):Ie(e);return function(e,t){for(var r=-1,n=e?e.length:0;++r<n&&!1!==t(e[r],r,e););}(A||e,(function(r,n){A&&(r=e[n=r]),ce(g,n,le(r,t,o,c,n,e,p))})),g}function ye(e){return!(!Se(e)||(t=e,$&&$ in t))&&(Re(e)||w(e)?D:c).test(we(e));var t}function pe(e){var t=new e.constructor(e.byteLength);return new H(t).set(new H(e)),t}function ge(e,t,r,n){r||(r={});for(var o=-1,a=t.length;++o<a;){var i=t[o],s=n?n(r[i],e[i],i,r,e):void 0;ce(r,i,void 0===s?e[i]:s)}return r}function he(e,t){var r,n,o=e.__data__;return("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof t?"string":"hash"]:o.map}function be(e,t){var r=function(e,t){return null==e?void 0:e[t]}(e,t);return ye(r)?r:void 0}oe.prototype.clear=function(){this.__data__=L?L(null):{}},oe.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},oe.prototype.get=function(e){var t=this.__data__;if(L){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return N.call(t,e)?t[e]:void 0},oe.prototype.has=function(e){var t=this.__data__;return L?void 0!==t[e]:N.call(t,e)},oe.prototype.set=function(e,t){return this.__data__[e]=L&&void 0===t?"__lodash_hash_undefined__":t,this},ae.prototype.clear=function(){this.__data__=[]},ae.prototype.delete=function(e){var t=this.__data__,r=fe(t,e);return!(r<0)&&(r==t.length-1?t.pop():M.call(t,r,1),!0)},ae.prototype.get=function(e){var t=this.__data__,r=fe(t,e);return r<0?void 0:t[r][1]},ae.prototype.has=function(e){return fe(this.__data__,e)>-1},ae.prototype.set=function(e,t){var r=this.__data__,n=fe(r,e);return n<0?r.push([e,t]):r[n][1]=t,this},ie.prototype.clear=function(){this.__data__={hash:new oe,map:new(Y||ae),string:new oe}},ie.prototype.delete=function(e){return he(this,e).delete(e)},ie.prototype.get=function(e){return he(this,e).get(e)},ie.prototype.has=function(e){return he(this,e).has(e)},ie.prototype.set=function(e,t){return he(this,e).set(e,t),this},se.prototype.clear=function(){this.__data__=new ae},se.prototype.delete=function(e){return this.__data__.delete(e)},se.prototype.get=function(e){return this.__data__.get(e)},se.prototype.has=function(e){return this.__data__.has(e)},se.prototype.set=function(e,t){var r=this.__data__;if(r instanceof ae){var n=r.__data__;if(!Y||n.length<199)return n.push([e,t]),this;r=this.__data__=new ie(n)}return r.set(e,t),this};var _e=P?T(P,Object):function(){return[]},de=function(e){return x.call(e)};function ve(e,t){return!!(t=null==t?9007199254740991:t)&&("number"==typeof e||f.test(e))&&e>-1&&e%1==0&&e<t}function me(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||I)}function we(e){if(null!=e){try{return F.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function je(e,t){return e===t||e!=e&&t!=t}(q&&"[object DataView]"!=de(new q(new ArrayBuffer(1)))||Y&&de(new Y)!=i||V&&"[object Promise]"!=de(V.resolve())||z&&de(new z)!=s||G&&"[object WeakMap]"!=de(new G))&&(de=function(e){var t=x.call(e),r="[object Object]"==t?e.constructor:void 0,n=r?we(r):void 0;if(n)switch(n){case K:return"[object DataView]";case Q:return i;case X:return"[object Promise]";case ee:return s;case te:return"[object WeakMap]"}return t});var Te=Array.isArray;function Oe(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}(e.length)&&!Re(e)}var Ae=B||function(){return!1};function Re(e){var t=Se(e)?x.call(e):"";return t==n||t==a}function Se(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function Ie(e){return Oe(e)?ue(e):function(e){if(!me(e))return U(e);var t=[];for(var r in Object(e))N.call(e,r)&&"constructor"!=r&&t.push(r);return t}(e)}e.exports=function(e){return le(e,!0,!0)}}));var i,s,u=Function.prototype,c=Object.prototype,f=u.toString,l=c.hasOwnProperty,y=f.call(Object),p=c.toString,g=(i=Object.getPrototypeOf,s=Object,function(e){return i(s(e))});var h=function(e){if(!function(e){return!!e&&"object"==typeof e}(e)||"[object Object]"!=p.call(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e))return!1;var t=g(e);if(null===t)return!0;var r=l.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&f.call(r)==y};function b(e,t){function r(e){return"string"==typeof e}if(!Array.isArray(e))return e;const o={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};let i;if(t){if(!h(t))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(t,null,4)} (type ${typeof t})`);if(i=Object.assign({},o,t),i.progressFn&&h(i.progressFn)&&!Object.keys(i.progressFn).length)i.progressFn=null;else if(i.progressFn&&"function"!=typeof i.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof i.progressFn}", equal to ${JSON.stringify(i.progressFn,null,4)}`);if(i.mergeType&&1!==i.mergeType&&2!==i.mergeType)if(r(i.mergeType)&&"1"===i.mergeType.trim())i.mergeType=1;else{if(!r(i.mergeType)||"2"!==i.mergeType.trim())throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof i.mergeType}", equal to ${JSON.stringify(i.mergeType,null,4)}`);i.mergeType=2}if("boolean"!=typeof i.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof i.joinRangesThatTouchEdges}", equal to ${JSON.stringify(i.joinRangesThatTouchEdges,null,4)}`)}else i=a(o);const s=a(e).filter(e=>void 0!==e[2]||e[0]!==e[1]);let u,c,f;u=i.progressFn?n(s,{progressFn:e=>{f=Math.floor(e/5),f!==c&&(c=f,i.progressFn(f))}}):n(s);const l=u.length-1;for(let e=l;e>0;e--)i.progressFn&&(f=Math.floor(78*(1-e/l))+21,f!==c&&f>c&&(c=f,i.progressFn(f))),(u[e][0]<=u[e-1][0]||!i.joinRangesThatTouchEdges&&u[e][0]<u[e-1][1]||i.joinRangesThatTouchEdges&&u[e][0]<=u[e-1][1])&&(u[e-1][0]=Math.min(u[e][0],u[e-1][0]),u[e-1][1]=Math.max(u[e][1],u[e-1][1]),void 0!==u[e][2]&&(u[e-1][0]>=u[e][0]||u[e-1][1]<=u[e][1])&&null!==u[e-1][2]&&(null===u[e][2]&&null!==u[e-1][2]?u[e-1][2]=null:void 0!==u[e-1][2]?2===i.mergeType&&u[e-1][0]===u[e][0]?u[e-1][2]=u[e][2]:u[e-1][2]+=u[e][2]:u[e-1][2]=u[e][2]),u.splice(e,1),e=u.length);return u}const _=Array.isArray;var d=Array.isArray;return function(r,n,o){if(!d(r)&&null!==r)throw new TypeError("ranges-invert: [THROW_ID_01] Input's first argument must be an array, consisting of range arrays! Currently its type is: ".concat(e(r),", equal to: ").concat(JSON.stringify(r,null,4)));if(!t(n,{includeZero:!0}))throw new TypeError("ranges-invert: [THROW_ID_02] Input's second argument must be a natural number or zero (coming from String.length)! Currently its type is: ".concat(e(n),", equal to: ").concat(JSON.stringify(n,null,4)));if(null===r)return 0===n?[]:[[0,n]];if(0===r.length)return[];var a,i,s,u=Object.assign({},{strictlyTwoElementsInRangeArrays:!1,skipChecks:!1},o);if(!u.skipChecks&&u.strictlyTwoElementsInRangeArrays&&!r.every((function(e,t){return 2===e.length||(a=t,i=e.length,!1)})))throw new TypeError("ranges-invert: [THROW_ID_04] Because opts.strictlyTwoElementsInRangeArrays was enabled, all ranges must be strictly two-element-long. However, the ".concat(a,"th range (").concat(JSON.stringify(r[a],null,0),") has not two but ").concat(i," elements!"));if(!u.skipChecks&&!r.every((function(e,r){return!(!t(e[0],{includeZero:!0})||!t(e[1],{includeZero:!0}))||(a=r,!1)}))){if(Array.isArray(r)&&"number"==typeof r[0]&&"number"==typeof r[1])throw new TypeError("ranges-invert: [THROW_ID_07] The first argument should be AN ARRAY OF RANGES, not a single range! Currently arrOfRanges = ".concat(JSON.stringify(r,null,0),"!"));throw new TypeError("ranges-invert: [THROW_ID_05] The first argument should be AN ARRAY OF ARRAYS! Each sub-array means string slice indexes. In our case, here ".concat(a+1,"th range (").concat(JSON.stringify(r[a],null,0),") does not consist of only natural numbers!"))}return 0===(s=u.skipChecks?r.filter((function(e){return e[0]!==e[1]})):b(r.filter((function(e){return e[0]!==e[1]})))).length?0===n?[]:[[0,n]]:function(e,t){if(!_(e))throw new TypeError(`ranges-crop: [THROW_ID_01] The first input's argument must be an array, consisting of range arrays! Currently its type is: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(!Number.isInteger(t,{includeZero:!0}))throw new TypeError(`ranges-crop: [THROW_ID_02] The second input's argument must be a natural number or zero (coming from String.length)! Currently its type is: ${typeof t}, equal to: ${JSON.stringify(t,null,4)}`);if(0===e.length)return e;let r;if(!e.every((e,t)=>!(!Number.isInteger(e[0],{includeZero:!0})||!Number.isInteger(e[1],{includeZero:!0}))||(r=t,!1))){if(Array.isArray(e)&&"number"==typeof e[0]&&"number"==typeof e[1])throw new TypeError(`ranges-crop: [THROW_ID_03] The first argument should be AN ARRAY OF RANGES, not a single range! Currently arrOfRanges = ${JSON.stringify(e,null,0)}!`);throw new TypeError(`ranges-crop: [THROW_ID_04] The first argument should be AN ARRAY OF ARRAYS! Each sub-array means string slice indexes. In our case, here ${r+1}th range (${JSON.stringify(e[r],null,0)}) does not consist of only natural numbers!`)}if(!e.every((e,t)=>null==e[2]||"string"==typeof e[2]||(r=t,!1)))throw new TypeError(`ranges-crop: [THROW_ID_05] The third argument, if present at all, should be of a string-type or null. Currently the ${r}th range ${JSON.stringify(e[r],null,0)} has a argument in the range of a type ${typeof e[r][2]}`);return b(e).filter(e=>e[0]<=t&&(void 0!==e[2]||e[0]<t)).map(e=>e[1]>t?void 0!==e[2]?[e[0],t,e[2]]:[e[0],t]:e)}(s.reduce((function(e,t,r,o){var a=[];0===r&&0!==o[0][0]&&a.push([0,o[0][0]]);var i=r<o.length-1?o[r+1][0]:n;if(t[1]!==i){if(u.skipChecks&&t[1]>i)throw new TypeError("ranges-invert: [THROW_ID_08] The checking (opts.skipChecks) is off and input ranges were not sorted! We nearly wrote range [".concat(t[1],", ").concat(i,"] which is backwards. For investigation, whole ranges array is:\n").concat(JSON.stringify(o,null,0)));a.push([t[1],i])}return e.concat(a)}),[]),n)}}));
