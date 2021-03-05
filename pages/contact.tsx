import * as React from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, FormProvider } from 'react-hook-form'
import axios from 'redaxios'
import { NextPage } from 'next'

import Button from '~components/Button'
import Input from '~components/Input'
import Section from '~components/Section'
import SectionTitle, { SectionTitleSkew } from '~components/SectionTitle'
import Textarea from '~components/Textarea'
import Alert from '~components/Alert'
import Prose from '~components/Prose'
import SEO from '~components/SEO'

const schema = yup.object().shape({
  __gotcha: yup.string().max(0),
  name: yup.string().required().trim().label('Name'),
  email: yup.string().required().email().trim().label('Email'),
  message: yup.string().required().trim().label('Message'),
})

type FormValues = {
  _gotcha?: string
  name: string
  email: string
  message: string
}

const ContactForm: React.FC = () => {
  const methods = useForm<FormValues>({
    defaultValues: {
      _gotcha: '',
      name: '',
      email: '',
      message: '',
    },
    resolver: yupResolver(schema),
  })

  const [response, setResponse] = React.useState<string | null>()

  async function handleSubmit(data: FormValues): Promise<void> {
    axios({
      method: 'POST',
      headers: { Accept: 'application/json' },
      data,
      url: 'https://formcarry.com/s/Tm7xt873CT', // @NOTE TBD on what we want to do here
    })
      .then(() => {
        setResponse('success')
      })
      .catch(() => {
        setResponse('error')
      })
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
          >
            <input
              type="hidden"
              name="_gotcha"
              className="sr-only"
              ref={methods.register}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            </div>
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

const Contact: NextPage = () => {
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
        <p>
          Have a project you'd like me to be part of? Let's chat! You can either{' '}
          <a href="mailto:info@zslabs.com">email me directly</a> or fill out the
          form below.
        </p>
      </Prose>
      <ContactForm />
    </Section>
  )
}

export default Contact
