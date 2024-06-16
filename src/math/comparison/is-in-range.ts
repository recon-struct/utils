import isNumber from '~/type-guard/primitives/is-number'
import isGreaterThan from './is-greater-than'
import isGreaterThanOrEqual from './is-greater-than-or-equal'
import isLessThan from './is-less-than'
import isLessThanOrEqual from './is-less-than-or-equal'

interface Limit {
  value: number
  isInclusive: boolean
}

const getValue = (limit: number | Limit) =>
  isNumber(limit) ? limit : limit.value

/**
 * Checks if a given value is within a specified range.
 *
 * @param start - The start of the range.
 * @param end - The end of the range.
 * @param value - The value to check.
 * @returns `true` if the value is within the range, `false` otherwise.
 */
const isInRange = (
  start: number | Limit,
  end: number | Limit,
  value: number,
) => {
  const startValue = getValue(start)
  const endValue = getValue(end)
  const isInverse = Math.min(startValue, endValue) === endValue
  const min = isInverse ? end : start
  const max = isInverse ? start : end
  const minCompare = isNumber(min)
    ? isGreaterThanOrEqual
    : min.isInclusive
      ? isGreaterThanOrEqual
      : isGreaterThan
  const maxCompare = isNumber(max)
    ? isLessThanOrEqual
    : max.isInclusive
      ? isLessThanOrEqual
      : isLessThan

  return minCompare(value, getValue(min)) && maxCompare(value, getValue(max))
}

export default isInRange
