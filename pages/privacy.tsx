import path from 'path'
import fs from 'fs'

import * as React from 'react'
import { GetStaticProps, NextPage } from 'next'
import { bundleMDX } from 'mdx-bundler'

import Section from '~components/Section'
import SectionTitle from '~components/SectionTitle'
import SEO from '~components/SEO'
import ViewSource from '~components/ViewSource'
import MDXContent from '~components/MDXContent'

interface PrivacyProps {
  content?: string
}

const Privacy: NextPage<PrivacyProps> = ({ content }) => {
  return (
    <>
      <SEO title="Privacy" />
      <Section>
        <SectionTitle className="text-center">Privacy</SectionTitle>
        <MDXContent content={content} />
      </Section>
      <ViewSource fixed path="privacy.tsx" />
    </>
  )
}

export default Privacy

export const getStaticProps: GetStaticProps = async () => {
  const dataDirectory = path.join(process.cwd(), 'data')
  const filePath = path.join(dataDirectory, 'privacy.mdx')
  const fileContents = fs.readFileSync(filePath, 'utf8')

  const { code: content } = await bundleMDX(fileContents)

  return {
    props: {
      content,
    },
  }
}