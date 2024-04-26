import { describe, expect, it } from 'bun:test'
import createInstanceTypeGuard from './create-instance-type-guard'

class MyClass {
  // ...
}

describe('createInstanceTypeGuard', () => {
  it('should return a type guard function that checks if a value is an instance of a given class', () => {
    const instanceTypeGuard = createInstanceTypeGuard(MyClass)

    expect(instanceTypeGuard(new MyClass())).toBe(true)
    expect(instanceTypeGuard({})).toBe(false)
    expect(instanceTypeGuard(null)).toBe(false)
    expect(instanceTypeGuard(undefined)).toBe(false)
    expect(instanceTypeGuard(123)).toBe(false)
    expect(instanceTypeGuard('test')).toBe(false)
  })
})
