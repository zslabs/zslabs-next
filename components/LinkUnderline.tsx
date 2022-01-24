import * as React from 'react'

import type { TextLinkProps } from './TextLink'
import TextLink from './TextLink'

interface LinkUnderlineProps extends TextLinkProps {
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

const LinkUnderline: React.FC<
  LinkUnderlineProps & React.HTMLAttributes<HTMLAnchorElement>
> = (props) => {
  return (
    <TextLink
      className="bg-gradient-to-br from-slate-4 to-slate-4 duration-150 ease-bounce transition-background-size bg-left-bottom bg-no-repeat bg-0/6 hover:bg-100/6"
      {...props}
    />
  )
}

export default LinkUnderline
