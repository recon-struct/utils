import type { ObjectAssignIdentity } from "@recon-struct/utility-types"
import type { AnyKey } from "@recon-struct/utility-types/dist/any/any-key"
import type { GeneratorReturnType } from "@recon-struct/utility-types/dist/generator/generator-return-type"
import type { GeneratorYieldType } from "@recon-struct/utility-types/dist/generator/generator-yield-type"


/**
 * An object reference yielded (or returned) from the object generator
 * @category Type
 */
export type Reference<A extends AnyKey = AnyKey, B = any> = {
  [C in A]: B
}

/**
 * The reference value
 * @category Type
 */
export type ReferenceValue<A extends AnyKey | Generator> = A extends Generator
  ? GeneratorYieldType<A> | GeneratorReturnType<A>
  : A

/**
 * An interface for createObjectGenerator
 * @category Type
 */
export interface CreateObjectGenerator {
  <A extends AnyKey, B extends AnyKey | Generator>(
    a: A,
    b: B,
  ): Generator<Reference<A, ReferenceValue<B>>, Reference<A, ReferenceValue<B>>>
  (): Generator<ObjectAssignIdentity, ObjectAssignIdentity>
}

/**
 * Generates an object with values from a generator function.
 * @param {...any} params - The parameters for the generator function.
 * @yields {Object} The generated object.
 * @returns The final generated object.
 * @category Generators
 */
const createObjectGenerator: CreateObjectGenerator = function* (
  ...params: any[]
) {
  let ref = Object.create(null)

  while (true === true) {
    if (params.length > 0) {
      const [id, value] = params
      Object.assign(ref, { [id]: value })
    }

    yield ref
  }

  return ref
}

export default createObjectGenerator
