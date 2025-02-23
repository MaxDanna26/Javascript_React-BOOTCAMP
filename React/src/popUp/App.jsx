import { useState } from "react"
import Popup from "./PopUp"


function App() {
  const [visible, setVisible] = useState();

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>Mostrar popup</button>
      <Popup visible={visible} setVisible={setVisible} title={'Hola'} text={'Como estas?'} />
    </div>
  )
}

export default App
