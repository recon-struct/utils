import { describe, expect, it } from 'bun:test'
import createObjectGenerator from './create-object-generator'

describe('createObjectGenerator', () => {
  it('should not yield the same object in consecutive calls', () => {
    const generator = createObjectGenerator('type', 'person')

    const result = generator.next()

    expect(result.value).toEqual({ type: 'person' })
    expect(result.done).toBe(false)
  })
})
