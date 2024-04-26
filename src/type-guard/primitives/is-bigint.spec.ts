import { describe, expect, it } from 'bun:test'
import isBigint from './is-bigint'

describe('isBigint', () => {
  it('should return true for bigint', () => {
    expect(isBigint(1n)).toBe(true)
  })

  it('should return false for number', () => {
    expect(isBigint(1)).toBe(false)
  })

  it('should return false for string', () => {
    expect(isBigint('')).toBe(false)
  })

  it('should return false for boolean', () => {
    expect(isBigint(false)).toBe(false)
  })

  it('should return false for object', () => {
    expect(isBigint({})).toBe(false)
  })

  it('should return false for array', () => {
    expect(isBigint([])).toBe(false)
  })

  it('should return false for null', () => {
    expect(isBigint(null)).toBe(false)
  })

  it('should return false for undefined', () => {
    expect(isBigint(undefined)).toBe(false)
  })

  it('should return false for function', () => {
    expect(isBigint(() => {})).toBe(false)
  })
})
