import { describe, expect, it } from 'bun:test'
import curry from './curry'

describe('curry', () => {
  it('should handle functions with 0 parameters', () => {
    const fn = () => 'test'
    const curried = curry(fn)
    const actual = curried()
    const expected = 'test'

    expect(actual).toBe(expected)
  })

  it('should handle functions with 1 parameter', () => {
    const fn = (a: number) => a
    const curried = curry(fn)
    const actual = curried(1)
    const expected = 1

    expect(actual).toBe(expected)
  })

  it('should handle functions with 2 parameters', () => {
    const fn = (a: number, b: number) => a + b
    const curried = curry(fn)
    const actual = curried(1)(2)
    const expected = 3

    expect(actual).toBe(expected)
  })

  it('should handle functions with 3 parameters', () => {
    const fn = (a: number, b: number, c: number) => a + b + c
    const curried = curry(fn)
    const actual = curried(1)(2)(3)
    const expected = 6

    expect(actual).toBe(expected)
  })

  it('should handle functions with 4 parameters', () => {
    const fn = (a: number, b: number, c: number, d: number) => a + b + c + d
    const curried = curry(fn)
    const actual = curried(1)(2)(3)(4)
    const expected = 10

    expect(actual).toBe(expected)
  })

  it('should handle functions with 5 parameters', () => {
    const fn = (a: number, b: number, c: number, d: number, e: number) =>
      a + b + c + d + e
    const curried = curry(fn)
    const actual = curried(1)(2)(3)(4)(5)
    const expected = 15

    expect(actual).toBe(expected)
  })

  it('should handle functions with 6 parameters', () => {
    const fn = (
      a: number,
      b: number,
      c: number,
      d: number,
      e: number,
      f: number,
    ) => a + b + c + d + e + f
    const curried = curry(fn)
    const actual = curried(1)(2)(3)(4)(5)(6)
    const expected = 21

    expect(actual).toBe(expected)
  })

  it('should handle functions with 7 parameters', () => {
    const fn = (
      a: number,
      b: number,
      c: number,
      d: number,
      e: number,
      f: number,
      g: number,
    ) => a + b + c + d + e + f + g
    const curried = curry(fn)
    const actual = curried(1)(2)(3)(4)(5)(6)(7)
    const expected = 28

    expect(actual).toBe(expected)
  })

  it('should handle functions with 8 parameters', () => {
    const fn = (
      a: number,
      b: number,
      c: number,
      d: number,
      e: number,
      f: number,
      g: number,
      h: number,
    ) => a + b + c + d + e + f + g + h
    const curried = curry(fn)
    const actual = curried(1)(2)(3)(4)(5)(6)(7)(8)
    const expected = 36

    expect(actual).toBe(expected)
  })
})
