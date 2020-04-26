/**
 * string-overlap-one-on-another
 * Lay one string on top of another, with an optional offset
 * Version: 1.5.57
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/string-overlap-one-on-another
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).stringOverlapOneOnAnother=t()}(this,(function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}return function(r,o,i){if("string"!=typeof r)throw new Error("string-overlap-one-on-another: [THROW_ID_01] The first input argument must be a string but it was given as ".concat(JSON.stringify(r,null,4),', which is type "').concat(e(r),'"'));if("string"!=typeof o)throw new Error("string-overlap-one-on-another: [THROW_ID_02] The second input argument must be a string but it was given as ".concat(JSON.stringify(o,null,4),', which is type "').concat(e(o),'"'));var f,s={offset:0,offsetFillerCharacter:" "};if(i){if("object"!==e(i))throw new Error("string-overlap-one-on-another: [THROW_ID_03] The third input argument must be a plain object but it was given as ".concat(JSON.stringify(o,null,4),', which is type "').concat(e(i),'"'));if((f=function(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?n(Object(o),!0).forEach((function(n){t(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}({},s,{},i)).offset){if(!Number.isInteger(Math.abs(f.offset)))throw new Error("string-overlap-one-on-another: [THROW_ID_04] The second input argument must be a string but it was given as ".concat(JSON.stringify(o,null,4),', which is type "').concat(e(o),'"'))}else f.offset=0;f.offsetFillerCharacter||""===f.offsetFillerCharacter||(f.offsetFillerCharacter=" ")}else f=s;return 0===o.length?r:0===r.length?o:f.offset<0?o+(Math.abs(f.offset)>o.length?f.offsetFillerCharacter.repeat(Math.abs(f.offset)-o.length):"")+r.slice(o.length-Math.abs(f.offset)>0?o.length-Math.abs(f.offset):0):f.offset>0?r.slice(0,f.offset)+(f.offset>r.length?f.offsetFillerCharacter.repeat(Math.abs(f.offset)-r.length):"")+o+(r.length-f.offset-o.length>0?r.slice(r.length-f.offset-o.length+1):""):o+(r.length>o.length?r.slice(o.length):"")}}));
