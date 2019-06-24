/**
 * js-row-num
 * Update all row numbers in all console.logs in JS code
 * Version: 2.3.2
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/js-row-num
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).jsRowNum=e()}(this,function(){"use strict";var t=function(t,e){if(e){if("object"!=typeof e)throw new TypeError(String(e)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in e){if("boolean"!=typeof e.includeZero)throw new TypeError(String(e.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(e.includeZero&&0===t)return!0}}return Number.isSafeInteger(t)&&t>=1},e=function(t,e){if("string"!=typeof t)return!1;if(e&&"includeZero"in e){if("boolean"!=typeof e.includeZero)throw new TypeError(String(e.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(e.includeZero)return/^(-?0|[1-9]\d*)(\.0+)?$/.test(t)}return/^[1-9]\d*(\.0+)?$/.test(t)},r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(t,e){return t(e={exports:{}},e.exports),e.exports}var o=n(function(t,e){(e=t.exports=function(t){return t+e.suffix(+t)}).suffix=function(t){return t%=100,1===Math.floor(t/10)?"th":t%10==1?"st":t%10==2?"nd":t%10==3?"rd":"th"}}),i=(o.suffix,n(function(t,e){var n,o,i,a,s,u,c,l,f,p,h,y,g,d,m,b,v,_,w,j;t.exports=(n="function"==typeof Promise,o="object"==typeof self?self:r,i="undefined"!=typeof Symbol,a="undefined"!=typeof Map,s="undefined"!=typeof Set,u="undefined"!=typeof WeakMap,c="undefined"!=typeof WeakSet,l="undefined"!=typeof DataView,f=i&&void 0!==Symbol.iterator,p=i&&void 0!==Symbol.toStringTag,h=s&&"function"==typeof Set.prototype.entries,y=a&&"function"==typeof Map.prototype.entries,g=h&&Object.getPrototypeOf((new Set).entries()),d=y&&Object.getPrototypeOf((new Map).entries()),m=f&&"function"==typeof Array.prototype[Symbol.iterator],b=m&&Object.getPrototypeOf([][Symbol.iterator]()),v=f&&"function"==typeof String.prototype[Symbol.iterator],_=v&&Object.getPrototypeOf(""[Symbol.iterator]()),w=8,j=-1,function(t){var e=typeof t;if("object"!==e)return e;if(null===t)return"null";if(t===o)return"global";if(Array.isArray(t)&&(!1===p||!(Symbol.toStringTag in t)))return"Array";if("object"==typeof window&&null!==window){if("object"==typeof window.location&&t===window.location)return"Location";if("object"==typeof window.document&&t===window.document)return"Document";if("object"==typeof window.navigator){if("object"==typeof window.navigator.mimeTypes&&t===window.navigator.mimeTypes)return"MimeTypeArray";if("object"==typeof window.navigator.plugins&&t===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"==typeof window.HTMLElement)&&t instanceof window.HTMLElement){if("BLOCKQUOTE"===t.tagName)return"HTMLQuoteElement";if("TD"===t.tagName)return"HTMLTableDataCellElement";if("TH"===t.tagName)return"HTMLTableHeaderCellElement"}}var r=p&&t[Symbol.toStringTag];if("string"==typeof r)return r;var i=Object.getPrototypeOf(t);return i===RegExp.prototype?"RegExp":i===Date.prototype?"Date":n&&i===Promise.prototype?"Promise":s&&i===Set.prototype?"Set":a&&i===Map.prototype?"Map":c&&i===WeakSet.prototype?"WeakSet":u&&i===WeakMap.prototype?"WeakMap":l&&i===DataView.prototype?"DataView":a&&i===d?"Map Iterator":s&&i===g?"Set Iterator":m&&i===b?"Array Iterator":v&&i===_?"String Iterator":null===i?"Object":Object.prototype.toString.call(t).slice(w,j)})}));function a(t,e,r){if(e!=e)return function(t,e,r,n){for(var o=t.length,i=r+(n?1:-1);n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,u,r);for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}function s(t,e,r,n){for(var o=r-1,i=t.length;++o<i;)if(n(t[o],e))return o;return-1}function u(t){return t!=t}var c=Array.prototype.splice;function l(t,e,r,n){var o,i=n?s:a,u=-1,l=e.length,f=t;for(t===e&&(e=function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(e)),r&&(f=function(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}(t,(o=r,function(t){return o(t)})));++u<l;)for(var p=0,h=e[u],y=r?r(h):h;(p=i(f,y,p,n))>-1;)f!==t&&c.call(f,p,1),c.call(t,p,1);return t}var f=function(t,e){return t&&t.length&&e&&e.length?l(t,e):t},p=n(function(t,e){var n=200,o="__lodash_hash_undefined__",i=9007199254740991,a="[object Arguments]",s="[object Boolean]",u="[object Date]",c="[object Function]",l="[object GeneratorFunction]",f="[object Map]",p="[object Number]",h="[object Object]",y="[object RegExp]",g="[object Set]",d="[object String]",m="[object Symbol]",b="[object ArrayBuffer]",v="[object DataView]",_="[object Float32Array]",w="[object Float64Array]",j="[object Int8Array]",O="[object Int16Array]",$="[object Int32Array]",T="[object Uint8Array]",S="[object Uint8ClampedArray]",A="[object Uint16Array]",E="[object Uint32Array]",I=/\w*$/,N=/^\[object .+?Constructor\]$/,R=/^(?:0|[1-9]\d*)$/,k={};k[a]=k["[object Array]"]=k[b]=k[v]=k[s]=k[u]=k[_]=k[w]=k[j]=k[O]=k[$]=k[f]=k[p]=k[h]=k[y]=k[g]=k[d]=k[m]=k[T]=k[S]=k[A]=k[E]=!0,k["[object Error]"]=k[c]=k["[object WeakMap]"]=!1;var x="object"==typeof r&&r&&r.Object===Object&&r,M="object"==typeof self&&self&&self.Object===Object&&self,W=x||M||Function("return this")(),D=e&&!e.nodeType&&e,F=D&&t&&!t.nodeType&&t,H=F&&F.exports===D;function P(t,e){return t.set(e[0],e[1]),t}function C(t,e){return t.add(e),t}function Z(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}function J(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function L(t){var e=-1,r=Array(t.size);return t.forEach(function(t,n){r[++e]=[n,t]}),r}function K(t,e){return function(r){return t(e(r))}}function q(t){var e=-1,r=Array(t.size);return t.forEach(function(t){r[++e]=t}),r}var V,B=Array.prototype,z=Function.prototype,U=Object.prototype,G=W["__core-js_shared__"],Q=(V=/[^.]+$/.exec(G&&G.keys&&G.keys.IE_PROTO||""))?"Symbol(src)_1."+V:"",X=z.toString,Y=U.hasOwnProperty,tt=U.toString,et=RegExp("^"+X.call(Y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=H?W.Buffer:void 0,nt=W.Symbol,ot=W.Uint8Array,it=K(Object.getPrototypeOf,Object),at=Object.create,st=U.propertyIsEnumerable,ut=B.splice,ct=Object.getOwnPropertySymbols,lt=rt?rt.isBuffer:void 0,ft=K(Object.keys,Object),pt=Ft(W,"DataView"),ht=Ft(W,"Map"),yt=Ft(W,"Promise"),gt=Ft(W,"Set"),dt=Ft(W,"WeakMap"),mt=Ft(Object,"create"),bt=Jt(pt),vt=Jt(ht),_t=Jt(yt),wt=Jt(gt),jt=Jt(dt),Ot=nt?nt.prototype:void 0,$t=Ot?Ot.valueOf:void 0;function Tt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function St(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function At(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Et(t){this.__data__=new St(t)}function It(t,e){var r=Kt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&qt(t)}(t)&&Y.call(t,"callee")&&(!st.call(t,"callee")||tt.call(t)==a)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var i in t)!e&&!Y.call(t,i)||o&&("length"==i||Ct(i,n))||r.push(i);return r}function Nt(t,e,r){var n=t[e];Y.call(t,e)&&Lt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function Rt(t,e){for(var r=t.length;r--;)if(Lt(t[r][0],e))return r;return-1}function kt(t,e,r,n,o,i,N){var R;if(n&&(R=i?n(t,o,i,N):n(t)),void 0!==R)return R;if(!zt(t))return t;var x=Kt(t);if(x){if(R=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&Y.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,R)}else{var M=Pt(t),W=M==c||M==l;if(Vt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(M==h||M==a||W&&!i){if(J(t))return i?t:{};if(R=function(t){return"function"!=typeof t.constructor||Zt(t)?{}:(e=it(t),zt(e)?at(e):{});var e}(W?{}:t),!e)return function(t,e){return Wt(t,Ht(t),e)}(t,function(t,e){return t&&Wt(e,Ut(e),t)}(R,t))}else{if(!k[M])return i?t:{};R=function(t,e,r,n){var o=t.constructor;switch(e){case b:return Mt(t);case s:case u:return new o(+t);case v:return function(t,e){var r=e?Mt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case _:case w:case j:case O:case $:case T:case S:case A:case E:return function(t,e){var r=e?Mt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case f:return function(t,e,r){return Z(e?r(L(t),!0):L(t),P,new t.constructor)}(t,n,r);case p:case d:return new o(t);case y:return(c=new(a=t).constructor(a.source,I.exec(a))).lastIndex=a.lastIndex,c;case g:return function(t,e,r){return Z(e?r(q(t),!0):q(t),C,new t.constructor)}(t,n,r);case m:return i=t,$t?Object($t.call(i)):{}}var i;var a,c}(t,M,kt,e)}}N||(N=new Et);var D=N.get(t);if(D)return D;if(N.set(t,R),!x)var F=r?function(t){return function(t,e,r){var n=e(t);return Kt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Ut,Ht)}(t):Ut(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(F||t,function(o,i){F&&(o=t[i=o]),Nt(R,i,kt(o,e,r,n,i,t,N))}),R}function xt(t){return!(!zt(t)||(e=t,Q&&Q in e))&&(Bt(t)||J(t)?et:N).test(Jt(t));var e}function Mt(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function Wt(t,e,r,n){r||(r={});for(var o=-1,i=e.length;++o<i;){var a=e[o],s=n?n(r[a],t[a],a,r,t):void 0;Nt(r,a,void 0===s?t[a]:s)}return r}function Dt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Ft(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return xt(r)?r:void 0}Tt.prototype.clear=function(){this.__data__=mt?mt(null):{}},Tt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},Tt.prototype.get=function(t){var e=this.__data__;if(mt){var r=e[t];return r===o?void 0:r}return Y.call(e,t)?e[t]:void 0},Tt.prototype.has=function(t){var e=this.__data__;return mt?void 0!==e[t]:Y.call(e,t)},Tt.prototype.set=function(t,e){return this.__data__[t]=mt&&void 0===e?o:e,this},St.prototype.clear=function(){this.__data__=[]},St.prototype.delete=function(t){var e=this.__data__,r=Rt(e,t);return!(r<0||(r==e.length-1?e.pop():ut.call(e,r,1),0))},St.prototype.get=function(t){var e=this.__data__,r=Rt(e,t);return r<0?void 0:e[r][1]},St.prototype.has=function(t){return Rt(this.__data__,t)>-1},St.prototype.set=function(t,e){var r=this.__data__,n=Rt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},At.prototype.clear=function(){this.__data__={hash:new Tt,map:new(ht||St),string:new Tt}},At.prototype.delete=function(t){return Dt(this,t).delete(t)},At.prototype.get=function(t){return Dt(this,t).get(t)},At.prototype.has=function(t){return Dt(this,t).has(t)},At.prototype.set=function(t,e){return Dt(this,t).set(t,e),this},Et.prototype.clear=function(){this.__data__=new St},Et.prototype.delete=function(t){return this.__data__.delete(t)},Et.prototype.get=function(t){return this.__data__.get(t)},Et.prototype.has=function(t){return this.__data__.has(t)},Et.prototype.set=function(t,e){var r=this.__data__;if(r instanceof St){var o=r.__data__;if(!ht||o.length<n-1)return o.push([t,e]),this;r=this.__data__=new At(o)}return r.set(t,e),this};var Ht=ct?K(ct,Object):function(){return[]},Pt=function(t){return tt.call(t)};function Ct(t,e){return!!(e=null==e?i:e)&&("number"==typeof t||R.test(t))&&t>-1&&t%1==0&&t<e}function Zt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||U)}function Jt(t){if(null!=t){try{return X.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Lt(t,e){return t===e||t!=t&&e!=e}(pt&&Pt(new pt(new ArrayBuffer(1)))!=v||ht&&Pt(new ht)!=f||yt&&"[object Promise]"!=Pt(yt.resolve())||gt&&Pt(new gt)!=g||dt&&"[object WeakMap]"!=Pt(new dt))&&(Pt=function(t){var e=tt.call(t),r=e==h?t.constructor:void 0,n=r?Jt(r):void 0;if(n)switch(n){case bt:return v;case vt:return f;case _t:return"[object Promise]";case wt:return g;case jt:return"[object WeakMap]"}return e});var Kt=Array.isArray;function qt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=i}(t.length)&&!Bt(t)}var Vt=lt||function(){return!1};function Bt(t){var e=zt(t)?tt.call(t):"";return e==c||e==l}function zt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Ut(t){return qt(t)?It(t):function(t){if(!Zt(t))return ft(t);var e=[];for(var r in Object(t))Y.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return kt(t,!0,!0)}}),h="[object Object]";var y,g,d=Function.prototype,m=Object.prototype,b=d.toString,v=m.hasOwnProperty,_=b.call(Object),w=m.toString,j=(y=Object.getPrototypeOf,g=Object,function(t){return y(g(t))});var O=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||w.call(t)!=h||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=j(t);if(null===e)return!0;var r=v.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&b.call(r)==_};const $=Array.isArray;function T(t){return"string"==typeof t&&t.length>0&&"."===t[0]?t.slice(1):t}function S(t,e){return function t(e,r,n){const o=p(e);let i,a,s,u,c;if((n=Object.assign({depth:-1,path:""},n)).depth+=1,$(o))for(i=0,a=o.length;i<a;i++){const e=`${n.path}.${i}`;void 0!==o[i]?(n.parent=p(o),n.parentType="array",s=t(r(o[i],void 0,Object.assign({},n,{path:T(e)})),r,Object.assign({},n,{path:T(e)})),Number.isNaN(s)&&i<o.length?(o.splice(i,1),i-=1):o[i]=s):o.splice(i,1)}else if(O(o))for(i=0,a=(u=Object.keys(o)).length;i<a;i++){c=u[i];const e=`${n.path}.${c}`;0===n.depth&&null!=c&&(n.topmostKey=c),n.parent=p(o),n.parentType="object",s=t(r(c,o[c],Object.assign({},n,{path:T(e)})),r,Object.assign({},n,{path:T(e)})),Number.isNaN(s)?delete o[c]:o[c]=s}return o}(t,e,{})}var A="__lodash_hash_undefined__",E=9007199254740991,I="[object Function]",N="[object GeneratorFunction]",R=/^\[object .+?Constructor\]$/,k="object"==typeof r&&r&&r.Object===Object&&r,x="object"==typeof self&&self&&self.Object===Object&&self,M=k||x||Function("return this")();function W(t,e){return!!(t?t.length:0)&&function(t,e,r){if(e!=e)return function(t,e,r,n){var o=t.length,i=r+(n?1:-1);for(;n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,H,r);var n=r-1,o=t.length;for(;++n<o;)if(t[n]===e)return n;return-1}(t,e,0)>-1}function D(t,e,r){for(var n=-1,o=t?t.length:0;++n<o;)if(r(e,t[n]))return!0;return!1}function F(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}function H(t){return t!=t}function P(t){return function(e){return t(e)}}function C(t,e){return t.has(e)}var Z,J=Array.prototype,L=Function.prototype,K=Object.prototype,q=M["__core-js_shared__"],V=(Z=/[^.]+$/.exec(q&&q.keys&&q.keys.IE_PROTO||""))?"Symbol(src)_1."+Z:"",B=L.toString,z=K.hasOwnProperty,U=K.toString,G=RegExp("^"+B.call(z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Q=J.splice,X=Math.max,Y=Math.min,tt=lt(M,"Map"),et=lt(Object,"create");function rt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function nt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function ot(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function it(t){var e=-1,r=t?t.length:0;for(this.__data__=new ot;++e<r;)this.add(t[e])}function at(t,e){for(var r,n,o=t.length;o--;)if((r=t[o][0])===(n=e)||r!=r&&n!=n)return o;return-1}function st(t){return!(!pt(t)||function(t){return!!V&&V in t}(t))&&(ft(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?G:R).test(function(t){if(null!=t){try{return B.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t))}function ut(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&function(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=E}(t.length)&&!ft(t)}(t)}(t)?t:[]}function ct(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function lt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return st(r)?r:void 0}function ft(t){var e=pt(t)?U.call(t):"";return e==I||e==N}function pt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}rt.prototype.clear=function(){this.__data__=et?et(null):{}},rt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},rt.prototype.get=function(t){var e=this.__data__;if(et){var r=e[t];return r===A?void 0:r}return z.call(e,t)?e[t]:void 0},rt.prototype.has=function(t){var e=this.__data__;return et?void 0!==e[t]:z.call(e,t)},rt.prototype.set=function(t,e){return this.__data__[t]=et&&void 0===e?A:e,this},nt.prototype.clear=function(){this.__data__=[]},nt.prototype.delete=function(t){var e=this.__data__,r=at(e,t);return!(r<0||(r==e.length-1?e.pop():Q.call(e,r,1),0))},nt.prototype.get=function(t){var e=this.__data__,r=at(e,t);return r<0?void 0:e[r][1]},nt.prototype.has=function(t){return at(this.__data__,t)>-1},nt.prototype.set=function(t,e){var r=this.__data__,n=at(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},ot.prototype.clear=function(){this.__data__={hash:new rt,map:new(tt||nt),string:new rt}},ot.prototype.delete=function(t){return ct(this,t).delete(t)},ot.prototype.get=function(t){return ct(this,t).get(t)},ot.prototype.has=function(t){return ct(this,t).has(t)},ot.prototype.set=function(t,e){return ct(this,t).set(t,e),this},it.prototype.add=it.prototype.push=function(t){return this.__data__.set(t,A),this},it.prototype.has=function(t){return this.__data__.has(t)};var ht=function(t,e){return e=X(void 0===e?t.length-1:e,0),function(){for(var r=arguments,n=-1,o=X(r.length-e,0),i=Array(o);++n<o;)i[n]=r[e+n];n=-1;for(var a=Array(e+1);++n<e;)a[n]=r[n];return a[e]=i,function(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}(t,this,a)}}(function(t){var e=F(t,ut);return e.length&&e[0]===t[0]?function(t,e,r){for(var n=r?D:W,o=t[0].length,i=t.length,a=i,s=Array(i),u=1/0,c=[];a--;){var l=t[a];a&&e&&(l=F(l,P(e))),u=Y(l.length,u),s[a]=!r&&(e||o>=120&&l.length>=120)?new it(a&&l):void 0}l=t[0];var f=-1,p=s[0];t:for(;++f<o&&c.length<u;){var h=l[f],y=e?e(h):h;if(h=r||0!==h?h:0,!(p?C(p,y):n(c,y,r))){for(a=i;--a;){var g=s[a];if(!(g?C(g,y):n(t[a],y,r)))continue t}p&&p.push(y),c.push(h)}}return c}(e):[]});function yt(t){return"string"==typeof t?t.length>0?[t]:[]:t}var gt=n(function(t){t.exports=function(){var t=Object.prototype.toString;function e(t,e){return null!=t&&Object.prototype.hasOwnProperty.call(t,e)}function r(t){if(!t)return!0;if(o(t)&&0===t.length)return!0;if("string"!=typeof t){for(var r in t)if(e(t,r))return!1;return!0}return!1}function n(e){return t.call(e)}var o=Array.isArray||function(e){return"[object Array]"===t.call(e)};function i(t){var e=parseInt(t);return e.toString()===t?e:t}function a(t){t=t||{};var a=function(t){return Object.keys(a).reduce(function(e,r){return"create"===r?e:("function"==typeof a[r]&&(e[r]=a[r].bind(a,t)),e)},{})};function s(r,n){return t.includeInheritedProps||"number"==typeof n&&Array.isArray(r)||e(r,n)}function u(t,e){if(s(t,e))return t[e]}function c(t,e,r,n){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if("string"==typeof e)return c(t,e.split(".").map(i),r,n);var o=e[0],a=u(t,o);return 1===e.length?(void 0!==a&&n||(t[o]=r),a):(void 0===a&&("number"==typeof e[1]?t[o]=[]:t[o]={}),c(t[o],e.slice(1),r,n))}return a.has=function(r,n){if("number"==typeof n?n=[n]:"string"==typeof n&&(n=n.split(".")),!n||0===n.length)return!!r;for(var a=0;a<n.length;a++){var s=i(n[a]);if(!("number"==typeof s&&o(r)&&s<r.length||(t.includeInheritedProps?s in Object(r):e(r,s))))return!1;r=r[s]}return!0},a.ensureExists=function(t,e,r){return c(t,e,r,!0)},a.set=function(t,e,r,n){return c(t,e,r,n)},a.insert=function(t,e,r,n){var i=a.get(t,e);n=~~n,o(i)||(i=[],a.set(t,e,i)),i.splice(n,0,r)},a.empty=function(t,e){var i,u;if(!r(e)&&null!=t&&(i=a.get(t,e))){if("string"==typeof i)return a.set(t,e,"");if(function(t){return"boolean"==typeof t||"[object Boolean]"===n(t)}(i))return a.set(t,e,!1);if("number"==typeof i)return a.set(t,e,0);if(o(i))i.length=0;else{if(!function(t){return"object"==typeof t&&"[object Object]"===n(t)}(i))return a.set(t,e,null);for(u in i)s(i,u)&&delete i[u]}}},a.push=function(t,e){var r=a.get(t,e);o(r)||(r=[],a.set(t,e,r)),r.push.apply(r,Array.prototype.slice.call(arguments,2))},a.coalesce=function(t,e,r){for(var n,o=0,i=e.length;o<i;o++)if(void 0!==(n=a.get(t,e[o])))return n;return r},a.get=function(t,e,r){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if(null==t)return r;if("string"==typeof e)return a.get(t,e.split("."),r);var n=i(e[0]),o=u(t,n);return void 0===o?r:1===e.length?o:a.get(t[n],e.slice(1),r)},a.del=function(t,e){if("number"==typeof e&&(e=[e]),null==t)return t;if(r(e))return t;if("string"==typeof e)return a.del(t,e.split("."));var n=i(e[0]);return s(t,n)?1!==e.length?a.del(t[n],e.slice(1)):(o(t)?t.splice(n,1):delete t[n],t):t},a}var s=a();return s.create=a,s.withInheritedProps=a({includeInheritedProps:!0}),s}()}),dt=function(t){var e=(t=Math.abs(t))%100;if(e>=10&&e<=20)return"th";var r=t%10;return 1===r?"st":2===r?"nd":3===r?"rd":"th"};function mt(t){if("number"!=typeof t)throw new TypeError("Expected Number, got "+typeof t+" "+t);return Number.isFinite(t)?t+dt(t):t}mt.indicator=dt;var bt=mt;const vt=/[|\\{}()[\]^$+*?.-]/g;var _t=t=>{if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(vt,"\\$&")};const wt=new Map;function jt(t,e){e={caseSensitive:!1,...e};const r=t+JSON.stringify(e);if(wt.has(r))return wt.get(r);const n="!"===t[0];n&&(t=t.slice(1)),t=_t(t).replace(/\\\*/g,".*");const o=new RegExp(`^${t}$`,e.caseSensitive?"":"i");return o.negated=n,wt.set(r,o),o}var Ot=(t,e,r)=>{if(!Array.isArray(t)||!Array.isArray(e))throw new TypeError(`Expected two arrays, got ${typeof t} ${typeof e}`);if(0===e.length)return t;const n="!"===e[0][0];e=e.map(t=>jt(t,r));const o=[];for(const r of t){let t=n;for(const n of e)n.test(r)&&(t=!n.negated);t&&o.push(r)}return o};function $t(t,e,r){return function t(e,r,n,o=!0){const a=Object.prototype.hasOwnProperty;function s(t){return null!=t}function u(t){return"Object"===i(t)}function c(t,e){return e=yt(e),Array.from(t).filter(t=>!e.some(e=>Ot.isMatch(t,e,{caseSensitive:!0})))}const l=["any","anything","every","everything","all","whatever","whatevs"],p=Array.isArray;if(!s(e))throw new Error("check-types-mini: [THROW_ID_01] First argument is missing!");const h={ignoreKeys:[],ignorePaths:[],acceptArrays:!1,acceptArraysIgnore:[],enforceStrictKeyset:!0,schema:{},msg:"check-types-mini",optsVarName:"opts"};let y;if(y=s(n)&&u(n)?Object.assign({},h,n):Object.assign({},h),s(y.ignoreKeys)&&y.ignoreKeys?y.ignoreKeys=yt(y.ignoreKeys):y.ignoreKeys=[],s(y.ignorePaths)&&y.ignorePaths?y.ignorePaths=yt(y.ignorePaths):y.ignorePaths=[],s(y.acceptArraysIgnore)&&y.acceptArraysIgnore?y.acceptArraysIgnore=yt(y.acceptArraysIgnore):y.acceptArraysIgnore=[],y.msg="string"==typeof y.msg?y.msg.trim():y.msg,":"===y.msg[y.msg.length-1]&&(y.msg=y.msg.slice(0,y.msg.length-1).trim()),y.schema&&(Object.keys(y.schema).forEach(t=>{if(u(y.schema[t])){const e={};S(y.schema[t],(r,n,o)=>{const i=void 0!==n?n:r;return p(i)||u(i)||(e[`${t}.${o.path}`]=i),i}),delete y.schema[t],y.schema=Object.assign(y.schema,e)}}),Object.keys(y.schema).forEach(t=>{p(y.schema[t])||(y.schema[t]=[y.schema[t]]),y.schema[t]=y.schema[t].map(String).map(t=>t.toLowerCase()).map(t=>t.trim())})),s(r)||(r={}),o&&t(y,h,{enforceStrictKeyset:!1},!1),y.enforceStrictKeyset)if(s(y.schema)&&Object.keys(y.schema).length>0){if(0!==c(f(Object.keys(e),Object.keys(r).concat(Object.keys(y.schema))),y.ignoreKeys).length){const t=f(Object.keys(e),Object.keys(r).concat(Object.keys(y.schema)));throw new TypeError(`${y.msg}: ${y.optsVarName}.enforceStrictKeyset is on and the following key${t.length>1?"s":""} ${t.length>1?"are":"is"} not covered by schema and/or reference objects: ${t.join(", ")}`)}}else{if(!(s(r)&&Object.keys(r).length>0))throw new TypeError(`${y.msg}: Both ${y.optsVarName}.schema and reference objects are missing! We don't have anything to match the keys as you requested via opts.enforceStrictKeyset!`);if(0!==c(f(Object.keys(e),Object.keys(r)),y.ignoreKeys).length){const t=f(Object.keys(e),Object.keys(r));throw new TypeError(`${y.msg}: The input object has key${t.length>1?"s":""} which ${t.length>1?"are":"is"} not covered by the reference object: ${t.join(", ")}`)}if(0!==c(f(Object.keys(r),Object.keys(e)),y.ignoreKeys).length){const t=f(Object.keys(r),Object.keys(e));throw new TypeError(`${y.msg}: The reference object has key${t.length>1?"s":""} which ${t.length>1?"are":"is"} not present in the input object: ${t.join(", ")}`)}}const g=[];S(e,(t,n,o)=>{let s=n,c=t;if("array"===o.parentType&&(c=void 0,s=t),p(g)&&g.length&&g.some(t=>o.path.startsWith(t)))return s;if(c&&y.ignoreKeys.some(t=>Ot.isMatch(c,t)))return s;if(y.ignorePaths.some(t=>Ot.isMatch(o.path,t)))return s;const f=!(!u(s)&&!p(s)&&p(o.parent));let h=!1;u(y.schema)&&a.call(y.schema,gt.get(o.path))&&(h=!0);let d=!1;if(u(r)&&gt.has(r,gt.get(o.path))&&(d=!0),y.enforceStrictKeyset&&f&&!h&&!d)throw new TypeError(`${y.msg}: ${y.optsVarName}.${o.path} is neither covered by reference object (second input argument), nor ${y.optsVarName}.schema! To stop this error, turn off ${y.optsVarName}.enforceStrictKeyset or provide some type reference (2nd argument or ${y.optsVarName}.schema).\n\nDebug info:\n\nobj = ${JSON.stringify(e,null,4)}\n\nref = ${JSON.stringify(r,null,4)}\n\ninnerObj = ${JSON.stringify(o,null,4)}\n\nopts = ${JSON.stringify(y,null,4)}\n\ncurrent = ${JSON.stringify(s,null,4)}\n\n`);if(h){const t=yt(y.schema[o.path]).map(String).map(t=>t.toLowerCase());if(gt.set(y.schema,o.path,t),ht(t,l).length)g.push(o.path);else if(!0!==s&&!1!==s&&!t.includes(i(s).toLowerCase())||(!0===s||!1===s)&&!t.includes(String(s))&&!t.includes("boolean")){if(!p(s)||!y.acceptArrays)throw new TypeError(`${y.msg}: ${y.optsVarName}.${o.path} was customised to ${"string"!==i(s)?'"':""}${JSON.stringify(s,null,0)}${"string"!==i(s)?'"':""} (type: ${i(s).toLowerCase()}) which is not among the allowed types in schema (which is equal to ${JSON.stringify(t,null,0)})`);for(let e=0,r=s.length;e<r;e++)if(!t.includes(i(s[e]).toLowerCase()))throw new TypeError(`${y.msg}: ${y.optsVarName}.${o.path}.${e}, the ${bt(e+1)} element (equal to ${JSON.stringify(s[e],null,0)}) is of a type ${i(s[e]).toLowerCase()}, but only the following are allowed by the ${y.optsVarName}.schema: ${t.join(", ")}`)}}else if(d){const e=gt.get(r,o.path);if(y.acceptArrays&&p(s)&&!y.acceptArraysIgnore.includes(t)){if(!s.every(e=>i(e).toLowerCase()===i(r[t]).toLowerCase()))throw new TypeError(`${y.msg}: ${y.optsVarName}.${o.path} was customised to be array, but not all of its elements are ${i(r[t]).toLowerCase()}-type`)}else if(i(s)!==i(e))throw new TypeError(`${y.msg}: ${y.optsVarName}.${o.path} was customised to ${"string"===i(s).toLowerCase()?"":'"'}${JSON.stringify(s,null,0)}${"string"===i(s).toLowerCase()?"":'"'} which is not ${i(e).toLowerCase()} but ${i(s).toLowerCase()}`)}return s})}(t,e,r)}Ot.isMatch=(t,e,r)=>{const n=jt(e,r),o=n.test(t);return n.negated?!o:o};const Tt=Array.isArray;function St(e,r){if(!Tt(e))throw new TypeError(`ranges-sort: [THROW_ID_01] Input must be an array, consisting of range arrays! Currently its type is: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(0===e.length)return e;const n={strictlyTwoElementsInRangeArrays:!1,progressFn:null},i=Object.assign({},n,r);let a,s;if($t(i,n,{msg:"ranges-sort: [THROW_ID_02*]",schema:{progressFn:["function","false","null"]}}),i.strictlyTwoElementsInRangeArrays&&!e.every((t,e)=>2===t.length||(a=e,s=t.length,!1)))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${o(a)} range (${JSON.stringify(e[a],null,4)}) has not two but ${s} elements!`);if(!e.every((e,r)=>!(!t(e[0],{includeZero:!0})||!t(e[1],{includeZero:!0}))||(a=r,!1)))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${o(a)} range (${JSON.stringify(e[a],null,4)}) does not consist of only natural numbers!`);const u=e.length*e.length;let c=0;return Array.from(e).sort((t,e)=>(i.progressFn&&(c++,i.progressFn(Math.floor(100*c/u))),t[0]===e[0]?t[1]<e[1]?-1:t[1]>e[1]?1:0:t[0]<e[0]?-1:1))}function At(t,e){function r(t){return"string"==typeof t}if(!Array.isArray(t))return t;const n={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};let o;if(e){if(!O(e))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(e,null,4)} (type ${typeof e})`);if((o=Object.assign({},n,e)).progressFn&&O(o.progressFn)&&!Object.keys(o.progressFn).length)o.progressFn=null;else if(o.progressFn&&"function"!=typeof o.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof o.progressFn}", equal to ${JSON.stringify(o.progressFn,null,4)}`);if(o.mergeType&&1!==o.mergeType&&2!==o.mergeType)if(r(o.mergeType)&&"1"===o.mergeType.trim())o.mergeType=1;else{if(!r(o.mergeType)||"2"!==o.mergeType.trim())throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof o.mergeType}", equal to ${JSON.stringify(o.progressFn,null,4)}`);o.mergeType=2}if("boolean"!=typeof o.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof o.joinRangesThatTouchEdges}", equal to ${JSON.stringify(o.joinRangesThatTouchEdges,null,4)}`)}else o=p(n);const i=p(t).filter(t=>void 0!==t[2]||t[0]!==t[1]);let a,s,u;const c=(a=o.progressFn?St(i,{progressFn:t=>{(u=Math.floor(t/5))!==s&&(s=u,o.progressFn(u))}}):St(i)).length-1;for(let t=c;t>0;t--)o.progressFn&&(u=Math.floor(78*(1-t/c))+21)!==s&&u>s&&(s=u,o.progressFn(u)),(a[t][0]<=a[t-1][0]||!o.joinRangesThatTouchEdges&&a[t][0]<a[t-1][1]||o.joinRangesThatTouchEdges&&a[t][0]<=a[t-1][1])&&(a[t-1][0]=Math.min(a[t][0],a[t-1][0]),a[t-1][1]=Math.max(a[t][1],a[t-1][1]),void 0!==a[t][2]&&(a[t-1][0]>=a[t][0]||a[t-1][1]<=a[t][1])&&null!==a[t-1][2]&&(null===a[t][2]&&null!==a[t-1][2]?a[t-1][2]=null:void 0!==a[t-1][2]?2===o.mergeType&&a[t-1][0]===a[t][0]?a[t-1][2]=a[t][2]:a[t-1][2]+=a[t][2]:a[t-1][2]=a[t][2]),a.splice(t,1),t=a.length);return a}function Et(t,e){let r;if(r=e&&"number"==typeof e?e:1,"string"==typeof t){if(0===t.length)return"";if(""===t.trim()){const e=(t.match(/\n/g)||[]).length;return e?"\n".repeat(Math.min(e,r)):" "}let e="";if(""===t[0].trim()){e=" ";let n=0;for(let e=0,r=t.length;e<r&&("\n"===t[e]&&n++,0===t[e].trim().length);e++);n&&(e="\n".repeat(Math.min(n,r)))}let n="";if(""===t.slice(-1).trim()){n=" ";let e=0;for(let r=t.length;r--&&("\n"===t[r]&&e++,0===t[r].trim().length););e&&(n="\n".repeat(Math.min(e,r)))}return e+t.trim()+n}return t}function It(t){return null!=t}const Nt=Array.isArray,Rt=Number.isInteger;function kt(t){return"string"==typeof t}function xt(t){return e(t,{includeZero:!0})?parseInt(t,10):t}class Mt{constructor(t){const e=Object.assign({},{limitToBeAddedWhitespace:!1,limitLinebreaksCount:1},t);this.opts=e}add(r=function(t){throw new Error(`ranges-push/Ranges/add(): [THROW_ID_01] Missing ${o(t)} input parameter!`)}(1),n,i,...a){if(a.length>0)throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_03] Please don't overload the add() method. From the 4th input argument onwards we see these redundant arguments: ${JSON.stringify(a,null,4)}`);if(null===r&&void 0===n&&void 0===i)return;const s=e(r,{includeZero:!0})?parseInt(r,10):r,u=e(n,{includeZero:!0})?parseInt(n,10):n;if(Nt(r)&&!It(n)){let e,n;if(r.length>0){if(!r.every((t,r)=>!!Nt(t)||(e=r,n=t,!1)))throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_07] first argument was given as array but it contains not only range arrays. For example, at index ${e} we have ${typeof n}-type value:\n${JSON.stringify(n,null,4)}.`);r.forEach((e,r)=>{if(!t(xt(e[0]),{includeZero:!0}))throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_06] The ${o(r)} ranges array's starting range index, an element at its zero'th index, is not a natural number! It's equal to: ${e[0]}.`);if(!t(xt(e[1]),{includeZero:!0}))throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_05] The ${o(r)} ranges array's ending range index, an element at its first index, is not a natural number! It's equal to: ${e[1]}.`);if(It(e[2])&&!kt(e[2]))throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_04] The ${o(r)} ranges array's "to add" value is not string but ${typeof e[2]}! It's equal to: ${e[2]}.`);this.add(...e)})}}else{if(!t(s,{includeZero:!0})||!t(u,{includeZero:!0}))throw t(s,{includeZero:!0})?new TypeError(`ranges-push/Ranges/add(): [THROW_ID_10] "to" value, the second input argument, must be a natural number or zero! Currently it's of a type "${typeof u}" equal to: ${JSON.stringify(u,null,4)}`):new TypeError(`ranges-push/Ranges/add(): [THROW_ID_09] "from" value, the first input argument, must be a natural number or zero! Currently it's of a type "${typeof s}" equal to: ${JSON.stringify(s,null,4)}`);if(It(i)&&!kt(i))throw new TypeError(`ranges-push/Ranges/add(): [THROW_ID_08] The third argument, the value to add, was given not as string but ${typeof i}, equal to:\n${JSON.stringify(i,null,4)}`);if(It(this.slices)&&Nt(this.last())&&s===this.last()[1]){if(this.last()[1]=u,null!==this.last()[2]&&It(i)){let t=It(this.last()[2])&&this.last()[2].length>0?this.last()[2]+i:i;this.opts.limitToBeAddedWhitespace&&(t=Et(t,this.opts.limitLinebreaksCount)),kt(t)&&!t.length||(this.last()[2]=t)}}else this.slices||(this.slices=[]),this.slices.push(void 0===i||kt(i)&&!i.length?[s,u]:[s,u,this.opts.limitToBeAddedWhitespace?Et(i,this.opts.limitLinebreaksCount):i])}}push(t,e,r,...n){this.add(t,e,r,...n)}current(){return null!=this.slices?(this.slices=At(this.slices),this.opts.limitToBeAddedWhitespace?this.slices.map(t=>It(t[2])?[t[0],t[1],Et(t[2],this.opts.limitLinebreaksCount)]:t):this.slices):null}wipe(){this.slices=void 0}replace(t){if(Nt(t)&&t.length){if(!Nt(t[0])||!Rt(t[0][0]))throw new Error(`ranges-push/Ranges/replace(): [THROW_ID_11] Single range was given but we expected array of arrays! The first element, ${JSON.stringify(t[0],null,4)} should be an array and its first element should be an integer, a string index.`);this.slices=p(t)}else this.slices=void 0}last(){return void 0!==this.slices&&Array.isArray(this.slices)?this.slices[this.slices.length-1]:null}}const Wt=Array.isArray;function Dt(t){return null!=t}function Ft(t,e,r){if(e>>=0,r=Dt(r)?String(r):" ",!Dt(t))return t;if("number"==typeof t)t=String(t);else if("string"!=typeof t)return t;return t.length>=e?t:((e-=t.length)>r.length&&(r+=r.repeat(e/r.length)),r.slice(0,e)+t)}return function(r,n){if("string"!=typeof r||0===r.length)return r;function i(t){return/[0-9]/.test(t)}var a=Object.assign({},{padStart:3},n);(!a.padStart||"number"!=typeof a.padStart||"number"==typeof a.padStart&&a.padStart<0)&&(a.padStart=0);var s,u,c=new Mt,l=r.length,f=null,p=null,h=null,y=1,g=!1,d=null;for(a.padStart&&l>45e3&&(a.padStart=4),s=0;s<l;s++){if(("\n"===r[s]||"\r"===r[s]&&"\n"!==r[s+1])&&y++,d&&!i(r[s])&&s>d&&(c.push(d,s,a.padStart?Ft(y,a.padStart,"0"):"".concat(y)),d=null,g=!0),f&&f.start<s&&!g&&!d&&i(r[s])&&(d=s),f&&f.start<s&&!g&&(u=r[s],/[A-Za-z]/.test(u))){if("\\"===r[s-1]&&"u"===r[s]&&"0"===r[s+1]&&"0"===r[s+2]&&"1"===r[s+3]&&("b"===r[s+4]||"B"===r[s+5])&&"["===r[s+5]){var m=void 0;i(r[s+6])?m=s+6:"$"===r[s+6]&&"{"===r[s+7]&&i(r[s+8])&&(m=s+8);var b=void 0;if(m)for(var v=m;v<l;v++)if(!i(r[v])){b=v;break}var _=void 0;if("m"===r[b]?_=b:"}"===r[b]&&"m"===r[b+1]&&(_=b+1),!_){g=!0;continue}if("$"===r[_+1]&&"{"===r[_+2]&&"`"===r[_+3]){s=_+3;continue}}g=!0}f&&f.start<s&&f.type===r[s]&&(f=null,p=null,h=null,d=null,g=!1),!f&&p&&p<s&&h&&h<s&&r[s].trim().length&&('"'===r[s]||"'"===r[s]||"`"===r[s]?((f={}).start=s,f.type=r[s],g=!1):"/"!==r[s]&&(p=null,h=null,d=null)),!h&&r[s].trim().length&&p&&p<=s&&("("===r[s]?h=s:(p=null,d=null)),"c"!==r[s]||"o"!==r[s+1]||"n"!==r[s+2]||"s"!==r[s+3]||"o"!==r[s+4]||"l"!==r[s+5]||"e"!==r[s+6]||"."!==r[s+7]||"l"!==r[s+8]||"o"!==r[s+9]||"g"!==r[s+10]||(p=s+11,s+=10)}return c.current()?function(r,n,i){let a=0,s=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if("string"!=typeof r)throw new TypeError(`ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ${typeof r}, equal to: ${JSON.stringify(r,null,4)}`);if(null===n)return r;if(!Wt(n))throw new TypeError(`ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ${typeof n}, equal to: ${JSON.stringify(n,null,4)}`);if(i&&"function"!=typeof i)throw new TypeError(`ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: ${typeof i}, equal to: ${JSON.stringify(i,null,4)}`);Wt(n)&&(t(n[0],{includeZero:!0})||e(n[0],{includeZero:!0}))&&(t(n[1],{includeZero:!0})||e(n[1],{includeZero:!0}))&&(n=[n]);const u=n.length;let c=0;n.forEach((r,l)=>{if(i&&(a=Math.floor(c/u*10))!==s&&(s=a,i(a)),!Wt(r))throw new TypeError(`ranges-apply: [THROW_ID_05] ranges array, second input arg., has ${o(l)} element not an array: ${JSON.stringify(r,null,4)}, which is ${typeof r}`);if(!t(r[0],{includeZero:!0})){if(!e(r[0],{includeZero:!0}))throw new TypeError(`ranges-apply: [THROW_ID_06] ranges array, second input arg. has ${o(l)} element, array [${r[0]},${r[1]}]. That array has first element not an integer, but ${typeof r[0]}, equal to: ${JSON.stringify(r[0],null,4)}. Computer doesn't like this.`);n[l][0]=Number.parseInt(n[l][0],10)}if(!t(r[1],{includeZero:!0})){if(!e(r[1],{includeZero:!0}))throw new TypeError(`ranges-apply: [THROW_ID_07] ranges array, second input arg. has ${o(l)} element, array [${r[0]},${r[1]}]. That array has second element not an integer, but ${typeof r[1]}, equal to: ${JSON.stringify(r[1],null,4)}. Computer doesn't like this.`);n[l][1]=Number.parseInt(n[l][1],10)}c++});const l=At(n,{progressFn:t=>{i&&(a=10+Math.floor(t/10))!==s&&(s=a,i(a))}}),f=l.length;if(f>0){const t=r.slice(l[f-1][1]);r=l.reduce((t,e,n,o)=>{i&&(a=20+Math.floor(n/f*80))!==s&&(s=a,i(a));const u=0===n?0:o[n-1][1],c=o[n][0];return t+r.slice(u,c)+(function(t){return null!=t}(o[n][2])?o[n][2]:"")},""),r+=t}return r}(r,c.current()):(f=void 0,p=void 0,h=void 0,y=void 0,g=void 0,d=void 0,y=void 0,r)}});
