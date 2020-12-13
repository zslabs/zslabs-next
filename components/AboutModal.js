import * as React from 'react'
import Image from 'next/image'

import Modal from './Modal'
import TextLink from './TextLink'
import Button from './Button'

import { ReactComponent as TwitterSvg } from '~icons/twitter.svg'
import { ReactComponent as GitHubSvg } from '~icons/github.svg'
import { ReactComponent as CodePenSvg } from '~icons/codepen.svg'

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
        <h3 className="text-4xl font-extrabold text-center mb-4">
          Hi, I'm Zach
        </h3>
        <div className="grid gap-4 auto-cols-min grid-flow-col justify-center mb-8">
          <TextLink href="https://twitter.com/zslabs">
            <Button
              iconOnly
              className="from-blue-600 to-blue-400 ring-blue-600"
            >
              <TwitterSvg className="text-2xl" />
            </Button>
          </TextLink>
          <TextLink href="https://github.com/zslabs">
            <Button
              iconOnly
              className="from-gray-800 to-gray-600 ring-gray-800"
            >
              <GitHubSvg className="text-2xl" />
            </Button>
          </TextLink>
          <TextLink href="https://codepen.com/zslabs">
            <Button iconOnly className="from-red-600 to-red-400 ring-red-600">
              <CodePenSvg className="text-2xl" />
            </Button>
          </TextLink>
        </div>
        <div className="prose">
          <p>
            I create buttons, borders, and other groovy things at{' '}
            <a href="https://www.gremlin.com">Gremlin</a>. I work with
            techologies like <a href="https://reactjs.org">React</a>,{' '}
            <a href="https://gatsbyjs.org">Gatsby</a>,{' '}
            <a href="https://nextjs.org">Next.js</a>, and{' '}
            <a href="https://nodejs.org">Node</a>.{' '}
            <a href="https://www.framer.com/motion/">Framer Motion</a> and{' '}
            <a href="https://greensock.com/">GSAP</a> are my go-to animation
            utilities.
          </p>
          <p className="mt-4">
            My background involves pushing the limits of what we can build on
            the backend and how we can experience it on the frontend. My
            passions are perfecting process and educating those around me.
          </p>
          <h3>Speaking/consulting</h3>
          <p>
            Have a project you'd like me to be part of?{' '}
            <a href="#">Let's chat</a>.
          </p>
          <h3>How'd you build this site?</h3>
          <p>
            Because I love open-source&mdash;it's available for anyone to use.
            Find a bug? Report it!{' '}
            <a href="https://github.com/zslabs/zslabs.com">View source</a>.
          </p>
        </div>
      </Modal>
    </>
  )
}
