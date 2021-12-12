import * as React from 'react'

import TextLink, { TextLinkProps } from './TextLink'

interface LinkUnderlineProps extends TextLinkProps {
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

const LinkUnderline: React.FC<
  LinkUnderlineProps & React.HTMLAttributes<HTMLAnchorElement>
> = (props) => {
  return (
    <TextLink
      className="bg-gradient-to-r from-slate-200 to-slate-200 dark:from-slate-600 dark:to-slate-600 duration-150 ease-linear transition-background-size bg-left-bottom bg-no-repeat bg-0/6 hover:bg-100/6"
      {...props}
    />
  )
}

export default LinkUnderline
