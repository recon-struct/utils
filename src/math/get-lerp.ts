/**
 * Calculates the linear interpolation between two numbers.
 *
 * @param start - The starting value.
 * @param end - The ending value.
 * @param norm - The interpolation factor, usually between 0 and 1.
 * @returns The interpolated value between `start` and `end`.
 */
const getLerp = (start: number, end: number, norm: number) => {
  const delta = end - start

  return start + delta * norm
}

export default getLerp
