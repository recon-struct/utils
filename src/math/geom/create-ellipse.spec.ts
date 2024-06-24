import { Ellipse } from '@recon-struct/utility-types/dist/geometry/ellipse'
import { describe, expect, it } from 'bun:test'
import createEllipse from './create-ellipse'

describe('createEllipse', () => {
  it('should create an ellipse', () => {
    const actual = createEllipse([1, 2], 3, 4, 5)
    const expected: Ellipse<[1, 2], 3, 4, 5> = {
      type: 'ellipse',
      center: [1, 2],
      radiusX: 3,
      radiusY: 4,
      rotation: 5,
    }

    expect(actual).toEqual(expected)
  })
})
