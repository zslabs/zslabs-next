import * as React from 'react'
import PropTypes from 'prop-types'

export default function FormFooter({
  className,
  explanationMessage,
  validationMessage,
  ...rest
}) {
  return explanationMessage || validationMessage ? (
    <div
      className="text-sm grid auto-cols-fr grid-flow-col gap-2 mt-1"
      {...rest}
    >
      {explanationMessage && (
        <div className="text-gray-500 dark:text-gray-400">
          {explanationMessage}
        </div>
      )}
      {validationMessage && (
        <div className="text-red-500 dark:text-gray-400 text-right">
          {validationMessage}
        </div>
      )}
    </div>
  ) : null
}

FormFooter.propTypes = {
  className: PropTypes.string,
  explanationMessage: PropTypes.string,
  validationMessage: PropTypes.string,
}
