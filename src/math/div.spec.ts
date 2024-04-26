import { describe, expect, it } from 'bun:test'
import div from './div'

describe('div', () => {
  it('should divide two numbers correctly', () => {
    expect(div(10, 2)).toBe(5)
    expect(div(15, 3)).toBe(5)
    expect(div(8, 4)).toBe(2)
  })

  it('should handle division by zero', () => {
    expect(div(10, 0)).toBe(Infinity)
    expect(div(-10, 0)).toBe(-Infinity)
    expect(div(0, 0)).toBe(NaN)
  })
})
