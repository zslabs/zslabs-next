import * as React from 'react'

import ControlLabel from './ControlLabel'
import ControlWrapper from './ControlWrapper'
import FormFooter from './FormFooter'

interface SelectProps {
  className?: string
  label: string
  explanationMessage?: string
  validationMessage?: string
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    { className, label, explanationMessage, validationMessage, ...rest },
    ref
  ) => {
    return (
      <div className={className}>
        <ControlWrapper>
          <ControlLabel>{label}</ControlLabel>
          <select
            ref={ref}
            className="bg-transparent border-none focus:outline-none h-12 w-full pt-4 pb-0 px-2 focus:text-gray-900 rounded-lg"
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

export default Select
