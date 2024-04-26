import { describe, expect, it } from 'bun:test'
import isLessThan from './is-less-than'

describe('isLessThan', () => {
  it('should return true if the first number is less than the second number', () => {
    expect(isLessThan(2, 5)).toBe(true)
    expect(isLessThan(-10, 0)).toBe(true)
    expect(isLessThan(3.14, 3.1416)).toBe(true)
  })

  it('should return false if the first number is greater than or equal to the second number', () => {
    expect(isLessThan(5, 2)).toBe(false)
    expect(isLessThan(0, -10)).toBe(false)
    expect(isLessThan(3.1416, 3.14)).toBe(false)
    expect(isLessThan(10, 10)).toBe(false)
  })
})
