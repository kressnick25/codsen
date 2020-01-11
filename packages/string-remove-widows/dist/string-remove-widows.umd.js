/**
 * string-remove-widows
 * Helps to prevent widow words in a text
 * Version: 1.5.9
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/string-remove-widows
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).stringRemoveWidows={})}(this,(function(t){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t){return"string"==typeof t?t.length>0?[t]:[]:t}function n(t){if("string"==typeof t)return 0!==t.length&&(t.charCodeAt(0)>=55296&&t.charCodeAt(0)<=56319);if(void 0===t)return!1;throw new TypeError(`string-character-is-astral-surrogate/isHighSurrogate(): the input is not string but ${typeof t}`)}function o(t){if("string"==typeof t)return 0!==t.length&&(t.charCodeAt(0)>=56320&&t.charCodeAt(0)<=57343);if(void 0===t)return!1;throw new TypeError(`string-character-is-astral-surrogate/isLowSurrogate(): the input is not string but ${typeof t}`)}function i(t){return null!=t}function s(t){return"string"==typeof t&&(t.charCodeAt(0)>=55296&&t.charCodeAt(0)<=57343)}function a(t,e,r,s,a){const u="function"==typeof r?r():r;if(e>=t.length&&a&&"EOL"===u)return u;if(!(e<=t.length)){if(s.relaxedApi)return!1;throw new Error(`string-match-left-right/marchForward(): [THROW_ID_102] second argument, fromIndexInclusive is ${e} beyond the input string length, ${t.length}.`)}{let l=a?1:r.length;for(let a=e,u=t.length;a<u;a++){let e=t[a];if(n(t[a])&&o(t[a+1])&&(e=t[a]+t[a+1]),o(t[a])&&n(t[a-1])&&(e=t[a-1]+t[a]),s.trimBeforeMatching&&""===t[a].trim())continue;if(!s.i&&s.trimCharsBeforeMatching.includes(e)||s.i&&s.trimCharsBeforeMatching.map(t=>t.toLowerCase()).includes(e.toLowerCase())){2===e.length&&(a+=1);continue}let u=r[r.length-l];if(n(u)&&i(r[r.length-l+1])&&o(r[r.length-l+1])&&(u=r[r.length-l]+r[r.length-l+1]),!(!s.i&&e===u||s.i&&e.toLowerCase()===u.toLowerCase()))return!1;if(l-=e.length,l<1){let s=a-r.length+e.length;return s>=0&&o(t[s])&&i(t[s-1])&&n(t[s-1])&&(s-=1),s>=0?s:0}2===e.length&&n(t[a])&&(a+=1)}if(l>0)return!(!a||"EOL"!==u)}}function u(t,e,r,i,s){const a="function"==typeof r?r():r;if(e<0&&s&&"EOL"===a)return a;if(e>=t.length){if(i.relaxedApi)return!1;throw new Error(`string-match-left-right/marchBackward(): [THROW_ID_203] second argument, starting index, should not be beyond the last character of the input string! Currently the first argument's last character's index is ${t.length} but the second argument is beyond it:\n${JSON.stringify(e,null,4)}`)}let u=s?1:r.length;for(let a=e+1;a--;){if(i.trimBeforeMatching&&""===t[a].trim()){if(0===a&&s&&"EOL"===r)return!0;continue}let e=t[a];if(o(t[a])&&n(t[a-1])?e=t[a-1]+t[a]:n(t[a])&&o(t[a+1])&&(e=t[a]+t[a+1]),!i.i&&i.trimCharsBeforeMatching.includes(e)||i.i&&i.trimCharsBeforeMatching.map(t=>t.toLowerCase()).includes(e.toLowerCase())){if(2===e.length&&(a-=1),s&&"EOL"===r&&0===a)return!0;continue}let l=r[u-1];if(o(l)&&(l=`${r[u-2]}${r[u-1]}`,u-=1,a-=1),!(!i.i&&e===l||i.i&&e.toLowerCase()===l.toLowerCase()))return!1;if(u-=1,u<1)return a>=0?a:0}return u>0?!(!s||"EOL"!==a):void 0}function l(t,e,l,c){return function(t,e,l,c,f){if("object"==typeof f&&null!==f&&Object.prototype.hasOwnProperty.call(f,"trimBeforeMatching")&&"boolean"!=typeof f.trimBeforeMatching)throw new Error(`string-match-left-right/${t}(): [THROW_ID_09] opts.trimBeforeMatching should be boolean!${Array.isArray(f.trimBeforeMatching)?" Did you mean to use opts.trimCharsBeforeMatching?":""}`);const h=Object.assign({},{i:!1,trimBeforeMatching:!1,trimCharsBeforeMatching:[],relaxedApi:!1},f);let g,p,y,d;if(h.trimCharsBeforeMatching=r(h.trimCharsBeforeMatching),h.trimCharsBeforeMatching=h.trimCharsBeforeMatching.map(t=>"string"==typeof t?t:String(t)),h.trimCharsBeforeMatching.some((t,e)=>t.length>1&&!s(t)&&(g=e,p=t,!0)))throw new Error(`string-match-left-right/${t}(): [THROW_ID_07] the fourth argument, options object contains trimCharsBeforeMatching. It was meant to list the single characters but one of the entries at index ${g} is longer than 1 character, ${p.length} (equals to ${p}). Please split it into separate characters and put into array as separate elements.`);if("string"!=typeof e){if(h.relaxedApi)return!1;throw new Error(`string-match-left-right/${t}(): [THROW_ID_01] the first argument should be a string. Currently it's of a type: ${typeof e}, equal to:\n${JSON.stringify(e,null,4)}`)}if(0===e.length){if(h.relaxedApi)return!1;throw new Error(`string-match-left-right/${t}(): [THROW_ID_02] the first argument should be a non-empty string. Currently it's empty!`)}if(!(Number.isInteger(l)&&l>=0)){if(h.relaxedApi)return!1;throw new Error(`string-match-left-right/${t}(): [THROW_ID_03] the second argument should be a natural number. Currently it's of a type: ${typeof l}, equal to:\n${JSON.stringify(l,null,4)}`)}if("string"==typeof c)y=[c];else if(Array.isArray(c))y=c;else if(i(c)){if("function"!=typeof c)throw new Error(`string-match-left-right/${t}(): [THROW_ID_05] the third argument, whatToMatch, is neither string nor array of strings! It's ${typeof c}, equal to:\n${JSON.stringify(c,null,4)}`);y=[],y.push(c)}else y=c;if(i(f)&&"object"!=typeof f)throw new Error(`string-match-left-right/${t}(): [THROW_ID_06] the fourth argument, options object, should be a plain object. Currently it's of a type "${typeof f}", and equal to:\n${JSON.stringify(f,null,4)}`);if(!i(y)||!Array.isArray(y)||Array.isArray(y)&&!y.length||Array.isArray(y)&&1===y.length&&"string"==typeof y[0]&&0===y[0].trim().length){if("function"==typeof h.cb){let r,i=l;if("matchRight"===t&&n(e[l])&&o(e[l+1])&&(i+=1),"matchLeftIncl"!==t&&"matchRight"!==t||(i+=1),t.startsWith("matchLeft"))for(let t=i;t--;){if(o(e[t])&&n(e[t-1]))continue;let i=e[t];if(n(e[t])&&o(e[t+1])&&(i=e[t]+e[t+1]),(!h.trimBeforeMatching||h.trimBeforeMatching&&void 0!==i&&""!==i.trim())&&(0===h.trimCharsBeforeMatching.length||void 0!==i&&!h.trimCharsBeforeMatching.includes(i))){r=t;break}o(e[t-1])&&n(e[t-2])&&(t-=1)}else if(t.startsWith("matchRight"))for(let t=i;t<e.length;t++){let i=e[t];if(n(e[t])&&o(e[t+1])&&(i=e[t]+e[t+1]),(!h.trimBeforeMatching||h.trimBeforeMatching&&""!==i.trim())&&(0===h.trimCharsBeforeMatching.length||!h.trimCharsBeforeMatching.includes(i))){r=t;break}n(e[t])&&o(e[t+1])&&(t+=1)}if(void 0===r)return!1;let s=e[r];n(e[r])&&o(e[r+1])&&(s=e[r]+e[r+1]),o(e[r])&&n(e[r-1])&&(s=e[r-1]+e[r],r-=1);let a,u=r+1;return n(e[r])&&o(e[r+1])&&(u+=1),u&&u>0&&(a=e.slice(0,u)),t.startsWith("matchLeft")?h.cb(s,a,r):(r&&r>0&&(a=e.slice(r)),h.cb(s,a,r))}let r="";throw i(f)||(r=" More so, the whole options object, the fourth input argument, is missing!"),new Error(`string-match-left-right/${t}(): [THROW_ID_08] the third argument, "whatToMatch", was given as an empty string. This means, you intend to match purely by a callback. The callback was not set though, the opts key "cb" is not set!${r}`)}if(t.startsWith("matchLeft")){for(let r=0,a=y.length;r<a;r++){d="function"==typeof y[r];const a=y[r];let c,f,g="",p=l;"matchLeft"===t&&(s(e[r-1])&&s(e[r-2])?p-=2:p-=1);const m=u(e,p,a,h,d);if(m&&d&&"function"==typeof a&&"EOL"===a())return!(!a()||h.cb&&!h.cb(c,g,f))&&a();if(i(m)&&m>0&&(f=m-1,c=e[f],g=e.slice(0,m)),o(e[f])&&i(e[f-1])&&n(e[f-1])&&(f-=1,c=e[f-1]+e[f]),n(e[f])&&i(e[f+1])&&o(e[f+1])&&(c=e[f]+e[f+1],g=e.slice(0,f+2)),!1!==m&&(!h.cb||h.cb(c,g,f)))return a}return!1}for(let r=0,s=y.length;r<s;r++){d="function"==typeof y[r];const s=y[r];let u=l+("matchRight"===t?1:0);"matchRight"===t&&n(e[u-1])&&o(e[u])&&(u+=1);const c=a(e,u,s,h,d);if(c&&d&&"function"==typeof s&&"EOL"===s()){let t,e,r;return!(!s()||h.cb&&!h.cb(t,e,r))&&s()}let f,g,p;if(i(c)&&i(e[c+s.length-1])&&(f=c+s.length,g=e[f],n(e[f])&&o(e[f+1])&&(g=e[f]+e[f+1])),i(f)&&f>=0&&(p=e.slice(f)),!1!==c&&(!h.cb||h.cb(g,p,f)))return s}return!1}("matchRightIncl",t,e,l,c)}var c,f,h=Function.prototype,g=Object.prototype,p=h.toString,y=g.hasOwnProperty,d=p.call(Object),m=g.toString,b=(c=Object.getPrototypeOf,f=Object,function(t){return c(f(t))});var w=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||"[object Object]"!=m.call(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=b(t);if(null===e)return!0;var r=y.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&p.call(r)==d},v="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var _=function(t,e){return t(e={exports:{}},e.exports),e.exports}((function(t,e){var r="[object Arguments]",n="[object Function]",o="[object GeneratorFunction]",i="[object Map]",s="[object Set]",a=/\w*$/,u=/^\[object .+?Constructor\]$/,l=/^(?:0|[1-9]\d*)$/,c={};c[r]=c["[object Array]"]=c["[object ArrayBuffer]"]=c["[object DataView]"]=c["[object Boolean]"]=c["[object Date]"]=c["[object Float32Array]"]=c["[object Float64Array]"]=c["[object Int8Array]"]=c["[object Int16Array]"]=c["[object Int32Array]"]=c[i]=c["[object Number]"]=c["[object Object]"]=c["[object RegExp]"]=c[s]=c["[object String]"]=c["[object Symbol]"]=c["[object Uint8Array]"]=c["[object Uint8ClampedArray]"]=c["[object Uint16Array]"]=c["[object Uint32Array]"]=!0,c["[object Error]"]=c[n]=c["[object WeakMap]"]=!1;var f="object"==typeof v&&v&&v.Object===Object&&v,h="object"==typeof self&&self&&self.Object===Object&&self,g=f||h||Function("return this")(),p=e&&!e.nodeType&&e,y=p&&t&&!t.nodeType&&t,d=y&&y.exports===p;function m(t,e){return t.set(e[0],e[1]),t}function b(t,e){return t.add(e),t}function w(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}function _(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function T(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function j(t,e){return function(r){return t(e(r))}}function O(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var $,A=Array.prototype,E=Function.prototype,I=Object.prototype,W=g["__core-js_shared__"],C=($=/[^.]+$/.exec(W&&W.keys&&W.keys.IE_PROTO||""))?"Symbol(src)_1."+$:"",R=E.toString,S=I.hasOwnProperty,F=I.toString,M=RegExp("^"+R.call(S).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),L=d?g.Buffer:void 0,D=g.Symbol,B=g.Uint8Array,N=j(Object.getPrototypeOf,Object),x=Object.create,H=I.propertyIsEnumerable,P=A.splice,J=Object.getOwnPropertySymbols,k=L?L.isBuffer:void 0,Z=j(Object.keys,Object),q=dt(g,"DataView"),U=dt(g,"Map"),V=dt(g,"Promise"),z=dt(g,"Set"),K=dt(g,"WeakMap"),G=dt(Object,"create"),Q=_t(q),X=_t(U),Y=_t(V),tt=_t(z),et=_t(K),rt=D?D.prototype:void 0,nt=rt?rt.valueOf:void 0;function ot(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function it(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function st(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function at(t){this.__data__=new it(t)}function ut(t,e){var n=jt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Ot(t)}(t)&&S.call(t,"callee")&&(!H.call(t,"callee")||F.call(t)==r)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],o=n.length,i=!!o;for(var s in t)!e&&!S.call(t,s)||i&&("length"==s||wt(s,o))||n.push(s);return n}function lt(t,e,r){var n=t[e];S.call(t,e)&&Tt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function ct(t,e){for(var r=t.length;r--;)if(Tt(t[r][0],e))return r;return-1}function ft(t,e,u,l,f,h,g){var p;if(l&&(p=h?l(t,f,h,g):l(t)),void 0!==p)return p;if(!Et(t))return t;var y=jt(t);if(y){if(p=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&S.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,p)}else{var d=bt(t),v=d==n||d==o;if($t(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if("[object Object]"==d||d==r||v&&!h){if(_(t))return h?t:{};if(p=function(t){return"function"!=typeof t.constructor||vt(t)?{}:(e=N(t),Et(e)?x(e):{});var e}(v?{}:t),!e)return function(t,e){return pt(t,mt(t),e)}(t,function(t,e){return t&&pt(e,It(e),t)}(p,t))}else{if(!c[d])return h?t:{};p=function(t,e,r,n){var o=t.constructor;switch(e){case"[object ArrayBuffer]":return gt(t);case"[object Boolean]":case"[object Date]":return new o(+t);case"[object DataView]":return function(t,e){var r=e?gt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return function(t,e){var r=e?gt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case i:return function(t,e,r){return w(e?r(T(t),!0):T(t),m,new t.constructor)}(t,n,r);case"[object Number]":case"[object String]":return new o(t);case"[object RegExp]":return function(t){var e=new t.constructor(t.source,a.exec(t));return e.lastIndex=t.lastIndex,e}(t);case s:return function(t,e,r){return w(e?r(O(t),!0):O(t),b,new t.constructor)}(t,n,r);case"[object Symbol]":return u=t,nt?Object(nt.call(u)):{}}var u}(t,d,ft,e)}}g||(g=new at);var j=g.get(t);if(j)return j;if(g.set(t,p),!y)var $=u?function(t){return function(t,e,r){var n=e(t);return jt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,It,mt)}(t):It(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}($||t,(function(r,n){$&&(r=t[n=r]),lt(p,n,ft(r,e,u,l,n,t,g))})),p}function ht(t){return!(!Et(t)||function(t){return!!C&&C in t}(t))&&(At(t)||_(t)?M:u).test(_t(t))}function gt(t){var e=new t.constructor(t.byteLength);return new B(e).set(new B(t)),e}function pt(t,e,r,n){r||(r={});for(var o=-1,i=e.length;++o<i;){var s=e[o],a=n?n(r[s],t[s],s,r,t):void 0;lt(r,s,void 0===a?t[s]:a)}return r}function yt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function dt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return ht(r)?r:void 0}ot.prototype.clear=function(){this.__data__=G?G(null):{}},ot.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},ot.prototype.get=function(t){var e=this.__data__;if(G){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return S.call(e,t)?e[t]:void 0},ot.prototype.has=function(t){var e=this.__data__;return G?void 0!==e[t]:S.call(e,t)},ot.prototype.set=function(t,e){return this.__data__[t]=G&&void 0===e?"__lodash_hash_undefined__":e,this},it.prototype.clear=function(){this.__data__=[]},it.prototype.delete=function(t){var e=this.__data__,r=ct(e,t);return!(r<0)&&(r==e.length-1?e.pop():P.call(e,r,1),!0)},it.prototype.get=function(t){var e=this.__data__,r=ct(e,t);return r<0?void 0:e[r][1]},it.prototype.has=function(t){return ct(this.__data__,t)>-1},it.prototype.set=function(t,e){var r=this.__data__,n=ct(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},st.prototype.clear=function(){this.__data__={hash:new ot,map:new(U||it),string:new ot}},st.prototype.delete=function(t){return yt(this,t).delete(t)},st.prototype.get=function(t){return yt(this,t).get(t)},st.prototype.has=function(t){return yt(this,t).has(t)},st.prototype.set=function(t,e){return yt(this,t).set(t,e),this},at.prototype.clear=function(){this.__data__=new it},at.prototype.delete=function(t){return this.__data__.delete(t)},at.prototype.get=function(t){return this.__data__.get(t)},at.prototype.has=function(t){return this.__data__.has(t)},at.prototype.set=function(t,e){var r=this.__data__;if(r instanceof it){var n=r.__data__;if(!U||n.length<199)return n.push([t,e]),this;r=this.__data__=new st(n)}return r.set(t,e),this};var mt=J?j(J,Object):function(){return[]},bt=function(t){return F.call(t)};function wt(t,e){return!!(e=null==e?9007199254740991:e)&&("number"==typeof t||l.test(t))&&t>-1&&t%1==0&&t<e}function vt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||I)}function _t(t){if(null!=t){try{return R.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Tt(t,e){return t===e||t!=t&&e!=e}(q&&"[object DataView]"!=bt(new q(new ArrayBuffer(1)))||U&&bt(new U)!=i||V&&"[object Promise]"!=bt(V.resolve())||z&&bt(new z)!=s||K&&"[object WeakMap]"!=bt(new K))&&(bt=function(t){var e=F.call(t),r="[object Object]"==e?t.constructor:void 0,n=r?_t(r):void 0;if(n)switch(n){case Q:return"[object DataView]";case X:return i;case Y:return"[object Promise]";case tt:return s;case et:return"[object WeakMap]"}return e});var jt=Array.isArray;function Ot(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}(t.length)&&!At(t)}var $t=k||function(){return!1};function At(t){var e=Et(t)?F.call(t):"";return e==n||e==o}function Et(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function It(t){return Ot(t)?ut(t):function(t){if(!vt(t))return Z(t);var e=[];for(var r in Object(t))S.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return ft(t,!0,!0)}}));function T(t,e){return function(t,e,r){if("string"!=typeof t||!t.length)return null;if(e&&"number"==typeof e||(e=0),!t[e+1])return null;if(t[e+1]&&(!r&&t[e+1].trim().length||r&&(t[e+1].trim().length||"\n\r".includes(t[e+1]))))return e+1;if(t[e+2]&&(!r&&t[e+2].trim().length||r&&(t[e+2].trim().length||"\n\r".includes(t[e+2]))))return e+2;for(let n=e+1,o=t.length;n<o;n++)if(t[n]&&(!r&&t[n].trim().length||r&&(t[n].trim().length||"\n\r".includes(t[n]))))return n;return null}(t,e,!1)}function j(t,e){return function(t,e,r){if("string"!=typeof t||!t.length)return null;if(e&&"number"==typeof e||(e=0),e<1)return null;if(t[e-1]&&(!r&&t[e-1].trim().length||r&&(t[e-1].trim().length||"\n\r".includes(t[e-1]))))return e-1;if(t[e-2]&&(!r&&t[e-2].trim().length||r&&(t[e-2].trim().length||"\n\r".includes(t[e-2]))))return e-2;for(let n=e;n--;)if(t[n]&&(!r&&t[n].trim().length||r&&(t[n].trim().length||"\n\r".includes(t[n]))))return n;return null}(t,e,!1)}function O(t,e=!0,r){if(!(r.trim().length||t.length&&"\n"!==r&&" "!==r&&" "===(e?t[t.length-1]:t[0])||t.length&&"\n"===(e?t[t.length-1]:t[0])&&"\n"!==r&&" "!==r))if(e){if(("\n"===r||" "===r)&&t.length&&" "===t[t.length-1])for(;t.length&&" "===t[t.length-1];)t.pop();t.push(" "===r||"\n"===r?r:" ")}else{if(("\n"===r||" "===r)&&t.length&&" "===t[0])for(;t.length&&" "===t[0];)t.shift();t.unshift(" "===r||"\n"===r?r:" ")}}function $(t,e){if("string"==typeof t&&t.length){let r,n,o=!1;if(t.includes("\r\n")&&(o=!0),r=e&&"number"==typeof e?e:1,""===t.trim()){const e=[];for(n=r,Array.from(t).forEach(t=>{("\n"!==t||n)&&("\n"===t&&n--,O(e,!0,t))});e.length>1&&" "===e[e.length-1];)e.pop();return e.join("")}const i=[];if(n=r,""===t[0].trim())for(let e=0,r=t.length;e<r&&0===t[e].trim().length;e++)("\n"!==t[e]||n)&&("\n"===t[e]&&n--,O(i,!0,t[e]));const s=[];if(n=r,""===t.slice(-1).trim())for(let e=t.length;e--&&0===t[e].trim().length;)("\n"!==t[e]||n)&&("\n"===t[e]&&n--,O(s,!1,t[e]));return o?`${i.join("")}${t.trim()}${s.join("")}`.replace(/\n/g,"\r\n"):i.join("")+t.trim()+s.join("")}return t}
/*!
   * is-natural-number-string | MIT (c) Shinnosuke Watanabe
   * https://github.com/shinnn/is-natural-number-string
  */var A=function(t,e){if("string"!=typeof t)return!1;if(e&&"includeZero"in e){if("boolean"!=typeof e.includeZero)throw new TypeError(String(e.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(e.includeZero)return/^(-?0|[1-9]\d*)(\.0+)?$/.test(t)}return/^[1-9]\d*(\.0+)?$/.test(t)},E=function(t,e){if(e){if("object"!=typeof e)throw new TypeError(String(e)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in e){if("boolean"!=typeof e.includeZero)throw new TypeError(String(e.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(e.includeZero&&0===t)return!0}}return Number.isSafeInteger(t)&&t>=1};
/*!
   * is-natural-number.js | MIT (c) Shinnosuke Watanabe
   * https://github.com/shinnn/is-natural-number.js
  */const I=Array.isArray;function W(t,e){if(!I(t))throw new TypeError(`ranges-sort: [THROW_ID_01] Input must be an array, consisting of range arrays! Currently its type is: ${typeof t}, equal to: ${JSON.stringify(t,null,4)}`);if(0===t.length)return t;const r=Object.assign({},{strictlyTwoElementsInRangeArrays:!1,progressFn:null},e);let n,o;if(r.strictlyTwoElementsInRangeArrays&&!t.every((t,e)=>2===t.length||(n=e,o=t.length,!1)))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${n}th range (${JSON.stringify(t[n],null,4)}) has not two but ${o} elements!`);if(!t.every((t,e)=>!(!E(t[0],{includeZero:!0})||!E(t[1],{includeZero:!0}))||(n=e,!1)))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${n}th range (${JSON.stringify(t[n],null,4)}) does not consist of only natural numbers!`);const i=t.length*t.length;let s=0;return Array.from(t).sort((t,e)=>(r.progressFn&&(s++,r.progressFn(Math.floor(100*s/i))),t[0]===e[0]?t[1]<e[1]?-1:t[1]>e[1]?1:0:t[0]<e[0]?-1:1))}function C(t,e){function r(t){return"string"==typeof t}if(!Array.isArray(t))return t;const n={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};let o;if(e){if(!w(e))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(e,null,4)} (type ${typeof e})`);if(o=Object.assign({},n,e),o.progressFn&&w(o.progressFn)&&!Object.keys(o.progressFn).length)o.progressFn=null;else if(o.progressFn&&"function"!=typeof o.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof o.progressFn}", equal to ${JSON.stringify(o.progressFn,null,4)}`);if(o.mergeType&&1!==o.mergeType&&2!==o.mergeType)if(r(o.mergeType)&&"1"===o.mergeType.trim())o.mergeType=1;else{if(!r(o.mergeType)||"2"!==o.mergeType.trim())throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof o.mergeType}", equal to ${JSON.stringify(o.mergeType,null,4)}`);o.mergeType=2}if("boolean"!=typeof o.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof o.joinRangesThatTouchEdges}", equal to ${JSON.stringify(o.joinRangesThatTouchEdges,null,4)}`)}else o=_(n);const i=_(t).filter(t=>void 0!==t[2]||t[0]!==t[1]);let s,a,u;s=o.progressFn?W(i,{progressFn:t=>{u=Math.floor(t/5),u!==a&&(a=u,o.progressFn(u))}}):W(i);const l=s.length-1;for(let t=l;t>0;t--)o.progressFn&&(u=Math.floor(78*(1-t/l))+21,u!==a&&u>a&&(a=u,o.progressFn(u))),(s[t][0]<=s[t-1][0]||!o.joinRangesThatTouchEdges&&s[t][0]<s[t-1][1]||o.joinRangesThatTouchEdges&&s[t][0]<=s[t-1][1])&&(s[t-1][0]=Math.min(s[t][0],s[t-1][0]),s[t-1][1]=Math.max(s[t][1],s[t-1][1]),void 0!==s[t][2]&&(s[t-1][0]>=s[t][0]||s[t-1][1]<=s[t][1])&&null!==s[t-1][2]&&(null===s[t][2]&&null!==s[t-1][2]?s[t-1][2]=null:void 0!==s[t-1][2]?2===o.mergeType&&s[t-1][0]===s[t][0]?s[t-1][2]=s[t][2]:s[t-1][2]+=s[t][2]:s[t-1][2]=s[t][2]),s.splice(t,1),t=s.length);return s}function R(t){return null!=t}const S=Array.isArray,F=Number.isInteger;function M(t){return"string"==typeof t}function L(t){return A(t,{includeZero:!0})?parseInt(t,10):t}class D{constructor(t){const e=Object.assign({},{limitToBeAddedWhitespace:!1,limitLinebreaksCount:1,mergeType:1},t);if(e.mergeType&&1!==e.mergeType&&2!==e.mergeType)if(M(e.mergeType)&&"1"===e.mergeType.trim())e.mergeType=1;else{if(!M(e.mergeType)||"2"!==e.mergeType.trim())throw new Error(`ranges-push: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof e.mergeType}", equal to ${JSON.stringify(e.mergeType,null,4)}`);e.mergeType=2}this.opts=e}add(t,e,r,...n){if(n.length>0)throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_03] Please don't overload the add() method. From the 4th input argument onwards we see these redundant arguments: ${JSON.stringify(n,null,4)}`);if(!R(t)&&!R(e))return;if(R(t)&&!R(e)){if(S(t)){if(t.length){if(t.some(t=>S(t)))return void t.forEach(t=>{S(t)&&this.add(...t)});t.length>1&&F(L(t[0]))&&F(L(t[1]))&&this.add(...t)}return}throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_12] the first input argument, "from" is set (${JSON.stringify(t,null,0)}) but second-one, "to" is not (${JSON.stringify(e,null,0)})`)}if(!R(t)&&R(e))throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_13] the second input argument, "to" is set (${JSON.stringify(e,null,0)}) but first-one, "from" is not (${JSON.stringify(t,null,0)})`);const o=A(t,{includeZero:!0})?parseInt(t,10):t,i=A(e,{includeZero:!0})?parseInt(e,10):e;if(F(r)&&(r=String(r)),!F(o)||!F(i))throw F(o)&&o>=0?new TypeError(`ranges-push/Ranges/add(): [THROW_ID_10] "to" value, the second input argument, must be a natural number or zero! Currently it's of a type "${typeof i}" equal to: ${JSON.stringify(i,null,4)}`):new TypeError(`ranges-push/Ranges/add(): [THROW_ID_09] "from" value, the first input argument, must be a natural number or zero! Currently it's of a type "${typeof o}" equal to: ${JSON.stringify(o,null,4)}`);if(R(r)&&!M(r)&&!F(r))throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_08] The third argument, the value to add, was given not as string but ${typeof r}, equal to:\n${JSON.stringify(r,null,4)}`);if(R(this.slices)&&S(this.last())&&o===this.last()[1]){if(this.last()[1]=i,this.last()[2],null!==this.last()[2]&&R(r)){let t=!(R(this.last()[2])&&this.last()[2].length>0)||this.opts&&this.opts.mergeType&&1!==this.opts.mergeType?r:this.last()[2]+r;this.opts.limitToBeAddedWhitespace&&(t=$(t,this.opts.limitLinebreaksCount)),M(t)&&!t.length||(this.last()[2]=t)}}else{this.slices||(this.slices=[]);const t=void 0===r||M(r)&&!r.length?[o,i]:[o,i,this.opts.limitToBeAddedWhitespace?$(r,this.opts.limitLinebreaksCount):r];this.slices.push(t)}}push(t,e,r,...n){this.add(t,e,r,...n)}current(){return null!=this.slices?(this.slices=C(this.slices,{mergeType:this.opts.mergeType}),this.opts.limitToBeAddedWhitespace?this.slices.map(t=>R(t[2])?[t[0],t[1],$(t[2],this.opts.limitLinebreaksCount)]:t):this.slices):null}wipe(){this.slices=void 0}replace(t){if(S(t)&&t.length){if(!S(t[0])||!F(t[0][0]))throw new Error(`ranges-push/Ranges/replace(): [THROW_ID_11] Single range was given but we expected array of arrays! The first element, ${JSON.stringify(t[0],null,4)} should be an array and its first element should be an integer, a string index.`);this.slices=_(t)}else this.slices=void 0}last(){return void 0!==this.slices&&Array.isArray(this.slices)?this.slices[this.slices.length-1]:null}}const B=Array.isArray;function N(t){return null!=t}function x(t){return"string"==typeof t}function H(t,e,r){let n=0,o=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if(!x(t))throw new TypeError(`ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ${typeof t}, equal to: ${JSON.stringify(t,null,4)}`);if(null===e)return t;if(!B(e))throw new TypeError(`ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(r&&"function"!=typeof r)throw new TypeError(`ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: ${typeof r}, equal to: ${JSON.stringify(r,null,4)}`);B(e)&&(Number.isInteger(e[0],{includeZero:!0})||A(e[0],{includeZero:!0}))&&(Number.isInteger(e[1],{includeZero:!0})||A(e[1],{includeZero:!0}))&&(e=[e]);const i=e.length;let s=0;e.forEach((t,a)=>{if(r&&(n=Math.floor(s/i*10),n!==o&&(o=n,r(n))),!B(t))throw new TypeError(`ranges-apply: [THROW_ID_05] ranges array, second input arg., has ${a}th element not an array: ${JSON.stringify(t,null,4)}, which is ${typeof t}`);if(!Number.isInteger(t[0],{includeZero:!0})){if(!A(t[0],{includeZero:!0}))throw new TypeError(`ranges-apply: [THROW_ID_06] ranges array, second input arg. has ${a}th element, array [${t[0]},${t[1]}]. That array has first element not an integer, but ${typeof t[0]}, equal to: ${JSON.stringify(t[0],null,4)}. Computer doesn't like this.`);e[a][0]=Number.parseInt(e[a][0],10)}if(!Number.isInteger(t[1],{includeZero:!0})){if(!A(t[1],{includeZero:!0}))throw new TypeError(`ranges-apply: [THROW_ID_07] ranges array, second input arg. has ${a}th element, array [${t[0]},${t[1]}]. That array has second element not an integer, but ${typeof t[1]}, equal to: ${JSON.stringify(t[1],null,4)}. Computer doesn't like this.`);e[a][1]=Number.parseInt(e[a][1],10)}s++});const a=C(e,{progressFn:t=>{r&&(n=10+Math.floor(t/10),n!==o&&(o=n,r(n)))}}),u=a.length;if(u>0){const e=t.slice(a[u-1][1]);t=a.reduce((e,i,s,a)=>{r&&(n=20+Math.floor(s/u*80),n!==o&&(o=n,r(n)));const l=0===s?0:a[s-1][1],c=a[s][0];return e+t.slice(l,c)+(N(a[s][2])?a[s][2]:"")},""),t+=e}return t}var P=[{heads:"{{",tails:"}}"},{heads:["{% if","{%- if"],tails:["{% endif","{%- endif"]},{heads:["{% for","{%- for"],tails:["{% endfor","{%- endfor"]},{heads:["{%","{%-"],tails:["%}","-%}"]},{heads:"{#",tails:"#}"}],J=[{heads:"{{",tails:"}}"}],k=[{heads:["<%","<%=","<%-"],tails:["%>","=%>","-%>"]}],Z=["abbr","address","area","article","aside","audio","base","bdi","bdo","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","doctype","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","param","picture","pre","progress","rb","rp","rt","rtc","ruby","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","ul","var","video","wbr","xml"],q={removeWidowPreventionMeasures:!1,convertEntities:!0,targetLanguage:"html",UKPostcodes:!1,hyphens:!0,minWordCount:4,minCharCount:5,ignore:[],reportProgressFunc:null,reportProgressFuncFrom:0,reportProgressFuncTo:100,tagRanges:[]};t.defaultOpts=q,t.removeWidows=function(t,n){function o(e,r){var n=" ";C.removeWidowPreventionMeasures?n=" ":C.convertEntities&&(n="&nbsp;",i(C.targetLanguage)&&("css"===C.targetLanguage.trim().toLowerCase()?n="\\00A0":"js"===C.targetLanguage.trim().toLowerCase()&&(n="\\u00A0"))),t.slice(e,r)!==n&&$.push(e,r,n)}function i(t){return"string"==typeof t}var s=Date.now();if(!i(t))throw void 0===t?new Error("string-remove-widows: [THROW_ID_01] the first input argument is completely missing! It should be given as string."):new Error('string-remove-widows: [THROW_ID_02] the first input argument must be string! It was given as "'.concat(e(t),'", equal to:\n').concat(JSON.stringify(t,null,4)));if(n&&!w(n))throw new Error("string-remove-widows: [THROW_ID_03] the second input argument, options object, should be a plain object but it was given as type ".concat(e(n),", equal to ").concat(JSON.stringify(n,null,4)));var a,u,c,f,h,g,p,y,d,m,b,v,_=Array.isArray,O=t.length,$=new D({mergeType:2}),A=["."],E=/[A-Z]{1,2}[0-9][0-9A-Z]?$/,I=/^[0-9][A-Z]{2}/,W=0,C=Object.assign({},q,n),R={removeWidows:!1,convertEntities:!1};if(C.dashes&&(C.hyphens=!0,delete C.dashes),C.ignore&&(_(C.ignore)||i(C.ignore))){if(C.ignore=r(C.ignore),C.ignore.includes("all"))C.ignore=C.ignore.concat(P.concat(k));else if(C.ignore.some((function(t){return i(t)}))){var S=[];C.ignore=C.ignore.filter((function(t){return i(t)&&t.length?(["nunjucks","jinja","liquid"].includes(t.trim().toLowerCase())?S=S.concat(P):["hugo"].includes(t.trim().toLowerCase())?S=S.concat(J):["hexo"].includes(t.trim().toLowerCase())&&(S=S.concat(k)),!1):"object"===e(t)||void 0})),S.length&&(C.ignore=C.ignore.concat(S))}}else C.ignore=[];function F(){u=0,c=0,f=void 0,h=void 0,g=void 0,p=void 0,y=void 0,d=void 0}C.reportProgressFunc&&(v=Math.floor(C.reportProgressFuncTo-.06*(C.reportProgressFuncTo-C.reportProgressFuncFrom)-C.reportProgressFuncFrom)),F();for(var M=function(e){if(!m&&_(C.ignore)&&C.ignore.length&&C.ignore.some((function(r,n){if(_(r.heads)&&r.heads.some((function(r){return t.startsWith(r,e)}))||i(r.heads)&&t.startsWith(r.heads,e))return u++,m=C.ignore[n].tails,L=e,!0})),!m&&b&&b===e&&(u++,b=void 0),"function"==typeof C.reportProgressFunc&&(a=C.reportProgressFuncFrom+Math.floor(e/O*v))!==W&&(W=a,C.reportProgressFunc(a)),!m&&e&&t[e]&&t[e].trim().length&&(!t[e-1]||t[e-1]&&!t[e-1].trim().length)&&(p=e),!m&&t[e]&&t[e].trim().length&&c++,m||!C.hyphens||!("-"===t[e]||"—"===t[e]||"–"===t[e]||t.slice(e).startsWith("&ndash;")||t.slice(e).startsWith("\\2013")||t.slice(e).startsWith("\\u2013")||t.slice(e).startsWith("&mdash;")||t.slice(e).startsWith("\\2014")||t.slice(e).startsWith("\\u2014"))||!t[e+1]||t[e+1].trim().length&&"&"!==t[e]||t[e-1]&&!t[e-1].trim().length&&t[j(t,e)]&&(o(j(t,e)+1,e),R.removeWidows=!0),!m&&("&"===t[e]&&"n"===t[e+1]&&"b"===t[e+2]&&"s"===t[e+3]&&"p"===t[e+4]&&";"===t[e+5]||"&"===t[e]&&"#"===t[e+1]&&"1"===t[e+2]&&"6"===t[e+3]&&"0"===t[e+4]&&";"===t[e+5])&&(y=e,d=e+6,t[e+6]&&t[e+6].trim().length&&(b=e+6),C.convertEntities?"css"!==C.targetLanguage&&"js"!==C.targetLanguage||($.push(e,e+6,"css"===C.targetLanguage?"\\00A0":"\\u00A0"),R.convertEntities=!0):($.push(e,e+6," "),R.convertEntities=!0)),!m&&"\\"===t[e]&&"0"===t[e+1]&&"0"===t[e+2]&&t[e+3]&&"A"===t[e+3].toUpperCase()&&"0"===t[e+4]&&(y=e,d=e+5,t[e+5]&&t[e+5].trim().length&&(b=e+5),C.convertEntities?"html"!==C.targetLanguage&&"js"!==C.targetLanguage||($.push(e,e+5,"html"===C.targetLanguage?"&nbsp;":"\\u00A0"),R.convertEntities=!0):($.push(e,e+5," "),R.convertEntities=!0)),!m&&"\\"===t[e]&&t[e+1]&&"u"===t[e+1].toLowerCase()&&"0"===t[e+2]&&"0"===t[e+3]&&t[e+4]&&"A"===t[e+4].toUpperCase()&&"0"===t[e+5]&&(y=e,d=e+6,t[e+6]&&t[e+6].trim().length&&(b=e+6),C.convertEntities?"html"!==C.targetLanguage&&"css"!==C.targetLanguage||$.push(e,e+6,"html"===C.targetLanguage?"&nbsp;":"\\00A0"):$.push(e,e+6," ")),m||" "!==t[e]||(y=e,d=e+1,t[e+2]&&t[e+2].trim().length&&(b=e+2),C.convertEntities&&$.push(e,e+1,"css"===C.targetLanguage?"\\00A0":"js"===C.targetLanguage?"\\u00A0":"&nbsp;")),m||!t[e]||!t[e].trim().length||t[e-1]&&t[e-1].trim().length||u++,!m&&(!t[e]||"\r\n".includes(t[e])||("\n"===t[e]||"\r"===t[e]||"\r"===t[e]&&"\n"===t[e+1])&&t[e-1]&&A.includes(t[j(t,e)]))){var r,n;if((!C.minWordCount||u>=C.minWordCount)&&(!C.minCharCount||c>=C.minCharCount))void 0!==g&&void 0!==p&&void 0!==y&&void 0!==d?g>y?(r=g,n=p):(r=y,n=d):void 0!==g&&void 0!==p?(r=g,n=p):void 0!==y&&void 0!==d&&(r=y,n=d),r&&n||!f||!h||(r=f,n=h),r&&n&&(o(r,n),R.removeWidows=!0);F()}C.UKPostcodes&&t[e]&&!t[e].trim().length&&t[e-1]&&t[e-1].trim().length&&E.test(t.slice(0,e))&&t[T(t,e)]&&I.test(t.slice(T(t,e)))&&(o(e,T(t,e)),R.removeWidows=!0),m||!t[e]||t[e].trim().length||!t[e-1]||!t[e-1].trim().length||!(void 0===g||t[g-1]&&t[g-1].trim().length)||"/>".includes(t[T(t,e)])||t.slice(0,j(t,e)+1).endsWith("br")||t.slice(0,j(t,e)+1).endsWith("hr")||"<"===t[j(t,e)]&&Z.some((function(r){return t.startsWith(r,T(t,e))}))||(f=g,h=p,g=e,p=void 0,void 0===y&&void 0===d||(y=void 0,d=void 0));var s=void 0;m&&(!i(m)||m.length&&!t.startsWith(m,e)?!_(m)||m.length&&!m.some((function(r){if(t.startsWith(r,e))return s=r,L=e,!0}))||(m=void 0,e+=s.length,_(C.ignore)&&C.ignore.length&&t[e+1]&&C.ignore.some((function(r){return L=e,l(t,e,r.tails,{trimBeforeMatching:!0,cb:function(r,n,o){return o&&t[(e=o-1)+1]&&t[e+1].trim().length&&u++,L=e,!0}})}))):m=void 0),t[e]&&"\r\n".includes(t[e])&&(u=0,c=0),_(C.tagRanges)&&C.tagRanges.length&&C.tagRanges.some((function(t){if(e>=t[0]&&e<=t[1]&&t[1]-1>e)return e=t[1]-1,L=e,!0})),L=e},L=0;L<=O;L++)M(L);return{res:H(t,$.current(),C.reportProgressFunc?function(t){(a=Math.floor(.94*(C.reportProgressFuncTo-C.reportProgressFuncFrom)+t/100*(C.reportProgressFuncTo-C.reportProgressFuncFrom)*.06))!==W&&(W=a,C.reportProgressFunc(a))}:null),ranges:$.current(),log:{timeTakenInMiliseconds:Date.now()-s},whatWasDone:R}},t.version="1.5.9",Object.defineProperty(t,"__esModule",{value:!0})}));
