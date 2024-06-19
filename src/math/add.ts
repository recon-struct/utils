/**
 * Represents a function that adds two numbers.
 * @param a The first number to be added.
 * @param b The second number to be added.
 * @returns The sum of the two numbers.
 * @category Type
 */
export interface Add {
  <A extends number, B extends number>(a: A, b: B): number
  <A extends string, B extends string>(a: A, b: B): `${A}${B}`
  /** The remaining cases describe JavaScript's behavior */
  <A extends string, B extends number>(a: A, b: B): string
  <A extends number, B extends string>(a: A, b: B): string
}

/**
 * Adds two values together.
 *
 * @param a - The first value to add.
 * @param b - The second value to add.
 * @returns The sum of the two values.
 * @category Math
 */
const add: Add = (a: any, b: any) => a + b

export default add
