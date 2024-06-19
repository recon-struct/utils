import { describe, expect, it } from 'bun:test'
import structData from '../struct-data'
import structTuple from '../struct-tuple'
import viewSet from './view-set'

describe('viewSet', () => {
  it('should set the dataStruct', () => {
    const struct = structData('Uint8')
    const view = new DataView(new ArrayBuffer(1))
    viewSet(view, struct, 0, 8)

    expect(view.getUint8(0)).toBe(8)
  })

  it('should set the dataStruct with offset', () => {
    const struct = structData('Uint8')
    const view = new DataView(new ArrayBuffer(2))
    viewSet(view, struct, 1, 8)

    expect(view.getUint8(1)).toBe(8)
  })

  it('should set the dataStruct with offset and littleEndian', () => {
    const struct = structData('Uint16')
    const view = new DataView(new ArrayBuffer(2))
    viewSet(view, struct, 0, 0x1234, true)

    expect(view.getUint16(0, true)).toBe(0x1234)
  })

  it('should set the dataStruct with offset and bigEndian', () => {
    const struct = structData('Uint16')
    const view = new DataView(new ArrayBuffer(2))
    viewSet(view, struct, 0, 0x1234, false)

    expect(view.getUint16(0, false)).toBe(0x1234)
  })

  it('should support dataTuple', () => {
    const struct = structTuple([structData('Uint8'), structData('Uint8')])
    const view = new DataView(new ArrayBuffer(2))
    viewSet(view, struct, 0, [8, 16])

    expect(view.getUint8(0)).toBe(8)
    expect(view.getUint8(1)).toBe(16)
  })

  it('should support nested dataTuple', () => {
    const struct = structTuple([
      structData('Uint8'),
      structTuple([structData('Uint8'), structData('Uint8')]),
    ])
    const view = new DataView(new ArrayBuffer(3))
    viewSet(view, struct, 0, [8, [16, 32]])

    expect(view.getUint8(0)).toBe(8)
    expect(view.getUint8(1)).toBe(16)
    expect(view.getUint8(2)).toBe(32)
  })
})
