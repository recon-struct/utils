import { describe, expect, it } from 'bun:test'
import createCycleGenerator from './create-cycle-generator'

describe('createCycleGenerator', () => {
  it('should generate an infinite sequence of values from an array', () => {
    const generator = createCycleGenerator([1, 2, 3])
    const expectedSequence = [1, 2, 3, 1, 2, 3, 1, 2, 3]

    for (let i = 0; i < expectedSequence.length; i++) {
      const nextValue = generator.next().value
      expect(nextValue).toBe(expectedSequence[i])
    }
  })
})
