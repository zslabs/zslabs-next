import * as React from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, FormProvider } from 'react-hook-form'
import axios from 'redaxios'
import qs from 'qs'
import to from 'await-to-js'
import { NextSeo } from 'next-seo'

import Button from '~components/Button'
import Input from '~components/Input'
import Section from '~components/Section'
import SectionTitle, { SectionTitleSkew } from '~components/SectionTitle'
import Textarea from '~components/Textarea'
import Alert from '~components/Alert'

const schema = yup.object().shape({
  'bot-field': yup.string().max(0),
  name: yup.string().required().trim().label('Name'),
  email: yup.string().required().email().trim().label('Email'),
  message: yup.string().required().trim().label('Message'),
})

const ContactForm = (props) => {
  const methods = useForm({
    defaultValues: {
      'form-name': 'contact',
      'bot-field': '',
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
        url: '/',
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
      <NextSeo
        title="Contact - Zach Schnackel"
        canonical="https://zslabs.com/contact"
        openGraph={{
          url: 'https://zslabs.com/experience',
          title: 'Contact - Zach Schnackel',
        }}
      />
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
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={methods.handleSubmit(handleSubmit)}
            {...props}
          >
            <input
              type="hidden"
              name="form-name"
              value="contact"
              ref={methods.register}
            />
            <input
              type="text"
              name="bot-field"
              className="sr-only"
              autoComplete="new-password"
              ref={methods.register}
            />
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
      <ContactForm />
    </Section>
  )
}
