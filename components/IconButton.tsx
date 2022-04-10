import * as React from 'react'

import type * as Polymorphic from '@reach/utils/polymorphic'
import clsx from 'clsx'

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
        className={clsx(
          'grid place-content-center rounded-full focus:outline-none disabled:opacity-50 duration-150 ease-bounce hover:scale-110 disabled:cursor-not-allowed',
          {
            'bg-slate-200 dark:bg-slate-700': variation === 'default',
            'text-slate-100 bg-slate-900': variation === 'contrast',
            'w-8 h-8 text-2xl': size === 'default',
            'w-12 h-12 text-4xl': size === 'large',
          }
        )}
        {...(Component === 'button' && { type: rest.type })}
        {...rest}
      >
        {children}
      </Component>
    )
  }
) as Polymorphic.ForwardRefComponent<'button', IconButtonProps>

export default IconButton
