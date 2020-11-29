import Head from 'next/head'
import Image from 'next/image'

import Button from '~components/Button'
import Code from '~components/Code'

const exampleCode = `const test = {
  name: 'Zach Schnackel',
  title: '',
  location: 'is',
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
            <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
              Zach Schnackel
            </h1>
            <div className="grid justify-items-center auto-cols-auto grid-flow-col gap-4 mt-4">
              <Button>Articles</Button>
              <Button variation="secondary">Experience</Button>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <div className="relative">
            <Code
              codeString={exampleCode}
              language="javascript"
              filename="profile.js"
            />
            <div className="absolute -right-4 -bottom-4 ring-2 ring-gray-100 z-10 rounded-full overflow-hidden w-16 h-16">
              <Image
                src="/me.png"
                width="64"
                height="64"
                className="object-fill"
              />
            </div>
          </div>
          <div>test</div>
        </section>
      </div>
    </>
  )
}
