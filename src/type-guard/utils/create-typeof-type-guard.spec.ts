import { describe, expect, it } from 'bun:test'
import createTypeofTypeGuard from './create-typeof-type-guard'

describe('createTypeofTypeGuard', () => {
  it('should return a type guard function that checks if the type of a value matches the specified type name', () => {
    const isString = createTypeofTypeGuard<string>('string')
    expect(isString('hello')).toBe(true)
    expect(isString(123)).toBe(false)
    expect(isString(true)).toBe(false)
  })
})
