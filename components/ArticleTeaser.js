import { ReactComponent as Sprinkles } from '~media/sprinkles.svg'

export default function ArticleTeaser() {
  return (
    <article className="relative duration-300 ease-bounce rounded-xl filter-grayscale text-white p-4 md:p-8 bg-gradient-to-br from-indigo-600 to-blue-800 overflow-hidden group hover:filter-none hover:shadow-md">
      <div className="relative z-10 grid gap-4 grid-cols-1">
        <h3 className="text-2xl font-extrabold">Artice title here</h3>
        <div className="text-mono text-gray-900 text-sm py-1 px-2 bg-white rounded-full justify-self-end">
          07.24.2020
        </div>
      </div>
      <Sprinkles className="absolute duration-300 ease-bounce top-0 left-0 h-full w-full z-0 transform group-hover:scale-110" />
    </article>
  )
}
