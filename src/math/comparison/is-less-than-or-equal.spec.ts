import { describe, expect, it } from 'bun:test'
import isLessThanOrEqual from './is-less-than-or-equal'

describe('isLessThanOrEqual', () => {
  it('should return true if the first number is less than or equal to the second number', () => {
    expect(isLessThanOrEqual(2, 3)).toBe(true)
    expect(isLessThanOrEqual(3, 3)).toBe(true)
    expect(isLessThanOrEqual(-1, 0)).toBe(true)
  })

  it('should return false if the first number is greater than the second number', () => {
    expect(isLessThanOrEqual(5, 2)).toBe(false)
    expect(isLessThanOrEqual(3, -1)).toBe(false)
  })
})
