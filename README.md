# Webdriver.IO Boilerplate

## To displaying the allure report

```
allure generate --clean allure-results && allure open
```

## To run selenium server standalone

```
java -jar selenium-server-standalone-3.141.59 -port 4545
```

## Features

1. Cross browser testing
2. Parallel testing
3. Reporting (Allure)
4. Continuous integration (Jenkins)
5. Page object design patterns
6. Screenplay design patterns

## Enhancements

1. Migrate from Sync to Async Mode
2. Run in headless mode

## Recommendations

1. Put all string constants in a separate file (constants.js for example)
2. Make utils folder for utilities functions (string to number for example)
3. Create resources files
4. Put all locators in separate file

## Extensions

1. ES6 Mocha Snippets

## Best Practices

1. Use chai globally (wdio.config.js)
   Note you can use it per test file `import {expect as chaiExpect} from 'chai'`

## Challenges

1. cross-origin frame

## TODO

1. class getter paramter ($$searchBarAccordion in watches page)
