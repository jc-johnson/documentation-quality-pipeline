// @ts-check

"use strict";

/** @type {import("markdownlint").Rule[]} */
module.exports = [
  {
    names: ["period-ending"],
    description:
      "Require every non-heading, non-blank line to end with a period",
    information: new URL(
      "https://github.com/DavidAnson/markdownlint/blob/v0.41.1/test/rules/any-blockquote.cjs"
    ),
    tags: ["punctuation", "style"],

    function: (params, onError) => {
      for (const [index, line] of params.lines.entries()) {
        const trimmedLine = line.trim();

        // Ignore blank lines.
        if (!trimmedLine) {
          continue;
        }

        // Ignore ATX headings (# through ######).
        if (/^#{1,6}(?:\s|$)/.test(trimmedLine)) {
          continue;
        }

        // Report lines that do not end with a period.
        if (!trimmedLine.endsWith(".")) {
          onError({
            lineNumber: index + 1,
            detail: "Line must end with a period.",
            context: line
          });
        }
      }
    }
  }
];
