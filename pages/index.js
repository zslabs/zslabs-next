import Head from 'next/head'

import ArticleTeaser from '~components/ArticleTeaser'
import Code from '~components/Code'

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
        <section>
          <div className="grid place-items-center gap-4">
            <div className="uppercase text-gray-500 font-extrabold tracking-widest md:text-lg">
              Full-stack/motion developer
            </div>
            <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight">
              Zach Schnackel
            </h1>
          </div>
        </section>
        <section>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
        <section>
          <Code
            codeString={exampleCode}
            language="javascript"
            filename="profile.js"
          />
        </section>
      </div>
    </>
  )
}
