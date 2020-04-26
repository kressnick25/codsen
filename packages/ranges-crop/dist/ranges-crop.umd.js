/**
 * ranges-crop
 * Crop array of ranges when they go beyond the reference string's length
 * Version: 2.0.51
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/ranges-crop
 */

!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e=e||self).rangesCrop=r()}(this,(function(){"use strict";function e(r){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(r)}function r(e,r){if(!Array.isArray(e))throw new TypeError(`ranges-sort: [THROW_ID_01] Input must be an array, consisting of range arrays! Currently its type is: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(0===e.length)return e;const n={strictlyTwoElementsInRangeArrays:!1,progressFn:null,...r};let t,o;if(n.strictlyTwoElementsInRangeArrays&&!e.every((e,r)=>2===e.length||(t=r,o=e.length,!1)))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${t}th range (${JSON.stringify(e[t],null,4)}) has not two but ${o} elements!`);if(!e.every((e,r)=>!(!Number.isInteger(e[0])||e[0]<0||!Number.isInteger(e[1])||e[1]<0)||(t=r,!1)))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${t}th range (${JSON.stringify(e[t],null,4)}) does not consist of only natural numbers!`);const s=e.length*e.length;let a=0;return Array.from(e).sort((e,r)=>(n.progressFn&&(a+=1,n.progressFn(Math.floor(100*a/s))),e[0]===r[0]?e[1]<r[1]?-1:e[1]>r[1]?1:0:e[0]<r[0]?-1:1))}var n=Array.isArray;return function(t,o){if(!n(t))throw new TypeError("ranges-crop: [THROW_ID_01] The first input's argument must be an array, consisting of range arrays! Currently its type is: ".concat(e(t),", equal to: ").concat(JSON.stringify(t,null,4)));if(!Number.isInteger(o))throw new TypeError("ranges-crop: [THROW_ID_02] The second input's argument must be a natural number or zero (coming from String.length)! Currently its type is: ".concat(e(o),", equal to: ").concat(JSON.stringify(o,null,4)));if(0===t.length)return t;var s;if(!t.every((function(e,r){return!(!Number.isInteger(e[0])||!Number.isInteger(e[1]))||(s=r,!1)}))){if(Array.isArray(t)&&"number"==typeof t[0]&&"number"==typeof t[1])throw new TypeError("ranges-crop: [THROW_ID_03] The first argument should be AN ARRAY OF RANGES, not a single range! Currently arrOfRanges = ".concat(JSON.stringify(t,null,0),"!"));throw new TypeError("ranges-crop: [THROW_ID_04] The first argument should be AN ARRAY OF ARRAYS! Each sub-array means string slice indexes. In our case, here ".concat(s+1,"th range (").concat(JSON.stringify(t[s],null,0),") does not consist of only natural numbers!"))}if(!t.every((function(e,r){return null==e[2]||"string"==typeof e[2]||(s=r,!1)})))throw new TypeError("ranges-crop: [THROW_ID_05] The third argument, if present at all, should be of a string-type or null. Currently the ".concat(s,"th range ").concat(JSON.stringify(t[s],null,0)," has a argument in the range of a type ").concat(e(t[s][2])));return function(e,n){function t(e){return"string"==typeof e}function o(e){return e&&"object"==typeof e&&!Array.isArray(e)}if(!Array.isArray(e))return e;const s={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};let a;if(n){if(!o(n))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(n,null,4)} (type ${typeof n})`);if(a={...s,...n},a.progressFn&&o(a.progressFn)&&!Object.keys(a.progressFn).length)a.progressFn=null;else if(a.progressFn&&"function"!=typeof a.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof a.progressFn}", equal to ${JSON.stringify(a.progressFn,null,4)}`);if(a.mergeType&&1!==a.mergeType&&2!==a.mergeType)if(t(a.mergeType)&&"1"===a.mergeType.trim())a.mergeType=1;else{if(!t(a.mergeType)||"2"!==a.mergeType.trim())throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof a.mergeType}", equal to ${JSON.stringify(a.mergeType,null,4)}`);a.mergeType=2}if("boolean"!=typeof a.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof a.joinRangesThatTouchEdges}", equal to ${JSON.stringify(a.joinRangesThatTouchEdges,null,4)}`)}else a={...s};const i=e.map(e=>[...e]).filter(e=>void 0!==e[2]||e[0]!==e[1]);let g,u,l;g=a.progressFn?r(i,{progressFn:e=>{l=Math.floor(e/5),l!==u&&(u=l,a.progressFn(l))}}):r(i);const y=g.length-1;for(let e=y;e>0;e--)a.progressFn&&(l=Math.floor(78*(1-e/y))+21,l!==u&&l>u&&(u=l,a.progressFn(l))),(g[e][0]<=g[e-1][0]||!a.joinRangesThatTouchEdges&&g[e][0]<g[e-1][1]||a.joinRangesThatTouchEdges&&g[e][0]<=g[e-1][1])&&(g[e-1][0]=Math.min(g[e][0],g[e-1][0]),g[e-1][1]=Math.max(g[e][1],g[e-1][1]),void 0!==g[e][2]&&(g[e-1][0]>=g[e][0]||g[e-1][1]<=g[e][1])&&null!==g[e-1][2]&&(null===g[e][2]&&null!==g[e-1][2]?g[e-1][2]=null:void 0!==g[e-1][2]?2===a.mergeType&&g[e-1][0]===g[e][0]?g[e-1][2]=g[e][2]:g[e-1][2]+=g[e][2]:g[e-1][2]=g[e][2]),g.splice(e,1),e=g.length);return g}(t).filter((function(e){return e[0]<=o&&(void 0!==e[2]||e[0]<o)})).map((function(e){return e[1]>o?void 0!==e[2]?[e[0],o,e[2]]:[e[0],o]:e}))}}));
