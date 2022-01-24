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
        'inline-block select-none rounded-full text-xs uppercase  font-bold whitespace-nowrap tracking-wide bg-gradient-to-br py-1 px-2 shadow',
        {
          'from-accent-9 to-primary-9 text-slate-1 dark:text-slate-12':
            variation === 'primary',
          'from-slate-12 to-slate-11 text-slate-1': variation === 'secondary',
        }
      )}
      {...rest}
    />
  )
}

export default Badge
