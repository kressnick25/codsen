/**
 * ranges-regex
 * Perform a regex search on string and get a ranges array of findings (or null)
 * Version: 2.0.50
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/ranges-regex
 */

!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e=e||self).rangesRegex=r()}(this,(function(){"use strict";function e(r){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(r)}function r(e,r){if(!Array.isArray(e))throw new TypeError(`ranges-sort: [THROW_ID_01] Input must be an array, consisting of range arrays! Currently its type is: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(0===e.length)return e;const n={strictlyTwoElementsInRangeArrays:!1,progressFn:null,...r};let t,o;if(n.strictlyTwoElementsInRangeArrays&&!e.every((e,r)=>2===e.length||(t=r,o=e.length,!1)))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${t}th range (${JSON.stringify(e[t],null,4)}) has not two but ${o} elements!`);if(!e.every((e,r)=>!(!Number.isInteger(e[0])||e[0]<0||!Number.isInteger(e[1])||e[1]<0)||(t=r,!1)))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${t}th range (${JSON.stringify(e[t],null,4)}) does not consist of only natural numbers!`);const s=e.length*e.length;let i=0;return Array.from(e).sort((e,r)=>(n.progressFn&&(i+=1,n.progressFn(Math.floor(100*i/s))),e[0]===r[0]?e[1]<r[1]?-1:e[1]>r[1]?1:0:e[0]<r[0]?-1:1))}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var t=function(e,r){return e(r={exports:{}},r.exports),r.exports}((function(e,r){var t="object"==typeof n&&n&&n.Object===Object&&n,o=r&&!r.nodeType&&r,s=o&&e&&!e.nodeType&&e,i=s&&s.exports===o&&t.process,g=function(){try{return i&&i.binding("util")}catch(e){}}(),a=g&&g.isRegExp;var u=Object.prototype.toString;var l,f=a?(l=a,function(e){return l(e)}):function(e){return function(e){var r=typeof e;return!!e&&("object"==r||"function"==r)}(e)&&"[object RegExp]"==u.call(e)};e.exports=f}));return function(n,o,s){if(void 0===n)throw new TypeError("ranges-regex: [THROW_ID_01] The first input's argument must be a regex object! Currently it is missing!");if(!t(n))throw new TypeError("ranges-regex: [THROW_ID_02] The first input's argument must be a regex object! Currently its type is: ".concat(e(n),", equal to: ").concat(JSON.stringify(n,null,4)));if("string"!=typeof o)throw new TypeError("ranges-regex: [THROW_ID_03] The second input's argument must be a string! Currently its type is: ".concat(e(o),", equal to: ").concat(JSON.stringify(o,null,4)));if(null!=s&&"string"!=typeof s)throw new TypeError("ranges-regex: [THROW_ID_04] The third input's argument must be a string or null! Currently its type is: ".concat(e(s),", equal to: ").concat(JSON.stringify(s,null,4)));if(0===o.length)return null;var i,g=[];if(null===s||"string"==typeof s&&s.length>0)for(;null!==(i=n.exec(o));)g.push([n.lastIndex-i[0].length,n.lastIndex,s]);else for(;null!==(i=n.exec(o));)g.push([n.lastIndex-i[0].length,n.lastIndex]);return g.length?function(e,n){function t(e){return"string"==typeof e}function o(e){return e&&"object"==typeof e&&!Array.isArray(e)}if(!Array.isArray(e))return e;const s={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};let i;if(n){if(!o(n))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(n,null,4)} (type ${typeof n})`);if(i={...s,...n},i.progressFn&&o(i.progressFn)&&!Object.keys(i.progressFn).length)i.progressFn=null;else if(i.progressFn&&"function"!=typeof i.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof i.progressFn}", equal to ${JSON.stringify(i.progressFn,null,4)}`);if(i.mergeType&&1!==i.mergeType&&2!==i.mergeType)if(t(i.mergeType)&&"1"===i.mergeType.trim())i.mergeType=1;else{if(!t(i.mergeType)||"2"!==i.mergeType.trim())throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof i.mergeType}", equal to ${JSON.stringify(i.mergeType,null,4)}`);i.mergeType=2}if("boolean"!=typeof i.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof i.joinRangesThatTouchEdges}", equal to ${JSON.stringify(i.joinRangesThatTouchEdges,null,4)}`)}else i={...s};const g=e.map(e=>[...e]).filter(e=>void 0!==e[2]||e[0]!==e[1]);let a,u,l;a=i.progressFn?r(g,{progressFn:e=>{l=Math.floor(e/5),l!==u&&(u=l,i.progressFn(l))}}):r(g);const f=a.length-1;for(let e=f;e>0;e--)i.progressFn&&(l=Math.floor(78*(1-e/f))+21,l!==u&&l>u&&(u=l,i.progressFn(l))),(a[e][0]<=a[e-1][0]||!i.joinRangesThatTouchEdges&&a[e][0]<a[e-1][1]||i.joinRangesThatTouchEdges&&a[e][0]<=a[e-1][1])&&(a[e-1][0]=Math.min(a[e][0],a[e-1][0]),a[e-1][1]=Math.max(a[e][1],a[e-1][1]),void 0!==a[e][2]&&(a[e-1][0]>=a[e][0]||a[e-1][1]<=a[e][1])&&null!==a[e-1][2]&&(null===a[e][2]&&null!==a[e-1][2]?a[e-1][2]=null:void 0!==a[e-1][2]?2===i.mergeType&&a[e-1][0]===a[e][0]?a[e-1][2]=a[e][2]:a[e-1][2]+=a[e][2]:a[e-1][2]=a[e][2]),a.splice(e,1),e=a.length);return a}(g):null}}));
