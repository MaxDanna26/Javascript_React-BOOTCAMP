import { useRef } from 'react';

export default function areaRec() {
  const alto = useRef();
  const ancho = useRef();
  const resultado = useRef();

  const areaRec = () => {
    resultado.current.textContent = Number(ancho.current.value) * Number(alto.current.value);
  }
  return (
    <>
      <div>
        <h1>Calculadora de areas</h1>
        <input type='number' ref={alto} placeholder='area' />
        <input type='number' ref={ancho} placeholder='ancho' />
        <button onClick={areaRec}>Calcular</button>
        <p ref={resultado}></p>
      </div>
    </>
  )
}
