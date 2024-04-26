import type { AnyArray, Last } from '@recon-struct/utility-types'

const last = <A extends AnyArray>(items: A): Last<A> => items[items.length - 1]

export default last
