import * as React from 'react'
import clsx from 'clsx'

interface ContainerProps {
  className?: string
}

const Container: React.FC<ContainerProps> = ({ className, ...rest }) => {
  return <div className={clsx('max-w-3xl mx-auto px-4', className)} {...rest} />
}

export default Container
