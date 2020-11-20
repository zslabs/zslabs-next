import PropTypes from 'prop-types'
import Link from 'next/link'

import { ReactComponent as LogoSVG } from '~media/logo.svg'
import Container from '~components/Container'

export default function BaseLayout({ children }) {
  return (
    <Container>
      <header className="grid gap-4 auto-cols-fr grid-flow-col items-center">
        <Link href="/">
          <a className="justify-self-start">
            <LogoSVG className="h-12" />
          </a>
        </Link>
        <div className="justify-self-end">stuff</div>
      </header>
      {children}
    </Container>
  )
}

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
