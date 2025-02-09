const number = Number(prompt('Introduce un número'));
const numberDos = Number(prompt('Introduce otro numero:'));
const operador = prompt('Introduce el operador que deseas entre +, - , / o *:');

if (operador === '+') {
  alert(number + numberDos);
}
else if (operador === '-') {
  alert(number - numberDos);
}
else if (operador === '/') {
  alert(number / numberDos);
}
else {
  alert(number * numberDos);
}

const min = 1;
const max = 5;
const n = Math.floor(Math.random() * (max - min + 1)) + min;

const nUsuario = Number.parseInt(prompt('Dime un numero secreto para comprobar: '));
alert('El numero secreto que habia que adivinar era: ' + n);
if (nUsuario === n) {
  alert('Has acertado el numero!')
}
else {
  alert('Has fallado!')
}

const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

alert('Tienes tres intentos para adivinar mi numero secreto: ');

for (let i = 1; i <= 3; i++) {
  let numeroUsuario = Number.parseInt(prompt('Introduce un numero: '));
  if (numeroUsuario === numeroAleatorio) {
    alert('Has acertado! , el numero aleatorio era: ' + numeroAleatorio);
  }
  else {
    alert('Has fallado! , tienes otro intento!');
  }
}


function dniLetras() {
  const numberDni = prompt('Ingresa el numero de DNI:');

  alert('Has introducido el numero: ' + numberDni);

  if (!numberDni || isNaN(numberDni) || numberDni.length !== 8) {
    alert('Debes ingresar un número de DNI de 8 dígitos.');
    return null;
  }
  else {
    let newNumber = numberDni % 23;
    let letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
    let letraDni = letras.charAt(newNumber);
    console.log('Tu dni es : ' + numberDni + letraDni);
  }
}
dniLetras();
// 49632130

function costeViaje() {
  const numNoches = prompt('numero de noches');
  const destino = prompt('destino');
  const resultado1 = Number(costeHotel(numNoches));
  const resultado2 = Number(costeAvion(destino, numNoches));
  const resultado3 = Number(costeAlquilerCoche(numNoches));
  console.log("Coste hotel: " + resultado1);
  console.log("Coste viaje: ", resultado2);
  console.log("Coste alquiler coche: ", resultado3);
  console.log("Total:", resultado1 + resultado2 + resultado3);
}

costeViaje();

function costeHotel(numNoches) {
  let precioHotel = 140;

  let costeHotel = precioHotel * numNoches;
  return costeHotel;
}

function costeAvion(ciudad, numNoches) {
  let precioAvion = 0;
  switch (ciudad) {
    case 'Oviedo': precioAvion = 15; break;
    case 'Tokyo': precioAvion = 700; break;
    case 'Madrid': precioAvion = 90; break;
    case 'Barcelona': precioAvion = 90; break;
  }

  if (numNoches >= 3) {
    precioAvion = precioAvion - (precioAvion * 10 / 100);
  }
  return precioAvion;
}

function costeAlquilerCoche(numNoches) {
  let precioCoche = 40;

  precioCoche *= numNoches;

  if (numNoches >= 7) {
    precioCoche = precioCoche - 50;
  }
  else if (numNoches >= 3) {
    precioCoche = precioCoche - 20;
  }
  return precioCoche;
}

const base = 2;
const exponente = 5;
let aux = 1;

for (let i = 0; i < exponente; i++) {
  aux = aux * base;
}
console.log(aux);

for (let i = 2; i < factorial; i++) {
  result *= i;
}
console.log(result);

let factorial = 5;
let result = factorial;

for (let i = factorial; i > 1; i--) {
  result *= i - 1;
}

console.log(result);





