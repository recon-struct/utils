import { describe, expect, it } from 'bun:test'
import getPolygonArea from './get-polygon-area'

describe('getPolygonArea', () => {
  it('should calculate the area of a polygon', () => {
    const points = [0, 0, 1, 1, 2, 0, 1, -1]
    expect(getPolygonArea(...points)).toEqual(2)
  })
})
