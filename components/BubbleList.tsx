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
      className="group grid relative z-20 grid-flow-col auto-cols-auto gap-5 justify-start"
      {...rest}
    >
      <div
        className={clsx(`
          before:absolute
          relative
          before:-inset-1
          before:-z-10
          mt-2.5
          w-4
          h-4
          bg-slate-900
          dark:bg-slate-100
          before:bg-gradient-to-br before:from-indigo-700

          before:to-blue-500
          before:rounded-full

          rounded-full border-2
          border-slate-100
          dark:border-slate-800 ring-2 ring-slate-900
          dark:ring-slate-100 before:opacity-0 group-hover:before:opacity-75

          before:blur-md before:duration-300 duration-300
          ease-bounce group-hover:before:scale-105 group-hover:scale-125
          before:pointer-events-none
        `)}
      />
      <div className="space-y-1">
        <div className="grid grid-flow-col auto-cols-auto gap-4 items-center">
          <h3 className="text-2xl font-bold">
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
      <div className="absolute top-0 left-2 z-10 h-full -translate-x-1/2">
        <div className="w-1 h-full bg-slate-900 dark:bg-slate-100 rounded-full" />
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
