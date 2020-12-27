import * as React from 'react'
import PropTypes from 'prop-types'

import FormLabel from './FormLabel'
import FormFooter from './FormFooter'

const Textarea = React.forwardRef(
  (
    { label, name, explanationMessage, validationMessage, required, ...rest },
    ref
  ) => {
    return (
      <div>
        {label && (
          <FormLabel htmlFor={name} required hasError={!!validationMessage}>
            {label}
          </FormLabel>
        )}
        <textarea
          ref={ref}
          id={name}
          name={name}
          className="border-gray-300 dark:border-gray-600 rounded dark:bg-gray-800 shadow-sm h-20 w-full dark:shadow-md"
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

Textarea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  explanationMessage: PropTypes.string,
  validationMessage: PropTypes.string,
}

export default Textarea
