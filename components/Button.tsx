import * as React from 'react'

import clsx from 'clsx'

interface ButtonProps {
  as?: React.ElementType
  variation: 'primary' | 'secondary' | 'tertiary'
  iconOnly?: boolean
  loading?: boolean
}

const Button: React.FC<ButtonProps & React.HTMLProps<HTMLButtonElement>> = ({
  as: Component = 'button',
  children,
  variation,
  iconOnly,
  loading,
  ...rest
}) => {
  return (
    <Component
      className={clsx(
        `
        before:duration-300
        before:absolute
        before:-z-10
        before:inset-0
        before:opacity-0
        before:bg-gradient-to-br
        before:rounded-full
        before:blur-md
        before:pointer-events-none

        hover:before:scale-105
        hover:before:opacity-75

        relative inline-block h-12
        rounded-full
        duration-150
        uppercase tracking-widest font-bold text-sm
        shadow-lg
        bg-gradient-to-br
        border-2 border-slate-1

        after:absolute
        after:-z-10
        after:-inset-1
        after:rounded-full
        after:bg-gradient-to-br
        after:pointer-events-none
        `,
        {
          'from-accent-9 to-primary-9 before:from-accent-9 before:to-primary-9 after:from-accent-9 after:to-primary-9':
            variation === 'primary',
          'from-primary-9 to-success-9 before:from-primary-9 before:to-success-9 after:from-primary-9 after:to-success-9':
            variation === 'secondary',
          'from-danger-9 to-accent-9 before:from-danger-9 before:to-accent-9 after:from-danger-9 after:to-accent-9':
            variation === 'tertiary',
          'px-6': !iconOnly,
          'w-12': iconOnly,
          'pointer-events-none opacity-50': loading,
        }
      )}
      {...rest}
    >
      <span
        className={clsx(
          `h-full relative z-10
          grid place-items-center gap-4 grid-flow-col
          whitespace-nowrap text-slate-1 dark:text-slate-12`,
          {
            'auto-cols-min': !iconOnly,
            'auto-cols-auto': iconOnly,
          }
        )}
      >
        {children}
      </span>
    </Component>
  )
}

export default Button
