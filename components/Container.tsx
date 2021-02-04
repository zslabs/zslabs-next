import * as React from 'react'
import clsx from 'clsx'

const Container: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...rest
}) => {
  return <div className={clsx('max-w-3xl mx-auto px-4', className)} {...rest} />
}

export default Container
