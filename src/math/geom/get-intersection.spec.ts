import { describe, expect, it } from 'bun:test'
import getIntersection from './get-intersection'

describe('getIntersection', () => {
  it('should calculate the intersection point between two lines', () => {
    expect(getIntersection(-5, -5, 5, 5, -5, 5, 5, -5)).toEqual([0, 0])
  })

  it('sohudl return null if the lines are parallel', () => {
    expect(getIntersection(-5, -5, 5, 5, -5, -5, 5, 5)).toBeNull()
  })
})
