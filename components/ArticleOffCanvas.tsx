import * as React from 'react'
import dayjs from 'dayjs'

import OffCanvas from './OffCanvas'
import SectionTitle, { SectionTitleSkew } from './SectionTitle'
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
        <MenuSvg className="h-10 w-10 stroke-1.5" />
      </button>
      <OffCanvas open={open} setIsOpen={toggle}>
        <SectionTitle className="mt-12">
          <SectionTitleSkew
            className="from-green-400 to-cyan-500 ring-green-400"
            style={{
              clipPath:
                'polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0%)', // stylelint-disable
            }}
          />
          Articles
        </SectionTitle>
        <BubbleList className="mb-8">
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
      </OffCanvas>
    </>
  )
}

export default ArticleOffCanvas
