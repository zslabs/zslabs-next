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
        'inline-block select-none rounded-full text-xs uppercase text-slate-100 font-extrabold whitespace-nowrap tracking-wide ring-2 ring-opacity-10 bg-gradient-to-tr py-1 px-2',
        {
          'from-indigo-700 to-blue-500 ring-indigo-700':
            variation === 'primary',
          'from-emerald-400 to-cyan-500 ring-emerald-400':
            variation === 'secondary',
          'from-slate-800 to-slate-600 ring-slate-800':
            variation === 'tertiary',
        }
      )}
      {...rest}
    />
  )
}

export default Badge
