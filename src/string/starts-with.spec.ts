import { describe, expect, it } from 'bun:test'
import startsWith from './starts-with'

describe('startsWith', () => {
  it('should return true if the string starts with the prefix', () => {
    expect(startsWith('hello world', 'hello')).toBe(true)
    expect(startsWith('abc', 'a')).toBe(true)
    expect(startsWith('123', '12')).toBe(true)
  })

  it('should return false if the string does not start with the prefix', () => {
    expect(startsWith('hello world', 'world')).toBe(false)
    expect(startsWith('abc', 'b')).toBe(false)
    expect(startsWith('123', '23')).toBe(false)
  })

  it('should return true if the string and prefix are empty', () => {
    expect(startsWith('', '')).toBe(true)
  })
})
