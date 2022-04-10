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
      className="bg-left-bottom bg-no-repeat bg-0/6 hover:bg-100/6 bg-gradient-to-br from-slate-200 dark:from-slate-600 to-slate-200 dark:to-slate-600 transition-background-size duration-150 ease-bounce"
      {...props}
    />
  )
}

export default LinkUnderline
