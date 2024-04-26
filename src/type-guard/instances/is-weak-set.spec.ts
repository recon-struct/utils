import { describe, expect, it } from 'bun:test'
import isWeakSet from './is-weak-set'

describe('isWeakSet', () => {
  it('should return true for WeakSet instances', () => {
    const weakSet = new WeakSet()
    expect(isWeakSet(weakSet)).toBe(true)
  })

  it('should return false for non-WeakSet values', () => {
    expect(isWeakSet(null)).toBe(false)
    expect(isWeakSet(undefined)).toBe(false)
    expect(isWeakSet('')).toBe(false)
    expect(isWeakSet(123)).toBe(false)
    expect(isWeakSet([])).toBe(false)
    expect(isWeakSet({})).toBe(false)
    expect(isWeakSet(new Set())).toBe(false)
    expect(isWeakSet(new Map())).toBe(false)
  })
})
