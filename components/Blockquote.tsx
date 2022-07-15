import * as React from 'react'

import { ReactComponent as QuoteSvg } from '~icons/quote.svg'

const Blockquote: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...rest
}) => {
  return (
    <blockquote
      className="relative my-8 rounded-lg border-2 border-slate-7 bg-slate-1 p-6"
      {...rest}
    >
      {children}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-slate-7 bg-slate-1 p-2 ring-4 ring-slate-1">
        <QuoteSvg />
      </div>
    </blockquote>
  )
}

export default Blockquote
