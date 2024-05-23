import pipe from '~/function/pipe'
import arityToString from './utils/arity-to-string'
import type { NestedNumberArray } from './utils/gen-partials'
import genPartials from './utils/gen-partials'
import { pLog, pMap, pReduce } from './utils/p-utils'

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
                        out: pipe(
                          p,
                          pMap(nP =>
                            pipe(
                              renderPartial(
                                nP as (number | NestedNumberArray)[],
                                off,
                              ),
                              p => `(${p})`,
                            ),
                          ),
                          p => p.join(' | '),
                          p => `${out}${p}`,
                        ),
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

pipe(
  genPartials(9),
  pMap(p => partialsToString(p)),
  p => p.join('\n\n'),
  pLog,
)
