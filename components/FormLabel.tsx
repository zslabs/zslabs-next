/* eslint-disable jsx-a11y/label-has-associated-control */
import * as React from 'react'

import { ReactComponent as AsteriskSvg } from '~icons/asterisk.svg'
import { ReactComponent as ExclamationCircleSvg } from '~icons/exclamation-circle.svg'

interface FormLabelProps extends React.ComponentPropsWithoutRef<'label'> {
  required?: boolean
  hasError?: boolean
}

const FormLabel: React.FC<FormLabelProps> = ({
  children,
  required,
  hasError,
  ...rest
}) => {
  return (
    <label
      className="line-clamp-1 font-bold mb-1 items-center gap-2 grid grid-flow-col justify-start auto-cols-auto cursor-default"
      {...rest}
    >
      {children}
      {required && !hasError && (
        <AsteriskSvg className="text-rose-500 dark:text-slate-400" />
      )}
      {hasError && (
        <ExclamationCircleSvg className="text-rose-500 dark:text-slate-400" />
      )}
    </label>
  )
}

/* eslint-enable jsx-a11y/label-has-associated-control */

export default FormLabel
