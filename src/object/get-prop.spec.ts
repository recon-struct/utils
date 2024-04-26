import { describe, expect, it } from 'bun:test'
import getProp from './get-prop'

describe('getProp', () => {
  it('should return the value of the property if it exists', () => {
    const obj = { a: 'b' }
    const result = getProp(obj, 'a')
    expect(result).toBe('b')
  })

  it('should return undefined if the property does not exist', () => {
    const obj = { a: 'b' }
    const result = getProp(obj, 'c')
    expect(result).toBeUndefined()
  })

  it('should return false if the object is nullish', () => {
    const obj = null
    const result = getProp(obj, 'a')
    expect(result).toBe(false)
  })
})
