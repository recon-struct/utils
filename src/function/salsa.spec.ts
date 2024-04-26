import { describe, expect, it } from 'bun:test'
import getIndicesList from '../combinator/get-indices-list'
import getOrderedGroupings from '../combinator/get-ordered-groupings'
import getSliceGroups from '../combinator/get-slice-groups'
import salsa from './salsa'

describe('salsa', () => {
  it('should curry a function with 0 arguments', () => {
    const a0 = salsa(() => 1)

    expect(a0()).toBe(1)
  })

  it('should curry a function with 1 argument', () => {
    const a1 = salsa((a: number) => a)

    expect(a1(1)).toBe(1)
  })

  it('should curry a function with 2 arguments', () => {
    const add2 = (a: number, b: number) => a + b
    const params = [1, 2]
    const groups = getOrderedGroupings(params.length)
    const paramGroupsList = groups
      .map(getIndicesList)
      .map(indices => getSliceGroups(params, indices))
    const expected = 3

    const a2 = salsa(add2)

    for (const paramGroups of paramGroupsList) {
      let actual: any = a2

      for (const params of paramGroups) {
        actual = actual(...params)
      }

      expect(a2(...(params as Parameters<typeof a2>))).toBe(expected)
    }
  })

  it('should curry a function with 3 arguments', () => {
    const add3 = (a: number, b: number, c: number) => a + b + c
    const params = [1, 2, 3]
    const groups = getOrderedGroupings(params.length)
    const paramGroupsList = groups
      .map(getIndicesList)
      .map(indices => getSliceGroups(params, indices))
    const expected = 6

    const a3 = salsa(add3)

    for (const paramGroups of paramGroupsList) {
      let actual: any = a3

      for (const params of paramGroups) {
        actual = actual(...params)
      }

      expect(a3(...(params as Parameters<typeof a3>))).toBe(expected)
    }
  })

  it('should curry a function with 4 arguments', () => {
    const add4 = (a: number, b: number, c: number, d: number) => a + b + c + d
    const params = [1, 2, 3, 4]
    const groups = getOrderedGroupings(params.length)
    const paramGroupsList = groups
      .map(getIndicesList)
      .map(indices => getSliceGroups(params, indices))
    const expected = 10

    const a4 = salsa(add4)

    for (const paramGroups of paramGroupsList) {
      let actual: any = a4

      for (const params of paramGroups) {
        actual = actual(...params)
      }

      expect(a4(...(params as Parameters<typeof a4>))).toBe(expected)
    }
  })

  it('should curry a function with 5 arguments', () => {
    const add5 = (a: number, b: number, c: number, d: number, e: number) =>
      a + b + c + d + e
    const params = [1, 2, 3, 4, 5]
    const groups = getOrderedGroupings(params.length)
    const paramGroupsList = groups
      .map(getIndicesList)
      .map(indices => getSliceGroups(params, indices))
    const expected = 15

    const a5 = salsa(add5)

    for (const paramGroups of paramGroupsList) {
      let actual: any = a5

      for (const params of paramGroups) {
        actual = actual(...params)
      }

      expect(a5(...(params as Parameters<typeof a5>))).toBe(expected)
    }
  })

  it('should curry a function with 6 arguments', () => {
    const add6 = (
      a: number,
      b: number,
      c: number,
      d: number,
      e: number,
      f: number,
    ) => a + b + c + d + e + f
    const params = [1, 2, 3, 4, 5, 6]
    const groups = getOrderedGroupings(params.length)
    const paramGroupsList = groups
      .map(getIndicesList)
      .map(indices => getSliceGroups(params, indices))
    const expected = 21

    const a6 = salsa(add6)

    for (const paramGroups of paramGroupsList) {
      let actual: any = a6

      for (const params of paramGroups) {
        actual = actual(...params)
      }

      expect(a6(...(params as Parameters<typeof a6>))).toBe(expected)
    }
  })
})
