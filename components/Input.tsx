import * as React from 'react'

import ctl from '@netlify/classnames-template-literals'
import { v4 as uuidv4 } from 'uuid'

import ControlWrapper from './ControlWrapper'
import FormFooter from './FormFooter'
import FormLabel from './FormLabel'

interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  label?: string
  explanationMessage?: string
  validationMessage?: string
  prefixIcon?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      explanationMessage,
      validationMessage,
      name,
      prefixIcon,
      type = 'string',
      ...rest
    },
    ref
  ) => {
    const id = React.useMemo(() => `${name}-${uuidv4()}`, [name])

    return (
      <div>
        {label && <FormLabel htmlFor={id}>{label}</FormLabel>}
        <ControlWrapper>
          {prefixIcon && (
            <div className="absolute top-1/2 left-3 z-10 -translate-y-1/2">
              {prefixIcon}
            </div>
          )}
          <input
            ref={ref}
            className={ctl(`
              h-10 w-full rounded-lg border-none bg-transparent pr-4 leading-none text-slate-900 focus:outline-none focus:ring-0 dark:text-slate-100

              ${prefixIcon ? 'pl-10' : 'pl-4'}
            `)}
            type={type}
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

export default Input
