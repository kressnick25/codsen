/**
 * js-row-num
 * Update all row numbers in all console.logs in JS code
 * Version: 2.7.21
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/js-row-num
 */

!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).jsRowNum=r()}(this,(function(){"use strict";function e(r){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(r)}function r(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function t(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?n(Object(o),!0).forEach((function(r){t(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function i(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"==typeof e)return a(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return a(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function s(e){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=arguments.length>2?arguments[2]:void 0;if(!(t.trim()||e.length&&"\n"!==t&&" "!==t&&" "===(r?e[e.length-1]:e[0])||e.length&&"\n"===(r?e[e.length-1]:e[0])&&"\n"!==t&&" "!==t))if(r){if(("\n"===t||" "===t)&&e.length&&" "===e[e.length-1])for(;e.length&&" "===e[e.length-1];)e.pop();e.push(" "===t||"\n"===t?t:" ")}else{if(("\n"===t||" "===t)&&e.length&&" "===e[0])for(;e.length&&" "===e[0];)e.shift();e.unshift(" "===t||"\n"===t?t:" ")}}function l(e,r){if("string"==typeof e&&e.length){var t,n,o=!1;if(e.includes("\r\n")&&(o=!0),t=r&&"number"==typeof r?r:1,""===e.trim()){var i=[];for(n=t,Array.from(e).forEach((function(e){("\n"!==e||n)&&("\n"===e&&(n-=1),s(i,!0,e))}));i.length>1&&" "===i[i.length-1];)i.pop();return i.join("")}var a=[];if(n=t,""===e[0].trim())for(var l=0,u=e.length;l<u&&!e[l].trim();l++)("\n"!==e[l]||n)&&("\n"===e[l]&&(n-=1),s(a,!0,e[l]));var c=[];if(n=t,""===e.slice(-1).trim())for(var g=e.length;g--&&!e[g].trim();)("\n"!==e[g]||n)&&("\n"===e[g]&&(n-=1),s(c,!1,e[g]));return o?"".concat(a.join("")).concat(e.trim()).concat(c.join("")).replace(/\n/g,"\r\n"):a.join("")+e.trim()+c.join("")}return e}function u(e,r){if(!Array.isArray(e)||!e.length)return e;var t,n,i=o(o({},{strictlyTwoElementsInRangeArrays:!1,progressFn:null}),r);if(i.strictlyTwoElementsInRangeArrays&&!e.every((function(e,r){return 2===e.length||(t=r,n=e.length,!1)})))throw new TypeError("ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ".concat(t,"th range (").concat(JSON.stringify(e[t],null,4),") has not two but ").concat(n," elements!"));if(!e.every((function(e,r){return!(!Number.isInteger(e[0])||e[0]<0||!Number.isInteger(e[1])||e[1]<0)||(t=r,!1)})))throw new TypeError("ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ".concat(t,"th range (").concat(JSON.stringify(e[t],null,4),") does not consist of only natural numbers!"));var a=e.length*e.length,s=0;return Array.from(e).sort((function(e,r){return i.progressFn&&(s+=1,i.progressFn(Math.floor(100*s/a))),e[0]===r[0]?e[1]<r[1]?-1:e[1]>r[1]?1:0:e[0]<r[0]?-1:1}))}function c(r,t){function n(e){return"string"==typeof e}function a(r){return r&&"object"===e(r)&&!Array.isArray(r)}if(!Array.isArray(r)||!r.length)return r;var s,l={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};if(t){if(!a(t))throw new Error("emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n".concat(JSON.stringify(t,null,4)," (type ").concat(e(t),")"));if((s=o(o({},l),t)).progressFn&&a(s.progressFn)&&!Object.keys(s.progressFn).length)s.progressFn=null;else if(s.progressFn&&"function"!=typeof s.progressFn)throw new Error('ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "'.concat(e(s.progressFn),'", equal to ').concat(JSON.stringify(s.progressFn,null,4)));if(s.mergeType&&1!==s.mergeType&&2!==s.mergeType)if(n(s.mergeType)&&"1"===s.mergeType.trim())s.mergeType=1;else{if(!n(s.mergeType)||"2"!==s.mergeType.trim())throw new Error('ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "'.concat(e(s.mergeType),'", equal to ').concat(JSON.stringify(s.mergeType,null,4)));s.mergeType=2}if("boolean"!=typeof s.joinRangesThatTouchEdges)throw new Error('ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "'.concat(e(s.joinRangesThatTouchEdges),'", equal to ').concat(JSON.stringify(s.joinRangesThatTouchEdges,null,4)))}else s=o({},l);for(var c,g,f,y=r.map((function(e){return i(e)})).filter((function(e){return void 0!==e[2]||e[0]!==e[1]})),p=(c=s.progressFn?u(y,{progressFn:function(e){(f=Math.floor(e/5))!==g&&(g=f,s.progressFn(f))}}):u(y)).length-1,h=p;h>0;h--)s.progressFn&&(f=Math.floor(78*(1-h/p))+21)!==g&&f>g&&(g=f,s.progressFn(f)),(c[h][0]<=c[h-1][0]||!s.joinRangesThatTouchEdges&&c[h][0]<c[h-1][1]||s.joinRangesThatTouchEdges&&c[h][0]<=c[h-1][1])&&(c[h-1][0]=Math.min(c[h][0],c[h-1][0]),c[h-1][1]=Math.max(c[h][1],c[h-1][1]),void 0!==c[h][2]&&(c[h-1][0]>=c[h][0]||c[h-1][1]<=c[h][1])&&null!==c[h-1][2]&&(null===c[h][2]&&null!==c[h-1][2]?c[h-1][2]=null:void 0!==c[h-1][2]?2===s.mergeType&&c[h-1][0]===c[h][0]?c[h-1][2]=c[h][2]:c[h-1][2]+=c[h][2]:c[h-1][2]=c[h][2]),c.splice(h,1),h=c.length);return c}function g(e){return null!=e}function f(e){return Number.isInteger(e)&&e>=0}function y(e){return"string"==typeof e}function p(e){return/^\d*$/.test(e)?parseInt(e,10):e}var h=function(){function t(r){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t);var n=o(o({},{limitToBeAddedWhitespace:!1,limitLinebreaksCount:1,mergeType:1}),r);if(n.mergeType&&1!==n.mergeType&&2!==n.mergeType)if(y(n.mergeType)&&"1"===n.mergeType.trim())n.mergeType=1;else{if(!y(n.mergeType)||"2"!==n.mergeType.trim())throw new Error('ranges-push: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "'.concat(e(n.mergeType),'", equal to ').concat(JSON.stringify(n.mergeType,null,4)));n.mergeType=2}this.opts=n}var n,a,s;return n=t,(a=[{key:"add",value:function(r,t,n){for(var o=this,a=arguments.length,s=new Array(a>3?a-3:0),u=3;u<a;u++)s[u-3]=arguments[u];if(s.length>0)throw new TypeError("ranges-push/Ranges/add(): [THROW_ID_03] Please don't overload the add() method. From the 4th input argument onwards we see these redundant arguments: ".concat(JSON.stringify(s,null,4)));if(g(r)||g(t)){if(g(r)&&!g(t)){if(Array.isArray(r)){if(r.length){if(r.some((function(e){return Array.isArray(e)})))return void r.forEach((function(e){Array.isArray(e)&&o.add.apply(o,i(e))}));r.length>1&&f(p(r[0]))&&f(p(r[1]))&&this.add.apply(this,i(r))}return}throw new TypeError('ranges-push/Ranges/add(): [THROW_ID_12] the first input argument, "from" is set ('.concat(JSON.stringify(r,null,0),') but second-one, "to" is not (').concat(JSON.stringify(t,null,0),")"))}if(!g(r)&&g(t))throw new TypeError('ranges-push/Ranges/add(): [THROW_ID_13] the second input argument, "to" is set ('.concat(JSON.stringify(t,null,0),') but first-one, "from" is not (').concat(JSON.stringify(r,null,0),")"));var c=/^\d*$/.test(r)?parseInt(r,10):r,h=/^\d*$/.test(t)?parseInt(t,10):t;if(f(n)&&(n=String(n)),!f(c)||!f(h))throw f(c)&&c>=0?new TypeError('ranges-push/Ranges/add(): [THROW_ID_10] "to" value, the second input argument, must be a natural number or zero! Currently it\'s of a type "'.concat(e(h),'" equal to: ').concat(JSON.stringify(h,null,4))):new TypeError('ranges-push/Ranges/add(): [THROW_ID_09] "from" value, the first input argument, must be a natural number or zero! Currently it\'s of a type "'.concat(e(c),'" equal to: ').concat(JSON.stringify(c,null,4)));if(g(n)&&!y(n)&&!f(n))throw new TypeError("ranges-push/Ranges/add(): [THROW_ID_08] The third argument, the value to add, was given not as string but ".concat(e(n),", equal to:\n").concat(JSON.stringify(n,null,4)));if(g(this.slices)&&Array.isArray(this.last())&&c===this.last()[1]){if(this.last()[1]=h,this.last()[2],null!==this.last()[2]&&g(n)){var m=!(g(this.last()[2])&&this.last()[2].length>0)||this.opts&&this.opts.mergeType&&1!==this.opts.mergeType?n:this.last()[2]+n;this.opts.limitToBeAddedWhitespace&&(m=l(m,this.opts.limitLinebreaksCount)),y(m)&&!m.length||(this.last()[2]=m)}}else{this.slices||(this.slices=[]);var d=void 0===n||y(n)&&!n.length?[c,h]:[c,h,this.opts.limitToBeAddedWhitespace?l(n,this.opts.limitLinebreaksCount):n];this.slices.push(d)}}}},{key:"push",value:function(e,r,t){for(var n=arguments.length,o=new Array(n>3?n-3:0),i=3;i<n;i++)o[i-3]=arguments[i];this.add.apply(this,[e,r,t].concat(o))}},{key:"current",value:function(){var e=this;return null!=this.slices?(this.slices=c(this.slices,{mergeType:this.opts.mergeType}),this.opts.limitToBeAddedWhitespace?this.slices.map((function(r){return g(r[2])?[r[0],r[1],l(r[2],e.opts.limitLinebreaksCount)]:r})):this.slices):null}},{key:"wipe",value:function(){this.slices=void 0}},{key:"replace",value:function(e){if(Array.isArray(e)&&e.length){if(!Array.isArray(e[0])||!f(e[0][0]))throw new Error("ranges-push/Ranges/replace(): [THROW_ID_11] Single range was given but we expected array of arrays! The first element, ".concat(JSON.stringify(e[0],null,4)," should be an array and its first element should be an integer, a string index."));this.slices=Array.from(e)}else this.slices=void 0}},{key:"last",value:function(){return void 0!==this.slices&&Array.isArray(this.slices)?this.slices[this.slices.length-1]:null}}])&&r(n.prototype,a),s&&r(n,s),t}();function m(e){return null!=e}function d(e){return"string"==typeof e}return function(r,t){if("string"!=typeof r||!r.length)return r;function n(e){return/[0-9]/.test(e)}function o(r){return r&&"object"===e(r)&&!Array.isArray(r)}var i=Object.assign({padStart:3,overrideRowNum:null,returnRangesOnly:!1,triggerKeywords:["console.log"],extractedLogContentsWereGiven:!1},t);(!i.padStart||"number"!=typeof i.padStart||"number"==typeof i.padStart&&i.padStart<0)&&(i.padStart=0);var a,s,l=new h,u=r.length,g=null,f=null,y=null,p=1,T=!1,w=null;for(i.padStart&&u>45e3&&(i.padStart=4),a=0;a<u;a++){if(null===i.overrideRowNum&&("\n"===r[a]||"\r"===r[a]&&"\n"!==r[a+1])&&(p+=1),!i.extractedLogContentsWereGiven&&null!==g&&g.start<a&&g.type===r[a]&&(g=null,f=null,y=null,w=null,T=!1),null===g&&(i.extractedLogContentsWereGiven||f&&f<a&&y&&y<a)&&r[a].trim())if('"'===r[a]||"'"===r[a]||"`"===r[a])(g={}).start=a,g.type=r[a],T=!1;else if(i.extractedLogContentsWereGiven&&null===w){if(!n(r[a]))break;w=a}else r[a].trim()&&"/"!==r[a]&&!i.extractedLogContentsWereGiven&&(f=null,y=null,w=null);if(g&&Number.isInteger(g.start)&&g.start<a&&!T&&null===w&&n(r[a])&&(w=a),!Number.isInteger(w)||n(r[a])&&r[a+1]||!(a>w)&&r[a+1]||(i.padStart||i.overrideRowNum,l.push(w,n(r[a])?a+1:a,i.padStart?String(null!=i.overrideRowNum?i.overrideRowNum:p).padStart(i.padStart,"0"):"".concat(null!=i.overrideRowNum?i.overrideRowNum:p)),w=null,T=!0),g&&Number.isInteger(g.start)&&g.start<a&&!T&&(s=r[a],/[A-Za-z]/.test(s))&&("n"!==r[a]||"\\"!==r[a-1])){if("\\"===r[a-1]&&"u"===r[a]&&"0"===r[a+1]&&"0"===r[a+2]&&"1"===r[a+3]&&("b"===r[a+4]||"B"===r[a+5])&&"["===r[a+5]){var b=void 0;n(r[a+6])?b=a+6:"$"===r[a+6]&&"{"===r[a+7]&&n(r[a+8])&&(b=a+8);var v=void 0;if(b)for(var O=b;O<u;O++)if(!n(r[O])){v=O;break}var A=void 0;if("m"===r[v]?A=v:"}"===r[v]&&"m"===r[v+1]&&(A=v+1),!A){T=!0;continue}if("$"===r[A+1]&&"{"===r[A+2]&&"`"===r[A+3]){a=A+3;continue}}T=!0}if(!y&&r[a].trim()&&f&&f<=a&&("("===r[a]?y=a:(f=null,w=null)),o(i)&&i.triggerKeywords&&Array.isArray(i.triggerKeywords)){for(var S=void 0,R=0,I=i.triggerKeywords.length;R<I;R++)if(r.startsWith(i.triggerKeywords[R],a)){S=i.triggerKeywords[R];break}if(S){f=a+S.length,a=a+S.length-1;continue}}}return g=null,f=null,y=null,p=1,T=void 0,w=null,p=1,i.returnRangesOnly?l.current():l.current()?function(r,t,n){var o,i=0,a=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if(!d(r))throw new TypeError("ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ".concat(e(r),", equal to: ").concat(JSON.stringify(r,null,4)));if(null===t)return r;if(!Array.isArray(t))throw new TypeError("ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ".concat(e(t),", equal to: ").concat(JSON.stringify(t,null,4)));if(n&&"function"!=typeof n)throw new TypeError("ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: ".concat(e(n),", equal to: ").concat(JSON.stringify(n,null,4)));var s=(o=Array.isArray(t)&&(Number.isInteger(t[0])&&t[0]>=0||/^\d*$/.test(t[0]))&&(Number.isInteger(t[1])&&t[1]>=0||/^\d*$/.test(t[1]))?[Array.from(t)]:Array.from(t)).length,l=0;o.forEach((function(r,t){if(n&&(i=Math.floor(l/s*10))!==a&&(a=i,n(i)),!Array.isArray(r))throw new TypeError("ranges-apply: [THROW_ID_05] ranges array, second input arg., has ".concat(t,"th element not an array: ").concat(JSON.stringify(r,null,4),", which is ").concat(e(r)));if(!Number.isInteger(r[0])||r[0]<0){if(!/^\d*$/.test(r[0]))throw new TypeError("ranges-apply: [THROW_ID_06] ranges array, second input arg. has ".concat(t,"th element, array [").concat(r[0],",").concat(r[1],"]. That array has first element not an integer, but ").concat(e(r[0]),", equal to: ").concat(JSON.stringify(r[0],null,4),". Computer doesn't like this."));o[t][0]=Number.parseInt(o[t][0],10)}if(!Number.isInteger(r[1])){if(!/^\d*$/.test(r[1]))throw new TypeError("ranges-apply: [THROW_ID_07] ranges array, second input arg. has ".concat(t,"th element, array [").concat(r[0],",").concat(r[1],"]. That array has second element not an integer, but ").concat(e(r[1]),", equal to: ").concat(JSON.stringify(r[1],null,4),". Computer doesn't like this."));o[t][1]=Number.parseInt(o[t][1],10)}l+=1}));var u=c(o,{progressFn:function(e){n&&(i=10+Math.floor(e/10))!==a&&(a=i,n(i))}}),g=u.length;if(g>0){var f=r.slice(u[g-1][1]);r=u.reduce((function(e,t,o,s){n&&(i=20+Math.floor(o/g*80))!==a&&(a=i,n(i));var l=0===o?0:s[o-1][1],u=s[o][0];return e+r.slice(l,u)+(m(s[o][2])?s[o][2]:"")}),""),r+=f}return r}(r,l.current()):r}}));
