import Head from 'next/head'

import BubbleList, { BubbleListItem } from '~components/BubbleList'
import Button from '~components/Button'
import SectionTitle, { SectionTitleSkew } from '~components/SectionTitle'
import { ReactComponent as CodeSvg } from '~icons/code.svg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Zach Schnackel</title>
      </Head>
      <div className="space-y-16 md:space-y-20">
        <section>
          <div className="grid place-items-center gap-4">
            <div className="uppercase text-gray-500 dark:text-gray-300 font-extrabold tracking-widest md:text-lg">
              Full-stack/motion developer
            </div>
            <h1 className="text-6xl md:text-7xl font-extrabold">
              Zach Schnackel
            </h1>
            <div className="grid justify-items-center auto-cols-auto grid-flow-col gap-4 mt-4">
              <Button>Articles</Button>
              <Button variation="secondary">Experience</Button>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-1 justify-items-center">
          <a
            href="#"
            className="relative py-6 px-12 text-center transform hover:scale-105 ease-bounce duration-300"
          >
            <div className="absolute -top-2 -left-2 w-full h-full z-0 bg-gradient-to-br from-indigo-700 via-green-400 to-blue-500 opacity-25 transform -skew-x-12" />
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-100 to-gray-200 transform -skew-x-12" />
            <div className="relative z-10 space-y-1">
              <div>🎉 Check out my latest article:</div>
              <div className="font-extrabold text-lg">
                MDX previews in Netlify CMS
              </div>
            </div>
          </a>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-3/4 justify-center">
          <SectionTitle className="flex justify-self-center">
            <SectionTitleSkew
              className="from-orange-400 to-pink-600"
              style={{ clipPath: 'polygon(0 100%, 0 0, 100% 0)' }}
            />
            Recent projects
          </SectionTitle>
          <BubbleList>
            <BubbleListItem title="List" link="https://list.zslabs.com/">
              The best eBay toolkit for gauging market-prices, trends, and
              activity on multiple search terms.
            </BubbleListItem>
            <BubbleListItem
              title="ChaosKit"
              link="https://chaoskit.netlify.app/"
            >
              A lightweight and modular front-end framework for developing fast
              and powerful interfaces within Gremlin.{' '}
              <a
                href="https://www.github.com/gremlin/chaoskit"
                className="inline-block ml-1 ring-2 ring-gray-300 dark:ring-gray-600 rounded-full bg-gray-300 dark:bg-gray-600 transform hover:scale-105 ease-bounce duration-300"
                target="_blank"
                rel="noopener noreferrer"
                title="View source"
              >
                <CodeSvg className="md:text-lg" />
              </a>
            </BubbleListItem>
            <BubbleListItem title="Gremlin" link="https://www.gremlin.com/">
              Marketing site for Chaos.
            </BubbleListItem>
            <BubbleListItem
              title="Saos Capital"
              link="https://www.saoscapital.com/"
            >
              Financial planning and advisory services to the stars.
            </BubbleListItem>
          </BubbleList>
        </section>
      </div>
    </>
  )
}
