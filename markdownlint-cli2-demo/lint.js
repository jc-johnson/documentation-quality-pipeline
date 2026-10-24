
"use strict";

const fs = require("node:fs");
const path = require("node:path");
const { lint } = require("markdownlint/sync");
const markdownIt = require("markdown-it");
const periodEnding = require("./custom-rules/period-ending.cjs");

// Directory to scan, relative to this script.
const docsDirectory = path.resolve(__dirname, "my-website");

// Find all Markdown files
function findMarkdownFiles(directory) {
  const markdownFiles = [];

  for (const entry of fs.readdirSync(directory, {
    withFileTypes: true
  })) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      markdownFiles.push(...findMarkdownFiles(fullPath));
    } else if (
      entry.isFile() &&
      /\.md$/i.test(entry.name)
    ) {
      markdownFiles.push(fullPath);
    }
  }

  return markdownFiles;
}

// Collect all Markdown files
const files = findMarkdownFiles(docsDirectory);

if (files.length === 0) {
  console.log(`No Markdown files found in ${docsDirectory}`);
  process.exitCode = 1;
} else {
  const results = lint({
    files,
    config: {},
    customRules: Array.isArray(periodEnding)
      ? periodEnding
      : [periodEnding],

    // Create a Markdown parser for rules that require it.
    markdownItFactory: () => markdownIt({ html: true })
  });

  console.log(results.toString());

  const errorAmount = Object.values(results).reduce(
    (total, errors) => total + errors.length,
    0
  );

  console.log(
    `Checked ${files.length} Markdown files; found ${errorAmount} violations.`
  );
  
  // Create report of linting results
  const reportLines = [];
  let errorCount = 0;
  
  for (const [filePath, errors] of Object.entries(results)) {
    for (const error of errors) {
      errorCount++;
  
      reportLines.push(
        `${filePath}:${error.lineNumber}:${error.column || 1} ` +
        `[${error.ruleNames?.join(", ") || "custom-rule"}] ` +
        `${error.ruleDescription || error.errorDetail || error.errorContext || "Lint violation"}`
      );
    }
  }
  
  const summary =
	`Checked ${files.length} Markdown files; ` +
	`found ${errorCount} violations.`;

  reportLines.push("", summary);
  
  const report = reportLines.join("\n");
  const reportPath = path.resolve(__dirname, "lint-report.txt");
  
  fs.writeFileSync(reportPath, report, "utf8");
  
  console.log(report);
  console.log(`\nReport saved to: ${reportPath}`);
  
  if (errorCount > 0) {
    process.exitCode = 1;
  }
}