/**
 * lerna-clean-changelogs
 * Cleans all the crap from Lerna and Conventional Commits-generated changelogs
 * Version: 1.3.5
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/lerna-clean-changelogs
 */

!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t=t||self).lernaCleanChangelogs=n()}(this,function(){"use strict";function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(n)}var n="1.3.5",e=(t,n)=>{if(n=Object.assign({preserveNewLines:!1},n),"string"!=typeof t)throw new TypeError(`Expected input to be of type \`string\`, got \`${typeof t}\``);if(!n.preserveNewlines)return t.split(/\r?\n/);const e=t.split(/(\r?\n)/),r=[];for(let t=0;t<e.length;t+=2)r.push(e[t]+(e[t+1]||""));return r};function r(t){return"string"==typeof t}return function(o){if(void 0===o)throw new Error("lerna-clean-changelogs: [THROW_ID_01] The first input argument is missing!");if(!r(o))throw new Error("lerna-clean-changelogs: [THROW_ID_02] The first input argument must be a string! It was given as ".concat(Array.isArray(o)?"array":t(o),", equal to:\n").concat(JSON.stringify(o,null,4)));var i,s=!1;if(o.length&&(!o.includes("\n")||!o.includes("\r"))){var f=r(o)&&o.length&&("\n"===o[o.length-1]||"\r"===o[o.length-1]);o=o.trim();var l=e(o);l.forEach(function(t,n){t.startsWith("#")&&(l[n]=t.replace(/(#+) \[?(\d+\.\d+\.\d+)\s?\]\([^)]*\)/g,"$1 $2")),n&&l[n].startsWith("# ")&&(l[n]="#".concat(l[n]))});for(var a=[],c=l.length;c--;){if(l[c].startsWith("**Note:** Version bump only")||l[c].toLowerCase().includes("wip")){for(;r(l[c-1])&&!l[c-1].trim().length&&c;)c--;for(c&&r(l[c-1])&&l[c-1].trim().startsWith("#")&&c--;r(l[c-1])&&!l[c-1].trim().length&&c;)c--}else l[c].trim().length?"*"===l[c][0]&&" "===l[c][1]?a.unshift("- ".concat(l[c].slice(2))):a.unshift(l[c]):s||(a.unshift(l[c].trim()),s=!0);l[c].trim().length&&(s=!1)}i="".concat(a.join("\n")).concat(f?"\n":"")}return{version:n,res:i||o}}});
