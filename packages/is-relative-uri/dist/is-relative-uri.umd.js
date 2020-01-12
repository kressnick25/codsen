/**
 * is-relative-uri
 * Is given string a relative URI?
 * Version: 1.0.0
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/is-relative-uri
 */

!function(s,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(s=s||self).isRelativeUri=e()}(this,(function(){"use strict";function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(s){return typeof s}:function(s){return s&&"function"==typeof Symbol&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s})(e)}var e=["aaa","aaas","about","acap","acct","acd","acr","adiumxtra","adt","afp","afs","aim","amss","android","appdata","apt","ark","attachment","aw","barion","beshare","bitcoin","bitcoincash","blob","bolo","browserext","calculator","callto","cap","cast","casts","chrome","chrome-extension","cid","coap","coap+tcp","coap+ws","coaps","coaps+tcp","coaps+ws","com-eventbrite-attendee","content","conti","crid","cvs","dab","dav","diaspora","dict","did","dis","dlna-playcontainer","dlna-playsingle","dns","dntp","dpp","drm","drop","dtn","dvb","ed2k","elsi","example","facetime","fax","feed","feedready","filesystem","finger","first-run-pen-experience","fish","fm","fuchsia-pkg","geo","gg","git","gizmoproject","go","gopher","graph","gtalk","h323","ham","hcap","hcp","hxxp","hxxps","hydrazone","iax","icap","icon","im","imap","info","iotdisco","ipn","ipp","ipps","irc6","ircs","iris","iris.beep","iris.lwz","iris.xpc","iris.xpcs","isostore","itms","jabber","jar","jms","keyparc","lastfm","ldap","ldaps","leaptofrogans","lorawan","lvlt","magnet","mailserver","maps","market","message","microsoft.windows.camera","microsoft.windows.camera.multipicker","microsoft.windows.camera.picker","mid","mms","modem","mongodb","moz","ms-access","ms-browser-extension","ms-calculator","ms-drive-to","ms-enrollment","ms-excel","ms-eyecontrolspeech","ms-gamebarservices","ms-gamingoverlay","ms-getoffice","ms-help","ms-infopath","ms-inputapp","ms-lockscreencomponent-config","ms-media-stream-id","ms-mixedrealitycapture","ms-mobileplans","ms-officeapp","ms-people","ms-project","ms-powerpoint","ms-publisher","ms-restoretabcompanion","ms-screenclip","ms-screensketch","ms-search","ms-search-repair","ms-secondary-screen-controller","ms-secondary-screen-setup","ms-settings","ms-settings-airplanemode","ms-settings-bluetooth","ms-settings-camera","ms-settings-cellular","ms-settings-cloudstorage","ms-settings-connectabledevices","ms-settings-displays-topology","ms-settings-emailandaccounts","ms-settings-language","ms-settings-location","ms-settings-lock","ms-settings-nfctransactions","ms-settings-notifications","ms-settings-power","ms-settings-privacy","ms-settings-proximity","ms-settings-screenrotation","ms-settings-wifi","ms-settings-workplace","ms-spd","ms-sttoverlay","ms-transit-to","ms-useractivityset","ms-virtualtouchpad","ms-visio","ms-walk-to","ms-whiteboard","ms-whiteboard-cmd","ms-word","msnim","msrp","msrps","mss","mtqp","mumble","mupdate","mvn","news","nfs","ni","nih","nntp","notes","ocf","oid","onenote","onenote-cmd","opaquelocktoken","openpgp4fpr","pack","palm","paparazzi","payment","payto","pkcs11","platform","pop","pres","prospero","proxy","pwid","psyc","pttp","qb","query","quic-transport","redis","rediss","reload","res","resource","rmi","rsync","rtmfp","rtmp","rtsp","rtsps","rtspu","secondlife","service","session","sftp","sgn","shttp","sieve","simpleledger","sip","sips","skype","smb","sms","smtp","snews","snmp","soap.beep","soap.beeps","soldat","spiffe","spotify","ssh","steam","stun","stuns","submit","svn","tag","teamspeak","tel","teliaeid","telnet","tftp","things","thismessage","tip","tn3270","tool","turn","turns","tv","udp","unreal","urn","ut2004","v-event","vemmi","ventrilo","videotex","vnc","view-source","wais","webcal","wpid","ws","wss","wtai","wyciwyg","xcon","xcon-userid","xfire","xmlrpc.beep","xmlrpc.beeps","xmpp","xri","ymsgr","z39.50","z39.50r","z39.50s"];return function(t,a){if("string"!=typeof t)throw new Error('is-relative-uri: [THROW_ID_01] input string must be string, it was given as "'.concat(t,'" (type ').concat(s(t),")"));if(a&&"object"!==s(a))throw new Error("is-relative-uri: [THROW_ID_02] opts be plain object, it was given as ".concat(a," (type ").concat(s(a),")"));var i,r={flagUpUrisWithSchemes:!0};if((i=a?Object.assign({},r,a):Object.assign({},r)).offset&&!Number.isInteger(i.offset))throw new Error("is-relative-uri: [THROW_ID_02] opts.offset must be an integer, it was given as ".concat(i.offset," (type ").concat(s(i.offset),")"));return i.offset||(i.offset=0),t.split("").some((function(s){return!s.trim().length}))?{res:!1,message:"Remove whitespace."}:t.match(/\/\s*\/\s*\//g)?{res:!1,message:"Three consecutive slashes found."}:t.match(/.\/\s*\//g)?{res:!1,message:"Character followed by two slashes."}:t.includes("...")?{res:!1,message:"Three consecutive dots."}:t.includes("%")&&!t.match(/%[0-9a-f]/gi)?{res:!1,message:'Unescaped "%" character.'}:t.includes("<")?{res:!1,message:'Unescaped "<" character.'}:t.includes(">")?{res:!1,message:'Unescaped ">" character.'}:t.includes("[")?{res:!1,message:'Unescaped "[" character.'}:t.includes("]")?{res:!1,message:'Unescaped "]" character.'}:t.includes("{")?{res:!1,message:'Unescaped "{" character.'}:t.includes("}")?{res:!1,message:'Unescaped "}" character.'}:t.includes("|")?{res:!1,message:'Unescaped "|" character.'}:t.includes("\\")?{res:!1,message:"Unescaped backslash (".concat("\\",") character.")}:t.includes("^")?{res:!1,message:"Unescaped caret (^) character."}:t.endsWith(".")&&!t.startsWith(".")?{res:!1,message:"Ends with dot, is file extension missing?"}:t.includes("??")?{res:!1,message:"Two consecutive question marks."}:t.includes("##")?{res:!1,message:"Two consecutive hashes."}:t.endsWith("#")?{res:!1,message:"Ends with a hash."}:t.includes("#")&&t.slice(t.indexOf("#")+1).includes("/")?{res:!1,message:"Slash follows hash."}:t.match(/\.\.[^/]/g)?{res:!1,message:"Two dots should be followed by a slash."}:i.flagUpUrisWithSchemes&&(t.startsWith("http:")||t.startsWith("https:")||t.startsWith("ftp:")||t.startsWith("mailto:")||t.startsWith("file:")||t.startsWith("data:")||t.startsWith("irc:")||e.some((function(s){return t.startsWith("".concat(s,":"))})))?{res:!1,message:null}:{res:!0,message:null}}}));
