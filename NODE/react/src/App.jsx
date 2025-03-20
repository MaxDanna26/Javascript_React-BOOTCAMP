import { useEffect, useState } from "react"
import { getFormularioAlta } from "./services/api"
import Form from "./Form";

const App = () => {

  const [peticion, setPeticion] = useState();
  useEffect(() => { getFormularioAlta().then(setPeticion) }, [])

  return (
    <div>
      {peticion}
      <Form />
    </div>

  )
}

export default App