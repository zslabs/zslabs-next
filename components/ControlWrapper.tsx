import * as React from 'react'

const ControlWrapper: React.FC = (props) => {
  return (
    <div
      className="relative shadow-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-500 text-gray-500 dark:text-gray-300 focus-within:border-blue-500 dark:focus-within:border-blue-500 focus-within:text-blue-500 dark:focus-within:text-blue-500 rounded-lg"
      {...props}
    />
  )
}

export default ControlWrapper
