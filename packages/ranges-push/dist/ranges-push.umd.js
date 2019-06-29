/**
 * ranges-push
 * Manage the array of ranges referencing the index ranges within the string
 * Version: 3.2.2
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/ranges-push
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).rangesPush=e()}(this,function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function r(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var n=function(t,e){if(e){if("object"!=typeof e)throw new TypeError(String(e)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in e){if("boolean"!=typeof e.includeZero)throw new TypeError(String(e.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(e.includeZero&&0===t)return!0}}return Number.isSafeInteger(t)&&t>=1},o=function(t,e){if("string"!=typeof t)return!1;if(e&&"includeZero"in e){if("boolean"!=typeof e.includeZero)throw new TypeError(String(e.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(e.includeZero)return/^(-?0|[1-9]\d*)(\.0+)?$/.test(t)}return/^[1-9]\d*(\.0+)?$/.test(t)},i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function a(t,e){return t(e={exports:{}},e.exports),e.exports}var s=a(function(t,e){(e=t.exports=function(t){return t+e.suffix(+t)}).suffix=function(t){return t%=100,1===Math.floor(t/10)?"th":t%10==1?"st":t%10==2?"nd":t%10==3?"rd":"th"}}),c=(s.suffix,a(function(t,e){var r,n,o,a,s,c,u,f,l,p,h,y,g,d,b,m,v,_,w,j;t.exports=(r="function"==typeof Promise,n="object"==typeof self?self:i,o="undefined"!=typeof Symbol,a="undefined"!=typeof Map,s="undefined"!=typeof Set,c="undefined"!=typeof WeakMap,u="undefined"!=typeof WeakSet,f="undefined"!=typeof DataView,l=o&&void 0!==Symbol.iterator,p=o&&void 0!==Symbol.toStringTag,h=s&&"function"==typeof Set.prototype.entries,y=a&&"function"==typeof Map.prototype.entries,g=h&&Object.getPrototypeOf((new Set).entries()),d=y&&Object.getPrototypeOf((new Map).entries()),b=l&&"function"==typeof Array.prototype[Symbol.iterator],m=b&&Object.getPrototypeOf([][Symbol.iterator]()),v=l&&"function"==typeof String.prototype[Symbol.iterator],_=v&&Object.getPrototypeOf(""[Symbol.iterator]()),w=8,j=-1,function(t){var e=typeof t;if("object"!==e)return e;if(null===t)return"null";if(t===n)return"global";if(Array.isArray(t)&&(!1===p||!(Symbol.toStringTag in t)))return"Array";if("object"==typeof window&&null!==window){if("object"==typeof window.location&&t===window.location)return"Location";if("object"==typeof window.document&&t===window.document)return"Document";if("object"==typeof window.navigator){if("object"==typeof window.navigator.mimeTypes&&t===window.navigator.mimeTypes)return"MimeTypeArray";if("object"==typeof window.navigator.plugins&&t===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"==typeof window.HTMLElement)&&t instanceof window.HTMLElement){if("BLOCKQUOTE"===t.tagName)return"HTMLQuoteElement";if("TD"===t.tagName)return"HTMLTableDataCellElement";if("TH"===t.tagName)return"HTMLTableHeaderCellElement"}}var o=p&&t[Symbol.toStringTag];if("string"==typeof o)return o;var i=Object.getPrototypeOf(t);return i===RegExp.prototype?"RegExp":i===Date.prototype?"Date":r&&i===Promise.prototype?"Promise":s&&i===Set.prototype?"Set":a&&i===Map.prototype?"Map":u&&i===WeakSet.prototype?"WeakSet":c&&i===WeakMap.prototype?"WeakMap":f&&i===DataView.prototype?"DataView":a&&i===d?"Map Iterator":s&&i===g?"Set Iterator":b&&i===m?"Array Iterator":v&&i===_?"String Iterator":null===i?"Object":Object.prototype.toString.call(t).slice(w,j)})}));function u(t,e,r){if(e!=e)return function(t,e,r,n){for(var o=t.length,i=r+(n?1:-1);n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,l,r);for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}function f(t,e,r,n){for(var o=r-1,i=t.length;++o<i;)if(n(t[o],e))return o;return-1}function l(t){return t!=t}var p=Array.prototype.splice;function h(t,e,r,n){var o,i=n?f:u,a=-1,s=e.length,c=t;for(t===e&&(e=function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(e)),r&&(c=function(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}(t,(o=r,function(t){return o(t)})));++a<s;)for(var l=0,h=e[a],y=r?r(h):h;(l=i(c,y,l,n))>-1;)c!==t&&p.call(c,l,1),p.call(t,l,1);return t}var y=function(t,e){return t&&t.length&&e&&e.length?h(t,e):t},g=a(function(t,e){var r=200,n="__lodash_hash_undefined__",o=9007199254740991,a="[object Arguments]",s="[object Boolean]",c="[object Date]",u="[object Function]",f="[object GeneratorFunction]",l="[object Map]",p="[object Number]",h="[object Object]",y="[object RegExp]",g="[object Set]",d="[object String]",b="[object Symbol]",m="[object ArrayBuffer]",v="[object DataView]",_="[object Float32Array]",w="[object Float64Array]",j="[object Int8Array]",O="[object Int16Array]",T="[object Int32Array]",$="[object Uint8Array]",S="[object Uint8ClampedArray]",A="[object Uint16Array]",E="[object Uint32Array]",I=/\w*$/,k=/^\[object .+?Constructor\]$/,N=/^(?:0|[1-9]\d*)$/,x={};x[a]=x["[object Array]"]=x[m]=x[v]=x[s]=x[c]=x[_]=x[w]=x[j]=x[O]=x[T]=x[l]=x[p]=x[h]=x[y]=x[g]=x[d]=x[b]=x[$]=x[S]=x[A]=x[E]=!0,x["[object Error]"]=x[u]=x["[object WeakMap]"]=!1;var R="object"==typeof i&&i&&i.Object===Object&&i,M="object"==typeof self&&self&&self.Object===Object&&self,P=R||M||Function("return this")(),W=e&&!e.nodeType&&e,F=W&&t&&!t.nodeType&&t,D=F&&F.exports===W;function H(t,e){return t.set(e[0],e[1]),t}function C(t,e){return t.add(e),t}function L(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}function J(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function Z(t){var e=-1,r=Array(t.size);return t.forEach(function(t,n){r[++e]=[n,t]}),r}function K(t,e){return function(r){return t(e(r))}}function V(t){var e=-1,r=Array(t.size);return t.forEach(function(t){r[++e]=t}),r}var B,q=Array.prototype,U=Function.prototype,z=Object.prototype,G=P["__core-js_shared__"],Q=(B=/[^.]+$/.exec(G&&G.keys&&G.keys.IE_PROTO||""))?"Symbol(src)_1."+B:"",X=U.toString,Y=z.hasOwnProperty,tt=z.toString,et=RegExp("^"+X.call(Y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=D?P.Buffer:void 0,nt=P.Symbol,ot=P.Uint8Array,it=K(Object.getPrototypeOf,Object),at=Object.create,st=z.propertyIsEnumerable,ct=q.splice,ut=Object.getOwnPropertySymbols,ft=rt?rt.isBuffer:void 0,lt=K(Object.keys,Object),pt=Ft(P,"DataView"),ht=Ft(P,"Map"),yt=Ft(P,"Promise"),gt=Ft(P,"Set"),dt=Ft(P,"WeakMap"),bt=Ft(Object,"create"),mt=Jt(pt),vt=Jt(ht),_t=Jt(yt),wt=Jt(gt),jt=Jt(dt),Ot=nt?nt.prototype:void 0,Tt=Ot?Ot.valueOf:void 0;function $t(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function St(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function At(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Et(t){this.__data__=new St(t)}function It(t,e){var r=Kt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Vt(t)}(t)&&Y.call(t,"callee")&&(!st.call(t,"callee")||tt.call(t)==a)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var i in t)!e&&!Y.call(t,i)||o&&("length"==i||Ct(i,n))||r.push(i);return r}function kt(t,e,r){var n=t[e];Y.call(t,e)&&Zt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function Nt(t,e){for(var r=t.length;r--;)if(Zt(t[r][0],e))return r;return-1}function xt(t,e,r,n,o,i,k){var N;if(n&&(N=i?n(t,o,i,k):n(t)),void 0!==N)return N;if(!Ut(t))return t;var R=Kt(t);if(R){if(N=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&Y.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,N)}else{var M=Ht(t),P=M==u||M==f;if(Bt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(M==h||M==a||P&&!i){if(J(t))return i?t:{};if(N=function(t){return"function"!=typeof t.constructor||Lt(t)?{}:(e=it(t),Ut(e)?at(e):{});var e}(P?{}:t),!e)return function(t,e){return Pt(t,Dt(t),e)}(t,function(t,e){return t&&Pt(e,zt(e),t)}(N,t))}else{if(!x[M])return i?t:{};N=function(t,e,r,n){var o=t.constructor;switch(e){case m:return Mt(t);case s:case c:return new o(+t);case v:return function(t,e){var r=e?Mt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case _:case w:case j:case O:case T:case $:case S:case A:case E:return function(t,e){var r=e?Mt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case l:return function(t,e,r){return L(e?r(Z(t),!0):Z(t),H,new t.constructor)}(t,n,r);case p:case d:return new o(t);case y:return(u=new(a=t).constructor(a.source,I.exec(a))).lastIndex=a.lastIndex,u;case g:return function(t,e,r){return L(e?r(V(t),!0):V(t),C,new t.constructor)}(t,n,r);case b:return i=t,Tt?Object(Tt.call(i)):{}}var i;var a,u}(t,M,xt,e)}}k||(k=new Et);var W=k.get(t);if(W)return W;if(k.set(t,N),!R)var F=r?function(t){return function(t,e,r){var n=e(t);return Kt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,zt,Dt)}(t):zt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(F||t,function(o,i){F&&(o=t[i=o]),kt(N,i,xt(o,e,r,n,i,t,k))}),N}function Rt(t){return!(!Ut(t)||(e=t,Q&&Q in e))&&(qt(t)||J(t)?et:k).test(Jt(t));var e}function Mt(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function Pt(t,e,r,n){r||(r={});for(var o=-1,i=e.length;++o<i;){var a=e[o],s=n?n(r[a],t[a],a,r,t):void 0;kt(r,a,void 0===s?t[a]:s)}return r}function Wt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Ft(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Rt(r)?r:void 0}$t.prototype.clear=function(){this.__data__=bt?bt(null):{}},$t.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},$t.prototype.get=function(t){var e=this.__data__;if(bt){var r=e[t];return r===n?void 0:r}return Y.call(e,t)?e[t]:void 0},$t.prototype.has=function(t){var e=this.__data__;return bt?void 0!==e[t]:Y.call(e,t)},$t.prototype.set=function(t,e){return this.__data__[t]=bt&&void 0===e?n:e,this},St.prototype.clear=function(){this.__data__=[]},St.prototype.delete=function(t){var e=this.__data__,r=Nt(e,t);return!(r<0||(r==e.length-1?e.pop():ct.call(e,r,1),0))},St.prototype.get=function(t){var e=this.__data__,r=Nt(e,t);return r<0?void 0:e[r][1]},St.prototype.has=function(t){return Nt(this.__data__,t)>-1},St.prototype.set=function(t,e){var r=this.__data__,n=Nt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},At.prototype.clear=function(){this.__data__={hash:new $t,map:new(ht||St),string:new $t}},At.prototype.delete=function(t){return Wt(this,t).delete(t)},At.prototype.get=function(t){return Wt(this,t).get(t)},At.prototype.has=function(t){return Wt(this,t).has(t)},At.prototype.set=function(t,e){return Wt(this,t).set(t,e),this},Et.prototype.clear=function(){this.__data__=new St},Et.prototype.delete=function(t){return this.__data__.delete(t)},Et.prototype.get=function(t){return this.__data__.get(t)},Et.prototype.has=function(t){return this.__data__.has(t)},Et.prototype.set=function(t,e){var n=this.__data__;if(n instanceof St){var o=n.__data__;if(!ht||o.length<r-1)return o.push([t,e]),this;n=this.__data__=new At(o)}return n.set(t,e),this};var Dt=ut?K(ut,Object):function(){return[]},Ht=function(t){return tt.call(t)};function Ct(t,e){return!!(e=null==e?o:e)&&("number"==typeof t||N.test(t))&&t>-1&&t%1==0&&t<e}function Lt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||z)}function Jt(t){if(null!=t){try{return X.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Zt(t,e){return t===e||t!=t&&e!=e}(pt&&Ht(new pt(new ArrayBuffer(1)))!=v||ht&&Ht(new ht)!=l||yt&&"[object Promise]"!=Ht(yt.resolve())||gt&&Ht(new gt)!=g||dt&&"[object WeakMap]"!=Ht(new dt))&&(Ht=function(t){var e=tt.call(t),r=e==h?t.constructor:void 0,n=r?Jt(r):void 0;if(n)switch(n){case mt:return v;case vt:return l;case _t:return"[object Promise]";case wt:return g;case jt:return"[object WeakMap]"}return e});var Kt=Array.isArray;function Vt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=o}(t.length)&&!qt(t)}var Bt=ft||function(){return!1};function qt(t){var e=Ut(t)?tt.call(t):"";return e==u||e==f}function Ut(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function zt(t){return Vt(t)?It(t):function(t){if(!Lt(t))return lt(t);var e=[];for(var r in Object(t))Y.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return xt(t,!0,!0)}}),d="[object Object]";var b,m,v=Function.prototype,_=Object.prototype,w=v.toString,j=_.hasOwnProperty,O=w.call(Object),T=_.toString,$=(b=Object.getPrototypeOf,m=Object,function(t){return b(m(t))});var S=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||T.call(t)!=d||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=$(t);if(null===e)return!0;var r=j.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&w.call(r)==O};const A=Array.isArray;function E(t){return"string"==typeof t&&t.length>0&&"."===t[0]?t.slice(1):t}function I(t,e){return function t(e,r,n){const o=g(e);let i,a,s,c,u;if((n=Object.assign({depth:-1,path:""},n)).depth+=1,A(o))for(i=0,a=o.length;i<a;i++){const e=`${n.path}.${i}`;void 0!==o[i]?(n.parent=g(o),n.parentType="array",s=t(r(o[i],void 0,Object.assign({},n,{path:E(e)})),r,Object.assign({},n,{path:E(e)})),Number.isNaN(s)&&i<o.length?(o.splice(i,1),i-=1):o[i]=s):o.splice(i,1)}else if(S(o))for(i=0,a=(c=Object.keys(o)).length;i<a;i++){u=c[i];const e=`${n.path}.${u}`;0===n.depth&&null!=u&&(n.topmostKey=u),n.parent=g(o),n.parentType="object",s=t(r(u,o[u],Object.assign({},n,{path:E(e)})),r,Object.assign({},n,{path:E(e)})),Number.isNaN(s)?delete o[u]:o[u]=s}return o}(t,e,{})}var k="__lodash_hash_undefined__",N=9007199254740991,x="[object Function]",R="[object GeneratorFunction]",M=/^\[object .+?Constructor\]$/,P="object"==typeof i&&i&&i.Object===Object&&i,W="object"==typeof self&&self&&self.Object===Object&&self,F=P||W||Function("return this")();function D(t,e){return!!(t?t.length:0)&&function(t,e,r){if(e!=e)return function(t,e,r,n){var o=t.length,i=r+(n?1:-1);for(;n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,L,r);var n=r-1,o=t.length;for(;++n<o;)if(t[n]===e)return n;return-1}(t,e,0)>-1}function H(t,e,r){for(var n=-1,o=t?t.length:0;++n<o;)if(r(e,t[n]))return!0;return!1}function C(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}function L(t){return t!=t}function J(t){return function(e){return t(e)}}function Z(t,e){return t.has(e)}var K,V=Array.prototype,B=Function.prototype,q=Object.prototype,U=F["__core-js_shared__"],z=(K=/[^.]+$/.exec(U&&U.keys&&U.keys.IE_PROTO||""))?"Symbol(src)_1."+K:"",G=B.toString,Q=q.hasOwnProperty,X=q.toString,Y=RegExp("^"+G.call(Q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),tt=V.splice,et=Math.max,rt=Math.min,nt=ht(F,"Map"),ot=ht(Object,"create");function it(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function at(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function st(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function ct(t){var e=-1,r=t?t.length:0;for(this.__data__=new st;++e<r;)this.add(t[e])}function ut(t,e){for(var r,n,o=t.length;o--;)if((r=t[o][0])===(n=e)||r!=r&&n!=n)return o;return-1}function ft(t){return!(!gt(t)||function(t){return!!z&&z in t}(t))&&(yt(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?Y:M).test(function(t){if(null!=t){try{return G.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t))}function lt(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&function(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=N}(t.length)&&!yt(t)}(t)}(t)?t:[]}function pt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function ht(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return ft(r)?r:void 0}function yt(t){var e=gt(t)?X.call(t):"";return e==x||e==R}function gt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}it.prototype.clear=function(){this.__data__=ot?ot(null):{}},it.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},it.prototype.get=function(t){var e=this.__data__;if(ot){var r=e[t];return r===k?void 0:r}return Q.call(e,t)?e[t]:void 0},it.prototype.has=function(t){var e=this.__data__;return ot?void 0!==e[t]:Q.call(e,t)},it.prototype.set=function(t,e){return this.__data__[t]=ot&&void 0===e?k:e,this},at.prototype.clear=function(){this.__data__=[]},at.prototype.delete=function(t){var e=this.__data__,r=ut(e,t);return!(r<0||(r==e.length-1?e.pop():tt.call(e,r,1),0))},at.prototype.get=function(t){var e=this.__data__,r=ut(e,t);return r<0?void 0:e[r][1]},at.prototype.has=function(t){return ut(this.__data__,t)>-1},at.prototype.set=function(t,e){var r=this.__data__,n=ut(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},st.prototype.clear=function(){this.__data__={hash:new it,map:new(nt||at),string:new it}},st.prototype.delete=function(t){return pt(this,t).delete(t)},st.prototype.get=function(t){return pt(this,t).get(t)},st.prototype.has=function(t){return pt(this,t).has(t)},st.prototype.set=function(t,e){return pt(this,t).set(t,e),this},ct.prototype.add=ct.prototype.push=function(t){return this.__data__.set(t,k),this},ct.prototype.has=function(t){return this.__data__.has(t)};var dt=function(t,e){return e=et(void 0===e?t.length-1:e,0),function(){for(var r=arguments,n=-1,o=et(r.length-e,0),i=Array(o);++n<o;)i[n]=r[e+n];n=-1;for(var a=Array(e+1);++n<e;)a[n]=r[n];return a[e]=i,function(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}(t,this,a)}}(function(t){var e=C(t,lt);return e.length&&e[0]===t[0]?function(t,e,r){for(var n=r?H:D,o=t[0].length,i=t.length,a=i,s=Array(i),c=1/0,u=[];a--;){var f=t[a];a&&e&&(f=C(f,J(e))),c=rt(f.length,c),s[a]=!r&&(e||o>=120&&f.length>=120)?new ct(a&&f):void 0}f=t[0];var l=-1,p=s[0];t:for(;++l<o&&u.length<c;){var h=f[l],y=e?e(h):h;if(h=r||0!==h?h:0,!(p?Z(p,y):n(u,y,r))){for(a=i;--a;){var g=s[a];if(!(g?Z(g,y):n(t[a],y,r)))continue t}p&&p.push(y),u.push(h)}}return u}(e):[]});function bt(t){return"string"==typeof t?t.length>0?[t]:[]:t}var mt=a(function(t){t.exports=function(){var t=Object.prototype.toString;function e(t,e){return null!=t&&Object.prototype.hasOwnProperty.call(t,e)}function r(t){if(!t)return!0;if(o(t)&&0===t.length)return!0;if("string"!=typeof t){for(var r in t)if(e(t,r))return!1;return!0}return!1}function n(e){return t.call(e)}var o=Array.isArray||function(e){return"[object Array]"===t.call(e)};function i(t){var e=parseInt(t);return e.toString()===t?e:t}function a(t){t=t||{};var a=function(t){return Object.keys(a).reduce(function(e,r){return"create"===r?e:("function"==typeof a[r]&&(e[r]=a[r].bind(a,t)),e)},{})};function s(r,n){return t.includeInheritedProps||"number"==typeof n&&Array.isArray(r)||e(r,n)}function c(t,e){if(s(t,e))return t[e]}function u(t,e,r,n){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if("string"==typeof e)return u(t,e.split(".").map(i),r,n);var o=e[0],a=c(t,o);return 1===e.length?(void 0!==a&&n||(t[o]=r),a):(void 0===a&&("number"==typeof e[1]?t[o]=[]:t[o]={}),u(t[o],e.slice(1),r,n))}return a.has=function(r,n){if("number"==typeof n?n=[n]:"string"==typeof n&&(n=n.split(".")),!n||0===n.length)return!!r;for(var a=0;a<n.length;a++){var s=i(n[a]);if(!("number"==typeof s&&o(r)&&s<r.length||(t.includeInheritedProps?s in Object(r):e(r,s))))return!1;r=r[s]}return!0},a.ensureExists=function(t,e,r){return u(t,e,r,!0)},a.set=function(t,e,r,n){return u(t,e,r,n)},a.insert=function(t,e,r,n){var i=a.get(t,e);n=~~n,o(i)||(i=[],a.set(t,e,i)),i.splice(n,0,r)},a.empty=function(t,e){var i,c;if(!r(e)&&null!=t&&(i=a.get(t,e))){if("string"==typeof i)return a.set(t,e,"");if(function(t){return"boolean"==typeof t||"[object Boolean]"===n(t)}(i))return a.set(t,e,!1);if("number"==typeof i)return a.set(t,e,0);if(o(i))i.length=0;else{if(!function(t){return"object"==typeof t&&"[object Object]"===n(t)}(i))return a.set(t,e,null);for(c in i)s(i,c)&&delete i[c]}}},a.push=function(t,e){var r=a.get(t,e);o(r)||(r=[],a.set(t,e,r)),r.push.apply(r,Array.prototype.slice.call(arguments,2))},a.coalesce=function(t,e,r){for(var n,o=0,i=e.length;o<i;o++)if(void 0!==(n=a.get(t,e[o])))return n;return r},a.get=function(t,e,r){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if(null==t)return r;if("string"==typeof e)return a.get(t,e.split("."),r);var n=i(e[0]),o=c(t,n);return void 0===o?r:1===e.length?o:a.get(t[n],e.slice(1),r)},a.del=function(t,e){if("number"==typeof e&&(e=[e]),null==t)return t;if(r(e))return t;if("string"==typeof e)return a.del(t,e.split("."));var n=i(e[0]);return s(t,n)?1!==e.length?a.del(t[n],e.slice(1)):(o(t)?t.splice(n,1):delete t[n],t):t},a}var s=a();return s.create=a,s.withInheritedProps=a({includeInheritedProps:!0}),s}()}),vt=function(t){var e=(t=Math.abs(t))%100;if(e>=10&&e<=20)return"th";var r=t%10;return 1===r?"st":2===r?"nd":3===r?"rd":"th"};function _t(t){if("number"!=typeof t)throw new TypeError("Expected Number, got "+typeof t+" "+t);return Number.isFinite(t)?t+vt(t):t}_t.indicator=vt;var wt=_t;const jt=/[|\\{}()[\]^$+*?.-]/g;var Ot=t=>{if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(jt,"\\$&")};const Tt=new Map;function $t(t,e){e={caseSensitive:!1,...e};const r=t+JSON.stringify(e);if(Tt.has(r))return Tt.get(r);const n="!"===t[0];n&&(t=t.slice(1)),t=Ot(t).replace(/\\\*/g,".*");const o=new RegExp(`^${t}$`,e.caseSensitive?"":"i");return o.negated=n,Tt.set(r,o),o}var St=(t,e,r)=>{if(!Array.isArray(t)||!Array.isArray(e))throw new TypeError(`Expected two arrays, got ${typeof t} ${typeof e}`);if(0===e.length)return t;const n="!"===e[0][0];e=e.map(t=>$t(t,r));const o=[];for(const r of t){let t=n;for(const n of e)n.test(r)&&(t=!n.negated);t&&o.push(r)}return o};function At(t,e,r){return function t(e,r,n,o=!0){const i=Object.prototype.hasOwnProperty;function a(t){return null!=t}function s(t){return"Object"===c(t)}function u(t,e){return e=bt(e),Array.from(t).filter(t=>!e.some(e=>St.isMatch(t,e,{caseSensitive:!0})))}const f=["any","anything","every","everything","all","whatever","whatevs"],l=Array.isArray;if(!a(e))throw new Error("check-types-mini: [THROW_ID_01] First argument is missing!");const p={ignoreKeys:[],ignorePaths:[],acceptArrays:!1,acceptArraysIgnore:[],enforceStrictKeyset:!0,schema:{},msg:"check-types-mini",optsVarName:"opts"};let h;if(h=a(n)&&s(n)?Object.assign({},p,n):Object.assign({},p),a(h.ignoreKeys)&&h.ignoreKeys?h.ignoreKeys=bt(h.ignoreKeys):h.ignoreKeys=[],a(h.ignorePaths)&&h.ignorePaths?h.ignorePaths=bt(h.ignorePaths):h.ignorePaths=[],a(h.acceptArraysIgnore)&&h.acceptArraysIgnore?h.acceptArraysIgnore=bt(h.acceptArraysIgnore):h.acceptArraysIgnore=[],h.msg="string"==typeof h.msg?h.msg.trim():h.msg,":"===h.msg[h.msg.length-1]&&(h.msg=h.msg.slice(0,h.msg.length-1).trim()),h.schema&&(Object.keys(h.schema).forEach(t=>{if(s(h.schema[t])){const e={};I(h.schema[t],(r,n,o)=>{const i=void 0!==n?n:r;return l(i)||s(i)||(e[`${t}.${o.path}`]=i),i}),delete h.schema[t],h.schema=Object.assign(h.schema,e)}}),Object.keys(h.schema).forEach(t=>{l(h.schema[t])||(h.schema[t]=[h.schema[t]]),h.schema[t]=h.schema[t].map(String).map(t=>t.toLowerCase()).map(t=>t.trim())})),a(r)||(r={}),o&&t(h,p,{enforceStrictKeyset:!1},!1),h.enforceStrictKeyset)if(a(h.schema)&&Object.keys(h.schema).length>0){if(0!==u(y(Object.keys(e),Object.keys(r).concat(Object.keys(h.schema))),h.ignoreKeys).length){const t=y(Object.keys(e),Object.keys(r).concat(Object.keys(h.schema)));throw new TypeError(`${h.msg}: ${h.optsVarName}.enforceStrictKeyset is on and the following key${t.length>1?"s":""} ${t.length>1?"are":"is"} not covered by schema and/or reference objects: ${t.join(", ")}`)}}else{if(!(a(r)&&Object.keys(r).length>0))throw new TypeError(`${h.msg}: Both ${h.optsVarName}.schema and reference objects are missing! We don't have anything to match the keys as you requested via opts.enforceStrictKeyset!`);if(0!==u(y(Object.keys(e),Object.keys(r)),h.ignoreKeys).length){const t=y(Object.keys(e),Object.keys(r));throw new TypeError(`${h.msg}: The input object has key${t.length>1?"s":""} which ${t.length>1?"are":"is"} not covered by the reference object: ${t.join(", ")}`)}if(0!==u(y(Object.keys(r),Object.keys(e)),h.ignoreKeys).length){const t=y(Object.keys(r),Object.keys(e));throw new TypeError(`${h.msg}: The reference object has key${t.length>1?"s":""} which ${t.length>1?"are":"is"} not present in the input object: ${t.join(", ")}`)}}const g=[];I(e,(t,n,o)=>{let a=n,u=t;if("array"===o.parentType&&(u=void 0,a=t),l(g)&&g.length&&g.some(t=>o.path.startsWith(t)))return a;if(u&&h.ignoreKeys.some(t=>St.isMatch(u,t)))return a;if(h.ignorePaths.some(t=>St.isMatch(o.path,t)))return a;const p=!(!s(a)&&!l(a)&&l(o.parent));let y=!1;s(h.schema)&&i.call(h.schema,mt.get(o.path))&&(y=!0);let d=!1;if(s(r)&&mt.has(r,mt.get(o.path))&&(d=!0),h.enforceStrictKeyset&&p&&!y&&!d)throw new TypeError(`${h.msg}: ${h.optsVarName}.${o.path} is neither covered by reference object (second input argument), nor ${h.optsVarName}.schema! To stop this error, turn off ${h.optsVarName}.enforceStrictKeyset or provide some type reference (2nd argument or ${h.optsVarName}.schema).\n\nDebug info:\n\nobj = ${JSON.stringify(e,null,4)}\n\nref = ${JSON.stringify(r,null,4)}\n\ninnerObj = ${JSON.stringify(o,null,4)}\n\nopts = ${JSON.stringify(h,null,4)}\n\ncurrent = ${JSON.stringify(a,null,4)}\n\n`);if(y){const t=bt(h.schema[o.path]).map(String).map(t=>t.toLowerCase());if(mt.set(h.schema,o.path,t),dt(t,f).length)g.push(o.path);else if(!0!==a&&!1!==a&&!t.includes(c(a).toLowerCase())||(!0===a||!1===a)&&!t.includes(String(a))&&!t.includes("boolean")){if(!l(a)||!h.acceptArrays)throw new TypeError(`${h.msg}: ${h.optsVarName}.${o.path} was customised to ${"string"!==c(a)?'"':""}${JSON.stringify(a,null,0)}${"string"!==c(a)?'"':""} (type: ${c(a).toLowerCase()}) which is not among the allowed types in schema (which is equal to ${JSON.stringify(t,null,0)})`);for(let e=0,r=a.length;e<r;e++)if(!t.includes(c(a[e]).toLowerCase()))throw new TypeError(`${h.msg}: ${h.optsVarName}.${o.path}.${e}, the ${wt(e+1)} element (equal to ${JSON.stringify(a[e],null,0)}) is of a type ${c(a[e]).toLowerCase()}, but only the following are allowed by the ${h.optsVarName}.schema: ${t.join(", ")}`)}}else if(d){const e=mt.get(r,o.path);if(h.acceptArrays&&l(a)&&!h.acceptArraysIgnore.includes(t)){if(!a.every(e=>c(e).toLowerCase()===c(r[t]).toLowerCase()))throw new TypeError(`${h.msg}: ${h.optsVarName}.${o.path} was customised to be array, but not all of its elements are ${c(r[t]).toLowerCase()}-type`)}else if(c(a)!==c(e))throw new TypeError(`${h.msg}: ${h.optsVarName}.${o.path} was customised to ${"string"===c(a).toLowerCase()?"":'"'}${JSON.stringify(a,null,0)}${"string"===c(a).toLowerCase()?"":'"'} which is not ${c(e).toLowerCase()} but ${c(a).toLowerCase()}`)}return a})}(t,e,r)}St.isMatch=(t,e,r)=>{const n=$t(e,r),o=n.test(t);return n.negated?!o:o};const Et=Array.isArray;function It(t,e){if(!Et(t))throw new TypeError(`ranges-sort: [THROW_ID_01] Input must be an array, consisting of range arrays! Currently its type is: ${typeof t}, equal to: ${JSON.stringify(t,null,4)}`);if(0===t.length)return t;const r={strictlyTwoElementsInRangeArrays:!1,progressFn:null},o=Object.assign({},r,e);let i,a;if(At(o,r,{msg:"ranges-sort: [THROW_ID_02*]",schema:{progressFn:["function","false","null"]}}),o.strictlyTwoElementsInRangeArrays&&!t.every((t,e)=>2===t.length||(i=e,a=t.length,!1)))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${s(i)} range (${JSON.stringify(t[i],null,4)}) has not two but ${a} elements!`);if(!t.every((t,e)=>!(!n(t[0],{includeZero:!0})||!n(t[1],{includeZero:!0}))||(i=e,!1)))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${s(i)} range (${JSON.stringify(t[i],null,4)}) does not consist of only natural numbers!`);const c=t.length*t.length;let u=0;return Array.from(t).sort((t,e)=>(o.progressFn&&(u++,o.progressFn(Math.floor(100*u/c))),t[0]===e[0]?t[1]<e[1]?-1:t[1]>e[1]?1:0:t[0]<e[0]?-1:1))}function kt(t,e){let r;if(r=e&&"number"==typeof e?e:1,"string"==typeof t){if(0===t.length)return"";if(""===t.trim()){const e=(t.match(/\n/g)||[]).length;return e?"\n".repeat(Math.min(e,r)):" "}let e="";if(""===t[0].trim()){e=" ";let n=0;for(let e=0,r=t.length;e<r&&("\n"===t[e]&&n++,0===t[e].trim().length);e++);n&&(e="\n".repeat(Math.min(n,r)))}let n="";if(""===t.slice(-1).trim()){n=" ";let e=0;for(let r=t.length;r--&&("\n"===t[r]&&e++,0===t[r].trim().length););e&&(n="\n".repeat(Math.min(e,r)))}return e+t.trim()+n}return t}function Nt(t){return null!=t}var xt=Array.isArray,Rt=Number.isInteger;function Mt(t){return"string"==typeof t}function Pt(t){return o(t,{includeZero:!0})?parseInt(t,10):t}return function(){function i(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i);var e=Object.assign({},{limitToBeAddedWhitespace:!1,limitLinebreaksCount:1},t);this.opts=e}var a,c,u;return a=i,(c=[{key:"add",value:function(){for(var e=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(t){throw new Error("ranges-push/Ranges/add(): [THROW_ID_01] Missing ".concat(s(t)," input parameter!"))}(1),a=arguments.length>1?arguments[1]:void 0,c=arguments.length>2?arguments[2]:void 0,u=arguments.length,f=new Array(u>3?u-3:0),l=3;l<u;l++)f[l-3]=arguments[l];if(f.length>0)throw new TypeError("ranges-push/Ranges/add(): [THROW_ID_03] Please don't overload the add() method. From the 4th input argument onwards we see these redundant arguments: ".concat(JSON.stringify(f,null,4)));if(null!==i||void 0!==a||void 0!==c){var p=o(i,{includeZero:!0})?parseInt(i,10):i,h=o(a,{includeZero:!0})?parseInt(a,10):a;if(xt(i)&&!Nt(a)){var y,g;if(i.length>0){if(!i.every(function(t,e){return!!xt(t)||(y=e,g=t,!1)}))throw new TypeError("ranges-push/Ranges/add(): [THROW_ID_07] first argument was given as array but it contains not only range arrays. For example, at index ".concat(y," we have ").concat(t(g),"-type value:\n").concat(JSON.stringify(g,null,4),"."));i.forEach(function(o,i){if(!n(Pt(o[0]),{includeZero:!0}))throw new TypeError("ranges-push/Ranges/add(): [THROW_ID_06] The ".concat(s(i)," ranges array's starting range index, an element at its zero'th index, is not a natural number! It's equal to: ").concat(o[0],"."));if(!n(Pt(o[1]),{includeZero:!0}))throw new TypeError("ranges-push/Ranges/add(): [THROW_ID_05] The ".concat(s(i)," ranges array's ending range index, an element at its first index, is not a natural number! It's equal to: ").concat(o[1],"."));if(Nt(o[2])&&!Mt(o[2]))throw new TypeError("ranges-push/Ranges/add(): [THROW_ID_04] The ".concat(s(i),' ranges array\'s "to add" value is not string but ').concat(t(o[2]),"! It's equal to: ").concat(o[2],"."));e.add.apply(e,r(o))})}}else{if(!n(p,{includeZero:!0})||!n(h,{includeZero:!0}))throw n(p,{includeZero:!0})?new TypeError('ranges-push/Ranges/add(): [THROW_ID_10] "to" value, the second input argument, must be a natural number or zero! Currently it\'s of a type "'.concat(t(h),'" equal to: ').concat(JSON.stringify(h,null,4))):new TypeError('ranges-push/Ranges/add(): [THROW_ID_09] "from" value, the first input argument, must be a natural number or zero! Currently it\'s of a type "'.concat(t(p),'" equal to: ').concat(JSON.stringify(p,null,4)));if(Nt(c)&&!Mt(c))throw new TypeError("ranges-push/Ranges/add(): [THROW_ID_08] The third argument, the value to add, was given not as string but ".concat(t(c),", equal to:\n").concat(JSON.stringify(c,null,4)));if(Nt(this.slices)&&xt(this.last())&&p===this.last()[1]){if(this.last()[1]=h,null!==this.last()[2]&&Nt(c)){var d=Nt(this.last()[2])&&this.last()[2].length>0?this.last()[2]+c:c;this.opts.limitToBeAddedWhitespace&&(d=kt(d,this.opts.limitLinebreaksCount)),Mt(d)&&!d.length||(this.last()[2]=d)}}else this.slices||(this.slices=[]),this.slices.push(void 0===c||Mt(c)&&!c.length?[p,h]:[p,h,this.opts.limitToBeAddedWhitespace?kt(c,this.opts.limitLinebreaksCount):c])}}}},{key:"push",value:function(t,e,r){for(var n=arguments.length,o=new Array(n>3?n-3:0),i=3;i<n;i++)o[i-3]=arguments[i];this.add.apply(this,[t,e,r].concat(o))}},{key:"current",value:function(){var t=this;return null!=this.slices?(this.slices=function(t,e){function r(t){return"string"==typeof t}if(!Array.isArray(t))return t;const n={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};let o;if(e){if(!S(e))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(e,null,4)} (type ${typeof e})`);if((o=Object.assign({},n,e)).progressFn&&S(o.progressFn)&&!Object.keys(o.progressFn).length)o.progressFn=null;else if(o.progressFn&&"function"!=typeof o.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof o.progressFn}", equal to ${JSON.stringify(o.progressFn,null,4)}`);if(o.mergeType&&1!==o.mergeType&&2!==o.mergeType)if(r(o.mergeType)&&"1"===o.mergeType.trim())o.mergeType=1;else{if(!r(o.mergeType)||"2"!==o.mergeType.trim())throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof o.mergeType}", equal to ${JSON.stringify(o.progressFn,null,4)}`);o.mergeType=2}if("boolean"!=typeof o.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof o.joinRangesThatTouchEdges}", equal to ${JSON.stringify(o.joinRangesThatTouchEdges,null,4)}`)}else o=g(n);const i=g(t).filter(t=>void 0!==t[2]||t[0]!==t[1]);let a,s,c;const u=(a=o.progressFn?It(i,{progressFn:t=>{(c=Math.floor(t/5))!==s&&(s=c,o.progressFn(c))}}):It(i)).length-1;for(let t=u;t>0;t--)o.progressFn&&(c=Math.floor(78*(1-t/u))+21)!==s&&c>s&&(s=c,o.progressFn(c)),(a[t][0]<=a[t-1][0]||!o.joinRangesThatTouchEdges&&a[t][0]<a[t-1][1]||o.joinRangesThatTouchEdges&&a[t][0]<=a[t-1][1])&&(a[t-1][0]=Math.min(a[t][0],a[t-1][0]),a[t-1][1]=Math.max(a[t][1],a[t-1][1]),void 0!==a[t][2]&&(a[t-1][0]>=a[t][0]||a[t-1][1]<=a[t][1])&&null!==a[t-1][2]&&(null===a[t][2]&&null!==a[t-1][2]?a[t-1][2]=null:void 0!==a[t-1][2]?2===o.mergeType&&a[t-1][0]===a[t][0]?a[t-1][2]=a[t][2]:a[t-1][2]+=a[t][2]:a[t-1][2]=a[t][2]),a.splice(t,1),t=a.length);return a}(this.slices),this.opts.limitToBeAddedWhitespace?this.slices.map(function(e){return Nt(e[2])?[e[0],e[1],kt(e[2],t.opts.limitLinebreaksCount)]:e}):this.slices):null}},{key:"wipe",value:function(){this.slices=void 0}},{key:"replace",value:function(t){if(xt(t)&&t.length){if(!xt(t[0])||!Rt(t[0][0]))throw new Error("ranges-push/Ranges/replace(): [THROW_ID_11] Single range was given but we expected array of arrays! The first element, ".concat(JSON.stringify(t[0],null,4)," should be an array and its first element should be an integer, a string index."));this.slices=g(t)}else this.slices=void 0}},{key:"last",value:function(){return void 0!==this.slices&&Array.isArray(this.slices)?this.slices[this.slices.length-1]:null}}])&&e(a.prototype,c),u&&e(a,u),i}()});
