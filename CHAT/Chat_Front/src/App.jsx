import { useState } from "react";
import { handleSubmit, useSocket } from "./utils/CustomHooks"

const App = () => {
  const { mensajes } = useSocket();
  const [msj, setMsj] = useState('');

  return (
    <div>
      {mensajes.map((msj, index) => <p key={index}>{msj}</p>)}
      <input value={msj} onChange={(e) => setMsj(e.target.value)} placeholder="Escribe tu mensaje!"></input>
      <button onClick={() => (handleSubmit(msj), setMsj(''))}>Enviar</button>
    </div>
  )
}

export default App