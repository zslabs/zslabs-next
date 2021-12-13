import * as React from 'react'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import {
  AnimationControls,
  HTMLMotionProps,
  motion,
  useAnimation,
} from 'framer-motion'

import { ReactComponent as LogoSvg } from '~media/logo.svg'
import { ReactComponent as ListLogoSvg } from '~icons/logos/list.svg'
import { ReactComponent as DarkSvg } from '~icons/dark.svg'
import { ReactComponent as LightSvg } from '~icons/light.svg'
import bubbles from '~media/bubbles.svg'
import Container from '~components/Container'
import LinkUnderline from '~components/LinkUnderline'
import TextLink from '~components/TextLink'
import Section from '~components/Section'
import AboutModal from '~components/AboutModal'
import ArticleOffCanvas from '~components/ArticleOffCanvas'
import useLayoutAnimationState from '~hooks/useLayoutAnimationState'
import { spring } from '~helpers'
import { ReactComponent as TwitterSvg } from '~icons/logos/twitter.svg'
import { ReactComponent as GitHubSvg } from '~icons/logos/github.svg'

interface HeaderItemWrapperProps {
  runAnimation: boolean
  controls: AnimationControls
  custom: number
}

const HeaderItemWrapper: React.FC<
  HeaderItemWrapperProps & HTMLMotionProps<'div'>
> = ({ runAnimation, controls, custom, ...rest }) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: '-2rem',
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <motion.div
      animate={controls}
      variants={variants}
      initial={runAnimation ? 'hidden' : false}
      transition={{
        ...spring,
        delay: custom * 0.15,
      }}
      {...rest}
    />
  )
}

const BaseLayout: React.FC = ({ children }) => {
  const [mounted, setMounted] = React.useState(false)

  const { theme, setTheme } = useTheme()

  const { pathname } = useRouter()

  const controls = useAnimation()

  const setDone = useLayoutAnimationState((state) => state.setDone)

  const runAnimation = pathname === '/'

  const footerVariants = {
    hidden: {
      opacity: 0,
      y: '2rem',
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  // After mounting, we have access to the theme
  React.useEffect(() => setMounted(true), [])

  React.useEffect(() => {
    async function runAnimationFunc(): Promise<void> {
      await controls.start('visible')

      setDone()
    }

    if (runAnimation) {
      runAnimationFunc()
    }
  }, [controls, pathname, setDone, runAnimation])

  return (
    <>
      <div
        className="absolute opacity-10 -z-1 top-0 left-0 w-full dark:filter-invert h-24 gradient-mask-b-0"
        style={{ backgroundImage: `url(${bubbles})` }}
      />
      <Container>
        <Section as="header">
          <div className="grid gap-4 auto-cols-fr grid-flow-col items-center">
            <HeaderItemWrapper
              runAnimation={runAnimation}
              controls={controls}
              custom={1}
              className="justify-self-start"
            >
              <TextLink
                href="/"
                title="ZS Labs"
                className="transform duration-300 hover:scale-110 ease-bounce block"
              >
                <LogoSvg className="h-12 from-blue-500 to-blue-600 drop-shadow-md" />
              </TextLink>
            </HeaderItemWrapper>
            <HeaderItemWrapper
              runAnimation={runAnimation}
              controls={controls}
              custom={2}
              className="justify-self-center"
            >
              <ArticleOffCanvas />
            </HeaderItemWrapper>
            <HeaderItemWrapper
              runAnimation={runAnimation}
              controls={controls}
              custom={3}
              className="grid gap-4 items-center grid-flow-col auto-cols-auto justify-self-end"
            >
              {mounted && (
                <button
                  title="Toggle dark mode"
                  className="focus:outline-none duration-300 hover:scale-110 ease-bounce"
                  type="button"
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                >
                  {theme === 'light' ? (
                    <DarkSvg className="h-8 w-8" />
                  ) : (
                    <LightSvg className="h-8 w-8" />
                  )}
                </button>
              )}
              <AboutModal />
            </HeaderItemWrapper>
          </div>
        </Section>

        {children}
        <Section
          as={motion.footer}
          animate={controls}
          variants={footerVariants}
          transition={spring}
          initial={runAnimation ? 'hidden' : false}
        >
          <div className="grid grid-cols-1 gap-4 justify-items-center">
            <div className="bg-gradient-to-br from-indigo-700 to-blue-500 w-2/4 rounded-full h-0.5" />
            <div className="bg-gradient-to-br from-indigo-700 to-blue-500 w-2/6 rounded-full h-0.5" />
            <div className="grid gap-2 grid-cols-1 text-sm mt-4">
              <div className="text-slate-500 dark:text-slate-300">
                Copyright &copy; {new Date().getFullYear()} Zach Schnackel.
                Penalty is 🔥
              </div>
              <div className="font-extrabold grid gap-4 grid-flow-col auto-cols-auto justify-center items-center">
                <div>
                  <LinkUnderline href="/contact">Contact</LinkUnderline>
                </div>
                <div>
                  <LinkUnderline href="https://github.com/zslabs/zslabs-next">
                    Source
                  </LinkUnderline>
                </div>
                <div>
                  <TextLink
                    title="List - eBay toolkit"
                    href="https://list.zslabs.com"
                  >
                    <ListLogoSvg className="text-lg" />
                  </TextLink>
                </div>
                <div>
                  <TextLink
                    title="View my Twitter profile"
                    href="https://twitter.com/zslabs"
                  >
                    <TwitterSvg className="text-lg" />
                  </TextLink>
                </div>
                <div>
                  <TextLink
                    title="View my GitHub profile"
                    href="https://github.com/zslabs"
                  >
                    <GitHubSvg className="text-lg" />
                  </TextLink>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </Container>
    </>
  )
}

export default BaseLayout
