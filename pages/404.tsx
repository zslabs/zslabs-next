import type { NextPage } from 'next'

import Container from '~components/Container'
import Section from '~components/Section'
import SEO from '~components/SEO'

const PageNotFound: NextPage = () => {
  return (
    <>
      <SEO title="Page not found" />
      <Container>
        <Section>
          <div className="text-center">
            <h1 className="mb-8 bg-gradient-to-br from-accent-9 to-primary-9 bg-clip-text text-9xl font-extrabold text-transparent">
              404
            </h1>
            <p className="text-lg">It's probably something you did</p>
          </div>
        </Section>
      </Container>
    </>
  )
}

export default PageNotFound
