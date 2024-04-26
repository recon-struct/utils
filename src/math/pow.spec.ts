import { describe, expect, it } from 'bun:test'
import pow from './pow'

describe('pow', () => {
  it('should calculate the power of a number', () => {
    expect(pow(2, 3)).toBe(8)
    expect(pow(5, 0)).toBe(1)
    expect(pow(10, 2)).toBe(100)
    expect(pow(3, 4)).toBe(81)
  })
})
