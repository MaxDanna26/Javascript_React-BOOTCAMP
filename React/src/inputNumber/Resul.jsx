import propTypes from 'prop-types'

export default function Resul({ resul }) {
  return (
    <div>
      {resul}
    </div>
  )
}

Resul.propTypes = {
  resul: propTypes.string,
}
