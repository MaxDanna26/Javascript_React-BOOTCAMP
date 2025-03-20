import { Link } from "react-router-dom"
import PropTypes from 'prop-types';
import { logout } from "../services/auth";

function Layout({ children }) {
  return (
    <div>
      <button onClick={logout} >Logout</button>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/seemessage'>See Message</Link>
        </li>
        <li>
          <Link to='/writemessage'>Write Message</Link>
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
