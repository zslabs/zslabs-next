import * as React from 'react'

const ControlWrapper: React.FC = (props) => {
  return (
    <div
      className="relative shadow-sm bg-white dark:bg-transparent border-2 border-gray-300 text-gray-500 dark:text-gray-300 focus-within:border-blue-500 focus-within:text-blue-500 rounded"
      {...props}
    />
  )
}

export default ControlWrapper
