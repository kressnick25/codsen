/**
 * easy-replace
 * Replace strings with optional lookarounds, but without regexes
 * Version: 3.7.54
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/easy-replace
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).easyReplace=t()}(this,(function(){"use strict";function e(e){function t(e){return null!=e}return t(e)&&"boolean"!=typeof e?Array.isArray(e)?e.filter((function(e){return t(e)&&"boolean"!=typeof e})).map((function(e){return String(e)})).filter((function(e){return e.length>0})):[String(e)]:[""]}function t(e,t,r,i){for(var o=!0,f=Array.from(e),n=0,a=f.length;n<a;n++)if(i){if(f[n].toLowerCase()!==t[r-Array.from(e).length+n].toLowerCase()){o=!1;break}}else if(f[n]!==t[r-Array.from(e).length+n]){o=!1;break}return o}function r(e,t,r,i){for(var o=!0,f=Array.from(e),n=0,a=f.length;n<a;n++)if(i){if(f[n].toLowerCase()!==t[r+n].toLowerCase()){o=!1;break}}else if(f[n]!==t[r+n]){o=!1;break}return o}return function(i,o,f){var n=Object.assign({},{i:{leftOutsideNot:!1,leftOutside:!1,leftMaybe:!1,searchFor:!1,rightMaybe:!1,rightOutside:!1,rightOutsideNot:!1}},o),a=e(i);n.leftOutsideNot=e(n.leftOutsideNot),n.leftOutside=e(n.leftOutside),n.leftMaybe=e(n.leftMaybe),n.searchFor=String(n.searchFor),n.rightMaybe=e(n.rightMaybe),n.rightOutside=e(n.rightOutside),n.rightOutsideNot=e(n.rightOutsideNot);for(var l,s,h,u,g=e(f),c=Array.from(a[0]),d=[],y="",b=function(e,t,r){function i(e){return null!=e}if("string"!=typeof e||0===e.length||"string"!=typeof t||0===t.length)return[];for(var o,f=[],n=Array.from(e),a=Array.from(t),l=0;l<n.length;l++)if(r.i){if(n[l].toLowerCase()===a[0].toLowerCase()){o=!0;for(var s=0;s<a.length;s++)if(!i(n[l+s])||!i(a[s])||n[l+s].toLowerCase()!==a[s].toLowerCase()){o=!1;break}o&&f.push(l)}}else if(n[l]===a[0]){o=!0;for(var h=0;h<a.length;h++)if(n[l+h]!==a[h]){o=!1;break}o&&f.push(l)}return f}(a[0],n.searchFor,{i:n.i.searchFor}),O=0,m=b.length;O<m;O++){var v=b[O];if(l=v,s=v+Array.from(n.searchFor).length,n.leftMaybe.length>0)for(var A=0,p=n.leftMaybe.length;A<p;A++){h=!0;for(var M=Array.from(n.leftMaybe[A]),N=0,k=M.length;N<k;N++)if(n.i.leftMaybe){if(M[N].toLowerCase()!==c[v-M.length+N].toLowerCase()){h=!1;break}}else if(M[N]!==c[v-M.length+N]){h=!1;break}h&&v-M.length<l&&(l=v-M.length)}if(n.rightMaybe.length>0)for(var w=0,C=n.rightMaybe.length;w<C;w++){h=!0;for(var L=Array.from(n.rightMaybe[w]),F=0,j=L.length;F<j;F++)if(n.i.rightMaybe){if(L[F].toLowerCase()!==c[v+Array.from(n.searchFor).length+F].toLowerCase()){h=!1;break}}else if(L[F]!==c[v+Array.from(n.searchFor).length+F]){h=!1;break}h&&s<v+Array.from(n.searchFor).length+L.length&&(s=v+Array.from(n.searchFor).length+L.length)}if(""!==n.leftOutside[0]){u=!1;for(var E=0,S=n.leftOutside.length;E<S;E++)(h=t(n.leftOutside[E],c,l,n.i.leftOutside))&&(u=!0);if(!u)continue}if(""!==n.rightOutside[0]){u=!1;for(var x=0,R=n.rightOutside.length;x<R;x++)(h=r(n.rightOutside[x],c,s,n.i.rightOutside))&&(u=!0);if(!u)continue}if(""!==n.leftOutsideNot[0]){for(var q=0,z=n.leftOutsideNot.length;q<z;q++)if(h=t(n.leftOutsideNot[q],c,l,n.i.leftOutsideNot)){l=-1,s=-1;break}if(-1===l)continue}if(""!==n.rightOutsideNot[0]){for(var B=0,D=n.rightOutsideNot.length;B<D;B++)if(h=r(n.rightOutsideNot[B],c,s,n.i.rightOutsideNot)){l=-1,s=-1;break}if(-1===l)continue}d.push([l,s])}return d.length>0?(d.forEach((function(e,t){void 0!==d[t+1]&&d[t][1]>d[t+1][0]&&(d[t+1][0]=d[t][1])})),d.forEach((function(e,t){e[0]===e[1]&&d.splice(t,1)})),d.length>0&&0!==d[0][0]&&(y+=c.slice(0,d[0][0]).join("")),d.forEach((function(e,t){y+=g.join(""),void 0!==d[t+1]?y+=c.slice(d[t][1],d[t+1][0]).join(""):y+=c.slice(d[t][1]).join("")})),y):a.join("")}}));
