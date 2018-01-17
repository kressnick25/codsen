!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.slices=t()}(this,function(){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t=function(t,r){if(r){if("object"!==(void 0===r?"undefined":e(r)))throw new TypeError(String(r)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in r){if("boolean"!=typeof r.includeZero)throw new TypeError(String(r.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(r.includeZero&&0===t)return!0}}return Number.isSafeInteger(t)&&t>=1},r=function(e,t){if("string"!=typeof e)return!1;if(t&&"includeZero"in t){if("boolean"!=typeof t.includeZero)throw new TypeError(String(t.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(t.includeZero)return/^(-?0|[1-9]\d*)(\.0+)?$/.test(e)}return/^[1-9]\d*(\.0+)?$/.test(e)},n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function o(e,t){return e(t={exports:{}},t.exports),t.exports}var i=o(function(e,t){(t=e.exports=function(e){return e+t.suffix(+e)}).suffix=function(e){return 1===Math.floor(e/10)?"th":e%10==1?"st":e%10==2?"nd":e%10==3?"rd":"th"}}),a=(i.suffix,"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}),s=o(function(e,t){var r,o,i,s,u,c,l,f,y,p,h,g,d,m,b,v,w,_,S,O,j,T,k,A,E,N,I;e.exports=(r="function"==typeof Promise,o="object"===("undefined"==typeof self?"undefined":a(self))?self:n,i="undefined"!=typeof Symbol,s="undefined"!=typeof Map,u="undefined"!=typeof Set,c="undefined"!=typeof WeakMap,l="undefined"!=typeof WeakSet,f="undefined"!=typeof DataView,y=i&&void 0!==Symbol.iterator,p=i&&void 0!==Symbol.toStringTag,h=u&&"function"==typeof Set.prototype.entries,g=s&&"function"==typeof Map.prototype.entries,d=h&&Object.getPrototypeOf((new Set).entries()),m=g&&Object.getPrototypeOf((new Map).entries()),b=y&&"function"==typeof Array.prototype[Symbol.iterator],v=b&&Object.getPrototypeOf([][Symbol.iterator]()),w=y&&"function"==typeof String.prototype[Symbol.iterator],_=w&&Object.getPrototypeOf(""[Symbol.iterator]()),S=8,O=-1,j="object"===("undefined"==typeof window?"undefined":a(window)),T=j&&"object"===a(window.location),k=j&&"object"===a(window.document),A=j&&"object"===a(window.navigator),E=A&&"object"===a(window.navigator.mimeTypes),N=A&&"object"===a(window.navigator.plugins),I=j&&("function"==typeof window.HTMLElement||"object"===a(window.HTMLElement)),function(e){var t=void 0===e?"undefined":a(e);if("object"!==t)return t;if(null===e)return"null";if(e===o)return"global";if(Array.isArray(e)&&(!1===p||!(Symbol.toStringTag in e)))return"Array";if(j){if(T&&e===window.location)return"Location";if(k&&e===window.document)return"Document";if(E&&e===window.navigator.mimeTypes)return"MimeTypeArray";if(N&&e===window.navigator.plugins)return"PluginArray";if(I&&e instanceof window.HTMLElement){if("BLOCKQUOTE"===e.tagName)return"HTMLQuoteElement";if("TD"===e.tagName)return"HTMLTableDataCellElement";if("TH"===e.tagName)return"HTMLTableHeaderCellElement"}}var n=p&&e[Symbol.toStringTag];if("string"==typeof n)return n;var i=Object.getPrototypeOf(e);return i===RegExp.prototype?"RegExp":i===Date.prototype?"Date":r&&i===Promise.prototype?"Promise":u&&i===Set.prototype?"Set":s&&i===Map.prototype?"Map":l&&i===WeakSet.prototype?"WeakSet":c&&i===WeakMap.prototype?"WeakMap":f&&i===DataView.prototype?"DataView":s&&i===m?"Map Iterator":u&&i===d?"Set Iterator":b&&i===v?"Array Iterator":w&&i===_?"String Iterator":null===i?"Object":Object.prototype.toString.call(e).slice(S,O)})}),u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=1/0,l=9007199254740991,f=1.7976931348623157e308,y=NaN,p="[object Arguments]",h="[object Function]",g="[object GeneratorFunction]",d="[object String]",m="[object Symbol]",b=/^\s+|\s+$/g,v=/^[-+]0x[0-9a-f]+$/i,w=/^0b[01]+$/i,_=/^0o[0-7]+$/i,S=/^(?:0|[1-9]\d*)$/,O=parseInt;function j(e){return e!=e}function T(e,t){return function(e,t){for(var r=-1,n=e?e.length:0,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}(t,function(t){return e[t]})}var k,A,E=Object.prototype,N=E.hasOwnProperty,I=E.toString,M=E.propertyIsEnumerable,x=(k=Object.keys,A=Object,function(e){return k(A(e))}),H=Math.max;function W(e,t){var r,n,o=C(e)||K(n=r=e)&&R(n)&&N.call(r,"callee")&&(!M.call(r,"callee")||I.call(r)==p)?function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}(e.length,String):[],i=o.length,a=!!i;for(var s in e)!t&&!N.call(e,s)||a&&("length"==s||P(s,i))||o.push(s);return o}function D(e){if(r=(t=e)&&t.constructor,n="function"==typeof r&&r.prototype||E,t!==n)return x(e);var t,r,n,o=[];for(var i in Object(e))N.call(e,i)&&"constructor"!=i&&o.push(i);return o}function P(e,t){return!!(t=null==t?l:t)&&("number"==typeof e||S.test(e))&&e>-1&&e%1==0&&e<t}var C=Array.isArray;function R(e){return null!=e&&("number"==typeof(n=e.length)&&n>-1&&n%1==0&&n<=l)&&!((r=V(t=e)?I.call(t):"")==h||r==g);var t,r,n}function V(e){var t=void 0===e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function K(e){return!!e&&"object"==(void 0===e?"undefined":u(e))}var Z=function(e,t,r,n){var o,i,a,s;e=R(e)?e:(o=e)?T(o,R(i=o)?W(i):D(i)):[],r=r&&!n?(a=function(e){if(!e)return 0===e?e:0;if((e=function(e){if("number"==typeof e)return e;if("symbol"==(void 0===(t=e)?"undefined":u(t))||K(t)&&I.call(t)==m)return y;var t;if(V(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=V(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(b,"");var n=w.test(e);return n||_.test(e)?O(e.slice(2),n?2:8):v.test(e)?y:+e}(e))===c||e===-c){var t=e<0?-1:1;return t*f}return e==e?e:0}(r),s=a%1,a==a?s?a-s:a:0):0;var l,p=e.length;return r<0&&(r=H(p+r,0)),"string"==typeof(l=e)||!C(l)&&K(l)&&I.call(l)==d?r<=p&&e.indexOf(t,r)>-1:!!p&&function(e,t,r){if(t!=t)return function(e,t,r,n){for(var o=e.length,i=r+(n?1:-1);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1}(e,j,r);for(var n=r-1,o=e.length;++n<o;)if(e[n]===t)return n;return-1}(e,t,r)>-1};function J(e,t,r){if(t!=t)return function(e,t,r,n){for(var o=e.length,i=r+(n?1:-1);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1}(e,$,r);for(var n=r-1,o=e.length;++n<o;)if(e[n]===t)return n;return-1}function L(e,t,r,n){for(var o=r-1,i=e.length;++o<i;)if(n(e[o],t))return o;return-1}function $(e){return e!=e}var B=Array.prototype.splice;function q(e,t,r,n){var o,i=n?L:J,a=-1,s=t.length,u=e;for(e===t&&(t=function(e,t){var r=-1,n=e.length;t||(t=Array(n));for(;++r<n;)t[r]=e[r];return t}(t)),r&&(u=function(e,t){for(var r=-1,n=e?e.length:0,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}(e,(o=r,function(e){return o(e)})));++a<s;)for(var c=0,l=t[a],f=r?r(l):l;(c=i(u,f,c,n))>-1;)u!==e&&B.call(u,c,1),B.call(e,c,1);return e}var F=function(e,t){return e&&e.length&&t&&t.length?q(e,t):e},G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Q="__lodash_hash_undefined__",z=9007199254740991,U="[object Function]",X="[object GeneratorFunction]",Y=/^\[object .+?Constructor\]$/,ee="object"==G(n)&&n&&n.Object===Object&&n,te="object"==("undefined"==typeof self?"undefined":G(self))&&self&&self.Object===Object&&self,re=ee||te||Function("return this")();function ne(e,t){return!!(e?e.length:0)&&function(e,t,r){if(t!=t)return function(e,t,r,n){var o=e.length,i=r+(n?1:-1);for(;n?i--:++i<o;)if(t(e[i],i,e))return i;return-1}(e,ae,r);var n=r-1,o=e.length;for(;++n<o;)if(e[n]===t)return n;return-1}(e,t,0)>-1}function oe(e,t,r){for(var n=-1,o=e?e.length:0;++n<o;)if(r(t,e[n]))return!0;return!1}function ie(e,t){for(var r=-1,n=e?e.length:0,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}function ae(e){return e!=e}function se(e){return function(t){return e(t)}}function ue(e,t){return e.has(t)}var ce,le,fe,ye=Array.prototype,pe=Function.prototype,he=Object.prototype,ge=re["__core-js_shared__"],de=(ce=/[^.]+$/.exec(ge&&ge.keys&&ge.keys.IE_PROTO||""))?"Symbol(src)_1."+ce:"",me=pe.toString,be=he.hasOwnProperty,ve=he.toString,we=RegExp("^"+me.call(be).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),_e=ye.splice,Se=Math.max,Oe=Math.min,je=We(re,"Map"),Te=We(Object,"create");function ke(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Ae(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Ee(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Ne(e){var t=-1,r=e?e.length:0;for(this.__data__=new Ee;++t<r;)this.add(e[t])}function Ie(e,t){for(var r,n,o=e.length;o--;)if((r=e[o][0])===(n=t)||r!=r&&n!=n)return o;return-1}function Me(e){return!(!Pe(e)||de&&de in e)&&(De(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e)?we:Y).test(function(e){if(null!=e){try{return me.call(e)}catch(e){}try{return e+""}catch(e){}}return""}(e))}function xe(e){return(o=t=e)&&"object"==(void 0===o?"undefined":G(o))&&(null!=(r=t)&&("number"==typeof(n=r.length)&&n>-1&&n%1==0&&n<=z)&&!De(r))?e:[];var t,r,n,o}function He(e,t){var r,n,o=e.__data__;return("string"==(n=void 0===(r=t)?"undefined":G(r))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof t?"string":"hash"]:o.map}function We(e,t){var r,n=null==(r=e)?void 0:r[t];return Me(n)?n:void 0}function De(e){var t=Pe(e)?ve.call(e):"";return t==U||t==X}function Pe(e){var t=void 0===e?"undefined":G(e);return!!e&&("object"==t||"function"==t)}ke.prototype.clear=function(){this.__data__=Te?Te(null):{}},ke.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},ke.prototype.get=function(e){var t=this.__data__;if(Te){var r=t[e];return r===Q?void 0:r}return be.call(t,e)?t[e]:void 0},ke.prototype.has=function(e){var t=this.__data__;return Te?void 0!==t[e]:be.call(t,e)},ke.prototype.set=function(e,t){return this.__data__[e]=Te&&void 0===t?Q:t,this},Ae.prototype.clear=function(){this.__data__=[]},Ae.prototype.delete=function(e){var t=this.__data__,r=Ie(t,e);return!(r<0||(r==t.length-1?t.pop():_e.call(t,r,1),0))},Ae.prototype.get=function(e){var t=this.__data__,r=Ie(t,e);return r<0?void 0:t[r][1]},Ae.prototype.has=function(e){return Ie(this.__data__,e)>-1},Ae.prototype.set=function(e,t){var r=this.__data__,n=Ie(r,e);return n<0?r.push([e,t]):r[n][1]=t,this},Ee.prototype.clear=function(){this.__data__={hash:new ke,map:new(je||Ae),string:new ke}},Ee.prototype.delete=function(e){return He(this,e).delete(e)},Ee.prototype.get=function(e){return He(this,e).get(e)},Ee.prototype.has=function(e){return He(this,e).has(e)},Ee.prototype.set=function(e,t){return He(this,e).set(e,t),this},Ne.prototype.add=Ne.prototype.push=function(e){return this.__data__.set(e,Q),this},Ne.prototype.has=function(e){return this.__data__.has(e)};var Ce=(le=function(e){var t=ie(e,xe);return t.length&&t[0]===e[0]?function(e,t,r){for(var n=r?oe:ne,o=e[0].length,i=e.length,a=i,s=Array(i),u=1/0,c=[];a--;){var l=e[a];a&&t&&(l=ie(l,se(t))),u=Oe(l.length,u),s[a]=!r&&(t||o>=120&&l.length>=120)?new Ne(a&&l):void 0}l=e[0];var f=-1,y=s[0];e:for(;++f<o&&c.length<u;){var p=l[f],h=t?t(p):p;if(p=r||0!==p?p:0,!(y?ue(y,h):n(c,h,r))){for(a=i;--a;){var g=s[a];if(!(g?ue(g,h):n(e[a],h,r)))continue e}y&&y.push(h),c.push(p)}}return c}(t):[]},fe=Se(void 0===fe?le.length-1:fe,0),function(){for(var e=arguments,t=-1,r=Se(e.length-fe,0),n=Array(r);++t<r;)n[t]=e[fe+t];t=-1;for(var o=Array(fe+1);++t<fe;)o[t]=e[t];return o[fe]=n,function(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}(le,this,o)});function Re(e){return"string"==typeof e?e.length>0?[e]:[]:e}function Ve(e,t,r){function n(e){return null!=e}function o(e){return"boolean"===s(e)}function i(e){return"string"===s(e)}function a(e){return"Object"===s(e)}var u=["any","anything","every","everything","all","whatever","whatevs"],c=Array.isArray;if(0===arguments.length)throw new Error("check-types-mini/checkTypes(): Missing all arguments!");if(1===arguments.length)throw new Error("check-types-mini/checkTypes(): Missing second argument!");var l=a(t)?t:{},f={ignoreKeys:[],acceptArrays:!1,acceptArraysIgnore:[],enforceStrictKeyset:!0,schema:{},msg:"check-types-mini/checkTypes()",optsVarName:"opts"},y=void 0;if(!i((y=n(r)&&a(r)?Object.assign({},f,r):Object.assign({},f)).msg))throw new Error("check-types-mini/checkTypes(): opts.msg must be string! Currently it's: "+s(y.msg)+", equal to "+JSON.stringify(y.msg,null,4));if(y.msg=y.msg.trim(),":"===y.msg[y.msg.length-1]&&(y.msg=y.msg.slice(0,y.msg.length-1)),!i(y.optsVarName))throw new Error("check-types-mini/checkTypes(): opts.optsVarName must be string! Currently it's: "+s(y.optsVarName)+", equal to "+JSON.stringify(y.optsVarName,null,4));if(y.ignoreKeys=Re(y.ignoreKeys),y.acceptArraysIgnore=Re(y.acceptArraysIgnore),!c(y.ignoreKeys))throw new TypeError("check-types-mini/checkTypes(): opts.ignoreKeys should be an array, currently it's: "+s(y.ignoreKeys));if(!o(y.acceptArrays))throw new TypeError("check-types-mini/checkTypes(): opts.acceptArrays should be a Boolean, currently it's: "+s(y.acceptArrays));if(!c(y.acceptArraysIgnore))throw new TypeError("check-types-mini/checkTypes(): opts.acceptArraysIgnore should be an array, currently it's: "+s(y.acceptArraysIgnore));if(!o(y.enforceStrictKeyset))throw new TypeError("check-types-mini/checkTypes(): opts.enforceStrictKeyset should be a Boolean, currently it's: "+s(y.enforceStrictKeyset));if(Object.keys(y.schema).forEach(function(e){c(y.schema[e])||(y.schema[e]=[y.schema[e]]),y.schema[e]=y.schema[e].map(String).map(function(e){return e.toLowerCase()}).map(function(e){return e.trim()})}),y.enforceStrictKeyset)if(n(y.schema)&&Object.keys(y.schema).length>0){if(0!==F(Object.keys(e),Object.keys(l).concat(Object.keys(y.schema))).length)throw new TypeError(y.msg+": "+y.optsVarName+".enforceStrictKeyset is on and the following keys are not covered by schema and/or reference objects: "+JSON.stringify(F(Object.keys(e),Object.keys(l).concat(Object.keys(y.schema))),null,4))}else{if(!(n(l)&&Object.keys(l).length>0))throw new TypeError(y.msg+": Both "+y.optsVarName+".schema and reference objects are missing! We don't have anything to match the keys as you requested via opts.enforceStrictKeyset!");if(0!==F(Object.keys(e),Object.keys(l)).length)throw new TypeError(y.msg+": The input object has keys that are not covered by reference object: "+JSON.stringify(F(Object.keys(e),Object.keys(l)),null,4));if(0!==F(Object.keys(l),Object.keys(e)).length)throw new TypeError(y.msg+": The reference object has keys that are not present in the input object: "+JSON.stringify(F(Object.keys(l),Object.keys(e)),null,4))}Object.keys(e).forEach(function(t){if(n(y.schema)&&Object.prototype.hasOwnProperty.call(y.schema,t)){if(y.schema[t]=Re(y.schema[t]).map(String).map(function(e){return e.toLowerCase()}),!Ce(y.schema[t],u).length&&!Z(y.schema[t],s(e[t]).toLowerCase())){if(!c(e[t])||!y.acceptArrays)throw new TypeError(y.msg+": "+y.optsVarName+"."+t+" was customised to "+JSON.stringify(e[t],null,4)+" which is not among the allowed types in schema ("+y.schema[t]+") but "+s(e[t]));for(var r=0,o=e[t].length;r<o;r++)if(!Z(y.schema[t],s(e[t][r]).toLowerCase()))throw new TypeError(y.msg+": "+y.optsVarName+"."+t+" is of type "+s(e[t][r]).toLowerCase()+", but only the following are allowed in "+y.optsVarName+".schema: "+y.schema[t])}}else if(n(l)&&Object.prototype.hasOwnProperty.call(l,t)&&s(e[t])!==s(l[t])&&!Z(y.ignoreKeys,t)){if(!y.acceptArrays||!c(e[t])||Z(y.acceptArraysIgnore,t))throw new TypeError(y.msg+": "+y.optsVarName+"."+t+" was customised to "+JSON.stringify(e[t],null,4)+" which is not "+s(l[t])+" but "+s(e[t]));if(!e[t].every(function(e){return s(e)===s(l[t])}))throw new TypeError(y.msg+": "+y.optsVarName+"."+t+" was customised to be array, but not all of its elements are "+s(l[t])+"-type")}})}var Ke="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ze="function"==typeof Symbol&&"symbol"===Ke(Symbol.iterator)?function(e){return void 0===e?"undefined":Ke(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":Ke(e)},Je=Array.isArray;function Le(e){if(!Array.isArray(e))return e;for(var r=function(e,r){if(!Je(e))throw new TypeError("ranges-sort: [THROW_ID_01] Input must be an array, consisting of range arrays! Currently its type is: "+(void 0===e?"undefined":Ze(e))+", equal to: "+JSON.stringify(e,null,4));if(0===e.length)return e;var n={strictlyTwoElementsInRangeArrays:!1},o=Object.assign({},n,r);Ve(o,n,{msg:"ranges-sort: [THROW_ID_02*]"});var a=void 0,s=void 0;if(o.strictlyTwoElementsInRangeArrays&&!e.every(function(e,t){return 2===e.length||(a=t,s=e.length,!1)}))throw new TypeError("ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, "+i(a)+" range ("+JSON.stringify(e[a],null,4)+") has not two but "+s+" elements!");if(!e.every(function(e,r){return!(!t(e[0],{includeZero:!0})||!t(e[1],{includeZero:!0}))||(a=r,!1)}))throw new TypeError("ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, "+i(a)+" range ("+JSON.stringify(e[a],null,4)+") does not consist of only natural numbers!");return Array.from(e).sort(function(e,t){return e[0]===t[0]?e[1]<t[1]?-1:e[1]>t[1]?1:0:e[0]<t[0]?-1:1})}(e),n=r.length-1;n>0;n--)(r[n][0]<=r[n-1][0]||r[n][0]<=r[n-1][1])&&(r[n-1][0]=Math.min(r[n][0],r[n-1][0]),r[n-1][1]=Math.max(r[n][1],r[n-1][1]),void 0!==r[n][2]&&(r[n-1][0]>=r[n][0]||r[n-1][1]<=r[n][1])&&null!==r[n-1][2]&&(null===r[n][2]&&null!==r[n-1][2]?r[n-1][2]=null:void 0!==r[n-1][2]?r[n-1][2]+=r[n][2]:r[n-1][2]=r[n][2]),r.splice(n,1),n=r.length);return r}var $e=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();function Be(e){return null!=e}function qe(e){throw new Error("string-slices-array-push/Slices/add(): [THROW_ID_01] Missing "+e+i(e)+" parameter!")}return function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var r={limitToBeAddedWhitespace:!1},n=Object.assign({},r,t);Ve(n,r,{msg:"string-slices-array-push: [THROW_ID_00*]"}),this.opts=n}return $e(e,[{key:"add",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qe(1),n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:qe(2),o=arguments[2],i=r(e)?parseInt(e,10):e,a=r(n)?parseInt(n,10):n;if(!t(i,{includeZero:!0}))throw new TypeError('string-slices-array-push/Slices/add(): [THROW_ID_02] "from" value, first input argument, must be a natural number or zero! Currently it\'s equal to: '+JSON.stringify(i,null,4));if(!t(a,{includeZero:!0}))throw new TypeError('string-slices-array-push/Slices/add(): [THROW_ID_03] "to" value, second input argument, must be a natural number! Currently it\'s equal to: '+JSON.stringify(a,null,4));if(Be(o)&&"string"!=typeof o&&null!==o)throw new TypeError('string-slices-array-push/Slices/add(): [THROW_ID_04] "addVal" value, third input argument, must be a string (or null)! Currently it\'s equal to: '+JSON.stringify(o,null,4));for(var s=arguments.length,u=Array(s>3?s-3:0),c=3;c<s;c++)u[c-3]=arguments[c];if(u.length>0)throw new TypeError("string-slices-array-push/Slices/add(): [THROW_ID_05] Please don't overload the add() method. From the 4th input argument onwards we see these redundant arguments: "+JSON.stringify(u,null,4));void 0!==this.slices&&i===this.last()[1]?(this.last()[1]=a,null!==this.last()[2]&&Be(o)&&(this.last()[2]=Be(this.last()[2])&&this.last()[2].length>0?this.last()[2]+o:o)):(this.slices||(this.slices=[]),this.slices.push(void 0!==o?[i,a,o]:[i,a]))}},{key:"push",value:function(e,t,r){for(var n=arguments.length,o=Array(n>3?n-3:0),i=3;i<n;i++)o[i-3]=arguments[i];this.add.apply(this,[e,t,r].concat(o))}},{key:"current",value:function(){return null!=this.slices?(this.slices=Le(this.slices),this.opts.limitToBeAddedWhitespace?this.slices.map(function(e){return Be(e[2])&&e[2].length>0&&""===e[2].trim()?e[2].includes("\n")||e[2].includes("\r")?[e[0],e[1],"\n"]:[e[0],e[1]," "]:e}):this.slices):null}},{key:"wipe",value:function(){this.slices=void 0}},{key:"last",value:function(){return void 0!==this.slices&&Array.isArray(this.slices)?this.slices[this.slices.length-1]:null}}]),e}()});
