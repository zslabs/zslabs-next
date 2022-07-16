import * as React from 'react'

import dayjs from 'dayjs'

import BubbleList, { BubbleListItem } from './BubbleList'
import Button from './Button'
import OffCanvas from './OffCanvas'
import SectionTitle from './SectionTitle'

import posts from '~data/articles.json'
import useArticlesOffCanvasState from '~hooks/useArticlesOffCanvasState'
import { ReactComponent as MenuSvg } from '~icons/menu.svg'

const ArticleOffCanvas: React.FC = () => {
  const open = useArticlesOffCanvasState((state) => state.open)
  const toggle = useArticlesOffCanvasState((state) => state.toggle)

  const trigger = React.useCallback((props) => {
    return (
      <Button variation="blank" iconOnly title="View articles" {...props}>
        <MenuSvg className="text-4xl" />
      </Button>
    )
  }, [])

  const title = React.useCallback((props) => {
    return <SectionTitle title="Articles" variation="accent" {...props} />
  }, [])

  return (
    <OffCanvas trigger={trigger} title={title} open={open} setOpen={toggle}>
      <div className="mt-12">
        <BubbleList>
          {posts.map((post) => (
            <BubbleListItem
              key={post.title}
              title={post.title}
              link={post.url}
              sub={<>{dayjs(post.date).format('MMMM D, YYYY')}</>}
              onClick={toggle}
            />
          ))}
        </BubbleList>
      </div>
    </OffCanvas>
  )
}

export default ArticleOffCanvas
