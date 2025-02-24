import { Link } from "react-router-dom"
import PropTypes from 'prop-types';

function Layout({ children }) {
  return (
    <div>
      <header>Soy la cabecera</header>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/page2/'>page two</Link>
        </li>
      </ul>
      <main>{children}</main>
      <footer>Soy el footer</footer>
    </div>
  )
}

export default Layout

Layout.propTypes = {
  children: PropTypes.node,
}
