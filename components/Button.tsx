import * as React from 'react'

import ctl from '@netlify/classnames-template-literals'
import type * as Polymorphic from '@reach/utils/polymorphic'

import diagonalLines from '~media/diagonal-lines.svg'

interface ButtonPropsPrimitive {
  as?: React.ElementType
  variation?: 'hover-default' | 'primary' | 'secondary' | 'blank' | 'contrast'
  loading?: boolean
  iconOnly?: boolean
  type?: 'submit' | 'button'
}

type ButtonProps = React.ComponentPropsWithoutRef<'button'> &
  ButtonPropsPrimitive

const diagonalLinesStyles = {
  backgroundImage: `url(${diagonalLines})`,
}

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
          <span className="absolute inset-0" style={diagonalLinesStyles} />
        )}
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
