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
  return (
    <div
      className="relative z-20 grid grid-flow-col auto-cols-auto gap-6 items-center justify-start group"
      {...rest}
    >
      <div className="w-4 h-4 ring-4 ring-gray-100 dark:ring-gray-800 border-2 border-gray-900 dark:border-gray-100 rounded-full bg-gray-100 dark:bg-gray-800 group-hover:bg-gray-900 dark:group-hover:bg-gray-100 transform duration-300 ease-bounce group-hover:scale-125" />
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
    </div>
  )
}

const BubbleList: React.FC = ({ children, ...rest }) => {
  return (
    <div className="relative" {...rest}>
      <div className="absolute top-0 left-2 transform -translate-x-1/2 h-full z-10">
        <div className="w-2 h-2 bg-gray-900 dark:bg-gray-100 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2" />
        <div className="h-full bg-gray-900 dark:bg-gray-100 w-0.5" />
        <div className="w-2 h-2 bg-gray-900 dark:bg-gray-100 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2" />
      </div>
      <div className="grid grid-cols-1 gap-8 py-8">{children}</div>
    </div>
  )
}

export default BubbleList
