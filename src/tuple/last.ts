import type { AnyArray } from '@recon-struct/utility-types/dist/any/any-array'
import type { Last } from '@recon-struct/utility-types/dist/tuple/last'

const last = <A extends AnyArray>(items: A): Last<A> => items[items.length - 1]

export default last
