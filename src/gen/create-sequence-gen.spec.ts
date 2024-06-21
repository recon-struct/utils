import { describe, expect, it } from 'bun:test'
import createSequenceGen from './create-sequence-gen'

describe('createSequenceGen', () => {
  it('should generate an infinite sequence of values from an array', () => {
    const generator = createSequenceGen([1, 2, 3])
    const expectedSequence = [1, 2, 3, 1, 2, 3, 1, 2, 3]

    for (let i = 0; i < expectedSequence.length; i++) {
      const nextValue = generator.next().value
      expect(nextValue).toBe(expectedSequence[i])
    }
  })
})
