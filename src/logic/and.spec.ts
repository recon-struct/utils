import { describe, expect, it } from 'bun:test'
import and from './and'

describe('and', () => {
  it('should return true if both inputs are true', () => {
    expect(and(true, true)).toBe(true)
  })

  it('should return false if either input is false', () => {
    expect(and(true, false)).toBe(false)
    expect(and(false, true)).toBe(false)
    expect(and(false, false)).toBe(false)
  })
})
