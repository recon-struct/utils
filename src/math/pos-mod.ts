/**
 * Calculates the positive modulus of two numbers.
 *
 * @param a - The dividend.
 * @param b - The divisor.
 * @returns The positive modulus of `a` and `b`.
 */
const posMod = (a: number, b: number) => ((a % b) + b) % b

export default posMod
