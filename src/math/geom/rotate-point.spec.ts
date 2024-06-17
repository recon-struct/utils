import { describe, expect, it } from 'bun:test'
import rotatePoint from './rotate-point'

describe('rotatePoint', () => {
  it('should correctly rotate a point around the origin', () => {
    const [newX, newY] = rotatePoint(1, 0, Math.PI / 2)
    expect(newX).toBeCloseTo(0)
    expect(newY).toBeCloseTo(1)
  })

  it('should correctly rotate a point around a given center', () => {
    const [newX, newY] = rotatePoint(2, 2, 1, 1, Math.PI)
    expect(newX).toBeCloseTo(0)
    expect(newY).toBeCloseTo(0)
  })
})
