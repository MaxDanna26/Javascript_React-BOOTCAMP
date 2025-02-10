
const calcular = () => {
  const calculo = document.querySelector("#euros").value;
  document.querySelector('p').textContent = calculo * 2;
}

document.querySelector('button').addEventListener('click', calcular);

const calcularGrados = () => {
  const centigrados = document.querySelector('#grados').value;
  console.log(centigrados);
  const fahrenheit = (9 / 5) * centigrados + 32;
  document.getElementById('gradosF').textContent = fahrenheit;
}

document.getElementById('buttonGrados').addEventListener('click', calcularGrados);

const respuesta = () => {
  const name = document.getElementById('name').value;
  const box = document.getElementById('material').value;
  const boxDimension = document.querySelector('[name=rBtn]:checked').value;
  const comments = document.getElementById('comments').value;

  const msj = name + ' ha pedido una caja de ' + box + ' con unas dimensiones ' + boxDimension + '. ' + comments;

  document.getElementById('result').textContent = msj;
}

document.getElementById('btnBox').addEventListener('click', respuesta);

const MIN = 0;
const MAX = 5;
let secretNumber = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
console.log(secretNumber);
const btn = document.getElementById('btnNumber');
const p = document.getElementById('resultNumber');
let intentos = 3;

const playNumber = () => {
  const uNumber = parseInt(document.getElementById('uNumber').value);

  if (uNumber === secretNumber) {
    p.style.backgroundColor = 'Green';
    p.style.color = 'White';
    p.textContent = "¡Felicidades! Has acertado el número.";
    btn.textContent = "Start again!";
    btn.disabled = true;
  } else {
    intentos--;
    if (intentos > 0) {
      p.textContent = 'Incorrecto. Te quedan ' + intentos + ' intentos.';
      btn.textContent = 'Try Again!';
    } else {
      p.style.backgroundColor = 'Red';
      p.textContent = 'Has perdido. El número era ' + secretNumber + '.';
      btn.disabled = true;
    }
  }
}

btn.addEventListener('click', playNumber);

const calculateCost = () => {
  const numNights = document.getElementById('nights').value;
  const city = document.getElementById('city').value;

  const hotelCost = calculateHotelCost(numNights);
  const rentCar = calculateRentCar(numNights);
  const plane = calculatePlane(city, numNights);

  document.getElementById('hotelCost').value = hotelCost;
  document.getElementById('travelCost').value = plane;
  document.getElementById('rentCar').value = rentCar;
  document.getElementById('totalCost').value = rentCar + hotelCost + plane;

}

const calculateHotelCost = (numNights) => {
  const cost = 140 * numNights;
  return cost;
}

const calculatePlane = (city, numNights) => {
  let price = 0;

  switch (city) {
    case 'Oviedo': price = 15; break;
    case 'Tokyo': price = 700; break;
    case 'Madrid': price = 90; break;
    case 'Barcelona': price = 90; break;
  }

  if (numNights >= 3) {
    price *= 0.9;
  }

  return price;
}

const calculateRentCar = (numNights) => {
  let price = 40;

  price *= numNights;
  if (numNights >= 7) {
    price = price - 50;
  }
  else if (numNights >= 3) {
    price = price - 20;
  }

  return price;
}

document.getElementById('travelBtn').addEventListener('click', calculateCost);