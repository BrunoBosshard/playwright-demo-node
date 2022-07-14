const { devices } = require('@playwright/test');
const config = {
  /* Fail the build on CI if test.only is left in the source code */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  use: {
    screenshot: 'on',
    video: 'on',
    trace: 'on'
  },
  reporter: [ ['html', { open: 'never' }] ],  
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
  ],
};
module.exports = config;
