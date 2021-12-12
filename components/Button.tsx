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
        before:duration-500
        before:absolute
        before:-z-10
        before:inset-0
        before:opacity-0
        before:bg-gradient-to-tr
        before:rounded-full
        before:blur-md
        before:pointer-events-none
        hover:before:scale-105
        hover:before:opacity-75

        relative inline-block h-12
        border-2 border-slate-100 dark:border-slate-800
        tracking-widest uppercase font-extrabold text-sm
        rounded-full
        duration-200

        after:absolute
        after:-z-10
        after:-inset-1
        after:rounded-full
        after:bg-gradient-to-tr
        after:pointer-events-none
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
          `h-full relative z-10
          grid place-items-center gap-4 grid-flow-col
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
