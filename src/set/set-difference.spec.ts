import { describe, expect, it } from 'bun:test'
import setDifference from './set-difference'

describe('setDifference', () => {
  it('should calculate the difference of a and b', () => {
    const a = new Set([1, 2, 3])
    const b = new Set([2, 3, 4])
    const expected = new Set([1])
    const actual = setDifference(a, b)

    expect(actual).toEqual(expected)
  })

  it('should not be symmetric', () => {
    const a = new Set([1, 2, 3])
    const b = new Set([2, 3, 4])
    const diffAB = setDifference(a, b)
    const diffBA = setDifference(b, a)

    expect(diffAB).not.toEqual(diffBA)
  })
})

export {}
