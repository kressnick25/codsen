/**
 * array-pull-all-with-glob
 * pullAllWithGlob - like _.pullAll but pulling stronger, with globs
 * Version: 4.12.67
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/array-pull-all-with-glob
 */

!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).arrayPullAllWithGlob=t()}(this,(function(){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(t)}function t(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}function e(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,n)}return e}function n(r){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?e(Object(o),!0).forEach((function(e){t(r,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(o,t))}))}return r}function o(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}function i(r,t){var e;if("undefined"==typeof Symbol||null==r[Symbol.iterator]){if(Array.isArray(r)||(e=function(r,t){if(r){if("string"==typeof r)return o(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?o(r,t):void 0}}(r))||t&&r&&"number"==typeof r.length){e&&(r=e);var n=0,i=function(){};return{s:i,n:function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}},e:function(r){throw r},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,l=!1;return{s:function(){e=r[Symbol.iterator]()},n:function(){var r=e.next();return u=r.done,r},e:function(r){l=!0,a=r},f:function(){try{u||null==e.return||e.return()}finally{if(l)throw a}}}}var a=new Map;function u(r,t){t=n({caseSensitive:!1},t);var e=r+JSON.stringify(t);if(a.has(e))return a.get(e);var o="!"===r[0];o&&(r=r.slice(1)),r=function(r){if("string"!=typeof r)throw new TypeError("Expected a string");return r.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}(r).replace(/\\\*/g,"[\\s\\S]*");var i=new RegExp("^".concat(r,"$"),t.caseSensitive?"":"i");return i.negated=o,a.set(e,i),i}var l=function(t,e,n){if(!Array.isArray(t)||!Array.isArray(e))throw new TypeError("Expected two arrays, got ".concat(r(t)," ").concat(r(e)));if(0===e.length)return t;var o="!"===e[0][0];e=e.map((function(r){return u(r,n)}));var a,l=[],c=i(t);try{for(c.s();!(a=c.n()).done;){var f,s=a.value,y=o,p=i(e);try{for(p.s();!(f=p.n()).done;){var g=f.value;g.test(s)&&(y=!g.negated)}}catch(r){p.e(r)}finally{p.f()}y&&l.push(s)}}catch(r){c.e(r)}finally{c.f()}return l};return l.isMatch=function(r,t,e){var n=Array.isArray(r)?r:[r],o=Array.isArray(t)?t:[t];return n.some((function(r){return o.every((function(t){var n=u(t,e),o=n.test(r);return n.negated?!o:o}))}))},function(t,e,o){function i(r){return"string"==typeof r}if(!Array.isArray(t))throw new Error("array-pull-all-with-glob: [THROW_ID_01] first argument must be an array! Currently it's ".concat(r(t),", equal to: ").concat(JSON.stringify(t,null,4)));if(!t.length)return[];if(null==e)throw new Error("array-pull-all-with-glob: [THROW_ID_02] second argument is missing!");var a,u;if("string"==typeof e){if(0===e.length)return t;a=[e]}else if(Array.isArray(e)){if(0===e.length)return t;a=Array.from(e)}else if(!Array.isArray(e))throw new Error("array-pull-all-with-glob: [THROW_ID_04] first argument must be an array! Currently it's ".concat(r(e),", equal to: ").concat(JSON.stringify(e,null,4)));if(0===t.length||0===e.length)return t;if(!t.every((function(r){return i(r)})))throw new Error("array-pull-all-with-glob: [THROW_ID_05] first argument array contains non-string elements: ".concat(JSON.stringify(t,null,4)));if(!a.every((function(r){return i(r)})))throw new Error("array-pull-all-with-glob: [THROW_ID_06] first argument array contains non-string elements: ".concat(JSON.stringify(a,null,4)));if(o&&(Array.isArray(o)||"object"!==r(o)))throw new Error("array-pull-all-with-glob: [THROW_ID_07] third argument, options object is not a plain object but ".concat(Array.isArray(o)?"array":r(o)));var c={caseSensitive:!0};return u=null===o?n({},c):n(n({},c),o),Array.from(t).filter((function(r){return!a.some((function(t){return l.isMatch(r,t,{caseSensitive:u.caseSensitive})}))}))}}));
