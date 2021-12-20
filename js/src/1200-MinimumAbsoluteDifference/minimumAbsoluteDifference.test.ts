import { minimumAbsDifference } from './minimumAbsoluteDifference';

describe('Minimum Absolute Difference', () => {
  it('should return [[1,2],[2,3],[3,4]]', () => {
    expect(minimumAbsDifference([1,3,6,10,15])).toEqual([[1,3]])
  });
})
