import propTypes from 'prop-types';
import { useRef } from 'react';

export default function InputNumber({ act }) {
  const input = useRef();

  const change = (valor) => {
    input.current.value = valor;
    return valor
  }

  return (
    <div>
      <button onClick={() => act(change(Number(input.current.value) - 1))}>-</button>
      <input onChange={() => act(Number(input.current.value))} ref={input}></input>
      <button onClick={() => act(change(Number(input.current.value) + 1))}>+</button>
    </div>
  )
}

InputNumber.propTypes = {
  act: propTypes.func,
}

