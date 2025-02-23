import { StyledComponent1 } from "./style"
import PropTypes from 'prop-types';

function MyComponent({ size }) {
  return (
    <div>
      <StyledComponent1 size={size} />
    </div>
  )
}

export default MyComponent

MyComponent.propTypes = {
  size: PropTypes.string,
} 