/**
 * helga
 * Your next best friend when editing complex nested code
 * Version: 1.1.35
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/helga
 */

!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).helga={})}(this,(function(e){"use strict";function r(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function t(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function n(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?t(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}var o,i,u,f;
/*! http://mths.be/fromcodepoint v0.2.1 by @mathias */
String.fromCodePoint||(o=function(){try{var e={},r=Object.defineProperty,t=r(e,e,e)&&r}catch(e){}return t}(),i=String.fromCharCode,u=Math.floor,f=function(e){var r,t,n=16384,o=[],f=-1,a=arguments.length;if(!a)return"";for(var c="";++f<a;){var l=Number(arguments[f]);if(!isFinite(l)||l<0||l>1114111||u(l)!=l)throw RangeError("Invalid code point: "+l);l<=65535?o.push(l):(r=55296+((l-=65536)>>10),t=l%1024+56320,o.push(r,t)),(f+1==a||o.length>n)&&(c+=i.apply(null,o),o.length=0)}return c},o?o(String,"fromCodePoint",{value:f,configurable:!0,writable:!0}):String.fromCodePoint=f);var a=function(e,r,t){return e(t={path:r,exports:{},require:function(e,r){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==r&&t.path)}},t.exports),t.exports}((function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var t=/\\(u\{([0-9A-Fa-f]+)\}|u([0-9A-Fa-f]{4})|x([0-9A-Fa-f]{2})|([1-7][0-7]{0,2}|[0-7]{2,3})|(['"tbrnfv0\\]))|\\U([0-9A-Fa-f]{8})/g,n={0:"\0",b:"\b",f:"\f",n:"\n",r:"\r",t:"\t",v:"\v","'":"'",'"':'"',"\\":"\\"},o=function(e){return String.fromCodePoint(parseInt(e,16))};r.default=function(e){return e.replace(t,(function(e,r,t,i,u,f,a,c){return void 0!==t?o(t):void 0!==i?o(i):void 0!==u?o(u):void 0!==f?(l=f,String.fromCodePoint(parseInt(l,8))):void 0!==c?o(c):n[a];var l}))},e.exports=r.default})),c={targetJSON:!1};e.defaults=c,e.helga=function(e,r){var t=n(n({},c),r),o=a(e),i=a(e);return t.targetJSON&&(i=(i=JSON.stringify(i.replace(/\t/g,"  "),null,0)).slice(1,i.length-1)),{minified:i,beautified:o}},e.version="1.1.35",Object.defineProperty(e,"__esModule",{value:!0})}));
