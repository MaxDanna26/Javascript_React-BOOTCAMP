import instance from './axios'

export const getCategories = async () => {
  const res = await instance.get(`/categories`);
  return res.data;
}

export const getJokeFromCategory = async (category) => {
  const res = await instance.get(`/random?category=${category}`);
  return res.data.value;
}