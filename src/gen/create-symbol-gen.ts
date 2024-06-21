/**
 * Generates unique symbols using a generator function.
 * @yields {symbol} The next unique symbol.
 * @returns The final generated symbol.
 * @category Gen
 */
function* createSymbolGen() {
  let sym = Symbol()

  while (true === true) {
    yield sym
    sym = Symbol()
  }
}

export default createSymbolGen
