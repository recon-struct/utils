export function* seqGenerator(startN: number = 0, endN: number = Infinity) {
  const delta = endN < startN ? -1 : 1
  let i = startN

  while (true) {
    yield i
    i += delta
  }
}

export function* takeGenerator(a: number, seq: Generator<number>) {
  for (const value of seq) {
    if (a-- === 0) {
      break
    }

    yield value
  }
}

export function seq(
  takeN: number,
  startN: number = 0,
  endN: number = Infinity,
) {
  return takeGenerator(takeN, seqGenerator(startN, endN))
}
