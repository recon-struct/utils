import { describe, expect, it } from 'bun:test'
import isGreaterThanOrEqual from './is-greater-than-or-equal'

describe('isGreaterThan', () => {
  it('should return true if the first number is greater than or equal to the second number', () => {
    expect(isGreaterThanOrEqual(3, 2)).toBe(true)
    expect(isGreaterThanOrEqual(3, 3)).toBe(true)
    expect(isGreaterThanOrEqual(0, -1)).toBe(true)
  })

  it('should return false if the first number is less than the second number', () => {
    expect(isGreaterThanOrEqual(2, 3)).toBe(false)
    expect(isGreaterThanOrEqual(-1, 0)).toBe(false)
  })
})

const x = isGreaterThanOrEqual(1, 2)
