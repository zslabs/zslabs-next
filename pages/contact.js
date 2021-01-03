import * as React from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, FormProvider } from 'react-hook-form'
import axios from 'redaxios'
import qs from 'qs'
import to from 'await-to-js'

import Button from '~components/Button'
import Input from '~components/Input'
import Section from '~components/Section'
import SectionTitle, { SectionTitleSkew } from '~components/SectionTitle'
import Textarea from '~components/Textarea'
import Alert from '~components/Alert'
import Prose from '~components/Prose'
import SEO from '~components/SEO'

const schema = yup.object().shape({
  name: yup.string().required().trim().label('Name'),
  email: yup.string().required().email().trim().label('Email'),
  message: yup.string().required().trim().label('Message'),
})

const ContactForm = (props) => {
  const methods = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
    resolver: yupResolver(schema),
  })

  const [response, setResponse] = React.useState()

  const handleSubmit = async (data) => {
    const [, success] = await to(
      axios({
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: qs.stringify(data),
        url: 'https://formspree.io/f/xoqppgwl',
      })
    )

    if (success) {
      setResponse('success')
    } else {
      setResponse('error')
    }
  }

  return (
    <>
      <SEO title="Contact" />

      {response === 'success' && (
        <Alert>Your message was sent successfully!</Alert>
      )}

      {response === 'error' && (
        <Alert variation="danger">
          There was an error sending your message. Please try again later.
        </Alert>
      )}
      {!response && (
        <FormProvider {...methods}>
          <form
            className="grid gap-4 grid-cols-1"
            name="contact"
            noValidate
            onSubmit={methods.handleSubmit(handleSubmit)}
            {...props}
          >
            <Input
              label="Name"
              name="name"
              ref={methods.register}
              required
              validationMessage={
                methods.errors?.name && methods.errors.name.message
              }
            />
            <Input
              label="Email"
              type="email"
              name="email"
              ref={methods.register}
              validationMessage={
                methods.errors?.email && methods.errors.email.message
              }
              required
            />
            <Textarea
              label="Message"
              name="message"
              ref={methods.register}
              validationMessage={
                methods.errors?.message && methods.errors.message.message
              }
              required
            />
            <div className="mt-4 text-center">
              <Button
                variation="quaternary"
                type="submit"
                loading={methods.formState.isSubmitting}
              >
                Send message
              </Button>
            </div>
          </form>
        </FormProvider>
      )}
    </>
  )
}

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
      <Prose className="text-center mb-8">
        <p>Have a project you'd like me to be part of? Let's chat!</p>
      </Prose>
      <ContactForm />
    </Section>
  )
}
