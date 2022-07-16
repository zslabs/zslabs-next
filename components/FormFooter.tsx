import * as React from 'react'

import ctl from '@netlify/classnames-template-literals'

interface FormFooterPropsPrimitive {
  explanationMessage?: string
  validationMessage?: string
}

type FormFooterProps = React.HTMLProps<HTMLDivElement> &
  FormFooterPropsPrimitive

const FormFooter: React.FC<FormFooterProps> = ({
  explanationMessage,
  validationMessage,
  ...rest
}) => {
  return explanationMessage || validationMessage ? (
    <div
      className={ctl(`mt-1 grid auto-cols-fr grid-flow-col gap-2 px-2 text-sm`)}
      {...rest}
    >
      {explanationMessage && (
        <div className={ctl(`text-slate-11`)}>{explanationMessage}</div>
      )}
      {validationMessage && (
        <div className={ctl(`text-right text-danger-11`)}>
          {validationMessage}
        </div>
      )}
    </div>
  ) : null
}

export default FormFooter
