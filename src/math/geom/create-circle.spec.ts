import { Circle } from '@recon-struct/utility-types/dist/geometry/circle'
import { describe, expect, it } from 'bun:test'
import createCircle from './create-circle'

describe('createCircle', () => {
  it('should create a circle', () => {
    const actual = createCircle([1, 2], 3)
    const expected: Circle<[1, 2], 3> = {
      type: 'circle',
      center: [1, 2],
      radius: 3,
    }

    expect(actual).toEqual(expected)
  })
})
