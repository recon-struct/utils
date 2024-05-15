import type { Arity1 } from '@recon-struct/utility-types/dist/function/arity/arity-1'

export interface Pipe {
  <A>(a: A): A
  <A, B>(a: A, ab: Arity1<A, B>): B
  <A, B, C>(a: A, ab: Arity1<A, B>, bc: Arity1<B, C>): C
  <A, B, C, D>(a: A, ab: Arity1<A, B>, bc: Arity1<B, C>, cd: Arity1<C, D>): D
  <A, B, C, D, E>(
    a: A,
    ab: Arity1<A, B>,
    bc: Arity1<B, C>,
    cd: Arity1<C, D>,
    de: Arity1<D, E>,
  ): E
  <A, B, C, D, E, F>(
    a: A,
    ab: Arity1<A, B>,
    bc: Arity1<B, C>,
    cd: Arity1<C, D>,
    de: Arity1<D, E>,
    ef: Arity1<E, F>,
  ): F
  <A, B, C, D, E, F, G>(
    a: A,
    ab: Arity1<A, B>,
    bc: Arity1<B, C>,
    cd: Arity1<C, D>,
    de: Arity1<D, E>,
    ef: Arity1<E, F>,
    fg: Arity1<F, G>,
  ): G
  <A, B, C, D, E, F, G, H>(
    a: A,
    ab: Arity1<A, B>,
    bc: Arity1<B, C>,
    cd: Arity1<C, D>,
    de: Arity1<D, E>,
    ef: Arity1<E, F>,
    fg: Arity1<F, G>,
    gh: Arity1<G, H>,
  ): H
  <A, B, C, D, E, F, G, H, I>(
    a: A,
    ab: Arity1<A, B>,
    bc: Arity1<B, C>,
    cd: Arity1<C, D>,
    de: Arity1<D, E>,
    ef: Arity1<E, F>,
    fg: Arity1<F, G>,
    gh: Arity1<G, H>,
    hi: Arity1<H, I>,
  ): I
  <A, B, C, D, E, F, G, H, I, J>(
    a: A,
    ab: Arity1<A, B>,
    bc: Arity1<B, C>,
    cd: Arity1<C, D>,
    de: Arity1<D, E>,
    ef: Arity1<E, F>,
    fg: Arity1<F, G>,
    gh: Arity1<G, H>,
    hi: Arity1<H, I>,
    ij: Arity1<I, J>,
  ): J
  <A, B, C, D, E, F, G, H, I, J, K>(
    a: A,
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
  ): K
  <A, B, C, D, E, F, G, H, I, J, K, L>(
    a: A,
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
  ): L
  <A, B, C, D, E, F, G, H, I, J, K, L, M>(
    a: A,
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
  ): M
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N>(
    a: A,
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
  ): N
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>(
    a: A,
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
  ): O
  <A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>(
    a: A,
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
  ): P
}

/**
 * Pipes a value through a series of functions
 * @param value The value to pipe
 * @param callbacks The functions to pipe the value through
 * @returns The result of the piped value
 *  * @example
 * ```
 * pipe(10, (x: number) => x + 2, (x: number) => x * 3) // 36
 * ```
 * @category Function
 */
const pipe: Pipe = (...params: any[]) => {
  const [value, ...callbacks] = params
  return callbacks.reduce((memo, callback) => callback(memo), value)
}

export default pipe
