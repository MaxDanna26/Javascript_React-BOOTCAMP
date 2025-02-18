const arr = ['Casa', 'Pelota', 'Patrimonio', 'Diversidad'];
const MIN = 0;
const MAX = 3;

const secretWord = arr[Math.floor(Math.random() * (MAX - MIN + 1)) + MIN];

let hiddenWord = secretWord.replace(/./g, "_ ");
document.querySelector('h2').innerHTML = hiddenWord;

const playAhorcado = () => {
  const letter = document.querySelector('input').value;

  for (let i = 0; i < secretWord.length; i++) {
    if (letter === secretWord[i]) {
      hiddenWord[i] = letter;
    }
  }
}

document.querySelector('button').addEventListener('click', playAhorcado);