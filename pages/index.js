import Head from 'next/head'

import diagonalLines from '~media/diagonal-lines.svg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div className="mt-8">
        <section className="relative">
          <div className="absolute inset-0 transform -rotate-2 bg-gray-200 rounded-3xl" />
          <section className="relative z-10 bg-gradient-to-br from-blue-500 to-indigo-700 rounded-3xl">
            <div
              className="absolute inset-0 z-0"
              style={{ backgroundImage: `url(${diagonalLines})` }}
            />
            <div className="p-8 grid gap-8 md:gap-16 md:grid-cols-2 relative z-10">
              <div>
                <aside className="rounded-lg bg-gray-800 ring-4 ring-white ring-opacity-10 font-mono transform -rotate-2">
                  <header className="p-4 border-b-2 border-white border-opacity-10 grid gap-2 auto-cols-max grid-flow-col">
                    <div className="w-3 h-3 border-2 rounded-full border-red-500" />
                    <div className="w-3 h-3 border-2 rounded-full border-yellow-500" />
                    <div className="w-3 h-3 border-2 rounded-full border-green-500" />
                  </header>
                  <div className="grid grid-flow-col auto-cols-max">
                    <div className="p-4 bg-gray-900 rounded-bl-lg border-r border-white border-opacity-10 text-right text-white text-opacity-75 select-none">
                      {Array.from({ length: 10 }, (_, i) => i + 1).map(
                        (line) => (
                          <div>{line}</div>
                        )
                      )}
                    </div>
                    <div className="text-white p-4">code</div>
                  </div>
                </aside>
              </div>
              <div className="text-white text-opacity-90">
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
