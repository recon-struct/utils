import { expect, it, describe } from 'bun:test'
import uniq from './uniq';

describe('uniq', () => {
  it('should return an array with unique values', () => {
    expect(uniq(1, 2, 3, 2, 4, 1)).toEqual([1, 2, 3, 4]);
    expect(uniq('a', 'b', 'c', 'b', 'd', 'a')).toEqual(['a', 'b', 'c', 'd']);
    expect(uniq(true, false, true, true)).toEqual([true, false]);
  });

  it('should handle empty input', () => {
    expect(uniq()).toEqual([]);
  });

  it('should handle arrays with nested values', () => {
    expect(uniq([1, 2], [2, 3], [3, 4])).toEqual([1, 2, 3, 4]);
    expect(uniq(['a', 'b'], ['b', 'c'], ['c', 'd'])).toEqual(['a', 'b', 'c', 'd']);
  });
});
