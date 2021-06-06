import { GetStaticProps, GetStaticPaths } from 'next'
import NextImage from 'next/image'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { preToCodeBlock } from 'mdx-utils'
import { CodePen, Tweet } from 'mdx-embed'
import dayjs from 'dayjs'
import { motion } from 'framer-motion'
import clsx from 'clsx'

import { getAllPosts, getPostBySlug } from '~lib/api'
import AutoLinkHeader from '~components/AutoLinkHeader'
import TextLink from '~components/TextLink'
import Prose from '~components/Prose'
import ScrollIndicator from '~components/ScrollIndicator'
import Code from '~components/Code'
import Section from '~components/Section'
import Alert from '~components/Alert'
import Blockquote from '~components/Blockquote'
import { ReactComponent as InfoCircleSvg } from '~icons/info-circle.svg'
import { spring } from '~helpers'
import SEO from '~components/SEO'
import ViewSource from '~components/ViewSource'

interface ImageProps {
  src: string
  height: string
  width: string
}

function Image({
  className,
  src,
  height,
  width,
}: ImageProps & React.HTMLAttributes<HTMLDivElement>): React.ReactElement {
  return (
    <div className="my-8 text-center">
      <NextImage
        src={src}
        height={height}
        width={width}
        className={clsx('rounded-lg shadow-sm', className)}
      />
    </div>
  )
}

const components = {
  Alert,
  Image,
  CodePen,
  Tweet,
  TextLink,
  a: (props) => <TextLink includeIcon {...props} />,
  blockquote: (props) => <Blockquote {...props} />,
  h1: (props) => <AutoLinkHeader as="h1" {...props} />,
  h2: (props) => <AutoLinkHeader as="h2" {...props} />,
  h3: (props) => <AutoLinkHeader as="h3" {...props} />,
  h4: (props) => <AutoLinkHeader as="h4" {...props} />,
  h5: (props) => <AutoLinkHeader as="h5" {...props} />,
  pre: (preProps) => {
    const props = preToCodeBlock(preProps)
    // If there's a codeString and some props, we passed the test
    if (props) {
      return <Code {...props} wrapperClassName="my-8" />
    }
    // It's possible to have a pre without a code in it
    return <pre {...preProps} />
  },
}

interface PostProps {
  post: {
    source: MDXRemoteSerializeResult
    title: string
    date: string
    dateModified?: string
  }
}

export default function Post({
  post: { source, title, date, dateModified },
}: PostProps): React.ReactElement {
  return (
    <Section>
      <SEO title={title} />

      <article>
        <ScrollIndicator className="fixed hidden md:block top-2 left-2 w-8 h-8 text-blue-500" />
        <motion.header
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: '-2rem' }}
          animate={{ opacity: 1, y: 0 }}
          transition={spring}
        >
          <h1 className="text-center mb-2 md:mb-4 text-4xl md:text-5xl font-extrabold">
            {title}
          </h1>
          <div className="uppercase text-gray-500 dark:text-gray-300 font-extrabold tracking-widest grid auto-cols-auto grid-flow-col justify-center gap-2 items-center">
            <span>{dayjs(date).format('MMMM D, YYYY')}</span>
            {dateModified && (
              <div
                title={`Last modified: ${dayjs(dateModified).format(
                  'MMMM D, YYYY'
                )}`}
              >
                <InfoCircleSvg className="w-6 h-6" />
              </div>
            )}
          </div>
        </motion.header>
        <Prose
          as={motion.div}
          initial={{ opacity: 0, y: '2rem' }}
          animate={{ opacity: 1, y: 0 }}
          transition={spring}
        >
          <MDXRemote {...source} components={components} />
        </Prose>
      </article>
      <ViewSource fixed path="articles/[slug].tsx" />
    </Section>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getPostBySlug({
    slug: params.slug.toString(),
    fields: ['dateModified'],
    includeContent: true,
  })

  const mdxSource = await serialize(post.content)

  return {
    props: {
      post: {
        ...post,
        source: mdxSource,
      },
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts()

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
