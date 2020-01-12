/**
 * string-apostrophes
 * Comprehensive, HTML-entities-aware tool to typographically-correct the apostrophes and single/double quotes
 * Version: 1.2.10
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/string-apostrophes
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).stringApostrophes={})}(this,(function(e){"use strict";
/*!
   * is-natural-number-string | MIT (c) Shinnosuke Watanabe
   * https://github.com/shinnn/is-natural-number-string
  */var t=function(e,t){if("string"!=typeof e)return!1;if(t&&"includeZero"in t){if("boolean"!=typeof t.includeZero)throw new TypeError(String(t.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(t.includeZero)return/^(-?0|[1-9]\d*)(\.0+)?$/.test(e)}return/^[1-9]\d*(\.0+)?$/.test(e)},r=function(e,t){if(t){if("object"!=typeof t)throw new TypeError(String(t)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in t){if("boolean"!=typeof t.includeZero)throw new TypeError(String(t.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(t.includeZero&&0===e)return!0}}return Number.isSafeInteger(e)&&e>=1};
/*!
   * is-natural-number.js | MIT (c) Shinnosuke Watanabe
   * https://github.com/shinnn/is-natural-number.js
  */const n=Array.isArray;function o(e,t){if(!n(e))throw new TypeError(`ranges-sort: [THROW_ID_01] Input must be an array, consisting of range arrays! Currently its type is: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(0===e.length)return e;const o=Object.assign({},{strictlyTwoElementsInRangeArrays:!1,progressFn:null},t);let s,u;if(o.strictlyTwoElementsInRangeArrays&&!e.every((e,t)=>2===e.length||(s=t,u=e.length,!1)))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${s}th range (${JSON.stringify(e[s],null,4)}) has not two but ${u} elements!`);if(!e.every((e,t)=>!(!r(e[0],{includeZero:!0})||!r(e[1],{includeZero:!0}))||(s=t,!1)))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${s}th range (${JSON.stringify(e[s],null,4)}) does not consist of only natural numbers!`);const i=e.length*e.length;let a=0;return Array.from(e).sort((e,t)=>(o.progressFn&&(a++,o.progressFn(Math.floor(100*a/i))),e[0]===t[0]?e[1]<t[1]?-1:e[1]>t[1]?1:0:e[0]<t[0]?-1:1))}var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var u=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e,t){var r="[object Arguments]",n="[object Function]",o="[object GeneratorFunction]",u="[object Map]",i="[object Set]",a=/\w*$/,c=/^\[object .+?Constructor\]$/,l=/^(?:0|[1-9]\d*)$/,f={};f[r]=f["[object Array]"]=f["[object ArrayBuffer]"]=f["[object DataView]"]=f["[object Boolean]"]=f["[object Date]"]=f["[object Float32Array]"]=f["[object Float64Array]"]=f["[object Int8Array]"]=f["[object Int16Array]"]=f["[object Int32Array]"]=f[u]=f["[object Number]"]=f["[object Object]"]=f["[object RegExp]"]=f[i]=f["[object String]"]=f["[object Symbol]"]=f["[object Uint8Array]"]=f["[object Uint8ClampedArray]"]=f["[object Uint16Array]"]=f["[object Uint32Array]"]=!0,f["[object Error]"]=f[n]=f["[object WeakMap]"]=!1;var p="object"==typeof s&&s&&s.Object===Object&&s,h="object"==typeof self&&self&&self.Object===Object&&self,y=p||h||Function("return this")(),g=t&&!t.nodeType&&t,d=g&&e&&!e.nodeType&&e,b=d&&d.exports===g;function _(e,t){return e.set(t[0],t[1]),e}function w(e,t){return e.add(t),e}function v(e,t,r,n){var o=-1,s=e?e.length:0;for(n&&s&&(r=e[++o]);++o<s;)r=t(r,e[o],o,e);return r}function m(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}function j(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r}function q(e,t){return function(r){return e(t(r))}}function O(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}var T,A=Array.prototype,$=Function.prototype,I=Object.prototype,C=y["__core-js_shared__"],E=(T=/[^.]+$/.exec(C&&C.keys&&C.keys.IE_PROTO||""))?"Symbol(src)_1."+T:"",S=$.toString,F=I.hasOwnProperty,L=I.toString,R=RegExp("^"+S.call(F).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),x=b?y.Buffer:void 0,N=y.Symbol,D=y.Uint8Array,Z=q(Object.getPrototypeOf,Object),W=Object.create,H=I.propertyIsEnumerable,M=A.splice,P=Object.getOwnPropertySymbols,J=x?x.isBuffer:void 0,k=q(Object.keys,Object),B=de(y,"DataView"),U=de(y,"Map"),V=de(y,"Promise"),z=de(y,"Set"),G=de(y,"WeakMap"),K=de(Object,"create"),Q=me(B),X=me(U),Y=me(V),ee=me(z),te=me(G),re=N?N.prototype:void 0,ne=re?re.valueOf:void 0;function oe(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function se(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function ue(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function ie(e){this.__data__=new se(e)}function ae(e,t){var n=qe(e)||function(e){return function(e){return function(e){return!!e&&"object"==typeof e}(e)&&Oe(e)}(e)&&F.call(e,"callee")&&(!H.call(e,"callee")||L.call(e)==r)}(e)?function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}(e.length,String):[],o=n.length,s=!!o;for(var u in e)!t&&!F.call(e,u)||s&&("length"==u||we(u,o))||n.push(u);return n}function ce(e,t,r){var n=e[t];F.call(e,t)&&je(n,r)&&(void 0!==r||t in e)||(e[t]=r)}function le(e,t){for(var r=e.length;r--;)if(je(e[r][0],t))return r;return-1}function fe(e,t,s,c,l,p,h){var y;if(c&&(y=p?c(e,l,p,h):c(e)),void 0!==y)return y;if(!$e(e))return e;var g=qe(e);if(g){if(y=function(e){var t=e.length,r=e.constructor(t);t&&"string"==typeof e[0]&&F.call(e,"index")&&(r.index=e.index,r.input=e.input);return r}(e),!t)return function(e,t){var r=-1,n=e.length;t||(t=Array(n));for(;++r<n;)t[r]=e[r];return t}(e,y)}else{var d=_e(e),b=d==n||d==o;if(Te(e))return function(e,t){if(t)return e.slice();var r=new e.constructor(e.length);return e.copy(r),r}(e,t);if("[object Object]"==d||d==r||b&&!p){if(m(e))return p?e:{};if(y=function(e){return"function"!=typeof e.constructor||ve(e)?{}:(t=Z(e),$e(t)?W(t):{});var t}(b?{}:e),!t)return function(e,t){return ye(e,be(e),t)}(e,function(e,t){return e&&ye(t,Ie(t),e)}(y,e))}else{if(!f[d])return p?e:{};y=function(e,t,r,n){var o=e.constructor;switch(t){case"[object ArrayBuffer]":return he(e);case"[object Boolean]":case"[object Date]":return new o(+e);case"[object DataView]":return function(e,t){var r=t?he(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}(e,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return function(e,t){var r=t?he(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}(e,n);case u:return function(e,t,r){return v(t?r(j(e),!0):j(e),_,new e.constructor)}(e,n,r);case"[object Number]":case"[object String]":return new o(e);case"[object RegExp]":return function(e){var t=new e.constructor(e.source,a.exec(e));return t.lastIndex=e.lastIndex,t}(e);case i:return function(e,t,r){return v(t?r(O(e),!0):O(e),w,new e.constructor)}(e,n,r);case"[object Symbol]":return s=e,ne?Object(ne.call(s)):{}}var s}(e,d,fe,t)}}h||(h=new ie);var q=h.get(e);if(q)return q;if(h.set(e,y),!g)var T=s?function(e){return function(e,t,r){var n=t(e);return qe(e)?n:function(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e}(n,r(e))}(e,Ie,be)}(e):Ie(e);return function(e,t){for(var r=-1,n=e?e.length:0;++r<n&&!1!==t(e[r],r,e););}(T||e,(function(r,n){T&&(r=e[n=r]),ce(y,n,fe(r,t,s,c,n,e,h))})),y}function pe(e){return!(!$e(e)||(t=e,E&&E in t))&&(Ae(e)||m(e)?R:c).test(me(e));var t}function he(e){var t=new e.constructor(e.byteLength);return new D(t).set(new D(e)),t}function ye(e,t,r,n){r||(r={});for(var o=-1,s=t.length;++o<s;){var u=t[o],i=n?n(r[u],e[u],u,r,e):void 0;ce(r,u,void 0===i?e[u]:i)}return r}function ge(e,t){var r,n,o=e.__data__;return("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof t?"string":"hash"]:o.map}function de(e,t){var r=function(e,t){return null==e?void 0:e[t]}(e,t);return pe(r)?r:void 0}oe.prototype.clear=function(){this.__data__=K?K(null):{}},oe.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},oe.prototype.get=function(e){var t=this.__data__;if(K){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return F.call(t,e)?t[e]:void 0},oe.prototype.has=function(e){var t=this.__data__;return K?void 0!==t[e]:F.call(t,e)},oe.prototype.set=function(e,t){return this.__data__[e]=K&&void 0===t?"__lodash_hash_undefined__":t,this},se.prototype.clear=function(){this.__data__=[]},se.prototype.delete=function(e){var t=this.__data__,r=le(t,e);return!(r<0)&&(r==t.length-1?t.pop():M.call(t,r,1),!0)},se.prototype.get=function(e){var t=this.__data__,r=le(t,e);return r<0?void 0:t[r][1]},se.prototype.has=function(e){return le(this.__data__,e)>-1},se.prototype.set=function(e,t){var r=this.__data__,n=le(r,e);return n<0?r.push([e,t]):r[n][1]=t,this},ue.prototype.clear=function(){this.__data__={hash:new oe,map:new(U||se),string:new oe}},ue.prototype.delete=function(e){return ge(this,e).delete(e)},ue.prototype.get=function(e){return ge(this,e).get(e)},ue.prototype.has=function(e){return ge(this,e).has(e)},ue.prototype.set=function(e,t){return ge(this,e).set(e,t),this},ie.prototype.clear=function(){this.__data__=new se},ie.prototype.delete=function(e){return this.__data__.delete(e)},ie.prototype.get=function(e){return this.__data__.get(e)},ie.prototype.has=function(e){return this.__data__.has(e)},ie.prototype.set=function(e,t){var r=this.__data__;if(r instanceof se){var n=r.__data__;if(!U||n.length<199)return n.push([e,t]),this;r=this.__data__=new ue(n)}return r.set(e,t),this};var be=P?q(P,Object):function(){return[]},_e=function(e){return L.call(e)};function we(e,t){return!!(t=null==t?9007199254740991:t)&&("number"==typeof e||l.test(e))&&e>-1&&e%1==0&&e<t}function ve(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||I)}function me(e){if(null!=e){try{return S.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function je(e,t){return e===t||e!=e&&t!=t}(B&&"[object DataView]"!=_e(new B(new ArrayBuffer(1)))||U&&_e(new U)!=u||V&&"[object Promise]"!=_e(V.resolve())||z&&_e(new z)!=i||G&&"[object WeakMap]"!=_e(new G))&&(_e=function(e){var t=L.call(e),r="[object Object]"==t?e.constructor:void 0,n=r?me(r):void 0;if(n)switch(n){case Q:return"[object DataView]";case X:return u;case Y:return"[object Promise]";case ee:return i;case te:return"[object WeakMap]"}return t});var qe=Array.isArray;function Oe(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}(e.length)&&!Ae(e)}var Te=J||function(){return!1};function Ae(e){var t=$e(e)?L.call(e):"";return t==n||t==o}function $e(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function Ie(e){return Oe(e)?ae(e):function(e){if(!ve(e))return k(e);var t=[];for(var r in Object(e))F.call(e,r)&&"constructor"!=r&&t.push(r);return t}(e)}e.exports=function(e){return fe(e,!0,!0)}}));var i,a,c=Function.prototype,l=Object.prototype,f=c.toString,p=l.hasOwnProperty,h=f.call(Object),y=l.toString,g=(i=Object.getPrototypeOf,a=Object,function(e){return i(a(e))});var d=function(e){if(!function(e){return!!e&&"object"==typeof e}(e)||"[object Object]"!=y.call(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e))return!1;var t=g(e);if(null===t)return!0;var r=p.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&f.call(r)==h};function b(e,t){function r(e){return"string"==typeof e}if(!Array.isArray(e))return e;const n={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};let s;if(t){if(!d(t))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(t,null,4)} (type ${typeof t})`);if(s=Object.assign({},n,t),s.progressFn&&d(s.progressFn)&&!Object.keys(s.progressFn).length)s.progressFn=null;else if(s.progressFn&&"function"!=typeof s.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof s.progressFn}", equal to ${JSON.stringify(s.progressFn,null,4)}`);if(s.mergeType&&1!==s.mergeType&&2!==s.mergeType)if(r(s.mergeType)&&"1"===s.mergeType.trim())s.mergeType=1;else{if(!r(s.mergeType)||"2"!==s.mergeType.trim())throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof s.mergeType}", equal to ${JSON.stringify(s.mergeType,null,4)}`);s.mergeType=2}if("boolean"!=typeof s.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof s.joinRangesThatTouchEdges}", equal to ${JSON.stringify(s.joinRangesThatTouchEdges,null,4)}`)}else s=u(n);const i=u(e).filter(e=>void 0!==e[2]||e[0]!==e[1]);let a,c,l;a=s.progressFn?o(i,{progressFn:e=>{l=Math.floor(e/5),l!==c&&(c=l,s.progressFn(l))}}):o(i);const f=a.length-1;for(let e=f;e>0;e--)s.progressFn&&(l=Math.floor(78*(1-e/f))+21,l!==c&&l>c&&(c=l,s.progressFn(l))),(a[e][0]<=a[e-1][0]||!s.joinRangesThatTouchEdges&&a[e][0]<a[e-1][1]||s.joinRangesThatTouchEdges&&a[e][0]<=a[e-1][1])&&(a[e-1][0]=Math.min(a[e][0],a[e-1][0]),a[e-1][1]=Math.max(a[e][1],a[e-1][1]),void 0!==a[e][2]&&(a[e-1][0]>=a[e][0]||a[e-1][1]<=a[e][1])&&null!==a[e-1][2]&&(null===a[e][2]&&null!==a[e-1][2]?a[e-1][2]=null:void 0!==a[e-1][2]?2===s.mergeType&&a[e-1][0]===a[e][0]?a[e-1][2]=a[e][2]:a[e-1][2]+=a[e][2]:a[e-1][2]=a[e][2]),a.splice(e,1),e=a.length);return a}const _=Array.isArray;function w(e){return null!=e}function v(e){return"string"==typeof e}function m(e,r,n){let o=0,s=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if(!v(e))throw new TypeError(`ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(null===r)return e;if(!_(r))throw new TypeError(`ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ${typeof r}, equal to: ${JSON.stringify(r,null,4)}`);if(n&&"function"!=typeof n)throw new TypeError(`ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: ${typeof n}, equal to: ${JSON.stringify(n,null,4)}`);_(r)&&(Number.isInteger(r[0],{includeZero:!0})||t(r[0],{includeZero:!0}))&&(Number.isInteger(r[1],{includeZero:!0})||t(r[1],{includeZero:!0}))&&(r=[r]);const u=r.length;let i=0;r.forEach((e,a)=>{if(n&&(o=Math.floor(i/u*10),o!==s&&(s=o,n(o))),!_(e))throw new TypeError(`ranges-apply: [THROW_ID_05] ranges array, second input arg., has ${a}th element not an array: ${JSON.stringify(e,null,4)}, which is ${typeof e}`);if(!Number.isInteger(e[0],{includeZero:!0})){if(!t(e[0],{includeZero:!0}))throw new TypeError(`ranges-apply: [THROW_ID_06] ranges array, second input arg. has ${a}th element, array [${e[0]},${e[1]}]. That array has first element not an integer, but ${typeof e[0]}, equal to: ${JSON.stringify(e[0],null,4)}. Computer doesn't like this.`);r[a][0]=Number.parseInt(r[a][0],10)}if(!Number.isInteger(e[1],{includeZero:!0})){if(!t(e[1],{includeZero:!0}))throw new TypeError(`ranges-apply: [THROW_ID_07] ranges array, second input arg. has ${a}th element, array [${e[0]},${e[1]}]. That array has second element not an integer, but ${typeof e[1]}, equal to: ${JSON.stringify(e[1],null,4)}. Computer doesn't like this.`);r[a][1]=Number.parseInt(r[a][1],10)}i++});const a=b(r,{progressFn:e=>{n&&(o=10+Math.floor(e/10),o!==s&&(s=o,n(o)))}}),c=a.length;if(c>0){const t=e.slice(a[c-1][1]);e=a.reduce((t,r,u,i)=>{n&&(o=20+Math.floor(u/c*80),o!==s&&(s=o,n(o)));const a=0===u?0:i[u-1][1],l=i[u][0];return t+e.slice(a,l)+(w(i[u][2])?i[u][2]:"")},""),e+=t}return e}function j(e,t){var r=t.from,n=t.to,o=t.value,s=t.convertEntities,u=void 0===s||s,i=t.convertApostrophes,a=void 0===i||i,c=t.offsetBy;if(!Number.isInteger(n)){if(!Number.isInteger(r))throw new Error('string-apostrophes: [THROW_ID_01] options objects keys\' "to" and "from" values are not integers!');n=r+1}var l=[],f="‘",p="’",h="“",y="”",g="′",d="″",b=[".",",",";","!","?"];function _(e){return"string"==typeof e&&e.charCodeAt(0)>=48&&e.charCodeAt(0)<=57}function w(e){return"string"==typeof e&&1===e.length&&e.toUpperCase()!==e.toLowerCase()}return["'",f,p,g].includes(o)||n===r+1&&["'",f,p,g].includes(e[r])?e[r-1]&&e[n]&&_(e[r-1])&&!w(e[n])?a&&e.slice(r,n)!==(u?"&prime;":g)&&o!==(u?"&prime;":g)?l.push([r,n,u?"&prime;":g]):a||"'"===e.slice(r,n)||"'"===o||l.push([r,n,"'"]):e[n]&&e[n+1]&&"n"===e[n]&&e.slice(r,n)===e.slice(n+1,n+1+(n-r))?a&&e.slice(r,n+2)!==(u?"&rsquo;n&rsquo;":"".concat(p,"n").concat(p))&&o!==(u?"&rsquo;n&rsquo;":"".concat(p,"n").concat(p))?(l.push([r,n+2,u?"&rsquo;n&rsquo;":"".concat(p,"n").concat(p)]),"function"==typeof c&&c(2)):a||"'n'"===e.slice(r,n+2)||"'n'"===o||(l.push([r,n+2,"'n'"]),"function"==typeof c&&c(2)):e[n]&&"t"===e[n].toLowerCase()&&(!e[n+1]||0===e[n+1].trim().length||"i"===e[n+1].toLowerCase())||e[n]&&e[n+2]&&"t"===e[n].toLowerCase()&&"w"===e[n+1].toLowerCase()&&("a"===e[n+2].toLowerCase()||"e"===e[n+2].toLowerCase()||"i"===e[n+2].toLowerCase()||"o"===e[n+2].toLowerCase())||e[n]&&e[n+1]&&"e"===e[n].toLowerCase()&&"m"===e[n+1].toLowerCase()||e[n]&&e[n+4]&&"c"===e[n].toLowerCase()&&"a"===e[n+1].toLowerCase()&&"u"===e[n+2].toLowerCase()&&"s"===e[n+3].toLowerCase()&&"e"===e[n+4].toLowerCase()||e[n]&&_(e[n])?a&&e.slice(r,n)!==(u?"&rsquo;":p)&&o!==(u?"&rsquo;":p)?l.push([r,n,u?"&rsquo;":p]):a||"'"===e.slice(r,n)||"'"===o||l.push([r,n,"'"]):e[r-1]&&e[n]&&b.includes(e[r-1])?0===e[n].trim().length?a&&e.slice(r,n)!==(u?"&rsquo;":p)&&o!==(u?"&rsquo;":p)?l.push([r,n,u?"&rsquo;":p]):a||"'"===e.slice(r,n)||"'"===o||l.push([r,n,"'"]):34===e[n].charCodeAt(0)&&e[n+1]&&0===e[n+1].trim().length&&(a&&e.slice(r,n+1)!==(u?"&rsquo;&rdquo;":"".concat(p).concat(y))&&o!==(u?"&rsquo;&rdquo;":"".concat(p).concat(y))?(l.push([r,n+1,"".concat(u?"&rsquo;&rdquo;":"".concat(p).concat(y))]),"function"==typeof c&&c(1)):a||"'\""===e.slice(r,n+1)||"'\""===o||(l.push([r,n+1,"'\""]),"function"==typeof c&&c(1))):0===r&&e.slice(n).trim().length?a&&e.slice(r,n)!==(u?"&lsquo;":f)&&o!==(u?"&lsquo;":f)?l.push([r,n,u?"&lsquo;":f]):a||"'"===e.slice(r,n)||"'"===o||l.push([r,n,"'"]):!e[n]&&e.slice(0,r).trim().length?a&&e.slice(r,n)!==(u?"&rsquo;":p)&&o!==(u?"&rsquo;":p)?l.push([r,n,u?"&rsquo;":p]):a||"'"===e.slice(r,n)||"'"===o||l.push([r,n,"'"]):e[r-1]&&e[n]&&(w(e[r-1])||_(e[r-1]))&&(w(e[n])||_(e[n]))?a?(e[n]&&e[r-5]&&"h"===e[r-5].toLowerCase()&&"a"===e[r-4].toLowerCase()&&"w"===e[r-3].toLowerCase()&&"a"===e[r-2].toLowerCase()&&"i"===e[r-1].toLowerCase()&&"i"===e[n].toLowerCase()||e[r-1]&&"o"===e[r-1].toLowerCase()&&e[n+2]&&"a"===e[n].toLowerCase()&&"h"===e[n+1].toLowerCase()&&"u"===e[n+2].toLowerCase())&&e.slice(r,n)!==(u?"&lsquo;":f)&&o!==(u?"&lsquo;":f)?l.push([r,n,u?"&lsquo;":f]):e.slice(r,n)!==(u?"&rsquo;":p)&&o!==(u?"&rsquo;":p)&&l.push([r,n,u?"&rsquo;":p]):"'"!==e.slice(r,n)&&"'"!==o&&l.push([r,n,"'"]):e[n]&&(w(e[n])||_(e[n]))?a&&e.slice(r,n)!==(u?"&lsquo;":f)&&o!==(u?"&lsquo;":f)?l.push([r,n,u?"&lsquo;":f]):a||"'"===e.slice(r,n)||"'"===o||l.push([r,n,"'"]):w(e[r-1])||_(e[r-1])?a&&e.slice(r,n)!==(u?"&rsquo;":p)&&o!==(u?"&rsquo;":p)?l.push([r,n,u?"&rsquo;":p]):a||"'"===e.slice(r,n)||"'"===o||l.push([r,n,"'"]):e[r-1]&&0===e[r-1].trim().length?a&&e.slice(r,n)!==(u?"&lsquo;":f)&&o!==(u?"&lsquo;":f)?l.push([r,n,u?"&lsquo;":f]):a||"'"===e.slice(r,n)||"'"===o||l.push([r,n,"'"]):e[n]&&0===e[n].trim().length&&(a&&e.slice(r,n)!==(u?"&rsquo;":p)&&o!==(u?"&rsquo;":p)?l.push([r,n,u?"&rsquo;":p]):a||"'"===e.slice(r,n)||"'"===o||l.push([r,n,"'"])):(['"',h,y,d].includes(o)||n===r+1&&['"',h,y,d].includes(e[r]))&&(e[r-1]&&_(e[r-1])&&e[n]&&"'"!==e[n]&&'"'!==e[n]&&e[n]!==p&&e[n]!==y&&e[n]!==f&&e[n]!==h?a&&e.slice(r,n)!==(u?"&Prime;":d)&&o!==(u?"&Prime;":d)?l.push([r,n,u?"&Prime;":d]):a||'"'===e.slice(r,n)||'"'===o||l.push([r,n,'"']):e[r-1]&&e[n]&&b.includes(e[r-1])?0===e[n].trim().length?a&&e.slice(r,n)!==(u?"&rdquo;":y)&&o!==(u?"&rdquo;":y)?l.push([r,n,u?"&rdquo;":y]):a||'"'===e.slice(r,n)||'"'===o||l.push([r,n,'"']):39===e[n].charCodeAt(0)&&e[n+1]&&0===e[n+1].trim().length&&(a&&e.slice(r,n+1)!==(u?"&rdquo;&rsquo;":"".concat(y).concat(p))&&o!==(u?"&rdquo;&rsquo;":"".concat(y).concat(p))?(l.push([r,n+1,u?"&rdquo;&rsquo;":"".concat(y).concat(p)]),"function"==typeof c&&c(1)):a||"\"'"===e.slice(r,n+1)||"\"'"===o||(l.push([r,n+1,"\"'"]),"function"==typeof c&&c(1))):0===r&&e[n]&&e.slice(n).trim().length?a&&e.slice(r,n)!==(u?"&ldquo;":h)&&o!==(u?"&ldquo;":h)?l.push([r,n,u?"&ldquo;":h]):a||'"'===e.slice(r,n)||'"'===o||l.push([r,n,'"']):!e[n]&&e.slice(0,r).trim().length?a&&e.slice(r,n)!==(u?"&rdquo;":y)&&o!==(u?"&rdquo;":y)?l.push([r,n,u?"&rdquo;":y]):a||'"'===e.slice(r,n)||'"'===o||l.push([r,n,'"']):e[n]&&(w(e[n])||_(e[n]))?a&&e.slice(r,n)!==(u?"&ldquo;":h)&&o!==(u?"&ldquo;":h)?l.push([r,n,u?"&ldquo;":h]):a||'"'===e.slice(r,n)||'"'===o||l.push([r,n,'"']):e[r-1]&&(w(e[r-1])||_(e[r-1]))?a&&e.slice(r,n)!==(u?"&rdquo;":y)&&o!==(u?"&rdquo;":y)?l.push([r,n,u?"&rdquo;":y]):a||'"'===e.slice(r,n)||'"'===o||l.push([r,n,'"']):e[r-1]&&0===e[r-1].trim().length?a&&e.slice(r,n)!==(u?"&ldquo;":h)&&o!==(u?"&ldquo;":h)?l.push([r,n,u?"&ldquo;":h]):a||'"'===e.slice(r,n)||'"'===o||l.push([r,n,'"']):e[n]&&0===e[n].trim().length&&(a&&e.slice(r,n)!==(u?"&rdquo;":y)&&o!==(u?"&rdquo;":y)?l.push([r,n,u?"&rdquo;":y]):a||'"'===e.slice(r,n)||'"'===o||l.push([r,n,'"']))),l}e.convertAll=function(e,t){for(var r=[],n=Object.assign({convertApostrophes:!0,convertEntities:!1},t),o=function(t,o){n.from=t,n.offsetBy=function(e){t+=e};var u=j(e,n);Array.isArray(u)&&u.length&&(r=r.concat(u)),s=t},s=0,u=e.length;s<u;s++)o(s);return{result:m(e,r),ranges:r}},e.convertOne=j,Object.defineProperty(e,"__esModule",{value:!0})}));
