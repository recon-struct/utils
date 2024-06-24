import { Path } from '@recon-struct/utility-types/dist/geometry/path'
import { describe, expect, it } from 'bun:test'
import createPath from './create-path'

describe('createPath', () => {
  it('should create a path', () => {
    const actual = createPath([
      [1, 2],
      [3, 4],
      [5, 6],
    ] as const)
    const expected: Path<[[1, 2], [3, 4], [5, 6]], true> = {
      type: 'path',
      points: [
        [1, 2],
        [3, 4],
        [5, 6],
      ],
      isClosed: true,
    }

    expect(actual).toEqual(expected)
  })
})
