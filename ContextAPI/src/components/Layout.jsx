import PropTypes from 'prop-types';
import { NavLinks, Nav } from '../styled.js'
import { logout } from '../services/auth';
import { Logout } from '../styled';
import { ImExit } from "react-icons/im";


function Layout({ children }) {
  return (
    <>
      <Nav>
        <NavLinks to='/'>Home</NavLinks>
        <Logout onClick={logout}>Logout <ImExit /> </Logout>
      </Nav>
      <main>{children}</main>
    </>
  )
}

export default Layout

Layout.propTypes = {
  children: PropTypes.node,
}
