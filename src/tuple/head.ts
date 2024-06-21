import type { AnyArray } from '@recon-struct/utility-types/dist/any/any-array'
import type { First } from '@recon-struct/utility-types/dist/tuple/first'

const head = <A extends AnyArray>(items: A): First<A> => items[0]

export const first = head

export default head
