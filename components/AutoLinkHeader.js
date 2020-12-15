import PropTypes from 'prop-types'
import slugify from 'slugify'

export default function AutoLinkHeader({ as: Component, children, ...rest }) {
  return (
    <Component
      id={slugify(children, {
        lower: true,
        locale: 'en',
      })}
      {...rest}
    >
      {children}
    </Component>
  )
}

AutoLinkHeader.propTypes = {
  as: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}
