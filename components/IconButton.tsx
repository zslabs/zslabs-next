import * as React from 'react'

import ctl from '@netlify/classnames-template-literals'
import type * as Polymorphic from '@reach/utils/polymorphic'

interface IconButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  active?: boolean
  variation?: 'blank' | 'default' | 'contrast'
  size?: 'default' | 'large'
}

const IconButton = React.forwardRef(
  (
    {
      variation = 'blank',
      children,
      size = 'default',
      as: Component = 'button',
      ...rest
    },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={ctl(`
          grid place-content-center rounded-full duration-150 ease-bounce hover:scale-110 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50

          ${variation === 'default' && 'bg-slate-200 dark:bg-slate-700'}
          ${variation === 'contrast' && 'bg-slate-900 text-slate-100'}
          ${size === 'default' && 'h-8 w-8 text-2xl'}
          ${size === 'large' && 'h-12 w-12 text-4xl'}
        `)}
        {...(Component === 'button' && { type: rest.type })}
        {...rest}
      >
        {children}
      </Component>
    )
  }
) as Polymorphic.ForwardRefComponent<'button', IconButtonProps>

export default IconButton
