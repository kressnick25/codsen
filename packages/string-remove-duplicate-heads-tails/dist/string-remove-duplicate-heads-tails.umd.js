/**
 * string-remove-duplicate-heads-tails
 * Detect and (recursively) remove head and tail wrappings around the input string
 * Version: 3.0.46
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/string-remove-duplicate-heads-tails
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).stringRemoveDuplicateHeadsTails=e()}(this,(function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}var e,r,n=Function.prototype,i=Object.prototype,o=n.toString,s=i.hasOwnProperty,a=o.call(Object),u=i.toString,c=(e=Object.getPrototypeOf,r=Object,function(t){return e(r(t))});var l=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||"[object Object]"!=u.call(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=c(t);if(null===e)return!0;var r=s.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&o.call(r)==a};function f(t){return"string"==typeof t?t.length>0?[t]:[]:t}function h(t){if("string"==typeof t)return 0!==t.length&&(t.charCodeAt(0)>=55296&&t.charCodeAt(0)<=56319);if(void 0===t)return!1;throw new TypeError(`string-character-is-astral-surrogate/isHighSurrogate(): the input is not string but ${typeof t}`)}function g(t){if("string"==typeof t)return 0!==t.length&&(t.charCodeAt(0)>=56320&&t.charCodeAt(0)<=57343);if(void 0===t)return!1;throw new TypeError(`string-character-is-astral-surrogate/isLowSurrogate(): the input is not string but ${typeof t}`)}function p(t){return null!=t}function y(t){return"string"==typeof t&&(t.charCodeAt(0)>=55296&&t.charCodeAt(0)<=57343)}function d(t,e,r,n,i){const o="function"==typeof r?r():r;if(e>=t.length&&i&&"EOL"===o)return o;if(!(e<=t.length)){if(n.relaxedApi)return!1;throw new Error(`string-match-left-right/marchForward(): [THROW_ID_102] second argument, fromIndexInclusive is ${e} beyond the input string length, ${t.length}.`)}{let s=i?1:r.length;for(let i=e,o=t.length;i<o;i++){let e=t[i];if(h(t[i])&&g(t[i+1])&&(e=t[i]+t[i+1]),g(t[i])&&h(t[i-1])&&(e=t[i-1]+t[i]),n.trimBeforeMatching&&""===t[i].trim())continue;if(!n.i&&n.trimCharsBeforeMatching.includes(e)||n.i&&n.trimCharsBeforeMatching.map(t=>t.toLowerCase()).includes(e.toLowerCase())){2===e.length&&(i+=1);continue}let o=r[r.length-s];if(h(o)&&p(r[r.length-s+1])&&g(r[r.length-s+1])&&(o=r[r.length-s]+r[r.length-s+1]),!(!n.i&&e===o||n.i&&e.toLowerCase()===o.toLowerCase()))return!1;if(s-=e.length,s<1){let n=i-r.length+e.length;return n>=0&&g(t[n])&&p(t[n-1])&&h(t[n-1])&&(n-=1),n>=0?n:0}2===e.length&&h(t[i])&&(i+=1)}if(s>0)return!(!i||"EOL"!==o)}}function m(t,e,r,n,i){const o="function"==typeof r?r():r;if(e<0&&i&&"EOL"===o)return o;if(e>=t.length){if(n.relaxedApi)return!1;throw new Error(`string-match-left-right/marchBackward(): [THROW_ID_203] second argument, starting index, should not be beyond the last character of the input string! Currently the first argument's last character's index is ${t.length} but the second argument is beyond it:\n${JSON.stringify(e,null,4)}`)}let s=i?1:r.length;for(let o=e+1;o--;){if(n.trimBeforeMatching&&""===t[o].trim()){if(0===o&&i&&"EOL"===r)return!0;continue}let e=t[o];if(g(t[o])&&h(t[o-1])?e=t[o-1]+t[o]:h(t[o])&&g(t[o+1])&&(e=t[o]+t[o+1]),!n.i&&n.trimCharsBeforeMatching.includes(e)||n.i&&n.trimCharsBeforeMatching.map(t=>t.toLowerCase()).includes(e.toLowerCase())){if(2===e.length&&(o-=1),i&&"EOL"===r&&0===o)return!0;continue}let a=r[s-1];if(g(a)&&(a=`${r[s-2]}${r[s-1]}`,s-=1,o-=1),!(!n.i&&e===a||n.i&&e.toLowerCase()===a.toLowerCase()))return!1;if(s-=1,s<1)return o>=0?o:0}return s>0?!(!i||"EOL"!==o):void 0}function b(t,e,r,n,i){if("object"==typeof i&&null!==i&&Object.prototype.hasOwnProperty.call(i,"trimBeforeMatching")&&"boolean"!=typeof i.trimBeforeMatching)throw new Error(`string-match-left-right/${t}(): [THROW_ID_09] opts.trimBeforeMatching should be boolean!${Array.isArray(i.trimBeforeMatching)?" Did you mean to use opts.trimCharsBeforeMatching?":""}`);const o=Object.assign({},{i:!1,trimBeforeMatching:!1,trimCharsBeforeMatching:[],relaxedApi:!1},i);let s,a,u,c;if(o.trimCharsBeforeMatching=f(o.trimCharsBeforeMatching),o.trimCharsBeforeMatching=o.trimCharsBeforeMatching.map(t=>"string"==typeof t?t:String(t)),o.trimCharsBeforeMatching.some((t,e)=>t.length>1&&!y(t)&&(s=e,a=t,!0)))throw new Error(`string-match-left-right/${t}(): [THROW_ID_07] the fourth argument, options object contains trimCharsBeforeMatching. It was meant to list the single characters but one of the entries at index ${s} is longer than 1 character, ${a.length} (equals to ${a}). Please split it into separate characters and put into array as separate elements.`);if("string"!=typeof e){if(o.relaxedApi)return!1;throw new Error(`string-match-left-right/${t}(): [THROW_ID_01] the first argument should be a string. Currently it's of a type: ${typeof e}, equal to:\n${JSON.stringify(e,null,4)}`)}if(0===e.length){if(o.relaxedApi)return!1;throw new Error(`string-match-left-right/${t}(): [THROW_ID_02] the first argument should be a non-empty string. Currently it's empty!`)}if(!(Number.isInteger(r)&&r>=0)){if(o.relaxedApi)return!1;throw new Error(`string-match-left-right/${t}(): [THROW_ID_03] the second argument should be a natural number. Currently it's of a type: ${typeof r}, equal to:\n${JSON.stringify(r,null,4)}`)}if("string"==typeof n)u=[n];else if(Array.isArray(n))u=n;else if(p(n)){if("function"!=typeof n)throw new Error(`string-match-left-right/${t}(): [THROW_ID_05] the third argument, whatToMatch, is neither string nor array of strings! It's ${typeof n}, equal to:\n${JSON.stringify(n,null,4)}`);u=[],u.push(n)}else u=n;if(p(i)&&"object"!=typeof i)throw new Error(`string-match-left-right/${t}(): [THROW_ID_06] the fourth argument, options object, should be a plain object. Currently it's of a type "${typeof i}", and equal to:\n${JSON.stringify(i,null,4)}`);if(!p(u)||!Array.isArray(u)||Array.isArray(u)&&!u.length||Array.isArray(u)&&1===u.length&&"string"==typeof u[0]&&0===u[0].trim().length){if("function"==typeof o.cb){let n,i=r;if("matchRight"===t&&h(e[r])&&g(e[r+1])&&(i+=1),"matchLeftIncl"!==t&&"matchRight"!==t||(i+=1),t.startsWith("matchLeft"))for(let t=i;t--;){if(g(e[t])&&h(e[t-1]))continue;let r=e[t];if(h(e[t])&&g(e[t+1])&&(r=e[t]+e[t+1]),(!o.trimBeforeMatching||o.trimBeforeMatching&&void 0!==r&&""!==r.trim())&&(0===o.trimCharsBeforeMatching.length||void 0!==r&&!o.trimCharsBeforeMatching.includes(r))){n=t;break}g(e[t-1])&&h(e[t-2])&&(t-=1)}else if(t.startsWith("matchRight"))for(let t=i;t<e.length;t++){let r=e[t];if(h(e[t])&&g(e[t+1])&&(r=e[t]+e[t+1]),(!o.trimBeforeMatching||o.trimBeforeMatching&&""!==r.trim())&&(0===o.trimCharsBeforeMatching.length||!o.trimCharsBeforeMatching.includes(r))){n=t;break}h(e[t])&&g(e[t+1])&&(t+=1)}if(void 0===n)return!1;let s=e[n];h(e[n])&&g(e[n+1])&&(s=e[n]+e[n+1]),g(e[n])&&h(e[n-1])&&(s=e[n-1]+e[n],n-=1);let a,u=n+1;return h(e[n])&&g(e[n+1])&&(u+=1),u&&u>0&&(a=e.slice(0,u)),t.startsWith("matchLeft")?o.cb(s,a,n):(n&&n>0&&(a=e.slice(n)),o.cb(s,a,n))}let n="";throw p(i)||(n=" More so, the whole options object, the fourth input argument, is missing!"),new Error(`string-match-left-right/${t}(): [THROW_ID_08] the third argument, "whatToMatch", was given as an empty string. This means, you intend to match purely by a callback. The callback was not set though, the opts key "cb" is not set!${n}`)}if(t.startsWith("matchLeft")){for(let n=0,i=u.length;n<i;n++){c="function"==typeof u[n];const i=u[n];let s,a,l="",f=r;"matchLeft"===t&&(y(e[n-1])&&y(e[n-2])?f-=2:f-=1);const d=m(e,f,i,o,c);if(d&&c&&"function"==typeof i&&"EOL"===i())return!(!i()||o.cb&&!o.cb(s,l,a))&&i();if(p(d)&&d>0&&(a=d-1,s=e[a],l=e.slice(0,d)),g(e[a])&&p(e[a-1])&&h(e[a-1])&&(a-=1,s=e[a-1]+e[a]),h(e[a])&&p(e[a+1])&&g(e[a+1])&&(s=e[a]+e[a+1],l=e.slice(0,a+2)),!1!==d&&(!o.cb||o.cb(s,l,a)))return i}return!1}for(let n=0,i=u.length;n<i;n++){c="function"==typeof u[n];const i=u[n];let s=r+("matchRight"===t?1:0);"matchRight"===t&&h(e[s-1])&&g(e[s])&&(s+=1);const a=d(e,s,i,o,c);if(a&&c&&"function"==typeof i&&"EOL"===i()){let t,e,r;return!(!i()||o.cb&&!o.cb(t,e,r))&&i()}let l,f,y;if(p(a)&&p(e[a+i.length-1])&&(l=a+i.length,f=e[l],h(e[l])&&g(e[l+1])&&(f=e[l]+e[l+1])),p(l)&&l>=0&&(y=e.slice(l)),!1!==a&&(!o.cb||o.cb(f,y,l)))return i}return!1}function _(t,e,r,n){return b("matchLeftIncl",t,e,r,n)}function w(t,e,r,n){return b("matchRightIncl",t,e,r,n)}function v(t,e=!0,r){if(!(r.trim().length||t.length&&"\n"!==r&&" "!==r&&" "===(e?t[t.length-1]:t[0])||t.length&&"\n"===(e?t[t.length-1]:t[0])&&"\n"!==r&&" "!==r))if(e){if(("\n"===r||" "===r)&&t.length&&" "===t[t.length-1])for(;t.length&&" "===t[t.length-1];)t.pop();t.push(" "===r||"\n"===r?r:" ")}else{if(("\n"===r||" "===r)&&t.length&&" "===t[0])for(;t.length&&" "===t[0];)t.shift();t.unshift(" "===r||"\n"===r?r:" ")}}function T(t,e){if("string"==typeof t&&t.length){let r,n,i=!1;if(t.includes("\r\n")&&(i=!0),r=e&&"number"==typeof e?e:1,""===t.trim()){const e=[];for(n=r,Array.from(t).forEach(t=>{("\n"!==t||n)&&("\n"===t&&n--,v(e,!0,t))});e.length>1&&" "===e[e.length-1];)e.pop();return e.join("")}const o=[];if(n=r,""===t[0].trim())for(let e=0,r=t.length;e<r&&0===t[e].trim().length;e++)("\n"!==t[e]||n)&&("\n"===t[e]&&n--,v(o,!0,t[e]));const s=[];if(n=r,""===t.slice(-1).trim())for(let e=t.length;e--&&0===t[e].trim().length;)("\n"!==t[e]||n)&&("\n"===t[e]&&n--,v(s,!1,t[e]));return i?`${o.join("")}${t.trim()}${s.join("")}`.replace(/\n/g,"\r\n"):o.join("")+t.trim()+s.join("")}return t}
/*!
   * is-natural-number-string | MIT (c) Shinnosuke Watanabe
   * https://github.com/shinnn/is-natural-number-string
  */var O=function(t,e){if("string"!=typeof t)return!1;if(e&&"includeZero"in e){if("boolean"!=typeof e.includeZero)throw new TypeError(String(e.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(e.includeZero)return/^(-?0|[1-9]\d*)(\.0+)?$/.test(t)}return/^[1-9]\d*(\.0+)?$/.test(t)},j=function(t,e){if(e){if("object"!=typeof e)throw new TypeError(String(e)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in e){if("boolean"!=typeof e.includeZero)throw new TypeError(String(e.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(e.includeZero&&0===t)return!0}}return Number.isSafeInteger(t)&&t>=1};
/*!
   * is-natural-number.js | MIT (c) Shinnosuke Watanabe
   * https://github.com/shinnn/is-natural-number.js
  */const $=Array.isArray;function A(t,e){if(!$(t))throw new TypeError(`ranges-sort: [THROW_ID_01] Input must be an array, consisting of range arrays! Currently its type is: ${typeof t}, equal to: ${JSON.stringify(t,null,4)}`);if(0===t.length)return t;const r=Object.assign({},{strictlyTwoElementsInRangeArrays:!1,progressFn:null},e);let n,i;if(r.strictlyTwoElementsInRangeArrays&&!t.every((t,e)=>2===t.length||(n=e,i=t.length,!1)))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${n}th range (${JSON.stringify(t[n],null,4)}) has not two but ${i} elements!`);if(!t.every((t,e)=>!(!j(t[0],{includeZero:!0})||!j(t[1],{includeZero:!0}))||(n=e,!1)))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${n}th range (${JSON.stringify(t[n],null,4)}) does not consist of only natural numbers!`);const o=t.length*t.length;let s=0;return Array.from(t).sort((t,e)=>(r.progressFn&&(s++,r.progressFn(Math.floor(100*s/o))),t[0]===e[0]?t[1]<e[1]?-1:t[1]>e[1]?1:0:t[0]<e[0]?-1:1))}var I="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var E=function(t,e){return t(e={exports:{}},e.exports),e.exports}((function(t,e){var r="[object Arguments]",n="[object Function]",i="[object GeneratorFunction]",o="[object Map]",s="[object Set]",a=/\w*$/,u=/^\[object .+?Constructor\]$/,c=/^(?:0|[1-9]\d*)$/,l={};l[r]=l["[object Array]"]=l["[object ArrayBuffer]"]=l["[object DataView]"]=l["[object Boolean]"]=l["[object Date]"]=l["[object Float32Array]"]=l["[object Float64Array]"]=l["[object Int8Array]"]=l["[object Int16Array]"]=l["[object Int32Array]"]=l[o]=l["[object Number]"]=l["[object Object]"]=l["[object RegExp]"]=l[s]=l["[object String]"]=l["[object Symbol]"]=l["[object Uint8Array]"]=l["[object Uint8ClampedArray]"]=l["[object Uint16Array]"]=l["[object Uint32Array]"]=!0,l["[object Error]"]=l[n]=l["[object WeakMap]"]=!1;var f="object"==typeof I&&I&&I.Object===Object&&I,h="object"==typeof self&&self&&self.Object===Object&&self,g=f||h||Function("return this")(),p=e&&!e.nodeType&&e,y=p&&t&&!t.nodeType&&t,d=y&&y.exports===p;function m(t,e){return t.set(e[0],e[1]),t}function b(t,e){return t.add(e),t}function _(t,e,r,n){var i=-1,o=t?t.length:0;for(n&&o&&(r=t[++i]);++i<o;)r=e(r,t[i],i,t);return r}function w(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function v(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function T(t,e){return function(r){return t(e(r))}}function O(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var j,$=Array.prototype,A=Function.prototype,E=Object.prototype,R=g["__core-js_shared__"],S=(j=/[^.]+$/.exec(R&&R.keys&&R.keys.IE_PROTO||""))?"Symbol(src)_1."+j:"",M=A.toString,B=E.hasOwnProperty,W=E.toString,C=RegExp("^"+M.call(B).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),D=d?g.Buffer:void 0,x=g.Symbol,H=g.Uint8Array,N=T(Object.getPrototypeOf,Object),F=Object.create,J=E.propertyIsEnumerable,L=$.splice,Z=Object.getOwnPropertySymbols,k=D?D.isBuffer:void 0,q=T(Object.keys,Object),P=dt(g,"DataView"),U=dt(g,"Map"),V=dt(g,"Promise"),z=dt(g,"Set"),G=dt(g,"WeakMap"),K=dt(Object,"create"),Q=vt(P),X=vt(U),Y=vt(V),tt=vt(z),et=vt(G),rt=x?x.prototype:void 0,nt=rt?rt.valueOf:void 0;function it(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function ot(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function st(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function at(t){this.__data__=new ot(t)}function ut(t,e){var n=Ot(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&jt(t)}(t)&&B.call(t,"callee")&&(!J.call(t,"callee")||W.call(t)==r)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],i=n.length,o=!!i;for(var s in t)!e&&!B.call(t,s)||o&&("length"==s||_t(s,i))||n.push(s);return n}function ct(t,e,r){var n=t[e];B.call(t,e)&&Tt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function lt(t,e){for(var r=t.length;r--;)if(Tt(t[r][0],e))return r;return-1}function ft(t,e,u,c,f,h,g){var p;if(c&&(p=h?c(t,f,h,g):c(t)),void 0!==p)return p;if(!It(t))return t;var y=Ot(t);if(y){if(p=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&B.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,p)}else{var d=bt(t),T=d==n||d==i;if($t(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if("[object Object]"==d||d==r||T&&!h){if(w(t))return h?t:{};if(p=function(t){return"function"!=typeof t.constructor||wt(t)?{}:(e=N(t),It(e)?F(e):{});var e}(T?{}:t),!e)return function(t,e){return pt(t,mt(t),e)}(t,function(t,e){return t&&pt(e,Et(e),t)}(p,t))}else{if(!l[d])return h?t:{};p=function(t,e,r,n){var i=t.constructor;switch(e){case"[object ArrayBuffer]":return gt(t);case"[object Boolean]":case"[object Date]":return new i(+t);case"[object DataView]":return function(t,e){var r=e?gt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return function(t,e){var r=e?gt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case o:return function(t,e,r){return _(e?r(v(t),!0):v(t),m,new t.constructor)}(t,n,r);case"[object Number]":case"[object String]":return new i(t);case"[object RegExp]":return function(t){var e=new t.constructor(t.source,a.exec(t));return e.lastIndex=t.lastIndex,e}(t);case s:return function(t,e,r){return _(e?r(O(t),!0):O(t),b,new t.constructor)}(t,n,r);case"[object Symbol]":return u=t,nt?Object(nt.call(u)):{}}var u}(t,d,ft,e)}}g||(g=new at);var j=g.get(t);if(j)return j;if(g.set(t,p),!y)var $=u?function(t){return function(t,e,r){var n=e(t);return Ot(t)?n:function(t,e){for(var r=-1,n=e.length,i=t.length;++r<n;)t[i+r]=e[r];return t}(n,r(t))}(t,Et,mt)}(t):Et(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}($||t,(function(r,n){$&&(r=t[n=r]),ct(p,n,ft(r,e,u,c,n,t,g))})),p}function ht(t){return!(!It(t)||function(t){return!!S&&S in t}(t))&&(At(t)||w(t)?C:u).test(vt(t))}function gt(t){var e=new t.constructor(t.byteLength);return new H(e).set(new H(t)),e}function pt(t,e,r,n){r||(r={});for(var i=-1,o=e.length;++i<o;){var s=e[i],a=n?n(r[s],t[s],s,r,t):void 0;ct(r,s,void 0===a?t[s]:a)}return r}function yt(t,e){var r,n,i=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?i["string"==typeof e?"string":"hash"]:i.map}function dt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return ht(r)?r:void 0}it.prototype.clear=function(){this.__data__=K?K(null):{}},it.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},it.prototype.get=function(t){var e=this.__data__;if(K){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return B.call(e,t)?e[t]:void 0},it.prototype.has=function(t){var e=this.__data__;return K?void 0!==e[t]:B.call(e,t)},it.prototype.set=function(t,e){return this.__data__[t]=K&&void 0===e?"__lodash_hash_undefined__":e,this},ot.prototype.clear=function(){this.__data__=[]},ot.prototype.delete=function(t){var e=this.__data__,r=lt(e,t);return!(r<0)&&(r==e.length-1?e.pop():L.call(e,r,1),!0)},ot.prototype.get=function(t){var e=this.__data__,r=lt(e,t);return r<0?void 0:e[r][1]},ot.prototype.has=function(t){return lt(this.__data__,t)>-1},ot.prototype.set=function(t,e){var r=this.__data__,n=lt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},st.prototype.clear=function(){this.__data__={hash:new it,map:new(U||ot),string:new it}},st.prototype.delete=function(t){return yt(this,t).delete(t)},st.prototype.get=function(t){return yt(this,t).get(t)},st.prototype.has=function(t){return yt(this,t).has(t)},st.prototype.set=function(t,e){return yt(this,t).set(t,e),this},at.prototype.clear=function(){this.__data__=new ot},at.prototype.delete=function(t){return this.__data__.delete(t)},at.prototype.get=function(t){return this.__data__.get(t)},at.prototype.has=function(t){return this.__data__.has(t)},at.prototype.set=function(t,e){var r=this.__data__;if(r instanceof ot){var n=r.__data__;if(!U||n.length<199)return n.push([t,e]),this;r=this.__data__=new st(n)}return r.set(t,e),this};var mt=Z?T(Z,Object):function(){return[]},bt=function(t){return W.call(t)};function _t(t,e){return!!(e=null==e?9007199254740991:e)&&("number"==typeof t||c.test(t))&&t>-1&&t%1==0&&t<e}function wt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||E)}function vt(t){if(null!=t){try{return M.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Tt(t,e){return t===e||t!=t&&e!=e}(P&&"[object DataView]"!=bt(new P(new ArrayBuffer(1)))||U&&bt(new U)!=o||V&&"[object Promise]"!=bt(V.resolve())||z&&bt(new z)!=s||G&&"[object WeakMap]"!=bt(new G))&&(bt=function(t){var e=W.call(t),r="[object Object]"==e?t.constructor:void 0,n=r?vt(r):void 0;if(n)switch(n){case Q:return"[object DataView]";case X:return o;case Y:return"[object Promise]";case tt:return s;case et:return"[object WeakMap]"}return e});var Ot=Array.isArray;function jt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}(t.length)&&!At(t)}var $t=k||function(){return!1};function At(t){var e=It(t)?W.call(t):"";return e==n||e==i}function It(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Et(t){return jt(t)?ut(t):function(t){if(!wt(t))return q(t);var e=[];for(var r in Object(t))B.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return ft(t,!0,!0)}}));function R(t,e){function r(t){return"string"==typeof t}if(!Array.isArray(t))return t;const n={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};let i;if(e){if(!l(e))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(e,null,4)} (type ${typeof e})`);if(i=Object.assign({},n,e),i.progressFn&&l(i.progressFn)&&!Object.keys(i.progressFn).length)i.progressFn=null;else if(i.progressFn&&"function"!=typeof i.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof i.progressFn}", equal to ${JSON.stringify(i.progressFn,null,4)}`);if(i.mergeType&&1!==i.mergeType&&2!==i.mergeType)if(r(i.mergeType)&&"1"===i.mergeType.trim())i.mergeType=1;else{if(!r(i.mergeType)||"2"!==i.mergeType.trim())throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof i.mergeType}", equal to ${JSON.stringify(i.mergeType,null,4)}`);i.mergeType=2}if("boolean"!=typeof i.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof i.joinRangesThatTouchEdges}", equal to ${JSON.stringify(i.joinRangesThatTouchEdges,null,4)}`)}else i=E(n);const o=E(t).filter(t=>void 0!==t[2]||t[0]!==t[1]);let s,a,u;s=i.progressFn?A(o,{progressFn:t=>{u=Math.floor(t/5),u!==a&&(a=u,i.progressFn(u))}}):A(o);const c=s.length-1;for(let t=c;t>0;t--)i.progressFn&&(u=Math.floor(78*(1-t/c))+21,u!==a&&u>a&&(a=u,i.progressFn(u))),(s[t][0]<=s[t-1][0]||!i.joinRangesThatTouchEdges&&s[t][0]<s[t-1][1]||i.joinRangesThatTouchEdges&&s[t][0]<=s[t-1][1])&&(s[t-1][0]=Math.min(s[t][0],s[t-1][0]),s[t-1][1]=Math.max(s[t][1],s[t-1][1]),void 0!==s[t][2]&&(s[t-1][0]>=s[t][0]||s[t-1][1]<=s[t][1])&&null!==s[t-1][2]&&(null===s[t][2]&&null!==s[t-1][2]?s[t-1][2]=null:void 0!==s[t-1][2]?2===i.mergeType&&s[t-1][0]===s[t][0]?s[t-1][2]=s[t][2]:s[t-1][2]+=s[t][2]:s[t-1][2]=s[t][2]),s.splice(t,1),t=s.length);return s}function S(t){return null!=t}const M=Array.isArray,B=Number.isInteger;function W(t){return"string"==typeof t}function C(t){return O(t,{includeZero:!0})?parseInt(t,10):t}class D{constructor(t){const e=Object.assign({},{limitToBeAddedWhitespace:!1,limitLinebreaksCount:1,mergeType:1},t);if(e.mergeType&&1!==e.mergeType&&2!==e.mergeType)if(W(e.mergeType)&&"1"===e.mergeType.trim())e.mergeType=1;else{if(!W(e.mergeType)||"2"!==e.mergeType.trim())throw new Error(`ranges-push: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof e.mergeType}", equal to ${JSON.stringify(e.mergeType,null,4)}`);e.mergeType=2}this.opts=e}add(t,e,r,...n){if(n.length>0)throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_03] Please don't overload the add() method. From the 4th input argument onwards we see these redundant arguments: ${JSON.stringify(n,null,4)}`);if(!S(t)&&!S(e))return;if(S(t)&&!S(e)){if(M(t)){if(t.length){if(t.some(t=>M(t)))return void t.forEach(t=>{M(t)&&this.add(...t)});t.length>1&&B(C(t[0]))&&B(C(t[1]))&&this.add(...t)}return}throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_12] the first input argument, "from" is set (${JSON.stringify(t,null,0)}) but second-one, "to" is not (${JSON.stringify(e,null,0)})`)}if(!S(t)&&S(e))throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_13] the second input argument, "to" is set (${JSON.stringify(e,null,0)}) but first-one, "from" is not (${JSON.stringify(t,null,0)})`);const i=O(t,{includeZero:!0})?parseInt(t,10):t,o=O(e,{includeZero:!0})?parseInt(e,10):e;if(B(r)&&(r=String(r)),!B(i)||!B(o))throw B(i)&&i>=0?new TypeError(`ranges-push/Ranges/add(): [THROW_ID_10] "to" value, the second input argument, must be a natural number or zero! Currently it's of a type "${typeof o}" equal to: ${JSON.stringify(o,null,4)}`):new TypeError(`ranges-push/Ranges/add(): [THROW_ID_09] "from" value, the first input argument, must be a natural number or zero! Currently it's of a type "${typeof i}" equal to: ${JSON.stringify(i,null,4)}`);if(S(r)&&!W(r)&&!B(r))throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_08] The third argument, the value to add, was given not as string but ${typeof r}, equal to:\n${JSON.stringify(r,null,4)}`);if(S(this.slices)&&M(this.last())&&i===this.last()[1]){if(this.last()[1]=o,this.last()[2],null!==this.last()[2]&&S(r)){let t=!(S(this.last()[2])&&this.last()[2].length>0)||this.opts&&this.opts.mergeType&&1!==this.opts.mergeType?r:this.last()[2]+r;this.opts.limitToBeAddedWhitespace&&(t=T(t,this.opts.limitLinebreaksCount)),W(t)&&!t.length||(this.last()[2]=t)}}else{this.slices||(this.slices=[]);const t=void 0===r||W(r)&&!r.length?[i,o]:[i,o,this.opts.limitToBeAddedWhitespace?T(r,this.opts.limitLinebreaksCount):r];this.slices.push(t)}}push(t,e,r,...n){this.add(t,e,r,...n)}current(){return null!=this.slices?(this.slices=R(this.slices,{mergeType:this.opts.mergeType}),this.opts.limitToBeAddedWhitespace?this.slices.map(t=>S(t[2])?[t[0],t[1],T(t[2],this.opts.limitLinebreaksCount)]:t):this.slices):null}wipe(){this.slices=void 0}replace(t){if(M(t)&&t.length){if(!M(t[0])||!B(t[0][0]))throw new Error(`ranges-push/Ranges/replace(): [THROW_ID_11] Single range was given but we expected array of arrays! The first element, ${JSON.stringify(t[0],null,4)} should be an array and its first element should be an integer, a string index.`);this.slices=E(t)}else this.slices=void 0}last(){return void 0!==this.slices&&Array.isArray(this.slices)?this.slices[this.slices.length-1]:null}}const x=Array.isArray;function H(t){return null!=t}function N(t){return"string"==typeof t}function F(t,e,r){let n=0,i=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if(!N(t))throw new TypeError(`ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ${typeof t}, equal to: ${JSON.stringify(t,null,4)}`);if(null===e)return t;if(!x(e))throw new TypeError(`ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(r&&"function"!=typeof r)throw new TypeError(`ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: ${typeof r}, equal to: ${JSON.stringify(r,null,4)}`);x(e)&&(Number.isInteger(e[0],{includeZero:!0})||O(e[0],{includeZero:!0}))&&(Number.isInteger(e[1],{includeZero:!0})||O(e[1],{includeZero:!0}))&&(e=[e]);const o=e.length;let s=0;e.forEach((t,a)=>{if(r&&(n=Math.floor(s/o*10),n!==i&&(i=n,r(n))),!x(t))throw new TypeError(`ranges-apply: [THROW_ID_05] ranges array, second input arg., has ${a}th element not an array: ${JSON.stringify(t,null,4)}, which is ${typeof t}`);if(!Number.isInteger(t[0],{includeZero:!0})){if(!O(t[0],{includeZero:!0}))throw new TypeError(`ranges-apply: [THROW_ID_06] ranges array, second input arg. has ${a}th element, array [${t[0]},${t[1]}]. That array has first element not an integer, but ${typeof t[0]}, equal to: ${JSON.stringify(t[0],null,4)}. Computer doesn't like this.`);e[a][0]=Number.parseInt(e[a][0],10)}if(!Number.isInteger(t[1],{includeZero:!0})){if(!O(t[1],{includeZero:!0}))throw new TypeError(`ranges-apply: [THROW_ID_07] ranges array, second input arg. has ${a}th element, array [${t[0]},${t[1]}]. That array has second element not an integer, but ${typeof t[1]}, equal to: ${JSON.stringify(t[1],null,4)}. Computer doesn't like this.`);e[a][1]=Number.parseInt(e[a][1],10)}s++});const a=R(e,{progressFn:t=>{r&&(n=10+Math.floor(t/10),n!==i&&(i=n,r(n)))}}),u=a.length;if(u>0){const e=t.slice(a[u-1][1]);t=a.reduce((e,o,s,a)=>{r&&(n=20+Math.floor(s/u*80),n!==i&&(i=n,r(n)));const c=0===s?0:a[s-1][1],l=a[s][0];return e+t.slice(c,l)+(H(a[s][2])?a[s][2]:"")},""),t+=e}return t}function J(t,e){if("string"!=typeof t)throw new Error(`string-trim-spaces-only: [THROW_ID_01] input must be string! It was given as ${typeof t}, equal to:\n${JSON.stringify(t,null,4)}`);const r=Object.assign({},{classicTrim:!1,cr:!1,lf:!1,tab:!1,space:!0,nbsp:!1},e);function n(t){return r.classicTrim&&0===t.trim().length||!r.classicTrim&&(r.space&&" "===t||r.cr&&"\r"===t||r.lf&&"\n"===t||r.tab&&"\t"===t||r.nbsp&&" "===t)}let i,o;if(t.length>0){if(n(t[0]))for(let e=0,r=t.length;e<r;e++){if(!n(t[e])){i=e;break}if(e===t.length-1)return{res:"",ranges:[[0,t.length]]}}if(n(t[t.length-1]))for(let e=t.length;e--;)if(!n(t[e])){o=e+1;break}return i?o?{res:t.slice(i,o),ranges:[[0,i],[o,t.length]]}:{res:t.slice(i),ranges:[[0,i]]}:o?{res:t.slice(0,o),ranges:[[o,t.length]]}:{res:t,ranges:[]}}return{res:"",ranges:[]}}return function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};function n(t){return null!=t}var i=Object.prototype.hasOwnProperty;function o(t){return"string"==typeof t}if(void 0===e)throw new Error("string-remove-duplicate-heads-tails: [THROW_ID_01] The input is missing!");if("string"!=typeof e)return e;if(n(r)&&!l(r))throw new Error("string-remove-duplicate-heads-tails: [THROW_ID_03] The given options are not a plain object but ".concat(t(r),"!"));if(n(r)&&i.call(r,"heads")){if(!f(r.heads).every((function(t){return o(t)})))throw new Error("string-remove-duplicate-heads-tails: [THROW_ID_04] The opts.heads contains elements which are not string-type!");o(r.heads)&&(r.heads=f(r.heads))}if(n(r)&&i.call(r,"tails")){if(!f(r.tails).every((function(t){return o(t)})))throw new Error("string-remove-duplicate-heads-tails: [THROW_ID_05] The opts.tails contains elements which are not string-type!");o(r.tails)&&(r.tails=f(r.tails))}var s=J(e).res;if(0===s.length)return e;e=s;var a={heads:["{{"],tails:["}}"]},u=Object.assign({},a,r);u.heads=u.heads.map((function(t){return t.trim()})),u.tails=u.tails.map((function(t){return t.trim()}));var c=!1,h=!1,g=new D({limitToBeAddedWhitespace:!0}),p=new D({limitToBeAddedWhitespace:!0}),y=!0,d=!0,m="";function b(t,e){var r;return w(t,0,e.heads,{trimBeforeMatching:!0,cb:function(t,e,n){return r=n,!0},relaxedApi:!0})&&w(t,r,e.tails,{trimBeforeMatching:!0,cb:function(t,e,n){return r=n,!0},relaxedApi:!0})?t.slice(r):t}for(;e!==b(e,u);)e=J(b(e,u)).res;function v(t,e){var r;return _(t,t.length-1,e.tails,{trimBeforeMatching:!0,cb:function(t,e,n){return r=n,!0},relaxedApi:!0})&&_(t,r,e.heads,{trimBeforeMatching:!0,cb:function(t,e,n){return r=n,!0},relaxedApi:!0})?t.slice(0,r+1):t}for(;e!==v(e,u);)e=J(v(e,u)).res;if(!(u.heads.length&&w(e,0,u.heads,{trimBeforeMatching:!0,relaxedApi:!0})&&u.tails.length&&_(e,e.length-1,u.tails,{trimBeforeMatching:!0,relaxedApi:!0})))return J(e).res;for(var T=0,O=e.length;T<O;T++)if(""===e[T].trim());else{var j=void 0,$=w(e,T,u.heads,{trimBeforeMatching:!0,cb:function(t,e,r){return j=r,!0},relaxedApi:!0});if($){d=!0,y&&(y=!0);var A=void 0,I=w(e,j,u.tails,{trimBeforeMatching:!0,cb:function(t,e,r){return A=r,!0},relaxedApi:!0});I&&g.push(T,A),p.current()&&c&&"tails"!==m&&g.push(p.current()),c?p.push(T,j):(p.current()&&(g.push(p.current()),p.wipe()),p.push(T,j)),m="heads",T=j-1;continue}var E=w(e,T,u.tails,{trimBeforeMatching:!0,cb:function(t,r,i){return j=n(i)?i:e.length,!0},relaxedApi:!0});if(E){d=!0,y?("heads"===m&&p.wipe(),y=!1):p.push(T,j),m="tails",T=j-1;continue}y&&(y=!0),d&&!c?(c=!0,d=!1):d&&!h?(h=!0,y=!0,d=!1,"heads"===m&&p.wipe()):d&&h&&p.wipe()}return p.current()&&g.push(p.current()),g.current()?F(e,g.current()).trim():e.trim()}}));
