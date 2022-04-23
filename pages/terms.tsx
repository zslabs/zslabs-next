import path from 'path'

import * as React from 'react'

import type { MDX } from 'contentlayer/core'
import { bundleMDX } from 'mdx-bundler'
import type { GetStaticProps, NextPage } from 'next'

import MDXContent from '~components/MDXContent'
import Section from '~components/Section'
import SectionTitle from '~components/SectionTitle'
import SEO from '~components/SEO'
import ViewSource from '~components/ViewSource'

interface TermsProps {
  content: MDX
}

const Terms: NextPage<TermsProps> = ({ content }) => {
  return (
    <>
      <SEO title="Terms" />
      <Section>
        <SectionTitle title="Terms" />
        <MDXContent content={content} />
      </Section>
      <ViewSource path="terms.tsx" />
    </>
  )
}

export default Terms

export const getStaticProps: GetStaticProps = async () => {
  const dataDirectory = path.join(process.cwd(), 'data')
  const filePath = path.join(dataDirectory, 'terms.mdx')

  const content = await bundleMDX({ file: filePath })

  return {
    props: {
      content,
    },
  }
}
