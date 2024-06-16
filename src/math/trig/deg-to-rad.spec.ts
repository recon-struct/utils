import { describe, expect, it } from 'bun:test'
import degToRad from './deg-to-rad'

describe('degToRad', () => {
  it('should convert an angle from degrees to radians', () => {
    expect(degToRad(0)).toEqual(0)
    expect(degToRad(90)).toEqual(Math.PI / 2)
    expect(degToRad(180)).toEqual(Math.PI)
    expect(degToRad(270)).toEqual(Math.PI * 1.5)
    expect(degToRad(360)).toEqual(Math.PI * 2)
  })
})
