import clsx from 'clsx'
import { motion } from 'framer-motion'

import Badge from './Badge'
import LinkUnderline from './LinkUnderline'

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
  const item = {
    hidden: { opacity: 0, y: '1rem' },
    show: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      variants={item}
      className="relative z-20 grid grid-flow-col auto-cols-auto gap-5 justify-start group"
      {...rest}
    >
      <div className="w-4 h-4 ring-2 ring-gray-900 dark:ring-gray-100 border-2 border-gray-100 dark:border-gray-800 rounded-full bg-gray-900 dark:bg-gray-100 duration-300 ease-bounce group-hover:scale-125 mt-2.5" />
      <div className="space-y-1">
        <div className="grid items-center grid-flow-col auto-cols-auto gap-4">
          <h3 className="font-extrabold text-2xl">
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
        {sub && <div className="text-gray-500 dark:text-gray-400">{sub}</div>}
        {children && <div className="md:text-lg">{children}</div>}
      </div>
    </motion.div>
  )
}

const BubbleList: React.FC<{ className?: string }> = ({
  children,
  className,
  ...rest
}) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.125,
      },
    },
  }

  return (
    <div className={clsx('relative', className)} {...rest}>
      <div className="absolute top-0 left-2 -translate-x-1/2 h-full z-10">
        <div className="h-full bg-gray-900 dark:bg-gray-100 w-1 rounded-full" />
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
