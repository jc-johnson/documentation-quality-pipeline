# Intro
This is my repository that holds 

- [Markdown](https://www.markdownguide.org/) files of my user guides I generated using [Docusaurus](https://docusaurus.io/docs).

- Linting configuration files and rules used with [markdownlint-cli2](https://github.com/DavidAnson/markdownlint-cli2)

## Deploy Instructions
1. Install [Docusaurus](https://docusaurus.io/docs) and [Node JS](https://nodejs.org/en).
2. Download/Clone this repo.
3. Navigate to the **my-website** folder.
4. Run the command **npm run build**.
5. Upload the generated **build** folder to your hosting provider.

## Markdownlint-cli2 Linting
Install [markdownlint-cli2](https://github.com/DavidAnson/markdownlint-cli2) as a global CLI 
	**npm install markdownlint-cli2 --global**

Run `markdownlint-cli2 *.{md,markdown}` to lint all Markdown files in the current directory.
	Run `markdownlint-cli2 "*.{md,markdown}"` to do the above in PowerShell.
	
Note: Glob expressions in markdownlint-cli2 are pattern-matching strings powered by the globby library used to select or ignore Markdown files for linting

Run `node lint.js` to run linter with custom rules

## Important Files/Directories

- Custom rules are held in /custom-rules

- Markdown files are held in /my-website

- Configuration file for **markdownlint-cli2** is **.markdownlint-cli2.yaml**

- Lint.js is the main file that runs the linter and ouputs findings to **lint-report.txt**

