import * as React from 'react'

/* eslint-disable jsx-a11y/label-has-associated-control */
const ControlLabel: React.FC = (props) => {
  return (
    <label
      className="absolute top-0 left-0 w-full px-2 py-1 bg-white dark:bg-gray-800 rounded-t-lg pointer-events-none uppercase text-xs tracking-widest font-extrabold whitespace-nowrap overflow-hidden overflow-ellipsis text-current"
      {...props}
    />
  )
}
/* eslint-enable jsx-a11y/label-has-associated-control */

export default ControlLabel
