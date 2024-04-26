import { describe, expect, it } from 'bun:test'
import isNumber from './is-number'

describe('isNumber', () => {
  it('should return true for numbers', () => {
    expect(isNumber(42)).toBe(true)
    expect(isNumber(3.14)).toBe(true)
    expect(isNumber(-10)).toBe(true)
  })

  it('should return false for non-numbers', () => {
    expect(isNumber('42')).toBe(false)
    expect(isNumber(true)).toBe(false)
    expect(isNumber(null)).toBe(false)
    expect(isNumber(undefined)).toBe(false)
    expect(isNumber({})).toBe(false)
    expect(isNumber([])).toBe(false)
    expect(isNumber(() => {})).toBe(false)
  })
})
