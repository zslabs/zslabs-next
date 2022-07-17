import * as React from 'react'

import NextImage from 'next/image'

import Button from './Button'
import Modal from './Modal'
import Prose from './Prose'
import TextLink from './TextLink'

import InlineIconWrapper from '~components/InlineIconWrapper'
import useAboutModalState from '~hooks/useAboutModalState'
import { ReactComponent as CodePenSvg } from '~icons/logos/codepen.svg'
import { ReactComponent as GitHubSvg } from '~icons/logos/github.svg'
import { ReactComponent as SlackSvg } from '~icons/logos/slack.svg'
import { ReactComponent as TwitterSvg } from '~icons/logos/twitter.svg'

const AboutModal: React.FC = () => {
  const open = useAboutModalState((state) => state.open)
  const toggle = useAboutModalState((state) => state.toggle)

  const trigger = React.useCallback((props) => {
    return (
      <button
        type="button"
        title="About me"
        className="block h-12 w-12 overflow-hidden rounded-full shadow-md duration-300 ease-bounce hover:scale-110 hover:shadow-lg focus:outline-none"
        {...props}
      >
        <NextImage alt="Zach Schnackel" src="/me.png" width="48" height="48" />
      </button>
    )
  }, [])

  const beforeTitle = React.useCallback((props) => {
    return (
      <div
        className="mx-auto mb-8 h-24 w-24 overflow-hidden rounded-full shadow-lg"
        {...props}
      >
        <NextImage src="/me.png" width="96" height="96" />
      </div>
    )
  }, [])

  const title = React.useCallback((props) => {
    return (
      <h3 className="mb-4 text-center text-4xl font-bold" {...props}>
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
      <div className="mb-8 grid auto-cols-min grid-flow-col justify-center gap-4">
        <TextLink
          title="View my Twitter profile"
          href="https://twitter.com/zslabs"
        >
          <Button as="div" iconOnly variation="primary">
            <TwitterSvg />
          </Button>
        </TextLink>
        <TextLink
          title="View my GitHub profile"
          href="https://github.com/zslabs"
        >
          <Button as="div" iconOnly variation="secondary">
            <GitHubSvg />
          </Button>
        </TextLink>
        <TextLink
          title="View my CodePen profile"
          href="https://codepen.com/zslabs"
        >
          <Button as="div" iconOnly variation="contrast">
            <CodePenSvg />
          </Button>
        </TextLink>
      </div>
      <Prose>
        <p>
          I'm part of the design infrastructure team at{' '}
          <TextLink href="https://www.slack.com">
            <InlineIconWrapper>
              <SlackSvg />
            </InlineIconWrapper>{' '}
            Slack
          </TextLink>
          , building tools to help designers and engineers collaborate more
          efficiently.
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
