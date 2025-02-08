const users = [
  {
    "name": "Paco",
    "isActive": false,
    "age": 18
  },
  {
    "name": "Laura",
    "isActive": false,
    "age": 21
  },
  {
    "name": "Raquel",
    "isActive": false,
    "age": 15
  },
  {
    "name": "Juan",
    "isActive": true,
    "age": 17
  },
  {
    "name": "Alberto",
    "isActive": false,
    "age": 50
  },
  {
    "name": "Rodolfo",
    "isActive": true,
    "age": 7
  },
];

const choosedUser = users.find(element => element.name === 'Juan');
const pruebaUser = users.find(element => element.age === 7);

console.log(choosedUser.age);
console.log(pruebaUser.name);