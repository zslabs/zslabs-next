import * as React from 'react'

interface FormFooterProps {
  explanationMessage?: string
  validationMessage?: string
}

const FormFooter: React.FC<
  React.HTMLProps<HTMLDivElement> & FormFooterProps
> = ({ explanationMessage, validationMessage, ...rest }) => {
  return explanationMessage || validationMessage ? (
    <div
      className="text-sm grid auto-cols-fr grid-flow-col gap-2 mt-1 px-2"
      {...rest}
    >
      {explanationMessage && (
        <div className="text-slate-11">{explanationMessage}</div>
      )}
      {validationMessage && (
        <div className="text-danger-11 text-right">{validationMessage}</div>
      )}
    </div>
  ) : null
}

export default FormFooter
