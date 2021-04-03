/**
 * @name email-comb
 * @fileoverview Remove unused CSS from email templates
 * @version 5.0.12
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/email-comb/}
 */

var $l=Object.create,Ee=Object.defineProperty,al=Object.getPrototypeOf,Ve=Object.prototype.hasOwnProperty,ml=Object.getOwnPropertyNames,cl=Object.getOwnPropertyDescriptor,Qe=Object.getOwnPropertySymbols,gl=Object.prototype.propertyIsEnumerable;var ze=(e,f,A)=>f in e?Ee(e,f,{enumerable:!0,configurable:!0,writable:!0,value:A}):e[f]=A,Ae=(e,f)=>{for(var A in f||(f={}))Ve.call(f,A)&&ze(e,A,f[A]);if(Qe)for(var A of Qe(f))gl.call(f,A)&&ze(e,A,f[A]);return e},Ye=e=>Ee(e,"__esModule",{value:!0});var bl=(e,f)=>{for(var A in f)Ee(e,A,{get:f[A],enumerable:!0})},dl=(e,f,A)=>{if(f&&typeof f=="object"||typeof f=="function")for(let r of ml(f))!Ve.call(e,r)&&r!=="default"&&Ee(e,r,{get:()=>f[r],enumerable:!(A=cl(f,r))||A.enumerable});return e},W=e=>dl(Ye(Ee(e!=null?$l(al(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);Ye(exports);bl(exports,{comb:()=>hl,defaults:()=>tl,version:()=>fl});var b=W(require("string-match-left-right")),el=W(require("regex-empty-conditional-comments")),ue=W(require("string-extract-class-names")),Ie=W(require("array-pull-all-with-glob")),v=W(require("string-left-right"));var Xe="5.0.12";var _e=W(require("lodash.intersection")),I=W(require("string-range-expander")),ll=W(require("string-uglify")),nl=W(require("ranges-apply")),ve=W(require("lodash.pullall")),ol=W(require("html-crush")),Pe=W(require("ranges-push")),Y=W(require("lodash.uniq")),re=W(require("matcher"));var Ze=/[\n]?\s*<style[^>]*>\s*<\/style\s*>/g,Be=/[\n]?\s*@(media|supports|document)[^{]*{\s*}/g,Ue=/@media[^{@}]+{(?=\s*<\/style>)/g;function xe(e){return e&&typeof e=="object"&&!Array.isArray(e)}function je(e,f){return Object.prototype.hasOwnProperty.call(e,f)}function Ne(e){return typeof e=="string"&&e.length===1&&(e.charCodeAt(0)>64&&e.charCodeAt(0)<91||e.charCodeAt(0)>96&&e.charCodeAt(0)<123)}var fl=Xe,tl={whitelist:[],backend:[],uglify:!1,removeHTMLComments:!0,removeCSSComments:!0,doNotRemoveHTMLCommentsWhoseOpeningTagContains:["[if","[endif"],reportProgressFunc:null,reportProgressFuncFrom:0,reportProgressFuncTo:100};function hl(e,f){let A=Date.now(),r=new Pe.Ranges({limitToBeAddedWhitespace:!0}),pe=new Pe.Ranges,sl=new Pe.Ranges;function B(u){return/[-_A-Za-z0-9]/.test(u)}function ne(u={}){return Ae({valuesStart:null,valueStart:null,nameStart:null,quoteless:!1},u)}let w,F,Se,$e=[],ae=[],me=[],y,ye,Te,c,m,ce={},N=0,We,X,K,De=null,G=[],qe=0,Ke=0,oe=0,Z,ge,E,D,V=!1,C,U,x,L=null,j=!1,Q,be,J=0,ee=0,il=`.# ~\\!@$%^&*()+=,/';:"?><[]{}|\`	
`,Le=["media","supports","document"],we=["font-feature-values","counter-style","namespace","font-face","keyframes","viewport","charset","import","page"],ul=["{","(","<",'"',"'","@",";"];if(typeof e!="string")throw new TypeError(`email-comb: [THROW_ID_01] Input must be string! Currently it's ${typeof e}`);if(f&&!xe(f))throw new TypeError(`email-comb: [THROW_ID_02] Options, second input argument, must be a plain object! Currently it's ${typeof f}, equal to: ${JSON.stringify(f,null,4)}`);let t=Ae(Ae({},tl),f);if(typeof t.doNotRemoveHTMLCommentsWhoseOpeningTagContains=="string"&&(t.doNotRemoveHTMLCommentsWhoseOpeningTagContains=[t.doNotRemoveHTMLCommentsWhoseOpeningTagContains].filter(u=>u.trim())),typeof t.whitelist=="string")t.whitelist=[t.whitelist];else if(!Array.isArray(t.whitelist))throw new TypeError(`email-comb: [THROW_ID_03] opts.whitelist should be an array, but it was customised to a wrong thing, ${JSON.stringify(t.whitelist,null,4)}`);if(t.whitelist.length>0&&!t.whitelist.every(u=>typeof u=="string"))throw new TypeError(`email-comb: [THROW_ID_04] opts.whitelist array should contain only string-type elements. Currently we\ve got:
${JSON.stringify(t.whitelist,null,4)}`);if(!Array.isArray(t.backend))throw new TypeError(`email-comb: [THROW_ID_05] opts.backend should be an array, but it was customised to a wrong thing, ${JSON.stringify(t.backend,null,4)}`);if(t.backend.length>0&&t.backend.some(u=>!xe(u)))throw new TypeError(`email-comb: [THROW_ID_06] opts.backend array should contain only plain objects but it contains something else:
${JSON.stringify(t.backend,null,4)}`);if(t.backend.length>0&&!t.backend.every(u=>je(u,"heads")&&je(u,"tails")))throw new TypeError(`email-comb: [THROW_ID_07] every object within opts.backend should contain keys "heads" and "tails" but currently it's not the case. Whole "opts.backend" value array is currently equal to:
${JSON.stringify(t.backend,null,4)}`);if(typeof t.uglify!="boolean")if(t.uglify===1||t.uglify===0)t.uglify=!!t.uglify;else throw new TypeError(`email-comb: [THROW_ID_08] opts.uglify should be a Boolean. Currently it's set to: ${JSON.stringify(t.uglify,null,4)}}`);if(t.reportProgressFunc&&typeof t.reportProgressFunc!="function")throw new TypeError(`email-comb: [THROW_ID_09] opts.reportProgressFunc should be a function but it was given as :
${JSON.stringify(t.reportProgressFunc,null,4)} (${typeof t.reportProgressFunc})`);let O=null,H=null;Array.isArray(t.backend)&&t.backend.length&&(O=t.backend.map(u=>u.heads),H=t.backend.map(u=>u.tails));let g=e.length,Ge=.06,He=1;t.reportProgressFunc&&(He=Math.floor((t.reportProgressFuncTo-(t.reportProgressFuncTo-t.reportProgressFuncFrom)*Ge-t.reportProgressFuncFrom)/2),""+`[${33}mceil[${39}m`+JSON.stringify(He,null,4));let ke=0;(!e.length||!`\r
`.includes(e[e.length-1]))&&(ke=1);let d,h,Fe=[],R=[],de=[],fe=[],Je={},p,T,z,$,te=[],M=0,P,Re=[],q=[],le=[],se,ie,Ce,Me={n:0,r:0,rn:0};for(let u=1;u<=2;u++){We=!1,X=!1,D=null,V=!1,Q=!0,x=!0,c=ne(),Z=!0,j=!1,C=null,m=ne(),ye=null,L=null,z=null,T=!1,$=null,K=!1,E=null,P=!1,y=null,h=null,w=null,Te=null,se=null,F=null,d=!1,N+=g;e:for(let l=0;l<g;l++){u===1&&""+`[${39}m${`---${`[${32}m round ${u} [${39}m`}-----------------------`}[${36}m`+`[${35}m${l}[${39}m`+(e[l]&&e[l].trim()!==""?e[l]:JSON.stringify(e[l],null,0)),t.reportProgressFunc&&(g>1e3&&g<2e3?u===1&&l===0&&t.reportProgressFunc(Math.floor((t.reportProgressFuncTo-t.reportProgressFuncFrom)/2)):g>=2e3&&(p=t.reportProgressFuncFrom+Math.floor(l/g*He)+(u===1?0:He),p!==M&&(M=p,t.reportProgressFunc(p))));let a=e[l];if(e[l]===`
`?e[l-1]==="\r"?u===1&&(Me.rn+=1):u===1&&(Me.n+=1):e[l]==="\r"&&e[l+1]!==`
`&&u===1&&(Me.r+=1),T!==!0&&(F===null&&w!==null&&l>=w||w!==null&&F!==null&&w>F&&w<l)?(""+`[${33}mstyleStartedAt[${39}m`+JSON.stringify(w,null,4),""+`[${33}mstyleEndedAt[${39}m`+JSON.stringify(F,null,4),T=!0,P=!1):P!==!0&&Te!==null&&(w===null||w<l)&&(F===null||F<l)&&(""+P,P=!0,T=!1),!d&&(e[l]==='"'||e[l]==="'")){if(z)if(e[l]==='"'&&e[(0,v.right)(e,l)]==="'"&&e[(0,v.right)(e,(0,v.right)(e,l))]==='"'||e[l]==="'"&&e[(0,v.right)(e,l)]==='"'&&e[(0,v.right)(e,(0,v.right)(e,l))]==="'"){l=(0,v.right)(e,(0,v.right)(e,l)),""+(0,v.right)(e,(0,v.right)(e,l));continue}else z===e[l]&&(z=null,""+`[${31}mRESET[${39}m`+`[${33}mcurrentlyWithinQuotes[${39}m`);else{let n=(0,v.left)(e,l);typeof n=="number"&&(T&&["(",",",":"].includes(e[n])||P&&!T&&["(",",",":","="].includes(e[n]))&&(z=e[l],""+`[${33}mcurrentlyWithinQuotes[${39}m`+z)}P&&typeof Se=="number"&&Se<l&&(Se=null,""+`[${31}m\u2588\u2588[${39}m`+`[${33}mstyleAttributeStartedAt[${39}m`)}if(d){if(h===null||typeof h!="string"||typeof h=="string"&&!h)""+31+39,d=!1;else if((0,b.matchRightIncl)(e,l,h)){if(""+h,y!==null){if(u===1&&t.removeCSSComments){let n=(0,b.matchLeft)(e,y,[`\r
`,`
`,"\r"]);""+`[${33}mlineBreakPresentOnTheLeft[${39}m`+JSON.stringify(n,null,4);let s=y;typeof n=="string"&&n.length&&(s-=n.length,""+33+39+s),e[s-1]&&B(e[s-1])&&e[l+h.length]&&B(e[l+h.length])?(""+s+(l+h.length),r.push(s,l+h.length,";"),ee+=l+h.length-s):(""+s+(l+h.length),r.push(s,l+h.length),ee+=l+h.length-s)}y=null,""+`[${33}mcommentStartedAt[${39}m`+y}l=l+h.length-1,""+l,h=null,""+`[${33}mdoNothingUntil[${39}m`+h,d=!1,""+`[${33}mdoNothing[${39}m`+d;continue}}if(!d&&e[l]==="<"&&e[l+1]==="s"&&e[l+2]==="t"&&e[l+3]==="y"&&e[l+4]==="l"&&e[l+5]==="e"){X=!0,""+`[${33}mcheckingInsideCurlyBraces[${39}m`+X,""+36+39,T||(T=!0,""+T),""+36+39;for(let n=l;n<g;n++)if(N+=1,""+36+`str[i=${n}]=${e[n]}`+39,e[n]===">"){""+36+39,w=n+1,E=n+1,""+`[${33}mstyleStartedAt[${39}m`+w+`[${33}mruleChunkStartedAt[${39}m`+E,""+36+39;break}}if(!d&&T&&e[l]==="<"&&e[l+1]==="/"&&e[l+2]==="s"&&e[l+3]==="t"&&e[l+4]==="y"&&e[l+5]==="l"&&e[l+6]==="e"&&(F=l-1,""+`[${33}mcheckingInsideCurlyBraces[${39}m`+X,""+`[${33}mstyleEndedAt[${39}m`+F,E=null,X=!1,T&&(T=!1,""+T)),u===1&&(T||P)&&e[l]==="/"&&e[l+1]==="*"&&y===null){y=l,""+`[${33}mcommentStartedAt[${39}m`+l,d=!0,""+`[${33}mdoNothing[${39}m`,h="*/",l+=1;continue}if(!d&&T&&e[l]==="@"){""+l,$&&($=null);let n=(0,b.matchRight)(e,l,Le)||(0,b.matchRight)(e,l,we);if(typeof n=="string"){""+n;let s;(e[l+n.length+1]===";"||e[l+n.length+1]&&!e[l+n.length+1].trim()&&(0,b.matchRight)(e,l+n.length+1,";",{trimBeforeMatching:!0,cb:(i,k,S)=>(s=S,!0)}))&&r.push(l,s||l+n.length+2);let o;""+36+39;for(let i=l+1;i<g;i++){if(N+=1,""+36+`str[${i}] = ${e[i]}`+39+`[${33}msecondaryStopper[${39}m`+o,o&&e[i]===o)if(""+36+`atRulesWhichNeedToBeIgnored = ${JSON.stringify(we,null,0)} - VS - matchedAtTagsName = ${n}
atRulesWhichMightWrapStyles = ${JSON.stringify(Le,null,0)} - VS - matchedAtTagsName = ${n}`+39,e[i]==="}"&&we.includes(n)||e[i]==="{"&&Le.includes(n)){l=i,""+31+`i = ${l}`+39,E=i+1,""+`[${33}mruleChunkStartedAt[${39}m`+E;continue e}else{o=void 0,""+35+39;continue}if(e[i]==='"'&&!o?(o='"',""+35+39+o):e[i]==="'"&&!o?(o="'",""+35+39+o):e[i]==="("&&!o?(o=")",""+35+39+o):we.includes(n)&&e[i]==="{"&&!o&&(o="}",""+35+39+o),!o&&ul.includes(e[i])){""+i+e[i];let k,S;if(e[i]==="{"||e[i]===";"){K=!1,E=i+1,""+`[${33}minsideCurlyBraces[${39}m`+`[${33}mruleChunkStartedAt[${39}m`+E,l=i;continue e}else(e[i]==="@"||e[i]==="<")&&u===1&&!e.slice(l,i).includes("{")&&!e.slice(l,i).includes("(")&&!e.slice(l,i).includes('"')&&!e.slice(l,i).includes("'")&&(k=l,S=i+(e[i]===";"?1:0),""+k+S+e.slice(k,S),r.push(k,S));""+`[${33}mpushRangeTo[${39}m`+S+`[${33}mz[${39}m`+i;let he=S?S-1:i-1+(e[i]==="{"?1:0);""+`[${33}miOffset[${39}m`+he,""+31+`i = ${he}; ruleChunkStartedAt = ${he+1};`+39,l=he,E=he+1;continue e}}}}if(!d&&T&&K&&X&&a==="}"&&!z&&!oe&&(""+`[${32}m\u2588\u2588[${39}m`,u===2&&x&&E&&(r.push(E,l+1),""+`[${32}mPUSH[${39}m`+E+(l+1)+JSON.stringify(r,null,4)),K=!1,""+`[${33}minsideCurlyBraces[${39}m`,""+31+`headWholeLineCanBeDeleted = ${x}`+39+31+`lastKeptChunksCommaAt = ${L}`+39+31+`onlyDeletedChunksFollow = ${j}`+39,E&&(E=l+1,""+`[${33}mruleChunkStartedAt[${39}m`+E),D=null,V=!1,x=!0,C=null,L=null,j=!1,""+`[${33}mselectorChunkStartedAt[${39}m`+`[${33}msingleSelectorStartedAt[${39}m`+`[${33}mheadWholeLineCanBeDeleted[${39}m`+`[${33}mselectorChunkCanBeDeleted[${39}m`+`[${33}mlastKeptChunksCommaAt[${39}m`+`[${33}monlyDeletedChunksFollow[${39}m`),!d&&!y&&w&&l>=w&&(F===null&&l>=w||F&&w>F&&w<=l)&&!K){if(C===null){if(a==="."||a==="#")C=l,""+`[${33}msingleSelectorStartedAt[${39}m`+C;else if((0,b.matchLeft)(e,l,"[class="))""+`[${33}m\u2588\u2588[${39}m`,Ne(a)?(C=l,U=".",""+`[${33}msingleSelectorStartedAt[${39}m`+C+`[${33}msingleSelectorType[${39}m`+U):`"'`.includes(a)&&Ne(e[(0,v.right)(e,l)])&&(C=(0,v.right)(e,l),U=".",""+`[${33}msingleSelectorStartedAt[${39}m`+C+`[${33}msingleSelectorType[${39}m`+U);else if((0,b.matchLeft)(e,l,"[id="))""+`[${33}m\u2588\u2588[${39}m`,Ne(a)?(C=l,U="#",""+`[${33}msingleSelectorStartedAt[${39}m`+C+`[${33}msingleSelectorType[${39}m`+U):`"'`.includes(a)&&Ne(e[(0,v.right)(e,l)])&&(C=(0,v.right)(e,l),U="#",""+`[${33}msingleSelectorStartedAt[${39}m`+C+`[${33}msingleSelectorType[${39}m`+U);else if(a.trim()){if(a==="}")E=l+1,se=null,""+`[${33}mruleChunkStartedAt[${39}m`+(l+1)+`[${33}mcurrentChunk[${39}m`;else if(a==="<"&&e[l+1]==="!"){""+36+39;for(let n=l;n<g;n++)if(N+=1,""+36+`-----str[${n}]=${e[n]}`+39,e[n]===">"){E=n+1,D=n+1,""+36+`1323 ruleChunkStartedAt=${E}`+39+36+`selectorChunkStartedAt=${D}`+39,l=n;continue e}}}}else if(C!==null&&!B(a)){let n=e.slice(C,l);U&&(n=`${U}${n}`,U=void 0),""+32+n+39,u===2&&!V&&le.includes(n)?(V=!0,""+`[${31}mCHUNK CAN BE DELETED[${39}m`,j=!0,""+`[${33}monlyDeletedChunksFollow[${39}m`):u===2&&!V&&(""+`[${32}mBTW, THIS CHUNK MIGHT NOT BE DELETED[${39}m`,""+`[${33}mopts.whitelist[${39}m`+JSON.stringify(t.whitelist,null,4),t.uglify&&(!Array.isArray(t.whitelist)||!t.whitelist.length||!(0,re.default)([n],t.whitelist).length)&&(""+`[${31}m${`PUSH [${C}, ${l}, ${G[R.indexOf(n)]}]`}[${39}m`,pe.push(C,l,G[R.indexOf(n)])),a===","&&(L=l,j=!1,""+`[${33}mlastKeptChunksCommaAt[${39}m`+L+`[${33}monlyDeletedChunksFollow[${39}m`+j)),a==="."||a==="#"?(C=l,""+`[${33}msingleSelectorStartedAt[${39}m`+C):C=null}if(D===null)a.trim()&&a!=="}"&&a!==";"&&!(e[l]==="/"&&e[l+1]==="*")&&(V=!1,""+`[${33}mselectorChunkCanBeDeleted[${39}m`+V,D=l,""+`[${33}mselectorChunkStartedAt[${39}m`+D);else if(",{".includes(a)){let n=$||l;if(se=e.slice(D,n),""+`[${33}mcurrentChunk[${39}m`+JSON.stringify(se,null,0)+D+n,u===1)$&&(a===","&&$<l?(r.push($,l),""+$+l,J+=l-$):a==="{"&&$<l-1&&(r.push($,l-1),""+$+(l-1),J+=l-1-$)),$e.push(se),""+`[${32}m${se}[${39}m`+JSON.stringify($e,null,0);else if(V){let s=D,o=l;""+`[${33}mfromIndex[${39}m`+s;let i=0;if(a==="{"&&e[s-1]!==">"&&e[s-1]!=="}"){""+36+39;for(let S=D;S--;)if(N+=1,""+36+`----- str[${S}]=${e[S]}`+39,e[S].trim()&&e[S]!==","){s=S+1;break}""+`[${33}mfromIndex[${39}m`+JSON.stringify(s,null,4),e[l-1].trim()||(o=l-1)}else if(a===","&&!e[l+1].trim()){for(let S=l+1;S<g;S++)if(N+=1,e[S].trim()){o=S;break}}else(0,b.matchLeft)(e,s,"{",{trimBeforeMatching:!0,cb:(S,he,rl)=>(i=rl,!0)})&&(s=i+2);""+`[${33}mfromIndex[${39}m`+s,""+`[${33}mtoIndex[${39}m`+o;let k=(0,I.expander)({str:e,from:s,to:o,ifRightSideIncludesThisThenCropTightly:".#",ifRightSideIncludesThisCropItToo:",",extendToOneSide:"right"});""+`[${33}mresToPush[${39}m`+JSON.stringify(k,null,4),r.push(...k),""+JSON.stringify(k,null,0),t.uglify&&pe.wipe()}else x&&(x=!1,""+`[${32}mBTW, WHOLE LINE CAN'T BE DELETED NOW[${39}m`),j&&(j=!1),t.uglify&&(""+`[${31}mMERGE WITH FINAL INDEXES[${39}m`+JSON.stringify(pe.current(),null,0),r.push(pe.current()),pe.wipe());if(a!=="{")D=null,""+`[${33}mselectorChunkStartedAt[${39}m`;else if(u===2&&(""+`[${33}mheadWholeLineCanBeDeleted[${39}m`+x,!x&&L!==null&&j)){let s=L+1;if(`
\r`.includes(e[L+1])){for(let o=L+1;o<g;o++)if(e[o].trim()){s=o;break}}r.push(L,s),""+L+s,L=null,j=!1}}}else We&&(We=!1,""+`[${33}mselectorSinceLinebreakDetected[${39}m`);if(!d&&!T&&P&&e[l]==="/"&&(0,b.matchRight)(e,l,"body",{trimBeforeMatching:!0,i:!0})&&(0,b.matchLeft)(e,l,"<",{trimBeforeMatching:!0})&&(P=!1,Te=null),!d&&e[l]==="<"&&(0,b.matchRight)(e,l,"body",{i:!0,trimBeforeMatching:!0,cb:(n,s,o)=>{if(u===1){if(n!==void 0&&(n.trim()===""||n===">")&&typeof o=="number")if(o-l>5)""+`[${33}mPUSH[${39}m`+l+o,r.push(l,o,"<body"),J+=o-l-5;else return!0;return!0}return!0}})){""+36+39;for(let n=l;n<g;n++)if(N+=1,e[n]===">"){Te=n+1,""+`[${33}mbodyStartedAt[${39}m`+Te;break}""+36+39}if(!d&&P&&!T&&e[l]==="s"&&e[l+1]==="t"&&e[l+2]==="y"&&e[l+3]==="l"&&e[l+4]==="e"&&e[l+5]==="="&&il.includes(e[l-1])&&`"'`.includes(e[l+6])&&(Se=l+7,""+`[${33}mstyleAttributeStartedAt[${39}m`+Se),!d&&P&&!T&&!z&&e[l]==="c"&&e[l+1]==="l"&&e[l+2]==="a"&&e[l+3]==="s"&&e[l+4]==="s"&&e[l-1]&&!e[l-1].trim()){let n,s=!1;if(e[l+5]==="="){if(e[l+6]==='"'||e[l+6]==="'")n=l+7,""+n;else if(B(e[l+6]))n=l+6,""+n,s=!0;else if(e[l+6]&&(!e[l+6].trim()||"/>".includes(e[l+6]))){let o=(0,I.expander)({str:e,from:l,to:l+6,ifRightSideIncludesThisThenCropTightly:"/>",wipeAllWhitespaceOnLeft:!0});""+JSON.stringify(o,null,0),r.push(...o)}}else if(!e[l+5].trim()){for(let o=l+5;o<g;o++)if(N+=1,e[o].trim()){if(e[o]==="="){if(o>l+5&&u===1&&(""+(l+5)+o,r.push(l+5,o)),(e[o+1]==='"'||e[o+1]==="'")&&e[o+2])n=o+2;else if(e[o+1]&&!e[o+1].trim()){for(let i=o+1;i<g;i++)if(N+=1,e[i].trim()){i>o+1&&u===1&&(""+(o+1)+i,r.push(o+1,i)),(e[i]==='"'||e[i]==="'")&&e[i+1]&&(n=i+1);break}}}break}}""+`[${33}mvaluesStart[${39}m`+n,n&&(c=ne({valuesStart:n,quoteless:s,nameStart:l}),""+`[${33}mbodyClass[${39}m`+JSON.stringify(c,null,4),u===1?(Z=!0,""+`[${33}mbodyItsTheFirstClassOrId[${39}m`):u===2&&(Q=!0,""+`[${33}mbodyClassOrIdCanBeDeleted[${39}m`))}if(!d&&P&&!T&&!z&&e[l]==="i"&&e[l+1]==="d"&&e[l-1]&&!e[l-1].trim()){let n,s=!1;if(e[l+2]==="="){if(e[l+3]==='"'||e[l+3]==="'")n=l+4,""+n;else if(B(e[l+3]))n=l+3,""+n,s=!0;else if(e[l+3]&&(!e[l+3].trim()||"/>".includes(e[l+3]))){let o=(0,I.expander)({str:e,from:l,to:l+3,ifRightSideIncludesThisThenCropTightly:"/>",wipeAllWhitespaceOnLeft:!0});""+JSON.stringify(o,null,0),r.push(...o)}}else if(!e[l+2].trim()){for(let o=l+2;o<g;o++)if(N+=1,e[o].trim()){if(e[o]==="="){if(o>l+2&&u===1&&(""+(l+2)+o,r.push(l+2,o)),(e[o+1]==='"'||e[o+1]==="'")&&e[o+2])n=o+2;else if(e[o+1]&&!e[o+1].trim()){for(let i=o+1;i<g;i++)if(N+=1,e[i].trim()){i>o+1&&u===1&&(""+(o+1)+i,r.push(o+1,i)),(e[i]==='"'||e[i]==="'")&&e[i+1]&&(n=i+1);break}}}break}}""+`[${33}mvaluesStart[${39}m`+n,n&&(m=ne({valuesStart:n,quoteless:s,nameStart:l}),""+`[${33}mbodyId[${39}m`+JSON.stringify(m,null,4),u===1?(Z=!0,""+`[${33}mbodyItsTheFirstClassOrId[${39}m`):u===2&&(Q=!0,""+`[${33}mbodyClassOrIdCanBeDeleted[${39}m`))}if(!d&&c.valuesStart!==null&&l>=c.valuesStart&&c.valueStart===null)if(O&&(0,b.matchRightIncl)(e,l,O)){if(d=!0,""+`[${33}mdoNothing[${39}m`,Q=!1,$&&l>$+1){let o=(0,I.expander)({str:e,from:$,to:l,ifLeftSideIncludesThisThenCropTightly:`"'`,ifRightSideIncludesThisThenCropTightly:`"'`});r.push(...o),""+JSON.stringify(o,null,4),$=null,""+`[${33}mwhitespaceStartedAt[${39}m`}else $&&($=null);let n=(0,b.matchRightIncl)(e,l,O);""+`[${33}mmatchedHeads[${39}m`+n;let s=t.backend.find(o=>o.heads===n);""+`[${33}mfindings[${39}m`+JSON.stringify(s,null,4),s&&s.tails&&(h=s.tails,""+`[${33}mdoNothingUntil[${39}m`+h)}else B(a)&&(c.valueStart=l,""+`[${33}mbodyClass.valueStart[${39}m`+c.valueStart,u===1&&(Z&&c.valuesStart!==null&&!e.slice(c.valuesStart,l).trim()&&c.valuesStart<l?(r.push(c.valuesStart,l),""+`[${32}mPUSH[${39}m`+c.valuesStart+l,J+=l-c.valuesStart,Z=!1,""+`[${33}mbodyItsTheFirstClassOrId[${39}m`):$!==null&&$<l-1&&(r.push($+1,l),""+`[${32}mPUSH[${39}m`+($+1)+l,J+=l-$+1)));if(!d&&c.valueStart!==null&&l>c.valueStart&&(!B(a)||H&&(0,b.matchRightIncl)(e,l,H)))if(O&&(0,b.matchRightIncl)(e,l,O)){c.valueStart=null,""+`[${33}mbodyClass.valueStart[${39}m`,c=ne();let n=(0,b.matchRightIncl)(e,l,O);""+`[${33}mmatchedHeads[${39}m`+n;let s=t.backend.find(o=>o.heads===n);""+`[${33}mfindings[${39}m`+JSON.stringify(s,null,4),s&&s.tails&&(h=s.tails,""+`[${33}mdoNothingUntil[${39}m`+h)}else{let n=`${e.slice(c.valueStart,l)}`;if(""+`[${32}m${n}[${39}m`,""+`[${33}mallTails[${39}m`+JSON.stringify(H,null,4),u===1)ae.push(`.${n}`),""+35+39+n+JSON.stringify(ae,null,0);else if(c.valueStart!=null&&te.includes(n)){""+`[${33}mcarvedClass[${39}m`+n,""+`[${33}mbodyClass.valueStart[${39}m`+JSON.stringify(c.valueStart,null,0);let s=(0,I.expander)({str:e,from:c.valueStart,to:l,ifLeftSideIncludesThisThenCropTightly:`"'`,ifRightSideIncludesThisThenCropTightly:`"'`,wipeAllWhitespaceOnLeft:!0}),o="";e[s[0]-1]&&e[s[0]-1].trim()&&e[s[1]]&&e[s[1]].trim()&&(O||H)&&(O&&(0,b.matchLeft)(e,s[0],H)||H&&(0,b.matchRightIncl)(e,s[1],O))&&(o=" "),r.push(...s,o),""+`[${32}mPUSH[${39}m`+JSON.stringify([s[0],s[1],o],null,0)}else Q=!1,""+`[${33}mbodyClassOrIdCanBeDeleted[${39}m`,t.uglify&&!(Array.isArray(t.whitelist)&&t.whitelist.length&&(0,re.default)([`.${n}`],t.whitelist).length)&&(""+`[${31}m${`PUSH [${c.valueStart}, ${l},
                  ${G[R.indexOf(`.${n}`)]}]`}[${39}m`,r.push(c.valueStart,l,G[R.indexOf(`.${n}`)].slice(1)));c.valueStart=null,""+`[${33}mbodyClass.valueStart[${39}m`}if(!d&&m&&m.valueStart!==null&&l>m.valueStart&&(!B(a)||H&&(0,b.matchRightIncl)(e,l,H))){let n=e.slice(m.valueStart,l);if(""+`[${32}m${n}[${39}m`,u===1)me.push(`#${n}`),""+35+39+`#${n}`+JSON.stringify(me,null,4);else if(m.valueStart!=null&&Re.includes(n)){""+`[${33}mcarvedId[${39}m`+n,""+`[${33}mbodyId.valueStart[${39}m`+JSON.stringify(m.valueStart,null,4);let s=(0,I.expander)({str:e,from:m.valueStart,to:l,ifRightSideIncludesThisThenCropTightly:`"'`,wipeAllWhitespaceOnLeft:!0});e[s[0]-1]&&e[s[0]-1].trim()&&e[s[1]]&&e[s[1]].trim()&&(O||H)&&(O&&(0,b.matchLeft)(e,s[0],H||[])||H&&(0,b.matchRightIncl)(e,s[1],O||[]))&&(s[0]+=1),r.push(...s),""+`[${32}mPUSH[${39}m`+JSON.stringify(s,null,0)}else Q=!1,""+`[${33}mbodyClassOrIdCanBeDeleted[${39}m`,""+`[${33}mcarvedId[${39}m`+JSON.stringify(n,null,4),""+JSON.stringify(t.whitelist,null,4),""+n+(0,re.default)([`#${n}`],t.whitelist),t.uglify&&!(Array.isArray(t.whitelist)&&t.whitelist.length&&(0,re.default)([`#${n}`],t.whitelist).length)&&(""+`[${31}m${`PUSH [${m.valueStart}, ${l},
                ${G[R.indexOf(`#${n}`)]}]`}[${39}m`,r.push(m.valueStart,l,G[R.indexOf(`#${n}`)].slice(1)));m.valueStart=null,""+`[${33}mbodyId.valueStart[${39}m`}if(!d&&c.valuesStart!=null&&(!c.quoteless&&(a==="'"||a==='"')||c.quoteless&&!B(e[l]))&&l>=c.valuesStart){if(l===c.valuesStart)u===1&&(""+JSON.stringify((0,I.expander)({str:e,from:c.nameStart,to:l+1,ifRightSideIncludesThisThenCropTightly:"/>",wipeAllWhitespaceOnLeft:!0}),null,0),r.push(...(0,I.expander)({str:e,from:c.nameStart,to:l+1,ifRightSideIncludesThisThenCropTightly:"/>",wipeAllWhitespaceOnLeft:!0})));else{if(u===2&&Q){""+`[${33}minitial range[${39}m`+(c.valuesStart-7)+(`'"`.includes(e[l])?l+1:l);let n=(0,I.expander)({str:e,from:c.valuesStart-7,to:`'"`.includes(e[l])?l+1:l,ifRightSideIncludesThisThenCropTightly:"/>",wipeAllWhitespaceOnLeft:!0});""+`[${32}mSET[${39}m`+`[${33}mexpandedRange[${39}m`+JSON.stringify(n,null,4);let s="";e[n[0]-1]&&e[n[0]-1].trim()&&e[n[1]]&&e[n[1]].trim()&&!"/>".includes(e[n[1]])&&(s=" ",""+(n[0]-1)+e[n[0]-1]+n[1]+e[n[1]]),r.push(...n,s),""+`[${32}mPUSH[${39}m`+JSON.stringify([n[0],n[1],s],null,4)}$!==null&&(r.push($,l),""+`[${32}mPUSH[${39}m`+$+l)}c=ne(),""+`[${33}mbodyClass[${39}m`}if(!d&&m.valuesStart!==null&&(!m.quoteless&&(a==="'"||a==='"')||m.quoteless&&!B(e[l]))&&l>=m.valuesStart){if(l===m.valuesStart)u===1&&(""+m.nameStart+(l+1)+(0,I.expander)({str:e,from:m.nameStart,to:l+1,ifRightSideIncludesThisThenCropTightly:"/>",wipeAllWhitespaceOnLeft:!0})[0]+(0,I.expander)({str:e,from:m.nameStart,to:l+1,ifRightSideIncludesThisThenCropTightly:"/>",wipeAllWhitespaceOnLeft:!0})[1],""+JSON.stringify((0,I.expander)({str:e,from:m.nameStart,to:l+1,ifRightSideIncludesThisThenCropTightly:"/>",wipeAllWhitespaceOnLeft:!0}),null,0),r.push(...(0,I.expander)({str:e,from:m.nameStart,to:l+1,ifRightSideIncludesThisThenCropTightly:"/>",wipeAllWhitespaceOnLeft:!0})));else{if(u===2&&Q){let n=(0,I.expander)({str:e,from:m.valuesStart-4,to:l+1,ifRightSideIncludesThisThenCropTightly:"/>",wipeAllWhitespaceOnLeft:!0}),s="";e[n[0]-1]&&e[n[0]-1].trim()&&e[n[1]]&&e[n[1]].trim()&&!"/>".includes(e[n[1]])&&(s=" "),r.push(...n,s),""+`[${32}mPUSH[${39}m`+JSON.stringify([n[0],n[1],s],null,4)}$!==null&&(r.push($,l),""+`[${32}mPUSH[${39}m`+$+l)}m=ne(),""+`[${33}mbodyId[${39}m`}if(!d&&m.valuesStart&&l>=m.valuesStart&&m.valueStart===null)if(O&&(0,b.matchRightIncl)(e,l,O)){if(d=!0,""+`[${33}mdoNothing[${39}m`,Q=!1,$&&l>$+1){let o=(0,I.expander)({str:e,from:$,to:l,ifLeftSideIncludesThisThenCropTightly:`"'`,ifRightSideIncludesThisThenCropTightly:`"'`});r.push(...o),""+JSON.stringify(o,null,4),$=null,""+`[${33}mwhitespaceStartedAt[${39}m`}else $&&($=null);let n=(0,b.matchRightIncl)(e,l,O);""+`[${33}mmatchedHeads[${39}m`+n;let s=t.backend.find(o=>o.heads===n);""+`[${33}mfindings[${39}m`+JSON.stringify(s,null,4),s&&s.tails&&(h=s.tails,""+`[${33}mdoNothingUntil[${39}m`+h)}else B(a)&&(m.valueStart=l,""+`[${33}mbodyId.valueStart[${39}m`+m.valueStart,u===1&&(Z&&m.valuesStart!==null&&!e.slice(m.valuesStart,l).trim()&&m.valuesStart<l?(r.push(m.valuesStart,l),""+`[${32}mPUSH[${39}m`+m.valuesStart+l,J+=l-m.valuesStart,Z=!1,""+`[${33}mbodyItsTheFirstClassOrId[${39}m`):$!==null&&$<l-1&&(r.push($+1,l),""+`[${32}mPUSH[${39}m`+($+1)+l,J+=l-$+1)));if(!d&&u===1){if(y!==null&&y<l&&e[l]===">"&&!Ce&&(""+`[${33}mstr.slice(commentStartedAt, i)[${39}m`+JSON.stringify(e.slice(y,l),null,4),t.doNotRemoveHTMLCommentsWhoseOpeningTagContains&&Array.isArray(t.doNotRemoveHTMLCommentsWhoseOpeningTagContains)&&t.doNotRemoveHTMLCommentsWhoseOpeningTagContains.length&&t.doNotRemoveHTMLCommentsWhoseOpeningTagContains.some(n=>n.trim()&&e.slice(y,l).toLowerCase().includes(n))&&(ie=!1,""+`[${33}mcanDelete[${39}m`+ie),Ce=!0,""+33+39+Ce),y!==null&&e[l]===">"){if(""+`[${33}mcanDelete[${39}m`+JSON.stringify(ie,null,4),!ge&&e[l-1]==="-"&&e[l-2]==="-"){let n=(0,I.expander)({str:e,from:y,to:l+1,wipeAllWhitespaceOnLeft:!0,addSingleSpaceToPreventAccidentalConcatenation:!0});t.removeHTMLComments&&ie&&(""+JSON.stringify(n,null,0),r.push(...n)),ee+=n[1]-n[0],y=null,ge=void 0,""+`[${33}mcommentStartedAt[${39}m`+`[${33}mbogusHTMLComment[${39}m`}else if(ge){let n=(0,I.expander)({str:e,from:y,to:l+1,wipeAllWhitespaceOnLeft:!0,addSingleSpaceToPreventAccidentalConcatenation:!0});t.removeHTMLComments&&ie&&(""+JSON.stringify(n,null,0),r.push(...n)),ee+=n[1]-n[0],y=null,ge=void 0,""+`[${33}mcommentStartedAt[${39}m`+`[${33}mbogusHTMLComment[${39}m`}}t.removeHTMLComments&&y===null&&e[l]==="<"&&e[l+1]==="!"&&((!O||Array.isArray(O)&&O.length&&!O.includes("<!"))&&(!H||Array.isArray(H)&&H.length&&!H.includes("<!"))&&(""+`[${33}mcommentNearlyStartedAt[${39}m`+JSON.stringify(ye,null,4),!(0,b.matchRight)(e,l+1,"doctype",{i:!0,trimBeforeMatching:!0})&&!(e[l+2]==="-"&&e[l+3]==="-"&&Array.isArray(t.doNotRemoveHTMLCommentsWhoseOpeningTagContains)&&t.doNotRemoveHTMLCommentsWhoseOpeningTagContains.length&&(0,b.matchRight)(e,l+3,t.doNotRemoveHTMLCommentsWhoseOpeningTagContains,{trimBeforeMatching:!0}))&&(y=l,Ce=!1,ie=!0,""+`[${33}mcommentStartedAt[${39}m`+y+`[${33}musedOnce[${39}m`+Ce+`[${33}mcanDelete[${39}m`+ie),ge=!(e[l+2]==="-"&&e[l+3]==="-"),""+`[${33}mbogusHTMLComment[${39}m`+ge),y!==l&&(ye=l))}if(a==="}"&&oe&&(oe-=1,""+oe),!d&&a==="{"&&X&&(K?(oe+=1,""+oe):(K=!0,""+`[${33}minsideCurlyBraces[${39}m`,$!==null&&(e.slice($,l).includes(`
`)||e.slice($,l).includes("\r"))&&(r.push($,l),""+$+l))),d||(e[l].trim()?$!==null&&($=null):$===null&&($=l)),!d&&u===2&&Array.isArray(be)&&be.length&&l===be[0][0]){let n=be.shift();""+`[${33}mtemp[${39}m`+JSON.stringify(n,null,0),n&&n[1]-1>l&&(""+31+`\u2588\u2588 OFFSET MAIN INDEX FROM ${l} TO ${n[1]-1}`+39,l=n[1]-1);continue}if(ye!==null&&e[l]===">"){ye=null,""+`[${33}mcommentNearlyStartedAt[${39}m`;let n=0;if(t.removeHTMLComments&&Array.isArray(t.doNotRemoveHTMLCommentsWhoseOpeningTagContains)&&t.doNotRemoveHTMLCommentsWhoseOpeningTagContains.length&&(t.doNotRemoveHTMLCommentsWhoseOpeningTagContains.some(s=>s.includes("if"))||t.doNotRemoveHTMLCommentsWhoseOpeningTagContains.some(s=>s.includes("mso"))||t.doNotRemoveHTMLCommentsWhoseOpeningTagContains.some(s=>s.includes("ie")))&&(0,b.matchRight)(e,l,"<!--",{trimBeforeMatching:!0,cb:(s,o,i)=>(n=i,!0)})){""+`[${33}mtemp[${39}m`+JSON.stringify(n,null,4)+JSON.stringify(e.slice(n,n+10),null,4),(0,b.matchRight)(e,n-1,"-->",{trimBeforeMatching:!0,cb:(s,o,i)=>(n=i,!0)})&&""+`[${33}mtemp[${39}m`+JSON.stringify(n,null,4)+JSON.stringify(e.slice(n,n+10),null,4),typeof n=="number"&&(l=n-1),""+`[${33}mi[${39}m`+JSON.stringify(l,null,4)+`[${32}mCONTINUE[${39}m`;continue}}u===9&&(P?(""+(c.valueStart?`
* ${`[${90}mbodyClass.valueStart[${39}m`} = ${c.valueStart}`:"")+(m.valueStart?`
* ${`[${90}mbodyId.valueStart[${39}m`} = ${m.valueStart}`:"")+(c.valuesStart?`
* ${`[${90}mbodyClass[${39}m`} = ${JSON.stringify(c,null,0)}`:"")+(m.valuesStart?`
* ${`[${90}mbodyId[${39}m`} = ${JSON.stringify(m,null,0)}`:""),""+`[${33}mbodyItsTheFirstClassOrId[${39}m`+Z+34+`headWholeLineCanBeDeleted = ${x}`+39):T&&(""+36+`headWholeLineCanBeDeleted = ${x}`+39+36+`headWholeLineCanBeDeleted = ${x}`+39+36+`insideCurlyBraces = ${K}`+39+36+`curliesDepth = ${oe}`+39,u===9&&""+`[${90}mruleChunkStartedAt[${39}m = ${E}`+`[${90}mselectorChunkStartedAt[${39}m = ${D}`+`[${90}mselectorChunkCanBeDeleted[${39}m = ${V}`+`[${90}mcurrentChunk[${39}m = ${se}`+`[${90}mwhitespaceStartedAt[${39}m = ${$}`+`[${90}msingleSelectorStartedAt[${39}m = ${C}`+`[${90}mcommentStartedAt[${39}m = ${y}`+`[${90}mcheckingInsideCurlyBraces[${39}m = ${X}`+`[${90}minsideCurlyBraces[${39}m = ${K}`),""+`[${P?32:31}mstateWithinBody[${39}m`+`[${T?32:31}mstateWithinStyleTag[${39}m`+33+39+L+33+39+j)}if(u===1){fe=(0,Y.default)(ae.concat(me)),""+35+39,""+JSON.stringify($e,null,4),""+JSON.stringify(ae,null,4),""+JSON.stringify(me,null,4),""+JSON.stringify(fe,null,4),""+JSON.stringify(t.whitelist,null,4),""+`[${32}mstarting headSelectorsCount[${39}m`+JSON.stringify(ce,null,4),$e.forEach(o=>{(0,ue.extract)(o).res.forEach(i=>{Object.prototype.hasOwnProperty.call(ce,i)?ce[i]+=1:ce[i]=1})}),""+JSON.stringify(ce,null,4),Je=Ae({},ce),de=(0,Y.default)($e.reduce((o,i)=>o.concat((0,ue.extract)(i).res),[])),Ke=de.length,""+`[${33}m1238 AFTER TRAVERSAL,
allClassesAndIdsWithinHead[${39}m`+JSON.stringify(de,null,4);let l=Array.from($e),a=[];""+36+`3330 LOOP preppedHeadSelectorsArr = ${JSON.stringify(l,null,4)}`+39;for(let o=0,i=l.length;o<i;o++){N+=1,""+36+39,""+`[${36}m\u2588\u2588[${39}m`+o+JSON.stringify(l[o],null,4);let k;l[o]!=null&&(k=(0,ue.extract)(l[o]).res),k&&!k.every(S=>fe.includes(S))&&(""+(0,ue.extract)(l[o]),a.push(...(0,ue.extract)(l[o]).res),""+JSON.stringify(a,null,4),l.splice(o,1),o-=1,i-=1)}""+36+39,a=(0,Y.default)((0,Ie.pull)(a,t.whitelist));let n;l&&l.length?(n=l.reduce((o,i)=>o.concat((0,ue.extract)(i).res),[]),""+`[${32}mSET[${39}m`+`[${33}mpreppedAllClassesAndIdsWithinHead[${39}m`+JSON.stringify(n,null,4)):n=[],le=(0,Ie.pull)((0,ve.default)((0,Y.default)(Array.from(de)),ae.concat(me)),t.whitelist),""+`[${32}mheadCssToDelete[${39}m`+JSON.stringify(le,null,4),q=(0,Y.default)((0,Ie.pull)((0,ve.default)(ae.concat(me),n),t.whitelist)),""+`[${32}mbodyCssToDelete[${39}m`+JSON.stringify(q,null,4),le=(0,Y.default)(le.concat((0,_e.default)(a,q))),""+`[${32}mheadCssToDelete[${39}m`+JSON.stringify(le,null,4),te=q.filter(o=>o.startsWith(".")).map(o=>o.slice(1)),""+JSON.stringify(te,null,4),Re=q.filter(o=>o.startsWith("#")).map(o=>o.slice(1)),""+`[${33}mbodyIdsToDelete[${39}m`+JSON.stringify(Re,null,4),""+JSON.stringify(r.current(),null,4),Fe=Object.keys(Je).filter(o=>Je[o]<1),""+`[${33}mallClassesAndIdsThatWereCompletelyDeletedFromHead[${39}m`+JSON.stringify(Fe,null,4),te=(0,Y.default)(te.concat((0,_e.default)((0,Ie.pull)(fe,t.whitelist),Fe).filter(o=>o[0]===".").map(o=>o.slice(1)))),""+`[${33}mbodyClassesToDelete[${39}m`+JSON.stringify(te,null,4);let s=(0,re.default)(fe,t.whitelist);""+`[${31}m\u2588\u2588 \u2588\u2588 \u2588\u2588[${39}m`+`[${33}mallClassesAndIdsWithinBodyThatWereWhitelisted[${39}m`+JSON.stringify(s,null,4),q=(0,Y.default)(q.concat(te.map(o=>`.${o}`),Re.map(o=>`#${o}`))),""+`[${90}mbodyCssToDelete[${39}m`+JSON.stringify(q,null,4),R=(0,ve.default)((0,ve.default)(Array.from(de),q),le),Array.isArray(s)&&s.length&&s.forEach(o=>{R.includes(o)||R.push(o)}),t.uglify&&(G=(0,ll.uglifyArr)(R)),qe=R.length,De=t.uglify?R.map((o,i)=>[o,G[i]]).filter(o=>!t.whitelist.some(i=>re.default.isMatch(o[0],i))):null,""+`[${33}mfinalIndexesToDelete.current()[${39}m`+JSON.stringify(r.current(),null,4),""+`[${33}muglified[${39}m`+JSON.stringify(De,null,4),r.current()?be=Array.from(r.current()||[]):be=null}else u===2&&(""+JSON.stringify(R,null,4),t.uglify&&""+`[${36}mUGLIFICATION[${39}m`+(R.reduce((l,a)=>`${l}   ${`[${33}m${G[R.indexOf(a)]}[${39}m`} --- ${`[${31}m${a}[${39}m`}`),`
`))}r.push(sl.current()),""+`[${33}mstr[${39}m`+e,""+JSON.stringify(r.current(),null,4),e.length&&r.current()&&(e=(0,nl.rApply)(e,r.current()),r.wipe());let _=t.reportProgressFuncTo-(t.reportProgressFuncTo-t.reportProgressFuncFrom)*Ge;for(""+`[${33}mstartingPercentageDone[${39}m`+JSON.stringify(_,null,4),t.reportProgressFunc&&g>=2e3&&(p=Math.floor(_+(t.reportProgressFuncTo-_)/5),p!==M&&(M=p,t.reportProgressFunc(p))),""+e;Be.test(e)||Ue.test(e);)e=e.replace(Be,""),e=e.replace(Ue,""),N+=e.length;t.reportProgressFunc&&g>=2e3&&(p=Math.floor(_+(t.reportProgressFuncTo-_)/5*2),p!==M&&(M=p,t.reportProgressFunc(p))),e=e.replace(Ze,`
`),N+=e.length,t.reportProgressFunc&&g>=2e3&&(p=Math.floor(_+(t.reportProgressFuncTo-_)/5*3),p!==M&&(M=p,t.reportProgressFunc(p)));let Oe=e.length;return e=e.replace((0,el.emptyCondCommentRegex)(),""),N+=e.length,Oe!==e.length&&(ee+=e.length-Oe),t.reportProgressFunc&&g>=2e3&&(p=Math.floor(_+(t.reportProgressFuncTo-_)/5*4),p!==M&&(M=p,t.reportProgressFunc(p))),e=(0,ol.crush)(e,{removeLineBreaks:!1,removeIndentations:!1,removeHTMLComments:!1,removeCSSComments:!1,lineLengthLimit:500}).result,Oe=e.length,Oe!==e.length&&(J+=e.length-Oe),N+=e.length,t.reportProgressFunc&&g>=2e3&&(p=Math.floor(_+(t.reportProgressFuncTo-_)),p!==M&&(M=p,t.reportProgressFunc(p))),e.length&&((!e[0].trim()||!e[e.length-1].trim())&&e.length!==e.trim().length&&(J+=e.length-e.trim().length),e=e.trimStart()),""+`[${33}mallClassesAndIdsWithinHeadFinal[${39}m`+JSON.stringify(R,null,4),e=e.replace(/ ((class|id)=["']) /g," $1"),{log:{timeTakenInMilliseconds:Date.now()-A,traversedTotalCharacters:N,traversedTimesInputLength:g?Math.round(N/g*100)/100:0,originalLength:g,cleanedLength:e.length,bytesSaved:Math.max(g-e.length,0),percentageReducedOfOriginal:g?Math.round(Math.max(g-e.length,0)*100/g):0,nonIndentationsWhitespaceLength:Math.max(J-ke,0),nonIndentationsTakeUpPercentageOfOriginal:g&&Math.max(J-ke,0)?Math.round(Math.max(J,0)*100/g):0,commentsLength:ee,commentsTakeUpPercentageOfOriginal:g&&ee?Math.round(ee*100/g):0,uglified:De},result:e,countAfterCleaning:qe,countBeforeCleaning:Ke,allInHead:de.sort(),allInBody:fe.sort(),deletedFromHead:le.sort(),deletedFromBody:q.sort()}}
