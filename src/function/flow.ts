import type { Arity1 } from '@recon-struct/utility-types/dist/function/arity/arity-1'

export interface Flow {
  <A, B>(ab: Arity1<A, B>): Arity1<A, B>
  <A, B, C>(ab: Arity1<A, B>, bc: Arity1<B, C>): Arity1<A, C>
  <A, B, C, D>(
    ab: Arity1<A, B>,
    bc: Arity1<B, C>,
    cd: Arity1<C, D>,
  ): Arity1<A, D>
  <A, B, C, D, E>(
    ab: Arity1<A, B>,
    bc: Arity1<B, C>,
    cd: Arity1<C, D>,
    de: Arity1<D, E>,
  ): Arity1<A, E>
  <A, B, C, D, E, F>(
    ab: Arity1<A, B>,
    bc: Arity1<B, C>,
    cd: Arity1<C, D>,
    de: Arity1<D, E>,
    ef: Arity1<E, F>,
  ): Arity1<A, F>
  <A, B, C, D, E, F, G>(
    ab: Arity1<A, B>,
    bc: Arity1<B, C>,
    cd: Arity1<C, D>,
    de: Arity1<D, E>,
    ef: Arity1<E, F>,
    fg: Arity1<F, G>,
  ): Arity1<A, G>
  <A, B, C, D, E, F, G, H>(
    ab: Arity1<A, B>,
    bc: Arity1<B, C>,
    cd: Arity1<C, D>,
    de: Arity1<D, E>,
    ef: Arity1<E, F>,
    fg: Arity1<F, G>,
    gh: Arity1<G, H>,
  ): Arity1<A, H>
  <A, B, C, D, E, F, G, H, I>(
    ab: Arity1<A, B>,
    bc: Arity1<B, C>,
    cd: Arity1<C, D>,
    de: Arity1<D, E>,
    ef: Arity1<E, F>,
    fg: Arity1<F, G>,
    gh: Arity1<G, H>,
    hi: Arity1<H, I>,
  ): Arity1<A, I>
  <A, B, C, D, E, F, G, H, I, J>(
    ab: Arity1<A, B>,
    bc: Arity1<B, C>,
    cd: Arity1<C, D>,
    de: Arity1<D, E>,
    ef: Arity1<E, F>,
    fg: Arity1<F, G>,
    gh: Arity1<G, H>,
    hi: Arity1<H, I>,
    ij: Arity1<I, J>,
  ): Arity1<A, J>
  <A, B, C, D, E, F, G, H, I, J, K>(
    ab: Arity1<A, B>,
    bc: Arity1<B, C>,
    cd: Arity1<C, D>,
    de: Arity1<D, E>,
    ef: Arity1<E, F>,
    fg: Arity1<F, G>,
    gh: Arity1<G, H>,
    hi: Arity1<H, I>,
    ij: Arity1<I, J>,
    jk: Arity1<J, K>,
  ): Arity1<A, K>
  <A, B, C, D, E, F, G, H, I, J, K, L>(
    ab: Arity1<A, B>,
    bc: Arity1<B, C>,
    cd: Arity1<C, D>,
    de: Arity1<D, E>,
    ef: Arity1<E, F>,
    fg: Arity1<F, G>,
    gh: Arity1<G, H>,
    hi: Arity1<H, I>,
    ij: Arity1<I, J>,
    jk: Arity1<J, K>,
    kl: Arity1<K, L>,
  ): Arity1<A, L>
  <A, B, C, D, E, F, G, H, I, J, K, L, M>(
    ab: Arity1<A, B>,
    bc: Arity1<B, C>,
    cd: Arity1<C, D>,
    de: Arity1<D, E>,
    ef: Arity1<E, F>,
    fg: Arity1<F, G>,
    gh: Arity1<G, H>,
    hi: Arity1<H, I>,
    ij: Arity1<I, J>,
    jk: Arity1<J, K>,
    kl: Arity1<K, L>,
    lm: Arity1<L, M>,
  ): Arity1<A, M>
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N>(
    ab: Arity1<A, B>,
    bc: Arity1<B, C>,
    cd: Arity1<C, D>,
    de: Arity1<D, E>,
    ef: Arity1<E, F>,
    fg: Arity1<F, G>,
    gh: Arity1<G, H>,
    hi: Arity1<H, I>,
    ij: Arity1<I, J>,
    jk: Arity1<J, K>,
    kl: Arity1<K, L>,
    lm: Arity1<L, M>,
    mn: Arity1<M, N>,
  ): Arity1<A, N>
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>(
    ab: Arity1<A, B>,
    bc: Arity1<B, C>,
    cd: Arity1<C, D>,
    de: Arity1<D, E>,
    ef: Arity1<E, F>,
    fg: Arity1<F, G>,
    gh: Arity1<G, H>,
    hi: Arity1<H, I>,
    ij: Arity1<I, J>,
    jk: Arity1<J, K>,
    kl: Arity1<K, L>,
    lm: Arity1<L, M>,
    mn: Arity1<M, N>,
    no: Arity1<N, O>,
  ): Arity1<A, O>
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>(
    ab: Arity1<A, B>,
    bc: Arity1<B, C>,
    cd: Arity1<C, D>,
    de: Arity1<D, E>,
    ef: Arity1<E, F>,
    fg: Arity1<F, G>,
    gh: Arity1<G, H>,
    hi: Arity1<H, I>,
    ij: Arity1<I, J>,
    jk: Arity1<J, K>,
    kl: Arity1<K, L>,
    lm: Arity1<L, M>,
    mn: Arity1<M, N>,
    no: Arity1<N, O>,
    op: Arity1<O, P>,
  ): Arity1<A, P>
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>(
    ab: Arity1<A, B>,
    bc: Arity1<B, C>,
    cd: Arity1<C, D>,
    de: Arity1<D, E>,
    ef: Arity1<E, F>,
    fg: Arity1<F, G>,
    gh: Arity1<G, H>,
    hi: Arity1<H, I>,
    ij: Arity1<I, J>,
    jk: Arity1<J, K>,
    kl: Arity1<K, L>,
    lm: Arity1<L, M>,
    mn: Arity1<M, N>,
    no: Arity1<N, O>,
    op: Arity1<O, P>,
    pq: Arity1<P, Q>,
  ): Arity1<A, Q>
}

/**
 * Composes multiple callbacks into a single function that applies them in sequence.
 *
 * @param callbacks - The callbacks to be composed.
 * @returns A function that applies the callbacks in sequence.
 * @category Function
 */
const flow: Flow =
  (...callbacks: any[]) =>
  (value: any) => {
    return callbacks.reduce((memo, callback) => callback(memo), value)
  }

export default flow
