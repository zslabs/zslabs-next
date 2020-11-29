import PropTypes from 'prop-types'
import Link from 'next/link'

import { ReactComponent as LogoSVG } from '~media/logo.svg'
import Container from '~components/Container'

export default function BaseLayout({ children }) {
  return (
    <Container className="my-4 md:my-8">
      <header className="grid gap-4 auto-cols-fr grid-flow-col items-center mb-16 md:mb-20">
        <Link href="/">
          <a className="justify-self-start transform duration-300 hover:scale-110 ease-bounce">
            <LogoSVG className="h-12" />
          </a>
        </Link>
        <div className="justify-self-end">stuff</div>
      </header>
      {children}
      <footer className="mt-16 md:mt-20">
        <div className="grid grid-cols-1 gap-4 justify-items-center">
          <div
            className="bg-gradient-to-tr from-indigo-700 to-blue-500 w-2/4 rounded-full"
            style={{ height: 2 }}
          />
          <div
            className="bg-gradient-to-tr from-indigo-700 to-blue-500 w-2/6 rounded-full"
            style={{ height: 2 }}
          />
          <div className="grid grid-cols gap-2 text-sm">
            <div className="text-gray-500 dark:text-gray-300 mt-4">
              Copyright &copy; {new Date().getFullYear()} Zach Schnackel.
              Penalty is 🔥
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
