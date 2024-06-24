import { QuadraticCurve } from '@recon-struct/utility-types/dist/geometry/quadratic-curve'
import { describe, expect, it } from 'bun:test'
import createQuadraticCurve from './create-quadratic-curve'

describe('createQuadraticCurve', () => {
  it('should create a quadratic curve', () => {
    const actual = createQuadraticCurve([1, 2], [3, 4], [5, 6])
    const expected: QuadraticCurve<[1, 2], [3, 4], [5, 6]> = {
      type: 'quadratic-curve',
      start: [1, 2],
      control: [3, 4],
      end: [5, 6],
    }

    expect(actual).toEqual(expected)
  })
})
