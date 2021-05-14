import * as React from 'react'
import clsx from 'clsx'

import type * as Polymorphic from '@reach/utils/polymorphic'

const Section = React.forwardRef(
  ({ as: Component = 'section', className, ...rest }, ref) => {
    return (
      <Component
        ref={ref}
        className={clsx('py-8 md:py-12', className)}
        {...rest}
      />
    )
  }
) as Polymorphic.ForwardRefComponent<'section'>

export default Section
