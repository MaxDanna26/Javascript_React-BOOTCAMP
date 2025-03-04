import { useEffect, useState } from "react";
import { getItems } from "../src/services/api";
import { Link } from 'react-router-dom'

function Read() {
  const [personas, setPersonas] = useState();

  useEffect(() => { getItems().then(setPersonas) }, []);

  return (
    <div>
      {personas?.map(persona => <p key={persona.id}><Link to={`/update/${persona.id}`}>{persona.id}</Link> {persona.name} {persona.surname} - {persona.date} </p>)
      }
    </div>
  )
}

export default Read
