import { useState } from 'react';
import data from './data.json';
import { Parrafo } from './style';

function App() {
  const [it, setIt] = useState(0);

  const handleColor = (nuevoIndex) => {
    if (nuevoIndex >= 0 && nuevoIndex < data.length) {
      setIt(nuevoIndex);
    }
  };

  return (
    <div>
      <button onClick={() => handleColor(it - 1)} disabled={it === 0}>Anterior</button>
      <button onClick={() => handleColor(it + 1)} disabled={it === data.length - 1}>Siguiente</button>

      {data.map((linea, index) => (
        <Parrafo key={index} $activo={index === it}>
          {linea}
        </Parrafo>
      ))}
    </div>
  );
}

export default App;
