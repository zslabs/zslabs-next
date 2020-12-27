import dayjs from 'dayjs'

import OffCanvas from './OffCanvas'
import SectionTitle, { SectionTitleSkew } from './SectionTitle'
import BubbleList, { BubbleListItem } from './BubbleList'

import useArticlesOffCanvasState from '~hooks/useArticlesOffCanvasState'
import { ReactComponent as MenuSvg } from '~icons/menu.svg'
import posts from '~data/articles.json'

export default function ArticleOffCanvas() {
  const open = useArticlesOffCanvasState((state) => state.open)
  const toggle = useArticlesOffCanvasState((state) => state.toggle)

  return (
    <>
      <button
        type="button"
        className="block transform duration-300 hover:scale-110 ease-bounce focus:outline-none"
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
                'polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0%)',
            }}
          />
          Articles
        </SectionTitle>
        <BubbleList>
          {posts.map((post) => (
            <BubbleListItem
              key={post.title}
              title={post.title}
              link={`/articles/${post.slug}`}
              sub={<>{dayjs(post.date).format('MMMM D, YYYY')}</>}
              onClick={toggle}
            />
          ))}
        </BubbleList>
      </OffCanvas>
    </>
  )
}
