import * as React from 'react'

import ctl from '@netlify/classnames-template-literals'

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
      className={ctl(`
        Alert my-8 rounded-lg border-l-8 p-6

        ${variation === 'primary' && 'border-blue-500 bg-blue-100'}
        ${variation === 'danger' && 'border-rose-500 bg-rose-100'}
      `)}
      {...rest}
    />
  )
})

export default Alert
