import { describe, expect, it } from 'bun:test'
import not from './not'

describe('not', () => {
  it('should return the logical negation of a boolean value', () => {
    expect(not(true)).toBe(false)
    expect(not(false)).toBe(true)
  })
})
