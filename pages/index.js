import Head from 'next/head'

import Code from '~components/Code'
import hexagons from '~media/hexagons.svg'

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
        <title>Create Next App</title>
      </Head>
      <div className="mt-8">
        <section className="relative">
          <div className="absolute inset-0 transform -rotate-2 bg-gradient-to-br from-blue-500 to-indigo-700 rounded-3xl" />
          <section className="relative z-10 bg-white shadow-lg rounded-3xl">
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: `url(${hexagons})`,
                backgroundSize: 'auto 6px',
              }}
            />
            <div className="p-8 grid gap-8 grid-cols-1 md:gap-16 md:grid-cols-2 relative z-10">
              <div>
                <Code
                  codeString={exampleCode}
                  wrapperClassName="transform -rotate-2"
                  language="javascript"
                />
              </div>
              <div>
                <h2 className="font-extrabold text-5xl">Hi, I'm Zach</h2>
                <p className="mt-8 md:text-lg">
                  My passions are pushing the limits of what we can build on the
                  backend and how we can experience it on the frontend.
                </p>
              </div>
            </div>
          </section>
        </section>
      </div>
    </>
  )
}
