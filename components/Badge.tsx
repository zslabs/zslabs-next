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
        inline-block select-none whitespace-nowrap rounded-full bg-gradient-to-br py-1 px-2 text-xs font-bold uppercase tracking-wide text-slate-100 ring-2

        ${
          variation === 'primary' &&
          'from-indigo-700 to-blue-500 ring-indigo-700/20'
        }

        ${
          variation === 'secondary' &&
          'from-blue-500 to-emerald-500 ring-blue-500/20'
        }
        ${
          variation === 'tertiary' &&
          'from-slate-800 to-slate-600 ring-slate-800/20'
        }
      `)}
      {...rest}
    />
  )
}

export default Badge
