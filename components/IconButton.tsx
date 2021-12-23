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
          'grid place-content-center disabled:opacity-50 disabled:cursor-not-allowed duration-150 hover:scale-110 ease-in-out focus:outline-none rounded-full',
          {
            'bg-slate-200 dark:bg-slate-700': variation === 'default',
            'bg-slate-900 text-slate-100': variation === 'contrast',
            'text-2xl w-8 h-8': size === 'default',
            'text-4xl w-12 h-12': size === 'large',
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
