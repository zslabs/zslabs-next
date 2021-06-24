import * as React from 'react'
import clsx from 'clsx'

import { ReactComponent as QuoteSvg } from '~icons/quote.svg'

const Blockquote: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <blockquote
      className={clsx(
        'relative my-8 p-6 border-2 border-gray-300 dark:border-gray-600 rounded-lg',
        className
      )}
      {...rest}
    >
      {children}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 p-2 rounded-full border-2 border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 ring-4 ring-gray-100 dark:ring-gray-800">
        <QuoteSvg />
      </div>
    </blockquote>
  )
}

export default Blockquote
