import { describe, expect, it } from 'bun:test'
import isMap from './is-map'

describe('isMap', () => {
  it('should return true for an instance of Map', () => {
    const map = new Map()
    expect(isMap(map)).toBe(true)
  })

  it('should return false for a non-instance of Map', () => {
    const obj = {}
    expect(isMap(obj)).toBe(false)
  })
})
