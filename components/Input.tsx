import * as React from 'react'

import ControlLabel from './ControlLabel'
import ControlWrapper from './ControlWrapper'
import FormFooter from './FormFooter'

interface InputProps {
  className?: string
  label: string
  explanationMessage?: string
  validationMessage?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, label, explanationMessage, validationMessage, ...rest },
    ref
  ) => {
    return (
      <div className={className}>
        <ControlWrapper>
          <ControlLabel>{label}</ControlLabel>
          <input
            ref={ref}
            id="test"
            className="bg-transparent border-none focus:outline-none h-12 pt-4 pb-0 px-2 w-full text-gray-900 dark:text-gray-100 leading-none"
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

export default Input
