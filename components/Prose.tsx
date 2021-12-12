import * as React from 'react'
import type * as Polymorphic from '@reach/utils/polymorphic'

const Prose = React.forwardRef(({ as: Component = 'div', ...rest }, ref) => {
  return <Component ref={ref} className="prose" {...rest} />
}) as Polymorphic.ForwardRefComponent<'div'>

export default Prose
