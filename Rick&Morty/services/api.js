import instance from './axios'

export const getCharacters = async () => {
  const res = await instance.get(`/api/character`);
  return res.data.results;
}

export const getCharacterWithId = async (id) => {
  const res = await instance.get(`api/character/${id}`);
  console.log(res);
  return res.data;
}