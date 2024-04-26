import { describe, expect, it } from 'bun:test'
import isPrimitive from './is-primitive'
describe('isPrimitive', () => {
  it('should return true for primitive values', () => {
    expect(isPrimitive(42)).toBe(true)
    expect(isPrimitive('hello')).toBe(true)
    expect(isPrimitive(true)).toBe(true)
    expect(isPrimitive(null)).toBe(true)
    expect(isPrimitive(undefined)).toBe(true)
  })

  it('should return false for non-primitive values', () => {
    expect(isPrimitive({})).toBe(false)
    expect(isPrimitive([])).toBe(false)
    expect(isPrimitive(() => {})).toBe(false)
    expect(isPrimitive(new Date())).toBe(false)
    expect(isPrimitive(/regex/)).toBe(false)
  })
})
