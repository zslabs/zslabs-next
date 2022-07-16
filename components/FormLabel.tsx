/* eslint-disable jsx-a11y/label-has-associated-control */
import * as React from 'react'

import ctl from '@netlify/classnames-template-literals'

type FormLabelProps = React.ComponentPropsWithoutRef<'label'>

const FormLabel: React.FC<FormLabelProps> = ({ children, ...rest }) => {
  return (
    <label
      className={ctl(
        `mb-1 ml-1 cursor-default text-sm font-bold text-slate-12 line-clamp-1`
      )}
      {...rest}
    >
      {children}
    </label>
  )
}

/* eslint-enable jsx-a11y/label-has-associated-control */

export default FormLabel
