/**
 * ranges-apply
 * Take an array of string index ranges, delete/replace the string according to them
 * Version: 4.0.2
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/ranges-apply/
 */

import{rMerge as r}from"ranges-merge";const e="4.0.2";function t(e,t,n){let i,s=0,a=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if("string"!=typeof e)throw new TypeError(`ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(t&&!Array.isArray(t))throw new TypeError(`ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ${typeof t}, equal to: ${JSON.stringify(t,null,4)}`);if(n&&"function"!=typeof n)throw new TypeError(`ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: ${typeof n}, equal to: ${JSON.stringify(n,null,4)}`);if(!t||!t.filter((r=>r)).length)return e;i=Array.isArray(t)&&Number.isInteger(t[0])&&Number.isInteger(t[1])?[Array.from(t)]:Array.from(t);const o=i.length;let l=0;i.filter((r=>r)).forEach(((r,e)=>{if(n&&(s=Math.floor(l/o*10),s!==a&&(a=s,n(s))),!Array.isArray(r))throw new TypeError(`ranges-apply: [THROW_ID_05] ranges array, second input arg., has ${e}th element not an array: ${JSON.stringify(r,null,4)}, which is ${typeof r}`);if(!Number.isInteger(r[0])){if(!Number.isInteger(+r[0])||+r[0]<0)throw new TypeError(`ranges-apply: [THROW_ID_06] ranges array, second input arg. has ${e}th element, array ${JSON.stringify(r,null,0)}. Its first element is not an integer, string index, but ${typeof r[0]}, equal to: ${JSON.stringify(r[0],null,4)}.`);i[e][0]=+i[e][0]}if(!Number.isInteger(r[1])){if(!Number.isInteger(+r[1])||+r[1]<0)throw new TypeError(`ranges-apply: [THROW_ID_07] ranges array, second input arg. has ${e}th element, array ${JSON.stringify(r,null,0)}. Its second element is not an integer, string index, but ${typeof r[1]}, equal to: ${JSON.stringify(r[1],null,4)}.`);i[e][1]=+i[e][1]}l+=1}));const y=r(i,{progressFn:r=>{n&&(s=10+Math.floor(r/10),s!==a&&(a=s,n(s)))}}),u=y.length;if(u>0){const r=e.slice(y[u-1][1]);e=y.reduce(((r,t,i,o)=>{n&&(s=20+Math.floor(i/u*80),s!==a&&(a=s,n(s)));return r+e.slice(0===i?0:o[i-1][1],o[i][0])+(o[i][2]||"")}),""),e+=r}return e}export{t as rApply,e as version};