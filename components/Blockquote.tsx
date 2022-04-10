import * as React from 'react'

import { ReactComponent as QuoteSvg } from '~icons/quote.svg'

const Blockquote: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...rest
}) => {
  return (
    <blockquote
      className="relative p-6 my-8 bg-white dark:bg-slate-900 rounded-lg border-2 border-slate-300 dark:border-slate-600"
      {...rest}
    >
      {children}
      <div className="absolute top-0 left-0 p-2 bg-white dark:bg-slate-900 rounded-full border-2 border-slate-300 dark:border-slate-600 ring-4 ring-slate-100 dark:ring-slate-800 -translate-x-1/2 -translate-y-1/2">
        <QuoteSvg />
      </div>
    </blockquote>
  )
}

export default Blockquote
