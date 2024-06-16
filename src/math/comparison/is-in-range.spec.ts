import { describe, expect, it } from 'bun:test'
import isInRange from './is-in-range'

describe('isInRange', () => {
  it('should return true if the value is within the range', () => {
    expect(isInRange(0, 10, 5)).toBe(true)
    expect(isInRange(0, 10, 10)).toBe(true)
    expect(isInRange(0, 10, 0)).toBe(true)
    expect(isInRange(-5, 5, 0)).toBe(true)
  })

  it('should return false if the value is outside the range', () => {
    expect(isInRange(0, 10, -5)).toBe(false)
    expect(isInRange(0, 10, 15)).toBe(false)
  })

  it('should handle negative ranges', () => {
    expect(isInRange(-10, 0, -5)).toBe(true)
    expect(isInRange(-10, 0, 0)).toBe(true)
    expect(isInRange(-10, 0, -10)).toBe(true)
  })

  it('should work as expected when the first parameter is greater than the second', () => {
    expect(isInRange(10, 0, 5)).toBe(true)
    expect(isInRange(10, 0, 0)).toBe(true)
    expect(isInRange(10, 0, 10)).toBe(true)
    expect(isInRange(10, -10, -5)).toBe(true)
  })

  it('should support exclusive ranges', () => {
    expect(isInRange({ value: 0, isInclusive: false }, 10, 0)).toBe(false)
    expect(isInRange(0, { value: 10, isInclusive: false }, 10)).toBe(false)
    expect(isInRange(10, { value: 0, isInclusive: false }, 0)).toBe(false)
    expect(isInRange({ value: 10, isInclusive: false }, 0, 10)).toBe(false)
  })
})
