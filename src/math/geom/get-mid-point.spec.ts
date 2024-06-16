import { describe, expect, it } from 'bun:test'
import getMidPoint from './get-mid-point'

describe('getMidPoint', () => {
  it('should calculate the midpoint between two points', () => {
    expect(getMidPoint(0, 0, 1, 1)).toEqual({ x: 0.5, y: 0.5 })
    expect(getMidPoint(0, 0, 2, 1)).toEqual({ x: 1, y: 0.5 })
    expect(getMidPoint(0, 0, 1, 2)).toEqual({ x: 0.5, y: 1 })
    expect(getMidPoint(0, 0, 2, 2)).toEqual({ x: 1, y: 1 })
  })
})
