import { Line } from '@recon-struct/utility-types'
import { describe, expect, it } from 'bun:test'
import createLine from './create-line'

describe('createLine', () => {
  it('should create a line', () => {
    const actual = createLine([1, 2], [3, 4])
    const expected: Line<[1, 2], [3, 4]> = [
      [1, 2],
      [3, 4],
    ]

    expect(actual).toEqual(expected)
  })
})
