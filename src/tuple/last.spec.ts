import { describe, it, expect } from 'bun:test'
import last from './last'

describe('last', () => {
  it('should return the last element of an array', () => {
    expect(last([1, 2, 3])).toBe(3)
    expect(last(['a', 'b', 'c'])).toBe('c')
    expect(last([true, false])).toBe(false)
  })

  it('should return undefined for an empty array', () => {
    expect(last([])).toBeUndefined()
  })

  it('should handle arrays with a single element', () => {
    expect(last([42])).toBe(42)
    expect(last(['hello'])).toBe('hello')
    expect(last([true])).toBe(true)
  })
})
