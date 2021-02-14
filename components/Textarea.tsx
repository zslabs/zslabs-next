import * as React from 'react'

import ControlLabel from './ControlLabel'
import ControlWrapper from './ControlWrapper'
import FormFooter from './FormFooter'

interface TextareaProps {
  className?: string
  label: string
  explanationMessage?: string
  validationMessage?: string
  name: string
  required: boolean
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      label,
      explanationMessage,
      validationMessage,
      required,
      ...rest
    },
    ref
  ) => {
    return (
      <div className={className}>
        <ControlWrapper required={required}>
          <ControlLabel>{label}</ControlLabel>
          <textarea
            ref={ref}
            className="bg-transparent border-none focus:outline-none focus:ring-0 w-full pt-5 px-2 text-gray-900 dark:text-gray-100 align-top"
            {...rest}
          />
        </ControlWrapper>
        <FormFooter
          explanationMessage={explanationMessage}
          validationMessage={validationMessage}
        />
      </div>
    )
  }
)

export default Textarea
