import Link from 'next/link'

import Skew from './Skew'

import { ReactComponent as Sprinkles } from '~media/sprinkles.svg'

export default function ArticleTeaser(props) {
  return (
    <article
      className="relative duration-300 ease-bounce rounded-xl text-white p-4 bg-gradient-to-br from-blue-500 to-indigo-700 group hover:shadow-md"
      {...props}
    >
      <div className="relative z-10 grid gap-4 grid-cols-1">
        <h3 className="text-2xl font-extrabold">Artice title here</h3>
        <div className="text-mono text-gray-900 text-sm py-1 px-2 bg-white rounded-full justify-self-end">
          07.24.2020
        </div>
      </div>
      <Skew hover />
      <Sprinkles className="absolute duration-300 ease-bounce top-0 left-0 w-full h-full object-cover z-0 rounded-xl" />
      <Link href="/test">
        <a className="absolute inset-0 z-20" />
      </Link>
    </article>
  )
}
