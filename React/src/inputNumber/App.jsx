import { useState } from "react";
import InputNumber from "./InputNumber"
import Resul from "./Resul"

export default function App() {

  const [info, setInfo] = useState(0);

  return (
    <div>
      <InputNumber updateValue={setInfo} value={info} />
      <Resul resul={info} />
    </div>
  )
}
