import { Linter, RuleObjType } from "../../linter";
import { isLangCode } from "is-language-code";
import checkForWhitespace from "../../util/checkForWhitespace";

// rule: attribute-validate-hreflang
// -----------------------------------------------------------------------------

function attributeValidateHreflang(context: Linter): RuleObjType {
  return {
    attribute(node) {
      console.log(
        `███████████████████████████████████████ attributeValidateHreflang() ███████████████████████████████████████`
      );

      console.log(
        `016 attributeValidateHreflang(): node = ${JSON.stringify(
          node,
          null,
          4
        )}`
      );

      if (node.attribName === "hreflang") {
        // validate the parent
        if (!["a", "link"].includes(node.parent.tagName)) {
          context.report({
            ruleId: "attribute-validate-hreflang",
            idxFrom: node.attribStarts,
            idxTo: node.attribEnds,
            message: `Tag "${node.parent.tagName}" can't have attribute "${node.attribName}".`,
            fix: null,
          });
        }

        // beware, the charStart and charEnd are not offset, their "zero" is
        // start of an attribute's value, so if you use them, you need to
        // offset to the true index, you must add "(node.attribValueStartsAt as number)" value
        const { charStart, charEnd, errorArr } = checkForWhitespace(
          node.attribValueRaw,
          node.attribValueStartsAt as number
        );
        console.log(
          `${`\u001b[${33}m${`charStart`}\u001b[${39}m`} = ${JSON.stringify(
            charStart,
            null,
            4
          )}; ${`\u001b[${33}m${`charEnd`}\u001b[${39}m`} = ${JSON.stringify(
            charEnd,
            null,
            4
          )}`
        );
        console.log(
          `${`\u001b[${33}m${`errorArr`}\u001b[${39}m`} = ${JSON.stringify(
            errorArr,
            null,
            4
          )}`
        );
        // validate using "ietf-language-tag-regex" from npm:
        const { message } = isLangCode(
          node.attribValueRaw.slice(charStart as number, charEnd as number)
        );
        console.log(
          `065 attributeValidateHreflang(): retrieved ${`\u001b[${33}m${`message`}\u001b[${39}m`} = ${JSON.stringify(
            message,
            null,
            4
          )}`
        );
        if (message) {
          errorArr.push({
            idxFrom:
              (node.attribValueStartsAt as number) + (charStart as number),
            idxTo: (node.attribValueStartsAt as number) + (charEnd as number),
            message,
            fix: null,
          });
        }

        errorArr.forEach((errorObj) => {
          console.log(`082 RAISE ERROR`);
          context.report({
            ...errorObj,
            ruleId: "attribute-validate-hreflang",
          });
        });
      }
    },
  };
}

export default attributeValidateHreflang;
