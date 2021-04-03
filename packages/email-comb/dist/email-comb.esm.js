/**
 * @name email-comb
 * @fileoverview Remove unused CSS from email templates
 * @version 5.0.12
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/email-comb/}
 */

import{matchRightIncl as U,matchRight as V,matchLeft as ie}from"string-match-left-right";import{emptyCondCommentRegex as Ze}from"regex-empty-conditional-comments";import{extract as fe}from"string-extract-class-names";import{pull as ve}from"array-pull-all-with-glob";import{left as el,right as w}from"string-left-right";var qe="5.0.12";import Ge from"lodash.intersection";import{expander as E}from"string-range-expander";import{uglifyArr as ll}from"string-uglify";import{rApply as nl}from"ranges-apply";import we from"lodash.pullall";import{crush as ol}from"html-crush";import{Ranges as Ue}from"ranges-push";import Z from"lodash.uniq";import he from"matcher";var Ke=/[\n]?\s*<style[^>]*>\s*<\/style\s*>/g,Fe=/[\n]?\s*@(media|supports|document)[^{]*{\s*}/g,Je=/@media[^{@}]+{(?=\s*<\/style>)/g;function Me(e){return e&&typeof e=="object"&&!Array.isArray(e)}function Be(e,ee){return Object.prototype.hasOwnProperty.call(e,ee)}function Ee(e){return typeof e=="string"&&e.length===1&&(e.charCodeAt(0)>64&&e.charCodeAt(0)<91||e.charCodeAt(0)>96&&e.charCodeAt(0)<123)}var Nl=qe,tl={whitelist:[],backend:[],uglify:!1,removeHTMLComments:!0,removeCSSComments:!0,doNotRemoveHTMLCommentsWhoseOpeningTagContains:["[if","[endif"],reportProgressFunc:null,reportProgressFuncFrom:0,reportProgressFuncTo:100};function Il(e,ee){let Ve=Date.now(),$=new Ue({limitToBeAddedWhitespace:!0}),pe=new Ue,Qe=new Ue;function k(u){return/[-_A-Za-z0-9]/.test(u)}function le(u={}){return{valuesStart:null,valueStart:null,nameStart:null,quoteless:!1,...u}}let A,W,Se,ue=[],re=[],$e=[],p,ye,Te,c,m,ae={},O=0,He,Q,j,Re=null,_=[],xe=0,je=0,ne=0,z,me,C,H,q=!1,y,F,J,R=null,M=!1,K,ce,D=0,Y=0,ze=`.# ~\\!@$%^&*()+=,/';:"?><[]{}|\`	
`,Pe=["media","supports","document"],Ae=["font-feature-values","counter-style","namespace","font-face","keyframes","viewport","charset","import","page"],Ye=["{","(","<",'"',"'","@",";"];if(typeof e!="string")throw new TypeError(`email-comb: [THROW_ID_01] Input must be string! Currently it's ${typeof e}`);if(ee&&!Me(ee))throw new TypeError(`email-comb: [THROW_ID_02] Options, second input argument, must be a plain object! Currently it's ${typeof ee}, equal to: ${JSON.stringify(ee,null,4)}`);let t={...tl,...ee};if(typeof t.doNotRemoveHTMLCommentsWhoseOpeningTagContains=="string"&&(t.doNotRemoveHTMLCommentsWhoseOpeningTagContains=[t.doNotRemoveHTMLCommentsWhoseOpeningTagContains].filter(u=>u.trim())),typeof t.whitelist=="string")t.whitelist=[t.whitelist];else if(!Array.isArray(t.whitelist))throw new TypeError(`email-comb: [THROW_ID_03] opts.whitelist should be an array, but it was customised to a wrong thing, ${JSON.stringify(t.whitelist,null,4)}`);if(t.whitelist.length>0&&!t.whitelist.every(u=>typeof u=="string"))throw new TypeError(`email-comb: [THROW_ID_04] opts.whitelist array should contain only string-type elements. Currently we\ve got:
${JSON.stringify(t.whitelist,null,4)}`);if(!Array.isArray(t.backend))throw new TypeError(`email-comb: [THROW_ID_05] opts.backend should be an array, but it was customised to a wrong thing, ${JSON.stringify(t.backend,null,4)}`);if(t.backend.length>0&&t.backend.some(u=>!Me(u)))throw new TypeError(`email-comb: [THROW_ID_06] opts.backend array should contain only plain objects but it contains something else:
${JSON.stringify(t.backend,null,4)}`);if(t.backend.length>0&&!t.backend.every(u=>Be(u,"heads")&&Be(u,"tails")))throw new TypeError(`email-comb: [THROW_ID_07] every object within opts.backend should contain keys "heads" and "tails" but currently it's not the case. Whole "opts.backend" value array is currently equal to:
${JSON.stringify(t.backend,null,4)}`);if(typeof t.uglify!="boolean")if(t.uglify===1||t.uglify===0)t.uglify=!!t.uglify;else throw new TypeError(`email-comb: [THROW_ID_08] opts.uglify should be a Boolean. Currently it's set to: ${JSON.stringify(t.uglify,null,4)}}`);if(t.reportProgressFunc&&typeof t.reportProgressFunc!="function")throw new TypeError(`email-comb: [THROW_ID_09] opts.reportProgressFunc should be a function but it was given as :
${JSON.stringify(t.reportProgressFunc,null,4)} (${typeof t.reportProgressFunc})`);let T=null,N=null;Array.isArray(t.backend)&&t.backend.length&&(T=t.backend.map(u=>u.heads),N=t.backend.map(u=>u.tails));let g=e.length,_e=.06,Ne=1;t.reportProgressFunc&&(Ne=Math.floor((t.reportProgressFuncTo-(t.reportProgressFuncTo-t.reportProgressFuncFrom)*_e-t.reportProgressFuncFrom)/2),""+`[${33}mceil[${39}m`+JSON.stringify(Ne,null,4));let We=0;(!e.length||!`\r
`.includes(e[e.length-1]))&&(We=1);let b,d,De=[],I=[],ge=[],be=[],Le={},f,S,G,r,oe=[],L=0,v,Ie=[],x=[],X=[],te,se,Ce,ke={n:0,r:0,rn:0};for(let u=1;u<=2;u++){He=!1,Q=!1,H=null,q=!1,K=!0,J=!0,c=le(),z=!0,M=!1,y=null,m=le(),ye=null,R=null,G=null,S=!1,r=null,j=!1,C=null,v=!1,p=null,d=null,A=null,Te=null,te=null,W=null,b=!1,O+=g;e:for(let l=0;l<g;l++){u===1&&""+`[${39}m${`---${`[${32}m round ${u} [${39}m`}-----------------------`}[${36}m`+`[${35}m${l}[${39}m`+(e[l]&&e[l].trim()!==""?e[l]:JSON.stringify(e[l],null,0)),t.reportProgressFunc&&(g>1e3&&g<2e3?u===1&&l===0&&t.reportProgressFunc(Math.floor((t.reportProgressFuncTo-t.reportProgressFuncFrom)/2)):g>=2e3&&(f=t.reportProgressFuncFrom+Math.floor(l/g*Ne)+(u===1?0:Ne),f!==L&&(L=f,t.reportProgressFunc(f))));let a=e[l];if(e[l]===`
`?e[l-1]==="\r"?u===1&&(ke.rn+=1):u===1&&(ke.n+=1):e[l]==="\r"&&e[l+1]!==`
`&&u===1&&(ke.r+=1),S!==!0&&(W===null&&A!==null&&l>=A||A!==null&&W!==null&&A>W&&A<l)?(""+`[${33}mstyleStartedAt[${39}m`+JSON.stringify(A,null,4),""+`[${33}mstyleEndedAt[${39}m`+JSON.stringify(W,null,4),S=!0,v=!1):v!==!0&&Te!==null&&(A===null||A<l)&&(W===null||W<l)&&(""+v,v=!0,S=!1),!b&&(e[l]==='"'||e[l]==="'")){if(G)if(e[l]==='"'&&e[w(e,l)]==="'"&&e[w(e,w(e,l))]==='"'||e[l]==="'"&&e[w(e,l)]==='"'&&e[w(e,w(e,l))]==="'"){l=w(e,w(e,l)),""+w(e,w(e,l));continue}else G===e[l]&&(G=null,""+`[${31}mRESET[${39}m`+`[${33}mcurrentlyWithinQuotes[${39}m`);else{let n=el(e,l);typeof n=="number"&&(S&&["(",",",":"].includes(e[n])||v&&!S&&["(",",",":","="].includes(e[n]))&&(G=e[l],""+`[${33}mcurrentlyWithinQuotes[${39}m`+G)}v&&typeof Se=="number"&&Se<l&&(Se=null,""+`[${31}m\u2588\u2588[${39}m`+`[${33}mstyleAttributeStartedAt[${39}m`)}if(b){if(d===null||typeof d!="string"||typeof d=="string"&&!d)""+31+39,b=!1;else if(U(e,l,d)){if(""+d,p!==null){if(u===1&&t.removeCSSComments){let n=ie(e,p,[`\r
`,`
`,"\r"]);""+`[${33}mlineBreakPresentOnTheLeft[${39}m`+JSON.stringify(n,null,4);let s=p;typeof n=="string"&&n.length&&(s-=n.length,""+33+39+s),e[s-1]&&k(e[s-1])&&e[l+d.length]&&k(e[l+d.length])?(""+s+(l+d.length),$.push(s,l+d.length,";"),Y+=l+d.length-s):(""+s+(l+d.length),$.push(s,l+d.length),Y+=l+d.length-s)}p=null,""+`[${33}mcommentStartedAt[${39}m`+p}l=l+d.length-1,""+l,d=null,""+`[${33}mdoNothingUntil[${39}m`+d,b=!1,""+`[${33}mdoNothing[${39}m`+b;continue}}if(!b&&e[l]==="<"&&e[l+1]==="s"&&e[l+2]==="t"&&e[l+3]==="y"&&e[l+4]==="l"&&e[l+5]==="e"){Q=!0,""+`[${33}mcheckingInsideCurlyBraces[${39}m`+Q,""+36+39,S||(S=!0,""+S),""+36+39;for(let n=l;n<g;n++)if(O+=1,""+36+`str[i=${n}]=${e[n]}`+39,e[n]===">"){""+36+39,A=n+1,C=n+1,""+`[${33}mstyleStartedAt[${39}m`+A+`[${33}mruleChunkStartedAt[${39}m`+C,""+36+39;break}}if(!b&&S&&e[l]==="<"&&e[l+1]==="/"&&e[l+2]==="s"&&e[l+3]==="t"&&e[l+4]==="y"&&e[l+5]==="l"&&e[l+6]==="e"&&(W=l-1,""+`[${33}mcheckingInsideCurlyBraces[${39}m`+Q,""+`[${33}mstyleEndedAt[${39}m`+W,C=null,Q=!1,S&&(S=!1,""+S)),u===1&&(S||v)&&e[l]==="/"&&e[l+1]==="*"&&p===null){p=l,""+`[${33}mcommentStartedAt[${39}m`+l,b=!0,""+`[${33}mdoNothing[${39}m`,d="*/",l+=1;continue}if(!b&&S&&e[l]==="@"){""+l,r&&(r=null);let n=V(e,l,Pe)||V(e,l,Ae);if(typeof n=="string"){""+n;let s;(e[l+n.length+1]===";"||e[l+n.length+1]&&!e[l+n.length+1].trim()&&V(e,l+n.length+1,";",{trimBeforeMatching:!0,cb:(i,P,h)=>(s=h,!0)}))&&$.push(l,s||l+n.length+2);let o;""+36+39;for(let i=l+1;i<g;i++){if(O+=1,""+36+`str[${i}] = ${e[i]}`+39+`[${33}msecondaryStopper[${39}m`+o,o&&e[i]===o)if(""+36+`atRulesWhichNeedToBeIgnored = ${JSON.stringify(Ae,null,0)} - VS - matchedAtTagsName = ${n}
atRulesWhichMightWrapStyles = ${JSON.stringify(Pe,null,0)} - VS - matchedAtTagsName = ${n}`+39,e[i]==="}"&&Ae.includes(n)||e[i]==="{"&&Pe.includes(n)){l=i,""+31+`i = ${l}`+39,C=i+1,""+`[${33}mruleChunkStartedAt[${39}m`+C;continue e}else{o=void 0,""+35+39;continue}if(e[i]==='"'&&!o?(o='"',""+35+39+o):e[i]==="'"&&!o?(o="'",""+35+39+o):e[i]==="("&&!o?(o=")",""+35+39+o):Ae.includes(n)&&e[i]==="{"&&!o&&(o="}",""+35+39+o),!o&&Ye.includes(e[i])){""+i+e[i];let P,h;if(e[i]==="{"||e[i]===";"){j=!1,C=i+1,""+`[${33}minsideCurlyBraces[${39}m`+`[${33}mruleChunkStartedAt[${39}m`+C,l=i;continue e}else(e[i]==="@"||e[i]==="<")&&u===1&&!e.slice(l,i).includes("{")&&!e.slice(l,i).includes("(")&&!e.slice(l,i).includes('"')&&!e.slice(l,i).includes("'")&&(P=l,h=i+(e[i]===";"?1:0),""+P+h+e.slice(P,h),$.push(P,h));""+`[${33}mpushRangeTo[${39}m`+h+`[${33}mz[${39}m`+i;let de=h?h-1:i-1+(e[i]==="{"?1:0);""+`[${33}miOffset[${39}m`+de,""+31+`i = ${de}; ruleChunkStartedAt = ${de+1};`+39,l=de,C=de+1;continue e}}}}if(!b&&S&&j&&Q&&a==="}"&&!G&&!ne&&(""+`[${32}m\u2588\u2588[${39}m`,u===2&&J&&C&&($.push(C,l+1),""+`[${32}mPUSH[${39}m`+C+(l+1)+JSON.stringify($,null,4)),j=!1,""+`[${33}minsideCurlyBraces[${39}m`,""+31+`headWholeLineCanBeDeleted = ${J}`+39+31+`lastKeptChunksCommaAt = ${R}`+39+31+`onlyDeletedChunksFollow = ${M}`+39,C&&(C=l+1,""+`[${33}mruleChunkStartedAt[${39}m`+C),H=null,q=!1,J=!0,y=null,R=null,M=!1,""+`[${33}mselectorChunkStartedAt[${39}m`+`[${33}msingleSelectorStartedAt[${39}m`+`[${33}mheadWholeLineCanBeDeleted[${39}m`+`[${33}mselectorChunkCanBeDeleted[${39}m`+`[${33}mlastKeptChunksCommaAt[${39}m`+`[${33}monlyDeletedChunksFollow[${39}m`),!b&&!p&&A&&l>=A&&(W===null&&l>=A||W&&A>W&&A<=l)&&!j){if(y===null){if(a==="."||a==="#")y=l,""+`[${33}msingleSelectorStartedAt[${39}m`+y;else if(ie(e,l,"[class="))""+`[${33}m\u2588\u2588[${39}m`,Ee(a)?(y=l,F=".",""+`[${33}msingleSelectorStartedAt[${39}m`+y+`[${33}msingleSelectorType[${39}m`+F):`"'`.includes(a)&&Ee(e[w(e,l)])&&(y=w(e,l),F=".",""+`[${33}msingleSelectorStartedAt[${39}m`+y+`[${33}msingleSelectorType[${39}m`+F);else if(ie(e,l,"[id="))""+`[${33}m\u2588\u2588[${39}m`,Ee(a)?(y=l,F="#",""+`[${33}msingleSelectorStartedAt[${39}m`+y+`[${33}msingleSelectorType[${39}m`+F):`"'`.includes(a)&&Ee(e[w(e,l)])&&(y=w(e,l),F="#",""+`[${33}msingleSelectorStartedAt[${39}m`+y+`[${33}msingleSelectorType[${39}m`+F);else if(a.trim()){if(a==="}")C=l+1,te=null,""+`[${33}mruleChunkStartedAt[${39}m`+(l+1)+`[${33}mcurrentChunk[${39}m`;else if(a==="<"&&e[l+1]==="!"){""+36+39;for(let n=l;n<g;n++)if(O+=1,""+36+`-----str[${n}]=${e[n]}`+39,e[n]===">"){C=n+1,H=n+1,""+36+`1323 ruleChunkStartedAt=${C}`+39+36+`selectorChunkStartedAt=${H}`+39,l=n;continue e}}}}else if(y!==null&&!k(a)){let n=e.slice(y,l);F&&(n=`${F}${n}`,F=void 0),""+32+n+39,u===2&&!q&&X.includes(n)?(q=!0,""+`[${31}mCHUNK CAN BE DELETED[${39}m`,M=!0,""+`[${33}monlyDeletedChunksFollow[${39}m`):u===2&&!q&&(""+`[${32}mBTW, THIS CHUNK MIGHT NOT BE DELETED[${39}m`,""+`[${33}mopts.whitelist[${39}m`+JSON.stringify(t.whitelist,null,4),t.uglify&&(!Array.isArray(t.whitelist)||!t.whitelist.length||!he([n],t.whitelist).length)&&(""+`[${31}m${`PUSH [${y}, ${l}, ${_[I.indexOf(n)]}]`}[${39}m`,pe.push(y,l,_[I.indexOf(n)])),a===","&&(R=l,M=!1,""+`[${33}mlastKeptChunksCommaAt[${39}m`+R+`[${33}monlyDeletedChunksFollow[${39}m`+M)),a==="."||a==="#"?(y=l,""+`[${33}msingleSelectorStartedAt[${39}m`+y):y=null}if(H===null)a.trim()&&a!=="}"&&a!==";"&&!(e[l]==="/"&&e[l+1]==="*")&&(q=!1,""+`[${33}mselectorChunkCanBeDeleted[${39}m`+q,H=l,""+`[${33}mselectorChunkStartedAt[${39}m`+H);else if(",{".includes(a)){let n=r||l;if(te=e.slice(H,n),""+`[${33}mcurrentChunk[${39}m`+JSON.stringify(te,null,0)+H+n,u===1)r&&(a===","&&r<l?($.push(r,l),""+r+l,D+=l-r):a==="{"&&r<l-1&&($.push(r,l-1),""+r+(l-1),D+=l-1-r)),ue.push(te),""+`[${32}m${te}[${39}m`+JSON.stringify(ue,null,0);else if(q){let s=H,o=l;""+`[${33}mfromIndex[${39}m`+s;let i=0;if(a==="{"&&e[s-1]!==">"&&e[s-1]!=="}"){""+36+39;for(let h=H;h--;)if(O+=1,""+36+`----- str[${h}]=${e[h]}`+39,e[h].trim()&&e[h]!==","){s=h+1;break}""+`[${33}mfromIndex[${39}m`+JSON.stringify(s,null,4),e[l-1].trim()||(o=l-1)}else if(a===","&&!e[l+1].trim()){for(let h=l+1;h<g;h++)if(O+=1,e[h].trim()){o=h;break}}else ie(e,s,"{",{trimBeforeMatching:!0,cb:(h,de,Xe)=>(i=Xe,!0)})&&(s=i+2);""+`[${33}mfromIndex[${39}m`+s,""+`[${33}mtoIndex[${39}m`+o;let P=E({str:e,from:s,to:o,ifRightSideIncludesThisThenCropTightly:".#",ifRightSideIncludesThisCropItToo:",",extendToOneSide:"right"});""+`[${33}mresToPush[${39}m`+JSON.stringify(P,null,4),$.push(...P),""+JSON.stringify(P,null,0),t.uglify&&pe.wipe()}else J&&(J=!1,""+`[${32}mBTW, WHOLE LINE CAN'T BE DELETED NOW[${39}m`),M&&(M=!1),t.uglify&&(""+`[${31}mMERGE WITH FINAL INDEXES[${39}m`+JSON.stringify(pe.current(),null,0),$.push(pe.current()),pe.wipe());if(a!=="{")H=null,""+`[${33}mselectorChunkStartedAt[${39}m`;else if(u===2&&(""+`[${33}mheadWholeLineCanBeDeleted[${39}m`+J,!J&&R!==null&&M)){let s=R+1;if(`
\r`.includes(e[R+1])){for(let o=R+1;o<g;o++)if(e[o].trim()){s=o;break}}$.push(R,s),""+R+s,R=null,M=!1}}}else He&&(He=!1,""+`[${33}mselectorSinceLinebreakDetected[${39}m`);if(!b&&!S&&v&&e[l]==="/"&&V(e,l,"body",{trimBeforeMatching:!0,i:!0})&&ie(e,l,"<",{trimBeforeMatching:!0})&&(v=!1,Te=null),!b&&e[l]==="<"&&V(e,l,"body",{i:!0,trimBeforeMatching:!0,cb:(n,s,o)=>{if(u===1){if(n!==void 0&&(n.trim()===""||n===">")&&typeof o=="number")if(o-l>5)""+`[${33}mPUSH[${39}m`+l+o,$.push(l,o,"<body"),D+=o-l-5;else return!0;return!0}return!0}})){""+36+39;for(let n=l;n<g;n++)if(O+=1,e[n]===">"){Te=n+1,""+`[${33}mbodyStartedAt[${39}m`+Te;break}""+36+39}if(!b&&v&&!S&&e[l]==="s"&&e[l+1]==="t"&&e[l+2]==="y"&&e[l+3]==="l"&&e[l+4]==="e"&&e[l+5]==="="&&ze.includes(e[l-1])&&`"'`.includes(e[l+6])&&(Se=l+7,""+`[${33}mstyleAttributeStartedAt[${39}m`+Se),!b&&v&&!S&&!G&&e[l]==="c"&&e[l+1]==="l"&&e[l+2]==="a"&&e[l+3]==="s"&&e[l+4]==="s"&&e[l-1]&&!e[l-1].trim()){let n,s=!1;if(e[l+5]==="="){if(e[l+6]==='"'||e[l+6]==="'")n=l+7,""+n;else if(k(e[l+6]))n=l+6,""+n,s=!0;else if(e[l+6]&&(!e[l+6].trim()||"/>".includes(e[l+6]))){let o=E({str:e,from:l,to:l+6,ifRightSideIncludesThisThenCropTightly:"/>",wipeAllWhitespaceOnLeft:!0});""+JSON.stringify(o,null,0),$.push(...o)}}else if(!e[l+5].trim()){for(let o=l+5;o<g;o++)if(O+=1,e[o].trim()){if(e[o]==="="){if(o>l+5&&u===1&&(""+(l+5)+o,$.push(l+5,o)),(e[o+1]==='"'||e[o+1]==="'")&&e[o+2])n=o+2;else if(e[o+1]&&!e[o+1].trim()){for(let i=o+1;i<g;i++)if(O+=1,e[i].trim()){i>o+1&&u===1&&(""+(o+1)+i,$.push(o+1,i)),(e[i]==='"'||e[i]==="'")&&e[i+1]&&(n=i+1);break}}}break}}""+`[${33}mvaluesStart[${39}m`+n,n&&(c=le({valuesStart:n,quoteless:s,nameStart:l}),""+`[${33}mbodyClass[${39}m`+JSON.stringify(c,null,4),u===1?(z=!0,""+`[${33}mbodyItsTheFirstClassOrId[${39}m`):u===2&&(K=!0,""+`[${33}mbodyClassOrIdCanBeDeleted[${39}m`))}if(!b&&v&&!S&&!G&&e[l]==="i"&&e[l+1]==="d"&&e[l-1]&&!e[l-1].trim()){let n,s=!1;if(e[l+2]==="="){if(e[l+3]==='"'||e[l+3]==="'")n=l+4,""+n;else if(k(e[l+3]))n=l+3,""+n,s=!0;else if(e[l+3]&&(!e[l+3].trim()||"/>".includes(e[l+3]))){let o=E({str:e,from:l,to:l+3,ifRightSideIncludesThisThenCropTightly:"/>",wipeAllWhitespaceOnLeft:!0});""+JSON.stringify(o,null,0),$.push(...o)}}else if(!e[l+2].trim()){for(let o=l+2;o<g;o++)if(O+=1,e[o].trim()){if(e[o]==="="){if(o>l+2&&u===1&&(""+(l+2)+o,$.push(l+2,o)),(e[o+1]==='"'||e[o+1]==="'")&&e[o+2])n=o+2;else if(e[o+1]&&!e[o+1].trim()){for(let i=o+1;i<g;i++)if(O+=1,e[i].trim()){i>o+1&&u===1&&(""+(o+1)+i,$.push(o+1,i)),(e[i]==='"'||e[i]==="'")&&e[i+1]&&(n=i+1);break}}}break}}""+`[${33}mvaluesStart[${39}m`+n,n&&(m=le({valuesStart:n,quoteless:s,nameStart:l}),""+`[${33}mbodyId[${39}m`+JSON.stringify(m,null,4),u===1?(z=!0,""+`[${33}mbodyItsTheFirstClassOrId[${39}m`):u===2&&(K=!0,""+`[${33}mbodyClassOrIdCanBeDeleted[${39}m`))}if(!b&&c.valuesStart!==null&&l>=c.valuesStart&&c.valueStart===null)if(T&&U(e,l,T)){if(b=!0,""+`[${33}mdoNothing[${39}m`,K=!1,r&&l>r+1){let o=E({str:e,from:r,to:l,ifLeftSideIncludesThisThenCropTightly:`"'`,ifRightSideIncludesThisThenCropTightly:`"'`});$.push(...o),""+JSON.stringify(o,null,4),r=null,""+`[${33}mwhitespaceStartedAt[${39}m`}else r&&(r=null);let n=U(e,l,T);""+`[${33}mmatchedHeads[${39}m`+n;let s=t.backend.find(o=>o.heads===n);""+`[${33}mfindings[${39}m`+JSON.stringify(s,null,4),s&&s.tails&&(d=s.tails,""+`[${33}mdoNothingUntil[${39}m`+d)}else k(a)&&(c.valueStart=l,""+`[${33}mbodyClass.valueStart[${39}m`+c.valueStart,u===1&&(z&&c.valuesStart!==null&&!e.slice(c.valuesStart,l).trim()&&c.valuesStart<l?($.push(c.valuesStart,l),""+`[${32}mPUSH[${39}m`+c.valuesStart+l,D+=l-c.valuesStart,z=!1,""+`[${33}mbodyItsTheFirstClassOrId[${39}m`):r!==null&&r<l-1&&($.push(r+1,l),""+`[${32}mPUSH[${39}m`+(r+1)+l,D+=l-r+1)));if(!b&&c.valueStart!==null&&l>c.valueStart&&(!k(a)||N&&U(e,l,N)))if(T&&U(e,l,T)){c.valueStart=null,""+`[${33}mbodyClass.valueStart[${39}m`,c=le();let n=U(e,l,T);""+`[${33}mmatchedHeads[${39}m`+n;let s=t.backend.find(o=>o.heads===n);""+`[${33}mfindings[${39}m`+JSON.stringify(s,null,4),s&&s.tails&&(d=s.tails,""+`[${33}mdoNothingUntil[${39}m`+d)}else{let n=`${e.slice(c.valueStart,l)}`;if(""+`[${32}m${n}[${39}m`,""+`[${33}mallTails[${39}m`+JSON.stringify(N,null,4),u===1)re.push(`.${n}`),""+35+39+n+JSON.stringify(re,null,0);else if(c.valueStart!=null&&oe.includes(n)){""+`[${33}mcarvedClass[${39}m`+n,""+`[${33}mbodyClass.valueStart[${39}m`+JSON.stringify(c.valueStart,null,0);let s=E({str:e,from:c.valueStart,to:l,ifLeftSideIncludesThisThenCropTightly:`"'`,ifRightSideIncludesThisThenCropTightly:`"'`,wipeAllWhitespaceOnLeft:!0}),o="";e[s[0]-1]&&e[s[0]-1].trim()&&e[s[1]]&&e[s[1]].trim()&&(T||N)&&(T&&ie(e,s[0],N)||N&&U(e,s[1],T))&&(o=" "),$.push(...s,o),""+`[${32}mPUSH[${39}m`+JSON.stringify([s[0],s[1],o],null,0)}else K=!1,""+`[${33}mbodyClassOrIdCanBeDeleted[${39}m`,t.uglify&&!(Array.isArray(t.whitelist)&&t.whitelist.length&&he([`.${n}`],t.whitelist).length)&&(""+`[${31}m${`PUSH [${c.valueStart}, ${l},
                  ${_[I.indexOf(`.${n}`)]}]`}[${39}m`,$.push(c.valueStart,l,_[I.indexOf(`.${n}`)].slice(1)));c.valueStart=null,""+`[${33}mbodyClass.valueStart[${39}m`}if(!b&&m&&m.valueStart!==null&&l>m.valueStart&&(!k(a)||N&&U(e,l,N))){let n=e.slice(m.valueStart,l);if(""+`[${32}m${n}[${39}m`,u===1)$e.push(`#${n}`),""+35+39+`#${n}`+JSON.stringify($e,null,4);else if(m.valueStart!=null&&Ie.includes(n)){""+`[${33}mcarvedId[${39}m`+n,""+`[${33}mbodyId.valueStart[${39}m`+JSON.stringify(m.valueStart,null,4);let s=E({str:e,from:m.valueStart,to:l,ifRightSideIncludesThisThenCropTightly:`"'`,wipeAllWhitespaceOnLeft:!0});e[s[0]-1]&&e[s[0]-1].trim()&&e[s[1]]&&e[s[1]].trim()&&(T||N)&&(T&&ie(e,s[0],N||[])||N&&U(e,s[1],T||[]))&&(s[0]+=1),$.push(...s),""+`[${32}mPUSH[${39}m`+JSON.stringify(s,null,0)}else K=!1,""+`[${33}mbodyClassOrIdCanBeDeleted[${39}m`,""+`[${33}mcarvedId[${39}m`+JSON.stringify(n,null,4),""+JSON.stringify(t.whitelist,null,4),""+n+he([`#${n}`],t.whitelist),t.uglify&&!(Array.isArray(t.whitelist)&&t.whitelist.length&&he([`#${n}`],t.whitelist).length)&&(""+`[${31}m${`PUSH [${m.valueStart}, ${l},
                ${_[I.indexOf(`#${n}`)]}]`}[${39}m`,$.push(m.valueStart,l,_[I.indexOf(`#${n}`)].slice(1)));m.valueStart=null,""+`[${33}mbodyId.valueStart[${39}m`}if(!b&&c.valuesStart!=null&&(!c.quoteless&&(a==="'"||a==='"')||c.quoteless&&!k(e[l]))&&l>=c.valuesStart){if(l===c.valuesStart)u===1&&(""+JSON.stringify(E({str:e,from:c.nameStart,to:l+1,ifRightSideIncludesThisThenCropTightly:"/>",wipeAllWhitespaceOnLeft:!0}),null,0),$.push(...E({str:e,from:c.nameStart,to:l+1,ifRightSideIncludesThisThenCropTightly:"/>",wipeAllWhitespaceOnLeft:!0})));else{if(u===2&&K){""+`[${33}minitial range[${39}m`+(c.valuesStart-7)+(`'"`.includes(e[l])?l+1:l);let n=E({str:e,from:c.valuesStart-7,to:`'"`.includes(e[l])?l+1:l,ifRightSideIncludesThisThenCropTightly:"/>",wipeAllWhitespaceOnLeft:!0});""+`[${32}mSET[${39}m`+`[${33}mexpandedRange[${39}m`+JSON.stringify(n,null,4);let s="";e[n[0]-1]&&e[n[0]-1].trim()&&e[n[1]]&&e[n[1]].trim()&&!"/>".includes(e[n[1]])&&(s=" ",""+(n[0]-1)+e[n[0]-1]+n[1]+e[n[1]]),$.push(...n,s),""+`[${32}mPUSH[${39}m`+JSON.stringify([n[0],n[1],s],null,4)}r!==null&&($.push(r,l),""+`[${32}mPUSH[${39}m`+r+l)}c=le(),""+`[${33}mbodyClass[${39}m`}if(!b&&m.valuesStart!==null&&(!m.quoteless&&(a==="'"||a==='"')||m.quoteless&&!k(e[l]))&&l>=m.valuesStart){if(l===m.valuesStart)u===1&&(""+m.nameStart+(l+1)+E({str:e,from:m.nameStart,to:l+1,ifRightSideIncludesThisThenCropTightly:"/>",wipeAllWhitespaceOnLeft:!0})[0]+E({str:e,from:m.nameStart,to:l+1,ifRightSideIncludesThisThenCropTightly:"/>",wipeAllWhitespaceOnLeft:!0})[1],""+JSON.stringify(E({str:e,from:m.nameStart,to:l+1,ifRightSideIncludesThisThenCropTightly:"/>",wipeAllWhitespaceOnLeft:!0}),null,0),$.push(...E({str:e,from:m.nameStart,to:l+1,ifRightSideIncludesThisThenCropTightly:"/>",wipeAllWhitespaceOnLeft:!0})));else{if(u===2&&K){let n=E({str:e,from:m.valuesStart-4,to:l+1,ifRightSideIncludesThisThenCropTightly:"/>",wipeAllWhitespaceOnLeft:!0}),s="";e[n[0]-1]&&e[n[0]-1].trim()&&e[n[1]]&&e[n[1]].trim()&&!"/>".includes(e[n[1]])&&(s=" "),$.push(...n,s),""+`[${32}mPUSH[${39}m`+JSON.stringify([n[0],n[1],s],null,4)}r!==null&&($.push(r,l),""+`[${32}mPUSH[${39}m`+r+l)}m=le(),""+`[${33}mbodyId[${39}m`}if(!b&&m.valuesStart&&l>=m.valuesStart&&m.valueStart===null)if(T&&U(e,l,T)){if(b=!0,""+`[${33}mdoNothing[${39}m`,K=!1,r&&l>r+1){let o=E({str:e,from:r,to:l,ifLeftSideIncludesThisThenCropTightly:`"'`,ifRightSideIncludesThisThenCropTightly:`"'`});$.push(...o),""+JSON.stringify(o,null,4),r=null,""+`[${33}mwhitespaceStartedAt[${39}m`}else r&&(r=null);let n=U(e,l,T);""+`[${33}mmatchedHeads[${39}m`+n;let s=t.backend.find(o=>o.heads===n);""+`[${33}mfindings[${39}m`+JSON.stringify(s,null,4),s&&s.tails&&(d=s.tails,""+`[${33}mdoNothingUntil[${39}m`+d)}else k(a)&&(m.valueStart=l,""+`[${33}mbodyId.valueStart[${39}m`+m.valueStart,u===1&&(z&&m.valuesStart!==null&&!e.slice(m.valuesStart,l).trim()&&m.valuesStart<l?($.push(m.valuesStart,l),""+`[${32}mPUSH[${39}m`+m.valuesStart+l,D+=l-m.valuesStart,z=!1,""+`[${33}mbodyItsTheFirstClassOrId[${39}m`):r!==null&&r<l-1&&($.push(r+1,l),""+`[${32}mPUSH[${39}m`+(r+1)+l,D+=l-r+1)));if(!b&&u===1){if(p!==null&&p<l&&e[l]===">"&&!Ce&&(""+`[${33}mstr.slice(commentStartedAt, i)[${39}m`+JSON.stringify(e.slice(p,l),null,4),t.doNotRemoveHTMLCommentsWhoseOpeningTagContains&&Array.isArray(t.doNotRemoveHTMLCommentsWhoseOpeningTagContains)&&t.doNotRemoveHTMLCommentsWhoseOpeningTagContains.length&&t.doNotRemoveHTMLCommentsWhoseOpeningTagContains.some(n=>n.trim()&&e.slice(p,l).toLowerCase().includes(n))&&(se=!1,""+`[${33}mcanDelete[${39}m`+se),Ce=!0,""+33+39+Ce),p!==null&&e[l]===">"){if(""+`[${33}mcanDelete[${39}m`+JSON.stringify(se,null,4),!me&&e[l-1]==="-"&&e[l-2]==="-"){let n=E({str:e,from:p,to:l+1,wipeAllWhitespaceOnLeft:!0,addSingleSpaceToPreventAccidentalConcatenation:!0});t.removeHTMLComments&&se&&(""+JSON.stringify(n,null,0),$.push(...n)),Y+=n[1]-n[0],p=null,me=void 0,""+`[${33}mcommentStartedAt[${39}m`+`[${33}mbogusHTMLComment[${39}m`}else if(me){let n=E({str:e,from:p,to:l+1,wipeAllWhitespaceOnLeft:!0,addSingleSpaceToPreventAccidentalConcatenation:!0});t.removeHTMLComments&&se&&(""+JSON.stringify(n,null,0),$.push(...n)),Y+=n[1]-n[0],p=null,me=void 0,""+`[${33}mcommentStartedAt[${39}m`+`[${33}mbogusHTMLComment[${39}m`}}t.removeHTMLComments&&p===null&&e[l]==="<"&&e[l+1]==="!"&&((!T||Array.isArray(T)&&T.length&&!T.includes("<!"))&&(!N||Array.isArray(N)&&N.length&&!N.includes("<!"))&&(""+`[${33}mcommentNearlyStartedAt[${39}m`+JSON.stringify(ye,null,4),!V(e,l+1,"doctype",{i:!0,trimBeforeMatching:!0})&&!(e[l+2]==="-"&&e[l+3]==="-"&&Array.isArray(t.doNotRemoveHTMLCommentsWhoseOpeningTagContains)&&t.doNotRemoveHTMLCommentsWhoseOpeningTagContains.length&&V(e,l+3,t.doNotRemoveHTMLCommentsWhoseOpeningTagContains,{trimBeforeMatching:!0}))&&(p=l,Ce=!1,se=!0,""+`[${33}mcommentStartedAt[${39}m`+p+`[${33}musedOnce[${39}m`+Ce+`[${33}mcanDelete[${39}m`+se),me=!(e[l+2]==="-"&&e[l+3]==="-"),""+`[${33}mbogusHTMLComment[${39}m`+me),p!==l&&(ye=l))}if(a==="}"&&ne&&(ne-=1,""+ne),!b&&a==="{"&&Q&&(j?(ne+=1,""+ne):(j=!0,""+`[${33}minsideCurlyBraces[${39}m`,r!==null&&(e.slice(r,l).includes(`
`)||e.slice(r,l).includes("\r"))&&($.push(r,l),""+r+l))),b||(e[l].trim()?r!==null&&(r=null):r===null&&(r=l)),!b&&u===2&&Array.isArray(ce)&&ce.length&&l===ce[0][0]){let n=ce.shift();""+`[${33}mtemp[${39}m`+JSON.stringify(n,null,0),n&&n[1]-1>l&&(""+31+`\u2588\u2588 OFFSET MAIN INDEX FROM ${l} TO ${n[1]-1}`+39,l=n[1]-1);continue}if(ye!==null&&e[l]===">"){ye=null,""+`[${33}mcommentNearlyStartedAt[${39}m`;let n=0;if(t.removeHTMLComments&&Array.isArray(t.doNotRemoveHTMLCommentsWhoseOpeningTagContains)&&t.doNotRemoveHTMLCommentsWhoseOpeningTagContains.length&&(t.doNotRemoveHTMLCommentsWhoseOpeningTagContains.some(s=>s.includes("if"))||t.doNotRemoveHTMLCommentsWhoseOpeningTagContains.some(s=>s.includes("mso"))||t.doNotRemoveHTMLCommentsWhoseOpeningTagContains.some(s=>s.includes("ie")))&&V(e,l,"<!--",{trimBeforeMatching:!0,cb:(s,o,i)=>(n=i,!0)})){""+`[${33}mtemp[${39}m`+JSON.stringify(n,null,4)+JSON.stringify(e.slice(n,n+10),null,4),V(e,n-1,"-->",{trimBeforeMatching:!0,cb:(s,o,i)=>(n=i,!0)})&&""+`[${33}mtemp[${39}m`+JSON.stringify(n,null,4)+JSON.stringify(e.slice(n,n+10),null,4),typeof n=="number"&&(l=n-1),""+`[${33}mi[${39}m`+JSON.stringify(l,null,4)+`[${32}mCONTINUE[${39}m`;continue}}u===9&&(v?(""+(c.valueStart?`
* ${`[${90}mbodyClass.valueStart[${39}m`} = ${c.valueStart}`:"")+(m.valueStart?`
* ${`[${90}mbodyId.valueStart[${39}m`} = ${m.valueStart}`:"")+(c.valuesStart?`
* ${`[${90}mbodyClass[${39}m`} = ${JSON.stringify(c,null,0)}`:"")+(m.valuesStart?`
* ${`[${90}mbodyId[${39}m`} = ${JSON.stringify(m,null,0)}`:""),""+`[${33}mbodyItsTheFirstClassOrId[${39}m`+z+34+`headWholeLineCanBeDeleted = ${J}`+39):S&&(""+36+`headWholeLineCanBeDeleted = ${J}`+39+36+`headWholeLineCanBeDeleted = ${J}`+39+36+`insideCurlyBraces = ${j}`+39+36+`curliesDepth = ${ne}`+39,u===9&&""+`[${90}mruleChunkStartedAt[${39}m = ${C}`+`[${90}mselectorChunkStartedAt[${39}m = ${H}`+`[${90}mselectorChunkCanBeDeleted[${39}m = ${q}`+`[${90}mcurrentChunk[${39}m = ${te}`+`[${90}mwhitespaceStartedAt[${39}m = ${r}`+`[${90}msingleSelectorStartedAt[${39}m = ${y}`+`[${90}mcommentStartedAt[${39}m = ${p}`+`[${90}mcheckingInsideCurlyBraces[${39}m = ${Q}`+`[${90}minsideCurlyBraces[${39}m = ${j}`),""+`[${v?32:31}mstateWithinBody[${39}m`+`[${S?32:31}mstateWithinStyleTag[${39}m`+33+39+R+33+39+M)}if(u===1){be=Z(re.concat($e)),""+35+39,""+JSON.stringify(ue,null,4),""+JSON.stringify(re,null,4),""+JSON.stringify($e,null,4),""+JSON.stringify(be,null,4),""+JSON.stringify(t.whitelist,null,4),""+`[${32}mstarting headSelectorsCount[${39}m`+JSON.stringify(ae,null,4),ue.forEach(o=>{fe(o).res.forEach(i=>{Object.prototype.hasOwnProperty.call(ae,i)?ae[i]+=1:ae[i]=1})}),""+JSON.stringify(ae,null,4),Le={...ae},ge=Z(ue.reduce((o,i)=>o.concat(fe(i).res),[])),je=ge.length,""+`[${33}m1238 AFTER TRAVERSAL,
allClassesAndIdsWithinHead[${39}m`+JSON.stringify(ge,null,4);let l=Array.from(ue),a=[];""+36+`3330 LOOP preppedHeadSelectorsArr = ${JSON.stringify(l,null,4)}`+39;for(let o=0,i=l.length;o<i;o++){O+=1,""+36+39,""+`[${36}m\u2588\u2588[${39}m`+o+JSON.stringify(l[o],null,4);let P;l[o]!=null&&(P=fe(l[o]).res),P&&!P.every(h=>be.includes(h))&&(""+fe(l[o]),a.push(...fe(l[o]).res),""+JSON.stringify(a,null,4),l.splice(o,1),o-=1,i-=1)}""+36+39,a=Z(ve(a,t.whitelist));let n;l&&l.length?(n=l.reduce((o,i)=>o.concat(fe(i).res),[]),""+`[${32}mSET[${39}m`+`[${33}mpreppedAllClassesAndIdsWithinHead[${39}m`+JSON.stringify(n,null,4)):n=[],X=ve(we(Z(Array.from(ge)),re.concat($e)),t.whitelist),""+`[${32}mheadCssToDelete[${39}m`+JSON.stringify(X,null,4),x=Z(ve(we(re.concat($e),n),t.whitelist)),""+`[${32}mbodyCssToDelete[${39}m`+JSON.stringify(x,null,4),X=Z(X.concat(Ge(a,x))),""+`[${32}mheadCssToDelete[${39}m`+JSON.stringify(X,null,4),oe=x.filter(o=>o.startsWith(".")).map(o=>o.slice(1)),""+JSON.stringify(oe,null,4),Ie=x.filter(o=>o.startsWith("#")).map(o=>o.slice(1)),""+`[${33}mbodyIdsToDelete[${39}m`+JSON.stringify(Ie,null,4),""+JSON.stringify($.current(),null,4),De=Object.keys(Le).filter(o=>Le[o]<1),""+`[${33}mallClassesAndIdsThatWereCompletelyDeletedFromHead[${39}m`+JSON.stringify(De,null,4),oe=Z(oe.concat(Ge(ve(be,t.whitelist),De).filter(o=>o[0]===".").map(o=>o.slice(1)))),""+`[${33}mbodyClassesToDelete[${39}m`+JSON.stringify(oe,null,4);let s=he(be,t.whitelist);""+`[${31}m\u2588\u2588 \u2588\u2588 \u2588\u2588[${39}m`+`[${33}mallClassesAndIdsWithinBodyThatWereWhitelisted[${39}m`+JSON.stringify(s,null,4),x=Z(x.concat(oe.map(o=>`.${o}`),Ie.map(o=>`#${o}`))),""+`[${90}mbodyCssToDelete[${39}m`+JSON.stringify(x,null,4),I=we(we(Array.from(ge),x),X),Array.isArray(s)&&s.length&&s.forEach(o=>{I.includes(o)||I.push(o)}),t.uglify&&(_=ll(I)),xe=I.length,Re=t.uglify?I.map((o,i)=>[o,_[i]]).filter(o=>!t.whitelist.some(i=>he.isMatch(o[0],i))):null,""+`[${33}mfinalIndexesToDelete.current()[${39}m`+JSON.stringify($.current(),null,4),""+`[${33}muglified[${39}m`+JSON.stringify(Re,null,4),$.current()?ce=Array.from($.current()||[]):ce=null}else u===2&&(""+JSON.stringify(I,null,4),t.uglify&&""+`[${36}mUGLIFICATION[${39}m`+(I.reduce((l,a)=>`${l}   ${`[${33}m${_[I.indexOf(a)]}[${39}m`} --- ${`[${31}m${a}[${39}m`}`),`
`))}$.push(Qe.current()),""+`[${33}mstr[${39}m`+e,""+JSON.stringify($.current(),null,4),e.length&&$.current()&&(e=nl(e,$.current()),$.wipe());let B=t.reportProgressFuncTo-(t.reportProgressFuncTo-t.reportProgressFuncFrom)*_e;for(""+`[${33}mstartingPercentageDone[${39}m`+JSON.stringify(B,null,4),t.reportProgressFunc&&g>=2e3&&(f=Math.floor(B+(t.reportProgressFuncTo-B)/5),f!==L&&(L=f,t.reportProgressFunc(f))),""+e;Fe.test(e)||Je.test(e);)e=e.replace(Fe,""),e=e.replace(Je,""),O+=e.length;t.reportProgressFunc&&g>=2e3&&(f=Math.floor(B+(t.reportProgressFuncTo-B)/5*2),f!==L&&(L=f,t.reportProgressFunc(f))),e=e.replace(Ke,`
`),O+=e.length,t.reportProgressFunc&&g>=2e3&&(f=Math.floor(B+(t.reportProgressFuncTo-B)/5*3),f!==L&&(L=f,t.reportProgressFunc(f)));let Oe=e.length;return e=e.replace(Ze(),""),O+=e.length,Oe!==e.length&&(Y+=e.length-Oe),t.reportProgressFunc&&g>=2e3&&(f=Math.floor(B+(t.reportProgressFuncTo-B)/5*4),f!==L&&(L=f,t.reportProgressFunc(f))),e=ol(e,{removeLineBreaks:!1,removeIndentations:!1,removeHTMLComments:!1,removeCSSComments:!1,lineLengthLimit:500}).result,Oe=e.length,Oe!==e.length&&(D+=e.length-Oe),O+=e.length,t.reportProgressFunc&&g>=2e3&&(f=Math.floor(B+(t.reportProgressFuncTo-B)),f!==L&&(L=f,t.reportProgressFunc(f))),e.length&&((!e[0].trim()||!e[e.length-1].trim())&&e.length!==e.trim().length&&(D+=e.length-e.trim().length),e=e.trimStart()),""+`[${33}mallClassesAndIdsWithinHeadFinal[${39}m`+JSON.stringify(I,null,4),e=e.replace(/ ((class|id)=["']) /g," $1"),{log:{timeTakenInMilliseconds:Date.now()-Ve,traversedTotalCharacters:O,traversedTimesInputLength:g?Math.round(O/g*100)/100:0,originalLength:g,cleanedLength:e.length,bytesSaved:Math.max(g-e.length,0),percentageReducedOfOriginal:g?Math.round(Math.max(g-e.length,0)*100/g):0,nonIndentationsWhitespaceLength:Math.max(D-We,0),nonIndentationsTakeUpPercentageOfOriginal:g&&Math.max(D-We,0)?Math.round(Math.max(D,0)*100/g):0,commentsLength:Y,commentsTakeUpPercentageOfOriginal:g&&Y?Math.round(Y*100/g):0,uglified:Re},result:e,countAfterCleaning:xe,countBeforeCleaning:je,allInHead:ge.sort(),allInBody:be.sort(),deletedFromHead:X.sort(),deletedFromBody:x.sort()}}export{Il as comb,tl as defaults,Nl as version};
