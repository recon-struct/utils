import { describe, expect, it } from 'bun:test'
import setUnion from './set-union'

describe('setUnion', () => {
  it('should calculate the union of two sets', () => {
    const setA = new Set(['a', 'b', 'c'] as const)
    const setB = new Set(['b', 'c', 'd'] as const)
    const expected = new Set(['a', 'b', 'c', 'd'] as const)
    const actual = setUnion(setA, setB)

    expect(actual).toEqual(expected)
  })

  it('should be symmetric', () => {
    const setA = new Set(['a', 'b', 'c'])
    const setB = new Set(['b', 'c', 'd'])
    const uniAB = setUnion(setA, setB)
    const uniBA = setUnion(setB, setA)

    expect(uniAB).toEqual(uniBA)
  })
})

export {}
