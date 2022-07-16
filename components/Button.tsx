import * as React from 'react'

import ctl from '@netlify/classnames-template-literals'
import type * as Polymorphic from '@reach/utils/polymorphic'

interface ButtonPropsPrimitive {
  as?: React.ElementType
  variation?: 'hover-default' | 'primary' | 'secondary' | 'blank' | 'contrast'
  loading?: boolean
  iconOnly?: boolean
  type?: 'submit' | 'button'
}

type ButtonProps = React.ComponentPropsWithoutRef<'button'> &
  ButtonPropsPrimitive

const Button = React.forwardRef(
  (
    { children, variation = 'blank', iconOnly, loading, type, ...rest },
    forwardedRef
  ) => {
    return (
      <button
        ref={forwardedRef}
        // eslint-disable-next-line react/button-has-type
        type={rest.as ? undefined : type}
        className={ctl(`
          inline-block h-12 font-bold duration-150 focus:outline-none

          ${variation === 'hover-default' && `hocus:bg-slate-3`}
          ${
            variation === 'primary' &&
            `bg-gradient-to-br from-primary-9 to-primary-11 text-primary-1 dark:bg-gradient-to-tl dark:text-primary-12`
          }

          ${variation === 'contrast' && 'bg-slate-12 text-slate-1'}

          ${
            iconOnly
              ? 'w-12 rounded-full text-2xl'
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
        <span
          className={ctl(`
            relative z-10 grid h-full grid-flow-col place-items-center gap-4 whitespace-nowrap

            ${iconOnly ? 'auto-cols-auto' : 'auto-cols-min'}
          `)}
        >
          {children}
        </span>
      </button>
    )
  }
) as Polymorphic.ForwardRefComponent<'button', ButtonProps>

Button.displayName = 'Button'

export default Button
