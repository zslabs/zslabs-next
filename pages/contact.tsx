import * as React from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import to from 'await-to-js'
import { motion } from 'framer-motion'
import type { NextPage } from 'next'
import { useForm } from 'react-hook-form'
import axios from 'redaxios'
import { z } from 'zod'

import Alert from '~components/Alert'
import Button from '~components/Button'
import Input from '~components/Input'
import Prose from '~components/Prose'
import Section from '~components/Section'
import SectionTitle from '~components/SectionTitle'
import SEO from '~components/SEO'
import Textarea from '~components/Textarea'
import TextLink from '~components/TextLink'
import {
  fadeInAnimate,
  fadeInDownInitial,
  fadeInUpInitial,
} from '~helpers/styles'

const schema = z.object({
  _gotcha: z.string().max(0),
  name: z.string().nonempty({ message: 'Name is required' }),
  email: z
    .string()
    .nonempty({ message: 'Email is required' })
    .email({ message: 'Invalid email address' }),
  message: z.string().nonempty({ message: 'Message is required' }),
})

type FormValues = z.infer<typeof schema>

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
    resolver: zodResolver(schema),
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
          className="grid grid-cols-1 gap-4"
          name="contact"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <input type="hidden" className="sr-only" {...register('_gotcha')} />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
            <Button variation="contrast" type="submit" loading={isSubmitting}>
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
      <SEO title="Contact" />

      <Section>
        <div className="relative grid grid-cols-1 justify-center md:grid-cols-3/4">
          <motion.header initial={fadeInDownInitial} animate={fadeInAnimate}>
            <SectionTitle title="Contact" />
          </motion.header>
          <motion.main initial={fadeInUpInitial} animate={fadeInAnimate}>
            <div className="mb-8">
              <Prose>
                <p>
                  Have a project you'd like me to be part of? Let's chat! You
                  can either{' '}
                  <TextLink href="mailto:info@zslabs.com">
                    email me directly
                  </TextLink>{' '}
                  or fill out the form below.
                </p>
              </Prose>
            </div>

            <ContactForm />
          </motion.main>
        </div>
      </Section>
    </>
  )
}

export default Contact
