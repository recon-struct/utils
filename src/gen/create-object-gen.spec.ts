import { describe, expect, it } from 'bun:test'
import createObjectGen from './create-object-gen'

describe('createObjectGen', () => {
  it('should not yield the same object in consecutive calls', () => {
    const generator = createObjectGen('type', 'person')

    const result = generator.next()

    expect(result.value).toEqual({ type: 'person' })
    expect(result.done).toBe(false)
  })
})
