import getIsLittleEndian from '~/endian/get-is-little-endian'
import type { Struct } from '../../types'
import viewGet from '../view-get'

function* createGetGenerator(
  view: DataView,
  struct: Struct,
  offset: number,
  isLittleEndian: boolean = getIsLittleEndian(),
) {
  const bufferLength = view.buffer.byteLength
  let localOffset = offset

  while (localOffset < bufferLength) {
    const value = viewGet(view, struct, localOffset, isLittleEndian)
    localOffset += struct.byteLength

    yield value
  }
}

export default createGetGenerator
