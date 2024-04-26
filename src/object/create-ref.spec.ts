import { describe, expect, it } from 'bun:test'
import ref from './create-ref'

describe('create-ref', () => {
  it('should return an empty object when called without arguments', () => {
    const result = ref()
    expect(result).toEqual({})
  })

  it('should return the input value when it is not nullish', () => {
    const input = { foo: 'bar' }
    const result = ref(input)
    expect(result).toBe(input)
  })

  it('should return an empty object when the input value is nullish', () => {
    const nullishValues = [null, undefined]
    nullishValues.forEach(value => {
      const result = ref(value)
      expect(result).toEqual({})
    })
  })
})
