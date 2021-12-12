import fs from 'fs'

import * as React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { GetStaticProps, NextPage } from 'next'

import BubbleList, { BubbleListItem } from '~components/BubbleList'
import Button from '~components/Button'
import Section from '~components/Section'
import SectionTitle from '~components/SectionTitle'
import TextLink from '~components/TextLink'
import diagonalLines from '~media/diagonal-lines.svg'
import dots from '~media/dots.svg'
import { getAllPosts, Post } from '~lib/api'
import useArticlesOffCanvasState from '~hooks/useArticlesOffCanvasState'
import useLayoutAnimationState from '~hooks/useLayoutAnimationState'
import { spring } from '~helpers'
import ViewSource from '~components/ViewSource'
import { getRssXml } from '~lib/rss'

const RecentProjects: React.FC = () => {
  return (
    <div>
      <SectionTitle title="Recent projects" variation="purple" />
      <BubbleList>
        <BubbleListItem title="List" link="https://list.zslabs.com/">
          The best experience for monitoring activity on multiple eBay search
          terms.
        </BubbleListItem>
        <BubbleListItem title="Sold" link="https://sold.zslabs.com/">
          Toolkit for gauging market-prices and trends on eBay.
        </BubbleListItem>
        <BubbleListItem
          title="Saos Capital"
          link="https://www.saoscapital.com/"
        >
          Financial planning and advisory services to the stars.
        </BubbleListItem>
        <BubbleListItem title="ChaosKit" link="https://chaoskit.netlify.app/">
          A lightweight and modular front-end framework for developing fast and
          powerful interfaces within Gremlin.{' '}
          <ViewSource
            href="https://www.github.com/gremlin/chaoskit"
            variation="inline"
          />
        </BubbleListItem>
        <BubbleListItem title="Gremlin" link="https://www.gremlin.com/">
          Marketing site for Chaos.
        </BubbleListItem>
      </BubbleList>
    </div>
  )
}

interface LatestPostProps {
  latestPost: Post
}

const Home: NextPage<LatestPostProps> = ({ latestPost }) => {
  const toggle = useArticlesOffCanvasState((state) => state.toggle)

  const done = useLayoutAnimationState((state) => state.done)

  const introTitleSub = 'Full-Stack/Motion Developer'

  const introTitleVariants = {
    hidden: {
      y: '2rem',
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  const introTitleSubVariants = {
    hidden: {
      y: '1.5rem',
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  const buttonVariants = {
    hidden: {
      scale: 0.5,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
    },
  }

  const latestArticleVariants = {
    hidden: {
      scale: 0.5,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
    },
  }

  const projectsVariants = {
    hidden: {
      y: '2rem',
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  const introTitleControls = useAnimation()
  const introTitleSubControls = useAnimation()
  const buttonControls = useAnimation()
  const latestArticleControls = useAnimation()
  const projectsControls = useAnimation()

  const pageAnimation = React.useCallback(async () => {
    await introTitleControls.start('visible')

    await introTitleSubControls.start('visible')

    await buttonControls.start('visible')

    await latestArticleControls.start('visible')

    await projectsControls.start('visible')
  }, [
    introTitleControls,
    introTitleSubControls,
    buttonControls,
    latestArticleControls,
    projectsControls,
  ])

  React.useEffect(() => {
    if (done) {
      pageAnimation()
    }
  }, [done, pageAnimation])

  return (
    <>
      <Section>
        <div className="grid place-items-center gap-4">
          <div className="uppercase text-slate-500 dark:text-slate-300 font-extrabold tracking-widest md:text-lg">
            {Array.from(introTitleSub).map((character, index) => {
              const key = `${character}-${index}`

              return (
                <motion.span
                  key={key}
                  className="inline-block"
                  initial="hidden"
                  transition={{
                    ...spring,
                    delay: index * 0.025,
                  }}
                  animate={introTitleSubControls}
                  variants={introTitleSubVariants}
                >
                  {character.trim().length > 0 ? character : '\u00a0'}
                </motion.span>
              )
            })}
          </div>
          <motion.h1
            className="text-6xl md:text-7xl font-extrabold text-center"
            initial="hidden"
            variants={introTitleVariants}
            animate={introTitleControls}
            transition={spring}
          >
            Zach Schnackel
          </motion.h1>
          <div className="grid justify-items-center auto-cols-auto grid-flow-col gap-6 mt-4">
            <motion.div
              initial="hidden"
              variants={buttonVariants}
              animate={buttonControls}
              transition={spring}
            >
              <Button type="button" variation="primary" onClick={toggle}>
                Articles
              </Button>
            </motion.div>

            <motion.div
              initial="hidden"
              variants={buttonVariants}
              animate={buttonControls}
              transition={{
                ...spring,
                delay: 0.125,
              }}
            >
              <TextLink href="/experience">
                <Button as="div" variation="secondary">
                  Experience
                </Button>
              </TextLink>
            </motion.div>
          </div>
        </div>
      </Section>
      <Section
        as={motion.section}
        initial="hidden"
        variants={latestArticleVariants}
        animate={latestArticleControls}
        transition={spring}
      >
        <div className="grid grid-cols-1 justify-items-center px-4">
          <TextLink
            href={`/articles/${latestPost.frontmatter.slug}`}
            className="relative py-6 px-10 text-center hover:scale-105 ease-bounce duration-300"
          >
            <div className="absolute -top-2 -left-2 w-full h-full -skew-x-12 z-0">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-blue-500 opacity-80 rounded-lg" />
              <span
                className="absolute inset-0"
                style={{ backgroundImage: `url(${diagonalLines})` }}
              />
            </div>

            <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 -skew-x-12 shadow rounded-lg" />
            <div className="relative z-10 space-y-1">
              <div>🎉 Check out my latest article:</div>
              <div className="font-extrabold text-lg">
                {latestPost.frontmatter.title}
              </div>
            </div>
          </TextLink>
        </div>
      </Section>
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3/4 gap-8 md:gap-16 justify-center">
          <span
            className="dark:filter-invert absolute top-0 bottom-0 w-screen left-1/2 right-1/2 -mx-1/2-screen -z-1 opacity-5 bg-auto/6"
            style={{ backgroundImage: `url(${dots})` }}
          />
          <motion.div
            initial="hidden"
            variants={projectsVariants}
            animate={projectsControls}
            transition={spring}
          >
            <RecentProjects />
          </motion.div>
        </div>
      </Section>
      <ViewSource path="index.tsx" variation="fixed" />
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = await getAllPosts()

  const currentArticlesFile = fs.readFileSync('./data/articles.json', 'utf8')

  // If the stored article data file is not equal to the new query, replace
  if (JSON.stringify(allPosts) !== currentArticlesFile) {
    // Rebuild articles file
    fs.writeFile('./data/articles.json', JSON.stringify(allPosts), (err) => {
      if (err) return console.log(err) // eslint-disable-line no-console

      console.log('Global articles file updated') // eslint-disable-line no-console

      return true
    })
  }

  // Generate RSS feed
  const rss = getRssXml(allPosts)

  fs.writeFileSync('./public/rss.xml', rss)

  return {
    props: {
      latestPost: allPosts[0],
    },
  }
}
