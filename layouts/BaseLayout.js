import * as React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { useTheme } from 'next-themes'

import { ReactComponent as LogoSvg } from '~media/logo.svg'
import { ReactComponent as ListLogoSvg } from '~icons/list-logo.svg'
import { ReactComponent as DarkSvg } from '~icons/dark.svg'
import { ReactComponent as LightSvg } from '~icons/light.svg'
import Container from '~components/Container'
import LinkUnderline from '~components/LinkUnderline'
import TextLink from '~components/TextLink'
import Section from '~components/Section'
import AboutModal from '~components/AboutModal'

export default function BaseLayout({ children }) {
  const [mounted, setMounted] = React.useState(false)
  const { theme, setTheme } = useTheme()

  // After mounting, we have access to the theme
  React.useEffect(() => setMounted(true), [])

  return (
    <Container>
      <Section
        as="header"
        className="grid gap-4 auto-cols-fr grid-flow-col items-center"
      >
        <Link href="/">
          <a className="justify-self-start transform duration-300 hover:scale-110 ease-bounce">
            <LogoSvg className="h-12 from-indigo-700 to-blue-500" />
          </a>
        </Link>
        <div className="justify-self-center">
          {mounted && (
            <button
              title="Toggle dark mode"
              className="focus:outline-none transform duration-300 hover:scale-110 ease-bounce"
              type="button"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'light' ? (
                <DarkSvg className="h-8 w-8 stroke-1.5" />
              ) : (
                <LightSvg className="h-8 w-8 stroke-1.5" />
              )}
            </button>
          )}
        </div>
        <div className="justify-self-end">
          <AboutModal />
        </div>
      </Section>
      {children}
      <Section as="footer">
        <div className="grid grid-cols-1 gap-4 justify-items-center">
          <div className="bg-gradient-to-tr from-indigo-700 to-blue-500 w-2/4 rounded-full h-0.5" />
          <div className="bg-gradient-to-tr from-indigo-700 to-blue-500 w-2/6 rounded-full h-0.5" />
          <div className="grid gap-2 grid-cols-1 text-sm mt-4">
            <div className="text-gray-500 dark:text-gray-300">
              Copyright &copy; {new Date().getFullYear()} Zach Schnackel.
              Penalty is 🔥
            </div>
            <div className="font-extrabold grid gap-4 grid-flow-col auto-cols-auto justify-center items-center">
              <div>
                <LinkUnderline href="/contact">Contact</LinkUnderline>
              </div>
              <div>
                <LinkUnderline href="https://github.com/zslabs/zslabs.com">
                  Source
                </LinkUnderline>
              </div>
              <div>
                <TextLink href="https://list.zslabs.com">
                  <ListLogoSvg className="text-xl" />
                </TextLink>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Container>
  )
}

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
