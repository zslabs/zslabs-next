import * as React from 'react'

import type * as Polymorphic from '@reach/utils/polymorphic'

const Section = React.forwardRef(
  ({ as: Component = 'section', ...rest }, ref) => {
    return <Component ref={ref} className="relative py-8 md:py-12" {...rest} />
  }
) as Polymorphic.ForwardRefComponent<'section'>

export default Section
