import { describe, expect, it } from 'bun:test'
import getIsBigEndian from './get-is-big-endian'
import getIsLittleEndian from './get-is-little-endian'

describe('getIsLittleEndian', () => {
  it('should return true if the system is little-endian', () => {
    expect(getIsLittleEndian()).toBe(!getIsBigEndian())
  })
})
