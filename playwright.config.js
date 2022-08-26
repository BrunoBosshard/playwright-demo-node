const { devices } = require('@playwright/test');
const config = {
  testDir: './tests',
  /* Fail the build on CI if test.only is left in the source code */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* GitHub and HTML reporters on CI, HTML only locally */
  reporter: process.env.CI ? [['github'],['html']] : [['html',{open:'never'}]],
  use: {
    baseURL: 'https://playwright.dev',
    screenshot: 'only-on-failure',
    video: 'on',
    trace: 'on-first-retry'
  }, 
  projects: [
    {
      name: 'Desktop Chrome',
      browserName: 'chromium',
      viewport: { width: 1280, height: 720 }
    },
    {
      name: 'Desktop Firefox',
      browserName: 'firefox',
      viewport: { width: 1280, height: 720 }
    },
    {
      name: 'Desktop Safari',
      browserName: 'webkit',
      viewport: { width: 1280, height: 720 }
    },
    {
      name: 'Apple iOS',
      use: { ...devices['iPhone 13 Pro'] },
    },
    {
      name: 'Google Android',
      use: { ...devices['Pixel 5'] },
    }
  ]
};
module.exports = config;
