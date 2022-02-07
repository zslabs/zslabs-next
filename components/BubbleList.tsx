import * as React from 'react'

import clsx from 'clsx'
import type { AnimationProps } from 'framer-motion'
import { motion } from 'framer-motion'

import Badge from './Badge'
import LinkUnderline from './LinkUnderline'

import { fadeInUp, viewportInViewOptions } from '~helpers/styles'

interface BubbleListItemProps {
  title: string
  sub?: React.ReactNode
  link?: string
  badge?: string
  badgeVariant?: 'primary' | 'secondary' | 'tertiary'
  onClick?: () => void
}

export const BubbleListItem: React.FC<BubbleListItemProps> = ({
  title,
  children,
  sub,
  link,
  badge,
  badgeVariant,
  onClick,
  ...rest
}) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      variants={fadeInUp}
      viewport={viewportInViewOptions}
      className="relative z-20 grid grid-flow-col auto-cols-auto gap-5 justify-start group"
      {...rest}
    >
      <div
        className={clsx(`
          before:duration-300
          before:absolute
          before:-z-10
          before:-inset-1
          before:opacity-0
          before:bg-gradient-to-br
          before:rounded-full
          before:blur-md
          before:pointer-events-none
          before:from-indigo-700 before:to-blue-500

          group-hover:before:scale-105
          group-hover:before:opacity-75

          w-4 h-4
          relative
          ring-2 ring-slate-900 dark:ring-slate-100
          border-2 border-slate-100 dark:border-slate-800

          rounded-full bg-slate-900 dark:bg-slate-100
          duration-300 ease-bounce group-hover:scale-125
          mt-2.5
        `)}
      />
      <div className="space-y-1">
        <div className="grid items-center grid-flow-col auto-cols-auto gap-4">
          <h3 className="font-bold text-2xl">
            {link ? (
              <LinkUnderline href={link} onClick={onClick}>
                {title}
              </LinkUnderline>
            ) : (
              title
            )}
          </h3>
          {badge && (
            <div className="justify-self-end">
              <Badge variation={badgeVariant}>{badge}</Badge>
            </div>
          )}
        </div>
        {sub && <div className="text-slate-500 dark:text-slate-400">{sub}</div>}
        {children && <div className="text-lg">{children}</div>}
      </div>
    </motion.div>
  )
}

const BubbleList: React.FC = ({ children, ...rest }) => {
  const container: AnimationProps['variants'] = React.useMemo(
    () => ({
      hidden: { opacity: 0 },
      show: { opacity: 1 },
    }),
    []
  )

  return (
    <div className="relative" {...rest}>
      <div className="absolute top-0 left-2 -translate-x-1/2 h-full z-10">
        <div className="h-full bg-slate-900 dark:bg-slate-100 w-1 rounded-full" />
      </div>
      <motion.div
        className="grid grid-cols-1 gap-8 py-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {children}
      </motion.div>
    </div>
  )
}

export default BubbleList
