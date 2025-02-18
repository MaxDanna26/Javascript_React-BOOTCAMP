import { useState } from 'react';

const App = () => {
  const [inputDolares, setInputDolares] = useState('');
  const [grados, setGrados] = useState('');

  return (
    <>
      <div>
        <h1>Calculadora de dolares</h1>
        <input type='number' onChange={e => setInputDolares(e.target.value * 2)} />
        <div>{inputDolares}</div>
      </div>

      <div>
        <h1>Calculadora de grados</h1>
        <input type='number' onChange={e => setGrados(e.target.value * 9 / 5 + 32)} />
        <div>{grados}</div>
      </div>
    </>
  );
}

export default App;