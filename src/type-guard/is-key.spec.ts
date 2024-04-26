import { describe, expect, it } from 'bun:test'
import isKey from './is-key'

describe('isKey', () => {
  it('should return true for string keys', () => {
    expect(isKey('name')).toBe(true)
  })

  it('should return true for number keys', () => {
    expect(isKey(42)).toBe(true)
  })

  it('should return true for symbol keys', () => {
    const key = Symbol('key')
    expect(isKey(key)).toBe(true)
  })

  it('should return false for non-key values', () => {
    expect(isKey(null)).toBe(false)
    expect(isKey(undefined)).toBe(false)
    expect(isKey(true)).toBe(false)
    expect(isKey(false)).toBe(false)
    expect(isKey({})).toBe(false)
    expect(isKey([])).toBe(false)
    expect(isKey(() => {})).toBe(false)
  })

  it('should return false for non-primitive keys', () => {
    expect(isKey(new String('name'))).toBe(false)
    expect(isKey(new Number(42))).toBe(false)
    expect(isKey(new Boolean(true))).toBe(false)
  })
})
