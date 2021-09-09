/**
 * @name check-types-mini
 * @fileoverview Validate options object
 * @version 7.0.0
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/check-types-mini/}
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).checkTypesMini={})}(this,(function(t){"use strict";var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},r={exports:{}};!function(t,r){t.exports=function(){var t="function"==typeof Promise,r="object"==typeof self?self:e,n="undefined"!=typeof Symbol,o="undefined"!=typeof Map,i="undefined"!=typeof Set,a="undefined"!=typeof WeakMap,c="undefined"!=typeof WeakSet,u="undefined"!=typeof DataView,s=n&&void 0!==Symbol.iterator,f=n&&void 0!==Symbol.toStringTag,p=i&&"function"==typeof Set.prototype.entries,l=o&&"function"==typeof Map.prototype.entries,y=p&&Object.getPrototypeOf((new Set).entries()),h=l&&Object.getPrototypeOf((new Map).entries()),g=s&&"function"==typeof Array.prototype[Symbol.iterator],d=g&&Object.getPrototypeOf([][Symbol.iterator]()),b=s&&"function"==typeof String.prototype[Symbol.iterator],v=b&&Object.getPrototypeOf(""[Symbol.iterator]()),_=8,m=-1;function w(e){var n=typeof e;if("object"!==n)return n;if(null===e)return"null";if(e===r)return"global";if(Array.isArray(e)&&(!1===f||!(Symbol.toStringTag in e)))return"Array";if("object"==typeof window&&null!==window){if("object"==typeof window.location&&e===window.location)return"Location";if("object"==typeof window.document&&e===window.document)return"Document";if("object"==typeof window.navigator){if("object"==typeof window.navigator.mimeTypes&&e===window.navigator.mimeTypes)return"MimeTypeArray";if("object"==typeof window.navigator.plugins&&e===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"==typeof window.HTMLElement)&&e instanceof window.HTMLElement){if("BLOCKQUOTE"===e.tagName)return"HTMLQuoteElement";if("TD"===e.tagName)return"HTMLTableDataCellElement";if("TH"===e.tagName)return"HTMLTableHeaderCellElement"}}var s=f&&e[Symbol.toStringTag];if("string"==typeof s)return s;var p=Object.getPrototypeOf(e);return p===RegExp.prototype?"RegExp":p===Date.prototype?"Date":t&&p===Promise.prototype?"Promise":i&&p===Set.prototype?"Set":o&&p===Map.prototype?"Map":c&&p===WeakSet.prototype?"WeakSet":a&&p===WeakMap.prototype?"WeakMap":u&&p===DataView.prototype?"DataView":o&&p===h?"Map Iterator":i&&p===y?"Set Iterator":g&&p===d?"Array Iterator":b&&p===v?"String Iterator":null===p?"Object":Object.prototype.toString.call(e).slice(_,m)}return w}()}(r);var n=r.exports;function o(t,e,r){if(e!=e)return function(t,e,r,n){for(var o=t.length,i=r+(n?1:-1);n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,a,r);for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}function i(t,e,r,n){for(var o=r-1,i=t.length;++o<i;)if(n(t[o],e))return o;return-1}function a(t){return t!=t}var c=Array.prototype.splice;function u(t,e,r,n){var a,u=n?i:o,s=-1,f=e.length,p=t;for(t===e&&(e=function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(e)),r&&(p=function(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}(t,(a=r,function(t){return a(t)})));++s<f;)for(var l=0,y=e[s],h=r?r(y):y;(l=u(p,h,l,n))>-1;)p!==t&&c.call(p,l,1),c.call(t,l,1);return t}var s=function(t,e){return t&&t.length&&e&&e.length?u(t,e):t},f={exports:{}};!function(t,r){var n="__lodash_hash_undefined__",o=9007199254740991,i="[object Arguments]",a="[object Boolean]",c="[object Date]",u="[object Function]",s="[object GeneratorFunction]",f="[object Map]",p="[object Number]",l="[object Object]",y="[object Promise]",h="[object RegExp]",g="[object Set]",d="[object String]",b="[object Symbol]",v="[object WeakMap]",_="[object ArrayBuffer]",m="[object DataView]",w="[object Float32Array]",j="[object Float64Array]",O="[object Int8Array]",$="[object Int16Array]",A="[object Int32Array]",S="[object Uint8Array]",T="[object Uint8ClampedArray]",k="[object Uint16Array]",E="[object Uint32Array]",x=/\w*$/,P=/^\[object .+?Constructor\]$/,N=/^(?:0|[1-9]\d*)$/,M={};M[i]=M["[object Array]"]=M[_]=M[m]=M[a]=M[c]=M[w]=M[j]=M[O]=M[$]=M[A]=M[f]=M[p]=M[l]=M[h]=M[g]=M[d]=M[b]=M[S]=M[T]=M[k]=M[E]=!0,M["[object Error]"]=M[u]=M[v]=!1;var I="object"==typeof self&&self&&self.Object===Object&&self,L="object"==typeof e&&e&&e.Object===Object&&e||I||Function("return this")(),C=r&&!r.nodeType&&r,K=C&&t&&!t.nodeType&&t,V=K&&K.exports===C;function D(t,e){return t.set(e[0],e[1]),t}function F(t,e){return t.add(e),t}function J(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}function W(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function H(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function R(t,e){return function(r){return t(e(r))}}function B(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var U,q=Array.prototype,z=Function.prototype,G=Object.prototype,Q=L["__core-js_shared__"],X=(U=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+U:"",Y=z.toString,Z=G.hasOwnProperty,tt=G.toString,et=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=V?L.Buffer:void 0,nt=L.Symbol,ot=L.Uint8Array,it=R(Object.getPrototypeOf,Object),at=Object.create,ct=G.propertyIsEnumerable,ut=q.splice,st=Object.getOwnPropertySymbols,ft=rt?rt.isBuffer:void 0,pt=R(Object.keys,Object),lt=Kt(L,"DataView"),yt=Kt(L,"Map"),ht=Kt(L,"Promise"),gt=Kt(L,"Set"),dt=Kt(L,"WeakMap"),bt=Kt(Object,"create"),vt=Wt(lt),_t=Wt(yt),mt=Wt(ht),wt=Wt(gt),jt=Wt(dt),Ot=nt?nt.prototype:void 0,$t=Ot?Ot.valueOf:void 0;function At(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function St(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Tt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function kt(t){this.__data__=new St(t)}function Et(t,e){var r=Rt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Bt(t)}(t)&&Z.call(t,"callee")&&(!ct.call(t,"callee")||tt.call(t)==i)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var a in t)!e&&!Z.call(t,a)||o&&("length"==a||Ft(a,n))||r.push(a);return r}function xt(t,e,r){var n=t[e];Z.call(t,e)&&Ht(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function Pt(t,e){for(var r=t.length;r--;)if(Ht(t[r][0],e))return r;return-1}function Nt(t,e,r,n,o,y,v){var P;if(n&&(P=y?n(t,o,y,v):n(t)),void 0!==P)return P;if(!zt(t))return t;var N=Rt(t);if(N){if(P=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&Z.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,P)}else{var I=Dt(t),L=I==u||I==s;if(Ut(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(I==l||I==i||L&&!y){if(W(t))return y?t:{};if(P=function(t){return"function"!=typeof t.constructor||Jt(t)?{}:(e=it(t),zt(e)?at(e):{});var e}(L?{}:t),!e)return function(t,e){return Lt(t,Vt(t),e)}(t,function(t,e){return t&&Lt(e,Gt(e),t)}(P,t))}else{if(!M[I])return y?t:{};P=function(t,e,r,n){var o=t.constructor;switch(e){case _:return It(t);case a:case c:return new o(+t);case m:return function(t,e){var r=e?It(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case w:case j:case O:case $:case A:case S:case T:case k:case E:return function(t,e){var r=e?It(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case f:return function(t,e,r){return J(e?r(H(t),!0):H(t),D,new t.constructor)}(t,n,r);case p:case d:return new o(t);case h:return function(t){var e=new t.constructor(t.source,x.exec(t));return e.lastIndex=t.lastIndex,e}(t);case g:return function(t,e,r){return J(e?r(B(t),!0):B(t),F,new t.constructor)}(t,n,r);case b:return i=t,$t?Object($t.call(i)):{}}var i}(t,I,Nt,e)}}v||(v=new kt);var C=v.get(t);if(C)return C;if(v.set(t,P),!N)var K=r?function(t){return function(t,e,r){var n=e(t);return Rt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Gt,Vt)}(t):Gt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(K||t,(function(o,i){K&&(o=t[i=o]),xt(P,i,Nt(o,e,r,n,i,t,v))})),P}function Mt(t){return!(!zt(t)||(e=t,X&&X in e))&&(qt(t)||W(t)?et:P).test(Wt(t));var e}function It(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function Lt(t,e,r,n){r||(r={});for(var o=-1,i=e.length;++o<i;){var a=e[o],c=n?n(r[a],t[a],a,r,t):void 0;xt(r,a,void 0===c?t[a]:c)}return r}function Ct(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Kt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Mt(r)?r:void 0}At.prototype.clear=function(){this.__data__=bt?bt(null):{}},At.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},At.prototype.get=function(t){var e=this.__data__;if(bt){var r=e[t];return r===n?void 0:r}return Z.call(e,t)?e[t]:void 0},At.prototype.has=function(t){var e=this.__data__;return bt?void 0!==e[t]:Z.call(e,t)},At.prototype.set=function(t,e){return this.__data__[t]=bt&&void 0===e?n:e,this},St.prototype.clear=function(){this.__data__=[]},St.prototype.delete=function(t){var e=this.__data__,r=Pt(e,t);return!(r<0)&&(r==e.length-1?e.pop():ut.call(e,r,1),!0)},St.prototype.get=function(t){var e=this.__data__,r=Pt(e,t);return r<0?void 0:e[r][1]},St.prototype.has=function(t){return Pt(this.__data__,t)>-1},St.prototype.set=function(t,e){var r=this.__data__,n=Pt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},Tt.prototype.clear=function(){this.__data__={hash:new At,map:new(yt||St),string:new At}},Tt.prototype.delete=function(t){return Ct(this,t).delete(t)},Tt.prototype.get=function(t){return Ct(this,t).get(t)},Tt.prototype.has=function(t){return Ct(this,t).has(t)},Tt.prototype.set=function(t,e){return Ct(this,t).set(t,e),this},kt.prototype.clear=function(){this.__data__=new St},kt.prototype.delete=function(t){return this.__data__.delete(t)},kt.prototype.get=function(t){return this.__data__.get(t)},kt.prototype.has=function(t){return this.__data__.has(t)},kt.prototype.set=function(t,e){var r=this.__data__;if(r instanceof St){var n=r.__data__;if(!yt||n.length<199)return n.push([t,e]),this;r=this.__data__=new Tt(n)}return r.set(t,e),this};var Vt=st?R(st,Object):function(){return[]},Dt=function(t){return tt.call(t)};function Ft(t,e){return!!(e=null==e?o:e)&&("number"==typeof t||N.test(t))&&t>-1&&t%1==0&&t<e}function Jt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||G)}function Wt(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Ht(t,e){return t===e||t!=t&&e!=e}(lt&&Dt(new lt(new ArrayBuffer(1)))!=m||yt&&Dt(new yt)!=f||ht&&Dt(ht.resolve())!=y||gt&&Dt(new gt)!=g||dt&&Dt(new dt)!=v)&&(Dt=function(t){var e=tt.call(t),r=e==l?t.constructor:void 0,n=r?Wt(r):void 0;if(n)switch(n){case vt:return m;case _t:return f;case mt:return y;case wt:return g;case jt:return v}return e});var Rt=Array.isArray;function Bt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=o}(t.length)&&!qt(t)}var Ut=ft||function(){return!1};function qt(t){var e=zt(t)?tt.call(t):"";return e==u||e==s}function zt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Gt(t){return Bt(t)?Et(t):function(t){if(!Jt(t))return pt(t);var e=[];for(var r in Object(t))Z.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return Nt(t,!0,!0)}}(f,f.exports);var p=f.exports;var l,y,h=Object.prototype,g=Function.prototype.toString,d=h.hasOwnProperty,b=g.call(Object),v=h.toString,_=(l=Object.getPrototypeOf,y=Object,function(t){return l(y(t))});var m=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||"[object Object]"!=v.call(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=_(t);if(null===e)return!0;var r=d.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&g.call(r)==b};
/**
 * @name ast-monkey-util
 * @fileoverview Utility library of AST helper functions
 * @version 2.0.0
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ast-monkey-util/}
 */function w(t){if(t.includes(".")){const e=t.lastIndexOf(".");if(!t.slice(0,e).includes("."))return t.slice(0,e);for(let r=e-1;r--;)if("."===t[r])return t.slice(r+1,e)}return null}
/**
 * @name ast-monkey-traverse
 * @fileoverview Utility library to traverse AST
 * @version 3.0.0
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ast-monkey-traverse/}
 */function j(t,e){return function t(e,r,n,o){const i=p(e);let a;const c={depth:-1,path:"",...n};if(c.depth+=1,Array.isArray(i))for(let e=0,n=i.length;e<n&&!o.now;e++){const n=c.path?`${c.path}.${e}`:`${e}`;void 0!==i[e]?(c.parent=p(i),c.parentType="array",c.parentKey=w(n),a=t(r(i[e],void 0,{...c,path:n},o),r,{...c,path:n},o),Number.isNaN(a)&&e<i.length?(i.splice(e,1),e-=1):i[e]=a):i.splice(e,1)}else if(m(i))for(const e in i){if(o.now&&null!=e)break;const n=c.path?`${c.path}.${e}`:e;0===c.depth&&null!=e&&(c.topmostKey=e),c.parent=p(i),c.parentType="object",c.parentKey=w(n),a=t(r(e,i[e],{...c,path:n},o),r,{...c,path:n},o),Number.isNaN(a)?delete i[e]:i[e]=a}return i}(t,e,{},{now:!1})}var O="__lodash_hash_undefined__",$=9007199254740991,A=/^\[object .+?Constructor\]$/,S="object"==typeof self&&self&&self.Object===Object&&self,T="object"==typeof e&&e&&e.Object===Object&&e||S||Function("return this")();function k(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}function E(t,e){return!!(t?t.length:0)&&function(t,e,r){if(e!=e)return function(t,e,r,n){var o=t.length,i=r+(n?1:-1);for(;n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,N,r);var n=r-1,o=t.length;for(;++n<o;)if(t[n]===e)return n;return-1}(t,e,0)>-1}function x(t,e,r){for(var n=-1,o=t?t.length:0;++n<o;)if(r(e,t[n]))return!0;return!1}function P(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}function N(t){return t!=t}function M(t){return function(e){return t(e)}}function I(t,e){return t.has(e)}var L,C=Array.prototype,K=Function.prototype,V=Object.prototype,D=T["__core-js_shared__"],F=(L=/[^.]+$/.exec(D&&D.keys&&D.keys.IE_PROTO||""))?"Symbol(src)_1."+L:"",J=K.toString,W=V.hasOwnProperty,H=V.toString,R=RegExp("^"+J.call(W).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),B=C.splice,U=Math.max,q=Math.min,z=ot(T,"Map"),G=ot(Object,"create");function Q(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function X(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Y(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Z(t){var e=-1,r=t?t.length:0;for(this.__data__=new Y;++e<r;)this.add(t[e])}function tt(t,e){for(var r,n,o=t.length;o--;)if((r=t[o][0])===(n=e)||r!=r&&n!=n)return o;return-1}function et(t){return!(!at(t)||function(t){return!!F&&F in t}(t))&&(it(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?R:A).test(function(t){if(null!=t){try{return J.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t))}function rt(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&function(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=$}(t.length)&&!it(t)}(t)}(t)?t:[]}function nt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function ot(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return et(r)?r:void 0}function it(t){var e=at(t)?H.call(t):"";return"[object Function]"==e||"[object GeneratorFunction]"==e}function at(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}Q.prototype.clear=function(){this.__data__=G?G(null):{}},Q.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},Q.prototype.get=function(t){var e=this.__data__;if(G){var r=e[t];return r===O?void 0:r}return W.call(e,t)?e[t]:void 0},Q.prototype.has=function(t){var e=this.__data__;return G?void 0!==e[t]:W.call(e,t)},Q.prototype.set=function(t,e){return this.__data__[t]=G&&void 0===e?O:e,this},X.prototype.clear=function(){this.__data__=[]},X.prototype.delete=function(t){var e=this.__data__,r=tt(e,t);return!(r<0)&&(r==e.length-1?e.pop():B.call(e,r,1),!0)},X.prototype.get=function(t){var e=this.__data__,r=tt(e,t);return r<0?void 0:e[r][1]},X.prototype.has=function(t){return tt(this.__data__,t)>-1},X.prototype.set=function(t,e){var r=this.__data__,n=tt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},Y.prototype.clear=function(){this.__data__={hash:new Q,map:new(z||X),string:new Q}},Y.prototype.delete=function(t){return nt(this,t).delete(t)},Y.prototype.get=function(t){return nt(this,t).get(t)},Y.prototype.has=function(t){return nt(this,t).has(t)},Y.prototype.set=function(t,e){return nt(this,t).set(t,e),this},Z.prototype.add=Z.prototype.push=function(t){return this.__data__.set(t,O),this},Z.prototype.has=function(t){return this.__data__.has(t)};var ct=function(t,e){return e=U(void 0===e?t.length-1:e,0),function(){for(var r=arguments,n=-1,o=U(r.length-e,0),i=Array(o);++n<o;)i[n]=r[e+n];n=-1;for(var a=Array(e+1);++n<e;)a[n]=r[n];return a[e]=i,k(t,this,a)}}((function(t){var e=P(t,rt);return e.length&&e[0]===t[0]?function(t,e,r){for(var n=r?x:E,o=t[0].length,i=t.length,a=i,c=Array(i),u=1/0,s=[];a--;){var f=t[a];a&&e&&(f=P(f,M(e))),u=q(f.length,u),c[a]=!r&&(e||o>=120&&f.length>=120)?new Z(a&&f):void 0}f=t[0];var p=-1,l=c[0];t:for(;++p<o&&s.length<u;){var y=f[p],h=e?e(y):y;if(y=r||0!==y?y:0,!(l?I(l,h):n(s,h,r))){for(a=i;--a;){var g=c[a];if(!(g?I(g,h):n(t[a],h,r)))continue t}l&&l.push(h),s.push(y)}}return s}(e):[]}));
/**
 * @name arrayiffy-if-string
 * @fileoverview Put non-empty strings into arrays, turn empty-ones into empty arrays. Bypass everything else.
 * @version 4.0.0
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/arrayiffy-if-string/}
 */function ut(t){return"string"==typeof t?t.length?[t]:[]:t}var st={exports:{}};!function(t){t.exports=function(){var t=Object.prototype.toString;function e(t,e){return null!=t&&Object.prototype.hasOwnProperty.call(t,e)}function r(t){if(!t)return!0;if(i(t)&&0===t.length)return!0;if("string"!=typeof t){for(var r in t)if(e(t,r))return!1;return!0}return!1}function n(e){return t.call(e)}function o(t){return"object"==typeof t&&"[object Object]"===n(t)}var i=Array.isArray||function(e){return"[object Array]"===t.call(e)};function a(t){return"boolean"==typeof t||"[object Boolean]"===n(t)}function c(t){var e=parseInt(t);return e.toString()===t?e:t}function u(t){var n,u=function(t){return Object.keys(u).reduce((function(e,r){return"create"===r||"function"==typeof u[r]&&(e[r]=u[r].bind(u,t)),e}),{})};function s(t,e){if(n(t,e))return t[e]}function f(e,r,n,o){if("number"==typeof r&&(r=[r]),!r||0===r.length)return e;if("string"==typeof r)return f(e,r.split(".").map(c),n,o);var i=r[0];"string"!=typeof i&&"number"!=typeof i&&(i=String(i));var a=s(e,i);if(t.includeInheritedProps&&("__proto__"===i||"constructor"===i&&"function"==typeof a))throw new Error("For security reasons, object's magic properties cannot be set");return 1===r.length?(void 0!==a&&o||(e[i]=n),a):(void 0===a&&(e[i]="number"==typeof r[1]?[]:{}),f(e[i],r.slice(1),n,o))}return n=(t=t||{}).includeInheritedProps?function(){return!0}:function(t,r){return"number"==typeof r&&Array.isArray(t)||e(t,r)},u.has=function(r,n){if("number"==typeof n?n=[n]:"string"==typeof n&&(n=n.split(".")),!n||0===n.length)return!!r;for(var o=0;o<n.length;o++){var a=c(n[o]);if(!("number"==typeof a&&i(r)&&a<r.length||(t.includeInheritedProps?a in Object(r):e(r,a))))return!1;r=r[a]}return!0},u.ensureExists=function(t,e,r){return f(t,e,r,!0)},u.set=function(t,e,r,n){return f(t,e,r,n)},u.insert=function(t,e,r,n){var o=u.get(t,e);n=~~n,i(o)||u.set(t,e,o=[]),o.splice(n,0,r)},u.empty=function(t,e){var c,s;if(!r(e)&&null!=t&&(c=u.get(t,e))){if("string"==typeof c)return u.set(t,e,"");if(a(c))return u.set(t,e,!1);if("number"==typeof c)return u.set(t,e,0);if(i(c))c.length=0;else{if(!o(c))return u.set(t,e,null);for(s in c)n(c,s)&&delete c[s]}}},u.push=function(t,e){var r=u.get(t,e);i(r)||u.set(t,e,r=[]),r.push.apply(r,Array.prototype.slice.call(arguments,2))},u.coalesce=function(t,e,r){for(var n,o=0,i=e.length;o<i;o++)if(void 0!==(n=u.get(t,e[o])))return n;return r},u.get=function(t,e,r){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if(null==t)return r;if("string"==typeof e)return u.get(t,e.split("."),r);var n=c(e[0]),o=s(t,n);return void 0===o?r:1===e.length?o:u.get(t[n],e.slice(1),r)},u.del=function(t,e){if("number"==typeof e&&(e=[e]),null==t)return t;if(r(e))return t;if("string"==typeof e)return u.del(t,e.split("."));var o=c(e[0]);return n(t,o)?1!==e.length?u.del(t[o],e.slice(1)):(i(t)?t.splice(o,1):delete t[o],t):t},u}var s=u();return s.create=u,s.withInheritedProps=u({includeInheritedProps:!0}),s}()}(st);var ft=st.exports,pt={exports:{}};const lt=t=>{if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")},yt=new Map;function ht(t,e){if(!Array.isArray(t))switch(typeof t){case"string":t=[t];break;case"undefined":t=[];break;default:throw new TypeError(`Expected '${e}' to be a string or an array, but got a type of '${typeof t}'`)}return t.filter((t=>{if("string"!=typeof t){if(void 0===t)return!1;throw new TypeError(`Expected '${e}' to be an array of strings, but found a type of '${typeof t}' in the array`)}return!0}))}function gt(t,e){e={caseSensitive:!1,...e};const r=t+JSON.stringify(e);if(yt.has(r))return yt.get(r);const n="!"===t[0];n&&(t=t.slice(1)),t=lt(t).replace(/\\\*/g,"[\\s\\S]*");const o=new RegExp(`^${t}$`,e.caseSensitive?"":"i");return o.negated=n,yt.set(r,o),o}pt.exports=(t,e,r)=>{if(t=ht(t,"inputs"),0===(e=ht(e,"patterns")).length)return[];const n="!"===e[0][0];e=e.map((t=>gt(t,r)));const o=[];for(const r of t){let t=n;for(const n of e)n.test(r)&&(t=!n.negated);t&&o.push(r)}return o},pt.exports.isMatch=(t,e,r)=>(t=ht(t,"inputs"),0!==(e=ht(e,"patterns")).length&&t.some((t=>e.every((e=>{const n=gt(e,r),o=n.test(t);return n.negated?!o:o})))));var dt=pt.exports;const bt={ignoreKeys:[],ignorePaths:[],acceptArrays:!1,acceptArraysIgnore:[],enforceStrictKeyset:!0,schema:{},msg:"check-types-mini",optsVarName:"opts"};t.checkTypesMini=function(t,e,r){return function(t,e,r){function o(t){return null!=t}function i(t){return"Object"===n(t)}function a(t,e){return"string"==typeof e&&(e=ut(e)),Array.from(t).filter((t=>!e.some((e=>dt.isMatch(t,e,{caseSensitive:!0})))))}const c=Object.prototype.hasOwnProperty,u=["any","anything","every","everything","all","whatever","whatevs"];if(!o(t))throw new Error("check-types-mini: [THROW_ID_01] First argument is missing!");const f={...bt,...r};if("string"==typeof f.ignoreKeys&&(f.ignoreKeys=[f.ignoreKeys]),"string"==typeof f.ignorePaths&&(f.ignorePaths=[f.ignorePaths]),"string"==typeof f.acceptArraysIgnore&&(f.acceptArraysIgnore=[f.acceptArraysIgnore]),f.msg=`${f.msg}`.trim(),":"===f.msg[f.msg.length-1]&&(f.msg=f.msg.slice(0,f.msg.length-1).trim()),i(f.schema))Object.keys(f.schema).forEach((t=>{if(i(f.schema[t])){const e={};j(f.schema[t],((r,n,o)=>{const a=void 0!==n?n:r;return Array.isArray(a)||i(a)||(e[`${t}.${o.path}`]=a),a})),delete f.schema[t],f.schema={...f.schema,...e}}})),Object.keys(f.schema).forEach((t=>{Array.isArray(f.schema[t])||(f.schema[t]=[f.schema[t]]),f.schema[t]=f.schema[t].map((t=>`${t}`.toLowerCase().trim()))}));else if(null!=f.schema)throw new Error(`check-types-mini: opts.schema was customised to ${JSON.stringify(f.schema,null,0)} which is not object but ${typeof f.schema}`);if(o(e)||(e={}),f.enforceStrictKeyset)if(o(f.schema)&&Object.keys(f.schema).length>0){if(e&&a(s(Object.keys(t),Object.keys(e).concat(Object.keys(f.schema))),f.ignoreKeys).length){const r=s(Object.keys(t),Object.keys(e).concat(Object.keys(f.schema)));throw new TypeError(`${f.msg}: ${f.optsVarName}.enforceStrictKeyset is on and the following key${r.length>1?"s":""} ${r.length>1?"are":"is"} not covered by schema and/or reference objects: ${r.join(", ")}`)}}else{if(!(i(e)&&Object.keys(e).length>0))throw new TypeError(`${f.msg}: Both ${f.optsVarName}.schema and reference objects are missing! We don't have anything to match the keys as you requested via opts.enforceStrictKeyset!`);if(0!==a(s(Object.keys(t),Object.keys(e)),f.ignoreKeys).length){const r=s(Object.keys(t),Object.keys(e));throw new TypeError(`${f.msg}: The input object has key${r.length>1?"s":""} which ${r.length>1?"are":"is"} not covered by the reference object: ${r.join(", ")}`)}if(0!==a(s(Object.keys(e),Object.keys(t)),f.ignoreKeys).length){const r=s(Object.keys(e),Object.keys(t));throw new TypeError(`${f.msg}: The reference object has key${r.length>1?"s":""} which ${r.length>1?"are":"is"} not present in the input object: ${r.join(", ")}`)}}const p=[];j(t,((r,o,a)=>{let s=o,l=r;if("array"===a.parentType&&(l=void 0,s=r),Array.isArray(p)&&p.length&&p.some((t=>a.path.startsWith(t))))return s;if(l&&f.ignoreKeys.some((t=>dt.isMatch(l,t))))return s;if(f.ignorePaths.some((t=>dt.isMatch(a.path,t))))return s;const y=!(!i(s)&&!Array.isArray(s)&&Array.isArray(a.parent));let h=!1;i(f.schema)&&c.call(f.schema,a.path)&&(h=!0);let g=!1;if(i(e)&&ft.has(e,a.path)&&(g=!0),f.enforceStrictKeyset&&y&&!h&&!g)throw new TypeError(`${f.msg}: ${f.optsVarName}.${a.path} is neither covered by reference object (second input argument), nor ${f.optsVarName}.schema! To stop this error, turn off ${f.optsVarName}.enforceStrictKeyset or provide some type reference (2nd argument or ${f.optsVarName}.schema).\n\nDebug info:\n\nobj = ${JSON.stringify(t,null,4)}\n\nref = ${JSON.stringify(e,null,4)}\n\ninnerObj = ${JSON.stringify(a,null,4)}\n\nopts = ${JSON.stringify(f,null,4)}\n\ncurrent = ${JSON.stringify(s,null,4)}\n\n`);if(h){const t=ut(f.schema[a.path]).map((t=>`${t}`.toLowerCase()));if(ft.set(f.schema,a.path,t),ct(t,u).length)p.push(a.path);else if(!0!==s&&!1!==s&&!t.includes(n(s).toLowerCase())||(!0===s||!1===s)&&!t.includes(String(s))&&!t.includes("boolean")){if(!Array.isArray(s)||!f.acceptArrays)throw new TypeError(`${f.msg}: ${f.optsVarName}.${a.path} was customised to ${"string"!==n(s)?'"':""}${JSON.stringify(s,null,0)}${"string"!==n(s)?'"':""} (type: ${n(s).toLowerCase()}) which is not among the allowed types in schema (which is equal to ${JSON.stringify(t,null,0)})`);for(let e=0,r=s.length;e<r;e++)if(!t.includes(n(s[e]).toLowerCase()))throw new TypeError(`${f.msg}: ${f.optsVarName}.${a.path}.${e}, the ${e}th element (equal to ${JSON.stringify(s[e],null,0)}) is of a type ${n(s[e]).toLowerCase()}, but only the following are allowed by the ${f.optsVarName}.schema: ${t.join(", ")}`)}}else if(e&&i(e)&&g){const t=ft.get(e,a.path);if(f.acceptArrays&&Array.isArray(s)&&!f.acceptArraysIgnore.includes(r)){if(!s.every((t=>n(t).toLowerCase()===n(e[r]).toLowerCase())))throw new TypeError(`${f.msg}: ${f.optsVarName}.${a.path} was customised to be array, but not all of its elements are ${n(e[r]).toLowerCase()}-type`)}else if(n(s)!==n(t))throw new TypeError(`${f.msg}: ${f.optsVarName}.${a.path} was customised to ${"string"===n(s).toLowerCase()?"":'"'}${JSON.stringify(s,null,0)}${"string"===n(s).toLowerCase()?"":'"'} which is not ${n(t).toLowerCase()} but ${n(s).toLowerCase()}`)}return s}))}(t,e,r)},Object.defineProperty(t,"__esModule",{value:!0})}));
