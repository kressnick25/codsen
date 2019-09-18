// avanotonly

import test from "ava";
import he from "he";
// import { allNamedEntities } from "all-named-html-entities";
// import { notEmailFriendly } from "html-entities-not-email-friendly";
import { det } from "../dist/detergent.esm";
import { mixer, allCombinations } from "../t-util/util";
import {
  rawReplacementMark,
  // rawNDash,
  rawMDash,
  rawNbsp,
  rawhairspace,
  // rawEllipsis,
  rightSingleQuote
  // rightDoubleQuote,
  // leftDoubleQuote,
  // leftSingleQuote
} from "../dist/util.esm";

// 01. opts.opts.convertEntities
// -----------------------------------------------------------------------------

test(`01.01 - ${`\u001b[${31}m${`opts.convertEntities`}\u001b[${39}m`} - pound - convertEntities=on`, t => {
  mixer({
    convertEntities: 1
  }).forEach(opt => {
    t.is(det(`\u00A3`, opt).res, "&pound;", JSON.stringify(opt, null, 4));
  });
});

test(`01.02 - ${`\u001b[${31}m${`opts.convertEntities`}\u001b[${39}m`} - pound - convertEntities=off`, t => {
  mixer({
    convertEntities: 0
  }).forEach(opt => {
    t.is(det(`\u00A3`, opt).res, "\u00A3", JSON.stringify(opt, null, 4));
  });
});

test(`01.03 - ${`\u001b[${31}m${`opts.convertEntities`}\u001b[${39}m`} - m-dash`, t => {
  mixer({
    convertEntities: 1
  }).forEach(opt => {
    t.is(det(`${rawMDash}`, opt).res, "&mdash;", JSON.stringify(opt, null, 4));
  });
});

test(`01.04 - ${`\u001b[${31}m${`opts.convertEntities`}\u001b[${39}m`} - m-dash`, t => {
  mixer({
    convertEntities: 0
  }).forEach(opt => {
    t.is(
      det(`${rawMDash}`, opt).res,
      `${rawMDash}`,
      JSON.stringify(opt, null, 4)
    );
  });
});

// 02. hairspaces
// -----------------------------------------------------------------------------

test(`02.01 - ${`\u001b[${33}m${`hairspaces`}\u001b[${39}m`} - with m-dash combo`, t => {
  mixer({
    convertEntities: 0,
    removeWidows: 0
  }).forEach(opt => {
    t.is(
      det(`a${rawhairspace}&mdash;${rawhairspace}a`, opt).res,
      `a ${rawMDash} a`,
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`02.02 - ${`\u001b[${33}m${`hairspaces`}\u001b[${39}m`} - mixed #1`, t => {
  mixer({
    convertEntities: 1,
    removeWidows: 0
  }).forEach(opt => {
    t.is(
      det(
        `HOORAY  ${rawMDash}  IT${rightSingleQuote}S HERE ${rawhairspace}`,
        opt
      ).res,
      `HOORAY &mdash; IT&rsquo;S HERE`,
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`02.03 - ${`\u001b[${33}m${`hairspaces`}\u001b[${39}m`} - mixed #2`, t => {
  mixer({
    convertEntities: 1,
    removeWidows: 0,
    convertDashes: 1
  }).forEach(opt => {
    t.is(
      det(`HOORAY  -  IT’S HERE ${rawhairspace}`, opt).res,
      "HOORAY &mdash; IT&rsquo;S HERE",
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`02.04 - ${`\u001b[${33}m${`hairspaces`}\u001b[${39}m`} - mixed #3`, t => {
  mixer({
    convertEntities: 1,
    removeWidows: 0,
    convertDashes: 0
  }).forEach(opt => {
    t.is(
      det(`HOORAY  -  IT’S HERE ${rawhairspace}`, opt).res,
      "HOORAY - IT&rsquo;S HERE",
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`02.05 - ${`\u001b[${33}m${`hairspaces`}\u001b[${39}m`} - mixed #4`, t => {
  mixer({
    convertEntities: 1,
    removeWidows: 1,
    convertDashes: 0
  }).forEach(opt => {
    t.is(
      det(`HOORAY  -  IT’S HERE ${rawhairspace}`, opt).res,
      "HOORAY - IT&rsquo;S&nbsp;HERE",
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`02.06 - ${`\u001b[${33}m${`hairspaces`}\u001b[${39}m`} - mixed #5`, t => {
  mixer({
    convertEntities: 1,
    removeWidows: 1
  }).forEach(opt => {
    t.is(
      det(`HOORAY  ${rawMDash}  IT’S HERE ${rawhairspace}`, opt).res,
      "HOORAY&nbsp;&mdash; IT&rsquo;S&nbsp;HERE",
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`02.07 - ${`\u001b[${33}m${`hairspaces`}\u001b[${39}m`} - letters, convertEntities=on, removeWidows=on`, t => {
  mixer({
    convertEntities: 1,
    removeWidows: 1
  }).forEach(opt => {
    t.is(
      det(`a${rawhairspace}a a a a a a a a a ${rawMDash} a a a a `, opt).res,
      "a a a a a a a a a a&nbsp;&mdash; a a a&nbsp;a",
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`02.08 - ${`\u001b[${33}m${`hairspaces`}\u001b[${39}m`} - letters, convertEntities=on, removeWidows=off`, t => {
  mixer({
    convertEntities: 1,
    removeWidows: 0
  }).forEach(opt => {
    t.is(
      det(`a a a a a a${rawhairspace}a a a a ${rawMDash} a a a a `, opt).res,
      "a a a a a a a a a a &mdash; a a a a",
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`02.09 - ${`\u001b[${33}m${`hairspaces`}\u001b[${39}m`} - letters, convertEntities=off, removeWidows=on`, t => {
  t.is(
    det(`a a a a a a a a a a ${rawMDash} a a a a ${rawhairspace}`, {
      fixBrokenEntities: 0,
      convertDashes: 0,
      convertApostrophes: 0,
      replaceLineBreaks: 0,
      removeLineBreaks: 0,
      useXHTML: 0,
      dontEncodeNonLatin: 0,
      addMissingSpaces: 0,
      convertDotsToEllipsis: 0,
      stripHtml: 0,
      convertEntities: 0,
      removeWidows: 1
    }).res,
    `a a a a a a a a a a${rawNbsp}${rawMDash} a a a${rawNbsp}a`
  );
  // mixer({
  //   convertEntities: 0,
  //   removeWidows: 1
  // }).forEach(opt => {
  //   t.is(
  //     det(`a a a a a a a a a a ${rawMDash} a a a a ${rawhairspace}`, opt).res,
  //     `a a a a a a a a a a${rawNbsp}${rawMDash} a a a${rawNbsp}a`,
  //     JSON.stringify(opt, null, 4)
  //   );
  // });
});

test(`02.10 - ${`\u001b[${33}m${`hairspaces`}\u001b[${39}m`} - letters, convertEntities=off, removeWidows=off`, t => {
  mixer({
    convertEntities: 0,
    removeWidows: 0
  }).forEach(opt => {
    t.is(
      det(`a a a a a a a a a a ${rawMDash} a a a a ${rawhairspace}`, opt).res,
      `a a a a a a a a a a ${rawMDash} a a a a`,
      JSON.stringify(opt, null, 4)
    );
  });
});

// 03. m-dash
// -----------------------------------------------------------------------------

test(`03.01 - ${`\u001b[${32}m${`m-dash`}\u001b[${39}m`}`, t => {
  mixer({
    convertDashes: 1,
    convertEntities: 1,
    removeWidows: 1
  }).forEach(opt => {
    t.is(
      det(`aaaaaaaaaaa - aaaaaaaaaaaa`, opt).res,
      "aaaaaaaaaaa&nbsp;&mdash; aaaaaaaaaaaa",
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`03.02 - ${`\u001b[${32}m${`m-dash`}\u001b[${39}m`}`, t => {
  mixer({
    convertDashes: 0
  }).forEach(opt => {
    t.is(
      det(`aaaaaaaaaaa - aaaaaaaaaaaa`, opt).res,
      "aaaaaaaaaaa - aaaaaaaaaaaa",
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`03.03 - ${`\u001b[${32}m${`m-dash`}\u001b[${39}m`}`, t => {
  mixer({
    convertEntities: 1,
    removeWidows: 1
  }).forEach(opt => {
    t.is(
      det(`aaaaaaaaaaa ${rawMDash} aaaaaaaaaaaa &mdash; aaaaaaaaaaaa`, opt).res,
      `aaaaaaaaaaa&nbsp;&mdash; aaaaaaaaaaaa&nbsp;&mdash;&nbsp;aaaaaaaaaaaa`,
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`03.04 - ${`\u001b[${32}m${`m-dash`}\u001b[${39}m`}`, t => {
  mixer({
    convertEntities: 1,
    removeWidows: 1,
    addMissingSpaces: 0
  }).forEach(opt => {
    t.is(
      det(`a ${rawMDash}a`, opt).res,
      "a&nbsp;&mdash;a",
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`03.05 - ${`\u001b[${32}m${`m-dash`}\u001b[${39}m`}`, t => {
  mixer({
    convertEntities: 1,
    removeWidows: 1,
    addMissingSpaces: 1
  }).forEach(opt => {
    t.is(
      det(`a ${rawMDash}a`, opt).res,
      "a&nbsp;&mdash; a",
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`03.06 - ${`\u001b[${32}m${`m-dash`}\u001b[${39}m`}`, t => {
  mixer({
    convertEntities: 1,
    removeWidows: 0,
    addMissingSpaces: 0
  }).forEach(opt => {
    t.is(
      det(`a ${rawMDash}a`, opt).res,
      "a &mdash;a",
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`03.07 - ${`\u001b[${32}m${`m-dash`}\u001b[${39}m`}`, t => {
  mixer({
    convertEntities: 1,
    removeWidows: 0,
    addMissingSpaces: 1
  }).forEach(opt => {
    t.is(
      det(`a ${rawMDash}a`, opt).res,
      "a &mdash; a",
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`03.08 - ${`\u001b[${32}m${`m-dash`}\u001b[${39}m`}`, t => {
  mixer({
    convertEntities: 0,
    removeWidows: 1,
    addMissingSpaces: 0
  }).forEach(opt => {
    t.is(
      det(`a ${rawMDash}a`, opt).res,
      `a${rawNbsp}${rawMDash}a`,
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`03.09 - ${`\u001b[${32}m${`m-dash`}\u001b[${39}m`}`, t => {
  mixer({
    convertEntities: 0,
    removeWidows: 1,
    addMissingSpaces: 1
  }).forEach(opt => {
    t.is(
      det(`a ${rawMDash}a`, opt).res,
      `a${rawNbsp}${rawMDash} a`,
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`03.10 - ${`\u001b[${32}m${`m-dash`}\u001b[${39}m`}`, t => {
  mixer({
    convertEntities: 0,
    removeWidows: 0,
    addMissingSpaces: 0
  }).forEach(opt => {
    t.is(
      det(`a ${rawMDash}a`, opt).res,
      `a ${rawMDash}a`,
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`03.11 - ${`\u001b[${32}m${`m-dash`}\u001b[${39}m`}`, t => {
  mixer({
    convertEntities: 0,
    removeWidows: 0,
    addMissingSpaces: 1
  }).forEach(opt => {
    t.is(
      det(`a ${rawMDash}a`, opt).res,
      `a ${rawMDash} a`,
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`03.12 - ${`\u001b[${32}m${`m-dash`}\u001b[${39}m`}`, t => {
  mixer({
    convertEntities: 1,
    removeWidows: 1,
    addMissingSpaces: 0
  }).forEach(opt => {
    t.is(
      det(`a${rawhairspace}${rawMDash}a`, opt).res,
      "a&nbsp;&mdash;a",
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`03.13 - ${`\u001b[${32}m${`m-dash`}\u001b[${39}m`}`, t => {
  mixer({
    convertEntities: 1,
    removeWidows: 1,
    addMissingSpaces: 1
  }).forEach(opt => {
    t.is(
      det(`a${rawhairspace}${rawMDash}a`, opt).res,
      "a&nbsp;&mdash; a",
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`03.14 - ${`\u001b[${32}m${`m-dash`}\u001b[${39}m`}`, t => {
  mixer({
    convertEntities: 1,
    removeWidows: 0,
    addMissingSpaces: 0
  }).forEach(opt => {
    t.is(
      det(`a${rawhairspace}${rawMDash}a`, opt).res,
      "a &mdash;a",
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`03.15 - ${`\u001b[${32}m${`m-dash`}\u001b[${39}m`}`, t => {
  mixer({
    convertEntities: 1,
    removeWidows: 0,
    addMissingSpaces: 1
  }).forEach(opt => {
    t.is(
      det(`a${rawhairspace}${rawMDash}a`, opt).res,
      "a &mdash; a",
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`03.16 - ${`\u001b[${32}m${`m-dash`}\u001b[${39}m`}`, t => {
  mixer({
    convertEntities: 0,
    removeWidows: 1,
    addMissingSpaces: 0
  }).forEach(opt => {
    t.is(
      det(`a${rawhairspace}${rawMDash}a`, opt).res,
      `a${rawNbsp}${rawMDash}a`,
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`03.17 - ${`\u001b[${32}m${`m-dash`}\u001b[${39}m`}`, t => {
  mixer({
    convertEntities: 0,
    removeWidows: 1,
    addMissingSpaces: 1
  }).forEach(opt => {
    t.is(
      det(`a${rawhairspace}${rawMDash}a`, opt).res,
      `a${rawNbsp}${rawMDash} a`,
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`03.18 - ${`\u001b[${32}m${`m-dash`}\u001b[${39}m`}`, t => {
  mixer({
    convertEntities: 0,
    removeWidows: 0,
    addMissingSpaces: 0
  }).forEach(opt => {
    t.is(
      det(`a${rawhairspace}${rawMDash}a`, opt).res,
      `a ${rawMDash}a`,
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`03.19 - ${`\u001b[${32}m${`m-dash`}\u001b[${39}m`}`, t => {
  mixer({
    convertEntities: 0,
    removeWidows: 0,
    addMissingSpaces: 1
  }).forEach(opt => {
    t.is(
      det(`a${rawhairspace}${rawMDash}a`, opt).res,
      `a ${rawMDash} a`,
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`03.20 - ${`\u001b[${32}m${`m-dash`}\u001b[${39}m`} - false positives`, t => {
  mixer({
    convertEntities: 1
  }).forEach(opt => {
    t.is(
      det(`Discount: -£10.00`, opt).res,
      "Discount: -&pound;10.00",
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`03.21 - ${`\u001b[${32}m${`m-dash`}\u001b[${39}m`} - false positives`, t => {
  mixer({
    convertEntities: 0
  }).forEach(opt => {
    t.is(
      det(`Discount: -£10.00`, opt).res,
      "Discount: -£10.00",
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`03.22 - ${`\u001b[${32}m${`m-dash`}\u001b[${39}m`} - false positives`, t => {
  allCombinations.forEach(opt => {
    t.is(
      det(`Discount: -10.00`, opt).res,
      "Discount: -10.00",
      JSON.stringify(opt, null, 4)
    );
  });
});

// 04. astral chars
// -----------------------------------------------------------------------------

test(`04.01 - ${`\u001b[${36}m${`astral chars`}\u001b[${39}m`} - trigram char converted into entity, convertEntities=on`, t => {
  mixer({
    convertEntities: 1
  }).forEach(opt => {
    t.is(
      det(`\uD834\uDF06`, opt).res,
      "&#x1D306;",
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`04.02 - ${`\u001b[${36}m${`astral chars`}\u001b[${39}m`} - trigram char converted into entity, convertEntities=off`, t => {
  mixer({
    convertEntities: 0
  }).forEach(opt => {
    t.is(
      det(`\uD834\uDF06`, opt).res,
      "\uD834\uDF06",
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`04.03 - ${`\u001b[${36}m${`astral chars`}\u001b[${39}m`} - paired surrogate encoding, convertEntities=on`, t => {
  mixer({
    convertEntities: 1
  }).forEach(opt => {
    t.is(
      det(`\uD83D\uDE0A`, opt).res,
      "&#x1F60A;",
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`04.04 - ${`\u001b[${36}m${`astral chars`}\u001b[${39}m`} - paired surrogate encoding, convertEntities=off`, t => {
  mixer({
    convertEntities: 0
  }).forEach(opt => {
    t.is(
      det(`\uD83D\uDE0A`, opt).res,
      "\uD83D\uDE0A",
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`04.05 - ${`\u001b[${36}m${`astral chars`}\u001b[${39}m`} - stray low surrogates removed`, t => {
  allCombinations.forEach(opt => {
    t.is(
      det(`${rawReplacementMark}a\uD800a\uD83Da\uDBFF`, opt).res,
      "aaa",
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`04.06 - ${`\u001b[${36}m${`astral chars`}\u001b[${39}m`} - stray low surrogates removed`, t => {
  allCombinations.forEach(opt => {
    t.is(
      det(`\uDC00a\uDE0Aa\uDFFF`, opt).res,
      "aa",
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`04.07 - ${`\u001b[${36}m${`astral chars`}\u001b[${39}m`} - stray low surrogates removed`, t => {
  allCombinations.forEach(opt => {
    t.is(det(`\uD835`, opt).res, "", JSON.stringify(opt, null, 4));
  });
});

test(`04.08 - ${`\u001b[${36}m${`astral chars`}\u001b[${39}m`} - stray low surrogates removed`, t => {
  allCombinations.forEach(opt => {
    t.is(det(`\uDFD8`, opt).res, "", JSON.stringify(opt, null, 4));
  });
});

test(`04.09 - ${`\u001b[${36}m${`astral chars`}\u001b[${39}m`} - stray low surrogates removed`, t => {
  mixer({
    convertEntities: 0
  }).forEach(opt => {
    t.is(
      det(`gr\u00F6\u00DFer`, opt).res,
      "gr\u00F6\u00DFer",
      JSON.stringify(opt, null, 4)
    );
  });
});

// 05. opts.convertApostrophes
// -----------------------------------------------------------------------------

test(`05.01 - ${`\u001b[${34}m${`opts.convertApostrophes`}\u001b[${39}m`} - German characters`, t => {
  mixer({
    convertEntities: 1
  }).forEach(opt => {
    t.is(
      det(`gr\u00F6\u00DFer`, opt).res,
      "gr&ouml;&szlig;er",
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`05.02 - ${`\u001b[${34}m${`opts.convertApostrophes`}\u001b[${39}m`} - single apostrophes are not encoded`, t => {
  mixer({
    convertApostrophes: 0
  }).forEach(opt => {
    t.is(det(`'`, opt).res, "'", JSON.stringify(opt, null, 4));
  });
});

test(`05.03 - ${`\u001b[${34}m${`opts.convertApostrophes`}\u001b[${39}m`} - single apostrophes are not encoded`, t => {
  mixer({
    convertApostrophes: 0
  }).forEach(opt => {
    t.is(det(`&apos;`, opt).res, "'", JSON.stringify(opt, null, 4));
  });
});

test(`05.04 - ${`\u001b[${34}m${`opts.convertApostrophes`}\u001b[${39}m`} - single apostrophes`, t => {
  mixer({
    convertApostrophes: 1,
    convertEntities: 0
  }).forEach(opt => {
    t.is(
      det(`It&apos;s Monday.`, opt).res,
      `It${rightSingleQuote}s Monday.`,
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`05.05 - ${`\u001b[${34}m${`opts.convertApostrophes`}\u001b[${39}m`} - single apostrophes`, t => {
  mixer({
    convertApostrophes: 1,
    convertEntities: 1
  }).forEach(opt => {
    t.is(
      det(`It&apos;s Monday.`, opt).res,
      "It&rsquo;s Monday.",
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`05.06 - ${`\u001b[${34}m${`opts.convertApostrophes`}\u001b[${39}m`} - single apostrophes`, t => {
  mixer({
    convertApostrophes: 0,
    convertEntities: 0
  }).forEach(opt => {
    t.is(
      det(`It&apos;s Monday.`, opt).res,
      "It's Monday.",
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`05.07 - ${`\u001b[${34}m${`opts.convertApostrophes`}\u001b[${39}m`} - single apostrophes`, t => {
  mixer({
    convertApostrophes: 0,
    convertEntities: 1
  }).forEach(opt => {
    t.is(
      det(`It&apos;s Monday.`, opt).res,
      "It's Monday.",
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`05.08 - ${`\u001b[${34}m${`opts.convertApostrophes`}\u001b[${39}m`} - replacement marks - case of "wouldn't"`, t => {
  mixer({
    convertApostrophes: 1,
    convertEntities: 1
  }).forEach(opt => {
    t.is(
      det(`wouldn${rawReplacementMark}t`, opt).res,
      "wouldn&rsquo;t",
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`05.09 - ${`\u001b[${34}m${`opts.convertApostrophes`}\u001b[${39}m`} - replacement marks - case of "wouldn't"`, t => {
  mixer({
    convertApostrophes: 1,
    convertEntities: 0
  }).forEach(opt => {
    t.is(
      det(`wouldn${rawReplacementMark}t`, opt).res,
      `wouldn${rightSingleQuote}t`,
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`05.10 - ${`\u001b[${34}m${`opts.convertApostrophes`}\u001b[${39}m`} - replacement marks - case of "wouldn't"`, t => {
  mixer({
    convertApostrophes: 0
  }).forEach(opt => {
    t.is(
      det(`wouldn${rawReplacementMark}t`, opt).res,
      `wouldn't`,
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`05.11 - ${`\u001b[${34}m${`opts.convertApostrophes`}\u001b[${39}m`} - replacement marks - case of "wouldn't" - caps`, t => {
  mixer({
    convertApostrophes: 1,
    convertEntities: 1
  }).forEach(opt => {
    t.is(
      det(`WOULDN${rawReplacementMark}T`, opt).res,
      "WOULDN&rsquo;T",
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`05.12 - ${`\u001b[${34}m${`opts.convertApostrophes`}\u001b[${39}m`} - replacement marks - case of "wouldn't" - caps`, t => {
  mixer({
    convertApostrophes: 1,
    convertEntities: 0
  }).forEach(opt => {
    t.is(
      det(`WOULDN${rawReplacementMark}T`, opt).res,
      `WOULDN${rightSingleQuote}T`,
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`05.13 - ${`\u001b[${34}m${`opts.convertApostrophes`}\u001b[${39}m`} - replacement marks - case of "wouldn't" - caps`, t => {
  mixer({
    convertApostrophes: 0
  }).forEach(opt => {
    t.is(
      det(`WOULDN${rawReplacementMark}T`, opt).res,
      `WOULDN'T`,
      JSON.stringify(opt, null, 4)
    );
  });
});

// rawReplacementMark === �
test(`05.13 - ${`\u001b[${34}m${`opts.convertApostrophes`}\u001b[${39}m`} - replacement marks - case of "one's"`, t => {
  mixer({
    convertApostrophes: 1,
    convertEntities: 1
  }).forEach(opt => {
    t.is(
      det(`one${rawReplacementMark}s`, opt).res,
      "one&rsquo;s",
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`05.14 - ${`\u001b[${34}m${`opts.convertApostrophes`}\u001b[${39}m`} - replacement marks - case of "one's"`, t => {
  mixer({
    convertApostrophes: 1,
    convertEntities: 0
  }).forEach(opt => {
    t.is(
      det(`one${rawReplacementMark}s`, opt).res,
      `one${rightSingleQuote}s`,
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`05.15 - ${`\u001b[${34}m${`opts.convertApostrophes`}\u001b[${39}m`} - converts to non-fancy which is never encoded`, t => {
  mixer({
    convertApostrophes: 0
  }).forEach(opt => {
    t.is(
      det(`one${rawReplacementMark}s`, opt).res,
      `one's`,
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`05.16 - ${`\u001b[${34}m${`opts.convertApostrophes`}\u001b[${39}m`} - converts to fancy, encoded`, t => {
  mixer({
    convertApostrophes: 1,
    convertEntities: 1
  }).forEach(opt => {
    t.is(
      det(`ONE${rawReplacementMark}S`, opt).res,
      "ONE&rsquo;S",
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`05.17 - ${`\u001b[${34}m${`opts.convertApostrophes`}\u001b[${39}m`} - converts to fancy but leaves unencoded`, t => {
  mixer({
    convertApostrophes: 1,
    convertEntities: 0
  }).forEach(opt => {
    t.is(
      det(`ONE${rawReplacementMark}S`, opt).res,
      `ONE${rightSingleQuote}S`,
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`05.18 - ${`\u001b[${34}m${`opts.convertApostrophes`}\u001b[${39}m`} - converts to non-fancy which is never encoded`, t => {
  mixer({
    convertApostrophes: 0
  }).forEach(opt => {
    t.is(
      det(`ONE${rawReplacementMark}S`, opt).res,
      `ONE'S`,
      JSON.stringify(opt, null, 4)
    );
  });
});

// 06 - converts replacement marks back into normal text
// -----------------------------------------------------------------------------
// ${rawReplacementMark} = �

test(`06.01 - ${`\u001b[${34}m${`opts.convertApostrophes`}\u001b[${39}m`} - replacement marks`, t => {
  mixer({
    convertApostrophes: 1,
    convertEntities: 1
  }).forEach(opt => {
    t.is(
      det(`couldn${rawReplacementMark}t`, opt).res,
      "couldn&rsquo;t",
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`06.02 - ${`\u001b[${34}m${`opts.convertApostrophes`}\u001b[${39}m`} - replacement marks`, t => {
  mixer({
    convertApostrophes: 1,
    convertEntities: 1
  }).forEach(opt => {
    t.is(
      det(`we${rawReplacementMark}re`, opt).res,
      "we&rsquo;re",
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`06.03 - ${`\u001b[${34}m${`opts.convertApostrophes`}\u001b[${39}m`} - replacement marks`, t => {
  mixer({
    convertApostrophes: 1,
    convertEntities: 1
  }).forEach(opt => {
    t.is(
      det(`you${rawReplacementMark}re`, opt).res,
      "you&rsquo;re",
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`06.04 - ${`\u001b[${34}m${`opts.convertApostrophes`}\u001b[${39}m`} - replacement marks`, t => {
  mixer({
    convertApostrophes: 1,
    convertEntities: 1
  }).forEach(opt => {
    t.is(
      det(`they${rawReplacementMark}re`, opt).res,
      "they&rsquo;re",
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`06.05 - ${`\u001b[${34}m${`opts.convertApostrophes`}\u001b[${39}m`} - replacement marks`, t => {
  mixer({
    convertApostrophes: 1,
    convertEntities: 1
  }).forEach(opt => {
    t.is(
      det(`YOU${rawReplacementMark}RE`, opt).res,
      "YOU&rsquo;RE",
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`06.06 - ${`\u001b[${34}m${`opts.convertApostrophes`}\u001b[${39}m`} - replacement marks`, t => {
  mixer({
    convertApostrophes: 1,
    convertEntities: 1
  }).forEach(opt => {
    t.is(
      det(`I${rawReplacementMark}ll`, opt).res,
      "I&rsquo;ll",
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`06.07 - ${`\u001b[${34}m${`opts.convertApostrophes`}\u001b[${39}m`} - replacement marks`, t => {
  mixer({
    convertApostrophes: 1,
    convertEntities: 1
  }).forEach(opt => {
    t.is(
      det(`you${rawReplacementMark}ll`, opt).res,
      "you&rsquo;ll",
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`06.08 - ${`\u001b[${34}m${`opts.convertApostrophes`}\u001b[${39}m`} - replacement marks`, t => {
  mixer({
    convertApostrophes: 1,
    convertEntities: 1
  }).forEach(opt => {
    t.is(
      det(`he${rawReplacementMark}ll`, opt).res,
      "he&rsquo;ll",
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`06.09 - ${`\u001b[${34}m${`opts.convertApostrophes`}\u001b[${39}m`} - replacement marks`, t => {
  mixer({
    convertApostrophes: 1,
    convertEntities: 1
  }).forEach(opt => {
    t.is(
      det(`she${rawReplacementMark}ll`, opt).res,
      "she&rsquo;ll",
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`06.10 - ${`\u001b[${34}m${`opts.convertApostrophes`}\u001b[${39}m`} - replacement marks`, t => {
  mixer({
    convertApostrophes: 1,
    convertEntities: 1
  }).forEach(opt => {
    t.is(
      det(`we${rawReplacementMark}ll`, opt).res,
      "we&rsquo;ll",
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`06.11 - ${`\u001b[${34}m${`opts.convertApostrophes`}\u001b[${39}m`} - replacement marks`, t => {
  mixer({
    convertApostrophes: 1,
    convertEntities: 1
  }).forEach(opt => {
    t.is(
      det(`they${rawReplacementMark}ll`, opt).res,
      "they&rsquo;ll",
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`06.12 - ${`\u001b[${34}m${`opts.convertApostrophes`}\u001b[${39}m`} - replacement marks`, t => {
  mixer({
    convertApostrophes: 1,
    convertEntities: 1
  }).forEach(opt => {
    t.is(
      det(`YOU${rawReplacementMark}LL`, opt).res,
      "YOU&rsquo;LL",
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`06.13 - ${`\u001b[${34}m${`opts.convertApostrophes`}\u001b[${39}m`} - replacement marks`, t => {
  mixer({
    convertApostrophes: 1,
    convertEntities: 1
  }).forEach(opt => {
    t.is(
      det(`HE${rawReplacementMark}LL`, opt).res,
      "HE&rsquo;LL",
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`06.14 - ${`\u001b[${34}m${`opts.convertApostrophes`}\u001b[${39}m`} - replacement marks`, t => {
  mixer({
    convertApostrophes: 1,
    convertEntities: 1
  }).forEach(opt => {
    t.is(
      det(`SHE${rawReplacementMark}LL`, opt).res,
      "SHE&rsquo;LL",
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`06.15 - ${`\u001b[${34}m${`opts.convertApostrophes`}\u001b[${39}m`} - replacement marks`, t => {
  mixer({
    convertApostrophes: 1,
    convertEntities: 1
  }).forEach(opt => {
    t.is(
      det(`WE${rawReplacementMark}LL`, opt).res,
      "WE&rsquo;LL",
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`06.16 - ${`\u001b[${34}m${`opts.convertApostrophes`}\u001b[${39}m`} - replacement marks`, t => {
  mixer({
    convertApostrophes: 1,
    convertEntities: 1
  }).forEach(opt => {
    t.is(
      det(`THEY${rawReplacementMark}LL`, opt).res,
      "THEY&rsquo;LL",
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`06.17 - ${`\u001b[${34}m${`opts.convertApostrophes`}\u001b[${39}m`} - replacement marks`, t => {
  mixer({
    convertApostrophes: 1,
    convertEntities: 1
  }).forEach(opt => {
    t.is(
      det(`might${rawReplacementMark}ve`, opt).res,
      "might&rsquo;ve",
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`06.18 - ${`\u001b[${34}m${`opts.convertApostrophes`}\u001b[${39}m`} - replacement marks`, t => {
  mixer({
    convertApostrophes: 1,
    convertEntities: 1
  }).forEach(opt => {
    t.is(
      det(`she${rawReplacementMark}s`, opt).res,
      "she&rsquo;s",
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`06.19 - ${`\u001b[${34}m${`opts.convertApostrophes`}\u001b[${39}m`} - replacement marks`, t => {
  mixer({
    convertApostrophes: 1,
    convertEntities: 1
  }).forEach(opt => {
    t.is(
      det(`they${rawReplacementMark}re`, opt).res,
      "they&rsquo;re",
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`06.20 - ${`\u001b[${34}m${`opts.convertApostrophes`}\u001b[${39}m`} - replacement marks`, t => {
  mixer({
    convertApostrophes: 1,
    convertEntities: 1
  }).forEach(opt => {
    t.is(
      det(`they${rawReplacementMark}ve`, opt).res,
      "they&rsquo;ve",
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`06.21 - ${`\u001b[${34}m${`opts.convertApostrophes`}\u001b[${39}m`} - replacement marks`, t => {
  mixer({
    convertApostrophes: 1,
    convertEntities: 1
  }).forEach(opt => {
    t.is(
      det(`they${rawReplacementMark}ll`, opt).res,
      "they&rsquo;ll",
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`06.22 - ${`\u001b[${34}m${`opts.convertApostrophes`}\u001b[${39}m`} - replacement marks`, t => {
  mixer({
    convertApostrophes: 1,
    convertEntities: 1
  }).forEach(opt => {
    t.is(
      det(`peoples${rawReplacementMark}`, opt).res,
      "peoples&rsquo;",
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`06.23 - ${`\u001b[${34}m${`opts.convertApostrophes`}\u001b[${39}m`} - replacement marks`, t => {
  mixer({
    convertApostrophes: 1,
    convertEntities: 1
  }).forEach(opt => {
    t.is(
      det(`Mr. Brown${rawReplacementMark}s`, opt).res,
      "Mr. Brown&rsquo;s",
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`06.24 - ${`\u001b[${34}m${`opts.convertApostrophes`}\u001b[${39}m`} - replacement marks`, t => {
  mixer({
    convertEntities: 1,
    removeWidows: 0
  }).forEach(opt => {
    t.is(
      det(`minutes ${rawReplacementMark} we`, opt).res,
      "minutes &mdash; we",
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`06.25 - ${`\u001b[${34}m${`opts.convertApostrophes`}\u001b[${39}m`} - replacement marks`, t => {
  mixer({
    convertEntities: 1,
    removeWidows: 1
  }).forEach(opt => {
    t.is(
      det(`minutes ${rawReplacementMark} we`, opt).res,
      "minutes&nbsp;&mdash; we",
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`06.26 - ${`\u001b[${34}m${`opts.convertApostrophes`}\u001b[${39}m`} - replacement marks`, t => {
  mixer({
    convertEntities: 0,
    removeWidows: 1
  }).forEach(opt => {
    t.is(
      det(`minutes ${rawReplacementMark} we`, opt).res,
      `minutes${rawNbsp}${rawMDash} we`,
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`06.27 - ${`\u001b[${34}m${`opts.convertApostrophes`}\u001b[${39}m`} - replacement marks`, t => {
  mixer({
    convertEntities: 0,
    removeWidows: 0
  }).forEach(opt => {
    t.is(
      det(`minutes ${rawReplacementMark} we`, opt).res,
      `minutes ${rawMDash} we`,
      JSON.stringify(opt, null, 4)
    );
  });
});

// 07. numeric entities
// -----------------------------------------------------------------------------

test(`07.01 - ${`\u001b[${35}m${`numeric entities`}\u001b[${39}m`} - numeric entities`, t => {
  t.is(
    det(`aaaaaaa aaaaaaaaa aaaaaaaaaa&#160;bbbb`).res,
    "aaaaaaa aaaaaaaaa aaaaaaaaaa&nbsp;bbbb"
  );
});

test(`07.02 - ${`\u001b[${35}m${`numeric entities`}\u001b[${39}m`} - named entities`, t => {
  t.is(
    det(`aaaaaaa aaaaaaaaa aaaaaaaaaa&nbsp;bbbb`).res,
    "aaaaaaa aaaaaaaaa aaaaaaaaaa&nbsp;bbbb"
  );
});

test(`07.03 - ${`\u001b[${35}m${`numeric entities`}\u001b[${39}m`} - raw characters`, t => {
  t.is(
    det(`aaaaaaa aaaaaaaaa aaaaaaaaa${rawNbsp}bbbb`).res,
    "aaaaaaa aaaaaaaaa aaaaaaaaa&nbsp;bbbb"
  );
});

// 08. erroneous entities
// -----------------------------------------------------------------------------

test(`08.01 - ${`\u001b[${35}m${`erroneous entities`}\u001b[${39}m`} - potentially clashing incomplete named entities - precaution &fnof; (\\u0192)`, t => {
  t.is(det(`aaa&fnof;aaa`).res, "aaa&fnof;aaa");
});

test(`08.02 - ${`\u001b[${35}m${`erroneous entities`}\u001b[${39}m`} - potentially clashing incomplete named entities`, t => {
  t.is(det(`aaa&thinsp;aaa`).res, "aaa&thinsp;aaa");
});

test(`08.03 - ${`\u001b[${35}m${`erroneous entities`}\u001b[${39}m`} - potentially clashing incomplete named entities`, t => {
  t.is(det(`aaa&zwnjaaa`).res, "aaa&zwnj;aaa");
});

test(`08.04 - ${`\u001b[${35}m${`erroneous entities`}\u001b[${39}m`} - potentially clashing incomplete named entities`, t => {
  t.is(
    det(`aaa&pi&piv&pi&pivaaa`, {
      convertEntities: false
    }).res,
    "aaa\u03C0\u03D6\u03C0\u03D6aaa"
  );
});

test(`08.05 - ${`\u001b[${35}m${`erroneous entities`}\u001b[${39}m`} - potentially clashing incomplete named entities`, t => {
  t.is(
    det(`aaa&pi&piv&pi&pivaaa`, {
      convertEntities: true,
      dontEncodeNonLatin: false
    }).res,
    "aaa&pi;&piv;&pi;&piv;aaa"
  );
});

test(`08.06 - ${`\u001b[${35}m${`erroneous entities`}\u001b[${39}m`} - precaution against false positives`, t => {
  mixer({
    convertEntities: 0,
    removeWidows: 1
  }).forEach(opt => {
    t.is(
      det(
        "Zzz times; Zzzz or; Zzzzzz real; Zzzz alpha; Zzzzz exist; Zzzzz euro;",
        opt
      ).res,
      `Zzz times; Zzzz or; Zzzzzz real; Zzzz alpha; Zzzzz exist; Zzzzz${rawNbsp}euro;`
    );
  });
});

test(`08.07 - ${`\u001b[${35}m${`erroneous entities`}\u001b[${39}m`} - potentially clashing incomplete named entities`, t => {
  t.is(
    det(`aaa&sup&sup1&sup&sup2&sup&sup3&sup&supeaaa`).res,
    "aaa&sup;&sup1;&sup;&sup2;&sup;&sup3;&sup;&supe;aaa"
  );
});

test(`08.08 - ${`\u001b[${35}m${`erroneous entities`}\u001b[${39}m`} - potentially clashing incomplete named entities`, t => {
  t.is(
    det(`aaa&theta&thetasym&theta&thetasymaaa`, {
      convertEntities: false
    }).res,
    he.decode("aaa&theta;&thetasym;&theta;&thetasym;aaa")
  );
});

test(`08.09 - ${`\u001b[${35}m${`erroneous entities`}\u001b[${39}m`} - potentially clashing incomplete named entities`, t => {
  t.is(det(`aaa&ang&angst&ang&angstaaa`).res, "aaa&ang;&#xC5;&ang;&#xC5;aaa");
});

// 09. sanity checks
// -----------------------------------------------------------------------------

test(`09.01 - ${`\u001b[${90}m${`sanity checks`}\u001b[${39}m`} - checking if entity references are left intact`, t => {
  t.is(det(`aaa&lt;bbb ccc`).res, "aaa&lt;bbb ccc");
});

test(`09.02 - ${`\u001b[${90}m${`sanity checks`}\u001b[${39}m`} - checking if entity references are left intact`, t => {
  t.is(
    det(`aaa&lt;bbb ccc`, {
      convertEntities: true
    }).res,
    "aaa&lt;bbb ccc"
  );
});

test(`09.03 - ${`\u001b[${90}m${`sanity checks`}\u001b[${39}m`} - checking if entity references are left intact`, t => {
  t.is(
    det(`aaa&lt;bbb ccc`, {
      convertEntities: false
    }).res,
    "aaa<bbb ccc"
  );
});

test(`09.04 - ${`\u001b[${90}m${`sanity checks`}\u001b[${39}m`} - checking if entity references are left intact`, t => {
  t.is(det(`aaa<bbb ccc`).res, "aaa&lt;bbb ccc");
});

test(`09.05 - ${`\u001b[${90}m${`sanity checks`}\u001b[${39}m`} - checking if entity references are left intact`, t => {
  t.is(
    det(`aaa<bbb ccc`, { convertEntities: true }).res,
    "aaa&lt;bbb ccc",
    "76.02"
  );
});

test(`09.06 - ${`\u001b[${90}m${`sanity checks`}\u001b[${39}m`} - checking if entity references are left intact`, t => {
  t.is(
    det(`aaa<bbb ccc`, { convertEntities: false }).res,
    "aaa<bbb ccc",
    "76.03"
  );
});

test(`09.07 - ${`\u001b[${90}m${`sanity checks`}\u001b[${39}m`} - precaution against false positives`, t => {
  mixer({
    removeWidows: 0
  }).forEach(opt => {
    t.is(
      det(
        "Zzz times; Zzzz or; Zzzzzz real; Zzzz alpha; Zzzzz exist; Zzzzz euro;",
        opt
      ).res,
      "Zzz times; Zzzz or; Zzzzzz real; Zzzz alpha; Zzzzz exist; Zzzzz euro;",
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`09.08 - ${`\u001b[${90}m${`sanity checks`}\u001b[${39}m`} - precaution against false positives`, t => {
  mixer({
    convertEntities: 1,
    removeWidows: 1
  }).forEach(opt => {
    t.is(
      det(
        "Zzz times; Zzzz or; Zzzzzz real; Zzzz alpha; Zzzzz exist; Zzzzz euro;",
        opt
      ).res,
      "Zzz times; Zzzz or; Zzzzzz real; Zzzz alpha; Zzzzz exist; Zzzzz&nbsp;euro;",
      JSON.stringify(opt, null, 4)
    );
  });
});

// ============================================================================
// 10. some HTML entitities can't be sent in named entities format, only in numeric
// ============================================================================

test(`10.01 - email-not-friendly entities`, t => {
  t.is(det(`&Breve;`, { convertEntities: 1 }).res, "&#x2D8;");
});

test(`10.02 - email-not-friendly entities`, t => {
  t.is(det(`&Breve;`, { convertEntities: 0 }).res, "\u02D8");
});

test(`10.03 - numeric entities`, t => {
  mixer({
    convertEntities: 1
  }).forEach(opt => {
    t.is(
      det(
        "&Breve;&Backslash;&Cacute;&CircleDot;&DD;&Diamond;&DownArrow;&LT;&RightArrow;&SmallCircle;&Uarr;&Verbar;&angst;&zdot; a",
        opt
      ).res,
      "&#x2D8;&#x2216;&#x106;&#x2299;&#x2145;&#x22C4;&darr;&lt;&rarr;&#x2218;&#x219F;&#x2016;&#xC5;&#x17C; a",
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`10.04 - wrong named entity QUOT into quot`, t => {
  mixer({
    convertEntities: 1,
    convertApostrophes: 0
  }).forEach(opt => {
    t.is(det(`&QUOT;`, opt).res, "&quot;", JSON.stringify(opt, null, 4));
  });
});

test(`10.05 - enforce spaces after semicolons - semicol between letters, addMissingSpaces=on`, t => {
  mixer({
    addMissingSpaces: 1
  }).forEach(opt => {
    t.is(det(`aaa;aaa`, opt).res, "aaa; aaa", JSON.stringify(opt, null, 4));
  });
});

test(`10.06 - enforce spaces after semicolons - semicol between letters, addMissingSpaces=off`, t => {
  mixer({
    addMissingSpaces: 0
  }).forEach(opt => {
    t.is(det(`aaa;aaa`, opt).res, "aaa;aaa", JSON.stringify(opt, null, 4));
  });
});

test(`10.07 - enforce spaces after semicolons - semicol between letters, ends with semicol`, t => {
  mixer({
    addMissingSpaces: 1
  }).forEach(opt => {
    t.is(det(`aaa;aaa;`, opt).res, "aaa; aaa;", JSON.stringify(opt, null, 4));
  });
});

test(`10.08 - enforce spaces after semicolons - semicol between letters, ends with semicol`, t => {
  mixer({
    addMissingSpaces: 0
  }).forEach(opt => {
    t.is(det(`aaa;aaa;`, opt).res, "aaa;aaa;", JSON.stringify(opt, null, 4));
  });
});

test(`10.09 - enforce spaces after semicolons - semicol fixes must not affect HTML entities`, t => {
  mixer({
    convertEntities: 1
  }).forEach(opt => {
    t.is(
      det(`aaa&nbsp;aaa`, opt).res,
      "aaa&nbsp;aaa",
      JSON.stringify(opt, null, 4)
    );
  });
});

test(`10.10 - enforce spaces after semicolons`, t => {
  mixer({
    addMissingSpaces: 1
  }).forEach(opt => {
    t.is(det(`aaa.Aaa`, opt).res, "aaa. Aaa", JSON.stringify(opt, null, 4));
  });
});

test(`10.11 - enforce spaces after semicolons`, t => {
  allCombinations.forEach(opt => {
    t.is(det(`aaa.aaa`, opt).res, "aaa.aaa", JSON.stringify(opt, null, 4));
  });
});