/**
 * object-no-new-keys
 * Check, does a plain object (AST/JSON) has any unique keys, not present in a reference object (another AST/JSON)
 * Version: 2.7.14
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/object-no-new-keys
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).objectNoNewKeys=e()}(this,function(){"use strict";var t="[object Object]";var e,r,n=Function.prototype,o=Object.prototype,i=n.toString,a=o.hasOwnProperty,c=i.call(Object),s=o.toString,u=(e=Object.getPrototypeOf,r=Object,function(t){return e(r(t))});var f=function(e){if(!function(t){return!!t&&"object"==typeof t}(e)||s.call(e)!=t||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(e))return!1;var r=u(e);if(null===r)return!0;var n=a.call(r,"constructor")&&r.constructor;return"function"==typeof n&&n instanceof n&&i.call(n)==c},p="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function l(t,e){return t(e={exports:{}},e.exports),e.exports}var y=l(function(t,e){var r,n,o,i,a,c,s,u,f,l,y,h,g,b,d,v,_,m,j,w;t.exports=(r="function"==typeof Promise,n="object"==typeof self?self:p,o="undefined"!=typeof Symbol,i="undefined"!=typeof Map,a="undefined"!=typeof Set,c="undefined"!=typeof WeakMap,s="undefined"!=typeof WeakSet,u="undefined"!=typeof DataView,f=o&&void 0!==Symbol.iterator,l=o&&void 0!==Symbol.toStringTag,y=a&&"function"==typeof Set.prototype.entries,h=i&&"function"==typeof Map.prototype.entries,g=y&&Object.getPrototypeOf((new Set).entries()),b=h&&Object.getPrototypeOf((new Map).entries()),d=f&&"function"==typeof Array.prototype[Symbol.iterator],v=d&&Object.getPrototypeOf([][Symbol.iterator]()),_=f&&"function"==typeof String.prototype[Symbol.iterator],m=_&&Object.getPrototypeOf(""[Symbol.iterator]()),j=8,w=-1,function(t){var e=typeof t;if("object"!==e)return e;if(null===t)return"null";if(t===n)return"global";if(Array.isArray(t)&&(!1===l||!(Symbol.toStringTag in t)))return"Array";if("object"==typeof window&&null!==window){if("object"==typeof window.location&&t===window.location)return"Location";if("object"==typeof window.document&&t===window.document)return"Document";if("object"==typeof window.navigator){if("object"==typeof window.navigator.mimeTypes&&t===window.navigator.mimeTypes)return"MimeTypeArray";if("object"==typeof window.navigator.plugins&&t===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"==typeof window.HTMLElement)&&t instanceof window.HTMLElement){if("BLOCKQUOTE"===t.tagName)return"HTMLQuoteElement";if("TD"===t.tagName)return"HTMLTableDataCellElement";if("TH"===t.tagName)return"HTMLTableHeaderCellElement"}}var o=l&&t[Symbol.toStringTag];if("string"==typeof o)return o;var f=Object.getPrototypeOf(t);return f===RegExp.prototype?"RegExp":f===Date.prototype?"Date":r&&f===Promise.prototype?"Promise":a&&f===Set.prototype?"Set":i&&f===Map.prototype?"Map":s&&f===WeakSet.prototype?"WeakSet":c&&f===WeakMap.prototype?"WeakMap":u&&f===DataView.prototype?"DataView":i&&f===b?"Map Iterator":a&&f===g?"Set Iterator":d&&f===v?"Array Iterator":_&&f===m?"String Iterator":null===f?"Object":Object.prototype.toString.call(t).slice(j,w)})});function h(t,e,r){if(e!=e)return function(t,e,r,n){for(var o=t.length,i=r+(n?1:-1);n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,b,r);for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}function g(t,e,r,n){for(var o=r-1,i=t.length;++o<i;)if(n(t[o],e))return o;return-1}function b(t){return t!=t}var d=Array.prototype.splice;function v(t,e,r,n){var o,i=n?g:h,a=-1,c=e.length,s=t;for(t===e&&(e=function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(e)),r&&(s=function(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}(t,(o=r,function(t){return o(t)})));++a<c;)for(var u=0,f=e[a],p=r?r(f):f;(u=i(s,p,u,n))>-1;)s!==t&&d.call(s,u,1),d.call(t,u,1);return t}var _=function(t,e){return t&&t.length&&e&&e.length?v(t,e):t},m=l(function(t,e){var r=200,n="__lodash_hash_undefined__",o=9007199254740991,i="[object Arguments]",a="[object Boolean]",c="[object Date]",s="[object Function]",u="[object GeneratorFunction]",f="[object Map]",l="[object Number]",y="[object Object]",h="[object RegExp]",g="[object Set]",b="[object String]",d="[object Symbol]",v="[object ArrayBuffer]",_="[object DataView]",m="[object Float32Array]",j="[object Float64Array]",w="[object Int8Array]",O="[object Int16Array]",$="[object Int32Array]",S="[object Uint8Array]",A="[object Uint8ClampedArray]",k="[object Uint16Array]",T="[object Uint32Array]",N=/\w*$/,E=/^\[object .+?Constructor\]$/,P=/^(?:0|[1-9]\d*)$/,I={};I[i]=I["[object Array]"]=I[v]=I[_]=I[a]=I[c]=I[m]=I[j]=I[w]=I[O]=I[$]=I[f]=I[l]=I[y]=I[h]=I[g]=I[b]=I[d]=I[S]=I[A]=I[k]=I[T]=!0,I["[object Error]"]=I[s]=I["[object WeakMap]"]=!1;var M="object"==typeof p&&p&&p.Object===Object&&p,x="object"==typeof self&&self&&self.Object===Object&&self,K=M||x||Function("return this")(),L=e&&!e.nodeType&&e,C=L&&t&&!t.nodeType&&t,D=C&&C.exports===L;function V(t,e){return t.set(e[0],e[1]),t}function W(t,e){return t.add(e),t}function F(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}function H(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function R(t){var e=-1,r=Array(t.size);return t.forEach(function(t,n){r[++e]=[n,t]}),r}function J(t,e){return function(r){return t(e(r))}}function B(t){var e=-1,r=Array(t.size);return t.forEach(function(t){r[++e]=t}),r}var U,q=Array.prototype,z=Function.prototype,G=Object.prototype,Q=K["__core-js_shared__"],X=(U=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+U:"",Y=z.toString,Z=G.hasOwnProperty,tt=G.toString,et=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=D?K.Buffer:void 0,nt=K.Symbol,ot=K.Uint8Array,it=J(Object.getPrototypeOf,Object),at=Object.create,ct=G.propertyIsEnumerable,st=q.splice,ut=Object.getOwnPropertySymbols,ft=rt?rt.isBuffer:void 0,pt=J(Object.keys,Object),lt=Ct(K,"DataView"),yt=Ct(K,"Map"),ht=Ct(K,"Promise"),gt=Ct(K,"Set"),bt=Ct(K,"WeakMap"),dt=Ct(Object,"create"),vt=Ht(lt),_t=Ht(yt),mt=Ht(ht),jt=Ht(gt),wt=Ht(bt),Ot=nt?nt.prototype:void 0,$t=Ot?Ot.valueOf:void 0;function St(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function At(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function kt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Tt(t){this.__data__=new At(t)}function Nt(t,e){var r=Jt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Bt(t)}(t)&&Z.call(t,"callee")&&(!ct.call(t,"callee")||tt.call(t)==i)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var a in t)!e&&!Z.call(t,a)||o&&("length"==a||Wt(a,n))||r.push(a);return r}function Et(t,e,r){var n=t[e];Z.call(t,e)&&Rt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function Pt(t,e){for(var r=t.length;r--;)if(Rt(t[r][0],e))return r;return-1}function It(t,e,r,n,o,p,E){var P;if(n&&(P=p?n(t,o,p,E):n(t)),void 0!==P)return P;if(!zt(t))return t;var M=Jt(t);if(M){if(P=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&Z.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,P)}else{var x=Vt(t),K=x==s||x==u;if(Ut(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(x==y||x==i||K&&!p){if(H(t))return p?t:{};if(P=function(t){return"function"!=typeof t.constructor||Ft(t)?{}:(e=it(t),zt(e)?at(e):{});var e}(K?{}:t),!e)return function(t,e){return Kt(t,Dt(t),e)}(t,function(t,e){return t&&Kt(e,Gt(e),t)}(P,t))}else{if(!I[x])return p?t:{};P=function(t,e,r,n){var o=t.constructor;switch(e){case v:return xt(t);case a:case c:return new o(+t);case _:return function(t,e){var r=e?xt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case m:case j:case w:case O:case $:case S:case A:case k:case T:return function(t,e){var r=e?xt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case f:return function(t,e,r){return F(e?r(R(t),!0):R(t),V,new t.constructor)}(t,n,r);case l:case b:return new o(t);case h:return(u=new(s=t).constructor(s.source,N.exec(s))).lastIndex=s.lastIndex,u;case g:return function(t,e,r){return F(e?r(B(t),!0):B(t),W,new t.constructor)}(t,n,r);case d:return i=t,$t?Object($t.call(i)):{}}var i;var s,u}(t,x,It,e)}}E||(E=new Tt);var L=E.get(t);if(L)return L;if(E.set(t,P),!M)var C=r?function(t){return function(t,e,r){var n=e(t);return Jt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Gt,Dt)}(t):Gt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(C||t,function(o,i){C&&(o=t[i=o]),Et(P,i,It(o,e,r,n,i,t,E))}),P}function Mt(t){return!(!zt(t)||(e=t,X&&X in e))&&(qt(t)||H(t)?et:E).test(Ht(t));var e}function xt(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function Kt(t,e,r,n){r||(r={});for(var o=-1,i=e.length;++o<i;){var a=e[o],c=n?n(r[a],t[a],a,r,t):void 0;Et(r,a,void 0===c?t[a]:c)}return r}function Lt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Ct(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Mt(r)?r:void 0}St.prototype.clear=function(){this.__data__=dt?dt(null):{}},St.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},St.prototype.get=function(t){var e=this.__data__;if(dt){var r=e[t];return r===n?void 0:r}return Z.call(e,t)?e[t]:void 0},St.prototype.has=function(t){var e=this.__data__;return dt?void 0!==e[t]:Z.call(e,t)},St.prototype.set=function(t,e){return this.__data__[t]=dt&&void 0===e?n:e,this},At.prototype.clear=function(){this.__data__=[]},At.prototype.delete=function(t){var e=this.__data__,r=Pt(e,t);return!(r<0||(r==e.length-1?e.pop():st.call(e,r,1),0))},At.prototype.get=function(t){var e=this.__data__,r=Pt(e,t);return r<0?void 0:e[r][1]},At.prototype.has=function(t){return Pt(this.__data__,t)>-1},At.prototype.set=function(t,e){var r=this.__data__,n=Pt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},kt.prototype.clear=function(){this.__data__={hash:new St,map:new(yt||At),string:new St}},kt.prototype.delete=function(t){return Lt(this,t).delete(t)},kt.prototype.get=function(t){return Lt(this,t).get(t)},kt.prototype.has=function(t){return Lt(this,t).has(t)},kt.prototype.set=function(t,e){return Lt(this,t).set(t,e),this},Tt.prototype.clear=function(){this.__data__=new At},Tt.prototype.delete=function(t){return this.__data__.delete(t)},Tt.prototype.get=function(t){return this.__data__.get(t)},Tt.prototype.has=function(t){return this.__data__.has(t)},Tt.prototype.set=function(t,e){var n=this.__data__;if(n instanceof At){var o=n.__data__;if(!yt||o.length<r-1)return o.push([t,e]),this;n=this.__data__=new kt(o)}return n.set(t,e),this};var Dt=ut?J(ut,Object):function(){return[]},Vt=function(t){return tt.call(t)};function Wt(t,e){return!!(e=null==e?o:e)&&("number"==typeof t||P.test(t))&&t>-1&&t%1==0&&t<e}function Ft(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||G)}function Ht(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Rt(t,e){return t===e||t!=t&&e!=e}(lt&&Vt(new lt(new ArrayBuffer(1)))!=_||yt&&Vt(new yt)!=f||ht&&"[object Promise]"!=Vt(ht.resolve())||gt&&Vt(new gt)!=g||bt&&"[object WeakMap]"!=Vt(new bt))&&(Vt=function(t){var e=tt.call(t),r=e==y?t.constructor:void 0,n=r?Ht(r):void 0;if(n)switch(n){case vt:return _;case _t:return f;case mt:return"[object Promise]";case jt:return g;case wt:return"[object WeakMap]"}return e});var Jt=Array.isArray;function Bt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=o}(t.length)&&!qt(t)}var Ut=ft||function(){return!1};function qt(t){var e=zt(t)?tt.call(t):"";return e==s||e==u}function zt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Gt(t){return Bt(t)?Nt(t):function(t){if(!Ft(t))return pt(t);var e=[];for(var r in Object(t))Z.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return It(t,!0,!0)}});const j=Array.isArray;function w(t){return"string"==typeof t&&t.length>0&&"."===t[0]?t.slice(1):t}function O(t,e){return function t(e,r,n){const o=m(e);let i,a,c,s,u;if((n=Object.assign({depth:-1,path:""},n)).depth+=1,j(o))for(i=0,a=o.length;i<a;i++){const e=`${n.path}.${i}`;void 0!==o[i]?(n.parent=m(o),n.parentType="array",c=t(r(o[i],void 0,Object.assign({},n,{path:w(e)})),r,Object.assign({},n,{path:w(e)})),Number.isNaN(c)&&i<o.length?(o.splice(i,1),i-=1):o[i]=c):o.splice(i,1)}else if(f(o))for(i=0,a=(s=Object.keys(o)).length;i<a;i++){u=s[i];const e=`${n.path}.${u}`;0===n.depth&&null!=u&&(n.topmostKey=u),n.parent=m(o),n.parentType="object",c=t(r(u,o[u],Object.assign({},n,{path:w(e)})),r,Object.assign({},n,{path:w(e)})),Number.isNaN(c)?delete o[u]:o[u]=c}return o}(t,e,{})}var $="__lodash_hash_undefined__",S=9007199254740991,A="[object Function]",k="[object GeneratorFunction]",T=/^\[object .+?Constructor\]$/,N="object"==typeof p&&p&&p.Object===Object&&p,E="object"==typeof self&&self&&self.Object===Object&&self,P=N||E||Function("return this")();function I(t,e){return!!(t?t.length:0)&&function(t,e,r){if(e!=e)return function(t,e,r,n){var o=t.length,i=r+(n?1:-1);for(;n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,K,r);var n=r-1,o=t.length;for(;++n<o;)if(t[n]===e)return n;return-1}(t,e,0)>-1}function M(t,e,r){for(var n=-1,o=t?t.length:0;++n<o;)if(r(e,t[n]))return!0;return!1}function x(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}function K(t){return t!=t}function L(t){return function(e){return t(e)}}function C(t,e){return t.has(e)}var D,V=Array.prototype,W=Function.prototype,F=Object.prototype,H=P["__core-js_shared__"],R=(D=/[^.]+$/.exec(H&&H.keys&&H.keys.IE_PROTO||""))?"Symbol(src)_1."+D:"",J=W.toString,B=F.hasOwnProperty,U=F.toString,q=RegExp("^"+J.call(B).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),z=V.splice,G=Math.max,Q=Math.min,X=ct(P,"Map"),Y=ct(Object,"create");function Z(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function tt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function et(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function rt(t){var e=-1,r=t?t.length:0;for(this.__data__=new et;++e<r;)this.add(t[e])}function nt(t,e){for(var r,n,o=t.length;o--;)if((r=t[o][0])===(n=e)||r!=r&&n!=n)return o;return-1}function ot(t){return!(!ut(t)||(e=t,R&&R in e))&&(st(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?q:T).test(function(t){if(null!=t){try{return J.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var e}function it(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&function(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=S}(t.length)&&!st(t)}(t)}(t)?t:[]}function at(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function ct(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return ot(r)?r:void 0}function st(t){var e=ut(t)?U.call(t):"";return e==A||e==k}function ut(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}Z.prototype.clear=function(){this.__data__=Y?Y(null):{}},Z.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},Z.prototype.get=function(t){var e=this.__data__;if(Y){var r=e[t];return r===$?void 0:r}return B.call(e,t)?e[t]:void 0},Z.prototype.has=function(t){var e=this.__data__;return Y?void 0!==e[t]:B.call(e,t)},Z.prototype.set=function(t,e){return this.__data__[t]=Y&&void 0===e?$:e,this},tt.prototype.clear=function(){this.__data__=[]},tt.prototype.delete=function(t){var e=this.__data__,r=nt(e,t);return!(r<0||(r==e.length-1?e.pop():z.call(e,r,1),0))},tt.prototype.get=function(t){var e=this.__data__,r=nt(e,t);return r<0?void 0:e[r][1]},tt.prototype.has=function(t){return nt(this.__data__,t)>-1},tt.prototype.set=function(t,e){var r=this.__data__,n=nt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},et.prototype.clear=function(){this.__data__={hash:new Z,map:new(X||tt),string:new Z}},et.prototype.delete=function(t){return at(this,t).delete(t)},et.prototype.get=function(t){return at(this,t).get(t)},et.prototype.has=function(t){return at(this,t).has(t)},et.prototype.set=function(t,e){return at(this,t).set(t,e),this},rt.prototype.add=rt.prototype.push=function(t){return this.__data__.set(t,$),this},rt.prototype.has=function(t){return this.__data__.has(t)};var ft=function(t,e){return e=G(void 0===e?t.length-1:e,0),function(){for(var r=arguments,n=-1,o=G(r.length-e,0),i=Array(o);++n<o;)i[n]=r[e+n];n=-1;for(var a=Array(e+1);++n<e;)a[n]=r[n];return a[e]=i,function(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}(t,this,a)}}(function(t){var e=x(t,it);return e.length&&e[0]===t[0]?function(t,e,r){for(var n=r?M:I,o=t[0].length,i=t.length,a=i,c=Array(i),s=1/0,u=[];a--;){var f=t[a];a&&e&&(f=x(f,L(e))),s=Q(f.length,s),c[a]=!r&&(e||o>=120&&f.length>=120)?new rt(a&&f):void 0}f=t[0];var p=-1,l=c[0];t:for(;++p<o&&u.length<s;){var y=f[p],h=e?e(y):y;if(y=r||0!==y?y:0,!(l?C(l,h):n(u,h,r))){for(a=i;--a;){var g=c[a];if(!(g?C(g,h):n(t[a],h,r)))continue t}l&&l.push(h),u.push(y)}}return u}(e):[]});function pt(t){return"string"==typeof t?t.length>0?[t]:[]:t}var lt=l(function(t){t.exports=function(){var t=Object.prototype.toString;function e(t,e){return null!=t&&Object.prototype.hasOwnProperty.call(t,e)}function r(t){if(!t)return!0;if(o(t)&&0===t.length)return!0;if("string"!=typeof t){for(var r in t)if(e(t,r))return!1;return!0}return!1}function n(e){return t.call(e)}var o=Array.isArray||function(e){return"[object Array]"===t.call(e)};function i(t){var e=parseInt(t);return e.toString()===t?e:t}function a(t){t=t||{};var a=function(t){return Object.keys(a).reduce(function(e,r){return"create"===r?e:("function"==typeof a[r]&&(e[r]=a[r].bind(a,t)),e)},{})};function c(r,n){return t.includeInheritedProps||"number"==typeof n&&Array.isArray(r)||e(r,n)}function s(t,e){if(c(t,e))return t[e]}function u(t,e,r,n){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if("string"==typeof e)return u(t,e.split(".").map(i),r,n);var o=e[0],a=s(t,o);return 1===e.length?(void 0!==a&&n||(t[o]=r),a):(void 0===a&&("number"==typeof e[1]?t[o]=[]:t[o]={}),u(t[o],e.slice(1),r,n))}return a.has=function(r,n){if("number"==typeof n?n=[n]:"string"==typeof n&&(n=n.split(".")),!n||0===n.length)return!!r;for(var a=0;a<n.length;a++){var c=i(n[a]);if(!("number"==typeof c&&o(r)&&c<r.length||(t.includeInheritedProps?c in Object(r):e(r,c))))return!1;r=r[c]}return!0},a.ensureExists=function(t,e,r){return u(t,e,r,!0)},a.set=function(t,e,r,n){return u(t,e,r,n)},a.insert=function(t,e,r,n){var i=a.get(t,e);n=~~n,o(i)||(i=[],a.set(t,e,i)),i.splice(n,0,r)},a.empty=function(t,e){var i,s;if(!r(e)&&null!=t&&(i=a.get(t,e))){if("string"==typeof i)return a.set(t,e,"");if(function(t){return"boolean"==typeof t||"[object Boolean]"===n(t)}(i))return a.set(t,e,!1);if("number"==typeof i)return a.set(t,e,0);if(o(i))i.length=0;else{if(!function(t){return"object"==typeof t&&"[object Object]"===n(t)}(i))return a.set(t,e,null);for(s in i)c(i,s)&&delete i[s]}}},a.push=function(t,e){var r=a.get(t,e);o(r)||(r=[],a.set(t,e,r)),r.push.apply(r,Array.prototype.slice.call(arguments,2))},a.coalesce=function(t,e,r){for(var n,o=0,i=e.length;o<i;o++)if(void 0!==(n=a.get(t,e[o])))return n;return r},a.get=function(t,e,r){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if(null==t)return r;if("string"==typeof e)return a.get(t,e.split("."),r);var n=i(e[0]),o=s(t,n);return void 0===o?r:1===e.length?o:a.get(t[n],e.slice(1),r)},a.del=function(t,e){if("number"==typeof e&&(e=[e]),null==t)return t;if(r(e))return t;if("string"==typeof e)return a.del(t,e.split("."));var n=i(e[0]);return c(t,n)?1!==e.length?a.del(t[n],e.slice(1)):(o(t)?t.splice(n,1):delete t[n],t):t},a}var c=a();return c.create=a,c.withInheritedProps=a({includeInheritedProps:!0}),c}()}),yt=function(t){var e=t%100;if(e>=10&&e<=20)return"th";var r=t%10;return 1===r?"st":2===r?"nd":3===r?"rd":"th"};function ht(t){if("number"!=typeof t)throw new TypeError("Expected Number, got "+typeof t+" "+t);return t+yt(t)}ht.indicator=yt;var gt=ht,bt=/[|\\{}()[\]^$+*?.]/g,dt=function(t){if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(bt,"\\$&")};const vt=new Map;function _t(t,e){const r=Object.assign({caseSensitive:!1},e),n=t+JSON.stringify(r);if(vt.has(n))return vt.get(n);const o="!"===t[0];o&&(t=t.slice(1)),t=dt(t).replace(/\\\*/g,".*");const i=new RegExp(`^${t}$`,r.caseSensitive?"":"i");return i.negated=o,vt.set(n,i),i}var mt=(t,e,r)=>{if(!Array.isArray(t)||!Array.isArray(e))throw new TypeError(`Expected two arrays, got ${typeof t} ${typeof e}`);if(0===e.length)return t;const n="!"===e[0][0];e=e.map(t=>_t(t,r));const o=[];for(const r of t){let t=n;for(const n of e)n.test(r)&&(t=!n.negated);t&&o.push(r)}return o};function jt(t,e,r){return function t(e,r,n,o=!0){const i=Object.prototype.hasOwnProperty;function a(t){return null!=t}function c(t){return"Object"===y(t)}function s(t,e){return e=pt(e),Array.from(t).filter(t=>!e.some(e=>mt.isMatch(t,e,{caseSensitive:!0})))}const u=["any","anything","every","everything","all","whatever","whatevs"],f=Array.isArray;if(!a(e))throw new Error("check-types-mini: [THROW_ID_01] First argument is missing!");const p={ignoreKeys:[],ignorePaths:[],acceptArrays:!1,acceptArraysIgnore:[],enforceStrictKeyset:!0,schema:{},msg:"check-types-mini",optsVarName:"opts"};let l;if(l=a(n)&&c(n)?Object.assign({},p,n):Object.assign({},p),a(l.ignoreKeys)&&l.ignoreKeys?l.ignoreKeys=pt(l.ignoreKeys):l.ignoreKeys=[],a(l.ignorePaths)&&l.ignorePaths?l.ignorePaths=pt(l.ignorePaths):l.ignorePaths=[],a(l.acceptArraysIgnore)&&l.acceptArraysIgnore?l.acceptArraysIgnore=pt(l.acceptArraysIgnore):l.acceptArraysIgnore=[],l.msg="string"==typeof l.msg?l.msg.trim():l.msg,":"===l.msg[l.msg.length-1]&&(l.msg=l.msg.slice(0,l.msg.length-1).trim()),l.schema&&(Object.keys(l.schema).forEach(t=>{if(c(l.schema[t])){const e={};O(l.schema[t],(r,n,o)=>{const i=void 0!==n?n:r;return f(i)||c(i)||(e[`${t}.${o.path}`]=i),i}),delete l.schema[t],l.schema=Object.assign(l.schema,e)}}),Object.keys(l.schema).forEach(t=>{f(l.schema[t])||(l.schema[t]=[l.schema[t]]),l.schema[t]=l.schema[t].map(String).map(t=>t.toLowerCase()).map(t=>t.trim())})),a(r)||(r={}),o&&t(l,p,{enforceStrictKeyset:!1},!1),l.enforceStrictKeyset)if(a(l.schema)&&Object.keys(l.schema).length>0){if(0!==s(_(Object.keys(e),Object.keys(r).concat(Object.keys(l.schema))),l.ignoreKeys).length){const t=_(Object.keys(e),Object.keys(r).concat(Object.keys(l.schema)));throw new TypeError(`${l.msg}: ${l.optsVarName}.enforceStrictKeyset is on and the following key${t.length>1?"s":""} ${t.length>1?"are":"is"} not covered by schema and/or reference objects: ${t.join(", ")}`)}}else{if(!(a(r)&&Object.keys(r).length>0))throw new TypeError(`${l.msg}: Both ${l.optsVarName}.schema and reference objects are missing! We don't have anything to match the keys as you requested via opts.enforceStrictKeyset!`);if(0!==s(_(Object.keys(e),Object.keys(r)),l.ignoreKeys).length){const t=_(Object.keys(e),Object.keys(r));throw new TypeError(`${l.msg}: The input object has key${t.length>1?"s":""} which ${t.length>1?"are":"is"} not covered by the reference object: ${t.join(", ")}`)}if(0!==s(_(Object.keys(r),Object.keys(e)),l.ignoreKeys).length){const t=_(Object.keys(r),Object.keys(e));throw new TypeError(`${l.msg}: The reference object has key${t.length>1?"s":""} which ${t.length>1?"are":"is"} not present in the input object: ${t.join(", ")}`)}}const h=[];O(e,(t,n,o)=>{let a=n,s=t;if("array"===o.parentType&&(s=void 0,a=t),f(h)&&h.length&&h.some(t=>o.path.startsWith(t)))return a;if(s&&l.ignoreKeys.some(t=>mt.isMatch(s,t)))return a;if(l.ignorePaths.some(t=>mt.isMatch(o.path,t)))return a;const p=!(!c(a)&&!f(a)&&f(o.parent));let g=!1;c(l.schema)&&i.call(l.schema,lt.get(o.path))&&(g=!0);let b=!1;if(c(r)&&lt.has(r,lt.get(o.path))&&(b=!0),l.enforceStrictKeyset&&p&&!g&&!b)throw new TypeError(`${l.msg}: ${l.optsVarName}.${o.path} is neither covered by reference object (second input argument), nor ${l.optsVarName}.schema! To stop this error, turn off ${l.optsVarName}.enforceStrictKeyset or provide some type reference (2nd argument or ${l.optsVarName}.schema).\n\nDebug info:\n\nobj = ${JSON.stringify(e,null,4)}\n\nref = ${JSON.stringify(r,null,4)}\n\ninnerObj = ${JSON.stringify(o,null,4)}\n\nopts = ${JSON.stringify(l,null,4)}\n\ncurrent = ${JSON.stringify(a,null,4)}\n\n`);if(g){const t=pt(l.schema[o.path]).map(String).map(t=>t.toLowerCase());if(lt.set(l.schema,o.path,t),ft(t,u).length)h.push(o.path);else if(!0!==a&&!1!==a&&!t.includes(y(a).toLowerCase())||(!0===a||!1===a)&&!t.includes(String(a))&&!t.includes("boolean")){if(!f(a)||!l.acceptArrays)throw new TypeError(`${l.msg}: ${l.optsVarName}.${o.path} was customised to ${"string"!==y(a)?'"':""}${JSON.stringify(a,null,0)}${"string"!==y(a)?'"':""} (type: ${y(a).toLowerCase()}) which is not among the allowed types in schema (which is equal to ${JSON.stringify(t,null,0)})`);for(let e=0,r=a.length;e<r;e++)if(!t.includes(y(a[e]).toLowerCase()))throw new TypeError(`${l.msg}: ${l.optsVarName}.${o.path}.${e}, the ${gt(e+1)} element (equal to ${JSON.stringify(a[e],null,0)}) is of a type ${y(a[e]).toLowerCase()}, but only the following are allowed by the ${l.optsVarName}.schema: ${t.join(", ")}`)}}else if(b){const e=lt.get(r,o.path);if(l.acceptArrays&&f(a)&&!l.acceptArraysIgnore.includes(t)){if(!a.every(e=>y(e).toLowerCase()===y(r[t]).toLowerCase()))throw new TypeError(`${l.msg}: ${l.optsVarName}.${o.path} was customised to be array, but not all of its elements are ${y(r[t]).toLowerCase()}-type`)}else if(y(a)!==y(e))throw new TypeError(`${l.msg}: ${l.optsVarName}.${o.path} was customised to ${"string"===y(a).toLowerCase()?"":'"'}${JSON.stringify(a,null,0)}${"string"===y(a).toLowerCase()?"":'"'} which is not ${y(e).toLowerCase()} but ${y(a).toLowerCase()}`)}return a})}(t,e,r)}return mt.isMatch=((t,e,r)=>{const n=_t(e,r),o=n.test(t);return n.negated?!o:o}),function(t,e,r){var n=Array.isArray,o={mode:2};if(Number.isFinite(r))throw Number.isInteger(r)?new TypeError('object-no-new-keys/objectNoNewKeys(): [THROW_ID_02] Please pass a plain object with a key "mode" set to 1 or 2, not the number '.concat(r," directly! Computer doesn't like that.")):new TypeError("object-no-new-keys/objectNoNewKeys(): [THROW_ID_03] The third argument, options object, is not only not an object, it's not even an integer! It's currently: ".concat(r," and computer doesn't like it very much."));var i=Object.assign({},o,r);if("string"==typeof i.mode&&(i.mode=parseInt(i.mode,10)),1!==i.mode&&2!==i.mode)throw new TypeError('object-no-new-keys/objectNoNewKeys(): [THROW_ID_01] opts.mode was customised to be a wrong thing, "'.concat(i.mode,'" while it should be either natural number 1 or 2.'));return jt(i,o,{msg:"object-no-new-keys/objectNoNewKeys(): [THROW_ID_04*]"}),function t(e,r,o,i){var a;if(void 0===i&&(i={path:"",res:[]}),f(e))f(r)?Object.keys(e).forEach(function(c){Object.prototype.hasOwnProperty.call(r,c)?(f(e[c])||n(e[c]))&&(a={path:i.path.length>0?"".concat(i.path,".").concat(c):c,res:i.res},i.res=t(e[c],r[c],o,a).res):(a=i.path.length>0?"".concat(i.path,".").concat(c):c,i.res.push(a))}):i.res=i.res.concat(Object.keys(e).map(function(t){return i.path.length>0?"".concat(i.path,".").concat(t):t}));else if(n(e))if(n(r))for(var c=0,s=e.length;c<s;c++)a={path:"".concat(i.path.length>0?i.path:"","[").concat(c,"]"),res:i.res},2===o.mode?i.res=t(e[c],r[0],o,a).res:i.res=t(e[c],r[c],o,a).res;else i.res=i.res.concat(e.map(function(t,e){return"".concat(i.path.length>0?i.path:"","[").concat(e,"]")}));return i}(t,e,i).res}});
