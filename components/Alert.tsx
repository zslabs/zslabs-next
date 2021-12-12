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
      className={clsx('Alert border-l-8 rounded-lg p-6 my-8', {
        'border-blue-500 bg-blue-100': variation === 'primary',
        'border-red-500 bg-red-100': variation === 'danger',
      })}
      {...rest}
    />
  )
})

export default Alert
