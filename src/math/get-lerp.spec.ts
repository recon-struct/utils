import { describe, expect, it } from 'bun:test'
import getLerp from './get-lerp'

describe('getLerp', () => {
  it('should calculate the linear interpolation between two values', () => {
    expect(getLerp(0, 100, 0)).toEqual(0)
    expect(getLerp(0, 100, 0.5)).toEqual(50)
    expect(getLerp(0, 100, 1)).toEqual(100)
  })

  it('should calculate the linear interpolation between two negative values', () => {
    expect(getLerp(-100, 100, 0)).toEqual(-100)
    expect(getLerp(-100, 100, 0.5)).toEqual(0)
    expect(getLerp(-100, 100, 1)).toEqual(100)
  })

  it('should calculate the linear interpolation between two decimal values', () => {
    expect(getLerp(0.5, 1.5, 0)).toEqual(0.5)
    expect(getLerp(0.5, 1.5, 0.5)).toEqual(1)
    expect(getLerp(0.5, 1.5, 1)).toEqual(1.5)
  })

  it('should work when the first parameter is greater than the second', () => {
    expect(getLerp(100, 0, 0)).toEqual(100)
    expect(getLerp(100, 0, 0.5)).toEqual(50)
    expect(getLerp(100, 0, 1)).toEqual(0)
  })
})
