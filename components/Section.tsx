import * as React from 'react'
import type * as Polymorphic from '@reach/utils/polymorphic'

const Section = React.forwardRef(
  ({ as: Component = 'section', ...rest }, ref) => {
    return <Component ref={ref} className="py-8 md:py-12 relative" {...rest} />
  }
) as Polymorphic.ForwardRefComponent<'section'>

export default Section
