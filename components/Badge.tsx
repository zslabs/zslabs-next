import * as React from 'react'

import ctl from '@netlify/classnames-template-literals'

interface BadgeProps {
  variation?: 'primary' | 'secondary' | 'tertiary'
}

const Badge: React.FC<React.HTMLAttributes<HTMLDivElement> & BadgeProps> = ({
  variation = 'tertiary',
  ...rest
}) => {
  return (
    <div
      className={ctl(`
        inline-block select-none whitespace-nowrap rounded-full py-1 px-2 text-xs font-bold uppercase tracking-wide

        ${
          variation === 'primary' &&
          'bg-primary-9 text-primary-1 dark:text-primary-12'
        }
        ${
          variation === 'secondary' &&
          'bg-secondary-9 text-secondary-1 dark:text-secondary-12'
        }
        ${
          variation === 'tertiary' &&
          'bg-slate-12 text-slate-1 dark:bg-slate-1 dark:text-slate-12'
        }
      `)}
      {...rest}
    />
  )
}

export default Badge
