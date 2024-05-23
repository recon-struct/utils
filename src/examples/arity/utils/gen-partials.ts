import pipe from '~/function/pipe'
import { pBuild, pMap } from './p-utils'
import { seq } from './seq'

export type NestedNumberArray = (number | NestedNumberArray)[][]

const genPartials = (n: number) =>
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

export default genPartials
