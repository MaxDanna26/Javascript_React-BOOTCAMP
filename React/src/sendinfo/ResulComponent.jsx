import PropTypes from 'prop-types';

export default function ResulComponent({ resul }) {

  return (
    <div>
      <p>Resultado:{resul} </p>
    </div>
  )
}

ResulComponent.propTypes = {
  resul: PropTypes.string,
};

