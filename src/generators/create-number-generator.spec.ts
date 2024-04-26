import { describe, expect, it } from 'bun:test'
import createNumberGenerator from './create-number-generator'

describe('createNumberGenerator', () => {
  it('should generate an infinite sequence of numbers starting from 0', () => {
    const generator = createNumberGenerator()
    const expectedSequence = [0, 1, 2, 3, 4, 5] // Add more numbers as needed

    for (let i = 0; i < expectedSequence.length; i++) {
      const nextNumber = generator.next().value
      expect(nextNumber).toBe(expectedSequence[i])
    }
  })

  it('should return the final value of the generator', () => {
    const generator = createNumberGenerator()
    const finalValue = 100 // Replace with the expected final value

    for (let i = 0; i < finalValue; i++) {
      generator.next()
    }

    const result = generator.next().value
    expect(result).toBe(finalValue)
  })
})
