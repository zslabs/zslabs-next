import * as React from 'react'

const ControlWrapper: React.FC = (props) => {
  return (
    <div
      className="relative shadow-sm bg-slate-1 border border-slate-7 text-slate-12 focus-within:border-primary-7 focus-within:text-primary-11 rounded-lg"
      {...props}
    />
  )
}

export default ControlWrapper
