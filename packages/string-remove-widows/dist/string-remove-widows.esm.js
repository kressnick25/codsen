/** 
 * string-remove-widows
 * Helps to prevent widow words in text
 * Version: 1.0.0
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/string-remove-widows
 */
import apply from 'ranges-apply';
import { left, right } from 'string-left-right';
import { matchRightIncl } from 'string-match-left-right';
import isObj from 'lodash.isplainobject';
import arrayiffyIfStr from 'arrayiffy-if-string';

var version = "1.0.0";

const rawnbsp = "\u00A0";
const encodedNbspHtml = "&nbsp;";
const encodedNbspCss = "\\00A0";
const encodedNbspJs = "\\u00A0";
const rawNdash = "\u2013";
const encodedNdashHtml = "&ndash;";
const encodedNdashCss = "\\2013";
const encodedNdashJs = "\\u2013";
const rawMdash = "\u2014";
const encodedMdashHtml = "&mdash;";
const encodedMdashCss = "\\2014";
const encodedMdashJs = "\\u2014";
const headsAndTailsJinja = [
  {
    heads: "{{",
    tails: "}}"
  },
  {
    heads: ["{% if", "{%- if"],
    tails: ["{% endif", "{%- endif"]
  },
  {
    heads: ["{% for", "{%- for"],
    tails: ["{% endfor", "{%- endfor"]
  },
  {
    heads: ["{%", "{%-"],
    tails: ["%}", "-%}"]
  },
  {
    heads: "{#",
    tails: "#}"
  }
];
const headsAndTailsHugo = [
  {
    heads: "{{",
    tails: "}}"
  }
];
const headsAndTailsHexo = [
  {
    heads: ["<%", "<%=", "<%-"],
    tails: ["%>", "=%>", "-%>"]
  }
];

const Ranges = require("ranges-push");
const defaultOpts = {
  removeWidowPreventionMeasures: false,
  convertEntities: true,
  language: "html",
  UKPostcodes: false,
  hyphens: true,
  minWordCount: 4,
  minCharCount: 50,
  reportProgressFunc: null,
  ignore: []
};
function removeWidows(str, originalOpts) {
  function push(finalStart, finalEnd) {
    let finalWhatToInsert = rawnbsp;
    if (opts.removeWidowPreventionMeasures) {
      finalWhatToInsert = " ";
    } else if (opts.convertEntities) {
      finalWhatToInsert = encodedNbspHtml;
      if (isStr(opts.language)) {
        if (opts.language.trim().toLowerCase() === "css") {
          finalWhatToInsert = encodedNbspCss;
        } else if (opts.language.trim().toLowerCase() === "js") {
          finalWhatToInsert = encodedNbspJs;
        }
      }
    }
    rangesArr.push(finalStart, finalEnd, finalWhatToInsert);
  }
  function isStr(something) {
    return typeof something === "string";
  }
  const start = Date.now();
  if (!isStr(str)) {
    if (str === undefined) {
      throw new Error(
        "string-remove-widows: [THROW_ID_01] the first input argument is completely missing! It should be given as string."
      );
    } else {
      throw new Error(
        `string-remove-widows: [THROW_ID_02] the first input argument must be string! It was given as "${typeof str}", equal to:\n${JSON.stringify(
          str,
          null,
          4
        )}`
      );
    }
  }
  if (originalOpts && !isObj(originalOpts)) {
    throw new Error(
      `string-remove-widows: [THROW_ID_03] the second input argument, options object, should be a plain object but it was given as type ${typeof originalOpts}, equal to ${JSON.stringify(
        originalOpts,
        null,
        4
      )}`
    );
  }
  const isArr = Array.isArray;
  const len = str.length;
  const midLen = Math.floor(len / 2);
  const rangesArr = new Ranges({ mergeType: 2 });
  const punctuationCharsToConsiderWidowIssue = ["."];
  const postcodeRegexFront = /[A-Z]{1,2}[0-9][0-9A-Z]?$/;
  const postcodeRegexEnd = /^[0-9][A-Z]{2}/;
  let currentPercentageDone;
  let lastPercentage = 0;
  let wordCount;
  let charCount;
  let secondToLastWhitespaceStartedAt;
  let secondToLastWhitespaceEndedAt;
  let lastWhitespaceStartedAt;
  let lastWhitespaceEndedAt;
  let lastEncodedNbspStartedAt;
  let lastEncodedNbspEndedAt;
  let doNothingUntil;
  let bumpWordCountAt;
  const opts = Object.assign({}, defaultOpts, originalOpts);
  if (opts.dashes) {
    opts.hyphens = true;
    delete opts.dashes;
  }
  if (!opts.ignore || (!isArr(opts.ignore) && !isStr(opts.ignore))) {
    opts.ignore = [];
  } else {
    opts.ignore = arrayiffyIfStr(opts.ignore);
    if (opts.ignore.some(val => isStr(val))) {
      let temp = [];
      opts.ignore = opts.ignore.filter(val => {
        if (isStr(val) && val.length) {
          if (
            ["nunjucks", "jinja", "liquid"].includes(val.trim().toLowerCase())
          ) {
            temp = temp.concat(headsAndTailsJinja);
          } else if (["hugo"].includes(val.trim().toLowerCase())) {
            temp = temp.concat(headsAndTailsHugo);
          } else if (["hexo"].includes(val.trim().toLowerCase())) {
            temp = temp.concat(headsAndTailsHexo);
          }
          return false;
        } else if (typeof val === "object") {
          return true;
        }
      });
      if (temp.length) {
        opts.ignore = opts.ignore.concat(temp);
      }
    }
  }
  function resetAll() {
    wordCount = 0;
    charCount = 0;
    secondToLastWhitespaceStartedAt = undefined;
    secondToLastWhitespaceEndedAt = undefined;
    lastWhitespaceStartedAt = undefined;
    lastWhitespaceEndedAt = undefined;
    lastEncodedNbspStartedAt = undefined;
    lastEncodedNbspEndedAt = undefined;
  }
  resetAll();
  for (let i = 0, len = str.length; i < len; i++) {
    if (!doNothingUntil && isArr(opts.ignore) && opts.ignore.length) {
      opts.ignore.some((valObj, y) => {
        if (
          (isArr(valObj.heads) &&
            valObj.heads.some(oneOfHeads => str.startsWith(oneOfHeads, i))) ||
          (isStr(valObj.heads) && str.startsWith(valObj.heads, i))
        ) {
          wordCount++;
          doNothingUntil = opts.ignore[y].tails;
          return true;
        }
      });
    }
    if (!doNothingUntil && bumpWordCountAt && bumpWordCountAt === i) {
      wordCount++;
      bumpWordCountAt = undefined;
    }
    if (typeof opts.reportProgressFunc === "function") {
      if (len > 1000 && len < 2000) {
        if (i === midLen) {
          opts.reportProgressFunc(
            Math.floor(
              (opts.reportProgressFuncTo - opts.reportProgressFuncFrom) / 2
            )
          );
        }
      } else if (len >= 2000) {
        currentPercentageDone =
          opts.reportProgressFuncFrom + Math.floor(i / len);
        if (currentPercentageDone !== lastPercentage) {
          lastPercentage = currentPercentageDone;
          opts.reportProgressFunc(currentPercentageDone);
        }
      }
    }
    if (
      !doNothingUntil &&
      i &&
      str[i].trim().length &&
      (!str[i - 1] || (str[i - 1] && !str[i - 1].trim().length))
    ) {
      lastWhitespaceEndedAt = i;
    }
    if (!doNothingUntil && str[i].trim().length) {
      charCount++;
    }
    if (
      !doNothingUntil &&
      opts.hyphens &&
      (str[i] === "-" ||
        str[i] === rawMdash ||
        str[i] === rawNdash ||
        str.slice(i).startsWith(encodedNdashHtml) ||
        str.slice(i).startsWith(encodedNdashCss) ||
        str.slice(i).startsWith(encodedNdashJs) ||
        str.slice(i).startsWith(encodedMdashHtml) ||
        str.slice(i).startsWith(encodedMdashCss) ||
        str.slice(i).startsWith(encodedMdashJs))
    ) {
      if (str[i - 1] && !str[i - 1].trim().length && str[left(str, i)]) {
        push(left(str, i) + 1, i);
      }
    }
    if (
      !doNothingUntil &&
      ((str[i] === "&" &&
        str[i + 1] === "n" &&
        str[i + 2] === "b" &&
        str[i + 3] === "s" &&
        str[i + 4] === "p" &&
        str[i + 5] === ";") ||
        (str[i] === "&" &&
          str[i + 1] === "#" &&
          str[i + 2] === "1" &&
          str[i + 3] === "6" &&
          str[i + 4] === "0" &&
          str[i + 5] === ";"))
    ) {
      lastEncodedNbspStartedAt = i;
      lastEncodedNbspEndedAt = i + 6;
      if (str[i + 6] && str[i + 6].trim().length) {
        bumpWordCountAt = i + 6;
      }
      if (!opts.convertEntities) {
        rangesArr.push(i, i + 6, rawnbsp);
      } else if (opts.language === "css" || opts.language === "js") {
        rangesArr.push(
          i,
          i + 6,
          opts.language === "css" ? encodedNbspCss : encodedNbspJs
        );
      }
    }
    if (
      !doNothingUntil &&
      str[i] === "\\" &&
      str[i + 1] === "0" &&
      str[i + 2] === "0" &&
      str[i + 3] &&
      str[i + 3].toUpperCase() === "A" &&
      str[i + 4] === "0"
    ) {
      lastEncodedNbspStartedAt = i;
      lastEncodedNbspEndedAt = i + 5;
      if (str[i + 5] && str[i + 5].trim().length) {
        bumpWordCountAt = i + 5;
      }
      if (!opts.convertEntities) {
        rangesArr.push(i, i + 5, rawnbsp);
      } else if (opts.language === "html" || opts.language === "js") {
        rangesArr.push(
          i,
          i + 5,
          opts.language === "html" ? encodedNbspHtml : encodedNbspJs
        );
      }
    }
    if (
      !doNothingUntil &&
      str[i] === "\\" &&
      str[i + 1] &&
      str[i + 1].toLowerCase() === "u" &&
      str[i + 2] === "0" &&
      str[i + 3] === "0" &&
      str[i + 4] &&
      str[i + 4].toUpperCase() === "A" &&
      str[i + 5] === "0"
    ) {
      lastEncodedNbspStartedAt = i;
      lastEncodedNbspEndedAt = i + 6;
      if (str[i + 6] && str[i + 6].trim().length) {
        bumpWordCountAt = i + 6;
      }
      if (!opts.convertEntities) {
        rangesArr.push(i, i + 6, rawnbsp);
      } else if (opts.language === "html" || opts.language === "css") {
        rangesArr.push(
          i,
          i + 6,
          opts.language === "html" ? encodedNbspHtml : encodedNbspCss
        );
      }
    }
    if (!doNothingUntil && str[i] === rawnbsp) {
      lastEncodedNbspStartedAt = i;
      lastEncodedNbspEndedAt = i + 1;
      if (str[i + 2] && str[i + 2].trim().length) {
        bumpWordCountAt = i + 2;
      }
      if (opts.convertEntities) {
        rangesArr.push(
          i,
          i + 1,
          opts.language === "css"
            ? encodedNbspCss
            : opts.language === "js"
            ? encodedNbspJs
            : encodedNbspHtml
        );
      }
    }
    if (
      !doNothingUntil &&
      str[i].trim().length &&
      (!str[i - 1] || !str[i - 1].trim().length)
    ) {
      wordCount++;
    }
    if (
      !doNothingUntil &&
      (!str[i + 1] ||
        ((str[i] === "\n" && str[i + 1] === "\n") ||
          (str[i] === "\r" && str[i + 1] === "\r") ||
          (str[i] === "\r" &&
            str[i + 1] === "\n" &&
            str[i + 2] === "\r" &&
            str[i + 3] === "\n")) ||
        ((str[i] === "\n" ||
          str[i] === "\r" ||
          (str[i] === "\r" && str[i + 1] === "\n")) &&
          str[i - 1] &&
          punctuationCharsToConsiderWidowIssue.includes(str[left(str, i)])))
    ) {
      if (
        (!opts.minWordCount || wordCount >= opts.minWordCount) &&
        (!opts.minCharCount || charCount >= opts.minCharCount)
      ) {
        let finalStart;
        let finalEnd;
        if (
          lastWhitespaceStartedAt !== undefined &&
          lastWhitespaceEndedAt !== undefined &&
          lastEncodedNbspStartedAt !== undefined &&
          lastEncodedNbspEndedAt !== undefined
        ) {
          if (lastWhitespaceStartedAt > lastEncodedNbspStartedAt) {
            finalStart = lastWhitespaceStartedAt;
            finalEnd = lastWhitespaceEndedAt;
          } else {
            finalStart = lastEncodedNbspStartedAt;
            finalEnd = lastEncodedNbspEndedAt;
          }
        } else if (
          lastWhitespaceStartedAt !== undefined &&
          lastWhitespaceEndedAt !== undefined
        ) {
          finalStart = lastWhitespaceStartedAt;
          finalEnd = lastWhitespaceEndedAt;
        } else if (
          lastEncodedNbspStartedAt !== undefined &&
          lastEncodedNbspEndedAt !== undefined
        ) {
          finalStart = lastEncodedNbspStartedAt;
          finalEnd = lastEncodedNbspEndedAt;
        }
        if (
          !(finalStart && finalEnd) &&
          secondToLastWhitespaceStartedAt &&
          secondToLastWhitespaceEndedAt
        ) {
          finalStart = secondToLastWhitespaceStartedAt;
          finalEnd = secondToLastWhitespaceEndedAt;
        }
        if (finalStart && finalEnd) {
          push(finalStart, finalEnd);
        }
      }
      resetAll();
    }
    if (
      opts.UKPostcodes &&
      !str[i].trim().length &&
      str[i - 1] &&
      str[i - 1].trim().length &&
      postcodeRegexFront.test(str.slice(0, i)) &&
      str[right(str, i)] &&
      postcodeRegexEnd.test(str.slice(right(str, i)))
    ) {
      push(i, right(str, i));
    }
    if (
      !doNothingUntil &&
      !str[i].trim().length &&
      str[i - 1] &&
      str[i - 1].trim().length &&
      (lastWhitespaceStartedAt === undefined ||
        (str[lastWhitespaceStartedAt - 1] &&
          str[lastWhitespaceStartedAt - 1].trim().length)) &&
      !"/>".includes(str[right(str, i)]) &&
      !str.slice(0, left(str, i) + 1).endsWith("br") &&
      !str.slice(0, left(str, i) + 1).endsWith("hr")
    ) {
      secondToLastWhitespaceStartedAt = lastWhitespaceStartedAt;
      secondToLastWhitespaceEndedAt = lastWhitespaceEndedAt;
      lastWhitespaceStartedAt = i;
      lastWhitespaceEndedAt = undefined;
      if (
        lastEncodedNbspStartedAt !== undefined ||
        lastEncodedNbspEndedAt !== undefined
      ) {
        lastEncodedNbspStartedAt = undefined;
        lastEncodedNbspEndedAt = undefined;
      }
    }
    let tempTailFinding;
    if (doNothingUntil) {
      if (
        isStr(doNothingUntil) &&
        (!doNothingUntil.length || str.startsWith(doNothingUntil, i))
      ) {
        doNothingUntil = undefined;
      } else if (
        isArr(doNothingUntil) &&
        (!doNothingUntil.length ||
          doNothingUntil.some(val => {
            if (str.startsWith(val, i)) {
              tempTailFinding = val;
              return true;
            }
          }))
      ) {
        doNothingUntil = undefined;
        i += tempTailFinding.length;
        if (isArr(opts.ignore) && opts.ignore.length && str[i + 1]) {
          opts.ignore.some(oneOfHeadsTailsObjs => {
            return matchRightIncl(str, i, oneOfHeadsTailsObjs.tails, {
              trimBeforeMatching: true,
              cb: (char, theRemainderOfTheString, index) => {
                if (index) {
                  i = index - 1;
                  if (str[i + 1] && str[i + 1].trim().length) {
                    wordCount++;
                  }
                }
                return true;
              }
            });
          });
        }
      }
    }
  }
  return {
    res: apply(str, rangesArr.current()),
    ranges: rangesArr.current(),
    log: {
      timeTakenInMiliseconds: Date.now() - start
    }
  };
}

export { defaultOpts, removeWidows, version };