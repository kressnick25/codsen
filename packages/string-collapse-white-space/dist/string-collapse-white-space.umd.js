/**
 * string-collapse-white-space
 * Efficient collapsing of white space with optional outer- and/or line-trimming and HTML tag recognition
 * Version: 5.2.25
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/string-collapse-white-space
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).stringCollapseWhiteSpace=e()}(this,(function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function r(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function n(t){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?r(Object(i),!0).forEach((function(r){e(t,r,i[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],n=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){i=!0,o=t}finally{try{n||null==s.return||s.return()}finally{if(i)throw o}}return r}(t,e)||a(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t){return function(t){if(Array.isArray(t))return s(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||a(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){if(t){if("string"==typeof t)return s(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(t,e):void 0}}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function c(t,e){if(!Array.isArray(t)||!t.length)return t;var r,i,o=n(n({},{strictlyTwoElementsInRangeArrays:!1,progressFn:null}),e);if(o.strictlyTwoElementsInRangeArrays&&!t.every((function(t,e){return 2===t.length||(r=e,i=t.length,!1)})))throw new TypeError("ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ".concat(r,"th range (").concat(JSON.stringify(t[r],null,4),") has not two but ").concat(i," elements!"));if(!t.every((function(t,e){return!(!Number.isInteger(t[0])||t[0]<0||!Number.isInteger(t[1])||t[1]<0)||(r=e,!1)})))throw new TypeError("ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ".concat(r,"th range (").concat(JSON.stringify(t[r],null,4),") does not consist of only natural numbers!"));var a=t.length*t.length,s=0;return Array.from(t).sort((function(t,e){return o.progressFn&&(s+=1,o.progressFn(Math.floor(100*s/a))),t[0]===e[0]?t[1]<e[1]?-1:t[1]>e[1]?1:0:t[0]<e[0]?-1:1}))}function u(e,r){function i(t){return"string"==typeof t}function a(e){return e&&"object"===t(e)&&!Array.isArray(e)}if(!Array.isArray(e)||!e.length)return e;var s,u={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};if(r){if(!a(r))throw new Error("emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n".concat(JSON.stringify(r,null,4)," (type ").concat(t(r),")"));if((s=n(n({},u),r)).progressFn&&a(s.progressFn)&&!Object.keys(s.progressFn).length)s.progressFn=null;else if(s.progressFn&&"function"!=typeof s.progressFn)throw new Error('ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "'.concat(t(s.progressFn),'", equal to ').concat(JSON.stringify(s.progressFn,null,4)));if(s.mergeType&&1!==s.mergeType&&2!==s.mergeType)if(i(s.mergeType)&&"1"===s.mergeType.trim())s.mergeType=1;else{if(!i(s.mergeType)||"2"!==s.mergeType.trim())throw new Error('ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "'.concat(t(s.mergeType),'", equal to ').concat(JSON.stringify(s.mergeType,null,4)));s.mergeType=2}if("boolean"!=typeof s.joinRangesThatTouchEdges)throw new Error('ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "'.concat(t(s.joinRangesThatTouchEdges),'", equal to ').concat(JSON.stringify(s.joinRangesThatTouchEdges,null,4)))}else s=n({},u);for(var l,f,h,g=e.map((function(t){return o(t)})).filter((function(t){return void 0!==t[2]||t[0]!==t[1]})),m=(l=s.progressFn?c(g,{progressFn:function(t){(h=Math.floor(t/5))!==f&&(f=h,s.progressFn(h))}}):c(g)).length-1,p=m;p>0;p--)s.progressFn&&(h=Math.floor(78*(1-p/m))+21)!==f&&h>f&&(f=h,s.progressFn(h)),(l[p][0]<=l[p-1][0]||!s.joinRangesThatTouchEdges&&l[p][0]<l[p-1][1]||s.joinRangesThatTouchEdges&&l[p][0]<=l[p-1][1])&&(l[p-1][0]=Math.min(l[p][0],l[p-1][0]),l[p-1][1]=Math.max(l[p][1],l[p-1][1]),void 0!==l[p][2]&&(l[p-1][0]>=l[p][0]||l[p-1][1]<=l[p][1])&&null!==l[p-1][2]&&(null===l[p][2]&&null!==l[p-1][2]?l[p-1][2]=null:void 0!==l[p-1][2]?2===s.mergeType&&l[p-1][0]===l[p][0]?l[p-1][2]=l[p][2]:l[p-1][2]+=l[p][2]:l[p-1][2]=l[p][2]),l.splice(p,1),p=l.length);return l}function l(t){return null!=t}function f(t){return"string"==typeof t}function h(e){return e&&"object"===t(e)&&!Array.isArray(e)}function g(t){return"string"==typeof t}function m(t,e,r,n,i,o){var a="function"==typeof r?r():r;if(e<0&&i&&"EOL"===a)return a;if(e>=t.length&&!i)return!1;for(var s=i?1:r.length,c=!1,u=!1,l=n.maxMismatches,f=e,h=!1,g=!1,m=!1;t[f];){var p=o(f);if(n.trimBeforeMatching&&""===t[f].trim()){if(!t[p]&&i&&"EOL"===r)return!0;f=o(f)}else if(!n.i&&n.trimCharsBeforeMatching.includes(t[f])||n.i&&n.trimCharsBeforeMatching.map((function(t){return t.toLowerCase()})).includes(t[f].toLowerCase())){if(i&&"EOL"===r&&!t[p])return!0;f=o(f)}else{var y=p>f?r[r.length-s]:r[s-1];if(!n.i&&t[f]===y||n.i&&t[f].toLowerCase()===y.toLowerCase()){if(h||(h=!0),u||(u=!0),s===r.length?g=!0:1===s&&(m=!0),(s-=1)<1)return f}else{if(!(n.maxMismatches&&l&&f))return!(0!==f||1!==s||n.lastMustMatch||!u)&&0;l-=1;for(var b=0;b<=l;b++){var d=p>f?r[r.length-s+1+b]:r[s-2-b],w=t[o(f)];if(d&&(!n.i&&t[f]===d||n.i&&t[f].toLowerCase()===d.toLowerCase())&&(!n.firstMustMatch||s!==r.length)){s-=2,h=!0;break}if(w&&d&&(!n.i&&w===d||n.i&&w.toLowerCase()===d.toLowerCase())&&(!n.firstMustMatch||s!==r.length)){s-=1,h=!0;break}if(void 0===d&&l>=0&&h&&(!n.firstMustMatch||g)&&(!n.lastMustMatch||m))return f}h||(c=f)}if(!1!==c&&c!==f&&(c=!1),s<1)return f;f=o(f)}}return s>0?!(!i||"EOL"!==a)||!!(n.maxMismatches>=s&&u)&&(c||0):void 0}function p(e,r,i,o){return function(e,r,i,o,a){if(h(a)&&Object.prototype.hasOwnProperty.call(a,"trimBeforeMatching")&&"boolean"!=typeof a.trimBeforeMatching)throw new Error("string-match-left-right/".concat(e,"(): [THROW_ID_09] opts.trimBeforeMatching should be boolean!").concat(Array.isArray(a.trimBeforeMatching)?" Did you mean to use opts.trimCharsBeforeMatching?":""));var s,c,u,l,f,p=n(n({},{i:!1,trimBeforeMatching:!1,trimCharsBeforeMatching:[],maxMismatches:0,firstMustMatch:!1,lastMustMatch:!1}),a);if(p.trimCharsBeforeMatching="string"==typeof(s=p.trimCharsBeforeMatching)?s.length>0?[s]:[]:s,p.trimCharsBeforeMatching=p.trimCharsBeforeMatching.map((function(t){return g(t)?t:String(t)})),!g(r))return!1;if(!r.length)return!1;if(!Number.isInteger(i)||i<0)throw new Error("string-match-left-right/".concat(e,"(): [THROW_ID_03] the second argument should be a natural number. Currently it's of a type: ").concat(t(i),", equal to:\n").concat(JSON.stringify(i,null,4)));if(g(o))c=[o];else if(Array.isArray(o))c=o;else if(o){if("function"!=typeof o)throw new Error("string-match-left-right/".concat(e,"(): [THROW_ID_05] the third argument, whatToMatch, is neither string nor array of strings! It's ").concat(t(o),", equal to:\n").concat(JSON.stringify(o,null,4)));(c=[]).push(o)}else c=o;if(a&&!h(a))throw new Error("string-match-left-right/".concat(e,"(): [THROW_ID_06] the fourth argument, options object, should be a plain object. Currently it's of a type \"").concat(t(a),'", and equal to:\n').concat(JSON.stringify(a,null,4)));if(p.trimCharsBeforeMatching.some((function(t,e){return t.length>1&&(l=e,f=t,!0)})))throw new Error("string-match-left-right/".concat(e,"(): [THROW_ID_07] the fourth argument, options object contains trimCharsBeforeMatching. It was meant to list the single characters but one of the entries at index ").concat(l," is longer than 1 character, ").concat(f.length," (equals to ").concat(f,"). Please split it into separate characters and put into array as separate elements."));if(!c||!Array.isArray(c)||Array.isArray(c)&&!c.length||Array.isArray(c)&&1===c.length&&g(c[0])&&!c[0].trim()){if("function"==typeof p.cb){var y,b=i;if("matchLeftIncl"!==e&&"matchRight"!==e||(b+=1),"L"===e[5])for(var d=b;d--;){var w=r[d];if((!p.trimBeforeMatching||p.trimBeforeMatching&&void 0!==w&&w.trim())&&(!p.trimCharsBeforeMatching.length||void 0!==w&&!p.trimCharsBeforeMatching.includes(w))){y=d;break}}else if(e.startsWith("matchRight"))for(var v=b;v<r.length;v++){var T=r[v];if((!p.trimBeforeMatching||p.trimBeforeMatching&&T.trim())&&(!p.trimCharsBeforeMatching.length||!p.trimCharsBeforeMatching.includes(T))){y=v;break}}if(void 0===y)return!1;var O=r[y],M=y+1,I="";return M&&M>0&&(I=r.slice(0,M)),"L"===e[5]?p.cb(O,I,y):(y&&y>0&&(I=r.slice(y)),p.cb(O,I,y))}var E="";throw a||(E=" More so, the whole options object, the fourth input argument, is missing!"),new Error("string-match-left-right/".concat(e,'(): [THROW_ID_08] the third argument, "whatToMatch", was given as an empty string. This means, you intend to match purely by a callback. The callback was not set though, the opts key "cb" is not set!').concat(E))}for(var C=0,_=c.length;C<_;C++){u="function"==typeof c[C];var A=c[C],j=void 0,S=void 0,L="",R=i;"matchRight"===e?R+=1:"matchLeft"===e&&(R-=1);var D=m(r,R,A,p,u,(function(t){return"L"===e[5]?t-1:t+1}));if(D&&u&&"function"==typeof A&&"EOL"===A())return!(!A()||p.cb&&!p.cb(j,L,S))&&A();if(Number.isInteger(D)&&(S=e.startsWith("matchLeft")?D-1:D+1,L="L"===e[5]?r.slice(0,D):r.slice(S)),S<0&&(S=void 0),r[S]&&(j=r[S]),Number.isInteger(D)&&(!p.cb||p.cb(j,L,S)))return A}return!1}("matchLeftIncl",e,r,i,o)}return function(e,r){function o(t,e,r){return t.charCodeAt(0)>=e&&t.charCodeAt(0)<=r}function a(t){return"string"==typeof t&&("<"===t||!t.trim())}if("string"!=typeof e)throw new Error("string-collapse-white-space/collapse(): [THROW_ID_01] The input is not string but ".concat(t(e),", equal to: ").concat(JSON.stringify(e,null,4)));if(r&&"object"!==t(r))throw new Error("string-collapse-white-space/collapse(): [THROW_ID_02] The opts is not a plain object but ".concat(t(r),", equal to:\n").concat(JSON.stringify(r,null,4)));if(!e.length)return"";var s,c=[],h=n(n({},{trimStart:!0,trimEnd:!0,trimLines:!1,trimnbsp:!1,recogniseHTML:!0,removeEmptyLines:!1,returnRangesOnly:!1,limitConsecutiveEmptyLinesTo:0}),r);h.recogniseHTML&&(s=[]);var g,m=null,y=null,b=null,d=!1,w=!1,v=null,T=!1,O=!1,M={},I=!1,E=function(t){t.equalDoubleQuoteCombo=0,t.equalOnly=0,t.doubleQuoteOnly=0,t.spacesBetweenLetterChunks=0,t.linebreaks=0},C=!1;h.recogniseHTML&&E(M);for(var _=0,A=e.length;A--;){if("\n"===e[A]||"\r"===e[A]&&"\n"!==e[A+1]?_+=1:e[A].trim()&&(_=0)," "===e[A]?null===m&&(m=A):null!==m&&(A+1!==m&&c.push([A+1,m]),m=null),""===e[A].trim()&&(!h.trimnbsp&&" "!==e[A]||h.trimnbsp)){if(null===y&&(y=A),"\n"!==e[A]&&"\r"!==e[A]&&null===b&&(b=A+1),"\n"!==e[A]&&"\r"!==e[A]||(null!==b&&(h.trimLines&&c.push([A+1,b]),b=null),"\n"!==e[A-1]&&"\r"!==e[A-1]&&(b=A,d=!0)),"\n"===e[A]||"\r"===e[A]&&"\n"!==e[A+1]){var j=A+1,S=void 0;Number.isInteger(g)&&(S=g+1,h.removeEmptyLines&&void 0!==g&&""===e.slice(j,S).trim()&&_>h.limitConsecutiveEmptyLinesTo+1&&c.push([A+1,g+1])),g=A}}else null!==y&&(A+1!==y+1&&y===e.length-1&&h.trimEnd&&c.push([A+1,y+1]),y=null),null!==b&&(d&&h.trimLines&&(d=!1,b!==A+1&&c.push([A+1,b])),b=null);if(0===A&&(null!==y&&h.trimStart?c.push([0,y+1]):null!==m&&c.push([A+1,m+1])),h.recogniseHTML)if(""===e[A].trim()){if(w&&!O&&(O=!0),T&&!v&&(v=A+1),T&&void 0!==e[A-1]&&""!==e[A-1].trim()&&"<"!==e[A-1]&&"/"!==e[A-1]&&(T=!1,w=!1,s=[]),!I&&!C&&""===e[A].trim()&&"<"!==e[A-1]&&(void 0===e[A+1]||""!==e[A+1].trim()&&"/"!==e[A+1].trim()))if(void 0===e[A-1]||""!==e[A-1].trim()&&"<"!==e[A-1]&&"/"!==e[A-1])M.spacesBetweenLetterChunks+=1;else for(var L=A-1;L--;)if(""!==e[L].trim()){"<"===e[L]?I=!0:"/"!==e[L]&&(M.spacesBetweenLetterChunks+=A-L);break}}else"="===e[A]?(M.equalOnly+=1,'"'===e[A+1]&&(M.equalDoubleQuoteCombo+=1)):'"'===e[A]&&(M.doubleQuoteOnly+=1),C&&(C=!1),null!==v&&(s.push([A+1,v]),v=null),">"===e[A]?(E(M),C=!0,w?s=[]:(w=!0,void 0===e[A-1]||""!==e[A-1].trim()||v||(v=A)),O||(O=!0)):"<"===e[A]?(w=!1,I&&(I=!1),M.spacesBetweenLetterChunks>0&&0===M.equalDoubleQuoteCombo&&(T=!1,s=[]),T&&(s.length&&s.forEach((function(t){var e=i(t,2),r=e[0],n=e[1];return c.push([r,n])})),T=!1),E(M)):w&&"/"===e[A]?v=A:w&&!T&&(O&&o(e[A],97,122)?(O=!1,o(e[A],97,110)?("a"===e[A]&&("e"===e[A-1]&&p(e,A,["area","textarea"],{cb:a,i:!0})||"t"===e[A-1]&&p(e,A,["data","meta"],{cb:a,i:!0})||a(e[A-1]))||"b"===e[A]&&(p(e,A,["rb","sub"],{cb:a,i:!0})||a(e[A-1]))||"c"===e[A]&&p(e,A,"rtc",{cb:a,i:!0})||"d"===e[A]&&("a"===e[A-1]&&p(e,A,["head","thead"],{cb:a,i:!0})||p(e,A,["kbd","dd","embed","legend","td"],{cb:a,i:!0}))||"e"===e[A]&&(p(e,A,"source",{cb:a,i:!0})||"d"===e[A-1]&&p(e,A,["aside","code"],{cb:a,i:!0})||"l"===e[A-1]&&p(e,A,["table","article","title","style"],{cb:a,i:!0})||"m"===e[A-1]&&p(e,A,["iframe","time"],{cb:a,i:!0})||"r"===e[A-1]&&p(e,A,["pre","figure","picture"],{cb:a,i:!0})||"t"===e[A-1]&&p(e,A,["template","cite","blockquote"],{cb:a,i:!0})||p(e,A,"base",{cb:a,i:!0})||a(e[A-1]))||"g"===e[A]&&p(e,A,["img","strong","dialog","svg"],{cb:a,i:!0})||"h"===e[A]&&p(e,A,["th","math"],{cb:a,i:!0})||"i"===e[A]&&(p(e,A,["bdi","li"],{cb:a,i:!0})||a(e[A-1]))||"k"===e[A]&&p(e,A,["track","link","mark"],{cb:a,i:!0})||"l"===e[A]&&p(e,A,["html","ol","ul","dl","label","del","small","col"],{cb:a,i:!0})||"m"===e[A]&&p(e,A,["param","em","menuitem","form"],{cb:a,i:!0})||"n"===e[A]&&("o"===e[A-1]&&p(e,A,["section","caption","figcaption","option","button"],{cb:a,i:!0})||p(e,A,["span","keygen","dfn","main"],{cb:a,i:!0})))&&(T=!0):("o"===e[A]&&p(e,A,["bdo","video","audio"],{cb:a,i:!0})||"p"===e[A]&&(a(e[A-1])||"u"===e[A-1]&&p(e,A,["hgroup","colgroup","optgroup","sup"],{cb:a,i:!0})||p(e,A,["map","samp","rp"],{cb:a,i:!0}))||"q"===e[A]&&a(e[A-1])||"r"===e[A]&&("e"===e[A-1]&&p(e,A,["header","meter","footer"],{cb:a,i:!0})||p(e,A,["var","br","abbr","wbr","hr","tr"],{cb:a,i:!0}))||"s"===e[A]&&("s"===e[A-1]&&p(e,A,["address","progress"],{cb:a,i:!0})||p(e,A,["canvas","details","ins"],{cb:a,i:!0})||a(e[A-1]))||"t"===e[A]&&("c"===e[A-1]&&p(e,A,["object","select"],{cb:a,i:!0})||"o"===e[A-1]&&p(e,A,["slot","tfoot"],{cb:a,i:!0})||"p"===e[A-1]&&p(e,A,["script","noscript"],{cb:a,i:!0})||"u"===e[A-1]&&p(e,A,["input","output"],{cb:a,i:!0})||p(e,A,["fieldset","rt","datalist","dt"],{cb:a,i:!0}))||"u"===e[A]&&(a(e[A-1])||p(e,A,"menu",{cb:a,i:!0}))||"v"===e[A]&&p(e,A,["nav","div"],{cb:a,i:!0})||"y"===e[A]&&p(e,A,["ruby","body","tbody","summary"],{cb:a,i:!0}))&&(T=!0)):O&&o(e[A],49,54)?(O=!1,"h"!==e[A-1]||"<"!==e[A-2]&&""!==e[A-2].trim()||(T=!0)):"="!==e[A]&&'"'!==e[A]||(O=!1))}return h.returnRangesOnly?u(c):c.length?function(e,r,n){var i,o=0,a=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if(!f(e))throw new TypeError("ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ".concat(t(e),", equal to: ").concat(JSON.stringify(e,null,4)));if(null===r)return e;if(!Array.isArray(r))throw new TypeError("ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ".concat(t(r),", equal to: ").concat(JSON.stringify(r,null,4)));if(n&&"function"!=typeof n)throw new TypeError("ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: ".concat(t(n),", equal to: ").concat(JSON.stringify(n,null,4)));var s=(i=Array.isArray(r)&&(Number.isInteger(r[0])&&r[0]>=0||/^\d*$/.test(r[0]))&&(Number.isInteger(r[1])&&r[1]>=0||/^\d*$/.test(r[1]))?[Array.from(r)]:Array.from(r)).length,c=0;i.forEach((function(e,r){if(n&&(o=Math.floor(c/s*10))!==a&&(a=o,n(o)),!Array.isArray(e))throw new TypeError("ranges-apply: [THROW_ID_05] ranges array, second input arg., has ".concat(r,"th element not an array: ").concat(JSON.stringify(e,null,4),", which is ").concat(t(e)));if(!Number.isInteger(e[0])||e[0]<0){if(!/^\d*$/.test(e[0]))throw new TypeError("ranges-apply: [THROW_ID_06] ranges array, second input arg. has ".concat(r,"th element, array [").concat(e[0],",").concat(e[1],"]. That array has first element not an integer, but ").concat(t(e[0]),", equal to: ").concat(JSON.stringify(e[0],null,4),". Computer doesn't like this."));i[r][0]=Number.parseInt(i[r][0],10)}if(!Number.isInteger(e[1])){if(!/^\d*$/.test(e[1]))throw new TypeError("ranges-apply: [THROW_ID_07] ranges array, second input arg. has ".concat(r,"th element, array [").concat(e[0],",").concat(e[1],"]. That array has second element not an integer, but ").concat(t(e[1]),", equal to: ").concat(JSON.stringify(e[1],null,4),". Computer doesn't like this."));i[r][1]=Number.parseInt(i[r][1],10)}c+=1}));var h=u(i,{progressFn:function(t){n&&(o=10+Math.floor(t/10))!==a&&(a=o,n(o))}}),g=h.length;if(g>0){var m=e.slice(h[g-1][1]);e=h.reduce((function(t,r,i,s){n&&(o=20+Math.floor(i/g*80))!==a&&(a=o,n(o));var c=0===i?0:s[i-1][1],u=s[i][0];return t+e.slice(c,u)+(l(s[i][2])?s[i][2]:"")}),""),e+=m}return e}(e,c):e}}));
