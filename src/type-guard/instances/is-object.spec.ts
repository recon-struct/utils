import { describe, expect, it } from 'bun:test'
import isObject from './is-object'

describe('isObject', () => {
  it('should return true for object', () => {
    expect(isObject({})).toBe(true)
  })

  it('should return true for array', () => {
    expect(isObject([])).toBe(true)
  })

  it('should return false for string', () => {
    expect(isObject('')).toBe(false)
  })

  it('should return false for number', () => {
    expect(isObject(0)).toBe(false)
  })

  it('should return false for boolean', () => {
    expect(isObject(false)).toBe(false)
  })

  it('should return false for null', () => {
    expect(isObject(null)).toBe(false)
  })

  it('should return false for undefined', () => {
    expect(isObject(undefined)).toBe(false)
  })

  it('should return false for function', () => {
    expect(isObject(() => {})).toBe(false)
  })
})
