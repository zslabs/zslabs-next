import * as React from 'react'

import clsx from 'clsx'
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
            className={clsx(
              'pr-4 w-full h-10 leading-none text-slate-900 dark:text-slate-100 bg-transparent rounded-lg border-none focus:outline-none focus:ring-0',
              {
                'pl-10': prefixIcon,
                'pl-4': !prefixIcon,
              }
            )}
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
