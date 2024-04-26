import { describe, expect, it } from 'bun:test'
import isBoolean from './is-boolean'

describe('isBoolean', () => {
  it('should return true for boolean', () => {
    expect(isBoolean(true)).toBe(true)
  })

  it('should return false for string', () => {
    expect(isBoolean('')).toBe(false)
  })

  it('should return false for number', () => {
    expect(isBoolean(0)).toBe(false)
  })

  it('should return false for object', () => {
    expect(isBoolean({})).toBe(false)
  })

  it('should return false for array', () => {
    expect(isBoolean([])).toBe(false)
  })

  it('should return false for null', () => {
    expect(isBoolean(null)).toBe(false)
  })

  it('should return false for undefined', () => {
    expect(isBoolean(undefined)).toBe(false)
  })

  it('should return false for function', () => {
    expect(isBoolean(() => {})).toBe(false)
  })
})
