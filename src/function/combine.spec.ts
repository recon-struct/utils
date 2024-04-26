import { describe, expect, it } from 'bun:test'

import combine from './combine'

describe('combine', () => {
  it('should combine two functions and apply them to the parameter', () => {
    // Define the functions to be combined
    const multiplyByTwo = (num: number) => num * 2
    const addThree = (num: number) => num + 3

    // Combine the functions
    const combinedFunction = combine((a: number, b: number) => a + b)(
      multiplyByTwo,
      addThree,
    )

    // Test the combined function
    expect(combinedFunction(5)).toBe(18) // (5 * 2) + (5 + 3) = 18
    expect(combinedFunction(10)).toBe(33) // (10 * 2) + (10 + 3) = 33
  })
})
