import { describe, expect, it } from 'bun:test'
import addAngles from './add-angles'

describe('addAngles', () => {
  it('should add two angles together', () => {
    expect(addAngles(0, 0)).toEqual(0)
    expect(addAngles(0, Math.PI)).toEqual(Math.PI)
    expect(addAngles(0, Math.PI * 2)).toEqual(0)
    expect(addAngles(0, Math.PI * 3)).toEqual(Math.PI)
    expect(addAngles(0, Math.PI * 4)).toEqual(0)
    expect(addAngles(0, Math.PI * 5)).toEqual(Math.PI)
  })
})
