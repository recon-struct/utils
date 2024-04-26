import { describe, expect, it } from 'bun:test'
import setSymmetricDifference from './set-symmetric-difference'

describe('setDifference', () => {
  it('should calculate the difference of a and b', () => {
    const a = new Set([1, 2, 3])
    const b = new Set([2, 3, 4])
    const expected = new Set([1, 4])
    const actual = setSymmetricDifference(a, b)

    expect(actual).toEqual(expected)
  })

  it('should be symmetric', () => {
    const a = new Set([1, 2, 3])
    const b = new Set([2, 3, 4])
    const diffAB = setSymmetricDifference(a, b)
    const diffBA = setSymmetricDifference(b, a)

    expect(diffAB).toEqual(diffBA)
  })
})

export {}
