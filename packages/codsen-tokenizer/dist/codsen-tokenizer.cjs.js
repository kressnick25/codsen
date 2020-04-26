/**
 * codsen-tokenizer
 * HTML and CSS lexer aimed at code with fatal errors, accepts mixed coding languages
 * Version: 2.14.1
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/codsen-tokenizer
 */

'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var stringMatchLeftRight = require('string-match-left-right');
var clone = _interopDefault(require('lodash.clonedeep'));
var stringLeftRight = require('string-left-right');
var attributeEnds = _interopDefault(require('is-html-attribute-closing'));
var htmlAllKnownAttributes = require('html-all-known-attributes');
var charSuitableForHTMLAttrName = _interopDefault(require('is-char-suitable-for-html-attr-name'));
var isTagOpening = _interopDefault(require('is-html-tag-opening'));

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function startsComment(str, i, token) {
  return (
    (str[i] === "<" && (stringMatchLeftRight.matchRight(str, i, ["!--"], {
      maxMismatches: 1,
      firstMustMatch: true,
      trimBeforeMatching: true
    }) || stringMatchLeftRight.matchRight(str, i, ["![endif]"], {
      i: true,
      maxMismatches: 2,
      trimBeforeMatching: true
    })) && !stringMatchLeftRight.matchRight(str, i, ["![cdata", "<"], {
      i: true,
      maxMismatches: 1,
      trimBeforeMatching: true
    }) && (token.type !== "comment" || token.kind !== "not") || str[i] === "-" && stringMatchLeftRight.matchRight(str, i, ["->"], {
      trimBeforeMatching: true
    }) && (token.type !== "comment" || !token.closing && token.kind !== "not") && !stringMatchLeftRight.matchLeft(str, i, "<", {
      trimBeforeMatching: true,
      trimCharsBeforeMatching: ["-", "!"]
    })) && (token.type !== "esp" || token.tail.includes(str[i]))
  );
}

var allHTMLTagsKnownToHumanity = ["a", "abbr", "acronym", "address", "applet", "area", "article", "aside", "audio", "b", "base", "basefont", "bdi", "bdo", "bgsound", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "command", "content", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "embed", "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "image", "img", "input", "ins", "isindex", "kbd", "keygen", "label", "legend", "li", "link", "listing", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "multicol", "nav", "nextid", "nobr", "noembed", "noframes", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "plaintext", "pre", "progress", "q", "rb", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "tt", "u", "ul", "var", "video", "wbr", "xmp"];
var espChars = "{}%-$_()*|";
var espLumpBlacklist = [")|(", "|(", ")(", "()", "{}", "%)", "*)", "**"];
function isStr(something) {
  return typeof something === "string";
}
function isLatinLetter(char) {
  return isStr(char) && char.length === 1 && (char.charCodeAt(0) > 64 && char.charCodeAt(0) < 91 || char.charCodeAt(0) > 96 && char.charCodeAt(0) < 123);
}
function charSuitableForTagName(char) {
  return /[.\-_a-z0-9\u00B7\u00C0-\uFFFD]/i.test(char);
}
function flipEspTag(str) {
  var res = "";
  for (var i = 0, len = str.length; i < len; i++) {
    if (str[i] === "[") {
      res = "]".concat(res);
    } else if (str[i] === "{") {
      res = "}".concat(res);
    } else if (str[i] === "(") {
      res = ")".concat(res);
    } else {
      res = "".concat(str[i]).concat(res);
    }
  }
  return res;
}
function isTagNameRecognised(tagName) {
  return allHTMLTagsKnownToHumanity.includes(tagName.toLowerCase()) || ["doctype", "cdata", "xml"].includes(tagName.toLowerCase());
}
function xBeforeYOnTheRight(str, startingIdx, x, y) {
  for (var i = startingIdx, len = str.length; i < len; i++) {
    if (str.startsWith(x, i)) {
      return true;
    }
    if (str.startsWith(y, i)) {
      return false;
    }
  }
  return false;
}

var BACKSLASH = "\\";
function startsTag(str, i, token, layers) {
  return str[i] && str[i].trim().length && (!layers.length || token.type === "text") && !["doctype", "xml"].includes(token.kind) && (str[i] === "<" && (isTagOpening(str, i, {
    allowCustomTagNames: true
  }) || str[stringLeftRight.right(str, i)] === ">" || stringMatchLeftRight.matchRight(str, i, ["doctype", "xml", "cdata"], {
    i: true,
    trimBeforeMatching: true,
    trimCharsBeforeMatching: ["?", "!", "[", " ", "-"]
  })) || isLatinLetter(str[i]) && (!str[i - 1] || !isLatinLetter(str[i - 1]) && !["<", "/", "!", BACKSLASH].includes(str[stringLeftRight.left(str, i)])) && isTagOpening(str, i, {
    allowCustomTagNames: false,
    skipOpeningBracket: true
  })) && (
  token.type !== "esp" || token.tail.includes(str[i]));
}

function startsEsp(str, i, token, layers, styleStarts) {
  return espChars.includes(str[i]) && str[i + 1] && espChars.includes(str[i + 1]) && token.type !== "rule" && token.type !== "at" && !(str[i] === "-" && "-{(".includes(str[i + 1])) && !("})".includes(str[i]) && "-".includes(str[i + 1])) && !(
  str[i] === "%" && "0123456789".includes(str[stringLeftRight.left(str, i)]) && (!str[i + 2] || ["\"", "'", ";"].includes(str[i + 2]) || !str[i + 2].trim().length)) && !(styleStarts && ("{}".includes(str[i]) || "{}".includes(str[stringLeftRight.right(str, i)])));
}

function isObj(something) {
  return something && _typeof(something) === "object" && !Array.isArray(something);
}
var voidTags = ["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"];
var charsThatEndCSSChunks = ["{", "}", ","];
function tokenizer(str, originalOpts) {
  var start = Date.now();
  if (!isStr(str)) {
    if (str === undefined) {
      throw new Error("codsen-tokenizer: [THROW_ID_01] the first input argument is completely missing! It should be given as string.");
    } else {
      throw new Error("codsen-tokenizer: [THROW_ID_02] the first input argument must be string! It was given as \"".concat(_typeof(str), "\", equal to:\n").concat(JSON.stringify(str, null, 4)));
    }
  }
  if (originalOpts && !isObj(originalOpts)) {
    throw new Error("codsen-tokenizer: [THROW_ID_03] the second input argument, an options object, should be a plain object but it was given as type ".concat(_typeof(originalOpts), ", equal to ").concat(JSON.stringify(originalOpts, null, 4)));
  }
  if (isObj(originalOpts) && originalOpts.tagCb && typeof originalOpts.tagCb !== "function") {
    throw new Error("codsen-tokenizer: [THROW_ID_04] the opts.tagCb, callback function, should be a function but it was given as type ".concat(_typeof(originalOpts.tagCb), ", equal to ").concat(JSON.stringify(originalOpts.tagCb, null, 4)));
  }
  if (isObj(originalOpts) && originalOpts.charCb && typeof originalOpts.charCb !== "function") {
    throw new Error("codsen-tokenizer: [THROW_ID_05] the opts.charCb, callback function, should be a function but it was given as type ".concat(_typeof(originalOpts.charCb), ", equal to ").concat(JSON.stringify(originalOpts.charCb, null, 4)));
  }
  if (isObj(originalOpts) && originalOpts.reportProgressFunc && typeof originalOpts.reportProgressFunc !== "function") {
    throw new Error("codsen-tokenizer: [THROW_ID_06] the opts.reportProgressFunc, callback function, should be a function but it was given as type ".concat(_typeof(originalOpts.reportProgressFunc), ", equal to ").concat(JSON.stringify(originalOpts.reportProgressFunc, null, 4)));
  }
  var defaults = {
    tagCb: null,
    tagCbLookahead: 0,
    charCb: null,
    charCbLookahead: 0,
    reportProgressFunc: null,
    reportProgressFuncFrom: 0,
    reportProgressFuncTo: 100
  };
  var opts = _objectSpread2({}, defaults, {}, originalOpts);
  var currentPercentageDone;
  var lastPercentage = 0;
  var len = str.length;
  var midLen = Math.floor(len / 2);
  var doNothing;
  var styleStarts = false;
  var tagStash = [];
  var charStash = [];
  var token = {};
  var tokenDefault = {
    type: null,
    start: null,
    end: null
  };
  function tokenReset() {
    token = clone(tokenDefault);
    attribReset();
    return token;
  }
  var attrib = {};
  var attribDefault = {
    attribName: null,
    attribNameRecognised: null,
    attribNameStartsAt: null,
    attribNameEndsAt: null,
    attribOpeningQuoteAt: null,
    attribClosingQuoteAt: null,
    attribValueRaw: null,
    attribValue: [],
    attribValueStartsAt: null,
    attribValueEndsAt: null,
    attribStart: null,
    attribEnd: null
  };
  function attribReset() {
    attrib = clone(attribDefault);
  }
  tokenReset();
  attribReset();
  var selectorChunkStartedAt;
  var parentTokenToBackup;
  var attribToBackup;
  var layers = [];
  function matchLayerLast(str2, i, matchFirstInstead) {
    if (!layers.length) {
      return false;
    }
    var whichLayerToMatch = matchFirstInstead ? layers[0] : layers[layers.length - 1];
    if (whichLayerToMatch.type === "simple") {
      return !whichLayerToMatch.value || str2[i] === flipEspTag(whichLayerToMatch.value);
    }
    if (whichLayerToMatch.type === "esp") {
      var _ret = function () {
        if (!espChars.includes(str2[i])) {
          return {
            v: false
          };
        }
        var wholeEspTagLump = "";
        for (var y = i; y < len; y++) {
          if (espChars.includes(str2[y])) {
            wholeEspTagLump += str2[y];
          } else {
            break;
          }
        }
        if (wholeEspTagLump && whichLayerToMatch.openingLump && wholeEspTagLump.length > whichLayerToMatch.guessedClosingLump.length) {
          if (wholeEspTagLump.endsWith(whichLayerToMatch.openingLump)) {
            return {
              v: wholeEspTagLump.length - whichLayerToMatch.openingLump.length
            };
          }
          var uniqueCharsListFromGuessedClosingLumpArr = new Set(whichLayerToMatch.guessedClosingLump);
          var found = 0;
          var _loop = function _loop(len2, _y) {
            if (!uniqueCharsListFromGuessedClosingLumpArr.has(wholeEspTagLump[_y]) && found > 1) {
              return {
                v: {
                  v: _y
                }
              };
            }
            if (uniqueCharsListFromGuessedClosingLumpArr.has(wholeEspTagLump[_y])) {
              found += 1;
              uniqueCharsListFromGuessedClosingLumpArr = new Set(_toConsumableArray(uniqueCharsListFromGuessedClosingLumpArr).filter(function (el) {
                return el !== wholeEspTagLump[_y];
              }));
            }
          };
          for (var _y = 0, len2 = wholeEspTagLump.length; _y < len2; _y++) {
            var _ret2 = _loop(len2, _y);
            if (_typeof(_ret2) === "object") return _ret2.v;
          }
        } else if (
        whichLayerToMatch.guessedClosingLump.split("").every(function (char) {
          return wholeEspTagLump.includes(char);
        })) {
          return {
            v: wholeEspTagLump.length
          };
        }
      }();
      if (_typeof(_ret) === "object") return _ret.v;
    }
  }
  function matchLayerFirst(str2, i) {
    return matchLayerLast(str2, i, true);
  }
  function reportFirstFromStash(stash, cb, lookaheadLength) {
    var currentElem = stash.shift();
    var next = [];
    for (var i = 0; i < lookaheadLength; i++) {
      if (stash[i]) {
        next.push(clone(stash[i]));
      } else {
        break;
      }
    }
    cb(currentElem, next);
  }
  function pingCharCb(incomingToken) {
    if (opts.charCb) {
      charStash.push(incomingToken);
      if (charStash.length > opts.charCbLookahead) {
        reportFirstFromStash(charStash, opts.charCb, opts.charCbLookahead);
      }
    }
  }
  function pingTagCb(incomingToken) {
    if (opts.tagCb) {
      tagStash.push(incomingToken);
      if (tagStash.length > opts.tagCbLookahead) {
        reportFirstFromStash(tagStash, opts.tagCb, opts.tagCbLookahead);
      }
    }
  }
  function dumpCurrentToken(incomingToken, i) {
    if (!["text", "esp"].includes(incomingToken.type) && incomingToken.start !== null && incomingToken.start < i && (str[i - 1] && !str[i - 1].trim() || str[i] === "<")) {
      incomingToken.end = stringLeftRight.left(str, i) + 1;
      incomingToken.value = str.slice(incomingToken.start, incomingToken.end);
      if (incomingToken.type === "tag" && !"/>".includes(str[incomingToken.end - 1])) {
        var cutOffIndex = incomingToken.tagNameEndsAt || i;
        if (Array.isArray(incomingToken.attribs) && incomingToken.attribs.length) {
          for (var i2 = 0, len2 = incomingToken.attribs.length; i2 < len2; i2++) {
            if (incomingToken.attribs[i2].attribNameRecognised) {
              cutOffIndex = incomingToken.attribs[i2].attribEnd;
              if (str[cutOffIndex] && str[cutOffIndex + 1] && !str[cutOffIndex].trim() && str[cutOffIndex + 1].trim()) {
                cutOffIndex += 1;
              }
            } else {
              if (i2 === 0) {
                incomingToken.attribs = [];
              } else {
                incomingToken.attribs = incomingToken.attribs.splice(0, i2);
              }
              break;
            }
          }
        }
        incomingToken.end = cutOffIndex;
        incomingToken.value = str.slice(incomingToken.start, incomingToken.end);
        if (!incomingToken.tagNameEndsAt) {
          incomingToken.tagNameEndsAt = cutOffIndex;
        }
        if (Number.isInteger(incomingToken.tagNameStartsAt) && Number.isInteger(incomingToken.tagNameEndsAt) && !incomingToken.tagName) {
          incomingToken.tagName = str.slice(incomingToken.tagNameStartsAt, cutOffIndex);
          incomingToken.recognised = isTagNameRecognised(incomingToken.tagName);
        }
        pingTagCb(incomingToken);
        token = tokenReset();
        initToken("text", cutOffIndex);
      } else {
        pingTagCb(incomingToken);
        token = tokenReset();
        if (str[i - 1] && !str[i - 1].trim()) {
          initToken("text", stringLeftRight.left(str, i) + 1);
        }
      }
    }
    if (token.start !== null) {
      if (token.end === null && token.start !== i) {
        token.end = i;
        token.value = str.slice(token.start, token.end);
      }
      if (token.start !== null && token.end !== null) {
        pingTagCb(token);
      }
      token = tokenReset();
    }
  }
  function atRuleWaitingForClosingCurlie() {
    return layers.length && layers[layers.length - 1].type === "at" && isObj(layers[layers.length - 1].token) && Number.isInteger(layers[layers.length - 1].token.openingCurlyAt) && !Number.isInteger(layers[layers.length - 1].token.closingCurlyAt);
  }
  function initToken(type, startVal) {
    attribReset();
    if (type === "tag") {
      token.type = type;
      token.start = startVal;
      token.end = null;
      token.value = null;
      token.tagNameStartsAt = null;
      token.tagNameEndsAt = null;
      token.tagName = null;
      token.recognised = null;
      token.closing = false;
      token.void = false;
      token.pureHTML = true;
      token.kind = null;
      token.attribs = [];
      delete token.openingCurlyAt;
      delete token.closingCurlyAt;
      delete token.selectorsStart;
      delete token.selectorsEnd;
      delete token.selectors;
      delete token.identifier;
      delete token.identifierStartsAt;
      delete token.identifierEndsAt;
      delete token.query;
      delete token.queryStartsAt;
      delete token.queryEndsAt;
      delete token.head;
      delete token.tail;
    } else if (type === "comment") {
      token.type = type;
      token.start = startVal;
      token.end = null;
      token.value = null;
      delete token.tagNameStartsAt;
      delete token.tagNameEndsAt;
      delete token.tagName;
      delete token.recognised;
      token.closing = false;
      delete token.void;
      delete token.pureHTML;
      token.kind = "simple";
      delete token.attribs;
      delete token.openingCurlyAt;
      delete token.closingCurlyAt;
      delete token.selectorsStart;
      delete token.selectorsEnd;
      delete token.selectors;
      delete token.identifier;
      delete token.identifierStartsAt;
      delete token.identifierEndsAt;
      delete token.query;
      delete token.queryStartsAt;
      delete token.queryEndsAt;
      delete token.head;
      delete token.tail;
    } else if (type === "rule") {
      token.type = type;
      token.start = startVal;
      token.end = null;
      token.value = null;
      delete token.tagNameStartsAt;
      delete token.tagNameEndsAt;
      delete token.tagName;
      delete token.recognised;
      delete token.closing;
      delete token.void;
      delete token.pureHTML;
      delete token.kind;
      delete token.attribs;
      token.openingCurlyAt = null;
      token.closingCurlyAt = null;
      token.selectorsStart = null;
      token.selectorsEnd = null;
      token.selectors = [];
      delete token.identifier;
      delete token.identifierStartsAt;
      delete token.identifierEndsAt;
      delete token.query;
      delete token.queryStartsAt;
      delete token.queryEndsAt;
      delete token.head;
      delete token.tail;
    } else if (type === "at") {
      token.type = type;
      token.start = startVal;
      token.end = null;
      token.value = null;
      delete token.tagNameStartsAt;
      delete token.tagNameEndsAt;
      delete token.tagName;
      delete token.recognised;
      delete token.closing;
      delete token.void;
      delete token.pureHTML;
      delete token.kind;
      delete token.attribs;
      token.openingCurlyAt = null;
      token.closingCurlyAt = null;
      delete token.selectorsStart;
      delete token.selectorsEnd;
      delete token.selectors;
      token.identifier = null;
      token.identifierStartsAt = null;
      token.identifierEndsAt = null;
      token.query = null;
      token.queryStartsAt = null;
      token.queryEndsAt = null;
      delete token.head;
      delete token.tail;
    } else if (type === "text") {
      token.type = type;
      token.start = startVal;
      token.end = null;
      token.value = null;
      delete token.tagNameStartsAt;
      delete token.tagNameEndsAt;
      delete token.tagName;
      delete token.recognised;
      delete token.closing;
      delete token.void;
      delete token.pureHTML;
      delete token.kind;
      delete token.attribs;
      delete token.openingCurlyAt;
      delete token.closingCurlyAt;
      delete token.selectorsStart;
      delete token.selectorsEnd;
      delete token.selectors;
      delete token.identifier;
      delete token.identifierStartsAt;
      delete token.identifierEndsAt;
      delete token.query;
      delete token.queryStartsAt;
      delete token.queryEndsAt;
      delete token.head;
      delete token.tail;
    } else if (type === "esp") {
      token.type = type;
      token.start = startVal;
      token.end = null;
      token.value = null;
      delete token.tagNameStartsAt;
      delete token.tagNameEndsAt;
      delete token.tagName;
      delete token.recognised;
      delete token.closing;
      delete token.void;
      delete token.pureHTML;
      token.kind = null;
      delete token.attribs;
      delete token.openingCurlyAt;
      delete token.closingCurlyAt;
      delete token.selectorsStart;
      delete token.selectorsEnd;
      delete token.selectors;
      delete token.identifier;
      delete token.identifierStartsAt;
      delete token.identifierEndsAt;
      delete token.query;
      delete token.queryStartsAt;
      delete token.queryEndsAt;
      token.head = null;
      token.tail = null;
    }
  }
  var _loop2 = function _loop2(_i) {
    if (!doNothing && str[_i] && opts.reportProgressFunc) {
      if (len > 1000 && len < 2000) {
        if (_i === midLen) {
          opts.reportProgressFunc(Math.floor((opts.reportProgressFuncTo - opts.reportProgressFuncFrom) / 2));
        }
      } else if (len >= 2000) {
        currentPercentageDone = opts.reportProgressFuncFrom + Math.floor(_i / len * (opts.reportProgressFuncTo - opts.reportProgressFuncFrom));
        if (currentPercentageDone !== lastPercentage) {
          lastPercentage = currentPercentageDone;
          opts.reportProgressFunc(currentPercentageDone);
        }
      }
    }
    if (styleStarts && token.type && !["rule", "at", "text"].includes(token.type)) {
      styleStarts = false;
    }
    if (Number.isInteger(doNothing) && _i >= doNothing) {
      doNothing = false;
    }
    if (!doNothing && atRuleWaitingForClosingCurlie()) {
      if (str[_i] === "}") {
        if (token.type === null || token.type === "text" || token.type === "rule" && token.openingCurlyAt === null) {
          if (token.type === "rule") {
            token.end = stringLeftRight.left(str, _i) + 1;
            token.value = str.slice(token.start, token.end);
            pingTagCb(token);
            token = tokenReset();
            if (stringLeftRight.left(str, _i) < _i - 1) {
              initToken("text", stringLeftRight.left(str, _i) + 1);
            }
          }
          dumpCurrentToken(token, _i);
          var poppedToken = layers.pop();
          token = poppedToken.token;
          token.closingCurlyAt = _i;
          token.end = _i + 1;
          token.value = str.slice(token.start, token.end);
          pingTagCb(token);
          token = tokenReset();
          doNothing = _i + 1;
        }
      } else if (token.type === "text" && str[_i] && str[_i].trim()) {
        token.end = _i;
        token.value = str.slice(token.start, token.end);
        pingTagCb(token);
        token = tokenReset();
      }
    }
    if (token.end && token.end === _i) {
      if (token.tagName === "style" && !token.closing) {
        styleStarts = true;
      }
      if (attribToBackup) {
        attrib = attribToBackup;
        attrib.attribValue.push(clone(token));
        token = clone(parentTokenToBackup);
        attribToBackup = undefined;
        parentTokenToBackup = undefined;
      } else {
        dumpCurrentToken(token, _i);
        layers = [];
      }
    }
    if (!doNothing) {
      if (["tag", "esp", "rule", "at"].includes(token.type) && token.kind !== "cdata") {
        if (["\"", "'", "(", ")"].includes(str[_i]) && !(
        ["\"", "'"].includes(str[stringLeftRight.left(str, _i)]) && str[stringLeftRight.left(str, _i)] === str[stringLeftRight.right(str, _i)])) {
          if (matchLayerLast(str, _i)) {
            layers.pop();
          } else {
            layers.push({
              type: "simple",
              value: str[_i],
              position: _i
            });
          }
        }
      } else if (token.type === "comment" && ["only", "not"].includes(token.kind)) {
        if (["[", "]"].includes(str[_i])) {
          if (matchLayerLast(str, _i)) {
            layers.pop();
          } else {
            layers.push({
              type: "simple",
              value: str[_i],
              position: _i
            });
          }
        }
      }
    }
    if (!doNothing && token.type === "at" && Number.isInteger(token.start) && _i >= token.start && !Number.isInteger(token.identifierStartsAt) && str[_i] && str[_i].trim() && str[_i] !== "@") {
      token.identifierStartsAt = _i;
    }
    if (!doNothing && token.type === "at" && Number.isInteger(token.queryStartsAt) && !Number.isInteger(token.queryEndsAt) && "{};".includes(str[_i])) {
      if (str[_i - 1] && str[_i - 1].trim()) {
        token.queryEndsAt = _i;
      } else {
        token.queryEndsAt = stringLeftRight.left(str, _i) + 1;
      }
      token.query = str.slice(token.queryStartsAt, token.queryEndsAt);
    }
    if (!doNothing && token.type === "at" && str[_i] === "{" && token.identifier && !Number.isInteger(token.openingCurlyAt)) {
      token.openingCurlyAt = _i;
      layers.push({
        type: "at",
        token: token
      });
      var charIdxOnTheRight = stringLeftRight.right(str, _i);
      if (str[charIdxOnTheRight] === "}") {
        token.closingCurlyAt = charIdxOnTheRight;
        pingTagCb(token);
        doNothing = charIdxOnTheRight;
      } else {
        tokenReset();
        if (charIdxOnTheRight > _i + 1) {
          initToken("text", _i + 1);
          token.end = charIdxOnTheRight;
          token.value = str.slice(token.start, token.end);
          pingTagCb(token);
        }
        tokenReset();
        initToken("rule", charIdxOnTheRight);
        doNothing = charIdxOnTheRight;
      }
    }
    if (!doNothing && token.type === "at" && token.identifier && str[_i] && str[_i].trim() && !Number.isInteger(token.queryStartsAt)) {
      token.queryStartsAt = _i;
    }
    if (!doNothing && token.type === "at" && Number.isInteger(token.identifierStartsAt) && _i >= token.start && str[_i] && (!str[_i].trim() || "()".includes(str[_i])) && !Number.isInteger(token.identifierEndsAt)) {
      token.identifierEndsAt = _i;
      token.identifier = str.slice(token.identifierStartsAt, _i);
    }
    if (token.type === "rule" && Number.isInteger(selectorChunkStartedAt) && (charsThatEndCSSChunks.includes(str[_i]) || str[_i] && !str[_i].trim() && charsThatEndCSSChunks.includes(str[stringLeftRight.right(str, _i)]))) {
      token.selectors.push({
        value: str.slice(selectorChunkStartedAt, _i),
        selectorStarts: selectorChunkStartedAt,
        selectorEnds: _i
      });
      selectorChunkStartedAt = undefined;
      token.selectorsEnd = _i;
    }
    if (!doNothing) {
      if (startsTag(str, _i, token, layers)) {
        if (token.type && token.start !== null) {
          dumpCurrentToken(token, _i);
          tokenReset();
        }
        initToken("tag", _i);
        if (styleStarts) {
          styleStarts = false;
        }
        if (stringMatchLeftRight.matchRight(str, _i, "doctype", {
          i: true,
          trimCharsBeforeMatching: ["?", "!", "[", " ", "-"]
        })) {
          token.kind = "doctype";
        } else if (stringMatchLeftRight.matchRight(str, _i, "cdata", {
          i: true,
          trimCharsBeforeMatching: ["?", "!", "[", " ", "-"]
        })) {
          token.kind = "cdata";
        } else if (stringMatchLeftRight.matchRight(str, _i, "xml", {
          i: true,
          trimCharsBeforeMatching: ["?", "!", "[", " ", "-"]
        })) {
          token.kind = "xml";
        }
      } else if (startsComment(str, _i, token)) {
        if (Number.isInteger(token.start)) {
          dumpCurrentToken(token, _i);
        }
        tokenReset();
        initToken("comment", _i);
        if (str[_i] === "-") {
          token.closing = true;
        } else if (stringMatchLeftRight.matchRightIncl(str, _i, ["<![endif]-->"], {
          i: true,
          trimBeforeMatching: true,
          maxMismatches: 2
        })) {
          token.closing = true;
          token.kind = "only";
        }
        if (styleStarts) {
          styleStarts = false;
        }
      } else if (startsEsp(str, _i, token, layers, styleStarts)) {
        var wholeEspTagLump = "";
        for (var y = _i; y < len; y++) {
          if (espChars.includes(str[y])) {
            wholeEspTagLump += str[y];
          } else {
            break;
          }
        }
        if (!espLumpBlacklist.includes(wholeEspTagLump) && (!Array.isArray(layers) || !layers.length || layers[layers.length - 1].type !== "simple" || layers[layers.length - 1].value !== str[_i + wholeEspTagLump.length])) {
          var lengthOfClosingEspChunk;
          if (layers.length && matchLayerLast(str, _i)) {
            lengthOfClosingEspChunk = matchLayerLast(str, _i);
            if (token.type === "esp") {
              if (!Number.isInteger(token.end)) {
                token.end = _i + lengthOfClosingEspChunk;
                token.value = str.slice(token.start, token.end);
              }
              if (parentTokenToBackup) {
                if (!Array.isArray(parentTokenToBackup.attribs)) {
                  parentTokenToBackup.attribs = [];
                }
                if (attribToBackup) {
                  attrib = attribToBackup;
                  attrib.attribValue.push(clone(token));
                } else {
                  parentTokenToBackup.attribs.push(clone(token));
                }
                token = clone(parentTokenToBackup);
                parentTokenToBackup = undefined;
                attribToBackup = undefined;
                layers.pop();
                i = _i;
                return "continue";
              } else {
                dumpCurrentToken(token, _i);
              }
              tokenReset();
            }
            layers.pop();
          } else if (layers.length && matchLayerFirst(str, _i)) {
            lengthOfClosingEspChunk = matchLayerFirst(str, _i);
            if (token.type === "esp") {
              if (!Number.isInteger(token.end)) {
                token.end = _i + lengthOfClosingEspChunk;
                token.value = str.slice(token.start, token.end);
              }
              dumpCurrentToken(token, _i);
              tokenReset();
            }
            layers = [];
          } else {
            layers.push({
              type: "esp",
              openingLump: wholeEspTagLump,
              guessedClosingLump: flipEspTag(wholeEspTagLump),
              position: _i
            });
            if (token.start !== null) {
              if (token.type === "tag") {
                if (!token.tagName || !token.tagNameEndsAt) {
                  token.tagNameEndsAt = _i;
                  token.tagName = str.slice(token.tagNameStartsAt, _i);
                  token.recognised = isTagNameRecognised(token.tagName);
                }
                parentTokenToBackup = clone(token);
                if (attrib.attribStart && !attrib.attribEnd) {
                  attribToBackup = clone(attrib);
                }
              } else {
                dumpCurrentToken(token, _i);
              }
            }
            initToken("esp", _i);
            token.tail = flipEspTag(wholeEspTagLump);
            token.head = wholeEspTagLump;
            if (parentTokenToBackup && parentTokenToBackup.type === "tag" && parentTokenToBackup.pureHTML) {
              parentTokenToBackup.pureHTML = false;
            }
            if (attribToBackup && Array.isArray(attribToBackup.attribValue) && attribToBackup.attribValue.length) {
              if (attribToBackup.attribValue[attribToBackup.attribValue.length - 1].start === token.start) {
                attribToBackup.attribValue.pop();
              } else if (
              attribToBackup.attribValue[attribToBackup.attribValue.length - 1].type === "text" && !attribToBackup.attribValue[attribToBackup.attribValue.length - 1].end) {
                attribToBackup.attribValue[attribToBackup.attribValue.length - 1].end = _i;
                attribToBackup.attribValue[attribToBackup.attribValue.length - 1].value = str.slice(attribToBackup.attribValue[attribToBackup.attribValue.length - 1].start, _i);
              }
            }
          }
          doNothing = _i + (lengthOfClosingEspChunk || wholeEspTagLump.length);
        }
      } else if (token.start === null || token.end === _i) {
        if (styleStarts) {
          if (str[_i] && !str[_i].trim()) {
            tokenReset();
            initToken("text", _i);
            token.end = stringLeftRight.right(str, _i) || str.length;
            token.value = str.slice(token.start, token.end);
            pingTagCb(token);
            doNothing = token.end;
            tokenReset();
            if (stringLeftRight.right(str, _i) && !["{", "}", "<"].includes(str[stringLeftRight.right(str, _i)])) {
              var idxOnTheRight = stringLeftRight.right(str, _i);
              initToken(str[idxOnTheRight] === "@" ? "at" : "rule", idxOnTheRight);
              if (str[_i + 1] && !str[_i + 1].trim()) {
                doNothing = stringLeftRight.right(str, _i);
              }
            }
          } else if (str[_i]) {
            tokenReset();
            if ("}".includes(str[_i])) {
              initToken("text", _i);
              doNothing = _i + 1;
            } else {
              initToken(str[_i] === "@" ? "at" : "rule", _i);
            }
          }
        } else if (str[_i]) {
          if (_i) {
            token = tokenReset();
          }
          initToken("text", _i);
        }
      } else if (token.type === "text" && styleStarts && str[_i] && str[_i].trim() && !"{},".includes(str[_i])) {
        dumpCurrentToken(token, _i);
        tokenReset();
        initToken("rule", _i);
      }
    }
    if (!doNothing && token.type === "rule" && str[_i] && str[_i].trim() && !"{}".includes(str[_i]) && !Number.isInteger(selectorChunkStartedAt) && !Number.isInteger(token.openingCurlyAt)) {
      if (!",".includes(str[_i])) {
        selectorChunkStartedAt = _i;
        if (token.selectorsStart === null) {
          token.selectorsStart = _i;
        }
      } else {
        token.selectorsEnd = _i + 1;
      }
    }
    if (token.type === "comment" && ["only", "not"].includes(token.kind)) {
      if (str[_i] === "[") ;
    }
    if (!doNothing) {
      if (token.type === "tag" && !layers.length && str[_i] === ">") {
        token.end = _i + 1;
        token.value = str.slice(token.start, token.end);
      } else if (token.type === "comment" && !layers.length && token.kind === "simple" && (str[token.start] === "<" && str[_i] === "-" && (stringMatchLeftRight.matchLeft(str, _i, "!-", {
        trimBeforeMatching: true
      }) || stringMatchLeftRight.matchLeftIncl(str, _i, "!-", {
        trimBeforeMatching: true
      }) && str[_i + 1] !== "-") || str[token.start] === "-" && str[_i] === ">" && stringMatchLeftRight.matchLeft(str, _i, "--", {
        trimBeforeMatching: true,
        maxMismatches: 1
      }))) {
        if (str[_i] === "-" && (stringMatchLeftRight.matchRight(str, _i, ["[if", "(if", "{if"], {
          i: true,
          trimBeforeMatching: true
        }) || stringMatchLeftRight.matchRight(str, _i, ["if"], {
          i: true,
          trimBeforeMatching: true
        }) && (
        xBeforeYOnTheRight(str, _i, "]", ">") ||
        str.includes("mso", _i) && !str.slice(_i, str.indexOf("mso")).includes("<") && !str.slice(_i, str.indexOf("mso")).includes(">")))) {
          token.kind = "only";
        } else if (
        str[token.start] !== "-" && stringMatchLeftRight.matchRightIncl(str, _i, ["-<![endif"], {
          i: true,
          trimBeforeMatching: true,
          maxMismatches: 2
        })) {
          token.kind = "not";
          token.closing = true;
        } else if (token.kind === "simple" && !token.closing && str[stringLeftRight.right(str, _i)] === ">") {
          token.end = stringLeftRight.right(str, _i) + 1;
          token.kind = "simplet";
          token.closing = null;
        } else {
          token.end = _i + 1;
          if (str[stringLeftRight.left(str, _i)] === "!" && str[stringLeftRight.right(str, _i)] === "-") {
            token.end = stringLeftRight.right(str, _i) + 1;
          }
          token.value = str.slice(token.start, token.end);
        }
      } else if (token.type === "comment" && str[_i] === ">" && (!layers.length || str[stringLeftRight.right(str, _i)] === "<")) {
        if (Array.isArray(layers) && layers.length && layers[layers.length - 1].value === "[") {
          layers.pop();
        }
        if (!["simplet", "not"].includes(token.kind) && stringMatchLeftRight.matchRight(str, _i, ["<!-->", "<!---->"], {
          trimBeforeMatching: true,
          maxMismatches: 1,
          lastMustMatch: true
        })) {
          token.kind = "not";
        } else {
          token.end = _i + 1;
          token.value = str.slice(token.start, token.end);
        }
      } else if (token.type === "esp" && token.end === null && isStr(token.tail) && token.tail.includes(str[_i])) {
        var wholeEspTagClosing = "";
        for (var _y2 = _i; _y2 < len; _y2++) {
          if (espChars.includes(str[_y2])) {
            wholeEspTagClosing += str[_y2];
          } else {
            break;
          }
        }
        if (wholeEspTagClosing.length > token.head.length) {
          var headsFirstChar = token.head[0];
          if (wholeEspTagClosing.endsWith(token.head)) {
            token.end = _i + wholeEspTagClosing.length - token.head.length;
            token.value = str.slice(token.start, token.end);
            doNothing = token.end;
          } else if (wholeEspTagClosing.startsWith(token.tail)) {
            token.end = _i + token.tail.length;
            token.value = str.slice(token.start, token.end);
            doNothing = token.end;
          } else if (!token.tail.includes(headsFirstChar) && wholeEspTagClosing.includes(headsFirstChar) || wholeEspTagClosing.endsWith(token.head) || wholeEspTagClosing.startsWith(token.tail)) {
            var firstPartOfWholeEspTagClosing = wholeEspTagClosing.slice(0, wholeEspTagClosing.indexOf(headsFirstChar));
            var secondPartOfWholeEspTagClosing = wholeEspTagClosing.slice(wholeEspTagClosing.indexOf(headsFirstChar));
            if (firstPartOfWholeEspTagClosing.length && secondPartOfWholeEspTagClosing.length && token.tail.split("").every(function (char) {
              return firstPartOfWholeEspTagClosing.includes(char);
            })) {
              token.end = _i + firstPartOfWholeEspTagClosing.length;
              token.value = str.slice(token.start, token.end);
              doNothing = token.end;
            }
          } else {
            token.end = _i + wholeEspTagClosing.length;
            token.value = str.slice(token.start, token.end);
            doNothing = token.end;
          }
        } else {
          token.end = _i + wholeEspTagClosing.length;
          token.value = str.slice(token.start, token.end);
          if (Array.isArray(layers) && layers.length && layers[layers.length - 1].type === "esp") {
            layers.pop();
          }
          doNothing = token.end;
        }
      }
    }
    if (!doNothing && token.type === "tag" && Number.isInteger(token.tagNameStartsAt) && !Number.isInteger(token.tagNameEndsAt)) {
      if (!str[_i] || !charSuitableForTagName(str[_i])) {
        token.tagNameEndsAt = _i;
        token.tagName = str.slice(token.tagNameStartsAt, _i).toLowerCase();
        if (token.tagName === "xml" && token.closing && !token.kind) {
          token.kind = "xml";
        }
        if (voidTags.includes(token.tagName)) {
          token.void = true;
        }
        token.recognised = isTagNameRecognised(token.tagName);
      }
    }
    if (!doNothing && token.type === "tag" && !Number.isInteger(token.tagNameStartsAt) && Number.isInteger(token.start) && (token.start < _i || str[token.start] !== "<")) {
      if (str[_i] === "/") {
        token.closing = true;
      } else if (isLatinLetter(str[_i])) {
        token.tagNameStartsAt = _i;
        if (!token.closing) {
          token.closing = false;
        }
      }
    }
    if (!doNothing && token.type === "tag" && token.kind !== "cdata" && Number.isInteger(attrib.attribNameStartsAt) && _i > attrib.attribNameStartsAt && attrib.attribNameEndsAt === null && !charSuitableForHTMLAttrName(str[_i])) {
      attrib.attribNameEndsAt = _i;
      attrib.attribName = str.slice(attrib.attribNameStartsAt, _i);
      attrib.attribNameRecognised = htmlAllKnownAttributes.allHtmlAttribs.has(attrib.attribName);
      if (str[_i] && !str[_i].trim() && str[stringLeftRight.right(str, _i)] === "=") ; else if (str[_i] && !str[_i].trim() || str[_i] === ">" || str[_i] === "/" && str[stringLeftRight.right(str, _i)] === ">") {
        if ("'\"".includes(str[stringLeftRight.right(str, _i)])) ; else {
          attrib.attribEnd = _i;
          token.attribs.push(clone(attrib));
          attribReset();
        }
      }
    }
    if (!doNothing && str[_i] && token.type === "tag" && token.kind !== "cdata" && Number.isInteger(token.tagNameEndsAt) && _i > token.tagNameEndsAt && attrib.attribStart === null && charSuitableForHTMLAttrName(str[_i])) {
      attrib.attribStart = _i;
      attrib.attribNameStartsAt = _i;
    }
    if (!doNothing && token.type === "rule") {
      if (str[_i] === "{" && !Number.isInteger(token.openingCurlyAt)) {
        token.openingCurlyAt = _i;
      } else if (str[_i] === "}" && Number.isInteger(token.openingCurlyAt) && !Number.isInteger(token.closingCurlyAt)) {
        token.closingCurlyAt = _i;
        token.end = _i + 1;
        token.value = str.slice(token.start, token.end);
        pingTagCb(token);
        tokenReset();
      }
    }
    if (!doNothing && token.type === "tag" && Number.isInteger(attrib.attribValueStartsAt) && _i >= attrib.attribValueStartsAt && attrib.attribValueEndsAt === null) {
      if ("'\"".includes(str[_i])) {
        if (str[stringLeftRight.left(str, _i)] === str[_i] &&
        !"/>".concat(espChars).includes(str[stringLeftRight.right(str, _i)]) && !xBeforeYOnTheRight(str, _i, "=", "\"") && !xBeforeYOnTheRight(str, _i, "=", "'") && (xBeforeYOnTheRight(str, _i, "\"", ">") || xBeforeYOnTheRight(str, _i, "'", ">")) && (
        !str.slice(_i + 1).includes("<") ||
        !str.slice(0, str.indexOf("<")).includes("="))) {
          attrib.attribOpeningQuoteAt = _i;
          attrib.attribValueStartsAt = _i + 1;
          if (Array.isArray(attrib.attribValue) && attrib.attribValue.length &&
          attrib.attribValue[attrib.attribValue.length - 1].start &&
          !attrib.attribValue[attrib.attribValue.length - 1].end &&
          attrib.attribValueStartsAt > attrib.attribValue[attrib.attribValue.length - 1].start) {
            attrib.attribValue[attrib.attribValue.length - 1].start = attrib.attribValueStartsAt;
          }
          layers.push({
            type: "simple",
            value: str[_i],
            position: _i
          });
        } else if (
        !layers.some(function (layerObj) {
          return layerObj.type === "esp";
        }) &&
        attributeEnds(str, attrib.attribOpeningQuoteAt || attrib.attribValueStartsAt, _i)) {
          attrib.attribClosingQuoteAt = _i;
          attrib.attribValueEndsAt = _i;
          if (Number.isInteger(attrib.attribValueStartsAt)) {
            attrib.attribValueRaw = str.slice(attrib.attribValueStartsAt, _i);
          }
          attrib.attribEnd = _i + 1;
          if (Array.isArray(attrib.attribValue) && attrib.attribValue.length && !attrib.attribValue[attrib.attribValue.length - 1].end) {
            attrib.attribValue[attrib.attribValue.length - 1].end = _i;
            attrib.attribValue[attrib.attribValue.length - 1].value = str.slice(attrib.attribValue[attrib.attribValue.length - 1].start, _i);
          }
          if (str[attrib.attribOpeningQuoteAt] !== str[_i]) {
            layers.pop();
            layers.pop();
          }
          token.attribs.push(clone(attrib));
          attribReset();
        }
      } else if (attrib.attribOpeningQuoteAt === null && (str[_i] && !str[_i].trim() || ["/", ">"].includes(str[_i]) || espChars.includes(str[_i]) && espChars.includes(str[_i + 1]))) {
        attrib.attribValueEndsAt = _i;
        attrib.attribValueRaw = str.slice(attrib.attribValueStartsAt, _i);
        if (Array.isArray(attrib.attribValue) && attrib.attribValue.length && !attrib.attribValue[attrib.attribValue.length - 1].end) {
          attrib.attribValue[attrib.attribValue.length - 1].end = _i;
          attrib.attribValue[attrib.attribValue.length - 1].value = str.slice(attrib.attribValue[attrib.attribValue.length - 1].start, attrib.attribValue[attrib.attribValue.length - 1].end);
        }
        attrib.attribEnd = _i;
        token.attribs.push(clone(attrib));
        attribReset();
        layers.pop();
        if (str[_i] === ">") {
          token.end = _i + 1;
          token.value = str.slice(token.start, token.end);
        }
      } else if (str[_i] === "=" && ("'\"".includes(str[stringLeftRight.right(str, _i)]) || str[_i - 1] && isLatinLetter(str[_i - 1]))) {
        var whitespaceFound;
        var attribClosingQuoteAt;
        for (var _y3 = stringLeftRight.left(str, _i); _y3 >= attrib.attribValueStartsAt; _y3--) {
          if (!whitespaceFound && str[_y3] && !str[_y3].trim()) {
            whitespaceFound = true;
            if (attribClosingQuoteAt) {
              var extractedChunksVal = str.slice(_y3, attribClosingQuoteAt);
            }
          }
          if (whitespaceFound && str[_y3] && str[_y3].trim()) {
            whitespaceFound = false;
            if (!attribClosingQuoteAt) {
              attribClosingQuoteAt = _y3 + 1;
            }
          }
        }
        if (attribClosingQuoteAt) {
          attrib.attribValueEndsAt = attribClosingQuoteAt;
          if (Number.isInteger(attrib.attribValueStartsAt)) {
            attrib.attribValueRaw = str.slice(attrib.attribValueStartsAt, attribClosingQuoteAt);
            if (Array.isArray(attrib.attribValue) && attrib.attribValue.length && !attrib.attribValue[attrib.attribValue.length - 1].end) {
              attrib.attribValue[attrib.attribValue.length - 1].end = attrib.attribValueEndsAt;
              attrib.attribValue[attrib.attribValue.length - 1].value = str.slice(attrib.attribValue[attrib.attribValue.length - 1].start, attrib.attribValueEndsAt);
            }
          }
          attrib.attribEnd = attribClosingQuoteAt;
          if (str[attrib.attribOpeningQuoteAt] !== str[_i]) {
            layers.pop();
          }
          token.attribs.push(clone(attrib));
          attribReset();
          _i = attribClosingQuoteAt - 1;
          i = _i;
          return "continue";
        } else if (attrib.attribOpeningQuoteAt && ("'\"".includes(str[stringLeftRight.right(str, _i)]) || htmlAllKnownAttributes.allHtmlAttribs.has(str.slice(attrib.attribOpeningQuoteAt + 1, _i).trim()))) {
          _i = attrib.attribOpeningQuoteAt;
          attrib.attribEnd = attrib.attribOpeningQuoteAt + 1;
          attrib.attribValueStartsAt = null;
          layers.pop();
          token.attribs.push(clone(attrib));
          attribReset();
          i = _i;
          return "continue";
        }
      } else if (attrib && attrib.attribStart && !attrib.attribEnd && (
      !Array.isArray(attrib.attribValue) ||
      !attrib.attribValue.length ||
      attrib.attribValue[attrib.attribValue.length - 1].end && attrib.attribValue[attrib.attribValue.length - 1].end <= _i)) {
        attrib.attribValue.push({
          type: "text",
          start: _i,
          end: null,
          value: null
        });
      }
    }
    if (!doNothing && token.type === "tag" && !Number.isInteger(attrib.attribValueStartsAt) && Number.isInteger(attrib.attribNameEndsAt) && attrib.attribNameEndsAt <= _i && str[_i] && str[_i].trim()) {
      if (str[_i] === "=" && !"'\"=".includes(str[stringLeftRight.right(str, _i)]) && !espChars.includes(str[stringLeftRight.right(str, _i)])
      ) {
          var firstCharOnTheRight = stringLeftRight.right(str, _i);
          var firstQuoteOnTheRightIdx = [str.indexOf("'", firstCharOnTheRight), str.indexOf("\"", firstCharOnTheRight)].filter(function (val) {
            return val > 0;
          }).length ? Math.min.apply(Math, _toConsumableArray([str.indexOf("'", firstCharOnTheRight), str.indexOf("\"", firstCharOnTheRight)].filter(function (val) {
            return val > 0;
          }))) : undefined;
          if (
          firstCharOnTheRight &&
          str.slice(firstCharOnTheRight).includes("=") &&
          htmlAllKnownAttributes.allHtmlAttribs.has(str.slice(firstCharOnTheRight, firstCharOnTheRight + str.slice(firstCharOnTheRight).indexOf("=")).trim().toLowerCase())) {
            attrib.attribEnd = _i + 1;
            token.attribs.push(clone(attrib));
            attribReset();
          } else if (
          !firstQuoteOnTheRightIdx ||
          str.slice(firstCharOnTheRight, firstQuoteOnTheRightIdx).includes("=") ||
          !str.includes(str[firstQuoteOnTheRightIdx], firstQuoteOnTheRightIdx + 1) ||
          Array.from(str.slice(firstQuoteOnTheRightIdx + 1, str.indexOf(str[firstQuoteOnTheRightIdx], firstQuoteOnTheRightIdx + 1))).some(function (char) {
            return "<>=".includes(char);
          })) {
            attrib.attribValueStartsAt = firstCharOnTheRight;
            layers.push({
              type: "simple",
              value: null,
              position: attrib.attribValueStartsAt
            });
          }
        } else if ("'\"".includes(str[_i])) {
        var nextCharIdx = stringLeftRight.right(str, _i);
        if (
        nextCharIdx &&
        "'\"".includes(str[nextCharIdx]) &&
        str[_i] !== str[nextCharIdx] &&
        str.length > nextCharIdx + 2 &&
        str.slice(nextCharIdx + 1).includes(str[nextCharIdx]) && (
        !str.indexOf(str[nextCharIdx], nextCharIdx + 1) || !stringLeftRight.right(str, str.indexOf(str[nextCharIdx], nextCharIdx + 1)) || str[_i] !== str[stringLeftRight.right(str, str.indexOf(str[nextCharIdx], nextCharIdx + 1))]) &&
        !Array.from(str.slice(nextCharIdx + 1, str.indexOf(str[nextCharIdx]))).some(function (char) {
          return "<>=".concat(str[_i]).includes(char);
        })) {
          layers.pop();
        } else {
          attrib.attribOpeningQuoteAt = _i;
          if (str[_i + 1]) {
            attrib.attribValueStartsAt = _i + 1;
          }
          if (
          Array.isArray(attrib.attribValue) && (!attrib.attribValue.length ||
          attrib.attribValue[attrib.attribValue.length - 1].end)) {
            attrib.attribValue.push({
              type: "text",
              start: attrib.attribValueStartsAt,
              end: null,
              value: null
            });
          }
        }
      }
    }
    if (str[_i] === ">" && token.type === "tag" && attrib.attribStart !== null && attrib.attribEnd === null) {
      var thisIsRealEnding = false;
      if (str[_i + 1]) {
        for (var _y4 = _i + 1; _y4 < len; _y4++) {
          if (attrib.attribOpeningQuoteAt !== null && str[_y4] === str[attrib.attribOpeningQuoteAt]) {
            if (_y4 !== _i + 1 && str[_y4 - 1] !== "=") {
              thisIsRealEnding = true;
            }
            break;
          } else if (str[_y4] === ">") {
            break;
          } else if (str[_y4] === "<") {
            thisIsRealEnding = true;
            layers.pop();
            break;
          } else if (!str[_y4 + 1]) {
            thisIsRealEnding = true;
            break;
          }
        }
      } else {
        thisIsRealEnding = true;
      }
      if (thisIsRealEnding) {
        token.end = _i + 1;
        token.value = str.slice(token.start, token.end);
        if (Number.isInteger(attrib.attribValueStartsAt) && _i && attrib.attribValueStartsAt < _i && str.slice(attrib.attribValueStartsAt, _i).trim()) {
          attrib.attribValueEndsAt = _i;
          attrib.attribValueRaw = str.slice(attrib.attribValueStartsAt, _i);
          if (Array.isArray(attrib.attribValue) && attrib.attribValue.length && !attrib.attribValue[attrib.attribValue.length - 1].end) {
            attrib.attribValue[attrib.attribValue.length - 1].end = _i;
            attrib.attribValue[attrib.attribValue.length - 1].value = str.slice(attrib.attribValue[attrib.attribValue.length - 1].start, _i);
          }
        } else {
          attrib.attribValueStartsAt = null;
        }
        attrib.attribEnd = _i;
        token.attribs.push(clone(attrib));
        attribReset();
      }
    }
    if (str[_i] && opts.charCb) {
      pingCharCb({
        type: token.type,
        chr: str[_i],
        i: _i
      });
    }
    if (!str[_i] && token.start !== null) {
      token.end = _i;
      token.value = str.slice(token.start, token.end);
      pingTagCb(token);
    }
    i = _i;
  };
  for (var i = 0; i <= len; i++) {
    var _ret3 = _loop2(i);
    if (_ret3 === "continue") continue;
  }
  if (charStash.length) {
    for (var _i2 = 0, len2 = charStash.length; _i2 < len2; _i2++) {
      reportFirstFromStash(charStash, opts.charCb, opts.charCbLookahead);
    }
  }
  if (tagStash.length) {
    for (var _i3 = 0, _len = tagStash.length; _i3 < _len; _i3++) {
      reportFirstFromStash(tagStash, opts.tagCb, opts.tagCbLookahead);
    }
  }
  return {
    timeTakenInMilliseconds: Date.now() - start
  };
}

module.exports = tokenizer;
