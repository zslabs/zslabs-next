import PropTypes from 'prop-types'
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

const Test = () => (
  <div>
    test custom <h2 className="relative no-prose">Something</h2>
  </div>
)
const components = {
  Test,
  CodePen,
  Tweet,
  a: (props) => <TextLink {...props} />,
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
          <div className="uppercase text-gray-500 dark:text-gray-300 font-extrabold tracking-widest md:text-lg text-center">
            {dayjs(post.date).format('MMMM D, YYYY')}
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
  const post = getPostBySlug(params.slug, ['title', 'date', 'slug', 'content'])

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
