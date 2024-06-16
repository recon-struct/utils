import isInRange from './comparison/is-in-range'

/**
 * Calculates the normalized value between a start and end range.
 *
 * @param start - The start value of the range.
 * @param end - The end value of the range.
 * @param value - The value to be normalized.
 * @returns The normalized value between 0 and 1.
 * @throws Error if the value is out of the specified range.
 */
const getNorm = (start: number, end: number, value: number): number => {
  if (isInRange(start, end, value) === false) {
    throw new Error('Value out of range')
  }

  const delta = end - start
  const norm = (value - start) / delta

  return norm === -0 ? 0 : norm
}

export default getNorm
