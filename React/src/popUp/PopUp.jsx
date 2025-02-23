import { Back, Overlay, Relative } from "./style";
import PropTypes from 'prop-types';


const Popup = ({ visible, setVisible, title, text }) => (
  <div>
    <Back $visible={visible}>
      <Overlay />
      <Relative>
        <button onClick={() => setVisible(false)}>X</button>
        <h1>{title}</h1>
        <p>{text}</p>
      </Relative>
    </Back>
  </div>
);
export default Popup;

Popup.propTypes = {
  visible: PropTypes.bool,
  setVisible: PropTypes.bool,
  title: PropTypes.string,
  text: PropTypes.string,
};
