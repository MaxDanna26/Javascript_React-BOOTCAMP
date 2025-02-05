function IsTrue(parametro) {

  if (parametro)
    console.log('Si, eso es cierto!');
  else
    console.log('No, eso es falso');
}

IsTrue(true);

function hoyQuieroComer(comida) {
  console.log('Hoy quiero comer ' + comida);
}

hoyQuieroComer('garbanzos');

// function calcularVelocidad(Km)


// 4. Escribe una funcion echo que devuelva lo que recibe por parametro

function echo(palabra) {
  return palabra;
}

// 5. Escribe una función saludar que reciba un parámetro y devuelva el texto «Hola < parametro > !»

function Saludar(parametro) {
  return 'Hola ' + parametro + '!';
}

// 6. Modificar la siguiente función para que devuelva Inside si val está entre 10 y 20 inclusive y Outside en caso contrario.

function test(val) {
  if (val) {
    if (val >= 10 && val <= 20)
      return "Inside";
  } else {
    return "Outside";
  }
}

// 7. Añade el operador de igual para que la siguiente función devuelva Equal cuando val sea 12.

function testEqual(val) {
  if (val === 12) {
    return "Equal";
  }
  return "Not Equal";
}

// 8. Combina las sentencias if en un único bloque de tipo if/else

function testElse(val) {
  let result = "";

  if (val > 5) {
    result = "Mayor que 5";
  } else if (val <= 5) {
    result = "Menor o igual a 5";
  }
  return result;
}

// 9. Combina las sentencias en un único bloque de tipo if/elseif/else.

function testElse(val) {
  let result = "";

  if (val == 5) {
    result = "Equal to 5";
  } else if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "Smaller than 5";
  }
  return result;
}

// 10. ¿Qué valor de x se mostrará por consola ?

function hola(nombre) {
  return "Hi " + nombre + "!";
}

const h1 = hola("Selva");
const h2 = hola("Pola");
const x = h1 + " " + h2;
console.log(x);


// 11. ¿Qué valor de x se mostrará por consola ?

function duplica(nombre) {
  return nombre + " and " + nombre;
}

const j = duplica("Roy");
console.log(j); // ¿Qué valor de x se mostrará en la consola?

// 12. Completar la función para que se cumplan las siguientes condiciones:
// num < 5 → return "Tiny";
// num < 10 → return "Small";
// num < 15 → return "Medium";
// num < 20 → return "Large";
// num >= 20 → return "Huge";


function testSize(num) {
  if (num < 5)
    return "Tiny";
  else if (num < 10)
    return "Small";
  else if (num < 15)
    return "Medium";
  else if (num < 20)
    return "Large";
  else
    return "Huge!";
}

testSize(22);

// 13. Escribe una función nand que tome como parámetros de entrada dos valores booleanos.Si ambos valores son true, debería devolver false.En cualquier otro caso, debería devolver true.

function nand(t, tt) {
  let result;

  if (t === true)
    result = true;
  else
    result = false;
  if (tt === true)
    result = true;
  else
    result = false;
  return result;
}
nand(true, false);

// 14. Escribe una función nor que tome como parámetros de entrada dos valores booleanos.Si alguno de los dos es false, debería devolver true.En cualquier otro caso, el valor devuelto debería ser false.

function nor(tres, cuatro) {
  let result;

  if (tres || cuatro === false)
    result = true;
  else
    result = false;
}

nor(false, false);

// 15. Escribe una función xor que tome dos valores booleanos.Si ambos valores son diferentes, debería devolver true.Si ambos valores son iguales, debería devolver false.

function xor(cinco, seis) {
  if (cinco != seis) {
    return true;
  }
  else if (cinco === seis) {
    return false;
  }
}

//  Crear y llamar a una función flecha que recibe un número y muestre su cubo con un console.log

const flecha = (num) => { console.log(num * num * num); }

// Crear y llamar a una función flecha que recibe la velocidad en Km / hora y la devuelva en en metros / hora.Recoger el valor devuelto y mostrarlo con un console.log.

const kilometros = (k_horas) => {
  result = k_horas * 1000;
  return result;
}

// Crea y llamar a una función flecha que recibe el ancho y el alto de un rectángulo y devuelva su área.

// Recoger el valor devuelto y mostrarlo con un console.log.

const area = (ancho, alto) => {
  let result = ancho * alto;
  console.log(result);
}

//  Crear y llamar a una función flecha que recibe la base y la altura de un triángulo y devuelva su área.

const areaTriangulo = (base, altura) => {
  let result = base * altura / 2;
  console.log(result);
}

//  Crear estas dos funciones flecha:
// Perímetro de la circunferencia = 2 * Math.PI * radio

const perimCirca = (r) => {
  let result = Math.
    PI * Math.pow(r, 2);
  return result;

}

// Escribe una función llamada longitud que reciba como parámetro de entrada una cadena de texto y devuelva el número de letras que tiene.

function longitud(texto) {
  let longitud = texto.length;
  return longitud;
}

const resul = longitud('ana');
console.log(resul);

// Escribe una función llamada devuelvePrimeraLetra que reciba como parámetro de entrada una cadena de texto y devuelva la primera letra.

function devuelvePrimeraLetra(texto) {
  let letra = texto.charAt(0);
  return letra;
}

const primeraLetra = devuelvePrimeraLetra('Hola');
console.log(primeraLetra);

// Escribe una función llamada devuelveUltimaLetra que reciba como parámetro de entrada una cadena de texto y devuelva la última letra.

function devuelveUltimaLetra(texto) {
  let length = texto.length;
  let ultimaLetra = texto.charAt(length - 1);

  return ultimaLetra;
}

const ultimaLetra = devuelveUltimaLetra('Hola');
console.log(ultimaLetra);


// Escribe una función llamada devuelveEnesimaLetra que reciba como parámetro de entrada una cadena de texto y un número y devuelva la letra que ocupe la posición indicada por el número.

function devuelveEnesimaLetra(texto, num) {
  let letra = texto[num];

  return letra;
}

const letra = devuelveEnesimaLetra('Hola', 2);
console.log(letra);

// Utilizando el método substring imprimir las letras que van desde la posición 3 a la 7 de la cadena «wonderful day», es decir “derf”.

function subCadena(texto) {
  let subCadena = texto.substring(3, 7);

  return subCadena;
}

const subCadenas = subCadena('wonderful day');
console.log(subCadenas);

//  Escribe una función llamada toCase que reciba como parámetro de entrada una cadena de texto y devuelva esa misma cadena de texto en minúsculas, un guión medio y de nuevo esa misma cadena de texto en mayúsculas.

function toCase(texto) {
  let textoModify = texto.toLowerCase() + '-' + texto.toUpperCase();
  return textoModify;
}

const textoModificado = toCase('chau');
console.log(textoModificado);

// Escribe una función llamada shortcut que tome dos cadenas de texto y devuelva la inicial de cada una de las dos cadenas.

function shortCut(texto, textoDos) {
  let result = texto[0] + textoDos[0];

  return result;
}

const firstLetters = shortCut('hola', 'chau');
console.log(firstLetters);

//  Escribe una función llamada firstChar que recibe como parámetro de entrada una cadena de texto y devuelva la primera letra que no sea un espacio.

function fisrtChar(texto) {
  let textoLimpio = texto.trim();

  return textoLimpio[0];
}

let firstLetter = fisrtChar(' h o l a c o m o estas?');
console.log(firstLetter);

//  Hacer una función devuelveMasLarga que reciba como parámetro de entrada dos cadenas de texto y devuelva la más larga.En caso de que ambas cadenas sean igual de largas, devolveremos la correspondiente al primer parámetro de la función.

function devuelveMasLarga(texto, textoDos) {
  if (texto.length >= textoDos.length) {
    return texto;
  }
  else if (textoDos.length >= texto.length) {
    return textoDos;
  }
  else {
    return texto;
  }
}

const resultado = devuelveMasLarga('chau', 'hola');
console.log(resultado);


//  Hacer una función devuelveMasLarga2 que reciba como parámetro de entrada tres cadenas de texto y devuelva la más larga.Si no hay una única cadena más larga, devolveremos el texto No hay una única cadena más larga.

function devuelveMasLarga2(texto, textoDos, textoTres) {
  if (texto.length > textoDos.length && texto.length > textoTres.length)
    return texto;
  else if (textoDos.length > texto.length && textoDos.length > textoTres.length)
    return textoDos;
  else if (textoTres.length > texto.length && textoTres.length > textoDos.length)
    return textoTres;
  else
    return 'No hay unica cadena mas larga.'
}

const result = devuelveMasLarga2('hola', 'chau', 'papa');
console.log(result);

// Hacer una función generarNombre que reciba como parámetros de entrada tres cadenas de texto.Si la longitud de alguna cadena es menor que cinco, la función debe devolver el texto ‘error’. Si ninguna cadena tiene menos de 5 letras, devolver una nueva palabra utilizando las tres primeras letras de cada palabra

function generarNombre(texto, textoDos, textoTres) {
  if (texto.length < 5)
    return 'Error';
  else if (textoDos.length < 5)
    return 'Error';
  else if (textoTres.length < 5)
    return 'Error'
  else
    return texto[0] + textoDos[0] + textoTres[0];
}

const res = generarNombre('Maximiliano', 'Gaspar', 'Danna');
console.log(res);

// Hacer una función generarNombre2 que reciba como parámetros de entrada tres cadenas de texto.Si la longitud de alguna cadena es menor que cinco, la función debe devolver el texto ‘error’. Si ninguna cadena tiene menos de 5 letras, devolver una nueva palabra utilizando la última letra de cada palabra. 

function generarNombre2(t, tt, ttt) {
  if (t.length > 5)
    return 'Error';
  else if (tt.length > 5)
    return 'Error';
  else if (ttt.length > 5)
    return 'Error'
  else
    return t[t.length - 1] + tt[tt.length - 1] + ttt[ttt.length - 1];
}

const re = generarNombre2('Max', 'Gas', 'Dan');
console.log(re);

//  Hacer una función generarNombre3 que reciba como parámetros de entrada tres cadenas de texto.Si la longitud de alguna cadena es menor que cinco, la función debe devolver el texto ‘error’. Si ninguna cadena tiene menos de 5 letras, devolver una nueva palabra utilizando las tres últimas letras de cada palabra.

function generarNombre3(t, tt, ttt) {
  if (t.length < 5)
    return 'Error';
  else if (tt.length < 5)
    return 'Error';
  else if (ttt.length < 5)
    return 'Error'
  else
    return t.slice(t.length - 3, t.length) + tt.slice(tt.length - 3, tt.length) + ttt.slice(ttt.length - 3, ttt.length);
}

const r = generarNombre3('Maximiliano', 'Gaspar', 'Danna');
console.log(r);

// Hacer una función tieneLetra que reciba como parámetro de entrada una cadena de texto y una letra y devuelva true si la letra esta presente en la palabra y false si no lo esta

function tieneLetra(texto, r) {
  if (texto.includes(r, 0)) {
    return true;
  }
  else
    return false;
}

const h = tieneLetra('hola', 'o');
console.log(h);

// Realizar la evaluación del ejercicio anterior sin tener en cuenta si la letra pasada como parámetro esta en mayúsculas o minúsculas


function tieneLetra(texto, r) {
  let newLetter = r.toLowerCase();

  if (texto.includes(newLetter, 0)) {
    return true;
  }
  else
    return false;
}

const o = tieneLetra('hola', 'O');
console.log(o);

// Hacer una función crearPalabra que reciba como parámetro de entrada una letra y un número y genere una nueva palabra que tenga la letra introducida repetida tantas veces como indique el número.Para ello podrías usar un bucle for, pero existe en Javascript una función más apropiada para este objetivo.La función repeat().Si no la conocías, investiga su uso y trata de implementarla para resolver el ejercici

function crearPalabra(l, num) {
  let palabra = l.repeat(num);

  return palabra;
}

const m = crearPalabra('a', 5);
console.log(m);

// Completar el ejercicio anterior haciendo que en la nueva palabra generada las letras esten en mayúsculas.

function crearPalabra(l, num) {
  let palabra = l.repeat(num);

  return palabra.toUpperCase();
}

const a = crearPalabra('a', 5);
console.log(a);

// Hacer una función addGuiones que reciba como parámetro de entrada una cadena texto y devuelva una nueva cadena que tendrá un guion medio detrás de cada letra.Utilizar para ello un bucle for.

function addGuiones(texto) {
  let resultado = '';

  for (let i = 0; i < texto.length - 1; i++) {
    resultado += texto[i] + '-';
  }
  return resultado + texto.slice(-1);
}

const q = addGuiones('Hola');
console.log(q);

// Hacer una función contadorDeLetras que reciba como parámetro de entrada una cadena de texto y una letra y devuelva el número de veces que esa letra esta presente en la palabra.Utilizar para ello un bucle for.

function contadorDeLetras(texto, r) {
  let contador = 0;

  for (let i = 0; i < texto.length; i++) {
    if (texto[i] == r) {
      contador++;
    }
  }
  return contador;
}

const contador = contadorDeLetras('papapapa', 'a');
console.log(contador);

// Realizar la evolución del ejercicio anterior sin tener en cuenta si la letra pasada como parámetro esta en mayúsculas o minúsculas

function contadorDeLetra(texto, r) {
  let contador = 0;

  for (let i = 0; i < texto.length; i++) {
    if (texto[i] == r.toLowerCase()) {
      contador++;
    }
  }
  return contador;
}

const conta = contadorDeLetra('papapapa', 'A');
console.log(conta);

// Hacer una función contadorDeLetras2 que reciba como parámetro de entrada dos cadenas de texto y una letra y devuelva la cadena de texto en la que dicha letra esta más presente.Utilizar para ello un bucle for.No tener en cuenta si la letra pasada como parámetro esta en mayúsculas o minúsculas.

function contadorDeLetras2(texto, textoDos, r) {
  let cont = 0;
  let conta = 0;

  for (let i = 0; i < texto.length; i++) {
    if (texto[i] == r.toLowerCase()) {
      cont++;
    }
  }
  for (let j = 0; j < textoDos.length; j++) {
    if (textoDos[j] == r.toLowerCase()) {
      conta++;
    }
  }
  if (cont >= cont)
    return texto;
  else
    return textoDos;
}

const cont = contadorDeLetras2('papapapa', 'popa', 'A');
console.log(cont);




