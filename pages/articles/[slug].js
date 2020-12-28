import PropTypes from 'prop-types'
import NextImage from 'next/image'
import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'
import { preToCodeBlock } from 'mdx-utils'
import { CodePen, Tweet } from 'mdx-embed'
import dayjs from 'dayjs'

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

const Image = (props) => (
  <div className="my-8">
    <NextImage {...props} />
  </div>
)

const components = {
  Alert,
  Image,
  CodePen,
  Tweet,
  TextLink,
  a: (props) => <TextLink {...props} />,
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

export default function Post({ post }) {
  const content = hydrate(post.source, { components })

  return (
    <Section>
      <article>
        <ScrollIndicator className="fixed hidden md:block top-1 left-1 w-8 h-8 text-blue-500" />
        <header className="mb-8 md:mb-12">
          <h1 className="text-center mb-2 md:mb-4 text-4xl md:text-5xl font-extrabold">
            {post.title}
          </h1>
          <div className="uppercase text-gray-500 dark:text-gray-300 font-extrabold tracking-widest grid auto-cols-auto grid-flow-col justify-center gap-2 items-center">
            <span>{dayjs(post.date).format('MMMM D, YYYY')}</span>
            {post.dateModified && (
              <div
                title={`Last modified: ${dayjs(post.dateModified).format(
                  'MMMM D, YYYY'
                )}`}
              >
                <InfoCircleSvg className="w-6 h-6" />
              </div>
            )}
          </div>
        </header>
        <Prose>{content}</Prose>
      </article>
    </Section>
  )
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'dateModified',
    'slug',
    'content',
  ])

  const mdxSource = await renderToString(post.content, { components })

  return {
    props: {
      post: {
        ...post,
        source: mdxSource,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

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
