import BubbleList, { BubbleListItem } from '~components/BubbleList'
import Section from '~components/Section'
import SectionTitle, { SectionTitleSkew } from '~components/SectionTitle'

export default function Experience() {
  return (
    <Section className="grid grid-cols-1 md:grid-cols-3/4 justify-center relative">
      <span className="absolute top-0 bottom-0 w-screen left-1/2 right-1/2 -mx-1/2-screen -z-1 opacity-5 bg-auto/8" />
      <SectionTitle className="flex justify-self-center">
        <SectionTitleSkew
          className="from-orange-400 to-pink-600"
          style={{ clipPath: 'polygon(0 100%, 0 0, 100% 0)' }}
        />
        Experience
      </SectionTitle>
      <BubbleList>
        <BubbleListItem title="Gremlin" sub="Senior Software Engineer">
          Helping bring chaos to the masses. Revamped their marketing platform,
          alongside creating a component-library used throughout their
          ecosystem.
        </BubbleListItem>
      </BubbleList>
    </Section>
  )
}
