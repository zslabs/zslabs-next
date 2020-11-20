import PropTypes from 'prop-types'
import clsx from 'clsx'

export default function Container({ className, ...rest }) {
  return <div className={clsx('max-w-5xl mx-auto px-4', className)} {...rest} />
}

Container.propTypes = {
  className: PropTypes.string,
}
