import { describe, expect, it } from 'bun:test'
import createBigintGenerator from './create-bigint-generator'

describe('createBigintGenerator', () => {
  it('should generate incrementing bigint values', () => {
    const generator = createBigintGenerator()
    let currentValue = BigInt(0)

    for (let i = 0; i < 10; i++) {
      const nextValue = generator.next().value
      expect(nextValue.toString()).toBe(currentValue.toString())
      currentValue = nextValue + BigInt(1)
    }
  })
})
