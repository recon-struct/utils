import { Arc } from '@recon-struct/utility-types/dist/geometry/arc'
import { describe, expect, it } from 'bun:test'
import createArc from './create-arc'

describe('createArc', () => {
  it('should create an arc', () => {
    const actual = createArc([1, 2], 3, 4, 5)
    const expected: Arc<[1, 2], 3, 4, 5> = {
      type: 'arc',
      center: [1, 2],
      radius: 3,
      startAngle: 4,
      endAngle: 5,
    }

    expect(actual).toEqual(expected)
  })
})
