import PropTypes from 'prop-types';
import { Container, Enlace, Li, Ul } from "../styled";

function Layout({ children }) {
  return (
    <Container>
      <Ul>
        <Li>
          <Enlace to='/'>Read</Enlace>
        </Li>
        <Li>
          <Enlace to='/create'>Create</Enlace>
        </Li>
        <Li>
          <Enlace to='/delete'>Delete</Enlace>
        </Li>
      </Ul>
      <main>{children}</main>
    </Container>
  )
}

export default Layout

Layout.propTypes = {
  children: PropTypes.node,
}
