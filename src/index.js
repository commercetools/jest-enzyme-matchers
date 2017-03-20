import stripIndent from 'common-tags/lib/stripIndent'
import getDisplayName from 'react-display-name'

export function toRender (wrapper, element) {
  // check that received is actually a wrapper
  if (!wrapper || !wrapper.debug || !wrapper.find) {
    const matcherHint = this.isNot ? '.not.toRender' : '.toRender'
    return {
      pass: this.isNot,
      message: stripIndent`
        ${this.utils.matcherHint(matcherHint)}\n
          Argument passed to expect() must be an enzyme wrapper.
          Received:
            ${this.utils.printReceived(wrapper)}`,
    }
  }

  const pass = wrapper.find(element).length > 0
  const componentName = typeof element === 'string'
    ? element
    : getDisplayName(element)

  const message = pass
    ? () => stripIndent`
      ${this.utils.matcherHint('.not.toRender')}\n
        Expected wrapper to not render:
          ${this.utils.printExpected(componentName)}
        Received:
          ${this.utils.printReceived(wrapper.debug())}`
    : () => stripIndent`
      ${this.utils.matcherHint('.toRender')}\n
        Expected value to render:
          ${this.utils.printExpected(componentName)}
        Received:
          ${this.utils.printReceived(wrapper.debug())}`

  return { actual: wrapper, message, pass }
}

export function toRenderElementTimes (wrapper, element, times) {
  // check that received is actually a wrapper
  if (!wrapper || !wrapper.debug || !wrapper.find) {
    const matcherHint = this.isNot
      ? '.not.toRenderElementTimes'
      : '.toRenderElementTimes'
    return {
      pass: this.isNot,
      message: stripIndent`
        ${this.utils.matcherHint(matcherHint)}\n
          Argument passed to expect() must be an enzyme wrapper.
          Received:
            ${this.utils.printReceived(wrapper)}`,
    }
  }

  const actualTimes = wrapper.find(element).length
  const pass = actualTimes === times
  const componentName = typeof element === 'string'
    ? element
    : getDisplayName(element)

  const componentString = this.utils.printExpected(componentName)
  const timeString = this.utils.printExpected(times)
  const message = pass
    ? () => stripIndent`
      ${this.utils.matcherHint('.not.toRenderElementTimes')}\n
        Expected wrapper to not render ${componentString} ${timeString} times.
        It was rendered ${this.utils.printReceived(actualTimes)} times:
          ${this.utils.printReceived(wrapper.debug())}`
    : () => stripIndent`
      ${this.utils.matcherHint('.toRenderElementTimes')}\n
        Expected wrapper to render ${componentString} ${timeString} times.
        It was rendered ${this.utils.printReceived(actualTimes)} times:
          ${this.utils.printReceived(wrapper.debug())}`

  return { actual: wrapper, message, pass }
}