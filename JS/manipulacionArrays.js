let characters;
let collectedCharacters = [];
let collectedCharacters2 = [];

const getWomansName = () => {
  const namesWomen = characters
    .filter(character => character.gender === 'female')
    .map(character => character.name);
  console.log('getWomansName(): ', namesWomen);
}

const getSmallerPeople = () => {
  const smallerPeople = characters
    .map(character => ({ ...character, height: character.height - 10 }));
  console.log('getSmallerPeople(): ', smallerPeople);
}

const sumaDePeso = () => {
  const totalPeso = characters
    .map(character => character.mass)
    .reduce((acc, mass) => acc + Number(mass), 0);
  console.log(totalPeso);
}

const mediaDeAltura = () => {
  const mediaAltura = characters
    .map(character => character.height)
    .reduce((acc, height) => acc + Number(height), 0);
  console.log(mediaAltura / characters.length);
}

const collectByIndex = (index) => {
  const choosedId = characters[index];
  collectedCharacters.push(choosedId);
  console.log(choosedId);
}

const collectByName = (characterName) => {
  const chooseByName = characters
    .find(character => character.name === characterName);
  collectedCharacters.push(chooseByName);
  console.log(chooseByName);
}

const removeByName = (characterName) => {
  collectedCharacters = collectedCharacters
    .filter(character => character.name !== characterName);
  console.log(collectedCharacters);
}

const getCharacterFilms = (characterName) => {
  const characterFilms = characters
    .find(character => character.name === characterName).films;
  console.log(characterFilms);
}

const collectByName2 = (characterName) => {
  const collectByName = characters.find(character => character.name === characterName);

  if (collectedCharacters2.find(character => character.name === characterName)) {
    collectByName.amount++;
  }
  else {
    collectedCharacters2.push(collectByName);
    collectByName.amount = 1;
  }
}

const mediaDeAltura2 = () => {
  const mediaAltura = collectedCharacters2
    .map(character => character.height)
    .reduce((acc, height) => acc + Number(height), 0) / collectedCharacters2.length;
  console.log(mediaAltura);
}

const removeByName2 = (characterName) => {
  collectedCharacters2 = collectedCharacters2.filter(
    (character) => character.name !== characterName
  );

  console.log("Remove by name 2", collectedCharacters2);
};

fetch('https://swapi.py4e.com/api/people')
  .then(res => res.json())
  .then(data => {
    characters = data.results;
    // Aquí ejecutaremos las llamadas a las funciones que definiremos más arriba
    console.log(characters);
    getWomansName();
    getSmallerPeople();
    sumaDePeso();
    mediaDeAltura();
    collectByIndex(0);
    collectByName('Leia Organa');
    removeByName('Leia Organa');
    getCharacterFilms('Leia Organa');
    collectByName2('Leia Organa');
    collectByName2('Leia Organa');
    collectByName2('Luke Skywalker');
    console.log(collectedCharacters2);
    mediaDeAltura2();
    removeByName2();
  });