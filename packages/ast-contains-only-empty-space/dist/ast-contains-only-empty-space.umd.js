/**
 * ast-contains-only-empty-space
 * Returns Boolean depending if passed AST contain only empty space
 * Version: 1.8.54
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/ast-contains-only-empty-space
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).astContainsOnlyEmptySpace=e()}(this,(function(){"use strict";var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var e=/^\s+|\s+$/g,r="[\\ud800-\\udfff]",n="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",o="\\ud83c[\\udffb-\\udfff]",u="[^\\ud800-\\udfff]",c="(?:\\ud83c[\\udde6-\\uddff]){2}",a="[\\ud800-\\udbff][\\udc00-\\udfff]",i="(?:"+n+"|"+o+")"+"?",f="[\\ufe0e\\ufe0f]?"+i+("(?:\\u200d(?:"+[u,c,a].join("|")+")[\\ufe0e\\ufe0f]?"+i+")*"),s="(?:"+[u+n+"?",n,c,a,r].join("|")+")",l=RegExp(o+"(?="+o+")|"+s+f,"g"),p=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),b="object"==typeof t&&t&&t.Object===Object&&t,y="object"==typeof self&&self&&self.Object===Object&&self,h=b||y||Function("return this")();function d(t,e,r){if(e!=e)return function(t,e,r,n){for(var o=t.length,u=r+(n?1:-1);n?u--:++u<o;)if(e(t[u],u,t))return u;return-1}(t,v,r);for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}function v(t){return t!=t}function _(t){return function(t){return p.test(t)}(t)?function(t){return t.match(l)||[]}(t):function(t){return t.split("")}(t)}var j=Object.prototype.toString,g=h.Symbol,O=g?g.prototype:void 0,w=O?O.toString:void 0;function A(t){if("string"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==j.call(t)}(t))return w?w.call(t):"";var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}function m(t,e,r){var n=t.length;return r=void 0===r?n:r,!e&&r>=n?t:function(t,e,r){var n=-1,o=t.length;e<0&&(e=-e>o?0:o+e),(r=r>o?o:r)<0&&(r+=o),o=e>r?0:r-e>>>0,e>>>=0;for(var u=Array(o);++n<o;)u[n]=t[n+e];return u}(t,e,r)}var S=function(t,r,n){var o;if((t=null==(o=t)?"":A(o))&&(n||void 0===r))return t.replace(e,"");if(!t||!(r=A(r)))return t;var u=_(t),c=_(r);return m(u,function(t,e){for(var r=-1,n=t.length;++r<n&&d(e,t[r],0)>-1;);return r}(u,c),function(t,e){for(var r=t.length;r--&&d(e,t[r],0)>-1;);return r}(u,c)+1).join("")};var x,$,E=Function.prototype,F=Object.prototype,I=E.toString,P=F.hasOwnProperty,U=I.call(Object),k=F.toString,N=(x=Object.getPrototypeOf,$=Object,function(t){return x($(t))});var B=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||"[object Object]"!=k.call(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=N(t);if(null===e)return!0;var r=P.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&I.call(r)==U},D=function(t,e){return t(e={exports:{}},e.exports),e.exports}((function(e,r){var n="[object Arguments]",o="[object Function]",u="[object GeneratorFunction]",c="[object Map]",a="[object Set]",i=/\w*$/,f=/^\[object .+?Constructor\]$/,s=/^(?:0|[1-9]\d*)$/,l={};l[n]=l["[object Array]"]=l["[object ArrayBuffer]"]=l["[object DataView]"]=l["[object Boolean]"]=l["[object Date]"]=l["[object Float32Array]"]=l["[object Float64Array]"]=l["[object Int8Array]"]=l["[object Int16Array]"]=l["[object Int32Array]"]=l[c]=l["[object Number]"]=l["[object Object]"]=l["[object RegExp]"]=l[a]=l["[object String]"]=l["[object Symbol]"]=l["[object Uint8Array]"]=l["[object Uint8ClampedArray]"]=l["[object Uint16Array]"]=l["[object Uint32Array]"]=!0,l["[object Error]"]=l[o]=l["[object WeakMap]"]=!1;var p="object"==typeof t&&t&&t.Object===Object&&t,b="object"==typeof self&&self&&self.Object===Object&&self,y=p||b||Function("return this")(),h=r&&!r.nodeType&&r,d=h&&e&&!e.nodeType&&e,v=d&&d.exports===h;function _(t,e){return t.set(e[0],e[1]),t}function j(t,e){return t.add(e),t}function g(t,e,r,n){var o=-1,u=t?t.length:0;for(n&&u&&(r=t[++o]);++o<u;)r=e(r,t[o],o,t);return r}function O(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function w(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function A(t,e){return function(r){return t(e(r))}}function m(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var S,x=Array.prototype,$=Function.prototype,E=Object.prototype,F=y["__core-js_shared__"],I=(S=/[^.]+$/.exec(F&&F.keys&&F.keys.IE_PROTO||""))?"Symbol(src)_1."+S:"",P=$.toString,U=E.hasOwnProperty,k=E.toString,N=RegExp("^"+P.call(U).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),B=v?y.Buffer:void 0,D=y.Symbol,T=y.Uint8Array,M=A(Object.getPrototypeOf,Object),R=Object.create,V=E.propertyIsEnumerable,C=x.splice,W=Object.getOwnPropertySymbols,z=B?B.isBuffer:void 0,L=A(Object.keys,Object),G=dt(y,"DataView"),K=dt(y,"Map"),q=dt(y,"Promise"),H=dt(y,"Set"),J=dt(y,"WeakMap"),Q=dt(Object,"create"),X=Ot(G),Y=Ot(K),Z=Ot(q),tt=Ot(H),et=Ot(J),rt=D?D.prototype:void 0,nt=rt?rt.valueOf:void 0;function ot(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function ut(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function ct(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function at(t){this.__data__=new ut(t)}function it(t,e){var r=At(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&mt(t)}(t)&&U.call(t,"callee")&&(!V.call(t,"callee")||k.call(t)==n)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],o=r.length,u=!!o;for(var c in t)!e&&!U.call(t,c)||u&&("length"==c||jt(c,o))||r.push(c);return r}function ft(t,e,r){var n=t[e];U.call(t,e)&&wt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function st(t,e){for(var r=t.length;r--;)if(wt(t[r][0],e))return r;return-1}function lt(t,e,r,f,s,p,b){var y;if(f&&(y=p?f(t,s,p,b):f(t)),void 0!==y)return y;if(!$t(t))return t;var h=At(t);if(h){if(y=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&U.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,y)}else{var d=_t(t),v=d==o||d==u;if(St(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if("[object Object]"==d||d==n||v&&!p){if(O(t))return p?t:{};if(y=function(t){return"function"!=typeof t.constructor||gt(t)?{}:(e=M(t),$t(e)?R(e):{});var e}(v?{}:t),!e)return function(t,e){return yt(t,vt(t),e)}(t,function(t,e){return t&&yt(e,Et(e),t)}(y,t))}else{if(!l[d])return p?t:{};y=function(t,e,r,n){var o=t.constructor;switch(e){case"[object ArrayBuffer]":return bt(t);case"[object Boolean]":case"[object Date]":return new o(+t);case"[object DataView]":return function(t,e){var r=e?bt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return function(t,e){var r=e?bt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case c:return function(t,e,r){return g(e?r(w(t),!0):w(t),_,new t.constructor)}(t,n,r);case"[object Number]":case"[object String]":return new o(t);case"[object RegExp]":return function(t){var e=new t.constructor(t.source,i.exec(t));return e.lastIndex=t.lastIndex,e}(t);case a:return function(t,e,r){return g(e?r(m(t),!0):m(t),j,new t.constructor)}(t,n,r);case"[object Symbol]":return u=t,nt?Object(nt.call(u)):{}}var u}(t,d,lt,e)}}b||(b=new at);var A=b.get(t);if(A)return A;if(b.set(t,y),!h)var S=r?function(t){return function(t,e,r){var n=e(t);return At(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Et,vt)}(t):Et(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(S||t,(function(n,o){S&&(n=t[o=n]),ft(y,o,lt(n,e,r,f,o,t,b))})),y}function pt(t){return!(!$t(t)||function(t){return!!I&&I in t}(t))&&(xt(t)||O(t)?N:f).test(Ot(t))}function bt(t){var e=new t.constructor(t.byteLength);return new T(e).set(new T(t)),e}function yt(t,e,r,n){r||(r={});for(var o=-1,u=e.length;++o<u;){var c=e[o],a=n?n(r[c],t[c],c,r,t):void 0;ft(r,c,void 0===a?t[c]:a)}return r}function ht(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function dt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return pt(r)?r:void 0}ot.prototype.clear=function(){this.__data__=Q?Q(null):{}},ot.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},ot.prototype.get=function(t){var e=this.__data__;if(Q){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return U.call(e,t)?e[t]:void 0},ot.prototype.has=function(t){var e=this.__data__;return Q?void 0!==e[t]:U.call(e,t)},ot.prototype.set=function(t,e){return this.__data__[t]=Q&&void 0===e?"__lodash_hash_undefined__":e,this},ut.prototype.clear=function(){this.__data__=[]},ut.prototype.delete=function(t){var e=this.__data__,r=st(e,t);return!(r<0)&&(r==e.length-1?e.pop():C.call(e,r,1),!0)},ut.prototype.get=function(t){var e=this.__data__,r=st(e,t);return r<0?void 0:e[r][1]},ut.prototype.has=function(t){return st(this.__data__,t)>-1},ut.prototype.set=function(t,e){var r=this.__data__,n=st(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},ct.prototype.clear=function(){this.__data__={hash:new ot,map:new(K||ut),string:new ot}},ct.prototype.delete=function(t){return ht(this,t).delete(t)},ct.prototype.get=function(t){return ht(this,t).get(t)},ct.prototype.has=function(t){return ht(this,t).has(t)},ct.prototype.set=function(t,e){return ht(this,t).set(t,e),this},at.prototype.clear=function(){this.__data__=new ut},at.prototype.delete=function(t){return this.__data__.delete(t)},at.prototype.get=function(t){return this.__data__.get(t)},at.prototype.has=function(t){return this.__data__.has(t)},at.prototype.set=function(t,e){var r=this.__data__;if(r instanceof ut){var n=r.__data__;if(!K||n.length<199)return n.push([t,e]),this;r=this.__data__=new ct(n)}return r.set(t,e),this};var vt=W?A(W,Object):function(){return[]},_t=function(t){return k.call(t)};function jt(t,e){return!!(e=null==e?9007199254740991:e)&&("number"==typeof t||s.test(t))&&t>-1&&t%1==0&&t<e}function gt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||E)}function Ot(t){if(null!=t){try{return P.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function wt(t,e){return t===e||t!=t&&e!=e}(G&&"[object DataView]"!=_t(new G(new ArrayBuffer(1)))||K&&_t(new K)!=c||q&&"[object Promise]"!=_t(q.resolve())||H&&_t(new H)!=a||J&&"[object WeakMap]"!=_t(new J))&&(_t=function(t){var e=k.call(t),r="[object Object]"==e?t.constructor:void 0,n=r?Ot(r):void 0;if(n)switch(n){case X:return"[object DataView]";case Y:return c;case Z:return"[object Promise]";case tt:return a;case et:return"[object WeakMap]"}return e});var At=Array.isArray;function mt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}(t.length)&&!xt(t)}var St=z||function(){return!1};function xt(t){var e=$t(t)?k.call(t):"";return e==o||e==u}function $t(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Et(t){return mt(t)?it(t):function(t){if(!gt(t))return L(t);var e=[];for(var r in Object(t))U.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}e.exports=function(t){return lt(t,!0,!0)}}));const T=Array.isArray;function M(t){return"string"==typeof t&&t.length>0&&"."===t[0]?t.slice(1):t}function R(t,e){return function t(e,r,n,o){const u=D(e);let c,a,i,f,s;if((n=Object.assign({depth:-1,path:""},n)).depth+=1,T(u))for(c=0,a=u.length;c<a&&!o.now;c++){const e=`${n.path}.${c}`;void 0!==u[c]?(n.parent=D(u),n.parentType="array",i=t(r(u[c],void 0,Object.assign({},n,{path:M(e)}),o),r,Object.assign({},n,{path:M(e)}),o),Number.isNaN(i)&&c<u.length?(u.splice(c,1),c-=1):u[c]=i):u.splice(c,1)}else if(B(u))for(f=Object.keys(u),c=0,a=f.length;c<a&&!o.now;c++){s=f[c];const e=`${n.path}.${s}`;0===n.depth&&null!=s&&(n.topmostKey=s),n.parent=D(u),n.parentType="object",i=t(r(s,u[s],Object.assign({},n,{path:M(e)}),o),r,Object.assign({},n,{path:M(e)}),o),Number.isNaN(i)?delete u[s]:u[s]=i}return u}(t,e,{},{now:!1})}return function(t){function e(t){return"string"==typeof t}var r=Array.isArray,n=!0;return!!(r(t)||B(t)||e(t))&&(e(t)?0===S(t).length:(t=R(t,(function(t,r){var o=void 0!==r?r:t;return e(o)&&""!==S(o)&&(n=!1),o})),n))}}));
