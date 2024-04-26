import { describe, it, expect } from 'bun:test'
import head from './head'

describe('head', () => {
  it('returns the first element of an array', () => {
    expect(head([1, 2, 3])).toBe(1)
    expect(head(['a', 'b', 'c'])).toBe('a')
    expect(head([true, false])).toBe(true)
  })

  it('returns undefined for an empty array', () => {
    expect(head([])).toBeUndefined()
  })
})
