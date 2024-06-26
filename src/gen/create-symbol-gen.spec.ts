import { describe, expect, it } from 'bun:test'
import createSymbolGen from './create-symbol-gen'

describe('createSymbolGen', () => {
  it('should generate unique symbols', () => {
    const symbolGenerator = createSymbolGen()

    const symbol1 = symbolGenerator.next().value
    const symbol2 = symbolGenerator.next().value
    const symbol3 = symbolGenerator.next().value

    expect(typeof symbol1).toBe('symbol')
    expect(typeof symbol2).toBe('symbol')
    expect(typeof symbol3).toBe('symbol')
    expect(symbol1).not.toBe(symbol2)
    expect(symbol1).not.toBe(symbol3)
    expect(symbol2).not.toBe(symbol3)
  })
})
