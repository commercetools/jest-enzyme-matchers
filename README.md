# jest-enzyme-matchers
Enzyme specific jest matchers

## Installation

1. Add package

  `npm install jest-enzyme-matchers --save-dev`

2. Add `testFrameworkScriptFile`

  Set up a [`setupTestFrameworkScriptFile`](https://facebook.github.io/jest/docs/configuration.html#setuptestframeworkscriptfile-string).
  Create that file and add it to the jest configuration.

3. Add matchers to Jest

  In that `testFrameworkScriptFile` file, import the matchers and add them to jest

  ```js
  import * as enzymeMatchers from 'jest-enzyme-matchers'

  expect.extend(enzymeMatchers)

  // more expect.extend calls for your own matcheres
  // expect.extend({ /* ... */ })
  ```
