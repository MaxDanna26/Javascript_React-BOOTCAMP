import { useState } from "react"
import { Box } from "./style"

const App = () => {

  const [color, setColor] = useState(false);

  return (
    <div>
      <Box color={color} />
      <button onClick={() => setColor(!color)}>Cambiar color</button>
    </div>
  )
}

export default App
