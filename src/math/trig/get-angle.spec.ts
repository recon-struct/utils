import { describe, expect, it } from 'bun:test'
import getAngle from './get-angle'

describe('getAngle', () => {
  it('should calculate the angle between two points', () => {
    expect(getAngle(0, 0, 1, 1)).toBeCloseTo(0.7853981633974483)
  })

  it('should handle negative angles', () => {
    expect(getAngle(0, 0, -1, -1)).toBeCloseTo(-2.356194490192345)
  })
})
