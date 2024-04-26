import { describe, expect, it } from 'bun:test'
import getDeepProp from './get-deep-prop'

describe('getDeepProp', () => {
  it('should return the deep property value', () => {
    const obj = { a: { b: 'c' } }
    const result = getDeepProp(obj, 'a.b')
    expect(result).toBe('c')
  })

  it('should handle different connector characters', () => {
    const obj = { a: { b: 'c' } }
    const result = getDeepProp(obj, 'a/b', '/')
    expect(result).toBe('c')
  })
})
