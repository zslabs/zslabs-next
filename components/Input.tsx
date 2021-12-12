import clsx from 'clsx'
import * as React from 'react'
import { v4 as uuidv4 } from 'uuid'

import FormLabel from './FormLabel'
import ControlWrapper from './ControlWrapper'
import FormFooter from './FormFooter'

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
            <div className="absolute z-10 left-3 top-1/2 -translate-y-1/2">
              {prefixIcon}
            </div>
          )}
          <input
            ref={ref}
            className={clsx(
              'bg-transparent border-none focus:outline-none focus:ring-0 h-10 pr-4 w-full text-slate-900 dark:text-slate-100 leading-none rounded-lg',
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
