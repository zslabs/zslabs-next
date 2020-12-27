import PropTypes from 'prop-types'

import FormLabel from './FormLabel'

export default function Input({ label, name, type = 'text', ...rest }) {
  return (
    <div>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <input
        id={name}
        name={name}
        type={type}
        className="border-gray-300 dark:border-gray-600 rounded dark:bg-gray-800 shadow-sm h-12 w-full dark:shadow-md"
        {...rest}
      />
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'email']),
}
