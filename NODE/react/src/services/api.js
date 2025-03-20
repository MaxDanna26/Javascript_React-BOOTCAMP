import instance from './axios'

export const getLibro = async () => {
  const res = await instance.get(`/libro`);
  return res.data;
}

export const getFormularioAlta = async () => {
  const res = await instance.get(`libro/alta`);
  return res.data;
}

export const Insert = async (dni, contrasenya, nombre) => {
  const res = await instance.post('/form', { dni, contrasenya, nombre });
  return res.data;
}