// Runs my custom linting rule period-ending.cjs over a specified markdown file

"use strict";

const { lint } = require("markdownlint/sync");
const markdownIt = require("markdown-it");
const periodEnding = require("./custom-rules/period-ending.cjs");

const results = lint({
  files: ["../README.md"],
  config: {},
  customRules: periodEnding,
  markdownItFactory: () => markdownIt({ html: true })
});

// Print results as JSON.
console.dir(results, { colors: true, depth: null });

// Check all files for errors.
const hasErrors = Object.values(results).some(
  (errors) => errors.length > 0
);

if (hasErrors) {
  process.exitCode = 1;
}
