import * as React from 'react'
import Image from 'next/image'

import Modal from './Modal'

export default function AboutModal() {
  const [open, setIsOpen] = React.useState(false)

  return (
    <>
      <button
        type="button"
        className="block w-12 h-12 overflow-hidden rounded-full shadow-md transform duration-300 hover:scale-110 hover:shadow-lg focus:outline-none ease-bounce"
        onClick={() => setIsOpen(!open)}
      >
        <Image src="/me.png" width="48" height="48" />
      </button>
      <Modal open={open} setIsOpen={setIsOpen}>
        <div className="rounded-full overflow-hidden w-24 h-24 shadow-lg mx-auto mb-8">
          <Image src="/me.png" width="96" height="96" />
        </div>
        <h3 className="text-4xl font-extrabold text-center">Hi, I'm Zach</h3>
      </Modal>
    </>
  )
}
