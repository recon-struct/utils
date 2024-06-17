import { describe, expect, it } from 'bun:test'
import getBoundingBox from './get-bounding-box'

describe('getBoundingBox', () => {
  it('should calculate the bounding box of a polygon', () => {
    const points = [0, 0, 1, 1, 2, 0, 1, -1]
    expect(getBoundingBox(...points)).toEqual([0, -1, 2, 1])
  })
})
