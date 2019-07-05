/**
 * generate-atomic-css
 * Generate Atomic CSS
 * Version: 1.0.1
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/generate-atomic-css
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).generateAtomicCss={})}(this,function(t){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var n="[object Object]";var r,o,i=Function.prototype,c=Object.prototype,u=i.toString,a=c.hasOwnProperty,l=u.call(Object),f=c.toString,s=(r=Object.getPrototypeOf,o=Object,function(t){return r(o(t))});var h=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||f.call(t)!=n||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=s(t);if(null===e)return!0;var r=a.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&u.call(r)==l},d="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};!function(t,e){t(e={exports:{}},e.exports)}(function(t,e){var n=200,r="__lodash_hash_undefined__",o=9007199254740991,i="[object Arguments]",c="[object Boolean]",u="[object Date]",a="[object Function]",l="[object GeneratorFunction]",f="[object Map]",s="[object Number]",h="[object Object]",p="[object RegExp]",g="[object Set]",v="[object String]",y="[object Symbol]",_="[object ArrayBuffer]",b="[object DataView]",O="[object Float32Array]",m="[object Float64Array]",j="[object Int8Array]",w="[object Int16Array]",x="[object Int32Array]",A="[object Uint8Array]",T="[object Uint8ClampedArray]",E="[object Uint16Array]",C="[object Uint32Array]",S=/\w*$/,$=/^\[object .+?Constructor\]$/,N=/^(?:0|[1-9]\d*)$/,I={};I[i]=I["[object Array]"]=I[_]=I[b]=I[c]=I[u]=I[O]=I[m]=I[j]=I[w]=I[x]=I[f]=I[s]=I[h]=I[p]=I[g]=I[v]=I[y]=I[A]=I[T]=I[E]=I[C]=!0,I["[object Error]"]=I[a]=I["[object WeakMap]"]=!1;var F="object"==typeof d&&d&&d.Object===Object&&d,P="object"==typeof self&&self&&self.Object===Object&&self,R=F||P||Function("return this")(),W=e&&!e.nodeType&&e,D=W&&t&&!t.nodeType&&t,H=D&&D.exports===W;function M(t,e){return t.set(e[0],e[1]),t}function G(t,e){return t.add(e),t}function L(t,e,n,r){var o=-1,i=t?t.length:0;for(r&&i&&(n=t[++o]);++o<i;)n=e(n,t[o],o,t);return n}function k(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function B(t){var e=-1,n=Array(t.size);return t.forEach(function(t,r){n[++e]=[r,t]}),n}function U(t,e){return function(n){return t(e(n))}}function z(t){var e=-1,n=Array(t.size);return t.forEach(function(t){n[++e]=t}),n}var V,J=Array.prototype,q=Function.prototype,K=Object.prototype,Q=R["__core-js_shared__"],X=(V=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+V:"",Y=q.toString,Z=K.hasOwnProperty,tt=K.toString,et=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),nt=H?R.Buffer:void 0,rt=R.Symbol,ot=R.Uint8Array,it=U(Object.getPrototypeOf,Object),ct=Object.create,ut=K.propertyIsEnumerable,at=J.splice,lt=Object.getOwnPropertySymbols,ft=nt?nt.isBuffer:void 0,st=U(Object.keys,Object),ht=Dt(R,"DataView"),dt=Dt(R,"Map"),pt=Dt(R,"Promise"),gt=Dt(R,"Set"),vt=Dt(R,"WeakMap"),yt=Dt(Object,"create"),_t=kt(ht),bt=kt(dt),Ot=kt(pt),mt=kt(gt),jt=kt(vt),wt=rt?rt.prototype:void 0,xt=wt?wt.valueOf:void 0;function At(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Tt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Et(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Ct(t){this.__data__=new Tt(t)}function St(t,e){var n=Ut(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&zt(t)}(t)&&Z.call(t,"callee")&&(!ut.call(t,"callee")||tt.call(t)==i)}(t)?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],r=n.length,o=!!r;for(var c in t)!e&&!Z.call(t,c)||o&&("length"==c||Gt(c,r))||n.push(c);return n}function $t(t,e,n){var r=t[e];Z.call(t,e)&&Bt(r,n)&&(void 0!==n||e in t)||(t[e]=n)}function Nt(t,e){for(var n=t.length;n--;)if(Bt(t[n][0],e))return n;return-1}function It(t,e,n,r,o,d,$){var N;if(r&&(N=d?r(t,o,d,$):r(t)),void 0!==N)return N;if(!qt(t))return t;var F=Ut(t);if(F){if(N=function(t){var e=t.length,n=t.constructor(e);e&&"string"==typeof t[0]&&Z.call(t,"index")&&(n.index=t.index,n.input=t.input);return n}(t),!e)return function(t,e){var n=-1,r=t.length;e||(e=Array(r));for(;++n<r;)e[n]=t[n];return e}(t,N)}else{var P=Mt(t),R=P==a||P==l;if(Vt(t))return function(t,e){if(e)return t.slice();var n=new t.constructor(t.length);return t.copy(n),n}(t,e);if(P==h||P==i||R&&!d){if(k(t))return d?t:{};if(N=function(t){return"function"!=typeof t.constructor||Lt(t)?{}:(e=it(t),qt(e)?ct(e):{});var e}(R?{}:t),!e)return function(t,e){return Rt(t,Ht(t),e)}(t,function(t,e){return t&&Rt(e,Kt(e),t)}(N,t))}else{if(!I[P])return d?t:{};N=function(t,e,n,r){var o=t.constructor;switch(e){case _:return Pt(t);case c:case u:return new o(+t);case b:return function(t,e){var n=e?Pt(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}(t,r);case O:case m:case j:case w:case x:case A:case T:case E:case C:return function(t,e){var n=e?Pt(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}(t,r);case f:return function(t,e,n){return L(e?n(B(t),!0):B(t),M,new t.constructor)}(t,r,n);case s:case v:return new o(t);case p:return(l=new(a=t).constructor(a.source,S.exec(a))).lastIndex=a.lastIndex,l;case g:return function(t,e,n){return L(e?n(z(t),!0):z(t),G,new t.constructor)}(t,r,n);case y:return i=t,xt?Object(xt.call(i)):{}}var i;var a,l}(t,P,It,e)}}$||($=new Ct);var W=$.get(t);if(W)return W;if($.set(t,N),!F)var D=n?function(t){return function(t,e,n){var r=e(t);return Ut(t)?r:function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}(r,n(t))}(t,Kt,Ht)}(t):Kt(t);return function(t,e){for(var n=-1,r=t?t.length:0;++n<r&&!1!==e(t[n],n,t););}(D||t,function(o,i){D&&(o=t[i=o]),$t(N,i,It(o,e,n,r,i,t,$))}),N}function Ft(t){return!(!qt(t)||function(t){return!!X&&X in t}(t))&&(Jt(t)||k(t)?et:$).test(kt(t))}function Pt(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function Rt(t,e,n,r){n||(n={});for(var o=-1,i=e.length;++o<i;){var c=e[o],u=r?r(n[c],t[c],c,n,t):void 0;$t(n,c,void 0===u?t[c]:u)}return n}function Wt(t,e){var n,r,o=t.__data__;return("string"==(r=typeof(n=e))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?o["string"==typeof e?"string":"hash"]:o.map}function Dt(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return Ft(n)?n:void 0}At.prototype.clear=function(){this.__data__=yt?yt(null):{}},At.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},At.prototype.get=function(t){var e=this.__data__;if(yt){var n=e[t];return n===r?void 0:n}return Z.call(e,t)?e[t]:void 0},At.prototype.has=function(t){var e=this.__data__;return yt?void 0!==e[t]:Z.call(e,t)},At.prototype.set=function(t,e){return this.__data__[t]=yt&&void 0===e?r:e,this},Tt.prototype.clear=function(){this.__data__=[]},Tt.prototype.delete=function(t){var e=this.__data__,n=Nt(e,t);return!(n<0||(n==e.length-1?e.pop():at.call(e,n,1),0))},Tt.prototype.get=function(t){var e=this.__data__,n=Nt(e,t);return n<0?void 0:e[n][1]},Tt.prototype.has=function(t){return Nt(this.__data__,t)>-1},Tt.prototype.set=function(t,e){var n=this.__data__,r=Nt(n,t);return r<0?n.push([t,e]):n[r][1]=e,this},Et.prototype.clear=function(){this.__data__={hash:new At,map:new(dt||Tt),string:new At}},Et.prototype.delete=function(t){return Wt(this,t).delete(t)},Et.prototype.get=function(t){return Wt(this,t).get(t)},Et.prototype.has=function(t){return Wt(this,t).has(t)},Et.prototype.set=function(t,e){return Wt(this,t).set(t,e),this},Ct.prototype.clear=function(){this.__data__=new Tt},Ct.prototype.delete=function(t){return this.__data__.delete(t)},Ct.prototype.get=function(t){return this.__data__.get(t)},Ct.prototype.has=function(t){return this.__data__.has(t)},Ct.prototype.set=function(t,e){var r=this.__data__;if(r instanceof Tt){var o=r.__data__;if(!dt||o.length<n-1)return o.push([t,e]),this;r=this.__data__=new Et(o)}return r.set(t,e),this};var Ht=lt?U(lt,Object):function(){return[]},Mt=function(t){return tt.call(t)};function Gt(t,e){return!!(e=null==e?o:e)&&("number"==typeof t||N.test(t))&&t>-1&&t%1==0&&t<e}function Lt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||K)}function kt(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Bt(t,e){return t===e||t!=t&&e!=e}(ht&&Mt(new ht(new ArrayBuffer(1)))!=b||dt&&Mt(new dt)!=f||pt&&"[object Promise]"!=Mt(pt.resolve())||gt&&Mt(new gt)!=g||vt&&"[object WeakMap]"!=Mt(new vt))&&(Mt=function(t){var e=tt.call(t),n=e==h?t.constructor:void 0,r=n?kt(n):void 0;if(r)switch(r){case _t:return b;case bt:return f;case Ot:return"[object Promise]";case mt:return g;case jt:return"[object WeakMap]"}return e});var Ut=Array.isArray;function zt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=o}(t.length)&&!Jt(t)}var Vt=ft||function(){return!1};function Jt(t){var e=qt(t)?tt.call(t):"";return e==a||e==l}function qt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Kt(t){return zt(t)?St(t):function(t){if(!Lt(t))return st(t);var e=[];for(var n in Object(t))Z.call(t,n)&&"constructor"!=n&&e.push(n);return e}(t)}t.exports=function(t){return It(t,!0,!0)}});function p(t){const e={value:t,hungry:!1,optional:!1};return(e.value.endsWith("?*")||e.value.endsWith("*?"))&&e.value.length>2?(e.value=e.value.slice(0,e.value.length-2),e.optional=!0,e.hungry=!0):e.value.endsWith("?")&&e.value.length>1?(e.value=e.value.slice(0,e.value.length-1),e.optional=!0):e.value.endsWith("*")&&e.value.length>1&&(e.value=e.value.slice(0,e.value.length-1),e.hungry=!0),e}function g(t,e){if("string"!=typeof t||!t.length)return null;if(e&&"number"==typeof e||(e=0),!t[e+1])return null;if(t[e+1]&&t[e+1].trim().length)return e+1;if(t[e+2]&&t[e+2].trim().length)return e+2;for(let n=e+1,r=t.length;n<r;n++)if(t[n].trim().length)return n;return null}function v(t,e){if("string"!=typeof t||!t.length)return null;if(e&&"number"==typeof e||(e=0),e<1)return null;if(t[e-1]&&t[e-1].trim().length)return e-1;if(t[e-2]&&t[e-2].trim().length)return e-2;for(let n=e;n--;)if(t[n]&&t[n].trim().length)return n;return null}function y(t,e,n,r,o){if("string"!=typeof e||!e.length)return null;if(n&&"number"==typeof n||(n=0),"right"===t&&!e[n+1]||"left"===t&&!e[n-1])return null;let i=n;const c=[];let u,a,l,f=0;for(;f<o.length;){if("string"!=typeof o[f]||!o[f].length){f++;continue}const{value:n,optional:s,hungry:h}=p(o[f]),d="right"===t?g(e,i):v(e,i);if(!(r.i&&e[d].toLowerCase()===n.toLowerCase()||!r.i&&e[d]===n)){if(s){f++;continue}if(l){f++,l=void 0;continue}return null}{const o="right"===t?g(e,d):v(e,d);h&&(r.i&&e[o].toLowerCase()===n.toLowerCase()||!r.i&&e[o]===n)?l=!0:f++,"right"===t&&d>i+1?c.push([i+1,d]):"left"===t&&d<i-1&&c.unshift([d+1,i]),i=d,"right"===t?(void 0===u&&(u=d),a=d):(void 0===a&&(a=d),u=d)}}return void 0===u?null:{gaps:c,leftmostChar:u,rightmostChar:a}}function _(t,e,...n){if(!n.length)return v(t,e);const r={i:!1};let o;return y("left",t,e,o=h(n[0])?Object.assign({},r,n.shift()):r,Array.from(n).reverse())}function b(t,e,...n){if(!n.length)return g(t,e);const r={i:!1};let o;return y("right",t,e,o=h(n[0])?Object.assign({},r,n.shift()):r,n)}var O=(t,e)=>{if(e=Object.assign({preserveNewLines:!1},e),"string"!=typeof t)throw new TypeError(`Expected input to be of type \`string\`, got \`${typeof t}\``);if(!e.preserveNewlines)return t.split(/\r?\n/);const n=t.split(/(\r?\n)/),r=[];for(let t=0;t<n.length;t+=2)r.push(n[t]+(n[t+1]||""));return r},m=Array.isArray;function j(t){return"string"==typeof t}function w(t,e,n,r){var o=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],i=arguments.length>5?arguments[5]:void 0,c=arguments.length>6?arguments[6]:void 0;return function(t){if(arguments.length>1&&void 0!==arguments[1]&&!arguments[1])return t;var e=Array.from(t);if(e.length&&j(e[0])&&!e[0].trim().length)do{e.shift()}while(!e[0].trim().length);if(e.length&&j(e[e.length-1])&&!e[e.length-1].trim().length)do{e.pop()}while(!e[e.length-1].trim().length);return e}(O(t).map(function(t,o,u){return t.includes("$$$")?function(t,e,n,r,o,i){var c,u=0,a=t.split("|").filter(function(t){return t.length}),l=0,f=500;a[1]&&(a[2]?(l=Number.parseInt(a[1].trim()),f=Number.parseInt(a[2].trim())):f=Number.parseInt(a[1].trim()));for(var s="",h=r-n,d=function(t){o.count++;var r=a[0],d=/(\$\$\$(px|em|%|rem|cm|mm|in|pt|pc|ex|ch|vw|vmin|vmax))/g,p=/(px|em|%|rem|cm|mm|in|pt|pc|ex|ch|vw|vmin|vmax)/g,g=/\$\$\$/g;if(i){var v=r.match(d);m(v)&&v.length&&v.forEach(function(e){r=r.replace(e,"".concat(t).concat(0===t?"":p.exec(e)[0]).padStart(e.length-3+String(f).length))}),s+="".concat(t===l?"":"\n").concat(r.replace(/\$\$\$(?=[{ ])/g,"".concat(t).padEnd(String(f).length)).replace(g,t)).trimEnd()}else s+=0===t?"".concat(t===l?"":"\n").concat(r.replace(d,t).replace(g,t).trimEnd()):"".concat(t===l?"":"\n").concat(r.replace(g,t).trimEnd());"function"==typeof e&&(c=Math.floor(n+t/(f-l)*h))!==u&&(u=c,e(c))},p=l;p<=f;p++)d(p);return s}(t,e,n+(r-n)/u.length*o,n+(r-n)/u.length*(o+1),i,c):t}),o).join("\n")}var x={CONFIGHEAD:"GENERATE-ATOMIC-CSS-CONFIG-STARTS",CONFIGTAIL:"GENERATE-ATOMIC-CSS-CONFIG-ENDS",CONTENTHEAD:"GENERATE-ATOMIC-CSS-CONTENT-STARTS",CONTENTTAIL:"GENERATE-ATOMIC-CSS-CONTENT-ENDS"};t.genAtomic=function(t,n){if("string"!=typeof t)throw new Error('generate-atomic-css: [THROW_ID_01] First input argument must be a string! It was given as "'.concat(JSON.stringify(t,null,4),'" (type ').concat(e(t),")"));var r=x.CONFIGHEAD,o=x.CONFIGTAIL,i=x.CONTENTHEAD,c=x.CONTENTTAIL,u={count:0},a=Object.assign({},{includeConfig:!0,includeHeadsAndTails:!0,pad:!0,configOverride:null,reportProgressFunc:null,reportProgressFuncFrom:0,reportProgressFuncTo:100},n);if(a.includeConfig&&!a.includeHeadsAndTails&&(a.includeHeadsAndTails=!0),!a.configOverride&&!t.includes("$$$")&&!t.includes(r)&&!t.includes(o)&&!t.includes(i)&&!t.includes(c)||j(a.configOverride)&&!a.configOverride.includes("$$$")&&!a.configOverride.includes(r)&&!a.configOverride.includes(o)&&!a.configOverride.includes(i)&&!a.configOverride.includes(c))return{log:{count:0},result:t};var l,f="",s="",h="",d="";if(a.configOverride)l=a.configOverride;else if(t.includes(r)&&t.includes(o)){if(-1!==t.indexOf(o)&&-1!==t.indexOf(i)&&t.indexOf(o)>t.indexOf(i))throw new Error("generate-atomic-css: [THROW_ID_02] Config heads are after config tails!");var p=t.indexOf(r)+r.length,y=t.indexOf(o);if("*"===t[g(t,p)]&&"/"===t[g(t,g(t,p))]&&(p=g(t,g(t,p))+1),"*"===t[v(t,y)]&&"/"===t[v(t,v(t,y))]&&(y=v(t,v(t,y))),!j(l=t.slice(p,y).trim())||!l.trim().length)return{log:{count:0},result:""}}else if(t.includes(r)&&!t.includes(o)&&t.includes(i)){if(t.indexOf(r)>t.indexOf(i))throw new Error("generate-atomic-css: [THROW_ID_03] Config heads are after content heads!");l=t.slice(t.indexOf(r)+r.length,t.indexOf(i))}else if(t.includes(r)||t.includes(o)||!t.includes(i)&&!t.includes(c)){for(var O=new RegExp("(\\/\\s*\\*\\s*)*".concat(i,"(\\s*\\*\\s*\\/)*")),m=new RegExp("(\\/\\s*\\*\\s*)*".concat(c,"(\\s*\\*\\s*\\/)*")),A=!1,T=[],E=[],C=t.split("\n").filter(function(t){return!!A||(t.includes("$$$")?(A=!0,!0):(T.push(t),!1))}),S=C.length;S--&&!C[S].includes("$$$");)E.unshift(C.pop());l=C.join("\n").replace(O,"").replace(m,""),T.length&&(h="".concat(T.join("\n"),"\n")),E.length&&(d="\n".concat(E.join("\n")))}else if((l=t).includes(i)){if(v(t,l.indexOf(i))){var $=l.indexOf(i);_(t,$,"/","*")&&($=_(t,$,"/","*").leftmostChar),h=0===$?"":t.slice(0,$)}var N=l.indexOf(i)+i.length;b(l,N-1,"*","/")&&(N=b(l,N-1,"*","/").rightmostChar+1);var I=null;if(t.includes(c)){I=t.indexOf(c),"*"===t[v(t,I)]&&"/"===t[v(t,v(t,I))]&&(I=v(t,v(t,I)));var F=t.indexOf(c)+c.length;"*"===t[g(t,F-1)]&&"/"===t[g(t,g(t,F-1))]&&(F=g(t,g(t,F-1))+1),g(t,F)&&(d=t.slice(F))}l=I?l.slice(N,I).trim():l.slice(N).trim()}else if(l.includes(c)){var P,R=[],W=!1,D=(l=l.split("\n").filter(function(t){return t.includes("$$$")||W?!!W||(W=!0,!0):(W||R.push(t),!1)}).join("\n")).indexOf(c);_(l,D,"/","*")&&(D=_(l,D,"/","*").leftmostChar),l=l.slice(0,D).trim(),R.length&&(h="".concat(R.join("\n"),"\n")),g(t,t.indexOf(c)+c.length)&&(P=t.indexOf(c)+c.length,"*"===t[g(t,P)]&&"/"===t[g(t,g(t,P))]&&(P=g(t,g(t,P))+1,g(t,P)&&(d=t.slice(P))))}if(!j(l)||!l.trim().length)return{log:{count:0},result:""};if((a.includeConfig||a.includeHeadsAndTails)&&(f="".concat(i," */\n"),a.includeConfig||(f="/* ".concat(f)),s="\n/* ".concat(c," */")),a.includeConfig&&(f="/* ".concat(r,"\n").concat(l.trim(),"\n").concat(o,"\n").concat(f)),t.includes(r)&&v(t,t.indexOf(r))){var H=t.indexOf(r);"*"===t[v(t,H)]&&"/"===t[v(t,v(t,H))]&&(H=v(t,v(t,H))),f="".concat(t.slice(0,H)).concat("/"===t[g(t,H-1)]&&"*"===t[g(t,g(t,H-1))]?"":"/* ").concat(f)}if(t.includes(o)&&g(t,t.indexOf(o)+o.length)){var M=t.indexOf(o)+o.length;if("*"===t[g(t,t.indexOf(o)+o.length)]&&"/"===t[g(t,g(t,t.indexOf(o)+o.length))]&&(M=g(t,g(t,t.indexOf(o)+o.length))+1),t.slice(g(t,M-1)).startsWith(i)){var G=g(t,M);"*"===t[g(t,(M=G+i.length)-1)]&&"/"===t[g(t,g(t,M-1))]&&(M=g(t,g(t,M-1))+1),t.includes(c)&&(M=t.indexOf(c)+c.length,"*"===t[g(t,M)]&&"/"===t[g(t,g(t,M))]&&(M=g(t,g(t,M))+1))}s="".concat(s).concat(t[M]&&g(t,M-1)?t.slice(M):"")}if(j(h)&&(f="".concat(h).concat(f)),j(d)){if(d.trim().endsWith("/*")&&!d.trim().startsWith("*/")){var L="";j(d)&&d[0]&&!d[0].trim().length&&(L=d.slice(0,g(d,0))),d="".concat(L,"/* ").concat(d.trim())}s="".concat(s).concat(d)}var k="".concat(function(t){return a.includeConfig||a.includeHeadsAndTails?t.trim():t}("".concat(f).concat(w(l,a.reportProgressFunc,a.reportProgressFuncFrom,a.reportProgressFuncTo,!0,u,a.pad)).concat(s)),"\n");return{log:{count:u.count},result:k}},t.headsAndTails=x,t.version="1.0.1",Object.defineProperty(t,"__esModule",{value:!0})});
