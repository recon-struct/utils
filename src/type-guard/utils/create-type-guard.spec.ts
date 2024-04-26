import { describe, expect, it } from 'bun:test'
import createTypeGuard from './create-type-guard'

describe('createTypeGuard', () => {
  it('should return a type guard function', () => {
    const typeGuard = createTypeGuard(value => typeof value === 'string')
    expect(typeof typeGuard).toBe('function')
  })

  it('should correctly check if a value matches the specified type', () => {
    const stringTypeGuard = createTypeGuard(value => typeof value === 'string')
    expect(stringTypeGuard('hello')).toBe(true)
    expect(stringTypeGuard(123)).toBe(false)
  })
})
