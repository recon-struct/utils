import { describe, expect, it } from 'bun:test'
import isArray from './is-array'

describe('isArray', () => {
  it('should return true for arrays', () => {
    expect(isArray([])).toBe(true)
  })

  it('should return false for non-arrays', () => {
    expect(isArray('')).toBe(false)
    expect(isArray(1)).toBe(false)
    expect(isArray({})).toBe(false)
    expect(isArray(null)).toBe(false)
    expect(isArray(undefined)).toBe(false)
    expect(isArray(() => {})).toBe(false)
  })
})
