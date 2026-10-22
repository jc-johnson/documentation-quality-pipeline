# documentation-quality-pipeline
Documentation Quality Check Pipeline - HTMLHint, markdownlint-cli2, Vale, GitLab & GitHub CI/CD, failure demonstrations, quality report.

**Business problem:** 

Linting allows for quality assurance testing in documentation and prevents issues such as gramatical errors and formatting errors from being published. This enhances user experience and increases brand image. 

The automated CI/CD pipelines allow these quality tests to run each time a change is pushed to Git.

**Approach:** 

I chose the following tools for this project:

- [HTMLHint](https://htmlhint.com/getting-started/)
	- https://www.npmjs.com/package/markdownlint/v/0.42.0
- [markdownlint](https://github.com/DavidAnson/markdownlint/blob/v0.41.1/README.md)
- [markdownlint-cli](https://github.com/igorshubovych/markdownlint-cli)
- [markdownlint-cli2](https://github.com/DavidAnson/markdownlint-cli2)
- Vale 
- GitHub CI
- [pre-commit](https://pre-commit.com/)

The above linting tools are all prevalent ways to complete quality checks. I wanted to include both HTML and Markdown linters since those are the two most prominent ways of publishing documentation. 

**Architecture:** 

How does data or content flow through the system?

**Implementation:** 

What did you configure, write, or automate?

1. Created a **.htmlhintrc** configuration file to run quality checks on HTML files
2. Created a **config.toml** configuration file for markdownlint and ran it over a directory of Markdown files. Output the results to **markdownLintOutput.txt**
	- `markdownlint .\my-website\ --output markdownLintOutput.txt`
	- I counted the number of lines/errors in the file in PowerShell using `(Get-Content markdownLintOutput.txt).Count`
3. Created a custom check rule for markdowncli and markdownlint-cli2
	- required to import `markdown-it`
		- `npm install markdown-it`
	- [Markdownlint Versions](https://www.npmjs.com/package/markdownlint?activeTab=versions)
4. Created a pre-commit script to automatically run linters before every commit

**Validation:** 

How did you test that it works?
- Created a file with initial errors that violated linting rules. 
- Ran the linter and verified the errors were being caught.
- Fixed the errors in the html or markdown files.
- Reran the linter and verified there were no errors being thrown. 

**Results:** 

What did you measure or verify?

Verified that errors thrown can be automatically be caught before pushing changes to git. Reducing the chances of errors being published to Git. 

**Limitations:** 

What does your evidence not establish?

**Reproduction:**

How can someone run or review the project?

Install Markdownlint, markdownlint-cli, Markdown-cli2:

npm install markdownlint --save-dev
npm install -g markdownlint-cli
npm install markdownlint-cli2 --global

**Deliverable:**
Demonstrate a failing CI job due to quality errors in documentation, followed by a passing job due to the resolved quality fixes. 