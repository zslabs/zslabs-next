import { GetStaticProps, GetStaticPaths } from 'next'
import dayjs from 'dayjs'
import { motion } from 'framer-motion'

import { getAllPosts, getPostBySlug, Post as PostProps } from '~lib/api'
import ScrollIndicator from '~components/ScrollIndicator'
import MDXContent from '~components/MDXContent'
import Section from '~components/Section'
import { ReactComponent as InfoCircleSvg } from '~icons/info-circle.svg'
import { spring } from '~helpers'
import SEO from '~components/SEO'
import ViewSource from '~components/ViewSource'
import { TitleSkew } from '~components/SectionTitle'

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
          transition={spring}
        >
          <h1 className="text-center mb-2 md:mb-4 text-4xl md:text-5xl font-extrabold">
            <TitleSkew title={frontmatter.title} />
          </h1>
          <div className="uppercase text-slate-500 dark:text-slate-300 font-extrabold tracking-widest grid auto-cols-auto grid-flow-col justify-center gap-2 items-center">
            <span>{dayjs(frontmatter.date).format('MMMM D, YYYY')}</span>
            {frontmatter.dateModified && (
              <div
                title={`Last modified: ${dayjs(frontmatter.dateModified).format(
                  'MMMM D, YYYY'
                )}`}
              >
                <InfoCircleSvg className="w-6 h-6" />
              </div>
            )}
          </div>
        </motion.header>
        <motion.div
          initial={{ opacity: 0, y: '2rem' }}
          animate={{ opacity: 1, y: 0 }}
          transition={spring}
        >
          <MDXContent content={content} />
        </motion.div>
      </article>
      <ViewSource fixed path="articles/[slug].tsx" />
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
