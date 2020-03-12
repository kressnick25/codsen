import strFindMalformed from "string-find-malformed";
import tokenizer from "codsen-tokenizer";
import { left, right } from "string-left-right";
import pathNext from "./util/pathNext";
import pathPrev from "./util/pathPrev";
import pathUp from "./util/pathUp";
import op from "object-path";

function isObj(something) {
  return (
    something && typeof something === "object" && !Array.isArray(something)
  );
}
function layerPending(layers, tokenObj) {
  return (
    tokenObj.closing &&
    layers.length &&
    layers[layers.length - 1].type === tokenObj.type &&
    layers[layers.length - 1].closing === false
  );
}

function cparser(str, originalOpts) {
  //
  //
  //
  //
  //
  //
  //
  // INSURANCE
  // ---------------------------------------------------------------------------
  if (typeof str !== "string") {
    if (str === undefined) {
      throw new Error(
        "codsen-tokenizer: [THROW_ID_01] the first input argument is completely missing! It should be given as string."
      );
    } else {
      throw new Error(
        `codsen-tokenizer: [THROW_ID_02] the first input argument must be string! It was given as "${typeof str}", equal to:\n${JSON.stringify(
          str,
          null,
          4
        )}`
      );
    }
  }
  if (originalOpts && !isObj(originalOpts)) {
    throw new Error(
      `codsen-tokenizer: [THROW_ID_03] the second input argument, an options object, should be a plain object but it was given as type ${typeof originalOpts}, equal to ${JSON.stringify(
        originalOpts,
        null,
        4
      )}`
    );
  }
  if (
    isObj(originalOpts) &&
    originalOpts.tagCb &&
    typeof originalOpts.tagCb !== "function"
  ) {
    throw new Error(
      `codsen-tokenizer: [THROW_ID_04] the opts.tagCb, callback function, should be a function but it was given as type ${typeof originalOpts.tagCb}, equal to ${JSON.stringify(
        originalOpts.tagCb,
        null,
        4
      )}`
    );
  }
  if (
    isObj(originalOpts) &&
    originalOpts.charCb &&
    typeof originalOpts.charCb !== "function"
  ) {
    throw new Error(
      `codsen-tokenizer: [THROW_ID_05] the opts.charCb, callback function, should be a function but it was given as type ${typeof originalOpts.charCb}, equal to ${JSON.stringify(
        originalOpts.charCb,
        null,
        4
      )}`
    );
  }
  if (
    isObj(originalOpts) &&
    originalOpts.reportProgressFunc &&
    typeof originalOpts.reportProgressFunc !== "function"
  ) {
    throw new Error(
      `codsen-tokenizer: [THROW_ID_06] the opts.reportProgressFunc, callback function, should be a function but it was given as type ${typeof originalOpts.reportProgressFunc}, equal to ${JSON.stringify(
        originalOpts.reportProgressFunc,
        null,
        4
      )}`
    );
  }
  if (
    isObj(originalOpts) &&
    originalOpts.errCb &&
    typeof originalOpts.errCb !== "function"
  ) {
    throw new Error(
      `codsen-tokenizer: [THROW_ID_07] the opts.errCb, callback function, should be a function but it was given as type ${typeof originalOpts.errCb}, equal to ${JSON.stringify(
        originalOpts.errCb,
        null,
        4
      )}`
    );
  }

  //
  //
  //
  //
  //
  //
  //
  // OPTS
  // ---------------------------------------------------------------------------

  const defaults = {
    reportProgressFunc: null,
    reportProgressFuncFrom: 0,
    reportProgressFuncTo: 100,
    tagCb: null,
    charCb: null,
    errCb: null
  };
  const opts = Object.assign({}, defaults, originalOpts);

  //
  //
  //
  //
  //
  //
  //
  // ACTION
  // ---------------------------------------------------------------------------

  // layers keep track of tag heads, so that when we hit their tails, we know
  // where both parts are:
  const layers = [];

  const res = [];

  // this flag is used to give notice
  // we use object-path notation
  // (https://www.npmjs.com/package/object-path)
  // outer container is array so starting path is zero.
  // object-path notation differs from normal js notation
  // in that array paths are with digits, a.2 not a[2]
  // which means, object keys can't have digit-only names.
  // The benefit of this notation is that it's consistent -
  // all the levels are joined with a dot, there are no brackets.
  let path;

  let nestNext = false;

  const tokensWithChildren = ["tag", "comment"];

  // Call codsen-tokenizer. It works through callbacks,
  // pinging each token to the function you give, opts.tagCb
  tokenizer(str, {
    reportProgressFunc: opts.reportProgressFunc,
    reportProgressFuncFrom: opts.reportProgressFuncFrom,
    reportProgressFuncTo: opts.reportProgressFuncTo,
    tagCb: tokenObj => {
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //              TAG CALLBACK STARTS
      //
      //
      //
      //
      //
      //
      //
      //

      console.log(`-`.repeat(80));
      console.log(
        `189 ██ ${`\u001b[${33}m${`INCOMING TOKEN`}\u001b[${39}m`}:\n${JSON.stringify(
          {
            type: tokenObj.type,
            tagName: tokenObj.tagName,
            start: tokenObj.start,
            end: tokenObj.end,
            value: tokenObj.value,
            kind: tokenObj.kind
          },
          null,
          4
        )}`
      );
      // pass the token to the 3rd parties through opts.tagCb
      if (typeof opts.tagCb === "function") {
        opts.tagCb(tokenObj);
      }

      // consume the token ourselves
      // tokenizer does not build AST's so there is no
      // "children" key reported on each node. However,
      // here we do build AST's and while some tokens might
      // not have children tokens or can't (text nodes),
      // for consistency we will add children key with
      // an empty array value to each token in AST.

      // recalculate the path for this token
      let prevToken = op.get(res, path);
      if (!isObj(prevToken)) {
        prevToken = null;
      }
      console.log(
        `221 FIY, ${`\u001b[${33}m${`prevToken`}\u001b[${39}m`} = ${JSON.stringify(
          prevToken,
          null,
          4
        )}`
      );

      if (
        nestNext &&
        // ensure it's not a closing tag of a pair, in which case
        // don't nest it!
        (!prevToken ||
          !(
            prevToken.tagName === tokenObj.tagName &&
            !prevToken.closing &&
            tokenObj.closing
          )) &&
        !layerPending(layers, tokenObj)
      ) {
        // 1. reset the flag
        nestNext = false;

        // 2. go deeper
        // "1.children.3" -> "1.children.3.children.0"
        console.log(`245 ${`\u001b[${35}m${`██ NEST`}\u001b[${39}m`}`);
        path = `${path}.children.0`;
      } else if (
        tokenObj.closing &&
        typeof path === "string" &&
        path.includes(".")
      ) {
        // goes up and then bumps,
        // "1.children.3" -> "2"
        console.log(`254 ${`\u001b[${35}m${`██ UP`}\u001b[${39}m`}`);
        path = pathNext(pathUp(path));

        if (layerPending(layers, tokenObj)) {
          layers.pop();
          console.log(
            `260 POP layers, now equals to: ${JSON.stringify(layers, null, 4)}`
          );

          nestNext = false;
          console.log(
            `265 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`nestNext`}\u001b[${39}m`}: ${nestNext}`
          );
        }
      } else if (!path) {
        // it's the first element - push the token into index 0
        console.log(`270 ${`\u001b[${35}m${`██ FIRST`}\u001b[${39}m`}`);
        path = "0";
      } else {
        // bumps the index,
        // "1.children.3" -> "1.children.4"
        console.log(`275 ${`\u001b[${35}m${`██ BUMP`}\u001b[${39}m`}`);
        path = pathNext(path);
      }

      // activate the nestNext
      if (
        tokensWithChildren.includes(tokenObj.type) &&
        !tokenObj.void &&
        !tokenObj.closing
      ) {
        nestNext = true;
        console.log(
          `287 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`nestNext`}\u001b[${39}m`} = true`
        );

        if (tokenObj.type === "comment") {
          layers.push(tokenObj);
          console.log(
            `293 ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} to layers, which is now: ${JSON.stringify(
              layers,
              null,
              4
            )}`
          );
        }
      }

      console.log(
        `303 FIY, ${`\u001b[${33}m${`path`}\u001b[${39}m`} = ${path}`
      );

      // check, does this closing tag have an
      // opening counterpart
      const previousPath = pathPrev(path);
      // console.log(
      //   `269 ${`\u001b[${33}m${`previousPath`}\u001b[${39}m`} = ${JSON.stringify(
      //     previousPath,
      //     null,
      //     4
      //   )}`
      // );
      const parentPath = pathUp(path);
      console.log(
        `318 ${`\u001b[${33}m${`parentPath`}\u001b[${39}m`} = ${JSON.stringify(
          parentPath,
          null,
          4
        )}`
      );

      let parentTagsToken;
      if (parentPath) {
        parentTagsToken = op.get(res, parentPath);
      }
      console.log(
        `330 ${`\u001b[${33}m${`parentTagsToken`}\u001b[${39}m`} at path "${`\u001b[${33}m${parentPath}\u001b[${39}m`}" - ${JSON.stringify(
          Object.assign({}, parentTagsToken, { children: "..." }),
          null,
          4
        )}`
      );

      let previousTagsToken;
      if (previousPath) {
        previousTagsToken = op.get(res, previousPath);
      }
      console.log(
        `342 ${`\u001b[${33}m${`previousTagsToken`}\u001b[${39}m`} at path "${`\u001b[${33}m${previousPath}\u001b[${39}m`}" - ${JSON.stringify(
          previousTagsToken,
          null,
          4
        )}`
      );
      console.log(
        `349 ${`\u001b[${33}m${`tokenObj.closing`}\u001b[${39}m`} = ${JSON.stringify(
          tokenObj.closing,
          null,
          4
        )}`
      );

      //
      // AST CORRECTION PART
      //
      // We change nodes where we recognise the error.
      //

      console.log(
        `363 ${`\u001b[${33}m${`res`}\u001b[${39}m`} BEFORE: ${JSON.stringify(
          res,
          null,
          4
        )}`
      );

      // case of "a<!--b->c", current token being "text" type, value "b->c"

      const suspiciousCommentTagEndingRegExp = /(-+|-+[^>])>/;

      if (
        tokenObj.type === "text" &&
        isObj(parentTagsToken) &&
        parentTagsToken.type === "comment" &&
        parentTagsToken.kind === "simple" &&
        suspiciousCommentTagEndingRegExp.test(tokenObj.value)
      ) {
        console.log(
          `382 ${`\u001b[${31}m${`██ intervention needed`}\u001b[${39}m`}`
        );
        const suspiciousEndingStartsAt = suspiciousCommentTagEndingRegExp.exec(
          tokenObj.value
        ).index;
        const suspiciousEndingEndsAt =
          suspiciousEndingStartsAt +
          tokenObj.value.slice(suspiciousEndingStartsAt).indexOf(">") +
          1;
        console.log(
          `392 SUSPICIOUS ENDING: [${`\u001b[${33}m${`suspiciousEndingStartsAt`}\u001b[${39}m`} = ${JSON.stringify(
            suspiciousEndingStartsAt,
            null,
            4
          )}, ${`\u001b[${33}m${`suspiciousEndingEndsAt`}\u001b[${39}m`} = ${JSON.stringify(
            suspiciousEndingEndsAt,
            null,
            4
          )}] - value: "${tokenObj.value.slice(
            suspiciousEndingStartsAt,
            suspiciousEndingEndsAt
          )}"`
        );

        // part 1.
        // if any text precedes the "->" that text goes in as normal,
        // at this level, under this path:
        if (suspiciousEndingStartsAt > 0) {
          console.log(
            `411 ${`\u001b[${32}m${`ADD`}\u001b[${39}m`} text leading up to "->"`
          );
          console.log(
            `414 ${`\u001b[${33}m${`res`}\u001b[${39}m`} BEFORE: ${JSON.stringify(
              res,
              null,
              4
            )}`
          );
          op.set(
            res,
            path,
            Object.assign({}, tokenObj, {
              end: tokenObj.start + suspiciousEndingStartsAt,
              value: tokenObj.value.slice(0, suspiciousEndingStartsAt)
            })
          );
          if (tokensWithChildren.includes(tokenObj.type)) {
            tokenObj.children = [];
          }
          console.log(
            `432 ${`\u001b[${33}m${`res`}\u001b[${39}m`} AFTER: ${JSON.stringify(
              res,
              null,
              4
            )}`
          );
        }

        // part 2.
        // further, the "->" goes as closing token at parent level
        console.log(
          `443 OLD ${`\u001b[${33}m${`path`}\u001b[${39}m`} = ${path}`
        );
        path = pathNext(pathUp(path));
        console.log(
          `447 NEW ${`\u001b[${33}m${`path`}\u001b[${39}m`} = ${path}`
        );
        op.set(res, path, {
          type: "comment",
          kind: "simple",
          closing: true,
          start: tokenObj.start + suspiciousEndingStartsAt,
          end: tokenObj.start + suspiciousEndingEndsAt,
          value: tokenObj.value.slice(
            suspiciousEndingStartsAt,
            suspiciousEndingEndsAt
          ),
          children: []
        });
        console.log(
          `462 ${`\u001b[${33}m${`res`}\u001b[${39}m`} AFTER: ${JSON.stringify(
            res,
            null,
            4
          )}`
        );

        // part 3.
        // if any text follows "->" add that after
        if (suspiciousEndingEndsAt < tokenObj.value.length) {
          console.log(
            `473 OLD ${`\u001b[${33}m${`path`}\u001b[${39}m`} = ${path}`
          );
          path = pathNext(path);
          console.log(
            `477 NEW ${`\u001b[${33}m${`path`}\u001b[${39}m`} = ${path}`
          );
          op.set(res, path, {
            type: "text",
            start: tokenObj.start + suspiciousEndingEndsAt,
            end: tokenObj.end,
            value: tokenObj.value.slice(suspiciousEndingEndsAt)
          });
          console.log(
            `486 ${`\u001b[${33}m${`res`}\u001b[${39}m`} AFTER: ${JSON.stringify(
              res,
              null,
              4
            )}`
          );
        }
      } else if (
        tokenObj.type === "comment" &&
        tokenObj.kind === "only" &&
        isObj(previousTagsToken) &&
        previousTagsToken.type === "text" &&
        previousTagsToken.value.trim().length &&
        "<!-".includes(
          previousTagsToken.value[
            left(previousTagsToken.value, previousTagsToken.value.length)
          ]
        )
      ) {
        // if "only" kind token is preceded by something that resembles
        // opening HTML comment ("simple" kind), that might be first part
        // of "not" kind comment:
        //
        // <img/><--<![endif]-->
        //       ^
        //      excl. mark missing on the first part ("<!--")
        console.log(
          `513 ${`\u001b[${31}m${`MALFORMED "NOT" COMMENT`}\u001b[${39}m`}`
        );
        // strFindMalformed
        const capturedMalformedTagRanges = [];
        // Contents will be objects like:
        // {
        //   idxFrom: 3,
        //   idxTo: 9
        // }
        strFindMalformed(
          previousTagsToken.value,
          "<!--",
          obj => {
            capturedMalformedTagRanges.push(obj);
          },
          {
            maxDistance: 2
          }
        );
        console.log(
          `533 ${`\u001b[${33}m${`capturedMalformedTagRanges`}\u001b[${39}m`} = ${JSON.stringify(
            capturedMalformedTagRanges,
            null,
            4
          )}`
        );
        if (
          capturedMalformedTagRanges.length &&
          !right(
            previousTagsToken.value,
            capturedMalformedTagRanges[capturedMalformedTagRanges.length - 1]
              .idxTo - 1
          )
        ) {
          // pick the last
          // imagine, there were multiple malformed opening comments:
          // <img/><1--<1--<1--<1--<![endif]-->
          const malformedRange = capturedMalformedTagRanges.pop();
          console.log(
            `552 ${`\u001b[${33}m${`malformedRange`}\u001b[${39}m`} = ${JSON.stringify(
              malformedRange,
              null,
              4
            )}`
          );

          // is the whole text token to be merged into the closing comment token,
          // or were there characters in front of text token which remain and
          // form the shorter, text token?

          if (
            !left(previousTagsToken.value, malformedRange.idxFrom) &&
            previousPath &&
            isObj(previousTagsToken)
          ) {
            // if there are no whitespace characters to the left of "from" index
            // of the malformed "<!--", this means whole token is a malformed
            // value and needs to be merged into current "comment" type token
            // and its kind should be changed from "only" to "not".
            if (tokensWithChildren.includes(tokenObj.type)) {
              tokenObj.children = [];
            }
            // path becomes the path of previous, text token - we overwrite it
            path = previousPath;
            op.set(
              res,
              path,
              Object.assign({}, tokenObj, {
                start: malformedRange.idxFrom + previousTagsToken.start,
                kind: "not",
                value: `${previousTagsToken.value}${tokenObj.value}`
              })
            );
          } else if (previousPath && isObj(previousTagsToken)) {
            // if there are text characters which are not part of "<!--",
            // shorten the text token, push a new comment token

            // 1. tweak the "text" token
            op.set(
              res,
              previousPath,
              Object.assign({}, previousTagsToken, {
                end: malformedRange.idxFrom + previousTagsToken.start,
                value: previousTagsToken.value.slice(0, malformedRange.idxFrom)
              })
            );

            // 2. tweak the current "comment" token
            if (tokensWithChildren.includes(tokenObj.type)) {
              tokenObj.children = [];
            }
            op.set(
              res,
              path,
              Object.assign({}, tokenObj, {
                start: malformedRange.idxFrom + previousTagsToken.start,
                kind: "not",
                value: `${previousTagsToken.value.slice(
                  malformedRange.idxFrom
                )}${tokenObj.value}`
              })
            );
          }
        }
      } else {
        console.log(`618 setting as usual`);
        if (tokensWithChildren.includes(tokenObj.type)) {
          tokenObj.children = [];
        }
        op.set(res, path, tokenObj);
      }

      console.log(
        `626 ${`\u001b[${33}m${`res`}\u001b[${39}m`} AFTER: ${JSON.stringify(
          res,
          null,
          4
        )}`
      );

      console.log(
        `634 ENDING ${`\u001b[${33}m${`path`}\u001b[${39}m`} = ${JSON.stringify(
          path,
          null,
          4
        )}`
      );

      //
      // CHECK CHILD-PARENT MATCH
      //

      if (
        tokensWithChildren.includes(tokenObj.type) &&
        tokenObj.closing &&
        (!previousPath ||
          !isObj(previousTagsToken) ||
          previousTagsToken.closing ||
          previousTagsToken.type !== tokenObj.type ||
          previousTagsToken.tagName !== tokenObj.tagName)
      ) {
        console.log(
          `655 ${`\u001b[${31}m${`██ RAISE ERROR ${tokenObj.type}-${
            tokenObj.type === "comment" ? tokenObj.kind : ""
          }-missing-opening`}\u001b[${39}m`}`
        );
        if (opts.errCb) {
          opts.errCb({
            ruleId: `${tokenObj.type}${
              tokenObj.type === "comment" ? `-${tokenObj.kind}` : ""
            }-missing-opening`,
            idxFrom: tokenObj.start,
            idxTo: tokenObj.end
          });
        }
      }

      //
      // LOGGING
      //
      console.log(`${`\u001b[${90}m${`---`}\u001b[${39}m`}`);
      console.log(
        `${`\u001b[${90}m${`██ nestNext = ${`\u001b[${
          nestNext ? 32 : 31
        }m${nestNext}\u001b[${39}m`}`}\u001b[${39}m`}`
      );

      //
      //
      //
      //
      //
      //
      //
      //
      //              TAG CALLBACK ENDS
      //
      //
      //
      //
      //
      //
      //
      //
    },
    charCb: opts.charCb
  });
  console.log(`-`.repeat(80));

  console.log(
    `703 ${`\u001b[${32}m${`FINAL RETURN`}\u001b[${39}m`} ${JSON.stringify(
      res,
      null,
      4
    )}`
  );
  return res;
}

// -----------------------------------------------------------------------------

export default cparser;
