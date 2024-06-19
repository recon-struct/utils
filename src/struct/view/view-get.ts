import getIsLittleEndian from '~/endian/get-is-little-endian'
import { STRUCT_TYPES } from '../constants'
import type { AnyStruct } from '../types'

/**
 * Retrieves structured data from a DataView object based on a given struct definition.
 *
 * @param view - The DataView object to retrieve data from.
 * @param struct - The struct definition that describes the data structure.
 * @param offset - The offset within the DataView object to start retrieving data from.
 * @param isLittleEndian - Optional. Specifies whether the data is in little-endian byte order. Defaults to the system's endianness.
 * @returns The structured data retrieved from the DataView object.
 * @throws If the offset is outside the bounds of the DataView object's buffer.
 */
const viewGet = (
  view: DataView,
  struct: AnyStruct,
  offset: number,
  isLittleEndian = getIsLittleEndian(),
) => {
  const { byteLength: structByteLen } = struct
  const {
    buffer: { byteLength: bufferByteLen },
  } = view
  const end = offset + structByteLen

  if (end > bufferByteLen) {
    throw new RangeError('Offset is outside the bounds of the buffer')
  }

  let localOffset = 0

  const traverseStruct = (currentStruct: AnyStruct): any => {
    if (currentStruct.type === STRUCT_TYPES.Data) {
      const { byteLength, dataType } = currentStruct
      const methodName = `get${dataType}` as const
      const viewMethod = methodName

      const result = view[viewMethod](offset + localOffset, isLittleEndian)

      localOffset += byteLength

      return result
    } else {
      const items = []
      for (let i = 0; i < currentStruct.items.length; i++) {
        items.push(traverseStruct(currentStruct.items[i]))
      }
      return items
    }
  }

  return traverseStruct(struct)
}

export default viewGet
