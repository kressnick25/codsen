/**
 * string-process-comma-separated
 * Extracts chunks from possibly comma or whatever-separated string
 * Version: 1.2.1
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/string-process-comma-separated
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).stringProcessCommaSeparated=t()}(this,(function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}return function(t,r){if("string"!=typeof t)throw new Error("string-process-comma-separated: [THROW_ID_01] input must be string! It was given as ".concat(e(t),", equal to:\n").concat(JSON.stringify(t,null,4)));if(t.length&&(r.cb||r.errCb)){var o={from:0,to:t.length,offset:0,leadingWhitespaceOK:!1,trailingWhitespaceOK:!1,oneSpaceAfterCommaOK:!1,innerWhitespaceAllowed:!1,separator:",",cb:null,errCb:null},n=Object.assign({},o,r);Number.isInteger(r.from)||(n.from=0),Number.isInteger(r.to)||(n.to=t.length),Number.isInteger(r.offset)||(n.offset=0);for(var f=null,s=null,a=!1,i=[],l=null,p=!0,m=n.from;m<n.to;m++){if(t[m].trim().length&&t[m]!==n.separator&&(l=m),null!==f||!t[m].trim().length||n.separator&&t[m]===n.separator||(a||(a=!0),i.length&&(i.length>1&&i.forEach((function(e,t){t&&n.errCb([[e+n.offset,e+1+n.offset]],"Remove separator.",p)})),i=[]),f=m),Number.isInteger(f)&&(m>f&&n.separator&&t[m]===n.separator||m+1===n.to)){t.slice(f,m+1===n.to&&t[m]!==n.separator&&t[m].trim().length?m+1:m);"function"==typeof n.cb&&n.cb(f+n.offset,(m+1===n.to&&t[m]!==n.separator&&t[m].trim().length?m+1:l+1)+n.offset),f=null}if(t[m].trim().length||null!==s||(s=m),null!==s&&(t[m].trim().length||m+1===n.to)){if(s===n.from)n.leadingWhitespaceOK||"function"!=typeof n.errCb||n.errCb([[s+n.offset,(m+1===n.to?m+1:m)+n.offset]],"Remove whitespace.",p);else if(t[m].trim().length||m+1!==n.to){if(!(n.oneSpaceAfterCommaOK&&t[m].trim().length&&m>n.from+1&&" "===t[m-1]&&","===t[m-2]||n.innerWhitespaceAllowed&&a&&t[s-1]&&t[m].trim().length&&t[m]!==n.separator&&t[s-1]!==n.separator)){var c=s,u=m;m+1!==n.to||t[m]===n.separator||t[m].trim().length||u++;var h="";n.oneSpaceAfterCommaOK&&(" "===t[s]&&t[s-1]===n.separator?c++:" "!==t[s]&&(h=" "));var g="Remove whitespace.";!n.innerWhitespaceAllowed&&a&&t[s-1]&&t[m].trim().length&&t[m]!==n.separator&&t[s-1]!==n.separator&&(p=!1,g="Bad whitespace."),h.length?n.errCb([[c+n.offset,u+n.offset,h]],g,p):n.errCb([[c+n.offset,u+n.offset]],g,p),p=!0}}else n.trailingWhitespaceOK||"function"!=typeof n.errCb||n.errCb([[s+n.offset,m+1+n.offset]],"Remove whitespace.",p);s=null}t[m]===n.separator&&(a?i.push(m):n.errCb([[m+n.offset,m+1+n.offset]],"Remove separator.",p)),m+1===n.to&&i.forEach((function(e){n.errCb([[e+n.offset,e+1+n.offset]],"Remove separator.",p)}))}}}}));
