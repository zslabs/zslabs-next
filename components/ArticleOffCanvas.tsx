import * as React from 'react'
import dayjs from 'dayjs'

import OffCanvas from './OffCanvas'
import SectionTitle from './SectionTitle'
import BubbleList, { BubbleListItem } from './BubbleList'

import useArticlesOffCanvasState from '~hooks/useArticlesOffCanvasState'
import { ReactComponent as MenuSvg } from '~icons/menu.svg'
import posts from '~data/articles.json'

const ArticleOffCanvas: React.FC = () => {
  const open = useArticlesOffCanvasState((state) => state.open)
  const toggle = useArticlesOffCanvasState((state) => state.toggle)

  return (
    <>
      <button
        type="button"
        className="block duration-300 hover:scale-110 ease-bounce focus:outline-none"
        onClick={toggle}
        title="View articles"
      >
        <MenuSvg className="h-10 w-10" />
      </button>
      <OffCanvas open={open} setIsOpen={toggle}>
        <div className="mt-12">
          <SectionTitle title="Articles" variation="blue" />
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
