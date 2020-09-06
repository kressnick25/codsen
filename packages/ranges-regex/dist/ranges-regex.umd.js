/**
 * ranges-regex
 * Integrate regex operations into Ranges workflow
 * Version: 2.0.57
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/ranges-regex/
 */

!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).rangesRegex=r()}(this,(function(){"use strict";function e(r){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(r)}function r(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function n(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function t(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function o(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"==typeof e)return i(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function s(e,r){if(!Array.isArray(e)||!e.length)return e;var n,o,i=t(t({},{strictlyTwoElementsInRangeArrays:!1,progressFn:null}),r);if(i.strictlyTwoElementsInRangeArrays&&!e.filter((function(e){return e})).every((function(e,r){return 2===e.length||(n=r,o=e.length,!1)})))throw new TypeError("ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ".concat(n,"th range (").concat(JSON.stringify(e[n],null,4),") has not two but ").concat(o," elements!"));if(!e.filter((function(e){return e})).every((function(e,r){return!(!Number.isInteger(e[0])||e[0]<0||!Number.isInteger(e[1])||e[1]<0)||(n=r,!1)})))throw new TypeError("ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ".concat(n,"th range (").concat(JSON.stringify(e[n],null,4),") does not consist of only natural numbers!"));var s=Math.pow(e.filter((function(e){return e})).length,2),u=0;return Array.from(e).filter((function(e){return e})).sort((function(e,r){return i.progressFn&&(u+=1,i.progressFn(Math.floor(100*u/s))),e[0]===r[0]?e[1]<r[1]?-1:e[1]>r[1]?1:0:e[0]<r[0]?-1:1}))}var u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var a=function(e,r,n){return e(n={path:r,exports:{},require:function(e,r){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==r&&n.path)}},n.exports),n.exports}((function(r,n){var t="object"==e(u)&&u&&u.Object===Object&&u,o=n&&!n.nodeType&&n,i=o&&r&&!r.nodeType&&r,s=i&&i.exports===o&&t.process,a=function(){try{return s&&s.binding("util")}catch(e){}}(),l=a&&a.isRegExp;var c=Object.prototype.toString;var f,g=l?(f=l,function(e){return f(e)}):function(r){return function(r){var n=e(r);return!!r&&("object"==n||"function"==n)}(r)&&"[object RegExp]"==c.call(r)};r.exports=g}));return function(r,n,i){if(void 0===r)throw new TypeError("ranges-regex: [THROW_ID_01] The first input's argument must be a regex object! Currently it is missing!");if(!a(r))throw new TypeError("ranges-regex: [THROW_ID_02] The first input's argument must be a regex object! Currently its type is: ".concat(e(r),", equal to: ").concat(JSON.stringify(r,null,4)));if("string"!=typeof n)throw new TypeError("ranges-regex: [THROW_ID_03] The second input's argument must be a string! Currently its type is: ".concat(e(n),", equal to: ").concat(JSON.stringify(n,null,4)));if(i&&"string"!=typeof i)throw new TypeError("ranges-regex: [THROW_ID_04] The third input's argument must be a string or null! Currently its type is: ".concat(e(i),", equal to: ").concat(JSON.stringify(i,null,4)));if(!n.length)return null;var u,l=[];if(null===i||"string"==typeof i&&i.length)for(;null!==(u=r.exec(n));)l.push([r.lastIndex-u[0].length,r.lastIndex,i]);else for(;null!==(u=r.exec(n));)l.push([r.lastIndex-u[0].length,r.lastIndex]);return l.length?function(r,n){function i(e){return"string"==typeof e}function u(r){return r&&"object"===e(r)&&!Array.isArray(r)}if(!Array.isArray(r)||!r.length)return null;var a,l={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};if(n){if(!u(n))throw new Error("emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n".concat(JSON.stringify(n,null,4)," (type ").concat(e(n),")"));if((a=t(t({},l),n)).progressFn&&u(a.progressFn)&&!Object.keys(a.progressFn).length)a.progressFn=null;else if(a.progressFn&&"function"!=typeof a.progressFn)throw new Error('ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "'.concat(e(a.progressFn),'", equal to ').concat(JSON.stringify(a.progressFn,null,4)));if(a.mergeType&&1!==a.mergeType&&2!==a.mergeType)if(i(a.mergeType)&&"1"===a.mergeType.trim())a.mergeType=1;else{if(!i(a.mergeType)||"2"!==a.mergeType.trim())throw new Error('ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "'.concat(e(a.mergeType),'", equal to ').concat(JSON.stringify(a.mergeType,null,4)));a.mergeType=2}if("boolean"!=typeof a.joinRangesThatTouchEdges)throw new Error('ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "'.concat(e(a.joinRangesThatTouchEdges),'", equal to ').concat(JSON.stringify(a.joinRangesThatTouchEdges,null,4)))}else a=t({},l);for(var c,f,g,p=r.filter((function(e){return e})).map((function(e){return o(e)})).filter((function(e){return void 0!==e[2]||e[0]!==e[1]})),y=(c=a.progressFn?s(p,{progressFn:function(e){(g=Math.floor(e/5))!==f&&(f=g,a.progressFn(g))}}):s(p)).length-1,h=y;h>0;h--)a.progressFn&&(g=Math.floor(78*(1-h/y))+21)!==f&&g>f&&(f=g,a.progressFn(g)),(c[h][0]<=c[h-1][0]||!a.joinRangesThatTouchEdges&&c[h][0]<c[h-1][1]||a.joinRangesThatTouchEdges&&c[h][0]<=c[h-1][1])&&(c[h-1][0]=Math.min(c[h][0],c[h-1][0]),c[h-1][1]=Math.max(c[h][1],c[h-1][1]),void 0!==c[h][2]&&(c[h-1][0]>=c[h][0]||c[h-1][1]<=c[h][1])&&null!==c[h-1][2]&&(null===c[h][2]&&null!==c[h-1][2]?c[h-1][2]=null:void 0!==c[h-1][2]?2===a.mergeType&&c[h-1][0]===c[h][0]?c[h-1][2]=c[h][2]:c[h-1][2]+=c[h][2]:c[h-1][2]=c[h][2]),c.splice(h,1),h=c.length);return c.length?c:null}(l):null}}));
