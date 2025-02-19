import { useRef } from "react"
import PropTypes from 'prop-types'

export default function SendInfo({ handleResul }) {
  const inputRef = useRef();
  const input2Ref = useRef();

  return (
    <div>
      <input ref={inputRef} placeholder="Ingresa un numero"></input>
      <input ref={input2Ref} placeholder="Ingresa un numero"></input>
      <button onClick={() => handleResul(inputRef.current.value, input2Ref.current.value)}>Calcular</button>
    </div>
  )
}

SendInfo.propTypes = {
  handleResul: PropTypes.func,
};
