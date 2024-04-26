import { describe, expect, it } from 'bun:test'
import isConstructor from './is-constructor'

describe('isConstructor', () => {
  it('should return true for constructor functions', () => {
    class MyClass {}
    const result = isConstructor(MyClass)
    expect(result).toBe(true)
  })

  it('should return false for non-constructor functions', () => {
    const myFunction = () => {}
    const result = isConstructor(myFunction)
    expect(result).toBe(false)
  })

  it('should return false for non-function values', () => {
    const value = 123
    const result = isConstructor(value)
    expect(result).toBe(false)
  })
})
