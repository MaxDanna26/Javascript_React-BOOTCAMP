const users = [
  {
    "name": "Paco",
    "isActive": false,
    "edad": 18
  },
  {
    "name": "Laura",
    "isActive": false,
    "edad": 21
  },
  {
    "name": "Raquel",
    "isActive": false,
    "edad": 15
  },
  {
    "name": "Juan",
    "isActive": true,
    "edad": 17
  },
  {
    "name": "Alberto",
    "isActive": false,
    "edad": 50
  },
  {
    "name": "Rodolfo",
    "isActive": true,
    "edad": 7
  },
];

//  Recorre el array anterior para obtener un nuevo array con los usuarios activos.

// simplemente pongo user.isActive porque va a devolver true y no hace falta compararlo
const result = users.filter(user => user.isActive);

console.log(result);

const mayores = users.filter(user => user.edad > 18);

console.log(mayores);