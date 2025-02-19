import propTypes from 'prop-types';

export default function InputNumber({ value, updateValue }) {
  return (
    <div>
      <button onClick={() => updateValue(value - 1)}>-</button>
      <input type='text'
        onChange={(e) => updateValue(+e.target.value)}
        value={value}></input>
      <button onClick={() => updateValue(value + 1)}>+</button>
    </div>
  )
}

InputNumber.propTypes = {
  updateValue: propTypes.func,
  value: propTypes.number,
}

