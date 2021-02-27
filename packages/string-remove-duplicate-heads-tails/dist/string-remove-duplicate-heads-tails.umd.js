/**
 * string-remove-duplicate-heads-tails
 * Detect and (recursively) remove head and tail wrappings around the input string
 * Version: 5.0.5
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/string-remove-duplicate-heads-tails/
 */

!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((r="undefined"!=typeof globalThis?globalThis:r||self).stringRemoveDuplicateHeadsTails={})}(this,(function(r){"use strict";function e(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function t(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function n(r){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?t(Object(i),!0).forEach((function(t){e(r,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):t(Object(i)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(i,e))}))}return r}var i,s,a=Object.prototype,o=Function.prototype.toString,u=a.hasOwnProperty,f=o.call(Object),l=a.toString,h=(i=Object.getPrototypeOf,s=Object,function(r){return i(s(r))});var g=function(r){if(!function(r){return!!r&&"object"==typeof r}(r)||"[object Object]"!=l.call(r)||function(r){var e=!1;if(null!=r&&"function"!=typeof r.toString)try{e=!!(r+"")}catch(r){}return e}(r))return!1;var e=h(r);if(null===e)return!0;var t=u.call(e,"constructor")&&e.constructor;return"function"==typeof t&&t instanceof t&&o.call(t)==f};function c(r){return"string"==typeof r?r.length?[r]:[]:r}function p(r){return r&&"object"==typeof r&&!Array.isArray(r)}function y(r){return"string"==typeof r}var m={cb:void 0,i:!1,trimBeforeMatching:!1,trimCharsBeforeMatching:[],maxMismatches:0,firstMustMatch:!1,lastMustMatch:!1,hungry:!1},d=function(r){return r+1};function b(r,e,t,i,s,a){void 0===s&&(s=!1),void 0===a&&(a=d);var o="function"==typeof t?t():t;if(+e<0&&s&&"EOL"===o)return o;var u=n(n({},m),i);if(e>=r.length&&!s)return!1;var f=s?1:t.length,l=0,h=!1,g=!1,c=!1,p=u.maxMismatches,y=e,b=!1,w=!1,v=!1;function T(){return 1===l&&p<u.maxMismatches-1}for(;r[y];){var O=a(y);if(u.trimBeforeMatching&&""===r[y].trim()){if(!r[O]&&s&&"EOL"===t)return!0;y=a(y)}else if(u&&!u.i&&u.trimCharsBeforeMatching&&u.trimCharsBeforeMatching.includes(r[y])||u&&u.i&&u.trimCharsBeforeMatching&&u.trimCharsBeforeMatching.map((function(r){return r.toLowerCase()})).includes(r[y].toLowerCase())){if(s&&"EOL"===t&&!r[O])return!0;y=a(y)}else{var M=O>y?t[t.length-f]:t[f-1];if(!u.i&&r[y]===M||u.i&&r[y].toLowerCase()===M.toLowerCase()){if(b||(b=!0),c||(c=!0),f===t.length){if(w=!0,p!==u.maxMismatches)return!1}else 1===f&&(v=!0);if(f-=1,l++,T())return!1;if(!f)return(l!==t.length||p===u.maxMismatches||!h)&&y}else{if(h||l||(h=!0),!(u.maxMismatches&&p&&y))return!(0!==y||1!==f||u.lastMustMatch||!c)&&0;p-=1;for(var _=0;_<=p;_++){var I=O>y?t[t.length-f+1+_]:t[f-2-_],A=r[a(y)];if(I&&(!u.i&&r[y]===I||u.i&&r[y].toLowerCase()===I.toLowerCase())&&(!u.firstMustMatch||f!==t.length)){if(l++,T())return!1;f-=2,b=!0;break}if(A&&I&&(!u.i&&A===I||u.i&&A.toLowerCase()===I.toLowerCase())&&(!u.firstMustMatch||f!==t.length)){if(!l&&!u.hungry)return!1;f-=1,b=!0;break}if(void 0===I&&p>=0&&b&&(!u.firstMustMatch||w)&&(!u.lastMustMatch||v))return y}b||(g=y)}if(!1!==g&&g!==y&&(g=!1),f<1)return y;y=a(y)}}return f>0?!(!s||"EOL"!==o)||!!(u&&u.maxMismatches>=f&&c)&&(g||0):void 0}function w(r,e,t,i,s){if(p(s)&&Object.prototype.hasOwnProperty.call(s,"trimBeforeMatching")&&"boolean"!=typeof s.trimBeforeMatching)throw new Error("string-match-left-right/"+r+"(): [THROW_ID_09] opts.trimBeforeMatching should be boolean!"+(Array.isArray(s.trimBeforeMatching)?" Did you mean to use opts.trimCharsBeforeMatching?":""));var a,o,u=n(n({},m),s);if("string"==typeof u.trimCharsBeforeMatching&&(u.trimCharsBeforeMatching=c(u.trimCharsBeforeMatching)),u.trimCharsBeforeMatching=u.trimCharsBeforeMatching.map((function(r){return y(r)?r:String(r)})),!y(e))return!1;if(!e.length)return!1;if(!Number.isInteger(t)||t<0)throw new Error("string-match-left-right/"+r+"(): [THROW_ID_03] the second argument should be a natural number. Currently it's of a type: "+typeof t+", equal to:\n"+JSON.stringify(t,null,4));if(y(i))a=[i];else if(Array.isArray(i))a=i;else if(i){if("function"!=typeof i)throw new Error("string-match-left-right/"+r+"(): [THROW_ID_05] the third argument, whatToMatch, is neither string nor array of strings! It's "+typeof i+", equal to:\n"+JSON.stringify(i,null,4));(a=[]).push(i)}else a=i;if(s&&!p(s))throw new Error("string-match-left-right/"+r+"(): [THROW_ID_06] the fourth argument, options object, should be a plain object. Currently it's of a type \""+typeof s+'", and equal to:\n'+JSON.stringify(s,null,4));var f=0,l="";if(u&&u.trimCharsBeforeMatching&&u.trimCharsBeforeMatching.some((function(r,e){return r.length>1&&(f=e,l=r,!0)})))throw new Error("string-match-left-right/"+r+"(): [THROW_ID_07] the fourth argument, options object contains trimCharsBeforeMatching. It was meant to list the single characters but one of the entries at index "+f+" is longer than 1 character, "+l.length+" (equals to "+l+"). Please split it into separate characters and put into array as separate elements.");if(!a||!Array.isArray(a)||Array.isArray(a)&&!a.length||Array.isArray(a)&&1===a.length&&y(a[0])&&!a[0].trim()){if("function"==typeof u.cb){var h,g=t;if("matchLeftIncl"!==r&&"matchRight"!==r||(g+=1),"L"===r[5])for(var d=g;d--;){var w=e[d];if((!u.trimBeforeMatching||u.trimBeforeMatching&&void 0!==w&&w.trim())&&(!u.trimCharsBeforeMatching||!u.trimCharsBeforeMatching.length||void 0!==w&&!u.trimCharsBeforeMatching.includes(w))){h=d;break}}else if(r.startsWith("matchRight"))for(var v=g;v<e.length;v++){var T=e[v];if((!u.trimBeforeMatching||u.trimBeforeMatching&&T.trim())&&(!u.trimCharsBeforeMatching||!u.trimCharsBeforeMatching.length||!u.trimCharsBeforeMatching.includes(T))){h=v;break}}if(void 0===h)return!1;var O=e[h],M=h+1,_="";return M&&M>0&&(_=e.slice(0,M)),"L"===r[5]?u.cb(O,_,h):(h&&h>0&&(_=e.slice(h)),u.cb(O,_,h))}var I="";throw s||(I=" More so, the whole options object, the fourth input argument, is missing!"),new Error("string-match-left-right/"+r+'(): [THROW_ID_08] the third argument, "whatToMatch", was given as an empty string. This means, you intend to match purely by a callback. The callback was not set though, the opts key "cb" is not set!'+I)}for(var A=0,R=a.length;A<R;A++){var E=a[A],B=void 0,N=void 0,j="",W=t;"matchRight"===r?W+=1:"matchLeft"===r&&(W-=1);var C=b(e,W,E,u,o="function"==typeof a[A],(function(e){return"L"===r[5]?e-1:e+1}));if(C&&o&&"function"==typeof E&&"EOL"===E())return!(!E()||u.cb&&!u.cb(B,j,N))&&E();if(Number.isInteger(C)&&(N=r.startsWith("matchLeft")?C-1:C+1,j="L"===r[5]?e.slice(0,C):e.slice(N)),N<0&&(N=void 0),e[N]&&(B=e[N]),Number.isInteger(C)&&(!u.cb||u.cb(B,j,N)))return E}return!1}function v(r,e,t,n){return w("matchLeftIncl",r,e,t,n)}function T(r,e,t,n){return w("matchRightIncl",r,e,t,n)}function O(r,e){void 0===e&&(e=1);function t(r){return Array.from(r).reverse().join("")}function n(r,e,t){var n=t?"\n":"\r",i=t?"\r":"\n";if(!r)return r;for(var s=0,a="",o=0,u=r.length;o<u;o++)(r[o]===n||r[o]===i&&r[o-1]!==n)&&s++,"\r\n".includes(r[o])||" "===r[o]?" "===r[o]?a+=r[o]:r[o]===n?s<=e&&(a+=r[o],r[o+1]===i&&(a+=r[o+1],o++)):r[o]===i&&(!r[o-1]||r[o-1]!==n)&&s<=e&&(a+=r[o]):r[o+1]||s||(a+=" ");return a}if("string"==typeof r&&r.length){var i=1;"number"==typeof+e&&Number.isInteger(+e)&&+e>=0&&(i=+e);var s="",a="";if(r.trim()){if(!r[0].trim())for(var o=0,u=r.length;o<u;o++)if(r[o].trim()){s=r.slice(0,o);break}}else s=r;if(r.trim()&&(""===r.slice(-1).trim()||" "===r.slice(-1)))for(var f=r.length;f--;)if(r[f].trim()){a=r.slice(f+1);break}return""+n(s,i,!1)+r.trim()+t(n(t(a),i,!0))}return r}var M={strictlyTwoElementsInRangeArrays:!1,progressFn:null};function _(r,e){if(!Array.isArray(r)||!r.length)return r;var t,i,s=n(n({},M),e);if(s.strictlyTwoElementsInRangeArrays&&!r.filter((function(r){return r})).every((function(r,e){return 2===r.length||(t=e,i=r.length,!1)})))throw new TypeError("ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, "+t+"th range ("+JSON.stringify(r[t],null,4)+") has not two but "+i+" elements!");if(!r.filter((function(r){return r})).every((function(r,e){return!(!Number.isInteger(r[0])||r[0]<0||!Number.isInteger(r[1])||r[1]<0)||(t=e,!1)})))throw new TypeError("ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, "+t+"th range ("+JSON.stringify(r[t],null,4)+") does not consist of only natural numbers!");var a=Math.pow(r.filter((function(r){return r})).length,2),o=0;return Array.from(r).filter((function(r){return r})).sort((function(r,e){return s.progressFn&&s.progressFn(Math.floor(100*(o+=1)/a)),r[0]===e[0]?r[1]<e[1]?-1:r[1]>e[1]?1:0:r[0]<e[0]?-1:1}))}var I={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};function A(r,e){function t(r){return r&&"object"==typeof r&&!Array.isArray(r)}if(!Array.isArray(r)||!r.length)return null;var i;if(e){if(!t(e))throw new Error("emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n"+JSON.stringify(e,null,4)+" (type "+typeof e+")");if((i=n(n({},I),e)).progressFn&&t(i.progressFn)&&!Object.keys(i.progressFn).length)i.progressFn=null;else if(i.progressFn&&"function"!=typeof i.progressFn)throw new Error('ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "'+typeof i.progressFn+'", equal to '+JSON.stringify(i.progressFn,null,4));if(i.mergeType&&1!=+i.mergeType&&2!=+i.mergeType)throw new Error('ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "'+typeof i.mergeType+'", equal to '+JSON.stringify(i.mergeType,null,4));if("boolean"!=typeof i.joinRangesThatTouchEdges)throw new Error('ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "'+typeof i.joinRangesThatTouchEdges+'", equal to '+JSON.stringify(i.joinRangesThatTouchEdges,null,4))}else i=n({},I);var s,a,o,u=r.filter((function(r){return r})).map((function(r){return[].concat(r)})).filter((function(r){return void 0!==r[2]||r[0]!==r[1]}));if(!(s=i.progressFn?_(u,{progressFn:function(r){(o=Math.floor(r/5))!==a&&(a=o,i.progressFn(o))}}):_(u)))return null;for(var f=s.length-1,l=f;l>0;l--)i.progressFn&&(o=Math.floor(78*(1-l/f))+21)!==a&&o>a&&(a=o,i.progressFn(o)),(s[l][0]<=s[l-1][0]||!i.joinRangesThatTouchEdges&&s[l][0]<s[l-1][1]||i.joinRangesThatTouchEdges&&s[l][0]<=s[l-1][1])&&(s[l-1][0]=Math.min(s[l][0],s[l-1][0]),s[l-1][1]=Math.max(s[l][1],s[l-1][1]),void 0!==s[l][2]&&(s[l-1][0]>=s[l][0]||s[l-1][1]<=s[l][1])&&null!==s[l-1][2]&&(null===s[l][2]&&null!==s[l-1][2]?s[l-1][2]=null:null!=s[l-1][2]?2==+i.mergeType&&s[l-1][0]===s[l][0]?s[l-1][2]=s[l][2]:s[l-1][2]+=s[l][2]:s[l-1][2]=s[l][2]),s.splice(l,1),l=s.length);return s.length?s:null}function R(r){return null!=r}function E(r){return Number.isInteger(r)&&r>=0}function B(r){return"string"==typeof r}var N={limitToBeAddedWhitespace:!1,limitLinebreaksCount:1,mergeType:1},j=function(){function r(r){var e=n(n({},N),r);if(e.mergeType&&1!==e.mergeType&&2!==e.mergeType)if(B(e.mergeType)&&"1"===e.mergeType.trim())e.mergeType=1;else{if(!B(e.mergeType)||"2"!==e.mergeType.trim())throw new Error('ranges-push: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "'+typeof e.mergeType+'", equal to '+JSON.stringify(e.mergeType,null,4));e.mergeType=2}this.opts=e,this.ranges=[]}var e=r.prototype;return e.add=function(r,e,t){var n=this;if(null!=r||null!=e){if(R(r)&&!R(e)){if(Array.isArray(r)){if(r.length){if(r.some((function(r){return Array.isArray(r)})))return void r.forEach((function(r){Array.isArray(r)&&n.add.apply(n,r)}));r.length&&E(+r[0])&&E(+r[1])&&this.add.apply(this,r)}return}throw new TypeError('ranges-push/Ranges/add(): [THROW_ID_12] the first input argument, "from" is set ('+JSON.stringify(r,null,0)+') but second-one, "to" is not ('+JSON.stringify(e,null,0)+")")}if(!R(r)&&R(e))throw new TypeError('ranges-push/Ranges/add(): [THROW_ID_13] the second input argument, "to" is set ('+JSON.stringify(e,null,0)+') but first-one, "from" is not ('+JSON.stringify(r,null,0)+")");var i=+r,s=+e;if(E(t)&&(t=String(t)),!E(i)||!E(s))throw E(i)&&i>=0?new TypeError('ranges-push/Ranges/add(): [THROW_ID_10] "to" value, the second input argument, must be a natural number or zero! Currently it\'s of a type "'+typeof s+'" equal to: '+JSON.stringify(s,null,4)):new TypeError('ranges-push/Ranges/add(): [THROW_ID_09] "from" value, the first input argument, must be a natural number or zero! Currently it\'s of a type "'+typeof i+'" equal to: '+JSON.stringify(i,null,4));if(R(t)&&!B(t)&&!E(t))throw new TypeError("ranges-push/Ranges/add(): [THROW_ID_08] The third argument, the value to add, was given not as string but "+typeof t+", equal to:\n"+JSON.stringify(t,null,4));if(R(this.ranges)&&Array.isArray(this.last())&&i===this.last()[1]){if(this.last()[1]=s,this.last(),null!==this.last()[2]&&R(t)){var a=!(this.last()[2]&&this.last()[2].length>0)||this.opts&&this.opts.mergeType&&1!==this.opts.mergeType?t:this.last()[2]+t;this.opts.limitToBeAddedWhitespace&&(a=O(a,this.opts.limitLinebreaksCount)),B(a)&&!a.length||(this.last()[2]=a)}}else{this.ranges||(this.ranges=[]);var o=void 0===t||B(t)&&!t.length?[i,s]:[i,s,t&&this.opts.limitToBeAddedWhitespace?O(t,this.opts.limitLinebreaksCount):t];this.ranges.push(o)}}},e.push=function(r,e,t){this.add(r,e,t)},e.current=function(){var r=this;return Array.isArray(this.ranges)&&this.ranges.length?(this.ranges=A(this.ranges,{mergeType:this.opts.mergeType}),this.ranges&&this.opts.limitToBeAddedWhitespace?this.ranges.map((function(e){return R(e[2])?[e[0],e[1],O(e[2],r.opts.limitLinebreaksCount)]:e})):this.ranges):null},e.wipe=function(){this.ranges=[]},e.replace=function(r){if(Array.isArray(r)&&r.length){if(!Array.isArray(r[0])||!E(r[0][0]))throw new Error("ranges-push/Ranges/replace(): [THROW_ID_11] Single range was given but we expected array of arrays! The first element, "+JSON.stringify(r[0],null,4)+" should be an array and its first element should be an integer, a string index.");this.ranges=Array.from(r)}else this.ranges=[]},e.last=function(){return Array.isArray(this.ranges)&&this.ranges.length?this.ranges[this.ranges.length-1]:null},r}();var W={classicTrim:!1,cr:!1,lf:!1,tab:!1,space:!0,nbsp:!1};function C(r,e){if("string"!=typeof r)throw new Error("string-trim-spaces-only: [THROW_ID_01] input must be string! It was given as "+typeof r+", equal to:\n"+JSON.stringify(r,null,4));var t,i,s=n(n({},W),e);function a(r){return s.classicTrim&&!r.trim()||!s.classicTrim&&(s.space&&" "===r||s.cr&&"\r"===r||s.lf&&"\n"===r||s.tab&&"\t"===r||s.nbsp&&" "===r)}if(r.length){if(a(r[0]))for(var o=0,u=r.length;o<u;o++){if(!a(r[o])){t=o;break}if(o===r.length-1)return{res:"",ranges:[[0,r.length]]}}if(a(r[r.length-1]))for(var f=r.length;f--;)if(!a(r[f])){i=f+1;break}return t?i?{res:r.slice(t,i),ranges:[[0,t],[i,r.length]]}:{res:r.slice(t),ranges:[[0,t]]}:i?{res:r.slice(0,i),ranges:[[i,r.length]]}:{res:r,ranges:[]}}return{res:"",ranges:[]}}r.defaults={heads:["{{"],tails:["}}"]},r.remDup=function(r,e){var t=Object.prototype.hasOwnProperty;if(void 0===r)throw new Error("string-remove-duplicate-heads-tails: [THROW_ID_01] The input is missing!");if("string"!=typeof r)return r;if(e&&!g(e))throw new Error("string-remove-duplicate-heads-tails: [THROW_ID_03] The given options are not a plain object but "+typeof e+"!");var i=n({},e);if(i&&t.call(i,"heads")){if(!c(i.heads).every((function(r){return"string"==typeof r||Array.isArray(r)})))throw new Error("string-remove-duplicate-heads-tails: [THROW_ID_04] The opts.heads contains elements which are not string-type!");"string"==typeof i.heads&&(i.heads=c(i.heads))}if(i&&t.call(i,"tails")){if(!c(i.tails).every((function(r){return"string"==typeof r||Array.isArray(r)})))throw new Error("string-remove-duplicate-heads-tails: [THROW_ID_05] The opts.tails contains elements which are not string-type!");"string"==typeof i.tails&&(i.tails=c(i.tails))}var s=C(r).res;if(0===s.length)return r;r=s;var a=n(n({},{heads:["{{"],tails:["}}"]}),i);a.heads=a.heads.map((function(r){return r.trim()})),a.tails=a.tails.map((function(r){return r.trim()}));var o=!1,u=!1,f=new j({limitToBeAddedWhitespace:!0}),l=new j({limitToBeAddedWhitespace:!0}),h=!0,p=!0,y="";function m(r,e){var t;return T(r,0,e.heads,{trimBeforeMatching:!0,cb:function(r,e,n){return t=n,!0}})&&T(r,t,e.tails,{trimBeforeMatching:!0,cb:function(r,e,n){return t=n,!0}})?r.slice(t):r}for(;r!==m(r,a);)r=C(m(r,a)).res;function d(r,e){var t;return v(r,r.length-1,e.tails,{trimBeforeMatching:!0,cb:function(r,e,n){return t=n,!0}})&&t&&v(r,t,e.heads,{trimBeforeMatching:!0,cb:function(r,e,n){return t=n,!0}})?r.slice(0,t+1):r}for(;r!==d(r,a);)r=C(d(r,a)).res;if(!(a.heads.length&&T(r,0,a.heads,{trimBeforeMatching:!0})&&a.tails.length&&v(r,r.length-1,a.tails,{trimBeforeMatching:!0})))return C(r).res;for(var b=0,w=r.length;b<w;b++)if(""===r[b].trim());else{var O=void 0;if(T(r,b,a.heads,{trimBeforeMatching:!0,cb:function(r,e,t){return O=t,!0}})&&O){p=!0,h&&(h=!0);var M=void 0;T(r,O,a.tails,{trimBeforeMatching:!0,cb:function(r,e,t){return M=t,!0}})&&f.push(b,M),l.current()&&o&&"tails"!==y&&f.push(l.current()),o||l.current()&&(f.push(l.current()),l.wipe()),l.push(b,O),y="heads",b=O-1;continue}if(T(r,b,a.tails,{trimBeforeMatching:!0,cb:function(e,t,n){return O=Number.isInteger(n)?n:r.length,!0}})&&O){p=!0,h?("heads"===y&&l.wipe(),h=!1):l.push(b,O),y="tails",b=O-1;continue}h&&(h=!0),p&&!o?(o=!0,p=!1):p&&!u?(u=!0,h=!0,p=!1,"heads"===y&&l.wipe()):p&&u&&l.wipe()}return l.current()&&f.push(l.current()),f.current()?function(r,e,t){var n,i=0,s=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if("string"!=typeof r)throw new TypeError("ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: "+typeof r+", equal to: "+JSON.stringify(r,null,4));if(e&&!Array.isArray(e))throw new TypeError("ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: "+typeof e+", equal to: "+JSON.stringify(e,null,4));if(t&&"function"!=typeof t)throw new TypeError("ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: "+typeof t+", equal to: "+JSON.stringify(t,null,4));if(!e||!e.filter((function(r){return r})).length)return r;var a=(n=Array.isArray(e)&&Number.isInteger(e[0])&&Number.isInteger(e[1])?[Array.from(e)]:Array.from(e)).length,o=0;n.filter((function(r){return r})).forEach((function(r,e){if(t&&(i=Math.floor(o/a*10))!==s&&(s=i,t(i)),!Array.isArray(r))throw new TypeError("ranges-apply: [THROW_ID_05] ranges array, second input arg., has "+e+"th element not an array: "+JSON.stringify(r,null,4)+", which is "+typeof r);if(!Number.isInteger(r[0])){if(!Number.isInteger(+r[0])||+r[0]<0)throw new TypeError("ranges-apply: [THROW_ID_06] ranges array, second input arg. has "+e+"th element, array "+JSON.stringify(r,null,0)+". Its first element is not an integer, string index, but "+typeof r[0]+", equal to: "+JSON.stringify(r[0],null,4)+".");n[e][0]=+n[e][0]}if(!Number.isInteger(r[1])){if(!Number.isInteger(+r[1])||+r[1]<0)throw new TypeError("ranges-apply: [THROW_ID_07] ranges array, second input arg. has "+e+"th element, array "+JSON.stringify(r,null,0)+". Its second element is not an integer, string index, but "+typeof r[1]+", equal to: "+JSON.stringify(r[1],null,4)+".");n[e][1]=+n[e][1]}o+=1}));var u=A(n,{progressFn:function(r){t&&(i=10+Math.floor(r/10))!==s&&(s=i,t(i))}}),f=Array.isArray(u)?u.length:0;if(f>0){var l=r.slice(u[f-1][1]);r=u.reduce((function(e,n,a,o){return t&&(i=20+Math.floor(a/f*80))!==s&&(s=i,t(i)),e+r.slice(0===a?0:o[a-1][1],o[a][0])+(o[a][2]||"")}),""),r+=l}return r}(r,f.current()).trim():r.trim()},r.version="5.0.5",Object.defineProperty(r,"__esModule",{value:!0})}));
