import instance from './axios'

export const readCiudadanos = async () => {
  const res = await instance.get(`/ciudadano`);
  return res.data;
}

export const Insert = async (dni, contrasenya, nombre) => {
  const res = await instance.post('/insert', { dni, contrasenya, nombre });
  return res.data;
}

export const deleteCiudadano = async (id) => {
  await instance.delete(`/delete/${id}`);
  return 'Usuario eliminado!';
}

export const getCiudadanoById = async (id) => {
  const res = await instance.get(`/getCiudadanoById/${id}`);
  return res.data;
}

export const updateCiudadano = async (id, dni, contrasenya, nombre) => {
  await instance.put(`/update/${id}`, { dni, contrasenya, nombre, });
  return 'Usuario editado!';
}