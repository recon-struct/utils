import type { AnyObject } from '@recon-struct/utility-types/dist/any/any-object'
import type { Capture } from '@recon-struct/utility-types/dist/string/capture'
import type { Interpolation } from '@recon-struct/utility-types/dist/string/interpolation'

/**
 * Represents a function that performs string interpolation.
 * @category Type
 */
export interface Interpolate {
  /**
   * Performs string interpolation with a single placeholder.
   * @param a The placeholder value.
   * @returns The interpolated string.
   */
  <A extends string>(a: A): A

  /**
   * Performs string interpolation with multiple placeholders.
   * @param a The first placeholder value.
   * @param b The second placeholder value.
   * @param c The object containing additional placeholder values.
   * @returns The interpolated string.
   */
  <
    A extends string,
    B extends { start: string, end: string },
    C extends AnyObject<Capture<A, B>, string>,
  >(
    a: A,
    b: B,
    c: C,
  ): Interpolation<A, C, B>
}

/**
 * Interpolates a string with variables.
 *
 * @param template - The string to interpolate.
 * @param captureGroup - The capture group to use.
 * @param variables - The variables to interpolate.
 * @returns The interpolated string.
 * @category String
 */
const interpolate: Interpolate = (...params: any[]) => {
  if (params.length === 1) {
    return params[0]
  }

  const [template, captureGroup, variables] = params

  const result = (template as string).replace(
    new RegExp(`${captureGroup.start}(.*?)${captureGroup.end}`, 'g'),
    (_, match) => variables[match],
  )

  return result
}

export default interpolate
