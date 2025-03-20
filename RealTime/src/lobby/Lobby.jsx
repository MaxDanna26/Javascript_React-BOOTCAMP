import { useState, useEffect } from "react"
import { getRoomById, updateRoom } from "../services/api";
import { createRoom } from "../services/api";
import { useLobbyContext } from "../provider/LobbyProvider";

const Lobby = () => {
  const { lobby, setLobby } = useLobbyContext();
  const [salaCod, setSalaCod] = useState();
  const [cod, setCod] = useState('');

  const updateSala = () => {
    const roomId = Math.random().toString(36).substring(2, 10).toUpperCase();
    createRoom(roomId).then((data) => {
      setSalaCod(data);
      setLobby(data);
    });
  }

  console.log(lobby);
  useEffect(() => { updateSala() }, [])

  const checkRoom = async (cod) => {
    const room = await getRoomById(cod);
    if (room) {
      await updateRoom(cod, { 'guestIsInRoom': true });
    }
    else { console.log('La sala no existe!') }
  }

  return (
    <div>
      <h1>Lobby</h1>
      <p>Codigo de la sala: {salaCod ? salaCod : 'Cargando...'} </p>
      <input type="text" value={cod} placeholder="Codigo de anfitrion" onChange={(e) => setCod(e.target.value)}></input>
      <button onClick={() => checkRoom(cod)}>Enviar</button>
    </div>

  )
}

export default Lobby