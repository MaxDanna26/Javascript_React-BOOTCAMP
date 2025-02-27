import PropTypes from 'prop-types';

function Layout({ children }) {
  return (
    <div>
      <main>{children}</main>
    </div>
  )
}

export default Layout

Layout.propTypes = {
  children: PropTypes.node,
}
