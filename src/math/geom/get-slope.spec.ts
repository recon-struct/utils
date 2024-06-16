import { describe, expect, it } from 'bun:test'
import getSlope from './get-slope'

describe('getSlope', () => {
  it('should calculate the slope between two points', () => {
    expect(getSlope(0, 0, 1, 1)).toEqual(1)
    expect(getSlope(0, 0, 2, 1)).toEqual(0.5)
    expect(getSlope(0, 0, 1, 2)).toEqual(2)
    expect(getSlope(0, 0, 2, 2)).toEqual(1)
  })
})
