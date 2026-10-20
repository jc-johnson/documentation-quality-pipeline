# Intro
This is my repository that holds [Markdown](https://www.markdownguide.org/) files of my user guides to be generated using [Docusaurus](https://docusaurus.io/docs).

## Deploy Instructions
1. Install [Docusaurus](https://docusaurus.io/docs) and [Node JS](https://nodejs.org/en).
2. Download/Clone this repo.
3. Navigate to the **my-website** folder.
4. Run the command **npm run build**.
5. Upload the generated **build** folder to your hosting provider.

## Markdownlint-cli2 Linting
Install [markdownlint-cli2](https://github.com/DavidAnson/markdownlint-cli2) as a global CLI 
	**npm install markdownlint-cli2 --global**

Run markdownlint-cli2 *.{md,markdown} to lint all Markdown files in the current directory.
	Run markdownlint-cli2 "*.{md,markdown}" to do the above in PowerShell.
	
Note: Glob expressions in markdownlint-cli2 are pattern-matching strings powered by the globby library used to select or ignore Markdown files for linting