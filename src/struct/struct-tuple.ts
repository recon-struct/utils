import add from '~/math/add'
import { STRUCT_TYPES } from './constants'
import type { AnyStruct, StructTuple } from './types'

/**
 * Creates a struct tuple from an array of struct data items.
 *
 * @template A - The tuple type representing the struct data items.
 * @param items - The array of struct data items.
 * @returns The struct tuple containing the items and byte
 *                             length.
 */
const structTuple = <A extends AnyStruct[]>(
  items: [...A], // NOTE this converts the `A` to a tuple type
): StructTuple<typeof items> => ({
  type: STRUCT_TYPES.Tuple,
  items: items,
  byteLength: items.reduce(
    (acc, { byteLength }) => add(acc, byteLength),
    0 as any,
  ),
})

export default structTuple
