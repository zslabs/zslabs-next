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
        inline-block
        before:absolute
        relative
        after:absolute
        before:inset-0
        after:-inset-1
        before:-z-10
        after:-z-10
        h-12

        text-sm
        font-bold

        tracking-widest uppercase before:bg-gradient-to-br
        after:bg-gradient-to-br before:rounded-full rounded-full
        after:rounded-full border-2 border-slate-100 dark:border-slate-800
        before:opacity-0
        hover:before:opacity-75

        before:blur-md
        before:duration-300
        duration-150
        hover:before:scale-105
        before:pointer-events-none
        after:pointer-events-none
        `,
        {
          'from-indigo-700 before:from-indigo-700 after:from-indigo-700 to-blue-500 before:to-blue-500 after:to-blue-500':
            variation === 'primary',
          'from-blue-500 before:from-blue-500 after:from-blue-500 to-emerald-500 before:to-emerald-700 after:to-emerald-500':
            variation === 'secondary',
          'from-rose-500 before:from-rose-500 after:from-rose-500 to-indigo-700 before:to-indigo-700 after:to-indigo-700':
            variation === 'tertiary',
          'px-6': !iconOnly,
          'w-12': iconOnly,
          'opacity-50 pointer-events-none': loading,
        }
      )}
      {...rest}
    >
      <span
        className={clsx(
          `grid relative z-10
          grid-flow-col gap-4 place-items-center h-full
          text-slate-100 whitespace-nowrap`,
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
