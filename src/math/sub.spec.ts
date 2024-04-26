import { describe, expect, it } from 'bun:test'
import sub from './sub'

describe('sub', () => {
  it('should subtract two numbers correctly', () => {
    expect(sub(5, 3)).toBe(2)
    expect(sub(10, 7)).toBe(3)
    expect(sub(-5, 2)).toBe(-7)
  })
})
