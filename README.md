# @commercetools/jest-enzyme-matchers
Enzyme specific jest matchers

## Installation

1. Add package

  `npm install @commercetools/jest-enzyme-matchers --save-dev`

2. Add `testFrameworkScriptFile`

  Set up a [`setupTestFrameworkScriptFile`](https://facebook.github.io/jest/docs/configuration.html#setuptestframeworkscriptfile-string).
  Create that file and add it to the jest configuration.

3. Add matchers to Jest

  In that `testFrameworkScriptFile` file, import the matchers and add them to jest

  ```js
  import * as enzymeMatchers from '@commercetools/jest-enzyme-matchers'

  expect.extend(enzymeMatchers)

  // more expect.extend calls for your own matcheres
  // expect.extend({ /* ... */ })
  ```

## Usage

#### `toRender(selector)`

Passes when at least one element matching the [`selector`](https://github.com/airbnb/enzyme/blob/master/docs/api/selector.md) is found in the wrapper.

```js
import Icon from 'somewhere'

describe('Component', () => {
  const wrapper = shallow(<Component />)
  it('should render an Icon', () => {
    expect(wrapper).toRender(Icon)
  })
  it('should render a Button', () => {
    expect(wrapper).toRender('Button')
  })
})
```

#### `toRenderElementTimes(selector, times)`


Passes when the number of elements matching the [`selector`](https://github.com/airbnb/enzyme/blob/master/docs/api/selector.md) found in the wrapper matches `times` exactly.

```js
import Icon from 'somewhere'

describe('Component', () => {
  const wrapper = shallow(<Component />)
  it('should render one Icon', () => {
    expect(wrapper).toRenderElementTimes(Icon, 1)
  })
  it('should render two Buttons', () => {
    expect(wrapper).toRenderElementTimes('Button', 2)
  })
})
```
