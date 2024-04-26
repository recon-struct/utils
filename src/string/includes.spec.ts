import { describe, expect, it } from 'bun:test'
import includes from './includes'

describe('includes', () => {
  it('should return true if the string includes the search string', () => {
    expect(includes('Hello, world!', 'world')).toBe(true)
  })

  it('should return false if the string does not include the search string', () => {
    expect(includes('Hello, world!', 'foo')).toBe(false)
  })

  it('should handle empty strings correctly', () => {
    expect(includes('', '')).toBe(true)
    expect(includes('Hello, world!', '')).toBe(true)
    expect(includes('', 'foo')).toBe(false)
  })

  it('should be case-sensitive by default', () => {
    expect(includes('Hello, world!', 'hello')).toBe(false)
  })
})
