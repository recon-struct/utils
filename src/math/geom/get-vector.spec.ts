import { describe, expect, it } from 'bun:test'
import getVector from './get-vector'

describe('getVector', () => {
  it('calculates the vector between two points', () => {
    const result = getVector(0, 0, 1, 1)
    expect(result).toEqual([1, 1])
  })

  it('calculates the vector between two points', () => {
    const result = getVector(0, 0, 2, 3)
    expect(result).toEqual([2, 3])
  })

  it('calculates nagative vector between two points', () => {
    const result = getVector(0, 0, -1, -1)
    expect(result).toEqual([-1, -1])
  })

  it('calculates nagative vector between two points', () => {
    const result = getVector(0, 0, -2, -3)
    expect(result).toEqual([-2, -3])
  })
})
