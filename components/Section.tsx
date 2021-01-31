import * as React from 'react'
import clsx from 'clsx'

interface SectionProps {
  as: React.ElementType
  className?: string
}

const Section: React.FC<SectionProps> = ({
  as: Component = 'section',
  className,
  ...rest
}) => {
  return <Component className={clsx('py-8 md:py-12', className)} {...rest} />
}

export default Section
