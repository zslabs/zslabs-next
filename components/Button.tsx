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
        relative
        inline-block
        h-12
        rounded-full
        border-2
        border-slate-100
        text-sm
        font-bold
        uppercase

        tracking-widest
        duration-150

        before:pointer-events-none before:absolute before:inset-0
        before:-z-10 before:rounded-full before:bg-gradient-to-br
        before:opacity-0 before:blur-md before:duration-300 after:pointer-events-none
        after:absolute
        after:-inset-1

        after:-z-10
        after:rounded-full
        after:bg-gradient-to-br
        hover:before:scale-105
        hover:before:opacity-75
        dark:border-slate-800
        `,
        {
          'from-indigo-700 to-blue-500 before:from-indigo-700 before:to-blue-500 after:from-indigo-700 after:to-blue-500':
            variation === 'primary',
          'from-blue-500 to-emerald-500 before:from-blue-500 before:to-emerald-700 after:from-blue-500 after:to-emerald-500':
            variation === 'secondary',
          'from-rose-500 to-indigo-700 before:from-rose-500 before:to-indigo-700 after:from-rose-500 after:to-indigo-700':
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
          `relative z-10 grid
          h-full grid-flow-col place-items-center gap-4
          whitespace-nowrap text-slate-100`,
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
