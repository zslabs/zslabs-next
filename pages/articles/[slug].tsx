import type { Post } from 'contentlayer/generated'
import { allPosts } from 'contentlayer/generated'
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

interface PostSingleProps {
  post: Post
}

export default function PostSingle({ post }: PostSingleProps) {
  return (
    <Section>
      <SEO title={post.title} />

      <article>
        <ScrollIndicator position="fixed" />
        <motion.header
          className="mb-8 md:mb-12"
          initial={fadeInDownInitial}
          animate={fadeInAnimate}
        >
          <h1 className="mb-2 text-4xl font-bold text-center md:mb-4 md:text-5xl">
            <TitleSkew title={post.title} />
          </h1>
          <div className="grid grid-flow-col auto-cols-auto gap-2 justify-center items-center font-bold tracking-widest text-slate-500 dark:text-slate-300 uppercase">
            <span>{dayjs(post.date).format('MMMM D, YYYY')}</span>
            {post.dateModified && (
              <div
                title={`Last modified: ${dayjs(post.dateModified).format(
                  'MMMM D, YYYY'
                )}`}
              >
                <InfoCircleSvg className="text-2xl" />
              </div>
            )}
          </div>
        </motion.header>
        <motion.div initial={fadeInUpInitial} animate={fadeInAnimate}>
          <MDXContent content={post.body} />
        </motion.div>
      </article>
      <ViewSource path="articles/[slug].tsx" />
    </Section>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const currentPost = allPosts.find(
    (post) => post._raw.flattenedPath === params.slug // eslint-disable-line no-underscore-dangle
  )

  return {
    props: {
      post: currentPost,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allPosts.map((post) => post.url)

  return {
    paths,
    fallback: false,
  }
}
