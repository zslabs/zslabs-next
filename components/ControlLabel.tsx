import * as React from 'react'

/* eslint-disable jsx-a11y/label-has-associated-control */
const ControlLabel: React.FC = (props) => {
  return (
    <label
      htmlFor="test"
      className="absolute top-1 w-full px-2 pointer-events-none uppercase text-xs tracking-widest font-bold whitespace-nowrap overflow-hidden overflow-ellipsis text-current"
      {...props}
    />
  )
}
/* eslint-enable jsx-a11y/label-has-associated-control */

export default ControlLabel
