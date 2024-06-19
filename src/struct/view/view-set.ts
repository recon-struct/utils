import getIsLittleEndian from '~/endian/get-is-little-endian'
import type { AnyStruct, StructValue } from '~/struct/types'
import { STRUCT_TYPES } from '../constants'

/**
 * Sets the values of a given struct in a DataView at the specified offset.
 *
 * @template A - The type of the DataView.
 * @template B - The type of the struct.
 * @template C - The type of the offset.
 * @template D - The type of the struct value.
 * @template E - The type of the isLittleEndian flag.
 * @param {A} view - The DataView to set the values in.
 * @param {B} struct - The struct whose values need to be set.
 * @param {C} offset - The offset at which to set the values.
 * @param {D} value - The value of the struct.
 * @param {E} isLittleEndian - The flag indicating whether the DataView is little endian.
 * @throws If the offset is outside the bounds of the buffer.
 */
const viewSet = <
  A extends DataView,
  B extends AnyStruct,
  C extends number,
  D extends StructValue<B>,
  E extends boolean = boolean,
>(
  view: A,
  struct: B,
  offset: C,
  value: D,
  isLittleEndian: E = getIsLittleEndian() as E,
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

  const traverseStruct = <F extends AnyStruct, G extends StructValue<F>>(
    currentStruct: F,
    currentvalue: G,
  ) => {
    if (currentStruct.type === STRUCT_TYPES.Data) {
      const { byteLength, dataType } = currentStruct
      const methodName = `set${dataType}` as const
      const viewMethod = methodName

      // FIXME hackish
      ;(view[viewMethod] as any)(
        offset + localOffset,
        currentvalue,
        isLittleEndian,
      )
      localOffset += byteLength
    } else {
      for (let i = 0; i < currentStruct.items.length; i++) {
        traverseStruct(currentStruct.items[i], (currentvalue as any[])[i])
      }
    }
  }

  traverseStruct(struct, value)
}

export default viewSet
