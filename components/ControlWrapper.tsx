import * as React from 'react'

const ControlWrapper: React.FC = (props) => {
  return (
    <div
      className="relative rounded-lg border border-slate-300 bg-white text-slate-500 shadow-sm focus-within:border-blue-500 focus-within:text-blue-500 dark:border-slate-500 dark:bg-slate-800 dark:text-slate-300 dark:focus-within:border-blue-500 dark:focus-within:text-blue-500"
      {...props}
    />
  )
}

export default ControlWrapper
