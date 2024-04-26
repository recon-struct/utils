import { describe, expect, it } from 'bun:test'
import swap from './swap'

describe('swap', () => {
  it('should swap the order of arguments for a given function', () => {
    const subtract = (a: number, b: number) => a - b
    const swappedSubtract = swap(subtract)

    expect(subtract(5, 3)).toBe(2)
    expect(swappedSubtract(5, 3)).toBe(-2)
  })
})
