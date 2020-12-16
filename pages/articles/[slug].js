import PropTypes from 'prop-types'
import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'

import { getAllPosts, getPostBySlug } from '~lib/api'
import AutoLinkHeader from '~components/AutoLinkHeader'
import TextLink from '~components/TextLink'

const Test = () => (
  <div>
    test custom <h2 className="relative no-prose">Something</h2>
  </div>
)
const components = {
  Test,
  a: (props) => <TextLink {...props} />,
  h1: (props) => <AutoLinkHeader as="h1" {...props} />,
  h2: (props) => <AutoLinkHeader as="h2" {...props} />,
  h3: (props) => <AutoLinkHeader as="h3" {...props} />,
  h4: (props) => <AutoLinkHeader as="h4" {...props} />,
  h5: (props) => <AutoLinkHeader as="h5" {...props} />,
}

export default function Post({ post }) {
  console.log(post)

  const content = hydrate(post.source, { components })

  return <div className="prose">{content}</div>
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, ['title', 'date', 'slug', 'content'])

  console.log(post)

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
