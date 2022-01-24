import type { NextPage } from 'next'

import Container from '~components/Container'
import SEO from '~components/SEO'

const PageNotFound: NextPage = () => {
  return (
    <>
      <SEO title="Page not found" />
      <Container>
        <div className="text-center">
          <h1 className="text-9xl font-extrabold bg-clip-text bg-gradient-to-br from-accent-9 to-primary-9 text-transparent mb-8">
            404
          </h1>
          <p className="text-lg">It's probably something you did</p>
        </div>
      </Container>
    </>
  )
}

export default PageNotFound
