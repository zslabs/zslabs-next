import * as React from 'react'

import ctl from '@netlify/classnames-template-literals'

interface ButtonProps {
  as?: React.ElementType
  variation: 'contrast' | 'default'
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
          variation === 'contrast' && 'bg-slate-12 text-slate-1 shadow-slate-12'
        }
        ${iconOnly ? 'w-12 text-3xl' : 'px-6 text-lg font-bold'}
        ${!iconOnly && variation === 'contrast' && 'shadow-lg shadow-slate-8'}
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
