import { BezierCurve } from '@recon-struct/utility-types/dist/geometry/bezier-curve'
import { describe, expect, it } from 'bun:test'
import createBezierCurve from './create-bezier-curve'

describe('createBezierCurve', () => {
  it('should create a bezier curve', () => {
    const actual = createBezierCurve([1, 2], [3, 4], [5, 6], [7, 8])
    const expected: BezierCurve<[1, 2], [3, 4], [5, 6], [7, 8]> = {
      type: 'bezier-curve',
      start: [1, 2],
      control1: [3, 4],
      control2: [5, 6],
      end: [7, 8],
    }

    expect(actual).toEqual(expected)
  })
})
