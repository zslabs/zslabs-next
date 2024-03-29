import * as React from 'react'

import type {
  AnimationControls,
  AnimationProps,
  HTMLMotionProps,
  Variants,
} from 'framer-motion'
import { motion, useAnimation } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'

import AboutModal from '~components/AboutModal'
import ArticleOffCanvas from '~components/ArticleOffCanvas'
import Container from '~components/Container'
import Section from '~components/Section'
import TextLink from '~components/TextLink'
import useLayoutAnimationState from '~hooks/useLayoutAnimationState'
import { ReactComponent as DarkSvg } from '~icons/dark.svg'
import { ReactComponent as LightSvg } from '~icons/light.svg'
import { ReactComponent as GitHubSvg } from '~icons/logos/github.svg'
import { ReactComponent as ListLogoSvg } from '~icons/logos/list.svg'
import { ReactComponent as TwitterSvg } from '~icons/logos/twitter.svg'
import bubbles from '~media/bubbles.svg'
import { ReactComponent as LogoSvg } from '~media/logo.svg'
import type { ChildrenOnlyProps } from '~types/custom'

interface HeaderItemWrapperProps {
  runAnimation: boolean
  controls: AnimationControls
  custom: number
}

const HeaderItemWrapper: React.FC<
  HeaderItemWrapperProps & HTMLMotionProps<'div'>
> = ({ runAnimation, controls, custom, ...rest }) => {
  const variants: Variants = React.useMemo(
    () => ({
      hidden: {
        opacity: 0,
        y: '-2rem',
      },
      visible: {
        opacity: 1,
        y: 0,
      },
    }),
    []
  )

  const transition: AnimationProps['transition'] = React.useMemo(
    () => ({
      delay: custom * 0.25,
    }),
    [custom]
  )

  return (
    <motion.div
      animate={controls}
      variants={variants}
      initial={runAnimation ? 'hidden' : false}
      transition={transition}
      {...rest}
    />
  )
}

function FooterLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <TextLink
      href={href}
      className="font-bold underline decoration-dotted underline-offset-4"
    >
      {children}
    </TextLink>
  )
}

const footerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: '2rem',
  },
  visible: {
    opacity: 1,
    y: 0,
  },
}

const bubblesStyles = {
  backgroundImage: `url(${bubbles})`,
}

const bubblesInitial = { opacity: 0 }
const bubblesAnimate = { opacity: 0.2 } // Matches TW style

const BaseLayout: React.FC<ChildrenOnlyProps> = ({ children }) => {
  const [mounted, setMounted] = React.useState(false)

  const { theme, setTheme } = useTheme()
  const { pathname } = useRouter()
  const controls = useAnimation()
  const setDone = useLayoutAnimationState((state) => state.setDone)

  const runAnimation = pathname === '/'

  const handleThemeToggleClick = React.useCallback(
    () => setTheme(theme === 'dark' ? 'light' : 'dark'),
    [setTheme, theme]
  )

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
      <motion.div
        initial={bubblesInitial}
        animate={bubblesAnimate}
        className="pointer-events-none absolute top-0 left-0 z-0 h-24 w-full opacity-20 gradient-mask-b-0"
        style={bubblesStyles}
      />
      <div className="overflow-hidden rounded-b-3xl bg-slate-1 shadow">
        <Container>
          <Section as="header">
            <div className="flex items-center justify-between gap-4">
              <HeaderItemWrapper
                runAnimation={runAnimation}
                controls={controls}
                custom={1}
                className="justify-self-start"
              >
                <TextLink
                  href="/"
                  title="ZS Labs"
                  className="block duration-300 ease-bounce hover:scale-110"
                >
                  <LogoSvg className="h-12 from-accent-9 to-primary-11 drop-shadow-md" />
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
                className="justify-self-end"
              >
                <AboutModal />
              </HeaderItemWrapper>
            </div>
          </Section>

          {children}
        </Container>
      </div>
      <motion.footer
        animate={controls}
        variants={footerVariants}
        initial={runAnimation ? 'hidden' : false}
        className="py-8 md:py-12"
      >
        <Container>
          <div className="grid grid-cols-1 gap-4">
            <div className="grid grid-cols-1 justify-center gap-2 text-center text-sm">
              <div>
                Copyright &copy; {new Date().getFullYear()} Zach Schnackel.
                Penalty is 🔥
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <div>
                  <FooterLink href="/contact">Contact</FooterLink>
                </div>
                <div>
                  <FooterLink href="https://github.com/zslabs/zslabs-next">
                    Source
                  </FooterLink>
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
                {mounted && (
                  <button
                    type="button"
                    title="Toggle theme"
                    onClick={handleThemeToggleClick}
                  >
                    {theme === 'light' ? (
                      <DarkSvg className="text-xl" />
                    ) : (
                      <LightSvg className="text-xl" />
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>
        </Container>
      </motion.footer>
    </>
  )
}

export default BaseLayout
