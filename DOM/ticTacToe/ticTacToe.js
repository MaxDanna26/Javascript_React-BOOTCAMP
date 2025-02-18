const div = document.getElementById('dimension');
const dimension = 4;
const arr = Array.from({ length: dimension }, () => Array(dimension).fill(null));
let winner = false;
let turno = false;

const createBoard = () => {
  for (let i = 0; i < dimension; i++) {
    for (let j = 0; j < dimension; j++) {
      arr[i][j] = null;
    }
  }
};

const printBoard = () => {
  for (let i = 0; i < dimension; i++) {
    for (let j = 0; j < dimension; j++) {
      const cell = document.createElement('div');
      cell.classList.add('col');
      cell.id = `${i}.${j}`;
      cell.setAttribute("fila", i);
      cell.setAttribute("columna", j);
      cell.onclick = () => printPosition(i, j);
      cell.textContent = arr[i][j] || "";
      div.appendChild(cell);
    }
  }
  document.getElementById('dimension').style.gridTemplateColumns = 'repeat(' + dimension + ', 1fr)';
  document.getElementById('dimension').style.gridTemplateRows = 'repeat(' + dimension + ', 1fr)';
};

const printPosition = (fila, columna) => {
  if (arr[fila][columna] !== null || winner) { console.log('No puedes jugar aqui!') }
  else {
    const player = turno ? 'X' : 'O';

    arr[fila][columna] = player;
    document.getElementById(`${fila}.${columna}`).textContent = player;

    checkingDir(fila, columna, player);
  }
  turno = !turno;
};

const checkingDir = (fila, columna, player) => {
  for (let x = 0; x < dimension; x++) {
    if (isWinner(fila, x, player) || isWinner(x, columna, player) ||
      isWinner(x, x, player) || isWinner(x, dimension - x - 1, player)) {
      winner = true;
      console.log(`¡${player} ha ganado!`);
      return;
    }
  }
}

const isWinner = (i, j, player) => {
  // Control horizontal
  if (j + dimension - 1 < dimension && arr[i][j] !== null &&
    arr[i][j] === arr[i][j + 1] &&
    arr[i][j] === arr[i][j + 2] &&
    arr[i][j] === arr[i][j + 3]) {
    console.log(`¡${player} ha ganado en horizontal!`);
    return true;
  } else if (i + dimension - 1 < dimension && arr[i][j] !== null &&
    arr[i][j] === arr[i + 1][j] &&
    arr[i][j] === arr[i + 2][j] &&
    arr[i][j] === arr[i + 3][j]) {
    console.log(`¡${player} ha ganado en vertical!`);
    return true;
  }
  else if (i + dimension - 1 < dimension && j + dimension - 1 < dimension &&
    arr[i][j] !== null &&
    arr[i][j] === arr[i + 1][j + 1] &&
    arr[i][j] === arr[i + 2][j + 2] &&
    arr[i][j] === arr[i + 3][j + 3]) {
    console.log(`¡${player} ha ganado en diagonal principal!`);
    return true;
  }
  else if (i + dimension - 1 < dimension && j - dimension - 1 >= 0 &&
    arr[i][j] !== null &&
    arr[i][j] === arr[i + 1][j - 1] &&
    arr[i][j] === arr[i + 2][j - 2] &&
    arr[i][j] === arr[i + 3][j - 3]) {
    console.log(`¡${player} ha ganado en diagonal secundaria!`);
    return true;
  }
  else {
    return false;
  }
};

// Comienzo del juego
const ticTacToe = () => {
  printBoard();
};

ticTacToe();
