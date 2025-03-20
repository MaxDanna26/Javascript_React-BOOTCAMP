import { Link } from "react-router-dom"
import PropTypes from 'prop-types';

function Layout({ children }) {
  return (
    <div>
      <ul>
        <li>
          <Link to='/'>Lobby</Link>
        </li>
      </ul>

      <main>{children}</main>
    </div>
  )
}

export default Layout

Layout.propTypes = {
  children: PropTypes.node,
}
