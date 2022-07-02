import * as React from 'react'

import { ReactComponent as QuoteSvg } from '~icons/quote.svg'

const Blockquote: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...rest
}) => {
  return (
    <blockquote
      className="relative my-8 rounded-lg border-2 border-slate-300 bg-white p-6 dark:border-slate-600 dark:bg-slate-900"
      {...rest}
    >
      {children}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-slate-300 bg-white p-2 ring-4 ring-slate-100 dark:border-slate-600 dark:bg-slate-900 dark:ring-slate-800">
        <QuoteSvg />
      </div>
    </blockquote>
  )
}

export default Blockquote
