import path from 'path'

import * as React from 'react'
import { GetStaticProps, NextPage } from 'next'
import { bundleMDX } from 'mdx-bundler'

import Section from '~components/Section'
import SectionTitle from '~components/SectionTitle'
import SEO from '~components/SEO'
import ViewSource from '~components/ViewSource'
import MDXContent from '~components/MDXContent'

interface TermsProps {
  content?: string
}

const Terms: NextPage<TermsProps> = ({ content }) => {
  return (
    <>
      <SEO title="Terms" />
      <Section>
        <SectionTitle title="Terms" />
        <MDXContent content={content} />
      </Section>
      <ViewSource path="terms.tsx" variation="fixed" />
    </>
  )
}

export default Terms

export const getStaticProps: GetStaticProps = async () => {
  const dataDirectory = path.join(process.cwd(), 'data')
  const filePath = path.join(dataDirectory, 'terms.mdx')

  const { code: content } = await bundleMDX({ file: filePath })

  return {
    props: {
      content,
    },
  }
}
