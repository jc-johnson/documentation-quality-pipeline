"use strict";

const { lint } = require("markdownlint/sync");
const assert = require("node:assert/strict");
const periodEnding = require("../custom-rules/period-ending.cjs");

const results = lint({
  strings: {
    "example.md": [
      "# Installation",
      "",
      "Install the package.",
      "Run the application",
      "## Configuration",
      "Set the timeout to 30 seconds."
    ].join("\n")
  },
  config: {},
  customRules: periodEnding
});

const errors = results.toJSON()["example.md"];

assert.equal(errors.length, 1);
assert.equal(errors[0].lineNumber, 4);

console.log("All tests passed.");
