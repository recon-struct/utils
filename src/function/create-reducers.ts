import type { AnyPrimitive } from '@recon-struct/utility-types/dist/any/any-primitive'
import type { Tail } from '@recon-struct/utility-types/dist/tuple/tail'

/**
 * Represents a reducer function.
 * @typeParam A - The type of the first argument.
 * @param a The first argument of the reducer function.
 * @param b The rest of the arguments of the reducer function.
 * @returns The result of applying the reducer function.
 * @category Type
 */
export type ReducerFunction<A extends any = any> = (a: A, ...b: any[]) => A

/**
 * Represents a collection of reducer functions.
 * @category Type
 */
export type ReducerFunctions<A extends any> = {
  [_: string]: ReducerFunction<A>
}

/**
 * Represents an action with a specific type and parameters.
 * @typeParam A - The type of the action.
 * @typeParam B - The type of the action parameters.
 * @category Type
 */
export interface Action<A extends AnyPrimitive, B extends any[]> {
  type: A
  params: B
}

/**
 * Defines the type for reducer actions.
 * @typeParam A - The type of the action.
 * @typeParam B - The type of the reducer functions.
 * @category Type
 */
export type ReducerActions<A extends any, B extends ReducerFunctions<A>> = {
  [C in keyof B]: (
    ..._: Tail<Parameters<B[C]>>
  ) => Action<C, Tail<Parameters<B[C]>>>
}

/**
 * Creates reducers and actions based on the provided reducer functions.
 *
 * @typeParam A - The state type.
 * @typeParam B - The reducer functions type.
 * @param {A} _ - The initial state.
 * @param {B} reducerFunctions - The reducer functions object.
 * @returns An object containing the reducer function and actions.
 * @category Function
 */
function createReducers<A extends any, B extends ReducerFunctions<A>>(
  _: A,
  reducerFunctions: B,
) {
  const reducer = <C extends keyof B>(
    state: A,
    { type, params }: Action<C, Tail<Parameters<B[C]>>>,
  ): A => {
    const reducerMethod = reducerFunctions[type]

    return reducerMethod(state, ...params)
  }

  const actions: ReducerActions<A, B> = Object.keys(reducerFunctions).reduce(
    (memo, methodName: keyof B) => {
      memo[methodName] = (...params) => ({ type: methodName, params })

      return memo
    },
    {} as ReducerActions<A, B>,
  )

  return { reducer, actions }
}

export default createReducers
