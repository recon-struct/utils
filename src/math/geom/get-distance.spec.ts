import { describe, expect, it } from 'bun:test'
import getDistance from './get-distance'

describe('getDistance', () => {
  it('should calculate the distance between two points', () => {
    expect(getDistance(0, 0, 1, 1)).toEqual(Math.SQRT2)
    expect(getDistance(0, 0, 2, 1)).toEqual(Math.hypot(2, 1))
    expect(getDistance(0, 0, 1, 2)).toEqual(Math.hypot(1, 2))
    expect(getDistance(0, 0, 2, 2)).toEqual(Math.hypot(2, 2))
  })
})
