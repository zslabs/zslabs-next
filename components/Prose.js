import PropTypes from 'prop-types'
import clsx from 'clsx'

export default function Prose({ as: Component = 'div', className, ...rest }) {
  return <Component className={clsx('prose', className)} {...rest} />
}
Prose.propTypes = {
  as: PropTypes.any,
  className: PropTypes.string,
}
