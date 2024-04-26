import { describe, expect, it } from 'bun:test'
import isNullish from './is-nullish'

describe('isNullish', () => {
  it('should return true for null', () => {
    expect(isNullish(null)).toBe(true)
  })

  it('should return true for undefined', () => {
    expect(isNullish(undefined)).toBe(true)
  })

  it('should return false for non-nullish values', () => {
    expect(isNullish(0)).toBe(false)
    expect(isNullish('')).toBe(false)
    expect(isNullish(false)).toBe(false)
    expect(isNullish({})).toBe(false)
    expect(isNullish([])).toBe(false)
  })
})
