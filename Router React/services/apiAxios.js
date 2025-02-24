import instance from './axios'

export const getCharacterss = async () => {
  const res = await instance.get(`/characters`);
  return res.data.items;
}