import fs from 'fs'

import * as React from 'react'
import { GetStaticProps, NextPage } from 'next'

import BubbleList, { BubbleListItem } from '~components/BubbleList'
import Section from '~components/Section'
import SectionTitle, { SectionTitleSkew } from '~components/SectionTitle'
import SEO from '~components/SEO'

interface ExperienceProps {
  data: {
    company: string
    title: string
    badge: string
    blurb: React.ReactNode
  }[]
}

const Experience: NextPage<ExperienceProps> = ({ data }) => {
  return (
    <>
      <SEO title="Experience" />
      <Section className="grid grid-cols-1 md:grid-cols-3/4 justify-center relative">
        <SectionTitle className="grid place-items-center">
          <SectionTitleSkew
            className="from-indigo-200 to-purple-700"
            style={{
              clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
            }}
          />
          Experience
        </SectionTitle>
        <BubbleList>
          {data.map((partial, index) => (
            <BubbleListItem
              key={partial.company}
              title={partial.company}
              sub={partial.title}
              badge={partial.badge}
              badgeVariant={index === 0 ? 'secondary' : 'tertiary'}
            >
              {partial.blurb}
            </BubbleListItem>
          ))}
        </BubbleList>
      </Section>
    </>
  )
}

export default Experience

export const getStaticProps: GetStaticProps<ExperienceProps> = async () => {
  const experience = fs.readFileSync('./data/experience.json', 'utf8')

  return {
    props: {
      data: JSON.parse(experience),
    },
  }
}
