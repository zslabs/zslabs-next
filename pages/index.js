import { MenuAlt2Outline } from 'heroicons-react'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div className="p-4">hello</div>
      <div className="grid place-items-center gap-4">
        <div className="uppercase text-gray-500 font-extrabold tracking-widest md:text-lg">
          Full-stack/motion developer
        </div>
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight">
          Zach Schnackel
        </h1>
        <button
          type="button"
          className="rounded-full h-12 w-12 bg-black text-white ring-4 ring-gray-200 ring-offset-gray-500 transition duration-100 ease-in-out transform hover:scale-105"
        >
          <MenuAlt2Outline className="mx-auto text-gray-100" />
        </button>
      </div>
    </>
  )
}
