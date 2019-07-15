import isObj from "lodash.isplainobject";
import applySlices from "ranges-apply";
import Slices from "ranges-push";
import { version } from "../package.json";
import { matchRight, matchRightIncl } from "string-match-left-right";
import expand from "string-range-expander";
import { left, right } from "string-left-right";

const isArr = Array.isArray;
const finalIndexesToDelete = new Slices({ limitToBeAddedWhitespace: true });
const defaults = {
  lineLengthLimit: 500,
  removeIndentations: true,
  removeLineBreaks: false,
  reportProgressFunc: null,
  reportProgressFuncFrom: 0,
  reportProgressFuncTo: 100,
  breakToTheLeftOf: [
    "</td",
    "<html",
    "</html",
    "<head",
    "</head",
    "<meta",
    "<link",
    "<table",
    "<script",
    "</script",
    "<!DOCTYPE",
    "<style",
    "</style",
    "<title",
    "<body",
    "@media",
    "</body",
    "<!--[if",
    "<!--<![endif"
  ],
  mindTheInlineTags: [
    "a",
    "abbr",
    "acronym",
    "audio",
    "b",
    "bdi",
    "bdo",
    "big",
    "br",
    "button",
    "canvas",
    "cite",
    "code",
    "data",
    "datalist",
    "del",
    "dfn",
    "em",
    "embed",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "map",
    "mark",
    "meter",
    "noscript",
    "object",
    "output",
    "picture",
    "progress",
    "q",
    "ruby",
    "s",
    "samp",
    "script",
    "select",
    "slot",
    "small",
    "span",
    "strong",
    "sub",
    "sup",
    "svg",
    "template",
    "textarea",
    "time",
    "u",
    "tt",
    "var",
    "video",
    "wbr"
  ]
};

function isStr(something) {
  return typeof something === "string";
}
function existy(x) {
  return x != null;
}
function isLetter(something) {
  return (
    typeof something === "string" &&
    something.toUpperCase() !== something.toLowerCase()
  );
}

function crush(str, originalOpts) {
  const start = Date.now();
  // insurance:
  if (!isStr(str)) {
    if (str === undefined) {
      throw new Error(
        "html-minify-noparse: [THROW_ID_01] the first input argument is completely missing! It should be given as string."
      );
    } else {
      throw new Error(
        `html-minify-noparse: [THROW_ID_02] the first input argument must be string! It was given as "${typeof str}", equal to:\n${JSON.stringify(
          str,
          null,
          4
        )}`
      );
    }
  }

  if (existy(originalOpts) && !isObj(originalOpts)) {
    throw new Error(
      `html-minify-noparse: [THROW_ID_03] the second input argument, options object, should be a plain object but it was given as type ${typeof originalOpts}, equal to ${JSON.stringify(
        originalOpts,
        null,
        4
      )}`
    );
  }

  if (
    originalOpts &&
    isArr(originalOpts.breakToTheLeftOf) &&
    originalOpts.breakToTheLeftOf.length
  ) {
    for (let z = 0, len = originalOpts.breakToTheLeftOf.length; z < len; z++) {
      if (!isStr(originalOpts.breakToTheLeftOf[z])) {
        throw new TypeError(
          `html-minify-noparse: [THROW_ID_05] the opts.breakToTheLeftOf array contains non-string elements! For example, element at index ${z} is of a type "${typeof originalOpts
            .breakToTheLeftOf[z]}" and is equal to:\n${JSON.stringify(
            originalOpts.breakToTheLeftOf[z],
            null,
            4
          )}`
        );
      }
    }
  }

  const opts = Object.assign({}, defaults, originalOpts);
  // checkTypes(opts, defaults, {
  //   msg: "html-minify-noparse: [THROW_ID_04*]",
  //   schema: {
  //     reportProgressFunc: ["false", "null", "function"],
  //     breakToTheLeftOf: ["false", "null", "array"]
  //   }
  // });

  // normalize the values to they are always arrays (albeit sometimes empty):
  if (opts.breakToTheLeftOf === false || opts.breakToTheLeftOf === null) {
    opts.breakToTheLeftOf = [];
  }

  let breakToTheLeftOfFirstLetters = "";
  if (isArr(opts.breakToTheLeftOf) && opts.breakToTheLeftOf.length) {
    for (let i = 0, len = opts.breakToTheLeftOf.length; i < len; i++) {
      if (
        opts.breakToTheLeftOf[i].length &&
        !breakToTheLeftOfFirstLetters.includes(opts.breakToTheLeftOf[i][0])
      ) {
        breakToTheLeftOfFirstLetters += opts.breakToTheLeftOf[i][0];
      }
    }
  }

  // console.log(
  //   `0186 ${`\u001b[${33}m${`breakToTheLeftOfFirstLetters`}\u001b[${39}m`} = ${JSON.stringify(
  //     breakToTheLeftOfFirstLetters,
  //     null,
  //     4
  //   )}`
  // );
  //
  // console.log("\n");
  // console.log(
  //   `0195 ${`\u001b[${33}m${`██ ██ ██`}\u001b[${39}m`} ${`\u001b[${33}m${`opts`}\u001b[${39}m`} = ${JSON.stringify(
  //     opts,
  //     null,
  //     4
  //   )}`
  // );

  let lastLinebreak = null;
  let whitespaceStartedAt = null;
  let nonWhitespaceCharMet = false;
  let countCharactersPerLine = 0;
  let withinStyleTag = false;
  let withinInlineStyle = null;
  let styleCommentStartedAt = null;
  let scriptStartedAt = null;
  let preStartedAt = null;
  let codeStartedAt = null;

  // main do nothing switch, used to skip chunks of code and perform no action
  let doNothing = false;

  // we use staging "from" and "to" to preemptively mark the chunks
  // of whitespace that will be either: a) replaced with a space; or
  // b) replaced with linebreak. If opts.removeLineBreaks is on,
  // if we need to break where the particular whitespace chunk is
  // located, we replace it with line break. Otherwise, if
  // the next chunk of characters that follows it fits on one line,
  // we replace it with a single space.
  let stageFrom = null;
  let stageTo = null;
  let stageAdd = null;

  let tagName = null;
  let tagNameStartsAt = null;

  const CHARS_BREAK_ON_THE_RIGHT_OF_THEM = [">", "}", ";"];
  const CHARS_BREAK_ON_THE_LEFT_OF_THEM = ["<"];
  const CHARS_DONT_BREAK_ON_THE_LEFT_OF_THEM = ["!"];
  const DELETE_TIGHTLY_IF_ON_LEFT_IS = [">"];
  const DELETE_TIGHTLY_IF_ON_RIGHT_IS = ["<"];

  const set = ["{", "}", ",", ":", ";", "<", ">", "~", "+"];
  const DELETE_IN_STYLE_TIGHTLY_IF_ON_LEFT_IS = set;
  const DELETE_IN_STYLE_TIGHTLY_IF_ON_RIGHT_IS = set;

  // the first non-whitespace character turns this flag off:
  let beginningOfAFile = true;
  // it will be used to trim start of the file.

  const len = str.length;
  const midLen = Math.floor(len / 2);
  const leavePercForLastStage = 0.01; // in range of [0, 1]

  // ceil - total range which is allocated to the main processing
  let ceil;
  if (opts.reportProgressFunc) {
    ceil = Math.floor(
      opts.reportProgressFuncTo -
        (opts.reportProgressFuncTo - opts.reportProgressFuncFrom) *
          leavePercForLastStage -
        opts.reportProgressFuncFrom
    );
    console.log(
      `0258 ${`\u001b[${33}m${`ceil`}\u001b[${39}m`} = ${JSON.stringify(
        ceil,
        null,
        4
      )}`
    );
  }

  // one more round to collapse the whitespace to:
  // 1. Tackle indentations
  // 2. Remove excessive whitespace between strings on each line (not touching indentations)

  // progress-wise, 98% will be allocated to loop, rest 2% - to range applies and
  // final return clauses

  let currentPercentageDone;
  let lastPercentage = 0;

  if (len) {
    for (let i = 0; i < len; i++) {
      //
      //
      //
      //
      //                    TOP
      //
      //
      //
      //

      // Logging:
      // ███████████████████████████████████████
      console.log(
        `\n\u001b[${36}m${`===============================`}\u001b[${39}m \u001b[${35}m${`str[ ${i} ] = ${
          str[i].trim().length ? str[i] : JSON.stringify(str[i], null, 0)
        }`}\u001b[${39}m \u001b[${36}m${`===============================`}\u001b[${39}m\n`
      );

      // Report the progress. We'll allocate 98% of the progress bar to this stage
      if (opts.reportProgressFunc) {
        if (len > 1000 && len < 2000) {
          if (i === midLen) {
            opts.reportProgressFunc(
              Math.floor(
                (opts.reportProgressFuncTo - opts.reportProgressFuncFrom) / 2
              )
            );
          }
        } else if (len >= 2000) {
          // defaults:
          // opts.reportProgressFuncFrom = 0
          // opts.reportProgressFuncTo = 100

          currentPercentageDone =
            opts.reportProgressFuncFrom + Math.floor((i / len) * ceil);

          if (currentPercentageDone !== lastPercentage) {
            lastPercentage = currentPercentageDone;
            opts.reportProgressFunc(currentPercentageDone);
          }
        }
      }

      // turn off doNothing if marker passed
      // ███████████████████████████████████████

      if (Number.isInteger(doNothing) && i >= doNothing) {
        doNothing = false;
        console.log(`0326 TURN OFF doNothing`);
      }

      // catch state being within <pre><code>...</code></pre> chunk
      // ███████████████████████████████████████

      // activation:
      if (
        !doNothing &&
        preStartedAt !== null &&
        codeStartedAt !== null &&
        i >= preStartedAt &&
        i >= codeStartedAt
      ) {
        doNothing = true;
        console.log(
          `0342 SET ${`\u001b[${33}m${`doNothing`}\u001b[${39}m`} = true, because we are within code-pre block`
        );
      }

      // catch </code...>
      // ███████████████████████████████████████

      if (
        !doNothing &&
        !withinStyleTag &&
        codeStartedAt !== null &&
        str[i] === "<" &&
        str[i + 1] === "/" &&
        str[i + 2] === "c" &&
        str[i + 3] === "o" &&
        str[i + 4] === "d" &&
        str[i + 5] === "e" &&
        !isLetter(str[i + 6])
      ) {
        console.log(`0361 CLOSING CODE TAG CAUGHT`);
        if (preStartedAt !== null && doNothing) {
          doNothing = false;
        }
        codeStartedAt = null;
        console.log(
          `0367 SET ${`\u001b[${33}m${`preStartedAt`}\u001b[${39}m`} = null`
        );
      }

      // catch <code...>
      // ███████████████████████████████████████

      if (
        !doNothing &&
        !withinStyleTag &&
        codeStartedAt === null &&
        str[i] === "<" &&
        str[i + 1] === "c" &&
        str[i + 2] === "o" &&
        str[i + 3] === "d" &&
        str[i + 4] === "e" &&
        !isLetter(str[i + 5])
      ) {
        console.log(`0385 OPENING CODE TAG CAUGHT`);
        if (str[i + 5] === ">") {
          codeStartedAt = i + 6;
          console.log(
            `0389 SET ${`\u001b[${33}m${`codeStartedAt`}\u001b[${39}m`} = ${codeStartedAt}`
          );
        } else {
          // march forward and find where is the closing bracket
          console.log(`0393 \u001b[${36}m${`march forward`}\u001b[${39}m`);
          for (let y = i + 5; y < len; y++) {
            console.log(
              `\u001b[${36}m${`str[${y}]=${JSON.stringify(
                str[y],
                null,
                0
              )}`}\u001b[${39}m`
            );
            if (str[y] === ">") {
              codeStartedAt = y + 1;
              i = y;
              console.log(
                `0406 SET ${`\u001b[${33}m${`codeStartedAt`}\u001b[${39}m`} = ${JSON.stringify(
                  codeStartedAt,
                  null,
                  4
                )}, ${`\u001b[${33}m${`i`}\u001b[${39}m`} = ${JSON.stringify(
                  y,
                  null,
                  0
                )}, then BREAK`
              );
              break;
            }
          }
        }
      }

      // catch </pre...>
      // ███████████████████████████████████████

      if (
        !doNothing &&
        !withinStyleTag &&
        preStartedAt !== null &&
        str[i] === "<" &&
        str[i + 1] === "/" &&
        str[i + 2] === "p" &&
        str[i + 3] === "r" &&
        str[i + 4] === "e" &&
        !isLetter(str[i + 5])
      ) {
        console.log(`0436 CLOSING PRE TAG CAUGHT`);
        preStartedAt = null;
        console.log(
          `0439 SET ${`\u001b[${33}m${`preStartedAt`}\u001b[${39}m`} = null`
        );
      }

      // catch <pre...>
      // ███████████████████████████████████████

      if (
        !doNothing &&
        !withinStyleTag &&
        preStartedAt === null &&
        str[i] === "<" &&
        str[i + 1] === "p" &&
        str[i + 2] === "r" &&
        str[i + 3] === "e" &&
        !isLetter(str[i + 4])
      ) {
        console.log(`0456 OPENING PRE TAG CAUGHT`);
        if (str[i + 4] === ">") {
          preStartedAt = i + 5;
          console.log(
            `0460 SET ${`\u001b[${33}m${`preStartedAt`}\u001b[${39}m`} = ${preStartedAt}`
          );
        } else {
          // march forward and find where is the closing bracket
          console.log(`0464 \u001b[${36}m${`march forward`}\u001b[${39}m`);
          for (let y = i + 4; y < len; y++) {
            console.log(
              `\u001b[${36}m${`str[${y}]=${JSON.stringify(
                str[y],
                null,
                0
              )}`}\u001b[${39}m`
            );
            if (str[y] === ">") {
              preStartedAt = y + 1;
              i = y;
              console.log(
                `0477 SET ${`\u001b[${33}m${`preStartedAt`}\u001b[${39}m`} = ${JSON.stringify(
                  preStartedAt,
                  null,
                  4
                )}, ${`\u001b[${33}m${`i`}\u001b[${39}m`} = ${JSON.stringify(
                  y,
                  null,
                  0
                )}, then BREAK`
              );
              break;
            }
          }
        }
      }

      // catch ending of CDATA, ]]>
      // ███████████████████████████████████████

      if (str[i] === ">" && str[i - 1] === "]" && str[i - 2] === "]") {
        console.log(`0497 ENDING OF A SCRIPT TAG CAUGHT`);
        if (doNothing) {
          doNothing = false;
          console.log(
            `0501 SET ${`\u001b[${33}m${`doNothing`}\u001b[${39}m`} = false, then CONTINUE`
          );
          continue;
        }
      }

      // catch start of <![CDATA[
      // ███████████████████████████████████████

      if (
        !doNothing &&
        str[i] === "<" &&
        str[i + 1] === "!" &&
        str[i + 2] === "[" &&
        str[i + 3] === "C" &&
        str[i + 4] === "D" &&
        str[i + 5] === "A" &&
        str[i + 6] === "T" &&
        str[i + 7] === "A" &&
        str[i + 8] === "["
      ) {
        console.log(`0522 STARTING OF <![CDATA[`);
        doNothing = true;
        whitespaceStartedAt = null;
        console.log(
          `0526 SET ${`\u001b[${33}m${`doNothing`}\u001b[${39}m`} = true, RESET ${`\u001b[${33}m${`whitespaceStartedAt`}\u001b[${39}m`} = null`
        );
      }

      // catch ending of </script...
      // ███████████████████████████████████████

      if (
        scriptStartedAt !== null &&
        str[i] === "<" &&
        str[i + 1] === "/" &&
        str[i + 2] === "s" &&
        str[i + 3] === "c" &&
        str[i + 4] === "r" &&
        str[i + 5] === "i" &&
        str[i + 6] === "p" &&
        str[i + 7] === "t" &&
        !isLetter(str[i + 8])
      ) {
        console.log(`0545 ENDING OF A SCRIPT TAG CAUGHT`);
        // 1. if there is a line break, chunk of whitespace and </script>,
        // delete that chunk of whitespace, leave line break.
        // If there's non-whitespace character, chunk of whitespace and </script>,
        // delete that chunk of whitespace.
        // Basically, traverse backwards from "<" of "</script>", stop either
        // at first line break or non-whitespace character.

        if (
          (opts.removeIndentations || opts.removeLineBreaks) &&
          i > 0 &&
          str[i - 1] &&
          !str[i - 1].trim().length
        ) {
          // march backwards
          console.log(`\u001b[${36}m${`0560 march backwards`}\u001b[${39}m`);
          for (let y = i; y--; ) {
            console.log(
              `\u001b[${36}m${`str[${y}] = ${JSON.stringify(
                str[y],
                null,
                0
              )}`}\u001b[${39}m`
            );
            if (str[y] === "\n" || str[y] === "\r" || str[y].trim().length) {
              if (y + 1 < i) {
                console.log(`0571 PUSH [${y + 1}, ${i}]`);
                finalIndexesToDelete.push(y + 1, i);
              }
              console.log(`\u001b[${36}m${`BREAK`}\u001b[${39}m`);
              break;
            }
          }
        }

        // 2.
        scriptStartedAt = null;
        doNothing = false;
        console.log(
          `0584 SET ${`\u001b[${33}m${`scriptStartedAt`}\u001b[${39}m`} = null, ${`\u001b[${33}m${`doNothing`}\u001b[${39}m`} = false`
        );
        i += 8;
        console.log(`OFFSET i now = ${i}, then CONTINUE`);
        continue;
      }

      // catch start of <script...
      // ███████████████████████████████████████

      if (
        !doNothing &&
        !withinStyleTag &&
        str[i] === "<" &&
        str[i + 1] === "s" &&
        str[i + 2] === "c" &&
        str[i + 3] === "r" &&
        str[i + 4] === "i" &&
        str[i + 5] === "p" &&
        str[i + 6] === "t" &&
        !isLetter(str[i + 7])
      ) {
        console.log(`0606 STARTING OF A SCRIPT TAG CAUGHT`);
        scriptStartedAt = i;
        doNothing = true;
        let whatToInsert = "";
        if (
          (opts.removeLineBreaks || opts.removeIndentations) &&
          whitespaceStartedAt !== null
        ) {
          if (whitespaceStartedAt > 0) {
            whatToInsert = "\n";
          }
          finalIndexesToDelete.push(whitespaceStartedAt, i, whatToInsert);
          console.log(
            `0619 PUSH [${whitespaceStartedAt + 1}, ${i}, ${JSON.stringify(
              whatToInsert,
              null,
              0
            )}]`
          );
        }

        whitespaceStartedAt = null;
        lastLinebreak = null;
        console.log(
          `0630 SET ${`\u001b[${33}m${`scriptStartedAt`}\u001b[${39}m`} = ${i}, ${`\u001b[${33}m${`scriptStartedAt`}\u001b[${39}m`} = true, RESET ${`\u001b[${33}m${`whitespaceStartedAt`}\u001b[${39}m`} = null; ${`\u001b[${33}m${`lastLinebreak`}\u001b[${39}m`} = null`
        );
      }

      //
      //
      //
      //
      //
      //
      //
      //
      //             MIDDLE
      //
      //
      //
      //
      //
      //
      //
      //

      // catch ending of the tag's name
      // ███████████████████████████████████████
      if (
        tagNameStartsAt !== null &&
        tagName === null &&
        !/\w/.test(str[i]) // not a letter
      ) {
        tagName = str.slice(tagNameStartsAt, i);
        console.log(
          `0661 SET ${`\u001b[${33}m${`tagName`}\u001b[${39}m`} = ${tagName}`
        );
      }

      // catch tag's opening bracket
      // ███████████████████████████████████████
      if (
        !doNothing &&
        !withinStyleTag &&
        !withinInlineStyle &&
        str[i - 1] === "<" &&
        /\w/.test(str[i]) &&
        tagNameStartsAt === null
      ) {
        tagNameStartsAt = i;
        console.log(`0676 SET tagNameStartsAt = ${tagNameStartsAt}`);
      }

      // catch the end of CSS comments
      // ███████████████████████████████████████

      if (
        !doNothing &&
        (withinStyleTag || withinInlineStyle) &&
        styleCommentStartedAt !== null &&
        str[i] === "*" &&
        str[i + 1] === "/"
      ) {
        console.log(`0689 ENDING OF A CSS COMMENT CAUGHT`);
        // stage:
        [stageFrom, stageTo] = expand({
          str,
          from: styleCommentStartedAt,
          to: i + 2,
          ifLeftSideIncludesThisThenCropTightly:
            DELETE_IN_STYLE_TIGHTLY_IF_ON_LEFT_IS || "",
          ifRightSideIncludesThisThenCropTightly:
            DELETE_IN_STYLE_TIGHTLY_IF_ON_RIGHT_IS || ""
        });
        console.log(
          `0701 EXPANDED TO ${JSON.stringify([stageFrom, stageTo], null, 0)}`
        );

        // reset marker:
        styleCommentStartedAt = null;
        console.log(
          `0707 SET ${`\u001b[${33}m${`styleCommentStartedAt`}\u001b[${39}m`} = null`
        );

        if (
          stageFrom != null // &&
          // str[stageTo] === undefined
          // removed 14 May
        ) {
          finalIndexesToDelete.push(stageFrom, stageTo);
          console.log(`0716 PUSH to final [${stageFrom}, ${stageTo}]`);
        } else {
          countCharactersPerLine++;
          console.log(
            `0720 ${`\u001b[${33}m${`countCharactersPerLine++`}\u001b[${39}m`}, now = ${JSON.stringify(
              countCharactersPerLine,
              null,
              4
            )}`
          );
          i++;
        }
        // console.log(`0728 CONTINUE`);
        // continue;

        doNothing = i + 2;
        console.log(`0732 SET doNothing = ${doNothing}`);
      }

      // catch start of CSS comments
      // ███████████████████████████████████████

      if (
        !doNothing &&
        (withinStyleTag || withinInlineStyle) &&
        styleCommentStartedAt === null &&
        str[i] === "/" &&
        str[i + 1] === "*"
      ) {
        console.log(`0745 STARTING OF A CSS COMMENT CAUGHT`);
        styleCommentStartedAt = i;
        console.log(
          `0748 SET ${`\u001b[${33}m${`styleCommentStartedAt`}\u001b[${39}m`} = ${JSON.stringify(
            styleCommentStartedAt,
            null,
            4
          )}`
        );
      }

      // catch style tag
      // ███████████████████████████████████████

      if (
        !doNothing &&
        withinStyleTag &&
        styleCommentStartedAt === null &&
        str[i] === "<" &&
        str[i + 1] === "/" &&
        str[i + 2] === "s" &&
        str[i + 3] === "t" &&
        str[i + 4] === "y" &&
        str[i + 5] === "l" &&
        str[i + 6] === "e" &&
        !isLetter(str[i + 7])
      ) {
        withinStyleTag = false;
        console.log(
          `0774 SET ${`\u001b[${33}m${`withinStyleTag`}\u001b[${39}m`} = false`
        );
      } else if (
        !doNothing &&
        !withinStyleTag &&
        styleCommentStartedAt === null &&
        str[i] === "<" &&
        str[i + 1] === "s" &&
        str[i + 2] === "t" &&
        str[i + 3] === "y" &&
        str[i + 4] === "l" &&
        str[i + 5] === "e" &&
        !isLetter(str[i + 6])
      ) {
        withinStyleTag = true;
        console.log(
          `0790 SET ${`\u001b[${33}m${`withinStyleTag`}\u001b[${39}m`} = true`
        );

        // if opts.breakToTheLeftOf have "<style" among them, break to the
        // right of this tag as well
        if (
          (opts.removeLineBreaks || opts.removeIndentations) &&
          opts.breakToTheLeftOf.includes("<style") &&
          str.slice(i + 6, i + 23) === ` type="text/css">` &&
          str[i + 24]
        ) {
          finalIndexesToDelete.push(i + 23, i + 23, "\n");
          console.log(`0802 PUSH [${i + 23}, ${i + 23}, "\n"]`);
        }
      }

      // catch start of inline styles
      // ███████████████████████████████████████

      if (
        !doNothing &&
        !withinInlineStyle &&
        `"'`.includes(str[i]) &&
        str[i - 1] === "=" &&
        str[i - 2] === "e" &&
        str[i - 3] === "l" &&
        str[i - 4] === "y" &&
        str[i - 5] === "t" &&
        str[i - 6] === "s"
      ) {
        withinInlineStyle = i;
        console.log(
          `0822 SET ${`\u001b[${33}m${`withinInlineStyle`}\u001b[${39}m`} = ${withinInlineStyle}`
        );
      }

      // catch whitespace
      // ███████████████████████████████████████
      if (!doNothing && !str[i].trim().length) {
        // if whitespace
        if (whitespaceStartedAt === null) {
          whitespaceStartedAt = i;
          console.log(
            `0833 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`whitespaceStartedAt`}\u001b[${39}m`} = ${whitespaceStartedAt}`
          );
        }
      } else if (
        !doNothing &&
        !(
          (withinStyleTag || withinInlineStyle) &&
          styleCommentStartedAt !== null
        )
      ) {
        // catch the ending of a whitespace chunk
        // console.log(`0844`);
        if (whitespaceStartedAt !== null) {
          console.log(`0846`);
          if (opts.removeLineBreaks) {
            countCharactersPerLine++;
            console.log(
              `0850 ${`\u001b[${32}m${`INCREMENT`}\u001b[${39}m`} ${`\u001b[${33}m${`countCharactersPerLine`}\u001b[${39}m`} now = ${countCharactersPerLine}`
            );
          }

          if (beginningOfAFile) {
            beginningOfAFile = false;
            if (opts.removeIndentations || opts.removeLineBreaks) {
              finalIndexesToDelete.push(0, i);
              console.log(
                `0859 ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [0, ${i}]`
              );
            }
          } else {
            console.log("0863 not beginning of a file");
            // so it's not beginning of a file

            // this is the most important area of the program - catching normal
            // whitespace chunks

            // ===================================================================
            // ██ CASE 1. Remove indentations only.
            if (opts.removeIndentations && !opts.removeLineBreaks) {
              console.log("0872 inside CASE 1");
              if (
                !nonWhitespaceCharMet &&
                lastLinebreak !== null &&
                i > lastLinebreak
              ) {
                finalIndexesToDelete.push(lastLinebreak + 1, i);
                console.log(
                  `0880 ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${lastLinebreak +
                    1}, ${i}]`
                );
              } else if (whitespaceStartedAt + 1 < i) {
                // we'll try to recycle some spaces, either at the
                // beginning (preferable) or ending (at least) of the
                // whitespace chunk, instead of wiping whole whitespace
                // chunk and adding single space again.
                if (str[whitespaceStartedAt] === " ") {
                  finalIndexesToDelete.push(whitespaceStartedAt + 1, i);
                  console.log(`0890 PUSH [${whitespaceStartedAt + 1}, ${i}]`);
                } else if (str[i - 1] === " ") {
                  finalIndexesToDelete.push(whitespaceStartedAt, i - 1);
                  console.log(`0893 PUSH [${whitespaceStartedAt}, ${i - 1}]`);
                } else {
                  finalIndexesToDelete.push(whitespaceStartedAt, i, " ");
                  console.log(`0896 PUSH [${whitespaceStartedAt}, ${i}, " "]`);
                }
              }
            }

            // ===================================================================
            // ██ CASE 2. Remove linebreaks (includes indentation removal by definition).
            if (opts.removeLineBreaks || withinInlineStyle) {
              console.log("0904 inside CASE 2");
              //
              // ██ CASE 2-1 - special break points from opts.breakToTheLeftOf

              if (
                breakToTheLeftOfFirstLetters.length &&
                breakToTheLeftOfFirstLetters.includes(str[i]) &&
                matchRightIncl(str, i, opts.breakToTheLeftOf)
              ) {
                console.log("0913 inside CASE 2-1");
                console.log(
                  `0915 \u001b[${36}m${`██`}\u001b[${39}m line break removal section`
                );

                // maybe there was just single line break?
                if (!(str[i - 1] === "\n" && whitespaceStartedAt === i - 1)) {
                  console.log(
                    `0921 PUSH [${whitespaceStartedAt}, ${i}, "\\n"]`
                  );
                  finalIndexesToDelete.push(whitespaceStartedAt, i, "\n");
                }
                stageFrom = null;
                stageTo = null;
                stageAdd = null;
                whitespaceStartedAt = null;
                countCharactersPerLine = 1;
                console.log(
                  `0931 RESET all ${`\u001b[${33}m${`stage*`}\u001b[${39}m`} and ${`\u001b[${33}m${`whitespaceStartedAt`}\u001b[${39}m`} and ${`\u001b[${33}m${`count`}\u001b[${39}m`}`
                );
                console.log(`0933 CONTINUE`);
                continue;
              }

              // ██ CASE 2-2 - rest of whitespace chunk removal clauses

              console.log("0939 inside CASE 2-2");
              let whatToAdd = " ";

              if (
                str[i] === "<" &&
                matchRight(str, i, opts.mindTheInlineTags, {
                  cb: nextChar => !nextChar || !/\w/.test(nextChar) // not a letter
                })
              ) {
                // nothing
                console.log(`0949 do nothing`);
              } else if (
                (str[whitespaceStartedAt - 1] &&
                  DELETE_TIGHTLY_IF_ON_LEFT_IS.includes(
                    str[whitespaceStartedAt - 1]
                  ) &&
                  DELETE_TIGHTLY_IF_ON_RIGHT_IS.includes(str[i])) ||
                ((withinStyleTag || withinInlineStyle) &&
                  styleCommentStartedAt === null &&
                  (DELETE_IN_STYLE_TIGHTLY_IF_ON_LEFT_IS.includes(
                    str[whitespaceStartedAt - 1]
                  ) ||
                    DELETE_IN_STYLE_TIGHTLY_IF_ON_RIGHT_IS.includes(str[i]))) ||
                (str[i] === "!" &&
                  str[i + 1] === "i" &&
                  str[i + 2] === "m" &&
                  str[i + 3] === "p" &&
                  str[i + 4] === "o" &&
                  str[i + 5] === "r" &&
                  str[i + 6] === "t" &&
                  str[i + 7] === "a" &&
                  str[i + 8] === "n" &&
                  str[i + 9] === "t") ||
                (withinInlineStyle &&
                  (str[whitespaceStartedAt - 1] === "'" ||
                    str[whitespaceStartedAt - 1] === '"')) ||
                (str[whitespaceStartedAt - 1] === "}" &&
                  str[i] === "<" &&
                  str[i + 1] === "/" &&
                  str[i + 2] === "s" &&
                  str[i + 3] === "t" &&
                  str[i + 4] === "y" &&
                  str[i + 5] === "l" &&
                  str[i + 6] === "e") ||
                str[i] === ">" ||
                (str[i] === "/" && str[right(str, i)] === ">")
              ) {
                whatToAdd = "";
              }
              console.log(
                `0989 calculated ${`\u001b[${33}m${`whatToAdd`}\u001b[${39}m`} = ${JSON.stringify(
                  whatToAdd,
                  null,
                  0
                )}`
              );
              if (whatToAdd && whatToAdd.length) {
                countCharactersPerLine++;
                console.log(
                  `0998 ${`\u001b[${33}m${`countCharactersPerLine`}\u001b[${39}m`}++ now = ${countCharactersPerLine}`
                );
              }

              // TWO CASES:
              if (!opts.lineLengthLimit) {
                console.log(`\u001b[${35}m${`1004: 2-1`}\u001b[${39}m`);
                console.log("1005: !opts.lineLengthLimit");
                // 2-1: Line-length limiting is off (easy)
                // We skip the stage part, the whitespace chunks to straight to
                // finalIndexesToDelete ranges array.

                // but ensure that we're not replacing a single space with a single space
                if (
                  !(
                    i === whitespaceStartedAt + 1 &&
                    // str[whitespaceStartedAt] === " " &&
                    whatToAdd === " "
                  )
                ) {
                  finalIndexesToDelete.push(whitespaceStartedAt, i, whatToAdd);
                  console.log(
                    `1020 ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${whitespaceStartedAt}, ${i}, ${JSON.stringify(
                      whatToAdd,
                      null,
                      0
                    )}]`
                  );
                }
              } else {
                console.log(`\u001b[${35}m${`1028: 2-2`}\u001b[${39}m`);
                console.log(
                  `1030: 2-2 - opts.lineLengthLimit; ${`\u001b[${33}m${`LIMIT `}\u001b[${39}m`} = ${`\u001b[${35}m${
                    opts.lineLengthLimit
                  }\u001b[${39}m`}; ${`\u001b[${33}m${`COUNT`}\u001b[${39}m`} = ${`\u001b[${35}m${countCharactersPerLine}\u001b[${39}m`}`
                );
                // 2-2: Line-length limiting is on (not that easy)
                // maybe we are already beyond the limit?
                if (
                  countCharactersPerLine >= opts.lineLengthLimit ||
                  !str[i + 1] ||
                  str[i] === ">" ||
                  (str[i] === "/" && str[right(str, i)] === ">")
                ) {
                  console.log(`\u001b[${35}m${`1042: 2-2-1`}\u001b[${39}m`);
                  console.log(
                    `1044: ${`\u001b[${33}m${`countCharactersPerLine`}\u001b[${39}m`}(${countCharactersPerLine}) >= ${`\u001b[${33}m${`opts.lineLengthLimit`}\u001b[${39}m`}(${
                      opts.lineLengthLimit
                    })`
                  );

                  if (
                    countCharactersPerLine > opts.lineLengthLimit ||
                    (countCharactersPerLine === opts.lineLengthLimit &&
                      str[i + 1] &&
                      str[i + 1].trim().length &&
                      !CHARS_BREAK_ON_THE_RIGHT_OF_THEM.includes(str[i]) &&
                      !CHARS_BREAK_ON_THE_LEFT_OF_THEM.includes(str[i + 1]))
                  ) {
                    whatToAdd = "\n";
                    console.log(`1058 SET whatToAdd = "\\n"`);
                    countCharactersPerLine = 1;
                    console.log(`1060 RESET countCharactersPerLine = 0`);
                  }

                  // replace the whitespace only in two cases:
                  // 1) if line length limit would otherwise be exceeded
                  // 2) if this replacement reduces the file length. For example,
                  // don't replace the linebreak with a space. But do delete
                  // linebreak like it happens between tags.
                  if (
                    countCharactersPerLine > opts.lineLengthLimit ||
                    !(whatToAdd === " " && i === whitespaceStartedAt + 1)
                  ) {
                    finalIndexesToDelete.push(
                      whitespaceStartedAt,
                      i,
                      whatToAdd
                    );
                    console.log(
                      `1078 ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${whitespaceStartedAt}, ${i}, ${JSON.stringify(
                        whatToAdd,
                        null,
                        0
                      )}]`
                    );
                  }
                  stageFrom = null;
                  stageTo = null;
                  stageAdd = null;
                  console.log(
                    `1089 ${`\u001b[${32}m${`RESET`}\u001b[${39}m`} all stage* vars`
                  );
                } else if (
                  stageFrom === null ||
                  whitespaceStartedAt < stageFrom
                ) {
                  // only submit the range if it's bigger
                  console.log(`\u001b[${35}m${`1096: 2-2-2`}\u001b[${39}m`);
                  console.log(
                    `1098: ${`\u001b[${33}m${`countCharactersPerLine`}\u001b[${39}m`}(${countCharactersPerLine}) <= ${`\u001b[${33}m${`opts.lineLengthLimit`}\u001b[${39}m`}(${
                      opts.lineLengthLimit
                    })`
                  );
                  stageFrom = whitespaceStartedAt;
                  stageTo = i;
                  stageAdd = whatToAdd;
                  console.log(
                    `1106 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} stageFrom = ${stageFrom}; stageTo = ${stageTo}; stageAdd = "${stageAdd}"`
                  );
                }

                console.log(
                  `1111 stageFrom = ${stageFrom}; whitespaceStartedAt = ${whitespaceStartedAt}`
                );
              }
            }
            // ===================================================================
          }

          // finally, toggle the marker:
          whitespaceStartedAt = null;
          console.log(
            `1121 ${`\u001b[${32}m${`RESET`}\u001b[${39}m`} ${`\u001b[${33}m${`whitespaceStartedAt`}\u001b[${39}m`} = ${whitespaceStartedAt}, (${`\u001b[${33}m${`countCharactersPerLine`}\u001b[${39}m`} = ${countCharactersPerLine})`
          );

          // toggle nonWhitespaceCharMet
          if (!nonWhitespaceCharMet) {
            nonWhitespaceCharMet = true;
            console.log(
              `1128 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`nonWhitespaceCharMet`}\u001b[${39}m`} = ${JSON.stringify(
                nonWhitespaceCharMet,
                null,
                4
              )}`
            );
          }
          // continue;
        } else {
          // 1. case when first character in string is not whitespace:
          if (beginningOfAFile) {
            beginningOfAFile = false;
            console.log(
              `1141 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`beginningOfAFile`}\u001b[${39}m`} = ${JSON.stringify(
                beginningOfAFile,
                null,
                4
              )}`
            );
          }

          // 2. tend count if linebreak removal is on:
          if (opts.removeLineBreaks) {
            // there was no whitespace gap and linebreak removal is on, so just
            // increment the count
            countCharactersPerLine++;
            console.log(
              `1155 ${`\u001b[${32}m${`INCREMENT`}\u001b[${39}m`} ${`\u001b[${33}m${`countCharactersPerLine`}\u001b[${39}m`} now = ${countCharactersPerLine}`
            );
          }
        }

        // ===================================================================
        // ██ EXTRAS:

        // toggle nonWhitespaceCharMet
        if (!nonWhitespaceCharMet) {
          nonWhitespaceCharMet = true;
          console.log(
            `1167 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`nonWhitespaceCharMet`}\u001b[${39}m`} = ${JSON.stringify(
              nonWhitespaceCharMet,
              null,
              4
            )}`
          );
        }
      }

      // catch the characters, suitable for a break
      if (
        !doNothing &&
        !beginningOfAFile &&
        i !== 0 &&
        opts.removeLineBreaks &&
        (opts.lineLengthLimit || breakToTheLeftOfFirstLetters.length) &&
        !matchRightIncl(str, i, "</a")
      ) {
        if (
          breakToTheLeftOfFirstLetters.length &&
          matchRightIncl(str, i, opts.breakToTheLeftOf) &&
          left(str, i) !== null
        ) {
          console.log(
            `1191 ${`\u001b[${31}m${`opts.breakToTheLeftOf BREAKPOINT!`}\u001b[${39}m`}`
          );
          console.log(`1193 PUSH [${i}, ${i}, "\\n"]`);
          finalIndexesToDelete.push(i, i, "\n");
          stageFrom = null;
          stageTo = null;
          stageAdd = null;
          countCharactersPerLine = 1;
          console.log(
            `1200 RESET all ${`\u001b[${33}m${`stage*`}\u001b[${39}m`} and ${`\u001b[${33}m${`count`}\u001b[${39}m`}, then CONTINUE`
          );
          continue;
        } else if (
          opts.lineLengthLimit &&
          countCharactersPerLine <= opts.lineLengthLimit
        ) {
          if (
            !str[i + 1] ||
            ((CHARS_BREAK_ON_THE_LEFT_OF_THEM.includes(str[i]) &&
              !CHARS_DONT_BREAK_ON_THE_LEFT_OF_THEM.includes(str[i])) ||
              CHARS_BREAK_ON_THE_RIGHT_OF_THEM.includes(str[i]) ||
              !str[i].trim().length)
          ) {
            console.log(`1214 inside release-stage clauses`);
            // 0. if there's inline tag on the right, wipe the stage and do
            // nothing further about this whitespace
            // =============================================================
            if (
              false
              // matchRight(str, i, opts.mindTheInlineTags, {
              //   cb: nextChar => !nextChar || !/\w/.test(nextChar) // not a letter
              // })
            ) {
              console.log(
                `1225 \u001b[${31}m${`██`}\u001b[${39}m inline tag on the right detected`
              );
              // stageFrom = null;
              // stageTo = null;
              // stageAdd = null;
            } else {
              // 1. release stage contents - now they'll be definitely deleted
              // =============================================================
              if (
                stageFrom !== null &&
                stageTo !== null &&
                (stageFrom !== stageTo || (stageAdd && stageAdd.length))
              ) {
                let whatToAdd = stageAdd;

                // if we are not on breaking point, last "stageAdd" needs to be
                // amended into linebreak because otherwise we'll exceed the
                // character limit
                if (
                  str[i].trim().length &&
                  str[i + 1] &&
                  str[i + 1].trim().length &&
                  countCharactersPerLine + (stageAdd ? stageAdd.length : 0) >
                    opts.lineLengthLimit
                ) {
                  console.log(`1250 SET whatToAdd = "\\n"`);
                  whatToAdd = "\n";
                }

                // if line is beyond the line length limit or whitespace is not
                // a single space, staged to be replaced with single space,
                // tackle this whitespace
                if (
                  countCharactersPerLine + (stageAdd ? stageAdd.length : 0) >
                    opts.lineLengthLimit ||
                  !(whatToAdd === " " && stageTo === stageFrom + 1)
                ) {
                  console.log(
                    `1263 R1: ${!!(
                      countCharactersPerLine +
                        (stageAdd ? stageAdd.length : 0) >
                      opts.lineLengthLimit
                    )}`
                  );
                  console.log(
                    `1270 R2: ${!(
                      whatToAdd === " " && stageTo === stageFrom + 1
                    )}\nstageFrom = ${stageFrom}\nstageTo = ${stageTo}\nwhatToAdd = "${whatToAdd}"\n`
                  );
                  finalIndexesToDelete.push(stageFrom, stageTo, whatToAdd);
                  console.log(
                    `1276 PUSH [${stageFrom}, ${stageTo}, ${JSON.stringify(
                      whatToAdd,
                      null,
                      0
                    )}]`
                  );
                } else {
                  console.log(
                    `1284 ${`${`\u001b[${32}m${`██`}\u001b[${39}m`}${`\u001b[${36}m${`██`}\u001b[${39}m`}`.repeat(
                      10
                    )} - lastLinebreak = ${lastLinebreak}`
                  );
                  countCharactersPerLine -= lastLinebreak;
                  console.log(
                    `1290 SET countCharactersPerLine = ${countCharactersPerLine}`
                  );
                }
              }

              // 2. put this current place into stage
              // =============================================================
              if (
                str[i].trim().length &&
                (CHARS_BREAK_ON_THE_LEFT_OF_THEM.includes(str[i]) ||
                  (str[i - 1] &&
                    CHARS_BREAK_ON_THE_RIGHT_OF_THEM.includes(str[i - 1]))) &&
                !(
                  str[i] === "<" &&
                  matchRight(str, i, opts.mindTheInlineTags, {
                    cb: nextChar => !nextChar || !/\w/.test(nextChar) // not a letter
                  })
                ) &&
                !(
                  str[i] === "<" &&
                  matchRight(str, i, opts.mindTheInlineTags, {
                    trimCharsBeforeMatching: "/",
                    cb: nextChar => !nextChar || !/\w/.test(nextChar) // not a letter
                  })
                )
              ) {
                stageFrom = i;
                stageTo = i;
                stageAdd = null;
                console.log(
                  `1320 SET stage from/to = ${i}, reset "stageAdd=null"`
                );
              } else if (
                styleCommentStartedAt === null &&
                stageFrom !== null &&
                (withinInlineStyle ||
                  !opts.mindTheInlineTags ||
                  !isArr(opts.mindTheInlineTags) ||
                  (isArr(opts.mindTheInlineTags.length) &&
                    !opts.mindTheInlineTags.length) ||
                  !isStr(tagName) ||
                  (isArr(opts.mindTheInlineTags) &&
                    opts.mindTheInlineTags.length &&
                    isStr(tagName) &&
                    !opts.mindTheInlineTags.includes(tagName))) &&
                !(
                  str[i] === "<" &&
                  matchRight(str, i, opts.mindTheInlineTags, {
                    trimCharsBeforeMatching: "/",
                    cb: nextChar => !nextChar || !/\w/.test(nextChar) // not a letter
                  })
                )
              ) {
                stageFrom = null;
                stageTo = null;
                stageAdd = null;
                console.log("1346 RESET all stage vars");

                // if (str[i] === "\n" || str[i] === "\r") {
                //   countCharactersPerLine -= lastLinebreak;
                //   console.log(
                //     `1351 SET countCharactersPerLine = ${countCharactersPerLine}`
                //   );
                // }
              }
            }
          }
        } else if (opts.lineLengthLimit) {
          // countCharactersPerLine > opts.lineLengthLimit

          console.log(`1360 ${`\u001b[${36}m${`██`}\u001b[${39}m`}`);
          // LIMIT HAS BEEN EXCEEDED!
          // WE NEED TO BREAK RIGHT HERE
          if (
            CHARS_BREAK_ON_THE_LEFT_OF_THEM.includes(str[i]) &&
            !(
              str[i] === "<" &&
              matchRight(str, i, opts.mindTheInlineTags, {
                trimCharsBeforeMatching: "/",
                cb: nextChar => !nextChar || !/\w/.test(nextChar) // not a letter
              })
            )
          ) {
            // ██ 1.
            //
            console.log(
              `1376 ${`\u001b[${36}m${`██ LIMIT (${opts.lineLengthLimit}) EXCEEDED`}\u001b[${39}m`} char break on left`
            );
            // if really exceeded, not on limit, commit stage which will shorten
            // the string and maybe we'll be within the limit range again
            if (
              stageFrom !== null &&
              stageTo !== null &&
              (stageFrom !== stageTo || (stageAdd && stageAdd.length))
            ) {
              console.log(`1385 FOUND STAGED`);
              // case in test 02.11.09
              // We might have passed some tabs for example, which should be
              // deleted what might put line length back within limit. Or not.
              //
              const whatToAddLength =
                stageAdd && stageAdd.length ? stageAdd.length : 0;

              // Currently, countCharactersPerLine > opts.lineLengthLimit
              // But, will it still be true if we compensate for what's in stage?

              if (
                countCharactersPerLine -
                  (stageTo - stageFrom - whatToAddLength) -
                  1 >
                opts.lineLengthLimit
              ) {
                // still beyond limit so break at stage
                console.log(`1403 ${`\u001b[${34}m${`██`}\u001b[${39}m`}`);
              } else {
                // So,
                // countCharactersPerLine -
                // (stageTo - stageFrom - whatToAddLength) - 1 <=
                // opts.lineLengthLimit

                // don't break at stage, just apply its contents and we're good
                console.log(`1411 ${`\u001b[${34}m${`██`}\u001b[${39}m`}`);
                finalIndexesToDelete.push(stageFrom, stageTo, stageAdd);
                console.log(
                  `1414 PUSH [${stageFrom}, ${stageTo}, ${JSON.stringify(
                    stageAdd,
                    null,
                    4
                  )}]`
                );
                stageFrom = null;
                stageTo = null;
                stageAdd = null;
                console.log("1423 RESET all stage vars");

                // We're not done yet. We are currently located on a potential
                // break point,
                // countCharactersPerLine -
                // (stageTo - stageFrom - whatToAddLength) - 1 ===
                // opts.lineLengthLimit ?

                if (
                  countCharactersPerLine -
                    (stageTo - stageFrom - whatToAddLength) -
                    1 ===
                  opts.lineLengthLimit
                ) {
                  console.log(`1437 ${`\u001b[${34}m${`██`}\u001b[${39}m`}`);
                  finalIndexesToDelete.push(i, i, "\n");
                  console.log(`1439 PUSH [${i}, ${i}, "\\n"]`);
                  countCharactersPerLine = 0;
                  console.log("1441 RESET countCharactersPerLine = 0");
                }
              }
            } else {
              console.log(`1445 BUT NO STAGED FOUND`);
              //
              finalIndexesToDelete.push(i, i, "\n");
              console.log(`1448 PUSH [${i}, ${i}, "\\n"]`);
              countCharactersPerLine = 0;
              console.log("1450 RESET countCharactersPerLine = 0");
            }
          } else if (
            str[i + 1] &&
            CHARS_BREAK_ON_THE_RIGHT_OF_THEM.includes(str[i]) &&
            isStr(tagName) &&
            isArr(opts.mindTheInlineTags) &&
            opts.mindTheInlineTags.length &&
            !opts.mindTheInlineTags.includes(tagName)
          ) {
            // ██ 2.
            //
            console.log(
              `1463 ${`\u001b[${36}m${`██ LIMIT (${opts.lineLengthLimit}) EXCEEDED`}\u001b[${39}m`} break on the right of this character`
            );
            if (
              stageFrom !== null &&
              stageTo !== null &&
              (stageFrom !== stageTo || (stageAdd && stageAdd.length))
            ) {
              console.log(`1470 FOUND STAGED`);
            } else {
              console.log(`1472 BUT NO STAGED FOUND`);
              //
              finalIndexesToDelete.push(i + 1, i + 1, "\n");
              console.log(`1475 PUSH [${i + 1}, ${i + 1}, "\\n"]`);
              countCharactersPerLine = 0;
              console.log("1477 RESET countCharactersPerLine = 0");
            }
          } else if (!str[i].trim().length) {
            // ██ 3.
            //
            console.log(
              `1483 ${`\u001b[${36}m${`██ LIMIT (${opts.lineLengthLimit}) EXCEEDED`}\u001b[${39}m`} whitespace as breaking point`
            );
          } else if (!str[i + 1]) {
            // ██ 4.
            //
            console.log(
              `1489 ${`\u001b[${36}m${`██ LIMIT (${opts.lineLengthLimit}) EXCEEDED`}\u001b[${39}m`} EOL is next`
            );
            // if we reached the end of string, check what's in stage
            if (
              stageFrom !== null &&
              stageTo !== null &&
              (stageFrom !== stageTo || (stageAdd && stageAdd.length))
            ) {
              finalIndexesToDelete.push(stageFrom, stageTo, "\n");
              console.log(`1498 PUSH [${stageFrom}, ${stageTo}, "\\n"]`);
            }
          }
        }
      }

      // catch any character beyond the line length limit:
      if (
        !doNothing &&
        !beginningOfAFile &&
        opts.removeLineBreaks &&
        opts.lineLengthLimit &&
        countCharactersPerLine >= opts.lineLengthLimit &&
        stageFrom !== null &&
        stageTo !== null &&
        !CHARS_BREAK_ON_THE_RIGHT_OF_THEM.includes(str[i]) &&
        !CHARS_BREAK_ON_THE_LEFT_OF_THEM.includes(str[i]) &&
        !"/".includes(str[i])
      ) {
        console.log(
          `1518 ${`\u001b[${32}m${`██ LIMIT REACHED`}\u001b[${39}m`}! countCharactersPerLine(${`\u001b[${33}m${countCharactersPerLine}\u001b[${39}m`}) >= opts.lineLengthLimit(${`\u001b[${33}m${
            opts.lineLengthLimit
          }\u001b[${39}m`}) MIGHT RELEASE STAGE TO FINAL`
        );

        // two possible cases:
        // 1. we hit the line length limit and we can break afterwards
        // 2. we can't break afterwards, and there might be stage present
        if (
          !(
            countCharactersPerLine === opts.lineLengthLimit &&
            str[i + 1] &&
            !str[i + 1].trim().length
          )
        ) {
          //
          let whatToAdd = "\n";
          if (
            str[i + 1] &&
            !str[i + 1].trim().length &&
            countCharactersPerLine === opts.lineLengthLimit
          ) {
            whatToAdd = stageAdd;
            console.log(
              `1542 SET whatToAdd = ${JSON.stringify(whatToAdd, null, 4)}`
            );
          }

          finalIndexesToDelete.push(stageFrom, stageTo, whatToAdd);

          countCharactersPerLine = i - stageTo;
          if (str[i].length) {
            countCharactersPerLine++;
          }
          stageFrom = null;
          stageTo = null;
          stageAdd = null;
          console.log(
            `1556 RESET stage* vars; per-line count to ${countCharactersPerLine}`
          );
        }
      }

      // catch line breaks
      // ███████████████████████████████████████
      if (
        (!doNothing && str[i] === "\n") ||
        (str[i] === "\r" &&
          (!str[i + 1] || (str[i + 1] && str[i + 1] !== "\n")))
      ) {
        // =======================================================================
        // mark this
        lastLinebreak = i;
        console.log(
          `1572 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`lastLinebreak`}\u001b[${39}m`} = ${JSON.stringify(
            lastLinebreak,
            null,
            4
          )}`
        );

        // =======================================================================
        // reset nonWhitespaceCharMet
        if (nonWhitespaceCharMet) {
          nonWhitespaceCharMet = false;
          console.log(
            `1584 ${`\u001b[${32}m${`RESET`}\u001b[${39}m`} ${`\u001b[${33}m${`nonWhitespaceCharMet`}\u001b[${39}m`} = ${JSON.stringify(
              nonWhitespaceCharMet,
              null,
              4
            )}`
          );
        }

        // =======================================================================
        // delete trailing whitespace on each line OR empty lines
        if (
          !opts.removeLineBreaks &&
          whitespaceStartedAt !== null &&
          whitespaceStartedAt < i &&
          str[i + 1] &&
          str[i + 1] !== "\r" &&
          str[i + 1] !== "\n"
        ) {
          finalIndexesToDelete.push(whitespaceStartedAt, i);
          console.log(
            `1604 ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} line's trailing whitespace [${whitespaceStartedAt}, ${i}]`
          );
        }
      }

      // catch the EOF
      // ███████████████████████████████████████
      if (!str[i + 1]) {
        if (withinStyleTag && styleCommentStartedAt !== null) {
          console.log(`1613 PUSH THIS UNFINISHED COMMENT`);
          finalIndexesToDelete.push(
            ...expand({
              str,
              from: styleCommentStartedAt,
              to: i,
              ifLeftSideIncludesThisThenCropTightly:
                DELETE_IN_STYLE_TIGHTLY_IF_ON_LEFT_IS || "",
              ifRightSideIncludesThisThenCropTightly:
                DELETE_IN_STYLE_TIGHTLY_IF_ON_RIGHT_IS || ""
            })
          );
        } else if (whitespaceStartedAt && str[i] !== "\n" && str[i] !== "\r") {
          // catch trailing whitespace at the end of the string which is not legit
          // trailing linebreak
          finalIndexesToDelete.push(whitespaceStartedAt, i + 1);
          console.log(
            `1630 ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} string's trailing whitespace [${whitespaceStartedAt}, ${i +
              1}]`
          );
        } else if (
          whitespaceStartedAt &&
          ((str[i] === "\r" && str[i + 1] === "\n") || str[i] === "\n")
        ) {
          finalIndexesToDelete.push(whitespaceStartedAt, i);
          console.log(
            `1639 ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} string's trailing whitespace [${whitespaceStartedAt}, ${i}]`
          );
        }
      }

      //
      //
      //
      //
      //
      //
      //
      //
      //
      //              BOTTOM
      //
      //
      //
      //
      //
      //
      //
      //

      // catch end of inline styles
      // ███████████████████████████████████████

      if (
        !doNothing &&
        withinInlineStyle &&
        withinInlineStyle < i &&
        str[withinInlineStyle] === str[i]
      ) {
        withinInlineStyle = null;
        console.log(
          `1674 SET ${`\u001b[${33}m${`withinInlineStyle`}\u001b[${39}m`} = null`
        );
      }

      // catch tag's closing bracket
      // ███████████████████████████████████████
      if (
        !doNothing &&
        !withinStyleTag &&
        !withinInlineStyle &&
        tagNameStartsAt !== null &&
        str[i] === ">"
      ) {
        tagNameStartsAt = null;
        tagName = null;
        console.log(`1689 RESET tagNameStartsAt = null; tagName = null;`);
      }

      // logging after each loop's iteration:
      // ███████████████████████████████████████
      console.log(
        `    \u001b[${90}m${`██ ██ ██ ██ ██ END ██ ██ ██ ██ ██`}\u001b[${39}m`
      );
      // console.log(
      //   `${`\u001b[${33}m${`whitespaceStartedAt`}\u001b[${39}m`} = ${JSON.stringify(
      //     whitespaceStartedAt,
      //     null,
      //     4
      //   )}`
      // );
      // console.log(
      //   `${`\u001b[${33}m${`lastLinebreak`}\u001b[${39}m`} = ${JSON.stringify(
      //     lastLinebreak,
      //     null,
      //     4
      //   )}`
      // );
      // console.log(
      //   `${`\u001b[${33}m${`beginningOfAFile`}\u001b[${39}m`} = ${JSON.stringify(
      //     beginningOfAFile,
      //     null,
      //     4
      //   )}`
      // );
      // console.log(
      //   `${`\u001b[${33}m${`countCharactersPerLine`}\u001b[${39}m`} = ${`\u001b[${35}m${countCharactersPerLine}\u001b[${39}m`}`
      // );
      console.log(
        `${`\u001b[${33}m${`tagNameStartsAt`}\u001b[${39}m`} = ${`\u001b[${35}m${tagNameStartsAt}\u001b[${39}m`}; ${`\u001b[${33}m${`tagName`}\u001b[${39}m`} = ${`\u001b[${35}m${tagName}\u001b[${39}m`}`
      );

      const logDoNothing = true;

      console.log(
        `${`\u001b[${33}m${`stageFrom`}\u001b[${39}m`} = ${stageFrom}; ${`\u001b[${33}m${`stageTo`}\u001b[${39}m`} = ${stageTo}; ${`\u001b[${33}m${`stageAdd`}\u001b[${39}m`} = ${JSON.stringify(
          stageAdd,
          null,
          0
        )}; ${`\u001b[${33}m${`indexes`}\u001b[${39}m`} = ${JSON.stringify(
          finalIndexesToDelete.current(),
          null,
          0
        )}; ${`\u001b[${33}m${`lastLinebreak`}\u001b[${39}m`} = ${lastLinebreak}; ${`\u001b[${33}m${`nonWhitespaceCharMet`}\u001b[${39}m`} = ${nonWhitespaceCharMet};\n${
          logDoNothing
            ? `${`\u001b[${doNothing ? 31 : 32}m${`██ doNothing ${
                doNothing ? doNothing : "OFF"
              } ██`}\u001b[${39}m`}; `
            : ""
        }${`\u001b[${withinInlineStyle ? 32 : 31}m${`██ withinInlineStyle ${
          withinInlineStyle ? "yes" : "no"
        } ██`}\u001b[${39}m`}`
      );

      //
      //
      //
      // end of the loop
    }
    console.log(
      `1753 AFTER THE LOOP, finalIndexesToDelete.current() = ${JSON.stringify(
        finalIndexesToDelete.current(),
        null,
        4
      )}`
    );

    if (finalIndexesToDelete.current()) {
      const startingPercentageDone =
        opts.reportProgressFuncTo -
        (opts.reportProgressFuncTo - opts.reportProgressFuncFrom) *
          leavePercForLastStage;
      console.log(
        `1766 ${`\u001b[${33}m${`startingPercentageDone`}\u001b[${39}m`} = ${JSON.stringify(
          startingPercentageDone,
          null,
          4
        )}`
      );

      const res = applySlices(
        str,
        finalIndexesToDelete.current(),
        applyPercDone => {
          // allocate remaining "leavePercForLastStage" percentage of the total
          // progress reporting to this stage:
          if (opts.reportProgressFunc && len >= 2000) {
            currentPercentageDone = Math.floor(
              startingPercentageDone +
                (opts.reportProgressFuncTo - startingPercentageDone) *
                  (applyPercDone / 100)
            );

            if (currentPercentageDone !== lastPercentage) {
              lastPercentage = currentPercentageDone;
              opts.reportProgressFunc(currentPercentageDone);
            }
          }
        }
      );

      const rangesCopy = Array.from(finalIndexesToDelete.current());
      finalIndexesToDelete.wipe();
      console.log(
        `1797 returning ${`\u001b[${33}m${`res`}\u001b[${39}m`} =\n\n${JSON.stringify(
          res,
          null,
          4
        )}\n\n ${`\u001b[${90}m${`or:`}\u001b[${39}m`}\n\n"${res}"`
      );
      console.log(`\u001b[${90}m${`\n      ██ FIN ██\n\n`}\u001b[${39}m`);
      const resLen = res.length;
      return {
        log: {
          timeTakenInMiliseconds: Date.now() - start,
          originalLength: len,
          cleanedLength: resLen,
          bytesSaved: Math.max(len - resLen, 0),
          percentageReducedOfOriginal: len
            ? Math.round((Math.max(len - resLen, 0) * 100) / len)
            : 0
        },
        ranges: rangesCopy,
        result: res
      };
    }
  }
  // ELSE - return the original input string
  console.log(
    `1822 returning original ${`\u001b[${33}m${`str`}\u001b[${39}m`} =\n\n${JSON.stringify(
      str,
      null,
      4
    )}\n\n ${`\u001b[${90}m${`or:`}\u001b[${39}m`}\n\n${str}`
  );
  console.log(`\u001b[${90}m${`\n      ██ FIN ██\n\n`}\u001b[${39}m`);
  return {
    log: {
      timeTakenInMiliseconds: Date.now() - start,
      originalLength: len,
      cleanedLength: len,
      bytesSaved: 0,
      percentageReducedOfOriginal: 0
    },
    ranges: [],
    result: str
  };
}

export { crush, defaults, version };
