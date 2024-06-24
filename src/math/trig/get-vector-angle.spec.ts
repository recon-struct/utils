import { describe, expect, it } from 'bun:test'
import getVectorAngle from './get-vector-angle'

describe('getVectorAngle', () => {
  it('returns the angle between two vectors', () => {
    const actual = getVectorAngle([1, 0], [0, 0], [0, 0], [0, 1])
    const expected = Math.PI / 2

    expect(actual).toBe(expected)
  })
})
