// rule: attribute-validate-charoff
// -----------------------------------------------------------------------------

import { validateDigitOnly } from "../../util/util";

function attributeValidateCharoff(context, ...opts) {
  return {
    attribute: function(node) {
      console.log(
        `███████████████████████████████████████ attributeValidateCharoff() ███████████████████████████████████████`
      );
      console.log(
        `013 ${`\u001b[${33}m${`opts`}\u001b[${39}m`} = ${JSON.stringify(
          opts,
          null,
          4
        )}`
      );
      console.log(
        `020 attributeValidateCharoff(): node = ${JSON.stringify(
          node,
          null,
          4
        )}`
      );

      if (node.attribName === "charoff") {
        // validate the parent
        if (
          ![
            "col",
            "colgroup",
            "tbody",
            "td",
            "tfoot",
            "th",
            "thead",
            "tr"
          ].includes(node.parent.tagName)
        ) {
          context.report({
            ruleId: "attribute-validate-charoff",
            idxFrom: node.attribStart,
            idxTo: node.attribEnd,
            message: `Tag "${node.parent.tagName}" can't have this attribute.`,
            fix: null
          });
        }

        const errorArr = validateDigitOnly(
          node.attribValue,
          node.attribValueStartAt,
          {
            type: "integer",
            percOK: false,
            negativeOK: true
          }
        );
        console.log(
          `060 received errorArr = ${JSON.stringify(errorArr, null, 4)}`
        );

        // tag has to have "char" attribute:
        if (
          !node.parent.attribs.some(
            attribObj => attribObj.attribName === "char"
          )
        ) {
          errorArr.push({
            idxFrom: node.parent.start,
            idxTo: node.parent.end,
            message: `Attribute "char" missing.`,
            fix: null
          });
        }

        errorArr.forEach(errorObj => {
          console.log(`078 RAISE ERROR`);
          context.report(
            Object.assign({}, errorObj, {
              ruleId: "attribute-validate-charoff"
            })
          );
        });
      }
    }
  };
}

export default attributeValidateCharoff;