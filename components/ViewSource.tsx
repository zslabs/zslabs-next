import clsx from 'clsx'

import TextLink from '~components/TextLink'
import { ReactComponent as CodeSvg } from '~icons/code.svg'

interface ViewSourcePropsBasics {
  fixed?: boolean
  className?: string
}

interface Href extends ViewSourcePropsBasics {
  href: string
  path?: never
}

interface Path extends ViewSourcePropsBasics {
  path: string
  href?: never
}

type ViewSourceProps = Href | Path

const ViewSource: React.FC<ViewSourceProps> = ({
  href,
  path,
  fixed,
  className,
}) => {
  return (
    <TextLink
      href={
        href ||
        `https://github.com/zslabs/zslabs-next/blob/master/pages/${path}`
      }
      className={clsx(
        'ring-2 ring-gray-300 dark:ring-gray-600 rounded-full bg-gray-300 dark:bg-gray-600 hover:scale-105 ease-bounce duration-300 text-gray-700 dark:text-gray-300',
        {
          'inline-block': !fixed,
          'fixed left-4 bottom-4 z-10 p-1 hidden md:inline-block': fixed,
        },
        className
      )}
      title={path ? 'View page source' : 'View source'}
    >
      <CodeSvg className="md:text-lg" />
    </TextLink>
  )
}

export default ViewSource
