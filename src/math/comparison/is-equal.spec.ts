import { describe, expect, it } from 'bun:test'
import isEqual from './is-equal'

describe('isEqual', () => {
  it('should return true when values are equal', () => {
    expect(isEqual(5, 5)).toBe(true)
    expect(isEqual('hello', 'hello')).toBe(true)
  })

  it('should return false when values are not equal', () => {
    expect(isEqual(5, 10)).toBe(false)
    expect(isEqual('hello', 'world')).toBe(false)
    expect(isEqual({ name: 'John' }, { name: 'John' })).toBe(false)
  })
})
