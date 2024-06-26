/**
 * Creates a generator that yields incrementing bigint values.
 * @yields {bigint} The next incrementing bigint value.
 * @returns The final value of the generator.
 * @category Gen
 */
function* createBigintGen() {
  let value = 0n

  while (true === true) {
    yield value
    value++
  }
}

export default createBigintGen
