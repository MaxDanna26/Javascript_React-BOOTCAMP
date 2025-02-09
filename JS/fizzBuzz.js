// FIZZ BUZZ

for (let i = 0; i <= 100; i++) {
  if (i % 3 == 0 & i % 5 == 0)
    console.log('FizzBuzz');
  else if (i % 3 == 0)
    console.log('Fizz');
  else if (i % 5 == 0)
    console.log('Buzz');
  else
    console.log(i);
}

// imprimir los numeros pares en la pantalla!

for (let i = 0; i <= 100; i++)
  console.log(i);

// imprimir los numeros pares

for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0)
    console.log(i);
}


// suma los numeros del 5 al 0 inclusive en orden descendente usando un bucle for

for (let i = 5; i >= 0; i--) {
  let j = i;

  j--;
  console.log(i + j);
}

// mostrar la tabla del 7 multiplicando
for (let i = 1; i <= 10; i++) {
  let siete = 7;

  console.log("7 * " + i + ' = ' + siete * i);
}

// anidar la tabla del uno con todos los numeros

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(i + ' * ' + j + ' = ' + i * j);
  }
}


