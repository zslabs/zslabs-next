import PropTypes from 'prop-types'
import clsx from 'clsx'

import TextLink from './TextLink'

export default function LinkUnderline({ className, ...rest }) {
  return (
    <TextLink
      className={clsx(
        'bg-gradient-to-r from-gray-200 to-gray-200 dark:from-gray-600 dark:to-gray-600 duration-150 ease-linear transition-background-size bg-left-bottom bg-no-repeat bg-0/8 hover:bg-100/8',
        className
      )}
      {...rest}
    />
  )
}
LinkUnderline.propTypes = {
  className: PropTypes.string,
}
