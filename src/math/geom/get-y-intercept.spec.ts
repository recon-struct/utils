import { describe, expect, it } from 'bun:test'
import getYIntercept from './get-y-intercept'

describe('getYIntercept', () => {
  it('should support 4 arguments describing a line', () => {
    expect(getYIntercept(0, 0, 1, 1)).toEqual(0)
    expect(getYIntercept(0, 0, 2, 1)).toEqual(0)
    expect(getYIntercept(0, 0, 1, 2)).toEqual(0)
    expect(getYIntercept(0, 0, 2, 2)).toEqual(0)
  })

  it('should support 2 arguments describing a slope and a point', () => {
    expect(getYIntercept(1, 0, 0)).toEqual(0)
    expect(getYIntercept(0.5, 0, 0)).toEqual(0)
    expect(getYIntercept(2, 0, 0)).toEqual(0)
    expect(getYIntercept(1, 0, 0)).toEqual(0)
  })
})
