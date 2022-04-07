import * as React from 'react'

import { ReactComponent as QuoteSvg } from '~icons/quote.svg'

const Blockquote: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...rest
}) => {
  return (
    <blockquote
      className="relative my-8 p-6 border-2 border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900"
      {...rest}
    >
      {children}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 p-2 rounded-full border-2 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 ring-4 ring-slate-100 dark:ring-slate-800">
        <QuoteSvg />
      </div>
    </blockquote>
  )
}

export default Blockquote
