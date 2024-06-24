import { Point } from '@recon-struct/utility-types/dist/geometry/point'
import { describe, expect, it } from 'bun:test'
import createPoint from './create-point'

describe('createPoint', () => {
  it('should create a point', () => {
    const actual = createPoint(1, 2)
    const expected = [1, 2] as Point<1, 2>

    expect(actual).toEqual(expected)
  })
})
