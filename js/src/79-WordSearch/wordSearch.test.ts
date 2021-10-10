import { exist } from './wordSearch';

it('should return true', () => {
  const board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];
  const word = "ABCCED"
  const result = exist(board, word);
  expect(result).toBeTruthy()
});
