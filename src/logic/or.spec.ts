import { describe, expect, it } from 'bun:test'
import or from './or'

describe('or', () => {
  it('should return true if either input is true', () => {
    expect(or(true, false)).toBe(true)
    expect(or(false, true)).toBe(true)
    expect(or(true, true)).toBe(true)
  })

  it('should return false if both inputs are false', () => {
    expect(or(false, false)).toBe(false)
  })
})
