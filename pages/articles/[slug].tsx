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
        <ScrollIndicator />
        <motion.header
          className="mb-8 md:mb-12"
          initial={fadeInDownInitial}
          animate={fadeInAnimate}
        >
          <h1 className="relative z-1 mb-2 text-center font-heading text-4xl font-semibold md:mb-4 md:text-5xl">
            <TitleSkew title={post.title} />
          </h1>
          <div className="grid auto-cols-auto grid-flow-col items-center justify-center gap-2 font-bold uppercase tracking-widest text-slate-11">
            <span>{dayjs(post.date).format('MMMM D, YYYY')}</span>
            {post.dateModified && (
              <div
                title={`Last modified: ${dayjs(post.dateModified).format(
                  'MMMM D, YYYY'
                )}`}
              >
                <InfoCircleSvg className="text-xl" />
              </div>
            )}
          </div>
        </motion.header>
        <motion.div initial={fadeInUpInitial} animate={fadeInAnimate}>
          <MDXContent content={post.body} />
        </motion.div>
      </article>
    </Section>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const currentPost = allPosts.find(
    (post) => post._raw.flattenedPath === params.slug
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
