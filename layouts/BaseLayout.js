import PropTypes from 'prop-types'

export default function BaseLayout({ children }) {
  return <div>{children}</div>
}

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
