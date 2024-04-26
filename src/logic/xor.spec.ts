import { describe, expect, it } from 'bun:test'
import xor from './xor'

describe('xor', () => {
  it('should return true when one input is true and the other is false', () => {
    expect(xor(true, false)).toBe(true)
    expect(xor(false, true)).toBe(true)
  })

  it('should return false when both inputs are true', () => {
    expect(xor(true, true)).toBe(false)
  })

  it('should return false when both inputs are false', () => {
    expect(xor(false, false)).toBe(false)
  })
})
