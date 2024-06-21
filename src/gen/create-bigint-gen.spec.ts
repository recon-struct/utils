import { describe, expect, it } from 'bun:test'
import createBigintGen from './create-bigint-gen'

describe('createBigintGen', () => {
  it('should generate incrementing bigint values', () => {
    const generator = createBigintGen()
    let currentValue = BigInt(0)

    for (let i = 0; i < 10; i++) {
      const nextValue = generator.next().value!
      expect(nextValue.toString()).toBe(currentValue.toString())
      currentValue = nextValue + BigInt(1)
    }
  })
})
