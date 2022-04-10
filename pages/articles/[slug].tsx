import dayjs from 'dayjs'
import { motion } from 'framer-motion'
import type { GetStaticProps, GetStaticPaths } from 'next'

import MDXContent from '~components/MDXContent'
import ScrollIndicator from '~components/ScrollIndicator'
import Section from '~components/Section'
import { TitleSkew } from '~components/SectionTitle'
import SEO from '~components/SEO'
import ViewSource from '~components/ViewSource'
import {
  fadeInAnimate,
  fadeInDownInitial,
  fadeInUpInitial,
} from '~helpers/styles'
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
          initial={fadeInDownInitial}
          animate={fadeInAnimate}
        >
          <h1 className="mb-2 text-4xl font-bold text-center md:mb-4 md:text-5xl">
            <TitleSkew title={frontmatter.title} />
          </h1>
          <div className="grid grid-flow-col auto-cols-auto gap-2 justify-center items-center font-bold tracking-widest text-slate-500 dark:text-slate-300 uppercase">
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
        <motion.div initial={fadeInUpInitial} animate={fadeInAnimate}>
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
