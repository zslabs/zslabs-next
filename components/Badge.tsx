import * as React from 'react'

import clsx from 'clsx'

interface BadgeProps {
  variation?: 'primary' | 'secondary' | 'tertiary'
}

const Badge: React.FC<React.HTMLAttributes<HTMLDivElement> & BadgeProps> = ({
  variation = 'tertiary',
  ...rest
}) => {
  return (
    <div
      className={clsx(
        'inline-block py-1 px-2 text-xs font-bold tracking-wide text-slate-100 uppercase whitespace-nowrap bg-gradient-to-br rounded-full ring-2 select-none',
        {
          'from-indigo-700 to-blue-500 ring-indigo-700/20':
            variation === 'primary',
          'from-blue-500 to-emerald-500 ring-blue-500/20':
            variation === 'secondary',
          'from-slate-800 to-slate-600 ring-slate-800/20':
            variation === 'tertiary',
        }
      )}
      {...rest}
    />
  )
}

export default Badge
