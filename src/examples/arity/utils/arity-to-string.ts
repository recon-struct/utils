import pipe from '~/function/pipe'
import { pMap } from './p-utils'
import { seq } from './seq'

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

const arityToString = (
  arityArr: number[],
  offset = 0,
  isPartial = false,
): string => {
  let out = ''

  for (let index = 0; index < arityArr.length; index++) {
    const a = arityArr[index]

    out += pipe(
      seq(a, offset),
      pMap(i => LETTERS[i]),
      pMap(c => [c.toLowerCase(), c]),
      pMap(cs => cs.join(': ')),
      params => `(${params.join(', ')}) => `,
    )

    offset += a
  }

  return isPartial ? out : `${out}${LETTERS[offset]}`
}

export default arityToString
