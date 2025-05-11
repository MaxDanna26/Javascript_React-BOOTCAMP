import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { getEquipo, getPlayers } from "../services/api";
import { Container, Player } from './styled.js'

const Players = () => {
  const { id } = useParams();
  const url = 'http://localhost:3000/';
  const [players, setPlayers] = useState([]);
  const [equipo, setEquipo] = useState();

  useEffect(() => { getPlayers(id).then(setPlayers) }, [id]);
  useEffect(() => { getEquipo(id).then(setEquipo) }, [id]);

  return (
    <div>
      {
        equipo && <>
          {/* le agrego un 0 porque el metodo de back devuelve un array */}
          <h1>{equipo[0].nombre}</h1>
          <img src={url + equipo[0].foto_escudo}></img>
          <img src={url + equipo[0].foto_equipo}></img>
        </>
      }
      {players?.map(player =>
        <Player key={player.id}>
          {player.numero_camiseta} - {player.nombre} - {player.apellidos}
        </Player>)}
    </div>
  )
}

export default Players