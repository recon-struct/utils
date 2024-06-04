/**
 * Normalizes a value within a given range.
 *
 * @param {number} min - The minimum boundary of the range.
 * @param {number} max - The maximum boundary of the range.
 * @param {number} value - The value to be normalized.
 * @returns {number} - The normalized value, a number between 0 and 1 representing the relative position of the value within the range.
 * @throws {Error} - If the value is outside the provided range.
 */
const getNorm = (min: number, max: number, value: number): number => {
  if (value < min || value > max) {
    throw new Error('Value out of range')
  }

  const delta = max - min

  return (value - min) / delta
}

export default getNorm
