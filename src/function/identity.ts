import type { Arity1 } from '@recon-struct/utility-types/dist/function/arity/arity-1'

export type Identity<A = any> = Arity1<A, A>

/**
 * Returns the input value unchanged.
 *
 * @param a The value to be returned.
 * @returns The input value unchanged.
 * @category Function
 */
const identity: Identity = a => a

export default identity
