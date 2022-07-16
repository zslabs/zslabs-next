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
      className="bg-gradient-to-br from-slate-5 to-slate-5 bg-0/6 bg-left-bottom bg-no-repeat transition-background-size duration-300 ease-bounce hocus:bg-100/6"
      {...props}
    />
  )
}

export default LinkUnderline
