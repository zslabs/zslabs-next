import clsx from 'clsx'
import PropTypes from 'prop-types'

export default function Alert({ className, ...rest }) {
  return (
    <aside
      className={clsx(
        'Alert border-l-8 border-blue-500 bg-blue-100 rounded-lg p-6 my-8',
        className
      )}
      {...rest}
    />
  )
}

Alert.propTypes = {
  className: PropTypes.string,
}
