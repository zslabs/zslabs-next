import fs from 'fs'

import * as React from 'react'

import { motion } from 'framer-motion'
import type { GetStaticProps, NextPage } from 'next'

import BubbleList, { BubbleListItem } from '~components/BubbleList'
import Section from '~components/Section'
import SectionTitle from '~components/SectionTitle'
import SEO from '~components/SEO'
import ViewSource from '~components/ViewSource'
import {
  fadeInAnimate,
  fadeInDownInitial,
  fadeInUpInitial,
} from '~helpers/styles'

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
      <Section>
        <div className="relative grid grid-cols-1 justify-center md:grid-cols-3/4">
          <motion.header initial={fadeInDownInitial} animate={fadeInAnimate}>
            <SectionTitle title="Experience" variation="purple" />
          </motion.header>
          <motion.main initial={fadeInUpInitial} animate={fadeInAnimate}>
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
          </motion.main>
        </div>
      </Section>
      <ViewSource path="experience.tsx" />
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
