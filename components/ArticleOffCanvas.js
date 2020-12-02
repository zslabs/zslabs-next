import * as React from 'react'

import OffCanvas from './OffCanvas'
import SectionTitle, { SectionTitleSkew } from './SectionTitle'
import BubbleList, { BubbleListItem } from './BubbleList'

import { ReactComponent as MenuSvg } from '~icons/menu.svg'

export default function ArticleOffCanvas() {
  const [open, setIsOpen] = React.useState(false)

  return (
    <>
      <button
        type="button"
        className="block transform duration-300 hover:scale-110 ease-bounce focus:outline-none"
        onClick={() => setIsOpen(!open)}
      >
        <MenuSvg className="h-10 w-10 stroke-1.5" />
      </button>
      <OffCanvas open={open} setIsOpen={setIsOpen}>
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
          <BubbleListItem
            title="MDX article title"
            link="https://list.zslabs.com/"
          >
            Stuffz
          </BubbleListItem>
        </BubbleList>
      </OffCanvas>
    </>
  )
}
