import * as React from 'react'
import clsx from 'clsx'
import { forwardRefWithAs } from '@reach/utils'

interface ProseProps {
  as?: React.ElementType
}

const Prose = forwardRefWithAs<ProseProps, 'div'>(
  ({ as: Component = 'div', className, ...rest }, ref) => {
    return (
      <Component ref={ref} className={clsx('prose', className)} {...rest} />
    )
  }
)

export default Prose
