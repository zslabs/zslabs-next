import * as React from 'react'

import dayjs from 'dayjs'

import BubbleList, { BubbleListItem } from './BubbleList'
import IconButton from './IconButton'
import OffCanvas from './OffCanvas'
import SectionTitle from './SectionTitle'

import posts from '~data/articles.json'
import useArticlesOffCanvasState from '~hooks/useArticlesOffCanvasState'
import { ReactComponent as MenuSvg } from '~icons/menu.svg'

const ArticleOffCanvas: React.FC = () => {
  const open = useArticlesOffCanvasState((state) => state.open)
  const toggle = useArticlesOffCanvasState((state) => state.toggle)

  const trigger = React.memo((props) => {
    return (
      <IconButton title="View articles" size="large" {...props}>
        <MenuSvg />
      </IconButton>
    )
  })

  const title = React.memo((props) => {
    return <SectionTitle title="Articles" variation="blue" {...props} />
  })

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
