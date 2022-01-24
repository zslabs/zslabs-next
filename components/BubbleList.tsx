import clsx from 'clsx'
import { motion } from 'framer-motion'

import Badge from './Badge'
import LinkUnderline from './LinkUnderline'

import { fadeInUp } from '~helpers/styles'

interface BubbleListItemProps {
  title: string
  sub?: React.ReactNode
  link?: string
  badge?: string
  badgeVariant?: 'primary' | 'secondary'
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
      viewport={{ once: true, amount: 0.5 }}
      className="relative z-20 grid grid-flow-col auto-cols-auto gap-5 justify-start group"
      {...rest}
    >
      <div
        className={clsx(`
          w-4 h-4
          relative
          ring-2 ring-slate-12
          border-2 border-slate-1

          rounded-full bg-slate-12
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
        {sub && <div className="text-slate-11">{sub}</div>}
        {children && <div className="text-lg">{children}</div>}
      </div>
    </motion.div>
  )
}

const BubbleList: React.FC = ({ children, ...rest }) => {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  }

  return (
    <div className="relative" {...rest}>
      <div className="absolute top-0 left-2 -translate-x-1/2 h-full z-10">
        <div className="h-full bg-slate-12 w-1 rounded-full" />
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
