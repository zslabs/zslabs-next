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
          'grid place-content-center rounded-full duration-150 ease-bounce hover:scale-110 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
          {
            'bg-slate-200 dark:bg-slate-700': variation === 'default',
            'bg-slate-900 text-slate-100': variation === 'contrast',
            'h-8 w-8 text-2xl': size === 'default',
            'h-12 w-12 text-4xl': size === 'large',
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
