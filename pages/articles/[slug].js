import PropTypes from 'prop-types'
import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'

import { getAllPosts, getPostBySlug } from '~lib/api'

const Test = () => <div>test custom component</div>
const components = { Test }

export default function Post({ post }) {
  console.log(post)

  const content = hydrate(post.source, { components })

  return (
    <div className="prose">
      {content}

      <h2>Hello!!</h2>
      <h3>Hello</h3>
      <h4>Hello</h4>
      <h5>Hello</h5>
      <p>
        Lorem ipsum dolor sit <a href="#">hello</a> amet consectetur adipisicing
        elit. Quaerat, veniam unde velit accusantium quasi voluptas ipsam facere
        illum maxime? Libero illo deleniti, odit quos nisi porro numquam rem aut{' '}
        <strong>quaerat</strong>!
      </p>
      <ul>
        <li>List item 1</li>
        <li>
          List item 2 Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Et possimus vitae saepe expedita quam amet officia, delectus
          consequatur? Ipsum ea quisquam maiores officiis a, ut tempore? Alias
          reprehenderit eius culpa?
        </li>
        <li>List item 3</li>
      </ul>
      <ol>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          possimus doloremque facere natus necessitatibus voluptatem et enim
          ullam nisi, dolores cumque quisquam dignissimos quasi eveniet quia?
          Magnam accusamus assumenda recusandae.
        </li>
        <li>List item 2</li>
        <li>List item 3</li>
      </ol>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi magnam
        assumenda, et id exercitationem autem, nostrum consequuntur distinctio
        ea molestiae rerum. <code>hello</code> Iste numquam natus architecto, in
        pariatur nihil sint hic.
      </p>
      <pre>this is something</pre>
    </div>
  )
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
