import * as React from 'react'
import clsx from 'clsx'

import TextLink, { TextLinkProps } from './TextLink'

interface LinkUnderlineProps extends TextLinkProps {
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

const LinkUnderline: React.FC<
  LinkUnderlineProps & React.HTMLAttributes<HTMLAnchorElement>
> = ({ className, ...rest }) => {
  return (
    <TextLink
      className={clsx(
        'bg-gradient-to-r from-gray-200 to-gray-200 dark:from-gray-600 dark:to-gray-600 duration-150 ease-linear transition-background-size bg-left-bottom bg-no-repeat bg-0/8 hover:bg-100/8',
        className
      )}
      {...rest}
    />
  )
}

export default LinkUnderline
