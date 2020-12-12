import Section from '~components/Section'
import SectionTitle, { SectionTitleSkew } from '~components/SectionTitle'

export default function Contact() {
  return (
    <Section className="grid grid-cols-1 md:grid-cols-3/4 justify-center relative">
      <SectionTitle className="flex justify-self-center">
        <SectionTitleSkew
          className="from-green-200 to-green-700"
          style={{
            clipPath:
              'polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)',
          }}
        />
        Contact
      </SectionTitle>
      <input type="text" placeholder="hello" className="rounded" />
      <input type="checkbox" />
    </Section>
  )
}
