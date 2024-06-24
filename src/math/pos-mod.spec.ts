import { describe, expect, it } from 'bun:test'
import posMod from './pos-mod'

describe('posMod', () => {
  it('calculates the positive modulus of two numbers', () => {
    const actual = posMod(5, 3)
    const expected = 2

    expect(actual).toBe(expected)
  })
})
