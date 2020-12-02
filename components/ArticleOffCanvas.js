import * as React from 'react'

import OffCanvas from './OffCanvas'

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
        hello from the offcanvas
      </OffCanvas>
    </>
  )
}
