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
        <div className="text-gray-500 dark:text-gray-400">
          {explanationMessage}
        </div>
      )}
      {validationMessage && (
        <div className="text-red-500 dark:text-gray-400 text-right">
          {validationMessage}
        </div>
      )}
    </div>
  ) : null
}

export default FormFooter
