// tests/lib/rules/spellckeck.js

/**
 * @fileoverview test
 * @author loplat
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/functioncheck"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("spellcheck", rule, {
  valid: [
    {
      code: `function test (){}`,
    },
  ],
  invalid: [
    {
      code: `function _test (){}`,
      output: ``,
    },
  ],
});
