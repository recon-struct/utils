import { describe, expect, it } from 'bun:test'
import getPointOnLine from './get-point-on-line'

describe('getPointOnLine', () => {
  it('should calculate the coordinates of a point on a line segment', () => {
    expect(getPointOnLine(0, 0, 1, 1, 0.5)).toEqual({ x: 0.5, y: 0.5 })
    expect(getPointOnLine(0, 0, 2, 1, 0.5)).toEqual({ x: 1, y: 0.5 })
    expect(getPointOnLine(0, 0, 1, 2, 0.5)).toEqual({ x: 0.5, y: 1 })
    expect(getPointOnLine(0, 0, 2, 2, 0.5)).toEqual({ x: 1, y: 1 })
  })
})
