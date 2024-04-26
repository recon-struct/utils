import { describe, expect, it } from 'bun:test'
import setProp from './set-prop'

describe('setProp', () => {
  it('should set a property on an object', () => {
    const obj = { a: 'b' }
    const result = setProp(obj, 'a', 'c')
    expect(result).toEqual({ a: 'c' })
  })
})
