import type { AnyStruct } from '~/struct/types'

/**
 * Shrinks the size of the given buffer by the length of the data.
 *
 * @param buffer - The buffer to shrink.
 * @param struct - The data to remove from the buffer.
 */
const bufferShrink = (buffer: ArrayBuffer, struct: AnyStruct) => {
  buffer.resize(buffer.byteLength - struct.byteLength)
}

export default bufferShrink
