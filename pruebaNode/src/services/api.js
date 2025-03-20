import instance from './axios'

export const readCiudadanos = async () => {
  const res = await instance.get(`/ciudadano`);
  return res.data;
}

export const Insert = async (dni, contrasenya, nombre) => {
  const res = await instance.post('/insert', { dni, contrasenya, nombre });
  return res.data;
}

export const Delete = async (dni, contrasenya, nombre) => {
  const res = await instance.post('/delete', { dni, contrasenya, nombre });
  return res.data;
}