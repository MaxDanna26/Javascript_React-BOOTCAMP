const div = document.getElementById('dimension');
const dimension = 4;
const arr = Array.from({ length: dimension }, () => Array(dimension).fill(null));

const createBoard = (dimension) => {
  for (let i = 0; i < dimension; i++) {
    for (let j = 0; j < dimension; j++) {
      arr[i][j] = `<div class="col" id=${i + '.' + j} fila="${i}" columna="${j}" onClick="printPosition(${i}, ${j}) ""></div>`;
    }
  }
  console.log(arr);
}

const printBoard = (dimension) => {
  div.innerHTML = "";

  for (let i = 0; i < dimension; i++) {
    for (let j = 0; j < dimension; j++) {
      div.innerHTML += arr[i][j];
    }
  }
};

const printPosition = (fila, columna) => {
  document.getElementById(fila + '.' + columna).textContent = player ? 'X' : 'O';
  isWinner(fila, columna);
}

const isWinner = (i, j) => {
  // control horizontal
  if (arr[i][j] === arr[i][j++] && arr[i][j] === arr[i][j + 2] && arr[i][j] === arr[i][j + 3]) {
    console.log('BIEN!');
  }

}

let winner = false;
let turno = false;
const player = turno ? 'X' : 'O';

// Comienzo del juego
const ticTacToe = (dimension) => {
  createBoard(dimension);
  printBoard(dimension);

}

ticTacToe(dimension);