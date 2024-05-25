/**
 * Generates unique symbols using a generator function.
 * @yields {symbol} The next unique symbol.
 * @returns The final generated symbol.
 * @category Generators
 */
function* createSymbolGenerator() {
  let sym = Symbol()

  while (true === true) {
    yield sym
    sym = Symbol()
  }
}

export default createSymbolGenerator
