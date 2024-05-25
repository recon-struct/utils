/**
 * Generates an infinite sequence of numbers starting from 0.
 * @yields {number} The next number in the sequence.
 * @returns The final value of the generator.
 * @category Generators
 */
function* createNumberGenerator<A>(sequence: A[]) {
  const sequenceLength = sequence.length
  let index = 0

  while (true === true) {
    yield sequence[index]
    index = (index + 1) % sequenceLength
  }
}

export default createNumberGenerator
