import IconButton from './IconButton'

import TextLink from '~components/TextLink'
import { ReactComponent as CodeSvg } from '~icons/code.svg'

interface Href {
  href: string
  path?: never
}

interface Path {
  path: string
  href?: never
}

type ViewSourceProps = Href | Path

const ViewSource: React.FC<ViewSourceProps> = ({ href, path }) => {
  return (
    <div className="fixed bottom-4 left-4 z-20">
      <TextLink
        href={
          href ||
          `https://github.com/zslabs/zslabs-next/blob/master/pages/${path}`
        }
        title={path ? 'View page source' : 'View source'}
      >
        <IconButton as="div" variation="default">
          <CodeSvg />
        </IconButton>
      </TextLink>
    </div>
  )
}

export default ViewSource
