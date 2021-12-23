import * as React from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import { useForm } from 'react-hook-form'
import to from 'await-to-js'
import axios from 'redaxios'
import { NextPage } from 'next'

import Button from '~components/Button'
import Input from '~components/Input'
import Section from '~components/Section'
import SectionTitle from '~components/SectionTitle'
import Textarea from '~components/Textarea'
import Alert from '~components/Alert'
import Prose from '~components/Prose'
import SEO from '~components/SEO'
import ViewSource from '~components/ViewSource'

const schema = yup.object({
  _gotcha: yup.string().max(0),
  name: yup.string().required().trim().label('Name'),
  email: yup.string().required().email().trim().label('Email'),
  message: yup.string().required().trim().label('Message'),
})

type FormValues = yup.InferType<typeof schema>

const ContactForm: React.FC = () => {
  const {
    formState: { errors, isSubmitting },
    register,
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: {
      _gotcha: '',
      name: '',
      email: '',
      message: '',
    },
    resolver: yupResolver(schema),
  })

  const [response, setResponse] = React.useState<string | null>()

  async function onSubmit(data: FormValues): Promise<void> {
    const [err] = await to(
      axios({
        method: 'POST',
        headers: { Accept: 'application/json' },
        data,
        url: 'https://formcarry.com/s/Tm7xt873CT',
      })
    )

    if (err) {
      setResponse('error')
    } else {
      setResponse('success')
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
        <form
          className="grid gap-4 grid-cols-1"
          name="contact"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <input type="hidden" className="sr-only" {...register('_gotcha')} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Name"
              {...register('name')}
              required
              validationMessage={errors?.name && errors.name.message}
            />
            <Input
              label="Email"
              type="email"
              {...register('email')}
              validationMessage={errors?.email && errors.email.message}
              required
            />
          </div>
          <Textarea
            label="Message"
            {...register('message')}
            validationMessage={errors?.message && errors.message.message}
            required
          />
          <div className="mt-4 text-center">
            <Button variation="tertiary" type="submit" loading={isSubmitting}>
              Send message
            </Button>
          </div>
        </form>
      )}
    </>
  )
}

const Contact: NextPage = () => {
  return (
    <>
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3/4 justify-center relative">
          <SectionTitle title="Contact" variation="red" />
          <div className="text-center mb-8">
            <Prose>
              <p>
                Have a project you'd like me to be part of? Let's chat! You can
                either <a href="mailto:info@zslabs.com">email me directly</a> or
                fill out the form below.
              </p>
            </Prose>
          </div>

          <ContactForm />
        </div>
      </Section>
      <ViewSource path="contact.tsx" />
    </>
  )
}

export default Contact
