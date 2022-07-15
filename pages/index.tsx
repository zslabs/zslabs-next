import fs from 'fs'

import * as React from 'react'

import { allPosts } from 'contentlayer/generated'
import type { AnimationControls, AnimationProps, Variants } from 'framer-motion'
import { motion, useAnimation } from 'framer-motion'
import type { GetStaticProps, NextPage } from 'next'

import BubbleList, { BubbleListItem } from '~components/BubbleList'
import Button from '~components/Button'
import Section from '~components/Section'
import SectionTitle from '~components/SectionTitle'
import TextLink from '~components/TextLink'
import useArticlesOffCanvasState from '~hooks/useArticlesOffCanvasState'
import useLayoutAnimationState from '~hooks/useLayoutAnimationState'
import { getRssXml } from '~lib/rss'
import dots from '~media/dots.svg'

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
          powerful interfaces within Gremlin.
        </BubbleListItem>
        <BubbleListItem title="Gremlin" link="https://www.gremlin.com/">
          Marketing site for Chaos.
        </BubbleListItem>
      </BubbleList>
    </div>
  )
}

interface IntroTitleSubCharacterProps {
  character: string
  index: number
  introTitleSubControls: AnimationControls
}

const IntroTitleSubCharacter: React.FC<IntroTitleSubCharacterProps> = ({
  character,
  index,
  introTitleSubControls,
}) => {
  const introTitleSubVariants: Variants = React.useMemo(
    () => ({
      hidden: {
        y: '1.5rem',
        opacity: 0,
      },
      visible: {
        y: 0,
        opacity: 1,
      },
    }),
    []
  )

  const introTitleSubTransition: AnimationProps['transition'] = React.useMemo(
    () => ({ delay: index * 0.025 }),
    [index]
  )

  return (
    <motion.span
      className="inline-block"
      initial="hidden"
      transition={introTitleSubTransition}
      animate={introTitleSubControls}
      variants={introTitleSubVariants}
    >
      {character.trim().length > 0 ? character : '\u00a0'}
    </motion.span>
  )
}

const introTitleSub = 'Full-Stack/Motion Developer'

const introTitleVariants: Variants = {
  hidden: {
    y: '2rem',
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const buttonVariants: Variants = {
  hidden: {
    scale: 0.5,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
  },
}

const buttonTransition: AnimationProps['transition'] = {
  delay: 0.125,
}

const projectsVariants: AnimationProps['variants'] = {
  hidden: {
    y: '2rem',
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const dotsStyles = { backgroundImage: `url(${dots})` }

const Home: NextPage = () => {
  const toggle = useArticlesOffCanvasState((state) => state.toggle)
  const done = useLayoutAnimationState((state) => state.done)

  const introTitleControls = useAnimation()
  const introTitleSubControls = useAnimation()
  const buttonControls = useAnimation()
  const projectsControls = useAnimation()

  const pageAnimation = React.useCallback(async () => {
    await introTitleControls.start('visible')
    await introTitleSubControls.start('visible')
    await buttonControls.start('visible')
    await projectsControls.start('visible')
  }, [
    introTitleControls,
    introTitleSubControls,
    buttonControls,
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
          <div className="text-center font-bold uppercase tracking-widest text-slate-11 md:text-lg md:tracking-widest">
            {Array.from(introTitleSub).map((character, index) => {
              const key = `${character}-${index}`

              return (
                <IntroTitleSubCharacter
                  key={key}
                  character={character}
                  index={index}
                  introTitleSubControls={introTitleSubControls}
                />
              )
            })}
          </div>
          <motion.h1
            className="text-center text-6xl font-bold md:text-7xl"
            initial="hidden"
            variants={introTitleVariants}
            animate={introTitleControls}
          >
            Zach Schnackel
          </motion.h1>
          <div className="mt-4 grid auto-cols-auto grid-flow-col justify-items-center gap-6">
            <motion.div
              initial="hidden"
              variants={buttonVariants}
              animate={buttonControls}
            >
              <Button type="button" variation="primary" onClick={toggle}>
                Articles
              </Button>
            </motion.div>

            <motion.div
              initial="hidden"
              variants={buttonVariants}
              animate={buttonControls}
              transition={buttonTransition}
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
      <Section>
        <div className="grid grid-cols-1 justify-center gap-8 md:grid-cols-3/4 md:gap-16">
          <span
            className="absolute inset-y-0 inset-x-1/2 -z-1 -mx-1/2-screen w-screen bg-auto/6 opacity-5 dark:invert"
            style={dotsStyles}
          />
          <motion.div
            initial="hidden"
            variants={projectsVariants}
            animate={projectsControls}
          >
            <RecentProjects />
          </motion.div>
        </div>
      </Section>
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const posts = allPosts.sort(
    (post1, post2) => +new Date(post2.date) - +new Date(post1.date)
  )

  const reducedPosts = posts.reduce(
    (acc, curr) =>
      acc.concat({
        title: curr.title,
        date: curr.date,
        url: curr.url,
      }),
    []
  )

  const currentArticlesFile = fs.readFileSync('./data/articles.json', 'utf8')

  // If the stored article data file is not equal to the new query, replace
  if (JSON.stringify(reducedPosts) !== currentArticlesFile) {
    // Rebuild articles file
    fs.writeFile(
      './data/articles.json',
      JSON.stringify(reducedPosts),
      (err) => {
        if (err) return console.log(err) // eslint-disable-line no-console

        console.log('Global articles file updated') // eslint-disable-line no-console

        return true
      }
    )
  }

  // Generate RSS feed
  const rss = getRssXml(reducedPosts)

  fs.writeFileSync('./public/rss.xml', rss)

  return {
    props: {},
  }
}
