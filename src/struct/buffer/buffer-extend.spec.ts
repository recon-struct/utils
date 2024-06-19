import { describe, expect, it } from 'bun:test'
import structData from '../struct-data'
import bufferExtend from './buffer-extend'

describe('bufferExtend', () => {
  it('should extend the buffer', () => {
    const buffer = new ArrayBuffer(0, { maxByteLength: 1 })
    const struct = structData('Uint8')

    bufferExtend(buffer, struct)

    expect(buffer.byteLength).toBe(1)
  })

  it('should extend the buffer with offset', () => {
    const buffer = new ArrayBuffer(1, { maxByteLength: 2 })
    const struct = structData('Uint8')

    bufferExtend(buffer, struct)

    expect(buffer.byteLength).toBe(2)
  })

  it('should extend the buffer appropriately for multi-byte structs', () => {
    const buffer = new ArrayBuffer(0, { maxByteLength: 2 })
    const struct = structData('Uint16')

    bufferExtend(buffer, struct)

    expect(buffer.byteLength).toBe(2)
  })

  it('should extend the buffer with offset for multi-byte structs', () => {
    const buffer = new ArrayBuffer(1, { maxByteLength: 3 })
    const struct = structData('Uint16')

    bufferExtend(buffer, struct)

    expect(buffer.byteLength).toBe(3)
  })
})
