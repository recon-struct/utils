import createTypeofTypeGuard from '../utils/create-typeof-type-guard'

/**
 * Checks if a value is a symbol.
 *
 * @param value - The value to check.
 * @returns True if the value is a symbol, false otherwise.
 * @category Type Guard
 */
const isSymbol = createTypeofTypeGuard<symbol>('symbol')

export default isSymbol
