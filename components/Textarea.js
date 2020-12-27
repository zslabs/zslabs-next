import PropTypes from 'prop-types'

import FormLabel from './FormLabel'

export default function Textarea({ label, name, ...rest }) {
  return (
    <div>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <textarea
        id={name}
        name={name}
        className="border-gray-300 dark:border-gray-600 rounded dark:bg-gray-800 shadow-sm h-20 w-full dark:shadow-md"
        {...rest}
      />
    </div>
  )
}

Textarea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
}
