import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { getItemById, deleteItem, updateItem } from '../src/services/api';

function Update() {
  const { id } = useParams();

  const [persona, setPersona] = useState({ 'name': '', 'surname': '', 'date': '' });
  useEffect(() => { getItemById(id).then(setPersona) }, [id]);

  return (
    <div>
      <h1>Update</h1>
      <input defaultValue={persona.name} placeholder="Nombre" onChange={e => setPersona({ ...persona, 'name': e.target.value })}></input>
      <input defaultValue={persona.surname} placeholder="Apellido" onChange={e => setPersona({ ...persona, 'surname': e.target.value })}></input>
      <input defaultValue={persona.date} type="date" onChange={e => setPersona({ ...persona, 'date': e.target.value })}></input>
      <button onClick={() => deleteItem(id)}>Delete</button>
      <button onClick={() => updateItem(id, persona)}>Update</button>
    </div>
  )
}

export default Update
