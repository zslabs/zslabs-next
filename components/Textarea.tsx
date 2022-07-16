import * as React from 'react'

import { v4 as uuidv4 } from 'uuid'

import ControlWrapper from './ControlWrapper'
import FormFooter from './FormFooter'
import FormLabel from './FormLabel'

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
            className="min-h-32 w-full rounded border-none bg-transparent p-4 align-top text-slate-12 focus:outline-none focus:ring-0"
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
