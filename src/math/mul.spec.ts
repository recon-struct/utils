import { describe, expect, it } from 'bun:test'
import mul from './mul'

describe('mul', () => {
  it('should multiply two positive numbers', () => {
    expect(mul(2, 3)).toBe(6)
  })

  it('should multiply a positive number and zero', () => {
    expect(mul(4, 0)).toBe(0)
  })

  it('should multiply a positive number and a negative number', () => {
    expect(mul(5, -2)).toBe(-10)
  })

  it('should multiply two negative numbers', () => {
    expect(mul(-3, -4)).toBe(12)
  })
})
