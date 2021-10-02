import * as React from 'react'
import { v4 as uuidv4 } from 'uuid'

import FormLabel from './FormLabel'
import ControlWrapper from './ControlWrapper'
import FormFooter from './FormFooter'

interface TextareaProps extends React.ComponentPropsWithoutRef<'textarea'> {
  label?: string
  explanationMessage?: string
  validationMessage?: string
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, explanationMessage, validationMessage, name, ...rest }, ref) => {
    const id = React.useMemo(() => `${name}-${uuidv4()}`, [name])

    return (
      <div>
        <FormLabel htmlFor={id}>{label}</FormLabel>
        <ControlWrapper>
          <textarea
            ref={ref}
            className="bg-transparent border-none focus:outline-none focus:ring-0 w-full p-4 text-gray-900 dark:text-gray-100 align-top min-h-32 rounded"
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

export default Textarea
