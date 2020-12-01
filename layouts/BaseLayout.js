import PropTypes from 'prop-types'
import Link from 'next/link'
import Image from 'next/image'

import { ReactComponent as LogoSvg } from '~media/logo.svg'
import { ReactComponent as MenuSvg } from '~icons/menu.svg'
import { ReactComponent as ListLogoSvg } from '~icons/list-logo.svg'
import Container from '~components/Container'
import LinkUnderline from '~components/LinkUnderline'
import TextLink from '~components/TextLink'

export default function BaseLayout({ children }) {
  return (
    <Container className="my-4 md:my-8">
      <header className="grid gap-4 auto-cols-fr grid-flow-col items-center mb-16 md:mb-20">
        <Link href="/">
          <a className="justify-self-start transform duration-300 hover:scale-110 ease-bounce">
            <LogoSvg className="h-12 from-indigo-700 to-blue-500" />
          </a>
        </Link>
        <div className="justify-self-center">
          <button
            type="button"
            className="block transform duration-300 hover:scale-110 ease-bounce focus:outline-none"
          >
            <MenuSvg className="h-10 w-10 stroke-1.5" />
          </button>
        </div>
        <div className="justify-self-end">
          <button
            type="button"
            className="block w-12 h-12 overflow-hidden rounded-full shadow-md transform duration-300 hover:scale-110 hover:shadow-lg focus:outline-none ease-bounce"
          >
            <Image src="/me.png" width="48" height="48" />
          </button>
        </div>
      </header>
      {children}
      <footer className="mt-16 md:mt-20">
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
      </footer>
    </Container>
  )
}

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
