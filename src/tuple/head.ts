import type { AnyArray, First } from '@recon-struct/utility-types'

const head = <A extends AnyArray>(items: A): First<A> => items[0]

export const first = head

export default head
