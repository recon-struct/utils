import { describe, expect, it } from 'bun:test'
import structData from '../struct-data'
import structTuple from '../struct-tuple'
import viewGet from './view-get'

describe('viewGet', () => {
  it('should get the dataStruct', () => {
    const struct = structData('Uint8')
    const view = new DataView(new ArrayBuffer(1))
    view.setUint8(0, 8)

    expect(viewGet(view, struct, 0)).toBe(8)
  })

  it('should get the dataStruct with offset', () => {
    const struct = structData('Uint8')
    const view = new DataView(new ArrayBuffer(2))
    view.setUint8(1, 8)

    expect(viewGet(view, struct, 1)).toBe(8)
  })

  it('should get the dataStruct with offset and littleEndian', () => {
    const struct = structData('Uint16')
    const view = new DataView(new ArrayBuffer(2))
    view.setUint16(0, 0x1234, true)

    expect(viewGet(view, struct, 0, true)).toBe(0x1234)
  })

  it('should get the dataStruct with offset and bigEndian', () => {
    const struct = structData('Uint16')
    const view = new DataView(new ArrayBuffer(2))
    view.setUint16(0, 0x1234, false)

    expect(viewGet(view, struct, 0, false)).toBe(0x1234)
  })

  it('should support dataTuple', () => {
    const struct = structTuple([structData('Uint8'), structData('Uint8')])
    const view = new DataView(new ArrayBuffer(2))
    view.setUint8(0, 8)
    view.setUint8(1, 16)

    expect(viewGet(view, struct, 0)).toEqual([8, 16])
  })

  it('should support nested dataTuple', () => {
    const struct = structTuple([
      structData('Uint8'),
      structTuple([structData('Uint8'), structData('Uint8')]),
    ])
    const view = new DataView(new ArrayBuffer(3))
    view.setUint8(0, 8)
    view.setUint8(1, 16)
    view.setUint8(2, 32)

    expect(viewGet(view, struct, 0)).toEqual([8, [16, 32]])
  })
})
