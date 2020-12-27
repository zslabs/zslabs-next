import * as React from 'react'
import PropTypes from 'prop-types'

import FormLabel from './FormLabel'
import FormFooter from './FormFooter'

const Input = React.forwardRef(
  (
    {
      label,
      name,
      type = 'text',
      explanationMessage,
      validationMessage,
      ...rest
    },
    ref
  ) => {
    return (
      <div>
        {label && (
          <FormLabel htmlFor={name} required hasError={!!validationMessage}>
            {label}
          </FormLabel>
        )}
        <input
          ref={ref}
          id={name}
          name={name}
          type={type}
          className="border-gray-300 dark:border-gray-600 rounded dark:bg-gray-800 shadow-sm h-12 w-full dark:shadow-md"
          {...rest}
        />
        <FormFooter
          explanationMessage={explanationMessage}
          validationMessage={validationMessage}
        />
      </div>
    )
  }
)

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'email']),
  required: PropTypes.bool,
  explanationMessage: PropTypes.string,
  validationMessage: PropTypes.string,
}

export default Input
