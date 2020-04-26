/**
 * email-all-chars-within-ascii
 * Scans all characters within a string and checks are they within ASCII range
 * Version: 2.9.59
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/email-all-chars-within-ascii
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).emailAllCharsWithinAscii=e()}(this,(function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function n(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}var o,r,i=Function.prototype,c=Object.prototype,a=i.toString,l=c.hasOwnProperty,u=a.call(Object),f=c.toString,s=(o=Object.getPrototypeOf,r=Object,function(t){return o(r(t))});var y=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||"[object Object]"!=f.call(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=s(t);if(null===e)return!0;var n=l.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&a.call(n)==u};return function(o,r){if("string"!=typeof o)throw new Error("email-all-chars-within-ascii/within(): [THROW_ID_01] The input is not string but ".concat(t(o),", equal to: ").concat(JSON.stringify(o,null,4)));if(null!=r&&!y(r))throw new Error("email-all-chars-within-ascii/within(): [THROW_ID_02] The opts is not a plain object but ".concat(t(r),", equal to:\n").concat(JSON.stringify(r,null,4)));for(var i=function(t){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?n(Object(r),!0).forEach((function(n){e(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},{messageOnly:!1,checkLineLength:!0},{},r),c=0,a=0,l=o.length;a<l;a++){if(c+=1,o[a].codePointAt(0)>126||o[a].codePointAt(0)<9||11===o[a].codePointAt(0)||12===o[a].codePointAt(0)||o[a].codePointAt(0)>13&&o[a].codePointAt(0)<32)throw new Error("".concat(i.messageOnly?"":"email-all-chars-within-ascii: ","Non ascii character found at index ").concat(a,", equal to: ").concat(JSON.stringify(o[a],null,4),", its decimal code point is ").concat(o[a].codePointAt(0),"."));if(c>997&&i.checkLineLength)throw new Error("".concat(i.messageOnly?"":"email-all-chars-within-ascii: ","Line length is beyond 999 characters!"));"\r"!==o[a]&&"\n"!==o[a]||(c=0)}}}));
