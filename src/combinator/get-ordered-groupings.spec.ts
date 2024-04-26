import { describe, expect, it } from 'bun:test'
import getOrderedGroupings from './get-ordered-groupings'

describe('orderedGroupings', () => {
  it('should generate all ordered groupings up to the value of n', () => {
    expect(getOrderedGroupings(0)).toEqual([])
    expect(getOrderedGroupings(1)).toEqual([[1]])
    expect(getOrderedGroupings(2)).toEqual([[2], [1, 1]])
    expect(getOrderedGroupings(3)).toEqual([[3], [1, 2], [1, 1, 1], [2, 1]])
  })

  it('should throw an error if n is less than 0', () => {
    expect(() => getOrderedGroupings(-1)).toThrow(
      'The value of n must be greater than or equal to 0.',
    )
  })
})
