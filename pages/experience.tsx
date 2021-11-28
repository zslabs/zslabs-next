import fs from 'fs'

import * as React from 'react'
import { GetStaticProps, NextPage } from 'next'

import BubbleList, { BubbleListItem } from '~components/BubbleList'
import Section from '~components/Section'
import SectionTitle from '~components/SectionTitle'
import SEO from '~components/SEO'
import ViewSource from '~components/ViewSource'

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
        <SectionTitle
          title="Experience"
          firstLetterClassName="before:to-indigo-200"
        />
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
      <ViewSource fixed path="experience.tsx" />
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
