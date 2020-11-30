import Head from 'next/head'
import Image from 'next/image'

import BubbleList, { BubbleListItem } from '~components/BubbleList'
import Button from '~components/Button'
import Code from '~components/Code'
import { ReactComponent as CodeSvg } from '~icons/code.svg'

const profileCode = `export const attributes = {
  name: 'Zach Schnackel',
  title: 'Full-stack/motion developer',
  location: 'Boone, NC',
  technologies: [
    'React',
    'Gatsby',
    'Next.Js',
    'Framer Motion'
  ]
}`

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
        <section>
          <div className="relative">
            <Code
              codeString={profileCode}
              language="javascript"
              filename="profile.js"
            />
            <div className="absolute -right-4 -bottom-4 ring-2 ring-gray-100 dark:ring-gray-900 z-10 rounded-full overflow-hidden w-16 h-16">
              <Image
                src="/me.png"
                width="64"
                height="64"
                className="object-fill"
              />
            </div>
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-3/4 justify-center">
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
              and powerful web interfaces within Gremlin.{' '}
              <a
                href="https://www.github.com/gremlin/chaoskit"
                className="inline-block ml-1 ring-2 ring-gray-300 dark:ring-gray-600 rounded-full bg-gray-300 dark:bg-gray-600 transform hover:scale-105 ease-bounce duration-300"
                target="_blank"
                rel="noopener noreferrer"
                title="View source"
              >
                <CodeSvg className="w-4 h-4" />
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
