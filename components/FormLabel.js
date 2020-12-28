/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types'

import { ReactComponent as Asterisk } from '~icons/asterisk.svg'
import { ReactComponent as ExclamationTriangle } from '~icons/exclamation-triangle.svg'

export default function FormLabel({ children, required, hasError, ...rest }) {
  return (
    <label
      className="font-bold mb-2 items-center gap-2 grid grid-flow-col justify-start auto-cols-auto cursor-default"
      {...rest}
    >
      {children}
      {required && !hasError && (
        <Asterisk className="text-red-500 dark:text-gray-400" />
      )}
      {hasError && (
        <ExclamationTriangle className="text-red-500 dark:text-gray-400" />
      )}
    </label>
  )
}

FormLabel.propTypes = {
  hasError: PropTypes.bool,
  required: PropTypes.bool,
  children: PropTypes.node.isRequired,
}
/* eslint-enable jsx-a11y/label-has-associated-control */
