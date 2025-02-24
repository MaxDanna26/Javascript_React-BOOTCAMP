export const getCharacters = async () => {
  const res = await fetch('https://dragonball-api.com/api/characters');
  const data = await res.json();
  return data.items;
}