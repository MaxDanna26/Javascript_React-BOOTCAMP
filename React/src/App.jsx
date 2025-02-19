import SendInfo from "./sendInfo";
import ResulComponent from "./ResulComponent";
import { useState } from "react";

const App = () => {
  const [info, setInfo] = useState();

  const handleApp = (a, b) => {
    const infoAux = a * b;
    setInfo(infoAux);
  }

  return (
    <>
      <SendInfo handleResul={(a, b) => handleApp(a, b)} />
      <ResulComponent resul={info} />
    </>
  );
}

export default App;