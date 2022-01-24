import dayjs from 'dayjs'
import { motion } from 'framer-motion'
import type { GetStaticProps, GetStaticPaths } from 'next'

import MDXContent from '~components/MDXContent'
import ScrollIndicator from '~components/ScrollIndicator'
import Section from '~components/Section'
import { TitleSkew } from '~components/SectionTitle'
import SEO from '~components/SEO'
import ViewSource from '~components/ViewSource'
import { ReactComponent as InfoCircleSvg } from '~icons/info-circle.svg'
import { getAllPosts, getPostBySlug } from '~lib/api'
import type { Post as PostProps } from '~lib/api'

export default function Post({
  post: { frontmatter, content },
}: {
  post: PostProps
}): React.ReactElement {
  return (
    <Section>
      <SEO title={frontmatter.title} />

      <article>
        <ScrollIndicator position="fixed" />
        <motion.header
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: '-2rem' }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-center mb-2 md:mb-4 text-4xl md:text-5xl font-bold">
            <TitleSkew title={frontmatter.title} />
          </h1>
          <div className="uppercase text-slate-11 font-bold tracking-widest grid auto-cols-auto grid-flow-col justify-center gap-2 items-center">
            <span>{dayjs(frontmatter.date).format('MMMM D, YYYY')}</span>
            {frontmatter.dateModified && (
              <div
                title={`Last modified: ${dayjs(frontmatter.dateModified).format(
                  'MMMM D, YYYY'
                )}`}
              >
                <InfoCircleSvg className="text-2xl" />
              </div>
            )}
          </div>
        </motion.header>
        <motion.div
          initial={{ opacity: 0, y: '2rem' }}
          animate={{ opacity: 1, y: 0 }}
        >
          <MDXContent content={content} />
        </motion.div>
      </article>
      <ViewSource path="articles/[slug].tsx" />
    </Section>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPostBySlug({
    slug: params.slug.toString(),
  })

  return {
    props: {
      post,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts(false)

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.frontmatter.slug,
        },
      }
    }),
    fallback: false,
  }
}
