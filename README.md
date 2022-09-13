# Playwright demo

### Playwright example tests for GitHub

An example implementation of Playwright tests with a GitHub workflow 
that generates a HTML report published on GitHub Pages.

## Features
- GitHub workflow with cron scheduling, Docker images, Artifacts storage, and 
HTML reporting on GitHub Pages

## Local Installation
```sh
npm i -D @playwright/test
npx playwright install
```

## Command line (CLI) execution examples
Run tests headlessly:
```sh
npx playwright test
```
Run tests in headed browsers:
```sh
npx playwright test --headed
```
Run tests with the substring "check" in the title ("-g" can also be written as "--grep"):
```sh
npx playwright test -g "check"
```
Run tests with the Tag "@smoke" (Tags are part of the test title):
```sh
npx playwright test -g "@smoke"
```

## GitHub example workflow
The GitHub example workflow uses a cron schedule to trigger a build on every push 
and runs at minute 5 past every 3rd hour from 1 through 23.

It uses a [Docker image] with all operating system dependencies and the pre-installed 
browsers provided by Playwright.

It generates a HTML report that gets published on GitHub Pages (a static web site on GitHub).

All Artifacts get attached as a zip file to the build results (in the "Actions" section 
of GitHub). Artifacts include the HTML test report and videos of the test executions.

[//]: #
[Docker image]: <https://playwright.dev/docs/docker>
