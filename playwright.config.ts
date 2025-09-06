import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig, cucumberReporter } from 'playwright-bdd';
import "dotenv/config"

/**
 * Author: Aniket Gosavi
 * Date: 2025-08-09
 * Description: Added all required configuration related to paths, reports and borwsers .
 */

const testDir = defineBddConfig({
  paths: ['playwright/features/**/*.feature'],
  require: ['playwright/steps/*.ts'],
  importTestFrom: 'playwright/steps/fixtures.ts',
});

export default defineConfig({
  use: {
    launchOptions: {
      args: ["--start-maximized"]
    },
    permissions: ['geolocation'],
    geolocation: { latitude: 0, longitude: 0 }, // Set to a neutral location if needed
    headless: true,
    ignoreHTTPSErrors: true, 
    video: 'off',
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
  testDir,
  timeout: 1000 * 1000,
  reporter: [
  ["list"],
  [
    "allure-playwright",
    {
      resultsDir: "./out/allure-results",
      environmentInfo: {
        node_version: process.version,
      },
    },
  ],
],
     
  projects: [
    {
      name: 'chromium',
      use: {
        viewport: null
      }
    },
    // {
    //   name: 'Firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'WebKit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ]
});
