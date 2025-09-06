# playwright-bdd-example

Example project that uses [playwright-bdd](https://github.com/vitalets/playwright-bdd) to run BDD tests.

## How to run it locally / How to report a bug

   ### Required dependencies
   ```sh

   npm install .
   ```

   # how to run a feature file specifically.
   npm run test -- BuildAndPrice.feature --project chromium
--workers=4 --headed=false
   # how to run a test by tag.
   npm run test -- "@BuildAndPriceTest" --project chromium
   npm run test -- "@BuildAndPriceTest" --workers=4 --headed=false

   ```
   ## The `--` command
   > The `--` comand when working with scripts within the package.json file will append anything we add to the end of the command to our comamnd in the scripts. 

   ### Output:
   ```sh
   Running 2 tests using 1 worker
   2 passed (2.3s)
   ```
<!-- Installtion for allure report -->
Step 1 : Install Below Dependencies
 "allure-js-commons": "^3.2.1",
 "allure-playwright": "^3.2.1",
Step 2 : Add this code into playwright.config.ts file
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
]
Step 3 : Create a scripts in package.json
To generate the allure report for current execution
"allure:generate": "allure generate out/allure-results --clean -o allure-report",

To open the allure report for current execution
"allure:open": "allure open allure-report",

Step 4 :
<!-- Generate and Open allure report -->
npm run allure:generate
npm run allure:open

npm install
npm install playwright-bdd
npx playwright install
npm install @axe-core/playwright

