import { describe, expect, it } from 'bun:test'
import isUndefined from './is-undefined'

describe('isUndefined', () => {
  it('should return true for undefined', () => {
    expect(isUndefined(undefined)).toBe(true)
  })

  it('should return false for null', () => {
    expect(isUndefined(null)).toBe(false)
  })

  it('should return false for empty string', () => {
    expect(isUndefined('')).toBe(false)
  })

  it('should return false for zero', () => {
    expect(isUndefined(0)).toBe(false)
  })

  it('should return false for false', () => {
    expect(isUndefined(false)).toBe(false)
  })

  it('should return false for an object', () => {
    expect(isUndefined({})).toBe(false)
  })

  it('should return false for an array', () => {
    expect(isUndefined([])).toBe(false)
  })

  it('should return false for a function', () => {
    expect(isUndefined(() => {})).toBe(false)
  })
})
