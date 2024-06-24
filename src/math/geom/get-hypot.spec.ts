import { describe, expect, it } from 'bun:test'
import getHypot from './get-hypot'

describe('getHypot', () => {
  it('should calculate the distance between two points', () => {
    expect(getHypot(0, 0, 1, 1)).toEqual(1.4142135623730951)
    expect(getHypot(0, 0, 2, 1)).toEqual(2.23606797749979)
    expect(getHypot(0, 0, 1, 2)).toEqual(2.23606797749979)
    expect(getHypot(0, 0, 2, 2)).toEqual(2.8284271247461903)
  })
})
