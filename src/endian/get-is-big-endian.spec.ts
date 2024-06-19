import { describe, expect, it } from 'bun:test'
import getIsBigEndian from './get-is-big-endian'
import getIsLittleEndian from './get-is-little-endian'

describe('getIsBigEndian', () => {
  it('should return true if the system is big-endian', () => {
    expect(getIsBigEndian()).toBe(!getIsLittleEndian())
  })
})
