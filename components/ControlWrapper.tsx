import * as React from 'react'

const ControlWrapper: React.FC = (props) => {
  return (
    <div
      className="relative text-slate-500 focus-within:text-blue-500 dark:text-slate-300 dark:focus-within:text-blue-500 bg-white dark:bg-slate-800 rounded-lg border border-slate-300 focus-within:border-blue-500 dark:border-slate-500 dark:focus-within:border-blue-500 shadow-sm"
      {...props}
    />
  )
}

export default ControlWrapper
