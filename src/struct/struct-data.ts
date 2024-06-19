import { DATA_TYPE_BYTE_LENGTHS, STRUCT_TYPES } from './constants'
import type { DataTypeKeys, StructData } from './types'

/**
 * Creates a datum object with the specified type and length.
 * @param type - The type of the datum.
 * @returns A datum object with the specified type and length.
 */
const structData = <A extends DataTypeKeys>(dataType: A): StructData<A> => ({
  type: STRUCT_TYPES.Data,
  dataType,
  byteLength: DATA_TYPE_BYTE_LENGTHS[dataType],
})

export default structData
