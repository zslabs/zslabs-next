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
    <aside
      ref={ref}
      className={clsx('p-6 my-8 rounded-lg border-l-8 Alert', {
        'bg-blue-100 border-blue-500': variation === 'primary',
        'bg-rose-100 border-rose-500': variation === 'danger',
      })}
      {...rest}
    />
  )
})

export default Alert
