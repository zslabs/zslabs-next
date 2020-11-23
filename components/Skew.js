import clsx from 'clsx'
import PropTypes from 'prop-types'

export default function Skew({ size = 'xl', hover = false }) {
  return (
    <div
      className={clsx(
        'absolute -z-1 inset-0 transform -rotate-2 bg-gray-300 dark:bg-white dark:bg-opacity-10',
        {
          'rounded-xl': size === 'xl',
          'rounded-2xl': size === '2xl',
          'rounded-3xl': size === '3xl',
          'duration-300 ease-bounce group-hover:-rotate-3': hover,
        }
      )}
    />
  )
}

Skew.propTypes = {
  hover: PropTypes.bool,
  size: PropTypes.oneOf(['xl', '2xl', '3xl']),
}
