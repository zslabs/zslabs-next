import clsx from 'clsx'

import TextLink from '~components/TextLink'
import { ReactComponent as CodeSvg } from '~icons/code.svg'

interface ViewSourcePropsBasics {
  variation: 'inline' | 'fixed'
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

const ViewSource: React.FC<ViewSourceProps> = ({ href, path, variation }) => {
  return (
    <TextLink
      href={
        href ||
        `https://github.com/zslabs/zslabs-next/blob/master/pages/${path}`
      }
      className={clsx(
        'ring-2 ring-slate-300 dark:ring-slate-600 rounded-full bg-slate-300 dark:bg-slate-600 hover:scale-105 ease-bounce duration-300 text-slate-700 dark:text-slate-300',
        {
          'inline-block ml-1': variation === 'inline',
          'fixed left-4 bottom-4 z-10 p-1 hidden md:inline-block':
            variation === 'fixed',
        }
      )}
      title={path ? 'View page source' : 'View source'}
    >
      <CodeSvg className="md:text-lg" />
    </TextLink>
  )
}

export default ViewSource
