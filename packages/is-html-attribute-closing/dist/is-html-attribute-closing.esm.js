/**
 * is-html-attribute-closing
 * Is a character on a given index a closing of an HTML attribute?
 * Version: 1.0.0
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/is-html-attribute-closing
 */

import { allHtmlAttribs } from 'html-all-known-attributes';
import charSuitableForHTMLAttrName from 'is-char-suitable-for-html-attr-name';
import { right } from 'string-left-right';
import split from 'string-split-by-whitespace';
import { matchRight } from 'string-match-left-right';

function ensureXIsNotPresentBeforeOneOfY(str, startingIdx, x, y = []) {
  for (let i = startingIdx, len = str.length; i < len; i++) {
    if (y.some((oneOfStr) => str.startsWith(oneOfStr, i))) {
      return true;
    } else if (str[i] === x) {
      return false;
    }
  }
  return true;
}
function xBeforeYOnTheRight(str, startingIdx, x, y) {
  for (let i = startingIdx, len = str.length; i < len; i++) {
    if (str.startsWith(x, i)) {
      return true;
    } else if (str.startsWith(y, i)) {
      return false;
    }
  }
  return false;
}
function plausibleAttrStartsAtX(str, start) {
  if (!charSuitableForHTMLAttrName(str[start]) || !start) {
    return false;
  }
  const regex = /^[a-zA-Z0-9:-]*[=]?((?:'[^']*')|(?:"[^"]*"))/;
  return regex.test(str.slice(start));
}

function makeTheQuoteOpposite(quoteChar) {
  return quoteChar === `'` ? `"` : `'`;
}
function isAttrClosing(str, idxOfAttrOpening, isThisClosingIdx) {
  if (
    typeof str !== "string" ||
    !str.trim().length ||
    !Number.isInteger(idxOfAttrOpening) ||
    !Number.isInteger(isThisClosingIdx) ||
    !str[idxOfAttrOpening] ||
    !str[isThisClosingIdx] ||
    idxOfAttrOpening >= isThisClosingIdx
  ) {
    return false;
  }
  const openingQuote = `'"`.includes(str[idxOfAttrOpening])
    ? str[idxOfAttrOpening]
    : null;
  let oppositeToOpeningQuote = null;
  if (openingQuote) {
    oppositeToOpeningQuote = makeTheQuoteOpposite(openingQuote);
  }
  let chunkStartsAt;
  const quotesCount = new Map().set(`'`, 0).set(`"`, 0).set(`matchedPairs`, 0);
  let lastQuoteAt = null;
  let totalQuotesCount = 0;
  let lastQuoteWasMatched = false;
  let lastMatchedQuotesPairsStartIsAt = false;
  let lastMatchedQuotesPairsEndIsAt = false;
  let lastCapturedChunk;
  let lastChunkWasCapturedAfterSuspectedClosing = false;
  let closingBracketMet = false;
  let openingBracketMet = false;
  for (let i = idxOfAttrOpening, len = str.length; i < len; i++) {
    if (
      `'"`.includes(str[i]) &&
      lastQuoteWasMatched &&
      lastMatchedQuotesPairsStartIsAt === idxOfAttrOpening &&
      lastMatchedQuotesPairsEndIsAt < i &&
      i >= isThisClosingIdx
    ) {
      const E1 = i !== isThisClosingIdx;
      const E21 = !(
        i > isThisClosingIdx &&
        str[idxOfAttrOpening] === str[isThisClosingIdx] &&
        str[idxOfAttrOpening] === str[i]
      );
      const E22 =
        plausibleAttrStartsAtX(str, i + 1);
      const E23 =
        chunkStartsAt &&
        chunkStartsAt < i &&
        allHtmlAttribs.has(str.slice(chunkStartsAt, i).trim());
      const E24 =
        chunkStartsAt < i &&
        str[chunkStartsAt - 1] &&
        !str[chunkStartsAt - 1].trim().length &&
        Array.from(str.slice(chunkStartsAt, i).trim()).every((char) =>
          charSuitableForHTMLAttrName(char)
        ) &&
        str[idxOfAttrOpening] === str[isThisClosingIdx];
      const E3 =
        `/>`.includes(str[right(str, i)]) ||
        charSuitableForHTMLAttrName(str[right(str, i)]) ||
        lastQuoteWasMatched;
      return E1 && (E21 || E22 || E23 || E24) && E3;
    }
    if (`'"`.includes(str[i])) {
      if (lastQuoteAt && str[i] === str[lastQuoteAt]) {
        quotesCount.set("matchedPairs", quotesCount.get("matchedPairs") + 1);
        lastMatchedQuotesPairsStartIsAt = lastQuoteAt;
        lastMatchedQuotesPairsEndIsAt = i;
        lastQuoteAt = null;
        lastQuoteWasMatched = true;
      } else {
        lastQuoteWasMatched = false;
      }
      quotesCount.set(str[i], quotesCount.get(str[i]) + 1);
      totalQuotesCount = quotesCount.get(`"`) + quotesCount.get(`'`);
    }
    if (str[i] === ">" && !closingBracketMet) {
      closingBracketMet = true;
    }
    if (str[i] === "<" && closingBracketMet && !openingBracketMet) {
      openingBracketMet = true;
      if (i > isThisClosingIdx) {
        return false;
      }
    }
    if (str[i].trim().length && !chunkStartsAt) {
      if (charSuitableForHTMLAttrName(str[i])) {
        chunkStartsAt = i;
      }
    } else if (chunkStartsAt && !charSuitableForHTMLAttrName(str[i])) {
      lastCapturedChunk = str.slice(chunkStartsAt, i);
      lastChunkWasCapturedAfterSuspectedClosing =
        chunkStartsAt >= isThisClosingIdx;
      chunkStartsAt = null;
      if (
        `'"`.includes(str[i]) &&
        quotesCount.get(`matchedPairs`) === 0 &&
        totalQuotesCount === 3 &&
        str[idxOfAttrOpening] === str[i] &&
        allHtmlAttribs.has(lastCapturedChunk)
      ) {
        const A1 = i > isThisClosingIdx;
        const A21 = !lastQuoteAt;
        const A22 = lastQuoteAt + 1 >= i;
        const A23 = split(str.slice(lastQuoteAt + 1, i)).every((chunk) =>
          allHtmlAttribs.has(chunk)
        );
        const B1 = i === isThisClosingIdx;
        const B21 = totalQuotesCount < 3;
        const B22 = !!lastQuoteWasMatched;
        const B23 = !lastQuoteAt;
        const B24 = lastQuoteAt + 1 >= i;
        const B25 = !split(str.slice(lastQuoteAt + 1, i)).every((chunk) =>
          allHtmlAttribs.has(chunk)
        );
        return (
          (A1 && (A21 || A22 || A23)) ||
          (B1 && (B21 || B22 || B23 || B24 || B25))
        );
      }
    }
    if (
      `'"`.includes(str[i]) &&
      (!(quotesCount.get(`"`) % 2) || !(quotesCount.get(`'`) % 2)) &&
      (quotesCount.get(`"`) + quotesCount.get(`'`)) % 2 &&
      ((lastCapturedChunk &&
        allHtmlAttribs.has(lastCapturedChunk)) ||
        (i > isThisClosingIdx + 1 &&
          Array.from(str.slice(isThisClosingIdx + 1, i).trim()).every((char) =>
            charSuitableForHTMLAttrName(char)
          )))
    ) {
      const R1 = !!openingQuote;
      const R2 = str[idxOfAttrOpening] !== str[isThisClosingIdx];
      const R3 = Array.from(
        str.slice(idxOfAttrOpening + 1, isThisClosingIdx).trim()
      ).every((char) => charSuitableForHTMLAttrName(char));
      const R4 = !xBeforeYOnTheRight(
        str,
        i + 1,
        str[isThisClosingIdx],
        makeTheQuoteOpposite(str[isThisClosingIdx])
      );
      return (
        i > isThisClosingIdx &&
        !(R1 && R2 && R3 && R4)
      );
    } else if (
      (str[i] === "=" ||
        (!str[i].length &&
          str[right(str, i)] === "=")) &&
      lastCapturedChunk &&
      allHtmlAttribs.has(lastCapturedChunk)
    ) {
      const W1 = i > isThisClosingIdx;
      const W2 =
        !(
          (
            !(
              lastQuoteWasMatched &&
              lastMatchedQuotesPairsStartIsAt === idxOfAttrOpening &&
              lastMatchedQuotesPairsEndIsAt === isThisClosingIdx
            ) &&
            lastQuoteWasMatched &&
            lastMatchedQuotesPairsStartIsAt &&
            lastMatchedQuotesPairsStartIsAt <= isThisClosingIdx
          )
        );
      return W1 && W2;
    }
    if (i > isThisClosingIdx) {
      if (openingQuote && str[i] === openingQuote) {
        const Y1 = !!lastQuoteAt;
        const Y2 = lastQuoteAt === isThisClosingIdx;
        const Y3 =
          lastQuoteAt + 1 < i && str.slice(lastQuoteAt + 1, i).trim().length;
        const Y4 = split(str.slice(lastQuoteAt + 1, i)).every((chunk) =>
          allHtmlAttribs.has(chunk)
        );
        const Y5 = i >= isThisClosingIdx;
        return Y1 && Y2 && Y3 && Y4 && Y5;
      }
      if (
        openingQuote &&
        str[isThisClosingIdx] === oppositeToOpeningQuote &&
        str[i] === oppositeToOpeningQuote
      ) {
        return false;
      }
      else if (str[i] === "/" || str[i] === ">" || str[i] === "<") {
        const R1 = quotesCount.get(`matchedPairs`) < 2;
        const R2 =
          totalQuotesCount < 3 ||
          quotesCount.get(`"`) +
            quotesCount.get(`'`) -
            quotesCount.get(`matchedPairs`) * 2 !==
            2;
        const R31 =
          !lastQuoteWasMatched ||
          (lastQuoteWasMatched &&
            !(
              lastMatchedQuotesPairsStartIsAt &&
              Array.from(
                str
                  .slice(idxOfAttrOpening + 1, lastMatchedQuotesPairsStartIsAt)
                  .trim()
              ).every((char) => charSuitableForHTMLAttrName(char)) &&
              allHtmlAttribs.has(
                str
                  .slice(idxOfAttrOpening + 1, lastMatchedQuotesPairsStartIsAt)
                  .trim()
              )
            ));
        const R32 = !right(str, i) && totalQuotesCount % 2 === 0;
        const R33 =
          str[idxOfAttrOpening - 2] &&
          str[idxOfAttrOpening - 1] === "=" &&
          charSuitableForHTMLAttrName(str[idxOfAttrOpening - 2]);
        const R34 = !ensureXIsNotPresentBeforeOneOfY(str, i + 1, "<", [
          `='`,
          `="`,
        ]);
        return (
          R1 &&
          R2 &&
          (R31 ||
            R32 ||
            R33 ||
            R34)
        );
      }
      if (
        str[i] === "=" &&
        matchRight(str, i, [`'`, `"`], {
          trimBeforeMatching: true,
          trimCharsBeforeMatching: ["="],
        })
      ) {
        return true;
      }
    } else {
      let firstNonWhitespaceCharOnTheLeft;
      if (str[i - 1] && str[i - 1].trim().length && str[i - 1] !== "=") {
        firstNonWhitespaceCharOnTheLeft = i - 1;
      } else {
        for (let y = i; y--; ) {
          if (str[y].trim().length && str[y] !== "=") {
            firstNonWhitespaceCharOnTheLeft = y;
            break;
          }
        }
      }
      if (
        str[i] === "=" &&
        matchRight(str, i, [`'`, `"`], {
          cb: (char) => !`/>`.includes(char),
          trimBeforeMatching: true,
          trimCharsBeforeMatching: ["="],
        }) &&
        charSuitableForHTMLAttrName(str[firstNonWhitespaceCharOnTheLeft])
      ) {
        return false;
      }
    }
    if (
      `'"`.includes(str[i]) &&
      i > isThisClosingIdx
    ) {
      if (
        !lastChunkWasCapturedAfterSuspectedClosing ||
        !lastCapturedChunk ||
        !allHtmlAttribs.has(lastCapturedChunk)
      ) {
        return false;
      }
      return true;
    }
    if (`'"`.includes(str[i])) {
      lastQuoteAt = i;
    }
  }
  return false;
}

export default isAttrClosing;