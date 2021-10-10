const DFS = (board: string[][], word: string, i: number, j: number, n: number): boolean => {
  if (i < 0 || j < 0 || i + 1 > board.length || j + 1 > board[i].length || board[i][j] !== word[n]) return false
  if (word.length === n+1) {
    return true;
  }
  board[i][j] = '0';
  const status: boolean = DFS(board, word, i+1, j, n+1) ||
    DFS(board, word, i-1, j, n+1) ||
    DFS(board, word, i, j+1, n+1) ||
    DFS(board, word, i, j-1, n+1);

  board[i][j] = word[n];
  return status;
}

export const exist = (board: string[][], word: string): boolean => {
  if (word === "") return false;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === word[0] && DFS(board, word, i, j, 0)) return true;
    }
  }
  return false;
};
