import { useRef } from "react"
import { createItem } from "../src/services//api"

function Create() {
  const name = useRef();
  const surname = useRef();
  const date = useRef();

  return (
    <div>
      <h1>Create</h1>
      <input ref={name} placeholder="Nombre"></input>
      <input ref={surname} placeholder="Apellido"></input>
      <input type="date" ref={date} placeholder="Fecha de nacimiento"></input>
      <button onClick={() => createItem({ 'name': name.current.value, 'surname': surname.current.value, 'date': date.current.value })}>Create</button>
    </div>
  )
}

export default Create
