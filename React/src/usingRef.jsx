import { useRef, useState } from 'react';

const App = () => {
  const nombreRef = useRef();
  const [resultado, setResultado] = useState();

  const procesar = () => {
    const valor = nombreRef.current.value;
    setResultado(valor * 2);
  }

  const gradosRef = useRef();
  const [grados, setGrados] = useState();

  const procesarGrados = () => {
    const grados = gradosRef.current.value * 9 / 5;
    setGrados(grados + 32);
  }

  return <div>
    <h1>Calculadora de dolares</h1>
    <input type="text" />
    <button onClick={procesar}>Enviar</button>
    <p>{resultado}</p>

    <h1>Calculadora de grados</h1>
    <input type='text' ref={gradosRef}></input>
    <button onClick={procesarGrados}></button>
    <p>{grados}</p>
  </div>



}

export default App;