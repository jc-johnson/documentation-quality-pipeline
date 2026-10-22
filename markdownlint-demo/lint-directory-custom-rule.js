// Runs my custom linting rule period-ending.cjs over a specified directory including subdirectories

"use strict";

const fs = require("node:fs");
const path = require("node:path");
const { lint } = require("markdownlint/sync");
const markdownIt = require("markdown-it");
const periodEnding = require("./custom-rules/period-ending.cjs");

// Directory to scan, relative to this script.
const docsDirectory = path.resolve(__dirname, "my-website");

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
	 markdownItFactory: () => markdownIt({ html: true })
  });

  console.log(results.toString());

  const errorCount = Object.values(results).reduce(
    (total, errors) => total + errors.length,
    0
  );

  console.log(
    `Checked ${files.length} Markdown files; found ${errorCount} violations.`
  );

  if (errorCount > 0) {
    process.exitCode = 1;
  }
}
