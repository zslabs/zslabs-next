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
      className="grid grid-flow-col auto-cols-fr gap-2 px-2 mt-1 text-sm"
      {...rest}
    >
      {explanationMessage && (
        <div className="text-slate-500 dark:text-slate-400">
          {explanationMessage}
        </div>
      )}
      {validationMessage && (
        <div className="text-right text-rose-500 dark:text-slate-400">
          {validationMessage}
        </div>
      )}
    </div>
  ) : null
}

export default FormFooter
