import { describe, expect, it } from 'bun:test'
import radToDeg from './rad-to-deg'

describe('radToDeg', () => {
  it('should convert an angle from radians to degrees', () => {
    expect(radToDeg(0)).toEqual(0)
    expect(radToDeg(Math.PI / 2)).toEqual(90)
    expect(radToDeg(Math.PI)).toEqual(180)
    expect(radToDeg(Math.PI * 1.5)).toEqual(270)
    expect(radToDeg(Math.PI * 2)).toEqual(360)
  })
})
