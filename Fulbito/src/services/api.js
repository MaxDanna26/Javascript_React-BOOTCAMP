import { i } from './axios'

export const getEquipos = async () => {
  const res = await i.get(`/teams/`);
  return res.data;
}

export const getPlayers = async (id) => {
  const res = await i.get(`/players/` + id);
  return res.data;
}

export const getEquipo = async (id) => {
  const res = await i.get(`/teams/` + id);
  return res.data;
}