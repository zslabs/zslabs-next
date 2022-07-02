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
      className="bg-gradient-to-br from-slate-200 to-slate-200 bg-0/6 bg-left-bottom bg-no-repeat transition-background-size duration-150 ease-bounce hover:bg-100/6 dark:from-slate-600 dark:to-slate-600"
      {...props}
    />
  )
}

export default LinkUnderline
