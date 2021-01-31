import * as React from 'react'
import clsx from 'clsx'

interface ProseProps {
  as: React.ElementType
  className?: string
}

const Prose: React.FC<ProseProps> = ({
  as: Component = 'div',
  className,
  ...rest
}) => {
  return <Component className={clsx('prose', className)} {...rest} />
}

export default Prose
