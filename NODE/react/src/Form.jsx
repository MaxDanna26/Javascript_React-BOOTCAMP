import { useState } from "react"
import { Insert } from "./services/api";

const Form = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [dni, setDni] = useState('');
  return (
    <div>
      <input value={dni} onChange={(e) => setDni(e.target.value)} placeholder="Ingresa tu dni"></input>
      <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Ingresa tu contraseña"></input>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Ingresa tu nombre"></input>
      <button onClick={() => Insert(dni, password, name)}>Insertar</button>
    </div>
  )
}

export default Form