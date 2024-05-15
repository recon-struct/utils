import type { Arity0 as A0 } from '@recon-struct/utility-types/dist/function/arity/arity-0'
import type { Arity1 as A1 } from '@recon-struct/utility-types/dist/function/arity/arity-1'
import type { Arity2 as A2 } from '@recon-struct/utility-types/dist/function/arity/arity-2'
import type { Arity3 as A3 } from '@recon-struct/utility-types/dist/function/arity/arity-3'
import type { Arity4 as A4 } from '@recon-struct/utility-types/dist/function/arity/arity-4'
import type { Arity5 as A5 } from '@recon-struct/utility-types/dist/function/arity/arity-5'
import type { Arity6 as A6 } from '@recon-struct/utility-types/dist/function/arity/arity-6'
import type { Arity7 as A7 } from '@recon-struct/utility-types/dist/function/arity/arity-7'
import type { Arity8 as A8 } from '@recon-struct/utility-types/dist/function/arity/arity-8'
import type { PartApp0 as P0 } from '@recon-struct/utility-types/dist/function/part-app/part-app-0'
import type { PartApp1 as P1 } from '@recon-struct/utility-types/dist/function/part-app/part-app-1'
import type { PartApp2 as P2 } from '@recon-struct/utility-types/dist/function/part-app/part-app-2'
import type { PartApp3 as P3 } from '@recon-struct/utility-types/dist/function/part-app/part-app-3'
import type { PartApp4 as P4 } from '@recon-struct/utility-types/dist/function/part-app/part-app-4'
import type { PartApp5 as P5 } from '@recon-struct/utility-types/dist/function/part-app/part-app-5'
import type { PartApp6 as P6 } from '@recon-struct/utility-types/dist/function/part-app/part-app-6'
import type { PartApp7 as P7 } from '@recon-struct/utility-types/dist/function/part-app/part-app-7'
import type { PartApp8 as P8 } from '@recon-struct/utility-types/dist/function/part-app/part-app-8'

/**
 * Represents a Salsa function.
 */
export interface Salsa {
  <A>(_: A0<A>): P0<A>
  <A, B>(_: A1<A, B>): P1<A, B>
  <A, B, C>(_: A2<A, B, C>): P2<A, B, C>
  <A, B, C, D>(_: A3<A, B, C, D>): P3<A, B, C, D>
  <A, B, C, D, E>(_: A4<A, B, C, D, E>): P4<A, B, C, D, E>
  <A, B, C, D, E, F>(_: A5<A, B, C, D, E, F>): P5<A, B, C, D, E, F>
  <A, B, C, D, E, F, G>(_: A6<A, B, C, D, E, F, G>): P6<A, B, C, D, E, F, G>
  <A, B, C, D, E, F, G, H>(
    _: A7<A, B, C, D, E, F, G, H>,
  ): P7<A, B, C, D, E, F, G, H>
  <A, B, C, D, E, F, G, H, I>(
    _: A8<A, B, C, D, E, F, G, H, I>,
  ): P8<A, B, C, D, E, F, G, H, I>
}

/**
 * Curries a function with every possible permutation of up to 8 parameters
 * @param callback The function to salsa
 * @returns The spiced function
 * @category Function
 */
const salsa: Salsa = (callback: any) => {
  const spiced = (...params: any[]) => {
    if (params.length >= callback.length) {
      return callback(...params)
    }

    return (...more: any[]) => spiced(...params, ...more)
  }

  return spiced
}

export default salsa
