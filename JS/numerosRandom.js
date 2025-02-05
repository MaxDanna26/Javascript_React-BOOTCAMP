const MIN = 5;
const MAX = 7;

const n = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
console.log(n);

const nombre = "Pablo";
const nAleatorio = Math.floor(Math.random() * nombre.length);

console.log(nombre.charAt(nAleatorio));
