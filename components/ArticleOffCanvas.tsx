import * as React from 'react'
import dayjs from 'dayjs'

import OffCanvas from './OffCanvas'
import SectionTitle from './SectionTitle'
import BubbleList, { BubbleListItem } from './BubbleList'
import IconButton from './IconButton'

import useArticlesOffCanvasState from '~hooks/useArticlesOffCanvasState'
import { ReactComponent as MenuSvg } from '~icons/menu.svg'
import posts from '~data/articles.json'

const ArticleOffCanvas: React.FC = () => {
  const open = useArticlesOffCanvasState((state) => state.open)
  const toggle = useArticlesOffCanvasState((state) => state.toggle)

  return (
    <>
      <OffCanvas
        trigger={
          <IconButton title="View articles" size="large">
            <MenuSvg />
          </IconButton>
        }
        title={<SectionTitle title="Articles" variation="blue" />}
        open={open}
        setOpen={toggle}
      >
        <div className="mt-12">
          <BubbleList>
            {posts.map((post) => (
              <BubbleListItem
                key={post.frontmatter.title}
                title={post.frontmatter.title}
                link={`/articles/${post.frontmatter.slug}`}
                sub={<>{dayjs(post.frontmatter.date).format('MMMM D, YYYY')}</>}
                onClick={toggle}
              />
            ))}
          </BubbleList>
        </div>
      </OffCanvas>
    </>
  )
}

export default ArticleOffCanvas
