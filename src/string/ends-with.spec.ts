import { describe, expect, it } from 'bun:test'
import endsWith from './ends-with'

describe('endsWith', () => {
  it('should return true if the string ends with the specified suffix', () => {
    expect(endsWith('hello', 'lo')).toBe(true)
    expect(endsWith('world', 'rld')).toBe(true)
    expect(endsWith('abc', 'c')).toBe(true)
  })

  it('should return false if the string does not end with the specified suffix', () => {
    expect(endsWith('hello', 'world')).toBe(false)
    expect(endsWith('abc', 'd')).toBe(false)
    expect(endsWith('foo', 'bar')).toBe(false)
  })

  it('should return true if the string and suffix are empty', () => {
    expect(endsWith('', '')).toBe(true)
  })
})
