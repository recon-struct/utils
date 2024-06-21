import type { Struct } from '~/struct/types'

/**
 * Shrinks the size of the given buffer by the length of the data.
 *
 * @param buffer - The buffer to shrink.
 * @param struct - The data to remove from the buffer.
 */
const bufferShrink = (buffer: ArrayBuffer, struct: Struct) => {
  buffer.resize(buffer.byteLength - struct.byteLength)
  return buffer
}

export default bufferShrink
