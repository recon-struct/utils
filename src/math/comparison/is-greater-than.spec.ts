import { describe, expect, it } from 'bun:test'
import isGreaterThan from './is-greater-than'

describe('isGreaterThan', () => {
  it('should return true if the first number is greater than the second number', () => {
    expect(isGreaterThan(5, 3)).toBe(true)
    expect(isGreaterThan(10, 5)).toBe(true)
    expect(isGreaterThan(-1, -5)).toBe(true)
  })

  it('should return false if the first number is not greater than the second number', () => {
    expect(isGreaterThan(3, 5)).toBe(false)
    expect(isGreaterThan(5, 10)).toBe(false)
    expect(isGreaterThan(-5, -1)).toBe(false)
    expect(isGreaterThan(5, 5)).toBe(false)
  })
})
