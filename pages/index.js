import Head from 'next/head'

import ArticleTeaser from '~components/ArticleTeaser'
import Code from '~components/Code'
import Skew from '~components/Skew'
import diagonalLines from '~media/diagonal-lines.svg'

const exampleCode = `const test = {
  hello: 'there asldfkaj flk ajsfdlka jflkd sajflk asjlk dfajfs',
  this: 'is',
  a: 'nother',
  line: 'for',
  this: 'thing',
  and: 'we',
  are: 'done',
  finally: 'yay!'
}`

export default function Home() {
  return (
    <>
      <Head>
        <title>Zach Schnackel</title>
      </Head>
      <div className="space-y-16">
        <section className="relative">
          <Skew size="3xl" />
          <section className="relative z-10 bg-gradient-to-br from-blue-500 to-indigo-700 rounded-3xl">
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: `url(${diagonalLines})`,
              }}
            />
            <div className="p-8 grid gap-8 grid-cols-1 md:gap-16 md:grid-cols-2 relative z-10">
              <div className="relative">
                <Code
                  codeString={exampleCode}
                  wrapperClassName="transform -rotate-2"
                  language="javascript"
                  filename="profile.js"
                />
              </div>
              <div className="text-gray-100">
                <h2 className="font-extrabold text-6xl text-center md:text-left">
                  Hi, I'm Zach
                </h2>
                <p className="mt-8 md:text-lg">
                  My passions are pushing the limits of what we can build on the
                  backend and how we can experience it on the frontend.
                </p>
              </div>
            </div>
          </section>
        </section>
        <section>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <ArticleTeaser count={1} />
            <ArticleTeaser count={2} />
            <ArticleTeaser count={3} />
            <ArticleTeaser count={4} />
            <ArticleTeaser count={5} />
            <ArticleTeaser count={6} />
            <ArticleTeaser count={7} />
            <ArticleTeaser count={8} />
            <ArticleTeaser count={9} />
          </div>
        </section>
      </div>
    </>
  )
}
