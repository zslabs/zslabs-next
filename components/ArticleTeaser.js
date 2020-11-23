import PropTypes from 'prop-types'
import clsx from 'clsx'

import Skew from './Skew'

import { ReactComponent as Sprinkles } from '~media/sprinkles.svg'

export default function ArticleTeaser({ count }) {
  return (
    <article
      className={clsx(
        'relative duration-300 ease-bounce rounded-xl text-white p-4 bg-gradient-to-b md:bg-gradient-to-r group hover:shadow-md',
        {
          'from-indigo-500 to-indigo-600': count === 1,
          'from-indigo-600 to-indigo-700': count === 2,
          'from-indigo-700 to-indigo-800': count === 3,
          'from-indigo-800 to-indigo-900': count === 4,
          'from-indigo-900 to-blue-900': count === 5,
          'from-blue-900 to-blue-800': count === 6,
          'from-blue-800 to-blue-700': count === 7,
          'from-blue-700 to-blue-600': count === 8,
          'from-blue-600 to-blue-500': count === 9,
          'from-blue-500 to-indigo-500': count === 10,
        }
      )}
    >
      <div className="relative z-10 grid gap-4 grid-cols-1">
        <h3 className="text-2xl font-extrabold">Artice title here</h3>
        <div className="text-mono text-gray-900 text-sm py-1 px-2 bg-white rounded-full justify-self-end">
          07.24.2020
        </div>
      </div>
      <Skew hover />
      <Sprinkles className="absolute duration-300 ease-bounce top-0 left-0 w-full h-full object-cover z-0 rounded-xl" />
    </article>
  )
}

ArticleTeaser.propTypes = {
  count: PropTypes.number.isRequired,
}
