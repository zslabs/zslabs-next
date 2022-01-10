import type { NextPage } from 'next'

import Container from '~components/Container'
import SEO from '~components/SEO'

const PageNotFound: NextPage = () => {
  return (
    <>
      <SEO title="Page not found" />
      <Container>
        <div className="text-center">
          <h1 className="text-9xl text-transparent font-extrabold bg-clip-text bg-gradient-to-br from-emerald-400 to-cyan-500 text-fill-transparent mb-8">
            404
          </h1>
          <p className="text-lg">It's probably something you did</p>
        </div>
      </Container>
    </>
  )
}

export default PageNotFound
