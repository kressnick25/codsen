/**
 * ranges-merge
 * Merge and sort string index ranges
 * Version: 6.2.0
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/ranges-merge/
 */

import{rSort as e}from"ranges-sort";const r="6.2.0",n={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};function o(r,o){function s(e){return e&&"object"==typeof e&&!Array.isArray(e)}if(!Array.isArray(r)||!r.length)return null;let t;if(o){if(!s(o))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(o,null,4)} (type ${typeof o})`);if(t={...n,...o},t.progressFn&&s(t.progressFn)&&!Object.keys(t.progressFn).length)t.progressFn=null;else if(t.progressFn&&"function"!=typeof t.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof t.progressFn}", equal to ${JSON.stringify(t.progressFn,null,4)}`);if(t.mergeType&&1!=+t.mergeType&&2!=+t.mergeType)throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof t.mergeType}", equal to ${JSON.stringify(t.mergeType,null,4)}`);if("boolean"!=typeof t.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof t.joinRangesThatTouchEdges}", equal to ${JSON.stringify(t.joinRangesThatTouchEdges,null,4)}`)}else t={...n};const g=r.filter((e=>e)).map((e=>[...e])).filter((e=>void 0!==e[2]||e[0]!==e[1]));let a,l,i;if(a=t.progressFn?e(g,{progressFn:e=>{i=Math.floor(e/5),i!==l&&(l=i,t.progressFn(i))}}):e(g),!a)return null;const p=a.length-1;for(let e=p;e>0;e--)t.progressFn&&(i=Math.floor(78*(1-e/p))+21,i!==l&&i>l&&(l=i,t.progressFn(i))),(a[e][0]<=a[e-1][0]||!t.joinRangesThatTouchEdges&&a[e][0]<a[e-1][1]||t.joinRangesThatTouchEdges&&a[e][0]<=a[e-1][1])&&(a[e-1][0]=Math.min(a[e][0],a[e-1][0]),a[e-1][1]=Math.max(a[e][1],a[e-1][1]),void 0!==a[e][2]&&(a[e-1][0]>=a[e][0]||a[e-1][1]<=a[e][1])&&null!==a[e-1][2]&&(null===a[e][2]&&null!==a[e-1][2]?a[e-1][2]=null:null!=a[e-1][2]?2==+t.mergeType&&a[e-1][0]===a[e][0]?a[e-1][2]=a[e][2]:a[e-1][2]+=a[e][2]:a[e-1][2]=a[e][2]),a.splice(e,1),e=a.length);return a.length?a:null}export{n as defaults,o as rMerge,r as version};