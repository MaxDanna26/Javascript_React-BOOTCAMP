const div = document.getElementById('dimension');
const dimension = 4;
const arr = Array.from({ length: dimension }, () => Array(dimension).fill(null));
let winner = false;
let turno = false;

const createBoard = () => {
  for (let i = 0; i < dimension; i++) {
    for (let j = 0; j < dimension; j++) {
      arr[i][j] = null; // La matriz solo guarda valores reales
    }
  }
};

const printBoard = () => {
  div.innerHTML = ""; // Limpiar el tablero

  for (let i = 0; i < dimension; i++) {
    for (let j = 0; j < dimension; j++) {
      const cell = document.createElement('div');
      cell.classList.add('col');
      cell.id = `${i}.${j}`;
      cell.setAttribute("fila", i);
      cell.setAttribute("columna", j);
      cell.onclick = () => printPosition(i, j); // Evento corregido
      cell.textContent = arr[i][j] || ""; // Mostrar X u O si ya se ha jugado
      div.appendChild(cell);
    }
  }
};

const printPosition = (fila, columna) => {
  if (arr[fila][columna] !== null || winner) return; // Evita sobreescribir y si ya hay un ganador

  const player = turno ? 'X' : 'O';
  arr[fila][columna] = player; // Guardar jugada en la matriz
  document.getElementById(`${fila}.${columna}`).textContent = player;

  if (isWinner(fila, columna, player)) {
    winner = true;
    console.log(`¡${player} ha ganado!`);
  }
  console.log(arr);
  turno = !turno; // Cambiar turno
};

const isWinner = (i, j, player) => {
  console.log(`Verificando victoria para ${player} en (${i},${j})`);
  // Control horizontal
  if (
    j <= dimension - 4 &&
    arr[i][j] === player &&
    arr[i][j + 1] === player &&
    arr[i][j + 2] === player &&
    arr[i][j + 3] === player
  ) {
    console.log(`¡${player} ha ganado en horizontal!`);
    return true;
  }

  // Control vertical
  if (
    i <= dimension - 4 &&
    arr[i][j] === player &&
    arr[i + 1][j] === player &&
    arr[i + 2][j] === player &&
    arr[i + 3][j] === player
  ) {
    console.log(`¡${player} ha ganado en vertical!`);
    return true;
  }
  console.log(`No hay victoria en (${i},${j})`);
  return false;
};

// Comienzo del juego
const ticTacToe = () => {
  createBoard();
  printBoard();
};

ticTacToe();
