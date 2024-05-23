import curry from '~/function/curry'
import map from './map'
import reduce from './reduce'

export const pMap = curry(map)

export const pReduce =
  <A, B>(
    func: (item: A, helpers: { acc: B; index: number }) => B,
    initialValue: B,
  ) =>
  (items: Iterable<A>) =>
    reduce<A, B>(
      (acc, item, index) => func(item, { acc, index }),
      items,
      initialValue,
    )

export const pBuild = <A, B>(
  func: (item: A, helpers: { acc: B[]; index: number }) => B,
) =>
  pReduce<A, B[]>((item, { acc, index }) => {
    acc.push(func(item, { acc, index }))

    return acc
  }, [] as B[])

export const pLog = <A>(x: A) => {
  console.log(x)

  return x
}
