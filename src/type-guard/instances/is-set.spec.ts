import { describe, expect, it } from 'bun:test'
import isSet from './is-set'

describe('isSet', () => {
  it('should return true for an instance of Set', () => {
    const set = new Set()
    expect(isSet(set)).toBe(true)
  })

  it('should return false for other types', () => {
    expect(isSet(null)).toBe(false)
    expect(isSet(undefined)).toBe(false)
    expect(isSet('')).toBe(false)
    expect(isSet(123)).toBe(false)
    expect(isSet([])).toBe(false)
    expect(isSet({})).toBe(false)
    expect(isSet(new Map())).toBe(false)
  })
})
