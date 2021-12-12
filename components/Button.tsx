import * as React from 'react'
import clsx from 'clsx'

import diagonalLines from '~media/diagonal-lines.svg'

interface ButtonProps {
  as?: React.ElementType
  variation?: 'primary' | 'secondary' | 'tertiary' | 'quaternary'
  iconOnly?: boolean
  loading?: boolean
}

const Button: React.FC<ButtonProps & React.HTMLProps<HTMLButtonElement>> = ({
  as: Component = 'button',
  children,
  className,
  variation,
  iconOnly,
  loading,
  ...rest
}) => {
  return (
    <Component
      className={clsx(
        'relative inline-block h-12 bg-gradient-to-br rounded-full text-slate-100 tracking-widest uppercase font-extrabold text-sm shadow-lg duration-300 ease-bounce hover:scale-105 ring-4 ring-opacity-10 focus:outline-none focus:ring-opacity-20 active:scale-100',
        className,
        {
          'from-indigo-700 to-blue-500 ring-indigo-700':
            variation === 'primary',
          'from-emerald-400 to-cyan-500 ring-emerald-400':
            variation === 'secondary',
          'from-slate-800 to-slate-600 ring-slate-800':
            variation === 'tertiary',
          'from-orange-400 to-pink-600 ring-orange-400':
            variation === 'quaternary',
          'px-6': !iconOnly,
          'w-12': iconOnly,
          'pointer-events-none opacity-50': loading,
        }
      )}
      {...rest}
    >
      <span
        className={clsx(
          'h-full relative z-10 grid place-items-center gap-4 grid-flow-col whitespace-nowrap',
          {
            'auto-cols-min': !iconOnly,
            'auto-cols-auto': iconOnly,
          }
        )}
      >
        {children}
      </span>
      <span
        className="absolute z-0 inset-1"
        style={{ backgroundImage: `url(${diagonalLines})` }}
      />
    </Component>
  )
}

export default Button
