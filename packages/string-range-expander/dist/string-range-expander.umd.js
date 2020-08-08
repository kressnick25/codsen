/**
 * string-range-expander
 * Expands string index ranges within whitespace boundaries until letters are met
 * Version: 1.11.6
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/string-range-expander
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).stringRangeExpander=t()}(this,(function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function i(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function n(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(i){t(e,i,r[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}return function(t){var i,r=/^[0-9a-zA-Z]+$/;function o(e){return!(!e||"string"!=typeof e)&&!e.trim()}function s(e){return"string"==typeof e}if(!t||"object"!==e(t)||Array.isArray(t))throw i=void 0===t?"but it is missing completely.":null===t?"but it was given as null.":"but it was given as ".concat(e(t),", equal to:\n").concat(JSON.stringify(t,null,4),"."),new Error("string-range-expander: [THROW_ID_01] Input must be a plain object ".concat(i));if("object"===e(t)&&null!==t&&!Array.isArray(t)&&!Object.keys(t).length)throw new Error("string-range-expander: [THROW_ID_02] Input must be a plain object but it was given as a plain object without any keys.");if("number"!=typeof t.from)throw new Error("string-range-expander: [THROW_ID_03] The input's \"from\" value opts.from, is not a number! Currently it's given as ".concat(e(t.from),", equal to ").concat(JSON.stringify(t.from,null,0)));if("number"!=typeof t.to)throw new Error("string-range-expander: [THROW_ID_04] The input's \"to\" value opts.to, is not a number! Currently it's given as ".concat(e(t.to),", equal to ").concat(JSON.stringify(t.to,null,0)));if(!t.str[t.from]&&t.from!==t.to)throw new Error('string-range-expander: [THROW_ID_05] The given input string opts.str ("'.concat(t.str,'") must contain the character at index "from" ("').concat(t.from,'")'));if(!t.str[t.to-1])throw new Error('string-range-expander: [THROW_ID_06] The given input string, opts.str ("'.concat(t.str,'") must contain the character at index before "to" ("').concat(t.to-1,'")'));if(t.from>t.to)throw new Error('string-range-expander: [THROW_ID_07] The given "from" index, "'.concat(t.from,'" is greater than "to" index, "').concat(t.to,"\". That's wrong!"));if(s(t.extendToOneSide)&&"left"!==t.extendToOneSide&&"right"!==t.extendToOneSide||!s(t.extendToOneSide)&&void 0!==t.extendToOneSide&&!1!==t.extendToOneSide)throw new Error("string-range-expander: [THROW_ID_08] The opts.extendToOneSide value is not recogniseable! It's set to: \"".concat(t.extendToOneSide,'" (').concat(e(t.extendToOneSide),'). It has to be either Boolean "false" or strings "left" or "right"'));var l=n(n({},{str:"",from:0,to:0,ifLeftSideIncludesThisThenCropTightly:"",ifLeftSideIncludesThisCropItToo:"",ifRightSideIncludesThisThenCropTightly:"",ifRightSideIncludesThisCropItToo:"",extendToOneSide:!1,wipeAllWhitespaceOnLeft:!1,wipeAllWhitespaceOnRight:!1,addSingleSpaceToPreventAccidentalConcatenation:!1}),t);if(Array.isArray(l.ifLeftSideIncludesThisThenCropTightly)){var c,f;if(!l.ifLeftSideIncludesThisThenCropTightly.every((function(e,t){return!!s(e)||(c=t,f=e,!1)})))throw new Error("string-range-expander: [THROW_ID_09] The opts.ifLeftSideIncludesThisThenCropTightly was set to an array:\n".concat(JSON.stringify(l.ifLeftSideIncludesThisThenCropTightly,null,4),". Now, that array contains not only string elements. For example, an element at index ").concat(c," is of a type ").concat(e(f)," (equal to ").concat(JSON.stringify(f,null,0),")."));l.ifLeftSideIncludesThisThenCropTightly=l.ifLeftSideIncludesThisThenCropTightly.join("")}var d=l.str,a=l.from,h=l.to;if("right"!==l.extendToOneSide&&(o(d[a-1])&&(o(d[a-2])||l.ifLeftSideIncludesThisCropItToo.includes(d[a-2]))||d[a-1]&&l.ifLeftSideIncludesThisCropItToo.includes(d[a-1])||l.wipeAllWhitespaceOnLeft&&o(d[a-1])))for(var u=a;u--;)if(!l.ifLeftSideIncludesThisCropItToo.includes(d[u])){if(d[u].trim()){a=l.wipeAllWhitespaceOnLeft||l.ifLeftSideIncludesThisCropItToo.includes(d[u+1])?u+1:u+2;break}if(0===u){a=l.wipeAllWhitespaceOnLeft?0:1;break}}if("left"!==l.extendToOneSide&&(o(d[h])&&(l.wipeAllWhitespaceOnRight||o(d[h+1]))||l.ifRightSideIncludesThisCropItToo.includes(d[h])))for(var T=h,p=d.length;T<p;T++)if(!l.ifRightSideIncludesThisCropItToo.includes(d[T])&&(d[T]&&d[T].trim()||void 0===d[T])){h=l.wipeAllWhitespaceOnRight||l.ifRightSideIncludesThisCropItToo.includes(d[T-1])?T:T-1;break}return("right"!==l.extendToOneSide&&s(l.ifLeftSideIncludesThisThenCropTightly)&&l.ifLeftSideIncludesThisThenCropTightly&&(d[a-2]&&l.ifLeftSideIncludesThisThenCropTightly.includes(d[a-2])||d[a-1]&&l.ifLeftSideIncludesThisThenCropTightly.includes(d[a-1]))||"left"!==l.extendToOneSide&&s(l.ifRightSideIncludesThisThenCropTightly)&&l.ifRightSideIncludesThisThenCropTightly&&(d[h+1]&&l.ifRightSideIncludesThisThenCropTightly.includes(d[h+1])||d[h]&&l.ifRightSideIncludesThisThenCropTightly.includes(d[h])))&&("right"!==l.extendToOneSide&&o(d[a-1])&&!l.wipeAllWhitespaceOnLeft&&(a-=1),"left"!==l.extendToOneSide&&o(d[h])&&!l.wipeAllWhitespaceOnRight&&(h+=1)),l.addSingleSpaceToPreventAccidentalConcatenation&&d[a-1]&&d[a-1].trim()&&d[h]&&d[h].trim()&&(!l.ifLeftSideIncludesThisThenCropTightly&&!l.ifRightSideIncludesThisThenCropTightly||l.ifLeftSideIncludesThisThenCropTightly&&!l.ifLeftSideIncludesThisThenCropTightly.includes(d[a-1])||!(!l.ifRightSideIncludesThisThenCropTightly||d[h]&&l.ifRightSideIncludesThisThenCropTightly.includes(d[h])))&&(r.test(d[a-1])||r.test(d[h]))?[a,h," "]:[a,h]}}));
