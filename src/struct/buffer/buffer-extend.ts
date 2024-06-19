import type { AnyStruct } from '~/struct/types'

/**
 * Extends the given buffer by the length of the data.
 *
 * @param buffer - The buffer to extend.
 * @param struct - The data to append to the buffer.
 */
const bufferExtend = (buffer: ArrayBuffer, struct: AnyStruct) => {
  buffer.resize(buffer.byteLength + struct.byteLength)
}

export default bufferExtend
