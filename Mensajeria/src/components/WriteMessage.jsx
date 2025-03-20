import { useEffect, useState } from "react"
import { createMsg } from "../services/messages"
import { useUserContext } from "../provider/UserProvider";
import { getUsers } from "../services/users";

const WriteMessage = () => {
  const [msj, setMsj] = useState();
  const [destino, setDestino] = useState();
  const [users, setUsers] = useState([]);
  const { user } = useUserContext();

  useEffect(() => { getUsers().then(setUsers) }, [])

  return (
    <div>
      <h1>A quien quieres enviar el mensaje?</h1>
      {users?.map((u, index) =>
        <div key={index}>
          <input type="checkbox" onChange={() => setDestino(u.id)} />
          <label>{u.name}</label>
        </div>
      )}
      <h1>Write Message</h1>
      <input type="textarea" onChange={(e) => setMsj(e.target.value)} />
      <button onClick={() => createMsg({ 'destinoId': user.uid, 'msj': msj, 'remitenteId': destino })}>Enviar</button>
    </div>
  )
}

export default WriteMessage