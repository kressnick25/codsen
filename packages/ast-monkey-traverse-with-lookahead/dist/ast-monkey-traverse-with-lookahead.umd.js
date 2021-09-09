/**
 * @name ast-monkey-traverse-with-lookahead
 * @fileoverview Utility library to traverse AST, reports upcoming values
 * @version 3.0.0
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ast-monkey-traverse-with-lookahead/}
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).astMonkeyTraverseWithLookahead={})}(this,(function(t){"use strict";var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},r={exports:{}};!function(t,r){var n="__lodash_hash_undefined__",o=9007199254740991,c="[object Arguments]",u="[object Boolean]",a="[object Date]",i="[object Function]",f="[object GeneratorFunction]",s="[object Map]",l="[object Number]",p="[object Object]",h="[object Promise]",y="[object RegExp]",_="[object Set]",v="[object String]",d="[object Symbol]",b="[object WeakMap]",g="[object ArrayBuffer]",j="[object DataView]",w="[object Float32Array]",O="[object Float64Array]",A="[object Int8Array]",m="[object Int16Array]",x="[object Int32Array]",S="[object Uint8Array]",$="[object Uint8ClampedArray]",P="[object Uint16Array]",T="[object Uint32Array]",k=/\w*$/,E=/^\[object .+?Constructor\]$/,F=/^(?:0|[1-9]\d*)$/,I={};I[c]=I["[object Array]"]=I[g]=I[j]=I[u]=I[a]=I[w]=I[O]=I[A]=I[m]=I[x]=I[s]=I[l]=I[p]=I[y]=I[_]=I[v]=I[d]=I[S]=I[$]=I[P]=I[T]=!0,I["[object Error]"]=I[i]=I[b]=!1;var M="object"==typeof self&&self&&self.Object===Object&&self,B="object"==typeof e&&e&&e.Object===Object&&e||M||Function("return this")(),U=r&&!r.nodeType&&r,D=U&&t&&!t.nodeType&&t,L=D&&D.exports===U;function R(t,e){return t.set(e[0],e[1]),t}function W(t,e){return t.add(e),t}function z(t,e,r,n){var o=-1,c=t?t.length:0;for(n&&c&&(r=t[++o]);++o<c;)r=e(r,t[o],o,t);return r}function C(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function V(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function G(t,e){return function(r){return t(e(r))}}function K(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var N,q=Array.prototype,H=Function.prototype,J=Object.prototype,Q=B["__core-js_shared__"],X=(N=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+N:"",Y=H.toString,Z=J.hasOwnProperty,tt=J.toString,et=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=L?B.Buffer:void 0,nt=B.Symbol,ot=B.Uint8Array,ct=G(Object.getPrototypeOf,Object),ut=Object.create,at=J.propertyIsEnumerable,it=q.splice,ft=Object.getOwnPropertySymbols,st=rt?rt.isBuffer:void 0,lt=G(Object.keys,Object),pt=Dt(B,"DataView"),ht=Dt(B,"Map"),yt=Dt(B,"Promise"),_t=Dt(B,"Set"),vt=Dt(B,"WeakMap"),dt=Dt(Object,"create"),bt=Ct(pt),gt=Ct(ht),jt=Ct(yt),wt=Ct(_t),Ot=Ct(vt),At=nt?nt.prototype:void 0,mt=At?At.valueOf:void 0;function xt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function St(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function $t(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Pt(t){this.__data__=new St(t)}function Tt(t,e){var r=Gt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Kt(t)}(t)&&Z.call(t,"callee")&&(!at.call(t,"callee")||tt.call(t)==c)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var u in t)!e&&!Z.call(t,u)||o&&("length"==u||Wt(u,n))||r.push(u);return r}function kt(t,e,r){var n=t[e];Z.call(t,e)&&Vt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function Et(t,e){for(var r=t.length;r--;)if(Vt(t[r][0],e))return r;return-1}function Ft(t,e,r,n,o,h,b){var E;if(n&&(E=h?n(t,o,h,b):n(t)),void 0!==E)return E;if(!Ht(t))return t;var F=Gt(t);if(F){if(E=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&Z.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,E)}else{var M=Rt(t),B=M==i||M==f;if(Nt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(M==p||M==c||B&&!h){if(C(t))return h?t:{};if(E=function(t){return"function"!=typeof t.constructor||zt(t)?{}:(e=ct(t),Ht(e)?ut(e):{});var e}(B?{}:t),!e)return function(t,e){return Bt(t,Lt(t),e)}(t,function(t,e){return t&&Bt(e,Jt(e),t)}(E,t))}else{if(!I[M])return h?t:{};E=function(t,e,r,n){var o=t.constructor;switch(e){case g:return Mt(t);case u:case a:return new o(+t);case j:return function(t,e){var r=e?Mt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case w:case O:case A:case m:case x:case S:case $:case P:case T:return function(t,e){var r=e?Mt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case s:return function(t,e,r){return z(e?r(V(t),!0):V(t),R,new t.constructor)}(t,n,r);case l:case v:return new o(t);case y:return function(t){var e=new t.constructor(t.source,k.exec(t));return e.lastIndex=t.lastIndex,e}(t);case _:return function(t,e,r){return z(e?r(K(t),!0):K(t),W,new t.constructor)}(t,n,r);case d:return c=t,mt?Object(mt.call(c)):{}}var c}(t,M,Ft,e)}}b||(b=new Pt);var U=b.get(t);if(U)return U;if(b.set(t,E),!F)var D=r?function(t){return function(t,e,r){var n=e(t);return Gt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Jt,Lt)}(t):Jt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(D||t,(function(o,c){D&&(o=t[c=o]),kt(E,c,Ft(o,e,r,n,c,t,b))})),E}function It(t){return!(!Ht(t)||(e=t,X&&X in e))&&(qt(t)||C(t)?et:E).test(Ct(t));var e}function Mt(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function Bt(t,e,r,n){r||(r={});for(var o=-1,c=e.length;++o<c;){var u=e[o],a=n?n(r[u],t[u],u,r,t):void 0;kt(r,u,void 0===a?t[u]:a)}return r}function Ut(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Dt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return It(r)?r:void 0}xt.prototype.clear=function(){this.__data__=dt?dt(null):{}},xt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},xt.prototype.get=function(t){var e=this.__data__;if(dt){var r=e[t];return r===n?void 0:r}return Z.call(e,t)?e[t]:void 0},xt.prototype.has=function(t){var e=this.__data__;return dt?void 0!==e[t]:Z.call(e,t)},xt.prototype.set=function(t,e){return this.__data__[t]=dt&&void 0===e?n:e,this},St.prototype.clear=function(){this.__data__=[]},St.prototype.delete=function(t){var e=this.__data__,r=Et(e,t);return!(r<0)&&(r==e.length-1?e.pop():it.call(e,r,1),!0)},St.prototype.get=function(t){var e=this.__data__,r=Et(e,t);return r<0?void 0:e[r][1]},St.prototype.has=function(t){return Et(this.__data__,t)>-1},St.prototype.set=function(t,e){var r=this.__data__,n=Et(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},$t.prototype.clear=function(){this.__data__={hash:new xt,map:new(ht||St),string:new xt}},$t.prototype.delete=function(t){return Ut(this,t).delete(t)},$t.prototype.get=function(t){return Ut(this,t).get(t)},$t.prototype.has=function(t){return Ut(this,t).has(t)},$t.prototype.set=function(t,e){return Ut(this,t).set(t,e),this},Pt.prototype.clear=function(){this.__data__=new St},Pt.prototype.delete=function(t){return this.__data__.delete(t)},Pt.prototype.get=function(t){return this.__data__.get(t)},Pt.prototype.has=function(t){return this.__data__.has(t)},Pt.prototype.set=function(t,e){var r=this.__data__;if(r instanceof St){var n=r.__data__;if(!ht||n.length<199)return n.push([t,e]),this;r=this.__data__=new $t(n)}return r.set(t,e),this};var Lt=ft?G(ft,Object):function(){return[]},Rt=function(t){return tt.call(t)};function Wt(t,e){return!!(e=null==e?o:e)&&("number"==typeof t||F.test(t))&&t>-1&&t%1==0&&t<e}function zt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||J)}function Ct(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Vt(t,e){return t===e||t!=t&&e!=e}(pt&&Rt(new pt(new ArrayBuffer(1)))!=j||ht&&Rt(new ht)!=s||yt&&Rt(yt.resolve())!=h||_t&&Rt(new _t)!=_||vt&&Rt(new vt)!=b)&&(Rt=function(t){var e=tt.call(t),r=e==p?t.constructor:void 0,n=r?Ct(r):void 0;if(n)switch(n){case bt:return j;case gt:return s;case jt:return h;case wt:return _;case Ot:return b}return e});var Gt=Array.isArray;function Kt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=o}(t.length)&&!qt(t)}var Nt=st||function(){return!1};function qt(t){var e=Ht(t)?tt.call(t):"";return e==i||e==f}function Ht(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Jt(t){return Kt(t)?Tt(t):function(t){if(!zt(t))return lt(t);var e=[];for(var r in Object(t))Z.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return Ft(t,!0,!0)}}(r,r.exports);var n=r.exports;var o,c,u=Object.prototype,a=Function.prototype.toString,i=u.hasOwnProperty,f=a.call(Object),s=u.toString,l=(o=Object.getPrototypeOf,c=Object,function(t){return o(c(t))});var p=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||"[object Object]"!=s.call(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=l(t);if(null===e)return!0;var r=i.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&a.call(r)==f};t.traverse=function(t,e,r=0){function o(t){return"string"==typeof t&&"."===t[0]?t.slice(1):t}const c=[];function u(){const t=c.shift();t[2].next=[];for(let e=0;e<r&&c[e];e++)t[2].next.push(n([c[e][0],c[e][1],c[e][2]]));e(...t)}if(function t(e,r,c,u){if((c={...c}).depth+=1,Array.isArray(e))for(let a=0,i=e.length;a<i&&!u.now;a++){const i=`${c.path}.${a}`;c.parent=n(e),c.parentType="array",r(e[a],void 0,{...c,path:o(i)},u),t(e[a],r,{...c,path:o(i)},u)}else if(p(e))for(const a in e){if(u.now&&null!=a)break;const i=`${c.path}.${a}`;0===c.depth&&null!=a&&(c.topmostKey=a),c.parent=n(e),c.parentType="object",r(a,e[a],{...c,path:o(i)},u),t(e[a],r,{...c,path:o(i)},u)}return e}(t,(function(...t){c.push([...t]),c.length>r&&u()}),{depth:-1,path:""},{now:!1}),c.length)for(let t=0,e=c.length;t<e;t++)u()},t.version="3.0.0",Object.defineProperty(t,"__esModule",{value:!0})}));
