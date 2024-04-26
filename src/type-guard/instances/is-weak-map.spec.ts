import { describe, expect, it } from 'bun:test'
import isWeakMap from './is-weak-map'

describe('isWeakMap', () => {
  it('should return true for an instance of WeakMap', () => {
    const weakMap = new WeakMap()
    expect(isWeakMap(weakMap)).toBe(true)
  })

  it('should return false for other types', () => {
    expect(isWeakMap(null)).toBe(false)
    expect(isWeakMap(undefined)).toBe(false)
    expect(isWeakMap({})).toBe(false)
    expect(isWeakMap([])).toBe(false)
    expect(isWeakMap(123)).toBe(false)
    expect(isWeakMap('weakMap')).toBe(false)
    expect(isWeakMap(true)).toBe(false)
    expect(isWeakMap(Symbol())).toBe(false)
    expect(isWeakMap(() => {})).toBe(false)
    expect(isWeakMap(new Map())).toBe(false)
    expect(isWeakMap(new Set())).toBe(false)
  })
})
