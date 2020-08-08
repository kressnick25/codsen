/**
 * easy-replace
 * Replace strings with optional lookarounds, but without regexes
 * Version: 3.7.60
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/easy-replace
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).easyReplace=t()}(this,(function(){"use strict";function e(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function t(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function r(r){for(var i=1;i<arguments.length;i++){var o=null!=arguments[i]?arguments[i]:{};i%2?t(Object(o),!0).forEach((function(t){e(r,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))}))}return r}function i(e){function t(e){return null!=e}return t(e)&&"boolean"!=typeof e?Array.isArray(e)?e.filter((function(e){return t(e)&&"boolean"!=typeof e})).map((function(e){return String(e)})).filter((function(e){return e.length>0})):[String(e)]:[""]}function o(e,t,r,i){for(var o=!0,n=Array.from(e),f=0,a=n.length;f<a;f++)if(i){if(n[f].toLowerCase()!==t[r-Array.from(e).length+f].toLowerCase()){o=!1;break}}else if(n[f]!==t[r-Array.from(e).length+f]){o=!1;break}return o}function n(e,t,r,i){for(var o=!0,n=Array.from(e),f=0,a=n.length;f<a;f++)if(i){if(n[f].toLowerCase()!==t[r+f].toLowerCase()){o=!1;break}}else if(n[f]!==t[r+f]){o=!1;break}return o}return function(e,t,f){var a=r(r({},{i:{leftOutsideNot:!1,leftOutside:!1,leftMaybe:!1,searchFor:!1,rightMaybe:!1,rightOutside:!1,rightOutsideNot:!1}}),t),l=i(e);a.leftOutsideNot=i(a.leftOutsideNot),a.leftOutside=i(a.leftOutside),a.leftMaybe=i(a.leftMaybe),a.searchFor=String(a.searchFor),a.rightMaybe=i(a.rightMaybe),a.rightOutside=i(a.rightOutside),a.rightOutsideNot=i(a.rightOutsideNot);for(var u,s,h,g,c=i(f),y=Array.from(l[0]),b=[],O="",d=function(e,t,r){function i(e){return null!=e}if("string"!=typeof e||0===e.length||"string"!=typeof t||0===t.length)return[];for(var o,n=[],f=Array.from(e),a=Array.from(t),l=0;l<f.length;l++)if(r.i){if(f[l].toLowerCase()===a[0].toLowerCase()){o=!0;for(var u=0;u<a.length;u++)if(!i(f[l+u])||!i(a[u])||f[l+u].toLowerCase()!==a[u].toLowerCase()){o=!1;break}o&&n.push(l)}}else if(f[l]===a[0]){o=!0;for(var s=0;s<a.length;s++)if(f[l+s]!==a[s]){o=!1;break}o&&n.push(l)}return n}(l[0],a.searchFor,{i:a.i.searchFor}),p=0,v=d.length;p<v;p++){var m=d[p];if(u=m,s=m+Array.from(a.searchFor).length,a.leftMaybe.length>0)for(var w=0,j=a.leftMaybe.length;w<j;w++){h=!0;for(var A=Array.from(a.leftMaybe[w]),M=0,N=A.length;M<N;M++)if(a.i.leftMaybe){if(A[M].toLowerCase()!==y[m-A.length+M].toLowerCase()){h=!1;break}}else if(A[M]!==y[m-A.length+M]){h=!1;break}h&&m-A.length<u&&(u=m-A.length)}if(a.rightMaybe.length>0)for(var k=0,C=a.rightMaybe.length;k<C;k++){h=!0;for(var L=Array.from(a.rightMaybe[k]),F=0,P=L.length;F<P;F++)if(a.i.rightMaybe){if(L[F].toLowerCase()!==y[m+Array.from(a.searchFor).length+F].toLowerCase()){h=!1;break}}else if(L[F]!==y[m+Array.from(a.searchFor).length+F]){h=!1;break}h&&s<m+Array.from(a.searchFor).length+L.length&&(s=m+Array.from(a.searchFor).length+L.length)}if(""!==a.leftOutside[0]){g=!1;for(var E=0,S=a.leftOutside.length;E<S;E++)(h=o(a.leftOutside[E],y,u,a.i.leftOutside))&&(g=!0);if(!g)continue}if(""!==a.rightOutside[0]){g=!1;for(var D=0,x=a.rightOutside.length;D<x;D++)(h=n(a.rightOutside[D],y,s,a.i.rightOutside))&&(g=!0);if(!g)continue}if(""!==a.leftOutsideNot[0]){for(var T=0,R=a.leftOutsideNot.length;T<R;T++)if(h=o(a.leftOutsideNot[T],y,u,a.i.leftOutsideNot)){u=-1,s=-1;break}if(-1===u)continue}if(""!==a.rightOutsideNot[0]){for(var q=0,z=a.rightOutsideNot.length;q<z;q++)if(h=n(a.rightOutsideNot[q],y,s,a.i.rightOutsideNot)){u=-1,s=-1;break}if(-1===u)continue}b.push([u,s])}return b.length>0?(b.forEach((function(e,t){void 0!==b[t+1]&&b[t][1]>b[t+1][0]&&(b[t+1][0]=b[t][1])})),b.forEach((function(e,t){e[0]===e[1]&&b.splice(t,1)})),b.length>0&&0!==b[0][0]&&(O+=y.slice(0,b[0][0]).join("")),b.forEach((function(e,t){O+=c.join(""),void 0!==b[t+1]?O+=y.slice(b[t][1],b[t+1][0]).join(""):O+=y.slice(b[t][1]).join("")})),O):l.join("")}}));
