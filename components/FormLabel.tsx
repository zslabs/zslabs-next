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
      className="mb-1 ml-1 grid cursor-default auto-cols-auto grid-flow-col items-center justify-start gap-2 text-sm font-bold line-clamp-1"
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
