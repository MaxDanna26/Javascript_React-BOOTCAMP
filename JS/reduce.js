// Dado el siguiente array de datos: [1, 2, 3].Calcular el valor medio utilizando la instrucción reduce.

const array = [1, 2, 3];

console.log((array.reduce((acc, num) => acc + num, 0)) / array.length);