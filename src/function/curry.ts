import type { Arity0 as A0 } from '@recon-struct/utility-types/dist/function/arity/arity-0'
import type { Arity1 as A1 } from '@recon-struct/utility-types/dist/function/arity/arity-1'
import type { Arity2 as A2 } from '@recon-struct/utility-types/dist/function/arity/arity-2'
import type { Arity3 as A3 } from '@recon-struct/utility-types/dist/function/arity/arity-3'
import type { Arity4 as A4 } from '@recon-struct/utility-types/dist/function/arity/arity-4'
import type { Arity5 as A5 } from '@recon-struct/utility-types/dist/function/arity/arity-5'
import type { Arity6 as A6 } from '@recon-struct/utility-types/dist/function/arity/arity-6'
import type { Arity7 as A7 } from '@recon-struct/utility-types/dist/function/arity/arity-7'
import type { Arity8 as A8 } from '@recon-struct/utility-types/dist/function/arity/arity-8'

/**
 * Represents a curried function.
 */
export interface Curry {
  <A>(_: A0<A>): A0<A>
  <A, B>(_: A1<A, B>): A1<A, B>
  <A, B, C>(_: A2<A, B, C>): A1<A, A1<B, C>>
  <A, B, C, D>(_: A3<A, B, C, D>): A1<A, A1<B, A1<C, D>>>
  <A, B, C, D, E>(_: A4<A, B, C, D, E>): A1<A, A1<B, A1<C, A1<D, E>>>>
  <A, B, C, D, E, F>(
    _: A5<A, B, C, D, E, F>,
  ): A1<A, A1<B, A1<C, A1<D, A1<E, F>>>>>
  <A, B, C, D, E, F, G>(
    _: A6<A, B, C, D, E, F, G>,
  ): A1<A, A1<B, A1<C, A1<D, A1<E, A1<F, G>>>>>>
  <A, B, C, D, E, F, G, H>(
    _: A7<A, B, C, D, E, F, G, H>,
  ): A1<A, A1<B, A1<C, A1<D, A1<E, A1<F, A1<G, H>>>>>>>
  <A, B, C, D, E, F, G, H, I>(
    _: A8<A, B, C, D, E, F, G, H, I>,
  ): (a: A) => A1<A, A1<B, A1<C, A1<D, A1<E, A1<F, A1<G, H>>>>>>>
}

/**
 * Curry a function based on its arity.
 *
 * @param callback - The function to be curried.
 * @returns The curried function.
 * @category Function
 */
export const curry: Curry = (callback: any) => {
  switch (callback.length) {
    case 0: {
      return callback
    }
    case 1: {
      return callback
    }
    case 2: {
      return (a: any) => (b: any) => callback(a, b)
    }
    case 3: {
      return (a: any) => (b: any) => (c: any) => callback(a, b, c)
    }
    case 4: {
      return (a: any) => (b: any) => (c: any) => (d: any) =>
        callback(a, b, c, d)
    }
    case 5: {
      return (a: any) => (b: any) => (c: any) => (d: any) => (e: any) =>
        callback(a, b, c, d, e)
    }
    case 6: {
      return (a: any) =>
        (b: any) =>
        (c: any) =>
        (d: any) =>
        (e: any) =>
        (f: any) =>
          callback(a, b, c, d, e, f)
    }
    case 7: {
      return (a: any) =>
        (b: any) =>
        (c: any) =>
        (d: any) =>
        (e: any) =>
        (f: any) =>
        (g: any) =>
          callback(a, b, c, d, e, f, g)
    }
    case 8: {
      return (a: any) =>
        (b: any) =>
        (c: any) =>
        (d: any) =>
        (e: any) =>
        (f: any) =>
        (g: any) =>
        (h: any) =>
          callback(a, b, c, d, e, f, g, h)
    }
  }
}

export default curry
