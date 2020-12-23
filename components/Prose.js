import PropTypes from 'prop-types'
import clsx from 'clsx'

export default function Prose({ className, ...rest }) {
  return <div className={clsx('prose', className)} {...rest} />
}
Prose.propTypes = {
  className: PropTypes.string,
}
