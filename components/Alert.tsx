import * as React from 'react'

import clsx from 'clsx'

interface AlertProps {
  variation?: 'primary' | 'danger'
}

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement> & AlertProps
>(({ variation = 'primary', ...rest }, ref) => {
  return (
    <div
      ref={ref}
      className={clsx('Alert my-8 rounded-lg border-l-8 p-6', {
        'border-blue-500 bg-blue-100': variation === 'primary',
        'border-rose-500 bg-rose-100': variation === 'danger',
      })}
      {...rest}
    />
  )
})

export default Alert
