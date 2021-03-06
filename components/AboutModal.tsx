import * as React from 'react'
import NextImage from 'next/image'

import Modal from './Modal'
import TextLink from './TextLink'
import Button from './Button'
import Prose from './Prose'

import { ReactComponent as TwitterSvg } from '~icons/logos/twitter.svg'
import { ReactComponent as GitHubSvg } from '~icons/logos/github.svg'
import { ReactComponent as CodePenSvg } from '~icons/logos/codepen.svg'
import useAboutModalState from '~hooks/useAboutModalState'

const AboutModal: React.FC = () => {
  const open = useAboutModalState((state) => state.open)
  const toggle = useAboutModalState((state) => state.toggle)

  return (
    <>
      <button
        type="button"
        title="About me"
        className="block w-12 h-12 overflow-hidden rounded-full shadow-md duration-300 hover:scale-110 hover:shadow-lg focus:outline-none ease-bounce"
        onClick={toggle}
      >
        <NextImage alt="Zach Schnackel" src="/me.png" width="48" height="48" />
      </button>
      <Modal open={open} setIsOpen={toggle}>
        <div className="rounded-full overflow-hidden w-24 h-24 shadow-lg mx-auto mb-8">
          <NextImage src="/me.png" width="96" height="96" />
        </div>
        <h3 className="text-4xl font-extrabold text-center mb-4">
          Hi, I'm Zach
        </h3>
        <div className="grid gap-4 auto-cols-min grid-flow-col justify-center mb-8">
          <TextLink
            title="View my Twitter profile"
            href="https://twitter.com/zslabs"
          >
            <Button
              as="div"
              iconOnly
              className="from-blue-600 to-blue-400 ring-blue-600"
            >
              <TwitterSvg className="text-2xl" />
            </Button>
          </TextLink>
          <TextLink
            title="View my GitHub profile"
            href="https://github.com/zslabs"
          >
            <Button
              as="div"
              iconOnly
              className="from-gray-800 to-gray-600 ring-gray-800"
            >
              <GitHubSvg className="text-2xl" />
            </Button>
          </TextLink>
          <TextLink
            title="View my CodePen profile"
            href="https://codepen.com/zslabs"
          >
            <Button
              as="div"
              iconOnly
              className="from-red-600 to-red-400 ring-red-600"
            >
              <CodePenSvg className="text-2xl" />
            </Button>
          </TextLink>
        </div>
        <Prose>
          <p>
            I'm part of the messaging team at{' '}
            <TextLink href="https://www.slack.com" includeIcon>
              Slack
            </TextLink>
            . I work with techologies like{' '}
            <TextLink href="https://reactjs.org">React</TextLink>,{' '}
            <TextLink href="https://nextjs.org">Next.js</TextLink>,{' '}
            <TextLink href="https://gatsbyjs.org">Gatsby</TextLink>, and{' '}
            <TextLink href="https://nodejs.org">Node</TextLink>.{' '}
            <TextLink href="https://www.framer.com/motion/">
              Framer Motion
            </TextLink>{' '}
            and <TextLink href="https://greensock.com/">GSAP</TextLink> are my
            go-to animation utilities.
          </p>
          <p>
            My background involves pushing the limits of what we can build on
            the backend and how we can experience it on the frontend. My
            passions are perfecting process and educating those around me.
          </p>
          <h3>Speaking/consulting</h3>
          <p>
            Have a project you'd like me to be part of?{' '}
            <TextLink href="/contact" onClick={toggle}>
              Let's chat
            </TextLink>
            .
          </p>
          <h3>How'd you build this site?</h3>
          <p>
            Because I love open-source&mdash;it's available for anyone to use.
            Find a bug? Report it!{' '}
            <TextLink href="https://github.com/zslabs/zslabs-next">
              View source
            </TextLink>
            .
          </p>
        </Prose>
      </Modal>
    </>
  )
}

export default AboutModal
