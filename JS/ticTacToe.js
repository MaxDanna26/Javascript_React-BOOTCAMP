const createBoard = () => {
  const board = [];

  for (let i = 0; i < 9; i++) {
    board[i] = '_';
  }
  return board;
}

const printBoard = () => {
  alert(board[0] + "|" + board[1] + "|" + board[2] + "\n" + board[3] + "|" + board[4] + "|" + board[5] + "\n" + board[6] + "|" + board[7] + "|" + board[8]);
}

const isGame = (board) => {
  for (let i = 0; i < board.length; i++) {
    if (board[i] === '_') {
      return true;
    }
    else {
      prompt('No hay mas juego!');
      return false;
    }
  }
}

const isWinner = (board) => {
  // control horizontal
  if (board[0] == board[1] && board[0] == board[2] || board[3] == board[4] && board[3] == board[5] || board[6] == board[7] && board[6] == board[8]) {
    return true;
  }
  // control diagonal
  else if (board[0] == board[4] && board[0] == board[8] || board[2] == board[4] && board[2] == board[6]) {
    return true;
  }
  // control vertical
  else if (board[0] == board[3] && board[0] == board[6] || board[1] == board[4] && board[1] == board[7] || board[2] == board[5] && board[2] == board[8]) {
    return true;
  }
  else {
    return false;
  }
}

const printPosition = (option, board) => {
  for (let i = 0; i < board.length; i++) {
    if (i == option) {
      board[i] = 'X';
    }
  }
  printBoard();
}

const board = createBoard();
let winner = false;
let turno = false;
const player = turno ? 'X' : 'O';

while (winner === false) {
  printBoard();
  let option = prompt('Player 1: Introduzca un numero del 0 al 9');
  board[option] = player;
  isWinner(board);
  turno = !turno;

}




