import * as React from 'react'

import ctl from '@netlify/classnames-template-literals'
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
  badgeVariant?: 'primary' | 'contrast'
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
      className="group relative z-20 grid auto-cols-auto grid-flow-col justify-start gap-5"
      {...rest}
    >
      <div
        className={ctl(`
          relative
          mt-2.5
          h-4
          w-4
          rounded-full border-2

          border-slate-1
          bg-slate-12

          ring-2 ring-slate-12
          duration-300
          ease-bounce before:pointer-events-none
        `)}
      />
      <div className="space-y-1">
        <div className="grid auto-cols-auto grid-flow-col items-center gap-4">
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
        {sub && <div className="text-slate-11">{sub}</div>}
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
        <div className="h-full w-1 rounded-full bg-slate-12" />
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
