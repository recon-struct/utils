import { describe, expect, it } from 'bun:test'
import structData from './struct-data'

describe('structData', () => {
  it('should create a datum object with the specified type and length', () => {
    const actual = structData('BigInt64')
    const expected = {
      type: 'data',
      dataType: 'BigInt64',
      byteLength: 8,
    } as const

    expect(actual).toEqual(expected)
  })
})
