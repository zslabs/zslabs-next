import * as React from 'react'
import clsx from 'clsx'

interface BadgeProps {
  variation?: 'primary' | 'secondary' | 'tertiary'
}

const Badge: React.FC<React.HTMLAttributes<HTMLDivElement> & BadgeProps> = ({
  children,
  variation = 'tertiary',
  className,
  ...rest
}) => {
  return (
    <div
      className={clsx(
        'inline-block select-none rounded-full text-xs uppercase text-gray-100 font-extrabold whitespace-nowrap tracking-wide ring-2 ring-opacity-10 bg-gradient-to-tr py-1 px-2',
        className,
        {
          'from-indigo-700 to-blue-500 ring-indigo-700':
            variation === 'primary',
          'from-green-400 to-cyan-500 ring-green-400':
            variation === 'secondary',
          'from-gray-800 to-gray-600 ring-gray-800': variation === 'tertiary',
        }
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

export default Badge
