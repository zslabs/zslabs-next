/* eslint-disable jsx-a11y/label-has-associated-control */
import * as React from 'react'

import { ReactComponent as AsteriskSvg } from '~icons/asterisk.svg'
import { ReactComponent as ExclamationTriangleSvg } from '~icons/exclamation-triangle.svg'

interface FormLabelProps {
  required: boolean
  hasError: boolean
}

const FormLabel: React.FC<
  React.ReactHTMLElement<HTMLLabelElement> & FormLabelProps
> = ({ children, required, hasError, ...rest }) => {
  return (
    <label
      className="font-bold mb-2 items-center gap-2 grid grid-flow-col justify-start auto-cols-auto cursor-default"
      {...rest}
    >
      {children}
      {required && !hasError && (
        <AsteriskSvg className="text-red-500 dark:text-gray-400" />
      )}
      {hasError && (
        <ExclamationTriangleSvg className="text-red-500 dark:text-gray-400" />
      )}
    </label>
  )
}

/* eslint-enable jsx-a11y/label-has-associated-control */

export default FormLabel
