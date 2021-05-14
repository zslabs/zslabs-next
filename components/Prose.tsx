import * as React from 'react'
import clsx from 'clsx'

import type * as Polymorphic from '@reach/utils/polymorphic'

const Prose = React.forwardRef(
  ({ as: Component = 'div', className, ...rest }, ref) => {
    return (
      <Component ref={ref} className={clsx('prose', className)} {...rest} />
    )
  }
) as Polymorphic.ForwardRefComponent<'div'>

export default Prose
