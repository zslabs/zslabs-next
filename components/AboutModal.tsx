import * as React from 'react'

import NextImage from 'next/image'

import Button from './Button'
import Modal from './Modal'
import Prose from './Prose'
import TextLink from './TextLink'

import useAboutModalState from '~hooks/useAboutModalState'
import { ReactComponent as CodePenSvg } from '~icons/logos/codepen.svg'
import { ReactComponent as GitHubSvg } from '~icons/logos/github.svg'
import { ReactComponent as TwitterSvg } from '~icons/logos/twitter.svg'

const AboutModal: React.FC = () => {
  const open = useAboutModalState((state) => state.open)
  const toggle = useAboutModalState((state) => state.toggle)

  const trigger = React.useCallback((props) => {
    return (
      <button
        type="button"
        title="About me"
        className="block overflow-hidden w-12 h-12 rounded-full focus:outline-none shadow-md hover:shadow-lg duration-300 ease-bounce hover:scale-110"
        {...props}
      >
        <NextImage alt="Zach Schnackel" src="/me.png" width="48" height="48" />
      </button>
    )
  }, [])

  const beforeTitle = React.useCallback((props) => {
    return (
      <div
        className="overflow-hidden mx-auto mb-8 w-24 h-24 rounded-full shadow-lg"
        {...props}
      >
        <NextImage src="/me.png" width="96" height="96" />
      </div>
    )
  }, [])

  const title = React.useCallback((props) => {
    return (
      <h3 className="mb-4 text-4xl font-bold text-center" {...props}>
        Hi, I'm Zach
      </h3>
    )
  }, [])

  return (
    <Modal
      trigger={trigger}
      beforeTitle={beforeTitle}
      title={title}
      open={open}
      setOpen={toggle}
    >
      <div className="grid grid-flow-col auto-cols-min gap-4 justify-center mb-8">
        <TextLink
          title="View my Twitter profile"
          href="https://twitter.com/zslabs"
        >
          <Button as="div" iconOnly variation="primary">
            <TwitterSvg className="text-2xl" />
          </Button>
        </TextLink>
        <TextLink
          title="View my GitHub profile"
          href="https://github.com/zslabs"
        >
          <Button as="div" iconOnly variation="secondary">
            <GitHubSvg className="text-2xl" />
          </Button>
        </TextLink>
        <TextLink
          title="View my CodePen profile"
          href="https://codepen.com/zslabs"
        >
          <Button as="div" iconOnly variation="tertiary">
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
          My background involves pushing the limits of what we can build on the
          backend and how we can experience it on the frontend. My passions are
          perfecting process and educating those around me.
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
  )
}

export default AboutModal
