import { describe, expect, it } from 'bun:test'
import isSymbol from './is-symbol'

describe('isSymbol', () => {
  it('should return true for Symbol', () => {
    expect(isSymbol(Symbol())).toBe(true)
  })

  it('should return false for string', () => {
    expect(isSymbol('')).toBe(false)
  })

  it('should return false for number', () => {
    expect(isSymbol(0)).toBe(false)
  })

  it('should return false for boolean', () => {
    expect(isSymbol(false)).toBe(false)
  })

  it('should return false for object', () => {
    expect(isSymbol({})).toBe(false)
  })

  it('should return false for array', () => {
    expect(isSymbol([])).toBe(false)
  })

  it('should return false for null', () => {
    expect(isSymbol(null)).toBe(false)
  })

  it('should return false for undefined', () => {
    expect(isSymbol(undefined)).toBe(false)
  })

  it('should return false for function', () => {
    expect(isSymbol(() => {})).toBe(false)
  })
})
