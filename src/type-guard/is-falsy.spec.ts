import { describe, expect, it } from 'bun:test'
import isFalsy from './is-falsy'

describe('is-falsy', () => {
  it('should return true for falsy values', () => {
    expect(isFalsy(undefined)).toBe(true)
    expect(isFalsy(null)).toBe(true)
    expect(isFalsy(false)).toBe(true)
    expect(isFalsy(0)).toBe(true)
    expect(isFalsy('')).toBe(true)
  })

  it('should return false for truthy values', () => {
    expect(isFalsy(true)).toBe(false)
    expect(isFalsy(1)).toBe(false)
    expect(isFalsy(' ')).toBe(false)
  })
})
