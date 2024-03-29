import * as React from 'react'

import ctl from '@netlify/classnames-template-literals'

interface ButtonPropsPrimitive<T extends React.ElementType> {
  as?: T
  variation?: 'hover-default' | 'primary' | 'secondary' | 'blank' | 'contrast'
  loading?: boolean
  iconOnly?: boolean
  type?: 'submit' | 'button' | 'reset'
  children?: React.ReactNode
}

function Button<T extends React.ElementType = 'button'>({
  as,
  children,
  variation = 'blank',
  iconOnly,
  loading,
  ...rest
}: ButtonPropsPrimitive<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof ButtonPropsPrimitive<T>>) {
  const Component = as || 'button'

  return (
    <Component
      type={Component === 'button' ? 'button' : undefined}
      className={ctl(`
          relative inline-block h-12 overflow-hidden font-bold duration-150 focus:outline-none

          ${variation === 'hover-default' && `hocus:bg-slate-3`}
          ${
            variation === 'primary' &&
            `bg-gradient-to-br from-accent-9 to-primary-9 text-primary-1 dark:bg-gradient-to-tl dark:text-primary-12`
          }

          ${
            variation === 'secondary' &&
            `bg-gradient-to-br from-primary-9 to-secondary-9 text-secondary-1 dark:bg-gradient-to-tl dark:text-secondary-12`
          }

          ${variation === 'contrast' && 'bg-slate-12 text-slate-1'}

          ${
            iconOnly
              ? 'w-12 rounded-full text-2xl ease-bounce hocus:scale-105'
              : 'rounded-full px-6 text-sm uppercase tracking-widest'
          }
          ${
            !['blank', 'hover-default'].includes(variation) &&
            'shadow-lg hocus:shadow-xl hocus:brightness-105'
          }
          ${loading && `pointer-events-none opacity-50`}
        `)}
      {...rest}
    >
      {!['blank', 'hover-default'].includes(variation) && (
        <span
          className={ctl(
            `absolute inset-0 dots-bg-invert ${
              variation === 'contrast' && 'dark:dots-bg'
            }`
          )}
        />
      )}
      <span
        className={ctl(`
            relative z-10 grid h-full grid-flow-col place-items-center gap-4 whitespace-nowrap

            ${iconOnly ? 'auto-cols-auto' : 'auto-cols-min'}
          `)}
      >
        {children}
      </span>
    </Component>
  )
}

export default Button
