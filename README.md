# documentation-quality-pipeline
Documentation Quality Check Pipeline - HTMLHint, markdownlint-cli2, Vale, GitLab & GitHub CI/CD, failure demonstrations, quality report.

**Business problem:** 

Linting allows for quality assurance testing in documentation and prevents issues such as gramatical errors and formatting errors from being published. This enhances user experience and increases brand image. 

The automated CI/CD pipelines allow these quality tests to run each time a change is pushed to Git.

**Approach:** 

I chose the following tools for this project:

- (HTMLHint)[https://htmlhint.com/getting-started/]
- markdownlint-cli2
- Vale 
- GitHub CI

The above linting tools are all prevalent ways to complete quality checks. I wanted to include both HTML and Markdown linters since those are the two most prominent ways of publishing documentation. 

**Architecture:** 

How does data or content flow through the system?

**Implementation:** 

What did you configure, write, or automate?

1. I installed NPM, HTMLHint

**Validation:** 

How did you test that it works?

**Results:** 

What did you measure or verify?

**Limitations:** 

What does your evidence not establish?

**Reproduction:**

How can someone run or review the project?

**Deliverable:**
Demonstrate a failing CI job due to quality errors in documentation, followed by a passing job due to the resolved quality fixes. 
