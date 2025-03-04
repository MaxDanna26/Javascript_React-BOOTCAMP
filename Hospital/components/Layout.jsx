import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Layout({ children }) {
  return (
    <div>
      <Link to='/'>Volver</Link>
      <main>{children}</main>
    </div>
  )
}

export default Layout

Layout.propTypes = {
  children: PropTypes.node,
}
