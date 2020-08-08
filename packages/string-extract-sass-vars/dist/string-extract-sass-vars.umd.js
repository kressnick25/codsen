/**
 * string-extract-sass-vars
 * Parse SASS variables file into a plain object of CSS key-value pairs
 * Version: 1.2.3
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/string-extract-sass-vars
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).stringExtractSassVars=e()}(this,(function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function n(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function r(t){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?n(Object(o),!0).forEach((function(n){e(t,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}return function(e,n){if("string"!=typeof e)return{};if(n&&"object"!==t(n))throw new Error("string-extract-sass-vars: [THROW_ID_01] the second input argument should be a plain object but it was given as ".concat(JSON.stringify(n,null,4)," (type ").concat(t(n),")"));var o=r(r({},{throwIfEmpty:!1,cb:null}),n);if(o.cb&&"function"!=typeof o.cb)throw new Error("string-extract-sass-vars: [THROW_ID_02] opts.cb should be function! But it was given as ".concat(JSON.stringify(n,null,4)," (type ").concat(t(n),")"));for(var l=e.length,c=null,i=null,u=null,s=null,f=null,a=null,b=!1,p=!1,y=!1,g={},O=0;O<l;O++)!b&&f&&e[O]===f&&"\\"!==e[O-1]?f=null:f||b||"\\"===e[O-1]||!"'\"".includes(e[O])||(f=e[O]),p&&"\r\n".includes(e[O])&&(p=!1),b||"/"!==e[O]||"/"!==e[O+1]||(p=!0),y&&"*"===e[O-2]&&"/"===e[O-1]&&(y=!1),b||"/"!==e[O]||"*"!==e[O+1]||(y=!0),(b=p||y)||"$"!==e[O]||null!==c||(c=O+1),b||null===i||f||";"!==e[O]||(s=e.slice("\"'".includes(e[i])?i+1:i,a+1),/^-?\d*\.?\d*$/.test(s)&&(s=+s),g[u]=o.cb?o.cb(s):s,c=null,i=null,u=null,s=null),!b&&null!==u&&e[O]&&e[O].trim().length&&null===i&&(i=O),b||u||null===c||":"!==e[O]||f||(u=e.slice(c,O)),"'\"".includes(e[O])||(a=O);if(!Object.keys(g).length&&o.throwIfEmpty)throw new Error("string-extract-sass-vars: [THROW_ID_03] no keys extracted! (setting opts.originalOpts)");return g}}));
