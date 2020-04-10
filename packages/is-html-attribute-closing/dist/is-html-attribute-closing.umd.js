/**
 * is-html-attribute-closing
 * Is a character on a given index a closing of an HTML attribute?
 * Version: 1.0.0
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/is-html-attribute-closing
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).isHtmlAttributeClosing=e()}(this,(function(){"use strict";const t=new Set(["abbr","accept","accept-charset","accesskey","action","align","alink","allow","alt","archive","async","autocapitalize","autocomplete","autofocus","autoplay","axis","background","background-attachment","background-color","background-image","background-position","background-position-x","background-position-y","background-repeat","bgcolor","border","border-bottom","border-bottom-color","border-bottom-style","border-bottom-width","border-collapse","border-color","border-left","border-left-color","border-left-style","border-left-width","border-right","border-right-color","border-right-style","border-right-width","border-style","border-top","border-top-color","border-top-style","border-top-width","border-width","buffered","capture","cellpadding","cellspacing","challenge","char","charoff","charset","checked","cite","class","classid","clear","clip","code","codebase","codetype","color","cols","colspan","column-span","compact","content","contenteditable","contextmenu","controls","coords","crossorigin","csp","cursor","data","data-*","datetime","declare","decoding","default","defer","dir","direction","dirname","disabled","display","download","draggable","dropzone","enctype","enterkeyhint","face","filter","float","font","font-color","font-emphasize","font-emphasize-position","font-emphasize-style","font-family","font-size","font-style","font-variant","font-weight","for","form","formaction","formenctype","formmethod","formnovalidate","formtarget","frame","frameborder","frontuid","headers","height","hidden","high","horiz-align","href","hreflang","hspace","http-equiv","icon","id","importance","inputmode","integrity","intrinsicsize","ismap","itemprop","keytype","kind","label","lang","language","layout-flow","layout-grid","layout-grid-char","layout-grid-line","layout-grid-mode","layout-grid-type","left","letter-spacing","line-break","line-height","link","list","list-image-1","list-image-2","list-image-3","list-style","list-style-image","list-style-position","list-style-type","loading","longdesc","loop","low","manifest","margin","margin-bottom","margin-left","margin-right","margin-top","marginheight","marginwidth","max","maxlength","media","method","min","minlength","mso-ansi-font-size","mso-ansi-font-style","mso-ansi-font-weight","mso-ansi-language","mso-ascii-font-family","mso-background","mso-background-source","mso-baseline-position","mso-bidi-flag","mso-bidi-font-family","mso-bidi-font-size","mso-bidi-font-style","mso-bidi-font-weight","mso-bidi-language","mso-bookmark","mso-border-alt","mso-border-between","mso-border-between-color","mso-border-between-style","mso-border-between-width","mso-border-bottom-alt","mso-border-bottom-color-alt","mso-border-bottom-source","mso-border-bottom-style-alt","mso-border-bottom-width-alt","mso-border-color-alt","mso-border-effect","mso-border-left-alt","mso-border-left-color-alt","mso-border-left-source","mso-border-left-style-alt","mso-border-left-width-alt","mso-border-right-alt","mso-border-right-color-alt","mso-border-right-source","mso-border-right-style-alt","mso-border-right-width-alt","mso-border-shadow","mso-border-source","mso-border-style-alt","mso-border-top-alt","mso-border-top-color-alt","mso-border-top-source","mso-border-top-style-alt","mso-border-top-width-alt","mso-border-width-alt","mso-break-type","mso-build","mso-build-after-action","mso-build-after-color","mso-build-auto-secs","mso-build-avi","mso-build-dual-id","mso-build-order","mso-build-sound-name","mso-bullet-image","mso-cell-special","mso-cellspacing","mso-char-indent","mso-char-indent-count","mso-char-indent-size","mso-char-type","mso-char-wrap","mso-color-alt","mso-color-index","mso-color-source","mso-column-break-before","mso-column-separator","mso-columns","mso-comment-author","mso-comment-continuation","mso-comment-id","mso-comment-reference","mso-data-placement","mso-default-height","mso-default-width","mso-diagonal-down","mso-diagonal-down-color","mso-diagonal-down-source","mso-diagonal-down-style","mso-diagonal-down-width","mso-diagonal-up","mso-diagonal-up-color","mso-diagonal-up-source","mso-diagonal-up-style","mso-diagonal-up-width","mso-displayed-decimal-separator","mso-displayed-thousand-separator","mso-element","mso-element-anchor-horizontal","mso-element-anchor-lock","mso-element-anchor-vertical","mso-element-frame-height","mso-element-frame-hspace","mso-element-frame-vspace","mso-element-frame-width","mso-element-left","mso-element-linespan","mso-element-top","mso-element-wrap","mso-endnote-continuation-notice","mso-endnote-continuation-notice-id","mso-endnote-continuation-notice-src","mso-endnote-continuation-separator","mso-endnote-continuation-separator-id","mso-endnote-continuation-separator-src","mso-endnote-display","mso-endnote-id","mso-endnote-numbering","mso-endnote-numbering-restart","mso-endnote-numbering-start","mso-endnote-numbering-style","mso-endnote-position","mso-endnote-separator","mso-endnote-separator-id","mso-endnote-separator-src","mso-even-footer","mso-even-footer-id","mso-even-footer-src","mso-even-header","mso-even-header-id","mso-even-header-src","mso-facing-pages","mso-fareast-font-family","mso-fareast-hint","mso-fareast-language","mso-field-change","mso-field-change-author","mso-field-change-time","mso-field-change-value","mso-field-code","mso-field-lock","mso-fills-color","mso-first-footer","mso-first-footer-id","mso-first-footer-src","mso-first-header","mso-first-header-id","mso-first-header-src","mso-font-alt","mso-font-charset","mso-font-format","mso-font-info","mso-font-info-charset","mso-font-info-type","mso-font-kerning","mso-font-pitch","mso-font-signature","mso-font-signature-csb-one","mso-font-signature-csb-two","mso-font-signature-usb-four","mso-font-signature-usb-one","mso-font-signature-usb-three","mso-font-signature-usb-two","mso-font-src","mso-font-width","mso-footer","mso-footer-data","mso-footer-id","mso-footer-margin","mso-footer-src","mso-footnote-continuation-notice","mso-footnote-continuation-notice-id","mso-footnote-continuation-notice-src","mso-footnote-continuation-separator","mso-footnote-continuation-separator-id","mso-footnote-continuation-separator-src","mso-footnote-id","mso-footnote-numbering","mso-footnote-numbering-restart","mso-footnote-numbering-start","mso-footnote-numbering-style","mso-footnote-position","mso-footnote-separator","mso-footnote-separator-id","mso-footnote-separator-src","mso-foreground","mso-forms-protection","mso-generic-font-family","mso-grid-bottom","mso-grid-bottom-count","mso-grid-left","mso-grid-left-count","mso-grid-right","mso-grid-right-count","mso-grid-top","mso-grid-top-count","mso-gutter-direction","mso-gutter-margin","mso-gutter-position","mso-hansi-font-family","mso-header","mso-header-data","mso-header-id","mso-header-margin","mso-header-src","mso-height-alt","mso-height-rule","mso-height-source","mso-hide","mso-highlight","mso-horizontal-page-align","mso-hyphenate","mso-ignore","mso-kinsoku-overflow","mso-layout-grid-align","mso-layout-grid-char-alt","mso-layout-grid-origin","mso-level-inherit","mso-level-legacy","mso-level-legacy-indent","mso-level-legacy-space","mso-level-legal-format","mso-level-number-format","mso-level-number-position","mso-level-numbering","mso-level-reset-level","mso-level-start-at","mso-level-style-link","mso-level-suffix","mso-level-tab-stop","mso-level-text","mso-line-break-override","mso-line-grid","mso-line-height-alt","mso-line-height-rule","mso-line-numbers-count-by","mso-line-numbers-distance","mso-line-numbers-restart","mso-line-numbers-start","mso-line-spacing","mso-linked-frame","mso-list","mso-list-change","mso-list-change-author","mso-list-change-time","mso-list-change-values","mso-list-id","mso-list-ins","mso-list-ins-author","mso-list-ins-time","mso-list-name","mso-list-template-ids","mso-list-type","mso-margin-bottom-alt","mso-margin-left-alt","mso-margin-top-alt","mso-mirror-margins","mso-negative-indent-tab","mso-number-format","mso-outline-level","mso-outline-parent","mso-outline-parent-col","mso-outline-parent-row","mso-outline-parent-visibility","mso-outline-style","mso-padding-alt","mso-padding-between","mso-padding-bottom-alt","mso-padding-left-alt","mso-padding-right-alt","mso-padding-top-alt","mso-page-border-aligned","mso-page-border-art","mso-page-border-bottom-art","mso-page-border-display","mso-page-border-left-art","mso-page-border-offset-from","mso-page-border-right-art","mso-page-border-surround-footer","mso-page-border-surround-header","mso-page-border-top-art","mso-page-border-z-order","mso-page-numbers","mso-page-numbers-chapter-separator","mso-page-numbers-chapter-style","mso-page-numbers-start","mso-page-numbers-style","mso-page-orientation","mso-page-scale","mso-pagination","mso-panose-arm-style","mso-panose-contrast","mso-panose-family-type","mso-panose-letterform","mso-panose-midline","mso-panose-proportion","mso-panose-serif-style","mso-panose-stroke-variation","mso-panose-weight","mso-panose-x-height","mso-paper-source","mso-paper-source-first-page","mso-paper-source-other-pages","mso-pattern","mso-pattern-color","mso-pattern-style","mso-print-area","mso-print-color","mso-print-gridlines","mso-print-headings","mso-print-resolution","mso-print-sheet-order","mso-print-title-column","mso-print-title-row","mso-prop-change","mso-prop-change-author","mso-prop-change-time","mso-protection","mso-rotate","mso-row-margin-left","mso-row-margin-right","mso-ruby-merge","mso-ruby-visibility","mso-scheme-fill-color","mso-scheme-shadow-color","mso-shading","mso-shadow-color","mso-space-above","mso-space-below","mso-spacerun","mso-special-character","mso-special-format","mso-style-id","mso-style-name","mso-style-next","mso-style-parent","mso-style-type","mso-style-update","mso-subdocument","mso-symbol-font-family","mso-tab-count","mso-table-anchor-horizontal","mso-table-anchor-vertical","mso-table-bspace","mso-table-del-author","mso-table-del-time","mso-table-deleted","mso-table-dir","mso-table-ins-author","mso-table-ins-time","mso-table-inserted","mso-table-layout-alt","mso-table-left","mso-table-lspace","mso-table-overlap","mso-table-prop-author","mso-table-prop-change","mso-table-prop-time","mso-table-rspace","mso-table-top","mso-table-tspace","mso-table-wrap","mso-text-animation","mso-text-combine-brackets","mso-text-combine-id","mso-text-control","mso-text-fit-id","mso-text-indent-alt","mso-text-orientation","mso-text-raise","mso-title-page","mso-tny-compress","mso-unsynced","mso-vertical-align-alt","mso-vertical-align-special","mso-vertical-page-align","mso-width-alt","mso-width-source","mso-word-wrap","mso-xlrowspan","mso-zero-height","multiple","muted","name","nav-banner-image","navbutton_background_color","navbutton_home_hovered","navbutton_home_normal","navbutton_home_pushed","navbutton_horiz_hovered","navbutton_horiz_normal","navbutton_horiz_pushed","navbutton_next_hovered","navbutton_next_normal","navbutton_next_pushed","navbutton_prev_hovered","navbutton_prev_normal","navbutton_prev_pushed","navbutton_up_hovered","navbutton_up_normal","navbutton_up_pushed","navbutton_vert_hovered","navbutton_vert_normal","navbutton_vert_pushed","nohref","noresize","noshade","novalidate","nowrap","object","onblur","onchange","onclick","ondblclick","onfocus","onkeydown","onkeypress","onkeyup","onload","onmousedown","onmousemove","onmouseout","onmouseover","onmouseup","onreset","onselect","onsubmit","onunload","open","optimum","overflow","padding","padding-bottom","padding-left","padding-right","padding-top","page","page-break-after","page-break-before","panose-1","pattern","ping","placeholder","position","poster","preload","profile","prompt","punctuation-trim","punctuation-wrap","radiogroup","readonly","referrerpolicy","rel","required","rev","reversed","right","row-span","rows","rowspan","ruby-align","ruby-overhang","ruby-position","rules","sandbox","scheme","scope","scoped","scrolling","selected","separator-image","shape","size","sizes","slot","span","spellcheck","src","srcdoc","srclang","srcset","standby","start","step","style","summary","tab-interval","tab-stops","tabindex","table-border-color-dark","table-border-color-light","table-layout","target","text","text-align","text-autospace","text-combine","text-decoration","text-effect","text-fit","text-indent","text-justify","text-justify-trim","text-kashida","text-line-through","text-shadow","text-transform","text-underline","text-underline-color","text-underline-style","title","top","top-bar-button","translate","type","unicode-bidi","urlId","usemap","valign","value","valuetype","version","vert-align","vertical-align","visibility","vlink","vnd.ms-excel.numberformat","vspace","white-space","width","word-break","word-spacing","wrap","xmlns","z-index"]);function e(t){return"string"==typeof t&&(t.charCodeAt(0)>96&&t.charCodeAt(0)<123||t.charCodeAt(0)>64&&t.charCodeAt(0)<91||t.charCodeAt(0)>47&&t.charCodeAt(0)<58||":"===t||"-"===t)}Function.prototype.toString.call(Object);var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};!function(t,e){t(e={exports:{}},e.exports)}((function(t,e){var r="[object Arguments]",n="[object Function]",s="[object GeneratorFunction]",i="[object Map]",a="[object Set]",l=/\w*$/,c=/^\[object .+?Constructor\]$/,m=/^(?:0|[1-9]\d*)$/,u={};u[r]=u["[object Array]"]=u["[object ArrayBuffer]"]=u["[object DataView]"]=u["[object Boolean]"]=u["[object Date]"]=u["[object Float32Array]"]=u["[object Float64Array]"]=u["[object Int8Array]"]=u["[object Int16Array]"]=u["[object Int32Array]"]=u[i]=u["[object Number]"]=u["[object Object]"]=u["[object RegExp]"]=u[a]=u["[object String]"]=u["[object Symbol]"]=u["[object Uint8Array]"]=u["[object Uint8ClampedArray]"]=u["[object Uint16Array]"]=u["[object Uint32Array]"]=!0,u["[object Error]"]=u[n]=u["[object WeakMap]"]=!1;var f="object"==typeof o&&o&&o.Object===Object&&o,d="object"==typeof self&&self&&self.Object===Object&&self,h=f||d||Function("return this")(),g=e&&!e.nodeType&&e,p=g&&t&&!t.nodeType&&t,b=p&&p.exports===g;function y(t,e){return t.set(e[0],e[1]),t}function v(t,e){return t.add(e),t}function _(t,e,o,r){var n=-1,s=t?t.length:0;for(r&&s&&(o=t[++n]);++n<s;)o=e(o,t[n],n,t);return o}function w(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function j(t){var e=-1,o=Array(t.size);return t.forEach((function(t,r){o[++e]=[r,t]})),o}function x(t,e){return function(o){return t(e(o))}}function k(t){var e=-1,o=Array(t.size);return t.forEach((function(t){o[++e]=t})),o}var A,M=Array.prototype,O=Function.prototype,C=Object.prototype,B=h["__core-js_shared__"],R=(A=/[^.]+$/.exec(B&&B.keys&&B.keys.IE_PROTO||""))?"Symbol(src)_1."+A:"",I=O.toString,z=C.hasOwnProperty,E=C.toString,$=RegExp("^"+I.call(z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),S=b?h.Buffer:void 0,L=h.Symbol,T=h.Uint8Array,W=x(Object.getPrototypeOf,Object),D=Object.create,P=C.propertyIsEnumerable,N=M.splice,F=Object.getOwnPropertySymbols,H=S?S.isBuffer:void 0,U=x(Object.keys,Object),q=pt(h,"DataView"),V=pt(h,"Map"),J=pt(h,"Promise"),G=pt(h,"Set"),Z=pt(h,"WeakMap"),K=pt(Object,"create"),Q=wt(q),X=wt(V),Y=wt(J),tt=wt(G),et=wt(Z),ot=L?L.prototype:void 0,rt=ot?ot.valueOf:void 0;function nt(t){var e=-1,o=t?t.length:0;for(this.clear();++e<o;){var r=t[e];this.set(r[0],r[1])}}function st(t){var e=-1,o=t?t.length:0;for(this.clear();++e<o;){var r=t[e];this.set(r[0],r[1])}}function it(t){var e=-1,o=t?t.length:0;for(this.clear();++e<o;){var r=t[e];this.set(r[0],r[1])}}function at(t){this.__data__=new st(t)}function lt(t,e){var o=xt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&kt(t)}(t)&&z.call(t,"callee")&&(!P.call(t,"callee")||E.call(t)==r)}(t)?function(t,e){for(var o=-1,r=Array(t);++o<t;)r[o]=e(o);return r}(t.length,String):[],n=o.length,s=!!n;for(var i in t)!e&&!z.call(t,i)||s&&("length"==i||vt(i,n))||o.push(i);return o}function ct(t,e,o){var r=t[e];z.call(t,e)&&jt(r,o)&&(void 0!==o||e in t)||(t[e]=o)}function mt(t,e){for(var o=t.length;o--;)if(jt(t[o][0],e))return o;return-1}function ut(t,e,o,c,m,f,d){var h;if(c&&(h=f?c(t,m,f,d):c(t)),void 0!==h)return h;if(!Ot(t))return t;var g=xt(t);if(g){if(h=function(t){var e=t.length,o=t.constructor(e);e&&"string"==typeof t[0]&&z.call(t,"index")&&(o.index=t.index,o.input=t.input);return o}(t),!e)return function(t,e){var o=-1,r=t.length;e||(e=Array(r));for(;++o<r;)e[o]=t[o];return e}(t,h)}else{var p=yt(t),b=p==n||p==s;if(At(t))return function(t,e){if(e)return t.slice();var o=new t.constructor(t.length);return t.copy(o),o}(t,e);if("[object Object]"==p||p==r||b&&!f){if(w(t))return f?t:{};if(h=function(t){return"function"!=typeof t.constructor||_t(t)?{}:(e=W(t),Ot(e)?D(e):{});var e}(b?{}:t),!e)return function(t,e){return ht(t,bt(t),e)}(t,function(t,e){return t&&ht(e,Ct(e),t)}(h,t))}else{if(!u[p])return f?t:{};h=function(t,e,o,r){var n=t.constructor;switch(e){case"[object ArrayBuffer]":return dt(t);case"[object Boolean]":case"[object Date]":return new n(+t);case"[object DataView]":return function(t,e){var o=e?dt(t.buffer):t.buffer;return new t.constructor(o,t.byteOffset,t.byteLength)}(t,r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return function(t,e){var o=e?dt(t.buffer):t.buffer;return new t.constructor(o,t.byteOffset,t.length)}(t,r);case i:return function(t,e,o){return _(e?o(j(t),!0):j(t),y,new t.constructor)}(t,r,o);case"[object Number]":case"[object String]":return new n(t);case"[object RegExp]":return function(t){var e=new t.constructor(t.source,l.exec(t));return e.lastIndex=t.lastIndex,e}(t);case a:return function(t,e,o){return _(e?o(k(t),!0):k(t),v,new t.constructor)}(t,r,o);case"[object Symbol]":return s=t,rt?Object(rt.call(s)):{}}var s}(t,p,ut,e)}}d||(d=new at);var x=d.get(t);if(x)return x;if(d.set(t,h),!g)var A=o?function(t){return function(t,e,o){var r=e(t);return xt(t)?r:function(t,e){for(var o=-1,r=e.length,n=t.length;++o<r;)t[n+o]=e[o];return t}(r,o(t))}(t,Ct,bt)}(t):Ct(t);return function(t,e){for(var o=-1,r=t?t.length:0;++o<r&&!1!==e(t[o],o,t););}(A||t,(function(r,n){A&&(r=t[n=r]),ct(h,n,ut(r,e,o,c,n,t,d))})),h}function ft(t){return!(!Ot(t)||(e=t,R&&R in e))&&(Mt(t)||w(t)?$:c).test(wt(t));var e}function dt(t){var e=new t.constructor(t.byteLength);return new T(e).set(new T(t)),e}function ht(t,e,o,r){o||(o={});for(var n=-1,s=e.length;++n<s;){var i=e[n],a=r?r(o[i],t[i],i,o,t):void 0;ct(o,i,void 0===a?t[i]:a)}return o}function gt(t,e){var o,r,n=t.__data__;return("string"==(r=typeof(o=e))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==o:null===o)?n["string"==typeof e?"string":"hash"]:n.map}function pt(t,e){var o=function(t,e){return null==t?void 0:t[e]}(t,e);return ft(o)?o:void 0}nt.prototype.clear=function(){this.__data__=K?K(null):{}},nt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},nt.prototype.get=function(t){var e=this.__data__;if(K){var o=e[t];return"__lodash_hash_undefined__"===o?void 0:o}return z.call(e,t)?e[t]:void 0},nt.prototype.has=function(t){var e=this.__data__;return K?void 0!==e[t]:z.call(e,t)},nt.prototype.set=function(t,e){return this.__data__[t]=K&&void 0===e?"__lodash_hash_undefined__":e,this},st.prototype.clear=function(){this.__data__=[]},st.prototype.delete=function(t){var e=this.__data__,o=mt(e,t);return!(o<0)&&(o==e.length-1?e.pop():N.call(e,o,1),!0)},st.prototype.get=function(t){var e=this.__data__,o=mt(e,t);return o<0?void 0:e[o][1]},st.prototype.has=function(t){return mt(this.__data__,t)>-1},st.prototype.set=function(t,e){var o=this.__data__,r=mt(o,t);return r<0?o.push([t,e]):o[r][1]=e,this},it.prototype.clear=function(){this.__data__={hash:new nt,map:new(V||st),string:new nt}},it.prototype.delete=function(t){return gt(this,t).delete(t)},it.prototype.get=function(t){return gt(this,t).get(t)},it.prototype.has=function(t){return gt(this,t).has(t)},it.prototype.set=function(t,e){return gt(this,t).set(t,e),this},at.prototype.clear=function(){this.__data__=new st},at.prototype.delete=function(t){return this.__data__.delete(t)},at.prototype.get=function(t){return this.__data__.get(t)},at.prototype.has=function(t){return this.__data__.has(t)},at.prototype.set=function(t,e){var o=this.__data__;if(o instanceof st){var r=o.__data__;if(!V||r.length<199)return r.push([t,e]),this;o=this.__data__=new it(r)}return o.set(t,e),this};var bt=F?x(F,Object):function(){return[]},yt=function(t){return E.call(t)};function vt(t,e){return!!(e=null==e?9007199254740991:e)&&("number"==typeof t||m.test(t))&&t>-1&&t%1==0&&t<e}function _t(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||C)}function wt(t){if(null!=t){try{return I.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function jt(t,e){return t===e||t!=t&&e!=e}(q&&"[object DataView]"!=yt(new q(new ArrayBuffer(1)))||V&&yt(new V)!=i||J&&"[object Promise]"!=yt(J.resolve())||G&&yt(new G)!=a||Z&&"[object WeakMap]"!=yt(new Z))&&(yt=function(t){var e=E.call(t),o="[object Object]"==e?t.constructor:void 0,r=o?wt(o):void 0;if(r)switch(r){case Q:return"[object DataView]";case X:return i;case Y:return"[object Promise]";case tt:return a;case et:return"[object WeakMap]"}return e});var xt=Array.isArray;function kt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}(t.length)&&!Mt(t)}var At=H||function(){return!1};function Mt(t){var e=Ot(t)?E.call(t):"";return e==n||e==s}function Ot(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Ct(t){return kt(t)?lt(t):function(t){if(!_t(t))return U(t);var e=[];for(var o in Object(t))z.call(t,o)&&"constructor"!=o&&e.push(o);return e}(t)}t.exports=function(t){return ut(t,!0,!0)}}));function r(t,e){return function(t,e,o){if("string"!=typeof t||!t.length)return null;if(e&&"number"==typeof e||(e=0),!t[e+1])return null;if(t[e+1]&&(!o&&t[e+1].trim().length||o&&(t[e+1].trim().length||"\n\r".includes(t[e+1]))))return e+1;if(t[e+2]&&(!o&&t[e+2].trim().length||o&&(t[e+2].trim().length||"\n\r".includes(t[e+2]))))return e+2;for(let r=e+1,n=t.length;r<n;r++)if(t[r]&&(!o&&t[r].trim().length||o&&(t[r].trim().length||"\n\r".includes(t[r]))))return r;return null}(t,e,!1)}const n=Array.isArray;function s(t,e,o){const r=Object.assign(Object.assign({},{inclusiveRangeEnds:!1,returnMatchedRangeInsteadOfTrue:!1}),o);return!!n(e)&&(r.returnMatchedRangeInsteadOfTrue?e.find(e=>r.inclusiveRangeEnds?t>=e[0]&&t<=e[1]:t>e[0]&&t<e[1])||!1:e.some(e=>r.inclusiveRangeEnds?t>=e[0]&&t<=e[1]:t>e[0]&&t<e[1]))}function i(t,e){if(void 0===t)throw new Error("string-split-by-whitespace: [THROW_ID_01] The input is missing!");if("string"!=typeof t)return t;if(""===t.trim())return[];const o=Object.assign({},{ignoreRanges:[]},e);if(o.ignoreRanges.length>0&&!o.ignoreRanges.every(t=>Array.isArray(t)))throw new Error("string-split-by-whitespace: [THROW_ID_03] The opts.ignoreRanges contains elements which are not arrays!");let r=null;const n=[];for(let e=0,i=t.length;e<i;e++)null!==r||""===t[e].trim()||0!==o.ignoreRanges.length&&(0===o.ignoreRanges.length||s(e,o.ignoreRanges.map(t=>[t[0],t[1]-1]),{inclusiveRangeEnds:!0}))||(r=e),null!==r&&(""===t[e].trim()?(n.push(t.slice(r,e)),r=null):o.ignoreRanges.length&&s(e,o.ignoreRanges)?(n.push(t.slice(r,e-1)),r=null):void 0===t[e+1]&&n.push(t.slice(r,e+1)));return n}function a(t){return t&&"object"==typeof t&&!Array.isArray(t)}function l(t){return"string"==typeof t}function c(t,e,o,r,n,s){const i="function"==typeof o?o():o;if(e<0&&n&&"EOL"===i)return i;if(e>=t.length&&!n)return!1;let a=n?1:o.length,l=!1,c=!1,m=r.maxMismatches,u=e,f=!1,d=!1,h=!1;for(;t[u];){const e=s(u);if(r.trimBeforeMatching&&""===t[u].trim()){if(!t[e]&&n&&"EOL"===o)return!0;u=s(u);continue}if(!r.i&&r.trimCharsBeforeMatching.includes(t[u])||r.i&&r.trimCharsBeforeMatching.map(t=>t.toLowerCase()).includes(t[u].toLowerCase())){if(n&&"EOL"===o&&!t[e])return!0;u=s(u);continue}const i=e>u?o[o.length-a]:o[a-1];if(!r.i&&t[u]===i||r.i&&t[u].toLowerCase()===i.toLowerCase()){if(f||(f=!0),c||(c=!0),a===o.length?d=!0:1===a&&(h=!0),a-=1,a<1)return u}else{if(!(r.maxMismatches&&m&&u))return!(0!==u||1!==a||r.lastMustMatch||!c)&&0;m--;for(let n=0;n<=m;n++){const i=e>u?o[o.length-a+1+n]:o[a-2-n],l=t[s(u)];if(i&&(!r.i&&t[u]===i||r.i&&t[u].toLowerCase()===i.toLowerCase())&&(!r.firstMustMatch||a!==o.length)){a-=2,f=!0;break}if(l&&i&&(!r.i&&l===i||r.i&&l.toLowerCase()===i.toLowerCase())&&(!r.firstMustMatch||a!==o.length)){a-=1,f=!0;break}if(void 0===i&&m>=0&&f&&(!r.firstMustMatch||d)&&(!r.lastMustMatch||h))return u}f||(l=u)}if(!1!==l&&l!==u&&(l=!1),a<1)return u;u=s(u)}return a>0?!(!n||"EOL"!==i)||!!(r.maxMismatches>=a&&c)&&(l||0):void 0}function m(t,e,o,r){return function(t,e,o,r,n){if(a(n)&&Object.prototype.hasOwnProperty.call(n,"trimBeforeMatching")&&"boolean"!=typeof n.trimBeforeMatching)throw new Error(`string-match-left-right/${t}(): [THROW_ID_09] opts.trimBeforeMatching should be boolean!${Array.isArray(n.trimBeforeMatching)?" Did you mean to use opts.trimCharsBeforeMatching?":""}`);const s=Object.assign({},{i:!1,trimBeforeMatching:!1,trimCharsBeforeMatching:[],maxMismatches:0,firstMustMatch:!1,lastMustMatch:!1},n);var i;if(s.trimCharsBeforeMatching="string"==typeof(i=s.trimCharsBeforeMatching)?i.length>0?[i]:[]:i,s.trimCharsBeforeMatching=s.trimCharsBeforeMatching.map(t=>l(t)?t:String(t)),!l(e))return!1;if(!e.length)return!1;if(!Number.isInteger(o)||o<0)throw new Error(`string-match-left-right/${t}(): [THROW_ID_03] the second argument should be a natural number. Currently it's of a type: ${typeof o}, equal to:\n${JSON.stringify(o,null,4)}`);let m,u,f,d;if(l(r))m=[r];else if(Array.isArray(r))m=r;else if(r){if("function"!=typeof r)throw new Error(`string-match-left-right/${t}(): [THROW_ID_05] the third argument, whatToMatch, is neither string nor array of strings! It's ${typeof r}, equal to:\n${JSON.stringify(r,null,4)}`);m=[],m.push(r)}else m=r;if(n&&!a(n))throw new Error(`string-match-left-right/${t}(): [THROW_ID_06] the fourth argument, options object, should be a plain object. Currently it's of a type "${typeof n}", and equal to:\n${JSON.stringify(n,null,4)}`);if(s.trimCharsBeforeMatching.some((t,e)=>t.length>1&&(f=e,d=t,!0)))throw new Error(`string-match-left-right/${t}(): [THROW_ID_07] the fourth argument, options object contains trimCharsBeforeMatching. It was meant to list the single characters but one of the entries at index ${f} is longer than 1 character, ${d.length} (equals to ${d}). Please split it into separate characters and put into array as separate elements.`);if(!m||!Array.isArray(m)||Array.isArray(m)&&!m.length||Array.isArray(m)&&1===m.length&&l(m[0])&&!m[0].trim().length){if("function"==typeof s.cb){let r,n=o;if("matchLeftIncl"!==t&&"matchRight"!==t||(n+=1),"L"===t[5])for(let t=n;t--;){const o=e[t];if((!s.trimBeforeMatching||s.trimBeforeMatching&&void 0!==o&&o.trim().length)&&(!s.trimCharsBeforeMatching.length||void 0!==o&&!s.trimCharsBeforeMatching.includes(o))){r=t;break}}else if(t.startsWith("matchRight"))for(let t=n;t<e.length;t++){const o=e[t];if((!s.trimBeforeMatching||s.trimBeforeMatching&&o.trim().length)&&(!s.trimCharsBeforeMatching.length||!s.trimCharsBeforeMatching.includes(o))){r=t;break}}if(void 0===r)return!1;const i=e[r],a=r+1;let l="";return a&&a>0&&(l=e.slice(0,a)),"L"===t[5]?s.cb(i,l,r):(r&&r>0&&(l=e.slice(r)),s.cb(i,l,r))}let r="";throw n||(r=" More so, the whole options object, the fourth input argument, is missing!"),new Error(`string-match-left-right/${t}(): [THROW_ID_08] the third argument, "whatToMatch", was given as an empty string. This means, you intend to match purely by a callback. The callback was not set though, the opts key "cb" is not set!${r}`)}for(let r=0,n=m.length;r<n;r++){u="function"==typeof m[r];const n=m[r];let i,a,l="",f=o;"matchRight"===t?f++:"matchLeft"===t&&f--;const d=c(e,f,n,s,u,e=>"L"===t[5]?e-1:e+1);if(d&&u&&"function"==typeof n&&"EOL"===n())return!(!n()||s.cb&&!s.cb(i,l,a))&&n();if(Number.isInteger(d)&&(a=t.startsWith("matchLeft")?d-1:d+1,l="L"===t[5]?e.slice(0,d):e.slice(a)),a<0&&(a=void 0),e[a]&&(i=e[a]),Number.isInteger(d)&&(!s.cb||s.cb(i,l,a)))return n}return!1}("matchRight",t,e,o,r)}function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e,o){for(var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],n=function(e,n){return r.some((function(o){return t.startsWith(o,e)}))?{v:!0}:t[e]===o?{v:!1}:void 0},s=e,i=t.length;s<i;s++){var a=n(s);if("object"===u(a))return a.v}return!0}function d(t,e,o,r){for(var n=e,s=t.length;n<s;n++){if(t.startsWith(o,n))return!0;if(t.startsWith(r,n))return!1}return!1}function h(t,o){if(!e(t[o])||!o)return!1;return/^[a-zA-Z0-9:-]*[=]?((?:'[^']*')|(?:"[^"]*"))/.test(t.slice(o))}function g(t){return"'"===t?'"':"'"}return function(o,n,s){if("string"!=typeof o||!o.trim().length||!Number.isInteger(n)||!Number.isInteger(s)||!o[n]||!o[s]||n>=s)return!1;var a,l="'\"".includes(o[n])?o[n]:null,c=null;l&&(c=g(l));for(var u,p=(new Map).set("'",0).set('"',0).set("matchedPairs",0),b=null,y=0,v=!1,_=!1,w=!1,j=!1,x=!1,k=!1,A=n,M=o.length;A<M;A++){if("'\"".includes(o[A])&&v&&_===n&&w<A&&A>=s){var O=A!==s,C=!(A>s&&o[n]===o[s]&&o[n]===o[A]),B=h(o,A+1),R=a&&a<A&&t.has(o.slice(a,A).trim()),I=a<A&&o[a-1]&&!o[a-1].trim().length&&Array.from(o.slice(a,A).trim()).every((function(t){return e(t)}))&&o[n]===o[s],z="/>".includes(o[r(o,A)])||e(o[r(o,A)])||v;return O&&(C||B||R||I)&&z}if("'\"".includes(o[A])&&(b&&o[A]===o[b]?(p.set("matchedPairs",p.get("matchedPairs")+1),_=b,w=A,b=null,v=!0):v=!1,p.set(o[A],p.get(o[A])+1),y=p.get('"')+p.get("'")),">"!==o[A]||x||(x=!0),"<"===o[A]&&x&&!k&&(k=!0,A>s))return!1;if(o[A].trim().length&&!a)e(o[A])&&(a=A);else if(a&&!e(o[A])&&(u=o.slice(a,A),j=a>=s,a=null,"'\"".includes(o[A])&&0===p.get("matchedPairs")&&3===y&&o[n]===o[A]&&t.has(u))){var E=A>s,$=!b,S=b+1>=A,L=i(o.slice(b+1,A)).every((function(e){return t.has(e)})),T=A===s,W=y<3,D=!!v,P=!b,N=b+1>=A,F=!i(o.slice(b+1,A)).every((function(e){return t.has(e)}));return E&&($||S||L)||T&&(W||D||P||N||F)}if("'\"".includes(o[A])&&!(p.get('"')%2&&p.get("'")%2)&&(p.get('"')+p.get("'"))%2&&(u&&t.has(u)||A>s+1&&Array.from(o.slice(s+1,A).trim()).every((function(t){return e(t)})))){var H=!!l,U=o[n]!==o[s],q=Array.from(o.slice(n+1,s).trim()).every((function(t){return e(t)})),V=!d(o,A+1,o[s],g(o[s]));return A>s&&!(H&&U&&q&&V)}if(("="===o[A]||!o[A].length&&"="===o[r(o,A)])&&u&&t.has(u))return A>s&&!((!v||_!==n||w!==s)&&v&&_&&_<=s);if(A>s){if(l&&o[A]===l){var J=!!b,G=b===s,Z=b+1<A&&o.slice(b+1,A).trim().length,K=i(o.slice(b+1,A)).every((function(e){return t.has(e)}));return J&&G&&Z&&K&&A>=s}if(l&&o[s]===c&&o[A]===c)return!1;if("/"===o[A]||">"===o[A]||"<"===o[A]){var Q=p.get("matchedPairs")<2,X=y<3||p.get('"')+p.get("'")-2*p.get("matchedPairs")!=2,Y=!v||v&&!(_&&Array.from(o.slice(n+1,_).trim()).every((function(t){return e(t)}))&&t.has(o.slice(n+1,_).trim())),tt=!r(o,A)&&y%2==0,et=o[n-2]&&"="===o[n-1]&&e(o[n-2]),ot=!f(o,A+1,"<",["='",'="']);return Q&&X&&(Y||tt||et||ot)}if("="===o[A]&&m(o,A,["'",'"'],{trimBeforeMatching:!0,trimCharsBeforeMatching:["="]}))return!0}else{var rt=void 0;if(o[A-1]&&o[A-1].trim().length&&"="!==o[A-1])rt=A-1;else for(var nt=A;nt--;)if(o[nt].trim().length&&"="!==o[nt]){rt=nt;break}if("="===o[A]&&m(o,A,["'",'"'],{cb:function(t){return!"/>".includes(t)},trimBeforeMatching:!0,trimCharsBeforeMatching:["="]})&&e(o[rt]))return!1}if("'\"".includes(o[A])&&A>s)return!!(j&&u&&t.has(u));"'\"".includes(o[A])&&(b=A)}return!1}}));