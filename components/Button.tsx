import * as React from 'react'

import ctl from '@netlify/classnames-template-literals'

interface ButtonProps {
  as?: React.ElementType
  variation: 'primary' | 'secondary' | 'contrast' | 'default'
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
      className={ctl(`
        inline-block h-12 rounded-full font-bold duration-150

        ${variation === 'default' && `hocus:bg-slate-3`}
        ${
          variation === 'primary' &&
          'bg-gradient-to-br from-accent-9 to-primary-9 text-accent-1 shadow-accent-9 dark:text-accent-12'
        }
        ${
          variation === 'secondary' &&
          'bg-gradient-to-br from-primary-9 to-secondary-9 text-primary-1 shadow-primary-9 dark:text-primary-12'
        }
        ${
          variation === 'contrast' &&
          'bg-slate-12 text-slate-1 shadow-slate-12 dark:text-slate-12'
        }
        ${iconOnly ? 'w-12' : 'px-6 shadow-sm'}
        ${loading && 'pointer-events-none opacity-50'}
      `)}
      {...rest}
    >
      <span
        className={ctl(`
          relative z-10 grid h-full
          grid-flow-col place-items-center gap-4 whitespace-nowrap

          ${iconOnly ? 'auto-cols-auto' : 'auto-cols-min'}
        `)}
      >
        {children}
      </span>
    </Component>
  )
}

export default Button
