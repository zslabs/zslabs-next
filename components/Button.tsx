import * as React from 'react'
import clsx from 'clsx'

import diagonalLines from '~media/diagonal-lines.svg'

interface ButtonProps {
  /** Allowing us to specify the element provides some more flexibility when used as a normal link */
  as?: React.ElementType
  className?: string
  variation?: 'primary' | 'secondary' | 'tertiary' | 'quaternary'
  iconOnly?: boolean
  loading?: boolean
}

const Button: React.FC<ButtonProps> = ({
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
        'relative inline-block h-12 bg-gradient-to-br rounded-full text-gray-100 tracking-widest uppercase font-extrabold text-sm shadow-lg duration-300 ease-bounce transform hover:scale-105 ring-4 ring-opacity-10 focus:outline-none focus:ring-opacity-20',
        className,
        {
          'from-indigo-700 to-blue-500 ring-indigo-700':
            variation === 'primary',
          'from-green-400 to-cyan-500 ring-green-400':
            variation === 'secondary',
          'from-gray-800 to-gray-600 ring-gray-800': variation === 'tertiary',
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
