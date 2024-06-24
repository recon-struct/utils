import { describe, expect, it } from 'bun:test'
import swap from './swap'

describe('swap', () => {
  it('swaps two elements in an array', () => {
    const actual = swap([1, 2, 3] as const, 0, 2)
    const expected = [3, 2, 1] as [3, 2, 1]

    expect(actual).toEqual(expected)
  })
})
