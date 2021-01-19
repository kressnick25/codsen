/**
 * ranges-invert
 * Invert string index ranges
 * Version: 3.0.2
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/ranges-invert/
 */

import{rMerge as r}from"ranges-merge";import{rCrop as e}from"ranges-crop";const n="3.0.2";function t(n,t,s){if(!Array.isArray(n)&&null!==n)throw new TypeError(`ranges-invert: [THROW_ID_01] Input's first argument must be an array, consisting of range arrays! Currently its type is: ${typeof n}, equal to: ${JSON.stringify(n,null,4)}`);if(!Number.isInteger(t)||t<0)throw new TypeError(`ranges-invert: [THROW_ID_02] Input's second argument must be a natural number or zero (coming from String.length)! Currently its type is: ${typeof t}, equal to: ${JSON.stringify(t,null,4)}`);if(Array.isArray(n)&&"number"==typeof n[0]&&"number"==typeof n[1])throw new TypeError(`ranges-invert: [THROW_ID_07] The first argument should be AN ARRAY OF RANGES, not a single range! Currently arrOfRanges = ${JSON.stringify(n,null,0)}!`);if(!Array.isArray(n)||!n.filter((r=>Array.isArray(r)&&r[0]!==r[1])).length||!t)return t?[[0,t]]:null;const i={strictlyTwoElementsInRangeArrays:!1,skipChecks:!1,...s};let a,o,l=0;if(!i.skipChecks&&i.strictlyTwoElementsInRangeArrays&&!n.filter((r=>r)).every(((r,e)=>2===r.length||(l=e,a=r.length,!1))))throw new TypeError(`ranges-invert: [THROW_ID_04] Because opts.strictlyTwoElementsInRangeArrays was enabled, all ranges must be strictly two-element-long. However, the ${l}th range (${JSON.stringify(n[l],null,0)}) has not two but ${a} elements!`);if(!i.skipChecks&&!n.every(((r,e)=>!(!Number.isInteger(r[0])||r[0]<0||!Number.isInteger(r[1])||r[1]<0)||(l=e,!1))))throw new TypeError(`ranges-invert: [THROW_ID_05] The first argument should be AN ARRAY OF ARRAYS! Each sub-array means string slice indexes. In our case, here ${l+1}th range (${JSON.stringify(n[l],null,0)}) does not consist of only natural numbers!`);o=i.skipChecks?n.filter((r=>r[0]!==r[1])):r(n.filter((r=>r[0]!==r[1])));const g=o.reduce(((r,e,n,s)=>{const a=[];0===n&&0!==s[0][0]&&a.push([0,s[0][0]]);const o=n<s.length-1?s[n+1][0]:t;if(e[1]!==o){if(i.skipChecks&&e[1]>o)throw new TypeError(`ranges-invert: [THROW_ID_08] The checking (opts.skipChecks) is off and input ranges were not sorted! We nearly wrote range [${e[1]}, ${o}] which is backwards. For investigation, whole ranges array is:\n${JSON.stringify(s,null,0)}`);a.push([e[1],o])}return r.concat(a)}),[]);return e(g,t)}export{t as rInvert,n as version};