import pipe from '~/function/pipe'
import { pBuild, pMap, pReduce } from './utils/p-utils'
import { seq } from './utils/seq'

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

type NestedNumberArray = (number | NestedNumberArray)[][]

const partialsToString = (partials: NestedNumberArray) => {
  let sets: any[] = []

  for (let index = 0; index < partials.length; index++) {
    const partial = partials[index]

    const renderPartial = (
      partial: (number | NestedNumberArray)[],
      offset = 0,
    ): string =>
      pipe(partial, part =>
        part.every(p => typeof p === 'number')
          ? arityToString(part as number[], offset)
          : pipe(
              part,
              pReduce(
                (p, { acc: { off, out } }) =>
                  typeof p === 'number'
                    ? {
                        off: off + p,
                        out: arityToString([p], off, true),
                      }
                    : {
                        off,
                        out: `${out}${pipe(
                          p,
                          pMap(
                            nP =>
                              `(${renderPartial(
                                nP as (number | NestedNumberArray)[],
                                off,
                              )})`,
                          ),
                          p => p.join(' | '),
                        )}`,
                      },
                { off: offset, out: '' },
              ),
              ({ out }) => out,
            ),
      )

    sets.push(`| (${renderPartial(partial)})`)
  }

  return sets.join('\n')
}

const createPartials = (n: number) =>
  pipe(
    seq(n),
    pBuild<number, NestedNumberArray>((val, { acc }) =>
      val === 0
        ? [[0]]
        : pipe(
            seq(val, val, 1),
            pMap(x => {
              const delta = val - x

              if (delta === 0) return [x]

              const lookup = acc[delta] as number[][]
              const len = lookup.length

              return len === 1 ? [x, lookup[0][0]] : [x, lookup]
            }),
          ),
    ),
  )

const x = createPartials(9)

const test = pipe(
  x,
  pMap(p => partialsToString(p)),
)

console.log(test.join('\n\n'))
