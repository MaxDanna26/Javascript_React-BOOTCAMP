// Crea un array con cinco nombres de persona y recórrelo con un bucle for mostrando el texto «Conozco a alguien llamado 
const arrayNames = ['Max', 'Pedro', 'Iker', 'Miquel', 'Lucio'];

for (let i = 0; i < arrayNames.length; i++) {
  console.log('Conozco a alguien llamado ' + arrayNames[i]);
}

// Crea una función toArray que reciba dos valores y devuelva un array con estos dos valores.

function toArray(uno, dos) {
  const array = [uno, dos];
  return array;
}

console.log(toArray(5, 9));

//  Recorrer la siguiente lista con un bucle imprimiendo el doble de cada número:

const numbers = [1, 9, 3, 8, 5, 7];

for (element of numbers) {
  console.log(element * 2);
}

// Escribe una función llamada getFirstElement que reciba un array y devuelva el primer elemento.

function getFirstElement(arr) {
  return (arr[0]);
}

console.log(getFirstElement([1, 2]));

// Escribe una función llamada setFirstElement que reciba como parámetro de entrada un array y un valor cualquiera.El valor recibido debería reemplazar lo que haya en la primera posición del array.El array debería ser devuelto.

function setFirstElement(arr, valor) {
  arr[0] = valor;
  return arr;
}

console.log(setFirstElement([1, 2], 3));

// Escribe una función getLastElement que reciba un array como parámetro de entrada y devuelva el último elemento del array.

const getLastElement = (arr) => {
  return arr[arr.length - 1];
}

console.log(getLastElement([1, 2]));

// Contar el número de elementos positivos, negativos y que valgan cero en un array de 10 enteros.Los valores habrán sido harcodeados en un array.La salida por consola debería ser similar a esta:

const arrayNumbers = [1, 9, -3, 8, -5, 0, 3, 4, 6, -7];
let positive = 0;
let negative = 0;
let zero = 0;

for (element of arrayNumbers) {
  if (element > 0)
    positive++;
  else if (element < 0)
    negative++;
  else
    zero++;
}

const cant = [positive, negative, zero];
console.log('Cantidad de positivos: ' + positive);
console.log('Cantidad de negativos: ' + negative);
console.log('Cantidad de ceros: ' + zero);

// Leer 10 enteros harcodeados en un array y mostrar la media de los valores negativos y la de los positivos.

const mediaPositive = (positive + zero) / 10;
const mediaNegative = negative / 10;
console.log(mediaNegative);

//  Selecciona un elemento del array arr de tal forma que una variable que debes declarar llamada myData sea igual a 8.

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14]
];
const myData = arr[2][1];
console.log(myData);

