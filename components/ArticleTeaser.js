import Link from 'next/link'

export default function ArticleTeaser(props) {
  return (
    <article
      className="relative duration-300 ease-bounce transform hover:scale-105 p-4 group"
      {...props}
    >
      <div className="relative z-10 grid gap-4 grid-cols-1">
        <h3 className="text-2xl font-extrabold">Artice title here</h3>
        <div className="text-mono text-gray-100 text-sm py-1 px-2 bg-gray-900 rounded-full justify-self-end">
          07.24.2020
        </div>
      </div>
      <div className="absolute -z-1 inset-0 transform -skew-x-6 -translate-x-2 translate-y-2 bg-gradient-to-br from-blue-500 to-indigo-700" />
      <div className="absolute -z-1 inset-0 transform -skew-x-6 bg-gradient-to-br from-white to-gray-100 shadow-md" />
      <Link href="/test">
        <a className="absolute inset-0 z-20" />
      </Link>
    </article>
  )
}
