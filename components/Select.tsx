import * as React from 'react'
import { v4 as uuidv4 } from 'uuid'

import FormLabel from './FormLabel'
import ControlWrapper from './ControlWrapper'
import FormFooter from './FormFooter'

interface SelectProps extends React.ComponentPropsWithoutRef<'select'> {
  label?: string
  explanationMessage?: string
  validationMessage?: string
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, explanationMessage, validationMessage, name, ...rest }, ref) => {
    const id = React.useMemo(() => `${name}-${uuidv4()}`, [name])

    return (
      <div>
        {label && <FormLabel htmlFor={id}>{label}</FormLabel>}
        <ControlWrapper>
          <select
            ref={ref}
            // Dark background is used here for option background
            className="bg-transparent dark:bg-gray-800 border-none focus:outline-none h-10 w-full pl-4 text-gray-900 focus:text-gray-800 dark:text-gray-100 rounded-lg"
            id={id}
            name={name}
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
