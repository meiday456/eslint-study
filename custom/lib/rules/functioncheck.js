// lib/rules/spellcheck.js

/**
 * @fileoverview test
 * @author loplat
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/**
 * @type {import("eslint").Rule.RuleModule}
 */

module.exports = {
  meta: {
    type: "problem", // `problem`, `suggestion`, or `layout`
    fixable: "code", // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
    // variables should be defined here

    return {
      FunctionDeclaration(node) {
        if (node.id.name.startsWith("_")) {
          context.report({
            node,
            message: `${node.id.name} 명칭은 허용되지않습니다.`,
            // fix: (fixer) => fixer.replaceText("_", ""),
          });
        }
      },
      // ArrowFunctionExpression(node) {
      //   context.report({
      //     node,
      //     message: "dsadsadsa",
      //   });
      // },
      // VariableDeclarator: (node) => {
      //   if (node.id.name.length < 2) {
      //     context.report({
      //       node: node,
      //       message: `Variable names should be longer than 1 character`,
      //     });
      //   }
      // },
    };
  },
};
