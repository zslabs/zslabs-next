import { NextSeo } from 'next-seo'

import BubbleList, { BubbleListItem } from '~components/BubbleList'
import Section from '~components/Section'
import SectionTitle, { SectionTitleSkew } from '~components/SectionTitle'

const data = [
  {
    company: 'Gremlin',
    title: 'Senior Software Engineer',
    badge: 'Sep 2018 - Current',
    blurb:
      'Helping bring chaos to the masses. Revamped their marketing platform, alongside creating a component-library used throughout their ecosystem.',
  },
  {
    company: 'Rhinogram',
    title: 'Senior UI Engineer',
    badge: 'Jan 2017 - Aug 2018',
    blurb:
      'Managed a React-powered styleguide that in-turn was integrated into the flagship application that helps both physicians and patients communicate more effectively.',
  },
  {
    company: 'DigitalOcean',
    title: 'UI Engineer',
    badge: 'Jan 2016 - Jan 2017',
    blurb:
      'Lead development efforts on creating an internal framework used to power the main website and ongoing brand initiatives. Implemented style guides for saner development workflows. Worked alongside a talented group dedicated to accessibility and performance.',
  },
  {
    company: 'BoomTown',
    title: 'UI Engineer',
    badge: 'June 2014 - Dec 2015',
    blurb:
      'Curated an entire frontend platform; by integrating a several CSS/JS components within a system that scales to multiple themes and millions of users each month. Worked with Object Oriented JS frameworks like Backbone each day.',
  },
  {
    company: 'Blue Ion',
    title: 'Developer',
    badge: 'Jan 2013 - May 2014',
    blurb:
      'Lead design, frontend and backend implementation updates across a vast array of clients and requirements. Was an integral part of client interactions and scoping project specifications.',
  },
]

export default function Experience() {
  return (
    <>
      <NextSeo
        title="Experience - Zach Schnackel"
        canonical="https://zslabs.com/experience"
        openGraph={{
          url: 'https://zslabs.com/experience',
          title: 'Experience - Zach Schnackel',
        }}
      />
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
