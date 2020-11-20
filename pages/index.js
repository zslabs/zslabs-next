import Head from 'next/head'

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
            <div className="p-8 grid gap-8 md:gap-16 md:grid-cols-2">
              <div>hello</div>
              <div>there</div>
            </div>
          </section>
        </section>
      </div>
      <div className="p-4">hello</div>
      <div className="grid place-items-center gap-4">
        <div className="uppercase text-gray-500 font-extrabold tracking-widest md:text-lg">
          Full-stack/motion developer
        </div>
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight">
          Zach Schnackel
        </h1>
      </div>
    </>
  )
}
