import Button from '~components/Button'
import Input from '~components/Input'
import Section from '~components/Section'
import SectionTitle, { SectionTitleSkew } from '~components/SectionTitle'
import Textarea from '~components/Textarea'

export default function Contact() {
  return (
    <Section className="grid grid-cols-1 md:grid-cols-3/4 justify-center relative">
      <SectionTitle className="grid place-items-center">
        <SectionTitleSkew
          className="from-green-200 to-green-700"
          style={{
            clipPath:
              'polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)',
          }}
        />
        Contact
      </SectionTitle>
      <form className="grid gap-4 grid-cols-1">
        <Input label="Name" name="name" />
        <Input label="Email" type="email" name="email" />
        <Textarea label="Message" name="message" />
        <div className="mt-4 text-center">
          <Button variation="quaternary" type="submit">
            Send message
          </Button>
        </div>
      </form>
    </Section>
  )
}
