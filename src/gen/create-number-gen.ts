/**
 * Generates an infinite sequence of numbers starting from 0.
 * @yields {number} The next number in the sequence.
 * @returns The final value of the generator.
 * @category Gen
 */
function* createNumberGen() {
  let value = 0

  while (true === true) {
    yield value
    value++
  }
}

export default createNumberGen
