const board = ["_", "_", "_", "_", "_", "_", "_", "_", "_"];
const winnerPositions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const evaluateWin = () =>
  winnerPositions.some(
    (arrPositions) =>
      board[arrPositions[0]] == board[arrPositions[1]] &&
      board[arrPositions[0]] === board[arrPositions[2]] &&
      board[arrPositions[0]] !== "_"
  );

const evaluateWin3 = () => {
  let isWinner = false;
  winnerPositions.forEach((arrPositions) => {
    if (
      board[arrPositions[0]] == board[arrPositions[1]] &&
      board[arrPositions[0]] === board[arrPositions[2]] &&
      board[arrPositions[0]] !== "_"
    ) {
      isWinner = true;
    }
  });
  return isWinner;
};

const evaluateWin2 = () => {
  if (board[0] === board[1] && board[0] === board[2]) {
    return true;
  } else if (
    board[0] === board[1] &&
    board[0] === board[2] &&
    board[0] !== "_"
  ) {
    return true;
  } else if (
    board[3] === board[4] &&
    board[3] === board[5] &&
    board[3] !== "_"
  ) {
    return true;
  } else if (
    board[6] === board[7] &&
    board[6] === board[8] &&
    board[6] !== "_"
  ) {
    return true;
  } else if (
    board[0] === board[3] &&
    board[0] === board[6] &&
    board[0] !== "_"
  ) {
    return true;
  } else if (
    board[1] === board[4] &&
    board[1] === board[7] &&
    board[1] !== "_"
  ) {
    return true;
  } else if (
    board[2] === board[5] &&
    board[2] === board[8] &&
    board[2] !== "_"
  ) {
    return true;
  } else if (
    board[0] === board[4] &&
    board[0] === board[8] &&
    board[0] !== "_"
  ) {
    return true;
  } else if (
    board[2] === board[4] &&
    board[2] === board[6] &&
    board[2] !== "_"
  ) {
    return true;
  }
  return false;
};

const printBoard = () => {
  alert(
    board[0] +
    "|" +
    board[1] +
    "|" +
    board[2] +
    "\n" +
    board[3] +
    "|" +
    board[4] +
    "|" +
    board[5] +
    "\n" +
    board[6] +
    "|" +
    board[7] +
    "|" +
    board[8]
  );
};
let isWinner = false;
let isPlayer1 = true;
let player = "X";

printBoard();

while (!isWinner) {
  const position = prompt("¿A dónde quieres mover?");
  player = isPlayer1 ? "X" : "O";
  board[position] = player;
  printBoard();
  if (evaluateWin()) {
    alert("Enhorabuena! player " + player);
  }
  isPlayer1 = !isPlayer1;
}
