import { describe, expect, it } from 'bun:test'
import getNorm from './get-norm'

describe('getNorm', () => {
  it('should normalize a value within a given range', () => {
    expect(getNorm(0, 10, 5)).toBe(0.5)
    expect(getNorm(0, 10, 10)).toBe(1)
    expect(getNorm(0, 10, 0)).toBe(0)
    expect(getNorm(-5, 5, 0)).toBe(0.5)
  })

  it('should throw an error if the value is outside the provided range', () => {
    expect(() => getNorm(0, 10, -5)).toThrow('Value out of range')
    expect(() => getNorm(0, 10, 15)).toThrow('Value out of range')
  })

  it('should handle negative ranges', () => {
    expect(getNorm(-10, 0, -5)).toBe(0.5)
    expect(getNorm(-10, 0, 0)).toBe(1)
    expect(getNorm(-10, 0, -10)).toBe(0)
  })

  it('should work as expected when the first parameter is greater than the second', () => {
    expect(getNorm(10, 0, 5)).toBe(0.5)
    expect(getNorm(10, 0, 0)).toBe(1)
    expect(getNorm(10, 0, 10)).toBe(0)
    expect(getNorm(10, -10, -5)).toBe(0.75)
  })
})
