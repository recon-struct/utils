import { describe, expect, it } from 'bun:test'
import log from './log'

describe('log', () => {
  it('should calculate the logarithm of a number with base 10 by default', () => {
    expect(log(100)).toBe(2)
    expect(log(1000)).toBe(3)
    expect(log(10000)).toBe(4)
  })

  it('should calculate the logarithm of a number with a specified base', () => {
    expect(log(8, 2)).toBe(3)
    // Note: Due to the floating point precision, the result is not exactly 3.
    expect(Math.floor(log(27, 3))).toBe(3)
    // Note: Due to the floating point precision, the result is not exactly 3.
    expect(Math.floor(log(125, 5))).toBe(3)
  })

  it('should throw an error if the base is less than or equal to 2', () => {
    expect(() => log(100, 0)).toThrow(
      'The numeric `base` cannot be less than 2',
    )
    expect(() => log(100, 1)).toThrow(
      'The numeric `base` cannot be less than 2',
    )
  })
})
